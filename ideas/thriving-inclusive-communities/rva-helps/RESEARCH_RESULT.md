# From Static Lists to Connected Care: Building Fresh, Interoperable Social Service Directories for Mid-Sized U.S. Cities

## Executive Summary

For mid-sized U.S. cities (populations of 100,000 to 500,000), the challenge of connecting vulnerable residents to social services is rarely a lack of available programs, but rather the fragmentation and rapid decay of the data describing them. Based on an extensive review of municipal implementations, academic evaluations, and technology standards, the most effective approach is a **federated hybrid model**: anchoring around a 211 system backbone, enforcing Human Services Data Specification (HSDS) interoperability, and utilizing AI-assisted maintenance to reduce manual labor. 

Key strategic insights include:
* **Federation beats fragmentation:** A hybrid 211+HSDS backbone with local stewardship cuts duplication and unlocks interoperability. The 211 National Data Platform (NDP) exposes HSDS-aligned APIs with updates ranging from daily to monthly, enabling multi-source reuse [1]. 
* **Freshness requires funding and cadence, not just tech:** Data decays rapidly. The healthcare industry spends an estimated $2.76 billion annually maintaining provider data, with practices spending nearly $1,000 per month responding to redundant requests [2]. Active stewardship with a 90–180 day verification cycle is required to combat this.
* **"Closed" is not "connected":** Outcome metrics must track the actual receipt of services, not just referral status. A study of the NCCARE360 platform at Duke Health showed a "closed-loop rate" (CLR) of 99%, but a patient-centered "successful connection rate" (SCR) of only 65% during a high-funding period, which dropped to 38% when funding waned [3].
* **Adoption > availability:** Directories only move the needle when integrated into workflows. A statewide study of Missouri 2-1-1 callers found that while 91% tried contacting a referral, only 36% actually received assistance [4]. However, receiving assistance tripled the odds of the caller's underlying problem being resolved [4].
* **AI slashes maintenance labor:** AI cannot replace human verification, but tools like the Open Referral Resource Record-Matcher can reduce dataset comparison tasks from days or weeks to just 30 minutes [5].

## Technology Approaches Compared

No single technology stack is a silver bullet. Mid-sized cities achieve the best results by hybridizing these approaches, using 211 systems as the core data utility while leveraging AI for deduplication and community tools for edge-case data gathering.

| Approach | Coverage & Scale | Freshness & Verification | Interoperability | Closed-Loop Capability | Cost/TCO (3–5 yrs) | Best Fit For Mid-Sized Cities |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **211-Centered Systems** (e.g., iCarol, Connect211, 211 NDP) | High. Aggregates national and local data [1]. | Weekly to monthly updates [1]. Stewarded QA. | Strong. Aligns with HSDS and AIRS standards [6] [7]. | Available in many platforms (e.g., iCarol ReferralQ) [8] [9]. | Medium. Subscription + staffing. | Fastest path to a comprehensive, multilingual directory with scaled partnerships. |
| **Custom Municipal Databases** (HSDS-native) | Variable. Depends entirely on local onboarding. | As funded. Best with 90–180 day cycles and provider portals. | Strong if built natively on HSDS [10]. | Requires custom vendor modules or bespoke builds. | Medium–High. Build costs + sustaining FTEs. | Cities requiring tailored workflows, strict local privacy control, and custom branding. |
| **Community-Maintained Wikis / Airtables** | High initial breadth, but variable depth. | Inconsistent without dedicated moderators. High risk of drift. | Can export to HSDS using templates (e.g., Open Referral Airtable) [11] [12]. | Limited. Relies heavily on manual warm handoffs. | Low–Medium. Tools are cheap, but curation requires labor. | Rapid inventory bootstrapping and grassroots coalition engagement. |
| **AI-Curated Directories** (e.g., Record-Matcher) | Enhances any base dataset by merging silos [5]. | Accelerates deduplication and change triage [5]. | Best when HSDS-native [5]. | Indirect. Improves the underlying data that drives referrals. | Low–Medium incremental. Tools + MLOps. | Scaling maintenance across multiple sources; unifying 211, city, and vendor lists. |

## Freshness & Staleness Dynamics

Data staleness is the primary failure point of social service directories. Contact records and program availability change constantly; B2B contact records generally experience a 30% decay rate every year [13]. In the healthcare sector, audits of Medicare Advantage directories found that nearly half of the information was outdated or incorrect [2]. When CAQH DirectAssure tested provider location data in Texas, 63% of health plan records were identified as erroneous by the providers themselves [14].

**Root Causes of Staleness:**
The burden of updating falls on the service providers, who are often understaffed. On average, providers contract with multiple plans and receive redundant requests by email, fax, and phone [2]. Without a centralized data utility, providers simply stop responding.

**Effective Verification Strategies:**
To combat staleness, cities must move away from annual checks and implement continuous, multi-channel verification:
* **Centralized Provider Portals:** Allowing providers to update their information in one place that propagates to multiple directories (e.g., 211 NDP, CAQH) significantly reduces burden [1] [2].
* **AI Change Detection:** Using AI to flag inconsistencies between datasets (e.g., comparing a local 211 list against a state registry) helps prioritize manual outreach [5].
* **90-Day Cadences:** High-priority domains (housing, food, crisis services) require verification every 90 days, supplemented by rapid user-flagging mechanisms with strict Service Level Agreements (SLAs) for corrections.

## From Referral to Real Connection: Evidence of Outcomes

The ultimate measure of a directory's success is whether it facilitates actual service connections. The evidence shows a stark difference between a referral being *made* and a service being *received*.

**The Drop-Off from Referral to Receipt:**
A longitudinal study of 1,235 callers to Missouri 2-1-1 tracked the outcomes of referrals. While 91% of callers tried contacting the referral and 82% reached the agency, only **36% actually received assistance** [4]. The success rates varied wildly by domain: 67% received assistance for food, but only 17% received assistance for housing [4]. The primary reasons for failure were agencies lacking funds (34%) or callers not qualifying for services (25%) [4]. 

**The Impact of Successful Connections:**
When connections are successful, the impact is profound. In the Missouri study, callers who received assistance were three times more likely (OR=3.0) to report that their underlying problem had been resolved [4]. Similarly, the CMS Accountable Health Communities (AHC) model, which linked over one million beneficiaries to community services, demonstrated a 6% decline in inpatient stays for Medicaid beneficiaries who received navigation assistance [15] [16].

**Closed-Loop vs. Successful Connection:**
A critical finding from Duke Health's implementation of NCCARE360 highlights the danger of vanity metrics. The platform reported a "Closed Loop Rate" (CLR) of 99%, meaning the referral ticket was closed in the software [3]. However, the patient-centered "Successful Connection Rate" (SCR)—meaning the patient actually received the benefit—was only 65% during a period of high funding, and plummeted to 38% when funding ended [3]. 

**Takeaway:** Directories must be integrated into staff workflows (e.g., EHRs, 311 systems, college advising) and paired with human navigators for complex needs like housing. A systematic review of 41 electronic community resource referral systems found that only 6 utilized true closed-loop systems enabling CBOs to digitally confirm service receipt [17].

## Architecture & Governance for a Mid-Sized City

To achieve high coverage, freshness, and closed-loop capabilities, a mid-sized city should adopt the following operating model:

1. **Designate a Resource Data Utility:** Assign a single entity (e.g., the local United Way/211 or a City 311 coalition) to be accountable for data standards and stewardship [18].
2. **Adopt HSDS as the Canonical Standard:** Ensure all systems speak the same language. The Human Services Data Specification (HSDS) is endorsed by AIRS and enables interoperability across platforms [6] [7].
3. **Leverage AI for Deduplication:** Utilize open-source tools like the Open Referral Resource Record-Matcher to continuously ingest and reconcile data from community spreadsheets, state registers, and vendor platforms [5].
4. **Establish Data-Sharing MOUs:** Require city-funded CBOs to maintain their service listings in the central utility as a condition of their grants, effectively creating an "open service register" [18].

## 12-Month Implementation Plan

* **Q1: Data Unification & Baseline.** Ingest existing 211 data and municipal lists. Map to HSDS. Run AI deduplication to create a unified index [5]. Conduct a baseline freshness audit.
* **Q2: Verification & Portals.** Launch provider self-service portals. Establish a 90–180 day verification cadence for Tier 1 resources. Implement a public user-flagging system with a 5-day resolution SLA.
* **Q3: Workflow Integration Pilots.** Embed the directory search and referral APIs into one high-traffic clinical EHR, the city 311 system, and a local community college advising platform. 
* **Q4: Closed-Loop Measurement.** Transition from tracking "referrals made" to "Successful Connection Rates" (SCR) [3]. Evaluate the pilot outcomes and adjust CBO contracts to reward verified connections.

## KPIs & Dashboards

Shift reporting from vanity metrics (number of searches) to operational health and outcome metrics:
* **Freshness:** Percentage of records verified in the last 90 days; Unreachable provider rate; Median age of records by domain.
* **Connections:** Successful Connection Rate (SCR) by domain (e.g., Food vs. Housing) [3]; Time-to-first-contact.
* **Equity:** SCR segmented by language, race/ethnicity, and ZIP code; Digital self-service vs. assisted navigation split.

## Risk Register & Mitigations

* **CBO Capacity Barriers:** CBOs will ignore the system if it adds administrative burden. *Mitigation:* Fund their participation, utilize centralized provider portals to eliminate redundant updates, and pre-check client eligibility before sending referrals [4] [2].
* **Data Decay:** *Mitigation:* Enforce cadenced verification, use automated multi-channel outreach (email, text), and implement strict removal policies for chronically unreachable listings.
* **Low Adoption:** *Mitigation:* Do not rely on standalone portals. Embed the directory directly into the core systems (EHRs, CRMs) that staff already use daily.
* **AI Model Drift:** *Mitigation:* Keep a "human-in-the-loop." AI should suggest merges and flag anomalies, but human data stewards must approve changes to canonical records [5].

## References

1. *211 National Data Platform - FAQs! - UnitedStates211.WebApp*. https://register.211.org/Home/FAQs
2. *DirectAssure: Proven Strategies for Improving Directory ...*. https://www.caqh.org/sites/default/files/solutions/directassure/directassure-proven-strategies.pdf
3. *
            Measures of Referral vs Receipt of Social Services Among Patients With Health-Related Social Needs - PMC
        *. https://pmc.ncbi.nlm.nih.gov/articles/PMC11024758/
4. *
            Getting help from 2-1-1: A statewide study of referral outcomes - PMC
        *. https://pmc.ncbi.nlm.nih.gov/articles/PMC5336263/
5. *The Resource Record-Matcher: an open source AI-powered directory data collaboration tool – Open Referral*. https://openreferral.org/the-resource-record-matcher-an-open-source-directory-data-collaboration-tool/
6. *United Way Worldwide’s National 211 Data Platform:  Bringing People and Services together – Open Referral*. https://openreferral.org/united-way-worldwides-national-211-data-platform-bringing-people-and-services-together/
7. *Standards - Inform USA (formerly AIRS, the Alliance of Information and Referral Systems)*. https://www.informusa.org/standards
8. *Software for 211 Centers*. https://www.icarol.com/solutions-by-industry/211-software/
9. *Subscription Information | iCarol*. https://www.icarol.com/subscription-information/
10. *Human Services Data Specification (HSDS)*. https://docs.openreferral.org/en/latest/hsds/overview.html
11. *Open Referral Social Services Directory (HSDS 1.1)  - Universe*. https://www.airtable.com/universe/expwt9yr65lFGUJAr/social-services-directory-v20
12. *Stone Souping Social Service Information with Airtable – Open Referral*. https://openreferral.org/stone-souping-social-service-information-with-airtable/
13. *SignalHire Data Reveals 30% of B2B Contact Records Go Stale Every Year: Database Decay Costs about 546 Hours Annually - The Detroit Free Press*. https://www.freep.com/press-release/story/167294/signalhire-data-reveals-30-of-b2b-contact-records-go-stale-every-year-database-decay-costs-about-546-hours-annually/
14. *DirectAssure: Getting it Right*. https://www.caqh.org/sites/default/files/solutions/proview/directassure-provider-directory-accurarcy.pdf
15. *Accountable Health Communities Model 2018–2023*. https://www.cms.gov/priorities/innovation/data-and-reports/2024/ahc-3rd-eval-report-aag
16. *CMS Accountable Health Communities Model*. https://childrenshealthwatch.org/wp-content/uploads/HVS-NCoP-CMS-AHC-Resource-Guide_03.20.2025_V-final.pdf
17. *
            A Systematic Review of Electronic Community Resource Referral Systems - PMC
        *. https://pmc.ncbi.nlm.nih.gov/articles/PMC10696135/
18. *The DC Community Resource Information Exchange: Phase One Report – Open Referral*. https://openreferral.org/the-dc-community-resource-information-exchange-phase-one-report/
