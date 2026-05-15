import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Footer } from "@/components/site/Footer";
import { FinalCta } from "@/components/site/FinalCta";

export const metadata: Metadata = {
  title: "Commercial & Office Movers in Orlando, Lake Mary & Winter Park",
  description:
    "Commercial and office movers in Central Florida. Office, retail, and small business relocations in Orlando, Lake Mary, and Winter Park. Bilingual crews, $85/hr.",
};

export default function CommercialMovesPage() {
  return (
    <main>
      <section className="section container-page">
        <p className="text-sm font-semibold text-toro-red uppercase tracking-wider mb-4">
          Commercial Moves
        </p>
        <h1 className="mb-6 max-w-3xl">
          Commercial &amp; Office Movers in Central Florida
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-graphite">
          Office, retail, and small business moves in Orlando, Lake Mary, and Winter Park.
          After-hours and weekend availability to minimize business disruption.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mb-12">
          <Link href="/quote" className="btn-primary">
            Get my free estimate <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="tel:+16896002720" className="btn-outline">
            <Phone className="w-4 h-4" /> 689-600-2720
          </a>
        </div>
      </section>

      <TrustStrip />

      <section className="section container-page">
        <div className="max-w-3xl">
          <h2 className="mb-6">Office &amp; Commercial Relocations</h2>
          <p className="mb-4">
            Toro Movers handles office, retail, and small business relocations throughout Central
            Florida. Standard hourly pricing applies: $85/hour for a 2-mover crew, with larger
            crews available on request for bigger relocations.
          </p>
          <p className="mb-4">
            For business moves, after-hours and weekend scheduling is often preferred to minimize
            operational disruption. Coordinate scheduling on the phone estimate.
          </p>

          <h2 className="mt-12 mb-6">Common Commercial Moves Handled</h2>
          <ul className="space-y-2 mb-8 text-graphite">
            <li>· Office relocations (single-suite to multi-floor)</li>
            <li>· Retail store moves and fit-outs</li>
            <li>· Small warehouse and equipment transfers</li>
            <li>· Coworking and shared-office moves</li>
            <li>· Server room and IT equipment relocations</li>
          </ul>
          <p className="text-sm text-graphite-light">
            Phone estimate confirms crew size, schedule, and any specialty equipment needed.
          </p>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}
