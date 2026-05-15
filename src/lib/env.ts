// Type-safe env access. Server-only vars resolve at runtime; NEXT_PUBLIC_* are
// inlined by Next at build time. All accessors fall back to safe values so the
// build never breaks when something is missing — runtime behavior degrades
// (logs instead of sends, scripts don't load) rather than throwing.

export const env = {
  // Server-only
  resendApiKey: process.env.RESEND_API_KEY ?? "",
  leadNotificationEmail:
    process.env.LEAD_NOTIFICATION_EMAIL ?? "dilerbizz@gmail.com",
  leadFromEmail: process.env.LEAD_FROM_EMAIL ?? "onboarding@resend.dev",

  // Public — inlined at build, available client-side
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  gadsConversionId: process.env.NEXT_PUBLIC_GADS_CONVERSION_ID ?? "",
  gadsConversionLabel: process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL ?? "",
} as const;

export function hasResend(): boolean {
  return env.resendApiKey.length > 0;
}

export function hasMetaPixel(): boolean {
  return env.metaPixelId.length > 0;
}

export function hasGoogleAnalytics(): boolean {
  return env.gaMeasurementId.length > 0;
}

export function hasGoogleAdsConversion(): boolean {
  return (
    env.gadsConversionId.length > 0 && env.gadsConversionLabel.length > 0
  );
}
