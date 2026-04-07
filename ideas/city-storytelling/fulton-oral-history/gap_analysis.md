# Gap Analysis — Fulton Oral History Interactive Map

**Pillar:** A City That Tells Its Stories
**Problem Statement:** Resident Stories as Civic Insight — Give residents a trusted, accessible way to share their lived experiences so community narratives can inform City decisions.
**Team:** Team Temporary — Caitlin, Will, Daniel, Pascal, Monty
**Review Date:** April 1, 2026

---

## 1. Problem Grounding

**Problem statement (verbatim):** Give residents a trusted, accessible way to share their lived experiences so community narratives can inform City decisions.

**Primary user targeted by demo:** Young Richmonders — VCU students, University of Richmond students, and recent transplants who arrive in the city knowing nothing about its past.

**Secondary user:** Aging Black residents of historically displaced neighborhoods (Fulton specifically) whose stories risk permanent loss.

**Pain addressed:** Richmond's richest oral history collection (the Fulton Oral History Project — 17 interviews, 32 participants) sits on an academic repository (VCU Scholars Compass) that no one under 30 browses casually. The physical neighborhood was demolished through urban renewal in the 1970s. Many interview subjects are aging. There is no discoverable, location-based way for newcomers to encounter these stories while walking through the city.

**Desired outcome:** Make Fulton's oral history transcripts accessible through an interactive geospatial map, so newcomers can explore Richmond's hidden history by place rather than by archive.

**Scope limitation (acknowledged by team):** The demo focuses exclusively on the Fulton neighborhood. Expansion to other neighborhoods is described as a future goal but was not built.

---

## 2. Data Source Mapping

| # | Data Claim in Demo | Source | Verified? | Notes |
|---|---|---|---|---|
| 1 | Fulton Oral History Project transcripts | VCU Scholars Compass — 16 publicly accessible interviews + 1 restricted (Spencer Edward Jones III, in-person only at The Valentine) | ✅ Confirmed | Real data, publicly streamable audio + searchable transcripts. Non-commercial use permitted. Copyright held by The Valentine. |
| 2 | Locations extracted from transcripts | Team's own NLP/manual extraction from interview text | ⚠️ Partially verified | Team described the extraction process. Quality depends on how specific location references are within interview transcripts. Some interviews may reference general areas rather than precise addresses. |
| 3 | Historical context per location | Unclear — may be team-written summaries, may be extracted from transcripts | ⚠️ Unverified | Demo showed historical context on geotag click, but the source of this content was not explicitly stated. If team-authored, accuracy and depth vary. |
| 4 | Direct quotes from interviews | Fulton OH transcripts | ✅ Confirmed | Transcripts are publicly available; extracting quotes is straightforward. |
| 5 | 73% community interest rate | Team's personal social media polls | ⚠️ Self-reported | Sample is the team's social network — likely skews young, educated, and already interested in civic topics. Not a probability sample. But the signal is real: people in the team's network expressed demand. |
| 6 | User interview feedback (guided tour request) | Team-conducted interviews with poll respondents | ✅ Confirmed | Specific feature request (guided tour format) demonstrates genuine user research, not just vanity polling. |

**SME access needed:**
- **The Valentine** — confirm whether embedding Fulton OH audio/quotes in a third-party web tool is permitted under current copyright terms, or if individual permission per interview is required.
- **VCU Libraries** — confirm whether Scholars Compass exposes a stable API (IIIF Presentation or OAI-PMH) for programmatic transcript access, or if HTML scraping is the only ingestion path.

---

## 3. Gap Analysis Against JTBDs

### Job 1 — The Elder Who Carries the Memory

> *Share my story in a way that preserves it permanently and makes it accessible.*

| Requirement | Demo Coverage | Assessment |
|---|---|---|
| Preservation pathway for elder stories | Uses existing Fulton OH interviews — does not create new collection pathways | ⚠️ Partial |
| Accessible to people who weren't there | Geospatial map with quotes and context — strong for newcomer discovery | ✅ Addressed |
| Works for residents without broadband/smartphones | Web-based map requires internet access | ❌ Not addressed |
| Returns something tangible to contributors | No mention of community return (printed materials, CDs, etc.) | ❌ Not addressed |
| Covers neighborhoods beyond Fulton | Fulton only — Jackson Ward, Church Hill, Gilpin Court, Carver have no coverage | ❌ Not addressed |

**Overall: Partial.** The demo surfaces existing elder stories effectively but does not create any mechanism for new stories to enter the system. The elders who were already recorded benefit; elders who were not recorded remain invisible.

### Job 2 — The Newcomer Who Walks Through History

> *Discover the history of the specific streets and places I pass through every day.*

| Requirement | Demo Coverage | Assessment |
|---|---|---|
| Location-based history discovery | Geospatial map with geotags per location | ✅ Strong |
| Feels like exploration, not homework | Map + sidebar + click-to-reveal pattern is intuitive | ✅ Strong |
| Covers the neighborhoods newcomers live in | Fulton only — most VCU students live in the Fan, Museum District, or Church Hill, not Fulton | ⚠️ Partial |
| Links to deeper content | Planned but not built — click-through to full transcript/audio | ⚠️ Planned |
| Guided tour format | Identified as top user request; not yet implemented | ❌ Not built |

**Overall: Strong for Fulton, weak for everywhere else.** This is the demo's primary target user and strongest feature. The map-as-discovery pattern directly matches the JTBD. The limitation is geographic scope — most newcomers don't pass through Fulton regularly.

### Job 3 — The City Decision-Maker

> *Understand how residents actually experience the place, so decisions are informed by lived reality.*

| Requirement | Demo Coverage | Assessment |
|---|---|---|
| Story-to-decision feedback loop | Not present | ❌ Not addressed |
| Searchable by neighborhood or policy area | Neighborhood filter exists but no policy linkage | ❌ Not addressed |
| Demonstrates how stories could inform a specific decision | Not mentioned | ❌ Not addressed |

**Overall: Not addressed.** The demo is a consumption tool for newcomers, not a decision-support tool for planners. The problem statement explicitly requires that "community narratives can inform City decisions." This half of the PS is absent.

---

## 4. Opportunities

### Opportunity 1 — Close the Story-to-Decision Gap (High Impact, Medium Effort)

Add a minimal "What Planners Should Know" layer to the map. For each Fulton location, surface the policy context: what happened (urban renewal demolition), what's planned now (if anything), and a tag linking the story to a Richmond 300 Master Plan priority area. This does not require new data collection — it requires connecting existing stories to existing planning documents. Even a static version demonstrates the feedback loop the PS requires.

**Depends on:** Richmond 300 Priority Neighborhood boundaries (available via GeoHub), Fulton-area development status.

### Opportunity 2 — Expand to One Adjacent Neighborhood (High Impact, Medium Effort)

The biggest credibility gap is single-neighborhood scope. Adding one more neighborhood — ideally Jackson Ward or Church Hill, where gentrification is acute and oral history assets are thin — would demonstrate the platform's scalability thesis. This requires identifying available data sources for that neighborhood (BHMVA holdings, Library of Virginia WPA-era interviews, StoryCorps after Richmond/CA filtering).

**Depends on:** Institutional data-sharing agreements or discovery of open-access content for a second neighborhood.

### Opportunity 3 — Build the Guided Tour MVP (High Impact, Low Effort)

User interviews surfaced a specific, actionable request: guided tour format. A curated sequence of 5-7 geotags with narrative connective tissue (walking directions + transitional text between stops) is buildable in a weekend. This converts the map from a browse-and-click tool into a structured experience — the format most likely to drive repeat use and word-of-mouth at VCU orientation.

**Depends on:** Selecting the most narratively compelling subset of Fulton locations and writing or extracting transitional narrative.

### Opportunity 4 — Formalize the Community Validation Into a Research Asset (Low Effort, High Credibility)

The 73% interest rate and user interviews are the strongest community validation signal in the entire hackathon. But "personal social media polls" is easy to dismiss. Publishing the methodology — sample size, demographic breakdown, exact poll question, interview protocol, and specific quotes — would turn an anecdote into a citable signal. This takes an afternoon and dramatically strengthens any grant application or City partnership pitch.

**Depends on:** Team willingness to share raw data.

---
