# STATUS — LANY Books storefront

Updated: 2026-10-02

- Production source of truth: `main`.
- Production host: Vercel; merging `main` triggers production deployment.
- This repo is the storefront/information site only. The classroom application is `ejnburrows-rgb/cartilla-de-gretel`.
- Online checkout is disabled.
- Prices, product availability, school-ordering terms, fulfillment, returns, taxes, shipping, payment provider, and domain ownership remain owner-confirmed business decisions; see `../OWNER-DECISIONS.md`.
- Contact delivery uses `VITE_FORM_ENDPOINT`; `VITE_CONTACT_EMAIL` is optional.
- Sentry is optional through `VITE_SENTRY_DSN`.
- Current response security headers are configured in `vercel.json`.
- Historical design exports and repo-local Kilo skill instructions were removed from the active tree on 2026-10-02; Git history retains them.
- Historical audit reports are under `docs/archive/`.
- GitHub-hosted Actions are currently unable to start because GitHub reports an account billing lock. This is an account-level runner block, not a workflow-code failure.
