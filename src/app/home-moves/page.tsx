import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Footer } from "@/components/site/Footer";
import { FinalCta } from "@/components/site/FinalCta";

export const metadata: Metadata = {
  title: "Home Movers in Orlando, Lake Mary & Winter Park",
  description:
    "Residential home movers in Central Florida. 2, 3, and 4-bedroom house moves in Orlando, Lake Mary, and Winter Park. Bilingual crews, $85/hr.",
};

export default function HomeMovesPage() {
  return (
    <main>
      <section className="section container-page">
        <p className="text-sm font-semibold text-toro-red uppercase tracking-wider mb-4">
          Residential Moves
        </p>
        <h1 className="mb-6 max-w-3xl">
          Home Movers in Orlando, Lake Mary &amp; Winter Park
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-graphite">
          Residential house moves throughout Central Florida. 2-bedroom to 4-bedroom homes,
          bilingual crews, hourly pricing from $85.
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
          <h2 className="mb-6">House Moves Across Central Florida</h2>
          <p className="mb-4">
            Toro Movers handles residential house moves in Orlando, Lake Mary, Winter Park, and
            surrounding Central Florida areas. From compact 2-bedroom homes to larger 4-bedroom
            properties, the hourly rate stays at $85 for a 2-mover crew.
          </p>
          <p className="mb-4">
            For larger homes or homes with heavy furniture, a 3-mover crew may be recommended on
            the phone estimate. Crews come equipped with moving blankets, dollies, straps, and
            wardrobe boxes available on request.
          </p>

          <h2 className="mt-12 mb-6">Home Size &amp; Typical Move Times</h2>
          <ul className="space-y-3 mb-8 text-graphite">
            <li className="flex gap-3"><span className="text-toro-red font-semibold shrink-0">2-bedroom home:</span> 5–7 hours, typical total $425–$595</li>
            <li className="flex gap-3"><span className="text-toro-red font-semibold shrink-0">3-bedroom home:</span> 6–8 hours, typical total $510–$680</li>
            <li className="flex gap-3"><span className="text-toro-red font-semibold shrink-0">4-bedroom home:</span> 8–10+ hours, typical total $680–$850+</li>
          </ul>
          <p className="text-sm text-graphite-light">
            Final cost depends on stairs, distance, furniture volume, and crew size.
            Phone estimate confirms recommended crew and expected duration.
          </p>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}
