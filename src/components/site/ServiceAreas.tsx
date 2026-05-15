import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
    <section className="section bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 mb-16 md:mb-20">
          <div>
            <p className="text-xs font-medium text-graphite-light lowercase tracking-[0.25em] mb-6">
              service areas
            </p>
            <h2>Service areas.</h2>
          </div>
          <div className="lg:pt-4">
            <p className="text-lg md:text-xl text-graphite leading-relaxed">
              Toro Movers operates exclusively within Orlando, Lake Mary,
              Winter Park, and the surrounding Central Florida communities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule">
          {cities.map((city) => (
            <Link
              key={city.href}
              href={city.href}
              className="group bg-white hover:bg-off-white p-8 md:p-10 transition-colors relative"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs font-mono text-graphite-light tracking-wider">
                  /{city.name.toLowerCase().replace(" ", "-")}
                </span>
                <ArrowUpRight className="w-5 h-5 text-graphite-light group-hover:text-toro-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-charcoal text-3xl md:text-4xl mb-3">{city.name}</h3>
              <p className="text-graphite text-base leading-relaxed">{city.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
