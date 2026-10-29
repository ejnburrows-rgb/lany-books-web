# LANY Books — La Cartilla de Gretel Storefront

Public-facing storefront and information site for **La Cartilla de Gretel**, published under the **LANY Books** imprint.

This repository is the sales/information storefront only. The separate classroom/teacher application lives in `ejnburrows-rgb/cartilla-de-gretel`.

## Production

- **URL:** https://lany-books-web-delta.vercel.app
- **Host:** Vercel
- **Release branch:** `main`
- Every merge to `main` triggers a Vercel production deployment.

Online checkout is not enabled. Prices are not hard-coded. Product availability, pricing, and school-ordering details are intentionally handled as current-information requests rather than unverified storefront claims.

## Contact delivery

The contact form uses `VITE_FORM_ENDPOINT`. `VITE_CONTACT_EMAIL` controls whether a direct contact card is shown. If the form endpoint is unset, the UI reports an error rather than claiming a successful submission.

No paid AI API or paid learning API is required by this storefront.

## Optional monitoring

`VITE_SENTRY_DSN` is optional. The application does not require Sentry to run.

## Stack

- Vite
- React 19
- TypeScript
- Vercel

## Local commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Product credits

- **Title:** La Cartilla de Gretel
- **Author:** Leonor Lopetegui
- **Illustrator:** Estela de Armas Plasencia
- **Contributors:** Silvia Díez & Aída Fernández
- **Digital adaptation:** Emilio José Novo
- **Imprint / publisher:** LANY Books LLC

## Copyright

The original book *La Cartilla de Gretel* and author copyrights belong to **Leonor Lopetegui**. **LANY Books LLC** is the imprint/publisher of this adaptation and does not claim ownership of the original book copyright.
