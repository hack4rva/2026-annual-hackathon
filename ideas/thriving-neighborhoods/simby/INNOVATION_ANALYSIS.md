# Innovation Analysis: SimBy (Simulating My Backyard)

**Generated:** April 2, 2026
**Inputs:** RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Black-box traffic and school impact studies hidden in EIS documents | Eliminate | Chapel Hill published transparent formulas (9.16 person-trips/household, 46% households with children, 20% public school capture); eliminate opaque consultant reports by making all assumptions visible and editable |
| Professional-only access to scenario planning tools | Reduce | ArcGIS Urban and CommunityViz are powerful but require GIS expertise. Reduce the skill barrier by building a simplified "what-if" interface where residents can adjust sliders (unit count, building height, density) and see instant impact projections |
| Resident co-design in scenario creation | Raise | Grand Junction ran 27 "chip game" workshops where residents physically placed density chips on maps, then digitized the results. Raise the standard from "comment on our scenario" to "build your own scenario" |
| Neighborhood-specific impact projections for Richmond | Create | No Richmond tool projects traffic, school, or fiscal impacts for proposed developments at the neighborhood level. Create localized models calibrated to Richmond ITE rates, RCPS enrollment data, and assessor valuations |

**Core assumption challenged:** That residents will trust and accept top-down impact projections. The research shows the opposite: Boulder's ArcGIS Urban pilot and Grand Junction's chip games prove that co-designed scenarios build consensus, while black-box models generate opposition. The innovation is not better modeling — it's participatory modeling.

**Reframed value proposition:** Instead of "we'll show you what this development will do to your neighborhood" (which fuels NIMBY opposition), build "show us what your neighborhood should look like" — where residents create scenarios and the tool shows the trade-offs (more homes = more traffic + more tax revenue + more school seats needed).

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Slider-Based Impact Calculator** — Residents enter a Richmond address, adjust sliders for unit count and building type, and see projected daily vehicle trips (ITE rates), new students (Richmond-calibrated SGRs), and property tax revenue.
2. **"Chip Game" Digital Twin** — Digitize Grand Junction's chip game for Richmond: residents place "chips" representing housing types on a web map of their neighborhood, and the tool projects aggregate impacts.
3. **Before/After Street View** — Use Esri CityEngine or simple 3D massing to show a block-level visualization of "current" vs. "proposed" — what will it look like if 50 units are added to this corner?
4. **School Capacity Alert** — For any proposed development, show the nearest Richmond Public Schools with current enrollment vs. capacity. If the proposed units would push a school over capacity, flag it red.
5. **Traffic Impact Hotspot Map** — Using ITE trip generation rates, project the additional daily trips from each proposed development and overlay them on Richmond's street network to identify where cumulative traffic impact is highest.
6. **Fiscal Impact per Acre** — Show the property tax revenue per acre for different development scenarios (single-family vs. townhome vs. apartment vs. mixed-use), making the fiscal argument for density visible to residents.
7. **"Do Nothing" Cost Calculator** — For any site, calculate the cost of *not* developing: lost property tax revenue, continued blight, opportunity cost. Counter the NIMBY framing by showing inaction has costs too.
8. **Community Scenario Gallery** — After multiple residents create scenarios, display them in a gallery where the community can vote on preferred options — creating democratic legitimacy for the winning scenario.

**Most provocative:** #7 — Showing the "cost of doing nothing" reframes the debate from "what will development take from us?" to "what are we losing by blocking it?" — directly countering NIMBY arguments.
**Most feasible:** #1 — ITE trip generation rates are published, RCPS enrollment data is public, and Richmond assessor data is on GeoHub. A calculator with 3-4 sliders is buildable in a weekend.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond residents have no way to understand the concrete impacts (traffic, schools, taxes) of proposed developments in their neighborhood before zoning decisions are made.

**Target user:** A resident near a proposed 80-unit apartment complex in the Fan District who wants to know: "How much more traffic will there be? Will my kid's school be overcrowded? What's the tax benefit?"

**User Journey:**
- **Start:** Resident sees a zoning hearing notice for a large development and feels anxious about impacts
- **Friction:** The only impact information comes from the developer's consultant report (which residents distrust), a 200-page environmental impact study (which no one reads), or rumors at neighborhood meetings (which may be wrong)
- **Outcome:** Resident opens SimBy, enters the development address, sees the developer's proposed scenario (80 units, 5 stories), and then creates their own alternative (40 units, 3 stories) — comparing projected traffic (+320 trips/day vs. +160), students (+16 vs. +8), and tax revenue ($210K/yr vs. $120K/yr)

**Lowest-fidelity prototype:** A single web page: enter address + number of units + building type → calculate daily trips (ITE rate × units), new students (SGR × units × enrollment rate), and annual property tax (assessed value × tax rate).

**First test:** Use a real Richmond rezoning case (e.g., a recent Scott's Addition proposal). Input the actual project parameters, run the calculator, and compare the output to the developer's traffic study to validate calibration.

---

## 4. Opportunity Mapper

### Pattern A: Impact Calculator (Quick Win)

- **Target user:** Richmond residents attending or preparing for zoning hearings
- **Desired outcome:** Transparent, resident-accessible projections of traffic, school, and fiscal impacts for any proposed development
- **Core workflow:** Enter address + unit count + building type → ITE trip generation manual rate for building type → student generation rate by housing type (calibrated to RCPS) → assessed value estimate from GeoHub assessor data × tax rate → display results with ± confidence ranges
- **Dependencies:** ITE Trip Generation Manual (12th Ed.) rates (published, $300 book), RCPS enrollment and capacity data (public), GeoHub assessor layer (public), Richmond property tax rate (public)
- **Pros:** Uses standard industry methodology (ITE, SGR); all inputs are public; instantly understandable output; can be validated against real traffic studies
- **Cons:** ITE rates are national averages, not Richmond-specific; SGRs vary by housing type and aren't published for RCPS; fiscal model is simplified (doesn't account for O&M costs of services)
- **Richmond relevance:** Richmond has active development in Scott's Addition, Manchester, and the Broad Street corridor; every rezoning triggers neighbor concerns about traffic and schools

### Pattern B: Co-Design Scenario Platform (Stretch)

- **Target user:** Planning Department facilitating community engagement workshops
- **Desired outcome:** Residents co-create development scenarios using a digital "chip game" and see real-time impact projections
- **Core workflow:** ArcGIS Urban or CommunityViz configured with Richmond parcels → residents place building types on map → tool calculates aggregate impacts (trips, students, tax revenue, carbon) → publish scenarios in a community gallery → vote on preferred option
- **Dependencies:** ArcGIS Urban license ($$$), Richmond-specific parcel and zoning data, calibrated local parameters (not just national defaults), workshop facilitation resources
- **Pros:** Replicates Boulder and Grand Junction's proven consensus-building model; transforms opposition into participation; produces community-endorsed scenarios
- **Cons:** ArcGIS Urban requires significant configuration; workshops need facilitators and venues; calibration requires local data partnerships (VDOT, RCPS, Assessor)
- **Richmond relevance:** Richmond's Planning Commission faces regular opposition at rezonings; a co-design tool could reduce conflict and accelerate approvals

**Recommendation:** Build Pattern A (impact calculator) as the hackathon demo — it's a concrete, demo-friendly tool with real numbers. Pitch Pattern B as the long-term vision for transforming Richmond's community engagement process.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 4 | Addresses a real source of community conflict (development opposition driven by impact uncertainty) |
| Feasibility | 3 | Calculator MVP is buildable; full scenario platform requires significant data calibration and ArcGIS Urban licensing |
| Data availability | 3 | ITE rates are published; RCPS capacity data may need FOIA; assessor data is on GeoHub; local trip rate calibration would require VDOT partnership |
| Clarity | 4 | "What will this development do to my neighborhood?" is universally understood |
| Demo credibility | 4 | Running the calculator on a real Richmond rezoning case and comparing to the developer's traffic study is highly compelling |

**Richmond-specific alignment:** Pillar 2 (Thriving Neighborhoods), PS1 (Neighborhood Development Discovery). SimBy is the "understanding" layer that sits on top of the Development Tracker — once residents find the development on the map, SimBy helps them understand its impacts.

**Policy/eligibility risks:** The NJ appellate case shows that unvalidated visual simulations can be dismissed in zoning disputes. All projections must include ± ranges, clearly state assumptions, and cite ITE/ACS sources. Property value predictions must be avoided (research warns of AVM bias and equity risks). Stick to fiscal proxies (tax revenue per acre) rather than parcel-level valuations.

**Weekend MVP shapes:**
1. **Web calculator:** Single-page app — address + units + building type → trips + students + tax revenue. Use ITE national rates with a Richmond tax rate multiplier.
2. **Case study comparison:** Run the calculator on 3 recent Richmond rezoning cases and validate against the developers' traffic impact analyses — showing the tool produces reasonable estimates.

---

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | Priority |
|---|-----------|------|-------------|----------|
| 1 | ITE national trip generation rates are a reasonable proxy for Richmond neighborhoods | 3 | 3 | Medium |
| 2 | Student Generation Rates can be estimated without RCPS-specific data | 4 | 4 | **High** |
| 3 | Residents will trust a tool built by hackathon participants over a developer's consultant report | 4 | 4 | **High** |
| 4 | The simplified fiscal model (assessed value × tax rate) produces meaningful estimates | 3 | 2 | Medium |
| 5 | Residents want transparent impact data rather than emotional arguments about neighborhood character | 3 | 3 | Medium |
| 6 | The tool won't be weaponized to block all development by amplifying worst-case projections | 5 | 3 | **High** |
| 7 | RCPS has enough capacity data publicly available to validate school impact projections | 3 | 4 | Medium |

**Top 3 to validate:**
1. **#6 — Weaponization risk:** Grand Junction mitigated this with co-design workshops; Boulder published methodology white papers. Build ± ranges into every projection and include the "do nothing" cost scenario. Test: show the calculator to 5 residents on both sides of a rezoning debate and observe whether it facilitates or polarizes the conversation. Validation: structured user interviews.
2. **#2 — Student Generation Rates:** Contact RCPS to request current enrollment and capacity by school. Without this data, the school impact projection is generic. If RCPS won't share, use the Chapel Hill proxy (46% households with children, 20% public school capture). Validation: one FOIA request or data inquiry.
3. **#3 — Trust calibration:** Compare the calculator's output against a real developer traffic study for a recent Richmond project. If the numbers are in the same ballpark, cite the comparison in the demo to establish credibility. Validation: 2-hour data exercise.

---

## Key Takeaway

SimBy's real innovation is not the modeling — ITE trip rates and fiscal impact math are well-established. The innovation is making these calculations transparent and resident-controlled. The research shows that participatory modeling (Boulder, Grand Junction) builds consensus while black-box consulting reports fuel opposition. A weekend-buildable impact calculator is the entry point; the long-term vision is a digital "chip game" platform that transforms Richmond's approach to community engagement.
