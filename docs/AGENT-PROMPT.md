# Autonomous Agent Prompt — LANY Books storefront

**How to use:** open your coding agent in this repo and say: "Read docs/AGENT-PROMPT.md and execute it."

---

Repo: github.com/ejnburrows-rgb/lany-books-web — owner ejnburrows-rgb. Vite + React 19 + TS. Publisher storefront for LANY Books LLC.

GROUND TRUTH YOU MUST VERIFY BEFORE BUILDING ANYTHING: the owner believed payment integration was "almost done." A scan of src/ found no cart, no checkout, no orders, and no payment provider — only a Formspree interest form (VITE_FORM_ENDPOINT) and optional Sentry (VITE_SENTRY_DSN). Your first job is to prove or disprove that. Do not start building a checkout.

Read first: AGENTS.md, CLAUDE.md, .env.example, src/App.tsx, src/copy.ts.

## RULES

- Never commit to main. Branch + PR only. The owner merges.
- Never invent a price, ship date, ISBN, page count, or availability claim.
- Copyright is not negotiable: the original book is © Leonor Lopetegui. LANY Books LLC is the imprint and publisher of the digital adaptation only. Never imply LANY authored the book.
- This repo is the storefront only. It shares no code with cartilla-de-gretel. Do not import from it or reference it as the same product.

## PHASE 1 — PAYMENT READINESS REPORT (do this before anything else)

Branch docs/payment-readiness-report. Write docs/PAYMENT-READINESS.md answering, with file:line for each:
- Is there any cart, checkout, order, or payment code in this repo? Yes or no.
- What happens today when a visitor tries to buy? Trace the actual code path.
- What is VITE_FORM_ENDPOINT wired to, and where does a submission go?
- What would selling actually require: provider, tax handling, digital-vs-physical fulfillment, order records, refund path. List it. Do not choose a provider — that's the owner's call.

If a checkout does exist and the earlier scan was wrong, say so plainly at the top and stop the phase there. This report is the deliverable. No checkout code in this PR.

## PHASE 2 — MAKE THE ONE WORKING PATH RELIABLE

Branch fix/form-reliability. Right now the interest form is the only way a customer can reach us, so it cannot fail silently.
- Test the real submit path. Report whether VITE_FORM_ENDPOINT is actually configured.
- Add a visible success state and a visible failure state. On failure, still give the visitor a way to reach us.
- Verify ErrorBoundary.tsx actually catches a thrown render error and shows something useful instead of a blank page. Prove it with a deliberate throw in a scratch branch.

Proof: screenshots of success, failure, and the error boundary.

## PHASE 3 — STOREFRONT QUALITY PASS

Branch fix/storefront-quality-pass. No redesign.
- Every claim in src/copy.ts (21KB) cross-checked: flag anything asserting a price, date, availability, or award the owner has not confirmed. Flag, don't delete.
- Contrast 4.5:1, accessible names on all controls, alt text on every image in public/images/.
- Test at 390px wide first.
- Confirm the copyright and imprint attribution appears correctly and is not overstated.

## PHASE 4 — WHERE DOES THIS ACTUALLY DEPLOY

Branch docs/domain-and-deploy-truth. The README claims https://lany-books-web.vercel.app and the owner is not confident that's right. Determine the real deploy target from vercel.json and the repo config, correct the README, and list what the owner still needs to set (domain, env vars) in docs/DEPLOY.md.

Then stop and write docs/SCRUB-REPORT.md on branch docs/scrub-report.

PR body format: What changed · Why · What the owner should check · What is still not done · Proof.
