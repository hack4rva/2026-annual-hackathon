# Gap Analysis — StreetLights

**Pillar:** Thriving & Sustainable Built Environment
**Problem Statement (verbatim):** Infrastructure Project Visibility — Help residents find and understand transportation and infrastructure projects happening in their neighborhoods.
**Demo:** StreetLights — https://ang-aq.github.io/Streetlights/
**Team:** Team Aurea (J.R. Tuggle High School)
**Review Date:** March 31, 2026

---

## Problem Grounding

**Problem statement (verbatim):** Help residents find and understand transportation and infrastructure projects happening in their neighborhoods.

**Primary user:** A Richmond resident — specifically one who encounters unexpected construction disruption, wants to participate in civic planning, or wants to report a physical problem in their neighborhood — who currently has no plain-language, self-service tool for any of these.

**Pain today:**
- GeoHub has the data but is designed for professionals, not residents
- No proactive notification system exists for construction impacts on residents
- 311 reports provide no tracking or confirmation
- Neighborhood planning engagement happens after decisions are made, not before

**Desired outcome:**
- Any Richmond resident can find, in plain English, what city projects are happening near them and when they'll be done
- Residents can subscribe to be notified before a project disrupts their street
- Residents can report and track infrastructure problems with a feedback loop

---

## Data Source Map

| Data Claim in Demo | Real Source | Owner | Access | Cadence | Status |
|--------------------|------------|-------|--------|---------|--------|
| Active infrastructure projects | Richmond GeoHub | City of Richmond | ArcGIS REST API | Updated by project teams — cadence variable | ✅ Real data — confirmed in demo |
| Project status (in construction / design / planning) | Richmond GeoHub | City of Richmond | ArcGIS REST API | Variable | ✅ Real data — but cadence unverified |
| Project manager contact info | Embedded in GeoHub records | City of Richmond | ArcGIS REST API | Variable | ⚠️ Unverified — may not be in all records |
| SMS notifications | Unspecified SMS provider | Team / third party | Twilio or similar | Event-triggered | ⚠️ Built status unclear — demo announces feature |
| Community upvote / issue reports | No backend described | Team | No backend confirmed | N/A | ❌ No backend — reports go nowhere yet |
| Route planning (future feature) | Navigation API (unspecified) | Third party | Unknown | N/A | ❌ Not built |

**Critical finding:** StreetLights is the standout demo in this pillar because it uses real GeoHub data. This is a meaningful distinction from the fleet demos. However, three features — SMS notifications, community issue reporting, and route planning — are either incomplete or have no backend that routes data to the City.

---

## Gap Analysis

### Job 1 — The Disrupted Commuter
**Demo coverage:** Strong

StreetLights directly addresses this job. A resident can enter their address, see nearby projects, understand what they are in plain English, and check completion timelines. The SMS notification feature (if fully built) would make this proactive rather than reactive.

**Missing:**
- Verification that SMS notifications are fully functional (not just announced)
- Pre-trip planning integration (the route planning feature is future-state)
- Spanish language support
- Confirmation that GeoHub data is current enough to be trustworthy (stale records could mislead)

**Fixable?** Yes — this job is partially addressed. Completing the SMS feature and verifying data freshness are the main gaps.

### Job 2 — The Community Advocate at a Neighborhood Meeting
**Demo coverage:** Moderate

The interactive map with filtering by project type and status is directly useful for a neighborhood meeting. A community advocate could pull this up on a projector and walk through nearby projects.

**Missing:**
- No neighborhood-level aggregate view (e.g., "here are all projects in Northside this year")
- No ability to export the map or create a shareable link for a specific neighborhood view
- No connection to the planning/comment process (StreetLights surfaces projects but doesn't link to public comment portals)

**Fixable?** Yes — neighborhood filtering and shareable links are straightforward additions.

### Job 3 — The Resident Who Wants to Report Infrastructure Problems
**Demo coverage:** Partial — announced but incomplete

The community issue reporting and upvote feature is demonstrated but has no backend that routes reports anywhere. Upvoted issues go into a void. This is not a criticism of the team — building 311 integration in 48 hours is unrealistic — but it means Job 3 is not addressed in its current state.

**Missing:**
- A backend that receives issue reports (either a 311 integration or a separate queue)
- Confirmation to the resident that their report was received
- Visibility into what happens after a report is filed
- Analysis of whether the upvote system advantages higher-connectivity neighborhoods

**Fixable?** Yes — but requires either 311 API integration or a city-side partner to receive and act on reports.

---

## Overall Verdict

**Does the demo solve the problem as stated?** Substantially, with caveats.

StreetLights is the most complete demo in the Built Environment pillar because it uses real data (GeoHub) and directly addresses the stated problem. Jobs 1 and 2 are well-served by the current prototype. Job 3 exists in the UI but has no functional backend.

The primary gap is not data (GeoHub is real and accessible) — it is the feedback loop. The City needs to receive issue reports, and residents need to know their reports matter. Without that, StreetLights is an excellent information tool but not a two-way civic engagement tool.

**Secondary concern:** GeoHub data quality. The demo works as long as project teams keep GeoHub records current. If project managers don't update their records, StreetLights displays stale information. Verifying and improving GeoHub data maintenance is outside the team's control but essential to the product's reliability.

---

## Opportunities

### Opportunity 1 — Complete the Feedback Loop
Integrate issue reports with Richmond's 311 system (or a lighter-weight city-approved alternative). The missing piece is the backend that receives, routes, and confirms reports. Everything else is built.

### Opportunity 2 — GeoHub Data Quality Partnership
Partner with the City's GIS/Planning team to ensure project records in GeoHub are kept current as a precondition for this tool being trustworthy. This is a governance and workflow change, not a technical one.

### Opportunity 3 — Proactive Notification Before Disruption
The current notification system appears reactive (you subscribe and wait). The real user need is proactive: "notify me 2 weeks before a project starts on my block." This requires the City to commit project start dates to GeoHub in advance — a process change that would benefit multiple tools.
