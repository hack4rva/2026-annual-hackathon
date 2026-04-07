# JTBD Analysis — Resident Service Navigation

**Pillar:** A Thriving City Hall
**Problem Statement (verbatim):** Resident Service Navigation — Help residents find the right City service or department quickly, so requests get routed correctly the first time.
**Applies to:** Text 311, Hey804, RVA Help

---

## Jobs To Be Done

### Job 1 — The Resident With an Urgent Problem and No Idea Where to Start
> "When I (a Richmond resident, especially one without a smartphone or reliable internet) encounter a city problem — a pothole, a broken streetlight, a missed trash pickup — and I don't know whether to call 311, file online, visit a city office, or contact my council member, I want to describe my problem once in plain language and be told exactly what to do and who to contact, so I can get the issue resolved without spending hours navigating a system I don't understand."

**Current workaround:** Call 311 during business hours (if they know the number exists). Visit RVA.gov and click through department pages hoping to find the right form. Ask neighbors on Nextdoor. Walk into a city office and get redirected. Give up.
**Pain:** The City has services for almost every problem a resident encounters — but the resident has no way to know which service matches their situation. Misrouted requests waste resident time and staff time. Residents who give up represent a silent failure the City never sees.

### Job 2 — The Non-English-Speaking Resident Trying to Access Government Services
> "When I (a Spanish-speaking, Arabic-speaking, or other non-English-speaking Richmond resident) need something from my city government — a permit, a complaint filed, a question answered — and the website and phone system are primarily in English, I want to communicate in my own language and receive a clear, correct answer without needing a translator or bilingual family member to navigate for me, so I can independently access the services I'm entitled to as a resident."

**Current workaround:** Bring an English-speaking family member (often a child) to translate at city offices. Use Google Translate on the website (unreliable for government forms). Call 311 and hope for a Spanish-speaking operator. Rely on community organizations as intermediaries.
**Pain:** Language barriers make government services functionally inaccessible. Residents who can't navigate English-language systems are systematically excluded from reporting problems, applying for permits, paying taxes, and accessing services. The cost falls disproportionately on immigrant communities and elderly residents.

### Job 3 — The City Staff Member Drowning in Misrouted Requests
> "When I (a Richmond City employee in a specific department) receive a service request that has nothing to do with my department — a building permit question routed to public works, a pothole complaint sent to social services — I want residents' requests to be correctly classified and routed before they reach me, so I can spend my time resolving issues I'm actually responsible for instead of redirecting confused residents to other departments."

**Current workaround:** Manually read and re-route misclassified requests. Call the resident back to gather missing information. Transfer calls between departments. Let misrouted requests sit in a queue where nobody owns them.
**Pain:** Misrouted requests are the #1 source of wasted time in the service request pipeline. Every misroute means at least two department touches instead of one. For the resident, every misroute adds days of delay and another explanation of the same problem to a new person.

---

## Open Questions

### Data Questions
1. What CRM or service request platform does Richmond 311 currently use? Is it QAlert, Salesforce, or something else?
2. Is there an API for submitting service requests to the existing 311 system, or does any new tool need to submit via the web interface?
3. What is the current taxonomy of 311 service request categories? How many categories exist, and how often are they updated?
4. Does Richmond publish 311 request data on the Open Data Portal? If so, what fields are included and what is the update cadence?
5. What is the current misroute rate for 311 requests? Is there any internal metric tracking how often requests are re-classified after submission?

### User Questions
6. Has anyone conducted user research with Richmond residents about their experience navigating city services? Are there documented pain points beyond what the demos demonstrate?
7. What percentage of 311 interactions are by phone vs. app vs. web? What is the demographic breakdown of each channel?
8. What hours does the 311 call center operate? What happens to requests submitted outside business hours?

### Integration Questions
9. Would the City allow a third-party tool (like Text 311 or Hey804) to submit requests directly into the 311 system, or would integration require a formal procurement process?
10. Does the City have an existing chatbot or AI tool on RVA.gov? If so, what happened to it?
11. Is there an existing knowledge base of "which department handles what" that a navigation tool could use as its foundation?

### Equity Questions
12. What percentage of Richmond residents lack smartphone access? What percentage lack reliable internet?
13. What languages are most spoken in Richmond after English? Does the current 311 system offer service in those languages?
14. Are there neighborhoods where 311 usage is disproportionately low relative to service need? What are the barriers?

### Prior Art Questions
15. Has Richmond previously attempted to build a unified service navigation tool? If so, what happened?
16. What do comparable cities (Baltimore, Pittsburgh, Louisville) use for resident service navigation? Are any using AI-powered tools?

---

## Answered Questions (Parallel AI Research, March 2026)

Research files: `_research-answers/sn_q1_system_data.md`, `sn_q2_usage_equity.md`, `sn_q3_prior_art.md`

### Data Questions

**1. What CRM or service request platform does Richmond 311 currently use?**
[Confirmed] AvePoint Citizen Services, built on Microsoft Dynamics 365 / Azure. Launched June 2017 with the creation of the Department of Citizen Service and Response. System branded as "RVA 311."

**2. Is there an API for submitting service requests to the existing 311 system?**
[Confirmed — No public API] No public-facing API exists. Internal integration with Cityworks exists via Microsoft BizTalk middleware. Access limited to phone (804-646-7000), RVA311.com web portal, and iOS/Android mobile apps. AvePoint has a Graph API but no public endpoint is exposed for Richmond.

**3. What is the current taxonomy of 311 service request categories?**
[Partial] ~20 partner departments (Public Works, Public Utilities, Social Services, Finance, etc.) with service types including Permits (via Energov), Code Enforcement Cases, and Public Works Services. No formal, published, versioned taxonomy. Update frequency not documented.

**4. Does Richmond publish 311 request data on the Open Data Portal?**
[Confirmed] Legacy dataset `vgg4-hjn8` on data.richmondgov.com covers 2013-2015 only (fields: SCFId, ReporterDisplayName, Status, Summary, Rating, Description, CreatedDate, Category, Location). **No current data from the RVA 311 system is published.** This is a significant gap.

**5. What is the current misroute rate for 311 requests?**
[Still Unknown] No published metrics, audits, or KPIs tracking misroute or reclassification rates. The Office of the City Auditor's "Reports Issued" index (since Jan 2012) contains no audit of 311 or the Dept of Citizen Service & Response. May be tracked internally but not publicly.

### User Questions

**6. Has anyone conducted user research with Richmond residents about navigating city services?**
[Partial] No formal usability studies on RVA311 specifically. The City mailed a Community Survey in early 2026 covering community livability, satisfaction with city services, resident priorities, and community engagement — results not yet published. Informal feedback exists in app store reviews.

**7. What percentage of 311 interactions are by phone vs. app vs. web?**
[Partial] 208,216 total service requests in 2025 (up from ~83,000 in 2024). 116,000+ additional concerns resolved by phone without creating formal tickets. Call center handled 163,000 calls in 2024, avg 13,500/month. **Precise channel-by-channel percentage not published.** Phone is clearly dominant — "more than half of residents' concerns were addressed over the phone."

**8. What hours does the 311 call center operate?**
[Confirmed] Mon-Fri 8am-7pm, Saturday 9am-1pm, Sunday closed. Online and mobile submissions accepted 24/7 and queued for processing during business hours.

### Integration Questions

**9. Would the City allow a third-party tool to submit requests directly into the 311 system?**
[Partial] Typically requires formal IT procurement per the Virginia Public Procurement Act (VPPA) and Richmond City Code Chapter 21. No existing third-party integrations or chatbot integrations documented. Formal vendor registration through Supplier Portal required. Raleigh's process (as comparable) requires all vendors to complete online registration via a dedicated portal before any engagement.

**10. Does the City have an existing chatbot or AI tool on RVA.gov?**
[Confirmed — No] No chatbot, AI assistant, or automated navigation tool on rva.gov. The City does have an Artificial Intelligence Policy (2025) governing use of AI by city staff, but no public-facing AI tool has been deployed.

**11. Is there an existing knowledge base of "which department handles what"?**
[Partial] Two partial resources exist: (1) rva.gov/common/services — a Services directory, and (2) rva.gov/citizen-service-and-response/rva-311-helpful-links — a "Helpful Links" page. Neither is a structured, maintained, comprehensive knowledge base formally mapping every service type to the responsible department. They are navigational aids, not a machine-readable taxonomy.

### Equity Questions

**12. What percentage of Richmond residents lack smartphone access?**
[Partial] 13.8% of Richmond households lack broadband internet subscription (ACS 2020-2024). Specific smartphone-only figures not found in census data for Richmond. State-level studies note disparities but no city-published breakdown.

**13. What languages are most spoken in Richmond after English?**
[Partial] Spanish is the primary non-English language (71.57% of LEP population per existing research corpus citing ACS S1601). City provides free Spanish/English interpretation during office hours via OIRE (Office of Immigrant and Refugee Engagement), and after-hours/other languages via United Language Group. Language Access Plan (Administrative Regulation 5.24, effective July 1, 2023) requires professional translation of "vital documents." RVA.gov uses Google Translate with an explicit disclaimer that it is not a substitute for professional translation.

**14. Are there neighborhoods where 311 usage is disproportionately low relative to service need?**
[Still Unknown] No published city analysis of 311 usage by neighborhood, census tract, or demographic group. The digital divide (13.8% no broadband) and heavy phone reliance suggest underservice of digitally excluded populations, but this has not been mapped geographically. This is one of the strongest arguments for Idea 4 (311 Analytics Probe).

### Prior Art Questions

**15. Has Richmond previously attempted to build a unified service navigation tool?**
[Confirmed] The RVA311 system on AvePoint Citizen Services (June 2017) IS Richmond's unified service navigation modernization. No evidence of prior or subsequent attempts — no chatbot pilots, no wizard tools, no alternative navigation projects.

**16. What do comparable cities use for resident service navigation?**
[Confirmed] Baltimore & Pittsburgh → Salesforce Experience Cloud. Raleigh → ServiceNow "Ask Raleigh" (replaced SeeClickFix, Jan 2026). Charlotte → CharMeck 311 with CLT+ app (phone, online, live chat). Norfolk → MyNorfolk portal with open data feed. Louisville → Metro311 portal + mobile app. **No city has verified AI chatbot or deterministic wizard deployment with documented outcomes.** The trend is toward enterprise CRM platforms (Salesforce, ServiceNow) over specialized GovTech.

---

### Summary: What We Now Know vs. What Remains Unknown

| Status | Count | Key gaps |
|--------|-------|----------|
| [Confirmed] | 7 | — |
| [Partial] | 7 | Channel usage %, taxonomy detail, language demographics |
| [Still Unknown] | 2 | Misroute rate (#5), geographic usage patterns (#14) |

**Critical finding:** No city in the US has a verified, outcome-documented AI chatbot or wizard-style 311 navigation tool. This means Ideas 1 (Deterministic Wizard) and 6 (Symptom Triage) would be genuinely novel if deployed — not copies of existing tools.

**Critical data gap:** Richmond publishes no current 311 data (last Socrata update: 2015). This makes Idea 4 (Analytics Probe) especially valuable — it would be the first instrument to capture what residents search for and where they fail.
