# Payment Readiness Report

**Bottom line up front: there is no checkout. Every "buy" affordance in this repo ends at the interest/contact form or a `null` placeholder. There is no cart, no order record, no payment provider integration, and no `stripe` (or any payment SDK) dependency in `package.json`.** The ground truth in the task brief is correct — the "almost done" belief is wrong. Proceeding with the rest of this phase (documenting exactly what exists and what selling would require) rather than stopping, since no checkout exists to report on further.

## 1. Is there any cart, checkout, order, or payment code in this repo?

**No.**

- `package.json:1` — dependencies are `@sentry/react`, `@vitejs/plugin-react`, `react`, `react-dom`, `typescript`, `vite`. No `stripe`, `@stripe/*`, `paypal`, `square`, or any payment/commerce SDK.
- No `api/`, `server/`, `functions/`, or `pages/api` directory exists — there is no backend at all in this repo (it's a static Vite build, per `vite.config.ts` and `package.json:1` `"build": "tsc -b && vite build"`).
- Grep across `src/` for `stripe|paypal|checkout|cart|square|braintree` (case-insensitive) matches only:
  - `src/config/products.ts:16-18,79-81` — a `stripeLink: string | null` field on the `Product` type, currently `null` on every product (`src/config/products.ts:30,40,50,60,70`), plus a comment that it's for "when Stripe is activated."
  - `src/components/BuyButton.tsx:11,17-19` — reads `product.stripeLink` to decide whether to open a real payment link in a new tab or fall back to `#contact`.
  - `src/App.tsx:204` — literal copy string: *"All orders go through our contact form for now. Stripe activation is a future step."*
- There is no order model, no session/cart state, no persistence layer (no database, no localStorage cart, no server-side order table), and no webhook or refund handling anywhere in the codebase.

**Conclusion: this is Stripe-*ready* scaffolding (a typed slot for a future payment link), not a Stripe integration.** No provider is wired up, no credentials exist, and nothing charges a card today.

## 2. What happens today when a visitor tries to buy?

Trace of the actual code path, starting from the storefront's "buy" section (`#buy`, `src/App.tsx:198`):

1. `src/App.tsx:218-220` renders one `ProductCard` per entry in `products` (`src/config/products.ts:21-72`) — five SKUs, all with `price: null` and `priceNote: 'Price to be confirmed by E N (GATE)'`.
2. Each `ProductCard` (`src/components/ProductCard.tsx:14-20`) shows the price placeholder text instead of a dollar amount, then renders a `BuyButton` (`src/components/ProductCard.tsx:27`).
3. `BuyButton` (`src/components/BuyButton.tsx:9-24`) calls `getActiveBuyLink(product)` (`src/config/products.ts:78-82`), which returns `product.stripeLink ?? '#contact'`. Since every product's `stripeLink` is `null`, this **always** resolves to `#contact` — an in-page anchor jump, not an external link. `isStripe` is therefore always `false`, so the link never opens in a new tab and its accessible name is `Request info for {product.name}`, not `Buy {product.name}`.
4. Clicking any buy button scrolls the visitor to the `#contact` section (`src/App.tsx:314` renders `ContactCard`, and further down the page the interest form lives at `src/App.tsx` under `id="contact"`).
5. From there the visitor either:
   - Fills out the Formspree-backed interest form (see §3), or
   - Uses the static `ContactCard` (`src/components/ContactCard.tsx:1-30`), which shows a `mailto:` link, a `tel:` link, and — only if `VITE_BOOKING_HREF` is set — a "Book a call" link to an external scheduler. If unset, it shows a placeholder string telling the operator to add it (`src/components/ContactCard.tsx:25-27`).

**No payment is ever collected. No order is ever created. The entire "buy" flow terminates in a lead-capture form or a contact card.** This matches the copy's own honesty: `src/App.tsx:204` tells the visitor orders go through the contact form "for now."

## 3. What is `VITE_FORM_ENDPOINT` wired to, and where does a submission go?

- `.env.example:5-8` documents it as a Formspree (https://formspree.io) form endpoint, read at build time.
- In `src/App.tsx`, the contact `<form>`'s `onSubmit` handler reads `import.meta.env.VITE_FORM_ENDPOINT`. If it's unset, `formStatus` is immediately set to `'error'` and nothing is sent (no network call happens at all). If set, the handler does a plain `fetch(formEndpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) })` directly to Formspree's hosted endpoint — there is no first-party backend in between.
- On a `2xx` response, `formStatus` becomes `'success'` and the form resets; on any other response or thrown error, `formStatus` becomes `'error'`.
- The `Content-Security-Policy` in `vercel.json` explicitly allow-lists `connect-src ... https://formspree.io` and `form-action 'self' https://formspree.io`, confirming Formspree is the only outbound destination this app is configured to talk to (besides Sentry's ingest endpoints for error monitoring).
- **Where the submission actually lands**: whatever inbox/dashboard is configured on the Formspree account tied to that form ID. This repo has no visibility into or control over that — it's entirely external to the codebase. I cannot confirm from the repo alone whether `VITE_FORM_ENDPOINT` is currently set in the deployed Vercel environment (that's a dashboard setting, not something checked into git); Phase 2 is the right place to verify that live.

## 4. What would selling actually require?

Listed, not chosen — provider selection is explicitly out of scope for me:

- **Payment provider integration.** A real checkout needs either (a) hosted Checkout/Payment Links from a provider (Stripe, PayPal, Square, etc.) — lowest lift, no card data touches this app — or (b) an embedded Elements/SDK flow, which needs a server component this repo does not have (this is a static Vite build with no `api/` routes). Whichever is chosen, `stripeLink` in `src/config/products.ts` is already shaped for the hosted-link approach; the field would just need real values and the CSP in `vercel.json` would need the provider's domains added to `connect-src`/`form-action`/`frame-src` as applicable.
- **Tax handling.** Nothing here computes or collects sales tax today. A hosted checkout (Stripe Checkout, etc.) can handle US sales tax via its own tax product, but that's a provider-side setup/configuration decision, not something this repo does.
- **Digital vs. physical fulfillment.** The five SKUs in `src/config/products.ts` mix a printed workbook, a "digital + print bundle" with "digital companion access," and multi-copy classroom/district packages. Physical items need a shipping/fulfillment process (address collection, shipping cost, carrier); digital items need a delivery mechanism (download link, license key, access grant) — none of which exists in this codebase. These are two different fulfillment problems and likely two different pieces of infrastructure.
- **Order records.** There is no database and no order table anywhere in this repo or its dependencies. Selling anything durably requires persisting who bought what, for how much, and whether it shipped/was delivered — that requires standing up storage (even a lightweight one) that does not exist today.
- **Refund path.** No refund logic, policy copy, or support workflow exists in the codebase. This needs both a technical path (via the payment provider's dashboard/API) and an operational one (who processes refund requests and how they reach LANY Books) — today all customer contact runs through the Formspree interest form and/or the static email/phone in `ContactCard`.
- **Order confirmation / receipts.** Nothing here emails a receipt or confirmation. That's typically the payment provider's job (Stripe/PayPal send their own receipts) but should be verified once a provider is chosen.

None of the above should be inferred as a recommendation of any specific provider — that decision is explicitly reserved for you per the task brief.

## Files reviewed

`AGENTS.md`, `CLAUDE.md`, `.env.example`, `README.md`, `vercel.json`, `package.json`, `src/App.tsx`, `src/copy.ts`, `src/config/products.ts`, `src/components/BuyButton.tsx`, `src/components/ProductCard.tsx`, `src/components/ContactCard.tsx`, `src/ErrorBoundary.tsx`, `src/monitoring.ts`, and a full-repo grep for payment/commerce keywords.
