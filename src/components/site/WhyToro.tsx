import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Quotes by text, in under an hour",
    body: "Send us a photo of your stuff. We'll text back a flat-rate quote — no in-home estimate visit needed for most moves.",
  },
  {
    title: "Frank's cell is 689-600-2720",
    body: "Not a call center. Not a chatbot. When you call, the family that owns the trucks answers — or texts back within the hour.",
  },
  {
    title: "Bilingual crews, English or Spanish",
    body: "Crew speaks your language. Quotes, contracts, and moving-day communication all available in either.",
  },
  {
    title: "Flat-rate pricing, written down",
    body: "No 'starting at $89/hr' bait. You get one price for the whole job — fuel, stairs, mileage included — before we touch a box.",
  },
];

export function WhyToro() {
  return (
    <section className="section container-page">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
        <div>
          <h2 className="mb-5">
            Four things you won&rsquo;t get from the big moving brands.
          </h2>
          <p className="text-graphite text-lg leading-relaxed">
            Most moving companies want jobs. We want repeat clients. That&rsquo;s
            why everything here is built for Central Florida — not a national
            playbook.
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
