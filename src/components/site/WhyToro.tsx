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
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-xs font-medium text-graphite-light lowercase tracking-[0.25em] mb-6">
            our approach
          </p>
          <h2 className="mb-6">
            Why Central Florida homeowners choose Toro Movers.
          </h2>
          <p className="text-graphite text-lg leading-relaxed">
            A focused moving service for Central Florida — not a national
            franchise chasing every job in every state.
          </p>
        </div>
        <div className="grid gap-10 md:gap-12">
          {reasons.map((reason, i) => (
            <div key={reason.title} className="border-t border-rule pt-8">
              <span className="text-xs font-mono text-graphite-light tracking-wider mb-3 block">
                0{i + 1}
              </span>
              <h3 className="mb-3 text-2xl md:text-3xl">{reason.title}</h3>
              <p className="text-graphite text-lg leading-relaxed">{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
