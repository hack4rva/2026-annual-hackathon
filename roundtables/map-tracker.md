# Roundtable (Condensed): MAP Tracker

**Initiated:** 2026-04-02  
**Idea:** RVA MAP Tracker — Mayoral Action Plan Progress Dashboard  
**Pillar:** A Thriving City Hall  
**Problem Statement (folder README):** Resident Service Navigation (PS1) — *product does not address this; see Verdict.*  
**Source:** Demo (Hack for RVA)  
**Implementation Reality:** **19 / 25 — Tier A** (Ownership 5, Data 3, Tech 4, Integration 4, Maintenance 3)  
**Overall survivability rank:** #23 of 73 (`IMPLEMENTATION_REALITY_SYNTHESIS.md`)

---

## Input materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `RICHMOND_TECH_STACK_2026.md` | Loaded |
| `pillar-repos/pillar-thriving-city-hall/research/INDEX.md` | Loaded — corpus maps to governance/transparency (F1/F4, G4 staleness, H1/H5 scope, I4 credibility) |
| `lifecycle_review.md` / `gap_analysis.md` | Loaded (PS misalignment, institutional signal) |

---

## Seven personas (condensed)

### 1 — Mayor (Decider)

**Lens:** MAP is the city’s accountability frame; this tool surfaces MAP progress by pillar with binary vs. directional metrics and timestamped edits. **Owner:** Mayor’s Office (MAP owner by definition); department heads already supplied baseline data during the hackathon — rare buy-in. **Risk:** Competing or duplicating **AchieveIt** (internal reporting); upgrade path is API sync, not a second manual system forever. **Decision:** **Refine** for official Thriving City Hall PS scoring; **Advance** if reframed as MAP transparency owned by Mayor’s Office with mandated update cadence.

### 2 — Innovator (Expander)

**Lens:** INNOVATION_ANALYSIS reframes the product: not “a website,” but a **governance OS** — Durham/Irving/West Palm pattern (STAT cadence, named owners, budget linkage) matters more than Envisio vs. spreadsheet. **Provocative alt:** MAP STAT sessions without a dashboard (#8 in analysis). **MVP:** Static 7-pillar scorecard + `last updated` stamps, 15–25 KPIs, monthly publish.

### 3 — Frontliner (Operator)

**City staff:** Admin UI adds **reporting obligation**; without AchieveIt feed or executive lock-in, quarterly entry **atrophies** (synthesis blocker). **Community workers:** N/A — not a routing or intake tool. **Verdict:** **Maybe** for CAO/strategy staff if cadence is real; **No** as extra uncredited data entry for busy directors.

### 4 — Citizen (three archetypes)

- **Engaged resident / journalist:** **High** value — one place to ask “is the city advancing MAP commitments?” with audit trail.  
- **Service user (needs a service today):** **Low** — no path to 311, departments, or permits; wrong job-to-be-done vs. PS1.  
- **Invisible resident:** Risk of **digital-only** transparency; needs plain language, mobile, and offline/alternate channels per pillar research (B5, G3).

### 5 — Architect (System guardian)

**Walls hit:** None of the five hard walls (311, OnBase/RAPIDS, EnerGov, B2GNow, DPW GPS) for read-only public view. **Integration:** Standalone single-file app → future **one** integration (AchieveIt) if contract/API allows — **partnership-dependent** per `RICHMOND_TECH_STACK_2026.md`. **AI:** IDEA cites conversational build; any resident-facing AI later falls under **AR 2.13** (DIT oversight). **Recommendation:** **Ship** lightweight public layer + **Build** secure admin/backend; do not pretend manual entry scales.

### 6 — Funder (Resource realist)

**Model:** Operational budget in Mayor’s Office / performance unit, or **hybrid** (civic host + city data stewardship). **Costs:** App TCO low; **real cost is FTE time** for updates and governance (research: 1–3 FTE performance teams in peer cities). **Sustainability:** **Medium** — enthusiasm cliff without automation and budget-linked KPI discipline.

### 7 — Activist (Universe expander)

**Prior art:** Envisio, ClearPoint, OpenGov deployments in 100k–500k cities (`RESEARCH_RESULT.md` table). Richmond is not first — but **partial Adapt**: public MAP-specific slice may be faster than full procurement. **Decision tree:** **Adapt** (buy/configure long-term) vs **Build** (hackathon prototype as wedge). **Scale:** Pattern replicable where a city has a published strategic plan and executive sponsorship.

---

## Tensions (challenge rounds)

| Tension | Resolution (table lean) |
|--------|-------------------------|
| **Transparency vs. reporting burden** | Public value depends on disciplined updates; AchieveIt integration is the de-risk path. |
| **MAP accountability vs. Thriving City Hall PS1/PS2** | Strong fit to MAP narrative; **weak fit** to resident service navigation and procurement review (`gap_analysis.md`, `lifecycle_review.md`). |
| **Mayor-centric branding vs. durability** | INNOVATION_ANALYSIS: eliminate personality-first framing; tie to plan + Council/five-year cycle like West Palm. |
| **Hackathon demo vs. enterprise-grade** | Single-file app proves UX; production needs auth, audit, and single source of truth to avoid shadow spreadsheets. |
| **Innovator (“governance OS”) vs. Funder (“who pays for FTEs?”)** | Software is cheap; **governance is not** — must fund owners and cadence, not only hosting. |

---

## Fatal flaw test

| Criterion | Result |
|-----------|--------|
| No owner? | **PASS** — Mayor’s Office / MAP owner; ownership clarity scored **5**. |
| Structural wall, no workaround? | **PASS** — no wall blocks a read-only dashboard; AchieveIt is partnership, not listed as impenetrable wall. |
| Net negative for frontline? | **CONDITIONAL** — **FAIL** if staff see only extra unpaid data entry without mandate and automation. |
| No funding beyond pilot? | **CONDITIONAL** — **FAIL** without operational line for updates/performance staff. |
| Harms Invisible Resident? | **PASS** at neutral harm; **risk** if marketed as primary accountability channel without accessibility and non-digital alternatives. |

**Synthesis:** No single automatic **KILL** on ownership or walls; **operational sustainability** is the near-fatal gap (matches Tier A maintenance score **3**).

---

## Verdict

**GO / REFINE / KILL:** **REFINE → GO** (conditional)

- **Ship** as **MAP transparency** product under Mayor’s Office with explicit KPI dictionary, monthly/quarterly STAT or equivalent, and path to **AchieveIt** (or other system-of-record) automation.  
- **Do not** score or market as fulfillment of **Resident Service Navigation** or **Procurement Risk Review** without scope change — those are different jobs (`lifecycle_review.md`).  
- **Temporal tag:** **Appreciating** if AchieveIt or budget-linked performance management matures; **Depreciating** if updates stall and the site becomes stale (`G4` risk in pillar corpus).

---

## Rubric scores & awards *(estimated — not present in `IDEA.md`)*

Merit-based estimate for a **MAP accountability** framing (not strict PS1 fit):

| Category | Score (1–5) | Notes |
|----------|:-----------:|-------|
| Impact | 4 | City-wide strategic visibility; crosses pillars |
| Feasibility | 3 | Governance + data pipeline harder than the UI |
| User Value | 4 | Strong for Council, press, engaged residents |
| Execution | 4 | Working demo; real departmental participation |
| Innovation | 3 | Category is mature; binary/directional model is neat |
| Equity | 3 | Digital divide; language/literacy not solved in spec |

**Weighted totals (hackathon formulas):**

| Award | Weights | **Estimated score** |
|-------|---------|---------------------|
| **Pillar (Thriving City Hall)** | Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3 | **75** |
| **Mayor’s Choice** | Impact×5, Feasibility×5, User Value×4, Execution×3, Equity×3, Innovation×1 | **75** |
| **Moonshot** | Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2 | **66** |

**Judging caveat:** If judges apply **strict alignment** to PS1 (service navigation) or PS2 (procurement), **Impact** and **User Value** should drop materially (~2 each); pillar weighted score could fall **~15–20 points** — consistent with `lifecycle_review.md` guidance.

---

## Rollback / next actions

1. Mayor’s Office: confirm AchieveIt data model and API/partner path.  
2. Pilot 3 departments for 90-day update commitment (validates INNOVATION_ANALYSIS Assumption #1).  
3. Codify public dashboard in plan/resolution language (transition resilience).  
4. Add accessibility and staleness warnings (`last updated` > 90 days) per `RESEARCH_RESULT.md` risk register.
