# Roundtable (Condensed): Maternal Metric Lock-In

**Initiated:** 2026-04-02  
**Idea:** Maternal Metric Lock-In  
**Pillar:** Thriving Families  
**Problem Statement:** PS2 — Maternal Health Data Coordination  
**Source:** BLUESKY (ERRC reframing)  
**Implementation Reality Score:** 21/25 — Tier S (Ship It)  
**Overall Rank:** #13 of 73

## Input Materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `README.md` | Loaded |
| `pillar-repos/pillar-thriving-families/research/INDEX.md` | Loaded — maternal thread: A2, B3, C3, D2, D4, E2, F3, G2, G4, H3, I3 |
| `RICHMOND_TECH_STACK_2026.md` | Loaded |

*Note:* `IDEA.md` does not include a six-category judging rubric table; scores below synthesize `INNOVATION_ANALYSIS` Lens 5 and persona consensus.

---

## Seven Personas (Condensed)

### 1 — MAYOR (Decider)

**Assessment:** Aligns cleanly with MAP Thriving Families and PS2 (“shared, consistent metrics”). KPI is not a single health rate moving overnight but **reduced cross-agency metric conflict** and faster coalition decisions. Natural owners are **RHHD** (city public health) with **VDH** and hospital/CBO partners as co-governors — not a classic “City IT” line item. Duplication risk is low: this is methodology governance, not another tableau dashboard.

**Verdict:** **Refine → Advance** once a named coalition steward and 90-day charter exist.

**Temporal tag:** **Appreciating** if NVSS/AIM/ACS versioning is maintained; **Depreciating** if shipped as a static PDF nobody updates.

---

### 2 — INNOVATOR (Expander)

**Assessment:** Core reframe stands: the bottleneck is **denominator drift and undocumented methods**, not “more charts.” High-leverage extensions called out in analysis: **drift detector** (same metric, VDH vs WONDER vs KIDS COUNT, side-by-side), **ACS vintage lock** checks, **validation API** for CBO workflows. The “CMQCC-lite” hospital linkage variant is correctly deferred — it hits data-sharing walls Richmond does not expose publicly.

**Verdict:** Weekend MVP should **prove the problem** (three sources, three IMR stories) before heavy validation logic.

---

### 3 — FRONTLINER (Operator)

**Assessment:** **Primary users are analysts and epi leads**, not case workers or 311 staff. For RHHD/VDH epidemiologists, a bookmarkable definition card + optional validator **reduces** coalition-meeting reconciliation time — if definitions are pre-agreed. If partners ignore the registry, it becomes **optional overhead**. No City login or Dynamics dependency for a public static/GitHub Pages build.

**Adoption risk:** Medium until governance says “we present coalition numbers only from the catalog.”

**Verdict:** **Would use** under coalition mandate; **would skip** as yet another unfunded voluntary standard.

---

### 4 — CITIZEN (Recipient of Value)

**Assessment:** **Engaged resident:** indirect benefit — clearer, consistent public reporting and fewer dueling statistics in meetings and media. **Service user:** minimal direct touchpoint unless definitions surface on public dashboards they already read. **Invisible resident:** not harmed by a methods registry; also **not reached** unless outputs are plain-language and translated — a gap if the team claims “community-facing transparency.”

**Verdict:** **Indirect / high-trust pathway** for residents; equity value is **epistemic** (fewer misleading small-N rates if suppression rules are enforced), not access to a new service.

---

### 5 — ARCHITECT (System Guardian)

**Assessment:** **No structural wall dependency.** Data plane matches tech stack: **VDH maternal/child indicators**, **CDC WONDER**, **ACS**, **KIDS COUNT**, **NVSS-linked methods** (documented pulls, not proprietary City APIs). No RVA 311, EnerGov, RAPIDS, Unite Us, or Help1RVA integration required for MVP. **PHI risk is low** if the tool only encodes **aggregate** rules and public pulls; any future org-specific uploads would need a separate privacy review. **AR 2.13:** no AI requirement for core product; if LLM-assisted memo drafting is added later, plan for DIT governance.

**Integration complexity:** **None** for reference + validation against public APIs.  
**Maintenance:** Version bumps when CDC SMM/AIM or ACS vintages change — needs a named **analytics steward** (per RESEARCH_RESULT governance table).

**Verdict:** **Ship** as external static or lightweight app; **Build**, not Buy, at MVP scale.

---

### 6 — FUNDER (Resource Realist)

**Assessment:** **Zero–low cost** path: GitHub Pages / static site, volunteer or grant-funded analyst time for definition curation. **Negative business case:** wasted senior staff time reconciling conflicting rates in coalition and grant settings; funders seeing inconsistent Richmond figures. **Sustainability cliff** appears if a grant pays for build but **no line item or MOU role** exists for catalog updates after code list changes.

**Verdict:** **Hybrid partnership** (coalition + RHHD + maybe university) beats pure hackathon orphan. Cheapest viable version: **5 metric cards + one discrepancy walkthrough**.

---

### 7 — ACTIVIST (Universe Expander)

**Assessment:** Prior art is rich: **City Health Dashboard** data dictionary, **CMQCC MDC**, **PQC/NNPQC** playbooks, **SIMC** audits for misclassification. Richmond should **adapt** patterns, not claim global novelty. **Ownership level:** correctly **coalition / regional public health**, not solely “City of Richmond IT.” State (VDH) and local (RHHD) both belong in the Measurement Governance Council model described in research.

**Verdict:** **Adapt + build** — build the Richmond-branded registry, anchor to **national specs** (NVSS, CDC SMM, AIM, NCHS suppression, ACS guidance).

---

## Tensions (3) and Resolutions

| Tension | Personas | Resolution |
|---------|----------|------------|
| **Governance vs. code** | Innovator, Frontliner, Mayor | The product is **empty without partner agreement** on canonical definitions (Assumption 1, R×U = 20). **Resolution:** Charter + pilot agreement on **one flagship metric** (e.g., pooled IMR) before scaling the catalog. |
| **Resident-facing claims vs. back-office tool** | Citizen, Mayor | Pitch must not overclaim **direct resident benefit**. **Resolution:** Frame as **infrastructure for trustworthy public reporting**; add plain-language “why these numbers differ” pages if messaging goes public. |
| **“Just documentation” vs. innovation** | Innovator, Funder | Stakeholders may dismiss as PDF/Notion work. **Resolution:** Ship **automated discrepancy demo** and optional **validation** (INNOVATION_ANALYSIS Shapes B/C) so the demo is **falsifiable**, not narrative-only. |

---

## Fatal Flaw Test

| Fatal Flaw | Result | Evidence |
|------------|--------|----------|
| No identifiable owner | **Conditional pass** | Plausible owners: **RHHD epi + coalition chair**; VDH as standards partner. Fails if no one signs MOU/DUA roles from RESEARCH_RESULT blueprint. |
| Structural wall, no workaround | **Pass** | MVP uses **public** VDH, WONDER, ACS, KIDS COUNT paths per `RICHMOND_TECH_STACK_2026.md` (VDH maternal/child; federal/state open data). |
| Net negative for frontline | **Pass** | Optional for analysts; does not add case-management steps. |
| No funding past pilot | **Conditional pass** | Low $ build, but **catalog maintenance** needs explicit owner; cliff if grant-only. |
| Harms Invisible Resident | **Pass** | Aggregate methods focus; avoid collecting PII in v1. |

**Fatal flaw detected:** **None** — provided governance conditions are met. Otherwise **stewardship vacuum** escalates toward “no owner” failure mode.

---

## Verdict

### **SHIP WITH CONDITIONS**

1. **Named Measurement Governance steward** (RHHD or designated coalition lead) and quarterly review cadence.  
2. **Pilot lock on 3–5 metrics** with signed partner alignment (at minimum RHHD + one CBO or VDH acknowledgment).  
3. **Versioning policy** for definition changes (AIM/ICD/ACS) published with the catalog.  
4. **Demo strategy:** lead with **documented denominator drift** across VDH / WONDER / KIDS COUNT for Richmond, then show the lock-in card + optional validator.

---

## Scores and Awards

### Consensus rubric (1–5)

| Category | Score | Rationale |
|----------|:-----:|-----------|
| **Impact** | **4** | Strong coordination and credibility impact for the ecosystem; indirect for individual residents. |
| **Feasibility** | **5** | Tier S: public data, no City integration required for core registry/validation logic. |
| **User Value** | **4** | High for epi/analysts and grant writers; low direct value for typical residents. |
| **Execution** | **4** | Clear MVP shapes; demo less flashy than maps — needs discrepancy proof as centerpiece. |
| **Innovation** | **3** | Valuable reframe (definitions before dashboards); implementation pattern exists nationally. |
| **Equity** | **4** | Better suppression discipline and aligned rates support fairer narratives; must avoid overclaiming community reach. |

### Award calculations (hackathon weights)

**Mayor's Choice:** Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1  
= 20 + 25 + 16 + 12 + 12 + **3** = **88**

**Pillar (Thriving Families):** Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  
= 20 + 16 + 15 + 9 + 12 + 12 = **84**

**Moonshot:** Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2  
= 15 + 16 + 12 + 12 + 10 + 8 = **73**

---

## One-Line Synthesis

Maternal Metric Lock-In is a **Tier S, governance-first** artifact: technically shippable on **public federal/state/census rails**, politically viable only if **RHHD-led coalition** adopts **one shared standard** and **someone owns the version log** when national specs change.

---

*Condensed roundtable. Full multi-turn log not generated; claims trace to idea trio, `RICHMOND_TECH_STACK_2026.md`, and Thriving Families research index.*
