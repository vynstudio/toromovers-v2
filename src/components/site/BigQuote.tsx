export function BigQuote() {
  return (
    <section className="py-32 md:py-48 bg-off-white">
      <div className="container-page">
        <div className="max-w-4xl">
          <p className="text-xs font-medium text-graphite-light lowercase tracking-[0.25em] mb-10">
            client testimonial
          </p>
          <blockquote
            className="text-charcoal leading-[1.15] mb-12 italic"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            &ldquo;We had three movers quote us — Toro was the only one who
            picked up the phone the same day. Crew arrived on time, wrapped
            everything carefully, and the final bill was exactly the estimate.
            We&rsquo;ll book them again next year.&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-charcoal text-white flex items-center justify-center font-semibold text-base">
              MG
            </div>
            <div>
              <p className="font-semibold text-charcoal">Maria G.</p>
              <p className="text-sm text-graphite-light">
                Orlando · 2-bedroom apartment move
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
