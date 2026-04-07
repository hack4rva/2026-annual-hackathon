# Gap Analysis — RVA People Data

**Pillar:** Thriving Families
**Problem Statement (verbatim):** "Reduce duplicated data analysis across agencies so Richmond's maternal health ecosystem can operate from shared, consistent metrics."
**Demo:** RVA People Data (Row 28)
**Note:** This is the **only demo addressing PS2 (Maternal Health Data Coordination)** in the Thriving Families pillar.
**Primary User:** Maternal health program analyst, grant writer, or policy maker who currently downloads the same VDH/Census/CDC datasets as every other organization in the ecosystem, reformats them into different templates, and presents numbers that don't match the agency next door — wasting grant dollars on duplicated data wrangling instead of intervention design.
**Pain:** Richmond's maternal health data is distributed across at least six distinct portals (VDH MCH, VDH Maternal Mortality, VDH PRAMS, VDH HealthStats, March of Dimes PeriStats, Census ACS) with different time windows, suppression thresholds, and indicator definitions. Organizations show up to coalition meetings with conflicting numbers. Smaller CBOs and doula collectives lack the analytic capacity to access the data at all. Budget decisions get made on vibes.
**Desired Outcome:** One shared, pre-formatted data source that everyone draws from — same denominators, same definitions, same time windows — with exports ready for grant applications, equity analysis, and budget justifications.

---

## Data Source Map

| Data Claim in Demo | Real or Synthetic? | Source | Owner | Access | Cadence | Notes |
|---|---|---|---|---|---|---|
| 173 verified indicators from 7 official sources | **Real — verified against named sources** | VDH, Census/ACS, VDOE, CDC Wonders, CDC Places (5 of 7 named; 2 unnamed) | Various federal/state agencies | Public | Annual (varies by source) | The indicator count (173) and source count (7) are specific claims. The demo named 5 sources explicitly. Each source has different refresh cycles: VDH MCH uses 2023 data (updated Sep 2025); ACS 5-year pools 2020–2024; CDC WONDER provides provisional data subject to revision. The critical question is whether each indicator locks to the authoritative source's definition and vintage (JTBD Q1: Still Unknown). |
| Race-disaggregated by default | **Real (demonstrated)** | VDH (single-race + Hispanic ethnicity), Census/ACS | VDH, Census Bureau | Public | Annual | The demo showed racial breakdown as the default view. VDH uses single-race categories with Hispanic as a separate ethnicity dimension. Federal grants often expect combined race/ethnicity categories — the portal's schema handling is a design decision that affects grant-writer usability (JTBD Q4: Confirmed schema exists; mapping to federal formats unaddressed). |
| Virginia-benchmarked | **Real (demonstrated)** | VDH statewide data, Census Virginia estimates | VDH, Census Bureau | Public | Annual | The demo showed Richmond data alongside Virginia averages (e.g., preterm birth rate 12.4% vs. Virginia average). This directly addresses Pain P3.3 (no trusted benchmark for "how are we doing?"). |
| GitHub Actions annual data refresh | **Real (demonstrated)** | Census ACS API, CDC Wonders, CDC Places | Census Bureau, CDC | Public API | Annual (automated) | The automation pipeline calls APIs and updates datasets without manual intervention. This is architecturally sophisticated — most hackathon data projects break at the pipeline stage post-event. The cadence (annual) is appropriate for Census ACS and CDC PLACES but may introduce lag for organizations needing current-year or provisional data (JTBD Q5). |
| Custom chart builder (no hallucination, internal data only) | **Real (demonstrated)** | Portal's internal data store | RVA People Data | Platform-hosted | Per-session | The demo explicitly stated the system does not hallucinate or web search — all charts are built from internal data only. Rate-limited to 5 custom graphs per hour per session. This is a deliberate design choice that trades flexibility for trustworthiness — the right tradeoff for a data portal serving grant writers and policy makers. |
| Equity/disparity snapshot | **Real (demonstrated)** | Derived from race-disaggregated indicators | RVA People Data | Platform-hosted | Per-refresh | The demo showed an instant visual of racial disparities across indicators. The critical question is whether this calculates rate ratios and excess burden or only displays side-by-side rates (JTBD Q14: Still Unknown). |
| Data packs (free download, standard or complete) | **Real (demonstrated)** | Portal's internal data store | RVA People Data | Free download | Per-session | Two tiers: domain-specific download (e.g., all Health data) or complete database export. This directly addresses Job 2 (grant writer needs exportable, citation-ready data). |
| MCP connector for AI integration | **Real (demonstrated)** | Portal's internal data via 4 exposed tools | RVA People Data | MCP link from About page | Real-time | The presenter demonstrated this live — 4 custom tools exposed through the connector, with an AI assistant searching the portal's data in real time. This is architecturally the most sophisticated integration feature across all Thriving Families demos. The guardrail question (preventing LLM hallucination on maternal health indicators) is unresolved (JTBD Q10: Still Unknown). |
| CSV upload pipeline with admin auth | **Real (demonstrated)** | User-uploaded CSV files | Admin users | Password-protected admin portal | On-demand | Staff can upload new CSV datasets, map fields to indicator names, and add data immediately. The presenter noted authentication is "simple/basic." Validation against locked indicator definitions to prevent schema drift is unaddressed (JTBD Q13: Still Unknown). |
| 4 tabs: Health, Population, Poverty, Education | **Real (demonstrated)** | Cross-source aggregation | RVA People Data | Platform-hosted | Per-refresh | Organized structure with subdivisions (e.g., Health → Adolescent health, Birth outcomes, HIV, Infant mortality). This navigation design serves the "find the number I need" use case well. |

### Gaps Requiring SME Access
- **Indicator definition locking:** Do the 173 indicators each trace to the authoritative source's definition and vintage? Or are some calculated/derived by the portal itself? This is the trust foundation — if definitions drift, the portal becomes another source of conflicting numbers rather than the solution.
- **Suppression rules applied:** Does the portal use VDH's <20 threshold, CDC WONDER's ≤9 threshold, or a custom rule? How are suppressed values communicated? (JTBD Q2)
- **2018 NVSS pregnancy checkbox break:** Does the portal flag the methodological break that invalidates pre/post maternal mortality trend comparisons? (JTBD Q3: Partial — VDH doesn't clearly flag it either)
- **Coalition validation:** Has the indicator selection been validated with Richmond's maternal health coalition (RHHD, Urban Baby Beginnings, Birth in Color RVA, VCU Health) to ensure the most-needed numbers are present? (JTBD Q7: Still Unknown)

---

## Gap Analysis by JTBD

### Job 1: Analyst duplicating data work across agencies
**Coverage: Strong — the most direct answer to this JTBD of any demo in the hackathon**

What works:
- **173 indicators from 7 sources in one portal** directly eliminates the "six portals, no shared truth" problem (Pain P1.1). An analyst who previously downloaded from VDH, Census, CDC, and March of Dimes separately can now find the same indicators in one place.
- **Race-disaggregated by default** means the analyst doesn't need to navigate dropdown menus to get to the equity view — it's the starting position.
- **Virginia-benchmarked** provides the comparison frame that every grant application and budget justification requires (Pain P3.3).
- **GitHub Actions annual refresh** means the pipeline doesn't break when the hackathon ends — the single most common failure mode for civic data projects (`E4_prior_art_failures.md`).
- **Custom chart builder with no hallucination** gives analysts a safe visualization tool that won't produce misleading outputs from external data.
- **Data packs with free download** eliminate the "copy numbers from a dashboard into a spreadsheet" workflow that currently consumes half a day per grant fact sheet.

What's missing:
- **Definitional locking is undemonstrated.** The highest-risk data error in the maternal health ecosystem is definitional mixing — conflating maternal mortality (42 days) with pregnancy-associated deaths (365 days), or drawing trend lines across the 2018 NVSS methodological break (Pain P1.2, P1.3). The portal's value proposition is "shared, consistent metrics" — but if it doesn't lock definitions to authoritative sources and surface era markers, it risks becoming another source of confusion rather than the cure.
- **Suppression handling not shown.** Richmond City's small population means maternal death counts frequently fall below VDH's <20 suppression threshold. How the portal handles suppressed cells — blank, footnoted, replaced with multi-year averages — determines whether analysts can trust it for the indicators that matter most (Pain P2.2).
- **No provisional vs. final distinction shown.** Grant writers who cite a provisional figure risk having the number change after submission. An opinionated default that steers users toward the latest stable year (rather than the most recent provisional year) would prevent citation risk (Pain P2.3).
- **No per-query citations.** CDC WONDER generates dynamically composed citations on every results screen. City Health Dashboard provides method cards per indicator. The demo did not show whether exported charts or data packs include auto-generated citations with source, vintage, and methodology notes — the credibility mechanism that trusted dashboards use (Prior Art: Credibility Patterns).
- **No PRAMS integration.** Richmond's PRAMS oversample is a premium asset — one of only two health districts in Virginia with district-level behavioral data — but it lives in a separate portal and requires survey methodology literacy. The portal does not surface PRAMS data, missing the behavioral risk factors (substance use, IPV screening, breastfeeding) that complement the clinical and demographic indicators (Pain P2.4).

**Gap fixable or fundamental?** Fixable. The architecture is right — the portal already aggregates, disaggregates, and exports. Adding definition locks, suppression badges, vintage labels, and auto-citations are metadata/UX additions, not architectural changes. PRAMS integration is more complex (requires understanding survey weighting) but feasible as a future data source.

### Job 2: Grant writer hunting for Richmond-specific race-disaggregated data
**Coverage: Strong — strongest grant-writer-serving demo in the pillar**

What works:
- **Richmond-filtered by default** eliminates the #1 grant writer friction: navigating state dashboards that default to statewide views and require manual filtering to Richmond City (Pain P2.1).
- **Race-disaggregated by default** means the grant writer gets equity data without extra steps.
- **Data packs with free download** provide the export-ready format grant applications demand.
- **Custom chart builder** lets the grant writer generate a visual for their application directly from the portal.

What's missing:
- **No "Quick Facts" or grant-language builder.** The highest-frequency use case for Job 2 is assembling a one-page fact sheet with 5–10 key indicators, auto-citations, and grant-ready language. The portal provides raw data and charts, but does not package them into the "grant fact sheet" format that smaller CBOs need (JTBD Q8: Partial — export-first UX is implied need).
- **No race/ethnicity schema translation.** VDH uses single-race + Hispanic ethnicity. Federal grants often expect combined race/ethnicity categories. The portal does not help the grant writer translate between schemas — a manual step that many program staff cannot perform (Pain P2.1).
- **No MOE handling for ACS tract-level data.** Census ACS estimates at the tract level carry margins of error that can exceed 30% of the estimate in high-poverty tracts. Presenting these without uncertainty indicators creates false confidence in the geographies where the data is least reliable (Pain P2.2, `G4_risks_data_quality.md`).

**Gap fixable or fundamental?** Fixable. A "Quick Facts" export template, schema translation helper, and MOE badges are feature additions that build on the existing architecture.

### Job 3: Budget analyst with no consolidated equity dashboard
**Coverage: Partial — strong on indicator breadth, weak on the operational connection**

What works:
- **Equity/disparity snapshot** provides an instant visual of racial disparities across indicators — directly addressing the "disparity data exists but isn't operationalized" problem (Pain P3.2).
- **Virginia-benchmarked** gives the budget analyst the comparison frame they need for justifications.
- **4-tab structure (Health, Population, Poverty, Education)** surfaces social determinants alongside clinical outcomes — the overlay that Pain P3.2 identifies as missing.

What's missing:
- **No geographic granularity below city level.** Budget decisions about maternal health often need to target specific neighborhoods (East End, Northside). If the portal only provides city/county-level data — not census tract — it cannot support the neighborhood equity mapping that drives resource allocation (JTBD Q17: Partial — core VDH MCH indicators are locality/county-level with suppression on outcomes).
- **No connection to the postpartum coordination gap.** The most urgent finding in the maternal health data — 37.4% of pregnancy-associated deaths occur 43–365 days postpartum, 40% from overdose — implicates a handoff failure between obstetric care, primary care, and behavioral health (Pain P3.1). The portal could surface this finding prominently and connect it to the EDCC alerting infrastructure, but this operational layer was not shown.
- **Rate ratios vs. side-by-side rates unclear.** The equity snapshot shows disparities, but whether it calculates rate ratios and excess burden (actionable for budget analysts) or only displays side-by-side rates (requiring interpretation) is unaddressed (JTBD Q14).

**Gap fixable or fundamental?** Mixed. Adding census-tract granularity for ACS-sourced indicators is feasible. Adding tract-level maternal health outcomes runs into VDH suppression thresholds for small counts. The operational connection to EDCC/postpartum coordination is outside the scope of a data portal — but surfacing the finding prominently is a content decision.

---

## Opportunities

### Opportunity 1: Become Richmond's Shared Denominator (Institutional Anchor)
The portal's highest-value proposition is not as a dashboard — it's as the **canonical Richmond data source** that every organization in the maternal health ecosystem agrees to cite. If RHHD, Urban Baby Beginnings, Birth in Color RVA, and VCU Health all reference RVA People Data instead of independently pulling from VDH/Census/CDC, the "different numbers at the same meeting" problem disappears. This requires governance — a Data Stewardship Council that locks definitions, manages update cadences, and resolves conflicts. The prior art is explicit: every surviving health dashboard has an institutional steward (`E2_prior_art_health_dashboards.md`, `E4_prior_art_failures.md`).

**Dependencies:** Buy-in from RHHD as institutional anchor; agreement from 3–5 coalition organizations to adopt the portal as their shared source; formalized indicator governance (definition locks, vintage labeling, suppression rules).

### Opportunity 2: MCP Connector as Ecosystem Infrastructure
The MCP connector — 4 exposed tools allowing AI assistants to search the portal's data — is architecturally the most sophisticated integration feature in the Thriving Families pillar. If other city tools, AI assistants, or analytical platforms can query RVA People Data programmatically, it becomes infrastructure rather than a standalone product. The "no hallucination" design (internal data only) provides the trust guarantee that health data requires.

**Dependencies:** Documentation of the 4 MCP tools (schema, rate limits, authentication); guardrails to prevent LLM hallucination when the connected AI responds to maternal health queries; adoption by at least one external tool or organization.

### Opportunity 3: Grant Fact Sheet Builder (Quick Win for CBOs)
The highest-frequency, highest-pain use case is a grant writer assembling a one-page fact sheet with 5–10 indicators, auto-citations, and comparison benchmarks. Adding a "Build Grant Pack" button that generates a formatted PDF — with Richmond vs. Virginia comparisons, race-disaggregated breakdowns, source citations, and methodology notes — would deliver immediate value to the smaller CBOs that currently lack analytic capacity. This is the "serve the grant writer first" pattern identified in the prior art (`E5_prior_art_weekend_viable.md`, `B3_users_maternal_health_researcher.md`).

**Dependencies:** Template design validated with 2–3 Richmond grant writers; auto-citation generation tied to indicator definitions; PDF export pipeline.
