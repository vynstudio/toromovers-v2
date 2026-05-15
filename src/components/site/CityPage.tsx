import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, Phone, Star } from "lucide-react";
import { TrustStrip } from "@/components/site/TrustStrip";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { CityLocalBusinessSchema } from "@/components/site/CityLocalBusinessSchema";
import { otherCities, type CityData } from "@/lib/cities";

export function CityPage({ city }: { city: CityData }) {
  const others = otherCities(city.slug);

  return (
    <>
      <CityLocalBusinessSchema city={city} />
      <main>
        {/* Hero */}
        <section className="relative bg-white overflow-hidden">
          <div className="container-page relative pt-16 pb-20 md:pt-28 md:pb-32">
            <div className="max-w-3xl">
              <p className="text-xs font-medium text-graphite-light lowercase tracking-[0.25em] mb-6">
                {city.name.toLowerCase()}
              </p>
              <h1 className="mb-8">{city.h1}</h1>
              <p className="text-lg md:text-2xl mb-10 max-w-2xl text-graphite leading-relaxed">
                {city.subline}
              </p>

              <div className="mb-8">
                <Link href="/quote" className="btn-primary">
                  Get my free estimate <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-graphite-light">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <span>4.9 on Google · 30+ reviews</span>
                <span className="text-rule">·</span>
                <a
                  href="tel:+16896002720"
                  className="font-semibold text-charcoal hover:text-toro-red transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
                  689-600-2720
                </a>
              </div>
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* About moving in [city] */}
        <section className="section container-page">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24">
            <div>
              <p className="text-xs font-medium text-graphite-light lowercase tracking-[0.25em] mb-6">
                about
              </p>
              <h2>{city.about.h2}</h2>
            </div>
            <div className="lg:pt-4">
              <p className="text-lg md:text-xl text-graphite leading-relaxed">
                {city.about.lead}
              </p>
            </div>
          </div>
        </section>

        {/* Neighborhoods grid */}
        <section className="section bg-off-white">
          <div className="container-page">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 mb-16 md:mb-20">
              <div>
                <p className="text-xs font-medium text-graphite-light lowercase tracking-[0.25em] mb-6">
                  neighborhoods served
                </p>
                <h2>{city.name} areas we cover.</h2>
              </div>
              <div className="lg:pt-4">
                <p className="text-lg md:text-xl text-graphite leading-relaxed">
                  We work {city.name} full-time. These are the neighborhoods our crews
                  know by name — buildings, streets, parking patterns, the works.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-rule">
              {city.neighborhoods.map((hood) => (
                <div
                  key={hood}
                  className="bg-off-white px-5 py-6 md:px-6 md:py-7 flex items-center gap-3"
                >
                  <MapPin className="w-4 h-4 text-toro-red shrink-0" />
                  <span className="text-sm md:text-base font-medium text-charcoal">
                    {hood}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unique angle */}
        <section className="section bg-charcoal text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(200, 16, 46, 0.15), transparent), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(232, 163, 23, 0.08), transparent)",
            }}
            aria-hidden="true"
          />
          <div className="container-page relative">
            <div className="max-w-3xl">
              <p className="text-xs font-medium text-white/50 lowercase tracking-[0.25em] mb-6">
                {city.uniqueAngle.eyebrow}
              </p>
              <h2 className="text-white mb-8">{city.uniqueAngle.h2}</h2>
              <p className="text-lg md:text-2xl text-white/80 leading-relaxed">
                {city.uniqueAngle.body}
              </p>
            </div>
          </div>
        </section>

        {/* Other cities we serve */}
        <section className="section container-page">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 mb-16 md:mb-20">
            <div>
              <p className="text-xs font-medium text-graphite-light lowercase tracking-[0.25em] mb-6">
                service areas
              </p>
              <h2>Also serving nearby cities.</h2>
            </div>
            <div className="lg:pt-4">
              <p className="text-lg md:text-xl text-graphite leading-relaxed">
                Toro Movers works the same neighborhoods, the same process, across
                Central Florida.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={other.href}
                className="group bg-white hover:bg-off-white p-8 md:p-10 transition-colors"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs font-mono text-graphite-light tracking-wider">
                    {other.href}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-graphite-light group-hover:text-toro-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-charcoal text-3xl md:text-4xl mb-3">
                  {other.name}
                </h3>
                <p className="text-graphite text-base leading-relaxed">
                  Movers serving {other.name} and surrounding areas in Central Florida.
                </p>
              </Link>
            ))}
          </div>
        </section>

        <FinalCta />
        <Footer />
      </main>
    </>
  );
}
