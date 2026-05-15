import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container-page relative pt-10 pb-16 md:pt-20 md:pb-28">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-off-white border border-rule mb-6">
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
              Frank picks up the phone.<br />
              <span className="text-toro-red">His brother drives the truck.</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 max-w-xl text-graphite">
              Family-owned, fully insured movers serving Central Florida.
              Bilingual W-2 crews, hourly rates starting at $85, and same-day
              estimates. Apartment, house, and office moves done right —
              Frank answers the phone himself.
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
              No deposit · No hidden fees · Text us a photo, get a quote
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated bg-charcoal">
              <Image
                src="/frank-toro-truck.jpg"
                alt="Frank, owner of Toro Movers, standing in front of a moving truck in Central Florida"
                fill
                priority
                sizes="(max-width: 1024px) 0px, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-charcoal/90 via-charcoal/60 to-transparent">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-white text-sm leading-relaxed mb-2 font-medium">
                  &ldquo;Showed up on time, finished early, and the bill matched the quote to the dollar.&rdquo;
                </p>
                <p className="text-white/70 text-xs">
                  — Maria G., Orlando · 2-bedroom move
                </p>
              </div>
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm text-charcoal text-xs font-bold px-3 py-1.5 rounded-full">
                Frank, owner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
