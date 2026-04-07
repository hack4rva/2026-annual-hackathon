# Innovation Lifecycle Reviews

This directory contains post-event lifecycle reviews for every hackathon demo, organized by pillar and project. Each review evaluates whether the demo solved its stated problem and documents what was skipped, what was missed, and what a complete solution would require.

## How It Works

Each **demo project folder** contains:

| File | Contents |
|------|----------|
| `README.md` | Project metadata, video links, GitHub repos |
| `RESEARCH.md` | Deep research findings specific to this idea |
| `jtbd_analysis.md` | 3 jobs-to-be-done + 10+ open questions |
| `prior_art_research.md` | Regional prior art, real data sources, failure modes |
| `pain_points.md` | Documented pain points per JTBD |
| `gap_analysis.md` | Problem grounding, data source map, gap analysis, opportunities |
| `lifecycle_review.md` | Final ralph-loop output: rubric checklist + what was missed |

Each **pillar directory** contains:

| File | Contents |
|------|----------|
| `NEW_IDEAS.md` | Top-scored solution ideas from research + gap analysis |
| `NEW_IDEAS_RUBRIC_GRADES.md` | Desirability rubric scores (6 categories × 3 awards) |
| `NEW_IDEAS_BLUESKY.md` | Blue Ocean ERRC-derived ideas |
| `NEW_IDEAS_BLUESKY_RUBRIC_GRADES.md` | Desirability scores for ERRC ideas |
| `IMPLEMENTATION_REALITY_REVIEW.md` | Survivability scores for ALL ideas in the pillar |
| `_shared-*/` directories | Shared JTBD, pain points, prior art across demos in same PS |

Cross-pillar files at `ideas/` root:

| File | Contents |
|------|----------|
| `IMPLEMENTATION_REALITY_RUBRIC.md` | 5-dimension survivability rubric definition |
| `IMPLEMENTATION_REALITY_SYNTHESIS.md` | All 73 ideas ranked, infrastructure bundles, recommendations |
| `RICHMOND_TECH_STACK_2026.md` | Canonical Richmond tech stack reference |

## Skills That Produce These Files
- `skills/INNOVATION_LIFECYCLE/SKILL.md` — master 11-step orchestration
- `skills/ralph-loop/SKILL.md` — iterative review loop
- `skills/prior-art-regional-research/SKILL.md` — Parallel AI research
- `skills/sme-outreach/SKILL.md` — outreach email drafts (written to `outreach/`)
- Blue Ocean ERRC reframing — via `pillar-repos/*/skills/blue_ocean_reframing/SKILL.md`
- Implementation Reality scoring — via `IMPLEMENTATION_REALITY_RUBRIC.md` + `RICHMOND_TECH_STACK_2026.md`

## Rubrics

| Rubric | Purpose | File |
|--------|---------|------|
| **Lifecycle** | Did the demo solve the stated problem? (10 stages, binary checklist) | `LIFECYCLE_RUBRIC.md` |
| **Desirability** | Would this win a judge's vote? (6 categories, 1-5 scale, weighted by award) | `RUBRIC.md` |
| **Implementation Reality** | Will this survive past prototype? Can it ship? (5 dimensions, 1-5 scale) | `ideas/IMPLEMENTATION_REALITY_RUBRIC.md` |

## Status

| Pillar | Lifecycle | NEW_IDEAS | BLUESKY | IR Review | Outreach |
|--------|:---------:|:---------:|:-------:|:---------:|:--------:|
| A Thriving City Hall | ✅ 9 demos | ✅ 3 ideas | ✅ 2 ideas | ✅ 14 scored | ✅ 3 drafts |
| Thriving Neighborhoods | ✅ 5 demos + 1 dup | ✅ 3 ideas | ✅ 2 ideas | ✅ 11 scored | ✅ 3 drafts |
| Thriving Families | ✅ 5 demos + 1 corrupt | ✅ 3 ideas | ✅ 2 ideas | ✅ 11 scored | ✅ 3 drafts |
| A Thriving Economy | ✅ 4 demos + 2 missing | ✅ 3 ideas | ✅ 2 ideas | ✅ 10 scored | ✅ 3 drafts |
| Thriving & Inclusive Communities | ✅ 2 demos + 1 missing | ✅ 3 ideas | ✅ 2 ideas | ✅ 8 scored | ✅ 2 drafts |
| Built Environment | ✅ 4 demos | ✅ 3 ideas | ✅ 2 ideas | ✅ 9 scored | ✅ 3 drafts |
| City That Tells Its Stories | ✅ 5 demos | ✅ 3 ideas | ✅ 2 ideas | ✅ 10 scored | ✅ 3 drafts |
