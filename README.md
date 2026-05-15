# Toro Movers v2

Marketing + lead-capture site for Toro Movers — a family-owned moving company serving Orlando, Lake Mary, and Winter Park, FL.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Resend for transactional email
- React Hook Form + Zod for the quote form
- Deploys exclusively to **Netlify** via `netlify.toml` + `@netlify/plugin-nextjs`

See [`PLAN.md`](./PLAN.md) for the locked decisions, environment variables, build phases, and deploy steps.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in real values, or leave PLACEHOLDER for no-op behavior
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build      # production build
npm run lint       # ESLint
```

## Deploy

Pushes to `main` auto-deploy to Netlify. The site lives at `toromovers-v2.netlify.app`.
