# Security Audit — LANY Books storefront

**Verdict: SAFE TO SHIP — 0 blockers.**
Scope: the `main` branch (a static, client-only marketing/storefront site: Vite + React + TypeScript, no backend, no database, no auth, no server-side payments). Date: 2026-07-21.

Two low-priority WARN recommendations below; neither blocks shipping.

## Checklist results

### 1. Secrets — PASS
- `.env`, `.env.local`, `.env.*.local` are all in `.gitignore`.
- No `.env` file has ever been committed (checked full git history); only `.env.example` (a template with placeholder text, no real value) is tracked.
- No tracked file matches secret-looking names (`.pem`, `.key`, `secret`, `credential`, `token`).
- Grep of all tracked source for hardcoded key patterns (`api_key`, `password`, `token`, `bearer`, `sk_live/sk_test`, `AKIA`, `BEGIN ... KEY`) found nothing.
- The one external service (Formspree, on the pending contact-form branch) is read from the `VITE_FORM_ENDPOINT` environment variable, never hardcoded. That endpoint is a public form URL by design, not a secret.

### 2. Database — N/A
No database. There is no Supabase (or any) backend in this repo. No rows, no Row-Level-Security surface, nothing a visitor could read that isn't already public marketing content.

### 3. Input — PASS (no server input path today)
- On `main`, the contact form does not submit anywhere (inert).
- On the pending contact-form branch, it POSTs to Formspree (a third party that performs its own server-side validation and spam filtering); it also has a hidden honeypot field and browser-side required fields. No user input reaches any database, because there is no database.
- URL parameters are not read into any sensitive sink.

### 4. Payments — N/A today (note for later)
No real transaction happens. The "Add to Cart" button is a client-side counter only; nothing is charged, and prices are display-only static text. **When a real checkout is added later (a future PLAN task), prices must be computed/verified on the server** so a client-side edit cannot change what is charged.

### 5. Auth — N/A
No authenticated pages or protected routes. Every page is public marketing content by design.

### 6. Dependencies — PASS
`npm audit` (against a freshly generated lockfile): **0 vulnerabilities** (0 critical / 0 high / 0 moderate / 0 low) across 23 dependencies.

### 7. External links & embedded resources — PASS
- `main`'s `App.tsx` has no `target="_blank"` links (all navigation is internal `#anchor` links), so there is no reverse-tabnabbing surface.
- The pending ordering-links branch adds external store links; those already use `rel="noopener noreferrer"`.
- `index.html` loads only trusted external resources: Google Fonts (via `preconnect`), same-origin canonical/OG image URLs, and `schema.org` JSON-LD. No third-party analytics or ad scripts. The only inline scripts are static JSON-LD (`type="application/ld+json"`), which does not execute.

## WARN — recommendations (non-blocking)
- **W1 — No custom security response headers.** The site relies on Vercel defaults; there is no `vercel.json` setting a Content-Security-Policy, `X-Content-Type-Options: nosniff`, `X-Frame-Options`/`frame-ancestors`, or `Referrer-Policy`. Low risk for a static marketing page with no auth, but adding a `vercel.json` headers block is a cheap hardening win. Suggested follow-up task.
- **W2 — Server-verify prices before any real checkout.** See Payments above; only relevant once real payment is wired.

## Method note
Per this repo's `security-audit` skill, this run is **audit-only** — no code was changed. The two WARN items become follow-up tasks if you want them; neither is required to ship what exists today.
