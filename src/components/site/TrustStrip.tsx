export function TrustStrip() {
  const items = [
    { label: "FL DOT #PLACEHOLDER", sub: "Licensed mover" },
    { label: "$1M cargo coverage", sub: "Fully insured" },
    { label: "30+ five-star reviews", sub: "On Google" },
    { label: "Family-owned since 2020", sub: "Central Florida" },
  ];
  return (
    <div className="bg-charcoal text-white py-6 border-y border-charcoal-light">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-5">
          {items.map((item) => (
            <div key={item.label} className="text-center md:text-left">
              <p className="text-sm md:text-base font-semibold text-white">
                {item.label}
              </p>
              <p className="text-xs text-white/60 mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
