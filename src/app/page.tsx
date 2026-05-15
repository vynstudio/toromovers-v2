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
import { BigQuote } from "@/components/site/BigQuote";
import { FAQSchema } from "@/components/site/FAQSchema";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema />
      <main>
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <ServiceAreas />
        <WhyToro />

        <section className="section container-page">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-sm font-medium text-graphite-light lowercase tracking-[0.2em] mb-3">
              client reviews
            </p>
            <h2>What clients say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ReviewCard
              name="Maria G."
              city="Orlando"
              body="On time, careful, and the final bill matched the estimate. No issues."
              date="Apr 2026"
            />
            <ReviewCard
              name="James T."
              city="Lake Mary"
              body="Professional crew, clear communication, and everything arrived intact. Easy experience."
              date="Mar 2026"
            />
            <ReviewCard
              name="Sofia R."
              city="Winter Park"
              body="Careful with the property and quick on the job. Would book again."
              date="Feb 2026"
            />
          </div>
        </section>

        <BigQuote />
        <FAQ />
        <FinalCta />
        <Footer />
      </main>
    </>
  );
}
