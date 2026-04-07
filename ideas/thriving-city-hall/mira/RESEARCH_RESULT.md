# From ECM to AI Contract Compliance: What US Cities Can Do Now

## Executive Summary

While there is growing interest in AI-powered contract analysis among US municipal governments, public, verifiable examples of full contract-clause analytics (enterprise-class Contract Lifecycle Management) deployments with published accuracy rates and measured staff-time savings remain scarce. Instead, the current municipal reality is that local governments are successfully deploying Enterprise Content Management (ECM) systems integrated with Intelligent Document Processing (IDP) and Robotic Process Automation (RPA). Platforms like Hyland OnBase are primarily used for document capture, classification, and data extraction from PDFs and forms, serving as the foundational launchpad for future AI compliance tools.

Early municipal wins come from IDP tasks, such as redaction and header extraction, which deliver massive time compression. For example, King County, Washington, successfully processed 96% of targeted documents using AI redaction, reducing processing time from 30 minutes to less than five seconds per document [1]. Meanwhile, the demand for true clause-level analytics is building, evidenced by the City of Oakland's recent Request for Information (RFI) seeking an "AI Contract Compliance Tracker/assistant" [2]. However, strict governance scrutiny, such as the New York City Comptroller's audit of the MyCity Chatbot [3] and the District of Columbia's AI Procurement Handbook [4], means that any AI deployment must be accompanied by rigorous human-in-the-loop (HITL) oversight, transparent AI Factsheets, and defensible accuracy metrics. 

## Where Municipal AI Is Today: ECM/IDP First, Clause Analytics Next

Clause-level contract AI is still nascent in US municipalities. The measured value today lies in capture, classification, and redaction using established ECM and IDP stacks. Cities and counties run platforms like Hyland OnBase, IBM FileNet, and Microsoft SharePoint, and the fastest path to value is layering extraction and compliance checks onto this existing corpus rather than ripping and replacing systems.

### Verified Municipal Implementations
Rather than deploying end-to-end AI contract readers, municipalities are achieving operational efficiency through targeted automation:
* **King County, Washington:** Partnering with the county assessor's office, the IT team utilized AI in a prototype redaction service to remove sensitive information from property tax exemption applications. The system successfully processed 96% of documents, reducing redaction time from 30 minutes to less than five seconds [1].
* **Housing Authority of the City of Los Angeles (HACLA):** HACLA utilizes Hyland's OnBase as a foundational enterprise platform for centralized electronic document management, workflow automation, and records management compliance across departments [5].
* **Horry County, South Carolina:** The county integrated Hyland RPA with OnBase to process property tax returns, automating the processing of 30,000 returns without human interaction [6].
* **Wasatch County, Utah:** The county uses OnBase for comprehensive enterprise content management, including record retention policies and workflow automation [7].
* **City of Oakland, California:** Moving toward advanced contract analytics, Oakland issued an RFI for 30 AI use cases, explicitly including an "AI Contract Compliance Tracker/assistant" to review city contracts and flag missing compliance items, schedules, and insurance documentation [2].

## Municipal Examples Matrix

The following table outlines the current landscape of municipal AI and IDP deployments, highlighting that published metrics currently center on document processing rather than clause-level legal analytics.

| Municipality | Platform/Tool | Use Case & Document Types | Reported Metrics | Status |
| :--- | :--- | :--- | :--- | :--- |
| **King County, WA** | AWS Textract / IDP | Redaction of PII in tax applications; data extraction from medical examiner reports | 96% success rate; processing time reduced from 30 minutes to <5 seconds per document [1] | Pilot |
| **HACLA (Los Angeles)** | Hyland OnBase | ECM, workflow automation, records management for contracts, memos, and invoices | N/A (Focus on system modernization, SSO, and security upgrades) [5] | Production |
| **Horry County, SC** | Hyland RPA + OnBase | Automated processing of property tax returns | 30,000 returns processed without human interaction [6] | Production |
| **Covered California (State)** | Google Document AI | IDP for healthcare eligibility documents (income, expenses) | Freed up 10,000 people-hours in the first year [1] | Production |
| **City of Oakland, CA** | Various (RFI stage) | AI Contract Compliance Tracker/assistant for city contracts | N/A (Currently in RFI evaluation phase) [2] | Pre-Pilot |

*Takeaway: Published municipal metrics exist for IDP (redaction and extraction), not clause analytics. Municipalities should use IDP pilots to generate momentum and baseline ROI before advancing to complex contract compliance AI.*

## Barriers and Enablers: What Will Slow You Down (and How to Avoid It)

Deploying AI for contract analysis in a municipal environment involves navigating strict regulatory, technical, and governance hurdles. Integration with legacy ECMs, procurement language gaps, and public-records governance are the top barriers.

| Barrier | Why It Matters | Evidence | Mitigation Pattern |
| :--- | :--- | :--- | :--- |
| **Legacy ECM Integration** | Municipal documents are locked in data silos (OnBase, FileNet) with custom taxonomies, making AI ingestion difficult. | Widespread use of OnBase [5] and FileNet [8]; integration requires specific API/CMIS configurations [9]. | Use read-only connectors and staging repositories. Extract PDFs and index data via API/RPA, normalize in a data lake, and push compliant metadata back. |
| **Weak AI Contracting Language** | Unverified vendor claims lead to audit failures; municipalities lack standard SLAs for AI performance. | NYC Comptroller audit disputed OTI's 95-99% accuracy claims for the MyCity Chatbot [3]. | Adopt the DC AI Procurement Handbook guidelines: require AI Factsheets, change-notification clauses, and human-vs-AI baseline comparisons [4]. |
| **Records, FOIA, and Privacy** | Public records laws require strict redaction, audit logs, and adherence to retention schedules. | King County prioritized PII redaction [1]; Seattle policy mandates FOIA compliance for AI outputs [10]. | Implement automated redaction with HITL QA. Maintain immutable audit logs linking AI outputs to source PDFs and retention schedules. |
| **Limited Public References** | Risk aversion stalls procurement because vendors lack municipal clause-level case studies. | Scarcity of published municipal clause analytics metrics. | Structure procurements as two-phase pilots (IDP first, then clauses). Leverage cooperative purchasing vehicles like OMNIA or NASPO [11] [12]. |

*Takeaway: Do not attempt to migrate data out of legacy ECMs permanently. Instead, federate the data using connectors, and ensure all vendor contracts include strict AI transparency and performance SLAs.*

## Architecture Patterns That Work with OnBase

The most effective architecture for municipal contract analytics avoids ripping and replacing legacy systems. Instead, it relies on a "Connect, Stage, Analyze, Return" pattern. 

1. **Connector (API/RPA):** Extract the PDF and its existing metadata from OnBase or FileNet.
2. **Staging Repository:** Normalize the data in a secure, temporary environment.
3. **IDP/Extraction:** Run OCR, classification, and redaction.
4. **Clause Analytics Service:** Apply LLMs or specialized contract AI to extract specific clauses.
5. **Write-Back:** Push the compliant metadata, flags, and redacted documents back to the ECM, keeping it as the system of record.

| Integration Option | Pros | Cons | Best Used When |
| :--- | :--- | :--- | :--- |
| **API Integration** | High accuracy, speed, and stability. | Requires administrative access and development resources. | The ECM (e.g., OnBase) supports robust APIs and the municipality controls the schema. |
| **RPA Bridge** | Fast to stand up without deep backend integration. | Fragile and susceptible to breaking if the user interface changes. | API access is limited or cost-prohibitive. |
| **File-Drop Polling** | Simple to implement and highly secure. | Slower SLAs; lacks real-time processing. | Operating in low-change, highly secure environments. |

## Pilot Design to Generate Defensible Metrics

Because municipal clause-level metrics are scarce, cities must design pilots that generate their own defensible numbers, treating the evaluation like a clinical trial. The 2026 ContractEval benchmark provides a baseline for what is possible in the enterprise space: top-tier proprietary models (like Sirion) achieved a 94.2% F1-score on commercial terms, while open-source models scored lower and required significant fine-tuning [13].

### Evaluation Framework
* **Scope:** Focus on frequent procurement clauses first (e.g., parties, effective dates, governing law, insurance requirements).
* **Metrics:** Measure clause-level precision, recall, and F1-scores. Track reviewer agreement and time-to-review.
* **Sampling:** Use 200-400 clause instances with double annotation to create a gold standard.

| KPI | Definition | Target (Phase 1: IDP) | Target (Phase 2: Clauses) |
| :--- | :--- | :--- | :--- |
| **Redaction Precision/Recall** | Accuracy of PII detection and masking. | &ge;0.97 / &ge;0.95 | N/A |
| **Header Field Accuracy** | Correct extraction of party names, dates, and totals. | &ge;98% | N/A |
| **Clause F1-Score** | Harmonic mean of precision and recall at the text-span level. | N/A | &ge;0.87 (for common clauses) |
| **Reviewer Time** | Minutes spent per document by staff. | -70% vs. baseline | -40% vs. baseline |
| **Escalation Rate** | Percentage of documents requiring SME intervention. | &le;10% | &le;25% |

*Takeaway: Set realistic expectations. AI will perform well on standard clauses but will struggle with rare or highly negotiated terms. Budget for human-in-the-loop review.*

## Procurement & Governance Playbook

To successfully procure AI contract tools, municipalities must update their contracting language. The District of Columbia's AI Procurement Handbook provides a prescriptive model [4].

**SOW Essentials for AI Procurement:**
* **AI Factsheet:** Require vendors to disclose training data, testing data, performance metrics, and optimal/poor operating conditions [4].
* **Human-in-the-Loop (HITL):** Mandate that AI outputs, especially those influencing consequential decisions, are reviewed by human staff [10].
* **Change Notification:** Require vendors to notify the city if the underlying AI model is updated or changed post-award [4].
* **Cooperative Purchasing:** Utilize established vehicles like OMNIA Partners or NASPO ValuePoint to streamline the procurement of ECM and IDP services [11] [12].

## Roadmap: 90 Days to Value, 180 Days to Clause Checks

Sequence low-risk, high-ROI steps to build trust and evidence before attempting complex legal analysis.

* **Phase 0 (Weeks 1-3) - Data Readiness:** Inventory the OnBase repository, establish API/RPA connectors, and complete security reviews.
* **Phase 1 (Weeks 4-10) - IDP Outcomes:** Deploy PII redaction and header extraction on procurement attachments. Publish cycle-time gains (aiming for the 30 min to <5 sec benchmark).
* **Phase 2 (Weeks 11-24) - Clause Analytics Pilot:** Select 8-12 standard clauses. Establish a gold standard, implement HITL workflows, and measure F1-scores and time saved.
* **Phase 3 (Week 24+) - Compliance Rules:** Build automated rules (e.g., flagging expired COIs or missing indemnity clauses) and integrate alerts into the ECM approval workflow.

## Risk and Audit Readiness

Assume the AI deployment will be audited. The NYC Comptroller's audit of the MyCity Chatbot highlighted the risks of deploying AI without structured testing and verifiable accuracy claims [3]. 

To mitigate risk, municipalities must avoid overstated accuracy claims and unlogged model changes. Implement independent validation, maintain immutable audit logs that map to records retention schedules, and ensure that procurement terms grant the city robust audit rights over the vendor's AI performance. Transparency is a requirement, not a preference.

## References

1. *State and Local Agencies Deploy Artificial Intelligence for Document Processing | StateTech Magazine*. https://statetechmagazine.com/article/2025/04/state-and-local-agencies-deploy-artificial-intelligence-document-processing
2. *City of Oakland - RFI*. https://www.rabbittransit.org/wp-content/uploads/2026/03/request-for-information-rfi-ai-use-case-pilots-final.pdf
3. *Audit Report on the New York City Office of Technology and ...*. https://comptroller.nyc.gov/wp-content/uploads/2026/02/MyCity-System-Development-Public-Final-report-12-30-25-final-copy.pdf
4. *Artificial Intelligence (AI) Procurement Handbook*. https://techplan.dc.gov/sites/default/files/u23/1E.%20AI%20Procurement%20Handbook%20-FINAL.pdf
5. *2026.02.19 Item B1- Hyland Contract for OnBase.pdf*. https://hacla.org/sites/default/files/2026-02/2026.02.19%20Item%20B1-%20Hyland%20Contract%20for%20OnBase.pdf
6. *Horry County Case Study | Hyland*. https://www.hyland.com/en/customers/horry-county
7. *Wasatch County Case Study | Hyland*. https://www.hyland.com/en/customers/wasatch-county
8. *The Commonwealth of Massachusetts Case Study | Hyland*. https://www.hyland.com/en/customers/state-of-massachusetts
9. *Integration considerations for IBM
FileNet Content Manager - IBM Documentation*. https://www.ibm.com/docs/en/baw/24.0.x?topic=products-filenet-content-manager
10. *Artificial Intelligence (AI) Policy*. https://seattle.gov/documents/departments/tech/privacy/ai/artificial_intelligence_policy-pol211%20-%20signed.pdf
11. *Cooperative contracts and public procurement| NASPO ValuePoint*. https://www.naspovaluepoint.org/cooperative-contracts/
12. *State & Local Gov't Cooperative Purchasing | OMNIA Partners*. https://www.omniapartners.com/industries/government
13. *2026 Clause Extraction Accuracy: Sirion vs Open-Source*. https://www.sirion.ai/library/contract-insights/clause-extraction-benchmark-sirion-vs-llms/
