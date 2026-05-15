# Toro Movers v2 — Claude Code Project Notes

## Project
Bilingual, community-trusted moving company website for Central Florida.
Primary markets: Orlando, Lake Mary, Winter Park.
Goal: top-5 ranking in 12 months. Quote-form-only (no public pricing).

## Stack
- Next.js 16 (App Router) + TypeScript + Tailwind v4
- React Hook Form + Zod for forms
- Resend for transactional email
- Framer Motion for subtle scroll reveals only
- lucide-react for icons
- **Deploy target: Netlify ONLY.** Do not add @vercel/* packages, Vercel docs references, or Vercel-specific configurations. The repo uses netlify.toml + @netlify/plugin-nextjs.

## Design system — Palette B (Charcoal & Bull Red)
- Primary (charcoal): #1A1A1A
- Secondary (graphite): #3A3A3A
- Brand red (Toro): #8C1818
- Cream (warm bg): #F5F1EA
- Gold accent (premium): #C8A55F

## Conventions
- Mobile-first always. Design at 375px, scale up.
- One H1 per page. Use generateMetadata for SEO, not next-seo.
- All forms: React Hook Form + Zod schemas in /src/lib/schemas
- Server actions for form submission, not API routes
- No client components unless interactive
- Performance budget: Lighthouse mobile 95+, LCP <1.8s, page weight <200KB

## Brand voice
- Trust-first / corporate (think USAA, Chase) but human
- Bilingual ready (English primary, Spanish parity coming phase 2)
- Family-owned tone — never "we are the leading provider..." corporate-speak
- Phone: 689-600-2720
- Domain: toromovers.net (old site) → toromovers-v2 will replace
