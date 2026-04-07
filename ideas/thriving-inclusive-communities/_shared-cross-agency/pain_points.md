# Pain Point Research — Cross-Agency Service Navigation

**Pillar:** Thriving and Inclusive Communities
**Problem Statement:** Help residents navigate housing, workforce, and reentry services without repeating their story across every agency.
**Applies to:** Circle Trust
**Research Date:** April 1, 2026

**Evidence sources from existing corpus:**
- `A2_problem_landscape_cross_agency_navigation.md` — Root causes of cross-agency friction and the "repeating your story" problem
- `A4_problem_landscape_trust_barriers.md` — *Off-topic: contains AI trust metrics and enterprise governance, not Richmond-specific resident trust barriers; limited reference below*
- `B2_users_case_manager.md` — Richmond refugee case manager persona, time allocation, and tool landscape
- `B3_users_community_organization.md` — Community intermediary capacity, channel preferences, and tech maturity
- `C4_services_gaps.md` — *Off-topic: contains military C4ISR gap analysis, not Richmond social services gaps; not referenced below*
- `G2_risks_pii_exposure.md` — PII minimization requirements under HIPAA, 42 CFR Part 2, and ICE enforcement
- `G4_risks_data_walls.md` — Federal and state statutes blocking cross-agency data sharing in Virginia

---

## Pain Points by JTBD

### Job 1 — The Resident Navigating Reentry Who Must Retell Their Story at Every Door

**P1.1: Each Agency Requires Its Own Intake — No Referral Carries Context**

When a Richmond resident exits incarceration and seeks stability services, they encounter a series of disconnected intake desks. DSS requires one set of forms for SNAP/Medicaid. Virginia Career Works requires another for WIOA enrollment. Housing programs (RRHA, Homeward shelters) require yet another. Each intake asks overlapping questions — identity, income, household composition, criminal history — but no information transfers between them. The resident is their own case file, carrying paper documents and repeating their story at every stop (`A2_problem_landscape_cross_agency_navigation.md`).

The first two to three handoffs are where most attrition occurs. When a resident is handed a paper list of resources and told to "call this number," they frequently get stuck at the next agency's front door — lacking the right documents, missing an appointment window, or failing to connect because no one at the receiving end expects them (`A2_problem_landscape_cross_agency_navigation.md`).

**P1.2: Five Systems, Zero Shared Client Identifiers**

Richmond's safety net data is fragmented across five legacy systems that do not share a client identifier:

| System | What It Tracks | Key ID | Export Format |
|---|---|---|---|
| VaCMS | Benefits eligibility (SNAP, TANF, Medicaid) | SSN | Fixed-width batch |
| HCIS (ServicePoint) | Homelessness services and CoC data | Internal UID | CSV nightly |
| VaWC | Workforce programs (WIOA) | State ID | JSON (limited REST) |
| Unite Us | Social care referrals | Email | JSON |
| Help1RVA | Resource directory | None | JSON (OpenReferral) |

Source: `G4_risks_data_walls.md`

There is no way for a shelter to see that the person in their bed is also enrolled in WIOA training. There is no way for DSS to see that the resident they just screened was referred by OAR two weeks ago. The resident appears as a new person at every door.

**P1.3: Legal Barriers Make Cross-System Data Sharing Structurally Slow**

The fragmentation above is not just technical — it is legally reinforced. HIPAA's minimum-necessary rule limits what health-adjacent data can be shared. 42 CFR Part 2 imposes strict redisclosure bans on substance use disorder treatment records, with civil penalties enforced by the HHS Office for Civil Rights. Virginia's public assistance confidentiality statute (§63.2-102) creates a "better-safe-than-sorry" culture where DSS data rarely leaves the agency. FERPA requires written parental consent for any child-linked education records shared with community organizations, adding 30–60 days to any data-sharing request involving families (`G4_risks_data_walls.md`).

WIOA rules specifically prohibit transmitting SSNs via email or unencrypted channels, blocking the simplest form of cross-system matching. Even MOUs between agencies take an average of 128 days due to the City DIT's third-party MOA workflow (7 signatures, 2 security scans) (`G4_risks_data_walls.md`).

**P1.4: Fear of Data Exposure Creates a Chilling Effect**

For undocumented residents in mixed-status families, the "repeating your story" problem is compounded by the fear that telling their story at all could trigger enforcement consequences. ICE routinely uses administrative subpoenas to compel tech platforms to hand over IP addresses, connection records, and location data. DHS rescinded its "Protected Areas" memo in January 2025, meaning locations like clinics and schools are no longer reliable safe zones. Any tool that logs which services a resident searches for or connects to creates potential exposure (`G2_risks_pii_exposure.md`).

Even technical metadata is weaponized: combining an IP address, a timestamp, and the specific service page visited (e.g., a reentry legal clinic) can infer immigration status. If this data is subpoenaed and cross-referenced with other databases, it can identify and locate the user. The result: residents who need services most are the least likely to engage with any system that collects identifying information (`G2_risks_pii_exposure.md`).

---

### Job 2 — The Case Manager Who Refers Clients into a Black Box

**P2.1: Administrative Burden Crowds Out Direct Client Care**

Richmond refugee and reentry case managers spend only 20–35% of their 40-hour week (8–14 hours) in direct client contact. An estimated 6–10 hours per week go to coordination and referrals — searching directories, calling providers, scheduling interpreters, and tracking outcomes. Another 10–14 hours go to documentation and compliance reporting. The remaining time is consumed by staff meetings, training, and leave (`B2_users_case_manager.md`).

This means that for a case manager with 40 active cases, each client gets roughly 12–21 minutes of direct face time per week. The rest of the case manager's energy goes to navigating the same fragmented systems their clients are navigating — just from the provider side.

**P2.2: Help1RVA and Unite Us Don't Talk to Each Other**

The two primary platforms in Richmond's social care stack serve complementary but disconnected functions. Help1RVA (FindHelp) is optimized for public discovery — a resident or case manager can search 1,800+ programs by need and location. Unite Us is optimized for closed-loop referrals between professional partners — tracking whether services were actually delivered. But they don't exchange data (`C5_services_findhelp_uniteus.md` via prior_art_research).

In practice, a case manager finds a program on Help1RVA, then manually re-enters the client's information into Unite Us to send a tracked referral. If the same client needs three services (housing, food, workforce), that's three separate searches, three manual entries, and three referral threads to track. Case managers toggle between Help1RVA, WhatsApp (client communication), and Bonterra Apricot or Salesforce (case notes) with no interoperability between any of them (`B2_users_case_manager.md`).

**P2.3: Directories Lack Actionable Provider Details**

Listing a resource is not the same as enabling a referral. Case managers report that directories fail them when they lack real-time intake requirements, actual language capacity (vs. advertised), current capacity or waitlist status, and hours that reflect reality rather than policy. When a referral results in a missed phone call, a language mismatch, or a "we're full" — the case manager has wasted the client's time and their own limited coordination hours. The resident may not try again (`B2_users_case_manager.md`).

**P2.4: Community Organizations Lack Technical Capacity to Adopt New Tools**

Less than half of surveyed immigrant rights nonprofits have a proper case management system — most track in spreadsheets. Under 25% use website analytics. During the COVID-19 crisis, 32% of immigrant-serving organizations cited limited funding as their primary challenge, 19% cited technological challenges reaching clients, and staff mental health strain was significant. Organization size has little effect on perceived technology effectiveness (`B3_users_community_organization.md`).

Any coordination tool introduced into this ecosystem must be usable in under 10 minutes per week, require zero separate training, and provide immediate value. Complex CRM integrations will fail without dedicated onboarding support. The constraint is not willingness — it is capacity (`B3_users_community_organization.md`).

---

### Job 3 — The City Coordinator Who Sees Residents Cycling Without a System View

**P3.1: No Cross-Agency Client View Exists**

A city social services coordinator or Continuum of Care planner has no way to see the full service journey of a resident who touches multiple agencies. HCIS tracks homelessness services (with a 24-hour batch delay), but specific health information, mental health conditions, and substance abuse history are never shared between partner agencies. VaCMS tracks benefits eligibility but has no API and exports only fixed-width batch files. VaWC tracks workforce enrollment with limited REST access and strict PII rules. Unite Us tracks referral outcomes within its network but not across the full system (`G4_risks_data_walls.md`).

When the same resident enters the system through a shelter, then DSS, then a workforce center, they appear as three separate people. No alert fires. No case manager is notified. The system loses them at each handoff and finds them again as a new intake.

**P3.2: HUD Carve-Outs Create Structural Blind Spots**

HUD regulations prohibit domestic violence victim service providers from entering data into HMIS. Legal service providers cannot enter confidential client notes. These carve-outs exist for critical safety reasons, but they remove an estimated 8% of records from the shared data ecosystem. For residents who are both fleeing domestic violence and navigating reentry or housing, these blind spots mean their most acute needs are the least visible to system-level coordinators (`G4_risks_data_walls.md`).

**P3.3: Consent Architecture Is Fragmented Across Agencies**

There is no standardized consent form or consent-management workflow across Richmond's nonprofit and government ecosystem. HCIS requires verbal or written Release of Information (ROI) to share data electronically. WIOA requires specific PII handling protocols. ORR Policy Letter 17-02 prohibits releasing PII without consent except for direct program administration. NASW ethics require informed consent in the client's language with interpreter support (`B2_users_case_manager.md`, `G4_risks_data_walls.md`).

Every agency maintains its own ROI form with its own language, scope, and expiration. A client who consents to data sharing at one agency has not consented at the next. There is no portable, client-controlled consent mechanism that travels with the resident across providers.

**P3.4: Aggregate Data Masks Individual-Level Failure**

System-level metrics (number of referrals sent, number of clients served, bed-nights provided) are available. But these aggregate measures cannot reveal that a specific resident was referred three times and connected zero times. They cannot show that a client who was stable in workforce training fell out of housing and re-entered the shelter system because no one knew the housing support lapsed. The data that would reveal cross-agency failure — individual-level journey tracking — is exactly the data that legal barriers prevent from being assembled (`G4_risks_data_walls.md`).

---

## Cross-Cutting Pain Points

### PC1: The "No Wrong Door" Promise Is Structurally Impossible Today

Virginia and Richmond have adopted "no wrong door" language in policy documents, but the underlying infrastructure makes it undeliverable. A resident who walks into the "wrong" agency — e.g., a workforce center when they need housing first — cannot be seamlessly redirected because the workforce center has no view into housing availability, no way to send a tracked referral to RRHA, and no shared intake form that the housing provider would accept. The resident is told "call this number" and sent back into the loop (`A2_problem_landscape_cross_agency_navigation.md`, `G4_risks_data_walls.md`).

### PC2: Trust Asymmetry — Residents Trust People, Not Platforms

OIRE's confirmed communication channels for immigrant and refugee communities are Facebook groups, WhatsApp, Instagram, in-person networks, and local radio — not institutional web portals. Trust concentrates in local, culturally aligned intermediaries: small CBOs, faith communities, and ethnic social groups. Smaller organizations (1–15 staff) focus on frontline health and social services and are best positioned for "navigation nudges." But these same organizations have the lowest technical capacity and the highest burnout risk (`B3_users_community_organization.md`, `D2_data_community_org_directories.md`).

Any cross-agency navigation tool that requires residents to engage with a new platform — rather than meeting them in channels they already trust — will face the same adoption failures documented in E4 (metacollect, clarat, Bureaucrazy). The design imperative is to amplify existing trust relationships, not to replace them with technology (`B3_users_community_organization.md`, `E4_prior_art_failures.md`).

### PC3: PII Minimization Is Not a Feature — It Is a Safety Requirement

For this population, data minimization is not a privacy preference — it is a physical safety constraint. ICE administrative subpoenas can compel tech platforms to hand over IP addresses, connection records, and location data. Third-party analytics tools (Google Analytics, Meta Pixel) create subpoena-able records that the platform operator cannot control. 42 CFR Part 2 imposes civil penalties for unauthorized redisclosure of substance use disorder records. WIOA case notes are subject to FOIA requests (`G2_risks_pii_exposure.md`, `A2_problem_landscape_cross_agency_navigation.md`).

The technical requirements are clear: no accounts, no tracking, IP anonymization at the network edge, self-hosted analytics only, aggressive log deletion (7–14 day TTL), and zero third-party ad-tech scripts. If the data is not collected, it cannot be compelled (`G2_risks_pii_exposure.md`).

---

## Pain Point Summary Table

| ID | Pain Point | Primary User | Severity | Evidence Source |
|---|---|---|---|---|
| P1.1 | Each agency requires its own intake; no referral carries context | Resident | Critical | A2, G4 |
| P1.2 | Five systems, zero shared client identifiers | Resident / Coordinator | Critical | G4 |
| P1.3 | Legal barriers make cross-system data sharing structurally slow (128-day MOUs) | All | High | G4 |
| P1.4 | Fear of data exposure creates chilling effect for undocumented residents | Resident | Critical | G2 |
| P2.1 | Case managers spend 65–80% of time on admin, not clients | Case Manager | High | B2 |
| P2.2 | Help1RVA and Unite Us don't exchange data | Case Manager | High | C5, B2 |
| P2.3 | Directories lack actionable provider details (intake reqs, language, capacity) | Case Manager | Medium-High | B2 |
| P2.4 | Community organizations lack technical capacity for new tools | CBO Staff | High | B3 |
| P3.1 | No cross-agency client view exists across 5 legacy systems | Coordinator | Critical | G4 |
| P3.2 | HUD carve-outs remove DV/legal records from shared data | Coordinator | Medium | G4 |
| P3.3 | Consent architecture is fragmented — no portable ROI | All | High | B2, G4 |
| P3.4 | Aggregate metrics mask individual-level referral failure | Coordinator | High | G4 |
| PC1 | "No wrong door" is structurally impossible today | Resident | Critical | A2, G4 |
| PC2 | Residents trust people/channels, not platforms | Resident | High | B3, D2 |
| PC3 | PII minimization is a safety requirement, not a preference | Resident | Critical | G2, A2 |
