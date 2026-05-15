"use server";

import { quoteSchema, type QuoteFormValues } from "@/lib/schemas/quote";
import { sendLeadNotification } from "@/lib/email/lead-notification";

export type SubmitResult =
  | { ok: true; id: string }
  | {
      ok: false;
      message: string;
      errors?: Record<string, string>;
    };

function shortId(): string {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

// Accepts either FormData (from a <form action={}>) or a plain object (when
// called directly from a client component). Validates with zod, sends the
// lead email, returns the result. Never redirects — the client handles
// navigation so it can chain analytics/UI work between submit and redirect.
export async function submitQuote(
  input: FormData | Partial<QuoteFormValues>,
): Promise<SubmitResult> {
  const raw =
    input instanceof FormData
      ? {
          moveType: input.get("moveType"),
          fromZip: input.get("fromZip"),
          toZip: input.get("toZip"),
          areaDescription: input.get("areaDescription") ?? "",
          moveDate: (input.get("moveDate") ?? "") || null,
          isFlexibleDate: input.get("isFlexibleDate") === "true",
          moveSize: input.get("moveSize"),
          name: input.get("name"),
          phone: input.get("phone"),
          email: input.get("email"),
          notes: input.get("notes") ?? "",
          source: input.get("source") ?? "/quote",
        }
      : input;

  const parsed = quoteSchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".") || "form";
      if (!errors[key]) errors[key] = issue.message;
    }
    return {
      ok: false,
      message: "Please double-check the highlighted fields.",
      errors,
    };
  }

  const id = shortId();
  const result = await sendLeadNotification(parsed.data, id);
  if (!result.ok) {
    return {
      ok: false,
      message:
        "We couldn't send your request right now. Please call 689-600-2720.",
    };
  }

  return { ok: true, id };
}
