# Outreach: 311 Operations — AvePoint API Access — Research & Questions

### What we've confirmed through public sources

- **Platform:** RVA311 runs on AvePoint Citizen Services / Microsoft Dynamics 365 / Azure, launched June 2017 when the Department of Citizen Service and Response was created.
- **Scale:** 208,216 service requests in 2025 (up from ~83,000 in 2024). Your call center handled 163,000 calls in 2024 and resolved 116,000+ concerns by phone in 2025 without creating formal tickets — meaning more than half of residents' issues are handled over the phone.
- **Hours:** Mon-Fri 8am-7pm, Saturday 9am-1pm. Online and mobile submissions accepted 24/7, queued for business hours.
- **Open data:** The Socrata dataset (vgg4-hjn8) contains 2013-2015 legacy SeeClickFix data only. No current AvePoint-era 311 data is published on the Open Data Portal.
- **Service directory:** rva.gov/common/services and the Helpful Links page exist but aren't a structured, machine-readable service catalog.
- **Integration:** AvePoint has a Graph API, and an internal integration with Cityworks exists via Microsoft BizTalk middleware. No public-facing API endpoint for RVA311 is documented.
- **Language access:** Language Access Policy (AR 5.24, effective July 2023) requires professional translation of vital documents. rva.gov uses Google Translate with the explicit disclaimer that it's not a substitute for professional translation. Free interpretation available via OIRE (Spanish during business hours) and United Language Group (240+ languages, after-hours).
- **No AI on site:** The City has an AI Policy (2025) but no chatbot or AI assistant has been deployed on rva.gov.
- **Comparable cities:** Baltimore and Pittsburgh run 311 on Salesforce, Raleigh replaced SeeClickFix with ServiceNow in January 2026, Charlotte offers live chat, Norfolk publishes open data from its MyNorfolk portal. No comparable city has a verified AI chatbot or wizard-style navigation tool with documented outcomes — meaning Richmond would be first if any of these prototypes deployed.

### What we haven't been able to determine — and where we need your help

We have **five specific questions** that only your team can answer:

1. **API access:** AvePoint's Graph API exists generically, but does the Richmond deployment expose any endpoint — public, partner, or internal — for programmatic service request submission or status lookup? Even a read-only data export would unlock several prototypes.

2. **Taxonomy data:** Your system serves ~20 partner departments with categories like Public Works Services, Permits (Energov), and Code Enforcement Cases. Is the full category/subcategory taxonomy available as structured data (JSON, CSV, or even a spreadsheet)? This is the single most requested dataset across all three demos.

3. **Post-2018 data publishing:** The 2013-2015 Socrata dataset predates the AvePoint migration. Is there any plan — or any barrier — to publishing current RVA311 request data on the Open Data Portal? Norfolk publishes MyNorfolk data openly and it's become a model for other cities.

4. **Third-party submission feasibility:** Text 311 claims it can submit requests directly into RVA311. Is this technically possible today without formal IT integration, or would it require a procurement pathway under VPPA/Richmond City Code Chapter 21?

5. **Misroute rate:** We found no published metrics or City Auditor reports on how often 311 requests are reclassified after initial submission. Is there any internal data on misroute rates? This would help us understand the baseline that a better routing tool needs to improve on.

### Why this matters

We've also been generating new solution ideas grounded in the research. The highest-scoring concepts for the service navigation problem are:

- **A deterministic service wizard** (GOV.UK Smart Answers pattern) that routes residents through 3-6 plain-language questions with no AI, no hallucination risk, and full auditability — the research finds this is the safest path and no US city has deployed one yet.
- **Symptom-based cross-department triage** for the specific boundary cases that cause misroutes (pothole vs. water main sinkhole = DPW vs. DPU, graffiti on private vs. public property = consent form workflow).
- **A 311 analytics probe** that instruments any navigation tool to capture what residents search for, where they fail, and what they need that the system doesn't offer — data the City currently has no way to collect.

None of these require replacing RVA311 — they all build on top of it.

We're not asking for any commitment — just trying to understand what's technically possible so we can give the Mayor's office a realistic assessment of which prototypes could move to a pilot. Happy to share any of the prototypes or our full research.

---

## Context for the SME
Three demos all build navigation layers on top of RVA311 rather than replacing it — matching the pillar champion's constraint. The fundamental blocker is whether the existing AvePoint platform allows any form of external integration. If it does (even read-only), Text 311 and the deterministic wizard become immediately pilotable. If not, all solutions are limited to advisory/routing tools that point to RVA311.com.

The research confirms Richmond is the only major city in the comparison set still on a specialized GovTech platform (AvePoint) — the trend is toward Salesforce and ServiceNow. This may matter for long-term API strategy.

## Why This Person
Pete Breil (Director, Citizen Service & Response) was identified by the pillar champion as the key contact for 311 operations. He could not attend the hackathon but sent regards. He or his technical lead would know the AvePoint API status and taxonomy structure.

## Data Questions (internal tracking)
- [ ] Q1: AvePoint API for programmatic submission (public, partner, or internal)
- [ ] Q2: Current taxonomy as structured data
- [ ] Q3: Post-2018 311 data publication plans (Socrata/Open Data)
- [ ] Q4: Third-party submission feasibility under procurement rules
- [ ] Q5: Current misroute rate metrics (internal KPIs)

## Research Sources
- `_research-answers/sn_q1_system_data.md` — AvePoint platform details, API, taxonomy
- `_research-answers/sn_q2_usage_equity.md` — 208K requests, channel mix, digital divide
- `_research-answers/sn_q3_prior_art.md` — comparable city platforms, no AI verified
- `_shared-service-navigation/jtbd_analysis.md` — full JTBD + answered questions
- `NEW_IDEAS_RUBRIC_GRADES.md` — scored solution ideas
