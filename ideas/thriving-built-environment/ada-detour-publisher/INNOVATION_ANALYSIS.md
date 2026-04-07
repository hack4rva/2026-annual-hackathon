# Innovation Analysis: ADA Detour Digital Publisher

**Generated:** April 2, 2026
**Inputs:** IDEA.md, RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| PDF traffic control plans | Eliminate | The research documents the status quo: cities circulate static TCP PDFs that are non-routable and often not accessible. Eliminate the PDF entirely — replace it with structured, machine-readable data. |
| Map-based detour visualization | Reduce | Seattle's Accessible Route Planner is the ceiling of current practice — but it's still a map, which fails WCAG for many users. Reduce reliance on maps by making text-based turn-by-turn directions the primary output. |
| ADA attribute granularity | Raise | OpenSidewalks encodes width, surface, slope, and curb ramps for permanent infrastructure. Raise this by applying the same attribute schema to temporary detour routes — something no city has done. |
| Screen-reader-first detour directions | Create | No city publishes routable, ADA-attributed pedestrian detour geometries from permits. No city provides screen-reader-compatible turn-by-turn directions around construction zones. Create both. |

**Core assumption challenged:** That pedestrian detours are a physical problem solved with orange signs. The research shows MUTCD 11th Edition mandates audible information devices at SIDEWALK CLOSED signs, and PROWAG requires proximity-actuated audible signage. But *digital* notice — publishing detour routes as accessible data — is a blind spot in every city's compliance strategy. DOJ's 2024 Title II web rule means if a city publishes *any* detour info digitally, it must be WCAG 2.1 AA compliant.

**Reframed value proposition:** Not a map of detours — a *digital ADA accommodation*. Each construction closure gets a page with text-based directions, grade and distance estimates, and CARE paratransit conflict flags. It's the digital equivalent of the physical signs that MUTCD already requires.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Permit-to-Page Pipeline** — When a Work-in-Street Permit is issued, auto-generate a detour page from the permit's pedestrian routing plan. Each page has: text directions, estimated distance, grade, and dates. Published as a static site.
2. **Audio Detour Hotline** — A phone number you call from the construction zone. Enter the permit number (posted on the SIDEWALK CLOSED sign). Hear turn-by-turn audio directions to navigate around the closure. No smartphone required.
3. **QR Code on Barriers** — Every construction barrier gets a QR code linking to the detour page. Scan → get screen-reader-compatible directions. Physical-digital bridge.
4. **Accessibility-Aware Trip Planner** — Feed detour geometries into AccessMap (University of Washington) or a similar tool so wheelchair users and blind pedestrians can get routing that automatically avoids active closures.
5. **CARE Pickup Protector** — When a detour affects a CARE paratransit pickup point, auto-generate an alternate pickup location and notify the rider and dispatcher. Shared dependency with the GRTC Conflict Detector.
6. **Contractor ADA Compliance Checker** — A form where contractors self-report their detour setup (width, surface, ramp presence). System auto-validates against PROWAG minimums (4-ft width, max slope, detectable edging). Flags non-compliant setups for inspection.
7. **Field Inspector Verification App** — Inspectors use a mobile app to verify that the physical detour matches the digital attributes. Photo proof + GPS + attribute confirmation. "Last verified" timestamp publishes to the detour page.
8. **Closure Impact Score** — For each sidewalk closure, calculate an "impact score" based on: pedestrian volume, proximity to hospitals/schools/transit, wheelchair-dependent residential density. Prioritize inspection resources for high-impact closures.

**Most provocative:** #2 (Audio Detour Hotline) — Solves the problem for the most vulnerable users (blind pedestrians without smartphones) using technology from the 1990s. Radically inclusive.
**Most feasible:** #1 (Permit-to-Page Pipeline) — If permit data includes any description of the pedestrian routing, converting it to a structured web page is straightforward.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Wheelchair users and visually impaired pedestrians arrive at sidewalk closures with no advance warning and no accessible way to navigate around them.

**Target user:** A wheelchair user who regularly travels along a commercial corridor (e.g., Broad Street) and encounters a sidewalk closure that forces them into the street or onto an impassable surface.

**User Journey:**
- Start: Wheelchair user is traveling their regular route to a medical appointment.
- Friction: They encounter a SIDEWALK CLOSED sign with an arrow pointing across the street. The temporary crossing has no curb ramp. The detour adds 3 blocks and includes a 12% grade hill. They didn't know this closure existed until they arrived.
- Outcome: Before leaving home, they check the ADA Detour Publisher for their route. Their address shows one active closure: "Broad St between 5th and 7th. Detour: south on 5th St (flat), west on Grace St (4% grade, 0.1 mi), south on 7th St to rejoin Broad. Total detour: 0.3 mi. Temporary curb ramp at 5th & Grace confirmed. Active through April 15."

**Lowest-fidelity prototype:** A single-page website. Address input. Returns any active sidewalk closures within 500 feet. For each closure: text description of detour route, estimated distance, and dates. Data source: manually entered from Work-in-Street Permit files (even 3-5 sample closures prove the concept).

**First test:** Identify 3 active sidewalk closures in Richmond. Manually create detour pages. Share with the Richmond disability advocacy community. Ask: "Would this information have changed how you planned your trip?"

---

## 4. Opportunity Mapper

### Pattern A: Manual Detour Publisher from Permit Data (Quick Win)
- **User:** Wheelchair users, visually impaired pedestrians, CARE paratransit riders.
- **Outcome:** Each active sidewalk closure has a web page with text-based detour directions, distance, grade, and dates.
- **Workflow:** Obtain Work-in-Street Permit pedestrian routing plans (from DPW, FOIA if necessary) → manually extract detour info → create a page per closure with text directions, distance, grade estimate → publish as a static site.
- **Dependencies:** Access to Work-in-Street Permit data (IDEA.md notes "may require FOIA batch or partnership"). GeoHub road centerlines for distance/grade estimation. Manual data entry for v1.
- **Richmond relevance:** Scored 14/25 (Tier B) — lower than other ideas due to the FOIA/partnership dependency. But Innovation: 5/5 and Equity: 5/5 because no city has done this.

### Pattern B: Automated Permit-to-Page Pipeline (Stretch)
- **User:** Same as Pattern A, plus city inspectors and DPW permit office.
- **Outcome:** When a Work-in-Street Permit is issued, the system auto-generates a detour page. Inspectors verify and publish. Pages auto-expire when the permit closes.
- **Workflow:** DPW permit system → extract pedestrian routing plan geometry → validate against PROWAG minimums (4-ft width, max grade) → generate page with text directions + ADA attributes → inspector verifies with mobile app → publish.
- **Dependencies:** DPW permit system API or data export. Pedestrian routing plans in structured format (not just PDFs). Inspector mobile app. OpenSidewalks schema adoption.
- **Richmond relevance:** This is the "no city has done this" opportunity. The research shows Seattle is closest (Accessible Route Planner + Director's Rule 10-2015) but still doesn't publish actual detour geometries.

**Recommendation:** Pattern A proves the concept with 3-5 manually created detour pages. The demo is a wheelchair user's perspective of navigating construction — emotionally powerful for judges. Pattern B is a 9-12 month city initiative.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 4 | Critical equity gap for a smaller but severely affected population. Prevents stranding and CARE no-show penalties. |
| Feasibility | 3 | Concept is clear. Data access is the blocker — pedestrian routing plans are in PDFs inside the permit office, not in any API. |
| Data availability | 2 | Work-in-Street Permit routing plans exist but are not digitized or accessible. IDEA.md flags "may require FOIA batch or partnership." CARE pickup data requires GRTC. |
| Clarity | 5 | "Turn PDF detour plans into accessible web pages." Extremely well-defined. |
| Demo credibility | 4 | Even 3 manually created detour pages for real Richmond closures would be powerful. The demo is the experience, not the automation. |

**Richmond-specific alignment:** Scored 91 (Pillar Award) and 89 (Mayor's Choice) — strong scores driven by Innovation and Equity. DOJ's 2024 Title II web rule creates urgency: if Richmond publishes *any* detour info digitally, it must be WCAG 2.1 AA compliant. This tool ensures compliance by design.

**Policy/eligibility risks:**
- Permit data access: DPW may resist sharing pedestrian routing plans if they contain contractor information or if plans are inconsistently formatted.
- Liability: If a published detour route is inaccurate (wrong grade, missing ramp) and a wheelchair user is injured, the City could face ADA liability. The research notes: "Publishing inaccurate detour data could route a wheelchair user into a hazardous construction zone." Field verification is mandatory.
- WCAG compliance: Any web content published must meet WCAG 2.1 AA. This is both the motivation (making detours accessible) and a risk (the tool itself must be fully accessible).

**Weekend MVP shapes:**
1. **3-closure manual demo:** Identify 3 active sidewalk closures in Richmond. Physically walk each detour. Document: text directions, distance, grade (estimated from slope data or measured with a phone inclinometer). Build 3 web pages. Screen-reader tested. 15 hours.
2. **Closure alert + directions:** Same as above, plus integration with GRTC GTFS to flag if any GRTC stops are within 50m of the closure (shared logic with GRTC Conflict Detector). Add a "CARE riders: your pickup at [stop] may be affected" warning. 20 hours.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | Work-in-Street Permit pedestrian routing plans contain enough detail (path, width, surface) to generate useful directions | High | High | TEST FIRST |
| 2 | DPW will share permit data (or FOIA will produce it in a timely manner) | High | High | TEST FIRST |
| 3 | Wheelchair users and visually impaired pedestrians will find and use a web-based tool before traveling | High | Medium | TEST FIRST |
| 4 | Published detour information can be made accurate enough to be safe (liability concern) | High | Medium | Validate early |
| 5 | Grade/slope information for detour routes is available or estimable from existing data | Medium | High | Validate early |
| 6 | PROWAG-compliant physical detours actually exist at Richmond construction sites | Medium | High | Validate early |
| 7 | Screen-reader-compatible text directions are more useful than a map for the target users | Medium | Low | Monitor |

**Top 3 to validate:**
1. **Permit data quality** — Validation: Obtain 3 Work-in-Street Permit files via FOIA or DPW contact. Examine the pedestrian routing plans. Are they drawn on a map? Do they describe a path? Is the path specific enough to generate turn-by-turn directions? This determines whether the idea is feasible or requires a fundamentally different data source.
2. **Data access timeline** — Validation: File a FOIA request for current active Work-in-Street Permits with pedestrian routing plans. Time the response. If it takes >2 weeks, the hackathon demo must use manually-sourced data from physical site visits.
3. **User discovery behavior** — Validation: Interview 5 wheelchair users or visually impaired Richmond residents. Ask: "Before traveling a regular route, do you check any digital tool for construction? If a website existed showing detour directions for sidewalk closures, how would you want to discover it — web search, bookmarked page, SMS alert, or phone call?"

---

## Key Takeaway

The ADA Detour Publisher addresses a gap that exists in *every* US city: no one publishes digital, accessible, routable pedestrian detour information from construction permits. The research confirms Seattle is the global ceiling — and even Seattle doesn't publish actual detour geometries. The risk is data access (permit routing plans are locked in PDFs), but a hackathon team can prove the concept with just 3 manually-documented closures. The emotional power of the demo — showing a wheelchair user's experience navigating construction with and without this tool — makes it one of the strongest judge presentations in the pillar despite its lower implementation reality score.
