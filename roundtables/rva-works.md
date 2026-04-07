# Roundtable (Condensed): RVA Works

**Initiated:** 2026-04-02  
**Idea:** RVA Works  
**Pillar:** Thriving Families  
**Problem Statement (MAP):** Youth Employment Pathways — one clear place for summer jobs, internships, and first-job guidance.  
**Source:** Demo (Eco Warriors / Parthav)  
**Note:** Folder materials describe **two visions**: (A) the hackathon **two-sided youth internship portal** with First Job Kit, employer verification, VA youth-law AI check, GRTC-aware listings (`IDEA.md`, `lifecycle_review.md`); (B) post-hoc **wraparound workforce platform** research (CCI, closed-loop referrals, MOUs) (`RESEARCH_RESULT.md`, `INNOVATION_ANALYSIS.md`). This roundtable treats A as the shipped concept and B as the strategic ceiling.

---

## Input Materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded — teen + employer portals, AI background, expansion (counselor persona) |
| `RESEARCH_RESULT.md` | Loaded — national municipal workforce/wraparound patterns |
| `INNOVATION_ANALYSIS.md` | Loaded — ERRC, crazy-8s, assumption map, feasibility verdict on “full” vision |
| `pillar-thriving-families/research/INDEX.md` | Loaded — corpus pointer (youth jobs + maternal; youth paths: A1/A4, B1/B4/B5, C1/C2/C4, D1/D5, E1/E3, F2, G1/G3, H2/H4) |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — open paths vs partnership walls |

---

## Seven Personas (single pass)

**1 — Teen first-time jobseeker**  
Loves the First Job Kit (scripts, guardian steps, checklists). Needs age-right listings (14–15 vs 16–17 are different laws). If the site is empty or shows wrong-band jobs, trust breaks immediately.

**2 — Small Richmond employer**  
Wants the compliance engine and Hire-a-Teen / Dolly links; fear of violating youth labor law is real. Will not post jobs until the platform feels “official” and the AI legal check is validated on real QSR/retail/recreation postings.

**3 — YES / OCWB anchor**  
Problem statement is “one clear place,” but the portal is a **parallel listing silo**, not a router across YES, Youth L.E.A.D.S., GFAC, partners. The institutional ask is seed worksites and endorsement—not another unfed marketplace.

**4 — Digital equity advocate**  
Transit time from nearest bus stop is the right equity move (GRTC GTFS is a documented open path). Browser-only + no SMS/offline path conflicts with `B5` / `E5` guidance: highest-need teens skew low-connectivity.

**5 — DIT / responsible-AI reviewer**  
AR 2.13: AI is permitted with DIT governance, transparency to users, minimization. Youth-facing “legal analysis” needs human-in-the-loop framing, audit trail, and no over-claiming—this is not a substitute for DOLI counsel.

**6 — Civic innovator (research lens)**  
National evidence says outcomes come from **barrier removal + closed-loop referrals + MDM**—Detroit, Philly, NYC scale. That is not what the demo shipped; it is the **five-year north star** if Richmond ever signs MOUs and builds a service directory (`INNOVATION_ANALYSIS` assumption #1 R×U = 25).

**7 — Judge / funder**  
Demo nails **differentiation** on First Job Kit + employer compliance + transit. Misses **ecosystem front door**, **work permit journey** (VAeECS closed—manual tracker still possible), and **supply cold start**.

---

## Tensions (condensed)

| Tension | A side | B side |
|--------|--------|--------|
| **Vision** | Lean youth marketplace + guides | Enterprise wraparound + CCI + cross-agency data |
| **“One place”** | Single URL for some listings | Aggregation/routing across 7+ programs |
| **Trust** | Employer verification + AI law flags | AI errors on youth law are liability/reputation risk |
| **Data** | GRTC GTFS works openly | Help1RVA / Unite Us: no free public APIs—directories need curation or partnership |
| **Equity** | Transit-aware listings | Offline/SMS absent → excludes East End / Northside concentration |
| **Feasibility** | Weekend-credible UI story | Full analysis vision = years, commissioner-level agreements (`INNOVATION_ANALYSIS` Lens 5) |

---

## Fatal Flaw

**Primary (demo):** **Cold-start + false front door.** Without OCWB/YES/ChamberRVA-fed listings, the two-sided market is empty; without routing to existing programs, it fails the MAP wording’s “one clear place” intent even if UX is strong (`lifecycle_review.md`).

**Secondary (if pursuing research “full” RVA Works):** **Institutional feasibility cliff**—highest-risk assumptions are agency MOU appetite and HIPAA/42 CFR Part 2 triggers for integrated referrals; without a named champion, the wraparound story stays a slide deck (`INNOVATION_ANALYSIS` Lens 6).

---

## Verdict

**Narrow ship / partner-first wedge.** Lead with **First Job Kit** (standalone value), **employer youth-law checker** (pilot with ChamberRVA), and **GRTC-grounded listing cards**—all align with open stack and pillar research (`H2`, `H4`, `D5`). Treat the **portal listings** as dependent on YES/OCWB seed data and explicit age-band guardrails. Park the **CCI / closed-loop / wage-record** arc until a city or workforce board executive sponsors data governance; the research is directionally right but not the same product as the demo.

---

## Scores & Awards *(illustrative — judge-owned)*

**Hackathon-style six categories (1–5)** — scoped to **demo A**, not the enterprise rewrite:

| Category | Score | Note |
|----------|:-----:|------|
| Impact | 4 | MAP-aligned; execution depends on supply + routing |
| Feasibility | 3 | GTFS + static site OK; listings + AI validation + partnerships uncertain |
| User Value | 4 | Strong teen + employer artifacts; incomplete permit journey |
| Execution | 3 | Credible prototype; synthetic listings; gaps per lifecycle |
| Innovation | 3 | Useful combo (transit + compliance + kit); not category-defining |
| Equity & Inclusion | 4 | Transit awareness excellent; offline/SMS gap pulls down |

**Weighted illustrations** (same formulas as event brief):

- **Pillar Award** (Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3): **~75** (using 4/3/4/3/3/4 above → 75 exact).
- **Mayor’s Choice** (Feasibility-heavy): **~72** — partnership dependency hurts.
- **Moonshot** (Innovation-heavy): **~66** — stronger if pitched as future CCI/wraparound; weak if judged only on shipped portal.

**Implementation Reality (demo wedge vs full vision)**  
- *Wedge* (curated listings + Kit + compliance + GTFS): **Tier B→A** — solvable with owner (OCWB/nonprofit), commodity hosting, no City IT mandate.  
- *Full* wraparound platform (`INNOVATION_ANALYSIS`): **Tier C–D** without MOUs and directory truth—matches analysis Feasibility **1**, Data readiness **2**.

---

## Tech stack cross-check (`RICHMOND_TECH_STACK_2026.md`)

- **Use:** Static hosting, GRTC GTFS, manual/curated job & resource data, SMS via commodity provider if added.  
- **Blocked / partnership:** Help1RVA bulk listings, Unite Us loops, VAeECS integration, any AvePoint/311 coupling (not required here).  
- **AI:** AR 2.13 — plan for DIT review, disclosure, and minimized PII for minors (`G1` alignment).

---

## Status

- **Phase:** CONDENSED — single synthesis for facilitators/judges.  
- **Verdict:** **Partner-first wedge**; do not confuse demo portal with CCI-scale research vision.
