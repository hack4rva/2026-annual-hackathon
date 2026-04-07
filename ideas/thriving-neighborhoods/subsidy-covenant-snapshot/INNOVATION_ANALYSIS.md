# Innovation Analysis: Subsidy & Covenant Snapshot

**Generated:** April 2, 2026
**Inputs:** IDEA.md, RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Manual county recorder document retrieval | Eliminate | LA County requires in-person appointments; NYC's ACRIS allows online BBL lookup from 1966–present. Richmond should bypass the recorder entirely by building from NHPD + HUD MAH national datasets |
| Reliance on internal-only compliance platforms (Yardi, Emphasys, ProLink) | Reduce | These systems manage the real compliance calendar but are staff-only; reduce dependency by surfacing expiration dates from public national databases rather than requiring HCD system access |
| Visibility of covenant expiration timelines | Raise | NYC Housing New York shows unit counts but not expirations; Chicago ARO Map shows AMI tiers but not maturity dates. Build the first public tool that shows when affordability covenants expire |
| "False expiration" awareness | Create | Research warns that end dates should be treated as risk flags, not definitive outcomes — many programs have renewal options, and state QAPs extend LIHTC beyond the federal 30-year minimum. Create an explicit "renewal probability" indicator |

**Core assumption challenged:** That covenant data must come from local recorder systems. The NHPD provides address-level "Earliest End Date" and "Latest End Date" fields for federally assisted housing nationwide, updated quarterly. HUD MAH provides monthly contract-level expirations. A Richmond tool can launch using these national datasets without touching local recorder documents.

**Reframed value proposition:** Instead of a compliance tool for HCD staff, build a public "expiration radar" that shows every Richmond resident which affordable housing units are approaching the end of their subsidy period — creating political pressure for preservation before units convert to market rate.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Expiration Countdown Map** — A GeoHub-based map where each subsidized parcel shows a countdown timer to its Earliest End Date, color-coded red/yellow/green by urgency (0-12mo / 12-36mo / 36mo+).
2. **Preservation Alert Service** — Email/SMS notifications to housing advocates and council members when a property enters the 36-month expiration window, triggering the T-36/T-24/T-12 outreach sequence from the research.
3. **Covenant Document Viewer** — For properties where recorded covenants are digitized, display the actual covenant terms (rent caps, income targeting, reporting requirements, post-expiration clauses) extracted via OCR/NLP.
4. **Portfolio Risk Scorecard** — Aggregate all subsidized properties by council district and score each district's "preservation risk" based on the percentage of units expiring within 5 years.
5. **Tenant-Facing "Is My Building Protected?" Lookup** — A resident enters their address and learns: what subsidy applies, when it expires, what compliance requirements exist, and who to contact if they suspect violations.
6. **Cross-Program Deduplication View** — Many properties stack LIHTC, PBRA, and HOME subsidies; show the full subsidy stack per parcel with the binding (latest) expiration date to avoid the double-counting problem flagged in the research.
7. **Resyndication Opportunity Finder** — Flag properties approaching LIHTC expiration that are strong candidates for resyndication (based on REAC scores, unit counts, location in high-opportunity areas).
8. **Historical Affordability Loss Tracker** — Show which Richmond properties have already exited their affordability period, mapping the cumulative loss of affordable units over time as a political accountability tool.

**Most provocative:** #8 — Showing how many affordable units Richmond has already lost forces a reckoning with past preservation failures and creates urgency for action on current expirations.
**Most feasible:** #1 — NHPD provides Earliest/Latest End Dates at the address level; GeoHub provides the parcel base; the join is straightforward.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Richmond has no public way to see which affordable housing properties are approaching the end of their subsidy covenants, making preservation planning reactive instead of proactive.

**Target user:** An HCD compliance staffer who needs to identify which properties require outreach in the next 24 months, or a housing advocate who wants to pressure the City to preserve at-risk units.

**User Journey:**
- **Start:** HCD staffer hears informally that a LIHTC property might be approaching its 30-year expiration
- **Friction:** Must check multiple internal systems (Yardi, RRHA records) and potentially request documents from the circuit court clerk; no consolidated view exists; by the time the expiration is confirmed, the 36-month preservation window has narrowed to 12 months
- **Outcome:** Staffer opens the Covenant Snapshot dashboard, sees all properties within 36 months of expiration, sorted by urgency, with subsidy type, unit count, and owner contact information — enabling proactive outreach per the T-36/T-24/T-12 timeline

**Lowest-fidelity prototype:** A filterable table: columns for address, subsidy program, earliest end date, latest end date, assisted units, and status (Active/Inactive/Inconclusive) — populated from a one-time NHPD download filtered to Richmond.

**First test:** Export NHPD data for Richmond (FIPS 51760), load into a spreadsheet, filter for Earliest End Date within 36 months, and validate the top 10 results against known HCD records.

---

## 4. Opportunity Mapper

### Pattern A: NHPD-Powered Expiration Map (Quick Win)

- **Target user:** HCD staff, housing advocates, City Auditor
- **Desired outcome:** A public map showing every federally assisted property in Richmond with its expiration timeline
- **Core workflow:** Download NHPD dataset (quarterly) → filter by Richmond geography → join to GeoHub parcels by address/lat-long → compute months-to-expiration → render on ArcGIS map with color-coded urgency
- **Dependencies:** NHPD (free, public, quarterly updates), HUD MAH (free, monthly updates), GeoHub parcel layer (public ArcGIS REST), geocoding for address matching
- **Pros:** All data is public; no local data-sharing agreements needed; NHPD covers LIHTC, Section 8 PBRA, HOME, and USDA programs; proven schema with Earliest/Latest End Date fields
- **Cons:** NHPD may lag local records; "Inconclusive" status flags require human review; does not include locally funded covenants not in federal databases
- **Richmond relevance:** Richmond has significant LIHTC and Section 8 inventory; RRHA administers ~4,000 HCVs; City Auditor has flagged affordable housing compliance as a priority area

### Pattern B: Full Covenant Snapshot with Local Data (Stretch)

- **Target user:** HCD compliance team, City Council housing committee
- **Desired outcome:** A parcel-level master inventory combining federal (NHPD/MAH) and local (HCD covenant records) data with compliance metadata
- **Core workflow:** NHPD + MAH as base → supplement with HCD-provided subsidy and covenant records → add compliance metadata (monitoring entity, recertification frequency, fees) → OCR/NLP extraction from recorded documents → publish as searchable database with GeoHub map layer
- **Dependencies:** HCD data-sharing partnership or FOIA request for local covenant records; possible circuit court clerk cooperation for recorded documents
- **Pros:** Most comprehensive view possible; includes locally funded covenants; enables full compliance monitoring
- **Cons:** HCD data may not be in structured format; recorded documents require OCR pipeline; partnership timeline could be 3-6 months
- **Richmond relevance:** The IDEA.md notes that covenant/subsidy records are not yet in a single structured dataset — this is the core blocker for Tier S and why the idea scores Tier A (20/25)

**Recommendation:** Build Pattern A as the weekend MVP using only public federal data. Present Pattern B as the implementation roadmap that requires HCD partnership — and use the demo to make the case for that partnership.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 5 | Every affordable unit that silently expires is a permanent loss to Richmond's housing stock; proactive tracking prevents this |
| Feasibility | 4 | NHPD + HUD MAH are public and well-structured; local covenant data requires partnership but isn't needed for MVP |
| Data availability | 4 | Federal datasets cover the majority of subsidized properties; local covenants are the gap (Tier A vs. Tier S) |
| Clarity | 4 | Problem is well-understood by housing policy community; less visible to general public |
| Demo credibility | 3 | Map with real Richmond properties and real expiration dates is compelling; but the audience (judges) may not be housing policy experts |

**Richmond-specific alignment:** Pillar 2 (Thriving Neighborhoods), PS2 (Affordable Housing Compliance Monitoring). Part of Bundle 3 (GeoHub Infrastructure Lookup) with a combined score of 103/125. Uses the same parcel/assessor layer as StreetLights and HUD Rent-Cap Validator.

**Policy/eligibility risks:** Showing which properties are approaching expiration could trigger speculative acquisition by market-rate developers. Mitigate by including preservation resource links (LIHTC resyndication, RRHA renewal options) alongside expiration data. "False expirations" risk: must clearly label renewal probability.

**Weekend MVP shapes:**
1. **Expiration map:** NHPD data filtered to Richmond → GeoHub parcel join → ArcGIS map with red/yellow/green urgency coding → clickable popups with subsidy details
2. **Risk report:** Spreadsheet-based analysis showing total Richmond units expiring in 1/3/5/10 year windows, broken down by council district and subsidy type

---

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | Priority |
|---|-----------|------|-------------|----------|
| 1 | NHPD data accurately covers Richmond's subsidized housing inventory | 3 | 3 | Medium |
| 2 | Earliest End Date in NHPD reflects the actual covenant expiration (not a "false expiration" with renewal options) | 5 | 4 | **High** |
| 3 | GeoHub parcel addresses can be reliably joined to NHPD address records | 3 | 3 | Medium |
| 4 | HCD will eventually partner to provide local covenant data | 4 | 4 | **High** |
| 5 | Showing expiration timelines publicly won't trigger predatory acquisition | 4 | 3 | **High** |
| 6 | City Auditor and Council will use the data to fund preservation efforts | 3 | 3 | Medium |
| 7 | LIHTC properties in Richmond follow the federal 30-year minimum (Virginia QAP may extend) | 3 | 3 | Medium |

**Top 3 to validate:**
1. **#2 — False expiration risk:** Download NHPD data for Richmond and cross-reference the top 5 "expiring soon" properties against RRHA and VHDA records. If most have renewal options or state extensions, the Earliest End Date is misleading without context. Validation: 2-hour data check + one call to VHDA.
2. **#4 — HCD partnership feasibility:** Meet with HCD director to assess willingness to share covenant data. If HCD sees the tool as competitive with their internal systems rather than complementary, the stretch goal dies. Validation: one stakeholder meeting.
3. **#5 — Predatory acquisition risk:** Consult with a housing advocate (e.g., Richmond LISC or Virginia Housing Alliance) on whether publishing expiration dates creates more risk or more preservation pressure. Validation: one conversation with an advocacy partner.

---

## Key Takeaway

The Subsidy & Covenant Snapshot fills a genuine policy gap: no public tool in Richmond shows when affordable housing covenants expire. Federal data (NHPD + HUD MAH) provides a strong MVP foundation, but the "false expiration" problem means every date shown must be labeled as a risk flag rather than a certainty. The path from Tier A to Tier S hinges on one thing: getting HCD to share their local covenant records.
