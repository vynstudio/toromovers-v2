export function TrustStrip() {
  const items = [
    { label: "Honest pricing", sub: "Phone estimate" },
    { label: "Family-owned", sub: "Central Florida" },
    { label: "30+ reviews", sub: "4.9 on Google" },
    { label: "Fully insured", sub: "Liability & cargo" },
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
