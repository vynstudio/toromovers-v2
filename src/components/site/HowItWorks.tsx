import { ClipboardList, Calendar, Truck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Tell us about your move",
    body: "Fill out our 60-second form. We&rsquo;ll ask about your size, dates, and where you&rsquo;re going.",
  },
  {
    icon: Calendar,
    num: "02",
    title: "Get a real quote, fast",
    body: "Same-day. No surprise fees. You&rsquo;ll know the price before we ever load a box.",
  },
  {
    icon: Truck,
    num: "03",
    title: "We show up and move you",
    body: "Bilingual crew, fully insured, on-time. We treat your stuff like it&rsquo;s ours.",
  },
];

export function HowItWorks() {
  return (
    <section className="section container-page">
      <div className="max-w-2xl mb-12">
        <p className="text-sm font-semibold text-toro-red uppercase tracking-wider mb-3">
          How it works
        </p>
        <h2>Three steps. No runaround.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="relative bg-bone rounded-xl p-7 border border-rule"
          >
            <span className="absolute top-5 right-5 text-5xl font-bold text-cream-dark leading-none select-none">
              {step.num}
            </span>
            <div className="w-12 h-12 rounded-lg bg-toro-red text-cream flex items-center justify-center mb-5">
              <step.icon className="w-6 h-6" />
            </div>
            <h3 className="mb-3 text-xl">{step.title}</h3>
            <p
              className="text-graphite text-base"
              dangerouslySetInnerHTML={{ __html: step.body }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
