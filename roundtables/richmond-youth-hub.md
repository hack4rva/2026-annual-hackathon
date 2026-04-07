# Roundtable (Condensed): Richmond Youth Hub

**Initiated:** 2026-04-02  
**Idea:** Richmond Youth Hub — unified youth employment navigator  
**Path:** `2026-annual-hackathon/ideas/thriving-families/richmond-youth-hub/`  
**Pillar:** Thriving Families  
**Problem Statement:** PS1 — Youth Employment Pathways (“one clear place” for summer jobs, internships, first-job guidance)  
**Implementation Reality (synthesis):** **14/25 — Tier B** (promising; meaningful investment needed)

## Input Materials

| File | Status |
|------|--------|
| IDEA.md | Loaded |
| RESEARCH_RESULT.md | Loaded (nine-city navigator landscape) |
| INNOVATION_ANALYSIS.md | Loaded (ERRC, assumptions, MVP shapes, problem scoping) |
| RICHMOND_TECH_STACK_2026.md | Loaded — commodity web/SMS; Help1RVA/findhelp **no public API**; cross-agency data partnership-dependent |
| `pillar-thriving-families/research/INDEX.md` | Loaded — corpus maps youth pathways (A1, A4, B1, B4, B5, C1–C2, D1, D5, F2, G1, G3, H2, H4, H5, I2) |

**Cross-ref:** `thriving-families/IMPLEMENTATION_REALITY_REVIEW.md` §6 — ownership/data/maintenance rationale for score 14.

---

## Seven Personas

**1 — Richmond teen (14–18), first summer job**  
She hears about programs from school or Instagram, not from a single city site. Pillar research (B1, B5) stresses mobile-first, low-friction flows and realistic connectivity. She benefits if one search surface replaces five bookmarks — but she will bounce if listings are wrong, deadlines are stale, or the app asks for more PII than programs need (G1).

**2 — School counselor / CBO youth specialist**  
He is the actual “router” today. A hub that duplicates his PDF packet without syncing to RPS or partner calendars adds work, not relief. He wants accurate eligibility, one-pager exports for families, and clarity on which programs still accept paper. INDEX sections C1–C2 frame fragmentation across operators; his buy-in determines whether teens ever see the URL.

**3 — Small employer willing to host youth**  
National comparators (Detroit GDYT, PYN) succeed partly by shrinking employer HR burden — centralized payroll, onboarding SLAs. Richmond’s IDEA acknowledges employer tooling “where scope allows.” Without fiscal intermediary and process design, she faces the same permit/hours maze (D1) and may post once then abandon the portal when admin stacks up.

**4 — OCWB / YES coordinator (“frontline owner”)**  
Implementation review assigns **Ownership 3**: mandate exists, but “no documented API; spreadsheets/manual.” She lives in the gap between vision and maintainable dataset. She needs partner MOUs, a listing schema, and a named refresh owner — not another demo that dies after the hackathon (H4, H5).

**5 — Mayoral / workforce leadership (champion)**  
RESEARCH_RESULT is explicit: sustained navigators sit on **baselined funding + interagency governance** (NYC DYCD, Boston guarantee, PYN, DESC). A weekend build proves UX; scale requires budget line and a governance table (0–90 day playbook in research). Without that champion, the product is a website, not infrastructure.

**6 — Parent / guardian (equity & trust)**  
Caregivers gate access for younger teens and worry about scams, data resale, and transportation. GRTC GTFS is a realistic open-data adjunct (D5, tech stack); combining “nearest opportunity” with permit steps builds trust. Equity gains in peer cities (Boston BPS tie-in, Chicago safe-spaces framing) imply **intentional** outreach design, not launch-and-hope (G3).

**7 — DIT / privacy reviewer**  
AR 2.13 applies if matching or chat uses AI; minors amplify consent and minimization duties (G1). Help1RVA cannot be bulk-ingested without partnership (tech stack). Architecturally, static or low-code front + curated backend fits City-adjacent deployment; anything that stores youth records needs security review and a data owner.

---

## Tensions

| Tension | A side | B side |
|---------|--------|--------|
| **Problem statement vs. full stack** | “One clear place” matches PS1 and public narrative | National winners pair discovery with **intake, payroll, employer portals** — weekend MVP cannot show that spine |
| **Impact vs. feasibility** | Rubric grades Impact/User Value at 5 | INNOVATION_ANALYSIS problem scoping puts **Feasibility at 2** for the real program; IR Tier **B** |
| **Tech vs. institutions** | Airtable/Power Apps can ship a portal quickly | **Governance and MOUs** are the long pole; tech is not the constraint |
| **Data hunger vs. APIs** | Aggregator needs fresh listings | No machine-readable citywide feed; Help1RVA **partner-only**; operators use spreadsheets |
| **Demo vs. honesty** | Searchable gallery demos well | **Real value** (routing, placement, payroll) is invisible in 48 hours — risks overclaiming |
| **Equity** | SMS-first and transit layers address B5 | Default spec is web-first; digital divide persists without explicit channel |
| **Innovation** | Richmond-specific unified apply + RPS integration would be novel | Pattern is **mature nationally** — Innovation capped unless reframed (e.g., evidence kit for funders) |

---

## Fatal Flaw

**The motivating pain is the implementation wall:** Fragmented listings are the problem — but there is **no durable, automated source of truth** for those listings. A navigator without partner agreements and a maintained schema becomes stale fast; the Implementation Reality review states this directly (Data Readiness 2, Maintenance 2). Secondary fatal risk: **no backbone owner with baselined funding** — then the hub is a grant slide, not SYEP-class infrastructure.

---

## Verdict

**Pilot the discovery gap; secure the table — do not ship the fantasy stack on Sunday.** The research-backed weekend move is manual curation + teen tests (INNOVATION_ANALYSIS “first test”) plus **identifying a governance sponsor** aligned to the 12-month playbook (MOUs, KPI scorecard, evaluation). Treat employer payroll and centralized intake as **phase 2+**, explicitly dependent on intermediary funding. Pair with open layers the City can already touch (e.g., **GRTC GTFS** for access framing) and strict **minor-data minimization** (G1). Strong pillar story for **intent and evidence**; weak **Mayor’s Choice** until ownership and data pipeline are nailed.

---

## Scores & Awards (1–5 rubric; from `NEW_IDEAS_RUBRIC_GRADES.md`)

| Category | Score | Note |
|----------|:-----:|------|
| Impact | 5 | Aligns with national scale evidence when fully realized |
| Feasibility | 4 | Graded for vision + plausible path; **IR B** reflects data/governance drag |
| User Value | 5 | Direct answer to “one clear place” for youth and navigators |
| Execution | 4 | Prototype demo credible; production execution is org-heavy |
| Innovation | 3 | Established municipal pattern; Richmond packaging is incremental |
| Equity & Inclusion | 4 | Strong if SMS/transit/outreach bundled; not automatic |

### Weighted totals (official arithmetic)

- **Pillar Award** (I×5 + UV×4 + F×3 + In×3 + Ex×3 + Eq×3): **90**  
- **Mayor’s Choice** (I×5 + F×5 + UV×4 + Ex×3 + Eq×3 + In×1): **92**  
- **Combined (Pillar + Mayor’s):** **182**  

**Moonshot** (Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2): **78** *(illustrative — not in source table)*

**Award read:** Top-tier **Thriving Families / PS1** contender on combined rubric; **Mayor’s Choice** solid but not automatic until implementability is de-risked. **Moonshot** modest — vision is borrowed from peer cities, not net-new.

---

## Implementation Reality (tech stack cross-check)

- **Fits:** Static or low-code web, SMS commodity providers, GRTC GTFS, manual/csv curated feeds, eventual Power Platform class stacks (peer: Seattle).  
- **Partnership-dependent:** Program data feeds, school district coordination, any centralized payroll, Help1RVA-style directories, cross-agency identity or referrals (Unite Us class).  
- **Not a 311/EnerGov/B2G wall issue** for a pure directory MVP — the **human data pipeline** is the wall.  
- **AI:** If used for matching or copy, plan for **AR 2.13** review and youth-safety guardrails (G1, G5).

---

## Rollback / Next Artifacts

- If no sponsor by N days: shrink to **published research brief + curated CSV** and sunset branded “hub” to avoid stale authority.  
- If partners won’t sign MOUs: stay in **link-out discovery** mode; do not promise unified application.  
- Deep dives: pillar `H2_mvp_youth_employment.md`, `F5_opportunities_do_not_build.md`, `92_red_flags.md`.
