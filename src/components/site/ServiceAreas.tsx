import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";

const cities = [
  {
    href: "/movers-orlando",
    name: "Orlando",
    blurb: "Downtown, Lake Nona, Dr. Phillips, MetroWest — we cover all of Orange County.",
  },
  {
    href: "/movers-lake-mary",
    name: "Lake Mary",
    blurb: "Heathrow, Markham Woods, Timacuan — premium homes deserve premium care.",
  },
  {
    href: "/movers-winter-park",
    name: "Winter Park",
    blurb: "Park Avenue to Aloma — careful crews for historic homes and luxury apartments.",
  },
];

export function ServiceAreas() {
  return (
    <section className="section bg-charcoal text-white">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">
            Service areas
          </p>
          <h2 className="text-white">
            We don&rsquo;t move everywhere. On purpose.
          </h2>
          <p className="mt-5 text-white/80 text-lg">
            We focus where we live. That&rsquo;s how we keep crews local, quotes
            accurate, and reviews honest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cities.map((city) => (
            <Link
              key={city.href}
              href={city.href}
              className="group bg-charcoal-light hover:bg-graphite rounded-xl p-7 border border-graphite hover:border-gold transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <MapPin className="w-5 h-5 text-gold" />
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-white text-2xl mb-2">{city.name}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{city.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
