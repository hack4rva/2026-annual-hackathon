# From Open Data to Open Doors: How Cities Turn Procurement Transparency into MBE Wins

## Executive Summary

US cities are increasingly leveraging open procurement data to help Minority-Owned Businesses (MBEs) identify contracting opportunities, but transparency alone does not guarantee equitable outcomes. The most successful municipalities pair open, filterable data with targeted procurement channels, capacity-building grants, and rigorous subcontractor reporting. 

**Key Insights:**
* **Boston’s data-to-awards flywheel is working:** By combining open directories (with NAICS and certification flags), a public buying plan, and the Inclusive Quote Contract (IQC) method, Boston has successfully moved dollars to diverse firms. In FY25, discretionary spending with certified M/WBEs reached $155.6 million (12% of discretionary spend), and contract awards to M/WBEs hit $232.5 million (13%) [1]. 
* **Discovery must be paired with channeling mechanisms:** New York City’s datasets (such as the SBS Certified Directory and M/WBE Upcoming Procurements) improve discovery, but conversion can lag without targeted award channels. While NYC boasts 11,382 City-certified M/WBEs, only 2,478 (21.77%) won a new contract, subcontract, or purchase order in FY25 [2]. However, targeted tools like the M/WBE Small Purchase method are driving growth, awarding $248 million in FY24 [3].
* **End-to-end publication unlocks pipeline insight:** Portland’s Open Contracting Data Standard (OCDS) implementation publishes data from tender to payment, including "agreedMetrics" by certification (MBE/WBE/DBE) and subcontractor roles [4]. This allows firms to analyze historical pipelines and payment timing, though public adoption metrics remain scarce.
* **Practical reframing fields drive discovery:** Cities that expose NAICS (or UNSPSC) codes, certification flags, expected procurement methods, and size thresholds make self-screening significantly faster for MBEs. Standardizing these four fields across all public-facing tools is the highest-yield data intervention a city can make.
* **Subcontracting blind spots are a systemic blocker:** Many gains occur below the prime level, but data is often thin. The NYC Comptroller found that since FY22, the City registered eligible contracts valued at nearly $33 billion that have zero associated subcontract records [2]. Missing subcontractor data impairs goal-setting, compliance, and discovery for teaming.

## What cities have actually deployed for MBE discovery—and where it works

The most effective municipal models pair open, filterable data with targeted procurement channels (e.g., IQCs or small purchases), capacity-building, and rigorous subcontractor reporting. 

### City tool-stack comparatives: discovery filters, APIs, and impact

The table below compares the discovery stacks, available filters, and documented impacts across major US cities.

| City | Tools/datasets | Discovery filters | API/export | Adoption proxies | Documented impact |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Boston** | Certified Directory; Equity in City Contracting dashboard; Buying Plan; IQC; SCALE | NAICS; certification; size (SBE/SLBE) | PowerBI public; Analyze Boston | 1,037 active certs; 207 new certs; 54 IQCs awarded | 12% discretionary spend to M/WBEs ($155.6M); 13% awards to M/WBEs ($232.5M) [1] |
| **New York City** | PASSPort Public; SBS Certified Business List; M/WBE Upcoming Procurements | Industry category; certification (SBS); procurement method | Open Data OData/CSV/JSON; PASSPort | 11,382 certified; 2,478 (21.77%) with new contract/PO/sub | LL174 prime spend 14.17% M/WBE; FY24 $6.4B MWBE awards; 31.2% utilization [2] [3] |
| **Portland** | OCDS (tender→payment), dashboards; B2Gnow integration for subs | Certification-tagged agreedMetrics; subs; PO/transactions | OCDS JSON/CSV; biweekly | N/A (public usage not reported) | Transparency; drill-down to subs and payments; no city-published MBE award impact [4] |
| **Chicago** | Certified firms directory; Buying Plan; M/WBE payment dataset (quarterly) | Certification; NAICS areas; payment by category | Socrata CSV; directory export | N/A | Ongoing M/WBE payment tracking; program reporting [5] [6] |
| **Los Angeles** | RAMP Opportunity Awards dataset; Business Inclusion Program (BIP) | Opportunity metadata; contact info | Socrata OData | N/A | BIP/local preference; city-level MBE spend not consolidated in dataset cited [7] |
| **Philadelphia** | OEO Registry (search by capacity); OEO annual report; B2Gnow | Certification; capacity (size/employees/equipment) | Registry; reports | ~2,064 registry firms | 31.4% City-only M/W/DSBE utilization FY23; departmental performance tracked [8] |

*Takeaway:* Cities that publish comprehensive outcome data (Boston, NYC, Philadelphia) demonstrate that while open data portals are necessary for transparency, they must be coupled with active utilization tracking and targeted procurement methods to move the needle on actual spend.

## How policy levers convert discovery into awards (and where they can fail)

Inclusive Quote Contracts (IQCs) and M/WBE small purchases create fast lanes for MBEs when paired with open data, but weak subcontractor reporting and poor search user experiences can erode these gains.

### Boston IQC and scale-up model

Initiated by a 2022 home rule petition, Boston's Inclusive Quote Contract (IQC) procurement method allows City officials to use a simplified written quote process to procure supplies and services up to $250,000 when purchasing from certified small, local, disadvantaged businesses [1] [9]. Since June 2023, the City has awarded 54 total IQCs, 28 of which were awarded in FY25 [1]. This method avoids the heavy overhead of lengthy proposal preparation, benefiting both small businesses and City staff.

### NYC M/WBE Small Purchase and best-value

New York City's M/WBE Small Purchase method allows agencies to make direct contract awards up to $500,000 (and up to $1.5 million following recent legislative increases) with limited, targeted competition [2] [3]. In FY24, the city awarded $248 million using this method [3]. However, conversion remains a bottleneck: 78% of certified M/WBEs failed to win new contracts with the City in FY25 [2]. The NYC Comptroller noted that PASSPort Public's search functionalities need improvement, as searching for M/WBE solicitations often yields outdated or inaccurate results [10].

### Risks and mitigations

* **Risks:** Discretionary methods can lead to steering toward "usual suspects," reduced competitive intensity, data misclassification, and high retroactivity rates (where contracts are registered after their start date) [2].
* **Mitigations:** Require at least three certified quotes, document price reasonableness, publish small-purchase pipelines with time stamps to deter steering, and improve classification hygiene.

## Building a discovery funnel you can manage: measurement framework and KPIs

To optimize MBE discovery, cities must manage procurement as a funnel—instrumenting adoption (from registration to award) and impacts (share of spend, cycle times), segmented by NAICS and size.

### Adoption KPIs
* **Registration Rate:** Percentage of certified MBEs registered in the vendor portal (Registered Certified MBEs / Total Certified MBEs).
* **Profile Completeness:** Percentage of profiles meeting required fields.
* **Engagement:** Alert opt-in rates, alert open/click rates, and search/download counts per MBE.
* **Conversion:** Alert-to-bid conversion and bid-to-award conversion (tracked overall and by NAICS/size band).

### Impact KPIs
* **Spend Share:** Prime and subcontractor spend shares and values awarded to MBEs [2].
* **Award Metrics:** Award counts and values to MBEs, and the average number of competitors per MBE bid.
* **Operational Metrics:** Cycle times (release to award) and payment timeliness to MBEs.

### Evaluation designs that survive scrutiny
To prove causal impact, cities should employ rigorous evaluation designs:
* **Difference-in-Differences:** Compare outcomes pre- and post-tool rollout against matched NAICS segments.
* **Interrupted Time Series:** Evaluate policy shocks, such as the launch of an IQC program.
* **Matched Comparisons:** Compare outcomes by NAICS and size, using synthetic controls where feasible.

## Data architecture and standards that enable discovery at scale

Standardizing "match fields" across portals and publishing structured data feeds enables line-item, subcontractor, and payment traceability.

### Minimum viable public reporting standard (open data)
* **Contract/Tender:** Identifier, procurement method, industry code (NAICS/UNSPSC), MBE-targeting flag, and expected threshold.
* **Supplier:** Certification types, certifying body, expiration date, and capacity signals (revenue/employee bands).
* **Subcontractors:** Approved subcontractor lists with certification and payment records.
* **Transactions:** Purchase order items, dates, amounts, and prompt-pay status.

### OCDS extensions and practical implementation
Portland uses the Open Contracting Data Standard (OCDS) to publish data from tender through implementation. They utilize extensions for subcontracting, task orders, and metrics to report certified spend [4]. By publishing biweekly JSON/CSV files and providing OData endpoints, cities can power interactive dashboards that allow MBEs to analyze historical pipelines.

## Capacity-building and lighter processes—what to budget and where to aim

Lighter award channels (like written quotes) combined with targeted technical assistance (TA) and grants shift small MBEs from discovery to delivery.

### Program components and costs to expect
Boston's Supplying Capital and Leveraging Education (SCALE) program selected 27 businesses to receive up to $200,000 in grant funding and six months of industry-specific technical assistance [1]. Cities should budget for TA cohorts, micro-grants, IQC-style program enablement, buyer training, and quarterly outreach fairs, tying each initiative to specific funnel KPIs.

## Legal and governance guardrails

Race-conscious tools must be narrowly tailored and backed by disparity evidence to survive strict scrutiny (as established in *City of Richmond v. J.A. Croson Co.* and *Adarand Constructors, Inc. v. Peña*) [11] [12].

### Guardrail checklist
* **Current Disparity Study:** Maintain an updated disparity study (comparing utilization vs. availability by NAICS/size) to justify targeted tools [13].
* **Race-Neutral Measures:** Implement race-neutral measures first (e.g., unbundling contracts, prompt-pay initiatives, best-value scoring).
* **Narrow Tailoring:** Ensure race-conscious elements are narrowly tailored, track outcomes rigorously, and refresh disparity evidence every 5 years.

## Platform partners: what to require (and what not to assume)

Third-party platforms offer robust filtering and outreach capabilities, but rarely publish public adoption or impact metrics. Cities must make KPIs contractual.

| Platform | Discovery filters | Alerts | Compliance/KPIs | Integrations | Public adoption metrics |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **B2Gnow** | Certification type, certifying agency, NAICS [14] | Yes | Spend/utilization, subs [15] | ERP/B2G subs | Rarely public |
| **Bonfire** | Certification capture, vendor DB (~250k), promotes diverse subs [16] | Yes | Workflow/uptime; some client case stats | ERP/email; auto-notify vendors [17] | Anecdotal |
| **OpenGov** | KPI frameworks and dashboards; supplier categorization [18] | Yes | Analytics for spend/engagement [19] | ERP suite | Thought leadership, not usage stats |

*Takeaway:* Cities should contractually require platform partners to provide anonymized, public quarterly KPIs (MBE registrations, alerts sent/opened, response rates, awards) to ensure the tools are actually driving MBE engagement.

## Action plan: 90-day blueprint for a discovery-to-awards lift

Stand up a minimal, measurable discovery-to-award pathway and publish results in 90 days.

### Week 1–4: Data and UX
* Publish or upgrade the certified vendor directory to include NAICS, certification type, and size bands.
* Release a 12-month buying plan with OData/CSV export capabilities.
* Add "M/WBE-targeted" tags to solicitations and enable automated email alerts.

### Week 5–8: Channel and capacity
* Launch an IQC or small-purchase pilot requiring 3+ M/WBE quotes in three high-spend NAICS categories.
* Host two micro-cohort technical assistance sessions focused on the new quoting process.
* Enable prompt-pay reporting for the pilot contracts.

### Week 9–12: Measure and iterate
* Publish funnel KPIs (registrations, alert conversions) and outcome snapshots.
* Identify and fix search/alert UX issues based on vendor feedback.
* Scale the pilot to additional NAICS categories that show the highest alert-to-award conversion rates.

## References

1. *Equity in City Contracts Pages*. https://www.boston.gov/sites/default/files/file/2025/10/FY25%20EICC%20Report_0.pdf
2. *Annual Report on M/WBE Procurement - Office of the New ...*. https://comptroller.nyc.gov/reports/annual-report-on-m-wbe-procurement-fy25/
3. *
      
    Record-breaking MWBE contract awards and utilization rates | Committee on Contracts | New York City Council | March 24, 2025 | citymeetings.nyc

    *. https://citymeetings.nyc/meetings/new-york-city-council/2025-03-24-0100-pm-committee-on-contracts/chapter/record-breaking-mwbe-contract-awards-and-utilization-rates/
4. *Publication Policy: Data User Guide | Portland.gov*. https://www.portland.gov/business-opportunities/ocds/pdx-ocds-publication-policy
5. *
    City of Chicago :: Minority and Women owned and BEPD firms
*. https://www.chicago.gov/city/en/depts/dps/provdrs/cert/svcs/certdirectory.html
6. *Fetched web page*. https://data.cityofchicago.org/api/views/fa8m-mqz6/rows.csv?accessType=DOWNLOAD
7. *RAMP Opportunity Awards | Los Angeles - Open Data Portal*. https://data.lacity.org/City-Infrastructure-Service-Requests/RAMP-Opportunity-Awards/h8mw-iegk
8. *PHL OEO Annual Report 2024_DRAFT_06042024*. https://www.phila.gov/media/20240818145152/Fiscal-Year-2023-Office-of-Economic-Opportunity-Annual-Report.pdf
9. *Inclusive Quote Contract (IQC) | Boston.gov*. https://www.boston.gov/economic-opportunity-and-inclusion/inclusive-quote-contract-iqc
10. *
  Annual Report on M/WBE Procurement - Office of the New York City Comptroller
Mark Levine*. https://comptroller.nyc.gov/reports/annual-report-on-fy-24-mwbe-procurement/
11. * City of Richmond v. J. A. Croson Co. | 488 U.S. 469 (1989) | Justia U.S. Supreme Court Center*. https://supreme.justia.com/cases/federal/us/488/469/
12. * Adarand Constructors, Inc. v. Peña | 515 U.S. 200 (1995) | Justia U.S. Supreme Court Center*. https://supreme.justia.com/cases/federal/us/515/200/
13. *Disparity Study: A tool towards equitable procurement*. https://www.boston.gov/government/cabinets/economic-opportunity-and-inclusion/disparity-study-tool-towards-equitable-procurement
14. *Supplier Diversity in Procurement Solutions & Tools | B2Gnow*. https://b2gnow.com/supplier-diversity-in-procurement/
15. *Diversity Spend Reporting | Supplier Diversity Spend Tracking*. https://b2gnow.com/solutions/vendor-management-software/spend-tracking/
16. *Support vendor diversity at your agency with Bonfire*. https://gobonfire.com/wp-content/uploads/Vendor-Diversity-in-Bonfire.pdf
17. *Paving the way for eProcurement adoption in New Jersey*. https://gobonfire.com/wp-content/uploads/BonfireBergenCounty-CaseStudy-1.pdf
18. *Government Supplier Diversity [2025 Guide] | OpenGov*. https://opengov.com/government-supplier-diversity/
19. *Contracting for Equity: Supplier Diversity in Modern Government*. https://opengov.com/article/contracting-for-equity-a-strategic-blueprint-for-supplier-diversity-in-modern-government/
