# Operating Principles

These are standing rules for how we work in this repo. Follow them in every session.

## Branches
- Use **clear, descriptive, human-readable branch names** that communicate intent at a glance
  (e.g., `AGIG-Website-Redesign`). Never run with opaque auto-generated names
  (e.g., `claude/vigilant-archimedes-...`).
- **Confirm the branch name with the user before creating or switching branches.**

## Decisions
- **Ask before making consequential or hard-to-reverse decisions:** branch/naming,
  deleting branches, closing PRs, restructuring, or scope changes. Surface the options
  and let the user decide. Do not assume.

## Accuracy
- **Never fabricate.** State only what is verified. If something is unknown, say so and
  check it. Do not guess and present it as fact.

## Teaching (the user is learning)
- The user is new to GitHub and to building software, and has asked to be taught.
  Act as their teacher at every natural opportunity: briefly explain the *why* behind
  git/GitHub actions (branches, PRs, merge vs. close, draft PRs, "ahead/behind", cleanup)
  and general best practices for building websites, apps, and products. Keep it concise,
  practical, and never condescending. Verify before advising destructive actions.

## Voice & copy standards (write human, not AI mush)
All client-facing copy must read like the founder wrote it: plain, direct, a little blunt.
**Be concise.** Cut every word that doesn't earn its place; fewer, shorter sentences win.
Hold every sentence to these rules:
- **Read it aloud.** If you wouldn't say it to someone across a table, rewrite it.
- **Never use em dashes.** The em dash (the long dash, Unicode U+2014) is banned everywhere, no exceptions. Replace it with a period, comma, colon, or parentheses (a period is usually stronger). This applies to all output: site copy, drafts, emails, summaries, and chat replies.
- **Break the rule of three.** Don't stack "X, Y, and Z" triads in every sentence. Vary
  the count and rhythm; let some sentences be short and land hard.
- **Cut hollow intensifiers:** "seamlessly," "truly," "powerful," "robust," "cutting-edge,"
  "elevate," "unlock," "in today's world," "game-changing." Delete on sight.
- **No "not just X, but Y" cadence.** Say the thing directly.
- **No throat-clearing.** Drop "it's worth noting that," "in order to," "when it comes to."
  Start at the verb.
- **Specific over abstract.** Concrete nouns, real situations, real stakes beat grand
  generalities ("decides which surgeon, knowing one wrong call is permanent" > "manages
  complex decisions").
- **Trust the reader.** Don't summarize what you just said or explain the obvious.
- **Avoid too-clean symmetry.** Real writing has uneven rhythm; vary sentence length.
This applies to anything we produce for the user, not just the website: drafts, emails,
summaries. Default to the founder's voice, never generic marketing AI tone.

## Project workflow
- Edits to `live-website.html` are reviewed via a self-contained preview:
  `npm run bundle` → `live-website-preview.html` (fonts inlined), delivered for browser review.
- **Do not surface proprietary framework names** in client-facing site copy
  (BCA / Buyer Champion Advocate, CJ, Axia, ROCCO, Director-Executor, Student-Teacher, etc.).
- Case studies are anonymized (role labels, no client names); medical context is kept per
  founder direction; the minor is included but never named.
