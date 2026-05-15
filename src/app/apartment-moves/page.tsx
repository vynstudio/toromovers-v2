import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Footer } from "@/components/site/Footer";
import { FinalCta } from "@/components/site/FinalCta";

export const metadata: Metadata = {
  title: "Apartment Movers in Orlando, Lake Mary & Winter Park",
  description:
    "Apartment moving service in Central Florida. Studio, 1-bedroom, and 2-bedroom apartment moves in Orlando, Lake Mary, and Winter Park. Honest pricing, fully insured.",
};

export default function ApartmentMovesPage() {
  return (
    <main>
      <section className="section container-page">
        <p className="text-sm font-medium text-graphite-light lowercase tracking-[0.2em] mb-4">
          apartment moves
        </p>
        <h1 className="mb-6 max-w-3xl">
          Apartment Movers in Orlando, Lake Mary &amp; Winter Park
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-graphite">
          Studio, 1-bedroom, and 2-bedroom apartment moves throughout Central Florida.
          Family-owned, fully insured, honest pricing.
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
            Whether it&rsquo;s a studio downtown, a 1-bedroom in Lake Mary, or a 2-bedroom in
            Winter Park, the process is the same: submit your details, get an honest estimate
            by phone within the hour, and a careful crew shows up on schedule.
          </p>
          <p className="mb-4">
            Crews come equipped with moving blankets, dollies, and furniture straps. No fuel
            surcharges, stair fees, or charges added at the end of the job.
          </p>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}
