"use server";

import { redirect } from "next/navigation";
import { quoteSchema } from "@/lib/schemas/quote";
import { sendLeadNotification } from "@/lib/email/lead-notification";

export type SubmitState =
  | { status: "idle" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

function shortId(): string {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

export async function submitQuote(
  _prev: SubmitState,
  formData: FormData,
): Promise<SubmitState> {
  const raw = {
    moveType: formData.get("moveType"),
    fromZip: formData.get("fromZip"),
    toZip: formData.get("toZip"),
    areaDescription: formData.get("areaDescription") ?? "",
    moveDate: (formData.get("moveDate") ?? "") || null,
    isFlexibleDate: formData.get("isFlexibleDate") === "true",
    moveSize: formData.get("moveSize"),
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    notes: formData.get("notes") ?? "",
    source: formData.get("source") ?? "/quote",
  };

  const parsed = quoteSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".") || "form";
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Please double-check the highlighted fields.",
      fieldErrors,
    };
  }

  const leadId = shortId();
  const result = await sendLeadNotification(parsed.data, leadId);

  if (!result.ok) {
    return {
      status: "error",
      message:
        "We couldn't send your request right now. Please call 689-600-2720.",
    };
  }

  redirect(`/thank-you?id=${leadId}`);
}
