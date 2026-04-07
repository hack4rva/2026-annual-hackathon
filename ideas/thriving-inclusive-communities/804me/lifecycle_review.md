# Lifecycle Review — 804Me

**Pillar:** Thriving and Inclusive Communities
**Problem Statement:** Help residents safely find and connect to trusted community services without creating accounts or sharing identifying information.
**Demo:** 804Me (Row 33)
**Review Date:** April 1, 2026

---

## Rubric Checklist

| Step | Name | Output File | Status | Notes |
|------|------|-------------|--------|-------|
| 1 | Problem Grounding | `gap_analysis.md` (header) | ✅ Complete | PS verbatim, primary user, pain, desired outcome documented. |
| 2 | JTBD Analysis | `_shared-immigrant-discovery/jtbd_analysis.md` | ✅ Complete | Shared file — 3 jobs with triggering situations, workarounds, and pain. 18 open questions. 12 answered via Parallel AI research. |
| 3 | Question Generation | `_shared-immigrant-discovery/jtbd_analysis.md` (Open Questions) | ✅ Complete | 18 questions across data, user, integration, equity, prior art. 6 confirmed, 6 partial, 6 still unknown. |
| 4 | Prior Art Research | `_shared-immigrant-discovery/prior_art_research.md` | ✅ Complete | IRC Signpost, ShelterTech, Link-SF, Streetlives, Help1RVA, Unite Virginia, 211 Virginia assessed. 5 design patterns, 5 anti-patterns, 3 weekend build tracks, survival factors documented. |
| 5 | Pain Point Research | `_shared-immigrant-discovery/pain_points.md` | ✅ Complete | 12 pain points across 3 JTBDs + 4 cross-cutting. Friction map and intervention leverage points included. |
| 6 | Data Source Mapping | `gap_analysis.md` (Data Source Map) | ✅ Complete | 6 data claims mapped. Resource data provenance flagged as unknown. Provider self-update and language switching demonstrated. Physical hubs flagged as conceptual. |
| 7 | SME Outreach | — | ⚠️ Not started | No outreach drafted to OIRE for trusted-organization list integration, CBO co-branding, or resource data verification. |
| 8 | Gap Analysis | `gap_analysis.md` (Gap Analysis) | ✅ Complete | All 3 JTBDs assessed (Strong / Partial / Partial). Missing items and fixability documented. |
| 9 | Opportunity Mapping | `gap_analysis.md` (Opportunities) | ✅ Complete | 4 opportunities: physical hubs, navigator profiles, provider self-update, HSDS compliance. |
| 10 | Lifecycle Review | `lifecycle_review.md` | ✅ Complete | This file. |

---

## What the Demo Does Well

**1. Zero-account, zero-tracking architecture — the single highest-leverage design decision possible for PS1.**
The JTBD research identifies enforcement fear as the primary barrier to service access — not information scarcity. 17% of adults in immigrant families with children avoided noncash benefits due to green card concerns; 27% of likely undocumented adults avoided applying for food, housing, or healthcare to avoid drawing attention. ICE uses administrative subpoenas to demand IP addresses, session data, and location records from tech platforms. 804Me's explicit "no account, no data" commitment directly neutralizes the rational fear that using a digital tool creates enforcement exposure. This is not a feature — it is the correct architectural response to the core problem.

**2. Physical hubs fill the non-digital gap that no other Richmond tool addresses.**
9.7% of Richmond residents lack any internet subscription. A third of households earning under $30K are smartphone-only without home broadband. Every existing service tool — Help1RVA, 211 website, Unite Virginia — is digital-first. 804Me's physical hubs (24/7, QR-coded, printed resources) are the only concept in this pillar that provides a non-digital entry point. The QR bridge from physical to digital is particularly strong: it doesn't leave the resident with only a piece of paper, it connects them to the full platform via a scan.

**3. Navigator profiles are a genuine design innovation for privacy-preserving personalization.**
No comparable tool in the prior art corpus uses community-representative avatars to filter resources without collecting personal data. The approach solves a real tension: users need personalized results (a recent immigrant's needs differ from a family with children), but personalization typically requires profiling. 804Me's navigator profiles let the user self-select their community context without the system retaining that choice.

**4. Three-language support (EN/ES/AR) with single-click switching.**
Spanish covers 71.57% of Richmond's LEP population. Arabic serves the growing Iraqi and Syrian refugee communities. The demo shows functional language switching, not just a claim. This is better than Help1RVA's machine-translation approach, which has displayed "Error translating language" artifacts and garbles eligibility requirements.

**5. Provider self-update creates a decentralized data maintenance model.**
The demo claims service providers can update their own organization's information. If functional, this addresses the Help1RVA stale-data problem (listings decay when staff turn over and the login is lost) by keeping the maintenance responsibility with the organization that owns the information.

---

## What Was Fundamentally Missed

**1. Resource data provenance is completely undisclosed.**
The demo shows an interactive map with resource pins and an organizations sidebar, but never states where the data comes from, how many resources are listed, or how they were verified. This is not a minor omission — it is the central question. If 804Me has 10 manually curated entries, it's a proof of concept. If it has 100 verified entries, it's competitive with Help1RVA's immigrant-specific coverage. If the data is synthetic or placeholder, the entire demo is a mockup. The value of an anonymous service directory is zero if the services listed are not real, current, and reachable.

**2. No named data steward for post-demo maintenance.**
The prior art is unambiguous on this point: of 169 refugee tech projects launched around 2015, the majority went inactive. Metacollect died after two years. Clarat found that mapping a dynamic sector was an "elusive goal." ShelterTech and Link-SF survived because named organizations took ownership. The pre-demo governance checklist requires answering: "Who maintains this data on Monday morning?" 804Me does not answer this question.

**3. No co-branding or endorsement from trusted community organizations.**
OIRE maintains a list of 15 verified trusted organizations that serve as primary trust bridges for immigrant communities. The prior art shows that tools gain trust by visibly associating with organizations the community already trusts (Welcoming America's "trusted messengers" model). 804Me presents as a standalone platform without any visible community organization endorsement. For a population where trust is the primary barrier, this is a significant gap.

**4. No distribution through channels immigrants actually use.**
OIRE confirmed (March 2026) that Facebook groups are the primary digital channel, WhatsApp is used for direct messaging and group coordination, and in-person networks remain central. A standalone website — even an excellent one — requires discovery. No WhatsApp integration, no Facebook presence, no community navigator workflow is shown. The physical hubs partially address this, but they are conceptual rather than deployed.

**5. Language coverage stops at three when Richmond's refugee population speaks six or more.**
Richmond has welcomed 3,500+ refugees from Afghanistan, Iraq, Syria, and the DRC. Dari, Pashto, Swahili, and Kinyarwanda are significant unmet needs. Only Spanish meets the City's 5% vital-document threshold, but the communities below that threshold are often the least served by any other tool. Three languages is better than English-only, but it's incomplete for the population 804Me claims to serve.

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| Resource data provenance unknown | **Critical** | Disclose: (1) How many resources are in the directory? (2) Where did the data come from — manual curation, Help1RVA extraction, OIRE list, other? (3) Were any listings verified by phone or in-person visit? (4) Is any data synthetic or placeholder? |
| No named data steward | **Critical** | Identify an organization or individual committed to maintaining the directory after demo day. Without this, the tool follows the same trajectory as 169 failed refugee tech projects. |
| No CBO endorsement or co-branding | **High** | Approach at least one OIRE-listed organization (Sacred Heart Center, ReEstablish Richmond, IRC) for visible endorsement. Even a "reviewed by [org]" badge transfers institutional trust. |
| "Zero data collection" claim not technically verified | **High** | Audit: (1) Does the hosting provider log IP addresses? (2) Are there any third-party scripts (analytics, fonts, CDN)? (3) Are server-side logs retained? (4) Could any retained data be subpoenaed? Document the results in a plain-language privacy statement. |
| No integration or differentiation from Help1RVA | **Medium** | Answer: Does 804Me duplicate Help1RVA, complement it, or replace it for immigrant-specific use? City staff need to know where 804Me fits in the existing tool landscape. |

---

## Recommended Next Steps (Priority Order)

1. **Disclose resource data provenance and verify listings.** If the directory is manually curated, document the curation method and count. If sourced from Help1RVA, acknowledge it and explain what 804Me adds. If any listings are unverified, flag them. Aim for 20–30 verified immigrant-specific services as a minimum viable directory — this would immediately be the most complete, immigrant-specific, anonymous directory Richmond has.

2. **Identify a data steward.** Approach ReEstablish Richmond, Sacred Heart Center, or the YWCA Welcome Center. The ask is specific: one person or organization commits to reviewing listings monthly and flagging stale entries. This doesn't require technical work — it requires a relationship.

3. **Conduct a privacy infrastructure audit.** Document the hosting stack end-to-end: where is the site hosted, what does the hosting provider log, are there any third-party requests, what is the log retention policy. Produce a one-page, plain-language, multilingual privacy statement that a resident can read in under 60 seconds. This is the difference between claiming "zero data" and proving it.

4. **Pursue CBO co-branding.** Even one trusted organization visibly endorsing 804Me would change the trust dynamic. The endorsement can be as simple as the organization's logo on the landing page with a statement: "Reviewed by [Organization Name]."

5. **Expand language support to Dari and Pashto.** Richmond's Afghan community (3,500+ refugees in 5 years) is large enough to justify human-reviewed translations for the top 10 resource categories. Machine translation is acceptable for navigation chrome with clear disclaimers — never for eligibility or legal content.
