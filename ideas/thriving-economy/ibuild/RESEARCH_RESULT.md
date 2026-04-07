# Pre-Application Permit Wizards: What Works, What Data Powers Them, and How to Deploy

## Executive Summary
Cities across the United States are rapidly shifting from a "call-before-you-apply" model to guided, self-service triage tools that help residents and small contractors navigate complex building permit requirements. Jurisdictions like Washington, D.C., Philadelphia, and Los Angeles County have deployed public-facing "Permit Wizards" and "Decision Engines" that predict required permits, estimate total costs, and forecast typical processing timelines based on project type and location [1] [2] [3]. 

These tools increasingly pull directly from backend permitting systems—specifically Accela, Tyler EnerGov, and OpenGov—leveraging configured fee tables, valuation rules, workflow task durations, and GIS "location flags" to generate accurate predictions [4] [5] [6]. When implemented correctly, these discovery layers yield measurable ROI: Salt Lake City saved over 2,100 staff hours with a 95% self-service rate [7], while Tacoma saved dozens of hours monthly on over-the-counter permits [8]. However, maintaining accuracy requires strict data governance; audits in cities like Berkeley and Honolulu reveal that outdated valuation tables or poor data entry controls can lead to significant fee variances and eroded public trust [9] [10].

## Where Cities Are Today: Guiding Residents Before They Apply
Multiple US cities run public tools that predict required permits, estimate fees, and increasingly signal timelines using their permitting systems and GIS integrations.

### Jurisdictional Implementations and Capabilities
| Jurisdiction | Tool | Backend/Vendor | Predict Permits? | Fee Estimate? | Timeline Hint? | GIS/Address Logic | Notables |
|---|---|---|---|---|---|---|---|
| **Washington, DC** | DOB Permit Wizard | DOB Systems | Yes | Yes | "Anticipated plan reviews/inspections" | Yes (property advisories) | Identifies permits, estimates total cost, informs anticipated reviews [2]. |
| **Philadelphia, PA** | Permit Navigator | OpenCounter | Yes | Approximate | Not explicit | Zoning check module | Multilingual; notes estimates are subject to final staff review [11] [3]. |
| **LA County, CA** | EPIC-LA Decision Engine | Tyler EnerGov | Yes | Yes | Yes (uses default turnaround entries) | Map/parcel search | Decision engine assists in identifying permits and estimating turnaround times [1] [12] [4]. |
| **Seattle, WA** | SDCI Fee Estimator | Accela | No (discovery via portal) | Yes | Indirect (hourly notes) | BVD and fee code rules | Annual Fee Subtitle updates; Subject-to-Field-Inspection permits pay 40% of plan review fee [13] [14]. |
| **San José, CA** | Fee Estimator (beta) | City Portal | Limited | Yes | Not stated | Scope-limited | Beta testing for ADUs, Commercial TIs, and new single-family homes [15]. |
| **LA City Planning** | Planning Fee Estimator | Planning Site | No | Yes | No | N/A | Explicit effective dates and ordinance references [16]. |

*Takeaway: Cities are successfully deploying pre-application tools, but the depth of integration with backend systems dictates whether they can provide accurate, real-time fee and timeline estimates.*

## The Data That Powers Predictions: Cross-Vendor Source of Truth
All three major platforms expose similar primitives—fee schedules, valuation rules, record types, workflows with SLAs, and GIS overlays—that can be surfaced pre-application.

### Accela (Civic Platform / Accela Citizen Access): Native Estimation
Accela Citizen Access (ACA) supports robust fee estimation and timeline tracking natively. 
* **Fee Schedules & Valuation:** ACA utilizes valuation calculators, fee items (with `calcFlag` and auto-invoice settings), and Application Specific Information (ASI) fields marked "Required for Fee Calculation" [17] [18]. The API (`PUT /v4/records/{recordId}/fees/estimate`) returns fee totals based on these inputs [6] [19].
* **Workflows & Timelines:** Workflow tasks expose "time to complete" fields (measured in days) via API, enabling the calculation of timeline ranges [20].
* **Logic & Prerequisites:** Standard Choices, Expression Builder, and Event Manager Scripting Engine (EMSE) pageflow scripts drive conditional logic and required inputs [18] [21].

### Tyler EnerGov (Enterprise Permitting & Licensing): Decision Engines and Geo-Rules
Tyler Technologies utilizes a Decision Engine and Intelligent Objects to guide users.
* **Decision Engine:** An online wizard that loads local ordinance data from the Enterprise Permitting & Licensing system, routing applicants to correct permits and payments using branching Q&A [22].
* **Intelligent Objects & Geo-Rules:** These automate fee computation and trigger actions based on spatial data (e.g., flood zones, noise abatement areas) [23] [24].
* **Turnaround Times:** Implementations like LA County's EPIC-LA leverage "default turnaround time entries" from workflow templates to project estimated completion dates at intake [4].

### OpenGov Permitting & Licensing: Conditional Forms and Location Flags
OpenGov relies on no-code conditional logic and GIS integrations.
* **Conditional Logic:** Drag-and-drop tools and conditional workflows route applications based on project value, type, or zoning district [25] [26].
* **Location Flags:** Master address tables use GIS flags (e.g., FEMA flood zones, historic districts) to automatically trigger conditional workflows and extra approvals [5].
* **APIs:** REST APIs expose records, fees, approvals, and inspections, allowing for programmatic access to workflow data [27].

## Accuracy, Governance, and Maintenance: Keeping Estimates Trustworthy
Estimators fail without disciplined updates and clear caveats. Audits show that fee variance and timeline misreporting are significant risks.

* **Fee Accuracy Risks:** Audits in Berkeley and Honolulu found consistent under/over-charges and timeline reporting issues when valuation tables were outdated or data entry lacked controls [9] [10]. 
* **Actionable Governance:** Jurisdictions must adopt an annual fee/valuation refresh (e.g., using ICC Building Valuation Data) [28], tie updates to ordinance effective dates (as seen in Seattle and LA Planning) [16] [14], and require ASI fields for fee calculations.
* **Timeline Credibility:** LA County paused inaccurate "progress wheel" visuals to move toward publishing tracked turnarounds [4]. Cities should report median or 80th percentile review times per permit family rather than promising single dates.
* **Equity & Accessibility:** Tools like Philadelphia's Permit Navigator offer multilingual support to lower barriers [11].

## Impact Evidence: What Results to Expect
Pre-application guidance reduces staff triage, speeds intake, and cuts counter traffic.

* **Salt Lake City (OpenCounter):** Processed 6,949 inquiries, saved 2,121 staff hours, achieved a 95% self-service rate, and kept completion times under 4 minutes [7].
* **Tacoma (Accela):** Saved 30 hours/month on over-the-counter permits and 44 hours/month via ePermits, reducing office foot traffic and service calls [8].
* **Tulsa (EnerGov):** Saw a 14% increase in inspections and a drastic decline in walk-in customers by moving processes online [29].
* **LA County (EPIC-LA):** Online permits increased 616% from 2019 to 2021, driving significant revenue growth [4].

## Implementation Playbook: How to Deploy in 120 Days
Start with a narrow scope, wire data sources, publish estimates with caveats, then iterate.

### Phase 1 (0–30 days): Scope and Data Readiness
Select 5–10 high-volume residential/trade scenarios (e.g., water heater, reroof, ADU). Freeze fee schedules and valuation inputs, and export workflow SLAs (defaults and last-12-month medians). Confirm GIS flags (historic, FEMA) and parcel data cleanliness.

### Phase 2 (31–75 days): Configure Decision Logic and Estimators
* **Accela:** Configure ACA Fee Estimation with ASI "Req for Fee Calc" fields; enable `/v4/records/{recordId}/fees/estimate` endpoints [6] [19].
* **EnerGov:** Build Decision Engine trees; configure Intelligent Objects for fee computation and Geo-Rules [22] [24].
* **OpenGov:** Build conditional forms and location flags; surface fee tables [5] [26].

### Phase 3 (76–120 days): Validate, Publish, and Iterate
Regression test 30+ scripted scenarios targeting ±5% fee variance for flat rates. Add multilingual content and publish disclaimers (e.g., "subject to final staff review") [11]. Instrument analytics for abandonment and estimate variance tracking.

## Comparison Tables: What to Expose and How

### Vendor Data Elements to Power Pre-Application Guidance
| Vendor | Fee Data | Timeline Data | Permit Logic | GIS/Overlays | APIs |
|---|---|---|---|---|---|
| **Accela** | Fee schedules/items, valuation calculator, ASI "Req for Fee Calc" [17] [18] | Workflow tasks with "time to complete" [20] | Record types, Standard Choices, EMSE scripts [18] | APO + Accela GIS; proximity alerts | Fee estimate API; records/workflows endpoints [6] |
| **EnerGov** | Fee tables; Intelligent Objects (IO) computations [24] | Default turnaround time entries on workflow templates [4] | Decision Engine wizard; Geo-Rules [22] [24] | Zone mapping; location-based rules [24] | SDK/toolkits; portal integration [24] |
| **OpenGov** | Fee tables/rates configured in forms [26] | Reporting on turnaround times/workloads [30] | Conditional forms; location flags [5] [26] | Esri-based flags (flood/historic) [5] | REST APIs for records/fees/inspections [27] |

### Governance to Keep Estimates Current
| Area | Practice | Cadence | Owner |
|---|---|---|---|
| **Fees/Valuation** | Update fee schedules and ICC BVD references [28] | Annual + ordinance-effective dates | Finance + CD Admin |
| **Workflow SLAs** | Refresh medians/P80 by permit family; republish ranges | Quarterly | PMO/Analytics |
| **GIS Flags** | Sync zoning/overlay layers; audit parcel flags | Quarterly | GIS |
| **Rules/Trees** | Decision engine/ASI logic regression tests | Each release | Product Owner |

## Risk Controls and Failure Modes
Most failures stem from stale data, ambiguous disclaimers, or over-promising timelines.
* **Inaccurate Timelines:** Avoid single-date promises; show ranges and dependencies (e.g., resubmittals, outside agencies).
* **Fee Drift:** Tie the estimator to a single authoritative fee schedule version and stamp the effective date on results [16].
* **Scope Creep:** Pilot limited scopes (like San Jose's ADU beta) [15] and expand only after hitting accuracy SLAs.

## Action Checklist: 90-Day Launch Plan and KPIs
* Choose 8–12 scenarios; freeze fee/valuation and SLAs.
* Configure wizard + estimator; publish in at least 2 languages with disclaimers.
* Instrument analytics: completion, abandon, estimate variance, contact deflection.
* **Targets (90 days):** 70% self-service completion; <5% fee variance on flat/unit fees; 25% reduction in counter visits for pilot scopes.

## References

1. *EPIC-LA*. https://planning.lacounty.gov/epic-la/
2. *DOB Permit Wizard - DC Department of Buildings*. https://dob.dc.gov/node/1620686
3. *Permit Navigator | Programs and initiatives | City of Philadelphia*. https://www.phila.gov/programs/smartcityphl/permit-navigator/
4. *Los Angeles County EPIC-LA Service Model Project*. https://file.lacounty.gov/SDSInter/ceo/agendas/1136910_Gartner-EPIC-LA_ServiceModelProject_FinalConsolidatedRpt_2-2-23.pdf
5. *Permitting & Licensing Frequently Asked Questions | OpenGov*. https://opengov.com/faq/citizen-services/
6. *Accela V4 API Index*. https://developer.accela.com/docs/api_reference/api-index.html
7. *Salt Lake City Case Study - OpenCounter*. https://www.opencounter.com/customer-stories/salt-lake-city/
8. *Improving The Permit Process – A Quest to Hear The ...*. https://www.accela.com/wp-content/uploads/2022/08/Accela-Tacoma-CaseStudy-005.pdf
9. *Audit of the Department of Planning and Permitting's ...*. https://www.honolulu.gov/oca/wp-content/uploads/sites/39/2024/03/DPP_Permit_Processing_Final_Report.pdf
10. *Audit: Construction Permits - Monitor Performance and Fee ...*. https://berkeleyca.gov/sites/default/files/2022-01/Audit%20-%20Construction%20Permits%20-%20Monitor%20Performance%20and%20Fee%20Assessments.pdf
11. *Philadelphia Permit Navigator*. https://permits.phila.gov/
12. *Los Angeles County*. https://epicla.lacounty.gov/
13. *Fees - SDCI | seattle.gov*. https://www.seattle.gov/sdci/codes/codes-we-enforce-(a-z)/fees
14. *How Much Will Your Permit Cost? - SDCI | seattle.gov*. https://www.seattle.gov/sdci/permits/how-much-will-your-permit-cost
15. *
	
    Building Permit Fees | City of San José

*. https://www.sanjoseca.gov/your-government/departments-offices/planning-building-code-enforcement/building-division/building-permit-fees
16. *Fee Estimator | Los Angeles City Planning*. https://planning.lacity.gov/project-review/fee-estimator
17. *Accela Automation 7.3 FP1 Configuration Reference*. https://www.jamesmurgolo.com/Accela/Accela%20Automation%207.3%20FP1%20Configuration%20Reference.pdf
18. *Accela Civic Platform - Scripting Guide*. https://contentarch.com/wp-content/uploads/2016/10/accela_civic_platform_8-0_scripting_guide.pdf
19. *Estimate Record Fees*. https://developer.accela.com/docs/api_reference/v4.put.records.recordId.fees.estimate.html
20. *Get All Workflow Tasks for Record*. https://developer.accela.com/docs/api_reference/v4.get.records.recordId.workflowTasks.html
21. *Creating Expressions*. https://aa.eplace.eea.mass.gov/docs/AdministratorGuide/1-creatingExpressions.html
22. *
	Decision Engine Application Wizard | Tyler Technologies
*. https://www.tylertech.com/products/enterprise-permitting-licensing/decision-engine
23. *
	Enterprise Permitting & Licensing: IO, IAA, and Geo...
*. https://www.tylertech.com/event/enterprise-permitting-licensing-io-iaa-and-geo-rules-virtual-learning-lab-03-29-2023
24. *Amendment to the Software as a Service (SaaS) agreement ...*. https://indio.civicweb.net/document/4505/Amendment%20to%20the%20Software%20as%20a%20Service%20(SaaS)%20a.pdf?handle=37C94F3EF8AD4462AEC811F701D83015
25. *Building Permits | OpenGov*. https://opengov.com/products/permitting-and-licensing/building-permit-software/
26. *Government Licensing & Permitting Software | OpenGov*. https://opengov.com/products/permitting-and-licensing/
27. *OpenGov Developer Portal*. https://developer.opengov.com/catalog
28. *Building Valuation Data - ICC*. https://www.iccsafe.org/products-and-services/i-codes/code-development-process/building-valuation-data/
29. *
	A City's Bold Vision - Powerful Software Saves Time
*. https://www.tylertech.com/resources/case-studies/a-citys-bold-vision-powerful-software-saves-time
30. *Public Works Permitting Software - OpenGov*. https://opengov.com/products/permitting-and-licensing/right-of-way-permitting/
