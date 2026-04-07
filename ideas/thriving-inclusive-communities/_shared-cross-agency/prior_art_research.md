# Prior Art Research — Cross-Agency Service Navigation

**Pillar:** Thriving and Inclusive Communities
**Problem Statement:** Help residents navigate housing, workforce, and reentry services without repeating their story across every agency.
**Applies to:** Circle Trust
**Research Date:** April 1, 2026
**Method:** Synthesis of existing pillar research corpus (`pillar-repos/pillar-thriving-inclusive-communities/research/`)

**Primary sources from existing corpus:**
- `A2_problem_landscape_cross_agency_navigation.md` — Root causes of cross-agency friction and the "repeating your story" problem
- `E1_prior_art_immigrant_service_tools.md` — National and Virginia-specific service navigation platforms
- `E4_prior_art_failures.md` — Documented trust, privacy, and adoption failures in immigrant-serving tech
- `E5_prior_art_weekend_viable.md` — Hackathon-to-production patterns for service directories
- `C3_services_city_social_services.md` — Richmond DSS access channels, eligibility, and language access
- `C4_services_gaps.md` — *Off-topic: contains military C4ISR gap analysis, not Richmond social services gaps; not referenced below*
- `C5_services_findhelp_uniteus.md` — FindHelp (Help1RVA) and Unite Us platform comparison
- `D2_data_community_org_directories.md` — OIRE-verified trusted community organizations

---

## 1. Richmond's Existing Referral and Navigation Infrastructure

### Unite Virginia (Unite Us): The Closed-Loop Backbone That Already Exists

Richmond does not need to build a referral network from scratch. Unite Virginia, powered by Unite Us, is a statewide coordinated care network that has served 85,174 clients, identified 174,229 needs, and sent 94,470 referrals. It partners with the Virginia Department of Health and VHHA. VHC Health integrates Unite Us directly with their Epic EHR. Community-based organizations receive platform access and Insights at no cost (`C5_services_findhelp_uniteus.md`).

Unite Us operates on a consent-based model with consent forms available in 50+ languages. It tracks closed-loop referral outcomes — whether services were actually delivered, not just whether a referral was sent. When a referral is closed, partners select specific outcomes (e.g., "received clothing" rather than just "got help"), and distinct "resolved" vs. "unresolved" fields help identify resource gaps (`C5_services_findhelp_uniteus.md`).

**Gap:** Unite Us adoption among Richmond's reentry and immigrant-serving nonprofits is unverified. The platform requires network buy-in and may miss the nuanced "seeker experience" (barriers faced during referral) (`C5_services_findhelp_uniteus.md`, `B2_users_case_manager.md`).

### Help1RVA (FindHelp): The Public Discovery Layer

Help1RVA is a white-labeled FindHelp deployment hosting 1,800+ local programs. Richmond City Health District programs are actively "claimed" and updated. The City DSS website directs residents to Help1RVA for self-service discovery. FindHelp is HIPAA-compliant and HITRUST-certified, collects minimal demographic data by default (name, phone, email, zip), and pledges never to sell social care data (`C5_services_findhelp_uniteus.md`).

**Gap:** Help1RVA and Unite Us do not natively exchange data. A service discovered in Help1RVA must be manually re-entered into Unite Us for a tracked referral. Multilingual access is uneven — some listings include "English, Spanish" while many default to English only. There is no public API for hackathon use; developer access is gated behind enterprise contracts (`C5_services_findhelp_uniteus.md`).

### 211 Virginia: The 24/7 Statewide Fallback

211 Virginia maintains 19,000+ programs, offers interpretation in 150+ languages, and is available 24/7/365 by phone. It collects personal information only to the extent necessary to provide services. For any hackathon tool, 211 should be the default fallback for live human assistance (`E1_prior_art_immigrant_service_tools.md`).

### City DSS and OIRE: Entry Points and Language Access

Richmond DSS benefits are accessible via CommonHelp (online), phone (855-635-4370), fax, and two physical offices. OIRE provides free interpretation via staff (Spanish/English during business hours) and United Language Group (other languages, after-hours). AR 5.24 mandates language access citywide. The iSpeak Richmond portal provides language identification guides and interpreter cards (`C3_services_city_social_services.md`).

**Gap:** Non-emergency visits without a pre-scheduled interpreter create front-desk friction. Real-time application status from CommonHelp and RRHA waitlist positions require state/authority integration agreements that don't exist yet (`C3_services_city_social_services.md`).

---

## 2. National Prior Art: What Works for Cross-Agency Navigation

### Closed-Loop Referral Networks

**Unite Us / Unite Virginia** — The most directly applicable model. Already operational in Richmond. Ballad Health's use of Unite Virginia reduced ED utilization by 16.2% and saved $68.80 per member per month by closing the loop on social care referrals (`B2_users_case_manager.md`). The mandate for a hackathon team is not to build a competing referral system but to drive adoption of the one that exists.

**NYC MOIA (Mayor's Office of Immigrant Affairs)** — Pairs a legal hotline (800-354-0365), 311 routing, and 125+ neighborhood centers. The lesson: static digital tools are insufficient without clear "call now" CTAs and physical trusted locations. Digital wayfinding must connect to human support (`E1_prior_art_immigrant_service_tools.md`).

### Service Directory Platforms

**IRC Signpost / Documented.info (NYC)** — Signpost has reached 58 million people and engaged 142,000 users in two-way communication. Its NYC instance (Documented.info) maps 358 vetted providers with filters by service type, location, and population. The "Signpost-lite" stack (web + WhatsApp/Messenger + Zendesk human triage) is the most replicable pattern for a weekend build (`E1_prior_art_immigrant_service_tools.md`).

**ShelterTech SF Service Guide** — Volunteer-led nonprofit serving 10,000+ monthly users with 1,800 services and 500 organizations. Success came from working directly with government and nonprofit partners to keep the guide accurate (`E5_prior_art_weekend_viable.md`).

**Streetlives NYC** — Built with 50+ people with lived experience of homelessness. Discovered that community information needs map directly onto the Open Referral HSDS data model. Co-design with affected populations produced better data structures than top-down design (`E5_prior_art_weekend_viable.md`).

### Weekend-Viable Build Patterns

| Pattern | Example | Build Time | Data Source | Strength | Risk |
|---|---|---|---|---|---|
| **JSON-backed React SPA** | Link-SF + GitHub JSON (HSDS) | 1 day to fork | GitHub raw JSON | No server; quick search/filter | Needs data steward |
| **Messaging bot on existing platform** | Tarjimly on FB Messenger | Hours to days | Match requests | Instant reach; no install | Platform limits; privacy |
| **Static site** | Food Oasis LA (Jekyll) | Hours | CSV/JSON baked in | Easiest hosting | Limited interactivity |
| **Rails API + search UI** | Ohana API + Ohana Web Search | 1–2 days | HSDS-like admin + API | Admin UI included | Higher ops burden |

Source: `E5_prior_art_weekend_viable.md`

**The single most important factor in whether a hackathon project survives is not the technology stack, but the presence of a named community organization that takes ownership of keeping the data accurate after the event** (`E5_prior_art_weekend_viable.md`).

---

## 3. Documented Failure Modes

### Failure Mode 1: Build Without Co-Design → Abandonment

During the 2015 European refugee crisis, 169 "refugee tech" projects launched. The majority went inactive. Metacollect (volunteer-run service mapping) was discontinued after two years due to low use. Clarat (well-funded) concluded that its imagined use case "did not hold up in practice because few people were using it." The common thread: tools built for communities without those communities' involvement (`E4_prior_art_failures.md`).

### Failure Mode 2: Native Apps Create Friction, Not Access

USAHello discontinued its FindHello app. The IRC's Settle In app shows modest adoption (50,000+ Android installs vs. Signpost's 58 million web reach). Native apps impose download, storage, and update friction on populations with limited device capacity. Web + messaging is the resilient pattern (`E1_prior_art_immigrant_service_tools.md`, `E4_prior_art_failures.md`).

### Failure Mode 3: Poor Translation Destroys Credibility

CuidadoDeSalud.gov launched two months late with "Spanglish" translations. "Premium" was translated as "prima" (female cousin). California saw fewer than 5,500 Spanish enrollments despite 4.3 million Spanish-only speakers. Machine translation for legal or benefits content creates harmful misguidance — translators report errors that jeopardize asylum applications (`E4_prior_art_failures.md`).

### Failure Mode 4: Data Repurposing Shatters Trust

ICE has scanned DMV driver's license photos using facial recognition without consent, accessing data on 3 in 4 adults. When civic data is repurposed for enforcement, the chilling effect discourages all engagement. This is directly relevant to any tool that logs which services a resident searches for or connects to (`E4_prior_art_failures.md`).

### Failure Mode 5: Static Directories Rot

Unmaintained directories actively harm users by sending them to closed programs or wrong phone numbers. Without named content stewards, update cadences, and visible "last verified" dates, directories become liabilities within months (`E1_prior_art_immigrant_service_tools.md`).

---

## 4. Design Patterns That Work

### Pattern 1: Omnichannel + Human Two-Way Support

Automated tools alone fail for complex cross-agency navigation. Signpost's 142,000 two-way users show that connecting digital channels to human liaisons with a stated SLA (1 business day) drives real engagement. For Richmond, this means pairing any digital triage with a warm handoff to a human navigator (`E1_prior_art_immigrant_service_tools.md`).

### Pattern 2: Vetted, Filterable Service Maps

Uncurated lists overwhelm users. Documented.info succeeds because users can filter 358 services by specific criteria (service type, location, population, language). For cross-agency navigation specifically, filters must include: intake requirements, documents needed, language capacity, and whether a referral is required (`E1_prior_art_immigrant_service_tools.md`).

### Pattern 3: HSDS Data Standard for Interoperability

The Human Services Data Specification (HSDS / Open Referral) is the proven standard for service directory data. Link-SF was converted to HSDS in a single hack day (2:30 PM to 8:30 PM). Streetlives NYC validated that community needs map directly onto HSDS. Using HSDS ensures data can be shared, reused, and potentially synced with Help1RVA and 211 Virginia (`E5_prior_art_weekend_viable.md`).

### Pattern 4: Client-Controlled Data Portability

The most legally viable path around agency-to-agency data sharing walls is to put the resident in control. If a resident exports their own eligibility data and shares it with the next provider, it bypasses MOU and BAA requirements entirely. A "Core Eligibility Pack" — a standardized, translated intake snapshot the resident carries — could reduce redundant intake across DSS, Virginia Career Works, and housing providers (`A2_problem_landscape_cross_agency_navigation.md`, `G4_risks_data_walls.md`).

---

## 5. Richmond-Specific Integration Opportunities

### What Hackathon Teams Can Build Without Lawyers (48 Hours)

| Deliverable | Data Source | PII Risk | Feasibility |
|---|---|---|---|
| "Choose your path" triage UX routing residents to Help1RVA (self-service) or Unite Us (navigator-assisted) | Public platform links | None | High |
| Deep-link generators for specific Help1RVA search categories (housing + ZIP, food + ZIP) | Help1RVA URL structure | None | High |
| Multilingual plain-language consent explainer preparing residents before clicking through to official platforms | Custom content | None | High |
| Translated "Core Eligibility Pack" checklist (documents needed across DSS, WIOA, RRHA) | Public eligibility rules | None | High |
| Standardized Unite Us intake form templates for cross-agency referrals | Requires Unite Us form access | Low | Medium |

Source: `C5_services_findhelp_uniteus.md`, `A2_problem_landscape_cross_agency_navigation.md`

### What Requires 60–90 Days

- iSpeak signage audit across DSS and workforce offices
- Core Eligibility Pack translated into top OIRE languages
- SSN-optional and Selective Service Information Letter (SIL) scripts for Virginia Career Works intake
- Unite Us referral template standardization across top 10 reentry providers

### What Requires 6–24 Months

- Cross-agency data MOUs (City Legal / DSS / RRHA)
- EHR/CRM integration to Unite Us
- Virginia Workforce Data Trust (§ 2.2-2041) operationalization
- Shared client identifier across VaCMS, HCIS, VaWC

---

## 6. Trusted Intermediaries in Richmond

OIRE maintains an authoritative list of trusted community organizations that serve as intermediaries. These are not just data points — they are potential validation partners and distribution channels for any cross-agency tool (`D2_data_community_org_directories.md`):

| Organization | Role |
|---|---|
| ReEstablish Richmond | Refugee resettlement and integration; employment navigation |
| IRC Richmond | Major refugee resettlement agency |
| Sacred Heart Center | Latino community services and social support |
| YWCA Welcome Center | Immigrant and refugee welcome services |
| OAR (Offender Aid and Restoration) | Reentry services (not on OIRE list but critical for PS2) |
| Homeward | Greater Richmond Continuum of Care lead; HCIS operator |
| Peter Paul Development Center | East End community services |

Communication channels confirmed by OIRE: Facebook groups (primary), WhatsApp (direct messaging), Instagram (younger), in-person networks, and local radio (`D2_data_community_org_directories.md`).

---

## 7. Key Takeaways for Circle Trust Assessment

Circle Trust — an invitation-only coordination network for verified "pollinators" — addresses the provider-coordination layer (Job 2 / Job 3) rather than the resident-facing navigation layer (Job 1). This is a valid and important part of the cross-agency problem, but it is not the full problem statement.

**Questions for judges to consider:**
1. Does Circle Trust's coordination model translate into better resident outcomes, or does it remain an internal tool for change makers?
2. Is the "pollinator" model inclusive of the reentry and immigrant-serving organizations (OAR, Homeward, IRC) that are central to PS2?
3. How does Circle Trust handle consent, PII, and data minimization for the residents whose cases are being coordinated?
4. What is the path from 300 activated pollinators to measurable reduction in resident story-repetition across agencies?
