# Outreach: Department of Finance + Zoning Administration — Research & Questions

### What we've confirmed through public sources

- **Mandatory registration sequence:** A new Richmond business must follow a specific order: (1) SCC entity registration, (2) IRS EIN, (3) Virginia Tax registration, (4) Certificate of Zoning Compliance, (5) BPOL application. The CZC is a hard prerequisite for BPOL — this dependency is discovered only mid-application by most entrepreneurs and is not prominently documented in any startup guide.
- **CZC details:** Home occupation CZC costs $50 and typically takes ~10 business days after fee payment. Applications must go through the EnerGov Online Permit Portal (OPP). Commercial property CZC fees follow the Zoning Fees schedule, but no processing time SLA for commercial applications is published.
- **BPOL rate structure:** Businesses with gross receipts ≤$5,000 pay $0; $5,001–$250,000 pay a $30 flat fee; above $250,000, rates vary by type ($0.20/$100 for retail, $0.58/$100 for professional services, $0.36/$100 for personal service/restaurant, $0.19/$100 for contractors, $0.22/$100 for wholesale). Additional flat fees apply for beer & wine ($75), mixed beverages ($200–$500 by seating), peddlers ($300), and others.
- **BPOL threshold change:** Beginning January 1, 2026, the gross receipts threshold for rate-based BPOL tax doubles from $250,000 to $500,000.
- **30-day deadline with penalty:** New businesses must obtain a BPOL within 30 days of opening. Late penalties are 10% or $10 (whichever is greater), with 10% annual interest.
- **RVA Business Portal:** Modernized January 2025, upgraded January 2026 with features including prior-year asset copy, bill/payment history, exception dashboard, and document management. No documented public API or webhook capability exists — the portal is user-facing filing and payment only.
- **Checklist is PDF-only:** The City's Business License Application Checklist ("25' New Business License Checklist & Application.pdf") exists solely as a static PDF. No structured, machine-readable version (JSON, CSV, XML) was found on any public city channel.
- **No business-type-to-permits mapping:** No single, canonical, machine-readable resource maps Richmond business types to their full set of required permits, licenses, and tax obligations. The information is fragmented across Finance's BPOL pages, the checklist PDF, Zoning/OPP webpages, and individual agency sites.
- **Skilled trades path documented:** Contractors must follow: DPOR license (with 8-hour pre-license course) → Virginia Workers' Compensation compliance (including subcontractor employees, Form 61A) → CZC → BPOL with proof of state license and workers' comp.
- **SCC data is accessible:** Virginia SCC publishes entity data (corporations, LLCs, officers, amendments, mergers) on the Virginia Open Data Portal with both CKAN API access and CSV/XLSX bulk downloads — a usable data source for prototypes.
- **Cross-agency pre-fill is mixed:** Pre-populating BPOL/CZC applications from SCC data is technically feasible with integrations and MOUs. However, using IRS EIN application data is largely blocked by federal confidentiality rules (26 U.S.C. § 6103).
- **Digital-first, no paper fallback:** For 2025 BPOL filings, there are no paper forms for manual filing. The City mitigates this with in-person assistance at City Hall, virtual appointments, 311 support, and public library computer access.
- **No Virginia wizard exists:** No Virginia city or the state itself has deployed a personalized step-by-step business startup wizard comparable to NYC's MyCity Business or Chicago's Business Direct. Richmond's OPP/EnerGov is a transactional permits portal, not a cross-agency requirement wizard. Virginia Business One Stop references a future "New Business Wizard" but has not shipped one.

### What we haven't been able to determine — and where we need your help

We have **five specific questions** that only your teams can answer:

1. **CZC commercial processing time:** Home occupation CZC takes ~10 business days, but we found no published processing time or SLA for commercial property CZC applications. What is the typical turnaround, and does it vary by zoning district or application complexity?

2. **Where entrepreneurs abandon the process:** No public data exists on where first-time business owners most commonly stall or give up during the registration sequence. From your experience processing applications — is it the CZC step, the multi-agency registration sequence, industry-specific permits, or something else? Even informal observations would help us understand the baseline.

3. **Internal business-type-to-permits mapping:** We confirmed that no published, machine-readable resource maps business types to their full set of Richmond requirements. Does any internal reference or staff knowledge base exist — even an informal one — that connects business categories to their required permits, licenses, and tax obligations? This would be the single most valuable dataset for a business startup wizard.

4. **Structured checklist data:** The Business License Application Checklist is a 21-item static PDF. Could the underlying data be made available in a structured format (spreadsheet, CSV), or is the PDF the sole authoritative source? A machine-readable version would allow prototypes to generate personalized checklists based on business type.

5. **RVA Business Portal integration potential:** The January 2026 portal upgrade added user-facing features but no documented API or webhook. Are there plans — or would there be openness — to expose any data endpoint (even read-only BPOL rate schedules) that a third-party navigation tool could use to provide real-time cost estimates to entrepreneurs?

### Why this matters

We've been generating new solution ideas grounded in the research. The highest-scoring concept for the small business navigation problem is:

- **Richmond Business Launch Wizard** (Pillar Award: 90/105, Mayor's Choice: 92/105) — the single highest-scoring idea across both Thriving Economy problem statements. A personalized, sequenced, Richmond-specific step-by-step tool that asks 5–8 questions about the business (type, location, employees, industry) and generates the complete ordered checklist of registrations, permits, costs, and timelines. Modeled on NYC's MyCity Business, which achieves sustained adoption through transactionality and cross-agency profiles. No Virginia city has built one — Richmond would be first.
- **Total Startup Cost Calculator** (Pillar: 82, Mayor's Choice: 86) — a tool that aggregates the currently unknowable total cost and timeline of starting a specific business type in Richmond (SCC filing + EIN + CZC fee + BPOL rate + industry permits), giving entrepreneurs a consolidated estimate that no government source currently provides.
- **Zoning Compliance Pre-Check** (Pillar: 82, Mayor's Choice: 82) — a self-service tool that lets entrepreneurs verify whether their intended business type is allowed at a specific address before investing time in the CZC application, reducing surprise rejections and wasted effort.

None of these require replacing existing systems — they build navigation and cost-estimation layers on top of the current BPOL, CZC, and OPP infrastructure.

We're not asking for any commitment — just trying to understand what's technically possible so we can give the Mayor's office a realistic assessment of which prototypes could move to a pilot. Happy to share the prototypes or our full research.

---

## Context for the SME
The research identifies Richmond's business startup process as a "journey of surprises" where hard dependencies (CZC before BPOL) are discovered only mid-application. The fundamental blocker for a startup wizard is the absence of a machine-readable mapping from business types to requirements. If Finance or Zoning has even an informal internal reference — a spreadsheet staff consult, a training document for new hires — it could serve as the rules engine for a prototype. The RVA Business Portal upgrade shows the City is investing in digital tools; the question is whether that investment could extend to structured data access for complementary tools that drive more entrepreneurs to complete the process (and generate more BPOL revenue).

## Why This Person
The Commissioner of the Revenue / Business License Division owns the BPOL process, rate schedules, and the Business License Checklist — the core data needed for a startup wizard. Zoning Administration owns the CZC process and processing times — the step that creates the most surprise for entrepreneurs who discover it only after starting the BPOL application. Both are needed because the wizard must sequence across their domains: CZC first, then BPOL.

## Data Questions (internal tracking)
- [ ] Q1: CZC commercial processing time / SLA by property type
- [ ] Q2: Common registration abandonment points (staff observations)
- [ ] Q3: Internal business-type → permits/licenses/taxes mapping (any format)
- [ ] Q4: Business License Checklist as structured data (spreadsheet/CSV)
- [ ] Q5: RVA Business Portal API/webhook plans or openness to data access

## Research Sources
- `_research-answers/sb_q1_system_data.md` — Registration sequence, BPOL rates, CZC, portal API, checklist format, SCC data
- `_research-answers/sb_q2_usage_equity.md` — Skilled trades path, 311 business calls, digital divide, language demographics
- `_research-answers/sb_q3_prior_art.md` — NYC MyCity, Chicago, Boston models, data pre-fill feasibility, OMBD geographic reach
- `_shared-small-business/jtbd_analysis.md` — Full JTBD + 19 answered questions (11 Confirmed, 4 Partial, 4 Still Unknown)
- `NEW_IDEAS_RUBRIC_GRADES.md` — Scored solution ideas (7 PS2 survivors of 12)
