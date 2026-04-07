# From Alerts to Outcomes: How Contract-Expiration Notifications Can Curb Emergencies and Expand Competition

## Executive Summary
Missed contract renewals represent a material risk to municipal governments, frequently triggering a cascade of rushed, non-competitive emergency procurements. While direct, peer-reviewed studies quantifying the exact reduction in emergency spending solely attributable to automated alerts are scarce, a robust chain of evidence from municipal audits and Human-Computer Interaction (HCI) research strongly supports their implementation. Audits from jurisdictions like Santa Clara County and Berkeley reveal that poor expiration tracking directly leads to lapsed contracts and the overuse of emergency waivers [1] [2]. 

Crucially, these emergency procurements suppress competition and disproportionately harm Minority and Women-Owned Business Enterprises (M/WBEs). In New York City, M/WBEs captured just 3.45% of emergency contract value [3], and in Berkeley, non-competitive practices contributed to an estimated $21.7 million in lost M/WBE opportunities between 2016 and 2019 [4]. To combat this, municipalities are increasingly adopting Contract Lifecycle Management (CLM) and eProcurement systems (e.g., SAP Ariba, Bonfire, PlanetBids) equipped with automated push notifications. Evidence from notification science indicates that active push alerts (email/SMS) significantly outperform passive dashboards in driving timely action [5]. By pairing clean contract data with escalating push notifications and strict policy defaults, procurement leaders can reclaim planning windows, reduce costly emergency spending, and expand equitable access to government contracts.

## Evidence Landscape and Causality Grade
The premise that automated alerts reduce emergency spending relies on a strong mechanistic chain of evidence, even if direct pre/post municipal studies are currently lacking in the public domain. 

Municipal audits consistently identify the root cause of emergency procurements as poor planning and invisible expiration dates. For example, a Santa Clara County audit found that 25% of Board contracts had incorrect expiration dates in their SAP system, warning that such inaccuracies cause contracts to expire "before the responsible department realizes its renewal is due," resulting in "rushed contract renewals" and emergency measures [1] [6]. Similarly, the State of Maryland spends an average of $50 million annually on emergency procurements, often for foreseeable needs like maintenance, bypassing standard competitive safeguards [7].

### Evidence Strength by Link
| Link in Causal Chain | Key Evidence | Jurisdiction / Source | Rating |
| :--- | :--- | :--- | :--- |
| Poor expiry tracking leads to emergencies | 25% wrong expirations caused rushed renewals and emergency equipment rentals. | Santa Clara County (2021 Audit) [1] | Strong |
| Emergencies reduce competition and M/WBE share | M/WBEs received only 3.45% of emergency value; emergency awards had lower competition. | NYC Comptroller (2023) [3]; Maryland OPEGA (2021) [7] | Strong |
| Push alerts outperform passive dashboards | Active alerts draw immediate attention; tailored push prompts increase within-24h engagement. | HCI/Marketing Literature; Vroozi [5] | Moderate |
| Alerts directly reduce emergency spending | Direct municipal before/after metrics are rarely published openly. | N/A (Measurement needed) | Weak |

While the final link requires local measurement, the foundational evidence is strong enough to justify deploying automated alerts as a high-ROI, low-regret intervention.

## Jurisdiction Scan
Several U.S. municipalities and school districts are actively implementing or upgrading their contract management systems to include automated notifications. 

### Municipal Implementations and Status
| Jurisdiction | Technology | Alert Capability | Status & Challenges |
| :--- | :--- | :--- | :--- |
| **Dallas, TX** | Salesforce + Bonfire ECM | "Automate renewal notifications for expiring contracts" [8]. | **Status**: Implementation underway (2024-2025). **Challenges**: Siloed support and compliance-oriented culture [8]. |
| **Santa Clara County, CA** | SAP migrating to Ariba | Expiration statuses and alerts [9]. | **Status**: Migration began Summer 2025 [10]. **Challenges**: Severe data governance issues; 25% of SAP end dates were incorrect [1]. |
| **Austin ISD, TX** | Bonfire Contract Module | Automated notifications for upcoming renewals [11]. | **Status**: Implementation targeted for June 2024 [11]. **Challenges**: Previously relied on fragmented Excel files [11]. |
| **San Diego, CA** | PlanetBids | Automated email notifications for solicitations [12]. | **Status**: Mature use for bidding [13]. **Challenges**: Emergency procurements still utilize manual memo processes [14]. |
| **Berkeley, CA** | Legacy CMS / Tyler Munis | Lacked automated alerts for milestones [15]. | **Status**: Audits recommended a "true contract management system" [15]. **Challenges**: Outdated processes led to non-competitive contracts [2]. |

## Mechanism Design
To effectively interrupt the cycle of lapsed contracts and subsequent emergency waivers, alerts must be tied to actionable policy triggers. A passive notification is easily ignored; an escalating alert tied to a default action forces a decision.

### Recommended Alert Cadence and Escalation
| Timeline | Channel | Recipient | SLA | Escalation / Policy Trigger |
| :--- | :--- | :--- | :--- | :--- |
| **T-180 / T-120** | Email Digest | Contract Owner | Ack 5 days | Reminder to owner; confirm owner assignment. |
| **T-90** | Email + Push | Owner + Supervisor | Ack 2 days | Escalate to Chief Procurement Officer (CPO); launch re-solicitation plan. |
| **T-60** | Email + SMS | Owner + CPO | Ack 24 hours | Escalate to Department Head; if no justification provided, initiate RFP. |
| **T-30 / T-7** | SMS + Push | Owner + Finance/Legal | Immediate | CFO brief; default to open competition unless emergency exception is formally approved. |

## Push vs Dashboard
Relying solely on passive dashboards for contract management is a documented failure point. As noted by procurement technology vendors, "Dashboards are passive; alerts are active. Our attention is always drawn to alerts" [5]. Push notifications (email, SMS, mobile app alerts) deliver context directly to the user, allowing for immediate resolution without requiring them to log into a system to search for pending tasks [5]. 

Municipalities should conduct A/B testing during implementation: randomize contract owners to receive either dashboard-only access or push notifications plus dashboard access. Key metrics to track include acknowledgement latency, the incidence of missed renewals, and the downstream rate of emergency or sole-source requests.

## Equity Impact Pathway
Missed contract renewals and the resulting emergency procurements have a devastating, documented impact on supplier diversity. Emergency procurements bypass standard competitive solicitation processes and M/WBE participation goals. 

In New York City, emergency contracts are exempt from M/WBE participation goals, resulting in M/WBEs capturing just 15% of emergency contracts and a dismal 3.45% of the total emergency procurement value [3]. Similarly, the State of Maryland's evaluation found that emergency procurements consistently lacked MBE participation and competition compared to standard procurements [7]. In Berkeley, a disparity study highlighted that non-minority males received 77.29% of contracts, while African Americans and Native Americans received zero, with an estimated $21.7 million in lost M/WBE opportunities tied to non-competitive and on-call contract bundling [4]. 

By utilizing automated alerts to prevent contract lapses, municipalities preserve the standard procurement timeline, ensuring that contracts are re-competed openly and subject to established M/WBE inclusion goals.

### Equity Metrics to Track
| Metric | Definition | Source | Cadence |
| :--- | :--- | :--- | :--- |
| **M/WBE Spend Share** | M/WBE $ share on competed vs. non-competed expiring categories. | eProcurement Reports | Quarterly |
| **Transition to Competition** | Number/% of expiring awards transitioned to open competition rather than waived. | CLM / ERP | Quarterly |
| **Single-Bid Rate** | Percentage of re-solicited expiring categories receiving only one bid. | Bid System | Quarterly |

## Adoption Risks and How to Mitigate
Deploying an alert system on top of bad data will only generate noise and alert fatigue. Santa Clara County's experience serves as a critical warning: the county had multiple versions of contract truth spread across SAP, Ariba, and department hard drives, with 25% of SAP end dates being incorrect [1]. 

### Implementation Guardrails
| Risk | Mitigation Strategy | Owner | Success Metric |
| :--- | :--- | :--- | :--- |
| **Wrong Expirations** | Conduct a one-time contract census; enforce mandatory date fields and date-range controls in the ERP/CLM [1]. | CPO / IT | % of records with validated end dates. |
| **No Clear Owner** | Enforce a named owner in the CLM with a defined escalation tree. | CPO | % of alerts acknowledged within SLA. |
| **Passive Alerts** | Utilize multi-channel push (Email + SMS) for critical T-60 and T-30 milestones. | CPO | Median acknowledgement latency. |
| **No Policy Trigger** | Institute a default policy: expiring contracts must be re-solicited unless a waiver is approved. | Legal / CPO | % of expiring awards re-solicited. |

## Measurement Plan
To prove the ROI of automated alerts within 12 to 18 months, municipalities must establish baselines and track specific KPIs.

### KPIs & Targets
| KPI | Baseline | 12-Month Target | 18-Month Target |
| :--- | :--- | :--- | :--- |
| **Emergency Procurement $ Share** | Current % | -20% | -30% |
| **Single-Bid Rate (Expiring Categories)** | Current % | -15% | -25% |
| **% Expiring Awards Re-solicited** | Current % | +25 pts | +35 pts |
| **M/WBE $ Share on Expiring Categories** | Current % | +3 pts | +5 pts |
| **Ack Median Latency at T-90** | 5 days | 1 day | < 12 hours |

## Technology Options and Integration
Municipalities do not necessarily need to buy net-new software; many existing platforms have native alerting capabilities that simply need to be configured and governed.
* **SAP Ariba**: Used by Santa Clara County; supports contract statuses (e.g., Draft, Expired) and automated invoice handling [1] [9].
* **Bonfire**: Used by Dallas and Austin ISD; features contract management modules capable of generating automated renewal notifications [8] [11].
* **PlanetBids**: Used by San Diego; highly effective for vendor notifications and bid management, though internal expiration alerting requires specific configuration [16] [12].
* **SpotDraft / Agiloft**: Dedicated CLM platforms that automate expiry alerts, renewal reports, and provide full audit trails [17] [18].

## Roadmap & Budget
* **0-90 Days (Data & Policy)**: Conduct a contract census. Cleanse key fields (end dates, owners). Define policy triggers. Configure alerts in the incumbent system. Pilot in two high-spend departments.
* **90-180 Days (Rollout & Testing)**: Expand to all departments. Activate escalation workflows. Begin A/B testing (Push vs. Dashboard). Stand up BI reporting.
* **180-365 Days (Optimization)**: Enforce policy compliance. Publish quarterly equity and competition metrics. Evaluate ROI based on avoided emergency spend.

## FOIA/Data Acquisition Plan
To build a localized business case, procurement strategists should submit public records requests to peer jurisdictions (e.g., Dallas, Santa Clara County, Austin ISD, San Diego, Berkeley). 
**Requested Datasets**:
1. Annual emergency/waiver procurement logs (counts and dollar values).
2. Contract registries including expiration dates and renewal statuses.
3. M/WBE award dollars segmented by procurement method (competitive vs. emergency/sole-source).
4. CLM alert logs (sent, opened, acknowledged timestamps) to evaluate push notification efficacy.

## References

1. *no-single-source-truth-county-santa-clara-countywide ...*. https://santaclara.courts.ca.gov/system/files/civil/no-single-source-truth-county-santa-clara-countywide-procurement.pdf
2. *Outdated Process Led to Non-Competitive Contracts*. https://berkeleyca.gov/sites/default/files/2026-03/City%20Auditor%20Presentation%20-%20Contracts%20Audit%2003-10-2026.pdf
3. *
  Rethinking Emergency Procurements - Office of the New York City Comptroller
Mark Levine*. https://comptroller.nyc.gov/reports/rethinking-emergency-procurements/
4. *city of berkeley availability study - draft final report*. https://newspack-berkeleyside-cityside.s3.amazonaws.com/wp-content/uploads/2021/11/City-of-Berkeley-Disparity-Study-Draft-FInal-Report-1.pdf
5. *7 Ways AI Helps Procurement Teams Act Faster, Not Just Smarter | Vroozi*. https://www.vroozi.com/blog/7-ways-ai-helps-procurement-teams-act-faster-not-just-smarter/
6. *Management-Audit-Procurement-Department- ...*. https://files.santaclaracounty.gov/migrated/Management-Audit-Procurement-Department-082721.pdf
7. *Evaluation of Emergency Procurement*. https://dls.maryland.gov/pubs/prod/ProgEval/EvaluationofEmergencyProcurement.pdf
8. *Reimagining Procurement Services*. https://dallascityhall.com/government/citymanager/Documents/Council%20Materials/Item%20C.%20Reimagining%20Procurement%20Services.pdf
9. *Active contracts glossary of report fields | Procurement Department | County of Santa Clara*. https://prc.santaclaracounty.gov/opportunities-and-active-contracts/active-contracts/active-contracts-glossary-report-fields
10. *Migration of County Contracts from SAP to Ariba | Procurement Department | County of Santa Clara*. https://prc.santaclaracounty.gov/vendor-resources/migration-county-contracts-sap-ariba
11. *Procurement Internal Audit Final Report*. https://www.austinisd.org/sites/default/files/dept/board/Gibson.AISD%20Procurement%20Internal%20Audit%20Report.pdf
12. *Vendor Registration | City of San Diego Official Website*. https://www.sandiego.gov/purchasing/bids-contracts/vendorreg
13. *San Diego County Regional Airport Authority: Tailored eProcurement Solutions by PlanetBids*. https://home.planetbids.com/case-studies/city-of-san-diego
14. *PROCUREMENT MANUAL*. https://www.sandiego.gov/sites/default/files/sd_procurement_manual.pdf
15. *Ann-Marie Hogan, City Auditor Submitt*. https://berkeleyca.gov/sites/default/files/2022-01/Citywide%20Contracts%20Review_Issue%20Fiscal%20Year%202016.pdf
16. *PlanetBids - Contract Bidding | NCTD - North County Transit District*. https://gonctd.com/about-nctd/business-with-nctd/planetbids/
17. *How to track contract expirations with CLM - Agiloft*. https://www.agiloft.com/blog/how-to-track-contract-expirations-with-clm/
18. *Contract Management for Procurement: Gain End-to-End Vendor Contract Visibility*. https://www.spotdraft.com/for-procurement
