# Implementation Reality Check — A Thriving Economy

**Pillar:** A Thriving Economy (Pillar 4)
**Ideas scored:** 10 (5 demos, 3 NEW_IDEAS, 2 BLUESKY)
**Rubric:** `IMPLEMENTATION_REALITY_RUBRIC.md` (5 dimensions × 1–5 scale, max 25)
**Date:** April 1, 2026

---

## Key Tech Facts (Grounding)

- **Socrata:** City Contracts `xqn7-jvv2` (monthly refresh, SODA API), Payment Register `5y73-enav`.
- **OpenGov:** Procurement portal — public browsing, **no bulk API**.
- **B2GNow / OMBD:** Vendor directory and certification data — web portal only, **no API**.
- **eVA:** Virginia procurement — Open Data Portal publishes daily CSV.
- **EnerGov:** City permits and inspections — **no public API**.
- **RVA Business Portal:** BPOL/BTPP online applications — **no API**.
- **OMBD operating model:** Reactive, one-at-a-time vendor support; institutional knowledge lives in staff heads, not systems.
- **City AI policy:** Permits chatbots and data analysis tools with DIT review.

---

## Summary Table

| # | Idea | Source | Own | Data | Tech | Integ | Maint | **Total** | **Tier** |
|---|------|--------|:---:|:----:|:----:|:-----:|:-----:|:---------:|:--------:|
| 1 | Richmond Spend Mirror | BLUESKY | 4 | 5 | 4 | 5 | 5 | **23** | **S** |
| 2 | Vendor Onboarding Wizard | NEW_IDEAS | 4 | 3 | 4 | 5 | 4 | **20** | **A** |
| 3 | Richmond Contract Navigator | Demo | 4 | 4 | 3 | 5 | 3 | **19** | **A** |
| 4 | Richmond Business Launch Wizard | NEW_IDEAS | 3 | 3 | 4 | 5 | 3 | **18** | **A** |
| 5 | CareerBridge | Demo | 2 | 3 | 3 | 5 | 3 | **16** | **A** |
| 6 | Pivot Delta Map | BLUESKY | 3 | 2 | 4 | 5 | 2 | **16** | **A** |
| 7 | OMBD Proactive Match Dashboard | NEW_IDEAS | 5 | 2 | 3 | 2 | 3 | **15** | **B** |
| 8 | You Get What You Give RVA | Demo | 2 | 3 | 3 | 5 | 2 | **15** | **B** |
| 9 | TradePath RVA | Demo | 2 | 2 | 4 | 5 | 2 | **15** | **B** |
| 10 | iBuild | Demo | 3 | 2 | 2 | 2 | 2 | **11** | **B** |

---

## Detailed Scores

---

### 1. Richmond Spend Mirror — Source: BLUESKY

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 4 | OMBD's mandate explicitly includes helping MBEs discover and understand City contracting; they do vendor outreach today, but their capacity to manage a web tool is unverified. |
| Data Readiness | 5 | Entire product runs on Socrata `xqn7-jvv2` (public SODA API, monthly refresh) and public NAICS reference tables — both confirmed, maintained, and API-accessible. |
| Tech Stack Fit | 4 | Commodity web app consuming a REST API; could deploy on GitHub Pages/Netlify with a small serverless backend; no enterprise procurement needed. |
| Integration Surface | 5 | Completely standalone — reads Socrata, links out to OpenGov/eVA for live solicitations; zero City system changes required. |
| Maintenance Burden | 5 | Socrata data refreshes automatically; NAICS mapping is stable (updates annually at federal level); tool shows "last updated" and degrades gracefully if data lags. |
| **Total** | **23** | **Tier S** |

**Key blocker:** NAICS/NIGP plain-language mapping table needs initial manual curation (weekend scope for hackathon, modest ongoing effort).
**Key accelerator:** The only idea in this pillar whose primary data source is a confirmed, public, actively maintained API — no partnerships, MOUs, or data exports required.

---

### 2. Vendor Onboarding Wizard (5-Step Path) — Source: NEW_IDEAS

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 4 | OMBD already walks vendors through this sequence one-at-a-time; a wizard automates their existing workflow; mandate is clear, capacity to maintain a web tool is plausible but unverified. |
| Data Readiness | 3 | Registration requirements are published across OMBD, SBSD, BidNet, iSupplier, and BPOL websites — exists but scattered; requires one-time compilation into structured steps. |
| Tech Stack Fit | 4 | Static or near-static step-by-step wizard; standard web tech; no LLM, no enterprise software, no DIT procurement cycle. |
| Integration Surface | 5 | Standalone — outputs a sequenced checklist linking to each portal; no read/write to any City system. |
| Maintenance Burden | 4 | Registration requirements change infrequently (SBSD SWaM process, BidNet registration); monthly link-check and quarterly content review would suffice; tool degrades gracefully if slightly stale. |
| **Total** | **20** | **Tier A** |

**Key blocker:** SBSD's SWaM certification timeline (~60 business days) is the biggest real-world bottleneck but is outside the tool's control — the wizard can only document it, not fix it.
**Key accelerator:** OMBD staff already carry this sequence in their heads — the wizard codifies existing tacit knowledge rather than inventing new process.

---

### 3. Richmond Contract Navigator — Source: Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 4 | OMBD and Department of Procurement Services jointly serve this space; OMBD has clear mandate to increase MBE participation; capacity for a vendor-facing web tool is unknown. |
| Data Readiness | 4 | Historical contract awards from Socrata `xqn7-jvv2` are public and API-accessible; active solicitations from OpenGov are browseable but have no bulk API, limiting real-time matching to awards data. |
| Tech Stack Fit | 3 | Requires LLM service for plain-language matching and enrichment (AI policy permits with DIT review) plus commodity cloud hosting — one new low-cost SaaS dependency. |
| Integration Surface | 5 | Reads only from Socrata public API; email alerts are self-contained; no City system modifications needed. |
| Maintenance Burden | 3 | LLM prompts and matching logic need periodic tuning; email delivery infrastructure needs monitoring; Socrata data updates automatically but match quality depends on prompt maintenance. |
| **Total** | **19** | **Tier A** |

**Key blocker:** OpenGov's lack of a bulk API means the "live matching to active solicitations" promise is limited to what Socrata awards data can proxy; true real-time matching requires a data feed that doesn't exist today.
**Key accelerator:** Working prototype already demonstrated with real Socrata data; glossary, readiness roadmap, and vendor education features are purely content — no data dependency.

---

### 4. Richmond Business Launch Wizard — Source: NEW_IDEAS

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | DED or the City's recently hired project facilitator are plausible owners; the problem spans PDR (zoning), Finance (BPOL), and state agencies — no single department's stated priority today. |
| Data Readiness | 3 | The City Business License Application Checklist, SCC filing requirements, BPOL rate schedule, and zoning ordinance all exist as published PDFs; requires one-time digitization into a rules engine. |
| Tech Stack Fit | 4 | Step-by-step wizard with a rules engine is standard web development; no LLM required; could host on commodity cloud or City CMS. |
| Integration Surface | 5 | Standalone — generates a personalized checklist with links to agency portals; no real-time reads or writes to any City system. |
| Maintenance Burden | 3 | Rules engine needs updates when zoning ordinances, fee schedules, or state requirements change (estimate: quarterly); tool shows stale but valid info rather than breaking if updates lag. |
| **Total** | **18** | **Tier A** |

**Key blocker:** The rules engine requires encoding hard dependencies (CZC before BPOL, SCC before EIN) from knowledge currently held by staff and scattered PDFs — substantial initial curation, not trivial automation.
**Key accelerator:** NYC MyCity is proven prior art; the wizard is entirely informational with no system integration, so it can launch and iterate without any City IT involvement.

---

### 5. CareerBridge — Source: Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 2 | Career matching for residents sits in the workforce development gap between DED, the Office of Community Wealth Building, and the Virginia Employment Commission — no single City department owns career navigation. |
| Data Readiness | 3 | Federal career data (O*NET, BLS) is public and API-accessible; Virginia workforce projections are published; Richmond-specific training programs and barrier resources (childcare subsidies, transit) require manual curation. |
| Tech Stack Fit | 3 | Web/mobile app with AI-powered career matching and follow-up Q&A requires an LLM service plus commodity cloud — one new SaaS dependency with DIT review. |
| Integration Surface | 5 | Standalone — reads public federal APIs and curated local data; outputs to browser; no City system integration. |
| Maintenance Burden | 3 | Federal career data auto-updates; but local training programs, resource links, and barrier support services change regularly and need periodic review; AI Q&A layer needs prompt monitoring. |
| **Total** | **16** | **Tier A** |

**Key blocker:** No City department currently owns career navigation for the general population; without a departmental champion, the tool becomes an orphan after the hackathon.
**Key accelerator:** Working prototype already demonstrated with quiz flow, card interface, and AI Q&A; the product is polished enough to test with real users immediately.

---

### 6. Pivot Delta Map (Only-What-Changed) — Source: BLUESKY

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | Same ownership landscape as the Business Launch Wizard — plausibly DED or the project facilitator; addresses a real gap but is no department's stated priority. |
| Data Readiness | 2 | Requires the same base rules as the Launch Wizard plus industry-specific add-on rules from VDH (food), ABC (alcohol), DPOR (contractor licensing), and payroll/EIN triggers — significantly more curation across more agencies, some at state level. |
| Tech Stack Fit | 4 | Rules-based questionnaire outputting a delta checklist is standard web development; no exotic dependencies. |
| Integration Surface | 5 | Standalone — outputs a numbered delta path with links to transaction portals; no system integration required. |
| Maintenance Burden | 2 | Every industry add-on (food, alcohol, contractor, signage, employees) is a separate rules track maintained by a different agency; when any one changes process, the delta logic breaks silently for that scenario. |
| **Total** | **16** | **Tier A** |

**Key blocker:** The rules surface area is much larger than the Launch Wizard — VDH food plan review paths, ABC license families, DPOR contractor categories each have their own update cycles; maintaining correctness across all tracks requires a dedicated owner.
**Key accelerator:** Structurally different from the Launch Wizard (delta vs. cold-start), so the two could share a rules engine while serving distinct user journeys — build the Launch Wizard first, then extend.

---

### 7. OMBD Proactive Match Dashboard — Source: NEW_IDEAS

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 5 | OMBD's mission is literally to increase MBE participation in City contracting; staff already perform this matching manually; this automates their existing workflow. |
| Data Readiness | 2 | Socrata `xqn7-jvv2` historical awards are public and API-accessible, but the critical vendor directory lives in B2GNow (no API) and active solicitations live in OpenGov (no bulk API) — the two datasets the product depends on most are locked. |
| Tech Stack Fit | 3 | Staff-facing dashboard with email/SMS outreach is commodity web + Twilio; within AI policy scope for data analysis; no enterprise procurement for the tool itself. |
| Integration Surface | 2 | Requires read access to B2GNow vendor directory and OpenGov solicitation feed — both closed systems without APIs; formal data export or MOU with the vendor is necessary. |
| Maintenance Burden | 3 | If data connections are established, matching logic is automatable with nightly pulls; but vendor data quality in B2GNow and solicitation feed reliability need ongoing monitoring. |
| **Total** | **15** | **Tier B** |

**Key blocker:** B2GNow has no API. The entire value proposition — automated vendor-to-solicitation matching — depends on accessing data locked behind a vendor portal that was never designed for programmatic access.
**Key accelerator:** Strongest ownership score in the pillar; OMBD staff would be immediate, motivated users; if the B2GNow data export problem is solved (even via scheduled CSV dump), the rest is straightforward.

---

### 8. You Get What You Give RVA — Source: Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 2 | Business-to-business networking is not a City government function; DED might loosely support it, but this naturally lives with the Chamber of Commerce, SCORE, or a nonprofit — cross-department negotiation at minimum. |
| Data Readiness | 3 | SCC data (3.5M VA businesses) is public and downloadable; but the enrichment and categorization was a one-time Claude AI batch process — not automated, not repeatable without re-running LLM processing on the full dataset. |
| Tech Stack Fit | 3 | Web app with LLM-powered matching requires commodity cloud + AI service; no enterprise procurement but ongoing LLM costs for each query. |
| Integration Surface | 5 | Completely standalone — reads SCC public data, outputs to browser; no City system interaction whatsoever. |
| Maintenance Burden | 2 | SCC data changes constantly (businesses form, dissolve, move); the AI-enriched categorization layer goes stale without periodic re-ingestion and re-processing; no automated pipeline exists. |
| **Total** | **15** | **Tier B** |

**Key blocker:** No credible City government owner — the product is valuable but belongs in the economic development ecosystem, not on a City department's roadmap.
**Key accelerator:** Working prototype with a live site; SCC data is freely available; the concept is immediately testable with real Richmond business owners.

---

### 9. TradePath RVA — Source: Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 2 | Workforce development + micro-lending spans DED, Office of Community Wealth Building, and external partners (People's Advantage FCU); the revolving loan fund is a credit union function, not City government. |
| Data Readiness | 2 | Training program data is fragmented across community colleges and nonprofits; barrier resources (childcare, transportation) are scattered and unstandardized; job market data from BLS/VEC is public but generic. |
| Tech Stack Fit | 4 | Mobile-first, multilingual web app is standard web development; no exotic dependencies; People's Advantage FCU partnership handles the financial infrastructure. |
| Integration Surface | 5 | Standalone — links to external training programs and resources; no City system integration; loan origination is handled entirely by the credit union partner. |
| Maintenance Burden | 2 | Training programs, job listings, resource links, and barrier support services all require ongoing curation; the revolving loan fund is an operational commitment requiring sustained institutional partnership. |
| **Total** | **15** | **Tier B** |

**Key blocker:** The $50K revolving loan fund and People's Advantage FCU partnership are the product's strongest differentiator but also its most fragile dependency — if the institutional partnership lapses, the core value proposition disappears.
**Key accelerator:** Real financial commitment from People's Advantage FCU ($50K); live site already exists; the team clearly talked to real residents about real barriers.

---

### 10. iBuild — Source: Demo

| Dimension | Score | Rationale |
|-----------|:-----:|-----------|
| Ownership Clarity | 3 | The problem spans PDR (zoning), Finance (BPOL), and Building Inspections; the City's recently hired project facilitator validates the need for a unified view, but no department owns a "startup wizard" product. |
| Data Readiness | 2 | Zoning GIS layers may be on GeoHub, but permit status lives in EnerGov (no public API), BPOL lives in RVA Business Portal (no API), and the core CZC/CO decision logic lives in PDFs and staff heads. |
| Tech Stack Fit | 2 | The live app runs on `plugins-ibuild.ibf-internal.red` — a proprietary third-party platform the City does not operate; aspires to EnerGov integration that would require enterprise vendor involvement. |
| Integration Surface | 2 | The recommendations call for deep-linking into EnerGov, RVA Business Portal, SCC, and Virginia Tax — all closed or limited systems; real-time status tracking requires integration the City's current vendors don't support. |
| Maintenance Burden | 2 | Business rules (zoning code, fee schedules, permit requirements, CZC vs CO logic) change with code amendments and Council actions; requires dedicated maintenance to avoid giving users incorrect regulatory guidance. |
| **Total** | **11** | **Tier B** |

**Key blocker:** The aspiration for real-time permit status tracking requires EnerGov API access that doesn't exist; the proprietary platform adds a vendor dependency the City doesn't control.
**Key accelerator:** The pain points are extremely well-documented (iBuild research is the most thorough in the pillar); the City's own hiring of a project facilitator confirms institutional recognition of the problem.

---

## Pillar Observations

### 1. The standalone pattern dominates

Eight of ten ideas score 5 on Integration Surface — they read public data and link out to agency portals without touching City systems. This is the pillar's structural advantage: procurement and business licensing information is *published* (even if scattered), so tools can add value by organizing, translating, and sequencing it without requiring IT cooperation. The two exceptions (OMBD Proactive Match Dashboard and iBuild) are also the two with the lowest total scores, dragged down precisely by their integration ambitions.

### 2. Data access is the dividing line

The single factor that separates Tier S from Tier B in this pillar is whether the core data source has a public API. Richmond Spend Mirror runs entirely on Socrata `xqn7-jvv2` — a confirmed, maintained, API-accessible dataset — and scores 23. OMBD Proactive Match Dashboard has the best ownership in the pillar (score of 5) but needs B2GNow vendor data that has no API, dropping it to 15. The B2GNow API gap is the most consequential infrastructure blocker for the entire MBE Contracting Discovery problem statement.

### 3. Ownership is the pillar's weakest dimension

Six of ten ideas score 3 or below on Ownership Clarity. PS2 (Small Business Navigation) has no named City department that owns the end-to-end entrepreneur journey — it's split across PDR, Finance, and state agencies. PS1 (MBE Contracting Discovery) is better because OMBD exists, but OMBD's reactive operating model and small staff create capacity questions. The workforce-adjacent ideas (TradePath, CareerBridge) score lowest because career navigation isn't a City function at all.

### 4. The wizard pattern is the safest bet

Three ideas (Vendor Onboarding Wizard, Business Launch Wizard, Pivot Delta Map) share the same architecture: a rules-based questionnaire that outputs a sequenced checklist with links. This pattern scores consistently well because it requires no integrations, no LLMs, and no real-time data feeds — just careful curation of published requirements. The risk is maintenance: rules engines that encode regulatory logic must be updated when regulations change, and silent staleness is worse than obvious failure.

### 5. Build order matters

Several ideas share data sources or rules infrastructure. A sensible build order:
1. **Richmond Spend Mirror** first — highest score, lowest risk, immediately useful, proves the Socrata data pipeline.
2. **Vendor Onboarding Wizard** second — codifies OMBD's tacit knowledge, serves as the "what to do next" handoff from Spend Mirror.
3. **Richmond Business Launch Wizard** third — extends the wizard pattern to PS2, using the same tech stack.
4. **Richmond Contract Navigator** fourth — builds on the Socrata pipeline from Spend Mirror, adds AI matching layer.
5. **Pivot Delta Map** fifth — extends Business Launch Wizard's rules engine to mid-journey changes.

### 6. The B2GNow problem gates the most impactful PS1 idea

OMBD Proactive Match Dashboard is the only idea where the department is a perfect owner (score 5) but the data is completely locked (score 2). If the City negotiated a scheduled CSV export from B2GNow or built a lightweight vendor registry alongside it, the dashboard's total would jump from 15 to 20+. This is worth raising with DIT as a strategic infrastructure investment, not just a hackathon data request.
