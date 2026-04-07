# Contracts in the Middle: How 100k-500k US Cities Modernize CLM without Breaking Finance

## Executive Summary

For US municipalities with populations between 100,000 and 500,000, modernizing vendor contract lifecycle management (CLM) is a high-stakes balancing act. These cities possess enterprise-level complexity but lack enterprise-level IT budgets and staffing. Based on an analysis of municipal modernization initiatives through April 2026, several critical insights emerge:

* **Hybrid-by-Default Stacks are the Norm:** Mid-sized cities increasingly retain their core Enterprise Resource Planning (ERP) systems (like Oracle or SAP) as the system of record for financials, while layering specialized, best-of-breed eProcurement and CLM tools on top to handle sourcing and contract workflows.
* **UAT Realism Predicts Success:** The single biggest predictor of post-go-live failure is inadequate User Acceptance Testing (UAT). Projects that rely on "dummy data" rather than production clones consistently face severe operational disruptions and audit findings post-launch.
* **Procurement-First Modernization Delivers Quick Wins:** Cities that sequence their modernization by deploying eSourcing and CLM platforms *before* attempting massive core ERP replacements achieve faster time-to-value, measurable cost savings, and higher user adoption.
* **Controls and Segregation of Duties (SoD) are Critical:** Technology alone cannot fix broken processes. Implementations that fail to hardwire SoD—such as separating vendor setup from invoice payment—result in severe audit exceptions and heightened fraud risk.
* **Vendor and Staff Continuity is Essential:** High turnover among internal project teams or external consultants during implementation destroys knowledge transfer, leaving cities vulnerable during the critical post-go-live hypercare phase.

## 1) Landscape: How 100k-500k Cities Actually Run Contracts Today

The current state of municipal contract management in the 100k-500k population band is highly fragmented. Rather than relying on a single monolithic system, most cities employ a composable architecture. They keep their ERP as the authoritative source for the General Ledger (GL), Accounts Payable (AP), and Purchase Orders (PO), while adopting specialized tools for the earlier stages of the contract lifecycle.

**ERP-Native Approaches:** Cities heavily invested in legacy ERPs often attempt to use native contract modules. For example, the City of Richmond, Virginia, utilizes an Oracle E-Business Suite (EBS) instance locally branded as "RAPIDS" [1]. Similarly, the Port of Oakland relies on Oracle EBS and is transitioning to Oracle Cloud Infrastructure (OCI) managed services [2] [3]. Other cities utilize SAP ECC or S/4HANA, such as Palo Alto, which recently approved a $6.6 million purchase order to upgrade to S/4HANA before its current system reaches end-of-life in 2027 [4].

**Best-of-Breed eProcurement and CLM:** There is a strong trend toward adopting specialized platforms like OpenGov, Bonfire, and SAP Ariba. The City of Tacoma, Washington, mandates that suppliers register and transact through SAP Ariba for bidding, contract management, and electronic invoicing [5] [6]. The City of Portland, Oregon, is executing a phased rollout of SAP Ariba, transitioning from supplier registration in 2025 to full solicitations and contracts by 2026 [7]. OpenGov has seen significant adoption, with cities like Tucson, Arizona, and Portsmouth, New Hampshire, utilizing it to digitize paper-based procurement manuals and ordinances [8] [9].

**Custom and Lightweight Systems:** Despite the availability of advanced tools, many mid-sized cities still rely heavily on Microsoft SharePoint, Excel spreadsheets, and network drives. While SharePoint offers basic document storage and versioning [10], it lacks structured metadata enforcement, automated renewal tracking, and obligation management, making it fragile at scale [11]. Managing contracts in Excel introduces severe risks, with studies indicating that 20% to 40% of spreadsheets contain errors, leading to missed deadlines and significant value leakage [12].

### Current-State Archetypes for Contract Lifecycle

| Architecture | Typical Tools | Strengths | Gaps/Risks | Best Fit |
| :--- | :--- | :--- | :--- | :--- |
| **ERP-Native** | Oracle EBS (RAPIDS), SAP S/4HANA, Tyler Munis | Tight financial integration; single vendor relationship. | Often clunky UX for sourcing; expensive to customize; slow implementation. | Cities with massive existing ERP footprints and strong IT governance. |
| **ERP + Best-of-Breed** | ERP Core + OpenGov, Bonfire, or SAP Ariba | Excellent user experience; rapid deployment; purpose-built for public sector. | Requires robust integration maintenance (APIs/flat files) between CLM and ERP. | Cities needing rapid modernization of sourcing/contracts without replacing the GL. |
| **Point Solutions** | DocuSign CLM, Adobe Sign | Quick to deploy; solves immediate e-signature bottlenecks. | Lacks end-to-end lifecycle visibility and financial integration. | Agencies needing a quick fix for execution while planning broader modernization. |
| **Custom / Lightweight** | SharePoint, Excel, Network Drives | Zero additional licensing cost; highly familiar to staff. | High error rates; no automated alerts; severe audit and compliance risks. | Highly constrained budgets; very low contract volumes. |

*Takeaway:* The most successful mid-sized cities are moving toward the "ERP + Best-of-Breed" archetype, recognizing that specialized procurement tools drive higher vendor participation and internal compliance than legacy ERP modules.

## 2) Modernization Attempts: What's Worked (and What Hasn't)

The success rates of municipal CLM and ERP modernizations vary wildly, largely dependent on project scoping and change management rather than the software selected.

**The Wins:** Phased, procurement-first rollouts consistently produce quick wins. Pinal County's transition from paper to Bonfire eSourcing enabled a consolidated managed print RFP that delivered significant annual savings [13]. The City of Tucson successfully implemented OpenGov Procurement after realizing their new ERP lacked the specific tools required for public sector procurement [8]. The City of Seattle's adoption of OpenGov centralized disparate departmental systems into a single portal, drastically simplifying the bidding process for vendors [14].

**The Stalls and Failures:** Big-bang ERP implementations with weak governance frequently stall or result in severe post-go-live operational crises. The City of Richmond's RAPIDS (Oracle EBS) implementation is a prime example. An audit revealed that the city used "dummy data" instead of production clones for User Acceptance Testing (UAT), resulting in a failure to identify processing issues and system defects prior to go-live [15]. Furthermore, the project suffered from over 60% turnover among trainers post-go-live, crippling knowledge transfer [15]. In another example, Norfolk County Council experienced significant delays and cost overruns in its Oracle ERP cloud migration due to integration complexities and testing validation issues [16].

### City Snapshots: Modernization Outcomes

| City | Platform(s) | Scope | Outcome | Evidence / Key Driver |
| :--- | :--- | :--- | :--- | :--- |
| **Richmond, VA** | Oracle EBS (RAPIDS) | Full ERP (Finance, HR, Procurement) | **Stall / Audit Failure** | Used dummy data for UAT; 60% trainer turnover; 3-way match eliminated [1] [15] [17]. |
| **Tacoma, WA** | SAP Ariba | Supplier Portal, Sourcing, Contracts, Invoicing | **Success** | Mandated supplier registration; clear phased rollout and training [5] [6]. |
| **Portland, OR** | SAP Ariba | Phased: Registration (2025) -> Contracts (2026) | **In Progress (On Track)** | Staged approach replacing legacy BuySpeed system incrementally [7]. |
| **Tucson, AZ** | OpenGov | Procurement & Contract Management | **Success** | Chose best-of-breed over native ERP modules for public-sector fit [8]. |
| **Palo Alto, CA** | SAP S/4HANA | ERP Upgrade | **In Progress** | Proactive $6.6M licensing upgrade ahead of 2027 end-of-life [4]. |

*Takeaway:* Cities that attempt to replace everything at once (big-bang ERP) frequently fail audits due to testing shortcuts. Cities that phase their rollouts (e.g., Portland, Tacoma) maintain operational stability.

## 3) Root Causes: Why Transitions Succeed or Stall

Empirical evidence from municipal audits points to four controllable factors that dictate the success or failure of a modernization initiative.

**1. UAT Realism:** Testing must reflect reality. Richmond's RAPIDS audit explicitly cited the use of "dummy data" during UAT and Conference Room Pilots (CRP) as a root cause for post-go-live failures, as it failed to produce the exceptions and defects normally associated with actual city business transactions [15]. 

**2. Controls and Segregation of Duties (SoD):** Modernization must enhance, not degrade, internal controls. Following the RAPIDS implementation, Richmond's Accounts Payable audit found that the fundamental control of a three-way match was eliminated, resulting in approximately 34% of invoices being paid without it [17]. Furthermore, AP personnel were granted the ability to set up new vendors and override purchase order limits, creating massive fraud vulnerabilities [17]. Similarly, an audit of Austin Aviation's contract management found that over 90% of contracts had missing or expired documentation due to reliance on manual entry across disjointed systems (eCAPRIS, Advantage, SharePoint, Excel) and a lack of secondary reviews [18].

**3. Team and Vendor Continuity:** High turnover destroys implementations. Richmond experienced significant unplanned turnover among City staff, contractors, and the Oracle implementation firm during and after the RAPIDS go-live, severely impacting post-go-live production support [15].

**4. Data Migration Pragmatism:** Attempting to migrate decades of dirty data into a new system guarantees delays. Successful projects convert only active contracts and 1-3 years of essential history, leaving the rest in a read-only legacy archive.

### Predictors -> Actions -> Metrics

| Predictor | Required Action | Success Metric |
| :--- | :--- | :--- |
| **UAT Realism** | Mandate testing on cloned production data; require end-to-end financial close rehearsals. | 100% of critical defects resolved prior to sign-off; successful parallel close. |
| **Governance & SoD** | Hardwire 3-way match and vendor setup separation into system roles. | 0% of invoices paid without 3-way match; zero AP staff with vendor creation rights. |
| **Team Continuity** | Contractually require named key personnel from the vendor; implement retention incentives for city staff. | <15% turnover in core project team and trainers through the 6-month hypercare phase. |
| **Data Migration** | Convert only active contracts and minimal history; cleanse data prior to import. | 100% data validation sign-off by business owners prior to cutover. |

*Takeaway:* Executive sponsors must treat UAT rigor, SoD enforcement, and team continuity as non-negotiable project gates, refusing to authorize go-live if these metrics are not met.

## 4) Decision Framework: Selecting the Right CLM/Procurement Path

For cities in the 100k-500k range, the technology path should be dictated by the existing ERP footprint and the urgency of procurement pain points.

* **For Oracle EBS Shops:** Do not immediately attempt a full rip-and-replace to Oracle Fusion Cloud. Instead, stabilize the current environment (e.g., moving EBS to OCI managed services, as seen in Oakland [2] [3]), and layer a best-of-breed eSourcing/CLM tool on top to deliver immediate user benefits while planning a longer-term ERP migration.
* **For SAP Shops:** Align procurement modernization with the SAP roadmap. Implement SAP Ariba for sourcing and supplier management, ensuring tight integration with the core SAP ECC or S/4HANA financials. Follow Tacoma and Portland's model of phased supplier onboarding [5] [7].
* **For Highly Manual/SharePoint Shops:** Prioritize implementing a dedicated contract repository with automated renewal alerts and e-signature capabilities immediately. This mitigates the severe risks of Excel/SharePoint tracking [12] [11] without requiring a massive IT overhaul.

## 5) 18-Month Modernization Playbook

To minimize risk and deliver measurable wins, mid-sized cities should adopt a phased, 18-month modernization sequence:

* **Months 0-3 (Foundation):** Establish a cross-departmental steering committee (Finance, Procurement, Legal, IT). Blueprint the required Segregation of Duties (SoD) and internal controls. Conduct a data inventory to identify active contracts and cleanse vendor master files.
* **Months 4-9 (Quick Wins):** Deploy a best-of-breed eSourcing and Contract Repository platform. Implement e-signatures. Begin supplier onboarding campaigns. This phase delivers immediate transparency and cycle-time reductions without touching the core ERP GL.
* **Months 10-18 (Integration & Expansion):** Integrate the new CLM/eProcurement platform with the core ERP for automated PO creation and AP workflows. Enforce the 3-way match. Roll out comprehensive training via a Learning Management System (LMS) and establish a 6-month hypercare support structure.

## 6) Controls & Compliance Blueprint

Audit readiness must be configured into the software from day one. As demonstrated by the Richmond RAPIDS failures [17], cities must enforce the following system controls:
* **Strict Segregation of Duties:** Personnel who process invoices (AP) must be systematically blocked from creating or modifying vendor records.
* **Automated 3-Way Match:** The system must require a matching PO, receiving report, and invoice before releasing payment. Overrides must require documented secondary executive approval.
* **Centralized Vendor Portal:** Shift the burden of data entry to the vendors via portals (like SAP Ariba or OpenGov), requiring them to upload W-9s and banking details, which are then verified by Procurement, not AP.

## 7) Integration & Data Strategy

Integration between the CLM and the ERP should be kept as simple and observable as possible. Define a clear "System of Record" for each data entity (e.g., the ERP owns the Vendor Master and GL; the CLM owns the Contract Document and Sourcing data). When migrating data, resist the urge to move everything. Convert only active contracts and 1-3 years of historical data. Leave legacy data in a secure, read-only archive to reduce migration complexity and cost.

## 8) Metrics & Business Case

Do not measure success merely by achieving "go-live." Measure success by business outcomes:
* **Cycle Time:** Reduction in days from solicitation posting to contract award.
* **Compliance:** Percentage of invoices successfully clearing the automated 3-way match.
* **Risk Reduction:** Zero missed contract renewals (tracked via automated system alerts).
* **Financial:** Hard dollar savings achieved through increased vendor competition and consolidated sourcing (e.g., Pinal County's $200k savings [13]).

## 9) Risk Register & Mitigations

* **Risk: UAT Shortcuts.** *Mitigation:* Contractually require the implementation vendor to use cloned production data for testing. Tie milestone payments to successful, defect-free end-to-end testing cycles.
* **Risk: Staff/Vendor Churn.** *Mitigation:* Include key-personnel clauses in vendor contracts. Implement retention bonuses for critical city IT and Finance staff tied to post-go-live stabilization metrics.
* **Risk: Supplier Adoption Lag.** *Mitigation:* Launch aggressive, multi-channel supplier enablement campaigns months before go-live, offering training webinars and dedicated support desks (following the Tacoma SAP Ariba model [5]).

## 10) Evidence Appendix

* **Richmond RAPIDS Audit Failures:** City Auditor Report 2014-04 details UAT dummy data usage and testing failures [1]. The FY2014 Single Audit documents 60% trainer turnover and lack of parallel testing [15]. The 2016 AP Audit details the elimination of the 3-way match and SoD violations [17].
* **SAP Ariba Phased Rollouts:** City of Tacoma's comprehensive supplier registration and Ariba integration [5] [6]. City of Portland's FAQ detailing the transition from BuySpeed to Ariba [7].
* **Best-of-Breed Successes:** Tucson's adoption of OpenGov over native ERP modules [8]. Portsmouth's modernization of procurement ordinances alongside OpenGov implementation [9].
* **Risks of Manual Systems:** Austin Aviation audit highlighting 90%+ error rates in contracts managed via SharePoint/Excel [18]. Industry data showing 20-40% error rates in spreadsheet-based contract tracking [12].

## References

1. *Richmond Department of Information Technology RAPIDS*. https://www.rva.gov/sites/default/files/Auditor/documents/2014/2014-04_RapidsAudit.pdf
2. *RFP-16-17-17-Oracle-E-Business-Suite-Upgrade-to-R12.2.x.pdf*. https://www.slideshare.net/slideshow/rfp161717oracleebusinesssuiteupgradetor122xpdf/256748610
3. *REQUEST FOR PROPOSAL*. https://www.portofoakland.com/wp-content/uploads/2024/08/24-25-02-final-Managed-Services-for-Oracle-EBS-on-Oracle-OCI-1.pdf
4. *Finance committee forwards $6.6 million SAP licensing purchase order to council; upgrade needed before current system end‑of‑life | Citizen Portal*. https://citizenportal.ai/articles/6468670/California/Santa-Clara-County/Palo-Alto/Finance-committee-forwards-66-million-SAP-licensing-purchase-order-to-council-upgrade-needed-before-current-system-endoflife
5. *Contracting Opportunities | City of Tacoma*. https://tacoma.gov/government/departments/finance/procurement-and-payables-division/purchasing/contracting-opportunities/
6. *SAP Ariba Registration | City of Tacoma*. https://tacoma.gov/government/departments/finance/procurement-and-payables-division/purchasing/sap-ariba/
7. *SAP Ariba Frequently Asked Questions | Portland.gov*. https://www.portland.gov/business-opportunities/doing-business-city/sap-ariba-faq
8. *Tucson AZ Modernizes Its Procurement Process With OpenGov*. https://opengov.com/customers/tucson-az-receives-positive-feedback-from-internal-and-external-stakeholders-after-modernizing-procurement-process/
9. *Portsmouth Modernizes Procurement with Digital Transparency | OpenGov*. https://opengov.com/customers/portsmouth-nh-modernized-procurement/
10. *Use the Contracts Management team site template - Microsoft Support*. https://support.microsoft.com/en-gb/office/use-the-contracts-management-team-site-template-80820115-c700-4a62-bb59-69b33c8e3b4f
11. *Can SharePoint Manage Contracts? The Limitations of SharePoint Contract Management at Scale*. https://www.contracts365.com/blog/sharepoint-contract-management-limitations
12. *Excel to CLM Migration: Legal Ops Workflow Automation 2026*. https://www.sirion.ai/de/library/contract-insights/excel-to-clm-migration-legal-ops-automation-playbook/
13. *Bonfire - Euna Procurement*. https://gobonfire.com/blog/author/bonfire/
14. *Paperless and Painless: How OpenGov Simplified Procurement - City Innovation Hub*. https://innovation-hub.seattle.gov/2025/03/05/paperless-and-painless-how-opengov-simplified-procurement/
15. *city of richmond, virginia - compliance reports*. https://www.rva.gov/sites/default/files/2019-04/ComplianceReport_FY2014.pdf
16. *Norfolk County Council suffers delay to Oracle ERP project • The Register*. https://www.theregister.com/2022/01/11/norfolk_county_council_oracle_delay/
17. *DEPARTMENT OF FINANCE Accounts Payable Division*. https://www.rva.gov/sites/default/files/Auditor/documents/2016/2016-01_FinanceAP.pdf
18. *Aviation Contract and Vendor Management*. https://services.austintexas.gov/edims/document.cfm?id=463452
