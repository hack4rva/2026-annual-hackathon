# Roundtable: What's On My Street? (Condensed)

**Initiated:** 2026-04-02  
**Slug:** `whats-on-my-street`  
**Pillar:** A Thriving & Sustainable Built Environment  
**Problem Statement:** PS1 — Infrastructure Project Visibility  
**Source:** NEW (AI-generated post-event)  
**Implementation Reality Score:** 19/25 — Tier A (Strong)  
**Overall Rank:** #26 of 73

## Input Materials

| File | Status |
|------|--------|
| `ideas/thriving-built-environment/whats-on-my-street/IDEA.md` | Loaded |
| `.../RESEARCH_RESULT.md` | Loaded |
| `.../INNOVATION_ANALYSIS.md` | Loaded |
| `ideas/RICHMOND_TECH_STACK_2026.md` | Loaded |
| `pillar-repos/.../research/INDEX.md` | Loaded (F2, G1, G4, H2, D2 cited in discussion) |

## Existing Rubric Grades (from IDEA.md — pre-roundtable)

| Category | Score |
|----------|:-----:|
| Impact | 5 |
| Feasibility | 4 |
| User Value | 5 |
| Execution | 4 |
| Innovation | 3 |
| Equity | 4 |

**Pillar Award (pre):** 90 | **Mayor's Choice (pre):** 92

## Bundle Context

**Bundle 3: GeoHub Infrastructure Lookup** — extends proven GeoHub CIP pattern with multi-source aggregation; shared geocoding benefits StreetLights, Snow Tier Compass, HUD Rent-Cap Validator, Subsidy & Covenant Snapshot.

---

## Status

- **Phase:** COMPLETE (condensed format)
- **Verdict:** **Ship with conditions** — pilot-grade resident tool if CORS, layer access, and staleness are treated as first-class product requirements, not demo afterthoughts.
- **Fatal flaws detected:** 0 (no single blocker that makes the concept non-viable; several **gating** risks)

---

## Persona simulations (7)

### 1 — Concerned resident (Fan / Church Hill commuter)

**Assessment:** The job-to-be-done is visceral: unexpected cones and detours with no single place to learn scope, duration, or who to call. IDEA.md correctly frames this as the pillar’s #1 gap. The resident will tolerate a thin MVP if every row says **when the data was refreshed** and **who owns the project**; they will not tolerate a slick UI that implies completeness while omitting VDOT work or stale paving lists. Three to five sentences are enough to say: this is the product I wished existed last week when my bus route changed twice.

**Research**

| Query | Finding |
|-------|---------|
| Richmond GeoHub CIP public REST / Virginia CIP GeoService | Richmond promotes a Capital Project Dashboard on GeoHub with quarterly updates, address search, and phase/detail fields on the public-facing story (`rva.gov` / GeoHub). Separate ArcGIS FeatureServer endpoints exist for CIP-style layers (e.g., Virginia Open Data “CIP Projects” GeoService); path to programmatic access is plausible but **must be validated per-layer** against the exact Richmond EPMS layer IDEA.md references. |
| (shared) RESEARCH_RESULT.md benchmarks | Boston explicitly excludes state DOT projects; Philadelphia aggregates many layers but is map-forward. Richmond’s pitch as **multi-source including VDOT** is comparatively strong if engineering holds. |

---

### 2 — DPW communications / front-desk staffer (JTBD 3)

**Assessment:** Call and email volume for “what’s that work on my street?” is real; a unified lookup is a **deflection** tool, not a replacement for 311 when the issue is damage, access, or enforcement. Richmond’s **AvePoint 311 has no public API** (per tech stack), so the dream scenario—auto-populating an operator console—requires a City partnership; the hackathon MVP should still help staff **verbally** by giving them the same public list a resident sees. Value is high if DPW helps validate plain-language labels for phases and contacts.

**Research**

| Query | Finding |
|-------|---------|
| 311 location validation / construction FAQ patterns | Major 311 programs validate service locations via address, intersection, block, and app GPS; construction questions are often triaged to line departments. A **resident-facing** GIS aggregator aligns with how cities already expect people to specify “where,” but **operator integration** is a separate procurement and security conversation. |

---

### 3 — Accessibility advocate (ADA Title II / WCAG)

**Assessment:** INNOVATION_ANALYSIS’s **text-first, list-primary** pattern is not a nice-to-have; it is aligned with how accessibility practitioners describe compliant complements to interactive maps (tables, summaries, keyboard paths, live region updates for dynamic results). Leading with a sortable, screen-reader-friendly list turns the prototype into a plausible **2026 Title II** posture, while map-only civic clones remain structurally weak. The team must still user-test with assistive tech—WCAG is about verified behavior, not intent.

**Research**

| Query | Finding |
|-------|---------|
| WCAG 2.2 municipal GIS / map alternatives | ADA Title II WCAG 2.1 AA deadline for large local governments (April 24, 2026) is widely cited in GIS accessibility guidance; recommended mitigations include **data tables or lists**, alt text/summaries for spatial relationships, keyboard access, and high-contrast options. Esri’s own documentation continues to flag partial support for complex map widgets. |

---

### 4 — Civic data architect / integrator

**Assessment:** The architecture choice (nightly ETL vs. live client-side fan-out) trades freshness against operational simplicity; RESEARCH_RESULT.md’s **Philadelphia (automated aggregation)** vs. **Seattle (mandated intake)** frame applies directly. For Richmond, automated aggregation will **under-represent** private utility and non-digitized work—acceptable if the UI states coverage boundaries. **Deduplication** across GeoHub and Socrata is a real engineering risk (INNOVATION_ANALYSIS Assumption #2). **CORS** on browser-only MVPs is a test-on-day-one item, not a footnote.

**Research**

| Query | Finding |
|-------|---------|
| VDOT FeatureServer / Virginia open geospatial | VDOT hosts multiple ArcGIS REST FeatureServices (e.g., via `vdotgisuportal.vdot.virginia.gov`) with query/GeoJSON patterns suitable for bbox or distance filters; Virginia Open Data catalogs VDOT-hosted layers. **Project-specific** layers for “what’s under construction” must be matched to IDEA’s intended SMART Scale / project feeds—not assumed identical to LRS route layers. |
| Geocoding in Virginia | VGIN composite geocoder and standard ArcGIS REST geocoding patterns exist statewide; Richmond parcel/address services may require hub discovery or partnership for rate limits and accuracy. |

---

### 5 — Elected official / “Mayor’s Choice” lens

**Assessment:** This is one of the most **legible** demos in the pillar: type an address, show a list, cite live APIs. It photographs well for constituents and council districts. The political risk is **over-promising completeness**—VDOT and utilities will disown anything that looks like a City guarantee. Framing as **transparency aggregation with source attribution** protects the City; framing as “everything on your street” without caveats invites blowback when a Dominion trench is missing.

**Research**

| Query | Finding |
|-------|---------|
| (conceptual) RESEARCH_RESULT MOU / ROW coordination | Formal MOUs and permit-linked compliance are how Seattle-class completeness happens; Richmond is not signing those over a weekend. **Phase 1** should match IDEA’s own recommendation: city-fed automated feeds first, policy vision second. |

---

### 6 — Neighborhood equity organizer

**Assessment:** Lower-car households, shift workers, and older adults feel construction impacts **acutely**; text-first search lowers the barrier for people who do not navigate map UIs comfortably. Equity also means **language and literacy**—address entry must not be the only path (intersection / landmark browse is a backlog item). Stale or missing data **hurts** equity first: those with least spare time get wrong answers. Per-source freshness badges are therefore an equity feature, not engineering vanity.

**Research**

| Query | Finding |
|-------|---------|
| Civic dashboards / trust (general) | Successful city dashboards are framed around accountability and cross-department metrics; conversely, **stale open data** erodes trust—pillar research G4 (`data_freshness`) and G1 (`inaccurate project info`) are the relevant guardrails. |

---

### 7 — Skeptical implementer (DIT / risk officer hat)

**Assessment:** `RICHMOND_TECH_STACK_2026.md` flags three concrete hazards: (1) **Socrata Impact Map `aq4i-4gpd` is STALE** (last updated Mar 31, 2023); (2) **CIP dashboard** is described as beta, quarterly, and **not anonymously queryable** on the main dashboard path—**conflicts** with IDEA.md’s confident FeatureLayer ID; (3) **EnerGov** has no public API, so permit depth stays shallow without GeoHub-published layers or scraping/FOIA. None of these kill the idea; they **tighten** the MVP scope and require a pre-demo access matrix signed by someone who actually hit each endpoint from a clean browser session.

**Research**

| Query | Finding |
|-------|---------|
| StreetSmartPHL prior art | Philadelphia’s StreetSmartPHL remains the national reference for multi-layer street infrastructure maps (permits, paving, closures, sanitation, snow); data is also discoverable via OpenDataPhilly / ArcGIS hubs. Richmond’s differentiation is **accessible list-primary UX** and explicit **source-level timestamps**, not raw aggregation novelty. |

---

## Top 3 tensions — resolutions

| Tension | Resolution |
|---------|--------------|
| **Completeness vs. honesty** | Residents want “everything”; automated feeds will omit utilities and some state/local rows. **Ship** a coverage statement, per-source refresh time, and “known gaps” (e.g., private utility work) rather than implying 100% ROW coverage. |
| **IDEA.md vs. tech stack on CIP + Socrata** | Treat as **test, not faith**: validate the specific FeatureLayer ID and anonymous `query` from non-City networks; if gated, pivot to Virginia Open Data / published FeatureServer URLs or partner with DIT for a read token. For Socrata, **either** exclude Impact Map until refreshed **or** label prominently as archival and prioritize GeoHub/VDOT. |
| **Map culture vs. accessibility mandate** | Keep optional map for sighted users; **primary** sorted list is the compliance-forward and differentiation path (INNOVATION_ANALYSIS). Run one session with screen-reader users before claiming WCAG AA. |

---

## Fatal flaw test

| Question | Result |
|----------|--------|
| Does the idea require a forbidden integration (e.g., 311 read/write) for **any** MVP? | **No** — MVP can be read-only public aggregation; 311 console integration is optional and blocked without partnership. |
| Is there **zero** accessible data for the core story? | **No** — GeoHub, state geospatial services, and VDOT-related FeatureServices provide a credible path; exact Richmond layers need confirmation. |
| Would a successful demo **necessarily mislead** the public? | **Only if poorly framed** — fatal flaw appears if team hides staleness or pretends EnerGov-equivalent depth; mitigated by transparency UX. |

**Conclusion:** No single fatal flaw; **failure mode** is over-claiming + unvalidated APIs → reputational and hackathon-judge trust loss.

---

## Verdict

**Ship with conditions:** Build the text-first address lookup against **verified** public endpoints; publish a source register and freshness; scope v1 to automated feeds only; document the Seattle-style intake model as Phase B policy, not weekend deliverable.

---

## Post-roundtable scores & awards

Adjusted view: **Innovation** raised to **4** (text-first + per-source freshness as differentiated product design vs. map clones); **Feasibility** lowered to **3** (CIP access ambiguity, stale Socrata, CORS/dedup/EnerGov wall). Other categories unchanged from IDEA.md.

| Category | Score |
|----------|:-----:|
| Impact | 5 |
| Feasibility | 3 |
| User Value | 5 |
| Execution | 4 |
| Innovation | 4 |
| Equity | 4 |

### Award calculations (same weights as hackathon rubric)

- **Mayor’s Choice** — Impact×5, Feasibility×5, User Value×4, Execution×3, Equity×3, Innovation×1  
  `25 + 15 + 20 + 12 + 12 + 4` = **88**

- **Pillar Award (Built Environment)** — Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3  
  `25 + 20 + 9 + 12 + 12 + 12` = **90**

- **Moonshot** — Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2  
  `20 + 20 + 15 + 12 + 6 + 8` = **81**

---

## One-line summary

A text-first, WCAG-aligned address lookup that unifies Richmond infrastructure feeds where APIs truly allow it, with per-source freshness and honest coverage limits, is pilot-worthy and pillar-aligned; it fails if marketed as complete or built on unvalidated layers and stale open data without disclosure.

---

## Rollback / revision triggers

- If anonymous REST query fails on the proposed CIP layer: **narrow** to confirmed public layers + VDOT + manual CSV for paving until DIT exposes a stable feed.
- If Impact Map remains stale: **drop or quarantine** that source in UI.
- If deduplication produces double entries in user testing: **merge heuristics** or show “possible duplicate” sub-labels.
