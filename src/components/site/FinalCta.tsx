import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function FinalCta() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="bg-toro-red text-cream rounded-2xl p-8 md:p-14 text-center">
          <h2 className="text-cream mb-4 max-w-2xl mx-auto">
            Ready for a move that actually goes smoothly?
          </h2>
          <p className="text-cream/90 text-lg mb-8 max-w-xl mx-auto">
            Get your free, no-pressure quote in 60 seconds. We&rsquo;ll text you back within the hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-[10px] font-semibold text-base text-charcoal bg-cream hover:bg-bone active:scale-[0.98] transition-all min-h-[52px]"
            >
              Get my free quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+16896002720"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-[10px] font-semibold text-base text-cream border-2 border-cream/50 hover:bg-cream/10 active:scale-[0.98] transition-all min-h-[52px]"
            >
              <Phone className="w-4 h-4" /> 689-600-2720
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
