# Gap Analysis — Affordable Housing Compliance Dash

**Pillar:** Thriving Neighborhoods
**Problem Statement:** Affordable Housing Compliance Monitoring — Help City staff track whether publicly funded affordable housing stays affordable over time.
**Demo:** Affordable Housing Compliance Dash (Row 36)
**Presenters:** Corey, Fres, Morelli
**Live URL:** ahpt-staff-web--ahpt-staff.us-east4.hosted.app/dashboard
**Review Date:** April 1, 2026

---

## Problem Grounding

**Problem:** The City of Richmond must monitor a growing portfolio of affordable housing commitments across three programs (AHTF, AHTEP, EAHP), each with different deadlines, submission systems, and compliance requirements. There is no unified tracker — compliance status lives in EnerGov, OneDrive, email, and analysts' personal spreadsheets. The 2026 City Auditor report (OCA 2026-07) confirmed systemic failures: no documented implementation plan, $2.4M untransferred for three years, and staff turnover erasing institutional knowledge. Ordinance 2026-045 now requires quadrennial performance reporting the City cannot currently produce.

**Primary User:** HCD compliance analyst managing annual certifications and rent/income verification across all three programs.

**Pain:** The portfolio is growing faster than staff capacity — AHTF alone funded 1,402 units in FY2024-25, each carrying 15 years of monitoring. Staggered deadlines (January 15 AHTF, November 1 AHTEP) across disconnected systems create dead zones where missed certifications go undetected until audit. Self-reported rent and income data arrives as PDFs with no automated cross-check against HUD AMI/FMR limits.

**Desired Outcome:** A unified compliance dashboard that shows every property's status, upcoming deadlines, and risk level in one place — surviving staff transitions and producing the portfolio-level reports now legally required by Ordinance 2026-045.

---

## Data Source Map

The demo transcript describes dashboard features but **does not identify its data sources**. This is the single most important evaluation question.

| Data Claim in Demo | Likely Source | Verified? | Notes |
|---------------------|--------------|-----------|-------|
| "Active units" count displayed as top-line metric | Unknown | **No** | No public registry of active compliance obligations exists. The city does not publish how many properties are monitored, under which programs, or at what AMI levels. This number is either synthetic or manually compiled. |
| "Total properties" under different agreements | Unknown | **No** | Same gap. AHTF awards are documented in Legistar PDFs but not as structured data. AHTEP applications are in EnerGov (no API, no export). EAHP uses OneDrive. No single source produces this count. |
| "Compliance summary" — aggregate compliance status | Unknown | **No** | True compliance status requires internal HCD records: executed agreements, annual certifications, inspection results. None of this is publicly accessible. |
| "Upcoming affordability deadlines" | Unknown | **No** | Program deadlines are known (Jan 15 AHTF, Nov 1 AHTEP), but property-specific deadlines depend on individual agreement terms and certification histories that are not public. |
| "Compliance risk scoring" — properties ranked by risk | Unknown | **No** | Risk scoring requires: (1) a property inventory, (2) compliance status per property, (3) a scoring model. The inputs for (1) and (2) are not publicly available. The scoring model is not described in the transcript. |
| "HUD reference section" | HUD FMR/Income Limits APIs | **Plausible** | HUD data is publicly accessible via API. This is the one claim that could be backed by real data. However, the transcript does not state whether HUD data is fetched programmatically or presented as static reference. |
| "Developer cluster view" — properties grouped by developer | Unknown | **No** | Developer-property mappings are scattered across Legistar PDFs, EnerGov records, and HCD internal files. No public source provides this. |

**Assessment:** The dashboard almost certainly runs on synthetic or manually constructed demo data. This is not disqualifying for a hackathon prototype — the prior art research confirms that "pre-populated demo data" is a valid weekend-build pattern, and Denver's portal model works similarly. But the team did not acknowledge this limitation in the transcript, which makes it impossible to evaluate whether the data model is realistic enough to accept real data when it becomes available.

**What's publicly accessible that could seed a real version:**
- Richmond Assessor parcel data via GeoHub ArcGIS REST API (confirmed accessible)
- HUD FMR and Income Limits via API (confirmed accessible)
- NHPD for federally assisted properties (available but excludes local-only programs)
- Legistar ordinances for AHTF awards (available but financial/parcel details are in PDF attachments, not structured fields)

**What requires internal City data access (not publicly available):**
- EnerGov AHTEP records (closed system, no API, no export)
- AHTF annual certification records (email/PDF to HCD)
- EAHP application and completion records (OneDrive)
- Executed regulatory agreements and recorded covenants
- Tenant rent rolls and income documentation

---

## Gap Analysis by JTBD

### Job 1 — Compliance Analyst: Unified View, Deadline Tracking, Risk Scoring

> Does the dashboard show a unified view across AHTF, AHTEP, and EAHP? Does it track deadlines? Does it score risk?

| Requirement | Demo Coverage | Gap |
|-------------|--------------|-----|
| Unified view across all three programs | **Partial** | The demo mentions "various affordable housing developments and grants" generically but does not name AHTF, AHTEP, or EAHP. It is unclear whether the data model distinguishes between programs or treats all properties as a single undifferentiated pool. A compliance analyst needs to filter by program because each has different rules, deadlines, and submission systems. |
| Deadline tracking with program-specific dates | **Partial** | The demo shows "upcoming affordability deadlines" as a panel. But it does not demonstrate awareness of the staggered deadline structure (Jan 15 AHTF, Nov 1 AHTEP, variable EAHP) or the multi-step Assessor coordination required for AHTEP renewals. A generic deadline list is useful but insufficient — the analyst needs program-specific workflow triggers. |
| Compliance risk scoring | **Present** | The demo describes properties ranked from "most out of compliance to in compliance." This is the right UX pattern. However, the scoring inputs and model are not described. What signals drive risk? Late certifications? Missing documentation? Rent exceeding HUD limits? Self-reported data anomalies? Without understanding the scoring logic, it's impossible to assess whether the ranking would be meaningful in practice. |
| Documentation gap tracking | **Not shown** | The demo does not address the core analyst pain: tracking which properties have submitted required certifications, which are missing documents, and which have PDF submissions awaiting manual rent/income cross-checks. The alert system handles some of this but is presented as a general notification workflow, not a document-status tracker. |
| HUD AMI/FMR cross-validation | **Partial** | The "HUD reference section" exists but appears to be informational rather than functional. The demo does not show automated rent-limit validation — the highest-pain workflow step where analysts manually cross-reference self-reported rents against HUD limits. |

**Overall for Job 1: Partial coverage.** The dashboard has the right structural components (summary metrics, property list, risk ranking, alerts) but does not demonstrate program-specific awareness or the specific compliance workflows that consume analyst time.

### Job 2 — HCD Director: Portfolio Roll-Up Reports for Council

> Does it generate portfolio-wide status reports with compliance rates, risk concentrations, and trend data?

| Requirement | Demo Coverage | Gap |
|-------------|--------------|-----|
| Portfolio-level compliance rates | **Present** | Top-line "compliance summary" metric is shown. If backed by real data, this directly addresses the Director's need to report aggregate compliance status. |
| Developer performance tracking | **Present** | "Developer cluster view" groups properties by developer. This is one of the strongest features in the demo — the pain point research identifies developer-level compliance trends as a core managerial need that currently requires manually reviewing individual project files. |
| Trend data over time | **Not shown** | The demo shows current-state metrics but does not demonstrate historical trends. Ordinance 2026-045 requires a quadrennial performance evaluation — the Director needs to show whether compliance is improving or deteriorating over time, not just a snapshot. |
| Export or report generation | **Not shown** | No mention of generating reports, exporting data, or producing Council-ready summaries. The Director needs output they can present, not just a screen they can look at. |
| Unit counts by AMI tier | **Not shown** | The Ordinance requires reporting on "affordability levels maintained." This implies tracking units at different AMI tiers (30%, 50%, 60%, 80%) — a data dimension not mentioned in the demo. |

**Overall for Job 2: Partial coverage.** The developer cluster view is a standout feature. But the absence of trend data, export capability, and AMI-tier breakdowns means the dashboard cannot yet produce the reports Ordinance 2026-045 now requires.

### Job 3 — City Auditor: Auditable Chain from Funding to Compliance

> Does it provide a traceable chain from Council-approved funding to property-level compliance outcomes?

| Requirement | Demo Coverage | Gap |
|-------------|--------------|-----|
| Funding-to-property traceability | **Not shown** | The demo does not mention Legistar, Council ordinances, funding amounts, or how properties connect to their original awards. The 2026 audit's central finding — no documented trail from ordinance to outcome — is not addressed. |
| Evidence chain with documentation at each step | **Not shown** | The alert management system allows notes and responses, but there is no mention of attaching or referencing source documents (certifications, inspection reports, covenants). |
| Cross-program reconciliation | **Not shown** | Properties receiving both federal (HOME, CDBG) and local (AHTF) funds carry overlapping compliance obligations. The demo does not address multi-layer compliance tracking. |
| Audit log of staff actions | **Partial** | The alert system captures notes and acknowledgments, which could serve as a partial audit trail. But it is presented as operational workflow, not audit evidence. |

**Overall for Job 3: Minimal coverage.** The demo does not address the auditor's core need. This is understandable for a hackathon scope — the funding-to-outcome chain requires data that is not publicly available (Legistar PDFs, executed agreements, internal certifications). But the gap should be acknowledged as a known limitation with a documented path to resolution.

---

## Opportunities

### 1. Connect Risk Scoring to Verifiable Inputs

The compliance risk scoring concept is the demo's strongest analytical feature. To make it credible, document the scoring model: what inputs drive the score, what thresholds trigger escalation, and how scores change as properties submit (or fail to submit) required certifications. Even with synthetic data, showing a transparent, auditable scoring model would differentiate this from a static status display. **Prior art:** Denver's portal pre-populates prior-year data and validates against current HUD limits — a pattern that naturally generates risk signals when submissions deviate from expected values.

### 2. Demonstrate the HUD API Integration as a Working Validation Layer

HUD FMR and Income Limits data is publicly accessible via API — this is the one data source the team can connect to live. Building a rent-limit calculator that fetches current HUD thresholds by household size and bedroom count, then flags properties where self-reported rents exceed the calculated limit, would demonstrate the core automated-validation workflow that staff currently do manually with PDFs and spreadsheets. This turns the "HUD reference section" from informational to functional.

### 3. Acknowledge the Data Gap Explicitly and Propose an Ingestion Path

The most credible move for a hackathon prototype is to be transparent about what's real and what's synthetic. Document the data model, map each field to its eventual real-world source (Assessor API for parcel data, HUD API for rent limits, future EnerGov export or manual entry for compliance status), and describe the FOIA or data-sharing agreement needed to populate it. This reframes the demo from "we built a dashboard" to "we built the system Richmond needs and here is the implementation roadmap" — which is exactly what the 2026 audit recommended: a documented implementation plan.
