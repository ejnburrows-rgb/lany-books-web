# LANY Books — La Cartilla de Gretel (Storefront)

Public-facing marketing & sales storefront for the digital adaptation of the Spanish literacy workbook **La Cartilla de Gretel**, published under the **LANY Books** imprint.

> This is the **storefront / sales site** only. It is a separate property from the classroom CRM app (repo: `cartilla-de-gretel`). No CRM, teacher, or student-app code lives here.

## Live site

- **Production:** https://lany-books-web.vercel.app
- Hosting: **Vercel** — every push to the `main` branch auto-deploys to production.

> If the production domain above is wrong or a custom domain is in use, update this line and the Vercel project settings accordingly.

## Tech stack

- **Vite** (build tool / dev server)
- **React 19** + **React DOM**
- **TypeScript**
- `@vitejs/plugin-react`
- `@sentry/react` (optional error monitoring)

## Getting started

```bash
# install dependencies
npm install

# start the local dev server
npm run dev

# type-check + production build
npm run build

# preview the production build locally
npm run preview
```

## Contact form (environment variable)

The interest form posts to [Formspree](https://formspree.io). Set one variable:

1. Create a free Formspree form and copy its endpoint URL.
2. Copy `.env.example` to `.env` and paste the URL into `VITE_FORM_ENDPOINT` for local dev.
3. Add the same `VITE_FORM_ENDPOINT` variable in **Vercel → Project → Settings → Environment Variables**, then redeploy.

Until the variable is set, the form shows an on-screen error instead of sending. No secret is stored in the code.

## Error monitoring (Sentry — optional)

Runtime errors are reported to [Sentry](https://sentry.io) when a DSN is set:

1. Create a free Sentry project and copy its DSN.
2. Add `VITE_SENTRY_DSN` in **Vercel → Settings → Environment Variables**, then redeploy.

Monitoring is a no-op until the DSN is set, and only reports from deployed builds — never local dev. See `.env.example`.

## Project structure

```
lany-books-web/
├── index.html              # App shell / entry HTML
├── package.json            # Scripts + dependencies
├── tsconfig.json           # TypeScript config
├── vite.config.ts          # Vite config
├── vercel.json             # Hosting headers / rewrites
├── .env.example            # Formspree + Sentry placeholders
├── AGENTS.md               # Rules for every coding tool
├── docs/
│   └── SECURITY_AUDIT.md   # Security review notes
├── public/                 # Static assets (book cover & images)
│   └── images/
└── src/                    # Application source
    ├── main.tsx            # React entry point
    ├── App.tsx             # Root component (hero, catalog, contact form)
    ├── components.tsx      # Shared UI pieces
    ├── copy.ts             # Site copy / i18n strings
    ├── ErrorBoundary.tsx   # Error boundary for production crashes
    ├── monitoring.ts       # Optional Sentry init
    ├── styles.css          # Global styles entry
    ├── styles/             # Split style modules
    └── vite-env.d.ts       # Vite/TypeScript env types
```

## Buy links

`purchaseUrls` in `src/App.tsx` stay empty until real store URLs exist. Do not invent links. The live site should send interested buyers to the contact form or show an honest "coming soon" path — never a dead checkout.

## Deployment

This site is deployed on **Vercel** and wired to this GitHub repository:

1. Push (or merge) to the **`main`** branch.
2. Vercel automatically builds (`npm run build`) and deploys to production.
3. No manual deploy step is required.

## The book & credits

- **Title:** La Cartilla de Gretel
- **Author:** Leonor Lopetegui
- **Illustrator:** Estela de Armas Plasencia
- **Contributors:** Silvia Díez & Aída Fernández
- **Digital adaptation:** Emilio José Novo
- **Imprint / publisher:** LANY Books LLC

## Copyright

The original book *La Cartilla de Gretel* and all author copyrights belong to **Leonor Lopetegui**. **LANY Books LLC** is the imprint/publisher of this digital adaptation and does **not** own the original book's copyright.
