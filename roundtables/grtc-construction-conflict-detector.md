# Roundtable (Condensed): GRTC–Construction Conflict Detector

**Initiated:** 2026-04-02  
**Slug:** `grtc-construction-conflict-detector`  
**Pillar:** A Thriving & Sustainable Built Environment  
**Problem Statement:** PS1 — Infrastructure Project Visibility  
**Source:** NEW (AI-generated post-event)  
**Implementation Reality Score:** 16/25 — Tier A (Strong)  
**Overall Rank:** #41 of 73  

## Input Materials

| File | Status |
|------|--------|
| `ideas/thriving-built-environment/grtc-construction-conflict-detector/IDEA.md` | Loaded |
| `.../RESEARCH_RESULT.md` | Loaded |
| `.../INNOVATION_ANALYSIS.md` | Loaded |
| `ideas/RICHMOND_TECH_STACK_2026.md` | Loaded |
| `pillar-repos/pillar-thriving-built-environment/research/INDEX.md` | Loaded (index + cross-links to B5, D*, G4, F2) |

## Existing Rubric Grades (from IDEA.md)

| Category | Score |
|----------|:-----:|
| Impact | 4 |
| Feasibility | 4 |
| User Value | 5 |
| Execution | 4 |
| Innovation | 5 |
| Equity | 5 |

**Weighted award scores (from IDEA.md):** Pillar Award **94** | Mayor's Choice **92** | Moonshot **87** *(computed: Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2)*  

**Bundle:** Bundle 5 — GRTC Transit Overlay (shared GTFS library opportunity).

---

## Seven Persona Simulations

### 1 — CARE rider / transit-dependent resident

I rely on CARE for medical trips; my pickup spot is fixed. If construction blocks the curb and I cannot reach it, I may be marked a no-show even though I showed up. I rarely learn about street work until I am there. A system that warned me and dispatch *before* the trip would change whether I can get to care on time. I do not care about GIS; I care that someone with authority moves my pickup and does not count the miss against me.

| Research | Query | Finding |
|----------|--------|---------|
| WebSearch | GRTC CARE paratransit Richmond Virginia no-show policy | GRTC operates CARE in Richmond with published service pages; granular no-show rules are not surfaced in public search snippets — riders must rely on rider guides or customer service (804-782-2273). |

---

### 2 — GRTC operations / paratransit dispatcher

We already juggle late cancellations, will-calls, and traffic. A nightly list of “stops near active work” is actionable if it is accurate and low-noise; we cannot re-dispatch on every false positive. Full integration — tagging trips “construction-impacted” and auto-waiving no-shows — needs our scheduling vendor and legal sign-off, not a weekend script. GTFS stops may not match every door-to-door CARE pickup geometry.

| Research | Query | Finding |
|----------|--------|---------|
| WebSearch | GRTC GTFS feed Richmond Virginia transit data | GRTC GTFS is published (e.g. ridegrtc.com gtfs.zip, Transitland `f-grtc~va`); stops/routes also appear on Virginia Open Data — suitable for stop-level batch analysis. |

---

### 3 — City DPW / ROW permitting

Our job is safe work zones and compliant detours; transit coordination is supposed to happen in pre-construction coordination, but field reality slips. If a detector only nags after the fact, we still need contractor GIS quality and timely permit geometry. Prefer upstream: permit questions that flag proximity to GRTC stops (INNOVATION_ANALYSIS #4). PROWAG and DOT adoption of accessible ROW standards raise the stakes for temporary stop quality.

| Research | Query | Finding |
|----------|--------|---------|
| WebSearch | bus stop construction closure ADA alternate stop PROWAG temporary | DOT adopted PROWAG-related enforceable standards (Access Board, effective Jan 2025); temporary circulation and stop treatment must align with evolving federal ROW accessibility expectations. |

---

### 4 — Equity / disability advocate

This is one of the few infra ideas that names paratransit penalties and compound harm (B5 / JTBD). FTA rules already say no-shows beyond the rider’s control must not drive suspension patterns; the gap is operational proof and enforcement. Automated “agency-cause” tagging when a pickup falls in a known work zone would align practice with regulation. Public credibility requires transparency: publish conflict counts and mitigations, not only internal emails.

| Research | Query | Finding |
|----------|--------|---------|
| WebSearch | FTA 49 CFR Part 37 paratransit no-show beyond rider control | FTA FAQ: suspensions require pattern/practice; trips missed for reasons beyond rider control (e.g. agency error) cannot be used toward that pattern; written notice and appeal required. |

---

### 5 — Civic tech implementer / GIS analyst

The core is a boring, good problem: buffer construction geometries, intersect GTFS stops, diff nightly. **Caveat from tech stack:** Richmond’s CIP dashboard is described as beta, quarterly, and **not anonymously queryable** on `geo.richmondgov.com` — so the hackathon path should assume **Virginia Open Data CIP GeoServices** and/or other public ArcGIS layers, not a silent dependency on logged-in CIP FeatureServer access. Work-in-Street permits sit behind EnerGov (no API per stack doc) — scope paving/CIP layers first.

| Research | Query | Finding |
|----------|--------|---------|
| WebSearch | Richmond Virginia GeoHub CIP dashboard ArcGIS public | City CIP dashboard exists (ArcGIS); GeoHub hub site hosts datasets; Virginia Open Data lists CIP projects / ArcGIS GeoService resources — supports a public-ingestion MVP if City-specific REST endpoints are gated. |

---

### 6 — Mayor’s Choice lens (implementability champion)

Pattern A (batch join + email + optional public map) needs no City IT budget line: static hosting, cron, public GTFS, and open geodata. Pattern B (CARE alerts and waiver tags) needs GRTC partnership and PII governance — 6–18 month territory per stack doc norms. For “pilot next quarter,” fund Pattern A and a joint MOU thread with GRTC ADA/compliance, not full dispatch integration.

| Research | Query | Finding |
|----------|--------|---------|
| *(Uses same GTFS + CIP searches as above.)* | — | Confirms public GTFS; CIP may require Virginia portal or partnership if primary dashboard is authenticated. |

---

### 7 — Legal / compliance advisor

Research_RESULT.md correctly stresses FTA Part 37 and PROWAG framing. A detector that only publishes alerts without policy change still has value as documentation if disputes arise. Risk: over-claiming “automatic compliance” — the tool supports mitigation; the agency still owes accessible alternates and fair no-show adjudication. 14-day suspension language in IDEA.md should be verified against current GRTC rider materials.

| Research | Query | Finding |
|----------|--------|---------|
| WebSearch | *(same as persona 4)* | Reinforces that construction-caused misses should be excluded from punitive patterns if attributed to agency-side factors — implementation is procedural + data tagging. |

---

## Top 3 Tensions and Resolutions

| Tension | Resolution |
|--------|----------------|
| **City construction data vs. anonymous API access** | Ship MVP using **public** layers (Virginia Open Data CIP GeoService, published GeoHub layers) and document gaps; pursue DPW/DIT read access or quarterly export for completeness — do not demo on auth-only endpoints without a key story. |
| **GRTC is independent of City Hall** | Position as **co-governance** product: City supplies ROW/project geometry; GRTC consumes alerts and owns GTFS-RT and CARE policy. Start with **dispatcher-ready CSV/email** to earn trust before APIs. |
| **GTFS stops vs. door-to-door CARE pickups** | **Phase:** bus-stop conflict detection first (provable, public data). **Validate** CARE pickup alignment with field checks; rider-specific >2h alerts only after DUA and schedule feed access. |

---

## Fatal Flaw Test

| Question | Result |
|----------|--------|
| Does a single blocker make the idea worthless? | **No** for Pattern A (public GTFS + public construction geometries + buffer). **Yes** for full “proactive CARE alert + auto-waiver” without GRTC data sharing — that slice is partnership-dependent, not a fatal flaw for the core concept. |
| Is the problem hypothetical? | **Unknown until measured** — INNOVATION_ANALYSIS flags “run the join today” as top validation; empty results would weaken the demo narrative but not invalidate the approach seasonally. |
| Could this harm riders? | **Low** if outputs are framed as advisory and overrides are manual; **medium** if false negatives imply “safe” pickups — mitigate with disclaimers, staleness labels (see pillar G4), and human confirmation for CARE. |

**Verdict of test:** **No fatal flaw** for a scoped MVP; **fatal if oversold** as fully automated compliance without agency adoption.

---

## Verdict

**Advance — pilot-first, dual-anchor (City data + GRTC ops).**  
Tier A and strong equity/innovation are deserved; rank #41 reflects cross-organizational execution risk, not idea weakness. Recommended path: **90-day Pattern A** (nightly join + public conflict map + ops email) parallel to **policy conversation** on FTA-aligned no-show tagging.

---

## Scores and Awards

| Award | Weighted score | Fit note |
|-------|----------------|----------|
| **Mayor's Choice** | **92** | High feasibility + user value; City-only ownership incomplete — needs GRTC co-buy-in for full impact. |
| **Pillar Award** | **94** | Excellent PS1 + equity + innovation balance for Built Environment. |
| **Moonshot** | **87** | Innovation and impact are high; execution/feasibility caps vs. real-time / full CARE automation vision. |

---

## Rollback / honesty note

**Reality check:** Workspace `hackathon` is not a git repo per user_info; no commit was made by this roundtable run.  

**Evidence:** IDEA + research + tech stack + web spot-checks above; not a live spatial join execution in this session.

---

## One-line return string

`grtc-construction-conflict-detector | Advance (pilot-first) | MC:92 PA:94 MS:87 | Nightly construction–GTFS spatial join can flag stop conflicts and support FTA-fair CARE treatment, but full rider alerts need GRTC partnership and public-safe construction feeds beyond any auth-gated CIP layer.`
