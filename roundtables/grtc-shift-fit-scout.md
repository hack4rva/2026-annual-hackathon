# Roundtable (Condensed): GRTC Shift-Fit Scout

**Initiated:** 2026-04-02  
**Idea:** GRTC Shift-Fit Scout  
**Pillar:** Thriving Families  
**Problem Statement:** PS1 — Youth Employment Pathways  
**Source:** BLUESKY (ERRC reframing)  
**Implementation Reality Score:** 20/25 — Tier A (Strong)  
**Overall Rank:** #19 of 73  

## Input Materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `README.md` | Loaded |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — GRTC GTFS listed under open/public API paths |
| `pillar-repos/pillar-thriving-families/research/INDEX.md` | Loaded — corpus maps youth jobs + data; **D5** (`D5_data_grtc_transit.md`) is the direct GTFS lane |
| Shared research | `../_shared-youth-employment/` (JTBD, pain points, prior art) — referenced in README |

## Bundle & Stack Context

- **Bundle 5: GRTC Transit Overlay** — Shared GTFS-to-nearest-stop-and-trip-time library would also serve Construction Conflict Detector, Neighborhood Anchor Map, Reentry 72-Hour Navigator (`IMPLEMENTATION_REALITY_SYNTHESIS.md`).
- **Tech stack fit:** Static GTFS (and optional GTFS-RT) are explicitly in the “hackathon prototype can realistically use” list; no AvePoint, EnerGov, RAPIDS, B2GNow, or DPW GPS dependency for the core “address + shift end → last bus” proof.

---

## Seven Personas (Condensed)

### 1 — MAYOR (Decider)

**Alignment:** Primary — Thriving Families / PS1 (first-job access and retention). Secondary framing — transit as enabling infrastructure touches **Thriving and Sustainable Built Environment** only indirectly; keep the story on youth workforce outcomes, not agency ops.

**Metric that could move:** 30/90-day youth job retention or absenteeism in participating programs (matches RESEARCH_RESULT KPIs), not a City Hall efficiency metric.

**Decision:** **Refine → Advance** once a named distribution partner commits (workforce board, SYEP-style program, or major youth-serving nonprofit). City government is not the natural *builder*; it can **endorse** and help broker GRTC + workforce relationships.

**90-day pilot:** Feasible as external-hosted tool + partner workflow; scaling spans/GRT is policy, not this product.

---

### 2 — INNOVATOR (Expander)

**Reframe:** The product is not “another trip planner.” It is **pre-commitment constraint disclosure** — eliminating trial-and-error where the error costs a first job in week one.

**Leverage:** Smallest proof that reframes the narrative from “unreliable teen” to “structural last-bus gap” (ERRC: eliminate blame loop; raise pre-acceptance screening). **Stretch that matters:** employer roster CSV → transit-fit report (shifts responsibility upstream) — high impact, high privacy friction.

**MVP (days):** Lat/lon or address + workplace + shift end → GTFS last departure at nearest stop → pass/fail + buffer note.

---

### 3 — FRONTLINER (Operator)

**City staff:** Low direct footprint unless Economic Development / workforce liaisons adopt it as a **referral link**; no Dynamics/311 integration required for MVP.

**Community / workforce staff:** **High fit** if embedded at job offer or intake (“before you say yes, run this”). Without that moment-in-workflow placement, it becomes one more URL nobody opens.

**Failure modes:** Wrong stop chosen (multi-route geometry); GTFS stale vs. real disruption; “legal last bus” ≠ safe or dignified night trip; teen skips the tool until after accepting the shift.

**Verdict:** **Use** for youth workforce navigators **if** it is a mandatory step in their checklist; **Maybe** as a standalone consumer site.

---

### 4 — CITIZEN (Recipient)

| Archetype | Visibility / value |
|-----------|-------------------|
| **Engaged resident** | Sees this as sensible civic tech; may overestimate organic discovery. |
| **Service user (teen job seeker)** | High clarity if UX is one screen and plain language; saves grief if timed before acceptance. |
| **Invisible resident** | Excluded without smartphone, stable address, or English — same digital divide called out in pillar research (B5 digital equity). Does not *create* harm; **widens outcome gaps** if programs treat digital check as sufficient. |

**Trust:** No account is good; geocoding and location storage need a minimal-data policy if expanded.

---

### 5 — ARCHITECT (System guardian)

**Walls hit:** **None** for core GTFS read-only MVP.

**Integration complexity:** **Low** — public feeds + geocoding (Nominatim or vendor) + static or small serverless backend. Optional GTFS-RT improves fidelity during change days.

**Tier A rationale (from IDEA):** Building reliable nearest-stop + last-trip logic and **curating employer POIs** for the “which employers fit” layer — not a policy blocker, engineering scope.

**Recommendation:** **Ship** (externally hosted). Prefer a **shared Bundle 5 library** so four ideas do not fork the same GTFS math four ways.

**Maintenance:** Nonprofit or small vendor + GRTC feed monitoring; not a 428-app DIT burden if kept off City ERP.

---

### 6 — FUNDER (Resource realist)

**Model:** **Zero-cost to near-zero** for MVP (GitHub Pages / serverless + free-tier geocoding limits).

**Year 1 / Year 3:** Pilot = staff time + optional SMS or partner LMS embed; ongoing = domain, hosting, geocoding API at scale — still modest vs. turnover cost research cites for employers.

**Sustainability risk:** **Low** technically; **Medium** organizationally — depends on partner embedding, not subscription revenue.

**Negative cost of inaction:** Predictable first-week attrition and “transportation” coded as youth failure in program data (DC MBSYEP, YouthBuild citations in `RESEARCH_RESULT.md`).

---

### 7 — ACTIVIST (Ecosystem)

**Prior art:** Transit, Moovit, etc. do “arrive by” / trip planning; **no mainstream shift-to-last-bus hard match** for rosters or pre-hire checks (`RESEARCH_RESULT.md` tooling table).

**Decision tree:** **Adapt + Build** — extend public GTFS patterns; do not wait for City IT to “own” the repo.

**Ownership:** **Hybrid** — GRTC (data authority) + **workforce / youth program** (distribution) + civic tech builder. Regional scale is appropriate (GRTC is not City-only).

**Reframe:** Success may require **policy complements** (span, GRH, microtransit) later; the scout is the diagnostic, not the full fix.

---

## Productive Tensions

| Tension | What the table holds |
|---------|----------------------|
| **Innovator vs. Architect** | Employer roster + heat maps are provocative; MVP must stay **read-only public data** until privacy and accuracy are nailed. |
| **Mayor vs. Activist** | City legitimacy helps distribution; **nonprofit/civic** execution avoids procurement drag for v1. |
| **Frontliner vs. Innovator** | The cleverest feature is worthless if teens never see it **before** they accept the shift. |
| **Citizen vs. System** | Trip planners exist; value is **decision timing** and copy that fits a 16-year-old, not GIS depth. |
| **Funder vs. Innovator** | GRH integration and policy modules cost money and partnerships — sequence **after** the free diagnostic works. |

---

## Fatal Flaw Test

| Criterion | Result | Notes |
|-----------|--------|--------|
| No identifiable owner | **PASS** | Hybrid owner: workforce/youth program + GRTC data + external maintainer — must be **named in a pilot MOU**, not left abstract. |
| Structural wall, no workaround | **PASS** | GTFS is explicitly open; no 311/ERP wall for core logic. |
| Net negative for frontline | **PASS** | If embedded, reduces crisis calls; if standalone only, neutral-to-negative adoption — **mitigation = workflow embed**. |
| No funding path beyond pilot | **PASS** | Cheap run rate; risk is **attention**, not dollars. |
| Harms Invisible Resident | **PASS** | Digital exclusion is real but is **failure to reach**, not active harm; mitigate with staff-assisted checks and non-digital fallbacks in programs. |

**Synthesis:** No fatal flaw **if** distribution is contractually embedded with at least one workforce partner. Otherwise: **operational failure mode**, not ethics kill.

---

## Verdict

**Status:** **GO** with conditions  

**Conditions:**  
1. Pilot with a **named** youth workforce intake point (e.g., program staff workflow, not app-store hope alone).  
2. Validate **Richmond-specific** anecdotes with local providers (flagged as high R×U in `INNOVATION_ANALYSIS.md`).  
3. Align with **Bundle 5** shared GTFS geometry/last-trip module to avoid duplicate maintenance.  
4. Publish limitations: safety, walking conditions, and real-time disruption not fully captured by static GTFS alone.

**Temporal tag:** **Appreciating** — GTFS-RT and eventual permitting/employer open data could deepen accuracy; core static feed is **stable** per tech stack doc.

---

## Rubric Grades & Awards

**Source:** `thriving-families/NEW_IDEAS_BLUESKY_RUBRIC_GRADES.md` (spec-level execution scoring).

| Category | Score (1–5) |
|----------|:-----------:|
| Impact | 4 |
| Feasibility | 5 |
| User Value | 4 |
| Execution | 4 |
| Innovation | 4 |
| Equity | 4 |

| Award | Weighted score (max 105) |
|-------|--------------------------:|
| **Pillar (Thriving Families)** | **87** |
| **Mayor's Choice** | **89** |

**Moonshot** (Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2): **78** / 105 — solid but not the primary profile vs. Mayor's Choice.

---

## Status Block

- **Phase:** CONDENSED COMPLETE  
- **Verdict:** GO with conditions  
- **Fatal flaws:** 0 (ownership must be made explicit in pilot design)  
- **Key risk:** Distribution timing and digital equity — not data access  
