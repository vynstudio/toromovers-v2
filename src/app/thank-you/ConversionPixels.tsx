"use client";

import { useEffect } from "react";
import {
  env,
  hasGoogleAdsConversion,
  hasMetaPixel,
} from "@/lib/env";

// Fires the conversion events once on mount. Stays a no-op when env vars are
// missing or the tracking globals haven't loaded yet.
type Props = {
  leadId?: string;
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function ConversionPixels({ leadId }: Props) {
  useEffect(() => {
    if (hasMetaPixel() && typeof window.fbq === "function") {
      window.fbq("track", "Lead", leadId ? { content_name: leadId } : {});
    }
    if (hasGoogleAdsConversion() && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: `${env.gadsConversionId}/${env.gadsConversionLabel}`,
        transaction_id: leadId ?? undefined,
      });
    }
  }, [leadId]);

  return null;
}
