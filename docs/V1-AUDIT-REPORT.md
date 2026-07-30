# LANY Books Storefront — V1 Production-Readiness Audit Report

**Date:** 2026-07-30  
**Branch:** `fix/v1-production-readiness`  
**PR:** https://github.com/ejnburrows-rgb/lany-books-web/pull/32

## Delivered

- Removed $150.00 and InStock Offer structured data
- Removed fake phone (555) 123-4567
- Removed GATE, .env, bookingPlaceholder references
- "Purchase Now" → "Request Information" (EN/ES)
- All stripeLinks confirmed null — every button routes to #contact
- Canonical/OG/sitemap/robots → lany-books-web.vercel.app
- Language persistence + document.lang on switch (default: es)
- Mobile nav: fixed conflicting max-height rules, language+CTA inside menu
- Header actions visible at 390px
- Contact card hidden until VITE_CONTACT_EMAIL set
- .env.example cleaned of fake entries
- Owner decision sheet (OWNER-DECISIONS.md)
- Smoke test at scripts/smoke-content.mjs

## Owner-only gates
1. Production deployment mismatch (Vercel dashboard)
2. lanybooks.com domain ownership verification
3. All 16 decisions in OWNER-DECISIONS.md
4. VITE_FORM_ENDPOINT must be set in Vercel for contact form to work
5. VITE_CONTACT_EMAIL must be set for contact card to appear
