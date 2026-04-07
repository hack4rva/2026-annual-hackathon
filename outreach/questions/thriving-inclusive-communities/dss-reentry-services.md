# Outreach: DSS + Reentry Service Providers — Cross-Agency Navigation & Shared Intake — Research & Questions

### What we've confirmed through public sources

- **Five-system fragmentation:** Richmond's social safety net runs on five legacy systems that share zero client identifiers: VaCMS/CommonHelp (DSS benefits), HMIS/ServicePoint (homelessness via Greater Richmond Continuum of Care), Virginia Workforce Connection/VaWC (workforce via Virginia Career Works), Unite Us/Unite Virginia (referrals), and Help1RVA/findhelp (directory). A resident who touches DSS, Virginia Career Works, and a housing provider appears as three separate new clients. No shared intake, no shared eligibility verification, no cross-system client identifier.
- **MOU timeline:** Memorandums of Understanding between Richmond agencies take an estimated 128 days on average. The City's Department of Innovation and Technology requires 7 signatures and 2 security scans for any third-party data access. For context, the Allegheny County DHS Data Warehouse's MOU with Pittsburgh Public Schools took over 18 months of legal work.
- **Virginia Workforce Data Trust:** The Workforce Data Trust (Code of Virginia § 2.2-2041) establishes an encrypted workforce database with MOUs for program evaluation, research, and VLDS coordination. However, there is no public evidence it has produced operational cross-agency data sharing for day-to-day case management or integrated intake. It remains a statutory framework, not a functioning shared system.
- **Reentry 72-hour challenge:** Individuals under supervision must report to probation or parole within 72 hours of release. Reentry planning at VADOC spans the length of sentence, with the Richmond City Justice Center organizing support around six pillars: housing, job preparation, mental health, substance use, educational attainment, and reentry planning. The number of intake forms a returning resident completes in the first week varies by programs accessed — no single public source quantifies it.
- **Consent and ROI fragmentation:** Consent management is fragmented across sectors. The Greater Richmond Continuum of Care uses a shared coordinated-entry consent/ROI framework within HMIS for homeless services. Outside that sector, DSS, RRHA, and Virginia Career Works each maintain separate Release of Information forms with different scopes and language. RRHA requires the federal HUD-9886 Authorization for Release of Information plus its own internal consent forms. There is no cross-ecosystem consent workflow.
- **RRHA vs. VCW verification standards:** RRHA prioritizes third-party verification and allows self-certification (often requiring notarization) only when other methods are unavailable. Virginia Career Works operates under VWL-24-03, which explicitly authorizes self-attestation, telephone, and virtual verification for WIOA Title I eligibility — aligning with federal TEGL 23-19 Change 2. These divergent verification standards mean a "tell us once" intake pack cannot satisfy all agencies without MOUs and policy alignment.
- **Case manager burden:** Case managers at Richmond nonprofits spend an estimated 6–10 hours per week on coordination, referral tracking, and directory searching — leaving only 8–14 hours for direct client contact out of a 40-hour week. Help1RVA and Unite Us do not natively exchange data; a service found in Help1RVA must be manually re-entered into Unite Us for a tracked referral.
- **Unite Us adoption uncertainty:** Unite Virginia is a statewide care network, but public pages do not publish a Richmond-specific partner roster or penetration metrics for reentry-serving organizations. Whether OAR, Homeward, or Peter Paul Development Center are active senders and receivers of referrals on the network cannot be verified from open sources.
- **Digital exclusion for reentry residents:** National research documents "supercharged digital exclusion" among returning citizens — heavy smartphone reliance with affordability, device loss, and plan instability undermining tools that assume consistent access. No Richmond-specific data on smartphone access or device stability for the reentry population was found. Design implication: tools must be mobile-first, low-bandwidth, and offline-capable.
- **WIOA SSN restrictions:** WIOA rules prohibit transmitting Social Security Numbers via email or unencrypted channels, blocking even basic deterministic matching across systems for residents who interact with both workforce and benefits programs.
- **Racial disproportionality:** Black residents are significantly overrepresented in Virginia's justice system (Black youth: 20% of population, 71% of commitments). However, no public Richmond or state report publishes referral completion rates by race or gender for reentry services — the equity gap is assumed but unmeasured.
- **Allegheny County model:** Allegheny County, PA operates the most durable US example of a cross-agency shared client view — a DHS Data Warehouse with "Client View" accessible to contracted providers. Governance: county-led data stewardship, formal MOUs with external partners (schools, health), initial philanthropic funding sustained by county budget. This model took years and strong executive sponsorship.
- **Open-source portability tools:** Viable building blocks for a hackathon prototype of consent-mediated data portability include Solid/Inrupt-style personal data pods, OpenReferral HSDS + HSDA for service data standards, Keycloak with UMA 2.0 extensions for consent management, and Kantara Initiative Consent Receipt specifications.

### What we haven't been able to determine — and where we need your help

We have **five specific questions** that only your organizations can answer:

1. **Reentry first-week intake count:** We know the 72-hour probation/parole reporting requirement and the six RCJC reentry pillars. But concretely: how many separate intake forms does a typical Richmond reentry resident complete in their first week across DSS, Virginia Career Works, OAR, and a housing provider? How many of those forms ask overlapping questions (identity, income, household composition, criminal history)?

2. **Unite Us adoption barriers for reentry orgs:** Unite Virginia exists as a statewide referral backbone but we can't determine Richmond-specific adoption. Are OAR, Homeward, and other reentry-serving organizations active on the Unite Us network? If not, what is the primary barrier — technical integration, contractual requirements, cost, awareness, or something else?

3. **ROI/consent form standardization feasibility:** The GRCoC has a shared consent framework for HMIS, but DSS, RRHA, and VCW each maintain separate ROI forms. Has anyone explored standardizing even a partial consent form that could work across two or more of these agencies? What would the legal and practical barriers be?

4. **Core Eligibility Pack interest:** Our research suggests a standardized document bundle (photo ID, proof of residence, SSN card, income proof, household composition) could align with the baseline intake requirements of DSS, VCW, and at least some RRHA needs — though RRHA's HUD-9886 and stricter third-party verification would remain separate. Would DSS and VCW leadership see value in a "Core Eligibility Pack" concept where residents arrive with a pre-filled document they control?

5. **Smartphone access stability:** National research documents high device instability among returning citizens (lost/stolen phones, prepaid plan lapses, affordability barriers). For Richmond's reentry population specifically: do your clients have consistent smartphone access in the first weeks post-release, or does device instability effectively rule out any tool that requires a phone?

### Why this matters

We've been generating new solution ideas grounded in the research. The two highest-scoring concepts across the entire pillar are both for cross-agency navigation:

- **A Reentry 72-Hour Navigator** (Pillar Award 93/105, Mayor's Choice 95/105 — the highest-scoring idea in the pillar) — a mobile-first, offline-capable step-by-step guide for the first 72 hours post-release, specific to Richmond. Covers the exact sequence: probation reporting → DSS for SNAP/Medicaid → Virginia Career Works for job training → housing provider. Includes agency addresses, hours, what documents to bring, and GRTC bus routes. Co-designed with OAR. Targets the highest-attrition window with the most actionable format.
- **A Core Eligibility Pack Builder** (Pillar 93, Mayor's 93) — a guided form that helps a resident (with navigator assistance) assemble a reusable document pack covering the shared baseline requirements of DSS, VCW, and housing programs. Produces a PDF the resident controls and carries to each agency. Legally bypasses the MOU and data-sharing walls because the resident — not an agency — is sharing their own data. Multilingual, phone-accessible, printable.

Neither of these requires integration between agency systems or changes to any existing intake process. They both work by empowering the resident as their own case coordinator — acknowledging that a shared cross-agency data system is years away.

We're not asking for any commitment — just trying to understand the intake landscape and referral dynamics so we can give the Mayor's office a realistic assessment of which prototypes could move to a pilot. Happy to share any of the prototypes or our full research.

Thank you,
[Your name]
RVA Hacks Team

---

## Context for the SME
Richmond's cross-agency navigation problem is structural: five siloed systems, no shared client identifier, overlapping federal privacy statutes (HIPAA, FERPA, 42 CFR Part 2), Virginia's public assistance confidentiality code (§63.2-102), and funder-specific rules (HUD prohibits DV providers from entering HMIS data). The highest-scoring solution ideas avoid requiring inter-agency data sharing entirely — they put the resident in control of their own data portability, bypassing the MOU and BAA walls that have blocked institutional interoperability for decades.

The Allegheny County model proves a shared client view is possible but requires years of executive sponsorship, county-level data stewardship, and sustained funding. Richmond is not there yet. The prototypes that can be piloted now are resident-facing tools that reduce friction at the edges — the 72-hour navigator that tells you what to do first, and the eligibility pack that means you only assemble your documents once.

The reentry population is the sharpest test case: disproportionately Black men, high device instability, the most complex multi-agency navigation pathway, and the highest-stakes attrition window (first 72 hours). If a tool works for this population, it works for everyone.

## Why These People
The Richmond DSS Director oversees CommonHelp/VaCMS intake for benefits (SNAP, TANF, Medicaid) and can speak to eligibility documentation requirements and data-sharing constraints. OAR is the primary reentry-serving nonprofit and would be the co-design partner for the 72-Hour Navigator. Homeward coordinates the Greater Richmond Continuum of Care and manages the HMIS — the one sector in Richmond that has a shared consent framework. Virginia Career Works (Capital Region) administers WIOA intake through VaWC and operates under the self-attestation flexibility (VWL-24-03) that could make a shared eligibility pack feasible for workforce programs.

## Data Questions (internal tracking)
- [ ] Q1: Reentry first-week intake form count and overlap across agencies
- [ ] Q2: Unite Us adoption barriers for Richmond reentry-serving organizations
- [ ] Q3: ROI/consent form standardization feasibility across DSS, RRHA, VCW
- [ ] Q4: Core Eligibility Pack interest from DSS and VCW leadership
- [ ] Q5: Smartphone access stability for Richmond reentry population

## Research Sources
- `_shared-cross-agency/jtbd_analysis.md` — Full JTBD analysis, 20 open questions (3 Confirmed, 11 Partial, 6 Still Unknown)
- `_research-answers/ca_q1_systems.md` — Agency systems, reentry 72 hours, Unite Us, Workforce Data Trust, Allegheny County model, open-source portability
- `_research-answers/ca_q2_equity.md` — Equity, LEP, consent, Core Eligibility Pack, immigration chilling effects, digital exclusion
- `NEW_IDEAS_RUBRIC_GRADES.md` — Scored solution ideas (PS2: Ideas 13–24)
