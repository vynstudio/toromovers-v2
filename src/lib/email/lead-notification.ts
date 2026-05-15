import { Resend } from "resend";
import { env, hasResend } from "@/lib/env";
import {
  moveSizeLabels,
  moveTypeLabels,
  type QuoteFormValues,
} from "@/lib/schemas/quote";

type SendResult =
  | { ok: true; mode: "sent" | "logged"; id?: string }
  | { ok: false; error: string };

function formatPhone(p: string): string {
  if (p.length !== 10) return p;
  return `(${p.slice(0, 3)}) ${p.slice(3, 6)}-${p.slice(6)}`;
}

function buildSubject(data: QuoteFormValues): string {
  const size = moveSizeLabels[data.moveSize];
  return `🟢 New Toro quote — ${data.name}, ${size} from ${data.fromZip} → ${data.toZip}`;
}

function buildHtmlBody(data: QuoteFormValues, leadId: string): string {
  const row = (emoji: string, label: string, value: string) =>
    `<tr>
      <td style="padding:10px 14px;border-bottom:1px solid #E5E5E5;font-size:14px;color:#525252;width:180px;vertical-align:top;">
        ${emoji} ${label}
      </td>
      <td style="padding:10px 14px;border-bottom:1px solid #E5E5E5;font-size:14px;color:#121316;font-weight:500;">
        ${value || "—"}
      </td>
    </tr>`;

  const dateValue = data.isFlexibleDate
    ? "Flexible"
    : data.moveDate || "Not provided";

  return `<!doctype html>
<html>
<body style="margin:0;padding:24px;background:#FAFAFA;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;background:#FFFFFF;border:1px solid #E5E5E5;border-radius:12px;overflow:hidden;">
    <div style="padding:20px 24px;background:#121316;color:#FFFFFF;">
      <p style="margin:0;font-size:12px;letter-spacing:0.15em;text-transform:uppercase;color:#E8A317;">Toro Movers · new lead</p>
      <h1 style="margin:6px 0 0;font-size:20px;font-weight:600;">${data.name}</h1>
    </div>
    <table style="width:100%;border-collapse:collapse;">
      ${row("👤", "Name", data.name)}
      ${row("📞", "Phone", formatPhone(data.phone))}
      ${row("📧", "Email", data.email)}
      ${row("🏠", "Move type", moveTypeLabels[data.moveType])}
      ${row("📦", "Size", moveSizeLabels[data.moveSize])}
      ${row("📍", "From ZIP", data.fromZip)}
      ${row("📍", "To ZIP", data.toZip)}
      ${row("🗒️", "Area notes", data.areaDescription || "")}
      ${row("📅", "Move date", dateValue)}
      ${row("📝", "Notes", data.notes || "")}
      ${row("🔗", "Source", data.source)}
      ${row("🆔", "Lead ID", leadId)}
    </table>
    <div style="padding:16px 24px;background:#FAFAFA;border-top:1px solid #E5E5E5;font-size:12px;color:#6B6B6B;">
      Reply to this email to reach ${data.name} directly — or call ${formatPhone(data.phone)}.
    </div>
  </div>
</body>
</html>`;
}

export async function sendLeadNotification(
  data: QuoteFormValues,
  leadId: string,
): Promise<SendResult> {
  if (!hasResend()) {
    console.warn(
      "[lead-notification] RESEND_API_KEY not set — lead would have been sent:",
      { id: leadId, name: data.name, phone: data.phone, email: data.email },
    );
    return { ok: true, mode: "logged" };
  }

  try {
    const resend = new Resend(env.resendApiKey);
    const { data: result, error } = await resend.emails.send({
      from: env.leadFromEmail,
      to: env.leadNotificationEmail,
      replyTo: data.email,
      subject: buildSubject(data),
      html: buildHtmlBody(data, leadId),
    });

    if (error) {
      console.error("[lead-notification] Resend error:", error);
      return { ok: false, error: error.message ?? "Email send failed" };
    }
    return { ok: true, mode: "sent", id: result?.id };
  } catch (err) {
    console.error("[lead-notification] Send threw:", err);
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}
