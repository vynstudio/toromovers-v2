const items = [
  { label: "Honest pricing", sub: "Phone estimate" },
  { label: "Family-owned", sub: "Central Florida" },
  { label: "30+ reviews", sub: "4.9 on Google" },
  { label: "Fully insured", sub: "Liability & cargo" },
];

export function TrustStrip() {
  return (
    <div className="bg-charcoal text-white py-10 md:py-14 border-y border-charcoal-light">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`text-center ${
                i > 0 ? "md:border-l md:border-white/15" : ""
              } md:px-6`}
            >
              <p className="text-xl md:text-2xl font-semibold text-white mb-1.5 tracking-tight">
                {item.label}
              </p>
              <p className="text-xs text-white/50 lowercase tracking-[0.15em]">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
