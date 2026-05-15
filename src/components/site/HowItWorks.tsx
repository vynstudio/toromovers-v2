import { ClipboardList, Calendar, Truck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Tell us about your move",
    body: "Use the form or text 689-600-2720. Apartment or home size, move date, and the two ZIP codes is all we need.",
  },
  {
    icon: Calendar,
    num: "02",
    title: "Get an estimate by phone",
    body: "We call back within the hour with the hourly rate, expected duration, and date confirmation. A deposit holds the booking.",
  },
  {
    icon: Truck,
    num: "03",
    title: "Crew arrives on schedule",
    body: "Two bilingual movers complete the job at the agreed rate. You pay the balance at the end. No surprise fees.",
  },
];

export function HowItWorks() {
  return (
    <section className="section container-page">
      <div className="max-w-2xl mb-12">
        <h2>Local Moving Services Across Orlando, Lake Mary &amp; Winter Park</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="relative bg-off-white rounded-xl p-7 border border-rule"
          >
            <span className="absolute top-5 right-5 text-5xl font-bold text-rule leading-none select-none">
              {step.num}
            </span>
            <div className="w-12 h-12 rounded-lg bg-toro-red text-white flex items-center justify-center mb-5">
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
