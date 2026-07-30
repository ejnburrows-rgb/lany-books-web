# LANY Books Storefront — V1 Production-Readiness Audit Report

**Date:** 2026-07-30
**Branch:** `fix/v1-consolidated-release` (consolidates PR #31 and PR #32)

## Delivered

- Removed $150.00 and InStock Offer structured data
- Removed fake phone (555) 123-4567
- Removed GATE, .env, bookingPlaceholder references
- "Purchase Now" → "Request Information" (EN/ES)
- All stripeLinks confirmed null — every button routes to #contact
- Canonical/OG/sitemap/robots → lany-books-web.vercel.app
- Language persistence + document.lang on switch (default changed to English, with a one-click toggle to Spanish)
- Mobile nav: fixed conflicting max-height rules, language+CTA inside menu
- Header actions visible at 390px
- Contact card hidden until VITE_CONTACT_EMAIL set
- .env.example cleaned of fake entries
- Owner decision sheet (OWNER-DECISIONS.md)
- Smoke test at scripts/smoke-content.mjs

## Owner correction: removed invented product promises

An earlier draft of the product catalog (`src/config/products.ts`) listed several
features that do not exist and were never confirmed by the owner: software
licensing tiers, a "digital companion," audio read-aloud, a teacher dashboard,
teacher training calls, and dedicated support. The owner confirmed none of
this is real. All of it has been removed — no replacement claims were
invented in its place. The catalog now lists only the physical workbook and
classroom-kit products, with pricing left as "Price to be confirmed" and every
CTA routing to the contact form.

## Owner-only gates

1. Production deployment mismatch (Vercel dashboard)
2. lanybooks.com domain ownership verification
3. All 16 decisions in OWNER-DECISIONS.md
4. VITE_FORM_ENDPOINT must be set in Vercel for contact form to work
5. VITE_CONTACT_EMAIL must be set for contact card to appear
