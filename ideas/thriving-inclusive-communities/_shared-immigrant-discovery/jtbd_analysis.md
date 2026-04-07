# JTBD Analysis — Immigrant Service Discovery

**Pillar:** Thriving and Inclusive Communities
**Problem Statement (verbatim):** Immigrant Service Discovery — Help residents safely find and connect to trusted community services without creating accounts or sharing identifying information.
**Applies to:** 804Me

---

## Jobs To Be Done

### Job 1 — The Immigrant or Refugee Resident Who Needs Help but Fears Exposure
> "When I (an immigrant or refugee resident in Richmond) need housing, food, legal help, or healthcare but don't know what organizations exist, what they offer, or whether it's safe to contact them, I want to discover trusted services without revealing my identity or immigration status, so I can get help without putting myself or my family at risk of enforcement action."

**Current workaround:** Rely on word-of-mouth from community members at church, cultural associations, or WhatsApp groups. Ask a bilingual neighbor or faith leader to call on their behalf. Try Help1RVA or 211 Virginia but abandon the search when the interface is English-only, requires registration, or asks for identifying information. Visit Sacred Heart Center or ReEstablish Richmond in person during limited office hours and hope someone speaks their language. In many cases, simply go without.

**Pain:** Richmond's immigrant and refugee residents face a trust barrier that outweighs any information barrier. In 2022, 17% of adults in immigrant families with children and 25% in mixed-status families avoided noncash government benefits due to green card concerns (`A1_problem_landscape_immigrant_service_access.md`). ICE detained individuals at the Chesterfield County Courthouse in June 2025 and at a Charlottesville courthouse in April 2025, intensifying local fear that any interaction with official systems could result in enforcement (`A1_problem_landscape_immigrant_service_access.md`). Help1RVA supports 100+ languages via machine translation, but displays "Error translating language" artifacts and relies on automated output that garbles eligibility requirements (`C1_services_help1rva.md`). The platform's findhelp backend collects aggregated usage statistics and warns that SMS communications may include unencrypted Protected Health Information (`C1_services_help1rva.md`). DHS rescinded its "Protected Areas" memo in January 2025, meaning clinics, schools, and places of worship are no longer reliable safe zones from enforcement (`G2_risks_pii_exposure.md`). For a resident who fears that a search query or phone call could be traced back to them, the rational response is to not seek help at all.

### Job 2 — The Community Organization Staff Member Who Has No Cross-Referral Tool
> "When I (a staff member at IRC, ReEstablish Richmond, Sacred Heart Center, or another community organization) receive a walk-in client needing services my organization doesn't provide — legal aid, emergency housing, dental care, ESL classes — and I have no reliable, up-to-date cross-referral tool, I want a shared directory I can trust is current and complete, so I can connect this person to the right service before they leave and lose momentum."

**Current workaround:** Maintain a personal spreadsheet or printed list of partner contacts. Call other organizations one by one to check availability. Search Help1RVA but find that data freshness varies wildly because listings depend on organizations self-managing their own profiles — if staff turn over and the findhelp login is lost, the listing goes stale (`C1_services_help1rva.md`). Check ReEstablish Richmond's health resources page or VirginiaNavigator. Rely on institutional memory that walks out the door when a case worker leaves.

**Pain:** OIRE maintains a list of 15 trusted community organizations (`D2_data_community_org_directories.md`), but this list is not integrated into any live directory tool. Help1RVA hosts 1,800+ programs but has no public API or bulk export — organizations cannot programmatically verify their own listings or cross-check partner data (`D1_data_help1rva.md`). There is no publicly documented evaluation, UX audit, or improvement plan for Help1RVA's Richmond implementation (`C1_services_help1rva.md`). The Unite Us / Unite Virginia network processes closed-loop referrals between contracted providers but does not serve as a public-facing discovery tool (`C1_services_help1rva.md`). CCC's refugee resettlement intake relies on a structured referral form that assumes a referring organization is mediating the process — a walk-in resident without a referrer hits a dead end (`A1_problem_landscape_immigrant_service_access.md`). Front-line staff at community organizations are effectively doing manual data integration across fragmented, unlinked directories every time a client needs a cross-referral.

### Job 3 — The City Staff Member Who Knows the Directories Have Gaps
> "When I (a city staff member at OIRE or DSS) know that existing directories like Help1RVA and 211 Virginia have gaps in immigrant-serving organizations and language coverage — missing community associations, stale contact information, no coverage for Dari, Pashto, or Kinyarwanda — I want a comprehensive, multilingual service inventory I can point residents to with confidence, so I stop sending people to dead ends."

**Current workaround:** Maintain an internal contact list at OIRE and distribute it verbally or via email to trusted partners. Rely on personal relationships with organization directors to verify whether a program is still operating. Point residents to Help1RVA knowing its machine translation is unreliable for complex eligibility language. Route residents to 211 Virginia's phone line (which does offer multilingual telephonic interpretation) as the safest fallback, even though 211 may lack granular local immigrant-serving listings. Manually update the OIRE trusted-organization list when staff learn of changes through community events.

**Pain:** The City of Richmond provides 24/7 telephonic interpretation in 240+ languages through Language Line Solutions and The Language Group (`A5_problem_landscape_language_accessibility.md`), but this infrastructure is available only through direct city contact — it is not exposed through any digital service discovery tool. Richmond has welcomed 3,500+ refugees in five years from Afghanistan, Iraq, Syria, and the DRC, creating demand for Dari, Pashto, Arabic, Swahili, and Kinyarwanda — but only Spanish meets the City's 5% threshold for vital document translation (`A5_problem_landscape_language_accessibility.md`). Help1RVA's findhelp backend allows organizations to self-manage data via "Claim" and "Suggest" workflows, but there is no central data-entry team verifying accuracy across the 1,800+ listings (`C1_services_help1rva.md`). The City's own Language Access Plan acknowledges that its standardized tracking system for identifying primary languages of LEP individuals is still "in development" (`A5_problem_landscape_language_accessibility.md`). A staff member at OIRE cannot confidently direct a Pashto-speaking resident to any digital tool that will render service descriptions accurately in their language and guarantee that no identifying data will be collected.

---

## Open Questions

### Data Questions
1. How many of Help1RVA's 1,800+ listings are actively "Claimed" by organizations, and what percentage have a "Last Reviewed" date within the past 12 months?
2. Does OIRE's trusted-organization list include structured data (addresses, hours, languages spoken, eligibility criteria) or only organization names and notes?
3. Can the OIRE multicultural church Google Maps database be exported as structured data (GeoJSON/CSV) for integration into a service map?
4. What is the actual overlap between Help1RVA, 211 Virginia, and Unite Virginia for immigrant-serving organizations in the Richmond metro area — how many organizations appear in all three vs. only one?

### User Questions
5. Which communication channels do Richmond immigrant residents actually trust for service information — Facebook groups, WhatsApp, in-person word-of-mouth, local radio, or some combination? (OIRE confirmed Facebook, WhatsApp, Instagram, YouTube, in-person, and local radio as channels used — but which drive action vs. awareness?)
6. What percentage of walk-in clients at IRC, ReEstablish Richmond, and Sacred Heart Center need cross-referrals to services their organization does not provide?
7. Do community organization navigators currently use any shared tool for referrals, or does each organization maintain its own contact list?
8. How do Richmond's Afghan, Congolese, and Central American communities differ in their preferred service discovery channels and trust thresholds?

### Integration Questions
9. Could a hackathon tool deep-link into Help1RVA's specific program pages with language parameters to bypass the fragile machine-translated landing page?
10. Does Unite Virginia's "Get Help" page accept URL parameters for language and location that would allow a third-party tool to route residents directly to pre-filtered, pre-translated results?
11. Can the YMCA's Help1RVA intake form be pre-filled via URL parameters to reduce friction for a navigator sending a resident through?

### Equity Questions
12. What is the device and connectivity profile of Richmond's immigrant-heavy neighborhoods (Southwood at 84.2% Hispanic, East End refugee communities) — smartphone-only, prepaid data, public Wi-Fi dependent?
13. How do residents with limited literacy in any language navigate service discovery — can a tool that relies on text-based interfaces reach them at all?
14. Are there immigrant communities in Richmond (e.g., undocumented residents, asylum seekers awaiting adjudication) who categorically cannot use any tool that touches government infrastructure?

### Prior Art Questions
15. What happened to FindHello (USAHello's service directory app) — it was discontinued; what caused the failure and what can Richmond learn from it?
16. Has any US city successfully built a sustained, anonymous immigrant service directory that survived beyond a pilot phase? What distinguished the survivors?
17. How does the IRC Signpost / Documented.info model (58M reached, 142K two-way users) compare in feasibility to what a Richmond team could build in 48 hours?
18. Have any of Richmond's trusted community organizations (ReEstablish, Sacred Heart, IRC) been approached about co-owning a shared digital directory before?

---

## Answered Questions (Parallel AI Research, April 2026)

Research conducted via Parallel AI across the pillar research corpus, supplemented by a focused Parallel AI pass (`id_q1_data.md`, `id_q2_trust.md`). Answers are tagged by confidence level.

### Data Questions

**1. How many of Help1RVA's 1,800+ listings are actively "Claimed" by organizations?**
`[Partial]` — A search for immigrant-relevant services in the Richmond 23223 ZIP code reveals 16 programs under "Citizenship & Immigration," 14 under "Translation & Interpretation," and 9 under "ESL" — key providers like IRC and CCC are marked as "Claimed Program" with recent "Last Reviewed" dates (e.g., 02/24/2026). Platform-wide "Claimed" percentage remains undocumented publicly. Parallel AI adds: findhelp defines "claimed" as reviewed for accuracy by someone at the administering organization; curation adds programs daily with a target to review all programs every six months. REST APIs exist for paying partners, not as a free public API — relevant to integrators and hackathon scope. Sources: `D1_data_help1rva.md`, `id_q1_data.md`

**2. Does OIRE's trusted-organization list include structured data?**
`[Confirmed]` — The OIRE list includes organization names and brief notes (e.g., "Refugee resettlement and integration," "Latino community services, social support") but does not include structured fields like hours, languages, addresses, or eligibility. It is a lightweight roster, not a directory. Parallel AI adds: OIRE does not present a formal public "trusted organization list" on its website; collaboration is centered on a monthly partner networking group and direct navigation — complementary to the internal roster described in corpus docs. Sources: `D2_data_community_org_directories.md`, `id_q2_trust.md`

**3. Can the OIRE multicultural church Google Maps database be exported?**
`[Partial]` — The database is a community-maintained Google My Maps layer. Google My Maps supports KML export, which can be converted to GeoJSON. However, the data quality (completeness of addresses, whether all listed churches are still active) is unknown. Source: `D2_data_community_org_directories.md`

**4. What is the overlap between Help1RVA, 211 Virginia, and Unite Virginia?**
`[Partial]` — No published quantitative overlap count exists. Parallel AI documents qualitative overlap: major providers (e.g., Commonwealth Catholic Charities) appear on Help1RVA and 211 Virginia for refugee/immigration-related services; City of Richmond DSS refugee assistance is another cross-listed anchor. Unite Virginia does not offer a public, searchable directory of immigrant-serving partners comparable to the other two, so "who is on all three" cannot be audited from public sources. Help1RVA and Unite Us remain non-interoperable at the data layer. Sources: `C1_services_help1rva.md`, `id_q1_data.md`

### User Questions

**5. Which communication channels do Richmond immigrant residents trust?**
`[Confirmed]` — OIRE confirmed (2026-03-26) that Facebook groups are the primary digital channel, WhatsApp is used for direct messaging and group coordination, Instagram for younger community members, YouTube for video content, local radio for residents with limited digital access, and in-person networks remain central. Parallel AI adds: WhatsApp is described as "incredibly popular" in refugee/immigrant communities; ReEstablish Richmond uses it for volunteer/tutor coordination. Ultra Radio Richmond (e.g., *RVA Latinas Show*) is an explicit Spanish-language bridge to events and resources; OIRE participates in such outlets. VCU/ONA (2022) statewide study reinforces word-of-mouth, faith networks, navigators, and calls for a toll-free multilingual hotline. Design implication: digital tools should complement, not replace, community navigator and trusted media. Sources: `D2_data_community_org_directories.md`, `id_q2_trust.md`

**6. What percentage of walk-in clients at IRC, ReEstablish Richmond, and Sacred Heart Center need cross-referrals?**
`[Still Unknown]` — No quantitative cross-referral volume data in the reviewed corpus or Parallel AI pass. Requires partner interviews. Source: none

**7. Do community organization navigators use any shared tool for referrals?**
`[Still Unknown]` — No evidence of a common shared referral tool across these organizations in corpus or Parallel AI. VCU/ONA (2022) documents a pervasive **need** for navigators and system-navigation support, not a named shared product. Source: `id_q2_trust.md`

**8. How do Richmond's Afghan, Congolese, and Central American communities differ in channels and trust?**
`[Partial]` — Parallel AI: Central Virginia immigrant origins skew Asia and Latin America (India often highlighted in regional summaries) — useful context, **not** a substitute for community-by-community Richmond research. Corpus + VCU/ONA emphasize word-of-mouth, faith networks, and navigators across groups; granular comparison still unknown. Sources: `id_q1_data.md`, `id_q2_trust.md`

### Integration Questions

**9. Can a tool deep-link into Help1RVA program pages?**
`[Partial]` — Help1RVA runs on findhelp infrastructure. Individual program pages have stable URLs (e.g., `findhelp.org/commonwealth-catholic-charities-%28ccc%29--richmond-va-refugee-resettlement-program/4454021?postal=23227`). Language parameters are not documented in the public-facing interface. Parallel AI confirms findhelp offers REST APIs for integrated UIs and partner maps — paid/partner path, not a free open directory API for community-built anonymous tools. Source: `D1_data_help1rva.md`, `C1_services_help1rva.md`, `id_q1_data.md`

**10. Does Unite Virginia's "Get Help" page accept URL parameters?**
`[Partial]` — The Unite Us "Get Help" portal features an extensive language selector supporting dozens of languages, but whether these can be set via URL parameters is not documented. The Richmond City resources page has a stable URL at `uniteus.com/networks/virginia/get-help/richmond-city-resources`. Source: `E3_prior_art_help1rva_alternatives.md`

**11. Can the YMCA intake form be pre-filled via URL?**
`[Still Unknown]` — The YMCA's intake form lives at `help1rva.org/forms/help1rva-intake`. Whether it accepts URL parameters for pre-fill is not documented. Source: `C1_services_help1rva.md`

### Equity Questions

**12. Device and connectivity profile of immigrant-heavy neighborhoods?**
`[Confirmed]` — Southwood (84.2% Hispanic) is on Richmond's Southside. Approximately 9.7% of Richmond residents lack any internet subscription. Comcast claims 100% broadband access throughout the city, pointing to adoption and affordability (not infrastructure) as the core issue. Lower-income residents are disproportionately smartphone-dependent: a third of adults in households earning under $30,000 own a smartphone but lack home broadband. The Affordable Connectivity Program ended in 2024, removing the primary subsidy. Parallel AI adds: no public neighborhood-level metrics for Southwood/East End; Richmond Fed–style evidence ties smartphone-only use to low-income households and households of color; City Council (Sept. 2024) advanced a Digital Equity Assessment and Implementation Plan toward gigabit access citywide. Source: `B5_users_digital_equity.md`, `id_q1_data.md`

**13. How do residents with limited literacy navigate service discovery — can text-based tools reach them?**
`[Partial]` — NN/g: lower-literacy users read word-by-word, miss navigation menus, struggle with scrolling; 6th-grade reading level improved task success (46% → 82%). Parallel AI / VCU–ONA (2022): many rely on spoken channels and navigators; some lack technology and/or literacy for an online repository — study recommends a toll-free multilingual hotline and short multilingual video/PSA distribution. Text-only products remain a partial fit without voice, navigator, or hotline bridges. Sources: `B5_users_digital_equity.md`, `id_q2_trust.md`

**14. Are there immigrant communities who categorically cannot use tools that touch government infrastructure?**
`[Confirmed]` — Not universal, but evidence is strong for a large risk-averse segment. Corpus: 8% of immigrant adults and 27% of likely undocumented adults avoided assistance in 2023 over immigration-status concerns. Parallel AI / VCU–ONA (2022): "trust deficit" with government; uncertain legal status drives fear of contact; many avoid official or government-linked channels even when aid exists — design should assume **some** residents will self-exclude from government-adjacent digital tools. Sources: `A1_problem_landscape_immigrant_service_access.md`, `id_q2_trust.md`

### Prior Art Questions

**15. What happened to FindHello (USAHello)?**
`[Confirmed]` — USAHello discontinued its FindHello app. Corpus: native apps introduce friction (downloads, storage, updates) and maintenance burden. Parallel AI: USAHello states the sunset "was not an easy decision" but was the "responsible" one; no detailed public post-mortem. USAHello now steers users to 211, FindHelp.org, local ONA offices, and libraries — implying sustainability through larger platforms vs. a standalone app. Sources: `E1_prior_art_immigrant_service_tools.md`, `id_q2_trust.md`

**16. Has any US city built a sustained, anonymous immigrant service directory?**
`[Partial]` — Corpus: ShelterTech's SF Service Guide and Link-SF are strong comparables for **sustained, stewarded community service directories** (HSDS, named data owner). Parallel AI did not find authoritative evaluative literature specifically on **city-run, anonymous, immigrant-only** directories sustained past pilot; many jurisdictions partner with FindHelp, 211, or Unite Us rather than bespoke anonymous stacks. Takeaway: proven patterns are **governance + platform partnership**; **anonymous + immigrant-specific + city-built** remains thinly documented in public sources. Sources: `E5_prior_art_weekend_viable.md`, `id_q1_data.md`

**17. How does IRC Signpost compare in feasibility?**
`[Confirmed]` — Signpost's full stack (Zendesk, WhatsApp, Facebook, multilingual chatbots, human liaisons) is not buildable in 48 hours. But a "Signpost-lite" architecture — a vetted directory with filters integrated with WhatsApp/Messenger triage — is feasible. Documented.info's Airtable + Mapbox approach with 358 vetted providers is the most replicable pattern. Source: `E1_prior_art_immigrant_service_tools.md`

**18. Have Richmond CBOs been approached about co-owning a digital directory?**
`[Partial]` — No public documentation of a formal co-ownership proposal to ReEstablish Richmond, Sacred Heart Center, or IRC Richmond. Parallel AI notes active collaboration channels: city-supported civic tech (e.g., Hack for RVA with nonprofit participation), OIRE's monthly partner network — evidence of **forums**, not of a specific directory co-ownership ask. OIRE list + YMCA Help1RVA remain the closest coordination points in the corpus. Sources: none (formal proposal); `id_q2_trust.md`

### Parallel AI Research Updates (April 2026)

Focused passes `id_q1_data.md` (data, platforms, demographics, digital divide, directory overlap) and `id_q2_trust.md` (trust, channels, OIRE, VCU–ONA, FindHello, co-ownership) refined or extended prior corpus-only answers:

- **Q1, Q9:** Clarified findhelp operating model (six-month review target, daily curation; REST APIs for **paying** partners, not a free public API).
- **Q2:** Added that OIRE’s public face emphasizes a monthly partner network over a published web directory, alongside the internal lightweight roster.
- **Q4:** Upgraded from Still Unknown to **Partial** — qualitative cross-listing of anchor providers (e.g., CCC, DSS refugee assistance) on Help1RVA vs. 211; Unite Virginia not publicly auditable as a comparable directory.
- **Q5:** Enriched with WhatsApp (ReEstablish), ethnic radio (*RVA Latinas* / Ultra Radio), and VCU–ONA recommendations (hotline, video/PSAs).
- **Q8:** New **Partial** lens — regional origin/language context without neighborhood-by-community channel data.
- **Q12:** Digital Equity Council resolution (Sept. 2024) and smartphone-only / affordability framing from Parallel AI.
- **Q13 / Q14:** Split into separate verdicts; Q14 elevated to **Confirmed** with VCU–ONA trust-deficit evidence (subset avoidance of government-linked tools).
- **Q15:** USAHello’s official sunset wording and redirect strategy (211, FindHelp, libraries, ONAs).
- **Q16:** Tightened to **Partial** — SF-style guides remain strong **general** comparables; **anonymous + immigrant-specific + city-run** sustained models are not well documented in public literature; platform partnership trend noted.
- **Q18:** Upgraded from Still Unknown to **Partial** — collaboration **forums** documented; formal co-ownership proposal still not evidenced.

---

### Research Coverage Summary

| Status | Count | Key gaps |
|--------|-------|----------|
| `[Confirmed]` | 6 | — |
| `[Partial]` | 9 | Platform-wide Claimed %, church export QA, URL language/pre-fill params, quantitative overlap counts, Q8 community-specific channels, cross-referral volumes, shared navigator product, formal co-ownership proposal |
| `[Still Unknown]` | 3 | Q6 cross-referral volumes, Q7 shared tool evidence, Q11 YMCA intake URL pre-fill |

**Tally (18 questions):** **6 Confirmed / 9 Partial / 3 Still Unknown.**

### Critical Finding

Richmond's immigrant service discovery problem is fundamentally a trust problem, not an information problem. Services exist — Help1RVA lists 1,800+ programs, OIRE maintains a trusted-organization roster, 211 Virginia offers 24/7 multilingual phone interpretation, and Unite Virginia processes closed-loop referrals. But these systems are fragmented, none guarantees anonymity, machine translation is unreliable for eligibility-critical content, and the post-2025 enforcement climate has intensified the chilling effect that keeps residents from initiating contact. The single highest-leverage intervention is a tool that lets residents discover services without creating accounts, without sharing identifying information, and with explicit co-branding from trusted community organizations.

### Critical Data Gap

No one has audited the overlap or gaps between Help1RVA, 211 Virginia, Unite Virginia, and OIRE's trusted-organization list for immigrant-serving programs specifically. The OIRE list names 15 organizations; Help1RVA surfaces ~40 relevant listings in three categories; Unite Virginia's Richmond page is not publicly auditable. A hackathon team that manually curates 20–30 services from these sources will immediately produce the most complete, verified immigrant-specific directory Richmond has — but it requires human verification calls, not automated ingestion.
