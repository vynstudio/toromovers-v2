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
import { FAQSchema } from "@/components/site/FAQSchema";
import { BigQuote } from "@/components/site/BigQuote";
import { NeighborhoodWall } from "@/components/site/NeighborhoodWall";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema />
      <main>
        <Hero />
        <NeighborhoodWall />
        <HowItWorks />
        <TrustStrip />
        <ServiceAreas />
        <WhyToro />

        <section className="section container-page">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 mb-16 md:mb-20">
            <div>
              <p className="text-xs font-medium text-graphite-light lowercase tracking-[0.25em] mb-6">
                client reviews
              </p>
              <h2>What clients say.</h2>
            </div>
            <div className="lg:pt-4">
              <p className="text-lg md:text-xl text-graphite leading-relaxed">
                Verified Google reviews from Central Florida families served
                over the past year.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
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
