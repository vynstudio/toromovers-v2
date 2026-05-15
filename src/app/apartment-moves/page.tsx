import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Footer } from "@/components/site/Footer";
import { FinalCta } from "@/components/site/FinalCta";

export const metadata: Metadata = {
  title: "Apartment Movers in Orlando, Lake Mary & Winter Park",
  description:
    "Affordable apartment movers in Central Florida. Studio, 1-bedroom, and 2-bedroom apartment moves in Orlando, Lake Mary, and Winter Park. From $85/hr.",
};

export default function ApartmentMovesPage() {
  return (
    <main>
      <section className="section container-page">
        <p className="text-sm font-semibold text-toro-red uppercase tracking-wider mb-4">
          Apartment Moves
        </p>
        <h1 className="mb-6 max-w-3xl">
          Apartment Movers in Orlando, Lake Mary &amp; Winter Park
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-graphite">
          Studio, 1-bedroom, and 2-bedroom apartment moves throughout Central Florida.
          Bilingual crews, hourly pricing from $85, no surprise fees.
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
          <h2 className="mb-6">Apartment Moves in Central Florida</h2>
          <p className="mb-4">
            Toro Movers handles apartment moves throughout Orlando, Lake Mary, and Winter Park.
            Whether it&rsquo;s a studio in downtown Orlando, a 1-bedroom in Lake Mary, or a 2-bedroom in
            Winter Park, the rate is the same: $85/hour for a 2-mover crew, 2-hour minimum.
          </p>
          <p className="mb-4">
            Most apartment moves finish in 3 to 5 hours. Crews bring blankets, dollies, and straps
            for furniture protection. Communication and service available in English or Spanish.
          </p>

          <h2 className="mt-12 mb-6">Apartment Sizes &amp; Typical Move Times</h2>
          <ul className="space-y-3 mb-8 text-graphite">
            <li className="flex gap-3"><span className="text-toro-red font-semibold shrink-0">Studio:</span> 2–3 hours, typical total $170–$255</li>
            <li className="flex gap-3"><span className="text-toro-red font-semibold shrink-0">1-bedroom:</span> 3–4 hours, typical total $255–$340</li>
            <li className="flex gap-3"><span className="text-toro-red font-semibold shrink-0">2-bedroom:</span> 4–6 hours, typical total $340–$510</li>
          </ul>
          <p className="text-sm text-graphite-light">
            Final cost depends on stairs, distance, and how prepared the apartment is when the crew arrives.
            Phone estimate confirms the expected duration.
          </p>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}
