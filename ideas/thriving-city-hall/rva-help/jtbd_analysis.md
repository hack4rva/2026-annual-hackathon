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
