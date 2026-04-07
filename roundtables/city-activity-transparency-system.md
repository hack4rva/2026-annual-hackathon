# Roundtable (Condensed): City Activity Transparency System

**Date:** 2026-04-02  
**Slug:** `city-activity-transparency-system`  
**Pillar:** A Thriving City Hall (`thriving-city-hall`)  
**Problem statement alignment:** Resident Service Navigation (broadened to city-wide activity transparency)  
**Source:** NEW

---

## Input materials

| File | Status |
|------|--------|
| `.../city-activity-transparency-system/IDEA.md` | Loaded |
| `.../city-activity-transparency-system/RESEARCH_RESULT.md` | Loaded |
| `.../city-activity-transparency-system/INNOVATION_ANALYSIS.md` | Loaded |
| `2026-annual-hackathon/ideas/RICHMOND_TECH_STACK_2026.md` | Loaded |
| `pillar-repos/pillar-thriving-city-hall/research/INDEX.md` | Loaded (corpus pointers: D5 staleness, G4 data staleness, F4 software boundaries, E5 weekend-viable) |

---

## Persona simulations

### INNOVATOR

The sharp move is not “one more portal” but **tiered latency and split audiences**: internal COP where feeds exist, batch public scorecard where trust matters—exactly how Chicago separated WindyGrid (staff) from OpenGrid (public). Richmond should clone the *pattern*, not Chicago’s integration depth on day one. The innovation is treating the artifact as **output of a governance cadence** (CitiStat-style) rather than a standalone product. Weekend scope should be Pattern A (curated KPI tiles + source links + “last updated”) to avoid Smart Columbus scope collapse.

| Query | Finding (abbrev.) |
|-------|-------------------|
| Chicago WindyGrid OpenGrid GIS city operations dashboard | WindyGrid fuses 24+ systems for employees; OpenGrid is public, map-first, open-source—split stack is the replicable model. |
| municipal open data dashboard stale data sustainability civic tech | Stale official data erodes trust; sustained dashboards need refresh discipline (e.g., Philly Kensington-style continuous refresh narratives). |

### ACTIVIST

A scorecard without **neighborhood disaggregation** on a few equity-sensitive metrics is performative transparency. Activists will ask: who waits longer for service, and is that visible in the data—or hidden behind AvePoint and stale Socrata? The “data freshness monitor” idea (meta-accountability) is politically potent: it pressures the City to fix publishing, not just UI. Any public layer must avoid **surveillance optics** (no tactical live public safety feeds); WCAG 2.1 AA is a justice issue, not a nice-to-have—DOJ rule deadlines apply to large cities.

| Query | Finding (abbrev.) |
|-------|-------------------|
| ADA WCAG 2.1 AA government dashboard accessibility requirement 2024 | DOJ rule: WCAG 2.1 Level AA for state/local web content; large jurisdictions face April 2026 compliance timeline—dashboards included. |
| municipal open data dashboard stale data sustainability civic tech | Under-resourced IT + stale sites are a documented failure mode; transparency tools must show provenance and update time. |

### CITIZEN

Most residents will not dig through five sites; **one page that explains “how the City is doing”** with plain labels and links to raw data matches how Boston CityScore and similar tools build public trust. I care whether pothole or 311 responsiveness is understandable, not whether the backend is Mongo or Esri. If half the tiles say “data unavailable” because of Richmond’s 311 wall, the page feels like an excuse—so the MVP must **label gaps honestly** and still show contracts, payments, Legistar activity, and GeoHub layers that work.

| Query | Finding (abbrev.) |
|-------|-------------------|
| Boston CityScore municipal KPI dashboard public transparency 2025 | Composite score vs targets; daily/weekly/monthly cadences; 311, fire, schools, permits, infrastructure—public on boston.gov and open data CSV. |
| Richmond Virginia open data portal Socrata ArcGIS GeoHub 2025 | Richmond operates Socrata at data.richmondgov.com and ArcGIS GeoHub; APIs exist for many public datasets. |

### MAYOR

This is useful **if** it becomes my management rhythm: Baltimore’s CitiStat runs dozens of Stat sessions per year with agency heads in the room—data without follow-up meetings is wallpaper. A Richmond scorecard could justify budget moves the way Boston tied EMT hiring to CityScore signals, but only with **CAO/OPI-style ownership** and a small analytics cadre. I will not sponsor a parallel “smart city OS”; I will sponsor a **thin scorecard + mandatory review** that uses commodity GIS and open data first.

| Query | Finding (abbrev.) |
|-------|-------------------|
| city government performance Stat program CitiStat governance cadence | Baltimore CitiStat: 116 sessions in 2025 across 15 Stats; four tenets include timely accurate information and follow-up—embedding matters. |
| Boston CityScore municipal KPI dashboard public transparency 2025 | Executive-facing composite with public transparency; metrics tied to real service areas. |

### ARCHITECT

**Pattern A** is architecturally boring in a good way: static or JAMstack front end, Socrata SODA, Legistar OData, ArcGIS REST for public layers—no AvePoint, no fleet GPS, no CIP beta sign-in for V1. **Pattern B** needs CDC/streaming, RBAC, and CJIS partitions for anything touching CAD—out of scope for a hackathon without DIT partnership. Latency classes should be explicit in the design (sub-day vs weekly vs quarterly). Integrate **staleness SLAs** in the UI so users trust the architecture honestly.

| Query | Finding (abbrev.) |
|-------|-------------------|
| Chicago WindyGrid OpenGrid GIS city operations dashboard | Documented refresh tiers (e.g., 311 ~15 min in Chicago)—Richmond cannot match without APIs; design for batch public view. |
| Richmond Virginia open data portal Socrata ArcGIS GeoHub 2025 | Confirms Socrata + GeoHub as the viable public integration surface. |

### FRONTLINER

If this becomes **another system I have to feed**, I resist; if it **reads what we already publish** and reduces FOIA churn, I’m neutral-positive. Internal WindyGrid-style COP sounds helpful for OEMC-style roles but is a **change-management and data-sharing negotiation** across departments—not a weekend build. Give me fewer dashboards and more **single sources of truth**; the transparency layer should consume exports we already owe the public.

| Query | Finding (abbrev.) |
|-------|-------------------|
| city government performance Stat program CitiStat governance cadence | Performance programs succeed when agency heads routinely bring data—not when IT deploys a tool alone. |

### FUNDER

I fund **O&M and governance**, not screenshots. Smart Columbus–style regional OS scale without Esri alignment and long-term owner failed post-grant; California’s high-risk dashboard died under manual PDF workflows. A 12-month roadmap that starts with charter, owner, and refresh automation is fundable; a **big-bang COP** without City sign-off is not. Require milestones: WCAG audit, data SLA dashboard, and documented partnership path with DIT.

| Query | Finding (abbrev.) |
|-------|-------------------|
| municipal open data dashboard stale data sustainability civic tech | Sustainability = continuous refresh + staffing; grant-only portals decay. |
| Chicago WindyGrid OpenGrid GIS city operations dashboard | Mature cities iterate WindyGrid every 2–3 months—budget for iteration, not launch-only. |

---

## Top 3 tensions and resolutions

| Tension | Resolution |
|---------|--------------|
| **Ambition vs. Richmond walls** — Full “city activity” implies 311, permits, fleet; AvePoint, EnerGov API gaps, and DPW GPS block the unified story. | Ship **Pattern A**: KPIs strictly from Socrata, Legistar, public ArcGIS, and published reports; publish a **gap register** pointing at walls (311, fleet, CIP auth). Defer internal COP to Phase 2 with DIT. |
| **Transparency vs. harm / privacy** — Live ops data can look like surveillance or leak operational security. | Public view = **aggregated, batch, no PII**; exclude tactical real-time public safety; RBAC for any internal pilot; privacy impact review before expanding. |
| **Dashboard vs. culture** — Tools die without meetings (Smart Columbus, stale state dashboards). | Pair the prototype with a **paper charter**: named owner (CAO/DIT/analytics), meeting cadence template (Stat-style), and “what decision this metric drives”—even if the hackathon only demos the charter. |

---

## Fatal flaw test

| Lens | Assessment |
|------|------------|
| **Data dependency** | **Conditional pass.** Enough public data exists for a *credible but incomplete* scorecard (contracts, payments, legislation, some GIS). Current 311 performance KPIs are **not** reliably available publicly—scope must not pretend otherwise. |
| **Structural wall** | **Pass for Pattern A; fail for real-time unified COP.** AvePoint/311, EnerGov depth, fleet GPS, authenticated CIP remain walls; workaround is curated public feeds only. |
| **Ownership vacuum** | **High risk.** Without executive sponsor + O&M, repeats grant-death pattern. **Mitigation:** named owner + 3-year O&M line item in proposal (per research checklist). |
| **Harm potential** | **Low–medium.** Main harm is **misleading equity narratives** if neighborhood metrics use stale or uneven coverage—mitigate with confidence intervals, caveats, and freshness stamps. |
| **Political exposure** | **Medium.** Scorecards invite media scrutiny; also **benefit** accountability. Framing: co-owned metrics with departments reduces “gotcha” dynamics. |

**No single fatal flaw** if scoped to Pattern A + governance story; **fatal** if sold as real-time unified COP without City partnership.

---

## Category scores (1–5)

| Category | Score | Rationale |
|----------|:-----:|-----------|
| Impact | **4** | Strong alignment with MAP “well-managed government” and navigation; impact scales with institutional adoption. |
| Feasibility | **3** | Pattern A is buildable externally; deep integration blocked; governance cadence needs City buy-in. |
| User Value | **4** | High for journalists, organizers, Council; everyday residents benefit if UX is plain and honest. |
| Execution | **3** | Credible weekend MVP as aggregation + freshness; weak if demo relies on stale/missing KPIs without labeling. |
| Innovation | **3** | Governance-first reframe is strong; product pattern precedents (CityScore, GeoHub, CitiStat) limit novelty. |
| Equity & Inclusion | **3** | Opportunity to surface neighborhood disparities; risk of digital divide and misleading maps without WCAG and caveats. |

### Weighted totals

- **Mayor’s Choice (MC)** — Impact×5 + Feasibility×5 + UserValue×4 + Execution×3 + Equity×3 + Innovation×1  
  = 20 + 15 + 16 + 9 + 9 + 3 = **72**

- **Pillar Award (PA)** — Impact×5 + UserValue×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  
  = 20 + 16 + 9 + 9 + 9 + 9 = **72**

- **Moonshot (MS)** — Innovation×5 + Impact×4 + UserValue×3 + Equity×3 + Feasibility×2 + Execution×2  
  = 15 + 16 + 12 + 9 + 6 + 6 = **64**

---

## Verdict

**SHIP WITH CONDITIONS**

**Conditions (minimum):** (1) Scope = Pattern A public scorecard + documented data gaps; (2) WCAG 2.1 AA plan and plain-language UX; (3) named City or civic **owner** and refresh/staleness SLAs; (4) optional governance charter for Stat-style review (even as a Phase 2 ask); (5) no public real-time sensitive ops feeds.

---

## One-line summary

Richmond can approximate Boston/Chicago/Baltimore-style transparency with a **governance-first, split-stack** story built on Socrata, Legistar, and public GeoHub—**if** the team ships honest freshness, avoids 311/fleet fantasy scope, and pairs the tech with **ownership and cadence**, not another orphan dashboard.
