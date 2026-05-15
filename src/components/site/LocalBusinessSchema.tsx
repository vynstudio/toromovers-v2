export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Toro Movers",
    "image": "https://toromovers.net/og-image.jpg",
    "url": "https://toromovers.net",
    "telephone": "+1-689-600-2720",
    "email": "hello@toromovers.net",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Orlando",
      "addressRegion": "FL",
      "addressCountry": "US",
    },
    "areaServed": [
      { "@type": "City", "name": "Orlando" },
      { "@type": "City", "name": "Lake Mary" },
      { "@type": "City", "name": "Winter Park" },
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "30",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "19:00",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
