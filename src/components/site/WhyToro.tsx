import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Family-owned and local",
    body: "Based in Central Florida, focused on Orlando, Lake Mary, and Winter Park. Not a national franchise.",
  },
  {
    title: "Honest pricing",
    body: "No fuel surcharges, stair fees, or charges added at completion. The estimate is the price.",
  },
  {
    title: "Phone estimates, same day",
    body: "Most inquiries are returned with an estimate within the hour. No in-home visit required for most moves.",
  },
  {
    title: "Fully insured",
    body: "Commercial liability and cargo coverage. Certificate of insurance available on request before booking.",
  },
];

export function WhyToro() {
  return (
    <section className="section container-page">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
        <div>
          <h2 className="mb-5">Why Central Florida Homeowners Choose Toro Movers</h2>
          <p className="text-graphite text-lg leading-relaxed">
            A focused moving service for Central Florida. Family-owned,
            transparent pricing, careful crews, and a clear scope of work —
            no add-ons, no surprises.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-toro-red shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-charcoal mb-1.5">{r.title}</h4>
                <p className="text-graphite text-sm leading-relaxed">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
