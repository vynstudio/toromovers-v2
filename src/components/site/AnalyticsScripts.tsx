import Script from "next/script";
import {
  env,
  hasGoogleAnalytics,
  hasGoogleAdsConversion,
  hasMetaPixel,
} from "@/lib/env";

// Loaded site-wide from layout.tsx. Each script block only renders when its
// env var is set, so missing keys produce no output (and no console errors).
export function AnalyticsScripts() {
  const gaId = env.gaMeasurementId;
  const gadsId = env.gadsConversionId;
  const pixelId = env.metaPixelId;
  const useGtag = hasGoogleAnalytics() || hasGoogleAdsConversion();
  const gtagLoaderId = gaId || gadsId;

  return (
    <>
      {useGtag && gtagLoaderId && (
        <>
          <Script
            id="gtag-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagLoaderId}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${gaId ? `gtag('config', '${gaId}');` : ""}
              ${gadsId ? `gtag('config', '${gadsId}');` : ""}
            `}
          </Script>
        </>
      )}

      {hasMetaPixel() && pixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
