# Toro Movers v2 — Project Plan

This is the source of truth for what's being built, what's done, and what's pending.
Update this file at the end of each phase. Mark phases ✅ DONE, 🔵 IN PROGRESS, or ⏳ PENDING.

## Locked decisions (do not revisit without explicit user direction)

- **Stack:** Next.js 16 App Router + TypeScript + Tailwind v4 + Resend + Vercel
- **Palette:** White (#FFFFFF) + Charcoal (#121316) + Toro Red (#C8102E) + Gold (#E8A317). Graphite body (#525252).
- **Fonts:** Inter (sans, primary), Fraunces (serif, accents only)
- **Positioning:** Family-owned full-service moving company in Central Florida
- **Service area:** Orlando, Lake Mary, Winter Park
- **Tone:** Corporate-clean, no folksy. No owner names. No internal-ops detail.
- **Pricing visibility:** ZERO numbers on the site. All quoting done by phone.
- **Languages mentioned on site:** English only. (Spanish capability exists operationally but not advertised on the corporate site.)
- **Insurance claim allowed:** "Fully insured" + "Commercial liability and cargo coverage" — NEVER "licensed" or "FL DOT".
- **Deposit:** Required. Variable by job size. Mentioned as "small deposit confirms the booking."
- **Phone:** 689-600-2720
- **Domain:** toromovers.net (current site at this domain; new build deploys to toromovers-v2.vercel.app first, DNS cutover later)

## Site architecture

### Pages (build status)
- ✅ `/` — Homepage
- ✅ `/apartment-moves`
- ✅ `/home-moves`
- ✅ `/commercial-moves`
- ✅ `/quote` — multi-step lead form
- ✅ `/thank-you` — pixel-firing confirmation page
- ✅ `/movers-orlando` — city landing page
- ✅ `/movers-lake-mary` — city landing page
- ✅ `/movers-winter-park` — city landing page
- ⏳ `/about` — minimal corporate about page

### Components (all in /src/components/site/)
Header, MobileBottomBar, Footer, TrustStrip, ReviewCard, BigQuote, Hero, HowItWorks, ServiceAreas, WhyToro, FAQ, FinalCta, LocalBusinessSchema, FAQSchema

## Environment variables (required for deploy)

These go in Vercel project settings. Until set, builds use safe placeholders.

| Variable | Purpose | Source |
|---|---|---|
| `RESEND_API_KEY` | Send form submissions to email | resend.com → API Keys |
| `LEAD_NOTIFICATION_EMAIL` | Where form leads are sent | dilerbizz@gmail.com |
| `LEAD_FROM_EMAIL` | "From" address on lead emails | `onboarding@resend.dev` until domain verified, then `quotes@toromovers.net` |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta ad attribution | Business Manager → Events Manager |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 | GA4 → Admin → Data Streams |
| `NEXT_PUBLIC_GADS_CONVERSION_ID` | Google Ads conversions | Google Ads → Conversions |
| `NEXT_PUBLIC_GADS_CONVERSION_LABEL` | Google Ads conv. label | Google Ads → Conversions → tag setup |

## Phases (execute in order)

### ✅ Phase 0: Foundation (DONE)
Stack scaffolded, design system, shared components, homepage, service pages, palette, content cleanup, BigQuote, dropdown nav.

### ✅ Phase 1: Lead capture engine (`/quote` + `/thank-you` + Resend) — DONE
- Multi-step form using react-hook-form + zod
- 5 steps: move type → from/to ZIPs → date → size → contact info
- Mobile-first, one question per screen, progress bar, big tap targets
- Server action that uses Resend to email the lead
- Form submission redirects to `/thank-you`
- `/thank-you` fires Meta Pixel `Lead` event and Google Ads conversion event
- Use process.env vars with safe fallbacks so build never breaks if env vars are missing
- Form fields: name, phone, email, move-from ZIP, move-to ZIP, move date, move size (studio/1BR/2BR/3BR/4BR+/office), notes, source (which page form was submitted from)

### ✅ Phase 2: City landing pages — DONE
- `/movers-orlando`, `/movers-lake-mary`, `/movers-winter-park`
- Per-city H1 + meta description + neighborhood-specific copy
- Same TrustStrip + FinalCta + Footer pattern as service pages
- LocalBusiness schema per city with geo coordinates
- Internal links between cities

### ⏳ Phase 3: About page (`/about`)
- Brief, corporate-clean, no owner names
- Sections: who we are, where we work, insurance/credentials, contact
- One CTA at the bottom to /quote

### ⏳ Phase 4: Pre-deploy polish
- robots.txt
- sitemap.xml (auto-generated from app routes)
- Open Graph image at /public/og-image.jpg (1200x630)
- Favicon set
- 404 page styled to match the site
- Performance audit (Lighthouse 95+ mobile target)

### ⏳ Phase 5: Deploy to Vercel
- User connects GitHub repo to Vercel
- User adds env vars in Vercel project settings
- First deploy to toromovers-v2.vercel.app
- User reviews preview
- DNS cutover: toromovers.net → Vercel (user decides timing)

## Working agreements

1. **Foundation is locked.** Don't revisit palette, tone, positioning, or pricing-visibility decisions without explicit user direction. They were debated extensively and decided.

2. **No new claims about the business.** If a phase requires a business fact not in this plan (license number, fleet size, employee count, etc.), STOP and ask. Never invent.

3. **At phase boundaries, report status and wait.** Don't auto-continue between phases. User will trigger each one.

4. **At blocker boundaries within a phase, stop.** If a phase needs an env var, API key, decision, or content that isn't provided, stop and report what's needed.

5. **Audit before commit.** Each phase ends with grep/curl/build verification before pushing.

6. **Keep PLAN.md updated.** When a phase completes, change its ⏳ to ✅ at the end of that phase.
