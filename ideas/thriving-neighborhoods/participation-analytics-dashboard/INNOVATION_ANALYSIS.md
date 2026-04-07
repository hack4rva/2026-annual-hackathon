# Innovation Analysis: Participation Analytics Dashboard

**Generated:** April 2, 2026
**Inputs:** RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Department-siloed feedback collection | Eliminate | Austin centralized engagement across 42 departments via PublicInput; Richmond currently has no equivalent — feedback from Planning, Parks, and Housing lives in separate inboxes |
| Manual tallying of meeting attendance demographics | Reduce | Replace clipboard sign-in sheets with digital check-ins that auto-geocode participant addresses (PublicInput's hierarchy: address → lat/long → cross street → ZIP → GeoIP) |
| Visibility of who is *not* participating | Raise | Raleigh discovered white residents were 81% of respondents vs. 56% of population; dashboards must foreground gap metrics, not just counts |
| Equity-triggered outreach playbooks | Create | No Richmond tool currently links participation gaps to specific intervention tactics (intercept surveys, CBO partnerships, translated materials); create automatic "gap alerts" |

**Core assumption challenged:** That counting participants equals measuring engagement. The research shows that raw counts mask severe demographic skew. Raleigh's analytics revealed Hispanic residents were 3% of survey respondents despite being 11% of the population — a gap invisible without demographic overlay.

**Reframed value proposition:** Instead of a dashboard that reports *how many* people participated, build one that reports *who is missing* and prescribes what to do about it — shifting from participation counting to representation gap-closing.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Representation Gap Scorecard** — For each planning project, show a side-by-side comparison of participant demographics vs. census tract demographics, with a letter grade (A-F) for representativeness.
2. **Heatmap of Silence** — An ArcGIS map showing census tracts with *zero* participation in active planning cases, overlaid with demographic vulnerability indicators.
3. **Outreach Prescription Engine** — When a gap exceeds ±10% (the Austin benchmark), auto-generate a recommended tactic: "Deploy Spanish-language intercept surveyors at Carytown Farmers Market."
4. **Legistar Comment Counter** — Scrape Richmond's Legistar API for public comments on each Matter, count unique commenters, and track geographic distribution to see which neighborhoods engage in the legislative process.
5. **Real-Time Meeting Equity Ticker** — During a live Planning Commission meeting, show a running tally on a secondary screen: "Currently signed up to speak: 8 from 23220, 0 from 23223, 2 from 23224."
6. **Historical Engagement Archive** — Digitize past sign-in sheets and survey responses to build a 5-year baseline of who has participated in Richmond planning decisions, enabling trend analysis.
7. **Participant Journey Tracker** — Track the same resident across multiple engagement touchpoints (survey → meeting → comment → vote) to measure depth of engagement, not just breadth.
8. **Opt-In Diversity Panel** — Recruit a standing panel of 500 Richmond residents stratified by demographics; survey them on every major planning decision to ensure representative input regardless of who shows up to meetings.

**Most provocative:** #5 — A live equity ticker during council meetings would make representation gaps impossible to ignore, but risks public embarrassment and political backlash.
**Most feasible:** #1 — Census data is freely available via ACS; participant data can be collected via digital sign-ins; the comparison math is simple.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond has no way to know whether the people participating in planning decisions reflect the demographics of the neighborhoods those decisions affect.

**Target user:** A Richmond Planning Department staffer preparing for a rezoning hearing in Highland Park who needs to ensure the engagement process was representative.

**User Journey:**
- **Start:** Planner opens a new rezoning case in EnerGov and schedules a community meeting
- **Friction:** After the meeting, planner has a sign-in sheet with 30 names but no idea whether those 30 people represent the neighborhood's racial, income, or renter/owner mix; no tool to compare; no trigger to do targeted outreach if gaps exist
- **Outcome:** Dashboard shows "Meeting attendees: 73% homeowner, 27% renter. Neighborhood: 58% renter. GAP: Renters underrepresented by 31 percentage points. Recommended action: Partner with Highland Park CBOs for door-to-door outreach."

**Lowest-fidelity prototype:** A Google Sheet with two columns — "Participant ZIP codes" and "Census tract demographics" — that auto-calculates a representation gap percentage.

**First test:** Apply it to the next 3 Planning Commission meetings. Have the planner enter participant ZIP codes after each meeting and review the gap analysis within 24 hours.

---

## 4. Opportunity Mapper

### Pattern A: Post-Meeting Gap Report (Quick Win)

- **Target user:** Richmond Planning staff and community engagement coordinators
- **Desired outcome:** After every public meeting, an automated report comparing participant demographics to impacted neighborhood demographics
- **Core workflow:** Digital sign-in (address or ZIP) → geocode to census tract → pull ACS demographics for tract → compute gap metrics → generate report with recommended outreach tactics
- **Dependencies:** ACS 5-year estimates (free, public), geocoding service (ArcGIS or Census Geocoder), digital sign-in tool (Google Form minimum)
- **Pros:** Uses entirely public data; immediately actionable; replicates proven Raleigh and Austin models
- **Cons:** Voluntary demographic reporting may be incomplete; geocoding accuracy varies; requires staff adoption of digital sign-ins
- **Richmond relevance:** Richmond's Planning Commission runs monthly meetings; the city has significant demographic variation across neighborhoods (Church Hill vs. West End vs. Southside)

### Pattern B: Citywide Engagement Equity Dashboard (Stretch)

- **Target user:** City Council, City Manager, community advocates
- **Desired outcome:** A public Power BI or ArcGIS dashboard showing engagement representativeness across all active planning cases, updated monthly
- **Core workflow:** Aggregate sign-in data from all departments → centralized database → compute per-project and citywide gap metrics → publish public dashboard with neighborhood heatmaps and time-series trends
- **Dependencies:** Citywide adoption of a centralized engagement platform (like PublicInput at ~$50K-100K/year); data-sharing across Planning, Housing, Parks, and Transportation
- **Pros:** Replicates Austin's proven model (91,000 participants, 42 departments); creates institutional accountability for equity
- **Cons:** Requires cross-department buy-in and budget; 6-12 month procurement cycle for enterprise platform
- **Richmond relevance:** Richmond has no centralized engagement platform; each department runs its own outreach, making gap analysis impossible at the city level

**Recommendation:** Start with Pattern A as the hackathon MVP — a post-meeting gap report using a Google Form and Census API. Pitch Pattern B as the justification for a citywide engagement platform procurement.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 5 | Directly addresses systemic exclusion of renters, people of color, and low-income residents from planning decisions |
| Feasibility | 3 | MVP is easy; full citywide dashboard requires cross-department coordination and platform procurement |
| Data availability | 3 | Census/ACS data is free; participant data requires new collection workflows that don't currently exist in Richmond |
| Clarity | 4 | Problem is well-documented (Raleigh study, 12-of-75-cities finding); solution path follows established models |
| Demo credibility | 3 | Hard to demo without real meeting data; may need to simulate with historical or synthetic participant data |

**Richmond-specific alignment:** Pillar 2 (Thriving Neighborhoods), PS1 (Neighborhood Development Discovery). Richmond's diverse neighborhoods (Jackson Ward, Carytown, Southside) have vastly different demographics but the same engagement channels — creating predictable representation gaps.

**Policy/eligibility risks:** Collecting demographic data from meeting attendees raises privacy concerns; must be voluntary and anonymized. NYC's privacy policy classifies GPS and IP addresses as identifying information. PublicInput aggregates and anonymizes survey responses to identify trends without exposing identities — follow this model.

**Weekend MVP shapes:**
1. **Gap Calculator:** Google Form for sign-in (ZIP + optional demographics) → Google Sheet that pulls ACS data via Census API → auto-generated gap report PDF
2. **Legistar Comment Mapper:** Scrape public comments from Richmond's Legistar API, geocode commenter addresses (if public), and map geographic distribution of civic engagement

---

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | Priority |
|---|-----------|------|-------------|----------|
| 1 | Meeting attendees will voluntarily provide their ZIP code or address on a digital sign-in | 4 | 4 | **High** |
| 2 | Census tract demographics accurately reflect the "should participate" population for a given planning case | 3 | 2 | Medium |
| 3 | Richmond Planning staff will adopt a new digital sign-in workflow | 4 | 3 | **High** |
| 4 | Gap metrics will drive actual outreach changes (not just reports that sit on a shelf) | 5 | 4 | **High** |
| 5 | ACS 5-year estimates are granular enough for neighborhood-level comparison | 2 | 2 | Low |
| 6 | Anonymized aggregate data is sufficient for actionable insights (don't need individual-level tracking) | 2 | 2 | Low |
| 7 | Political leaders will welcome transparency about who is missing from engagement processes | 4 | 3 | Medium |

**Top 3 to validate:**
1. **#1 — Attendee willingness to share location:** Test at the next Planning Commission meeting. Offer a paper and digital sign-in side by side, both asking for ZIP code. Measure completion rate. If <50% provide ZIP, the data foundation is too weak.
2. **#3 — Staff workflow adoption:** Shadow a Planning staffer through the current meeting setup process. Identify where digital sign-in fits (or doesn't). If staff see it as additional burden, adoption will fail.
3. **#4 — Gap-to-action conversion:** Interview the Planning Director: "If a dashboard showed renters were 30 points underrepresented in a hearing, would you delay the vote or fund targeted outreach?" If the answer is no, the dashboard is decorative.

---

## Key Takeaway

The Participation Analytics Dashboard addresses a nationally documented problem (only 12 of 75 major US cities even notify renters of land-use hearings) with proven models from Austin, Seattle, and Raleigh. The technical build is moderate, but the real challenge is institutional: getting Richmond departments to adopt centralized engagement tracking and act on the gaps the data reveals.
