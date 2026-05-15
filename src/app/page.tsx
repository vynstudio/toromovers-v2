import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
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
            Bilingual crews, transparent quotes, and the same family that answers your call shows up on moving day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/quote" className="btn-primary">
              Get my free quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+16896002720" className="btn-outline">
              <Phone className="w-4 h-4" /> 689-600-2720
            </a>
          </div>
          <p className="text-sm text-graphite-light mt-6">
            Design system test page. Real homepage coming next.
          </p>
        </div>
      </section>
    </main>
  );
}
