# PERMANENT OWNER CONTRACT — VISIBLE WORK, GITHUB-FIRST, APPROVED DELIVERY AND LIVE VERIFICATION

This contract governs all coding agents across La Cartilla de Gretel, LANY Books, and NBO Operations Hub. Emilio is the owner and is not a developer. The coding agent takes full responsibility for technical delivery, merging, deployment, and live public verification.

---

## 1. No Local-Only Work — GitHub is Authoritative
- **Default Workflow**: All completed, authorized work must follow: **Create → Check → Commit → Push → Verify GitHub → Report**.
- Never leave completed work exclusively in local folders, agent memory, uncommitted working trees, unpushed commits, or temporary workspaces.
- **Explicit Preview Exception**: Local/temporary HTML-style previews are permitted ONLY when Emilio explicitly asks to review, compare, select, approve, or reject something before integration (e.g. artwork candidates, redesigned pages, new games, animations, Gretel chatbot appearance).
- Candidate previews must be mobile-friendly (390×844), clearly explained, and accompanied by a simple approval/rejection decision. After approval, the accepted work must be saved immediately to the official GitHub repository.
- Never push credentials, private information, or unapproved confidential material.

## 2. No Abandoned Branches — Finish or Report Blockers
- Branches are temporary stepping stones, never final destinations. An agent must never claim a feature is finished when it exists only in a branch, PR, or local workspace.
- When Emilio authorizes a change for publication, the coding agent owns the full delivery:
  1. Complete the change.
  2. Run required tests.
  3. Obtain required independent review.
  4. Resolve technical conflicts.
  5. Merge the exact approved work into `main`.
  6. Complete the authorized production deployment.
  7. Verify the actual public website.
  8. Confirm approved designs and interactions appear correctly.
  9. Report the real production link and proof.
- **Branch Cleanup**: After a branch is safely merged to `main`, confirm no active work depends on it, delete the obsolete remote branch, update the visual repository board, and preserve commit history. Never delete active or unmerged unique work.
- If a branch is unfinished, truthfully report it as unfinished with its exact blocker; never disguise it as delivered.

## 3. The Two Mandatory Visual Boards in Every Session
Every coding session must present two visual boards directly inside the chat reply. They must be readable on mobile, clean, and understandable without technical knowledge:
- **BOARD 1 — COMPLETE REPOSITORY AND RELEASE MAP**: Covers the whole project.
  `PROJECT → MAIN BRANCH → APPLICATION AREAS → ACTIVE BRANCHES → UNMERGED WORK → MERGED WORK → PRODUCTION DEPLOYMENT → VERIFIED PUBLIC WEBSITE`
  Shows all remote branches (grouped: main, active development, awaiting review, approved for integration, blocked/unverified, obsolete cleanup candidates) with their purpose explained in everyday words. Compares current `main` against current Vercel production revision, and displays a prominent warning if production is behind.
- **BOARD 2 — THIS SESSION'S WORK MAP**: A focused, minimalist view of the current conversation.
  `MY REQUEST → WHAT WE ARE CHANGING → WHAT ALREADY EXISTS → WHAT IS BEING CREATED → WHERE IT WILL BE SAVED → WHAT NEEDS APPROVAL → WHERE IT WILL BE MERGED → WHERE IT WILL BE DEPLOYED → WHAT HAS BEEN VERIFIED`
- **Repository-Backed Mirror**: Both boards must be grounded in the authoritative repository state and mirrored in `docs/OWNER-VISUAL-STATUS.md` in GitHub.

## 4. Mandatory Obsolete-Work & Stale-Version Cleanup
- Ensure Emilio and clients never repeatedly encounter old designs, outdated illustrations, duplicate approvals, or retired application versions.
- Automatically and safely clean up obsolete temporary previews, generated caches, unreferenced public assets, duplicate version pointers, and merged unprotected branches.
- **Protected Material Guard**: NEVER automatically or destructively delete original physical-book scans, approved artwork masters, unique historical source files, or unmerged work. Any destructive action affecting unique or protected material requires explicit owner approval.
- **Production Alignment**: After an authorized release, confirm the canonical public domain targets the correct deployment, remove obsolete aliases, and verify that old previews are not mistakenly presented as official production.

## 5. Approvals, Merges, and Deployments — Two Clear Choices
- When completed work is ready for publication, offer Emilio exactly two choices:
  - **A. Approve and publish — deploy it**
  - **B. Request changes**
- Explicitly choosing Option A authorizes the agent to complete required tests, independent reviews, merges, production deployments, and live public verification end-to-end.
- Do not make Emilio manage routine technical steps included in that authorization.
- An artwork approval, exploratory design selection, or preview acceptance is NOT a release authorization.

## 6. Mandatory Real-World Verification
- Verify all visible application changes on **Mobile (390×844)** and **Desktop (1366×768)**.
- Verify real storefront rendering, Gretel chatbot responses, contact forms, and navigation.
- Use only the owner's status labels:
  - **DONE and live** (Verified working on public production URL)
  - **DONE but not live** (Completed and tested in code, awaiting deployment)
  - **WAITING** (Names the specific blocker)
  - **NOT TESTED** (Evidence is insufficient)
- Never claim success based only on code, an agent claim, or a passing build without checking the real result.

## 7. Everyday Language & Non-Technical Communication
- Explain all concepts in everyday words. Avoid technical jargon.
- Do not ask Emilio to choose technical implementation methods unless the decision affects functionality, cost, safety, ownership, or the visible result.
- Present answers and visual proof first, keeping technical evidence accessible behind optional links or details.

---

# LANY BOOKS — SPECIFIC STOREFRONT OPERATING RULES

This section is LANY's complete active repository agent contract. Current owner decisions, current verified GitHub state, and the existing scoped files below outrank dated reports.

## Project & Scope

- This repository is the public-facing LANY Books LLC storefront and information site.
- The separate classroom/teacher application is `ejnburrows-rgb/cartilla-de-gretel`.
- Professional publisher/storefront presentation. No mascots or cartoons unless Emilio explicitly asks.
- Do not invent prices, availability, policies, phone numbers, domains, retailer links, licensing terms, fulfillment claims, or school-ordering terms.
- `OWNER-DECISIONS.md` records business decisions that still require owner confirmation.
- Online checkout stays disabled until the required commerce decisions are confirmed.

## Production

- Host: Vercel.
- Release branch: `main`.
- A merge to `main` triggers a production deployment on Vercel.
- A commit is not a deploy request. Work on a branch; merge once only when Emilio asks for or approves the release checkpoint via Option A.
- Keep `main` usable at all times.

## Contact and Monitoring

- `VITE_FORM_ENDPOINT` controls contact-form delivery.
- `VITE_CONTACT_EMAIL` optionally enables the direct contact card.
- `VITE_SENTRY_DSN` is optional monitoring; the site must work without it.
- Never commit real secrets or private environment values.

## Verification

Before release, run the repository checks that are available:
- `npm ci`
- `npm run typecheck`
- `node scripts/smoke-content.mjs`
- `npm run build`

For visible changes, verify the actual rendered storefront before calling the work done.
