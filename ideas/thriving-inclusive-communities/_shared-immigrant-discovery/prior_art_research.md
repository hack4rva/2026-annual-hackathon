# Prior Art Research — Immigrant Service Discovery

**Pillar:** Thriving and Inclusive Communities
**Problem Statement:** Immigrant Service Discovery — Help residents safely find and connect to trusted community services without creating accounts or sharing identifying information.
**Applies to:** 804Me
**Research Date:** April 1, 2026
**Method:** Synthesis of existing pillar research corpus (`pillar-repos/pillar-thriving-inclusive-communities/research/`)

**Primary sources from existing corpus:**
- `E1_prior_art_immigrant_service_tools.md` — National and Virginia-specific immigrant service platforms
- `E2_prior_art_multilingual_tools.md` — Multilingual civic tech patterns (311, chatbots, portals)
- `E3_prior_art_help1rva_alternatives.md` — Unite Us / Unite Virginia ecosystem and interoperability
- `E4_prior_art_failures.md` — Trust, privacy, and adoption failures in immigrant-serving tech
- `E5_prior_art_weekend_viable.md` — Weekend-to-impact hackathon patterns for service directories
- `C1_services_help1rva.md` — Help1RVA (Findhelp) platform capabilities and limitations
- `C2_services_refugee_ecosystem.md` — Global and US refugee service ecosystem overview
- `C4_services_gaps.md` — *Off-topic: covers C4ISR military services gaps, not immigrant service gaps; not referenced below*
- `D1_data_help1rva.md` — Help1RVA data access, structured fields, and extraction methods
- `D2_data_community_org_directories.md` — OIRE-verified trusted organizations and communication channels
- `A1_problem_landscape_immigrant_service_access.md` — Trust barriers, chilling effects, and access friction in Richmond

---

## 1. Comparable Tools Nationally

### Omnichannel Service Platforms

**IRC Signpost (Global)**
The most proven omnichannel immigrant information platform. Reached 58 million people and engaged 142,000 users in two-way communication across web, WhatsApp, Facebook Messenger, and Zendesk-powered human liaison inbox. Pairing a multilingual website with messaging channels and a human "community liaison" is the core pattern that drives real engagement. The NYC instance, Documented.info, maps 358 vetted providers with filters by service type, location, and population served across English, Spanish, French, and Haitian Creole (`E1_prior_art_immigrant_service_tools.md`).

**NYC MOIA (Mayor's Office of Immigrant Affairs)**
Pairs digital wayfinding with phone and in-person routes. Operates a City-funded Immigration Legal Support Hotline (800-354-0365) and 125+ MOIA Centers delivering services in neighborhoods. Key lesson: static pages are insufficient — digital tools must feature "call now" CTAs and route users to physical, trusted locations (`E1_prior_art_immigrant_service_tools.md`).

**Settle In (IRC / CORE)**
Multilingual resource library (11 languages) with two-way messaging (7 languages) and Digital Community Liaisons who respond within one business day. Privacy-light approach — usage data not linked to identity. However, the native app approach shows limited scale (50,000+ Android installs) compared to web-based tools. Key lesson: reuse the content structure and privacy model, avoid native app overhead (`E1_prior_art_immigrant_service_tools.md`).

### Service Directory Platforms

**ShelterTech SF Service Guide**
Volunteer-led nonprofit serving 10,000+ monthly users with 1,800+ services and 500 organizations. Success stems from direct partnership with government and nonprofit organizations to keep the guide accurate. Demonstrates that volunteer roots can scale when combined with institutional stewardship (`E5_prior_art_weekend_viable.md`).

**Link-SF (Zendesk + St. Anthony Foundation)**
Mobile-first web app connecting people to services. During a hack day, developers "forward engineered" Link-SF's data to HSDS compliance in a single afternoon — converting the dataset to a JSON file hosted on GitHub, decoupling backend from frontend. Demonstrates the JSON-backed React SPA pattern: no server needed, quick search/filter UX, easy theming (`E5_prior_art_weekend_viable.md`).

**Streetlives NYC**
Built for homeless individuals to find and rate social services. Ran human-centered design sessions with 50+ people with lived experience, discovering that community information needs mapped directly onto the Open Referral HSDS data model. Demonstrates co-design as a path to schema alignment (`E5_prior_art_weekend_viable.md`).

### State and Regional Backbone Tools

**Help1RVA (Findhelp / Aunt Bertha)**
Richmond's de facto service directory — a white-labeled instance of Findhelp with 1,800+ local programs. Supports 100+ languages via machine translation toggle but displays translation artifacts and "Error translating language" messages. No public API or bulk data export. Data freshness depends entirely on organizations self-managing their listings via "Claim" workflows. YMCA of Greater Richmond is the primary operational convenor, offering Social Needs Navigators with a 48-hour contact window (`C1_services_help1rva.md`, `D1_data_help1rva.md`).

**Unite Virginia (Unite Us)**
Statewide e-referral infrastructure backed by $10M in CARES Act funding. Reports 85,174 clients served, 94,470 referrals sent. Free for non-profit CBOs. "Get Help" portal supports dozens of languages. However, this is a closed-loop referral network among contracted providers — not a public-facing discovery tool. No open public API; enterprise integrations only (`E3_prior_art_help1rva_alternatives.md`).

**211 Virginia**
Statewide 24/7/365 phone helpline and web directory. Multilingual via phone. Explicitly limits data collection to what is strictly necessary. Best positioned as the default fallback hotline for any digital tool (`E1_prior_art_immigrant_service_tools.md`).

---

## 2. Open-Source Tools and Reusable Components

### Reusable Open-Source Components

| Capability | Reuse Candidate | What It Provides | Hackathon Viability |
|---|---|---|---|
| **Service directory frontend** | Link-SF (React + GitHub JSON) | Mobile-first search/filter UI backed by static JSON | High — fork and point at local data in hours |
| **Directory API + admin** | Ohana API + Ohana Web Search (Code for America) | Ruby on Rails backend with admin UI + separate web search frontend | Medium — requires experienced devops |
| **Static site directory** | Food Oasis LA (Jekyll) | Easiest hosting, no backend, CSV/JSON baked into build | High — hours to deploy |
| **Data standard** | HSDS (Open Referral) | Common schema for services, locations, organizations | High — ensures portability and interoperability |
| **Messaging bot** | Tarjimly pattern (FB Messenger) | Instant reach, no install, existing network effects | High — WhatsApp Business + intent router |

Source: `E5_prior_art_weekend_viable.md`

### Data Standard: HSDS (Human Services Data Specification)

The Open Referral HSDS standard provides a common schema for service directories. Streetlives NYC confirmed that community information needs map directly onto HSDS entities. Link-SF was converted to HSDS in a single hack day session. For Richmond, adopting HSDS ensures data can be shared across Help1RVA, 211, and any future directory tools — even if the initial dataset is manually curated (`E5_prior_art_weekend_viable.md`, `E3_prior_art_help1rva_alternatives.md`).

---

## 3. Design Patterns That Work

### Pattern 1: Anonymous-by-Default Architecture
Every successful immigrant service tool treats anonymity as a hard requirement, not a feature. 211 Virginia collects only necessary information and avoids cookies. Settle In ensures usage data is not linked to identity. USCRI's Unaccompanied Children Resource Center allows browsing without revealing any personal information. The pattern: no accounts, no login, no tracking, explicit privacy statements (`E1_prior_art_immigrant_service_tools.md`).

### Pattern 2: Vetted, Filterable Service Maps
Uncurated lists overwhelm users. Documented.info's map succeeds because users can filter 358 services by specific criteria (location, population served, service type). The Airtable + Mapbox pattern — with eligibility notes, "last-updated" date stamps, and phone-first CTAs — is the most replicable directory architecture for a weekend build (`E1_prior_art_immigrant_service_tools.md`).

### Pattern 3: Language-First, Plain-Language Content
Language support is a requirement, not a feature. Rewriting content to 6th-grade reading level increased lower-literacy user success rates from 46% to 82% (`E2_prior_art_multilingual_tools.md` citing NN/g research). Providence paired its PVD311 launch with library training sessions and bilingual flyers. Bilingual category labels (e.g., "Pothole / El Bache") reduce data collection impact while aiding LEP users. For Richmond: ship in the top 4–6 local languages (Spanish, Arabic, Dari/Pashto, Swahili/Kinyarwanda), use plain-language templates, mandate community review over machine-translation-only workflows (`E2_prior_art_multilingual_tools.md`, `A1_problem_landscape_immigrant_service_access.md`).

### Pattern 4: Omnichannel with Human Handoff
Automated tools alone are insufficient for complex immigration needs. Signpost's 142,000 two-way users stem from connecting digital channels to human liaisons. The pattern: build a WhatsApp/Messenger bot for basic triage, seamlessly hand off to a human liaison inbox (Zendesk or Front) with a stated 1-business-day SLA (`E1_prior_art_immigrant_service_tools.md`).

### Pattern 5: Trusted Messenger Co-Branding
Tools gain trust by associating with organizations the community already trusts. OIRE maintains relationships with 15 trusted community organizations. Co-branding with ReEstablish Richmond, Sacred Heart Center, or IRC immediately transfers institutional trust to a new digital tool. Welcoming America's communications toolkit emphasizes working with "trusted messengers" — immigrant and refugee leaders who act as informal community guides (`E1_prior_art_immigrant_service_tools.md`, `D2_data_community_org_directories.md`).

---

## 4. Design Anti-Patterns and Failure Cases

### Anti-Pattern 1: Native App Dependency
Native apps introduce massive friction (app store downloads, storage, updates). USAHello discontinued FindHello. Settle In's native app shows only 50,000+ Android installs despite 11-language support. For this population, web/PWA + WhatsApp is the only viable delivery channel (`E1_prior_art_immigrant_service_tools.md`).

### Anti-Pattern 2: PII Collection and Surveillance Risk
Collecting identifying information creates enforcement risk and deters undocumented users. ICE routinely uses administrative subpoenas to demand IP addresses, connection records, and location data from tech platforms. The CBP One app required facial recognition and GPS tracking, with data sent to Google Firebase without disclosure. DHS rescinded its "Protected Areas" memo. Any tool that collects more than the minimum necessary data becomes a potential enforcement vector (`E4_prior_art_failures.md`, `G2_risks_pii_exposure.md`).

### Anti-Pattern 3: Unreviewed Machine Translation for Critical Content
CuidadoDeSalud.gov launched with "Spanglish" translations, translating "premium" as "prima" (female cousin), and saw fewer than 5,500 Spanish enrollments in California despite 4.3 million Spanish-only speakers. AI translation errors in asylum processes jeopardize applications. Section 1557 of the ACA prohibits unreviewed machine translation for vital health content. Help1RVA's own interface displays "Error translating language" messages. Machine translation is acceptable only for basic navigation with clear disclaimers — never for eligibility, legal, or health content (`E4_prior_art_failures.md`, `E2_prior_art_multilingual_tools.md`).

### Anti-Pattern 4: Build-Without-Community, Abandon-After-Launch
Of 169 "refugee tech" projects launched around 2015, the majority went inactive. Metacollect was discontinued after two years due to lack of resources. Clarat concluded that mapping a dynamic sector was an "elusive goal" because few people actually used it. Bureaucrazy won a hackathon and received massive press but stalled due to data privacy concerns and funding logistics. The single most important factor in whether a hackathon project survives is the presence of a named community organization that owns data maintenance after the event (`E4_prior_art_failures.md`, `E5_prior_art_weekend_viable.md`).

### Anti-Pattern 5: Lawful Data Repurposing to Enforcement
ICE scanned DMV driver's license photos for facial recognition matches without residents' awareness, accessing data on three in four adults. When civic data is accessed by immigration enforcement, it creates a massive chilling effect that discourages immigrants from using public services entirely. Legal firewalls prohibiting secondary law-enforcement access, transparency reports, and community data oversight are non-negotiable guardrails (`E4_prior_art_failures.md`).

---

## 5. Richmond's Existing Infrastructure

### What Exists and Where It Falls Short

| Platform | Strengths | Gaps for Immigrant Discovery |
|---|---|---|
| **Help1RVA** | 1,800+ programs; broad service categories; "Claimed" status indicates active listings | No public API; machine translation artifacts; no anonymity guarantee; stale data risk |
| **211 Virginia** | 24/7/365; multilingual phone interpretation; minimal data collection | May lack granular niche immigrant-serving programs; web interface less curated |
| **Unite Virginia** | 85K clients served; free for CBOs; extensive language support on "Get Help" | Closed-loop network, not public-facing discovery; no open API |
| **OIRE Trusted Org List** | Authoritative; OIRE-verified; 15 organizations | Not integrated into any tool; no structured data fields beyond name and notes |
| **ReEstablish Richmond** | Health resources curation; Kinyarwanda driver's manual translation; language access work | Organization-specific; not a platform; limited to their own audience |

Source: `C1_services_help1rva.md`, `E3_prior_art_help1rva_alternatives.md`, `D2_data_community_org_directories.md`

### Communication Channels Confirmed by OIRE (2026-03-26)

Facebook groups (primary digital), WhatsApp (direct messaging and groups), Instagram (younger demographics), YouTube (video), in-person networks (central), local radio (limited-digital-access populations). Design implication: digital tools should distribute via Facebook and WhatsApp, not expect users to discover a standalone website (`D2_data_community_org_directories.md`).

---

## 6. Weekend Build Patterns for Richmond

### Track A: Curated Service Map (Documented.info Pattern)
Build a phone-first, filterable map of 20–30 verified immigrant services. Use Airtable for the database, a provider vetting form for intake, and a Mapbox list+map UI. Include filters (service type, population, language), prominent "call now" buttons, and "last verified" date stamps. Manual data extraction from Help1RVA's structured program pages (10–15 records per hour per person) is the legally safe acquisition path (`E1_prior_art_immigrant_service_tools.md`, `D1_data_help1rva.md`).

### Track B: WhatsApp Newcomer Q&A (Signpost-Lite Pattern)
Build a WhatsApp Business bot with bilingual canned responses for the top-10 "day one" newcomer questions (housing, food, legal aid, ESL, healthcare). Simple intent router with interactive buttons (no typed responses required). Seamless handoff to a human triage inbox with a stated 24-hour SLA. Co-brand with a trusted CBO (`E1_prior_art_immigrant_service_tools.md`, `E5_prior_art_weekend_viable.md`).

### Track C: Static JSON-Backed Directory (Link-SF Pattern)
Fork Link-SF or a similar React SPA. Power it with a hand-curated HSDS-compliant JSON file hosted on GitHub. Focus the weekend on mapping local resources (using the OIRE list + Help1RVA category searches + partner verification calls) and integrating the tool into existing CBO workflows (`E5_prior_art_weekend_viable.md`).

### Non-Negotiable for All Tracks
- **No accounts, no login, no PII collection** — anonymous browsing is the baseline
- **Named data steward** — identify who maintains the data after demo day
- **Anti-fraud warnings** — verified contact methods and zero-fee policy messaging
- **Co-branding** — at least one trusted CBO visibly endorses the tool
- **Explicit privacy statement** — one-page, plain-language, multilingual

---

## 7. Post-Hackathon Survival Factors

### What Distinguishes Survivors from Graveyard Projects

| Factor | Survivors (ShelterTech, Link-SF, Councilmatic) | Failures (metacollect, clarat, FindHello, Citygram) |
|---|---|---|
| **Data stewardship** | Named organization owns updates | Volunteer-maintained; decays when energy fades |
| **Data pipeline** | Connected to stable feeds or HSDS-standardized exports | Bespoke schemas; no update automation |
| **Institutional partnership** | Government or established nonprofit co-owns | Built "for" a community without community co-design |
| **Scope** | Narrow, clearly defined user need | Ambitious mapping of a dynamic sector |
| **Architecture** | Low-ops (static sites, GitHub hosting, JSON backends) | Complex backends requiring active devops |

Source: `E5_prior_art_weekend_viable.md`, `E4_prior_art_failures.md`

### Pre-Demo Governance Checklist
Before presenting, a team must answer:
1. Who maintains this data on Monday morning? (Name a person and organization)
2. What is the 30-day content freshness SLA?
3. What PII does this tool collect? (Answer must be "none" or "aggregated-only")
4. Which trusted CBO has reviewed and endorsed the tool?
5. What is the non-digital fallback path? (Answer: 211 Virginia phone line)
