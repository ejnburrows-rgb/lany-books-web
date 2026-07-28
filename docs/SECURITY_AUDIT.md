# Security Audit — LANY Books storefront

**Verdict: SAFE TO SHIP — 0 blockers for a marketing storefront without checkout.**
Scope: the `main` branch (a static, client-only marketing/storefront site: Vite + React + TypeScript, no backend, no database, no auth, no server-side payments).

Originally written 2026-07-21. **Section 3 corrected 2026-07-28** to match current `main` (the contact form is no longer inert).

Two low-priority WARN recommendations below; neither blocks shipping a brochure site.

## Checklist results

### 1. Secrets — PASS
- `.env`, `.env.local`, `.env.*.local` are all in `.gitignore`.
- No `.env` file has ever been committed (checked full git history); only `.env.example` (a template with placeholder text, no real value) is tracked.
- No tracked file matches secret-looking names (`.pem`, `.key`, `secret`, `credential`, `token`).
- Grep of all tracked source for hardcoded key patterns (`api_key`, `password`, `token`, `bearer`, `sk_live/sk_test`, `AKIA`, `BEGIN ... KEY`) found nothing.
- Formspree is read from the `VITE_FORM_ENDPOINT` environment variable, never hardcoded. That endpoint is a public form URL by design, not a secret.

### 2. Database — N/A
No database. There is no Supabase (or any) backend in this repo. No rows, no Row-Level-Security surface, nothing a visitor could read that isn't already public marketing content.

### 3. Input — PASS (Formspree path on main)
- On current `main`, the contact form POSTs to `VITE_FORM_ENDPOINT` (Formspree) via `fetch` in `src/App.tsx`.
- It fails loudly when the endpoint is missing or the request errors (no fake success).
- It includes a hidden honeypot field (`_gotcha`) and browser-side required fields.
- No user input reaches any database, because there is no database. Formspree performs its own server-side validation and spam filtering.
- URL parameters are not read into any sensitive sink.

### 4. Payments — N/A today (note for later)
No real transaction happens. Buy/store URLs in `purchaseUrls` are empty by design until real store links exist. Prices shown on the page are display-only. **When a real checkout is added later, prices must be computed/verified on the server** so a client-side edit cannot change what is charged.

### 5. Auth — N/A
No authenticated pages or protected routes. Every page is public marketing content by design.

### 6. Dependencies — PASS (as of original 2026-07-21 audit)
`npm audit` (against a freshly generated lockfile at audit time): **0 vulnerabilities** across the then-current dependency tree. Re-run before any payment work ships.

### 7. External links & embedded resources — PASS
- Internal navigation uses in-page anchors; external links (when present) should keep `rel="noopener noreferrer"`.
- `index.html` loads only trusted external resources: Google Fonts (via `preconnect`), same-origin canonical/OG image URLs, and `schema.org` JSON-LD. No third-party analytics or ad scripts beyond optional Sentry when configured. The only inline scripts are static JSON-LD (`type="application/ld+json"`), which does not execute.

## WARN — recommendations (non-blocking)
- **W1 — No custom security response headers.** The site relies on Vercel defaults unless `vercel.json` sets a Content-Security-Policy, `X-Content-Type-Options: nosniff`, `X-Frame-Options`/`frame-ancestors`, or `Referrer-Policy`. Low risk for a static marketing page with no auth, but a headers block is a cheap hardening win.
- **W2 — Server-verify prices before any real checkout.** See Payments above; only relevant once real payment is wired.
- **W3 — Prove the live Formspree path.** Confirm `VITE_FORM_ENDPOINT` is set in Vercel and that a real test submission arrives in the Formspree inbox. Code path is correct; hosting proof is separate.

## Method note
Audit-only originally; 2026-07-28 docs correction only — no application code changed in that docs pass.
