import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container-page relative pt-16 pb-20 md:pt-28 md:pb-40">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
          <div className="lg:pr-8">
            <h1 className="mb-8">
              Trusted Central Florida<br />
              moving company<br />
              <span className="text-toro-red">for Orlando, Lake Mary<br />&amp; Winter Park.</span>
            </h1>

            <p className="text-lg md:text-2xl mb-10 max-w-xl text-graphite leading-relaxed">
              Family-owned. Fully insured. Honest pricing. Apartment, home,
              and commercial moves throughout Central Florida.
            </p>

            <div className="mb-8">
              <Link href="/quote" className="btn-primary text-base">
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
              <a href="tel:+16896002720" className="font-semibold text-charcoal hover:text-toro-red transition-colors">
                <Phone className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
                689-600-2720
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated bg-charcoal">
              <Image
                src="/hero-truck.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 0px, 45vw"
                className="object-cover"
                aria-hidden="true"
              />
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/hero-truck.jpg"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/hero-move.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-white text-base leading-relaxed mb-3 font-medium">
                  &ldquo;Showed up on time, finished early, and the bill matched
                  the estimate to the dollar.&rdquo;
                </p>
                <p className="text-white/70 text-xs uppercase tracking-[0.15em]">
                  Maria G. · Orlando · 2BR move
                </p>
              </div>
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm text-charcoal text-xs font-bold px-3.5 py-2 rounded-full">
                Orlando, Florida
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
