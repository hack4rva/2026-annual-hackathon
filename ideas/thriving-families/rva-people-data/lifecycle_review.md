# Lifecycle Review — RVA People Data

**Pillar:** Thriving Families
**Problem Statement:** Reduce duplicated data analysis across agencies so Richmond's maternal health ecosystem can operate from shared, consistent metrics.
**Demo:** RVA People Data (Row 28)
**Note:** This is the **only demo addressing PS2 (Maternal Health Data Coordination)** in the Thriving Families pillar. It is also architecturally the most sophisticated demo in the pillar — the only one with an automated data refresh pipeline (GitHub Actions), an MCP connector for AI integration, and a structured CSV upload pathway.
**Review Date:** April 1, 2026

---

## Rubric Checklist

| Step | Name | Output File | Status | Notes |
|------|------|-------------|--------|-------|
| 1 | Problem Grounding | `gap_analysis.md` (header) | ✅ Complete | Problem statement verbatim, primary user, pain, desired outcome present. Sole PS2 demo status noted. |
| 2 | JTBD Analysis | `_shared-maternal-health/jtbd_analysis.md` | ✅ Complete | Shared file — 3 jobs in proper format (analyst, grant writer, budget analyst). |
| 3 | Question Generation | `_shared-maternal-health/jtbd_analysis.md` (Open Questions) | ✅ Complete | Shared file — 20 open questions across data, user, integration, equity, prior art categories. 3 Confirmed / 9 Partial / 8 Still Unknown. |
| 4 | Prior Art Research | `_shared-maternal-health/prior_art_research.md` | ✅ Complete | Shared file — CDC WONDER, PeriStats, CHR&R, City Health Dashboard, Chicago Health Atlas, NYC E&H Portal, failure patterns, weekend-viable patterns, credibility patterns. |
| 5 | Pain Point Research | `_shared-maternal-health/pain_points.md` | ✅ Complete | Shared file — 11 pain points across 3 JTBDs, equity dimension, structural data gaps. |
| 6 | Data Source Mapping | `gap_analysis.md` (Data Source Map) | ✅ Complete | 10 data claims mapped. Core data sources verified against named federal/state agencies. GitHub Actions pipeline and MCP connector demonstrated live. |
| 7 | SME Outreach | — | ⚠️ Blocked | No outreach email drafted. Critical needs: (1) RHHD validation of indicator selection, (2) Coalition agreement to adopt portal as shared source. |
| 8 | Gap Analysis | `gap_analysis.md` (Gap Analysis) | ✅ Complete | Job 1: Strong. Job 2: Strong. Job 3: Partial. Missing items and fixability documented. |
| 9 | Opportunity Mapping | `gap_analysis.md` (Opportunities) | ✅ Complete | 3 opportunities with dependencies. |
| 10 | Lifecycle Review | `lifecycle_review.md` | ✅ Complete | This file. |

---

## What the Demo Does Well

**1. Directly solves the stated problem.** The problem statement asks to "reduce duplicated data analysis across agencies so Richmond's maternal health ecosystem can operate from shared, consistent metrics." RVA People Data does exactly this: 173 indicators from 7 official sources, unified in one portal, race-disaggregated by default, Virginia-benchmarked, export-ready. The analyst who previously spent half a day assembling a grant fact sheet from six portals can now find the same data in one place. This is not a reinterpretation of the problem — it's a direct answer.

**2. Origin story demonstrates user grounding.** The project started from Jackie Hale's comment at the kickoff: "people data portal" — "she wants it for a job so bad." This is not a solution looking for a problem; it's a response to a specific expressed need from someone in the ecosystem.

**3. GitHub Actions annual refresh addresses the #1 civic tech failure mode.** The prior art is unambiguous: civic data projects die when the data pipeline breaks after the hackathon (`E4_prior_art_failures.md`, Citygram's $35K Knight grant → pipeline failure → death). RVA People Data's automated refresh — calling Census ACS, CDC Wonders, and CDC Places APIs on a yearly schedule — means the portal stays current without manual intervention. This is the most operationally mature infrastructure choice of any demo in the pillar.

**4. "No hallucination" design is the correct trust architecture.** The custom chart builder explicitly does not web search or use external data. Everything is sourced from the portal's internal data store. For a tool serving grant writers and policy makers who will cite these numbers in funding applications and budget justifications, this is the right tradeoff — trustworthiness over flexibility. The rate limiting (5 custom graphs per hour) further constrains the system to prevent misuse.

**5. MCP connector is infrastructure, not a feature.** Exposing 4 tools via an MCP connector means the portal can function as a data backend for other AI tools, analytical platforms, and organizational workflows. This transforms the portal from a standalone dashboard into a data service — an architectural sophistication that no other demo in the pillar approaches. If Richmond's maternal health ecosystem builds tools that query RVA People Data, the portal becomes the shared denominator by design.

**6. CSV upload pipeline enables community data contributions.** The admin-authenticated CSV upload with field mapping means the portal can grow beyond its initial 7 sources. If a coalition partner has a unique dataset (PRAMS analysis, EDCC follow-up data, community health worker observations), they can contribute it to the shared pool. This extensibility addresses the "who maintains this after the hackathon?" question with a concrete mechanism.

**7. Data packs with free download serve the highest-frequency use case.** Two tiers (domain-specific and complete database export) mean both the grant writer who needs "all health data" and the analyst who needs everything can get what they need without copying from a dashboard. Free access removes the barrier that VHHA Analytics (member-restricted) and some VDH data (data request required) impose on smaller organizations.

---

## What Was Fundamentally Missed

**1. Definitional locking — the trust foundation — is undemonstrated.** The portal's entire value proposition rests on "shared, consistent metrics." But the most dangerous data error in Richmond's maternal health ecosystem is definitional mixing: conflating maternal mortality (death within 42 days, NVSS/WHO definition) with pregnancy-associated deaths (death within 365 days from any cause, VDH surveillance definition). These can differ by 3–4× for the same city in the same year (`G2_risks_health_claims.md`). If the portal does not hard-lock indicator definitions to authoritative sources and make those definitions visible at the point of use (the CDC WONDER model: per-query citations, method cards), it risks replicating the problem it claims to solve.

Similarly, the 2018 NVSS pregnancy checkbox recoding creates a methodological break that invalidates pre/post trend comparisons. The ICD-9 to ICD-10 transition (2015) altered SMM rates. The LMP-to-OE gestational age shift (2014) changed preterm birth rates by nearly 2 percentage points. If the portal enables users to draw trend lines across these breaks without warning, it produces misleading advocacy — the exact failure the research corpus documents repeatedly (`G2_risks_health_claims.md`).

This is not a nice-to-have. It is the difference between "the tool that ended conflicting numbers at coalition meetings" and "another source of conflicting numbers."

**2. No governance model articulated.** Every surviving health dashboard in the prior art has an institutional steward: CDC maintains WONDER, the Robert Wood Johnson Foundation funds CHR&R, DataMade maintains Councilmatic. A hackathon portal without a named institutional owner will follow the Citygram path — pipeline breakage, schema drift, and death within months (`E4_prior_art_failures.md`). The demo did not name who will own the indicator definitions, who will resolve conflicts when sources disagree, and who will manage the annual refresh when the builder moves on.

The prior art research identifies RHHD or the Richmond City Health District as the natural institutional anchor. Without their buy-in — not as a user, but as a co-steward — the portal has no post-hackathon runway.

**3. No suppression or uncertainty handling shown.** Richmond City's maternal death counts frequently fall below VDH's <20 suppression threshold. ACS tract-level estimates carry margins of error that can exceed 30% in high-poverty tracts. CDC WONDER suppresses counts ≤9. The portal did not show how it handles these cases — blank cells, footnotes, multi-year averages, or silent omission. Silent omission is the worst outcome: the data disappears where the need is greatest (`G4_risks_data_quality.md`).

**4. Authentication is acknowledged as basic.** The presenter noted that the admin portal authentication is "simple/basic and could be strengthened." For a portal that accepts CSV uploads to public indicators, inadequate auth is a data integrity risk — a malicious or careless upload could corrupt trusted indicators. This needs to be hardened before any production deployment.

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| Indicator definitions not demonstrably locked to authoritative sources | **High** | For each of the 173 indicators: document the source, definition, vintage year, and suppression rule applied. Publish this as a downloadable data dictionary. Implement per-indicator "Definition" popups (City Health Dashboard model) in the UI. Hard-lock maternal mortality to the 42-day NVSS/WHO definition and surface the 2018 methodology break as a visible era marker. |
| No institutional steward identified | **High** | Initiate conversation with RHHD about co-stewarding the portal. The ask: Would RHHD endorse RVA People Data as a shared resource for the maternal health coalition? Would they contribute staff time to validate indicators annually? This is a partnership conversation, not a technical integration. |
| Suppression handling unspecified | **Medium** | Define and implement suppression rules for each source (VDH <20, CDC WONDER ≤9, ACS MOE >30%). Display suppression badges in the UI explaining why a value is missing. For Richmond-suppressed maternal indicators, offer Planning District 15 aggregates or multi-year rolling averages as fallbacks — clearly labeled as such. |
| Admin auth needs hardening | **Medium** | Implement role-based access for the CSV upload pipeline. At minimum: separate admin accounts, audit logging of all uploads, and a review/approval step before uploaded data becomes publicly visible. |
| MCP connector guardrails unvalidated | **Low** | Test what happens when a connected AI asks questions the portal's data cannot answer (e.g., "What is Richmond's maternal mortality rate for 2025?" when only 2023 data is loaded). Validate that the "no hallucination" design extends to the MCP integration, not just the internal chart builder. |

---

## Recommended Next Steps (Priority Order)

1. **Build and publish the data dictionary.** For each indicator: source, definition, vintage year, suppression rule, and last-updated date. This single artifact transforms the portal from "a dashboard with numbers" into "a trusted reference with methodology." It's also the first thing RHHD or any coalition partner will ask for before endorsing the tool. The CDC WONDER per-query citation model is the standard to match.

2. **Initiate partnership with RHHD.** The conversation: "We built a unified data portal with 173 indicators from 7 sources. Would the Health District validate the indicator selection, endorse it as a shared resource for coalition partners, and contribute annual review time to keep definitions current?" RHHD is the natural anchor because they already produce the Community Health Assessment and convene cross-sector health partnerships.

3. **Add suppression badges and era markers.** Implement visible indicators for: (a) Suppressed values — explain why the cell is empty and offer the nearest available aggregate, (b) The 2018 NVSS methodology break — block or prominently warn against cross-era trend lines for maternal mortality, (c) ACS margins of error — show confidence bands for tract-level estimates, especially in high-poverty tracts where MOE is largest.

4. **Add a "Grant Fact Sheet" builder.** The highest-frequency use case is a grant writer who needs 5–10 indicators with auto-citations, Richmond vs. Virginia comparisons, and race-disaggregated breakdowns — formatted as a downloadable PDF. This feature directly serves the CBOs and doula collectives that currently lack analytic capacity (Pain P3.4) and converts the portal from a "tool for analysts" to a "tool for the organizations closest to the communities with the worst outcomes."

5. **Harden admin authentication and add upload audit trail.** Before the CSV upload pipeline is used for real data: implement role-based access, log all uploads with timestamp and uploader identity, and add a review/approval step so that uploaded indicators are validated before publication. This prevents the schema drift that killed Citygram's data pipeline.
