# Stitch Design Import — Inventory

Imported from the Stitch account into `design/stitch/`. **Import-and-document only — no site code was changed.**
All rendered screenshots are full-resolution originals (`=s0`) converted to WebP (q88); generated HTML is included verbatim; design tokens are exported as JSON + Markdown.

## What was imported (counts)

| Project | Folder | UI screens (HTML+preview) | Standalone images | Text docs | Design system |
| --- | --- | --- | --- | --- | --- |
| La Cartilla de Gretel Home – Playful Variant | `gretel-home-playful-variant/` | 36 | 55 | 9 | Lumina Learning |
| La Cartilla de Gretel UI | `la-cartilla-de-gretel-ui/` | 8 | 13 | 0 | Gretel Storybook System |
| Gretel CRM Design System | `gretel-crm-design-system/` | 0 | 0 | 0 | Heritage Ledger (tokens only) |

**Totals: 44 UI screen designs, 68 images, 9 text docs, 3 design systems.** All are Lany Books / *La Cartilla de Gretel* assets.
Two `Extracted text from …` placeholder entries were empty and skipped. Non–Lany-Books Stitch projects were excluded (see *Excluded projects* at the bottom).

---

## ⭐ Top 5 strongest ideas (start here)

1. **Redesigned Homepage (Desktop + Mobile)** — `gretel-home-playful-variant/previews/053-…-redesigned-homepage-desktop.webp` + `004-…-mobile.webp`. The most complete and on-brand hero concept: warm pastel color bands, pill-shaped CTAs, soft-shadow floating cards. This is the single clearest upgrade to the current **hero + homepage** and sets the visual language for everything else.
2. **The Method as a step timeline** — `090-…-the-method-desktop.webp` (and mobile `014`). Turns the 'controlled phonetic method' claim into a visual: thin timeline with circular milestone nodes. Big credibility win for the **Method** section, which is currently text-led.
3. **High-Fidelity Product Gallery** — `083-…-gallery-desktop.webp` / `072-…-gallery-mobile.webp`. Polished showcase of the actual materials children use — a direct replacement for the current **Showcase** section.
4. **The 50-Year Legacy — Our Story** — `080-…-our-story-desktop.webp`. An author + heritage timeline that would elevate the thin **About the Author / Honors** area and reinforce trust.
5. **Gretel mascot expression sheet** — `la-cartilla-de-gretel-ui/previews/013-gretel-avatar-sheet.webp`. A reusable set of character poses/expressions. Low-effort, high-charm art that can warm up the hero, showcase, empty states, and form confirmations across the site.

> Honorable mentions: **The Kit** package grid (`060`), **Teaching Resources / Schools** block (`075`), and the **bilingual homepage** layouts (`061` / `059`) that already mirror the site's EN/ES toggle.

---

## Design systems & tokens

Three exported design systems (JSON + human-readable Markdown) live under each project's `tokens/` folder:

- **Lumina Learning** (`gretel-home-playful-variant/tokens/`) — the primary storefront system. *Soft Minimalism / Corporate-Modern*, warm pastel palette (blue/yellow/green bands), 8px baseline grid, 1200px container, pill buttons, 16px card radius, high-diffusion soft shadows. 47 named color tokens; Hanken Grotesk. **This is the recommended basis for the site refresh.**
- **Gretel Storybook System** (`la-cartilla-de-gretel-ui/tokens/`) — a warmer, more playful child-facing system used by the companion app screens (Plus Jakarta Sans, coral `#e2574c`). 47 named colors.
- **Heritage Ledger** (`gretel-crm-design-system/tokens/`) — a serif/navy 'heritage' system (Merriweather-leaning) intended for an internal CRM/back-office, not the public storefront. Tokens only (no screens). Included for completeness; **not** recommended for the marketing site.

Each `tokens/` folder contains `design-system.json` (full spec incl. style guidelines), `design-theme.json` (raw color/font/roundness tokens), and `design-tokens.md` (readable color table + guidelines).

---

## UI screens — La Cartilla de Gretel Home – Playful Variant

Each row: full-page WebP preview under `previews/` and the generated HTML under `screens/` (same filename stem).

| Title | Device | Dimensions | Suggested site target | Recommendation | Preview file |
| --- | --- | --- | --- | --- | --- |
| Lany Books - Teaching Resources (Mobile) | MOBILE | 780×7890 | Schools / teaching resources | Downloadable-resources / schools block; supports the school-quote CTA. | `002-lany-books-teaching-resources-mobile.webp` |
| Lany Books - Redesigned Homepage (Mobile) | MOBILE | 780×11700 | Hero + full homepage | Strongest full-page hero concept — warm pastel bands, pill CTAs. Direct upgrade path for the hero. | `004-lany-books-redesigned-homepage-mobile.webp` |
| Lany Books - Our Story (Multilingual Desktop) | DESKTOP | 2560×6280 | About the Author + Honors | Author story / 50-year legacy timeline — ideal for About + Honors. | `006-lany-books-our-story-multilingual-desktop.webp` |
| Lany Books - Physical Edition Home (Desktop) | DESKTOP | 1966×4996 | Hero / homepage (physical-book focus) | Homepage variant emphasising the printed book; useful for the Buy/Formats direction and physical merchandising. | `008-lany-books-physical-edition-home-desktop.webp` |
| Lany Books - Physical Edition Home (Mobile) - Updated Content | MOBILE | 780×6944 | Hero / homepage (physical-book focus) | Homepage variant emphasising the printed book; useful for the Buy/Formats direction and physical merchandising. | `011-lany-books-physical-edition-home-mobile-updated-content.webp` |
| Lany Books - The Method (Physical Focus - Desktop) | DESKTOP | 2560×6200 | The Method | Step-by-step phonetic method as a timeline with nodes — matches 'controlled method' messaging. | `012-lany-books-the-method-physical-focus-desktop.webp` |
| Lany Books - The Method (Mobile) | MOBILE | 780×7988 | The Method | Step-by-step phonetic method as a timeline with nodes — matches 'controlled method' messaging. | `014-lany-books-the-method-mobile.webp` |
| Lany Books - Physical Edition Home (Mobile) | MOBILE | 599×5333 | Hero / homepage (physical-book focus) | Homepage variant emphasising the printed book; useful for the Buy/Formats direction and physical merchandising. | `017-lany-books-physical-edition-home-mobile.webp` |
| La Cartilla de Gretel - Classroom Set Detail (Desktop) | DESKTOP | 2560×5314 | Schools / Showcase | Classroom-set product detail; strong for Schools + Showcase. | `019-la-cartilla-de-gretel-classroom-set-detail-desktop.webp` |
| Lany Books - Physical Edition Home (Desktop) - Updated Content | DESKTOP | 2560×6504 | Hero / homepage (physical-book focus) | Homepage variant emphasising the printed book; useful for the Buy/Formats direction and physical merchandising. | `020-lany-books-physical-edition-home-desktop-updated-content.webp` |
| Lany Books - Method Focused (Mobile) | MOBILE | 780×8022 | The Method | Step-by-step phonetic method as a timeline with nodes — matches 'controlled method' messaging. | `023-lany-books-method-focused-mobile.webp` |
| Lany Books - Philosophy (Desktop) | DESKTOP | 2560×4900 | About / Method intro | Narrative intro band; pairs with About / Method. | `028-lany-books-philosophy-desktop.webp` |
| Lany Books - Curriculum (Desktop) - Updated Content | DESKTOP | 2560×7268 | The Method / Curriculum | Curriculum breakdown; feeds The Method / scope-and-sequence content. | `029-lany-books-curriculum-desktop-updated-content.webp` |
| La Cartilla de Gretel - Classroom Set Detail (Mobile) | MOBILE | 780×6130 | Schools / Showcase | Classroom-set product detail; strong for Schools + Showcase. | `034-la-cartilla-de-gretel-classroom-set-detail-mobile.webp` |
| Lany Books - Heritage Edition (Mobile) | MOBILE | 780×8294 | About / Honors | Heritage/legacy treatment; alt direction for About/Honors. | `038-lany-books-heritage-edition-mobile.webp` |
| Lany Books - Physical Curriculum (Desktop) | DESKTOP | 2560×7268 | The Method / Curriculum | Curriculum breakdown; feeds The Method / scope-and-sequence content. | `044-lany-books-physical-curriculum-desktop.webp` |
| Lany Books - The Kit (Mobile) | MOBILE | 780×2880 | What's included / The Kit | 'What's included' package grid — clean cards for the Kit section. | `048-lany-books-the-kit-mobile.webp` |
| Lany Books - Redesigned Homepage (Desktop) | DESKTOP | 2560×7444 | Hero + full homepage | Strongest full-page hero concept — warm pastel bands, pill CTAs. Direct upgrade path for the hero. | `053-lany-books-redesigned-homepage-desktop.webp` |
| Lany Books - Teaching Resources (Multilingual Desktop) | DESKTOP | 2560×7284 | Schools / teaching resources | Downloadable-resources / schools block; supports the school-quote CTA. | `055-lany-books-teaching-resources-multilingual-desktop.webp` |
| Lany Books - Minimalist Heritage (Mobile) | MOBILE | 780×5008 | About / Honors | Heritage/legacy treatment; alt direction for About/Honors. | `057-lany-books-minimalist-heritage-mobile.webp` |
| Lany Books - The Curriculum (Desktop) | DESKTOP | 2560×7164 | The Method / Curriculum | Curriculum breakdown; feeds The Method / scope-and-sequence content. | `058-lany-books-the-curriculum-desktop.webp` |
| Lany Books - Home (Multilingual Mobile) | MOBILE | 780×6944 | Hero / full homepage (bilingual) | Bilingual homepage layout — mirrors the site's EN/ES toggle; good reference for section order. | `059-lany-books-home-multilingual-mobile.webp` |
| Lany Books - The Kit (Desktop) | DESKTOP | 2560×4318 | What's included / The Kit | 'What's included' package grid — clean cards for the Kit section. | `060-lany-books-the-kit-desktop.webp` |
| Lany Books - Home (Multilingual Desktop) | DESKTOP | 1966×5044 | Hero / full homepage (bilingual) | Bilingual homepage layout — mirrors the site's EN/ES toggle; good reference for section order. | `061-lany-books-home-multilingual-desktop.webp` |
| The 50-Year Legacy - Our Story (Mobile) | MOBILE | 780×6224 | About the Author + Honors | Author story / 50-year legacy timeline — ideal for About + Honors. | `064-the-50-year-legacy-our-story-mobile.webp` |
| La Cartilla de Gretel - Classroom Variant | DESKTOP | 3740×9541 | Schools / Showcase | Classroom-set product detail; strong for Schools + Showcase. | `066-la-cartilla-de-gretel-classroom-variant.webp` |
| La Cartilla de Gretel - High-Fidelity Gallery Mobile | MOBILE | 780×12030 | Showcase / gallery | High-fidelity product gallery — direct upgrade for the Showcase section. | `072-la-cartilla-de-gretel-high-fidelity-gallery-mobile.webp` |
| Lany Books - The Curriculum (Mobile) | MOBILE | 780×6708 | The Method / Curriculum | Curriculum breakdown; feeds The Method / scope-and-sequence content. | `073-lany-books-the-curriculum-mobile.webp` |
| Lany Books - The Method (Desktop) - Updated Content | DESKTOP | 2560×6200 | The Method | Step-by-step phonetic method as a timeline with nodes — matches 'controlled method' messaging. | `074-lany-books-the-method-desktop-updated-content.webp` |
| Lany Books - Teaching Resources (Desktop) | DESKTOP | 2560×7284 | Schools / teaching resources | Downloadable-resources / schools block; supports the school-quote CTA. | `075-lany-books-teaching-resources-desktop.webp` |
| The 50-Year Legacy - Our Story (Desktop) | DESKTOP | 2560×6280 | About the Author + Honors | Author story / 50-year legacy timeline — ideal for About + Honors. | `080-the-50-year-legacy-our-story-desktop.webp` |
| Lany Books - Philosophy (Mobile) | MOBILE | 780×5826 | About / Method intro | Narrative intro band; pairs with About / Method. | `081-lany-books-philosophy-mobile.webp` |
| La Cartilla de Gretel - High-Fidelity Gallery Desktop | DESKTOP | 2560×6384 | Showcase / gallery | High-fidelity product gallery — direct upgrade for the Showcase section. | `083-la-cartilla-de-gretel-high-fidelity-gallery-desktop.webp` |
| Lany Books - Mobile Menu & Settings State | MOBILE | 780×1768 | Global nav / mobile menu | Mobile nav + settings/language state; reference for global nav. | `086-lany-books-mobile-menu-settings-state.webp` |
| Lany Books - The Method (Desktop) | DESKTOP | 2560×8208 | The Method | Step-by-step phonetic method as a timeline with nodes — matches 'controlled method' messaging. | `090-lany-books-the-method-desktop.webp` |
| Lany Books - Home (Multilingual Mobile) - Retailers Added | MOBILE | 780×7952 | Hero / full homepage (bilingual) | Bilingual homepage layout — mirrors the site's EN/ES toggle; good reference for section order. | `094-lany-books-home-multilingual-mobile-retailers-added.webp` |

## UI screens — La Cartilla de Gretel UI (companion app)

Each row: full-page WebP preview under `previews/` and the generated HTML under `screens/` (same filename stem).

| Title | Device | Dimensions | Suggested site target | Recommendation | Preview file |
| --- | --- | --- | --- | --- | --- |
| Splash Screen - La Cartilla de Gretel | MOBILE | 780×1768 | Companion app — splash | Companion learning-app screen (separate product from the storefront) — see conflict note. | `000-splash-screen-la-cartilla-de-gretel.webp` |
| Welcome Screen - La Cartilla de Gretel | MOBILE | 780×1768 | Companion app — onboarding | Companion learning-app screen (separate product from the storefront) — see conflict note. | `001-welcome-screen-la-cartilla-de-gretel.webp` |
| Welcome Screen - La Cartilla de Gretel | MOBILE | 780×1768 | Companion app — onboarding | Companion learning-app screen (separate product from the storefront) — see conflict note. | `002-welcome-screen-la-cartilla-de-gretel.webp` |
| Success Screen - La Cartilla de Gretel | MOBILE | 780×1768 | Companion app — feedback | Companion learning-app screen (separate product from the storefront) — see conflict note. | `011-success-screen-la-cartilla-de-gretel.webp` |
| Try Again Screen - La Cartilla de Gretel | MOBILE | 685×1784 | Companion app — feedback | Companion learning-app screen (separate product from the storefront) — see conflict note. | `012-try-again-screen-la-cartilla-de-gretel.webp` |
| Gretel Avatar Sheet | MOBILE | 780×4870 | Gretel mascot / character art | Gretel mascot expression sheet — reusable character art for hero/showcase/feedback. | `013-gretel-avatar-sheet.webp` |
| Gretel Avatar Sheet | MOBILE | 780×3706 | Gretel mascot / character art | Gretel mascot expression sheet — reusable character art for hero/showcase/feedback. | `014-gretel-avatar-sheet.webp` |
| Splash Screen - La Cartilla de Gretel | MOBILE | 780×1768 | Companion app — splash | Companion learning-app screen (separate product from the storefront) — see conflict note. | `019-splash-screen-la-cartilla-de-gretel.webp` |

## Text documents (`gretel-home-playful-variant/docs/`)

Reference/spec docs Stitch generated alongside the designs (stored as HTML — some are rendered Markdown/JSON). Useful as source material, not for direct display.

| Document | What it is | File |
| --- | --- | --- |
| Marketing Kit.md | Marketing kit copy & asset checklist | `000-marketing-kit-md.html` |
| Lany Books ASO Metadata Report | App-store / search metadata report | `005-lany-books-aso-metadata-report.html` |
| Accessibility Audit Report - Lany Books Mobile | Accessibility audit of the mobile design | `015-accessibility-audit-report-lany-books-mobile.html` |
| Web Assets.md | Web asset checklist / spec | `021-web-assets-md.html` |
| Marketing Kit.md | Marketing kit copy & asset checklist | `027-marketing-kit-md.html` |
| La Cartilla de Gretel Educational Flow | Educational user-flow spec | `031-la-cartilla-de-gretel-educational-flow.html` |
| Handoff Prompt - La Cartilla de Gretel | Design→dev handoff prompt | `051-handoff-prompt-la-cartilla-de-gretel.html` |
| Lany Books Marketing Kit Copy | Rendered marketing copy sheet | `069-lany-books-marketing-kit-copy.html` |
| manifest.json | PWA / app manifest draft | `095-manifest-json.html` |

## Standalone images

All converted to WebP (originals were AI-generated PNG/JPG/WebP). Grouped by kind:

### `gretel-home-playful-variant/assets/` (55)
- **Photography (27)** — classroom / teacher / student lifestyle shots. Candidates for hero backgrounds, Schools, and Showcase supporting imagery.
- **Retailer logos (9)** — Amazon Kindle, Kobo, Barnes & Noble, Audible, Apple touch icon, etc. Directly usable in the **Buy / Formats** retailer row.
- **Marketing graphics (5)** — social cards, email header, banner ad, app-store title cards. For off-site campaigns / OG images.
- **Product mockups (2)** — printed trifold-brochure mockups. Support **Formats** (physical).
- **Brand icons (2)** — 'Lany Books' app/brand icon explorations.
- **Misc (7)** — cover art (WB Cover HD), source screenshots, stand-in images, existing site pulls.

### `la-cartilla-de-gretel-ui/assets/` (13)
- **Character art (9)** — Gretel poses/expressions (talk, wave, cheer) and grok-generated character renders. Reusable mascot library.
- **Misc (4)** — source reference images.

---

## ⚠️ Conflicts / flags (not resolved — flagged per brief)

1. **Companion app vs. storefront direction.** The *La Cartilla de Gretel UI* project (splash / welcome / success / try-again screens + the *Educational Flow* doc + `manifest.json`) describes an **interactive learning app**, not the current marketing/e-commerce storefront. Its *Gretel Storybook System* (coral, Plus Jakarta Sans) also diverges from the storefront's *Lumina Learning* (pastel, Hanken Grotesk). Decide whether the app is in scope before borrowing its screens wholesale; the **mascot art and tokens are safe to reuse** regardless.
2. **Two visual systems for the same brand.** *Lumina Learning* (soft pastel minimalism) vs *Heritage Ledger* (serif/navy heritage). Several 'Heritage Edition' / '50-Year Legacy' storefront screens lean heritage while the redesigned-homepage screens lean pastel-modern. The site currently reads closer to a restrained/heritage tone — picking one language (or an explicit blend) is a prerequisite before adopting screens from both.
3. **Physical vs digital emphasis.** Many screens are labelled *Physical Edition* / *Physical Curriculum*, while the live site leads with *Digital & audio editions*. The Stitch designs skew toward the printed product; reconcile the merchandising emphasis before lifting the Formats/Buy layouts.
4. **Retailer logos are third-party trademarks.** The 9 retailer logos (Kindle, Kobo, B&N, Audible…) are AI-approximations of trademarked marks. Replace with official brand assets and confirm usage rights before shipping to production.
5. **AI-generated photography = licensing/authenticity.** The 27 classroom photos are synthetic. Fine for comps; confirm the brand is comfortable shipping AI imagery (and any 'real classroom' authenticity claims) before production use.

---

## Excluded projects (inspected, not Lany Books)

Per the brief, ambiguous items were inspected rather than skipped. These were reviewed and found **unrelated** to Lany Books, so nothing was imported:

| Stitch project | Why excluded |
| --- | --- |
| Artisan Studio (Modern Craft) — PRD (67 screens) | A **collectible-figurine e-commerce** concept (Elvis, Marilyn Monroe, gladiators, 'Pre-order Vault', obsidian/luxury theme). No connection to books or education. |
| Otto Plumbing — Premium Redesign | Plumbing-business website. Unrelated. |
| Otto Plumbing Design System | Plumbing-business design system. Unrelated. |
| OTTO Plumbing CRM Facelift | Plumbing CRM. Unrelated. |
| OTTO Plumbing – Multi-User Login (Dark Mode) | Plumbing app login. Unrelated. |

## Suggested run order

1. **Adopt Lumina Learning tokens** (colors, radius, spacing, type) as the site's design language — cheapest, highest-leverage step, unblocks everything else.
2. **Hero + homepage** refresh from the Redesigned Homepage screens (bilingual variants as the layout reference).
3. **The Method** timeline and **Showcase** gallery — the two highest-impact section upgrades.
4. **About/Honors** from the 50-Year Legacy story; **Kit** and **Schools** blocks next.
5. Fold in **Gretel mascot art** across hero/showcase/form states.
6. Resolve the conflicts above (companion-app scope, heritage-vs-pastel, physical-vs-digital, logo/photo rights) **before** production.

