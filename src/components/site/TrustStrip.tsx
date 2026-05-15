import { Shield, Star, Users, Clock } from "lucide-react";

const items = [
  { icon: Shield, label: "Licensed & insured" },
  { icon: Star, label: "Bilingual crews" },
  { icon: Users, label: "Family-owned" },
  { icon: Clock, label: "On-time, every time" },
];

export function TrustStrip() {
  return (
    <div className="bg-charcoal text-cream py-4 border-y border-charcoal-light">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 justify-center md:justify-start">
              <item.icon className="w-4 h-4 text-gold shrink-0" />
              <span className="text-xs md:text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
