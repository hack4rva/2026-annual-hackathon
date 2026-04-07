# What Works in Mid-Sized City Housing Dashboards: Proven Models to Track Supply, Subsidies, Waitlists, and Neighborhood Burden

## Executive Summary
Mid-sized U.S. cities (100,000–500,000 population) face acute housing affordability challenges, but no single "all-in-one" dashboard exists that perfectly captures every metric. Instead, the most effective implementations pair municipal production trackers with Public Housing Authority (PHA) program pages. Cities are strongest at tracking inventory and production (e.g., Madison, Raleigh), while PHAs are the authoritative sources for voucher counts, public housing inventory, and waitlist status (e.g., Durham Housing Authority). 

To build an effective public-facing presence, cities should anchor their dashboards to explicit numeric goals. For example, Madison, WI publicly tracks its progress toward 15,000 new homes by 2030 [1]. If long-term preservation is a priority, tracking permanent affordability is critical, as seen in Boulder, CO, which monitors its goal of making 15% of all homes permanently affordable [2] [3]. Property-level visibility, such as Oakland's interactive portfolio map [4] [5], boosts equity in siting and portfolio management. When reporting neighborhood-level cost burdens, transparency regarding HUD's Comprehensive Housing Affordability Strategy (CHAS) data and margins of error (MOEs) is essential to maintain credibility [6]. Ultimately, update cadence and data provenance are the true anchors of public trust.

## Who’s Doing It Best—Ranked Shortlist You Can Emulate
A handful of mid-sized cities offer replicable, evidence-backed models for production, portfolio, waitlist, and neighborhood-level affordability tracking. 

| Rank | Jurisdiction (Pop. Est.) | Dashboard Focus | Platform | Cadence / Geography | Data Openness & Transparency |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **Cambridge, MA** (~118k) | Housing Cost Burden & Affordability [7] [6] | Power BI | As CHAS releases; Neighborhood/tract | Strong documentation; explicit caution on overlapping ACS periods; links to Open Data [7] [6]. |
| **2** | **Madison, WI** (285,300) [8] | Housing Tracker (Production & LURAs) [1] | Power BI | Monthly; Citywide with approximate mapped locations | Lineage from Building Inspection and CDD; clear FAQs and definitions [1]. |
| **3** | **Oakland, CA** (~433k) | HCD Affordable Housing Portfolio Map [4] [5] | ArcGIS Experience | Rolling; Property-level, neighborhoods, Council districts | Public filters for AMI, status, and program types; clear definitions provided [5]. |
| **4** | **Raleigh, NC** (~470k) | Affordable Housing Progress + Map [9] [10] | Power BI + ArcGIS | Ongoing updates; Project points and citywide KPIs | Tracks progress toward 5,700 affordable homes by 2026; public embeds and PDF reports [9] [10]. |
| **5** | **St. Paul, MN** (~307k) | Housing Production Dashboard [11] | ArcGIS | Quarterly; Citywide | Downloadable dataset; clear field definitions tied to regulatory/financing triggers [11]. |
| **6** | **Boulder, CO** (~108k) | Affordable Housing Dashboard [3] | Custom/CMS | Annual; Citywide | Tracks progress to 15% permanently affordable homes; data sources (HHS, ATR, ACS) documented [3]. |
| **7** | **Durham, NC** (301,870) [12] | Durham Housing Dashboard + DHA [13] [14] | Custom (HR&A) + CMS | Rolling; County/city snapshots and tracts | Downloadable datasets; DHA separately lists 1,201 public housing units and 3,078 HCVs [13] [14]. |

*Key Takeaway*: Choose a reference model based on the specific outcome you must measure. Use Madison or Raleigh for production targets, Oakland for property-level preservation, Cambridge for neighborhood cost burdens, and Boulder for permanent affordability goals.

## Waitlists and Program Access—What’s Public and How to Integrate
Waitlist transparency is highly fragmented across the U.S. Status updates (open/closed) are far more common than exact applicant counts, and segmentation helps end-users navigate complex systems. PHA websites remain the authoritative source for this data.

| City | Public Housing Authority (PHA) | Programs Covered | Status & Segmentation | Update Cadence |
| :--- | :--- | :--- | :--- | :--- |
| **Aurora, CO** | Housing Authority of the City of Aurora | HCV, PBV, special vouchers | Clear "Closed/Open" status per program; FAQs provided [15] [16]. | Rolling updates [15]. |
| **Madison, WI** | Community Development Authority | Public Housing, HCV | Estimated wait times by bedroom size; residency preferences detailed [17]. | Posted dates [17]. |
| **Durham, NC** | Durham Housing Authority | Public Housing, HCV, PBV | Property-level openings; lottery instructions provided [18] [19]. | Notice dates [18]. |
| **Pittsburgh, PA** | Housing Authority of the City of Pittsburgh | HCV | Explicit "Waiting List — CLOSED" notices; status via phone/portal [20]. | As posted [20]. |
| **Orlando, FL** | Orlando Housing Authority | Public Housing, HCV | "Waiting lists are CLOSED"; portal access for current applicants [21]. | As posted [21]. |
| **Corpus Christi, TX** | Corpus Christi Housing Authority | HCV, PBV | HCV closed; PBV list open via application portal [22] [23]. | As posted [22]. |

*Key Takeaway*: If exact applicant counts aren't feasible, standardize and publish the last updated date, program type, eligibility, preference tiers, and expected timelines. Pull the PHA page title, status, and application links into a "How to Apply Now" panel on the main municipal dashboard.

## Neighborhood Affordability—Do CHAS Right
Neighborhood and tract-level cost-burden dashboards are most credible when they are based on HUD's CHAS data and clearly document their methodology. 

| City | Dashboard | ACS/CHAS Vintages | MOE Handling & Methodology | Geography |
| :--- | :--- | :--- | :--- | :--- |
| **Cambridge, MA** | Housing Cost Burden & Affordability (Power BI) [7] [6] | 2000, 2006-10, 2011-15, 2016-20, 2017-21, 2018-22 [6] | Explicit caution on comparing overlapping periods; clear definitions for 30% and 50% burden thresholds [6]. | Neighborhood / Tract |
| **Minneapolis, MN** | Income & Housing Dashboard / Fed Indicators [24] [25] | ACS 5-year, PUMS, CHAS [25] | Technical appendix explains methods and 3-year lagging averages to smooth measurement errors [25]. | Neighborhood / Tract |

*Key Takeaway*: Replicate Cambridge's approach by using the most current CHAS data (e.g., 2018-2022), including explicit notes on Margins of Error (MOEs), and avoiding side-by-side comparisons of overlapping ACS windows [6]. 

## Implementation Playbooks—How the Best Were Built
Effective dashboards pair credible data pipelines with routine refreshes and plain-English documentation.

### Data Pipelines and Governance
* **Madison, WI**: Uses Power BI fed by internal records from the Building Inspection and Community Development Divisions. It filters for units with Land Use Restriction Agreements (LURAs) of at least 30 years and updates monthly [1].
* **St. Paul, MN**: Combines permitting systems with affordability records, updating quarterly. "Affordable" is strictly defined by regulatory or financing triggers upon construction completion [11].
* **Boulder, CO**: Relies on the Department of Housing & Human Services Data System and Annual Tenant Reports (ATR), updated annually [3].
* **Oakland, CA**: Uses an ArcGIS Experience leveraging HCD portfolio data, allowing users to filter by AMI, project status, and investment type [5].

### Platform Guidance
Power BI is excellent for KPI storytelling, tracking targets, and providing program context (as seen in Madison and Raleigh) [1] [9]. However, for heavy geospatial mapping and property-level filtering, ArcGIS Experience or Instant Apps (as used by Oakland) are superior [5]. Always pair a lightweight summary page with separate map applications and provide CSV/API export options to mitigate platform limitations.

## Risk Radar—Pitfalls, Failure Cases, and How to Avoid Them
Most dashboard missteps are preventable with clear documentation and lightweight Quality Assurance (QA).

* **Double Counting Mixed-Program Units**: Dashboards that mix LIHTC, LURA, and PBV units without deduplication inflate inventory counts. *Solution*: Publish a data dictionary and deduplication rules.
* **Over-Interpreting Small-Area Data**: Tract-level burden maps that omit MOEs invite misinterpretation. *Solution*: Provide interpretive notes or aggregate to the neighborhood level where tract MOEs are too large [6].
* **Stale "Last Updated" Dates**: *Solution*: Automate refresh dates and surface them prominently on the landing page [1].
* **Heavy Maps on Mobile**: *Solution*: Offer a lightweight "KPI summary" page first, linking out to heavier interactive maps.

## Action Plan—90-Day Build for a High-Leverage Dashboard
You can ship a credible version 1.0 in three sprints by reusing proven patterns:
* **Sprint 1 (Weeks 1–3)**: Define explicit goals (e.g., X units by Y date, % permanently affordable). Choose metrics, inventory data sources (permitting, PHA, CHAS), and publish a draft data dictionary.
* **Sprint 2 (Weeks 4–7)**: Stand up a Power BI KPI page and an ArcGIS portfolio map. Implement download links and add "last updated" stamps and source credits.
* **Sprint 3 (Weeks 8–12)**: Integrate PHA waitlist status feeds. Add a CHAS cost-burden page with explicit MOE notes. Complete accessibility checks and launch FAQs.

## Accessibility, Performance, and Openness—Minimum Standards
Small technical changes materially improve reach and public trust.
* **Accessibility**: Ensure keyboard navigation, alt text on visuals, color-contrast-safe palettes, and plain-language captions.
* **Performance**: Lazy-load maps, pre-filter heavy layers, and serve a lightweight summary dashboard first.
* **Openness**: Provide CSV/API exports, use permissive data licenses, maintain a version/change log, and list a named contact for data inquiries [7].

## References

1. *City of Madison Housing Tracker | Department of Planning & Community & Economic Development | City of Madison, WI*. https://www.cityofmadison.com/dpced/housing-initiatives/housing-tracker
2. *Affordable Housing in Boulder*. https://bouldercolorado.gov/guide/affordable-housing-boulder
3. *Affordable Housing in the City of Boulder Data Dashboard | City of Boulder*. https://bouldercolorado.gov/boulder-measures/affordable-housing-boulder
4. *Housing Policies, Plans, and Data | City of Oakland, CA*. https://www.oaklandca.gov/Community/Community-Development/Affordable-Housing-Development/Housing-Policies-Plans-and-Data
5. *HCD Affordable Housing Portfolio*. https://www.oaklandca.gov/OaklandHCDAffordableHousingMap
6. *Housing Cost Burden & Affordability - Microsoft Power BI*. https://app.powerbigov.us/view?r=eyJrIjoiZDc3ZDMwNjktYzExYS00ZGZmLWE4ZjUtMjliNmE1NzE5Y2ZhIiwidCI6ImMwNmE4YmU3LTg0NzktNGQ3My1iMzUxLTkzYmM5YmE4Mjk1YyJ9
7. *
	Housing Data - CDD - City of Cambridge, Massachusetts
*. https://www.cambridgema.gov/CDD/factsandmaps/housingdata
8. *U.S. Census Bureau QuickFacts: Madison city, Wisconsin*. https://www.census.gov/quickfacts/fact/table/madisoncitywisconsin/LND110210
9. *City Launches New Affordable Housing Dashboard | Raleighnc.gov*. https://raleighnc.gov/housing/news/city-launches-new-affordable-housing-dashboard
10. *Affordable Housing Strategy | Raleighnc.gov*. https://raleighnc.gov/housing/services/affordable-housing-goals
11. *Housing Production | St Paul Open Information*. https://information.stpaul.gov/datasets/8c9ec90817944aa8a2b4e6c5db97a710_73/about
12. *Table - U.S. Census Bureau QuickFacts: Durham city, North Carolina*. https://www.census.gov/quickfacts/fact/table/durhamcitynorthcarolina/PST045224
13. *Durham Housing Authority*. https://www.durhamhousingauthority.org/
14. *Durham Housing Dashboard*. https://www.durhamhousingdashboard.com/
15. *
    
    Waitlist Status - AHA
  
  *. https://www.aurorahousing.org/housing/program-status
16. *
    
    Applicant Portal and Waitlist Info - AHA
  
  *. https://www.aurorahousing.org/housing/hcv-housing-choice-vouchers-program-section-8/applicant-portal
17. *Applicants - Housing Authority - DPCED - City of Madison, Wisconsin*. https://www.cityofmadison.com/dpced/housing/applicants/1652/
18. *Waitlists Available - Durham Housing Authority*. https://www.durhamhousingauthority.org/available-waitlists
19. *Waitlist Lottery Information - Durham Housing Authority*. https://www.durhamhousingauthority.org/waitlist-lottery-information
20. *HCV Waiting List - Housing Authority of the City of Pittsburgh*. https://hacp.org/housing/open-wait-list/
21. *Waiting List Information | Orlando Housing Authority*. https://www.orlandohousing.org/waiting-list-information
22. *Voucher Information - Corpus Christi Housing Authority*. https://hacc.org/voucher-information/
23. *Open Section 8 Waiting Lists in Corpus Christi, Texas*. https://affordablehousingonline.com/open-section-8-waiting-lists/Texas/Corpus-Christi
24. *Minneapolis Income & Housing Dashboard - City of Minneapolis*. https://www.minneapolismn.gov/government/government-data/datasource/household-neighborhood-income-dashboard/
25. *Minneapolis 2040 Housing Indicators: Technical Appendix*. https://www.minneapolisfed.org/~/media/assets/articles/2021/new-fed-tool-will-measure-zoning-reforms-impacts-on-housing-affordability-in-minneapolis/minneapolis-housing-indicators-technical-appendix.pdf
