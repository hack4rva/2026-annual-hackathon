# Pain Point Research — Immigrant Service Discovery

**Pillar:** Thriving and Inclusive Communities
**Problem Statement:** Immigrant Service Discovery — Help residents safely find and connect to trusted community services without creating accounts or sharing identifying information.
**Applies to:** 804Me
**Research Date:** April 1, 2026

**Evidence sources from existing corpus:**
- `A1_problem_landscape_immigrant_service_access.md` — Trust barriers, chilling effects, public-charge fears, and access friction mapping
- `A4_problem_landscape_trust_barriers.md` — *Off-topic: covers AI trust deficits in enterprise governance, not immigrant community trust; referenced only where cross-applicable*
- `A5_problem_landscape_language_accessibility.md` — Language access compliance, Richmond's LEP landscape, interpreter infrastructure, and machine translation risks
- `B1_users_immigrant_refugee_resident.md` — *Off-topic: covers B-1 visa classification and federal health surveillance, not Richmond immigrant user personas; not referenced below*
- `B5_users_digital_equity.md` — Device ownership, connectivity barriers, WhatsApp channel dominance, and low-literacy design patterns
- `G1_risks_false_safety.md` — *Off-topic: covers AI governance false safety in enterprise contexts; not referenced below*
- `G2_risks_pii_exposure.md` — PII minimization requirements, ICE subpoena pathways, HIPAA/Part 2 compliance, and "No Account, No Tracking" architecture

---

## Pain Points by JTBD

### Job 1 — The Immigrant or Refugee Resident Who Needs Help but Fears Exposure

**P1.1: Enforcement Fear Suppresses Help-Seeking Across All Systems**
The primary barrier to service access for Richmond's immigrant and refugee residents is not lack of information — it is fear. In 2022, 17% of adults in immigrant families with children avoided noncash government benefits due to green card concerns. In mixed-status families, the rate was 25%. By 2023, 8% of immigrant adults and 27% of those who are likely undocumented avoided applying for food, housing, or health care to avoid drawing attention to their immigration status (`A1_problem_landscape_immigrant_service_access.md`).

This fear is not abstract. The ACLU of Virginia reported ICE detentions at the Chesterfield County Courthouse in June 2025 and at a Charlottesville courthouse in April 2025. National data shows that courthouse enforcement in New York in 2017 led to a 1,200% increase in courthouse arrests, causing immigrants to avoid the justice system entirely. In Denver, 13 women declined to pursue domestic violence cases against their abusers following visible ICE courthouse presence. The fear-to-avoidance pipeline is direct: enforcement visibility → system-wide distrust → non-engagement with any official or semi-official service (`A1_problem_landscape_immigrant_service_access.md`).

**P1.2: Every Digital Tool Collects Something — And Users Know It**
ICE routinely issues administrative subpoenas to tech companies seeking IP addresses, connection records, session times, and physical location data. These subpoenas are signed by ICE officers (not judges) and do not require judicial authorization. In January 2025, DHS rescinded its "Protected Areas" memo, removing even the policy expectation that enforcement would avoid clinics, schools, and places of worship (`G2_risks_pii_exposure.md`).

For a Richmond resident considering using a digital service directory, the threat model is concrete: if the tool uses Google Analytics, ICE can subpoena Google. If the tool stores search queries (e.g., "undocumented worker legal clinic"), those queries can infer immigration status. If the tool logs IP addresses with timestamps, that data can be cross-referenced with other databases to locate the user. The rational response for a user who understands this risk — or who simply assumes it — is to never use the tool (`G2_risks_pii_exposure.md`).

**P1.3: Existing Directories Are Not Anonymous**
Help1RVA's privacy policy (governed by Findhelp/Aunt Bertha) discloses that the platform monitors use and compiles "Aggregated Statistics" which it retains sole ownership of and may make publicly available. The SMS interface warns that text messages may include unencrypted Protected Health Information, with users opting in "at your own risk." Neither Help1RVA nor any other existing Richmond directory guarantees that a user's browsing session produces zero retainable data (`C1_services_help1rva.md`, `G2_risks_pii_exposure.md`).

**P1.4: Public-Charge Fear Persists Despite Policy Reversal**
The Trump-era public charge regulation was reversed in 2021, but the behavioral chilling effect persists. The Urban Institute found that avoidance of benefits continued into 2022 at rates (17% of immigrant families with children) that imply 3–4 million children were in families avoiding safety-net programs. This means that even tools that route users to legitimately safe, no-strings-attached services face an uphill trust battle — the act of seeking help itself feels dangerous (`A1_problem_landscape_immigrant_service_access.md`).

**P1.5: Phone-First Workflows Deter First Contact**
Health Brigade requires a phone call to schedule a registration appointment. CCC's refugee resettlement intake uses a structured referral form designed for organizational referrers, not individual walk-ins. For a resident who fears that a phone call could be traced or that a form could be shared with enforcement, these phone-first, form-heavy workflows are functional barriers. Asynchronous, untraceable channels (encrypted messaging, anonymous web browsing) are missing from the current service ecosystem (`A1_problem_landscape_immigrant_service_access.md`).

---

### Job 2 — The Community Organization Staff Member Who Has No Cross-Referral Tool

**P2.1: No Shared, Verified Directory Exists Across Richmond's Immigrant-Serving Organizations**
OIRE maintains a list of 15 trusted community organizations, but it is a lightweight roster with organization names and brief notes — no structured data fields for hours, languages, addresses, or eligibility criteria. Help1RVA hosts 1,800+ programs but has no public API or bulk export, so organizations cannot programmatically verify their own listings or cross-check partner data. Unite Virginia is a closed-loop referral network for contracted providers, not a public directory. 211 Virginia offers broad coverage but may lack granular immigrant-serving listings. There is no single source of truth that a front-line staff member at Sacred Heart or IRC can open to find a current, verified referral for a walk-in client (`D2_data_community_org_directories.md`, `C1_services_help1rva.md`, `D1_data_help1rva.md`).

**P2.2: Help1RVA Data Freshness Relies on Self-Service — And Staff Turn Over**
Help1RVA's data currency depends entirely on each organization proactively managing its own listing. The process requires searching for a program and clicking "Claim," then maintaining the account. When nonprofit staff turn over and the Findhelp login is lost, listings stagnate with outdated phone numbers, hours, and eligibility requirements. There is no central data-entry team verifying accuracy. A community organization staff member who refers a client based on a Help1RVA listing may unknowingly send them to a disconnected phone number or a program that no longer serves their population (`C1_services_help1rva.md`).

**P2.3: Machine Translation Garbles Eligibility Requirements**
Help1RVA's 100+ language toggle relies on automated machine translation. The platform's own legal footer has displayed "Error translating language" messages. For complex eligibility terminology (income thresholds, immigration status categories, required documentation), machine translation introduces errors that can cause a community navigator to misunderstand what a partner organization actually requires — leading to bad referrals that waste the client's time and erode their trust in the navigator (`C1_services_help1rva.md`, `A5_problem_landscape_language_accessibility.md`).

**P2.4: No Cross-Platform Data Interoperability**
Help1RVA (Findhelp) and Unite Us are confirmed as competing systems that do not share data. A staff member who searches Help1RVA gets one set of results; a staff member logged into Unite Virginia's referral network gets a different set. 211 Virginia operates a third, separate directory. OIRE's trusted-organization list is a fourth. Navigators must check multiple systems or rely on personal knowledge to assemble a complete picture of what's available — every time (`C1_services_help1rva.md`, `E3_prior_art_help1rva_alternatives.md`).

---

### Job 3 — The City Staff Member Who Knows the Directories Have Gaps

**P3.1: Immigrant-Serving Organizations Are Underrepresented in Mainstream Directories**
OIRE's verified list includes organizations like the African Community Network, Darfur Community, Afghan Association of Virginia, Cocosal (Salvadorian Association), and Bolivianos RVA — community-specific associations that serve as primary trust bridges. These organizations are unlikely to self-manage profiles on Help1RVA's Findhelp platform. A search of Help1RVA for immigrant services in the 23223 ZIP code returns 16 programs under "Citizenship & Immigration" — mostly larger agencies (IRC, CCC). The smaller, culturally specific organizations that residents actually trust as first points of contact are invisible in the mainstream directories (`D2_data_community_org_directories.md`, `D1_data_help1rva.md`).

**P3.2: Language Coverage Drops Off Sharply After Spanish**
Richmond has welcomed 3,500+ refugees in five years from Afghanistan, Iraq, Syria, and the DRC, creating demand for Dari, Pashto, Arabic, Swahili, and Kinyarwanda. Only Spanish meets the City's 5% threshold for vital document translation. The City's Language Access Plan acknowledges its standardized tracking system for identifying primary LEP languages is still "in development." Help1RVA's machine translation technically supports these languages but with unverified accuracy on critical content. The City provides 24/7 telephonic interpretation in 240+ languages through vendor contracts, but this infrastructure is only available through direct city contact — it is not exposed through any digital directory tool (`A5_problem_landscape_language_accessibility.md`).

**P3.3: Section 1557 Compliance Creates a Floor That No Current Tool Meets for Health Content**
The May 2024 Section 1557 final rule prohibits health programs from relying on unreviewed machine translation for vital content and from using unqualified adults or minors as interpreters (except in extreme emergencies). If a digital directory routes residents to health services and displays machine-translated eligibility or intake information, it creates compliance risk for the covered entities it links to. No existing Richmond directory tool enforces the human-review requirement for health-critical translations (`A5_problem_landscape_language_accessibility.md`).

**P3.4: No Evaluation Infrastructure for Current Tools**
Extensive searches reveal no publicly documented evaluations, UX audits, or formal improvement plans for Help1RVA's specific implementation in Richmond. The City cannot answer basic questions: What is the user satisfaction rate for LEP residents using Help1RVA? At what point in the flow do non-English speakers abandon? Which service categories have the most stale listings? Without this data, OIRE cannot prioritize improvements or justify resource allocation for a better tool (`C1_services_help1rva.md`).

---

## Cross-Cutting Pain Points

**PC.1: The Trust-Safety-Anonymity Triangle**
A tool that is useful (comprehensive directory) must also be safe (no data collection) and trusted (endorsed by community organizations). Achieving all three simultaneously is the core design challenge. Current tools optimize for one or two: Help1RVA is comprehensive but not anonymous. 211 Virginia is private but not community-endorsed. OIRE's list is trusted but not a tool. No existing platform occupies the intersection (`A1_problem_landscape_immigrant_service_access.md`, `G2_risks_pii_exposure.md`, `D2_data_community_org_directories.md`).

**PC.2: Digital Equity Constrains Every Channel Choice**
Approximately 9.7% of Richmond residents lack any internet subscription. A third of adults in households earning under $30,000 are smartphone-dependent (no home broadband). The Affordable Connectivity Program ended in 2024. Southwood (84.2% Hispanic) is on Richmond's Southside, where the Virginia Digital Opportunity Plan identifies a need for multigenerational digital skills training. Any tool must work on low-end Android devices, consume minimal data, and provide a non-digital fallback path (`B5_users_digital_equity.md`).

**PC.3: Low Literacy Compounds Language Barriers**
Lower-literacy users read word-by-word, miss navigation menus and sidebars, and struggle with scrolling and search functions. NN/g research found that rewriting content to 6th-grade reading level increased success rates from 46% to 82% and speed by 135%. For Richmond's immigrant populations, literacy barriers exist in both English and home languages. A tool translated into Dari is useless if the Dari content uses complex bureaucratic vocabulary that a user with limited formal education cannot parse. WhatsApp voice notes and image-based navigation are the proven workarounds (`B5_users_digital_equity.md`).

**PC.4: The "Monday Morning" Problem**
The single most predictive factor for whether a hackathon-built service tool survives is whether a named organization takes ownership of data maintenance after the event. Of 169 refugee tech projects launched around 2015, the majority went inactive. Metacollect was discontinued after two years. Clarat found that mapping a dynamic sector was an "elusive goal." Without a pre-committed data steward, a Richmond hackathon tool will follow the same trajectory — impressive demo, dead within months (`E5_prior_art_weekend_viable.md`, `E4_prior_art_failures.md`).

---

## Friction Map: Where Residents Drop Off

| Stage | Severity | Evidence | What Breaks |
|---|---|---|---|
| **Trust: "Is it safe to look?"** | Critical | 27% of likely undocumented avoid assistance; ICE courthouse detentions in VA | Fear of data collection, enforcement exposure |
| **Discovery: "What exists?"** | High | Scattered across Help1RVA, 211, OIRE list, org websites; no single entry point | Fragmented directories; culturally specific orgs invisible in mainstream tools |
| **Comprehension: "Am I eligible?"** | High | CCC status limits; Health Brigade FPL/residency/ID requirements | Complex eligibility in English only; machine translation garbles requirements |
| **Language: "Can I read this?"** | High | Only Spanish at 5% threshold; Dari/Pashto/Arabic/Swahili growing fast | Machine translation unreliable; telephonic interpretation not exposed digitally |
| **Contact: "How do I reach them?"** | High | Phone-first intake; referral forms assume organizational mediator | Fear of traceable phone calls; no async/encrypted contact channel |
| **Verification: "Is this info current?"** | Medium | Help1RVA self-service model; no central auditing | Stale listings with disconnected numbers and outdated hours |

---

## Intervention Leverage Points

| Friction Point | Software Can... | Human Navigator Needed To... | Policy Needed To... |
|---|---|---|---|
| Trust/safety fears | Provide zero-collection architecture; explicit "no data stored" messaging; co-brand with CBOs; ban third-party trackers | Vouch for tool; build relationships; safety-plan | Limit enforcement in service-seeking contexts; clarify public-charge scope |
| Discovery | Curate a verified, filterable, multilingual service map from OIRE + Help1RVA + partner data | Identify services that residents actually trust; bridge online to in-person | Fund a maintained, shared directory infrastructure |
| Eligibility confusion | Status-aware screening with clear alternatives; document prep checklists | Tailor complex cases; coach on exceptions; accompany to intake | Simplify eligibility; broaden accepted documentation |
| Language access | Multilingual content in top 6 languages with human-reviewed translations for vital content | Advocate when language access fails; serve as live interpreter bridge | Enforce Title VI/Section 1557; fund interpreter services at digital touchpoints |
| Safe contact | Async encrypted messaging (WhatsApp); proxy workflows via community navigators | Do warm handoffs; follow up in user's language | Fund non-phone contact channels; require accessible intake options |
| Data freshness | "Last verified" timestamps; automated stale-listing alerts; community-contributed corrections | Phone-verify listings; submit corrections | Fund data stewardship positions at community organizations |
