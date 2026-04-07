# Implementation Reality Check — Thriving Neighborhoods

**Pillar:** Thriving Neighborhoods
**Ideas Scored:** 11 (3 new ideas, 2 blue-sky ideas, 6 demos)
**Date:** April 1, 2026
**Rubric:** 5 dimensions × 1–5 scale, max 25. Tiers: S(21–25), A(16–20), B(11–15), C(6–10), D(1–5).

---

## Summary Table

| # | Idea | Own | Data | Tech | Int | Maint | **Total** | **Tier** | Notes |
|---|------|:---:|:----:|:----:|:---:|:-----:|:---------:|:--------:|-------|
| 1 | HUD Rent-Cap Auto-Validator | 4 | 5 | 4 | 5 | 4 | **22** | **S** | Cleanest path to production |
| 2 | Site-Sign Case Number Text-Back | 3 | 5 | 3 | 5 | 5 | **21** | **S** | Simplest build, fully automated |
| 3 | Participation Analytics Dashboard | 3 | 4 | 4 | 5 | 4 | **20** | **A** | Self-instrumented; no external data dependency |
| 4 | Subsidy & Covenant Snapshot | 3 | 4 | 4 | 5 | 4 | **20** | **A** | Strong federal data; local CSV needs curation |
| 5 | Renter-Aware Notification System | 3 | 4 | 3 | 4 | 3 | **17** | **A** | SMS adds a dependency; distribution needs partners |
| 6 | RVA Plotlines | 3 | 4 | 3 | 5 | 2 | **17** | **A** | Bus factor of 1; broken detail view at demo |
| 7 | RVA Neighborhood Watch | 3 | 4 | 3 | 5 | 2 | **17** | **A** | ‡ Duplicate of RVA Plotlines (same team/project) |
| 8 | RVA Development Tracker | 3 | 4 | 3 | 5 | 2 | **17** | **A** | Most complete demo; solo dev, free server |
| 9 | SIMBY | 3 | 2 | 4 | 4 | 2 | **15** | **B** | Unknown data source for planning view |
| 10 | Affordable Housing Dashboard | 4 | 2 | 4 | 2 | 2 | **14** | **B** | Audit mandate is strong; data wall is real |
| 11 | RVA Transformers | 1 | 1 | 4 | 5 | 3 | **14** | **B†** | † Pillar misalignment — scores City Hall / Economy |

**†** RVA Transformers is categorically misaligned. Its tech scores (4, 5, 3) reflect solid engineering for a different pillar. Ownership and Data scores reflect that it does not address Thriving Neighborhoods.

**‡** RVA Neighborhood Watch (row 38) is confirmed as the same team and project as RVA Plotlines (row 39). Scores are identical.

---

## Detailed Scores

---

### 1. HUD Rent-Cap Auto-Validator — S (22/25)

**Source:** NEW_IDEAS.md, Idea 14

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 4 | HCD (Housing & Community Development) has a named mandate from the 2026 City Auditor report (OCA 2026-07) and Ordinance 2026-045. Capacity is the concern — the same audit documented staff turnover erasing institutional knowledge. |
| Data Readiness | 5 | HUD Income Limits and FMR APIs are public, maintained, documented, and update on a known federal fiscal year cycle. The rent-roll inputs come from staff's existing PDF workflow — the tool replaces manual cross-referencing, not data collection. |
| Tech Stack Fit | 4 | Standard web calculator + HUD API calls. No City infrastructure required. Commodity cloud or even static hosting with server-side API proxy. |
| Integration Surface | 5 | Standalone. Accepts CSV upload or manual entry. Calls public HUD API. Zero City system integration. |
| Maintenance Burden | 4 | HUD publishes new AMI/FMR values annually (~May 1). Tool needs one parameter update per year. Otherwise fully automated. |

**Total: 22 · Tier: S**

**Primary Blocker:** HCD staff must adopt the tool and change their workflow from PDF-to-Excel to CSV-upload-to-validator. Adoption, not technology.

**Primary Accelerator:** The 2026 audit found "no documented implementation plan" for compliance monitoring. This tool IS a documented implementation plan. HCD concurred with all eight audit recommendations — the political cover exists.

---

### 2. Site-Sign Case Number Text-Back — S (21/25)

**Source:** NEW_IDEAS_BLUESKY.md, Idea 1

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | Could sit under City Clerk (owns Legistar data), PDR (posts the signs), or a civic org (Code for RVA). No department has a mandate to build an SMS lookup service. The tool can run without City ownership but needs someone to pay the phone bill. |
| Data Readiness | 5 | Legistar OData API is public, no auth, confirmed working at `webapi.legistar.com/v1/richmondva/`. Matters and Events endpoints provide case title, next hearing date, and canonical URL. This is a pure API lookup. |
| Tech Stack Fit | 3 | Requires one commodity SaaS: an SMS gateway (Twilio, ~$0.0079/msg). Backend is trivial — receive text, query Legistar, return formatted response. No City infrastructure. |
| Integration Surface | 5 | Standalone. Queries only the public Legistar API. No City system integration. No authentication. No data storage beyond transient message processing. |
| Maintenance Burden | 5 | Fully automated pipeline. SMS in → Legistar lookup → SMS out. No human attention required. Legistar API is maintained by Granicus. Only cost is the SMS service (~$8/month per 1,000 texts). |

**Total: 21 · Tier: S**

**Primary Blocker:** Ownership. Nobody has asked for this. The tool needs a champion — either a City department willing to put the SMS number on physical signs, or a civic org willing to run and publicize it independently.

**Primary Accelerator:** Lowest build cost in the entire pillar. A working prototype can be built in a weekend with zero City cooperation. The phone number on a sign is the only physical-world touchpoint — if signs already print case numbers (they do), the service is immediately useful.

---

### 3. Participation Analytics Dashboard — A (20/25)

**Source:** NEW_IDEAS.md, Idea 6

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | Planning & Development Review is the natural owner — they're the department with the participation gap problem. But engagement analytics is not their current priority; they spend 5% of staff time on community communication. Requires an internal champion. |
| Data Readiness | 4 | Primary data is self-instrumented (the tool tracks its own users). Cross-referencing data comes from Census ACS, which is a maintained public API with tract-level demographics. No external data dependency for the core engagement metrics. The "needs curation" step is mapping Census tracts to Richmond neighborhoods. |
| Tech Stack Fit | 4 | Analytics layer on commodity cloud. Standard web stack. Could be an add-on module to any development discovery tool rather than a standalone product. |
| Integration Surface | 5 | Standalone. Generates its own engagement data. Census API is public. No City system integration required. |
| Maintenance Burden | 4 | Automated data collection once instrumented. Census ACS updates annually. Staff need to review dashboards and act on findings, but the tool itself requires minimal maintenance (~monthly check). |

**Total: 20 · Tier: A**

**Primary Blocker:** This is a meta-tool — it measures whether other tools work. It has no standalone value without a development discovery tool to instrument. The first question is "analytics on top of what?"

**Primary Accelerator:** The research finding that "no city currently tracks who participates in Planning Commission hearings" means the first city to do this has no peers to compare against — and every peer city would want the methodology.

---

### 4. Subsidy & Covenant Snapshot by Address — A (20/25)

**Source:** NEW_IDEAS_BLUESKY.md, Idea 2

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | HCD is the natural owner (affordable housing domain), but this is tenant-facing, not staff-facing. HCD's current mandate is compliance monitoring, not public-facing property lookups. Could also be run by a civic org or legal aid society. |
| Data Readiness | 4 | Federal data is strong: HUD NHPD and LIHTC are public, property-level, and maintained. GeoHub Assessor parcel data is public API. Local program data requires a manually curated CSV from already-public sources (Legistar ordinance titles, rva.gov press releases). The local CSV is the weak link — small but manual. |
| Tech Stack Fit | 4 | Standard web app + geocoding + HUD API lookups + small static CSV. No City infrastructure. Commodity cloud. |
| Integration Surface | 5 | Standalone. Public APIs only (GeoHub Assessor, HUD NHPD, HUD LIHTC). The curated local CSV uses only published public information. No City system integration. |
| Maintenance Burden | 4 | HUD datasets update annually. GeoHub Assessor updates monthly. The local seed CSV needs updating when new affordable housing projects are funded (~quarterly). Estimated <2 hours/month. |

**Total: 20 · Tier: A**

**Primary Blocker:** The local program crosswalk (parcel → City program) cannot be fully automated from public sources. AHTF awards are in Legistar PDFs; AHTEP data is in EnerGov (closed). The federal layers (NHPD, LIHTC) are solid but don't cover local-only programs. Without the local layer, the tool covers federally assisted properties only.

**Primary Accelerator:** Tenant-facing transparency is a gap no current tool fills. The affordable-housing dashboard and HUD rent-cap validator serve staff; this serves the people who live in the buildings. Legal aid organizations (e.g., Central Virginia Legal Aid Society) would have immediate use for address-level subsidy lookups.

---

### 5. Renter-Aware Notification System — A (17/25)

**Source:** NEW_IDEAS.md, Idea 4

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | Sits between PDR (owns development notification process) and community engagement. The tool supplements rather than replaces current notice — it generates printable door-hangers and opt-in SMS. Could be run by a civic org. No department has asked for this. |
| Data Readiness | 4 | ArcGIS Parcels (public), Legistar Matters (public API, no auth), Assessor building-type data (public). All confirmed accessible. Geocoding of Legistar MatterTitle strings to addresses has unknown accuracy — the shared research flagged this as `[Still Unknown]`. |
| Tech Stack Fit | 3 | Web app + PDF generation + SMS gateway (Twilio). The SMS component is a new SaaS dependency. PDF generation is standard. The QR-code opt-in flow is straightforward but needs a persistent backend for subscriber management. |
| Integration Surface | 4 | Uses only public APIs (Legistar, GeoHub, Assessor). Distribution relies on civic associations and tenant unions — a social partnership, not a technical integration. The tool functions standalone (PDFs can be downloaded by anyone). |
| Maintenance Burden | 3 | Automated data pull from Legistar, but: SMS subscriber management needs monitoring, geocoding pipeline needs accuracy checks, QR-code sign-up flow needs maintenance, bilingual content (English + Spanish) needs periodic review. Weekly attention. |

**Total: 17 · Tier: A**

**Primary Blocker:** Geocoding accuracy. The entire system depends on correctly matching Legistar MatterTitle strings to physical addresses near multifamily buildings. If the geocoding miss rate is high, notifications go to the wrong buildings or don't fire at all.

**Primary Accelerator:** Addresses the single most-cited equity gap in the research: 59% of Richmond households rent and receive no mailed development notice. Printable door-hangers bypass both the digital divide and the deed-based notification system. Partnering with confirmed organizations (Richmond Tenants Union, Union Hill Civic Association) provides a distribution channel.

---

### 6. RVA Plotlines — A (17/25)

**Source:** Demo (row 39), Morgan Stewart

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | No City department requested this. PDR could adopt it to improve transparency, but the tool is volunteer-built with no institutional sponsor. Prior art shows tools without a named maintainer die within months. |
| Data Readiness | 4 | Legistar API confirmed working — 23k+ records ingested. Civic Associations boundaries confirmed machine-readable. But: geocoding accuracy from MatterTitle parsing is unverified, Legistar Events (hearing dates) are not used, and click-through detail was broken at demo time. |
| Tech Stack Fit | 3 | Web app on Fly.dev (commodity hosting). LLM for AI chatbot — provider and cost model unspecified. The LLM is a new SaaS dependency with unknown scaling characteristics. |
| Integration Surface | 5 | Uses only the public Legistar API. No City system integration. No authentication. Standalone. |
| Maintenance Burden | 2 | Bus factor of 1 (solo presenter). No institutional steward. LLM costs scale with usage. Fly.dev requires ongoing payment. Broken click-through at demo means the tool shipped with a critical defect. Geocoding pipeline has no documented quality process. |

**Total: 17 · Tier: A**

**Primary Blocker:** Sustainability. The tool has no institutional owner, no maintenance plan, and a broken core feature. The prior art research is explicit: "tools without a named maintainer die within months." Without an organizational steward (Code for RVA, VCU, City IT), this follows the Citygram failure pattern.

**Primary Accelerator:** 23k Legistar records on a map is a legitimate technical achievement. The Legistar data pipeline is the hard part and it works. Adding Events integration (hearing dates) and fixing the click-through would transform this from an archive into an actionable tool with minimal additional engineering.

---

### 7. RVA Neighborhood Watch — A (17/25)

**Source:** Demo (row 38)

**Duplicate.** This is confirmed as the same team and project as RVA Plotlines (row 39). The Google Photos submission was inaccessible; the video was recovered via row 39. Scores are identical to RVA Plotlines.

See RVA Plotlines for full scoring rationale.

---

### 8. RVA Development Tracker — A (17/25)

**Source:** Demo (row 40), Edwin Huertas

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | Solo developer who was also serving as a hackathon mentor. No institutional adoption path. PDR would benefit but hasn't asked for it. The "weekend-viable" build pattern is a strength for prototyping but doesn't solve the ownership question. |
| Data Readiness | 4 | GeoHub Development Tracker layer (public ArcGIS REST) + Legistar API (public, no auth) + Legistar Events for hearing dates. Best data integration of any demo. But: GeoHub Plans of Development layer last updated June 2022 — nearly 4 years stale. Staleness is unacknowledged in the tool. |
| Tech Stack Fit | 3 | Vercel hosting (free tier). LLM for AI summaries — provider, cost per summary, and hallucination safeguards unspecified. Free server acknowledged as a scaling limitation by the presenter. |
| Integration Surface | 5 | Uses only public APIs (GeoHub, Legistar, Legistar Events, OSM). No City system integration. No account required. Standalone. |
| Maintenance Burden | 2 | Bus factor of 1. Free server with acknowledged limits. LLM costs at scale unknown. No institutional steward. GeoHub staleness means some data is already wrong and there's no process to flag or fix it. |

**Total: 17 · Tier: A**

**Primary Blocker:** Sustainability, same as Plotlines. Solo developer on free hosting. The lifecycle review notes this is "impressive, but a bus-factor of 1." Without an institutional host, the tool follows the volunteer-hosting failure pattern.

**Primary Accelerator:** Most technically complete demo. Cross-links GeoHub spatial data with Legistar legislative records AND surfaces meeting dates — the only demo that does all three. Built in an afternoon, confirming the "weekend-viable" pattern. Adding Spanish-language AI summaries and a printable per-address one-pager would address the two largest gaps (equity and digital divide) with modest engineering effort.

---

### 9. SIMBY (Soon In My Backyard) — B (15/25)

**Source:** Demo (row 41), Team Singlestone

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | PDR for the planning view; community engagement for the request feature. The two-sided model (planning + requests) splits ownership across functions. Singlestone built it as a team, which is better than solo, but there's no City adoption path documented. |
| Data Readiness | 2 | **Critical gap:** The planning view's data source is never identified. Could be GeoHub, could be manual curation, could be static Richmond 300 PDFs. If not connected to an automated API (Legistar, GeoHub), the planning data will go stale immediately. Legistar is not used. This is the #1 documented failure mode for civic tech tools. |
| Tech Stack Fit | 4 | Vercel hosting. Standard web stack. Multilingual support built into the application. No exotic dependencies. |
| Integration Surface | 4 | As-built, the tool is standalone with its own data and user accounts. But: sign-up is required before viewing planning data (creates a trust barrier), and zip-code notification granularity is too coarse (should use Civic Associations boundaries). Needs Legistar API as a future data feed to be durable. |
| Maintenance Burden | 2 | If the planning view is manually curated, it breaks immediately without constant updates. Request moderation at scale is an unsolved problem. Multilingual content needs translation review. User account management adds overhead. |

**Total: 15 · Tier: B**

**Primary Blocker:** Data pipeline. The planning view has no identified automated data source. Without a Legistar or GeoHub connection, the content goes stale within weeks. This is the documented #1 cause of civic tool death: "lack of stable city-supported data feeds causing data drift."

**Primary Accelerator:** Strongest equity design in the pillar. Multilingual support (English, Spanish, Arabic) is unique — no other demo attempts this. The resident request system (drop a pin, write in your language, upvote) is genuinely novel and creates the "representative community signal" planning staff lack. If the data pipeline problem is solved, SIMBY's feature set is the most complete.

---

### 10. Affordable Housing Compliance Dashboard — B (14/25)

**Source:** Demo (row 36), Team Corey/Fres/Morelli

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 4 | HCD has a named mandate. The 2026 City Auditor report (OCA 2026-07) found systemic compliance failures. Ordinance 2026-045 requires quadrennial reporting. The administration concurred with all eight audit recommendations. Capacity is the concern — the audit itself documented staff turnover erasing institutional knowledge. |
| Data Readiness | 2 | The dashboard's data sources are unstated — almost certainly synthetic. The compliance data needed to populate it is locked in closed systems: EnerGov (no API), AHTF certifications (email/PDF), EAHP records (OneDrive). Only Assessor (GeoHub) and HUD APIs are publicly accessible. Getting real compliance data requires formal agreements with HCD or fundamentally new data entry workflows. |
| Tech Stack Fit | 4 | Google Cloud (us-east4) hosting. Standard web dashboard. No unusual dependencies. |
| Integration Surface | 2 | To function with real data, the dashboard needs: (a) HCD to agree to populate it (replacing PDF/email workflows), or (b) formal data-sharing agreements for EnerGov exports, AHTF certifications, and EAHP records. Either path requires security review for housing compliance data. EnerGov's replacement RFP is in progress — any integration plan is a moving target. |
| Maintenance Burden | 2 | Compliance data requires ongoing staff entry for every annual certification across three programs with different deadlines. Without staff consistently entering data, the dashboard goes empty. The tool's value is proportional to HCD's commitment to use it. |

**Total: 14 · Tier: B**

**Primary Blocker:** Data wall. The compliance data layer this dashboard needs does not exist in structured, accessible form. EnerGov is closed. AHTF certifications are email/PDF. EAHP uses OneDrive. The demo shows a well-designed shell waiting for content. Until HCD commits to a data pathway, the dashboard cannot display real information.

**Primary Accelerator:** Strongest political tailwind in the pillar. The 2026 audit found the City "did not follow its own funding rules," $2.4M went untransferred for three years, and the administration concurred with all eight recommendations. Mapping each dashboard feature to a specific audit recommendation transforms the pitch from "we built a useful tool" to "we built the system your auditor said you need." This reframing costs zero engineering time.

---

### 11. RVA Transformers — B (14/25) †PILLAR MISALIGNMENT

**Source:** Demo (row 37)

**This project does not address Thriving Neighborhoods.** The lifecycle review confirms misalignment:

- **RVA 311 Bridge** → Thriving City Hall (multilingual 311 access, privacy-by-design)
- **RVA Biz Navigator** → Thriving Economy (4-phase business startup guide)

Neither component engages development discovery or housing compliance.

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 1 | No credible owner for a Thriving Neighborhoods use case. The tool addresses City Hall (311/DIT) and Economy (DECD) pillars. |
| Data Readiness | 1 | Does not use any Thriving Neighborhoods data — no development proposals, no housing compliance records, no Legistar zoning data, no GeoHub parcels. |
| Tech Stack Fit | 4 | CloudFront hosting. Standard web stack. The engineering is sound for what it actually does. |
| Integration Surface | 5 | Standalone. Public data sources. No City system integration needed for its actual functionality. |
| Maintenance Burden | 3 | LLM API costs for 311 routing and business navigation. Routing accuracy needs periodic review. No development/housing data to maintain because it doesn't use any. |

**Total: 14 · Tier: B**

**Note:** The tech scores (4, 5, 3) reflect solid engineering for the wrong pillar. This project should be evaluated under **A Thriving City Hall** and **A Thriving Economy**. For Thriving Neighborhoods, it does not address either problem statement.

**Primary Blocker:** Categorically misaligned with the pillar.

**Primary Accelerator:** If re-evaluated under City Hall / Economy, the multilingual 311 bridge and business navigator are strong candidates. The phone-based, no-internet design of 311 Bridge and the live-data business startup guide are both legitimate innovations — they just don't belong here.

---

## Pillar Observations

### 1. The data divide is the story of this pillar

The ideas split cleanly into two groups by data readiness:

- **Public-API ideas** (HUD Validator, Text-Back, Analytics Dashboard, Subsidy Snapshot, Plotlines, Dev Tracker): These can be built this weekend using confirmed public endpoints — Legistar OData, GeoHub ArcGIS REST, HUD APIs, Census ACS. Their implementation risk is adoption and maintenance, not data access.

- **Internal-data ideas** (Affordable Housing Dashboard, SIMBY's planning view): These need compliance records locked inside EnerGov, HCD inboxes, and OneDrive folders. No amount of engineering fixes a data wall. Their path forward requires institutional agreements, not hackathon sprints.

Every idea with a Data Readiness score of 4+ can reach production without City cooperation. Every idea with a Data Readiness score of 2 requires HCD to change how they work.

### 2. The two S-tier ideas share a pattern: tiny scope, public data, zero integration

The HUD Rent-Cap Validator and Site-Sign Text-Back both score 21+ because they do one thing, use one public API, and require no City system integration. This is the pattern that survives: small, automated, standalone.

The temptation at hackathons is to build comprehensive platforms. The implementation reality is that comprehensive platforms die because they depend on data they can't access, staff they can't commit, and maintenance they can't sustain.

### 3. Sustainability is the universal weak point for demos

All four scoreable demos (Plotlines, Dev Tracker, SIMBY, Affordable Housing Dashboard) score 2 on Maintenance Burden. The pattern is consistent: no institutional steward, no documented maintenance plan, no clear funding for hosting or LLM costs. The prior art research is explicit that "tools without a named maintainer die within months."

The fix is not technical. It's organizational: identify an institutional host (Code for RVA, VCU, City IT) before investing in feature development.

### 4. Equity features and implementation reality pull in opposite directions

SIMBY has the strongest equity design (multilingual, resident requests) but the weakest data foundation. The Renter-Aware Notification System addresses the most-cited equity gap (59% renter exclusion) but has the most complex delivery requirements (SMS, PDF generation, civic association partnerships). The Dev Tracker has the cleanest data pipeline but is English-only and web-only.

The implementation-ready path is to build the data pipeline first (Dev Tracker pattern), then layer equity features on top (SIMBY's multilingual approach, Renter Notification's offline assets). Building equity features without a durable data pipeline creates tools that serve underrepresented communities briefly and then go dark.

### 5. EnerGov is the hard wall; Legistar is the open door

Every idea that touches EnerGov hits a dead end — no public API, no export, replacement RFP in progress. Every idea that uses Legistar finds a maintained, documented, auth-free API with real Richmond data. The implementation strategy for this pillar is: build on Legistar, work around EnerGov, and wait for the replacement system to provide what EnerGov won't.

### 6. The 2026 audit is an accelerator nobody used

The City Auditor report (OCA 2026-07) found systemic compliance failures and the administration concurred with all eight recommendations. The Affordable Housing Dashboard addresses this directly but doesn't reference the audit. The HUD Rent-Cap Validator replaces the exact manual workflow the audit documented as broken. Connecting any compliance tool to the audit's findings transforms the implementation argument from "we built something useful" to "we built what your auditor said you need and your leadership already agreed to." This costs zero engineering time.

### 7. One demo is misaligned; one demo is a duplicate

RVA Transformers (311 Bridge + Biz Navigator) is a City Hall / Economy project filed under Thriving Neighborhoods. Strong engineering, wrong pillar.

RVA Neighborhood Watch and RVA Plotlines are the same team and project submitted under two row numbers. The Google Photos submission for Neighborhood Watch was inaccessible; the video was recovered via Plotlines.

Effective unique ideas in this pillar: **9**.
