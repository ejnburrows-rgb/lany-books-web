# LANY Books & La Cartilla de Gretel — Realistic Storefront, Retailer Integration & CRM Platform Plan

Transform the LANY Books storefront into a realistic, production-ready publishing website with a single unified logo, authentic retailer channels (Amazon, Audible, Kindle, Barnes & Noble), 100% accurate book cover imagery, an in-depth pedagogical breakdown of why the phonetic program is unique, and a dedicated presentation for the La Cartilla de Gretel CRM & Digital Platform.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following decisions were confirmed directly by the owner during clarification:
> - **Official Logo**: Single official brand logo is the **open blue book forming an "L" with "any" inside and "Books" below**. The second floral emblem and the temporary switcher bar are completely removed.
> - **Retailer Integration**: Real interactive **Amazon, Audible, Kindle, and Barnes & Noble** cards with authentic brand glyphs/logos, built to look fully integrated and launch-ready, with an elegant "Coming Soon" notification/request interaction when clicked.
> - **Photo Accuracy & Removal of Sticker**: The green-background sticker illustration (`pose-7.webp`) at the bottom is removed entirely. The realistic classroom photos are retouched with the exact authentic *La Cartilla de Gretel* student book cover (`wb-cover-hd.webp`) so every photo reflects the real physical book with 100% fidelity.
> - **Curriculum & Method**: Dedicated section explaining how the controlled phonetic method works step-by-step and why it is fundamentally different and superior to generic Spanish literacy programs.
> - **CRM & Digital Platform**: Dedicated showcase highlighting **Teacher Classroom Management & Parent Portal**, **Interactive Digital Workbook & Audio Poems**, and **Student Progress Tracking & Phonetic Milestone Assessments**.

---

## 1. Overview & Core Concept

- **What It Does**: Presents LANY Books Publishing LLC as the official publisher for *La Cartilla de Gretel* (physical 10-piece course kit, student book, and digital editions) and upcoming works by veteran educator Leonor Lopetegui. It provides schools, teachers, and parents with clear curriculum details, purchase pathways, a preview of the upcoming digital CRM platform, and retailer availability.
- **Target Audience / Persona**:
  - Bilingual & Dual-Language Elementary Educators (Kindergarten – 2nd Grade) seeking a proven, structured Spanish reading curriculum.
  - School Administrators & Literacy Coordinators evaluating classroom packages and district pilots.
  - Hispanic & Spanish-learning Parents looking for authentic print books, eBooks, audiobooks, and home practice tools.
- **Key Value**: Bridges 50+ years of proven classroom pedagogy with modern publishing standards, integrating tactile print materials, digital interactive learning, and major retailer distribution channels.

---

## 2. User Experience & Visual Design

### A. Brand Identity & Header
- **Single Official Logo**: Open navy book forming an `"L"` with cursive `"any"` and colorful `"Books"`. Rendered crisply in the sticky top navigation and footer.
- **Top Bar Contract**: Clean 3-zone layout (single-row, no awkward wraps on mobile):
  - Zone 1: LANY Books logo + "LANY Books Publishing" wordmark.
  - Zone 2: Single-line navigation links (`Home`, `Program`, `Materials`, `CRM Platform`, `Retailers`, `Package`, `Schools`, `Author`, `Contact`).
  - Zone 3: Direct "Request Information" CTA button + Language Toggle (`English` / `Español`).

### B. Retailers Showcase (Amazon, Audible, Kindle, Barnes & Noble)
- Styled as high-credibility retailer cards with authentic brand typography and SVG logos:
  - **Amazon**: Physical print editions (Paperback / Hardcover).
  - **Kindle**: Digital Kindle eBook edition.
  - **Audible**: Official audiobook edition with recorded poems and pronunciation guides.
  - **Barnes & Noble**: NOOK eBook and retail bookstore distribution.
- **Interaction**: Integrated with active click feedback. When clicked, if an environment URL is configured (`VITE_AMAZON_URL`, etc.), it opens the retailer; otherwise, it triggers a polished, branded modal/toast: *"Coming soon to Amazon / Kindle / Audible / B&N — Request early notification"*, seamlessly connecting interested buyers to the inquiry form without dead clicks.

### C. "How the Program Works & Why It's Different" Section
- Replaces generic marketing copy with a rich pedagogical breakdown:
  1. **Direct Sound-Syllable Construction (Not English Translation)**: Unlike translated phonics curricula, Spanish reading is syllable-timed. *La Cartilla de Gretel* uses controlled vowel associations ($a, e, i, o, u$) followed by high-frequency consonant patterns ($m, p, s, l, t, n$) that form decodable Spanish words from day one.
  2. **Multi-Sensory 360° Method**: Children touch felt vowel figures, follow the 17" x 22" classroom presentation easel, listen to rhythmic poem audio, and write in the 92-page student workbook.
  3. **Zero Frustration Progression**: Every sentence and poem uses *only* previously taught letters and syllables—eliminating guessing and building instant reading confidence.
  4. **50+ Years of Classroom Testing**: Developed, refined, and proven across five decades of direct classroom teaching by Leonor Lopetegui.

### D. La Cartilla de Gretel CRM & Digital Platform Presentation
- High-impact interactive showcase section highlighting the modern digital companion:
  - **Feature 1: Teacher Classroom Management & Parent Home Portal**: Centralized dashboard to assign daily reading lessons, sync homework packets, and send bilingual progress updates home to parents.
  - **Feature 2: Interactive Digital Workbook & Audio Poem Activities**: Digital touch-enabled student book with native Spanish audio narration, interactive syllable drag-and-drop, and recited poems.
  - **Feature 3: Student Progress Tracking & Phonetic Milestone Assessments**: Real-time mastery trackers for letter sounds, syllable combinations, and fluency benchmarks aligned to Kindergarten, 1st, and 2nd grade literacy standards.

### E. Visual Assets & Removal of Sticker
- **Remove `pose-7.webp`**: The cut-out green sticker image at the bottom of the page is deleted from the layout and replaced with clean editorial typography and official credits.
- **Accurate Book Cover Retouch**: Classroom photos will showcase the real published book cover (`wb-cover-hd.webp`) with realistic lighting and perspective, matching the physical student book 100%.

---

## 3. Key Product Decisions & Trade-Offs

| Decision | Chosen Approach | Rationale | Alternatives Rejected |
| :--- | :--- | :--- | :--- |
| **Brand Mark** | Single open-book "L + any Books" logo throughout site | Eliminates confusing dual-logo visual noise; aligns with owner's explicit selection | Keeping both logos or using the circular floral badge |
| **Retailer Cards** | Real Amazon, Kindle, Audible, and Barnes & Noble cards with "Coming Soon" early notification flow | Meets the requirement to look fully integrated and launch-ready without publishing fake or broken links | Leaving them hidden until URLs are set or showing placeholder grey boxes |
| **CRM Section** | Rich feature presentation cards with live interactive preview tabs | Establishes the connection between the physical books and the digital platform | Simple text bullet points or external link |
| **Curriculum Depth** | Deep pedagogical comparison highlighting Spanish phonetic mechanics | Answers educator questions on why this method outperforms generic Spanish translations | High-level marketing slogans |
| **Author Section** | Editorial tribute layout with official credits and dedication | Professional, respectful presentation of Leonor Lopetegui's 50-year legacy without amateurish cutout graphics | Keeping the green-bordered sticker |

---

## 4. Technical Architecture & Invariants

```
┌────────────────────────────────────────────────────────────────────────┐
│                        LANY Books Storefront                           │
│  (Tailwind CSS v4 + React 19 + TypeScript + Vite 8 on Cloud Run 3000)  │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
      ┌──────────────────────────────┼──────────────────────────────┐
      ▼                              ▼                              ▼
┌──────────────┐             ┌──────────────┐             ┌───────────────────┐
│ Brand & Hero │             │ Retailers    │             │ Curriculum & CRM  │
│ - Single Logo│             │ - Amazon     │             │ - Phonetic Method │
│ - Real Kit   │             │ - Audible    │             │ - Why Different   │
│ - Retouched  │             │ - Kindle     │             │ - CRM Management  │
│   Photos     │             │ - B&N        │             │ - Digital Modules │
└──────────────┘             └──────────────┘             └───────────────────┘
```

### Smoke Test Invariants (`scripts/smoke-content.mjs` - 39/39 passing):
- Preserve all strict smoke test rules: No `(555)`, no `(GATE)`, no `bookingPlaceholder`, no `Purchase Now`/`Comprar ahora`, no fake `$150.00` offers, no `online store` / `tienda en línea` claims in copy.
- Products catalog retains `stripeLink: null` and `getActiveBuyLink(p) === '#contact'`.
- All env variable references and official credits structure preserved.
