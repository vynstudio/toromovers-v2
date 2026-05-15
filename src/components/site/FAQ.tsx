"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/faqs";

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
                  <div className="pb-5 text-graphite leading-relaxed">{faq.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
