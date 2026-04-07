# Gap Analysis — SIMBY (Soon In My Backyard)

**Pillar:** Thriving Neighborhoods
**Problem Statement (verbatim):** Neighborhood Development Discovery — Make it easier for residents to find and understand development proposals near them so they can engage earlier in the planning process.
**Demo:** SIMBY — Soon In My Backyard (Row 41)
**Team:** Singlestone
**Review Date:** April 1, 2026

---

## Problem Grounding

**Primary User:** Richmond residents — especially non-English speakers and those excluded from current notification channels — who want to understand what's planned near them and signal what they want in their neighborhood.

**Pain:** Residents find out about changes too late to shape them. The current system reaches only property owners within 150 feet (excluding 59% renter households), uses English-only legal jargon, and concentrates engagement in a single public hearing where only ~0.2% of residents participate (`B1_users_residents_development.md`, `G3_risks_inclusion.md`). Planning staff spend only 5% of their time on community communication and have no tool to capture representative input (`B3_users_planning_commission.md`).

**Desired Outcome:** Residents can understand what's planned near them in their own language, engage early, and signal what they want — so the city gets representative community input without additional staff workload.

---

## Data Source Map

| # | Data Claim in Demo | Real or Synthetic? | Actual Source | Owner | Access Method | Update Cadence | SME Contact Needed? |
|---|---|---|---|---|---|---|---|
| 1 | "Planned development projects nearby" shown in planning view | **Source unclear** | Not specified in demo. Could be GeoHub Development Tracker, Legistar, or manually entered. The demo does not name a data pipeline or API. | Unknown | Unknown | Unknown | **Yes — critical.** What is the data source for the planning view? Is it automated or manually curated? |
| 2 | "Big ideas from the Richmond 300 planning process" seeded into request map | **Real but static** | Richmond 300 Master Plan documents (adopted Nov 2020) | City of Richmond Planning & Development Review | PDF documents on rva.gov — not machine-readable (`prior_art_research.md` §5) | Static (plan adopted 2020; no programmatic updates) | No — but extracting structured data from PDFs requires manual effort |
| 3 | Multilingual content (English, Spanish, Arabic) | **Real capability** | Built into the application — language selected at sign-up | Team-built | Application UI | As content is added | Yes — who translates? Machine translation vs. human review? What about planning-specific terminology? |
| 4 | Zip-code based notifications | **Real capability** | User-provided zip code at sign-up, matched against project location | Team-built | Application push (method not specified — email? SMS? In-app?) | When project status changes or meetings are scheduled | Yes — what is the delivery channel? Email? SMS? What triggers a notification? |
| 5 | "Drop a pin" resident requests | **Real capability, novel feature** | User-generated content — residents place requests on map | Residents / application database | Application UI | Continuous (user-driven) | No — but moderation, spam, and representativeness questions apply |

### Data Sources NOT Present

| Missing Source | Why It Matters | Access Status |
|---|---|---|
| Legistar legislative records | The primary structured source for zoning changes, rezonings, SUPs, and Planning Commission actions — the core of "development proposals" in the problem statement | **Open API, confirmed** (`dd_q1_system_data.md`) — not used |
| Legistar Events (meeting dates, agendas) | Residents need to know *when* to participate | **Open API, confirmed** — not used |
| GeoHub Development Tracker | Structured data on projects >$1.5M with status, developer, address | **Open ArcGIS REST** (`D2_data_gis_development.md`) — unclear if used |
| EnerGov permit data | Building permits and inspections | **No public API** — hard wall |
| GeoHub Civic Associations boundaries | Machine-readable neighborhood boundaries for routing | **Available** (`dd_q3_prior_art.md`) — not used (zip codes used instead) |

### Critical Data Concern

The demo's planning view shows "planned development projects" but never identifies the data source. If the planning view is manually curated or seeded from static PDFs rather than connected to Legistar or GeoHub APIs, the tool has no automated data pipeline. This is the #1 failure pattern for civic tech tools that die after hackathons — without a durable, automated data feed, the content goes stale within weeks (`E4_prior_art_failures.md`, `prior_art_research.md` §4).

---

## Gap Analysis

### Job 1 — The Resident Who Sees Construction and Can't Find Answers

**Assessment: Partially**

**What it does well:**
- Plain-language project summaries with status and key dates
- Photos of projects/sites — visual context that no other demo provides
- Low-friction access to project information from a mobile-first interface

**What is missing:**
- **No confirmed connection to Legistar.** The demo does not mention the Legistar API, legislative records, or zoning cases. If the planning view is manually populated, it will not include the 23k+ legislative matters that contain Richmond's actual development proposal record. **Potentially fundamental** — if there is no automated pipeline, the tool cannot scale.
- **No meeting dates or hearing agendas from Legistar Events.** Notifications mention "public meetings" but the data source for meeting schedules is not identified. **Fixable** — Legistar Events API is open.
- **No address-based search.** The primary UX is browse-the-map, not "search my address." NYC Planning Labs found search is ZoLa's most-used feature (`E1_prior_art_dev_trackers.md`). **Fixable** — add geocoded address search.
- **No EnerGov permit data.** **Fundamental** — no public API.
- **Sign-up required.** Even "minimal" sign-up creates friction and a trust barrier, especially for immigrant communities where interacting with any system that collects personal data carries perceived risk (`G3_risks_inclusion.md`). RVA Development Tracker requires no account. **Fixable** — make the planning view accessible without sign-up; require sign-up only for notifications and requests.

### Job 2 — The Excluded Resident Who Can't Access the Process at All

**Assessment: Partially (strongest of the three demos)**

**What it does well:**
- **Multilingual support (English, Spanish, Arabic)** — directly addresses the 71.57% Spanish-speaking share of Richmond's LEP population and adds Arabic (`G3_risks_inclusion.md`). This is the only demo with any non-English support.
- **Requests in any written language** — the request system accepts input in the resident's native language without requiring them to translate. This is a genuine inclusion feature.
- **Plain-language summaries** — reduces the comprehension barrier that makes planning jargon inaccessible (`B1_users_residents_development.md`).

**What is missing:**
- **Sign-up required with language preference** — creates a data collection barrier. The pain point research explicitly notes that "a development tracker that requires account creation, location data, or personal information will be avoided by the residents who face the highest displacement risk" (`G3_risks_inclusion.md`). **Fixable** — separate read access (no sign-up) from write access (sign-up for requests/notifications).
- **No SMS channel.** Residents earning under $30,000 text roughly twice as much as wealthier residents but SIMBY appears web-only (`G3_risks_inclusion.md`). The notification delivery channel (email? push? SMS?) is not specified. **Fixable but requires infrastructure.**
- **Zip-code notification granularity is too coarse.** Richmond zip codes span multiple neighborhoods with very different development contexts. The Civic Associations boundary layer provides much finer-grained neighborhood boundaries (`dd_q3_prior_art.md`). **Fixable** — switch from zip code to civic association boundaries.
- **Translation quality unverified.** Machine-translating planning terminology risks producing technically correct but practically incomprehensible content. "Special Use Permit" in Spanish still requires procedural context, not just word-for-word translation (`G3_risks_inclusion.md`). **Fixable** — validate with native speakers and community organizations.

### Job 3 — The Planning Staff Who Only Hear from Insiders

**Assessment: Partially (strongest of the three demos)**

**What it does well:**
- **Request system creates a demand signal.** This is the demo's most original contribution. Instead of just broadcasting development information, SIMBY lets residents signal what they *want* in their neighborhood. This is genuinely novel — no comparable tool in the prior art research provides this. It directly addresses the "staff only hear from insiders" problem by creating a structured, geographic, multilingual channel for community input.
- **Seeded with Richmond 300 priorities.** Starting from the community-generated Richmond 300 plan rather than a blank slate means the request map begins with real priorities and invites residents to refine or add to them.
- **"Neighborhood-level signal"** — the aggregate view of requests, upvotes, and comments could give staff a representative picture of community preferences without additional meetings.

**What is missing:**
- **No analytics on request representativeness.** Who is making requests? From which neighborhoods? In which languages? Without demographic and geographic tracking, the request data could be dominated by the same engaged insiders who already participate. **Fixable** — add aggregate analytics (not individual tracking).
- **Unclear automation.** If the planning view requires manual curation, the tool adds staff burden — violating the "zero staff workload" requirement (`B3_users_planning_commission.md`). **Fixable if connected to Legistar/GeoHub APIs.**
- **Moderation and quality of user-generated requests.** Drop-a-pin requests at scale will include duplicates, spam, joke entries, and requests outside city control. No moderation approach was described. **Fixable** — but requires design.
- **No demonstrated integration with existing city processes.** How do staff access the request data? Is there an admin view? Does it feed into Planning Commission workflows? **Fixable** — but requires staff collaboration.

---

## Opportunities

**1. Connect to Legistar for Automated Development Data**
The highest-priority gap. Replace or supplement the planning view's data source with the Legistar API to ensure the tool automatically surfaces new zoning cases, rezonings, and SUPs as they are filed. Cross-link with Legistar Events for hearing dates. This transforms SIMBY from a manually curated tool into a durable, self-updating platform — the pattern that distinguishes civic tools that survive from those that die (`prior_art_research.md` §4). Dependency: Legistar API (confirmed open).

**2. Request-to-Hearing Pipeline**
When a Legistar item is filed that geographically overlaps with existing resident requests (e.g., a rezoning near where 40 residents requested a grocery store), surface the connection. Show residents: "A development proposal near your request has been filed — here's what it is and when the hearing is." Show staff: "This proposal area has 40 resident requests for X." This closes the loop between resident demand signals and official planning actions. Dependency: Legistar geocoding + request database spatial join.

**3. Civic Association Partnership Model**
Partner with 3-5 civic associations to validate the request system. Civic association leaders are already the informal information bridges for development proposals (`dd_q2_usage_equity.md`). Give them an admin view of requests in their territory. Use their networks to drive adoption among residents who wouldn't find the tool independently. This builds the institutional stewardship that prior art identifies as the key survival factor (`E5_prior_art_weekend_viable.md`).
