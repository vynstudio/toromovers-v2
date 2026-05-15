import { MapPin } from "lucide-react";

const neighborhoods = [
  "Downtown Orlando",
  "Lake Nona",
  "Dr. Phillips",
  "MetroWest",
  "Baldwin Park",
  "Heathrow",
  "Markham Woods",
  "Timacuan",
  "Park Avenue",
  "Aloma",
  "College Park",
  "Audubon Park",
];

export function NeighborhoodWall() {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-rule">
      <div className="container-page">
        <p className="text-xs font-medium text-graphite-light lowercase tracking-[0.25em] mb-10 text-center">
          trusted across central florida
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-12">
          {neighborhoods.map((hood) => (
            <div key={hood} className="flex items-center gap-2 text-graphite">
              <MapPin className="w-3.5 h-3.5 text-graphite-light shrink-0" />
              <span className="text-sm md:text-base font-medium">{hood}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
