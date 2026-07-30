# Production deployment mismatch

## Remote repository

`ejnburrows-rgb/lany-books-web`

https://github.com/ejnburrows-rgb/lany-books-web

## Production URL

https://lany-books-web.vercel.app

## Confirmed evidence

The production URL observed on 2026-07-30 does not serve current `main`.

| Marker | Current repository | Production page observed 2026-07-30 |
|---|---|---|
| Application | React storefront with program, materials, packages, schools, author, FAQ, and contact sections | Older Spanish catalog page |
| Product routes | Five quote/contact product cards in `src/config/products.ts` | Single book catalog plus digitalized CRM promotion |
| Deployment marker | `/version.json` added by this fix | Not present before this fix |

## Source-controlled proof

After an intended deployment, load:

https://lany-books-web.vercel.app/version.json

The correct source is deployed only when the file identifies this repository and `main`. A missing file means the production alias still serves another source or an older deployment.

## Required Vercel project settings

The existing project owning the production URL must use:

1. Git repository: `ejnburrows-rgb/lany-books-web`
2. Production branch: `main`
3. Root directory: repository root
4. Build command: `npm run build`
5. Output directory: `dist`

Do not create a replacement project or move the production URL unless the existing project is proven irreparable.
