import Link from "next/link";
import { ArrowRight, Phone, Home } from "lucide-react";
import { Footer } from "@/components/site/Footer";

export const metadata = {
  title: "Page not found — Toro Movers",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main>
      <section className="section container-page min-h-[60vh] flex items-center">
        <div className="max-w-2xl">
          <p className="text-xs font-mono text-graphite-light tracking-wider mb-6">
            404 — PAGE NOT FOUND
          </p>
          <h1 className="mb-6">
            That page doesn&rsquo;t exist.<br />
            <span className="text-toro-red">But your move still can.</span>
          </h1>
          <p className="text-lg md:text-xl text-graphite mb-10 leading-relaxed">
            The page you were looking for may have moved, been renamed, or never
            existed. Here&rsquo;s how to find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link href="/" className="btn-primary">
              <Home className="w-4 h-4" /> Back to home
            </Link>
            <Link href="/quote" className="btn-outline">
              Get a free estimate <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="border-t border-rule pt-8">
            <p className="text-xs font-mono text-graphite-light tracking-wider mb-3">
              OR CALL
            </p>
            <a
              href="tel:+16896002720"
              className="text-charcoal hover:text-toro-red text-2xl md:text-3xl font-semibold tracking-tight transition-colors inline-flex items-center gap-3"
            >
              <Phone className="w-6 h-6" /> 689-600-2720
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
