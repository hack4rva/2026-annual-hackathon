# Mid-Sized City Budget Dashboards that Move the Needle: What Works, What Doesn't, and How to Measure It

## Executive Summary
In mid-sized U.S. cities (100,000–500,000 population), the most successful municipal budget transparency initiatives do not rely on a single dashboard. Instead, they deploy a blended ecosystem of tools: open data catalogs for raw transparency, interactive budget books for narrative context, and simulation tools for participatory engagement. 

Key findings from deployments between 2018 and 2026 reveal that while platforms like Socrata, OpenGov, and Tableau Public successfully expose financial data, **participatory tools (like Balancing Act) are the most likely to directly influence budget allocations**. However, transparency alone does not cure governance blind spots; cities like Pittsburgh have deployed award-winning portals yet still faced internal data asymmetries that caught city councils off guard [1]. For cities like Richmond, Virginia, the immediate opportunity lies in refreshing stale datasets, consolidating fragmented dashboards, and publishing public web analytics to measure true civic reach beyond vanity page views.

## 1) What "Success" Looks Like in Mid-Sized Cities
In the context of mid-sized municipalities, a "successful" budget dashboard is one that pairs up-to-date, multi-app finance portals with participatory tools, while publishing engagement analytics that city councils and local media actually use. 

Success criteria include:
* **Data Freshness and Cadence:** Daily, weekly, or quarterly automated refreshes across both operating and capital improvement (CIP) budgets build trust.
* **Breadth of Modules:** A complete suite (budget explorer, checkbook, payroll, CIP maps, and narrative stories) improves overall budget literacy.
* **Engagement Capture:** Tools that capture simulations and public comments directly influence policy decisions.
* **Public Analytics:** Moving beyond raw views to measure return rates, session duration, and referrals proves actual ROI.
* **External Validation:** Media citations, civic tech uptake, and awards (e.g., GFOA or Digital Cities) provide credibility.

## 2) Mid-Sized Leaders and What They're Doing
A blended platform stack is the norm among leading mid-sized cities. Analytics visibility varies widely by vendor, with Socrata and Tableau providing public counters, while participatory tools provide submission logs.

| City | Population | Platform(s) | Notable Features | Documented Impact & Evidence |
| :--- | :--- | :--- | :--- | :--- |
| **Pittsburgh, PA** | ~300k | Tyler/Socrata, EngagePGH, ArcGIS | Daily/biweekly finance refresh; multi-app portal (Budget Explorer, Checkbook PGH) [2]. | Mixed: Tyler case study notes community group use [2], but 2026 press flags internal data access gaps leading to a $40M shortfall surprise [1]. |
| **Tampa, FL** | ~380k | OpenGov | Online budget book with narratives; citywide performance metrics [3]. | Moderate: Vendor narratives highlight department metrics and formal online hearings [4] [5]. |
| **Norfolk, VA** | ~240k | Balancing Act | Operating/CIP simulations; comment capture [6]. | Moderate: City explicitly states public input informs the budget [7]. |
| **Oakland, CA** | ~440k | Tyler/Socrata, Custom | Interactive budget explorer [8]; civic "Open Budget Oakland" explainers [9]. | Moderate: Strong civic tech partnership and press utilization [9]. |
| **Raleigh, NC** | ~470k | Power BI | FY26 dashboard; program catalog; formal engagement reports [10]. | Moderate: Formal engagement reporting supplements the dashboard [10]. |
| **Rancho Cucamonga, CA** | ~175k | Socrata | Checkbook, budget, and KPI dashboards [11]. | Light: Recognized in Digital Cities awards for transparency [11]. |

*Takeaway:* No single platform does it all. Cities achieve the highest literacy and engagement when they combine an open data backend (Socrata/OpenGov) with a participatory frontend (Balancing Act/EngagePGH).

## 3) Richmond, VA — Current-State, Gaps, and 90-Day Wins
Richmond, Virginia (population ~233k–240k) [12] [13] has the right components for a robust transparency ecosystem, but currently suffers from data staleness and fragmentation. 

### What Exists (as of 2026-04-02)
* **Socrata (Tyler Technologies):** The "City Budget - General Fund" dataset (7nru-hsrx) shows 13.9K views and 988 downloads, but was last updated on July 19, 2021 [14] [15]. A related "Recap" view has 1,472 views (updated 2025-01-15) [16], and a "Budget - Year to Year Comparison" has 743 views (updated 2021-07-19) [17].
* **Tableau Public:** The "Richmond Public Budget Dashboard" was recently published on March 28, 2026, and currently shows 166 views [18].
* **ArcGIS/Esri:** A Capital Improvement Program (CIP) Dashboard is available in Beta, with a quarterly update cadence noted on the city's website [19] [20].
* **Governance:** A September 2025 City Council ordinance mandates publishing departmental budget requests and side-by-side comparisons online by January 15 of each year to improve transparency [21].

### 90-Day Action Plan for Richmond
1. **Refresh Core Data:** Immediately update the Socrata General Fund dataset with FY24–FY27 data and repoint the Tableau dashboard to this live OData feed.
2. **Consolidate the Hub:** Create a single budget landing page that embeds the Tableau visualization and deep-links to the checkbook, contracts, and the CIP ArcGIS dashboard.
3. **Launch Analytics:** Configure Google Analytics 4 (GA4) across the hub and publish a quarterly analytics card (unique users, return rate, top referrers).
4. **Comms Sprint:** Run a 4-week promotional push via press releases, social media, and councilmember newsletters to drive traffic to the newly refreshed Tableau dashboard.

## 4) When Dashboards Influence Budgets
The clearest causal pathways from dashboards to actual budget influence run through participatory tools that feature published feedback loops. Transparency alone is merely table stakes.

* **Direct Policy Influence:** In Lawrence, KS, the city used Balancing Act to collect nearly 300 responses. The simulation results showed the community prioritized affordable housing and homelessness programs, leading the city to allocate dollars to a new homeless programs department [22].
* **Informing Council Decisions:** In Cleveland, OH, media coverage lauded the city's 2026 budget for finally including side-by-side "budget vs. actuals" columns—a feature mandated by the council to make hearings easier to follow and compare year-over-year changes [23].
* **The Limits of Dashboards:** Pittsburgh's Fiscal Focus portal provides deep transparency [2], yet in early 2026, the City Council was caught off guard by a potential $40 million deficit. Council members blamed a "data dearth" and a lack of granular reasoning behind the administration's numbers, proving that public dashboards must be paired with internal data equity and communication [1].

## 5) Measure What Matters
Public analytics are often patchy, relying on vendor-specific vanity metrics (like raw page views). Cities must build their own measurement spine to calibrate outreach and prove ROI. New Orleans sets a strong precedent by publishing its unified Google Analytics website data as an open dataset [24] [25].

| Metric | Source | Target Cadence | Strategic Use |
| :--- | :--- | :--- | :--- |
| **Unique users, return rate, session duration** | GA4 across hub/embeds | Quarterly | Measure outreach ROI and content tuning. |
| **Dataset views/downloads** | Socrata counters; Admin "Asset Access" logs | Monthly | Identify data demand signals and popular topics. |
| **Visualization views** | Tableau Public counters | Monthly | Gauge topic resonance and visual clarity. |
| **Participation totals & comments** | Balancing Act / Polco admin exports | Per campaign | Conduct influence and equity analysis for budget hearings. |
| **Hearing references** | City Council Minutes / Legistar | Quarterly | Track direct influence on legislative decisions. |

*Takeaway:* Publish a 2-page "Budget Transparency Scorecard" quarterly and add it to council packets to normalize evidence-based engagement claims.

## 6) Platform Fit and Design Choices
No single vendor covers all success criteria. Mid-sized cities should combine platforms and lock in refresh SLAs and accessibility standards.

* **Engagement:** Use Balancing Act (or equivalent) for simulations and comment capture [26] [27].
* **Transparency/Catalog:** Use Tyler/Socrata [28] or OpenGov [29] for raw data hosting and API access.
* **Narrative:** Use Tableau or Power BI for "Budget in Brief" stories and side-by-side comparators.
* **CIP/Mapping:** Use ArcGIS Dashboards for capital projects, ensuring quarterly refreshes [30].
* **Accessibility:** Leverage Tyler's WCAG 2.2 AA commitments [31] and Tableau/ArcGIS accessible design guides (e.g., alt text, color-contrast checks) [32] [33].

## 7) Risk, Controls, and Failure Modes
* **Staleness:** The biggest risk to public trust is outdated data (e.g., Richmond's 2021 Socrata data) [14]. Define strict SLAs per dataset and use auto-refresh pipelines.
* **Internal Asymmetry:** Ensure city council and staff have the same data access. Include dashboards in internal BI training so everyone operates from the same numbers [1].
* **Vanity Metrics:** Raw views mean little without context. Combine views with participation rates, referrals, and hearing references.
* **Beta Fatigue:** For tools like Richmond's CIP beta [20], timebox the "beta" label, run UX tests, and publish a clear change log to transition to a trusted production tool.

## 8) 12-Month Roadmap and Milestones
To lock in momentum, cities should sequence their data refresh, engagement, analytics, and recognition efforts:

* **Q1 (0–90 days):** Refresh core budget data, launch a public analytics card, publish a "Budget in Brief" narrative, and execute a communications sprint.
* **Q2 (90–180 days):** Launch operating and CIP simulations. Publish a "You said, we did" memo detailing how public input shaped the budget. Embed dashboard references in all fiscal notes.
* **Q3 (180–270 days):** Add checkbook and payroll explorers. Cross-link procurement and contracts to show the full lifecycle of a dollar. Submit the portal for a GFOA award.
* **Q4 (270–365 days):** Publish an annual transparency and engagement report. Pitch the city's success as a case study for Digital Cities or What Works Cities.

## References

1. *Pittsburgh council, caught off guard by depths of budget woes, blames data dearth*. https://community.triblive.com/news/4006357
2. *
	Case Study City of Pittsburgh - tylertech
*. https://www.tylertech.com/resources/case-studies/case-study-city-of-pittsburgh
3. *FY2026 Online Budget*. https://stories.opengov.com/tampa/f9ac8a22-1024-454b-bb87-f5f980e98715/published/4rwPtXRZO?currentPageId=TOC
4. *Implementing World-Class Performance Management in ...*. https://opengov.com/wp-content/uploads/2021/05/opengov_case-study_bernalillo-002.pdf
5. *Public Hearing - FY 2026 Annual Budget and Capital Improvement Program Budget | City of Tampa*. https://www.tampa.gov/events/public-hearing-fy-2026-annual-budget-and-capital-improvement-program-budget/172261
6. *Norfolk, VA: FY 2026 Proposed City of Norfolk Budget - Balancing Act*. https://norfolkva.abalancingact.com/
7. *Balancing Act and Taxpayer Receipt | City of Norfolk, Virginia - Official Website*. https://www.norfolk.gov/3973/Balancing-Act
8. *Budget Explorer | City of Oakland*. https://budgetdata.oaklandca.gov/
9. *Home — Open Budget Oakland*. https://openbudgetoakland.org/
10. *Budget and Management Services | Raleighnc.gov*. https://raleighnc.gov/budget-and-management-services
11. *Digital Cities 2020: IT Foundation Key to COVID Response*. https://www.governing.com/community/GDigital-Cities-2020-COVID-Response.html
12. *Richmond, Virginia  Population 2026 *. https://worldpopulationreview.com/us-cities/virginia/richmond
13. *U.S. Census Bureau QuickFacts: Richmond city, Virginia*. https://www.census.gov/quickfacts/fact/table/richmondcityvirginia/PST045224
14. *City Budget - General Fund | Open Data Portal | City of Richmond, Virginia*. https://data.richmondgov.com/Well-Managed-Government/City-Budget-General-Fund/7nru-hsrx
15. *City Budget - General Fund | Open Data Portal | City of Richmond, Virginia*. https://data.richmondgov.com/Well-Managed-Government/City-Budget/7nru-hsrx
16. *Recap | Open Data Portal | City of Richmond, Virginia*. https://data.richmondgov.com/Well-Managed-Government/Recap/j44b-5mi4
17. *Budget - Year to Year Comparison | Open Data Portal | City of Richmond, Virginia*. https://data.richmondgov.com/Well-Managed-Government/Budget-Year-to-Year-Comparison/pzmw-w2pg
18. *Richmond Public Budget Dashboard | Tableau Public*. https://public.tableau.com/app/profile/andre4532/viz/RichmondPublicBudgetDashboard/TotalBudgetOverTime
19. *CIP | Richmond*. https://rva.gov/budget-and-strategic-planning/cip
20. *Capital Improvement Program Dashboard*. https://experience.arcgis.com/experience/86362b12585448b583b74a3a2ae32745
21. *City Council OKs budget transparency measure to ...*. https://www.richmonder.org/city-council-oks-budget-transparency-measure-to-publicize-department-funding-requests/
22. *Lawrence Makes Innovative Use of Balancing Act Software to Educate and Engage Residents About Budget Trade-Offs*. https://blog.polco.us/lawrence-makes-innovative-use-balancing-act-software-to-educate-and-engage-residents-about-budget-trade-offs
23. *Cleveland’s 2026 budget finally shows what city council has long asked for: last year’s numbers - cleveland.com*. https://www.cleveland.com/news/2026/02/clevelands-2026-budget-finally-shows-what-city-council-has-long-asked-for-last-years-numbers.html
24. *https://data.nola.gov/api/views/r6b2-hfba/rows.csv...*. https://data.nola.gov/api/views/r6b2-hfba/rows.csv?accessType=DOWNLOAD&api_foundry=true
25. *Website Analytics | Data.NOLA.gov*. https://data.nola.gov/d/62d3-pst8
26. *Balancing Act - Welcome!*. https://abalancingact.com/
27. *Balancing Act | Polco*. https://info.polco.us/about/balancing-act
28. *
	Open Data Platform | Tyler Technologies
*. https://www.tylertech.com/products/data-insights/open-data-platform
29. *Local Government Software | OpenGov*. https://opengov.com/
30. *ArcGIS Dashboards | Data Dashboards: Operational, Strategic, Tactical, Informational*. https://www.esri.com/en-us/arcgis/products/arcgis-dashboards/overview
31. *Web Accessibility Statement - Socrata Support - Data & Insights*. https://support.socrata.com/hc/en-us/articles/360019056614-Web-Accessibility-Statement
32. *Build Data Views for Accessibility - Tableau*. https://help.tableau.com/current/pro/desktop/en-us/accessibility_overview.htm
33. *Accessibility best practices—ArcGIS Dashboards | Documentation*. https://doc.arcgis.com/en/dashboards/latest/reference/accessibility-best-practices.htm
