# LANY Books Storefront — Release Audit

**Updated:** 2026-09-14
**Authoritative branch:** `main`
**Production URL:** https://lany-books-web-cyan.vercel.app

## Release state

- Fake pricing and `InStock` structured data removed.
- Fake phone and placeholder booking data removed.
- Online checkout remains disabled; all product actions route to contact.
- Invented software, licensing, training, support, purchase-order, W-9, and volume-pricing claims removed.
- Product prices remain "Price to be confirmed."
- English is the default interface with a Spanish toggle.
- Mobile navigation and header actions are preserved.
- Contact card only renders when `VITE_CONTACT_EMAIL` is configured.
- Content smoke checks guard against fake pricing and retired claims.
- Canonical, Open Graph, robots, and sitemap metadata use the authoritative Vercel production hostname.

## Deployment workflow

Merges to `main` deploy through the connected Vercel project `lany-books-web`.

## Current external dependencies

- `VITE_FORM_ENDPOINT` — required for the contact form to deliver submissions.
- `VITE_CONTACT_EMAIL` — optional direct-contact display.
- `VITE_SENTRY_DSN` — optional monitoring only; not required for the storefront.

## Known business decisions

Checkout remains disabled until the owner confirms prices, payment provider, taxes, shipping, fulfillment, refunds/returns, inventory, and customer-support policy. Custom-domain use also depends on confirming ownership of `lanybooks.com`.
