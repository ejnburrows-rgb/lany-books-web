# AGENTS.md — LANY Books storefront

This file is LANY's complete active repository agent contract. Do not assume an unspecified external "Part A" or historical chat prompt controls this project. Current owner decisions, current verified GitHub state, and the existing scoped files below outrank dated reports.

## Current owner scope — organization only (2026-10-29)

The owner has **not** authorized product development, feature completion, checkout changes or any production release during the current source-of-truth consolidation. Only non-destructive review and reconciliation of instructions, source references and truthful status are in scope until a new owner directive. Keep existing work and open dependency PRs; do not dispatch product agents, merge upgrades or deploy.

**Authority:** latest owner instruction controls current scope; this `AGENTS.md` sets LANY execution/safety rules, `OWNER-DECISIONS.md` holds unresolved business decisions, existing code/PRs prove implementation, and real Vercel deployments prove releases. `docs/STATUS.md` is a timestamped historical checkpoint, **not** a parallel live queue. Cartilla #877 governs only Cartilla. The NBO Board is a source-linked viewer, not an independent controller. An unrelated repository's Vercel/CI failure must not become a global blocker. Do not make a LANY `main` change merely to organize docs because that could publish production.

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

## Shared delivery workflow

- Work through **Idea → Plan → Build → Focused Test → Visual Proof → Approval → Integration → Release**. Use a short plan only when needed; resolve routine technical choices yourself.
- Inspect current code, existing PRs/assignments and applicable product requirements first. Reuse the original branch and valid evidence; historical reports are context, not new assignments.
- One active assignment = one bounded useful result. Make the smallest reliable change, preserve unrelated working behavior, and verify affected behavior. Use existing tools and tests; no mandatory skill chain, new controller, duplicate dashboard or repeated unchanged audit.
- For visual/interactive changes show actual phone/desktop screenshots; use real recordings for movement, navigation or sound. For instruction-only changes show exact-version excerpts/diffs. Never claim tests, live agents, saves or deployments without direct evidence.
- After completing or blocking an item, continue the next independent eligible already-authorized assignment in the same available session. A hold stops only its affected action. Save one material checkpoint on the existing PR/task; do not promise background activity.
- Keep work on one task branch/PR. Check overlapping ownership before shared-file edits. Do not create workers or tasks merely to fill capacity.
- Preserve applicable independent review and effective branch protection; no self-approval, force push or history rewriting. Never merge known serious defects or missing affected verification.
- Owner visual acceptance, merge authorization and production release are separate. If a default-branch update triggers production, hold it until the corresponding release is authorized. Do not turn on auto-merge or automatic deployment.
- Never commit secrets. No paid services, access/security changes, real-data deletion or irreplaceable asset removal without applicable permission. Antigravity requires new explicit task-specific owner authorization.
- Use available local/sandbox checks; do not depend on GitHub Actions or paid upgrades. Consult version-specific documentation only when relevant.
- Report **STATUS / RESULT / PROOF / WHAT REMAINS**, with exact revision and one next executable step. Stop when requested work is complete; preserve a precise checkpoint if a genuine execution limit ends the session.
