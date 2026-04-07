# Reaching Immigrant Communities: Privacy-Preserving, Multilingual Service Navigation That Works

## Executive Summary

- **Anonymous web search is the lowest-risk, broadest entry point, but only when paired with language support:** Platforms like Findhelp allow individuals to search public directories without logging in ("You are free to search... without providing any information about yourself") [1] [2]. However, applying for benefits often requires an account and personal data [1]. 
- **211 remains the most trusted, no-account, multi-channel backbone:** 211 offers phone, web, and SMS access (e.g., "Text your zip code to 898-211") [3] [4]. Local implementations like NYC311 support interpretation in over 175 languages [5].
- **City digital screens and kiosks deliver massive, anonymous "push" awareness:** New York City's Mayor's Office of Immigrant Affairs (MOIA) utilized over 4,000 LinkNYC screens for a "Know Your Rights" campaign, expected to earn 25 million impressions per month [6]. In 2025 alone, LinkNYC delivered more than 171 million free Wi-Fi sessions and over 5 million free calls [7]. However, kiosks face strict new accessibility mandates by May 2026 [8].
- **WhatsApp outperforms SMS and IVR for two-way engagement, but sacrifices anonymity:** Randomized evaluations by the Immigration Policy Lab (IPL) and Innovations for Poverty Action (IPA) show WhatsApp surveys achieved a 27 percentage point higher response rate than SMS and 12 percentage points higher than Interactive Voice Response (IVR) among mobile refugee populations [9] [10]. These automated surveys can cost as little as $0.32 per completed 19-question survey [11].
- **SMS is the most inclusive "pull" channel for low-tech users, but requires strict data minimization:** Services like mRelief use SMS (e.g., text "FOOD" to 74544) for rapid SNAP screening [12]. While effective, mRelief's 2025 privacy policy notes the collection of highly sensitive data, including Social Security Numbers and immigration status [13].
- **Accessibility is now a strict compliance deadline:** The HHS Section 504 digital accessibility rule mandates that recipients of federal funding (with 15 or more employees) ensure their web content, mobile apps, and kiosks conform to WCAG 2.1 Level AA by May 11, 2026 [8] [14]. Kiosks must provide "equivalent facilitation" if inaccessible [14].
- **State privacy laws are tightening around nonprofits:** The 2026 state privacy landscape (including laws in Texas, Oregon, Nebraska, and New Hampshire) introduces strict obligations around sensitive data (like immigration status) and data protection assessments, with some states explicitly including nonprofits in their scope [15].

## 1) What "good" looks like: privacy-preserving, multilingual access that scales

The most effective strategy for connecting immigrant and refugee residents to community services relies on a "push + pull + people" model. This approach combines anonymous web discovery, language-first content, opt-in messaging, and accessible "push" notifications in trusted community spaces. 

Immigrant populations face unique barriers, including fear of surveillance, language isolation, and complex eligibility rules. Tools that require account creation or collect Personally Identifiable Information (PII) often deter the most vulnerable users. The winning model leverages public infrastructure (like LinkNYC kiosks) to broadcast awareness [6], uses anonymous web directories (like Findhelp) for private discovery [2], and utilizes WhatsApp or SMS for targeted, opt-in engagement [11] [16]. Finally, these digital channels must route users to human navigators (via 211 or community-based organizations) who can provide culturally competent, multilingual assistance [5] [17].

## 2) Toolscape: which platforms meet "no login, no PII, no English" and where they don't

Not all popular civic technology tools satisfy the strict anonymity and language requirements needed for vulnerable immigrant populations. Cities and nonprofits must use a layered toolset and design around the limitations of each platform.

### Table: Tools compared on anonymity, language, and channels

| Platform | Account Required? | Can browse with no PII? | Language Support | Channels | Notes & Risks |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Findhelp / Aunt Bertha** | No for search; Yes for applying | Yes | Multilingual UI | Web | "You are free to search... without providing any information" [1]. Applying shares data with third parties [1]. |
| **211 / 311** | No | Yes | 175+ languages (NYC311) [5] | Phone, Web, SMS | SMS available in many locales (e.g., text zip to 898-211) [4]. Highly trusted backbone. |
| **LinkNYC / City Kiosks** | No | Yes | Multilingual campaigns | In-person screens | 25M impressions/month for MOIA campaign [6]. Must meet May 2026 HHS accessibility rules [8]. |
| **RefAid** | Yes (Email) | No (Requires email/location) | English, Spanish, French, Ukrainian, Farsi, Arabic [18] | Mobile App | Emphasizes privacy (no data shared with police/ICE) [19], but requires email to log in [19]. |
| **WhatsApp (via IPL/NGOs)** | Yes (Phone number) | No | Highly customizable | Mobile App | 75% response rate in Colombia refugee study [11]. Requires explicit opt-in [16]. |
| **mRelief** | No for SMS screener | No (Collects PII) | English, Spanish | SMS, Web | Fast SNAP screening [12], but 2025 privacy policy allows collection of SSN and immigration status [13]. |

### Platform Deep Dives

**Findhelp / Aunt Bertha:** Findhelp excels at anonymous discovery. Their policy explicitly states that users can search without logging in to ensure the "security of anonymity" [2]. However, if a user chooses to apply for benefits through the platform, they must create an account, and Findhelp collects sensitive data (including criminal history and immigration status) to share with the service provider [1].

**211 / 311:** These systems serve as the multilingual backbone for municipal services. NYC311 handled over 320,000 customer interactions across 104 languages in 2024, offering interpretation in over 175 languages [5]. Many 211 systems also support SMS, allowing users to text their zip code to 898-211 for confidential help [4].

**RefAid & Refugee.Info:** RefAid maps nearby services from trusted organizations and supports languages like Farsi and Arabic [18]. While it promises not to share data with authorities, it does require an email address to log in and uses location data to show nearby services [19]. 

**mRelief:** mRelief provides a highly effective SMS screener for food assistance (text "FOOD" to 74544) [12]. However, it is not anonymous; its 2025 privacy policy states it may collect Social Security Numbers, immigration status, and public aid history [13].

**LinkNYC & City Kiosks:** LinkNYC provides mass, anonymous reach. The kiosks offer free Wi-Fi, device charging, and phone calls without requiring personal data [6]. They are highly effective for broadcasting QR codes that route users to multilingual legal resources [6].

## 3) Channel effectiveness by audience segment and use case

Matching the right channel to the user's digital literacy, device access, and urgency is critical. 

### Table: Channel vs. Segment and Use Case Matrix

| Channel | Best For (Audience) | Best For (Use Case) | Effectiveness Evidence |
| :--- | :--- | :--- | :--- |
| **WhatsApp** | Mobile populations, recent arrivals, established networks | Surveys, cohort engagement, urgent alerts | 27 points higher response rate than SMS; 12 points higher than IVR [10]. |
| **SMS** | Low digital literacy, limited data plans | Simple menus, benefits screening, location routing | Highly inclusive; mRelief SMS screener increased application completion from 32% to 59% [20]. |
| **Web (No-Login)** | Users seeking privacy, advocates, youth | Private discovery, legal help, housing | Allows complete anonymity for sensitive searches [2]. |
| **Kiosks / Screens** | General public, transit riders, unhoused | Awareness campaigns, free Wi-Fi/calls | 171M Wi-Fi sessions and 5M free calls in 2025 (LinkNYC) [7]. |
| **Hotline / 211** | Seniors, complex cases, low literacy | Assisted navigation, crisis escalation | NYC311 used in 320,000 interactions across 104 languages [5]. |

### WhatsApp vs. SMS
WhatsApp is the dominant messaging platform for many immigrant communities. Research by the Immigration Policy Lab found that WhatsApp surveys with Venezuelan refugees achieved a 60.8% completion rate at three months, significantly outperforming SMS and IVR due to higher initial engagement and lower break-off rates [10]. WhatsApp allows users to retain their numbers across borders [11]. However, WhatsApp requires explicit opt-in [16] and exposes phone numbers, reducing anonymity. SMS remains the best fallback for users without smartphones or data plans, but requires strict adherence to TCPA guidelines and clear "STOP" flows [21].

### Kiosks and Digital Screens
Public screens are highly effective for "push" awareness. NYC MOIA's $630,000 "Know Your Rights" campaign utilized over 4,000 LinkNYC screens to display QR codes linking to multilingual legal resources, generating an estimated 25 million impressions per month [6]. Kiosks also bridge the digital divide by offering free Wi-Fi and phone calls [6].

## 4) Privacy, anonymity, and compliance guardrails

Deploying technology for vulnerable populations requires strict adherence to data minimization, state privacy laws, and federal accessibility mandates.

### Table: Minimum Privacy and Compliance Controls by Channel

| Channel | Required Controls & Guardrails |
| :--- | :--- |
| **Web Directories** | No third-party advertising cookies; self-hosted or privacy-first analytics (e.g., Matomo, Plausible) [22] [23]; no login required for search [2]. |
| **SMS / WhatsApp** | Explicit opt-in consent [16]; clear STOP/HELP commands [21]; minimal data capture; strict retention limits. |
| **Kiosks / Screens** | No cameras or personal data collection [24]; must meet WCAG 2.1 AA or provide "equivalent facilitation" by May 2026 [8] [14]. |
| **Vendor Contracts** | Data Processing Agreements (DPAs) enforcing data minimization, purpose limitation, and strict protocols for law enforcement requests [25] [26]. |

### State Privacy Laws and Sanctuary Policies
The 2026 state privacy landscape is complex. New comprehensive privacy laws in states like Texas, Oregon, Nebraska, and New Hampshire introduce strict requirements around Data Protection Impact Assessments (DPIAs) and the processing of sensitive data, which explicitly includes citizenship or immigration status [15]. Notably, laws in Oregon and Colorado do not exempt nonprofits [15]. Furthermore, municipal sanctuary policies often restrict the sharing of data with federal immigration enforcement, requiring cities to ensure their vendors do not inadvertently expose PII [27].

### HHS Section 504 Digital Accessibility Rule
By May 11, 2026, recipients of HHS federal financial assistance with 15 or more employees must ensure their web content, mobile apps, and kiosks conform to WCAG 2.1 Level AA [8] [14]. For kiosks, if the hardware cannot be made fully accessible, the entity must provide "equivalent facilitation"—such as allowing a person with a disability to bypass the kiosk and go directly to personnel at a main desk [8] [14].

## 5) Accessibility and language-access design system

Language access cannot be an afterthought; it must be a core design system. Machine translation is insufficient for complex legal or health information [28].

### Localization and UX Best Practices
- **Language Selection:** Match languages to local demographics. For example, NYC MOIA translates vital documents into 10 designated languages, including Spanish, Chinese, Russian, Bangla, Haitian Creole, Korean, Arabic, Polish, Urdu, and French [29].
- **Professional Translation:** Automated translation (like Google Translate) should include disclaimers that it "cannot translate all types of documents, and it should not be relied upon for vital information" [29]. Professional human translation is required for accuracy [28].
- **Low-Literacy UX:** Utilize plain language, clear iconography, and progressive disclosure. Ensure interfaces support Right-to-Left (RTL) languages like Arabic and Farsi [18].
- **WCAG 2.2 AA Targets:** While the HHS rule requires WCAG 2.1 AA, organizations should target WCAG 2.2 AA to future-proof their platforms. New criteria include "Target Size (Minimum)" and "Accessible Authentication," which prohibits forcing users to memorize complex passwords without alternatives [30] [31].

## 6) Implementation playbook for a mid-sized city/CBO

A mid-sized city or nonprofit can deploy a privacy-preserving service discovery stack in 6 to 9 months by following a phased approach.

### Table: Build vs. Buy Recommendations

| Component | Recommendation | Rationale |
| :--- | :--- | :--- |
| **Web Directory** | Buy (e.g., Findhelp) or Build (Open Referral HSDS) | Findhelp offers a nationwide network and no-login search [1] [2]. Open Referral allows for custom, open-data implementations [32]. |
| **Analytics** | Build/Self-Host (Matomo or Plausible) | Avoids Google Analytics; ensures 100% data ownership and compliance with strict privacy laws without requiring cookie consent banners [22] [23]. |
| **Messaging** | Buy (WhatsApp Business API / Twilio) | WhatsApp requires official API partners for scale [11]. Twilio handles SMS compliance and opt-ins [11]. |
| **Kiosks** | Partner (e.g., LinkNYC, IKE Smart City) | Leverage existing municipal ad-funded networks (zero-cost to city) rather than buying bespoke hardware [6] [24]. |

### Phased Rollout
1. **Awareness (Push):** Deploy multilingual posters and utilize existing city digital screens (like transit kiosks) to display QR codes. These codes should route users to a mobile-friendly, no-login microsite [6].
2. **Private Discovery (Pull):** Launch a web directory that requires zero PII to browse [2]. Implement SMS keyword menus (e.g., text "AYUDA" to 898211) for users without smartphones [33].
3. **Cohort Engagement:** Partner with trusted Community Based Organizations (CBOs) to build opt-in WhatsApp broadcast lists for urgent alerts and micro-surveys [11] [34].
4. **Assisted Navigation:** Ensure all digital channels offer a clear escalation path to a human navigator via a 211 hotline or in-person library/clinic staff [5] [17].

## 7) Budget ranges and timelines

A functional Minimum Viable Product (MVP) can be launched efficiently by leveraging existing infrastructure.

### Table: Estimated Budget Bands

| Category | Low Complexity | Medium Complexity | High Complexity (Enterprise) |
| :--- | :--- | :--- | :--- |
| **Directory Licensing** | $5,400/yr (Findhelp Basic) [35] | $24,000/yr (Findhelp Pro) [35] | $50,000+/yr (Findhelp Enterprise) [35] |
| **Translation & Localization** | $10k (Top 3 languages) | $30k (Top 8 languages) | $75k+ (Continuous localization) |
| **Messaging (SMS/WhatsApp)** | $5k (Basic Twilio/API setup) | $15k (Automated flows) | $40k+ (Custom chatbot integration) |
| **Kiosks / Screens** | $0 (Leverage existing city network) [24] | $0 (Leverage existing city network) | Bespoke hardware costs vary wildly |

**Timeline:**
- **Days 0-60:** Establish community advisory board, select top languages, configure privacy-first analytics (Matomo/Plausible), and draft SMS keywords.
- **Days 60-120:** Launch no-login microsite, roll out QR codes on city screens, and begin WhatsApp pilot cohorts via trusted CBOs.
- **Days 120-180:** Conduct WCAG 2.2 AA audits, finalize kiosk "equivalent facilitation" Standard Operating Procedures (SOPs) ahead of the May 2026 deadline, and evaluate initial metrics.

## 8) KPIs and evaluation plan

Success must be measured by reach, comprehension, and safe conversion, rather than invasive tracking.

### Table: KPI Framework

| Phase | Metric | Measurement Method (Privacy-Preserving) |
| :--- | :--- | :--- |
| **Awareness** | Screen impressions, QR scans | Aggregate scan counts; vendor impression reports [6]. |
| **Discovery** | Unique visits by language | Cookieless analytics (Matomo/Plausible) [22] [23]. |
| **Engagement** | WhatsApp response rates | Automated survey completion rates (e.g., targeting >60%) [10]. |
| **Outcomes** | 211 warm hand-offs, appointments | Aggregate referral counts from CBOs and 211 dispatch [17]. |

To evaluate comprehension among low-literacy users, conduct "teach-back" testing in partnership with CBOs. Use short, multilingual micro-surveys via WhatsApp (which yield high response rates) to gather feedback on service utility [11].

## 9) Risk register and mitigations

Deploying technology for immigrants carries inherent risks regarding surveillance, misinformation, and exclusion.

### Table: Top Risks and Controls

| Risk | Impact | Mitigation Strategy |
| :--- | :--- | :--- |
| **Privacy & Surveillance** | High (Chilling effect on usage) | Enforce strict Data Processing Agreements (DPAs) [25] [26]. Default to no-login browsing [2]. Do not collect SSNs or immigration status unless legally required for a specific benefit [13]. |
| **Accessibility Compliance** | High (Civil rights violations) | Audit against WCAG 2.2 AA [30]. Ensure kiosks have documented "equivalent facilitation" bypasses by May 2026 [8]. |
| **Misinformation** | Medium (Loss of trust) | Maintain strict editorial control over WhatsApp broadcasts. Link only to official, verified legal resources [36]. |
| **Language Drift** | Medium (Exclusion of new arrivals) | Monitor local demographic shifts and update the core language set annually. |

## References

1. *
        Aunt Bertha | Privacy Policy
    *. https://www.findhelp.org/legal/privacy
2. *Standards Matter and We’re Pushing Them Forward - Findhelp*. https://company.findhelp.com/blog/2019/11/18/at-aunt-bertha-standards-matter-and-were-pushing-them-forward/
3. *Home New - 2-1-1 Metro Chicago*. https://211metrochicago.org/
4. *Privacy Policy - United Way 211*. https://211unitedway.org/privacy-policy/
5. *Mayor Adams Issues Directive to City Agencies to Identify Ways to Improve Communications With Non-English Speaking New Yorkers by Using Language Technologies - NYC Mayor's Office*. https://www.nyc.gov/mayors-office/news/2025/12/mayor-adams-issues-directive-to-city-agencies-to-identify-ways-t
6. *Press | LinkNYC*. https://www.link.nyc/press-release-260
7. *Press | LinkNYC*. https://www.link.nyc/press-release-361
8. *new-requirements-accessibility-web-content-mobile-apps- ...*. https://www.hhs.gov/sites/default/files/new-requirements-accessibility-web-content-mobile-apps-kiosks.pdf
9. *WhatsApp Surveys: a Public Good for Remote, Low-cost, and Scalable Research | IPA*. https://poverty-action.org/whatsapp-surveys-public-good-remote-low-cost-and-scalable-research
10. *Automated Chat Application Surveys Using WhatsApp*. https://kingcenter.stanford.edu/sites/g/files/sbiybj16611/files/media/file/wp2015_0.pdf
11. *Low-Cost, Automated WhatsApp Surveys - Immigration Policy Lab*. https://immigrationlab.org/project/whatsappsurveys/
12. *Sign Up for SNAP (formerly known as Food Stamps) • mRelief*. https://mrelief.org/
13. *mRelief's Privacy and Data Sharing Policy*. https://www.mrelief.com/privacy
14. *
	Digital Accessibility Rule for: Websites, Kiosks and Apps – May 2026 Deadline Near | Baker Donelson
*. https://www.bakerdonelson.com/digital-accessibility-rule-websites-kiosks-apps-may-2026-deadline-near
15. *U.S. Data Privacy Laws: A Guide to the 2026 Landscape | Osano*. https://www.osano.com/us-data-privacy-laws
16. *The Ultimate Guide to WhatsApp Business API for NGOs, Businesses, and Universities - SMS, Voice, WhatsApp, and Airtime Campaigns in 200+ Countries*. https://www.engagespark.com/blog/the-ultimate-guide-to-whatsapp-business-api-for-ngos-businesses-and-universities/
17. *Program Evaluation*. https://www.nyc.gov/assets/opportunity/pdf/evidence/nycitizenship-evaluation-report-2020.pdf
18. *RefAid=Refuge (Refugee Aid) - Apps on Google Play*. https://play.google.com/store/apps/details?id=com.digitalfanclubs.refaid&hl=en
19. *RefAid - About*. https://refaid.com/
20. *Study shows mRelief’s SNAP application process makes it more likely that an individual will apply*. https://www.mrelief.com/blog/mrelief_makes_it_more_likely_that_individual_will_apply
21. *Sign Up for SNAP (formerly known as Food Stamps) • mRelief*. https://www.mrelief.com/terms
22. *Privacy-Friendly Web Analytics User Privacy Protected | Matomo Analytics*. https://matomo.org/privacy/
23. *Plausible Analytics Privacy Policy | Plausible Analytics*. https://plausible.io/privacy
24. *City Council Approves Digital Kiosks to Enhance Navigation and Support Local Businesses | AustinTexas.gov*. https://www.austintexas.gov/economic-development/news/city-council-approves-digital-kiosks-enhance-navigation-and-support-local
25. *Sample Data Processing Agreement | IAPP*. https://iapp.org/resources/article/sample-data-processing-agreement
26. *Data Processing Agreement (Template) - GDPR.eu*. https://gdpr.eu/data-processing-agreement/
27. *Article: Escalation of ICE Operations Emboldens St.. | migrationpolicy.org*. https://www.migrationpolicy.org/article/state-local-pushback-ice
28. *
            Digital solutions for migrant and refugee health: a framework for analysis and action - PMC
        *. https://pmc.ncbi.nlm.nih.gov/articles/PMC11732709/
29. *Language Access Hub - MOIA*. https://www.nyc.gov/site/immigrants/language-needs/language-access-hub.page
30. *Web Content Accessibility Guidelines (WCAG) 2.2*. https://www.w3.org/TR/WCAG22/
31. *WCAG 2.2 Checklist: Complete 2026 Compliance Guide*. https://www.levelaccess.com/blog/wcag-2-2-aa-summary-and-checklist-for-website-owners/
32. *Human Services Data Specification (HSDS)*. https://docs.openreferral.org/en/latest/hsds/overview.html
33. *Text Alerts - 211 Connecting Point*. https://211connectingpoint.org/text-alerts/
34. *WhatsApp for NGOs & Non-Profits | 2026 Guide*. https://m.aisensy.com/blog/whatsapp-for-ngos-and-non-profits/
35. *Pricing for Findhelp’s Products & Services - Findhelp*. https://company.findhelp.com/pricing/
36. *Know Your Rights: Federal Immigration Enforcement (ICE) - MOIA*. https://www.nyc.gov/knowyourrights
