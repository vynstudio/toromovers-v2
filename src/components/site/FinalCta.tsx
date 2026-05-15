import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function FinalCta() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="bg-toro-red text-white rounded-2xl p-8 md:p-14 text-center">
          <h2 className="text-white mb-4 max-w-2xl mx-auto">
            Request your estimate
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Fill out the form or call 689-600-2720. Most estimates back within the hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-[10px] font-semibold text-base text-charcoal bg-white hover:bg-off-white active:scale-[0.98] transition-all min-h-[52px]"
            >
              Get my free estimate <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+16896002720"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-[10px] font-semibold text-base text-white border-2 border-white/50 hover:bg-white/10 active:scale-[0.98] transition-all min-h-[52px]"
            >
              <Phone className="w-4 h-4" /> 689-600-2720
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
