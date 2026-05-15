import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Footer } from "@/components/site/Footer";
import { FinalCta } from "@/components/site/FinalCta";

export const metadata: Metadata = {
  title: "Home Movers in Orlando, Lake Mary & Winter Park",
  description:
    "Residential moving service in Central Florida. 2, 3, and 4-bedroom house moves in Orlando, Lake Mary, and Winter Park. Family-owned, fully insured.",
};

export default function HomeMovesPage() {
  return (
    <main>
      <section className="section container-page">
        <p className="text-sm font-medium text-graphite-light lowercase tracking-[0.2em] mb-4">
          residential moves
        </p>
        <h1 className="mb-6 max-w-3xl">
          Home Movers in Orlando, Lake Mary &amp; Winter Park
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-graphite">
          Residential house moves throughout Central Florida. 2-bedroom to 4-bedroom homes,
          family-owned, fully insured.
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
            properties, the process is consistent: phone estimate, scheduled crew, no surprises
            at completion.
          </p>
          <p className="mb-4">
            For larger homes or homes with heavy furniture, a larger crew may be recommended on
            the phone estimate. Crews come equipped with moving blankets, dollies, straps, and
            wardrobe boxes available on request.
          </p>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}
