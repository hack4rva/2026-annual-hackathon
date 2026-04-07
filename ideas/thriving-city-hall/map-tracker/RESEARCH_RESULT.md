# From Plans to Progress: How Mid-Sized US Cities Use Dashboards to Deliver and Endure

## Executive Summary

Mid-sized US cities (100,000–500,000 population) are increasingly leveraging technology platforms to track and publicly report progress against strategic plans and mayoral priorities. The most successful implementations move beyond simple data publishing to create integrated performance management systems that drive internal accountability and public trust. 

**Key Takeaways:**
* **Institutionalization beats personalization:** Programs tied to citywide strategic plans and budget cycles survive leadership changes. For example, Durham has used ClearPoint since 2011, rebuilding its governance in 2014 to integrate with budget requests, allowing it to survive multiple administrations [1]. West Palm Beach launched its "West Palm Beach Working" dashboard under one mayor and successfully transitioned it into a 2022–2027 strategic plan under a new administration [2] [3].
* **Hybrid data pipelines are the norm:** Finance and revenue metrics are often automated (e.g., OpenGov in Pompano Beach shows near-real-time budget-to-actuals [4]), while most departmental KPIs and project statuses are entered manually on a monthly or quarterly basis [5] [6].
* **Budget alignment multiplies adoption:** Pompano Beach links 75% of budget requests to strategic objectives in OpenGov [4]. Irving uses Envisio analytics as the first agenda item in budget meetings, saving 40+ staff hours per quarter on reporting [5].
* **Staff adoption hinges on governance:** Successful cities stand up dedicated performance teams, assign metric owners, and utilize routine review cycles (like "STAT" meetings) to lock in updates before publishing [1] [2].

## Landscape of Platforms and Live Examples in 100k–500k Cities

Cities in the 100k–500k population range typically choose between purpose-built strategy execution software (Envisio, ClearPoint Strategy), budget-centric transparency portals (OpenGov), or custom business intelligence builds (Tableau/Power BI paired with open data portals like Socrata). The best choice follows the city's anchor need and internal capacity.

### Representative Deployments

| City (Pop.) | Plan Type | Platform | Public? | Notable Metrics/Features | Transition Durability |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Irving, TX** (~254k) | City strategic plan (Future in Focus) | Envisio | Yes (dashboard + report card) | Resident survey KPIs, infrastructure, safety, finance; monthly cadence [7] [8] | Persisted; institutionalized via Innovation & Performance Office [5] |
| **Durham, NC** (~285k) | City strategic plan | ClearPoint | Yes | >100 users; quarterly STAT; budget alignment; 3-yr cycles [1] | Survived multiple mayors/managers since 2011 [1] |
| **Pompano Beach, FL** (~112k) | Strategic plan + budget | OpenGov | Yes | Budget-to-actuals, revenue "speedometer", 75% requests linked to goals [4] | Continued across budgets; finance-anchored [4] |
| **West Palm Beach, FL** (~120k) | Strategy pillars (STAR/LEED) | ClearPoint | Yes | Response times, solar kW, workforce, housing [2] [9] | Survived mayoral handoff; plan updated 2022–2027 [3] |
| **Corona, CA** (~162k) | 2021–26 plan | Envisio + Open Budget | Yes | GO rating AA+, debt/capita, fund balance; quarterly [10] [11] | Active; owned by City Manager’s Office [10] |
| **Denton, TX** (~152k) | Strategic plan | Envisio | Yes | Annual initiative tracking by FY [12] | City manager model; ongoing |
| **Las Cruces, NM** (~114k) | Strategic plan | Envisio | Yes | Livability/prosperity/environment pillars [12] | Active |
| **Sugar Land, TX** (~112k) | Strategic plan | ClearPoint | Yes | City KPI scorecards; budget linkage | Long-running |
| **Tacoma, WA** (~220k) | Performance + open data | Custom (Esri/Socrata) | Yes | Open data + performance dashboards [13] | Institutionalized (What Works Cities) [13] |
| **Spokane, WA** (~229k) | Performance dashboards | Custom | Yes | Service KPIs; resident dashboards | Institutionalized |
| **Madison, WI** (~275k) | Performance/open data | Custom | Yes | Budget/performance visuals | Institutionalized |
| **Baton Rouge, LA** (~226k) | Performance/open data | Custom | Yes | City-parish metrics | Institutionalized |

*Takeaway: Cities that connect dashboards to budgets, assign clear ownership, and publish on a fixed cadence build durable, resident-trusted programs regardless of the specific software vendor.*

## Comparative Platform Analysis

Different platforms excel at different core functions. Envisio, ClearPoint, OpenGov, and custom BI each solve distinct problems; the best choice follows your anchor need and capacity.

### Platform Fit-by-Use Case

| Platform | Best For | Strengths | Integration/Automation | Public Dashboard | Adoption/Support | Indicative Cost/TCO |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Envisio** | Strategy execution + project roll-ups | Plan-to-action hierarchy, milestones/Gantt, AI-assisted narratives [14] [15] | Open API; connects to ERP/HRIS; manual+scheduled loads [16] | Strong, ADA-conscious; report cards [14] | Public sector focus; onboarding + Academy [17] | Starts ~$20k/yr; unlimited users; admin effort moderate [17] [18] |
| **ClearPoint Strategy** | Cross-plan governance + budget linkage | Strategy maps, alignment, automated reports, STAT support [19] | API; Excel/SQL/BI connectors; advanced calc | Strong, 1-click publish; ADA plugin [20] [21] | Deep governance tooling; extensive training | Mid-tier SaaS; depends on scope/users |
| **OpenGov** | Budget/perf + ERP transparency | Automated budget books, real-time revenues, performance overlays [22] | Direct ERP feeds (Tyler/MUNIS/Oracle), APIs [22] | Strong transparency sites [23] | Finance-led rollout; vendor services robust | Tiered; can be higher for full suite |
| **Custom BI + Open Data** | In-house data engineering cities | Full control; deep automation; flexible visuals | Max via ETL/warehouse; Socrata/Tyler portals | Variable; depends on UX craft | Requires internal Dev/Data team | Capex in data stack + FTEs; lower license costs |

*Takeaway: Match the platform to the anchor problem. Use Envisio for strategy execution with project roll-ups, ClearPoint for integrated strategy-budget governance, and OpenGov for budget/performance automation.*

## Data Collection, Automation, and Cadence

Automate what is stable (ERP, revenue, HR, CAD/RMS extracts) first; standardize manual updates via monthly or quarterly cycles with templates and "last updated" stamps to preserve trust.

### Proven Practices
* **Finance Automation:** Pompano Beach utilizes OpenGov to analyze year-over-year trends and budget-to-actuals, allowing the budget team to identify gaps and activate scenario planning [4]. Corona links its Envisio dashboard to an Open Budget and Open Checkbook portal [24].
* **Manual Narratives:** Irving structures its reporting so that early in the month, directors receive reminders to update departmental projects. Mid-month reports go to city management, and updates are pushed to the public dashboard at the end of the month [5]. West Palm Beach updates its public dashboards monthly, matching internal reporting cycles [6].

## Transparency and Access Models

A dual-view approach (internal admin + resident-ready public) builds accountability. 

### What Good Looks Like
* **Public:** Concise outcomes per pillar, trend/target, narrative, update stamp, and links to open data. West Palm Beach's dashboard maps every metric to one of 7 strategic categories, creating a direct line from the council's vision to measurable progress [6].
* **Internal:** Operational drill-downs, owner compliance dashboards, budget links, and STAT packets. Durham uses ClearPoint to house all departmental business plans, performance metrics with defined methodologies, and budget request documentation [1].

## Adoption Enablers

Adoption follows executive sponsorship, a staffed performance office, and budget-linked incentives.

### Playbook Components
* **Governance:** Durham's successful 2014 reset included the creation of the Office of Performance and Innovation, dedicated resources, and clear accountability where department directors were assigned responsibility for their measures [1].
* **Training:** Irving's Innovation and Performance Office acts as internal consultants, working with departments to build business plan initiatives and track them in Envisio [5].
* **Incentives:** Pompano Beach's budget team works to link 75% of all budget requests to Strategic Plan Objectives and program goals [4]. Durham integrated decision-making by requiring data for budget requests, showing staff their information was being used for important decisions [1].

## Durability & Transition Resilience

Programs endure when they are plan-centric, budget-embedded, and manager-owned. Mayor-branded one-offs fade if not institutionalized.

### Durability Typology

| Model | Traits | Examples | Risk | How to Upgrade |
| :--- | :--- | :--- | :--- | :--- |
| **Institutional (High)** | Budget-linked; performance office; public cadence | Durham [1], Irving [5], Pompano (finance) [4] | Low | Maintain refresh cycles; succession MOUs |
| **Hybrid (Medium)** | Public dashboards; partial budget linkage | West Palm Beach [2], Corona [10] | Medium | Formalize budget links; codify cadence |
| **Mayor-centric (Low)** | Branded to individual; ad hoc updates | New launches | High | Rebrand to plan; handoff to performance office |

*Takeaway: Pre-plan transition MOUs: commit to a plan refresh timetable, keep the platform, revalidate KPIs, and publish a 100-day continuity memo for incoming leaders.*

## Case Studies

### Irving, TX (Envisio)
Irving (~254k population) uses Envisio to track its *Future in Focus* strategic plan. The city maintains a two-layer public reporting system: a high-level strategy dashboard and a comprehensive "Report Card" [7] [25]. The Innovation and Performance Office drives this initiative, utilizing a strict monthly update cadence [5]. By automating reports through Envisio, the city saved over 40 hours per quarter compared to their previous Excel-based process [5].

### Durham, NC (ClearPoint)
Durham (~285k population) has used ClearPoint since 2011. After an initial stumble where staff reverted to Excel, the city reset the program in 2014 by creating the Office of Performance and Innovation [1]. The system now has over 100 trained users and operates on a sophisticated three-year strategic planning cycle [1]. Performance data directly influences budget decisions, such as avoiding the unnecessary hiring of communication officers after data showed a 95% emergency response level was already achieved [1].

### Pompano Beach, FL (OpenGov)
Pompano Beach (~112k population) uses OpenGov to align its budget with its strategic plan. The budget team works to link 75% of all budget requests to Strategic Plan Objectives [4]. The city uses OpenGov to analyze year-over-year trends and budget-to-actuals, allowing them to identify gaps and activate scenario planning [4].

### West Palm Beach, FL (ClearPoint)
West Palm Beach (~120k population) launched its "West Palm Beach Working" dashboard in 2018 [2]. The dashboard maps metrics to seven strategic categories aligned with STAR/LEED communities [2] [6]. The program successfully survived a mayoral transition, with the city updating its strategic plan for 2022–2027 while maintaining the performance tracking infrastructure [3].

## Risk Register

The biggest risks are stale data, unclear ownership, and duplicative entry.

| Risk | Signal | Mitigation |
| :--- | :--- | :--- |
| **Stale updates** | "Last updated" > 90 days | Monthly reminders; STAT lock; visible stamps [6] |
| **Owner drift** | Many KPIs "pending" | RACI; escalate in STAT; reduce KPI count |
| **Duplicative entry** | Shadow spreadsheets | Single system of record; API feeds [1] |
| **Political rebrand** | Name/person-centric branding | City plan branding; council resolution |
| **Over-engineering** | Too many metrics/complexity | 15–25 KPIs; sunset low-value metrics |

## Implementation Playbook

Start small, automate finance, and publish visibly by Q2.

### 0–100 Days
Define 4–8 pillars; pick 15–25 KPIs; assign owners/methods; stand up platform; connect ERP feed; publish internal beta; set monthly cadence.

### 3–6 Months
Launch public dashboard with "last updated" stamps; run monthly STAT meetings; incorporate budget links in FY narratives; train super users; begin API pilots for CAD/permitting.

### 6–12 Months
Refresh KPIs; publish first annual report card; add project dashboards; embed dashboard links in all council items and budget books.

## KPIs and Data Dictionary Starter Set

* **Public Safety:** Priority response times (e.g., West Palm Beach tracks Fire and Police response times [9]), crime per 1,000, vacancy/retention.
* **Infrastructure:** Pavement Condition Index (PCI) [9], % assets at target condition.
* **Economy:** Permits issued, new jobs via incentives [9], taxable value growth.
* **Finance:** GO rating (e.g., Corona tracks its AA+ rating [11]), fund balance compliance [11], debt/capita [11].
* **Sustainability:** GHG emissions (MT CO2e) [9], installed solar kW [9], alternatively fueled fleet % [9].

## Budget/TCO and Staffing

Software is a small share of total cost; governance and light data engineering are essential.
* **Indicative costs:** Envisio starts at approximately $20,000 per year with unlimited users [17] [18]. ClearPoint is a mid-tier SaaS depending on scope. OpenGov can be higher for the full budgeting and performance suite.
* **Staff:** A 1–3 FTE performance team is typical for a 100k–300k city (e.g., Durham's Strategy and Performance Manager and team of two [1]), with metric owners distributed across departments.

## References

1. *City of Durham | Customer Success Stories | ClearPoint Strategy*. https://www.clearpointstrategy.com/customers/city-of-durham
2. *City of West Palm Beach | Customer Success Stories | ClearPoint Strategy*. https://www.clearpointstrategy.com/customers/city-of-west-palm-beach
3. *Strategic Plan Update 2022-2027*. https://www.wpb.org/files/assets/city/v/2/city-administration/documents/west-palm-beach-five-year-strategic-plan2022-2027.pdf
4. *City of Pompano Beach Achieves Its Strategic Goals | OpenGov*. https://opengov.com/customers/from-good-to-great-how-the-city-of-pompano-beach-achieves-its-strategic-goals/
5. *City of Irving, Texas | Envisio*. https://envisio.com/customers/city-of-irving-case-study/
6. *Public Dashboard Best Practices for Government | ClearPoint | ClearPoint Strategy Blog*. https://www.clearpointstrategy.com/blog/public-dashboard-best-practices
7. *City of Irving - Public Dashboard*. https://performance.envisio.com/dashboard/Future_in_Focus
8. *
      City of Irving - Performance Analytics - Envisio
    *. https://cityofirving.app.envisio.com/corporate/performance_analytics/published_static/svEybCcf
9. *West Palm Beach Dashboard | West Palm Beach Dashboard*. https://web.archive.org/web/20190301/https://westpalmbeach.clearpointstrategy.com/
10. *City of Corona - Public Dashboard*. https://performance.envisio.com/dashboard/cityofcorona2172
11. *City of Corona - Public Dashboard*. https://performance.envisio.com/dashboard/cityofcorona2172/Goal-11961
12. *Strategic Plan Dashboard Examples | Envisio*. https://envisio.com/dashboard-examples/strategic-plan-dashboards/
13. *Tacoma: Excellence in Performance Management and Open Data | icma.org*. https://icma.org/articles/article/tacoma-excellence-performance-management-and-open-data
14. *ClearPoint Strategy vs. Envisio: Comparing Strategy and Performance Management Software for the Public Sector | Envisio*. https://envisio.com/blog/clearpoint-strategy-vs-envisio-comparing-strategy-and-performance-management-software-for-the-public-sector/
15. *Envisio vs ClearPoint Strategy | Which Strategic Planning Software Wins In 2026?*. https://www.selecthub.com/strategic-planning-software/envisio-vs-clearpoint-strategy/
16. *Integrations | Envisio*. https://envisio.com/integrations/
17. *Envisio Pricing 2026: The True TCO & Hidden Costs | PricingNow*. https://pricingnow.com/question/envisio-pricing/
18. *Envisio Software Pricing, Alternatives & More 2026 | Capterra*. https://www.capterra.com/p/135807/Envisio/
19. *City of Fort Lauderdale | Customer Success Stories | ClearPoint Strategy*. https://www.clearpointstrategy.com/customers/fort-lauderdale
20. *ClearPoint ADA Compliance*. https://support.clearpointstrategy.com/en/articles/8347274-clearpoint-ada-compliance
21. *Local Government Strategy Execution Software | Turn Plans Into Results | ClearPoint Strategy*. https://www.clearpointstrategy.com/sectors/local-government
22. *Local Government Software | OpenGov*. https://opengov.com/
23. *Cities | OpenGov*. https://opengov.com/city-government-software/
24. *Corona Open Performance: Open Data Portal*. https://corstat.coronaca.gov/
25. *8 Local Government Public Dashboard Examples | Envisio*. https://envisio.com/blog/8-local-government-public-dashboard-examples/
