# Condensed Civic Roundtable — **all-your-bass** (Stay Informed)

**Pillar:** thriving-built-environment  
**Problem statement:** Fleet Operations & Street Service Tracking  
**Sources:** `IDEA.md`, `RESEARCH_RESULT.md`, `INNOVATION_ANALYSIS.md`, `RICHMOND_TECH_STACK_2026.md`, `pillar-thriving-built-environment/research/INDEX.md`  
**Date:** 2026-04-02

---

## 1. Seven persona simulations

### 1. Concerned resident (dense neighborhood)

I finally have one place to see whether my zone is scheduled, in progress, or done for sweeping and snow—without stalking individual trucks, which feels right. The hackathon build used synthetic telemetry, so I would not treat “live” staff views as ground truth until the City feeds it. Richmond already publishes a **Street Sweeping** open dataset on Socrata (`2dh8-bzzs`) and describes nine routes on the City’s street-cleaning pages, which suggests the addressing-and-zones story can become real without fantasy GPS.

*Web grounding:* [Street Sweeping | Richmond Open Data](https://data.richmondgov.com/d/2dh8-bzzs); [Street Cleaning | Richmond](https://www.rva.gov/public-works/street-cleaning).

### 2. DPW field supervisor

The staff portal direction—zone schedules, pass states, optional vehicle-level detail internally—is how I actually run a shift: radios, reroutes, and “did we finish Fulton?” The risk is governance: if the public map says “complete” and a block was missed, I get the heat. I need a **manual override**, stale-data warnings, and the same “plan vs. progress” language Madison uses so residents do not treat the map like a lawsuit exhibit.

*Web grounding:* Pittsburgh’s public snow dashboard explicitly disclaims delayed, partial vehicle coverage—useful precedent for expectation-setting ([Snow Response Updates - Pittsburgh](https://www.pittsburghpa.gov/Resident-Services/Snow-Removal/Snow-Response-Updates)).

### 3. DIT / enterprise architect

Externally hosted Vercel demo is fine for a prototype; production would need identity for staff, logging, and alignment with Esri/Cityworks reality. **RVA 311 has no public API**, so do not promise Open311-driven status without a project. **Cityworks** is in use for DPW asset/workflow data ([Cityworks login - Richmond](https://cityworks.rva.gov/cityworks/Login.aspx)); a Phase 2 is partnership-based REST or batch export, not a weekend wire-up.

*Web grounding:* Tech stack doc (closed 311; partial ArcGIS); Cityworks presence on `rva.gov` / portal.

### 4. Equity & digital-inclusion advocate

Email subscription is better than nothing but it skews toward people with stable inboxes and habits; **SMS, voice, and in-language copy** matter for sweeping enforcement fairness. Minneapolis is cited in the team research for multilingual sweeping communications—Richmond should plan for that from day one, not bolt on later. Maps need WCAG-conscious “pause/stop” patterns for moving status layers.

*Web grounding:* General digital-equity framing (cost/barriers to reliable home internet) supports multi-channel design ([Seattle Technology Matching Fund 2026 announcement](https://frontporch.seattle.gov/2026/03/20/city-of-seattle-awards-2026-technology-matching-fund-grants-to-organizations-addressing-digital-inequalities/) — illustration of municipal attention to inclusion).

### 5. Mayor’s Choice judge (implementability lens)

The idea **sidesteps the DPW Fleet GPS structural wall** for residents by design—aligned with national “schedule + status + optional delayed AVL” playbooks in the research memo. The fastest city-owned path is **Socrata zones + supervisor toggles + disclaimers**, then optional Cityworks sync. That is shippable in months with a named DPW owner, not years waiting on telematics.

*Web grounding:* `RICHMOND_TECH_STACK_2026.md` (no public fleet GPS); `RESEARCH_RESULT.md` pattern table.

### 6. Moonshot judge (vision lens)

The INNOVATION_ANALYSIS reframe—“DPW service contract with residents”—is stronger than “tracker.” The demo does not yet show unified compliance alerts across snow, leaves, and sweeping the way the analysis imagines, and it does not open a **public work-order transparency API**. Vision is there; the prototype is a credible shell for it.

*Web grounding:* Boston’s official **No-Tow** style reminders are email-first ([No-Tow Subscription - Boston](https://www.cityofboston.gov/publicworks/sweeping/remindme.asp))—room to innovate on multi-service, multi-channel RVA alerts.

### 7. Communications / 311 liaison

If this reduced repetitive “when is my street?” calls, I would champion it—but only with a **311 handoff**: “map says X; still wrong? submit request.” Without AvePoint integration, that link must be human-process, not automated ticket readback. Clear timestamps on the map reduce false precision and protect call-center staff.

*Web grounding:* `RICHMOND_TECH_STACK_2026.md` (AvePoint / Dynamics — no public API).

---

## 2. Top 3 tensions and resolutions

| Tension | Resolution |
|--------|------------|
| **Credibility vs. demo data** | Label all layers with `last_updated`; pilot one zone with supervisor-authored status; retire synthetic fleet IDs before any public “official” branding. |
| **Resident desire for “where is the plow?” vs. ops/security** | Keep public view at **zone/route coverage** only; staff view can add richer signals under auth; copy matches Pittsburgh-style disclaimers if any delayed AVL is ever used. |
| **Accountability vs. liability** | Publish **plan vs. actual** explicitly; link to 311 for disputes; avoid implying legal guarantees on sweep/plow completion. |

---

## 3. Fatal flaw test (five tests)

| Test | Result |
|------|--------|
| **1. Structural wall** | **Pass (for public layer).** Does not require public fleet GPS; aligns with tech stack note that real-time DPW telemetry needs partnership. |
| **2. Data exists** | **Partial pass.** Socrata street-sweeping zones exist; schedules appear on City web; **snow/leaf progress** and authoritative real-time state are not proven in open data. |
| **3. Single owner** | **Partial.** DPW operations + DIT + Comms must agree on SLAs; no fatal flaw if a DPW champion is named. |
| **4. Resident harm if wrong** | **Manageable risk.** Wrong “complete” drives anger and tickets; mitigated by timestamps, 311 path, and supervisor workflow—**fail** if shipped as authoritative without ops buy-in. |
| **5. Equity / access** | **Partial.** Email-first alerts and map-heavy UI can exclude; **fail** without SMS/voice/partner distribution and accessibility review. |

**Summary:** No single killer structural flaw; **adoption and data-contract discipline** determine success.

---

## 4. Verdict

**Conditional strong — pillar-aligned demo with a credible non-GPS path to production, contingent on DPW operational data feeds, channel equity, and explicit public disclaimers.**

---

## 5. Category scores (1–5) and weighted award scores

**Categories:** Impact (I), Feasibility (F), User Value (UV), Execution (Ex), Innovation (In), Equity & Inclusion (Eq)

| I | F | UV | Ex | In | Eq |
|---|---|----|----|----|-----|
| 4 | 3 | 4 | 3 | 3 | 3 |

### Weighted totals (same formulas as RVA Hacks judging)

- **Mayor’s Choice:** \(4×5 + 3×5 + 4×4 + 3×3 + 3×3 + 3×1 =\) **72**
- **Pillar Award (built environment):** \(4×5 + 4×4 + 3×3 + 3×3 + 3×3 + 3×3 =\) **72**
- **Moonshot:** \(3×5 + 4×4 + 4×3 + 3×3 + 3×2 + 3×2 =\) **64**

---

## 6. One-line summary

**Stay Informed** pairs a privacy-aware resident portal with a richer staff view, matches national DPW transparency patterns without public GPS, and is credible as a roadmap—once synthetic telemetry is replaced by supervisor- or Cityworks-backed status and alert channels are diversified.

---

## Rollback / reuse

- **Rollback:** Archive this markdown; no code changes.
- **Reuse:** Cite `RESEARCH_RESULT.md` phases (schedule MVP → work orders → optional delayed AVL) in any implementation brief for DPW.
