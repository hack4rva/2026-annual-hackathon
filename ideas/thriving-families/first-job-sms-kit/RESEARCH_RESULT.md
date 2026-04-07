# SMS that moves teens to jobs: what works, where, and how to deploy it now

## Executive Summary

Municipal workforce development programs and youth-serving organizations are increasingly turning to SMS-based tools to bridge the gap between teenagers and their first jobs. The data reveals that SMS is not just an engagement tool; it is a critical driver of program outcomes, particularly for underserved youth who may lack consistent access to computers or broadband. 

**Key Strategic Insights:**
* **SMS drives real placement lift:** In Boston's Summer Youth Employment Program (SYEP), supplementing email communications with text-based notifications spiked job acceptance rates by 56% [1] [2]. 
* **"No-app" SMS reaches teens others miss:** Sidekick Education's SMS career chatbot in Madison, WI, reached 10,000 youth with a "no app or software to download" design explicitly built to bridge the gap for opportunity youth [3].
* **Evidence triangulates that SMS reaches low-app/low-web users:** While 95% of U.S. teens have smartphone access, only 72% of teens in households earning under $30,000 have access to a home computer, compared to 94% in higher-income households [4] [5]. Even among highly vulnerable populations like homeless youth, 62% own a cell phone, and many use them for instrumental purposes like contacting case managers (17%) or employers (36%) [6] [7].
* **Onboarding and document checklists fit SMS:** Programs like NYC SYEP actively use text blasts for updates and document/orientation reminders [8] [9]. Randomized trials in adjacent youth sectors show SMS reminders can reduce appointment no-shows by 14.6 percentage points [10].
* **Compliance and equity are foundational:** Deploying SMS requires adherence to CTIA guidelines, TCPA consent frameworks, and ADA Title II effective communication requirements [11] [12]. The Department of Labor's TEGL 03-23 explicitly allows grant funds for SMS outreach, provided data privacy and accessibility are maintained [13].

## Where U.S. cities are already winning with SMS

Cities are leveraging SMS to lift acceptances, complete onboarding, and keep youth informed at scale.

### Boston’s 56% acceptance surge with SMS notifications
Boston's Division of Youth Engagement and Employment partnered to redesign the SuccessLink summer youth jobs application process [2]. Previously, the city relied on telephone calls to make job offers, giving students a 72-hour response window [2]. Piloting email notifications saved the equivalent of 19 work weeks of staff time, increasing acceptances by 20% [2]. However, recognizing that students treat email as a "school-year resource," the city added text-based notifications in 2017, which caused the job acceptance rate to spike by 56% [1] [2].

### NYC SYEP providers’ two-track texting
New York City's SYEP providers, such as the New York Center for Interpersonal Development (NYCID), utilize dedicated text lines to manage youth onboarding. They maintain a general phone line that accepts text messages for two-way communication, alongside a dedicated "Text Blast Number" (929-581-8698) used strictly for one-way updates and reminders regarding mandatory orientations and document submissions [8] [9].

### Sidekick Education’s 10,000-youth “no-app” reach
In Madison, Wisconsin, Sidekick Education built an SMS-based career advisor chatbot to address racial disparities in high school graduation and workforce readiness [3]. By requiring no app download, the service remains highly accessible to underserved communities, reaching 10,000 young people in its first couple of years [3]. The chatbot uses algorithms to handle 70 to 80 percent of inquiries, seamlessly escalating to human career counselors when necessary [3].

## What to ship by SMS across the four first-job domains

To maximize effectiveness, workforce programs should keep tasks inside the text thread whenever possible, linking out only when necessary, and utilizing short sequences with clear escalation paths.

### Four domains mapped to proven SMS patterns

| Domain | High-value SMS use | Evidence & Context | Risk | Sample 160-char message (+ reply options) |
| :--- | :--- | :--- | :--- | :--- |
| **Labor law info** | Jurisdiction-vetted rights snippets with "HELP" to human escalation. | Sidekick's two-way chatbot model handles basic Q&A before routing to counselors [3]. | Jurisdictional error or outdated legal information. | "NY min wage for 16-17yo: $x/hr. Break: 30 min if 6+ hrs. Questions? Reply HELP to chat with a coach." |
| **Document checklists** | Deadline nudges and quick-reply confirmations. | NYCID uses text blasts for orientation and document deadlines [9]. | Message fatigue from over-communication. | "SYEP docs due Fri 5pm: photo ID + SSN. Reply 1=Done, 2=Need help. Drop-in Thurs 3-6p 120 Main St." |
| **Interview prep** | Micro role-play over 3-4 texts. | Workforce texting platforms like Signal Vine report ~49% engagement in workforce cohorts [14]. | One-way blasts feel "lectury" and reduce engagement. | "Q: 'Tell me about yourself.' Reply with 1-2 lines (school, skill, summer goal). I'll send quick tips after." |
| **Transportation** | Morning-of shift reminders with transit ETAs. | Pediatric clinic RCTs show SMS reminders reduce no-shows from 38.1% to 23.5% [10]. | Over-reliance on web links for youth without data plans. | "You're at City Park by 9:00. Bus 12 from Oak departs 8:31 (7-min walk). Running late? Reply LATE." |

*Key Takeaway:* Structuring SMS content around immediate, actionable micro-tasks yields higher engagement than sending passive informational links.

## Does SMS really reach youth who don't engage with websites/apps?

Multiple lines of evidence justify SMS as the essential channel for reaching disconnected or low-income youth.

### Low-income and phone-first teens
Pew Research Center data from 2024 indicates that 95% of U.S. teens have access to a smartphone [4]. However, digital divides persist in other hardware: only 72% of teens in households earning under $30,000 have access to a home computer, and 57% have access to a tablet, compared to 94% and 67% respectively for teens in households earning $75,000 or more [5]. 

### Opportunity and homeless youth
Even among highly vulnerable populations, mobile access remains a critical lifeline. A study of homeless youth in Los Angeles found that 62% owned a cell phone, and 40% had a working phone [6]. These youth actively used their devices for instrumental purposes: 17% used their phone to call a case manager, and 36% used it to contact a potential or current employer [6] [7]. 

### Intervention studies and response rates
In adjacent domains like adolescent health, SMS interventions frequently see high engagement. For example, a study using the WelTel technology platform reported that 71% of all automated messages sent to adolescent patients received a response [15]. In workforce contexts, the World Bank's MYLMI project found that offering small, escalating economic incentives (from $1 to $5) increased SMS survey response rates by 38 percentage points among low-income youth [16].

## Deployment models and senders

Selecting the right deployment model and sender type is critical for balancing cost, throughput, and user experience.

### Deployment models by use case

| Model | Best Use Case | Staffing Effort | Example Tools |
| :--- | :--- | :--- | :--- |
| **One-way blasts** | Mass notifications, deadline reminders, emergency alerts. | Low (Scheduled broadcasts) | Mobile Commons, Engage by Cell |
| **Two-way chatbots** | Q&A, interview micro-roleplay, basic labor law info. | High (Initial setup), Low (Ongoing) | Twilio Studio, Sidekick Education |
| **Hybrid SMS + Web** | Document uploads, complex onboarding forms. | Medium (Managing escalations) | Signal Vine, Custom CRM integrations |

### Sender types for U.S. messaging

| Sender Type | Throughput (MPS) | Provisioning Time | Cost Profile | Best Fit |
| :--- | :--- | :--- | :--- | :--- |
| **A2P 10DLC** | 3-180 MPS (based on Trust Score) [17] | 3-5 weeks [17] | Low ($1.50-$10/mo campaign fee) + per-segment [18] | Pilots and scale with local identity [17]. |
| **Toll-Free** | 3 MPS (can scale higher) [17] | 5-14 days [17] | Low ($2.15/mo) + per-segment [19] | National identity; fast start [17]. |
| **Short Code** | 100+ MPS [17] | 6-10 weeks [17] | High (~$3,000/qtr + $1,000 setup) [20] | Citywide alerts; very high volume [17]. |

*Key Takeaway:* Municipalities should launch pilots on verified Toll-Free or A2P 10DLC numbers to minimize upfront costs and provisioning delays, migrating to Short Codes only if message volume exceeds 10DLC throughput limits.

## Compliance, privacy, and equity guardrails

Deploying SMS to minors requires strict adherence to federal guidelines and accessibility standards.

### Opt-in/opt-out and disclosures
Under CTIA guidelines, programs must obtain express consent before sending promotional or informational messages [21]. Calls-to-action must clearly disclose the program name, message frequency, customer care contact info (HELP), opt-out instructions (STOP), and a "message and data rates may apply" disclaimer [21].

### TCPA consent and minors
The Telephone Consumer Protection Act (TCPA) requires prior express written consent for certain automated texts [12]. Recent litigation has questioned whether minors can legally provide valid consent under state contract laws [22] [23]. To mitigate risk, municipal programs should integrate SMS consent into the formal program enrollment process, capturing parental consent where applicable for youth under 18.

### ADA Title II and language access
State and local governments must ensure effective communication with individuals with disabilities under ADA Title II [11] [24]. This includes providing accessible alternative channels (e.g., voice, TTY) for youth who cannot utilize SMS. Furthermore, programs should support multilingual messaging to ensure equitable access for English Language Learners.

### Funding greenlight
The U.S. Department of Labor's TEGL 03-23 explicitly permits the use of WIOA grant funds for text messaging (SMS) applications to recruit participants, remind them of appointments, and blast out employment opportunities, provided that participant data privacy is ensured [13].

## Implementation roadmap

A U.S. city can launch an SMS pilot for teen first-job readiness in 12 to 16 weeks.

### Week-by-week plan (16 weeks)
* **Weeks 1-3 (Discovery & Co-design):** Define KPIs, map the youth journey, and co-design message scripts with youth advisory boards to ensure appropriate tone.
* **Weeks 2-5 (Procurement & Registration):** Select an SMS vendor (e.g., Twilio, Engage by Cell) and initiate A2P 10DLC or Toll-Free registration [25] [17].
* **Weeks 3-6 (Content & Legal Review):** Finalize labor law snippets, document checklists, and obtain legal approval on consent workflows and privacy policies.
* **Weeks 5-8 (Build & Test):** Configure the SMS platform, build automated workflows (e.g., Twilio Studio), and test delivery across different carriers.
* **Weeks 9-10 (Soft Launch):** Roll out to a small control group of youth to test system stability and response handling.
* **Weeks 11-14 (Pilot):** Launch to the full pilot cohort (e.g., 300-800 youth). Monitor delivery receipts and reply rates daily.
* **Weeks 15-16 (Iterate & Scale):** Analyze pilot data, refine message timing/cadence, and prepare for broader SYEP rollout.

### Budget line items and ranges
* **Platform & Numbers:** 10DLC campaign fees ($1.50-$10/month) [18] or Toll-Free leasing ($2.15/month) [19].
* **Messaging Costs:** Approximately $0.0083 per outbound segment plus carrier surcharges (e.g., AT&T $0.0035, T-Mobile $0.0045) [19].
* **Incentives:** Modest stipends or gift cards ($2-$5) to maintain engagement and mitigate data costs for low-income youth [16].

## KPI and experimentation framework

Treat SMS like a product: measure, learn, and iterate.

### Core KPIs and definitions
* **Delivery Rate:** Percentage of texts successfully delivered (delivered texts / total sent texts) [26].
* **Click-Through Rate (CTR):** Percentage of recipients who clicked a link in the message [26].
* **Conversion Rate:** Percentage of texts that generated the desired outcome (e.g., completed document upload, attended orientation) [26].

### Instrumentation and A/B Testing
Utilize delivery reports and status callbacks to track message outcomes in real-time [27]. Implement A/B testing to optimize message timing (morning vs. afternoon), tone (formal vs. peer-to-peer), and call-to-action phrasing. 

## Risk register and mitigations

* **Number Churn:** Youth frequently change phone numbers or lose devices [16]. *Mitigation:* Implement multi-channel updates and offer small incentives for youth to update their contact info [16].
* **Message Fatigue:** Over-messaging leads to high opt-out rates. *Mitigation:* Cap broadcast frequency and prioritize interactive, two-way nudges.
* **Legal/Jurisdictional Errors:** Labor laws change frequently. *Mitigation:* Review all legal snippets quarterly with municipal counsel and provide a clear "HELP" escalation path to human caseworkers.

## Quick reference: Case and resource library

* **Boston Youth Jobs:** Achieved a 56% acceptance lift by adding SMS notifications [1] [2].
* **NYCID SYEP:** Utilizes dedicated text-blast numbers for onboarding [8] [9].
* **Sidekick Education:** Reached 10,000 youth with a no-app SMS chatbot [3].
* **DOL TEGL 03-23:** Confirms WIOA funds can be used for SMS outreach [13].
* **Pew Research:** Highlights the digital divide in computer access vs. smartphone access [4] [5].

## Decision playbook: Your next 30/60/90 days

* **30 Days:** Select a vendor, register a Toll-Free or 10DLC number, and co-design initial onboarding scripts with youth.
* **60 Days:** Launch a pilot with one cohort (300-800 youth). Run A/B tests on message timing and monitor delivery KPIs weekly.
* **90 Days:** Evaluate pilot outcomes (e.g., document completion rates, interview attendance). Expand content domains to include transit reminders and plan for full-scale deployment.

## References

1. *Boston Data Proves Revitalized Youth Jobs Programs Can Have Far-Reaching Impacts*. https://www.govtech.com/data/Boston-Data-Proves-Revitalized-Youth-Jobs-Programs-Can-Have-Far-Reaching-Impacts.html
2. *Case Study: A Digital Re-design of Boston’s Summer Youth Employment Platform | Data-Smart City Solutions*. https://datasmart.hks.harvard.edu/news/article/case-study-digital-re-design-bostons-summer-youth-employment-platform
3. *Sidekick SMS connects youth with the world of work *. https://gbc-education.org/insights/sidekick/
4. *Internet, digital device access among US teens, by demographic traits | Pew Research Center | Pew Research Center*. https://www.pewresearch.org/internet/fact-sheet/teens-and-internet-device-access-fact-sheet/
5. *Teens, Social Media and Technology 2023 | Pew Research Center*. https://www.pewresearch.org/internet/2023/12/11/teens-social-media-and-technology-2023/
6. *
            Cell Phone Use among Homeless Youth: Potential for New Health Interventions and Research - PMC
        *. https://pmc.ncbi.nlm.nih.gov/articles/PMC3232411/
7. *Cell Phone Use among Homeless Youth: Potential for New Health Interventions and Research - HPRI*. https://hpri.usc.edu/homeless_research/cell-phone-use-among-homeless-youth-potential-for-new-health-interventions-and-research/
8. *Summer Youth Employment Program Information - NYCID*. https://nycid.org/syep-info/
9. *How To Design An SMS Outreach Strategy In Youth ...*. https://www.s4ye.org/sites/default/files/2021-01/How%20To%20Note%20Issue%202_How%20To%20Design%20An%20SMS%20Outreach%20Strategy%20In%20Youth%20Employment%20Programs_EN_1.pdf
10. *
            Text Message Reminders Increase Appointment Adherence in a Pediatric Clinic: A Randomized Controlled Trial - PMC
        *. https://pmc.ncbi.nlm.nih.gov/articles/PMC5227159
11. *ADA Requirements: Effective Communication*. https://www.ada.gov/resources/effective-communication/
12. *small entity compliance guide*. https://docs.fcc.gov/public/attachments/DA-24-910A1.pdf
13. *Allowable Uses of Funds for Outreach Activities for Federal ...*. https://www.dol.gov/sites/dolgov/files/ETA/advisories/TEGL/2023/TEGL%2003-23/TEGL%2003-23-A/TEGL%2003-23.pdf
14. *Signal Vine - Workforce EdTech*. https://workforceedtech.org/mentorship-support/signal-vine/
15. *
            Text messaging to improve connection between adolescents and their health care providers - PMC
        *. https://pmc.ncbi.nlm.nih.gov/articles/PMC11736728/
16. *how to design an sms outreach strategy in youth employment ...*. https://documents1.worldbank.org/curated/en/099957403162326835/pdf/IDU021bb9f4f0a98a0482808b4c0076e0015c563.pdf
17. *Number comparison | Twilio*. https://www.twilio.com/en-us/lp/messaging-guide-2024-number-types/2
18. *What pricing and fees are associated with the A2P 10DLC ...*. https://help.twilio.com/articles/1260803965530-What-pricing-and-fees-are-associated-with-the-A2P-10DLC-service-
19. *SMS Pricing in United States for Text Messaging | Twilio*. https://www.twilio.com/en-us/sms/pricing/us
20. *How much does a Short Code cost? – Twilio Support*. https://support.twilio.com/hc/en-us/articles/226460288-How-much-does-a-Short-Code-cost-
21. *Messaging Principles and Best Practices May 2023*. https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf
22. *Duane Morris LLP - Plaintiffs Assert Minors Cannot Give Consent to Automated Calls and Messages Under the TCPA*. https://www.duanemorris.com/alerts/plaintiffs_assert_minors_cannot_give_consent_automated_calls_messages_under_tcpa_1221.html
23. *Ninth Circuit Finds That One Text Can Cause Concrete Harm, Remands for Decision Regarding Whether Minors Can Consent - TCPA Blog*. https://tcpablog.com/2023/ninth-circuit-finds-that-one-text-can-cause-concrete-harm-remands-for-decision-regarding-whether-minors-can-consent/
24. *General Effective Communication Requirements Under Title II ...*. https://archive.ada.gov/pcatoolkit/chap3toolkit.htm
25. *Workforce Development Software | Engage by Cell*. https://www.engagebycell.com/industries/workforce-development
26. *SMS marketing KPIs: How to measure your SMS marketing campaign's success | Twilio*. https://www.twilio.com/en-us/blog/sms-marketing-benchmark-kpi-metrics
27. *SMS Delivery Reports: A Guide | Twilio*. https://www.twilio.com/en-us/blog/sms-delivery-reports-overview
