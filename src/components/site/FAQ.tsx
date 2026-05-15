"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How much do you charge per hour?",
    a: "Our pricing is custom per move based on size, distance, and what needs to be moved. We&rsquo;ll give you a flat-rate quote up front — no hidden fees, no per-hour surprises.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Toro Movers is fully licensed by the Florida Department of Transportation, FMCSA registered, and carries full cargo and liability insurance. We can email you copies before your move.",
  },
  {
    q: "Do you move on weekends?",
    a: "Saturday and Sunday moves are available — book early since weekends fill up 2-3 weeks in advance during peak season (May-September).",
  },
  {
    q: "Do you speak Spanish?",
    a: "Sí. Our crews are bilingual and we&rsquo;re proud to serve Central Florida&rsquo;s Latino community. You can call, text, or fill out the quote form in either language.",
  },
  {
    q: "What if I have stairs or a long carry?",
    a: "Already included in your quote. Stairs, elevators, long carries from truck to door — all factored in up front. No surprise charges on moving day.",
  },
  {
    q: "How far in advance should I book?",
    a: "For weekday moves, 1-2 weeks ahead is usually enough. For weekends or month-end (28th-1st), we recommend booking 3-4 weeks out to lock in your spot.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section container-page">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-toro-red uppercase tracking-wider mb-3">
            Common questions
          </p>
          <h2>Answers, not runaround.</h2>
        </div>
        <div className="divide-y divide-rule border-y border-rule">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-charcoal text-base md:text-lg">
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-toro-red">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="pb-5 text-graphite leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
