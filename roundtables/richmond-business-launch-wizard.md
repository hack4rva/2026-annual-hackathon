# Roundtable (Condensed): Richmond Business Launch Wizard

**Initiated:** 2026-04-02  
**Idea:** Richmond Business Launch Wizard  
**Pillar:** A Thriving Economy  
**Problem Statement:** PS2 — Small Business Navigation (first-time entrepreneurs: steps, order, registration in Richmond)  
**Source:** NEW (post-event)  
**Implementation Reality:** **18/25 — Tier A** (Strong; 1–2 solvable blockers)  
**Synthesis rank:** #29 of 73 (by survivability score)

---

## Input materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `RICHMOND_TECH_STACK_2026.md` | Loaded |
| `pillar-repos/pillar-thriving-economy/research/INDEX.md` | Loaded — keyed reports: **A2** (small business journey), **B2** (setup personas), **C3** (front door), **D3** (business setup data), **E1/E3** (prior art), **F3** (setup framing), **G2/G5** (harm & guardrails), **H3** (rule-based MVP), **92** (red flags) |
| `IMPLEMENTATION_REALITY_REVIEW.md` (idea #4) | Loaded — dimension rationale |

---

## Existing rubric grades (NEW_IDEAS_RUBRIC_GRADES)

| Category | Score |
|----------|:-----:|
| Impact | 5 |
| Feasibility | 4 |
| User Value | 5 |
| Execution | 4 |
| Innovation | 3 |
| Equity | 4 |

| Award | Weighted score |
|-------|----------------|
| **Pillar (Economy / PS2)** | **90** |
| **Mayor's Choice** | **92** |
| **Moonshot** | **78** *(Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2)* |

---

## Seven personas (condensed)

### 1 — Mayor (Decider)

Clear MAP fit: Thriving Economy, PS2. Moves KPIs only if operationalized: fewer mis-ordered applications (CZC before BPOL), faster time-to-first-correct-submission, and staff inquiry deflection. **Refine** until there is a **named owner** (DED, project facilitator, or cross-agency charter)—not “the City.” Political risk is low (informational tool); reputational risk is high if outputs are wrong (NYC MyCity audit parallel). **Temporal:** **Appreciating** if permitting RFP replaces EnerGov with better surfaces; wizard stays pre-transactional.

### 2 — Innovator (Expander)

ERRC reframe holds: replace generic portals with a **sequenced, address-aware decision engine**; front-load zoning to kill surprise; optional **time-to-open** estimates from curated processing norms (differentiator vs. many peer wizards). Weekend danger is building **ambitious UX with thin rules**—the Innovator’s smallest proof is: three business types, staff-reviewed paths, one corridor of truth for dependencies.

### 3 — Frontliner (Operator)

For PDR/Finance counters: **Use** if the tool is trusted triage (Orlando/Cincinnati pattern: 95–98% self-service on comparable deployments). **No** if it becomes another redirect layer or spawns rework after bad sequencing. Co-design with permit techs and explicit “staff review required” disclaimers are mandatory. Verdict: **Maybe → Use** contingent on accuracy tests vs. live staff answers.

### 4 — Architect (Systems)

**No fatal structural wall** for MVP: wizard is **pre-application guidance** with links—does not require EnerGov API, RVA Business Portal API, or 311 (all documented gaps in `RICHMOND_TECH_STACK_2026.md`). **Caveats:** GeoHub zoning/parcel layers exist but **Plans of Development stale (June 2022)**; use zoning with freshness labeling. Integration surface: **standalone / minimal**. Recommendation: **Ship** as external static or commodity-hosted app; optional future embed in City CMS.

### 5 — Citizen (User reality)

**Engaged resident:** High value if the path is plain-language and completes in one session. **LEP users:** Research shows interactive localization often **breaks at PDFs and agency handoffs**—equity requires bilingual glossaries and human QA on regulatory strings, not only a language toggle. **Invisible resident:** Risk if home-based and micro-retail paths are omitted or fees/timelines misstated—those errors hit lowest-margin founders hardest.

### 6 — Activist (Ecosystem)

Prior art is **thick**: OpenCounter-class cities (Orlando, Cincinnati, Atlanta, Fort Worth, Salt Lake City) prove the **wizard** archetype; SF is guide-only; NYC MyCity shows **redirect + weak AI** failure mode. **Decision tree: Build (narrow) + Partner (for accuracy).** Richmond’s **RVA Business Portal** (modernized Jan 2025, no documented API) may be the eventual home—start outside, prove deflection, offer inside. Scale: pattern transfers to any city with similar PDF-scattered rules if engine is parameterized.

### 7 — Funder (Sustainability)

Year-one build can be lean (static site + rules JSON). **Year-three cost** is **curation**: quarterly (or faster) updates when fees, forms, and ordinances change—silent staleness is worse than honest “out of date.” Fund a **part-time rules owner** or embed in DED/PDR ops—not grant-only runway without a maintainer.

---

## Productive tensions (challenge rounds)

| Tension | What the table surfaced |
|---------|-------------------------|
| **Innovator vs. Architect** | “Time-to-open” and full LEP depth are ambitious; GeoHub staleness and PDF-source rules cap what can be automated without partnership. |
| **Mayor vs. Activist** | City legitimacy vs. shipping without City IT—Activist favors outside-in; Mayor needs an accountable owner for trust and maintenance. |
| **Frontliner vs. Innovator** | Staff want deflection; Innovator wants novel features—accuracy and narrow scope beat feature breadth. |
| **Citizen vs. System** | Users need end-to-end clarity; the system only publishes fragments—wizard must not pretend integration it does not have (NYC audit lesson). |

---

## Fatal flaw test

| Check | Result |
|-------|--------|
| No identifiable owner (Mayor + Activist) | **PASS** — Plausible: DED / City project facilitator; **condition:** formalize in charter. |
| Structural wall, no workaround (Architect) | **PASS** — Informational MVP avoids EnerGov/portal APIs; zoning via public GIS with caveats. |
| Net negative for frontline (Frontliner) | **PASS with conditions** — Fails if inaccurate; mitigated by co-design + disclaimers + pilot with staff. |
| No funding beyond pilot (Funder) | **PASS with conditions** — Needs maintenance line item, not one-off hackathon budget. |
| Harms Invisible Resident (Citizen) | **PASS with conditions** — Risk if English-only or wrong fees; mitigate with narrow scope, QA, and LEP plan. |

**Fatal flaw detected:** **None** — ownership and maintenance are **conditional passes**, not kill criteria.

---

## Final verdict

**GO — with conditions**

1. **Scope:** Weekend / MVP = few business types, hand-curated rules, no generative AI on regulatory content (per `IDEA.md` and NYC audit lesson).  
2. **Ownership:** Name a maintaining org or role before scaling marketing.  
3. **Data honesty:** Label zoning/source freshness; avoid implying live permit status without integration.  
4. **Equity:** Plan for Spanish (minimum) with human-reviewed regulatory language for anything user relies on to file.

**Temporal tag:** **Appreciating** — Better if permitting modernization improves public surfaces; rules engine can widen as curation matures.

---

## Status

| Field | Value |
|-------|--------|
| Phase | COMPLETE (condensed) |
| Verdict | **GO** (conditions above) |
| Best award fit | **Pillar (Economy)** / **Mayor's Choice** |
| Weakest award fit | **Moonshot** (Innovation 3 caps visionary weighting) |
