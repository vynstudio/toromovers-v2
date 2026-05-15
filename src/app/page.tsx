import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ServiceAreas } from "@/components/site/ServiceAreas";
import { WhyToro } from "@/components/site/WhyToro";
import { ReviewCard } from "@/components/site/ReviewCard";
import { FAQ } from "@/components/site/FAQ";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { LocalBusinessSchema } from "@/components/site/LocalBusinessSchema";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <main>
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <ServiceAreas />
        <WhyToro />

        <section className="section container-page">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-toro-red uppercase tracking-wider mb-3">
              Real moves. Real reviews.
            </p>
            <h2>Trusted by Central Florida families.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ReviewCard
              name="Maria G."
              city="Orlando"
              body="They showed up on time, wrapped everything carefully, and the price matched the quote exactly. No surprises."
              date="Apr 2026"
            />
            <ReviewCard
              name="James T."
              city="Lake Mary"
              body="Professional, fast, and bilingual — which mattered for my family. Best moving experience I&rsquo;ve had in years."
              date="Mar 2026"
            />
            <ReviewCard
              name="Sofia R."
              city="Winter Park"
              body="Family-owned and it shows. They treated my apartment like it was their own. Highly recommend."
              date="Feb 2026"
            />
          </div>
        </section>

        <FAQ />
        <FinalCta />
        <Footer />
      </main>
    </>
  );
}
