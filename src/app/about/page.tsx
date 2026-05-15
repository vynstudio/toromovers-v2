import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, MapPin, Shield, Users, Clock } from "lucide-react";
import { TrustStrip } from "@/components/site/TrustStrip";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "About Toro Movers — Family-Owned Movers in Central Florida",
  description:
    "Toro Movers is a family-owned moving company serving Orlando, Lake Mary, and Winter Park. Fully insured, focused on Central Florida residential and commercial moves.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Toro Movers",
    description:
      "Family-owned moving company serving Orlando, Lake Mary, and Winter Park, Florida.",
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="section container-page">
        <div className="max-w-3xl">
          <p className="text-xs font-medium text-graphite-light lowercase tracking-[0.25em] mb-6">
            about toro movers
          </p>
          <h1 className="mb-8">
            A focused moving company<br />
            <span className="text-toro-red">built for Central Florida.</span>
          </h1>
          <p className="text-lg md:text-2xl text-graphite leading-relaxed max-w-2xl">
            Toro Movers is a family-owned moving company serving Orlando, Lake
            Mary, and Winter Park. Residential, apartment, and commercial moves —
            handled by a small team that treats every job like the only one.
          </p>
        </div>
      </section>

      <TrustStrip />

      {/* WHO WE ARE */}
      <section className="section container-page">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-medium text-graphite-light lowercase tracking-[0.25em] mb-6">
              who we are
            </p>
            <h2>A small, focused moving company.</h2>
          </div>
          <div className="grid gap-10">
            <p className="text-lg text-graphite leading-relaxed">
              Toro Movers operates as a small, family-owned company in Central
              Florida. We&rsquo;re not a national franchise, a broker, or a
              middleman — we run the company, schedule the crews, and stand
              behind every job ourselves.
            </p>
            <p className="text-lg text-graphite leading-relaxed">
              Most moving companies grow by chasing volume across multiple
              markets. We stay focused on three cities so the crews know the
              buildings, the property managers, the traffic patterns, and the
              parking rules. Local knowledge is the difference between a 4-hour
              move and a 6-hour one.
            </p>
          </div>
        </div>
      </section>

      {/* WHERE WE WORK */}
      <section className="section bg-charcoal text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(200, 16, 46, 0.15), transparent), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(232, 163, 23, 0.08), transparent)",
          }}
          aria-hidden="true"
        />
        <div className="container-page relative">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 mb-16">
            <div>
              <p className="text-xs font-medium text-white/50 lowercase tracking-[0.25em] mb-6">
                where we work
              </p>
              <h2 className="text-white">
                Central Florida only.<br />
                On purpose.
              </h2>
            </div>
            <div className="lg:pt-4">
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                Toro Movers operates exclusively within Orlando, Lake Mary,
                Winter Park, and surrounding Central Florida communities.
                Concentrated coverage keeps quotes accurate, crews available,
                and routes predictable.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/15">
            <Link
              href="/movers-orlando"
              className="group bg-charcoal hover:bg-charcoal-light p-8 transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <MapPin className="w-5 h-5 text-toro-red" />
                <span className="text-xs font-mono text-white/40 tracking-wider">
                  /movers-orlando
                </span>
              </div>
              <h3 className="text-white text-2xl mb-3">Orlando</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Downtown, Lake Nona, Dr. Phillips, MetroWest, Baldwin Park, and the
                surrounding Orange County area.
              </p>
            </Link>
            <Link
              href="/movers-lake-mary"
              className="group bg-charcoal hover:bg-charcoal-light p-8 transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <MapPin className="w-5 h-5 text-toro-red" />
                <span className="text-xs font-mono text-white/40 tracking-wider">
                  /movers-lake-mary
                </span>
              </div>
              <h3 className="text-white text-2xl mb-3">Lake Mary</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Heathrow, Markham Woods, Timacuan, and surrounding Seminole County
                neighborhoods.
              </p>
            </Link>
            <Link
              href="/movers-winter-park"
              className="group bg-charcoal hover:bg-charcoal-light p-8 transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <MapPin className="w-5 h-5 text-toro-red" />
                <span className="text-xs font-mono text-white/40 tracking-wider">
                  /movers-winter-park
                </span>
              </div>
              <h3 className="text-white text-2xl mb-3">Winter Park</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Park Avenue, Aloma, historic homes, and surrounding luxury
                residential areas.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* INSURANCE & CREDENTIALS */}
      <section className="section container-page">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-medium text-graphite-light lowercase tracking-[0.25em] mb-6">
              insurance &amp; credentials
            </p>
            <h2>Fully insured, on every job.</h2>
          </div>
          <div className="grid gap-8">
            <div className="border-t border-rule pt-8">
              <Shield className="w-7 h-7 text-toro-red mb-5" strokeWidth={1.5} />
              <h3 className="mb-3">Commercial liability coverage</h3>
              <p className="text-graphite leading-relaxed">
                Toro Movers carries a commercial general liability policy that
                covers damage to your property — your apartment, your new home,
                or the building during the move.
              </p>
            </div>
            <div className="border-t border-rule pt-8">
              <Users className="w-7 h-7 text-toro-red mb-5" strokeWidth={1.5} />
              <h3 className="mb-3">Cargo coverage on every move</h3>
              <p className="text-graphite leading-relaxed">
                Your belongings are covered while in transit and during loading
                and unloading. Certificate of insurance is available on request
                before your move.
              </p>
            </div>
            <div className="border-t border-rule pt-8">
              <Clock className="w-7 h-7 text-toro-red mb-5" strokeWidth={1.5} />
              <h3 className="mb-3">Booking and deposit policy</h3>
              <p className="text-graphite leading-relaxed">
                A small deposit confirms your booking and secures the date. The
                amount varies by job size and is applied to your final bill. The
                remaining balance is due on completion of the move.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section bg-off-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24">
            <div>
              <p className="text-xs font-medium text-graphite-light lowercase tracking-[0.25em] mb-6">
                contact
              </p>
              <h2>Get in touch.</h2>
            </div>
            <div className="grid gap-8">
              <div className="border-t border-rule pt-8">
                <p className="text-xs font-mono text-graphite-light tracking-wider mb-3">
                  PHONE
                </p>
                <a
                  href="tel:+16896002720"
                  className="text-charcoal hover:text-toro-red text-3xl md:text-4xl font-semibold tracking-tight transition-colors inline-flex items-center gap-3"
                >
                  <Phone className="w-7 h-7" /> 689-600-2720
                </a>
                <p className="text-graphite mt-3 text-sm">
                  Call or text. Most inquiries returned within the hour.
                </p>
              </div>
              <div className="border-t border-rule pt-8">
                <p className="text-xs font-mono text-graphite-light tracking-wider mb-3">
                  SERVICE HOURS
                </p>
                <p className="text-charcoal text-xl font-medium mb-2">
                  Monday – Saturday
                </p>
                <p className="text-graphite text-sm">7:00 AM – 7:00 PM</p>
                <p className="text-graphite-light text-xs mt-2">
                  Closed Sundays. Same-week and weekend bookings handled by phone.
                </p>
              </div>
              <div className="border-t border-rule pt-8">
                <p className="text-xs font-mono text-graphite-light tracking-wider mb-3">
                  REQUEST AN ESTIMATE
                </p>
                <p className="text-charcoal text-lg mb-5 leading-relaxed">
                  The fastest way to get a quote is the online inquiry form.
                  Most estimates returned within the hour.
                </p>
                <Link href="/quote" className="btn-primary">
                  Get my free estimate <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}
