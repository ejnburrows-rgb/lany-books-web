# AGENTS.md — LANY Books storefront

Part A global rules govern general behavior. This file contains only LANY-specific facts and release rules.

## Project

- This repository is the public-facing LANY Books LLC storefront and information site.
- The separate classroom/teacher application is `ejnburrows-rgb/cartilla-de-gretel`.
- Professional publisher/storefront presentation. No mascots or cartoons unless EJN explicitly asks.
- Do not invent prices, availability, policies, phone numbers, domains, retailer links, licensing terms, fulfillment claims, or school-ordering terms.
- `OWNER-DECISIONS.md` records business decisions that still require owner confirmation.
- Online checkout stays disabled until the required commerce decisions are confirmed.

## Production

- Host: Vercel.
- Release branch: `main`.
- A merge to `main` triggers a production deployment.
- A commit is not a deploy request. Work on a branch; merge once only when EJN asks for or approves the release checkpoint.
- Keep `main` usable.

## Contact and monitoring

- `VITE_FORM_ENDPOINT` controls contact-form delivery.
- `VITE_CONTACT_EMAIL` optionally enables the direct contact card.
- `VITE_SENTRY_DSN` is optional monitoring; the site must work without it.
- Never commit real secrets or private environment values.

## Verification

Before release, run the repository checks that are available:
- `npm ci`
- `npm run typecheck`
- `node scripts/smoke-content.mjs`
- `npm run build`

For visible changes, verify the actual rendered storefront before calling the work done.

## GITHUB ACCOUNT LIMITS

- EJN uses a free GitHub account and does not have GitHub Actions available.
- Do not depend on GitHub Actions, required CI checks, or hosted Actions runners to complete or verify work.
- Use direct verification, local/sandbox testing, or other available tools instead.
- Do not recommend upgrading GitHub solely to enable Actions unless EJN explicitly asks about paid options.
