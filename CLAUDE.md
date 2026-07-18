# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

RoamRipples — marketing/booking site for a B2B travel agency, built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

## Commands

```bash
npm run dev      # start dev server (Next.js)
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test suite configured in this repo.

## Architecture

- **App Router structure** (`app/`): `page.tsx` (home), `tours/`, `about/`, `contact/`, and the dynamic route `packages/[id]/page.tsx` for individual tour package detail pages. `app/layout.tsx` is the root layout — it sets global metadata/JSON-LD (`SiteNavigationElement` schema) and mounts `@next/third-parties`' `GoogleAnalytics` (reads `GOOGLE_TAG` env var). `app/sitemap.ts` generates the sitemap from a hardcoded route list — add new top-level routes there too.
- **Presentational components live in `components/`**, one per section/page (`Header`, `Footer`, `Hero`, `Features`, `Destinations`, `TourPackages`, `Categories`, `Testimonals`, `SearchForm`, `About`, `Contact`), and are composed together by the route files in `app/`. Most are `"use client"` components using `framer-motion` for entrance animations.
- **Package/tour data is centralized in `lib/package-data.ts`**: a single `packages: Package[]` array containing full package details (itinerary, inclusions/exclusions, reviews). There is no CMS or database — this file is the source of truth. `getPackageById` / `getAllPackages` are the accessors used by `app/packages/[id]/page.tsx` and `components/TourPackages.tsx`. Add new tour packages by appending to this array with a unique `id` matching the route slug.
- **Contact form (`components/Contact.tsx`) currently simulates submission** (a `setTimeout` delay, `console.log`, no network request) — it does not call an API route or send email yet, despite `resend` and `@react-email/*` being installed as dependencies and a stub `components/EmailTemplate.tsx` existing. If wiring this up, that's the intended integration point (Resend + a Next.js route handler under `app/api/`, which does not exist yet).
- **Styling**: Tailwind CSS 4 via `@tailwindcss/postcss` (no `tailwind.config` — v4 uses CSS-based config in `app/globals.css`). Path alias `@/*` maps to the repo root (see `tsconfig.json`).
- **Images**: static travel photography lives in `public/`, referenced by path from `lib/package-data.ts` and components (e.g. `/dubai-marina-yacht-club.jpg`).
