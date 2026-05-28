# LANY Books — Storefront

> Publisher landing page for **LANY Books LLC**.
> Showcases *La Cartilla de Gretel* and the forthcoming catalog.
> No e-commerce. No prices. A polished presentation site.

[![Stack](https://img.shields.io/badge/stack-Vite_•_React_19_•_Tailwind_4-1F1A17)](#tech-stack)
[![License](https://img.shields.io/badge/license-Proprietary-E63946)](./LICENSE)
[![Status](https://img.shields.io/badge/status-active-2A9D8F)](#)

---

## About

**LANY Books LLC** is the independent publisher of *La Cartilla de Gretel*, a
Spanish-language literacy workbook authored by **Leonor Lopetegui** (©2004) and
illustrated by **Estela de Armas Plasencia**, with contributions from
**Aída Fernández** and **Silvia Diez**.

This site is the public face of the imprint. It introduces the author, presents
the workbook (print, Kindle, and Audible formats), links to the digital
companion *La Cartilla de Gretel Digitalizado*, and previews upcoming titles.

## What's inside

- **Featured book:** *La Cartilla de Gretel* — 92 pages, 24 lessons.
  ISBN 0-971-8696-8-5. Available in print, Kindle, and as an Audible audiobook.
- **Digital companion:** *La Cartilla de Gretel Digitalizado* — a teacher CRM
  built around the original workbook. Lives at
  [cartilla-de-gretel.vercel.app](https://cartilla-de-gretel.vercel.app).
- **More to come:** placeholder cards for forthcoming LANY Books titles.

## Tech stack

| Layer | Tool |
|---|---|
| Build | Vite 7 |
| UI    | React 19 + TypeScript |
| Styles | Tailwind CSS 4 |
| Animation | Framer Motion 12 |
| Package manager | pnpm |
| Deploy | Vercel (auto-deploys from `main`) |

## Local development

```
pnpm install
pnpm run dev      # http://localhost:5173
pnpm run build    # production build → ./dist
pnpm run preview  # serve the production build locally
```

## Project structure

```
lany-books-web/
├── public/
│   ├── book-samples/        # workbook scans (curated subset)
│   └── gretel/              # Gretel character sprites
├── src/
│   ├── components/          # Hero, AuthorCard, ProductCard, …
│   ├── content/
│   │   └── lany-catalog.ts  # typed catalog data
│   ├── App.tsx              # single-page landing
│   ├── main.tsx
│   └── index.css            # Tailwind v4 + design tokens
├── README.md
├── LICENSE
└── vite.config.ts
```

## Image attribution

All workbook illustrations and Gretel artwork are © **Estela de Armas Plasencia**.
All workbook text is © **Leonor Lopetegui**. All images in `public/book-samples/`
and `public/gretel/` are reproduced here with the author's permission for use
on the LANY Books storefront. They are **not** licensed for redistribution.

## Deploying

This project is wired to Vercel:

1. Vercel imports the repo from `github.com/ejnburrows-rgb/lany-books-web`.
2. Framework preset: **Vite**. Build command: `pnpm run build`. Output: `dist`.
3. Every push to `main` triggers an auto-deploy.

## Roadmap

- [x] Author spotlight + featured workbook
- [x] Digital companion section linking to the live app
- [x] "Más por venir" teaser cards
- [ ] Real Amazon ASIN + Audible product links once listings go live
- [ ] Mailing-list backend (currently a `mailto:` placeholder)
- [ ] Press kit / downloadable assets section
- [ ] Spanish/English language toggle

## License

Proprietary. © 2004–2026 Leonor Lopetegui · © 2026 LANY Books LLC.
All rights reserved. See [`LICENSE`](./LICENSE).
