# New Solution Ideas — Thriving Families Pillar

**Trimmed to top 3 by combined score (Pillar + Mayor's Choice).**

**Generated:** April 1, 2026
**Context:** JTBD analyses, pain point research, and gap analyses for PS1 (Youth Employment Pathways) and PS2 (Maternal Health Data Coordination). This document lists **3** ideas retained after ranking by combined Pillar Award + Mayor's Choice weighted scores.

---

## Rank 1 — Combined 186 (Pillar 91, Mayor's 95)

### Idea 15: Grant Pack Builder — One-Click CBO Fact Sheet Generator
**PS:** PS2
**JTBD:** Job 2 (grant writer hunting for Richmond-specific race-disaggregated data)
**Problem it solves:** Grant writers at smaller CBOs spend half a day assembling a single grant fact sheet — manually copying numbers from VDH, Census, and CDC portals, verifying vintages, and writing methodological caveats — while larger institutions with dedicated epidemiologists do it in minutes.
**How it works:** A web tool where a grant writer selects a topic area (e.g., "Infant Mortality," "Preterm Birth," "Maternal Mortality"), a comparison frame (Richmond vs. Virginia, Richmond vs. Healthy People 2030 target), and a race disaggregation level (all, Non-Hispanic Black vs. Non-Hispanic White, full breakdown). The tool generates a formatted PDF fact sheet with: (1) 5–10 key indicators with auto-generated citations including source, vintage, and methodology notes, (2) Richmond vs. benchmark comparison charts, (3) race-disaggregated breakdowns as default, (4) a "Data Notes" section explaining suppression, provisional status, and definitional scope. Pre-built templates are available for common federal grants: MCHB Title V, MIECHV, Healthy Start.
**Data sources:** VDH MCH Indicators Dashboard; Census ACS (poverty, insurance, employment among women 15–44); CDC WONDER mortality; March of Dimes PeriStats/Report Card; VDH PRAMS dashboard aggregates (Richmond HD oversample).
**Research grounding:** B3_users_maternal_health_researcher.md documents coordinators spending half a day on a single fact sheet. Pain point P2.1 describes the multi-portal hunting workflow. C4_services_gaps.md identifies the analytic capacity gap at CBOs as the fundamental bottleneck. mh_q3_prior_art.md documents per-query citation patterns from CDC WONDER and methodology/method cards from City Health Dashboard.

---

## Rank 2 — Combined 182 (Pillar 90, Mayor's 92)

### Idea 3: Richmond Youth Hub — Unified Program Navigator
**PS:** PS1
**JTBD:** Job 1 (teen seeking first job), Job 3 (workforce coordinator needing ecosystem visibility)
**Problem it solves:** Richmond has 7+ youth employment programs with different age bands, GPA requirements, application windows, and geographic eligibility — and no single front door for teens to discover which ones they qualify for.
**How it works:** A mobile-first web app where a teen enters their age, ZIP code, GPA (optional), and interests. The tool matches them against a curated HSDS-formatted directory of all Richmond youth employment programs: YES/Youth Works RVA, Youth L.E.A.D.S., Girls For A Change GAP, Partnership for the Future, RPS Work-Based Learning, BGCMR Teen Center, and CRWP/WIOA youth services. Each result shows eligibility status, application window (open/closed), program type (summer/year-round/multi-year), and a direct link to apply. A coordinator view shows aggregate search patterns — revealing which programs teens are seeking vs. what's available.
**Data sources:** Program eligibility criteria from C1_services_youth_workforce_programs.md and C2_services_workforce_landscape.md (manually curated into HSDS format); RPS school calendar for application windows.
**Research grounding:** Pain point P1.1 rates program fragmentation as "Critical" severity. Prior art (ye_q3_prior_art.md) confirms the DiscoverBPS and NJ Career Navigator models as weekend-viable. JTBD Q20 confirms NJ-style ML matching can be lightweight.

---

## Rank 3 — Combined 178 (Pillar 87, Mayor's 91)

### Idea 5: First Job SMS Kit — SMS-Accessible Readiness Toolkit
**PS:** PS1
**JTBD:** Job 1 (teen seeking first job)
**Problem it solves:** The highest-need teens — those without broadband, without adult guidance, and relying on library computers with 60-minute sessions — are structurally excluded from browser-based youth employment tools.
**How it works:** An SMS-based interactive toolkit where a teen texts a keyword (e.g., "JOB" to a short code) and receives a step-by-step readiness flow: (1) age-based document checklist (what ID, permit, and bank account you need), (2) message scripts for talking to employers and requesting guardian signatures, (3) a "what jobs can I do at my age" guide based on VA labor law, and (4) links to the three nearest youth employment program offices by ZIP code. The entire flow operates via SMS with no app download, no account creation, and sub-150KB web fallback for smartphone users. Content draws from RVA Works' First Job Kit concept but delivers it through the only channel that reaches teens without broadband.
**Data sources:** DOLI work permit requirements (public); DMV Child ID requirements; VA labor law permitted tasks by age band; program office locations from C1_services_youth_workforce_programs.md.
**Research grounding:** Pain point P1.4 documents digital access constraints as "High" severity. B5_users_digital_equity.md establishes that 9.7% of Richmond residents lack internet subscriptions. RVA Works' First Job Kit was identified as the most differentiated content in any PS1 demo — but it was browser-only.
