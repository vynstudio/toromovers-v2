"use client";

import { useActionState, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import {
  clientQuoteSchema,
  moveTypeValues,
  moveSizeValues,
  moveTypeLabels,
  moveSizeLabels,
  type QuoteFormInput,
  type MoveType,
  type MoveSize,
} from "@/lib/schemas/quote";
import { submitQuote, type SubmitState } from "./actions";

const TOTAL_STEPS = 5;

const todayISO = () => new Date().toISOString().slice(0, 10);
const maxDateISO = () => {
  const d = new Date();
  d.setMonth(d.getMonth() + 6);
  return d.toISOString().slice(0, 10);
};

type StepProps = {
  current: number;
  total: number;
};

function ProgressBar({ current, total }: StepProps) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => {
        const active = i <= current;
        return (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              active ? "bg-toro-red" : "bg-rule"
            }`}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}

type Props = {
  source?: string;
};

export function QuoteForm({ source = "/quote" }: Props) {
  const [step, setStep] = useState(0);
  const [state, formAction] = useActionState<SubmitState, FormData>(
    submitQuote,
    { status: "idle" },
  );
  const [isPending, startTransition] = useTransition();

  const {
    register,
    trigger,
    getValues,
    watch,
    setValue,
    formState: { errors },
  } = useForm<QuoteFormInput>({
    resolver: zodResolver(clientQuoteSchema),
    mode: "onTouched",
    defaultValues: {
      moveType: "",
      fromZip: "",
      toZip: "",
      areaDescription: "",
      moveDate: "",
      isFlexibleDate: false,
      moveSize: "",
      name: "",
      phone: "",
      email: "",
      notes: "",
      source,
    },
  });

  const moveType = watch("moveType");
  const moveSize = watch("moveSize");
  const isFlexibleDate = watch("isFlexibleDate");

  const stepFields: Array<Array<keyof QuoteFormInput>> = [
    ["moveType"],
    ["fromZip", "toZip", "areaDescription"],
    ["moveDate", "isFlexibleDate"],
    ["moveSize"],
    ["name", "phone", "email", "notes"],
  ];

  async function handleContinue() {
    const fields = stepFields[step];
    const ok = await trigger(fields);
    if (!ok) return;
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1);
    }
  }

  function handleBack() {
    if (step > 0) setStep(step - 1);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const ok = await trigger(stepFields[step]);
    if (!ok) return;

    const values = getValues();
    const formData = new FormData();
    formData.set("moveType", values.moveType);
    formData.set("fromZip", values.fromZip);
    formData.set("toZip", values.toZip);
    formData.set("areaDescription", values.areaDescription);
    formData.set("moveDate", values.isFlexibleDate ? "" : values.moveDate);
    formData.set("isFlexibleDate", String(values.isFlexibleDate));
    formData.set("moveSize", values.moveSize);
    formData.set("name", values.name);
    formData.set("phone", values.phone);
    formData.set("email", values.email);
    formData.set("notes", values.notes);
    formData.set("source", values.source);

    startTransition(() => {
      formAction(formData);
    });
  }

  const serverFieldError = (key: keyof QuoteFormInput) =>
    state.status === "error" ? state.fieldErrors?.[key] : undefined;

  const showError = (key: keyof QuoteFormInput) =>
    errors[key]?.message?.toString() ?? serverFieldError(key);

  const isLastStep = step === TOTAL_STEPS - 1;

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-xl mx-auto">
      <ProgressBar current={step} total={TOTAL_STEPS} />

      {state.status === "error" && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-lg border border-toro-red bg-toro-red-tint text-sm text-charcoal"
        >
          {state.message}
        </div>
      )}

      {/* Step 1 — Move type */}
      {step === 0 && (
        <fieldset>
          <legend className="text-2xl md:text-3xl font-semibold text-charcoal mb-2">
            What are you moving?
          </legend>
          <p className="text-graphite mb-6">
            Pick the option that fits best.
          </p>
          <div className="grid gap-3">
            {moveTypeValues.map((value) => {
              const selected = moveType === value;
              return (
                <label
                  key={value}
                  className={`flex items-center gap-3 p-5 rounded-xl border-2 cursor-pointer transition-all ${
                    selected
                      ? "border-toro-red bg-toro-red-tint"
                      : "border-rule bg-white hover:border-graphite-light"
                  }`}
                >
                  <input
                    type="radio"
                    value={value}
                    className="sr-only"
                    {...register("moveType")}
                  />
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      selected ? "border-toro-red" : "border-rule"
                    }`}
                  >
                    {selected && (
                      <span className="w-2.5 h-2.5 rounded-full bg-toro-red" />
                    )}
                  </span>
                  <span className="font-semibold text-charcoal">
                    {moveTypeLabels[value as MoveType]}
                  </span>
                </label>
              );
            })}
          </div>
          {showError("moveType") && (
            <p className="mt-3 text-sm text-toro-red">{showError("moveType")}</p>
          )}
        </fieldset>
      )}

      {/* Step 2 — Locations */}
      {step === 1 && (
        <fieldset>
          <legend className="text-2xl md:text-3xl font-semibold text-charcoal mb-2">
            Where to and from?
          </legend>
          <p className="text-graphite mb-6">
            ZIP codes are enough for the estimate.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label
                htmlFor="fromZip"
                className="block text-sm font-medium text-charcoal mb-1.5"
              >
                Moving from
              </label>
              <input
                id="fromZip"
                type="text"
                inputMode="numeric"
                maxLength={5}
                autoComplete="postal-code"
                placeholder="32801"
                className="w-full px-4 py-3 rounded-lg border border-rule bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-toro-red focus:border-toro-red"
                {...register("fromZip")}
              />
              {showError("fromZip") && (
                <p className="mt-1 text-sm text-toro-red">
                  {showError("fromZip")}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="toZip"
                className="block text-sm font-medium text-charcoal mb-1.5"
              >
                Moving to
              </label>
              <input
                id="toZip"
                type="text"
                inputMode="numeric"
                maxLength={5}
                autoComplete="postal-code"
                placeholder="32789"
                className="w-full px-4 py-3 rounded-lg border border-rule bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-toro-red focus:border-toro-red"
                {...register("toZip")}
              />
              {showError("toZip") && (
                <p className="mt-1 text-sm text-toro-red">
                  {showError("toZip")}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="areaDescription"
              className="block text-sm font-medium text-charcoal mb-1.5"
            >
              Or describe the area{" "}
              <span className="text-graphite-light font-normal">(optional)</span>
            </label>
            <input
              id="areaDescription"
              type="text"
              maxLength={200}
              placeholder="e.g. downtown Orlando to Heathrow"
              className="w-full px-4 py-3 rounded-lg border border-rule bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-toro-red focus:border-toro-red"
              {...register("areaDescription")}
            />
            {showError("areaDescription") && (
              <p className="mt-1 text-sm text-toro-red">
                {showError("areaDescription")}
              </p>
            )}
          </div>
        </fieldset>
      )}

      {/* Step 3 — Date */}
      {step === 2 && (
        <fieldset>
          <legend className="text-2xl md:text-3xl font-semibold text-charcoal mb-2">
            When are you moving?
          </legend>
          <p className="text-graphite mb-6">
            Approximate date is fine — we&rsquo;ll confirm on the phone.
          </p>
          <div>
            <label
              htmlFor="moveDate"
              className="block text-sm font-medium text-charcoal mb-1.5"
            >
              Move date
            </label>
            <input
              id="moveDate"
              type="date"
              min={todayISO()}
              max={maxDateISO()}
              disabled={isFlexibleDate}
              className="w-full px-4 py-3 rounded-lg border border-rule bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-toro-red focus:border-toro-red disabled:bg-off-white disabled:text-graphite-light"
              {...register("moveDate")}
            />
            {showError("moveDate") && !isFlexibleDate && (
              <p className="mt-1 text-sm text-toro-red">
                {showError("moveDate")}
              </p>
            )}
          </div>
          <label className="flex items-center gap-3 mt-4 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-rule text-toro-red focus:ring-toro-red"
              {...register("isFlexibleDate", {
                onChange: (e) => {
                  if (e.target.checked) setValue("moveDate", "");
                },
              })}
            />
            <span className="text-sm text-charcoal">Flexible date</span>
          </label>
        </fieldset>
      )}

      {/* Step 4 — Size */}
      {step === 3 && (
        <fieldset>
          <legend className="text-2xl md:text-3xl font-semibold text-charcoal mb-2">
            How big is the move?
          </legend>
          <p className="text-graphite mb-6">
            Pick the closest match — we&rsquo;ll refine on the phone.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {moveSizeValues.map((value) => {
              const selected = moveSize === value;
              return (
                <label
                  key={value}
                  className={`flex items-center justify-center p-5 rounded-xl border-2 cursor-pointer transition-all text-center ${
                    selected
                      ? "border-toro-red bg-toro-red-tint"
                      : "border-rule bg-white hover:border-graphite-light"
                  }`}
                >
                  <input
                    type="radio"
                    value={value}
                    className="sr-only"
                    {...register("moveSize")}
                  />
                  <span className="font-semibold text-charcoal text-sm">
                    {moveSizeLabels[value as MoveSize]}
                  </span>
                </label>
              );
            })}
          </div>
          {showError("moveSize") && (
            <p className="mt-3 text-sm text-toro-red">{showError("moveSize")}</p>
          )}
        </fieldset>
      )}

      {/* Step 5 — Contact info */}
      {step === 4 && (
        <fieldset>
          <legend className="text-2xl md:text-3xl font-semibold text-charcoal mb-2">
            Where do we call you back?
          </legend>
          <p className="text-graphite mb-6">
            We&rsquo;ll text or call within the hour with your estimate.
          </p>
          <div className="grid gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-charcoal mb-1.5"
              >
                Full name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Maria García"
                className="w-full px-4 py-3 rounded-lg border border-rule bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-toro-red focus:border-toro-red"
                {...register("name")}
              />
              {showError("name") && (
                <p className="mt-1 text-sm text-toro-red">
                  {showError("name")}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-charcoal mb-1.5"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="(689) 600-2720"
                className="w-full px-4 py-3 rounded-lg border border-rule bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-toro-red focus:border-toro-red"
                {...register("phone")}
              />
              {showError("phone") && (
                <p className="mt-1 text-sm text-toro-red">
                  {showError("phone")}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-charcoal mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@email.com"
                className="w-full px-4 py-3 rounded-lg border border-rule bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-toro-red focus:border-toro-red"
                {...register("email")}
              />
              {showError("email") && (
                <p className="mt-1 text-sm text-toro-red">
                  {showError("email")}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="notes"
                className="block text-sm font-medium text-charcoal mb-1.5"
              >
                Notes{" "}
                <span className="text-graphite-light font-normal">
                  (optional)
                </span>
              </label>
              <textarea
                id="notes"
                rows={3}
                maxLength={500}
                placeholder="Stairs, elevator, special items?"
                className="w-full px-4 py-3 rounded-lg border border-rule bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-toro-red focus:border-toro-red resize-y"
                {...register("notes")}
              />
              {showError("notes") && (
                <p className="mt-1 text-sm text-toro-red">
                  {showError("notes")}
                </p>
              )}
            </div>
          </div>
        </fieldset>
      )}

      <div className="flex gap-3 mt-10">
        <button
          type="button"
          onClick={handleBack}
          disabled={step === 0 || isPending}
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-[10px] font-semibold text-base text-charcoal border-2 border-charcoal hover:bg-charcoal hover:text-white active:scale-[0.98] transition-all duration-150 min-h-[52px] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-charcoal disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        {isLastStep ? (
          <button
            type="submit"
            disabled={isPending}
            className="flex-1 btn-primary disabled:opacity-60 disabled:cursor-wait"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Sending…
              </>
            ) : (
              <>Submit</>
            )}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleContinue}
            className="flex-1 btn-primary"
          >
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </form>
  );
}
