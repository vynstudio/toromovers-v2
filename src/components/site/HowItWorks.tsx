import { ClipboardList, Calendar, Truck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Send us your details",
    body: "Fill out the form or text us at 689-600-2720. A photo of your apartment is enough — no need for an in-home visit.",
  },
  {
    icon: Calendar,
    num: "02",
    title: "Get a flat-rate quote",
    body: "Same day, usually within the hour. Written down. No 'starting at' games — the price you see is the price you pay.",
  },
  {
    icon: Truck,
    num: "03",
    title: "We show up and move you",
    body: "Bilingual crew, our own truck (not a rental), and a printed copy of your quote. We don't ask for a deposit.",
  },
];

export function HowItWorks() {
  return (
    <section className="section container-page">
      <div className="max-w-2xl mb-12">
        <h2>How does this actually work?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="relative bg-bone rounded-xl p-7 border border-rule"
          >
            <span className="absolute top-5 right-5 text-5xl font-bold text-cream-dark leading-none select-none">
              {step.num}
            </span>
            <div className="w-12 h-12 rounded-lg bg-toro-red text-cream flex items-center justify-center mb-5">
              <step.icon className="w-6 h-6" />
            </div>
            <h3 className="mb-3 text-xl">{step.title}</h3>
            <p className="text-graphite text-base">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
