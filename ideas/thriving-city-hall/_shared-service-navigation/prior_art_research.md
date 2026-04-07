# Prior Art Research — Resident Service Navigation

**Pillar:** A Thriving City Hall
**Problem Statement:** Help residents find the right City service or department quickly, so requests get routed correctly the first time.
**Applies to:** Text 311, Hey804, RVA Help
**Research Date:** March 31, 2026
**Method:** Synthesis of existing pillar research corpus (51 reports in `pillar-repos/pillar-thriving-city-hall/research/`) + supplemental web search + Parallel AI deep research

**Primary sources from existing corpus:**
- `E1_prior_art_311_tools.md` — 311 prior art nationally
- `E2_prior_art_gov_service_nav.md` — Government service navigation tools
- `E4_prior_art_failures.md` — (off-topic — patent law, not civic tech)
- `D1_data_311_historical.md` — RVA311 Socrata dataset (2014–2015, legacy)
- `D4_data_rvagov_content.md` — rva.gov structure and scraping reality
- `C1_services_311_landscape.md` — RVA311 platform details (AvePoint/Dynamics 365)
- `C4_services_gaps.md` — Service delivery gaps
- `F2_opportunities_service_nav.md` — Ranked service navigation approaches
- `B1_users_resident_service_seeker.md` — Four resident personas with evidence
- `B5_users_digital_equity.md` — Digital divide data for Richmond
- `G1_risks_wrong_routing.md` — Misrouting risks and guardrails

---

## Query 1: Regional Implementations

### What Has Been Built in Comparable US Cities

**Richmond — RVA 311 (live, AvePoint Citizen Services on Dynamics 365)**
- Richmond's 311 system is built on AvePoint Citizen Services with Microsoft Dynamics 365, integrated with Cityworks via BizTalk
- Accessible 24/7 via phone (311 or 804-646-7000), website (RVA311.com), and mobile apps
- React Native mobile app with offline-first architecture, photo capture, and GIS-integrated duplicate detection
- Handles 83,000+ requests/year for ~230,000 residents
- Currently routes to 6 city departments with plans to expand
- **Key lesson:** Richmond already has a functional 311 platform. The gap is NOT the backend — it's the frontend navigation layer. All three demos (Text 311, Hey804, RVA Help) correctly identify this and build on top of existing 311 infrastructure rather than replacing it.

**New Orleans — AI-Powered Textable 311 Chatbot (live, 2025)**
- New Orleans launched an AI-powered 311 chatbot accessible via text message
- Directly comparable to Text 311's approach — SMS-based, no app required
- **Key lesson:** Text 311's concept has real-world validation. New Orleans proved the model works. The question for Richmond is adoption and integration, not invention.

**Denver — "Sunny" AI Chatbot (live, 2024)**
- Effectively answers questions about crime and housing assistance
- Failed to distinguish between policy questions and service requests (e.g., homelessness-related queries)
- **Key lesson:** AI chatbots work for informational queries but struggle with ambiguous requests that cross policy/service boundaries. Hey804's architecture (Claude for classification only, no direct answers) may avoid this failure mode.

**Louisville — Office of AI + Govstream.ai Pilot (live, 2025–2026)**
- Louisville established a dedicated Office of Artificial Intelligence
- Selected Govstream.ai for an AI permitting pilot focused on residential construction
- Metro311 accessible via phone, app, and online portal; MyLouisville provides address-based service lookups
- **Key lesson:** Louisville treats AI as an institutional commitment, not a one-off project. Richmond could learn from this — a single hackathon demo is a prototype, not a strategy.

**Atlanta — "Ava" Chatbot (live, 2023)**
- Functions as keyword search rather than true AI
- Limited effectiveness — does not understand natural language queries
- **Key lesson:** A chatbot that is just keyword search dressed up as AI will disappoint users. Hey804 and RVA Help both use actual AI models — this is the right approach.

**Decatur, IN — "Decatur Direct" (live, March 2026)**
- Powered by Ordinal Connect, designed specifically for local governments
- 24/7 availability, plain-language search, responses grounded exclusively in official city documents with links to source pages
- **Key lesson:** The "no hallucination" design constraint (ground all answers in verified documents) is becoming standard. Hey804 uses this exact architecture.

**Other Notable Systems (tested by Route Fifty, March 2026)**
- Palo Alto's CityAssist: technical issues at time of testing
- Phoenix's myPHX311: requires app download (defeats accessibility purpose)
- Detroit's Emily: requires app download
- Winter Haven's "Ask Winter Haven": failed to answer basic questions

### What Does NOT Exist Yet
- No city has deployed a combined SMS + web + voice service navigation tool that works across all channels simultaneously
- No city has solved the multilingual navigation problem at scale via AI (most rely on pre-translated content or phone interpreter services)

---

## Query 2: Real Data Sources in Richmond

### Confirmed Real Data Sources

| Dataset | Owner | Access | Cadence | Notes |
|---------|-------|--------|---------|-------|
| RVA 311 Service Requests | City of Richmond | RVA311.com; Dynamics 365 backend | Real-time | AvePoint platform; 83K+ requests/yr |
| RVA 311 Mobile App | City of Richmond | iOS/Android | Real-time | React Native, offline-first |
| Richmond Open Data Portal | City of Richmond | data.richmondgov.com | Variable | Check for 311 datasets specifically |
| RVA.gov Department Directory | City of Richmond | rva.gov | Manual updates | The "knowledge base" Hey804 would need |
| CivicReady Notifications | City of Richmond — Public Utilities | rva.gov alerts | Event-triggered | Already operational for utility alerts |

### Critical Data Gaps
- **311 service taxonomy:** The internal list of service request categories is the foundation for any AI routing tool. Whether this taxonomy is accessible outside the AvePoint system is unknown.
- **311 historical data:** Whether Richmond publishes 311 data on the Open Data Portal (as many cities do) determines whether tools like Text 311 can check for existing requests.
- **Department routing rules:** The mapping of "problem type → correct department" is the core knowledge a navigation tool needs. Whether this exists as structured data or lives only in staff knowledge is the key question.

---

## Query 3: Failure Modes and Equity Gaps

### Documented Findings

**AI Chatbot Failure Pattern: Policy vs. Service Ambiguity**
Denver's Sunny chatbot (tested March 2026) correctly answered informational questions but failed when residents described situations that could be either a policy question or a service request. For example, "I'm homeless" could be a request for shelter resources OR a complaint about encampments. This ambiguity is hard for AI to resolve without follow-up questions — which is why RVA Help's structured intake approach (ask clarifying questions before routing) may be more robust than a single-response chatbot.

**App-Only Tools Exclude the Most Vulnerable**
Multiple city chatbots (Phoenix, Detroit) require app downloads, which immediately excludes residents without smartphones. Text 311's SMS approach directly addresses this — it works on any phone, including basic/flip phones. This is a genuine accessibility advantage.

**The "Works in English Only" Default**
Most city AI chatbots launched in 2024-2026 are English-only or use machine translation as an afterthought. Hey804 claims multilingual support via Google Translate; Text 311 claims "any language." Whether these actually work for non-English speakers in practice is unverified.

**Trust Barriers for Immigrant Communities**
Government-affiliated tools are avoided by undocumented residents regardless of functionality. Text 311's approach (a phone number, no account creation) is lower-trust-barrier than web-based tools that require login or data collection.

---

## Synthesis

### What Richmond Could Adopt or Adapt
1. **New Orleans textable 311 model** — directly validates Text 311's approach; Richmond could study New Orleans' implementation for integration patterns
2. **Ordinal Connect / Decatur Direct pattern** — ground all AI responses in verified city documents (Hey804 already does this)
3. **Louisville's institutional AI approach** — create an Office of AI or technology modernization team rather than relying on hackathon prototypes

### What Has Failed and Why
- Keyword-search chatbots disguised as AI (Atlanta's Ava) — users expect real understanding
- App-only tools (Phoenix, Detroit) — excludes the residents who need help most
- AI chatbots that generate answers instead of routing to verified sources — hallucination risk

### Confirmed Real Data Sources
| Dataset | Owner | Access | Cadence |
|---------|-------|--------|---------|
| RVA 311 (AvePoint/Dynamics 365) | City of Richmond | Phone/web/app | Real-time |
| Richmond Open Data Portal | City of Richmond | data.richmondgov.com | Variable |
| RVA.gov department pages | City of Richmond | rva.gov | Manual |

### User Groups Systematically Excluded
- **Non-English speakers** — machine translation is not equivalent to native-language service
- **Residents without smartphones** — app-only tools exclude them; SMS and phone approaches include them
- **Undocumented residents** — any tool requiring account creation or identity verification will be avoided
- **Elderly residents** — digital-first approaches miss those with limited tech literacy

### Biggest Gap / Genuine Opportunity
Richmond already has a functional 311 backend (AvePoint/Dynamics 365). The gap is the navigation layer: a plain-language, multilingual front door that routes residents to the right service without requiring them to understand government structure. All three demos target this gap. The question is not "should this be built?" but "which approach integrates best with the existing AvePoint platform?"

---

## Parallel AI Research Queries (Submitted — Awaiting Results)

Task IDs:
- Q1 Regional: `trun_1848795af0f24b809baeb174a296b089`
- Q2 Data: `trun_1848795af0f24b809caebe3293963a1e`
- Q3 Equity: `trun_1848795af0f24b80ba39eb81bf0a846d`

Results will be saved to `_parallel-research/svc-nav-q1-regional.md`, `svc-nav-q2-data.md`, `svc-nav-q3-equity.md` when complete.
