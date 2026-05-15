import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle2, Clock } from "lucide-react";
import { ConversionPixels } from "./ConversionPixels";

export const metadata: Metadata = {
  title: "Thanks — we'll call you within the hour",
  description:
    "Your moving estimate request was received. Toro Movers will call you back within the hour.",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{ id?: string }>;
};

export default async function ThankYouPage({ searchParams }: Props) {
  const params = await searchParams;
  const leadId = params.id;

  return (
    <main className="section">
      <ConversionPixels leadId={leadId} />
      <div className="container-page">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-toro-red-tint flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-toro-red" />
          </div>
          <p className="text-xs font-medium text-graphite-light lowercase tracking-[0.2em] mb-3">
            request received
          </p>
          <h1 className="mb-4">Thanks — we&rsquo;ll call you within the hour.</h1>
          <p className="text-graphite mb-10">
            We&rsquo;ve received your request and a member of the Toro Movers
            team will reach out shortly with an estimate.
          </p>

          <div className="bg-off-white border border-rule rounded-2xl p-6 md:p-8 mb-10 text-left">
            <div className="flex items-start gap-3 mb-4">
              <Phone className="w-5 h-5 text-toro-red shrink-0 mt-0.5" />
              <p className="text-sm text-charcoal leading-relaxed">
                Expect a call from{" "}
                <span className="font-semibold">689-600-2720</span> within the
                hour during business hours (Mon–Sat, 7am–7pm).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-toro-red shrink-0 mt-0.5" />
              <p className="text-sm text-charcoal leading-relaxed">
                If you&rsquo;d rather call us, dial{" "}
                <a
                  href="tel:+16896002720"
                  className="font-semibold text-toro-red hover:text-toro-red-dark"
                >
                  689-600-2720
                </a>{" "}
                now.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a href="tel:+16896002720" className="btn-primary">
              <Phone className="w-4 h-4" /> Call 689-600-2720
            </a>
            <Link href="/" className="btn-outline">
              Back to home
            </Link>
          </div>

          {leadId && (
            <p className="text-xs text-graphite-light">
              Reference:{" "}
              <span className="font-mono font-semibold text-charcoal">
                {leadId}
              </span>
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
