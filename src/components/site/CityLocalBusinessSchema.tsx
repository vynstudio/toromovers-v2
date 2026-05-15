import type { CityData } from "@/lib/cities";

// Per-city MovingCompany schema. Different from the homepage
// LocalBusinessSchema in that areaServed scopes to this one city and the geo
// coordinates point at the city centroid instead of the business HQ.
export function CityLocalBusinessSchema({ city }: { city: CityData }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": `Toro Movers — ${city.name}`,
    "image": "https://toromovers.net/og-image.jpg",
    "url": `https://toromovers.net${city.href}`,
    "telephone": "+1-689-600-2720",
    "email": "hello@toromovers.net",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": "FL",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.schema.lat,
      "longitude": city.schema.lng,
    },
    "areaServed": [
      { "@type": "City", "name": city.name },
      ...city.neighborhoods.map((n) => ({
        "@type": "Place",
        "name": n,
      })),
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
