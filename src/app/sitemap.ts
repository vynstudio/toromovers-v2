import type { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";

const BASE_URL = "https://toromovers.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/apartment-moves", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/home-moves", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/commercial-moves", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/quote", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const cityPages = CITIES.map((c) => ({
    url: c.href,
    priority: 0.9 as const,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...cityPages].map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
