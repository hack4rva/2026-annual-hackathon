# Roundtable: Grant Pack Builder (CONDENSED)

**Initiated:** 2026-04-02  
**Idea:** Grant Pack Builder  
**Pillar:** Thriving Families  
**Problem statement:** Maternal Health Data Coordination — CBOs lose large amounts of time re-compiling neighborhood MCH statistics for grants; outputs are inconsistent and sometimes not credible with funders.  
**Source:** NEW (post-event)  
**Implementation Reality:** **21/25 — Tier S** (IMPLEMENTATION_REALITY_SYNTHESIS.md; bundle pattern: public APIs + stateless PDF)  
**Overall rank (implementation list):** #12 of 73 (tied at 21 with several peers)

---

## Input materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — ACS/Census API, federal/state open data; CDC WONDER API national-only for vital stats; no City closed-system dependency for MVP |
| `pillar-repos/pillar-thriving-families/research/INDEX.md` | Loaded — navigates to D2/D3/D4 (VDH, ACS, KIDS COUNT), G2 (health claims), I3 (grant-ready maternal pitch), F5 (regulatory tripwires) |

---

## Existing rubric grades (`NEW_IDEAS_RUBRIC_GRADES.md`)

| Category | Score |
|----------|:-----:|
| Impact | 4 |
| Feasibility | 5 |
| User Value | 5 |
| Execution | 4 |
| Innovation | 3 |
| Equity | 5 |

**Pillar Award:** 91 | **Mayor's Choice:** 95 | **Moonshot** (computed): Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2 = **79**

---

## Seven personas (single pass)

### 1 — INNOVATOR
Non-obvious value is not “more charts” but **methodology-visible, reusable neighborhood packs**: CV flags, VDH-aligned suppression (<20), version-stamped citations, and one input (ZIP/tract) → branded PDF/PPTX. Differentiation from PolicyMap/Social Explorer is **Virginia-native bundling (VDH MCH + HOI + VDOE school health)** plus **zero recurring license** for cash-strapped CBOs—not a net-new algorithm. Stretch ideas (funder match, coalition shared layer, narrative LLM) are where novelty lives; baseline pipeline is **integration + QA discipline**, not blue-sky tech.

### 2 — ACTIVIST / FIELD BUILDER
Fits the **“artifact generator without City IT”** pattern: helps small MCH CBOs compete for dollars that already exist. Pillar research (`C3`, `C4`, `F4`) stresses fragmentation and duplicated analysis; a shared indicator catalog could reduce **contradictory stats across grants**. Risk: tool built in isolation without **RHHD / coalition buy-in** becomes another silo. Prefer **pilot with named CBOs** and optional epidemiology review hook.

### 3 — CITIZEN / COMMUNITY
Indirect benefit: better grants → more programs. Direct harm surface is low if PII stays out. **Framing risk:** auto prose or indicator choice could reinforce deficit narratives; equity requires **explicit disparity context + assets** and careful language, per pillar `G2`/`G3`. Residents are not primary users; **trust travels through organizations** that speak for neighborhoods.

### 4 — MAYOR / CITY STAFF
**Not** a City-operated 311 or CRM play. Uses **public federal/state education and health data**; aligns with open-data reality in `RICHMOND_TECH_STACK_2026.md`. If **generative narrative** ships later, **AR 2.13** implies DIT governance and transparency to users. Politically low exposure: no proprietary City feed required for core MVP.

### 5 — ARCHITECT
**Feasible stack:** Census ACS API; VDH downloads / Virginia Open Data Portal; VDOE Excel; KIDS COUNT API where useful. **CDC WONDER:** API is **not** a substitute for subnational vital stats — route MCH outcomes through **VDH** (per research). **Failure modes:** VDH/VDOE **schema drift**, tract **MOE and suppression** hollowing reports, ACS daily limits (mitigate with keys/batching). MVP: parameterized Quarto (or equivalent) + explicit QA layer; optional GitHub Actions refresh.

### 6 — FRONTLINER (CBO grant writer)
Primary JTBD: **deadline-credible “Statement of Need” data blocks** without re-downloading the same tables. Will adopt only if **faster than SparkMap/library access** *and* **defensible under funder scrutiny**. Top fear: one wrong number in a submitted pack. Needs **obvious source line + refresh date + suppression legend** on every slide.

### 7 — FUNDER / INVESTOR
Wants **consistent definitions** across applicants in the same metro; versioned outputs help comparability. Sustainability question: **who maintains the pipeline** when URLs or columns change—**not** a one-weekend fix forever. Tier S on survivability assumes **lightweight ops**; still needs a **steward** (nonprofit tech, university, or coalition).

---

## Tensions (three)

| # | Tension | Resolution |
|---|---------|------------|
| **T1** | **Commercial overlap** (PolicyMap, SparkMap, Social Explorer) vs. **custom Richmond+VA bundle** | **Valid tension.** Baseline is not unique globally; uniqueness is **VDH+VDOE+HOI in one template, open pipeline, and QA transparency**. Score **Innovation 3** stands; moonshot framing requires coalition or funder-matching stretch. |
| **T2** | **Automation trust** vs. **speed** | **Adoption is the bottleneck** (assumption map R×U = 12). **Mitigation:** pilot with 3 MCH CBOs, side-by-side accuracy check, human sign-off line on PDFs. **User Value** stays high **if** validation happens; else downgrade to 4. |
| **T3** | **Tract-level MCH specificity** vs. **suppression** | Many Richmond tracts may hit **small-n rules**; tract-only packs could be **mostly N/A** for sensitive outcomes. **Mitigation:** roll up to **neighborhood/city/health district** when tract unstable; show MOE/CV. Not a structural wall; a **scope/design** requirement. |

---

## Fatal flaw test

| Test | Result |
|------|--------|
| Data / API walls | **Pass** — No RVA 311, Help1RVA, Unite Us, or OnBase dependency for core build; national CDC API limits bypassed via state/county/tract VDH paths. |
| Ownership | **Conditional** — No default City owner; **orphan risk** if no coalition or org commits to schema monitoring. |
| Harm / claims | **Conditional** — Mis-stated health statistics or bad rollups could **damage CBO credibility**; mitigated by suppression rules, citations, and optional reviewer workflow. |
| “Killer” product flaw | **No single hard kill** at Tier S. **Soft kill:** if **tract-level outputs are empty** for target geographies and team does not implement geographic fallback, demos look broken and adoption dies. |

**Fatal flaw (stated plainly):** **There is no technical fatal flaw** in the synthesis sense; the **credible failure mode** is **trust + empty small-area tables + unmaintained ETL** after schema changes.

---

## Verdict

### **PILOT / SHIP WITH CONDITIONS**

1. **Geographic strategy:** Implement **tract → fallback rollup** when counts fail suppression or CV thresholds.  
2. **Validation gate:** 2–3 Richmond MCH CBOs sign off on a **frozen indicator catalog** before marketing as “grant-ready.”  
3. **Ops:** Named maintainer + **schema drift tests** (column presence) on VDH/VDOE inputs.  
4. **AI narrative (if added):** Plan for **AR 2.13** review; default MVP stays **deterministic data + template**.

---

## Narrative summary

Grant Pack Builder is a **high-feasibility, Tier-S style pipeline**: public ACS and Virginia health/education sources, stateless or light hosting, and clear alignment with Thriving Families’ **data coordination** pain. Tension is **not “can we build it?”** but **“will organizations trust and maintain it?”** and **“is it better than licenses they may already have?”** Resolved positioning: **Virginia-specific MCH pack + QA transparency + no subscription** for small teams. Innovation stays **modest**; equity stays **strong** because it **builds capacity** for under-resourced CBOs—if outputs are statistically honest and geographically honest.

---

## Roundtable consensus scores (post-tension; optional tweak)

| Category | Original | Consensus | Δ |
|----------|:--------:|:---------:|---|
| Impact | 4 | 4 | — |
| Feasibility | 5 | 5 | — |
| User Value | 5 | **5** | — (conditional on validation gate) |
| Execution | 4 | 4 | — |
| Innovation | 3 | 3 | — |
| Equity | 5 | **5** | — |

| Award | Score |
|-------|------:|
| **Pillar Award** | **91** |
| **Mayor's Choice** | **95** |
| **Moonshot** | **79** |

---

*Condensed roundtable: seven personas, three tensions, fatal-flaw screen, verdict. Full persona research loops omitted.*
