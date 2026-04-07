# Innovation Analysis: "What's On My Street?" Address Lookup

**Generated:** April 2, 2026
**Inputs:** IDEA.md, RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Map-first interaction | Eliminate | Philadelphia (StreetSmartPHL), Boston, San Diego all lead with maps. The research shows ArcGIS maps are not inherently accessible (WCAG failures for pop-ups, keyboard nav). Eliminate the map as primary UI entirely. |
| Per-source navigation | Reduce | NYC requires users to check DOT, DDC, and Capital Planning separately. San Diego splits CIP and paving into separate dashboards. Reduce multi-source friction to zero — one input, one unified list. |
| Data source transparency | Raise | No city in the research shows *where* each result came from or how fresh it is. Raise this by displaying a "last refreshed" badge per source (e.g., "GeoHub CIP: 2 hours ago, VDOT: 12 hours ago"). |
| Text-first accessible results | Create | No city has built a WCAG 2.2 AA text-first infrastructure lookup. Seattle's accessibility VPAT acknowledges map widgets "may not be fully perceivable." Create the first truly accessible infrastructure search. |

**Core assumption challenged:** That infrastructure transparency requires a map. The research shows Philadelphia aggregates 16+ layers into a map — but every implementation has WCAG gaps. The real innovation is making infrastructure data accessible *without* requiring spatial reasoning from the user.

**Reframed value proposition:** Not a smarter map — a search engine for street work. "What's happening on my street?" answered as a text list sorted by proximity, readable by a screen reader, usable on a flip phone's browser.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Unified REST Aggregator** — A nightly ETL that normalizes GeoHub, Socrata, and VDOT FeatureServer data into a single GeoJSON endpoint. Any app (city or third-party) can query it.
2. **Email Digest** — Subscribe to an address. Get a weekly email: "3 active projects within 1/4 mile of your address." No app needed. Plain text for maximum accessibility.
3. **311 Integration Bot** — When a resident calls 311 about road work, the operator's screen auto-populates with all active projects near the caller's address. Deflects the call into information rather than a ticket.
4. **Council District Infrastructure Report Card** — Auto-generated monthly PDF per district showing project counts, phases, and spending. Delivered to council offices for constituent communication.
5. **"Before You Commute" Morning Alert** — A daily push notification for subscribed addresses listing any road closures or active construction along their likely commute corridor.
6. **Contractor Accountability Feed** — Expose project-level timeline adherence. If a project was supposed to complete in Q1 but is still in construction in Q2, flag it publicly. Transparency creates contractor pressure.
7. **Community Voice Layer** — Let residents annotate projects with photos and comments ("This project has blocked my driveway for 3 weeks"). Structured feedback loop without 311.
8. **Permitting Pipeline Preview** — Show not just active projects but *permitted* future work. "A utility excavation permit was issued for your block; work expected to start in 6 weeks."

**Most provocative:** #6 (Contractor Accountability Feed) — Turns passive transparency into active accountability. No city does this.
**Most feasible:** #1 (Unified REST Aggregator) — The ETL is the core technical challenge anyway; exposing it as an API serves the primary idea and enables all other approaches.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond residents cannot enter an address and see all active infrastructure work because data is scattered across GeoHub, Socrata, VDOT, CIP PDFs, and the permit portal with no cross-links.

**Target user:** A commuter on a residential street in the Fan or Church Hill who encounters unexpected road closures and wants to know what's happening, how long, and whether more is coming.

**User Journey:**
- Start: Resident's daily commute is disrupted by construction. They want to know what's happening.
- Friction: They try rva.gov → find the CIP dashboard (filtered by department, not address) → can't find the specific project → try Google → find a Socrata dataset with project codes they don't understand → give up.
- Outcome: Resident types their address → sees a sorted list: "1. Broad St water main replacement (DPW, 200ft away, completion: June 2026). 2. VDOT I-95 ramp improvement (0.3 mi, completion: Dec 2026). 3. Cary St paving (DPW, 0.5 mi, starting Sept 2026)."

**Lowest-fidelity prototype:** A static HTML page with an address input. JavaScript geocodes the address via ArcGIS REST, runs parallel spatial queries against GeoHub CIP FeatureServer and Socrata API, merges results by proximity, renders a sorted list. No backend server. Deploy on GitHub Pages.

**First test:** 5 residents from 3 different neighborhoods each enter their address. Do the results match what they physically observe on their street? Does the plain-language status make sense without CIP jargon?

---

## 4. Opportunity Mapper

### Pattern A: Multi-Source Address Lookup (Quick Win)
- **User:** Any Richmond resident or commuter.
- **Outcome:** One search → unified list of all infrastructure work within a configurable radius.
- **Workflow:** Address → geocode → parallel spatial queries (GeoHub CIP FeatureServer, Socrata Impact Map, VDOT FeatureServer) → normalize into common schema (name, type, phase, distance, timeline, contact) → render sorted list.
- **Dependencies:** GeoHub CIP layer (confirmed live, ID `270285e87d684a95bd1ebd9a078aa6df`). Socrata Impact Map (`aq4i-4gpd`). VDOT FeatureServer (public, statewide — needs Richmond bbox filter). DPW Construction Projects page (scraping or FOIA needed if no API).
- **Richmond relevance:** IDEA.md calls this the "#1 prioritized gap." Scored 92 on Mayor's Choice — highest in the pillar. Directly addresses JTBD 1 (Disrupted Commuter) and JTBD 3 (City Staffer deflecting calls).

### Pattern B: Seattle-Style Centralized Intake (Stretch)
- **User:** City staff, contractors, utilities, VDOT.
- **Outcome:** All entities performing work in Richmond's right-of-way log their projects in one system, creating a complete picture including private utility work.
- **Workflow:** Mandate data entry via municipal ordinance (Seattle's SMC 15.32.050 model). Central portal for all ROW work. Automated conflict detection for overlapping projects.
- **Dependencies:** Municipal ordinance change. MOU with Dominion Energy, Comcast, VDOT. Multi-year IT project.
- **Richmond relevance:** Would be transformative but requires policy authority Richmond doesn't currently exercise. The research notes Seattle's model "requires manual data entry" and "relies heavily on compliance and enforcement overhead."

**Recommendation:** Pattern A is a hackathon-achievable MVP that demonstrates the value. Pattern B is the policy vision that Pattern A's adoption data could justify. Build A to make the case for B.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 5 | #1 prioritized gap per IDEA.md. Serves all three JTBDs simultaneously. |
| Feasibility | 4 | Three of four data sources have confirmed public APIs. DPW permit portal is the hardest source (may need scraping). |
| Data availability | 4 | GeoHub CIP: confirmed. Socrata: confirmed. VDOT: confirmed (statewide FeatureServer). DPW permits: uncertain API access. |
| Clarity | 5 | Single question, single answer. "What is happening on my street?" |
| Demo credibility | 5 | Live queries against real Richmond data. Immediately demonstrable. |

**Richmond-specific alignment:** Scored 90 (Pillar Award) and 92 (Mayor's Choice) — the highest-scoring idea in the pillar. Directly serves the MAP Pillar 6 goal of making the physical city legible. Text-first design addresses the WCAG 2.1 AA April 2026 deadline cited in the research.

**Policy/eligibility risks:** VDOT data may include projects outside Richmond's control, potentially creating expectations the City can't meet. DPW permit data access could be blocked by internal policy or vendor limitations (permit portal vendor may not expose an API).

**Weekend MVP shapes:**
1. **Three-source aggregator:** Client-side JavaScript querying GeoHub, Socrata, and VDOT in parallel. Merge results into a styled list. No backend. Achievable in 24 hours.
2. **Full ETL + accessible UI:** Python nightly ETL normalizing all sources into a single GeoJSON layer hosted on GitHub. Frontend with WCAG 2.2 AA compliance, including ARIA labels, keyboard navigation, and high-contrast mode. Achievable in 48 hours with a 2-person team.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | GeoHub, Socrata, and VDOT APIs can be queried client-side without CORS issues or auth | High | Medium | TEST FIRST |
| 2 | Project records across sources can be deduplicated (same project may appear in GeoHub and Socrata) | High | High | TEST FIRST |
| 3 | Residents prefer a text list over a map for this use case | Medium | Medium | TEST FIRST |
| 4 | VDOT FeatureServer can be spatially filtered to Richmond's bounding box efficiently | Medium | Low | Validate early |
| 5 | DPW Construction Projects page has scrapeable structure or an undocumented API | Medium | High | Validate early |
| 6 | "Plain-language status" can be derived from the project phase codes in the data | Medium | Medium | Validate early |
| 7 | Nightly ETL freshness is acceptable (vs. real-time queries) | Low | Low | Monitor |

**Top 3 to validate:**
1. **Cross-source API accessibility** — Validation: Open browser DevTools, run `fetch()` against all three APIs with a Richmond bounding box. Log CORS headers, auth requirements, and response times. Takes 30 minutes.
2. **Deduplication feasibility** — Validation: Pull 50 records from GeoHub and Socrata for the same geography. Manually inspect for overlapping projects. Determine if Project ID, name, or geometry matching can deduplicate.
3. **Text-first preference** — Validation: Show 10 people two mockups (map-first vs. list-first) of the same data. Ask: "Which one answers 'what's happening on my street' faster?"

---

## Key Takeaway

"What's On My Street?" is the highest-scoring idea in the pillar (Mayor's Choice: 92) because it solves the most universally felt problem with proven data sources. The research shows no US city has built a truly accessible, text-first multi-source infrastructure lookup — Philadelphia comes closest but leads with a map and fails WCAG. The hackathon opportunity is to build the first one, and the political opportunity is that adoption data from this tool could justify Seattle-style centralized intake policy for Richmond.
