import { ClipboardList, Calendar, Truck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Tell us about your move",
    body: "Use the form on this site or call 689-600-2720. Apartment or home size, move date, and the two ZIP codes is all we need to begin.",
  },
  {
    icon: Calendar,
    num: "02",
    title: "Get an estimate by phone",
    body: "Toro Movers will call within the hour to review the scope, schedule availability, and a fair estimate. A deposit confirms the booking.",
  },
  {
    icon: Truck,
    num: "03",
    title: "Crew arrives on schedule",
    body: "A trained Toro Movers crew completes the job at the agreed estimate. Final payment is due on completion. No surprise fees.",
  },
];

export function HowItWorks() {
  return (
    <section className="section bg-charcoal text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(200, 16, 46, 0.15), transparent), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(232, 163, 23, 0.08), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 mb-16 md:mb-24">
          <div>
            <p className="text-xs font-medium text-white/50 lowercase tracking-[0.25em] mb-6">
              the process
            </p>
            <h2 className="text-white">
              Local moving services across Orlando, Lake Mary &amp; Winter Park.
            </h2>
          </div>
          <div className="lg:pt-4">
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Three steps from inquiry to moving day. No in-home visits. No
              high-pressure quoting. No deposits forfeited.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative border-t border-white/15 pt-8"
            >
              <span className="absolute top-8 right-0 text-xs font-mono text-white/40 tracking-wider">
                {step.num}
              </span>
              <step.icon className="w-7 h-7 text-toro-red mb-6" strokeWidth={1.5} />
              <h3 className="text-white mb-4 text-2xl md:text-3xl">{step.title}</h3>
              <p className="text-white/70 text-base leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
