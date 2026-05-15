import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-toro-red blur-3xl" />
      </div>
      <div className="container-page relative pt-10 pb-16 md:pt-20 md:pb-28">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream-dark border border-rule mb-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs font-semibold text-charcoal">
                Rated 4.9 by Central Florida families
              </span>
            </div>

            <h1 className="mb-6">
              Moving day,<br />
              <span className="text-toro-red">without the headache.</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 max-w-xl text-graphite">
              Honest pricing. Bilingual crews. Family-owned movers serving
              Orlando, Lake Mary, and Winter Park. Get your free quote in under
              60 seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link href="/quote" className="btn-primary">
                Get my free quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+16896002720" className="btn-outline">
                <Phone className="w-4 h-4" /> 689-600-2720
              </a>
            </div>

            <p className="text-sm text-graphite-light">
              No deposit required · No surprise fees · Same-day quotes
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-br from-charcoal to-charcoal-light overflow-hidden shadow-elevated">
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-cream">
                <div className="bg-cream/10 backdrop-blur-md rounded-xl p-5 border border-cream/20">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-3">
                    &ldquo;Showed up on time, finished early, and the bill matched the quote to the dollar. First mover I&rsquo;ve trusted in years.&rdquo;
                  </p>
                  <p className="text-xs text-cream/70 font-medium">
                    — Maria G., Orlando · 2BR move
                  </p>
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-toro-red text-cream text-xs font-bold px-3 py-1.5 rounded-full">
                4.9 ★ Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
