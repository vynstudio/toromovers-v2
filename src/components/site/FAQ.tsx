"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/faqs";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section container-page">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 mb-16 md:mb-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-xs font-medium text-graphite-light lowercase tracking-[0.25em] mb-6">
            frequently asked
          </p>
          <h2>FAQ: Moving in Orlando, Lake Mary &amp; Winter Park.</h2>
        </div>
        <div>
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
      </div>
    </section>
  );
}
