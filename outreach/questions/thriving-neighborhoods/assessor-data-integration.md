# Outreach: City Assessor's Office / IT — Property Data Integration — Research & Questions

### What we've confirmed through public sources

- **ArcGIS REST API:** The City Assessor's parcel data is exposed via the Richmond GeoHub ArcGIS REST API as a public Feature Service, queryable programmatically. The parcels dataset is published at `richmond-geo-hub-cor.hub.arcgis.com/datasets/parcels-1`.
- **Monthly bulk export:** The Assessor's Public Data Set is available for free download in Excel format, updated monthly, containing address, legal description, land/building characteristics, ownership information, and assessment history for every parcel in the city. Available at `rva.gov/assessor-real-estate/data-request`.
- **Manual lookup portal:** Interactive property search available at `rva.gov/assessor-real-estate/property-search`, supporting lookup by Parcel ID, address, land value, and consideration amount.
- **GeoHub planning layers:** Plans of Development has a confirmed REST endpoint at `https://services1.arcgis.com/k3vhq11XkBNeeOfM/arcgis/rest/services/PlanOfDevelopment/FeatureServer/0`. Special Use Permits and Board of Zoning Appeals layers exist as ArcGIS Online items but direct REST endpoints are not extracted.
- **Civic Associations:** A machine-readable boundary dataset is published at `richmond-geo-hub-cor.hub.arcgis.com/datasets/civic-associations` with REST API and GeoJSON export.
- **AHTEP-Assessor coordination:** The AHTEP process requires direct coordination between HCD and the Assessor's Office in a documented 7-step flow: HCD reviews eligibility → notifies Assessor → Assessor inspects property → Base Value Report within 10 business days → final inspection after Certificate of Occupancy → HCD Director grants exemption. It is not confirmed whether a shared case management system tracks this handoff or whether it runs through email.
- **Parcel ID as common key:** Parcel IDs are the strongest candidate for cross-system property matching. The Assessor's data and GeoHub both use them, suggesting compatibility. However, explicit field-level compatibility with EnerGov or Legistar has not been confirmed — EnerGov doesn't expose structured data, and Legistar stores parcel identifiers only in PDF attachments.
- **EnerGov is a closed system:** The City's EnerGov permit system does not expose a public API, data export, or documented external integration. This means parcel-level permit data cannot be joined to Assessor records programmatically.
- **Legistar is open:** The Legistar API (`richmondva` client slug, no token required) provides structured legislative data, but parcel IDs for AHTF awards are buried in PDF attachments — not in queryable metadata fields.
- **HUD data accessible:** Fair Market Rents, Income Limits, LIHTC property-level data, CHAS housing needs data, and the National Housing Preservation Database are all accessible via HUD API or download. These federal datasets use census tracts and ZIP codes, not Richmond parcel IDs, so a geographic join layer is needed.
- **February 2026 audit context:** The OCA 2026-07 special review found systemic gaps in the City's affordable housing compliance infrastructure and recommended formalizing data sources and monitoring. The administration concurred. Property-level data integration is foundational to any compliance system that follows.

### What we still need your help with

Three specific questions about how Assessor data connects to other City systems:

1. **API and export capabilities beyond ArcGIS:** We've confirmed the GeoHub REST API and the monthly Excel bulk download. Are there additional data access methods — for example, a direct database connection available to other City departments, a more frequent export schedule, or fields not included in the public Excel set that track property status flags (exemptions, compliance indicators, program participation)?

2. **Parcel ID format compatibility:** The Assessor's parcel ID is the most promising key for linking property records across systems. What format does the Assessor use (e.g., `C000-1234-567`)? Is this the same identifier used in GeoHub layers, and do you know whether EnerGov or HCD systems reference the same parcel ID format — or does each system use its own property identifier?

3. **AHTEP coordination workflow:** The 7-step AHTEP handoff between HCD and the Assessor's Office is well documented in program rules, but the tracking mechanism isn't. Is the Base Value Report request and final inspection tracked in a shared system (e.g., EnerGov, a shared spreadsheet), or does it flow through email and individual records? Understanding this helps teams design tools that fit the existing coordination pattern rather than creating parallel workflows.

### What we're recommending

Based on rubric scores and feasibility analysis, the prototypes that depend most on Assessor data integration are:

1. **HUD Rent-Cap Auto-Validator** (Idea #14, scored 88/105 Pillar, 92/105 Mayor's Choice) — Automates rent-limit validation against HUD FMR and Income Limits for AHTEP and AHTF properties. Needs Assessor parcel data to match properties to geographic areas for the correct FMR lookup. The HUD API side is confirmed; the Assessor parcel-to-geography join is the remaining piece.

2. **Public Affordable Housing Transparency Map** (Idea #20, scored 84/105 Pillar, 86/105 Mayor's Choice) — Maps the location and status of publicly subsidized affordable housing across Richmond. Combines Assessor parcel layers with NHPD federal data and any available local compliance records. The Assessor's ArcGIS data provides the geographic foundation; the challenge is adding an affordability attribute layer that doesn't exist publicly today.

3. **Legistar-to-Map Cross-Linker** (Idea #1, scored 87/105 Pillar, 89/105 Mayor's Choice) — Connects legislative items in Legistar (rezonings, AHTF awards, SUPs) to map locations using address parsing and parcel matching. Uses Legistar API + GeoHub layers. The Assessor's parcel boundaries are the geocoding reference layer that makes this linkage work.

None of these tools require changes to the Assessor's systems. They build on the public data you already publish. The questions above help us confirm that the integration assumptions are correct.

---

## Context for the SME
The Assessor's parcel data is the only dataset that spans both problem statements in this pillar — development discovery needs it for map-based location matching, and affordable housing compliance needs it for property-level tracking. The Assessor is also the key partner in the AHTEP workflow. This email establishes whether the Assessor's data can serve as the cross-system join key that every prototype assumes it to be, and whether the AHTEP handoff is trackable or runs through informal channels.

## Why This Person
The City Assessor or GIS/IT lead controls the parcel data schema, export formats, and the Base Value Report workflow for AHTEP. They would know whether the parcel ID format is consistent across City systems and whether there are data capabilities beyond what's published on GeoHub and the data request portal.

## Data Questions (internal tracking)
- [ ] Q1: Additional data access methods or fields beyond public ArcGIS/Excel exports
- [ ] Q2: Parcel ID format and cross-system compatibility (GeoHub, EnerGov, HCD)
- [ ] Q3: AHTEP Base Value Report / final inspection tracking mechanism (shared system vs. email)

## Research Sources
- `_research-answers/hc_q1_system_data.md` — Assessor data accessibility, EnerGov limitations, parcel data formats
- `_research-answers/dd_q1_system_data.md` — GeoHub planning layers, ArcGIS REST endpoints
- `_shared-housing-compliance/jtbd_analysis.md` — AHTEP-Assessor coordination process (Q11)
- `_shared-dev-discovery/jtbd_analysis.md` — GeoHub data access and integration questions
- `NEW_IDEAS_RUBRIC_GRADES.md` — scored ideas with tier rankings
