# STATUS — LANY Books storefront

**Current organization checkpoint (2026-10-29):** The owner's active scope is source-of-truth and instruction reconciliation ONLY; do not implement new storefront features, merge dependabot changes or deploy until explicitly resumed and separately authorized. Current verified GitHub `main`: `84d0118357f0297cf4e51590e29a4161d44f72a4`. Open Dependabot PRs #37–#44 are unmerged proposals, not active product assignments. This file is an older snapshot and not an independently refreshed task queue. The active scoped contract is [AGENTS.md](../AGENTS.md); outstanding business decisions are in [OWNER-DECISIONS.md](../OWNER-DECISIONS.md). Vercel production deployment **READY**: `dpl_GyYBVfRmHJftmv7yKWtJmLMdQ34Q`, source `84d0118357f0297cf4e51590e29a4161d44f72a4`, current production alias `https://lany-books-web-delta.vercel.app` (authenticated deployment metadata verified October 29). This proves deployment identity and readiness, not browser-level storefront behavior. A historical GitHub Actions billing/runners issue from October 2 is **not** a verified current or cross-repository deployment blocker.

### Historical checkpoint retained below (2026-10-02)

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
