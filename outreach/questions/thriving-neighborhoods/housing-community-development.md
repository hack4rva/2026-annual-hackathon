# Outreach: Housing & Community Development — Affordable Housing Compliance Data — Research & Questions

### What we've confirmed through public sources

- **OCA 2026-07 audit:** The February 2026 special review found the City "did not consistently implement the funding requirements" for the AHTF, had no documented implementation plan, and left $2,472,307 untransferred since FY2022. The administration concurred with all eight high-priority recommendations.
- **Audit recommendations:** The eight recommendations include formal policies defining roles, process steps, timing, data sources, and monitoring; enhanced oversight and transparency for ordinance implementation; and a documented process to track financial transfers to completion. Fund 0405 was established in December 2025 as the separate AHTF accounting fund.
- **Ordinance 2026-045:** Dedicates 2.5% of real estate tax revenue to the AHTF and requires a quadrennial performance evaluation including units created, units preserved, and affordability levels maintained.
- **Program scale:** AHTF alone funded 822 units in FY2024 and 580 in FY2025, each carrying 15-year monitoring obligations. Known funded projects include Saint Francis Home in Manchester (70 units), Brookland Park Apartments/Highland Terrace (66 units), affordable homeownership in Jackson Ward, and Cameo Street (67 units).
- **Compliance deadlines:** AHTF annual certifications due January 15; AHTEP annual renewals due November 1. AHTEP requires 30% of units affordable at ≤80% AMI with rents not exceeding 30% of tenant adjusted gross income.
- **AHTEP-Assessor handoff:** Documented 7-step process — (1) applicant submits to HCD, (2) HCD reviews eligibility, (3) HCD notifies Assessor for Base Value inspection, (4) Assessor inspects, (5) Base Value Report within 10 business days, (6) final inspection after Certificate of Occupancy, (7) HCD Director grants exemption effective January 1.
- **Assessor data accessibility:** Property data is exposed via the Richmond GeoHub ArcGIS REST API for programmatic access. A bulk Public Data Set is available for free download in Excel format, updated monthly, containing address, legal description, land/building characteristics, ownership, and assessment history at `rva.gov/assessor-real-estate/data-request`.
- **HUD API access:** Fair Market Rents and Income Limits are available via HUD API. Richmond is not a mandated SAFMR area. FY2026 Income Limits release confirmed for May 2026. LIHTC property-level data, CHAS housing needs data, and NHPD preservation database are also available via HUD download.
- **EnerGov — closed system:** EnerGov does not expose a public API, data export, or integration pathway. Access is limited to the web portal at `energov.richmondgov.com`. The specific data fields stored for AHTEP applications (unit counts, AMI tiers, rent levels vs. just status and fees) are not publicly documented.
- **Legistar-to-parcel mapping:** Not reliable for automation. Parcel identifiers in AHTF award ordinances are buried in PDF attachments, not structured metadata. Linking a Council-approved award to a specific property requires manual document review.
- **No public compliance registry:** The City does not publish a consolidated count or inventory of properties under active AHTF, AHTEP, or EAHP compliance obligations. No GIS layer, data feed, or database flags properties as subsidized affordable housing.
- **Tenant impact of lapsed exemptions:** When an AHTEP exemption lapses, affordability conditions cease. Virginia has no rent control. Landlords may raise rents with 60-day written notice (VRLTA §55.1-1204(K) for landlords with >4 units). Tenants bear the primary displacement risk.
- **National comparables:** Denver (Affordable Housing Portal, annual email-initiated reporting), San Francisco (MOHCD open dataset, 34 columns, quarterly updates), Chicago (ARO Dashboard, Tableau-based), Los Angeles (LAHD covenant registry), and Washington DC (Housing Insights, Code for DC open-source tool) all have more mature compliance tracking than Richmond.

### What we still need your help with

Five specific questions only HCD can answer:

1. **EnerGov data fields for AHTEP:** We know AHTEP applications flow through EnerGov, but the schema is not public. Does EnerGov store structured fields for unit counts by AMI tier, rent levels, and tenant income verification — or primarily application status and fee tracking? The answer determines whether EnerGov data can feed a compliance dashboard or whether a parallel data layer is needed.

2. **Compliance staffing:** The OCA audit references "labor-intensive manual processes" and recommends formalizing roles and responsibilities. How many FTE staff currently manage compliance monitoring across AHTF, AHTEP, and EAHP? Understanding capacity helps teams design tools that reduce workload rather than add to it.

3. **Active portfolio count:** We estimate 1,400+ AHTF units from FY2024–25 alone based on published funding data, but the total monitored portfolio across all three programs is unknown. What is the approximate count of properties (or units) currently under active compliance obligations?

4. **Internal tracking tools:** The audit implies no system-of-record survives staff transitions. Does HCD maintain any internal spreadsheet, Access database, or shared tracker that functions as a de facto compliance registry — even informally? If so, what fields does it track?

5. **Standardized review process:** Do compliance analysts use standardized forms or checklists for annual certification review, or does the process vary by analyst and program? The audit's recommendation to develop "formal policies and procedures that define roles and responsibilities, process steps, timing, definitions, data sources, and monitoring" suggests standardization doesn't currently exist.

### What we're recommending

Based on rubric scores and feasibility analysis, our top pilot recommendations for compliance monitoring are:

1. **HUD Rent-Cap Auto-Validator** (Idea #14, scored 88/105 Pillar, 92/105 Mayor's Choice) — Automates the manual cross-reference of tenant-reported rents against HUD FMR and Income Limits tables. Uses confirmed HUD API data with no City system access required. Replaces the single most time-consuming step in annual certification review.

2. **Unified Cross-Program Deadline Dashboard** (Idea #15, scored 85/105 Pillar, 91/105 Mayor's Choice) — Consolidates AHTF (Jan 15), AHTEP (Nov 1), and EAHP deadlines into one view showing what's due, what's overdue, and what documentation is missing. Could be piloted immediately with minimal data dependencies.

3. **Compliance Obligation Registry Builder** (Idea #13, scored 87/105 Pillar, 85/105 Mayor's Choice) — Constructs the foundational inventory of properties under active compliance obligations that no public source currently provides. Every downstream compliance tool depends on this registry. Would need HCD data to populate, but the structure and workflow can be built from public program rules.

These tools are designed to implement — not replace — the OCA audit recommendations. None require replacing EnerGov or changing existing workflows; they build on top of what exists.

---

## Context for the SME
The February 2026 OCA audit is the anchor for this conversation. The administration concurred with all recommendations, meaning there is already institutional agreement that compliance infrastructure needs to be modernized. The hackathon team built a prototype that directly addresses the audit's finding about "labor-intensive manual processes." The key question is whether HCD's internal data (EnerGov schema, informal trackers, portfolio size) is structured enough to feed a dashboard — or whether the tool needs to build the data layer from scratch.

## Why This Person
The HCD Director or Compliance Manager owns the compliance workflow, controls EnerGov field configuration, and would know the staffing reality behind the audit findings. They are the only person who can confirm whether structured compliance data exists internally or whether the dashboard must generate its own inventory from Legistar PDFs and Assessor records.

## Data Questions (internal tracking)
- [ ] Q1: EnerGov AHTEP data schema (unit counts, AMI tiers, rent levels)
- [ ] Q2: Compliance monitoring FTE headcount across AHTF/AHTEP/EAHP
- [ ] Q3: Active portfolio count (properties/units under compliance obligations)
- [ ] Q4: Existence of internal compliance tracking spreadsheet/database
- [ ] Q5: Standardized forms/checklists for annual certification review

## Research Sources
- `_research-answers/hc_q1_system_data.md` — EnerGov fields, Assessor data, HUD datasets, Legistar-to-parcel mapping
- `_research-answers/hc_q2_staffing_equity.md` — staffing, AHTEP coordination, equity analysis
- `_research-answers/hc_q3_prior_art.md` — national comparables, OCA audit recommendations, Virginia Housing model
- `_shared-housing-compliance/jtbd_analysis.md` — full JTBD + 23 answered questions
- `NEW_IDEAS_RUBRIC_GRADES.md` — scored ideas with tier rankings
