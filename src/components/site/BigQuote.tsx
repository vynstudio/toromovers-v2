export function BigQuote() {
  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: "#F4F4F4" }}>
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="text-xs font-medium text-graphite-light lowercase tracking-[0.2em] mb-6">
            client testimonial
          </p>
          <blockquote
            className="text-charcoal leading-[1.25] mb-8 italic"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 400,
            }}
          >
            &ldquo;We had three movers quote us — Toro was the only one who
            picked up the phone the same day. Crew arrived on time, wrapped
            everything carefully, and the final bill was exactly the estimate.
            We&rsquo;ll book them again next year.&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-charcoal text-white flex items-center justify-center font-semibold text-sm">
              MG
            </div>
            <div>
              <p className="font-semibold text-charcoal text-sm">Maria G.</p>
              <p className="text-xs text-graphite-light">
                Orlando · 2-bedroom apartment move
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
