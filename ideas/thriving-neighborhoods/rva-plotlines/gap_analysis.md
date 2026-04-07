# Gap Analysis — RVA Plotlines

**Pillar:** Thriving Neighborhoods
**Problem Statement (verbatim):** Neighborhood Development Discovery — Make it easier for residents to find and understand development proposals near them so they can engage earlier in the planning process.
**Demo:** RVA Plotlines (Row 39)
**Presenter:** Morgan Stewart
**Review Date:** April 1, 2026

---

## Problem Grounding

**Primary User:** Richmond residents — homeowners, renters, and community members — who want to know what legislative and zoning changes are happening near their home.

**Pain:** Richmond's development information is scattered across Legistar, EnerGov, and ArcGIS with no cross-referencing by address or parcel (`A4_problem_landscape_root_causes.md`). Mailed notices reach only property owners within 150 feet, leaving most neighbors — especially the 59% of Richmond households who rent — uninformed (`B1_users_residents_development.md`). The compressed 30-day hearing notice window means late discovery equals no voice (`B3_users_planning_commission.md`).

**Desired Outcome:** A resident can search their address and immediately see what has been filed, what it would change, and when the public hearing is — before the decision is made.

---

## Data Source Map

| # | Data Claim in Demo | Real or Synthetic? | Actual Source | Owner | Access Method | Update Cadence | SME Contact Needed? |
|---|---|---|---|---|---|---|---|
| 1 | 23,000+ legislative entries ("matters") ingested | **Real** | Richmond Legistar API (`richmondva` slug) | Granicus / City Clerk | REST API — public, no auth, no CORS enforced (`dd_q1_system_data.md`) | Near-real-time (PDF publication latency ~30 min) | No — API confirmed open |
| 2 | Entries geocoded to specific map locations | **Real data, unverified accuracy** | Addresses parsed from `MatterTitle` free-text fields, then geocoded | Legistar stores no address field; geocoding is the team's own pipeline | Title parsing + geocoder (method not specified in demo) | One-time batch (no live re-geocoding described) | Yes — what is the geocode hit rate? `MatterTitle` parsing accuracy is `[Still Unknown]` per shared JTBD Q4 |
| 3 | Distributed across 143 neighborhoods | **Real boundary data** | Likely Richmond GeoHub Civic Associations boundary layer (`richmond-geo-hub-cor.hub.arcgis.com/datasets/civic-associations`) | City of Richmond GIS | ArcGIS REST / GeoJSON export — confirmed machine-readable (`dd_q3_prior_art.md`) | Static (boundaries change infrequently) | No |
| 4 | "All data is fully public — no proprietary API keys required" | **Confirmed for Legistar** | Legistar API is public, no token required (`dd_q1_system_data.md`) | Granicus | Public REST API | — | No |
| 5 | AI chatbot generating plain-language summaries per neighborhood | **Real capability, unverified quality** | LLM (provider not specified in demo) generating summaries from ingested legislative text | Team-operated | Not described | On-demand per query | Yes — what model? What happens when it hallucinates a hearing date or mischaracterizes a zoning change? |

### Data Sources NOT Present

| Missing Source | Why It Matters | Access Status |
|---|---|---|
| EnerGov permit data | Building permits are the other half of "what's being built near me" — the demo only covers legislative/zoning actions | **No public API** — hard wall (`dd_q1_system_data.md`) |
| GeoHub Development Tracker layer | Tracks projects >$1.5M with status, developer, dwelling units | Available via ArcGIS REST but not referenced in demo |
| Meeting dates / hearing schedules | Residents need to know *when* to show up, not just *what* is filed | Legistar Events API is open — not surfaced in demo |

---

## Gap Analysis

### Job 1 — The Resident Who Sees Construction and Can't Find Answers

**Assessment: Partially**

**What it does well:**
- Address-based search is the right entry point — matches the proven UX pattern from NYC ZoLa where search is the most-used feature (`E1_prior_art_dev_trackers.md`)
- 23k legislative records is a substantial dataset covering Richmond's full Legistar history
- AI chatbot for natural-language neighborhood queries lowers the barrier vs. navigating Legistar directly

**What is missing:**
- **Click-through detail was broken at demo time.** This is the feature that answers "What does this specific item mean for me?" Without it, the map shows density of activity but not actionable detail. **Fixable** — engineering issue, not a design gap.
- **No meeting dates or hearing schedules surfaced.** The Legistar Events API is open and provides exactly this data. Without it, a resident sees *what* was filed but not *when* to act. **Fixable** — the API endpoint exists.
- **No per-project timeline.** Boston's Article 80 tracker demonstrates that showing milestones (filed → staff review → Planning Commission → City Council → decided) makes the opaque approval process legible (`E1_prior_art_dev_trackers.md`). **Fixable** — Legistar `MatterHistory` endpoint provides action dates.
- **No EnerGov permit data.** Building permits are absent. **Fundamental** — EnerGov has no public API.
- **Geocoding accuracy is unknown.** `MatterTitle` parsing is the core technical challenge. Titles range from clean addresses ("1234 Main Street") to descriptions ("a portion of right-of-way known as East Cary Street"). The team claims "geocoded the majority" but does not quantify the miss rate. **Fixable but requires validation** — sample 100 titles and measure hit rate.

### Job 2 — The Excluded Resident Who Can't Access the Process at All

**Assessment: No**

**What is missing:**
- **No multilingual support.** All content is English-only. Spanish is the primary non-English language for 71.57% of Richmond's LEP population (`G3_risks_inclusion.md`). **Fixable** — the AI chatbot could generate responses in other languages, but this was not designed or demonstrated.
- **No SMS or low-bandwidth channel.** Residents earning under $30,000 text roughly twice as much as wealthier residents (`G3_risks_inclusion.md`). A map-heavy web app is functionally inaccessible for smartphone-only, cellular-data users. **Fixable but requires a different delivery channel** — not a UI tweak.
- **No account-free notification system.** The demo is pull-only (you must visit the site). No push mechanism to reach residents who don't know to look. **Fixable** — but notification systems are a known failure pattern for hackathons (`E4_prior_art_failures.md`).
- **Mobile-responsive layout is noted as ready**, which is positive but insufficient — the underlying data density (23k points on a map) may still be unusable on a small screen with cellular data.

### Job 3 — The Planning Staff Who Only Hear from Insiders

**Assessment: Partially**

**What it does well:**
- Fully automated data pipeline pulling from public APIs — meets the "zero staff burden" requirement (`B3_users_planning_commission.md`)
- Aggregates legislative activity by neighborhood, which could help staff understand geographic distribution of activity

**What is missing:**
- **No analytics on who is using the tool.** Staff need to know whether the tool is reaching underrepresented residents or just providing a better interface for the same insiders. Without ZIP code, device type, or language tracking, the tool cannot demonstrate it is closing the participation gap. **Fixable** — add basic analytics.
- **No feedback channel.** Residents can see information but cannot submit comments or signal support/opposition. The tool is read-only. **Fixable** — but adds complexity.
- **No way to measure "earlier engagement."** The problem statement asks for residents to "engage earlier in the planning process." The tool doesn't track when in the approval timeline residents discover a proposal, so there's no way to demonstrate the tool achieves earlier engagement. **Fixable** — correlate first-view timestamps with hearing dates.

---

## Opportunities

**1. Legistar Events Integration — "When Do I Show Up?"**
The single highest-value addition. Connect legislative matters to their upcoming hearing dates via the Legistar Events API. Display the date, body (Planning Commission vs. City Council), and a direct link to the agenda. This transforms the tool from a historical record into an actionable alert. Prior art: Councilmatic does exactly this (`E2_prior_art_legistar_tools.md`). Dependency: Legistar Events API (confirmed open).

**2. Geocoding Accuracy Audit + GeoHub Cross-Link**
Quantify the `MatterTitle` geocoding hit rate by sampling 200 titles. For records that fail text parsing, attempt spatial joins with the GeoHub Parcels layer using parcel IDs mentioned in staff reports. Publish the methodology and accuracy rate — this becomes a reusable asset for any future Richmond civic tool. Dependency: team engineering time + GeoHub Parcels API (confirmed open).

**3. Civic Association Boundary Notifications**
Use the GeoHub Civic Associations boundary layer (confirmed machine-readable, `dd_q3_prior_art.md`) to route notifications to civic association leaders when new items are geocoded within their boundary. This is a lower-risk notification model than direct-to-resident (fewer subscribers, higher engagement likelihood, builds on existing civic infrastructure). Dependency: Civic Associations layer + email/webhook delivery.
