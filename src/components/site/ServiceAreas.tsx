import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";

const cities = [
  {
    href: "/movers-orlando",
    name: "Orlando",
    blurb: "Including downtown, Lake Nona, Dr. Phillips, MetroWest, and Baldwin Park.",
  },
  {
    href: "/movers-lake-mary",
    name: "Lake Mary",
    blurb: "Including Heathrow, Markham Woods, Timacuan, and surrounding Seminole County areas.",
  },
  {
    href: "/movers-winter-park",
    name: "Winter Park",
    blurb: "Including Park Avenue, Aloma, and surrounding historic and residential areas.",
  },
];

export function ServiceAreas() {
  return (
    <section className="section bg-charcoal text-white">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <h2 className="text-white">Service areas</h2>
          <p className="mt-5 text-white/80 text-lg">
            Toro Movers serves Orlando, Lake Mary, Winter Park, and the
            surrounding Central Florida area.
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
