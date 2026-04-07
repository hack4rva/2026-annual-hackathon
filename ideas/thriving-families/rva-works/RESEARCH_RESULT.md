# Beyond Job Matching: How U.S. Cities are Engineering Digital Platforms for Wraparound Workforce Support

## Executive Summary

U.S. municipalities are fundamentally redesigning their workforce development platforms to address the complex, intersecting barriers that prevent residents from securing and retaining employment. Moving beyond simple labor exchanges, cities are engineering digital ecosystems that coordinate wraparound services such as transportation, childcare, housing, and criminal record expungement. 

**Key Strategic Insights & Actions:**
* **The Shift to Hybrid Architectures:** Cities are moving away from building custom referral front-ends from scratch. Instead, they are investing in centralized Master Data Management (MDM) layers and procuring interoperable commercial off-the-shelf (COTS) platforms for the user interface. **Action:** Procure interoperable COTS platforms while maintaining city ownership of the underlying data integration layer.
* **The Deduplication Imperative:** Fragmented systems mask true program efficacy. San Francisco's Workforce Services Inventory revealed massive duplication across departments, prompting a Client Deduplication Plan to track unduplicated outcomes [1] [2]. **Action:** Implement a Common Client Index (CCI) early in platform design to accurately measure cross-agency program dosage.
* **Embedding Barrier Removal in Workflows:** Leading platforms explicitly integrate barrier remediation. Detroit at Work connects users to childcare and expungement navigation [3], while Philadelphia integrates transit passes directly into its system [4]. **Action:** Mandate that workforce platform RFPs include automated triggers for supportive services based on initial intake assessments.
* **Navigating Privacy and Consent:** Integrating housing, justice, and health data triggers strict compliance hurdles (HIPAA, 42 CFR Part 2) [5] [6]. **Action:** Establish an interagency data-sharing governance committee to draft specific, use-case-based MOUs before initiating technology procurement.
* **Standardizing Social Care Data:** Open data standards like Open Referral's Human Services Data Specification (HSDS) and the HL7 FHIR Gravity Project for Social Determinants of Health (SDOH) are solving resource fragmentation [7] [8]. **Action:** Require all contracted vendors to expose resource directories via Open Referral and FHIR-compliant APIs.
* **Closing the Referral Loop:** Traditional systems suffer from referral leakage. Platforms utilizing bidirectional, closed-loop referrals notify case managers when a client actually receives a service, drastically improving outcomes [9]. **Action:** Transition to active, closed-loop referral systems that incentivize community-based organizations (CBOs) to report back on referral outcomes.

## 1. The Municipal Workforce Platform Landscape

### 1.1 The Transition from Job Matching to Holistic Barrier Removal
Historically, workforce development systems focused primarily on rapid labor market attachment. However, the Workforce Innovation and Opportunity Act (WIOA) recognizes that job seekers face non-employment-related barriers, mandating that American Job Centers (AJCs) offer access to wraparound services through program partners [10]. By integrating access to these critical services within the workforce system, cities help ensure that more participants can overcome barriers and fully participate in the labor market [10].

### 1.2 Defining the Core Barriers: Transportation, Childcare, Housing, and Justice Involvement
The most significant barriers to employment are logistical and systemic. Lack of child care, transportation, stable housing, or income support can prevent individuals from successfully engaging in training or employment [10]. For justice-involved individuals, clearing a criminal record provides critical opportunities for employment, housing, and education [3]. 

### 1.3 Build vs. Buy: The Rise of Hybrid Municipal-Commercial Architectures
Cities are increasingly adopting hybrid technology architectures. Rather than building monolithic custom applications, municipalities are developing secure, city-owned data integration layers that feed into specialized, commercially available case management and referral platforms. This approach balances the need for strict municipal data governance with the rapid deployment and user-friendly interfaces of modern software-as-a-service (SaaS) products.

## 2. Deep Dive: Exemplary City-Led Platforms

### 2.1 New York City's Worker Connect and ACCESS NYC API Integration
New York City's HHS-Connect initiative established Worker Connect, a data integration system that allows provisioned city workers to view client information across multiple city agencies [11] [12]. By utilizing a "Common Client Index" and sophisticated matching algorithms, caseworkers can view demographic data, household composition, and case histories [11]. Furthermore, the NYC Benefits Platform provides a Screening API that checks potential eligibility for over 40 benefit programs without taking in personally identifiable information (PII) [13]. The city's Workforce1 system uses an internally-developed database, Worksource1, to maintain information on candidates and track services [14].

### 2.2 San Francisco's Workforce Services Inventory and Client Deduplication Plan
San Francisco's Committee on City Workforce Alignment utilizes an annual Workforce Services Inventory to compile agency-reported client demographics and program data [1]. Recognizing that client duplication across different agencies skews data, the city is developing a Client Deduplication Plan [1] [2]. This plan creates a unified framework to integrate and match data across workforce programs, enabling the City to track unduplicated outcomes for over 65,000 client touchpoints annually [2].

### 2.3 Detroit at Work's Integration of Connect4Care and Expungement Services
Detroit at Work serves as a centralized entry point for jobseekers, explicitly addressing barriers to employment. The platform connects residents to Connect4Care, an online tool that helps families find childcare and check eligibility for financial assistance [3]. Additionally, Detroit at Work provides dedicated support for justice-involved residents, offering free expungement services to clear criminal records, alongside transportation assistance and career coaching [3].

### 2.4 Chicago's DFSS Transitional Jobs and Coordinated Entry System Linkages
Chicago's Department of Family & Support Services (DFSS) invests heavily in populations with limited work skills, including persons with criminal records and those experiencing homelessness [15]. The city's Transitional Jobs programs provide time-limited, subsidized employment coupled with intensive wraparound services [15]. For housing instability, the Chicago Coordinated Entry System connects people experiencing a housing crisis to assistance, utilizing standardized tools to prioritize those with the most severe needs [16].

### 2.5 Philadelphia Works' PA CareerLink and Adult Education Integration
Philadelphia Works manages the PA CareerLink system, connecting career seekers to job training and support services [17]. The system integrates Title II adult education services, allowing providers to make streamlined literacy referrals through CitySpan, a centralized intake and assessment system [4]. Philadelphia Works also provides direct supportive services, including SEPTA public transportation passes and clothing allowances for individuals in training [4].

## 3. Technical Architecture and Interoperability Standards

### 3.1 Implementing a Common Client Index (CCI) for Cross-Agency Identity Resolution
A foundational element of integrated municipal platforms is the Common Client Index (CCI). As demonstrated by NYC's Worker Connect, a CCI identifies clients shared across agencies using matching algorithms, allowing caseworkers to view a unified history without creating a single, vulnerable database [11]. This architecture provides one-time snapshots of approved data to authorized workers [11].

### 3.2 Open Referral (HSDS) and HL7 FHIR Gravity Project Adoption
To solve the fragmentation of community resource directories, cities are adopting open data standards. Open Referral's Human Service Data Specifications (HSDS) serve as the industry standard for resource directory information exchange [7]. Concurrently, the HL7 FHIR Gravity Project focuses on developing consensus-based standards that enhance data interoperability for Social Determinants of Health (SDOH) [8] [18].

### 3.3 Integrating Specialized Systems: HMIS, CJIS, and Transit Subsidy APIs
Effective wraparound coordination requires integrating specialized municipal systems. Homeless Management Information Systems (HMIS) collect client-level data on housing services [19]. Transit subsidy integrations, such as those utilizing Token Transit's API, allow cities to seamlessly distribute digital transit passes to workforce participants [20].

## 4. Commercial Vendor Ecosystem and Trade-offs

### 4.1 Unite Us: Closed-Loop Referrals and the NowPow Acquisition
Unite Us builds coordinated care networks that allow providers to send and receive secure electronic referrals and track outcomes [21]. The platform's closed-loop referral system provides deep insight into a client's care journey, tracking whether a need was "resolved" or "unresolved" [9]. In 2021, Unite Us acquired NowPow, integrating NowPow's personalized, evidence-based referral algorithms into its end-to-end social care solutions [22].

### 4.2 Findhelp (Aunt Bertha) and Bonterra Apricot: Directory Scale vs. Case Management
Findhelp (formerly Aunt Bertha) operates as a massive social services search engine, making it easy for individuals and navigators to find and apply for government and charitable programs [21]. Bonterra's Apricot provides robust case management tools, offering intake forms, scheduling, and rules/alerts to alleviate administrative workloads for nonprofits and government agencies [23].

### 4.3 Salesforce and Microsoft Dynamics: Configurable CRM Backbones
For cities requiring highly customized workflows, platforms like Salesforce and Microsoft Dynamics offer robust Customer Relationship Management (CRM) backbones. These platforms provide compliance-enabled environments (e.g., Salesforce Government Cloud) designed for scale, flexibility, and rapid implementation in the public sector [24].

### 4.4 Comparative Analysis of COTS Platforms vs. Custom Municipal Builds

| Architecture Approach | Speed-to-Value | Total Cost of Ownership (TCO) | Data Ownership & Portability | Best Fit For |
| :--- | :--- | :--- | :--- | :--- |
| **Custom Municipal Build** | Slow (Years) | High (Requires dedicated engineering teams) | Complete municipal control; high portability | Large cities with mature IT departments and complex, unique legal compliance needs (e.g., NYC Worker Connect). |
| **COTS Referral Networks (Unite Us, Findhelp)** | Fast (Months) | Medium (Subscription/License based) | Vendor-managed; requires strict SLAs for data extraction | Mid-to-large cities needing immediate closed-loop referral capabilities and broad CBO network access. |
| **COTS CRM Platforms (Salesforce, Dynamics)** | Medium (6-12 Months) | High (Licensing + Custom Configuration) | High control; data resides in city-managed cloud tenant | Cities needing deep case management, custom workflows, and integration with existing enterprise systems. |
| **Hybrid (City MDM + COTS Frontend)** | Medium | Medium-High | City retains core identity data; vendor handles UI/UX | Advanced municipalities seeking to balance strict data governance with modern, user-friendly caseworker tools. |

*Takeaway: Cities should avoid building custom user interfaces from scratch. The most sustainable model is a Hybrid approach where the city manages the Master Data Management (MDM) and Common Client Index, while leveraging COTS platforms for the caseworker and jobseeker front-ends.*

## 5. Governance, Privacy, and Legal Frameworks

### 5.1 Structuring Inter-Agency Data Exchange Agreements
Data sharing across municipal agencies requires robust legal frameworks. NYC's HHS-Connect established an Interagency Data Sharing Agreement, signed by agency commissioners, to create a framework for secure exchange [11]. This agreement ensures that specific data are shared only with permitted staff using the information for a set purpose ("if you don't need it, you don't see it") [11].

### 5.2 Managing Consent and Data Minimization
Compliance with federal regulations like HIPAA and 42 CFR Part 2 (which protects substance use disorder patient records) is critical [5] [6]. Platforms must manage explicit patient consent. For example, the NYC Benefits Screening API mitigates privacy concerns by not taking in personally identifiable information (PII) like name, address, or date of birth during the initial screening phase [13].

### 5.3 Overcoming the "Silo Mentality" Through Executive Steering
Successful implementations rely on problem-solving approaches rather than blanket data requests. By creating specific "business use cases" that identify the purpose, access levels, and benefits of the data, cities can turn general confidentiality concerns into discrete, resolvable legal issues [11].

## 6. Measuring Outcomes and ROI

### 6.1 Moving Beyond "Rapid Attachment" to Measure Long-Term Retention
Modern workforce evaluations are shifting focus from immediate job placement to long-term economic mobility. Return on Investment (ROI) analyses, such as those conducted by NYC Opportunity, demonstrate that quality employer-informed training pays off for participants and taxpayers, with training recipients earning significantly more than matched comparison groups in the quarters following program exit [25].

### 6.2 Tracking Barrier Resolution Metrics
To prove the efficacy of wraparound services, platforms must track specific barrier resolution metrics. For instance, 2-1-1 San Diego's Community Information Exchange (CIE) tracks shifts in vulnerability across 14 social domains, measuring success by reductions in emergency medical service (EMS) utilization and improvements in housing stability [24].

### 6.3 Utilizing State Wage Data for Longitudinal Tracking
To enable data-driven decision-making, cities are integrating state wage data (such as Unemployment Insurance data) to track long-term outcomes. This allows municipalities to measure workforce outcomes consistently across programs, understanding how clients fare long after leaving the workforce development system [25].

## References

1. *fy 2021-22 citywide workforce services*. https://media.api.sf.gov/documents/FY_2122_Workforce_Services_Inventory_Summary_DRAFT_FINAL.pdf
2. *Citywide Workforce Development Plan FY 2024-2029*. https://media.api.sf.gov/documents/FY_24-29_Citywide_Workforce_Development_Plan_for_adoption_0.pdf
3. *Help | Detroit at Work*. https://detroitatwork.com/help
4. *Development Board Opportunity Act LOCAL PLAN*. https://philaworks.org/wp-content/uploads/sites/4/2023/10/FinalLocal-Plan_Philadelphia_2025-2028-6.30.25.pdf
5. *42 CFR Part 2 -- Confidentiality of Substance Use Disorder ...*. https://www.ecfr.gov/current/title-42/chapter-I/subchapter-A/part-2
6. *Fact Sheet 42 CFR Part 2 Final Rule | HHS.gov*. https://www.hhs.gov/hipaa/for-professionals/regulatory-initiatives/fact-sheet-42-cfr-part-2-final-rule/index.html
7. *Frequently Asked Questions – Open Referral*. https://openreferral.org/faq/
8. *SDOH and the Gravity Project - SDOH Clinical Care v3.0.0- ...*. https://build.fhir.org/ig/HL7/fhir-sdoh-clinicalcare/sdoh_challenges_gravity.html
9. *Unite Us Closed-Loop Referrals | SDOH Screening & Referrals*. https://uniteus.com/products/closed-loop-referral-system/
10. *Beyond Job Placement: Reimagining WIOA for Economic Mobility and Workforce Resilience*. https://tcf.org/content/report/beyond-job-placement-reimagining-wioa-for-economic-mobility-and-workforce-resilience/
11. *Data Integration and Cross-Agency Collaboration*. https://vera-institute.files.svdcdn.com/production/downloads/publications/data-integration-cross-agency-collaboration.pdf
12. *
                                  Worker Connect | Vera Institute                  *. https://www.vera.org/publications/worker-connect-a-process-evaluation-of-a-new-york-city-data-integration-system
13. *NYC Benefits Platform: Dataset and Screening API*. https://www.nyc.gov/site/opportunity/portfolio/nyc-screening-api.page
14. *2025-2029-Local-Plan-Draft-for-Public-Comment. ...*. https://www.nyc.gov/assets/wkdev/downloads/pdf/2025-2029-Local-Plan-Draft-for-Public-Comment.pdf
15. *
    City of Chicago :: Guide to Workforce Services Programs
*. https://www.chicago.gov/city/en/depts/fss/provdrs/workforce_development/svcs/a_guide_to_worknetchicagoprogramsandlocations.html
16. *
    City of Chicago :: Chicago Coordinated Entry System
*. https://www.chicago.gov/city/en/depts/fss/provdrs/emerg/svcs/system-planning-and-coordination.html
17. *GOOD JOBS CHALLENGE Project Narrative: Philadelphia ...*. https://www.eda.gov/sites/default/files/2022-08/Philadelphia-Works-Inc-Project-Narrative.pdf
18. *The Standard  |  The Official Blog of HL7 | Gravity*. https://blog.hl7.org/topic/gravity
19. *Homeless Management Information System NYC HMIS ...*. https://www.nyc.gov/assets/nycccoc/downloads/pdf/NYCHMIS_Policies_and_Procedures_v6.0_Effective_Oct2023.pdf
20. *Bulk Purchase – Token Transit API Reference (version 2020-05-21)*. https://www.tokentransit.com/developer/docs/api/
21. *findhelp (fka Aunt Bertha) vs Unite Us*. https://marketplace.aviahealth.com/compare/24875/25265
22. *Unite Us acquires NowPow to address health and social needs nationwide - uniteus.com*. https://uniteus.com/press/nowpow/
23. *Implementing online client engagement tools | Bonterra Tech*. https://www.bonterratech.com/resources/best-practices-any-nonprofit-can-use-implement-bonterra-case-managements-online-client
24. *Case Study | 2-1-1 San Diego: Connecting Partners ...*. https://www.chcs.org/media/2-1-1-San-Diego-Case-Study_080918.pdf
25. *Independent Evaluation - Return on Investment Analysis of ...*. https://www.nyc.gov/assets/opportunity/pdf/evidence/training_roi_report_final.pdf
