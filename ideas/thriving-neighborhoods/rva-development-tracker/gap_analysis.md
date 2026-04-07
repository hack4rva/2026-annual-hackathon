# Gap Analysis — RVA Development Tracker

**Pillar:** Thriving Neighborhoods
**Problem Statement (verbatim):** Neighborhood Development Discovery — Make it easier for residents to find and understand development proposals near them so they can engage earlier in the planning process.
**Demo:** RVA Development Tracker (Row 40)
**Presenter:** Edwin Huertas (also a mentor)
**Review Date:** April 1, 2026

---

## Problem Grounding

**Primary User:** Richmond residents who want to understand what is being proposed or built in their neighborhood without needing to navigate Legistar or interpret GIS data.

**Pain:** Richmond's development information is split across Legistar (legislative agendas), EnerGov (permits), and ArcGIS (maps) with no cross-linking (`A4_problem_landscape_root_causes.md`). The existing Development Mapper is "hard to know what really is going on" (presenter's words). Mailed notices reach only property owners within 150 feet, structurally excluding the 59% of city households who rent (`B1_users_residents_development.md`). The compressed hearing timeline means late discovery equals no voice (`B3_users_planning_commission.md`).

**Desired Outcome:** A resident can search an address and immediately see combined development activity, read a plain-language summary, and know when meetings are happening — so they can decide whether and when to participate.

---

## Data Source Map

| # | Data Claim in Demo | Real or Synthetic? | Actual Source | Owner | Access Method | Update Cadence | SME Contact Needed? |
|---|---|---|---|---|---|---|---|
| 1 | GeoHub development data | **Real** | Richmond GeoHub Development Tracker layer (`services1.arcgis.com/k3vhq11XkBNeeOfM/`) | City of Richmond GIS | ArcGIS REST API — public, no auth (`D2_data_gis_development.md`) | "Updated periodically" — no SLA; Plans of Development layer last updated June 2022 (`dd_q1_system_data.md`) | Yes — what is the actual refresh cadence? Who triggers updates? |
| 2 | Legistar legislative records | **Real** | Richmond Legistar API (`richmondva` slug) | Granicus / City Clerk | REST API — public, no auth, no CORS enforced (`dd_q1_system_data.md`) | Near-real-time (PDF publication latency ~30 min) | No — API confirmed open |
| 3 | OpenStreetMap base map | **Real** | OpenStreetMap tile server | OSM Foundation | Open — standard tile API | Community-maintained, continuous | No |
| 4 | AI-generated plain-language summaries | **Real capability, unverified quality** | LLM (provider not specified) generating summaries on demand from source data | Team-operated | On-demand per selection | Per user interaction | Yes — what model? What is the cost per summary at scale? What happens with hallucinated content? |
| 5 | Meeting dates and agendas | **Real** | Legistar Events API (`/Events`, `/EventItems`) | Granicus / City Clerk | REST API — public (`D1_data_legistar.md`) | Updated as meetings are scheduled | No |
| 6 | Attachments (staff reports, documents) | **Real** | Legistar Attachments API (`/Matters/{id}/Attachments`) | Granicus / City Clerk | REST API — gated by `MatterAttachmentShowOnInternetPage` visibility flag (`D1_data_legistar.md`) | Attached at filing time | No — but some attachments may be marked non-public |

### Data Sources NOT Present

| Missing Source | Why It Matters | Access Status |
|---|---|---|
| EnerGov permit data | Building permits, inspections, plan reviews — the "is it actually being built?" layer | **No public API** — hard wall (`dd_q1_system_data.md`) |
| GeoHub Civic Associations boundary layer | Would enable "What neighborhood am I in?" context and notification routing | Available but not used in demo |
| Richmond 300 / Code Refresh planning documents | Long-term neighborhood plans that frame what development is expected | PDF-only, not machine-readable |

---

## Gap Analysis

### Job 1 — The Resident Who Sees Construction and Can't Find Answers

**Assessment: Partially (strong)**

**What it does well:**
- **Combined GeoHub + Legistar view** — this is the core data integration that the prior art research identifies as the hard part (`prior_art_research.md` §Synthesis point 1). The demo cross-links legislative data with map data, which is the pattern that surviving tools (Councilmatic, ZoLa) use.
- **Address-based search** — matches the proven UX pattern; search is ZoLa's most-used feature (`E1_prior_art_dev_trackers.md`).
- **Meeting dates and agendas shown** — a resident can see *when* to show up and *what* will be discussed. This directly addresses the compressed-timeline pain point (`B3_users_planning_commission.md`).
- **AI plain-language summaries** — translates planning jargon into readable explanations, lowering the comprehension barrier.
- **Attachments accessible** — staff reports and documents linked directly from the item view.
- **Time range filtering** — users can scope to recent activity or search full history.
- **No account required** — low-barrier access reduces trust concerns for all users.

**What is missing:**
- **No EnerGov permit data.** The tool covers zoning/legislative activity but not building permits. A resident who sees construction may find the legislative record but not the active permit. **Fundamental** — EnerGov has no public API.
- **No per-project timeline showing approval milestones.** The tool shows items in a list but not the progression from filing to hearing to decision. Boston Article 80's timeline design is the model (`E1_prior_art_dev_trackers.md`). **Fixable** — Legistar `MatterHistory` endpoint provides action dates.
- **No notification system.** The tool is pull-only — a resident must return to the site to check for updates. Prior art warns that notification systems are a hackathon trap (`E4_prior_art_failures.md`), but the absence means residents who don't check regularly will still miss proposals. **Fixable but risky** — requires durable pipeline.
- **GeoHub Development Tracker layer staleness.** The Plans of Development dataset was last updated June 2022 — nearly four years stale (`dd_q1_system_data.md`). The tool may show outdated project statuses for GeoHub-sourced items. **Partially fixable** — can document staleness to users and prioritize Legistar (which is current).

### Job 2 — The Excluded Resident Who Can't Access the Process at All

**Assessment: No**

**What is missing:**
- **No multilingual support.** All content is English-only, including AI summaries. 71.57% of Richmond's LEP population speaks Spanish (`G3_risks_inclusion.md`). **Fixable** — the AI summary pipeline could generate in multiple languages, but this was not designed or demonstrated.
- **No SMS or low-bandwidth channel.** Smartphone-only, cellular-data residents cannot effectively use a map-heavy web application. Americans earning under $30,000 text roughly twice as much as wealthier residents but have no text-based channel for this information (`G3_risks_inclusion.md`). **Fixable but requires a different delivery architecture.**
- **No offline or print-friendly output.** Door-hanger assets or printable one-pagers for multifamily buildings would reach renters who receive no mailed notice. **Fixable** — generate PDF summaries per address.
- **Web-only delivery** structurally replicates "homeowner capture" — only the digitally connected residents who already know to look will benefit (`G3_risks_inclusion.md`).

### Job 3 — The Planning Staff Who Only Hear from Insiders

**Assessment: Partially**

**What it does well:**
- **Zero staff burden.** Fully automated, pulling from existing public APIs. Meets the "100% automated with zero additional staff workload" requirement (`B3_users_planning_commission.md`).
- **Reduces phone call load.** If residents can self-serve plain-language answers, the phone calls to planning staff ("What is being built behind my house?") should decrease.

**What is missing:**
- **No analytics or engagement metrics.** Staff cannot see how many residents are using the tool, from which neighborhoods, or whether it reaches underrepresented populations. Without measurement, the tool cannot demonstrate it is broadening participation vs. serving existing insiders. **Fixable** — add analytics.
- **No feedback or comment mechanism.** Residents can read but not respond. The tool does not create a new public input channel. **Fixable** — but adds moderation complexity.
- **Built on a free server with acknowledged scaling limits.** The presenter noted the free server works now but would need resources if adoption scales. Post-hackathon viability depends on hosting sustainability — a documented failure mode (`E4_prior_art_failures.md`). **Fixable** — but requires an institutional host or funding.

---

## Opportunities

**1. "What's Coming to My Block" One-Pager**
Generate a printable, plain-language PDF per address or block that summarizes active legislative items, upcoming hearing dates, and how to participate. Distribute through civic associations, apartment building lobbies, and community organizations. This bridges the digital divide without requiring the resident to use the web tool. Dependency: existing data pipeline + PDF generation.

**2. GeoHub Staleness Dashboard**
Expose the `Date_Updated` field from the GeoHub Development Tracker layer to users. Show "Last updated: June 2022" next to GeoHub-sourced items so residents know when data may be stale. File a formal data request to the City GIS team asking for a documented update cadence. This turns a weakness (stale data) into a transparency feature. Dependency: GeoHub API metadata (already available).

**3. Civic Association Digest**
Aggregate weekly activity by civic association boundary (layer confirmed machine-readable, `dd_q3_prior_art.md`). Email a digest to civic association leaders showing new Legistar filings + upcoming hearings in their territory. This leverages existing civic infrastructure and avoids the direct-to-resident notification trap. Dependency: Civic Associations boundary layer + email delivery.
