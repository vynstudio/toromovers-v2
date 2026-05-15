import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle2 } from "lucide-react";
import { ConversionPixels } from "./ConversionPixels";

export const metadata: Metadata = {
  title: "Thanks — we'll call you back shortly",
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
          <h1 className="mb-4">Thanks — we&rsquo;ll call you back shortly.</h1>
          <p className="text-graphite mb-8">
            Toro Movers will call you back within the hour with an honest
            estimate. If you don&rsquo;t hear from us, your details are safe
            with us — feel free to call directly.
          </p>
          {leadId && (
            <p className="text-sm text-graphite-light mb-8">
              Confirmation: <span className="font-mono font-semibold text-charcoal">{leadId}</span>
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+16896002720" className="btn-primary">
              <Phone className="w-4 h-4" /> Call 689-600-2720
            </a>
            <Link href="/" className="btn-outline">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
