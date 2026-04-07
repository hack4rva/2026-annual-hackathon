# Gap Analysis — City Budget Dashboard

**Pillar:** A Thriving City Hall
**Problem Statement (assigned):** Resident Service Navigation — Help residents find the right City service or department quickly, so requests get routed correctly the first time.
**Alternate Problem Statement:** Procurement Risk & Opportunity Review — Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Demo:** Richmond City Budget Dashboard (Tableau)
**Presenter:** Andre Toleris
**Review Date:** March 31, 2026

---

## Problem Grounding

**Problem statements (verbatim):**
1. "Help residents find the right City service or department quickly, so requests get routed correctly the first time."
2. "Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting."

**What the demo actually addresses:** "Making Richmond's financial data more visible and improving government transparency through data visualization."

**Primary user (per problem statements):** A resident who has a problem and doesn't know which department to contact (PS1), or a procurement officer verifying contract compliance across fragmented databases (PS2).

**Primary user (actual):** A resident or elected official who wants to understand where Richmond's budget money goes at the agency and line-item level.

**Pain addressed:** Budget data exists on the Open Data Portal but has never been visualized in a way that non-experts can navigate. This is a real transparency pain point but is not the pain either problem statement identifies.

---

## Problem Statement Alignment Assessment

### Against Service Navigation (PS1)
**Alignment: None.**

Service navigation is about routing — a resident has a problem and needs to reach the right department. The Budget Dashboard shows how much departments spend, not what they do or how to reach them. Knowing that the General Registrar's budget grew over 7 years does not help a resident who needs to register to vote. There is no conceptual bridge between "budget allocation view" and "request routing."

### Against Procurement Review (PS2)
**Alignment: Tangential.**

Budget data and contract data are adjacent but distinct. The General Fund budget dataset shows appropriations by agency and cost center. The City Contracts dataset (xqn7-jvv2) shows individual vendor contracts, expiration dates, and procurement types. The budget dashboard cannot tell a procurement officer whether a specific contract is valid, compliant, or expiring. However, the analytical approach (data visualization of public financial data) is transferable.

### Against Pillar Blue Sky Statement
**Alignment: Strong.**

The Thriving City Hall pillar's Blue Sky framing — "Making City services easier to find and use for residents and staff" — can be interpreted broadly to include fiscal transparency. The demo directly serves this broader vision by making budget data navigable for the first time.

---

## Data Source Map

| Data Claim in Demo | Real Source | Owner | Access | Cadence | Status |
|--------------------|------------|-------|--------|---------|--------|
| Budget data FY14–FY22 | Richmond Open Data Portal — City Budget General Fund (7nru-hsrx) | City of Richmond, Finance | data.richmondgov.com | Updated per fiscal year | ✅ Real data |
| Agency-to-pillar mapping | LLM-generated mapping | Demo team | Generated during hackathon | One-time | ⚠️ Unverified accuracy — no ground truth for agency↔pillar mapping |
| Budget terminology definitions | Manual creation by team | Demo team | Static | One-time | ✅ Real content — human-authored |

---

## Gap Analysis

### Gap 1 — No Service Routing Capability
The dashboard has zero service navigation functionality. A resident cannot enter a problem and be directed to a department. The drill-down goes from fiscal year → agency → cost center → line item, which is an analytical flow, not a routing flow.

**What would be needed:** A problem taxonomy (problem → department), a search/wizard interface, and routing links to 311 or rva.gov service pages. This is a different product.

### Gap 2 — No Contract-Level Visibility
The budget dashboard operates at the appropriation level, not the contract level. It cannot show individual contracts, vendor names, expiration dates, or compliance status. The Socrata City Contracts dataset (xqn7-jvv2) contains this information, but the demo uses the General Fund budget dataset instead.

**What would be needed:** Swap the data source from General Fund (7nru-hsrx) to City Contracts (xqn7-jvv2). Add vendor, expiration, and procurement type filters. This is architecturally feasible in Tableau.

### Gap 3 — Data Currency
The demo covers FY14–FY22. The presenter notes FY23–FY25 data can be plugged in without rebuilding, but the demo as shown is 4+ years behind. For fiscal transparency to be actionable, current-year data is essential.

### Gap 4 — LLM Pillar Mapping Unverified
The LLM-generated agency-to-pillar mapping is a novel feature but its accuracy is not validated. Mapping every city agency to a MAP pillar requires understanding of each pillar's scope and each agency's portfolio. An incorrect mapping misleads users who view budget data through the pillar lens.

---

## Opportunities

### Opportunity 1 — Pivot to Procurement Dashboard
The team's strongest asset is data visualization skill and familiarity with the Open Data Portal. Swapping the budget dataset for the City Contracts dataset (xqn7-jvv2) and adding expiration tracking would create a product that directly addresses PS2. The research corpus ranks a Contract Expiry Dashboard as the #1 recommended build for Thriving City Hall procurement (8–12 hour build, highest adoption potential).

### Opportunity 2 — Budget + Contracts Combined View
A combined dashboard showing both budget appropriations and active contracts per department would be novel. No existing Richmond tool connects spending authority (budget) with spending execution (contracts). This would serve both elected officials (budget oversight) and procurement staff (contract portfolio view).

### Opportunity 3 — Fiscal Transparency as a Standalone Product
If the hackathon scoring can accommodate Blue Sky alignment, the Budget Dashboard stands on its own merits as Richmond's first public budget visualization tool. The path forward is updating to FY23–FY25 data, validating the pillar mapping, and connecting with Budget & Strategic Planning for institutional ownership.
