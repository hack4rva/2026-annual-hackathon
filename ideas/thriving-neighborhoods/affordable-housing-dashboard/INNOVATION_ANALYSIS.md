# Innovation Analysis: Affordable Housing Dashboard

**Generated:** April 2, 2026
**Inputs:** RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Separate city dashboard and PHA website for housing data | Eliminate | Durham, Madison, and Aurora all maintain separate municipal dashboards and PHA pages; residents must visit two places. Eliminate the split by embedding RRHA waitlist status directly into the city dashboard |
| Double-counting of mixed-program units | Reduce | Research warns dashboards that mix LIHTC, LURA, and PBV units without deduplication inflate inventory counts. Reduce this by publishing explicit deduplication rules and a data dictionary |
| Neighborhood-level cost burden transparency | Raise | Cambridge's Power BI dashboard is the gold standard — explicit CHAS data, MOE documentation, multi-vintage comparison. Raise Richmond above the typical mid-sized city by including all of these |
| Goal-anchored progress tracking | Create | Madison tracks progress toward 15,000 homes by 2030; Raleigh tracks 5,700 by 2026; Boulder tracks 15% permanently affordable. Richmond has no equivalent public numeric target — creating one and tracking against it is the innovation |

**Core assumption challenged:** That a housing dashboard is primarily a data visualization project. The research shows the most impactful dashboards (Madison, Raleigh, Boulder) are anchored to explicit numeric goals — the dashboard is an accountability mechanism, not just an information tool.

**Reframed value proposition:** Instead of "see where affordable housing is," build "are we on track?" — a goal-anchored dashboard that holds Richmond accountable to a specific affordable housing production target, with neighborhood-level equity metrics showing whether new units are distributed fairly.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Goal Tracker** — Set a Richmond-specific target (e.g., "2,000 new affordable units by 2030") and build a Power BI dashboard tracking monthly progress with a thermometer-style gauge, like Madison's Housing Tracker.
2. **Neighborhood Equity Map** — An ArcGIS map showing affordable units per census tract, color-coded by whether each neighborhood has its "fair share" relative to population and need.
3. **Waitlist Reality Check** — Embed RRHA waitlist status (open/closed, estimated wait time by bedroom size) directly into the dashboard so residents don't have to visit a separate PHA website.
4. **Cost Burden Heatmap** — Replicate Cambridge's CHAS-based cost burden dashboard for Richmond, showing which tracts have >30% and >50% burden rates, with explicit MOE documentation.
5. **Subsidy Stacking Viewer** — For each affordable property, show the full subsidy stack (LIHTC + HOME + PBV + local funds) with the binding expiration date, avoiding the double-counting trap.
6. **Pipeline Dashboard** — Track affordable units from commitment → under construction → completed → occupied, showing the conversion funnel and where units drop out of the pipeline.
7. **Comparative Scorecard** — Benchmark Richmond against peer mid-sized cities (Durham, Raleigh, Madison) on key housing metrics: cost burden rate, affordable unit per capita, waitlist length, production rate.
8. **"How to Apply" One-Stop** — Integrate every affordable housing program's application link, eligibility requirements, and waitlist status into a single "Apply for Housing" portal — not just data, but action.

**Most provocative:** #7 — Comparing Richmond to peer cities like Raleigh (which has an explicit 5,700-unit target and public dashboard) creates political pressure through transparent benchmarking.
**Most feasible:** #4 — HUD CHAS data is free and publicly downloadable; Cambridge's methodology is documented; replication for Richmond is a data loading exercise.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond has no public dashboard showing how much affordable housing exists, where it is, whether it's enough, and how to access it.

**Target user:** A Richmond City Council member preparing for a budget vote who needs to answer: "Are we building enough affordable housing, and is it going to the right neighborhoods?"

**User Journey:**
- **Start:** Council member receives constituent complaints about rising rents in Southside
- **Friction:** No single data source shows total affordable units, geographic distribution, pipeline status, or waitlist reality. Staff must manually compile data from RRHA, HCD, ACS, and NHPD — taking days. By the time the data is assembled, it's already stale.
- **Outcome:** Council member opens the dashboard, sees: "Richmond has X affordable units. Y are under construction. Z are expiring within 5 years. Southside has the highest cost burden (48% >30% of income) and the fewest affordable units per capita. RRHA waitlist: 3,200 households. Click here to see the full breakdown by district."

**Lowest-fidelity prototype:** A 3-tab Power BI report: Tab 1: Production progress (total units, pipeline); Tab 2: Geography (affordable units by tract on a map); Tab 3: Need (CHAS cost burden rates by tract).

**First test:** Present to Richmond's HCD director and ask: "Does this match your internal data? What's missing?" Validate counts against HCD's records before going public.

---

## 4. Opportunity Mapper

### Pattern A: CHAS + NHPD Public Dashboard (Quick Win)

- **Target user:** Council members, housing advocates, journalists, residents
- **Desired outcome:** A public-facing dashboard showing affordable housing inventory, cost burden by neighborhood, and waitlist status
- **Core workflow:** Download HUD CHAS data (2018-2022 vintage) for Richmond tracts → download NHPD for Richmond properties → geocode to GeoHub parcels → build Power BI dashboard with 3 views: inventory map, cost burden heatmap, summary KPIs → embed RRHA waitlist status via manual integration
- **Dependencies:** CHAS data (free, public, HUD User), NHPD (free, quarterly), GeoHub parcels (public), Power BI (available if city has Microsoft license) or ArcGIS Dashboards
- **Pros:** All data is public and free; replicates proven Cambridge/Raleigh models; no local data-sharing agreements needed for MVP; Power BI is widely supported
- **Cons:** CHAS data has a 2-3 year lag (2018-2022 vintage); NHPD may miss locally funded units; waitlist data requires manual scraping from RRHA website
- **Richmond relevance:** Richmond's HCD has not published a public dashboard; Raleigh (a peer city) launched one tracking 5,700 units — Richmond should match this standard

### Pattern B: Goal-Anchored Comprehensive Dashboard (Stretch)

- **Target user:** City Manager, Council, HCD, RRHA, housing advocates
- **Desired outcome:** A dashboard anchored to a specific Richmond production goal, integrating city pipeline data, RRHA programs, and CHAS burden metrics with explicit data provenance and MOE documentation
- **Core workflow:** HCD provides pipeline data (committed → under construction → completed) → RRHA provides program counts and waitlist data → CHAS provides burden context → all integrated into a single dashboard with "last updated" timestamps, data dictionary, and CSV export
- **Dependencies:** HCD data-sharing agreement for pipeline data; RRHA cooperation for waitlist data; Council adoption of a numeric production target; ongoing maintenance commitment
- **Pros:** Replicates the full Madison model (goal tracking + LURA filtering + monthly updates); creates institutional accountability; becomes the authoritative housing data source
- **Cons:** Requires multi-agency coordination; maintenance commitment; production target must be politically negotiated
- **Richmond relevance:** Richmond's affordable housing strategy lacks a public progress tracker — this would be the first

**Recommendation:** Build Pattern A as the hackathon MVP — it requires only public federal data and can be assembled in a weekend. Use the demo to advocate for Pattern B: "Here's what we can show with public data alone. Imagine what we could show with city pipeline data."

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 5 | Housing affordability is Richmond's top constituent concern; a public dashboard creates transparency and accountability |
| Feasibility | 4 | Public data (CHAS, NHPD) is sufficient for MVP; full version requires HCD/RRHA partnership |
| Data availability | 4 | CHAS, NHPD, HUD MAH are all public; local pipeline and waitlist data require partnerships |
| Clarity | 5 | "How much affordable housing do we have, where is it, and is it enough?" — universally understood |
| Demo credibility | 4 | A Power BI dashboard with real Richmond data, map views, and CHAS burden metrics is visually compelling |

**Richmond-specific alignment:** Pillar 2 (Thriving Neighborhoods), PS2 (Affordable Housing Compliance Monitoring). Richmond's HCD manages the local affordable housing portfolio; RRHA administers public housing and HCVs. Peer cities like Raleigh and Durham already have public dashboards — Richmond is falling behind.

**Policy/eligibility risks:** Publishing property-level subsidy data could inadvertently identify tenants in small properties (privacy). Follow Cambridge's approach: suppress small-n subgroup data and aggregate to the tract level where property counts are low. Double-counting across LIHTC, HOME, and PBV must be explicitly addressed in the data dictionary.

**Weekend MVP shapes:**
1. **Power BI trio:** Three-tab dashboard — Inventory (NHPD map), Burden (CHAS heatmap), Access (RRHA waitlist status) — all using free public data
2. **ArcGIS Story:** A GeoHub-based narrative showing the geographic distribution of affordable housing overlaid with cost burden, telling the story of which neighborhoods need more

---

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | Priority |
|---|-----------|------|-------------|----------|
| 1 | CHAS data for Richmond census tracts is recent enough to be useful (2018-2022 vintage) | 2 | 2 | Low |
| 2 | NHPD accurately captures Richmond's subsidized housing inventory | 3 | 3 | Medium |
| 3 | Richmond will adopt a public numeric affordable housing production target | 4 | 4 | **High** |
| 4 | HCD and RRHA will cooperate to provide local pipeline and waitlist data | 4 | 3 | **High** |
| 5 | Power BI or ArcGIS Dashboards are accessible to the target audience (council members, advocates) | 2 | 2 | Low |
| 6 | The dashboard will drive actual policy changes (not just be viewed once and ignored) | 4 | 4 | **High** |
| 7 | CHAS margins of error are manageable at the tract level for Richmond | 3 | 2 | Medium |

**Top 3 to validate:**
1. **#3 — Production target adoption:** Research whether Richmond's HCD or Council has discussed a numeric target. If no target exists, the dashboard loses its most powerful feature (goal tracking). Talk to HCD director about feasibility of establishing one. Validation: policy research + one stakeholder conversation.
2. **#4 — HCD/RRHA data sharing:** Determine whether HCD will provide pipeline data and RRHA will provide waitlist statistics. Without these, the dashboard is limited to federal data only. Validation: introductory meetings with both agencies.
3. **#2 — NHPD accuracy for Richmond:** Download NHPD data filtered to Richmond and spot-check 10 known affordable properties. If major properties are missing, the inventory will undercount. Validation: 2-hour data comparison.

---

## Key Takeaway

The Affordable Housing Dashboard addresses a critical gap in Richmond's transparency infrastructure. Peer cities like Madison, Raleigh, and Cambridge have proven the model. The MVP is entirely buildable from public federal data in a weekend. The stretch goal — anchoring the dashboard to a numeric production target — is the real innovation, transforming a data tool into an accountability mechanism.
