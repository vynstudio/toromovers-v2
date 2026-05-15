import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { TrustStrip } from "@/components/site/TrustStrip";
import { ReviewCard } from "@/components/site/ReviewCard";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <main>
      <section className="section container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-toro-red uppercase tracking-wider mb-4">
            Family-owned · Licensed · Insured
          </p>
          <h1 className="mb-6">
            Honest movers.<br />
            <span className="text-toro-red">Real prices.</span>
          </h1>
          <p className="text-lg mb-8 max-w-xl">
            Serving Orlando, Lake Mary, and Winter Park since day one.
            Bilingual crews, transparent quotes, and the same family that
            answers your call shows up on moving day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/quote" className="btn-primary">
              Get my free quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+16896002720" className="btn-outline">
              <Phone className="w-4 h-4" /> 689-600-2720
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="section container-page">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold text-toro-red uppercase tracking-wider mb-3">
            What clients say
          </p>
          <h2>Trusted by Central Florida families.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ReviewCard
            name="Maria G."
            city="Orlando"
            body="They showed up on time, wrapped everything carefully, and the price matched the quote exactly. No surprises."
            date="Apr 2026"
          />
          <ReviewCard
            name="James T."
            city="Lake Mary"
            body="Professional, fast, and bilingual — which mattered for my family. Best moving experience I've had in years."
            date="Mar 2026"
          />
          <ReviewCard
            name="Sofia R."
            city="Winter Park"
            body="Family-owned and it shows. They treated my apartment like it was their own. Highly recommend."
            date="Feb 2026"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
