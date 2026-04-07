# Lifecycle Review — Affordable Housing Compliance Dash

**Pillar:** Thriving Neighborhoods
**Problem Statement:** Affordable Housing Compliance Monitoring — Help City staff track whether publicly funded affordable housing stays affordable over time.
**Demo:** Affordable Housing Compliance Dash (Row 36)
**Presenters:** Corey, Fres, Morelli
**Review Date:** April 1, 2026

---

## Rubric Checklist

| Step | Name | Output File | Status | Notes |
|------|------|-------------|--------|-------|
| 1 | Problem Grounding | `gap_analysis.md` (header) | ✅ Complete | Problem statement verbatim, primary user (HCD compliance analyst), pain (fragmented systems, growing portfolio, manual verification), desired outcome (unified dashboard surviving staff transitions). |
| 2 | JTBD Analysis | `_shared-housing-compliance/jtbd_analysis.md` | ✅ Complete | Shared file — 3 jobs (compliance analyst, HCD Director, City Auditor) in proper format with triggering situations and outcomes. |
| 3 | Question Generation | `_shared-housing-compliance/jtbd_analysis.md` (Open Questions) | ✅ Complete | Shared file — 23 open questions across data, user, integration, equity, and prior art categories. All answered via parallel AI research with confidence labels. |
| 4 | Prior Art Research | `_shared-housing-compliance/prior_art_research.md` | ✅ Complete | Shared file — 5 national comparables (Denver, SF, Chicago, LA, DC), HUD data inventory, Richmond-specific system mapping, 2026 audit implications, weekend-build patterns. |
| 5 | Pain Point Research | `_shared-housing-compliance/pain_points.md` | ✅ Complete | Shared file — pain points per JTBD, evidence-grounded from corpus, cross-cutting equity dimension (tenant burden, developer equity gap, monitoring intensity decay). |
| 6 | Data Source Mapping | `gap_analysis.md` (Data Source Map) | ✅ Complete | 7 data claims mapped; 0 verified as real; 1 plausible (HUD reference); core finding: transcript does not identify data sources, and the compliance data layer needed to back the dashboard is not publicly available. |
| 7 | SME Outreach | — | ⚠️ Not started | No outreach email drafted. The critical question is whether HCD would share (or allow structured access to) compliance records for AHTF/AHTEP/EAHP. Secondary: can the Assessor's office provide AHTEP exemption status as a structured feed? EnerGov has no API, so the question is whether HCD has any export or internal data they could provide. |
| 8 | Gap Analysis | `gap_analysis.md` (Gap Analysis) | ✅ Complete | All 3 JTBDs assessed: Job 1 Partial, Job 2 Partial, Job 3 Minimal. Specific missing items and fixability documented per job. |
| 9 | Opportunity Mapping | `gap_analysis.md` (Opportunities) | ✅ Complete | 3 opportunities named: risk scoring transparency, HUD API validation layer, explicit data gap acknowledgment with ingestion roadmap. |
| 10 | Solution Ideation | — | ⏳ Not yet produced | `solution_ideas.md` not yet written. Deferred until gap analysis is reviewed and SME outreach clarifies data access. |
| 11 | Lifecycle Review | `lifecycle_review.md` | ✅ Complete | This file. |

---

## What Was Fundamentally Missed

### The data provenance question is unanswered

The demo shows a functional-looking dashboard with top-line metrics, property status lists, compliance risk scoring, alert management, a HUD reference section, and a developer cluster view. The UX is staff-focused, the navigation is logical, and the features align with real compliance analyst workflows. These are genuine strengths.

But the transcript never states where the data comes from. This matters because:

1. **No public registry of active compliance obligations exists.** The city does not publish how many properties are monitored, under which programs, or at what AMI levels. The JTBD research confirmed this gap (Q4: "[Partial] — An official count would require a direct query to city departments or a FOIA request").

2. **EnerGov is closed.** Richmond's EnerGov instance exposes no API and supports no data export (Q12: "[Confirmed] No"). AHTEP application and renewal data cannot be extracted programmatically.

3. **AHTF certifications arrive via email/PDF.** There is no structured database of AHTF compliance records — they exist in analyst inboxes and personal spreadsheets that "reset to zero with every departure" (pain point P1.5).

4. **The Assessor's ArcGIS API IS accessible** and provides parcel-level property data. **HUD FMR/Income Limits APIs ARE accessible** and provide rent-cap reference data. These are the two sources a hackathon team could realistically connect to.

The most likely scenario is that the dashboard uses synthetic or manually constructed demo data that approximates what real compliance data would look like. This is a valid hackathon approach — Denver's portal model and the prior art research both support "pre-populated demo data" as a weekend-build pattern. But the team should have been explicit about this: name the synthetic data, describe the schema, and map every field to its eventual real-world source.

### The 2026 audit is the most important context and it's absent

The February 2026 City Auditor report (OCA 2026-07) is the single strongest argument for building this tool. It found:
- The City did not follow its own funding rules
- $2.4M was never transferred to the AHTF for three years
- No separate accounting fund existed until December 2025
- No documented implementation plan
- Staff turnover erased institutional knowledge
- The administration concurred with all eight recommendations

The demo addresses the problem the auditor described — manual tracking, fragmented systems, compliance gaps — but does not reference the audit. For a City audience, connecting the dashboard to the audit's findings and the administration's concurrence would transform the pitch from "we built a useful tool" to "we built the system your auditor said you need and your administration agreed to implement."

### Program specificity is missing

The transcript uses generic language ("affordable housing developments and grants," "performance agreements") rather than naming the three specific programs: AHTF, AHTEP, and EAHP. Each program has different rules, deadlines, submission systems, and compliance requirements. A compliance analyst needs to distinguish between them because the workflow for each is different:
- AHTF: annual certification by January 15, 15-year affordability period, email/PDF submission
- AHTEP: annual renewal by November 1, EnerGov portal, Assessor coordination for inspections
- EAHP: project-specific timelines, OneDrive-based submission

A dashboard that treats all properties identically will not match how staff actually work.

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| Data provenance unstated — unclear whether real or synthetic data | **Critical** | The team must clarify: (1) Is the dashboard showing real Richmond property data? If so, from what source? (2) If synthetic, what is the data schema and how does it map to real-world sources? Without this answer, the demo cannot be evaluated for feasibility. |
| No pathway to real compliance data | **Critical** | EnerGov has no API. AHTF certifications are email/PDF. EAHP uses OneDrive. The team must propose how the dashboard would ingest real data — manual entry by staff, FOIA request for historical records, data-sharing agreement with HCD, or structured intake forms that replace the current PDF/email workflow. |
| No program-specific data model | **High** | The three programs (AHTF, AHTEP, EAHP) have different compliance rules, deadlines, and evidence requirements. The dashboard data model must accommodate these differences or it will not match staff workflows. |
| Risk scoring model undocumented | **High** | The compliance risk scoring is the strongest analytical feature, but the inputs, weights, and thresholds are not described. Without a transparent model, staff cannot trust the ranking and auditors cannot verify it. |
| No trend/historical data capability shown | **Medium** | Ordinance 2026-045 requires quadrennial performance evaluation. The dashboard shows current-state only. Historical compliance data and trend visualization are required for the legally mandated reporting. |
| No export or report generation | **Medium** | The HCD Director needs Council-ready reports, not just a dashboard screen. Export to PDF/CSV or structured report templates are table-stakes for the Director persona. |
| 2026 audit context not incorporated | **Medium** | Connecting the dashboard to OCA 2026-07 findings and the administration's concurrence strengthens the implementation case considerably. This is a framing gap, not a technical one. |

---

## Recommended Next Steps (Priority Order)

1. **Clarify data provenance and publish the data schema.** State explicitly what is real and what is synthetic. Document the data model: every table, every field, and where each field comes from (or would come from) in production. Map each field to one of: Assessor ArcGIS API, HUD API, Legistar PDF extraction, HCD manual entry, or future EnerGov export. This is the single action that transforms the demo from "a nice dashboard" to "a credible implementation proposal."

2. **Connect to the two accessible APIs.** The Assessor's GeoHub ArcGIS REST API and HUD FMR/Income Limits API are both publicly accessible and confirmed working. Pulling real Richmond parcel data and real HUD rent limits into the dashboard — even alongside synthetic compliance status data — demonstrates that the system can ingest real-world data. A rent-limit calculator that flags properties where self-reported rents exceed HUD thresholds is the highest-value feature for the compliance analyst and the most achievable integration.

3. **Add program-specific awareness (AHTF/AHTEP/EAHP).** Differentiate properties by program. Show program-specific deadlines, submission requirements, and compliance rules. This matches how staff actually work and demonstrates domain depth beyond a generic dashboard template.

4. **Document the risk scoring model.** Publish the formula: what inputs, what weights, what thresholds trigger each risk level. Make it auditable. Reference Denver's portal (prior-year data deviation as a risk signal) and LA's fee-funded monitoring model as prior art for transparent compliance scoring.

5. **Frame the dashboard against the 2026 audit.** Map each dashboard feature to a specific OCA 2026-07 recommendation. The administration concurred with all eight recommendations — this tool addresses at least three directly (formal policies/data sources, enhanced oversight/transparency, monitoring). This reframing costs zero engineering time and significantly strengthens the implementation case.

6. **Draft SME outreach to HCD.** The critical question: would HCD share compliance records (or allow structured data access) for AHTF/AHTEP/EAHP properties? Secondary: can the Assessor's office provide AHTEP exemption status as a structured feed beyond what's in the public ArcGIS layer? Without internal data access, the dashboard is a well-designed shell waiting for content.
