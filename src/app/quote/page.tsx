import type { Metadata } from "next";
import { QuoteForm } from "./QuoteForm";

export const metadata: Metadata = {
  title: "Get a free moving estimate",
  description:
    "Submit your move details and we'll call back with an honest estimate within the hour. Apartment, home, and commercial moves in Orlando, Lake Mary, and Winter Park.",
  robots: { index: false, follow: true },
};

export default function QuotePage() {
  return (
    <main className="section">
      <div className="container-page">
        <div className="max-w-xl mx-auto mb-10 text-center">
          <p className="text-xs font-medium text-graphite-light lowercase tracking-[0.2em] mb-3">
            free estimate
          </p>
          <h1 className="mb-4">Get your moving estimate</h1>
          <p className="text-graphite">
            Five quick questions. Toro Movers will call you back within the
            hour — no in-home visit required for most jobs.
          </p>
        </div>
        <QuoteForm source="/quote" />
      </div>
    </main>
  );
}
