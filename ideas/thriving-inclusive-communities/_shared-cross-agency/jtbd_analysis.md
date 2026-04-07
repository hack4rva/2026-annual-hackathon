# JTBD Analysis — Cross-Agency Service Navigation

**Pillar:** Thriving and Inclusive Communities
**Problem Statement (verbatim):** Cross-Agency Service Navigation — Help residents navigate housing, workforce, and reentry services without repeating their story across every agency.
**Applies to:** Circle Trust
**Research Date:** April 1, 2026

**Note on demo alignment:** Circle Trust is an invitation-only digital coordination network for verified "pollinators" (300+ activated). It addresses coordination and governance among change makers, not the direct resident-facing navigation described in PS2. Alignment to the problem statement should be assessed honestly — the tool serves an adjacent need (provider coordination) rather than the stated job (resident navigation).

---

## Jobs To Be Done

### Job 1 — The Resident Navigating Reentry Who Must Retell Their Story at Every Door
> "When I (a Richmond resident navigating reentry after incarceration) need housing, workforce training, and ID restoration but must tell my story from scratch at every agency — DSS, Virginia Career Works, OAR, a housing nonprofit — I want a way to share my situation once and have it carry across providers, so I can focus on rebuilding my life instead of re-explaining my criminal history, my housing crisis, and my eligibility at each stop."

**Current workaround:** Visit DSS for benefits screening (SNAP, Medicaid) and fill out an intake form. Get a paper referral to Virginia Career Works for job training — fill out a new intake with overlapping questions (identity, income, selective service status). Get referred to OAR or Homeward for housing — fill out another intake. At each agency, re-explain criminal history, re-prove income, and re-describe housing situation. Carry a manila folder of printed documents and hope each intake worker reads them. When a referral doesn't connect, start the cycle again. Case notes from one agency are invisible to the next, and no system confirms whether the referral resulted in services delivered (`A2_problem_landscape_cross_agency_navigation.md`, `G4_risks_data_walls.md`).

**Pain:** Richmond's safety net forces the resident to be their own case coordinator. Five legacy systems — VaCMS (benefits), HCIS (homelessness), VaWC (workforce), Unite Us (referrals), Help1RVA (directory) — share zero client identifiers (`G4_risks_data_walls.md`). Each agency requires its own intake process, and the first two to three handoffs are where most attrition occurs (`A2_problem_landscape_cross_agency_navigation.md`). WIOA rules prohibit transmitting SSNs via email or unencrypted channels, blocking even basic deterministic matching across systems (`G4_risks_data_walls.md`). The result: residents cycling through programs without forward progress, and agencies unaware that they're serving the same person the shelter saw last week.

### Job 2 — The Case Manager Who Refers Clients into a Black Box
> "When I (a case manager at a Richmond nonprofit — OAR, Homeward, Peter Paul Development Center) refer a client to another organization for housing, workforce training, or benefits, I have no way to know what the other agency already knows, what services they've already tried, or what the client's current status is. I want a shared intake or handoff mechanism so clients don't fall through the cracks between my referral and the other agency's front door."

**Current workaround:** Find resources by searching Help1RVA (1,800+ programs) or calling 211 Virginia. Send the client with a paper referral or make a warm handoff by phone. Log the referral manually in Bonterra Apricot or Salesforce. Have no way to confirm the client arrived, was accepted, or received services — unless the client reports back or the case manager makes follow-up calls. Spend an estimated 6–10 hours per week on coordination, referral tracking, and directory searching, leaving only 8–14 hours for direct client contact out of a 40-hour week (`B2_users_case_manager.md`, `C5_services_findhelp_uniteus.md`).

**Pain:** Help1RVA and Unite Us do not natively exchange data in Richmond. A service discovered in Help1RVA must be manually re-entered into Unite Us for a tracked referral. Case managers toggle between systems — finding resources in Help1RVA, communicating with clients via WhatsApp, and logging outcomes in Apricot — with no interoperability (`C5_services_findhelp_uniteus.md`, `B2_users_case_manager.md`). Listings are frequently English-only and lack real-time intake requirements, interpreter availability, or capacity status. When a referral results in a missed phone call or a language mismatch, the directory has failed the client (`B2_users_case_manager.md`). Less than half of immigrant-serving nonprofits even have a proper case management system — most track in spreadsheets (`B3_users_community_organization.md`).

### Job 3 — The City Coordinator Who Sees Residents Cycling Without a System View
> "When I (a city social services coordinator or Continuum of Care planner) see the same residents cycling through DSS, homeless services, workforce programs, and reentry nonprofits — appearing at each agency as a new client with no history — I want a cross-agency view that shows the resident's service touchpoints without requiring the resident to re-prove eligibility at each stop, so I can identify systemic gaps and ensure that agency handoffs actually result in delivered services."

**Current workaround:** Review HCIS data for homelessness trends (24-hour batch delay, no SUD or DV data shared). Check VaCMS for benefits status (no API, fixed-width exports). Have no view into workforce outcomes in VaWC or referral completions in Unite Us. Rely on aggregate reports that show volume but not individual journeys. When a resident disappears from services, there is no cross-system alert — the system simply loses them. When the same resident re-enters through a different door (shelter → DSS → workforce), they appear as three separate new clients (`G4_risks_data_walls.md`, `A2_problem_landscape_cross_agency_navigation.md`).

**Pain:** Cross-agency data sharing is blocked by overlapping federal statutes (HIPAA, FERPA, 42 CFR Part 2), Virginia's public assistance confidentiality code (§63.2-102), and funder-specific rules (HUD prohibits DV providers from entering HMIS data). MOUs between agencies take an estimated 128 days on average. The City's DIT requires 7 signatures and 2 security scans for any third-party data access. There is no shared client identifier across systems, and WIOA's no-SSN-in-transit rule prevents deterministic matching (`G4_risks_data_walls.md`). Unite Virginia (Unite Us) exists as a closed-loop referral backbone and has served 85,174 clients statewide, but adoption among Richmond's reentry and immigrant-serving nonprofits is unverified (`C5_services_findhelp_uniteus.md`, `A2_problem_landscape_cross_agency_navigation.md`).

---

## Open Questions

### Data Questions
1. What is the current Unite Us adoption rate among Richmond's reentry-focused nonprofits (OAR, Homeward, Peter Paul)? Are they active senders and receivers of referrals, or nominal participants?
2. How many of Help1RVA's 1,800+ listings include verified intake requirements, language capacity, and "last updated" dates — vs. stale or unclaimed entries?
3. Does HCIS (ServicePoint) expose any mechanism — even a CSV export — that could be used to match clients across the Continuum of Care and workforce systems using hashed identifiers?
4. What is the actual referral completion rate in Unite Virginia for Richmond-area social service referrals? How many referrals are sent but never closed?
5. Is there a de-identified dataset of cross-agency service utilization patterns in Richmond (e.g., how often a resident who enters homeless services also appears in workforce and DSS systems)?

### User Questions
6. What does a reentry resident's first 72 hours look like when they leave Richmond City Jail or a state facility? Which agency do they hit first, and how many intake forms do they complete in the first week?
7. How do Richmond case managers currently handle warm handoffs — phone call, paper referral, email, or Unite Us? What is the modal path?
8. Do residents navigating reentry services have consistent smartphone access, or does device instability (lost/stolen phones, prepaid plan lapses) undermine any digital coordination tool?
9. What are the top 3 referral dead-ends that Richmond case managers encounter — the providers they refer to most often that fail to connect with the client?

### Integration Questions
10. Could a "Core Eligibility Pack" (standardized intake snapshot) be designed that satisfies the minimum requirements of DSS, Virginia Career Works, and RRHA simultaneously — reducing redundant intake to one form?
11. Is there an existing consent-management workflow in Richmond's nonprofit ecosystem, or does every agency maintain its own ROI form with its own language and scope?
12. What would it take to get the top 10 reentry-serving organizations in Richmond onto Unite Us as active network partners — is the barrier technical, contractual, or awareness?
13. Could a client-controlled data portable (resident holds their own eligibility snapshot on their phone) bypass agency-to-agency data sharing restrictions entirely?

### Equity Questions
14. Are reentry residents — disproportionately Black men in Richmond — systematically underserved by the current referral ecosystem compared to other populations? Is there data on referral completion rates by demographic?
15. What language access is available at Virginia Career Works intake for residents with limited English proficiency? Does WIOA's self-attestation flexibility actually get used, or do intake workers default to documentation requirements?
16. How do undocumented residents in mixed-status families navigate cross-agency services in Richmond? Do fear of data sharing and ICE access create a chilling effect that keeps them from engaging at all?

### Prior Art Questions
17. Has any mid-size US city successfully implemented a shared intake or cross-agency client view that survived beyond a pilot phase? What governance structure made it work?
18. What happened to previous "no wrong door" initiatives in Virginia — did the state's Workforce Data Trust (§ 2.2-2041) produce any operational cross-agency data sharing, or is it still policy-on-paper?
19. Are there existing open-source tools for consent-mediated data portability (resident-controlled intake snapshots) that could be adapted for a hackathon prototype?
20. What is the track record of coordination-focused civic tech tools (as opposed to resident-facing directories) — do tools designed for provider-to-provider coordination achieve adoption, or do they suffer the same abandonment patterns as resident-facing apps?

---

## Answered Questions

Parallel AI research passes `ca_q1_systems.md` (systems, reentry 72 hours, handoffs, Unite Us, Workforce Data Trust, Allegheny model, open-source portability) and `ca_q2_equity.md` (equity, LEP, consent, Core Eligibility Pack, immigration chilling effects, digital exclusion). Verdicts apply to what public sources support as of April 2026.

| # | Question | Verdict | Key Finding |
|---|----------|---------|---------------|
| 1 | Unite Us adoption among Richmond reentry nonprofits (OAR, Homeward, Peter Paul)? | `[Partial]` | Unite Virginia is a statewide network; public pages do not publish a Richmond-specific partner roster or penetration metrics — adoption level and sender/receiver activity cannot be substantiated from open sources (`ca_q1_systems.md`). |
| 2 | Help1RVA listings: verified intake requirements, language capacity, last updated vs. stale? | `[Still Unknown]` | Parallel pass did not produce a Richmond scrape or count of claimed/verified fields across the 1,800+ listings. |
| 3 | HCIS (ServicePoint): CSV or export for hashed cross-system matching? | `[Still Unknown]` | Not addressed in Parallel research files; remains a technical discovery item with CoC/DIT. |
| 4 | Unite Virginia referral completion rate for Richmond-area referrals? | `[Still Unknown]` | No Richmond-specific closed-loop completion statistics cited in research passes. |
| 5 | De-identified cross-agency utilization dataset for Richmond? | `[Still Unknown]` | Not identified in public sources reviewed. |
| 6 | Reentry resident’s first 72 hours — first agency, intake count in week one? | `[Partial]` | **Supervised:** probation/parole contact within 72 hours is required. Reentry planning spans incarceration (VADOC); RCJC pillars include housing, job prep, mental health, SUD, education, reentry planning. Intake/form count in the first week **varies by programs accessed** — no single public number; unsupervised release paths less specified in the research excerpt (`ca_q1_systems.md`). |
| 7 | Modal warm-handoff path for case managers? | `[Partial]` | GRCoC homeless pathway: coordinated entry / HMIS electronic referrals. Elsewhere: phone and email prevalent; DSS points to CommonHelp; no public evidence Unite Us is dominant across full reentry spectrum (`ca_q1_systems.md`). |
| 8 | Smartphone access vs. device instability for reentry residents? | `[Partial]` | Richmond-specific device data not found; national framing: "supercharged digital exclusion," heavy smartphone reliance with affordability, loss, and plan instability undermining tools that assume always-on access — design should be mobile-first, low-bandwidth/offline-aware (`ca_q2_equity.md`). |
| 9 | Top 3 referral dead-ends case managers hit? | `[Still Unknown]` | Not surfaced in Parallel research; needs local interviews. |
| 10 | Could a "Core Eligibility Pack" satisfy DSS, VCW, and RRHA minimums at once? | `[Partial]` | A shared document bundle (ID, residence, SSN, income, household, etc.) can align with **many** baseline asks, but RRHA HUD-9886, stricter third-party verification, and agency-specific forms remain; full "tell us once" needs MOUs and policy alignment (`ca_q2_equity.md`). |
| 11 | Existing consent-management workflow vs. each agency’s own ROI? | `[Partial]` | **Hybrid:** GRCoC HMIS uses shared coordinated-entry consent/ROI among homeless partners; DSS, RRHA, and VCW maintain **separate** ROI and program consent tracks — no single cross-ecosystem consent workflow (`ca_q2_equity.md`). |
| 12 | What would it take for top 10 reentry orgs to be active on Unite Us? | `[Partial]` | Local adoption drivers (technical, contractual, awareness) cannot be ranked from public evidence; Unite Virginia does not expose Richmond reentry roster or participation depth (`ca_q1_systems.md`). |
| 13 | Client-controlled eligibility snapshot on phone — bypass agency sharing rules? | `[Partial]` | No Richmond deployment cited; **technically plausible** prototype stack: Solid pods, OpenReferral HSDS/HSDA + consent layer, OAuth2/OIDC + UMA 2.0, Kantara Consent Receipt-style records (`ca_q1_systems.md`). Legal/policy fit still requires counsel. |
| 14 | Reentry residents (disproportionately Black men) underserved vs. others — referral data by demographic? | `[Partial]` | Racial disproportionality in Virginia justice system is documented; **no** public Richmond or state report breaks **referral completion** by race/gender for reentry — cannot confirm systematic referral-ecosystem bias from available data (`ca_q2_equity.md`). |
| 15 | VCW LEP intake access; is WIOA self-attestation used in practice? | `[Confirmed]` | Virginia WIOA Combined State Plan requires LWDB strategies for meaningful LEP access; VEC offers language/auxiliary services. **VWL-24-03** authorizes self-attestation, phone, and virtual verification for Title I eligibility (TEGL 23-19 Change 2 alignment) — policy supports flexible verification; whether every frontline worker defaults to docs vs. attestation is **not** operationally audited here (`ca_q2_equity.md`). |
| 16 | Undocumented / mixed-status families — chilling effect on cross-agency engagement? | `[Partial]` | Richmond PD states it will not enter a 287(g) with ICE; LAJC documents **32** active state/local ICE contracts statewide — perceived enforcement risk and chilling effects on data-sharing fear persist despite agency confidentiality statements (`ca_q2_equity.md`). |
| 17 | Mid-size US city shared intake or cross-agency client view that survived past pilot? | `[Partial]` | **Allegheny County DHS Data Warehouse** and provider-facing **Client View** cited as durable model: county data steward, MOUs (e.g., schools, multi-year legal work), budget sustainment after philanthropy — provider-facing, not necessarily resident portal (`ca_q1_systems.md`). |
| 18 | Virginia Workforce Data Trust (§ 2.2-2041) — operational sharing or policy-on-paper? | `[Confirmed]` | Statute establishes encrypted workforce DB, MOUs, VLDS coordination, evaluation use, destruction requirements; **no public evidence** of operational day-to-day cross-agency **case management** or integrated intake deliverables from the Trust (`ca_q1_systems.md`). |
| 19 | Open-source consent-mediated portability tools for a hackathon prototype? | `[Confirmed]` | Solid/Inrupt-style pods, OpenReferral HSDS + HSDA, Keycloak/UMA-style patterns, Consent Receipt specs/libraries — named as viable building blocks (`ca_q1_systems.md`). |
| 20 | Track record of provider-to-provider coordination civic tech vs. resident apps? | `[Still Unknown]` | Parallel passes did not synthesize adoption/abandonment literature for this comparison. |

**Summary:** 3 Confirmed / 11 Partial / 6 Still Unknown out of 20 questions.
