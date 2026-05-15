// Type-safe env access. Server-only vars resolve at runtime; NEXT_PUBLIC_* are
// inlined by Next at build time. Each accessor falls back to a safe value so
// the build never breaks when something is missing — runtime behavior degrades
// (logs instead of sends, scripts don't load) rather than throwing.
//
// "PLACEHOLDER" is treated as missing because that's the value seeded in
// .env.example / Vercel project setup until real keys are pasted in.

const isSet = (v: string | undefined): v is string =>
  typeof v === "string" && v.length > 0 && v !== "PLACEHOLDER";

export const env = {
  resendApiKey: process.env.RESEND_API_KEY ?? "",
  leadNotificationEmail:
    process.env.LEAD_NOTIFICATION_EMAIL ?? "dilerbizz@gmail.com",
  leadFromEmail: process.env.LEAD_FROM_EMAIL ?? "onboarding@resend.dev",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  gadsConversionId: process.env.NEXT_PUBLIC_GADS_CONVERSION_ID ?? "",
  gadsConversionLabel: process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL ?? "",
} as const;

export function hasResend(): boolean {
  return isSet(env.resendApiKey);
}

export function hasMetaPixel(): boolean {
  return isSet(env.metaPixelId);
}

export function hasGoogleAnalytics(): boolean {
  return isSet(env.gaMeasurementId);
}

export function hasGoogleAdsConversion(): boolean {
  return isSet(env.gadsConversionId) && isSet(env.gadsConversionLabel);
}
