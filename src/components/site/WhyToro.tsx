import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "No hidden fees, ever",
    body: "The quote you get is the price you pay. Fuel, mileage, stairs — all included up front.",
  },
  {
    title: "Family answers the phone",
    body: "When you call, you talk to Frank. Not a call center. Not a bot. Just the family that owns the trucks.",
  },
  {
    title: "Bilingual from day one",
    body: "English or Spanish — your crew speaks your language. Built for Central Florida&rsquo;s real community.",
  },
  {
    title: "Fully licensed and insured",
    body: "Florida DOT registered, FMCSA compliant, and covered by full cargo and liability insurance.",
  },
];

export function WhyToro() {
  return (
    <section className="section container-page">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
        <div>
          <p className="text-sm font-semibold text-toro-red uppercase tracking-wider mb-3">
            Why Toro
          </p>
          <h2 className="mb-5">
            Built different.<br />
            On purpose.
          </h2>
          <p className="text-graphite text-lg leading-relaxed">
            Most moving companies care about jobs. We care about Orlando, Lake
            Mary, and Winter Park — because we live here too.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-toro-red shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-charcoal mb-1.5">{r.title}</h4>
                <p
                  className="text-graphite text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: r.body }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
