# From Static Guides to Measurable Startup Outcomes: What Works in City Business "Wizards"

## Executive Summary
Cities across the United States are increasingly deploying digital tools to help entrepreneurs navigate the complex web of registrations, permits, and licenses required to start a business. However, the execution and measurable impact of these tools vary wildly. 

* **True "wizards" drive massive self-service and staff time savings:** Cities utilizing interactive, input-driven portals (like OpenCounter) report self-service rates between 95% and 98%, reducing permit discovery times to under 8 minutes and saving thousands of staff hours annually [1] [2] [3].
* **San Francisco relies on a static guide, not a wizard:** San Francisco's "Step-by-step guide to starting a business" is a structured 10-step checklist with links to agency pages, but it lacks the tailored permit scoping, interactive zoning checks, and real-time fee calculations that define a true wizard [4].
* **Multilingual reach is uneven:** New York City leads in language breadth, offering its MyCity wizard in English and 10 additional languages [5]. However, deep transactional localization is rare. OpenCounter deployments in cities like Atlanta and Fort Worth successfully localize the interactive flow, but external application links often revert to English [6] [7] [8].
* **Causal impact on new business registrations remains unproven:** While cities and vendors heavily promote operational metrics (staff hours saved, inquiry volume), there is a distinct lack of rigorous, publicly available data linking these portals to an actual increase in new business registrations or a quantified reduction in the end-to-end "time-to-launch" [1] [2] [3].
* **Zoning and fee transparency are critical friction-killers:** Portals that embed zoning eligibility checks and real-time fee calculations early in the process prevent downstream rework and surprise costs, significantly improving the pre-application experience [6] [8].

## What counts as a "wizard" vs. a "guide" — and why it matters
A static or structured **guide** provides a generalized checklist of steps (e.g., write a business plan, register a name, get permits) and directs users to various department websites to figure out the specifics [4]. It relies on the user to interpret dense municipal codes.

An interactive **business startup wizard**, conversely, intakes specific user inputs (business activity type, exact address, square footage) and generates a tailored, sequenced list of required licenses, permits, and approvals [6] [9]. True wizards integrate interactive zoning maps to instantly verify if a business type is permitted at a specific location and calculate estimated fees across multiple departments in real-time [6]. This distinction is critical for driving measurable outcomes: wizards actively prevent rework, reduce cross-agency handoffs, and accelerate the path to a first-correct application.

## San Francisco deep dive — today's guide, gaps, and fast upgrades
San Francisco currently offers a "Step by step guide to starting a business in San Francisco" [4]. 

**Nature of the tool:** It functions as a structured 10-step guide covering topics from creating a business plan and financing to registering the business, building inspections, and hiring employees [4]. It does not feature tailored, input-driven permit scoping.
**Languages:** The guide is primarily presented in English, relying on site-level translation widgets rather than a curated, end-to-end localized interactive flow.
**Impact and Gaps:** There are no published metrics regarding the guide's usage, completion rates, or impact on time-to-open. While San Francisco maintains robust "PermitSF" performance dashboards tracking median days for completeness checks and plan reviews [10], these metrics are not linked to the business startup guide or overall business formation timelines. The guide lacks integrated zoning checks and fee estimators.

**Immediate upgrades for San Francisco:**
* Implement an interactive decision engine for the top 10 most common business types to generate tailored permit sequences and fee estimates.
* Embed an upfront zoning and address lookup tool to instantly flag conditional use requirements.
* Establish a baseline measurement linking initial portal sessions to the eventual issuance of the first required business license.

## Comparative landscape — who's running wizards, in what languages, and with what results
The landscape of municipal business portals reveals a stark contrast between cities utilizing third-party interactive platforms (like OpenCounter) and those relying on city-built guides or fragmented systems.

| City | Platform | URL | Nature (Wizard vs Guide) | Languages in UI | Key Capabilities | Reported Impact | Evidence Source |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **San Francisco** | City-built | sf.gov/step-by-step... | Structured guide | English primary; site widget | Links/sequence only; no zoning/fee calc | None published specific to guide | City pages [4] |
| **New York City** | City-built (MyCity) | nyc-business.nyc.gov/nycbusiness/wizard | Interactive Q&A | EN + 10 LL30 languages | Tailored requirements; links to agencies | No time-to-open data; audit flagged chatbot issues | City FAQ; Comptroller audit [9] [11] |
| **Orlando** | OpenCounter | digitalpermits.orlando.gov | Wizard | EN, ES (LA) | Zoning maps; permit scoping; fee calc | 61,447 inquiries; 97% self-service; <8 min completion; 12,811 staff hours saved | Vendor case study [1] |
| **Cincinnati** | OpenCounter | opencounter.cincinnati-oh.gov | Wizard | Default EN | Zoning; permit scoping; fee calc | 27,899 inquiries; 98% self-service; <7 min completion; 5,765 staff hours saved | Vendor case study [3] |
| **Fort Worth** | OpenCounter | cfwpermit.fortworthtexas.gov | Wizard | EN, ES, ZH, VI | Zoning; permit scoping; fee calc | Zoning answers in <60 seconds | Vendor blog [8] |
| **Atlanta** | OpenCounter | permits.atlantaga.gov | Wizard | EN, ES, ZH, FR, HI, KO, VI | Zoning; permit scoping; fee calc | ~6,500 staff hours saved; 6 min average scoping time | Vendor case study [7] |
| **Salt Lake City** | OpenCounter | slcgov.opencounter.com | Wizard | Default EN | Zoning; permit scoping; fee calc | 6,949 inquiries; 95% self-service; <4 min completion; 2,121 staff hours saved | Vendor case study [2] |

*Takeaway: Cities deploying OpenCounter consistently report self-service rates above 95% and scoping times under 8 minutes, drastically reducing the burden on municipal staff [1] [2] [3]. However, all reported metrics are operational (inquiries, time saved) rather than economic (new business registrations).*

## Language access and LEP usability — what's truly localized end-to-end
Providing equitable access for Limited English Proficiency (LEP) entrepreneurs requires more than a Google Translate widget on a landing page. 

| City | Language Toggle | Inputs Localized | Results/Permit List Localized | Fee Estimates Localized | Linked Applications Localized | Observed Gaps |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **New York City** | Yes (EN + 10 LL30) | Yes | Yes | N/A | Often redirects to English | Transactional depth; chatbot accuracy [11] [5] |
| **San Francisco** | Site-level widget | N/A | N/A | N/A | Many linked forms in English | No curated end-to-end LEP flow [4] |
| **Atlanta** | 7 languages | Yes | Yes | Yes | External links vary | Potential term consistency issues [7] |
| **Fort Worth** | 4 languages | Yes | Yes | Yes | External links vary | Some department PDFs English-only [8] |

*Takeaway: While platforms like OpenCounter can translate the interactive discovery phase into multiple languages [6], the user journey often breaks down when entrepreneurs are handed off to external department portals or PDF applications that remain exclusively in English.*

## What the evidence really says — impacts and limitations
The publicly available evidence strongly supports the operational efficiency of interactive permit wizards, but falls short of proving causal economic impact.

**Operational Wins:** Vendor and city self-reports consistently highlight massive reductions in staff workload and rapid permit discovery for users. Orlando reported 61,447 permit inquiries with a 97% self-service rate, saving 12,811 staff hours [1]. Cincinnati reported 27,899 inquiries, a 98% self-service rate, and 5,765 staff hours saved [3]. Salt Lake City processed 6,949 inquiries with a 95% self-service rate, saving 2,121 hours [2]. 

**The Missing Link:** There are no peer-reviewed, difference-in-differences studies or city-published datasets that causally link the deployment of these portals to an increase in new business registrations or a quantified reduction in the total time from business ideation to opening day. 

**Cautionary Evidence:** New York City's MyCity portal illustrates the limits of digital front-doors without deep transactional integration. A 2025 Comptroller audit noted that the Business portal "merely redirects users to various City agency websites" and lacks the capability to perform full transactions [11]. Furthermore, the audit flagged the portal's AI Chatbot for providing inconsistent and inaccurate responses, noting high user dissatisfaction during beta testing [11].

## A practical, low-lift measurement framework cities can adopt now
To move beyond vanity metrics (pageviews) and operational metrics (staff hours saved), cities must instrument their portals to measure actual economic outcomes.

1. **Discovery Funnel Tracking:** Track the drop-off rate from initial portal visits to scenario starts, tailored results viewed, and click-throughs to actual applications.
2. **Time-to-Open Latency:** Establish a secure, hashed linkage between a user's initial portal session timestamp and the eventual issuance date of their first required local business license or permit. Track the median and 75th percentile latency by NAICS code and district.
3. **Registration Lift (Before/After):** Compare monthly new local business registrations by sector and ZIP code before and after portal launch, normalizing for macro-economic trends and seasonality.
4. **Equity Metrics:** Track completion rates and time-to-open latencies segmented by the language used in the portal to identify friction points for LEP users.

## Implementation roadmap for SF (or any city) to move from guide -> wizard with proof
Cities looking to upgrade from static guides to measurable wizards should follow a phased approach:

* **Phase 0 (Planning - 3 weeks):** Select a platform (e.g., OpenCounter, Camino) or commit to a custom decision engine. Appoint a cross-agency product owner with the authority to force data standardization across zoning, building, and health departments.
* **Phase 1 (Configuration - 8 weeks):** Digitize and normalize fee schedules and zoning codes. Author the conditional logic rules that map business activities to specific permits. Develop human-reviewed language glossaries for the top 3-5 non-English languages in the jurisdiction.
* **Phase 2 (MVP Launch - 6 weeks):** Launch the interactive wizard featuring address lookup, tailored permit scoping, real-time fee estimates, and a language toggle. Crucially, launch with the analytics tracking pipeline (described above) fully wired.
* **Phase 3 (Iteration - Ongoing):** Expand the taxonomy of supported business types. Begin integrating deeper transactional capabilities (e.g., unified payment carts, document pre-checks) to prevent users from being redirected to legacy department sites.

## Risks and mitigations — accuracy, AI, and change fatigue
* **Rule Drift:** Municipal codes and fees change constantly. *Mitigation:* Institute formal change control processes requiring agency sign-off before fee or zoning updates go live in the wizard.
* **AI Inaccuracies:** As seen in NYC, generative AI chatbots can hallucinate regulatory advice [11]. *Mitigation:* Rely on deterministic, decision-tree logic for permit scoping and fee calculations. Use AI strictly as a secondary search assistant, backed by rigorous red-teaming.
* **Translation Risk:** Machine translation of legal requirements can lead to compliance failures. *Mitigation:* Mandate human QA for all regulatory content and publish bilingual glossaries.
* **Adoption Risk:** Staff may resist new tools if they don't trust the outputs. *Mitigation:* Co-design the logic with frontline permit technicians and provide them with dashboards showing how the tool is deflecting basic inquiries.

## KPIs and target-setting — from activity to outcomes
Cities should publicly report on three tiers of KPIs:
* **Activity:** Self-service rate (Target: >90%), median scoping time (Target: <8 minutes).
* **Outcomes:** Median days from first portal session to first license issuance. Percentage reduction in time-to-first-license for pilot sectors within 12 months.
* **Equity:** Share of portal flows completed in non-English languages. Gap in completion rates between English and non-English users.

## Appendix — Source highlights and quality grading
* **Vendor/City-Reported Metrics (Level C - Descriptive):** Data from OpenCounter case studies (Orlando, Cincinnati, Salt Lake City, Atlanta, Fort Worth) provides strong evidence of operational efficiency but lacks independent causal verification [7] [1] [2] [8] [3].
* **City Portals and Audits (Level B - Observational):** The NYC Comptroller audit provides a critical, independent look at the limitations of non-transactional portals and AI chatbots [11]. San Francisco's live pages confirm the static nature of its current guide [4].

## References

1. *Orlando Case Study - OpenCounter*. https://www.opencounter.com/customer-stories/orlando/
2. *Salt Lake City Case Study - OpenCounter*. https://www.opencounter.com/customer-stories/salt-lake-city/
3. *Cincinnati Case Study - OpenCounter*. https://www.opencounter.com/customer-stories/cincinnati/
4. *Step by step guide to starting a business in San Francisco | SF.gov*. https://sf.gov/step-by-step--step-step-guide-starting-business-san-francisco
5. *Language Access Implementation Plan*. https://www.nyc.gov/assets/oti/downloads/pdf/about/oti-311-language-access-plan-2024.pdf
6. *Business Portal*. https://www.opencounter.com/products/business/
7. *Atlanta Case Study - OpenCounter*. https://www.opencounter.com/customer-stories/atlanta-georgia/
8. *Don’t Mess with Texas — or Their Permits: OpenCounter’s Partnership with Fort Worth - OpenCounter*. https://www.opencounter.com/blog/opencounters-partnership-with-fort-worth/
9. *Step by Step*. https://nyc-business.nyc.gov/nycbusiness/wizard
10. *Permit performance metrics | SF.gov*. https://www.sf.gov/permit-performance-metrics
11. *
  Audit Report on the New York City Office of Technology and Innovation’s MyCity System - Office of the New York City Comptroller
Mark Levine*. https://comptroller.nyc.gov/reports/audit-report-on-the-new-york-city-office-of-technology-and-innovations-mycity-system/
