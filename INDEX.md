# RVA Hacks 2026 — Central Hub Index

**For AI agents:** Read this file first. It tells you what lives here and exactly which file to open for any question type. Do not read every file; use this index to navigate to the right one.

---

## What Lives in This Repo

```
ideas/          Per-pillar lifecycle reviews, idea rankings, and survivability scores
outreach/       SME outreach — emails/ for sendable drafts, questions/ for detailed research
research/       Cross-cutting theory and methodology (not pillar-specific)
skills/         Pipeline skills for running the lifecycle review and outreach workflow
```

Root files: `RUBRIC.md` (judging), `LIFECYCLE_RUBRIC.md` (lifecycle completeness), `PILLARS.md` (MAP pillars), `CONTACTS.md`, `JUDGE_SHEET.md`

---

## Navigate by Question Type

| Question | File to open |
|----------|-------------|
| What ideas came out of pillar X? | `ideas/<pillar>/NEW_IDEAS.md` |
| How did those ideas score for each award? | `ideas/<pillar>/NEW_IDEAS_RUBRIC_GRADES.md` |
| What bold / Blue Ocean ideas were generated? | `ideas/<pillar>/NEW_IDEAS_BLUESKY.md` |
| How did the ERRC ideas score? | `ideas/<pillar>/NEW_IDEAS_BLUESKY_RUBRIC_GRADES.md` |
| Which of ALL 73 ideas can actually ship? | `ideas/IMPLEMENTATION_REALITY_SYNTHESIS.md` |
| Which ideas are shippable within pillar X? | `ideas/<pillar>/IMPLEMENTATION_REALITY_REVIEW.md` |
| What is Richmond's actual tech stack? | `ideas/RICHMOND_TECH_STACK_2026.md` |
| What files does each project-level review contain? | `ideas/REVIEWS_README.md` |
| What deep research exists for a specific project? | `ideas/<pillar>/<project>/RESEARCH.md` — links to the pillar repo |
| What outreach email was sent about topic X? | `outreach/emails/<pillar>/<contact-slug>.md` |
| What background research backed that email? | `outreach/questions/<pillar>/<contact-slug>.md` |
| How does the lifecycle evaluation pipeline work? | `skills/INNOVATION_LIFECYCLE/SKILL.md` |
| What is the survivability rubric? | `ideas/IMPLEMENTATION_REALITY_RUBRIC.md` |

---

## The Seven Pillars

| Pillar | Ideas dir | Pillar research repo |
|--------|-----------|---------------------|
| A Thriving City Hall | [`ideas/thriving-city-hall/`](ideas/thriving-city-hall/) | [hack4rva/pillar-thriving-city-hall](https://github.com/hack4rva/pillar-thriving-city-hall) |
| Thriving Neighborhoods | [`ideas/thriving-neighborhoods/`](ideas/thriving-neighborhoods/) | [hack4rva/pillar-thriving-neighborhoods](https://github.com/hack4rva/pillar-thriving-neighborhoods) |
| Thriving Families | [`ideas/thriving-families/`](ideas/thriving-families/) | [hack4rva/pillar-thriving-families](https://github.com/hack4rva/pillar-thriving-families) |
| A Thriving Economy | [`ideas/thriving-economy/`](ideas/thriving-economy/) | [hack4rva/pillar-thriving-economy](https://github.com/hack4rva/pillar-thriving-economy) |
| Thriving & Inclusive Communities | [`ideas/thriving-inclusive-communities/`](ideas/thriving-inclusive-communities/) | [hack4rva/pillar-thriving-inclusive-communities](https://github.com/hack4rva/pillar-thriving-inclusive-communities) |
| A Thriving & Sustainable Built Environment | [`ideas/thriving-built-environment/`](ideas/thriving-built-environment/) | [hack4rva/pillar-thriving-built-environment](https://github.com/hack4rva/pillar-thriving-built-environment) |
| A City That Tells Its Stories | [`ideas/city-storytelling/`](ideas/city-storytelling/) | [hack4rva/pillar-city-storytelling](https://github.com/hack4rva/pillar-city-storytelling) |

---

## Per-Pillar Idea File Inventory

Each pillar directory under `ideas/` contains the same structure:

```
NEW_IDEAS.md                      Top-scored solution ideas (research + gap analysis)
NEW_IDEAS_RUBRIC_GRADES.md        Desirability scores (6 categories × 3 awards)
NEW_IDEAS_BLUESKY.md              Blue Ocean ERRC-derived ideas
NEW_IDEAS_BLUESKY_RUBRIC_GRADES.md  Desirability scores for ERRC ideas
IMPLEMENTATION_REALITY_REVIEW.md  Survivability scores for all ideas in this pillar
_shared-<problem-statement>/      Shared JTBD, pain points, prior art across demos
_research-answers/                Parallel AI research answers (varies by pillar)
<project-slug>/                   Per-demo lifecycle artifacts (see REVIEWS_README.md)
```

**Note:** Not all pillars have `_research-answers/` mirrored here. For pillars without it, the full research-answer files live in the pillar repo's `post-event-research/_research-answers/`. Only `thriving-city-hall` and `thriving-neighborhoods` have their `_research-answers/` mirrored in this repo.

---

## Cross-Cutting Research (`research/`)

See [`research/INDEX.md`](research/INDEX.md) for descriptions and when-to-read guidance.

Five cross-cutting theory and methodology files:
- `cats-technology-architecture-and-prior-art.md`
- `cats-institutional-framework-and-design.md`
- `civic-innovation-value-chain-theory.md`
- `hackathon-to-public-value-richmond-framework.md`
- `parallel-ai-research-quickstart.md`

---

## Pillar Research Repos (Deep Research)

Each pillar has a dedicated research repo with 51–70 deep research reports, skills, data inventories, and the full `post-event-research/` directory including per-project JTBD, pain points, prior art, and solution ideas.

Agent boot sequence for a pillar repo:
1. Read `CORPUS_GUIDE.md` — corpus orientation
2. Read `AGENTS.md` — agent behavior spec and navigation rules
3. Read `manifest.json` — machine-readable file registry
4. Read `research/INDEX.md` — section-by-section research map
5. Read `post-event-research/INDEX.md` — per-project research inventory
