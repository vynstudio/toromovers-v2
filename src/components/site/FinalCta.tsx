import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function FinalCta() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="bg-toro-red text-white rounded-3xl p-12 md:p-24 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(255,255,255,0.3), transparent)",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-3xl">
            <h2 className="text-white mb-6">Request your estimate.</h2>
            <p className="text-white/85 text-lg md:text-2xl mb-10 leading-relaxed max-w-2xl">
              Fill out the form or call 689-600-2720. Most estimates
              returned within the hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-[10px] font-semibold text-base text-charcoal bg-white hover:bg-off-white active:scale-[0.98] transition-all min-h-[56px]"
              >
                Get my free estimate <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+16896002720"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-[10px] font-semibold text-base text-white border-2 border-white/40 hover:bg-white/10 active:scale-[0.98] transition-all min-h-[56px]"
              >
                <Phone className="w-4 h-4" /> 689-600-2720
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
