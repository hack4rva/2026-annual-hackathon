# Innovation Analysis: Storefront Work-Window Brief

**Generated:** April 2, 2026
**Inputs:** IDEA.md, RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Field liaisons and door-to-door canvassing | Eliminate | NYC DDC, SFMTA, and VTA all deploy dedicated business liaisons ($90k-$140k/yr). The Brief eliminates the need for a paid intermediary by putting the information directly in the business owner's hands via self-service. |
| Generic 311/zip-code alerts | Reduce | NYC's Notify NYC pushes zip-code-level SMS — far too coarse for a storefront owner who needs block-level detail. Reduce alert granularity from zip code to 500-foot radius. |
| Business-specific logistics detail | Raise | The research shows most project pages show schedule and budget but not pedestrian access, parking, or delivery route changes. VTA's CEOP mandates these — raise them to first-class fields in the Brief. |
| Printable, zero-server artifact | Create | No city in the research generates a downloadable, printable brief tailored to a specific business address. San Antonio offers signage grants ($300/business); this tool creates the information artifact that tells you *what* the sign should say. |

**Core assumption challenged:** That construction communication requires ongoing city staff effort. The research shows NYC assigns CCLs, SF deploys ambassadors, Seattle mandates monthly re-notices. The Brief challenges this by creating a self-service tool that generates itself from existing data — zero marginal cost per business.

**Reframed value proposition:** Not a notification system — a *business continuity document*. A one-page PDF that a storefront owner can tape to their door, hand to a delivery driver, or show their landlord, generated from live city data in 30 seconds.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Auto-Generated Door Sign** — Instead of a brief, generate a printable "We're Open During Construction" sign with directions to the entrance, parking alternatives, and the project end date. Pre-formatted for printing on standard letter paper.
2. **Delivery Driver Detour Card** — A brief specifically formatted for delivery services (UberEats, DoorDash, FedEx) showing the construction zone, alternate loading zones, and business entrance location.
3. **Landlord Impact Letter** — A formal letter template addressed to a commercial landlord documenting the construction timeline and potential revenue impact, usable for rent relief negotiations. Auto-filled with project data.
4. **Insurance Claim Evidence Pack** — Compile project timeline, access restrictions, and duration into a dated, timestamped document usable as evidence for business interruption insurance claims.
5. **Customer Wayfinding QR Code** — Generate a QR code that links to a simple map showing how to reach the business during construction. Business owner prints and posts it at the construction barrier.
6. **Revenue Impact Estimator** — Using the UMN/MnDOT research (10-20% sales decline for single-location food service), estimate potential revenue impact based on business type, project duration, and proximity. Helps businesses plan cash reserves.
7. **Merchant Coalition Builder** — Identify all businesses within the construction impact radius and generate a shared contact list. Affected businesses can coordinate on shared signage, marketing, and advocacy.
8. **Grant Eligibility Checker** — Cross-reference the construction project details with available city/state small business assistance programs (like Salt Lake City's $500-$3,000 grants or San Antonio's $35,000 stabilization grants) and generate an eligibility summary.

**Most provocative:** #4 (Insurance Claim Evidence Pack) — Reframes city data from transparency tool to legal document, giving small businesses tangible financial recourse.
**Most feasible:** #1 (Auto-Generated Door Sign) — Simpler than the full brief; just project end date, access directions, and "We're Open!" branding. Single HTML-to-PDF generation.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Small business owners near construction zones discover access disruptions through lost foot traffic, not through proactive notification from the City.

**Target user:** Owner of a single-location restaurant or retail shop on a commercial corridor (e.g., Carytown, Scott's Addition) within one block of an active CIP project.

**User Journey:**
- Start: Business owner notices construction barriers going up on their block. Foot traffic drops.
- Friction: They call the City → get transferred between departments → eventually reach a project manager who gives a verbal timeline → owner forgets half the details → can't communicate the timeline to staff or customers.
- Outcome: Owner enters their business address → gets a one-page PDF: "3 active projects within 500ft. Broad St water main (DPW): sidewalk closed on north side, Jan-April 2026. Alternate pedestrian access via south sidewalk. Contact: Jane Smith, 804-555-0123. Cary St paving (DPW): parking restrictions 6am-6pm weekdays through March. Your delivery entrance on the alley is unaffected."

**Lowest-fidelity prototype:** A single HTML page with address input. Queries GeoHub CIP FeatureServer for nearby projects. Renders results into a styled div. Uses browser `window.print()` for PDF output. No backend, no PDF library — just print-friendly CSS.

**First test:** Walk into 5 businesses on Cary Street near an active construction project. Show them the generated brief. Ask: "Is this accurate? Would you tape this to your door?"

---

## 4. Opportunity Mapper

### Pattern A: Self-Service Brief Generator (Quick Win)
- **User:** Small business owner or manager.
- **Outcome:** A printable one-page document covering active nearby projects, durations, access changes, and contacts.
- **Workflow:** Address input → geocode → spatial query against GeoHub CIP → filter by proximity (500ft) → template rendering → browser print/PDF.
- **Dependencies:** GeoHub CIP Dashboard (confirmed live). Work-in-Street Permit data from DPW (may not be in GeoHub — the IDEA.md flags this). GeoHub road centerlines for proximity matching.
- **Richmond relevance:** Richmond has no BID program and no dedicated construction liaison program. This tool fills a gap that cities like NYC fill with $90k/year CCLs and SF fills with $5M mitigation funds. Zero-cost alternative.

### Pattern B: Proactive Merchant Alert System (Stretch)
- **User:** City project managers, BID equivalents, merchant associations.
- **Outcome:** When a new CIP project is approved in a commercial corridor, all businesses within the impact radius automatically receive a brief + opt-in to weekly updates.
- **Workflow:** Monitoring GeoHub for new/changed projects → geocode commercial parcels in impact radius → auto-generate briefs → email/SMS distribution.
- **Dependencies:** Business registry or commercial parcel data to identify affected storefronts. Email/SMS infrastructure. Ongoing monitoring.
- **Richmond relevance:** Would require a commercial parcel dataset and business contact directory. Could partner with Richmond's Commissioner of Revenue (business license data).

**Recommendation:** Pattern A is a weekend build. Pattern B is a 90-day city initiative that Pattern A validates. Start with self-service, prove adoption, then automate distribution.

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 4 | Research shows single-location food service businesses face 10-20% revenue decline during construction (UMN/MnDOT). Directly mitigates this for Richmond small businesses. |
| Feasibility | 4 | GeoHub CIP data available. Client-side PDF generation is proven (shared pattern with 3 other ideas in Bundle 4). Work-in-Street Permit data access is uncertain. |
| Data availability | 3 | CIP project data: confirmed. Sidewalk/parking access changes: not in CIP data — would need to be inferred from project type or manually added. Contact info: may not be in public data. |
| Clarity | 5 | "Enter address, get printable brief." Extremely well-scoped. |
| Demo credibility | 4 | Generates a tangible artifact (PDF). Judges can hold it in their hands. Slight risk if access-change details can't be derived from CIP data alone. |

**Richmond-specific alignment:** Aligns with PS1 (Infrastructure Project Visibility) from the business owner's perspective. Scored 19/25 (Tier A) for implementation reality. Bundle 4 membership means the client-side PDF pattern is shared across 4 ideas, reducing marginal build cost.

**Policy/eligibility risks:** Project manager contact information may not be in public CIP data — publishing personal phone numbers raises privacy concerns. Sidewalk/parking access changes are often determined by Traffic Control Plans that aren't digitized. The brief could contain incomplete or stale information if CIP data is only updated quarterly.

**Weekend MVP shapes:**
1. **Minimal brief:** Address → GeoHub CIP query → one-page HTML with project name, type, timeline, and distance. Print-friendly CSS. No access-change details (those require data not yet available). 15 hours of work.
2. **Rich brief with mock access data:** Same as above, plus hardcoded access-change templates by project type (e.g., "Water main projects typically close one sidewalk"). Acknowledge the templates are generic, not project-specific. 20 hours.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | CIP data includes enough detail (timeline, location, type) to generate a useful brief | High | Medium | TEST FIRST |
| 2 | Small business owners will self-serve (enter their address) rather than expecting the City to notify them | High | High | TEST FIRST |
| 3 | Sidewalk/parking access changes can be inferred from project type without per-project Traffic Control Plans | High | High | TEST FIRST |
| 4 | Project manager contact info is available in the CIP dataset or can be added | Medium | High | Validate early |
| 5 | Client-side browser print/PDF produces a professional-looking one-page document | Medium | Low | Validate early |
| 6 | Business owners find a one-page brief more useful than a link to the CIP dashboard | Medium | Medium | Validate early |
| 7 | The brief stays accurate over the project lifecycle given quarterly CIP updates | Medium | Medium | Monitor |

**Top 3 to validate:**
1. **CIP data richness** — Validation: Pull 10 records from GeoHub CIP FeatureServer for projects in commercial corridors. Check: Does each record have name, type, timeline (start/end dates), and phase? Can you generate a useful brief from these fields alone?
2. **Business owner self-service behavior** — Validation: Interview 5 small business owners near active construction. Ask: "If you could type your address into a website and get a printable summary of nearby construction, would you use it? Or would you expect the City to bring it to you?"
3. **Access-change inference** — Validation: For 5 CIP projects of different types (water main, paving, signals), compare the project type against the actual access restrictions visible on-site. Can you build reliable templates by project type?

---

## Key Takeaway

The Storefront Work-Window Brief turns a $90k/year problem (field liaisons) into a $0 marginal cost solution by making construction impact information self-service. The research shows cities like NYC and SF spend millions on business liaison programs; Richmond has no equivalent program. The risk is data completeness — CIP records may not include the access-change details that make a brief actionable. A hackathon team should validate CIP data richness in the first hour and scope down to what the data actually supports.
