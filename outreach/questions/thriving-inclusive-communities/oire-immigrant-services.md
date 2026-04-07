# Outreach: OIRE + Immigrant Service Providers — Service Discovery & Trusted Channels — Research & Questions

### What we've confirmed through public sources

- **Help1RVA platform:** Help1RVA runs on the findhelp platform and lists 1,800+ programs in the Richmond area. Findhelp's curation team reviews and adds programs daily with a target to review all listings every six months. Key immigrant-serving providers (IRC, Commonwealth Catholic Charities) are marked as "Claimed Program" with recent review dates (e.g., 02/24/2026). However, there is no free public API — programmatic access is available only to paying findhelp partners.
- **OIRE trusted-organization list:** OIRE maintains a roster of approximately 15 trusted community organizations with names and brief notes (e.g., "Refugee resettlement and integration," "Latino community services, social support"), but this list does not include structured data fields like hours, languages spoken, addresses, or eligibility criteria. It is a lightweight roster, not a directory.
- **OIRE collaboration model:** OIRE's primary coordination mechanism is a monthly partner networking group that convenes nonprofits and government partners serving immigrant and refugee communities. OIRE does not publish a formal "trusted organization list" on its website — collaboration is centered on direct navigation and the monthly network.
- **Trusted communication channels:** OIRE confirmed (March 2026) that Facebook groups are the primary digital channel for Richmond's immigrant communities, WhatsApp is used for direct messaging and group coordination, Instagram reaches younger community members, YouTube for video content, and local radio for residents with limited digital access. ReEstablish Richmond uses WhatsApp for volunteer/tutor coordination and describes it as "incredibly popular" in refugee and immigrant communities. Ultra Radio Richmond's *RVA Latinas Show* serves as a Spanish-language bridge to events and resources, and OIRE participates in such outlets.
- **Demographics and digital divide:** Richmond is approximately 9–10% foreign-born; 12.1% of residents speak a language other than English at home. The City has welcomed 3,500+ refugees in five years from Afghanistan, Iraq, Syria, and the DRC, creating demand for Dari, Pashto, Arabic, Swahili, and Kinyarwanda — but only Spanish meets the City's 5% threshold for vital document translation. Southwood is 84.2% Hispanic. Approximately 9.7% of Richmond residents lack any internet subscription; a third of adults in households earning under $30,000 are smartphone-dependent without home broadband.
- **Trust barriers:** A 2022 VCU/ONA study documented a significant "trust deficit" between immigrant communities and government entities in Virginia. 17% of adults in immigrant families with children and 25% in mixed-status families avoided noncash government benefits due to green card concerns. ICE detained individuals at the Chesterfield County Courthouse in June 2025 and at a Charlottesville courthouse in April 2025, intensifying local fear. DHS rescinded its "Protected Areas" memo in January 2025.
- **FindHello failure analysis:** USAHello discontinued its FindHello immigrant service directory app. The official statement called it "the responsible" decision. USAHello now redirects users to 211, FindHelp.org, local ONAs, and libraries — implying that sustainability requires platform partnerships, not standalone apps. No US city has built a sustained, anonymous, immigrant-specific directory that survived beyond a pilot phase.
- **Language access infrastructure:** The City provides 24/7 telephonic interpretation in 240+ languages through Language Line Solutions and The Language Group, but this infrastructure is available only through direct City contact — not exposed through any digital service discovery tool. The Language Access Policy (AR 5.24, effective July 2023) requires professional translation of vital documents; rva.gov uses Google Translate with a disclaimer that it is not a substitute.
- **Directory fragmentation:** Help1RVA, 211 Virginia, and Unite Virginia all list major immigrant-serving organizations like CCC, but no one has audited the overlap or gaps between them for immigrant-serving programs specifically. Unite Virginia does not offer a public, searchable directory of immigrant-serving partners. The directories are non-interoperable at the data layer.
- **Prior art — Signpost-lite pattern:** The IRC Signpost model (58M reached, 142K two-way users) is not buildable in 48 hours, but a "Signpost-lite" architecture — a vetted directory with WhatsApp/Messenger triage and human handoff — is feasible. Documented.info's Airtable + Mapbox approach with 358 vetted providers is the most replicable pattern.
- **Low-literacy access:** The VCU/ONA study recommends a toll-free multilingual hotline because "some immigrants do not have access to technology and/or a sufficient literacy level to navigate an online repository." Text-based tools are a partial fit without voice, navigator, or hotline bridges.

### What we haven't been able to determine — and where we need your help

We have **five specific questions** that only your organizations can answer:

1. **Help1RVA immigrant-org coverage:** A search for immigrant-relevant services in the 23223 ZIP code surfaces 16 Citizenship & Immigration programs, 14 Translation & Interpretation, and 9 ESL. But how many immigrant-serving organizations in the Richmond area are actually listed and current on Help1RVA vs. known to OIRE's network but missing from the platform? Is there a significant gap?

2. **OIRE structured directory feasibility:** OIRE's trusted-organization roster has names and notes but no structured fields. Has OIRE considered converting this into a structured, exportable directory (with addresses, hours, languages spoken, eligibility criteria)? Would the monthly partner network be a viable channel for collecting and maintaining this data?

3. **CBO co-branding willingness:** The research shows trust is the #1 barrier — residents will use tools endorsed by organizations they already trust (ReEstablish, Sacred Heart, IRC), but not government-branded tools. Would your organizations be willing to co-brand a shared digital service directory? Has a formal co-ownership proposal for a shared directory been discussed before?

4. **Community navigator capacity:** Community navigators are the most trusted service delivery channel, but less than half of immigrant-serving nonprofits have a proper case management system — most track in spreadsheets. How many navigators do your organizations currently employ? What tools do they use for cross-referrals? How much time per week do they spend searching for services vs. serving clients directly?

5. **Digital literacy and device access:** The City's Digital Equity Assessment and Implementation Plan (September 2024 resolution) targets citywide gigabit access, but we lack granular data for immigrant-heavy neighborhoods. Do your organizations assess clients' digital literacy or device access during intake? What is the approximate smartphone-vs-no-smartphone split among your walk-in clients?

### Why this matters

We've been generating new solution ideas grounded in the research. The highest-scoring concepts for immigrant service discovery are:

- **A WhatsApp Service Finder Bot** (Pillar Award 88/105, Mayor's Choice 90/105) — a Signpost-lite pattern using the WhatsApp Business API with interactive buttons in 6 languages, canned responses for 10 intent categories, and human handoff for complex queries. Reaches smartphone-dependent, prepaid-data users in the channel OIRE confirmed immigrant communities already trust. No app download, no account creation, no identifying information collected.
- **A Community Navigator Toolkit** (Pillar 88, Mayor's 90) — a tablet app with a pre-loaded, verified service directory that navigators use on behalf of clients. Generates printable or SMS-able referral cards. Anonymized demand tracking shows what services clients need most. The client never touches technology — the navigator mediates everything.
- **A Multilingual Eligibility Screener** (Pillar 88, Mayor's 90) — an anonymous, interactive decision tree that answers "Am I eligible?" and "Is it safe to apply?" in 6 languages. Explicitly surfaces immigration-safe programs to counter the public-charge chilling effect. No data collected, no accounts, printable output for offline use.

None of these replace Help1RVA or OIRE's existing channels — they build on top of them by meeting residents in the channels and trust networks that already work.

We're not asking for any commitment — just trying to understand the data landscape and navigator capacity so we can give the Mayor's office a realistic assessment of which prototypes could move to a pilot. Happy to share any of the prototypes or our full research.

Thank you,
[Your name]
RVA Hacks Team

---

## Context for the SME
Richmond's immigrant service discovery problem is fundamentally a trust problem, not an information problem. Services exist — Help1RVA lists 1,800+ programs, OIRE maintains a trusted-organization roster, 211 Virginia offers 24/7 multilingual phone interpretation, and Unite Virginia processes closed-loop referrals. But these systems are fragmented, none guarantees anonymity, machine translation is unreliable for eligibility-critical content, and the post-2025 enforcement climate has intensified the chilling effect that keeps residents from initiating contact. The single highest-leverage intervention is a tool that lets residents discover services without creating accounts, without sharing identifying information, and with explicit co-branding from trusted community organizations.

The research also confirms that no US city has built a sustained, anonymous, immigrant-specific directory that survived beyond a pilot. Every surviving model relies on platform partnerships (findhelp, 211, Unite Us) and strong governance. A hackathon team that manually curates 20–30 services from OIRE's list, Help1RVA, and 211 would immediately produce the most complete, verified immigrant-specific directory Richmond has — but it requires human verification calls, not automated ingestion.

## Why These People
OIRE is the City's one-stop liaison for immigrant and refugee communities and leads the Language Access Plan. They confirmed the communication channels (WhatsApp, Facebook, radio) that any tool must use. ReEstablish Richmond, Sacred Heart Center, and IRC Richmond are the three most-cited trusted community organizations in the research corpus — their willingness to co-brand is the single biggest factor in whether a digital tool earns community trust. OIRE's monthly partner network is the existing coordination mechanism any new tool would need to plug into.

## Data Questions (internal tracking)
- [ ] Q1: Help1RVA immigrant-org coverage gap vs. OIRE network
- [ ] Q2: OIRE structured directory feasibility (beyond lightweight roster)
- [ ] Q3: CBO co-branding willingness for shared digital directory
- [ ] Q4: Community navigator capacity (count, tools, time allocation)
- [ ] Q5: Digital literacy / device access data for immigrant-heavy neighborhoods

## Research Sources
- `_shared-immigrant-discovery/jtbd_analysis.md` — Full JTBD analysis, 18 open questions (6 Confirmed, 9 Partial, 3 Still Unknown)
- `_research-answers/id_q1_data.md` — Help1RVA platform, API, demographics, digital divide, directory overlap
- `_research-answers/id_q2_trust.md` — Trust, channels, OIRE, VCU–ONA study, FindHello, co-ownership
- `NEW_IDEAS_RUBRIC_GRADES.md` — Scored solution ideas (PS1: Ideas 1–12)
