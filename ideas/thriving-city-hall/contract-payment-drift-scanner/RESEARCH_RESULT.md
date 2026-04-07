# From contracts to cash: how US cities use open data to catch procurement overruns and payment drift

## Executive Summary

US municipal governments are increasingly leveraging open data platforms (like Socrata) and the Open Contracting Data Standard (OCDS) to cross-reference contract metadata with payment records. This data integration allows cities to detect contract overruns, payment drift, unauthorized order splitting, and systemic invoice backlogs. 

The evidence shows that joining contract awards to payment transactions yields immediate financial and operational visibility. **Portland** has built the blueprint using OCDS to tie contracts to payments at the purchase order (PO) line level, enabling automated flags when payments exceed contract values [1] [2]. **Austin** exposes overrun risk in plain sight by publishing master-agreement limits alongside inception-to-date orders [3]. Meanwhile, **New York City** and **Philadelphia** have used contract-to-payment joins to surface massive, systemic "payment drift" that cripples nonprofit service providers, prompting mayoral interventions and the clearing of hundreds of millions of dollars in backlogged invoices [4] [5] [6]. 

When controls fail, the financial impact is severe. Audits in **San Francisco** and **Chicago** utilizing these exact data joins have uncovered millions of dollars in improper single-payment vouchers, split POs designed to evade oversight thresholds, and unauthorized advance payments [7] [8]. Fortunately, academic research and open-source toolkits like the Open Contracting Partnership's (OCP) Cardinal library and Isolation Forest machine learning models provide ready-to-run methodologies to automate anomaly detection [9] [10]. By implementing rule-based gates and scaling to algorithmic red flags, local governments can prevent overruns before cash leaves the treasury.

## What to detect and where it lives in your data

Overruns and payment drift generally reduce to a few consistent mathematical checks—such as "sum of transactions vs. contract value," "registration date vs. invoice date," and "authorized caps vs. orders." These checks map cleanly to OCDS and common municipal finance schemas hosted on platforms like Socrata.

### Field mapping that operationalizes the controls

To automate anomaly detection, procurement and finance systems must join specific fields. 
* **OCDS Schemas:** The standard maps `contracts/value.amount` (the initial or amended contract value) against `contracts/implementation/transactions/value.amount` (the PO-level or payment items) [1]. It also utilizes `contracts/implementation/finalValue` and `agreedMetrics` to track prime and subcontractor payments [1].
* **Socrata / Common Finance Schemas:** Typical joins require linking `contract_number` or `PO number` to payment tables using `transaction_id`, `voucher_number`, `amount`, and `check_date` [11] [12]. 
* **Real-World Examples:** The City of Austin's Socrata contracts dataset explicitly tracks `ma_prch_lmt_am` (authorized purchase limit) against `ma_itd_ord_am` (inception-to-date orders) [3]. Portland's OCDS release maps SAP "Original Con Amt." plus amendments directly to SAP "Total Invoiced to Date" [1].

### Rule catalog for immediate implementation

Cities can deploy a standard set of rule-based red flags to catch anomalies:
1. **Payments exceed award:** Sum of payments > contract value (including amendments).
2. **Split POs:** Multiple purchases to the same vendor, on the same date, just below the oversight threshold (e.g., $9,999 when the cap is $10,000).
3. **Direct Voucher (DV) misuse:** DV payments made to vendors that already have an active master contract.
4. **Unregistered invoicing:** Invoices paid before the official contract registration date.
5. **Identical bid prices:** Different tenderers submitting bids with the exact same price.
6. **Incomplete high-risk logs:** Missing recipient signatures on prepaid gift card logs or stipend distributions.

### Sample SODA and OCDS pseudocode

To replicate these checks programmatically:
* **SODA API (Socrata):** `SELECT contract_number, SUM(amount) FROM payments GROUP BY contract_number HAVING SUM(amount) > (SELECT award_amount FROM contracts WHERE contracts.contract_number = payments.contract_number)`
* **OCDS (Conceptual):** Group by `ocid`; flag if `sum(implementation.transactions.value.amount) > contracts.value.amount`.

## Jurisdiction playbook and evidence

Portland and Austin expose overrun math directly through their open data portals, while NYC and Philadelphia demonstrate how payment-drift analytics can quantify systemic bottlenecks. San Francisco and Chicago highlight how cross-checks uncover active misuse and trigger immediate governance reforms.

### Municipal contract and payment anomaly detection

| Jurisdiction | Platform & Data Joined | Anomalies Detected | Financial Impact | Procurement & Audit Response |
| :--- | :--- | :--- | :--- | :--- |
| **Portland, OR** | OCDS (weekly). Joins `contracts/value.amount` to `implementation/transactions/value.amount` via SAP PO IDs. [1] [2] | Payments exceeding contract value; PO-level visibility; subcontractor payment discrepancies. [2] | Dataset explicitly notes some contract values are not commensurate with award values. [2] | Implemented OCDS publication policy; developed BI dashboards and equity monitoring metrics. [1] |
| **Austin, TX** | Socrata. Joins `ma_prch_lmt_am` (limit) vs `ma_itd_ord_am` (orders) via `DOC_ID`. [3] | Near or over master-agreement caps. [3] | Fields enable automated alerts before overruns occur. [3] | Publishes contract caps and orders to support gating and alerts. [3] |
| **New York City, NY** | PASSPort + FMS + Checkbook. Joins registration status, invoice headers, and FMS spend. [4] | **7,000+ unpaid invoices >$1B**; **2,508 unregistered contracts ($4.6B)**; average first payment delayed >200 days (HPD averaged 765 days). [4] | Massive backlog scale threatening nonprofit solvency. [4] | Recommended launching ContractStat; implemented partial payments for undisputed lines; rebooted backlog-clearing initiatives. [4] |
| **San Francisco, CA** | Financial system + DataSF. Joins vouchers, invoices, grants, contracts, and payments. [7] | **$3.1M** improper single payments; **$1.79M** split POs; **$127k** unauthorized advances. [7] | **$46,495** in quantified overpayments; millions flagged as improper. [7] | Suspended Prop Q delegated authority; mandated training; referred cases to City Attorney; updated policies. [7] |
| **Chicago, IL** | Socrata + FMPS. Joins Contracts (PO/Contract #) to Payments (`CONTRACT NUMBER`). [11] [12] | Direct Voucher (DV) misuse; payments exceeding awards. [11] [8] | Historical audit found **$14.2M** improper DV disbursements and **$5.5M** in policy violations. [8] | Improved transparency tools; updated direct voucher policy to limit eligible goods/services. [8] |
| **Philadelphia, PA** | OpenDataPhilly + Finance. Joins contract term `amt` vs `tot_payments`. [5] [13] | **90%** of contracts conformed late; **$3.4B** in late contracts. [5] | Mayor cleared **$221M** in outstanding invoices across 550+ contracts in 5 weeks. [5] [6] | System overhaul; expanded expedited contracting pathways; direct vendor engagement. [5] [6] |
| **King County, WA** | Auditor review. Joins invoices vs budgets; prepaid/stipend docs. [14] | Improper payments, deviations without amendments, weak prepaid card logs. [14] | Recovered a **$37,500** improper payment; numerous corrections required. [14] | Recommended new policies, anti-fraud training, and strict invoice validation checklists. [14] |

**Key Takeaways:** The data shows that when cities actively monitor the delta between contract awards and actual payments, they uncover massive inefficiencies. NYC and Philadelphia proved that late contract registration directly causes hundreds of millions in payment drift, while San Francisco and Chicago proved that lack of payment-to-contract validation leads to millions in unauthorized spending.

## Implementation guide: stand up an overrun/drift dashboard in 60 days

Local governments do not need to build complex machine learning models on day one. Starting with rule-based joins wired to approval gates provides immediate ROI.

### Week 1-2: Source and profile
* **Inventory:** Identify tables for contracts (awards, amendments), POs, invoices/vouchers, and payments. Extract primary keys (contract ID, PO number, vendor ID).
* **Map:** Run the OCP Cardinal `coverage` command on OCDS data (or map Socrata fields using the OCP mapping template) to assess if bids, prices, and transactions exist [15] [10].
* **Clean:** Execute data quality fixes for currencies, statuses, and IDs using the Cardinal `prepare` command [10].

### Week 3-4: Build core rules and gates
* **Deploy Rules:** Implement the overrun rule (payments > award), cap-approach alerts (flagging at 90% of limit), split-PO detectors, and Direct Voucher-without-contract checks.
* **UX & Process:** Build an exceptions queue with SLA timers. Define who owns the resolution (buyer, audit officer, finance) and establish escalation ladders and auto-holds on payments.

### Week 5-8: Red flags and ML add-ons
* **Scale Indicators:** Compute 10-15 OCP indicators (e.g., single bid, identical prices, short submission windows, excessive disqualifications) [10].
* **Advanced Analytics:** Add unsupervised models like Isolation Forest to prioritize reviews across exceptions, validating against labeled sets of known audits or complaints [9].
* **Automation:** Integrate partial-payment automation for undisputed invoice lines to prevent vendor cash-flow crises [4].

## Controls that prevent—not just detect—losses

Dashboards without enforcement gates will not prevent payment drift or overruns. Controls must be embedded directly at approval points.

### System blocks and preventive edits
Financial systems must enforce a hard block on payments if a valid contract or PO is absent, or if `sum(payments)` exceeds the award plus approved amendments. Over-cap orders should auto-route for a contract amendment *before* encumbrance. For unregistered contracts, systems should restrict invoice submission or enable partial payments only after specific risk checks are cleared [4].

### Documentation and high-risk spend
Audits frequently reveal that high-risk expenditures lack documentation. Procurement workflows must require attached logs for stipends and prepaid cards (including recipient signatures), explicit subcontractor approvals, and strict change-order thresholds [7] [14]. 

## Replicability recipes: queries and joins you can copy

A few standard joins power the majority of procurement controls.

### Portland OCDS
* **Overrun:** Group by `ocid`: `sum(contracts.implementation.transactions.value.amount) > contracts.value.amount` [1].
* **Subcontractors:** `sum(contracts.agreedMetrics.observations.value.amount)` grouped by supplier versus prime commitments [1].

### Austin Socrata
* **Cap Alert:** `SELECT doc_id, ma_prch_lmt_am, ma_itd_ord_am, CASE WHEN ma_itd_ord_am/ma_prch_lmt_am >=.9 THEN 'NEAR_CAP' END...` [3].

### Chicago Socrata
* **Overrun:** `SELECT p.contract_number, SUM(p.amount) AS paid, c.amount AS award FROM payments p JOIN contracts c USING (contract_number) HAVING SUM(p.amount) > c.amount` [11] [12].

### San Francisco DataSF
* **Split POs:** Join Vendor Payments (Vouchers) to Supplier Contracts on contract/grant IDs. Flag Direct Voucher payments to vendors with active master agreements, and detect split POs by querying for the same vendor, same date, and amounts just below the $10,000 threshold [7] [16].

## Toolkit & evidence: what works, with code and metrics

Academic literature and civic-tech repositories offer proven, reproducible methods for detecting procurement anomalies. Rule-based red flags are fast to implement, while machine learning helps triage massive datasets.

### Academic and open-source anomaly detection methods

| Method / Tool | Maps to Fields | Validation / Results | Code / Tool Link |
| :--- | :--- | :--- | :--- |
| **OCP Red Flags (2024)** | OCDS tender, award, contract, implementation. | 73 indicators implemented in multiple countries; formulas fully documented. [17] | [Red Flags Guide (PDF)](https://www.open-contracting.org/wp-content/uploads/2024/12/OCP2024-RedFlagProcurement-1.pdf) [17] |
| **OCP Cardinal Library** | OCDS coverage/prepare; indicators (R003, R024, R036, R038). [10] | Used in Dominican Republic and Ecuador; built-in data fixes; powers agency dashboards. [10] | [cardinal.readthedocs.io](https://cardinal.readthedocs.io/en/latest/index.html) [10] |
| **Isolation Forest (Paraguay)** | OCDS multi-stage features; generates anomaly scores. [9] | **45% to over 90%** of known anomalies (protests/complaints) flagged early in tender/contract stages. [9] | [GitLab Repo](https://gitlab.com/MaEliK/otherframeworks) [9] |
| **TBFY Anomaly Detection** | OCDS conversion; feature vectors; daily cron runs. [18] | Applied to Slovenian procurement/spend and multi-country Knowledge Graphs. [18] | [GitHub TBFY/anomaly-detection-tool](https://github.com/TBFY/anomaly-detection-tool) [18] |

**Key Takeaways:** Standardized data is the critical enabler. Tools like Cardinal can automatically correct structural errors, normalize IDs, and calculate collusion risks (e.g., identical bid prices, short submission periods) [10]. However, implementers must watch for false positives (e.g., payments posted late to a current term) and gaming (e.g., invoice splitting). 

## Risk, ethics, and equity

While strict controls prevent fraud, they must not starve essential service providers. As seen in Philadelphia and NYC, late contract registration and rigid invoice workflows force nonprofits to take out expensive lines of credit to cover payroll [4] [5]. Controls should incorporate ContractStat-style transparency for aging invoices and allow partial payments on clean invoice lines [4]. Procurement teams must ensure that automated flags do not disproportionately delay payments to small or minority-owned businesses, and must publish clear appeal and exception workflows.

## Policy and governance levers

To align directives with analytics, leadership must mandate that all vouchers link to a valid contract in the financial system. Policies must explicitly define and prohibit split-purchasing, require documented approvals for subcontractors, and mandate public logs for high-risk items like prepaid cards [7] [14]. 

## Roadmap & KPIs

To measure success, cities should track specific KPIs over a 180-day rollout:
* **0-60 days:** Measure the % coverage of contract-to-payment joins, the 

# of high-risk agreements near their cap, and the total $ flagged exceeding awards.
* **60-120 days:** Track the median days from contract start to registration, and invoice to payment. Monitor the % of partial payments adopted and the 

# of exceptions cleared.
* **120-180 days:** Target a % reduction in over-cap events, track actual $ recoveries, measure the % of contracts with clean subcontractor logs, and quantify data quality improvements using Cardinal's prepare fixes.

## References

1. *Publication Policy: Data User Guide | Portland.gov*. https://www.portland.gov/business-opportunities/ocds/pdx-ocds-publication-policy
2. *United States: Procurement Services of the City of Portland | OCP Data Registry*. https://data.open-contracting.org/en/publication/155
3. *Contracts | Open Data | City of Austin, Texas*. https://data.austintexas.gov/Budget-and-Finance/Contracts/84ih-p28j
4. *
  Nonprofit, Nonpayment - Office of the New York City Comptroller
Mark Levine*. https://comptroller.nyc.gov/reports/nonprofit-nonpayment/
5. *Government Contracting in Philadelphia | The Pew Charitable Trusts*. https://www.pew.org/en/research-and-analysis/articles/2026/03/24/government-contracting-in-philadelphia
6. *Mayor Cherelle L. Parker Details Action Plan to Streamline and Improve City Contracts Process   | Office of the Mayor | City of Philadelphia*. https://www.phila.gov/2024-11-01-mayor-cherelle-l-parker-details-action-plan-to-streamline-and-improve-city-contracts-process/
7. *The Human Rights Commission Violated the City's ...*. https://media.api.sf.gov/documents/HRC_Prop_Q_Audit_Report_09.16.25.pdf
8. *Direct Voucher Audit Report*. https://igchicago.org/wp-content/uploads/2011/03/IGODirect-VoucherAudit-Final-pdf.pdf
9. *Anomaly Detection in Public Procurements using the Open ...*. https://www.researchgate.net/publication/342620446_Anomaly_Detection_in_Public_Procurements_using_the_Open_Contracting_Data_Standard
10. *Cardinal, an open-source library to calculate public procurement red flags - Open Contracting Partnership*. https://www.open-contracting.org/2024/06/12/cardinal-an-open-source-library-to-calculate-public-procurement-red-flags/
11. *Socrata payments | City of Chicago | Data Portal*. https://data.cityofchicago.org/Administration-Finance/Socrata-payments/k3u2-nhet
12. *vendor | City of Chicago | Data Portal*. https://data.cityofchicago.org/Administration-Finance/vendor/qzds-jfc2
13. *contracts/professional-services/data/README.md at gh-pages · CityOfPhiladelphia/contracts · GitHub*. https://github.com/CityOfPhiladelphia/contracts/blob/gh-pages/professional-services/data/README.md
14. *Fetched web page*. https://cdn.kingcounty.gov/-/media/king-county/independent/governance-and-leadership/government-oversight/auditors-office/reports/audits/2025/dchs-contracts/dchs-contracts-2025.pdf?rev=de1da047b6c94b9d9ac69aebf3b4de4f&hash=A3D1D5746BFA9C7911E02029536AA559
15. *OCDS 1.1 Field Level Mapping Template - Open Contracting Partnership*. https://www.open-contracting.org/resources/ocds-field-level-mapping-template/
16. *Supplier Contracts | DataSF - San Francisco Open Data*. https://data.sfgov.org/City-Management-and-Ethics/Supplier-Contracts/cqi5-hm2d
17. *Red Flags in Public Procurement. A guide to using data to detect and mitigate risks - Open Contracting Partnership*. https://www.open-contracting.org/resources/red-flags-in-public-procurement-a-guide-to-using-data-to-detect-and-mitigate-risks/
18. *GitHub - TBFY/anomaly-detection-tool · GitHub*. https://github.com/TBFY/anomaly-detection-tool
