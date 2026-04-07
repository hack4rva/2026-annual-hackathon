# 2026-annual-hackathon — AI Assistant Context

This repository is the **central hub for exploring and refining hackathon ideas** from RVA Hacks 2026 (Richmond Civic Hackathon, March 27–29, 2026).

## What's Here

- **`ideas/`** — Per-pillar directories containing idea reviews, gap analyses, new ideas, rubric grades, demo transcripts, and videos. Each project has its own subdirectory.
- **`outreach/`** — SME follow-up emails (`emails/`) with links to detailed research and question pages (`questions/`).
- **`research/`** — Cross-cutting research that spans multiple pillars (not pillar-specific).
- **`skills/`** — Idea generation and review pipeline skills (Innovation Lifecycle, Ralph Loop, Pillar Pipeline, JTBD Research, Prior Art, Outreach).
- **`RUBRIC.md`** — Judging rubric and award weights.
- **`PILLARS.md`** — The seven MAP pillars and their problem statements.
- **`LIFECYCLE_RUBRIC.md`** — Innovation lifecycle scoring criteria.
- **`CONTACTS.md`** — SME contact list for outreach.
- **`JUDGE_SHEET.md`** — Judge scoring sheet template.

## What's NOT Here

Pillar-specific deep research lives in separate GitHub repositories. Each pillar repo contains foundational research (problem landscapes, users, services, data, prior art, risks, MVP) and post-event research answers.

| Pillar | Repository |
|--------|-----------|
| A Thriving City Hall | https://github.com/hack4rva/pillar-thriving-city-hall |
| Thriving Neighborhoods | https://github.com/hack4rva/pillar-thriving-neighborhoods |
| Thriving Families | https://github.com/hack4rva/pillar-thriving-families |
| A Thriving Economy | https://github.com/hack4rva/pillar-thriving-economy |
| Thriving & Inclusive Communities | https://github.com/hack4rva/pillar-thriving-inclusive-communities |
| A Thriving & Sustainable Built Environment | https://github.com/hack4rva/pillar-thriving-built-environment |
| A City That Tells Its Stories | https://github.com/hack4rva/pillar-city-storytelling |

When a skill needs pillar research, fetch or clone from the GitHub URL above. Locally, pillar repos are expected at `../pillar-repos/pillar-{slug}/` relative to this repo.

## How to Work in This Repo

1. Browse ideas: `ideas/<pillar>/` — each pillar has `NEW_IDEAS.md` (top ideas), `NEW_IDEAS_RUBRIC_GRADES.md` (scored), and per-project directories with lifecycle reviews, gap analyses, transcripts, and demos.
2. Run the pipeline: Skills in `skills/` drive the full review and idea-generation cycle. Start with `skills/pillar-pipeline/SKILL.md`.
3. Draft outreach: Use `skills/research-grounded-outreach/SKILL.md` to draft SME emails grounded in confirmed research.
4. Never delete — always extend. New ideas, research, and reviews are additive.
