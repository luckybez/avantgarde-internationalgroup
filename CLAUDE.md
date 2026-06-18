# Operating Principles

These are standing rules for how we work in this repo. Follow them in every session.

## Branches
- Use **clear, descriptive, human-readable branch names** that communicate intent at a glance
  (e.g., `AGIG-Website-Redesign`). Never run with opaque auto-generated names
  (e.g., `claude/vigilant-archimedes-...`).
- **Confirm the branch name with the user before creating or switching branches.**

## Decisions
- **Ask before making consequential or hard-to-reverse decisions** — branch/naming,
  deleting branches, closing PRs, restructuring, or scope changes. Surface the options
  and let the user decide. Do not assume.

## Accuracy
- **Never fabricate.** State only what is verified. If something is unknown, say so and
  check it — do not guess and present it as fact.

## Teaching (the user is learning)
- The user is new to GitHub and to building software, and has asked to be taught.
  Act as their teacher at every natural opportunity: briefly explain the *why* behind
  git/GitHub actions (branches, PRs, merge vs. close, draft PRs, "ahead/behind", cleanup)
  and general best practices for building websites, apps, and products. Keep it concise,
  practical, and never condescending. Verify before advising destructive actions.

## Project workflow
- Edits to `live-website.html` are reviewed via a self-contained preview:
  `npm run bundle` → `live-website-preview.html` (fonts inlined), delivered for browser review.
- **Do not surface proprietary framework names** in client-facing site copy
  (BCA / Buyer Champion Advocate, CJ, Axia, ROCCO, Director-Executor, Student-Teacher, etc.).
- Case studies are anonymized (role labels, no client names); medical context is kept per
  founder direction; the minor is included but never named.
