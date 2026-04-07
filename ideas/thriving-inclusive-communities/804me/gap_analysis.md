# Gap Analysis — 804Me

**Pillar:** Thriving and Inclusive Communities
**Problem Statement (verbatim):** "Help residents safely find and connect to trusted community services without creating accounts or sharing identifying information."
**Demo:** 804Me (Row 33)
**Primary User:** Immigrant or refugee resident in Richmond who needs housing, food, legal help, or healthcare but fears that any interaction with a system that collects data could expose them or their family to enforcement action.
**Pain:** Services exist — Help1RVA lists 1,800+ programs, OIRE maintains a 15-organization roster, 211 Virginia offers 24/7 multilingual phone interpretation — but they are fragmented, none guarantees anonymity, machine translation is unreliable for eligibility-critical content, and post-2025 enforcement actions in Virginia have intensified the chilling effect that keeps residents from seeking help at all.
**Desired Outcome:** A resident can discover trusted community services without creating an account, sharing identifying information, or generating data that could be subpoenaed.

---

## Data Source Map

| Data Claim in Demo | Real or Synthetic? | Source | Owner | Access | Notes |
|---|---|---|---|---|---|
| Interactive map with community resource pins (housing, emergency shelter, food assistance) | **Unknown — not disclosed** | Not stated. Could be manually curated, scraped from Help1RVA, or pulled from OIRE roster. | Unknown | Unknown | This is the critical gap. The value of the entire tool depends on the quality, completeness, and freshness of the resource data. The transcript does not disclose where listings come from, how many exist, or how they were verified. |
| Organizations tab — localized organizations by category | **Unknown** | Same as above. The sidebar lists organizations but the source is not documented. | Unknown | Unknown | If this is manually curated, it needs a freshness SLA and a named data steward. If scraped from Help1RVA, the same stale-data risks apply. |
| Hubs tab — physical 804Me hub locations | **Conceptual** | No evidence that physical hubs currently exist. The demo describes them as future infrastructure. | 804Me team | N/A | The physical hub concept is strong but was not demonstrated as deployed. QR codes and printed materials are described but not shown in operation. |
| Provider self-update capability | **Claimed** | Demo states service providers can "update their own organization's information or manage the resources they offer." | 804Me platform | Unknown auth model | Self-update is the strongest data-freshness mechanism shown. Critical open question: what prevents false or malicious entries? What verification exists? |
| EN/ES/AR language content | **Demonstrated** | In-app language toggle shown. | 804Me team | N/A | Language switching was demonstrated. Quality of translation (human-reviewed vs. machine-generated) is not disclosed. |
| Navigator profiles (Latinx, family, elderly, immigrant) | **Custom-built** | Appears to be a design-side feature — personas that filter the resource set. | 804Me team | N/A | Clever privacy-preserving personalization. No evidence that the filtered results reflect verified community-specific resources vs. generic category tagging. |

### Critical Data Gaps

1. **Resource data provenance:** The demo does not disclose where listings come from. If manually curated, how many exist? If sourced from Help1RVA, what about Help1RVA's stale-data risk? If from OIRE's list, that's only 15 organizations. The number, source, and verification status of resource listings is unknown.
2. **No "last verified" dates:** There is no visible indicator of when a listing was last confirmed accurate. Prior art shows that unmaintained directories actively harm users by sending them to closed programs or disconnected numbers.
3. **Data steward:** No named organization or person owns data maintenance after demo day. This is the single most predictive factor for whether the tool survives (ShelterTech, Link-SF survived because named orgs took ownership; 169 refugee tech projects from 2015 mostly died because none did).

---

## Gap Analysis by JTBD

### Job 1: Immigrant or Refugee Resident Who Needs Help but Fears Exposure
**Coverage: Strong — the strongest PS1 alignment of any plausible approach**

What works:
- **Zero accounts, zero data collection** — the demo explicitly and repeatedly commits to "no account required, no personal data collected, zero data tracking." This directly addresses the #1 pain point (P1.1–P1.3): enforcement fear, subpoena risk, and the rational decision to not seek help when any system might log your search.
- **Navigator profiles** — a creative proxy that lets users narrow results by community background without disclosing personal information. This is a genuine design contribution — it solves the personalization-without-PII problem.
- **Physical hubs with QR codes** — addresses the digital divide for residents who are smartphone-dependent, prepaid-data-limited, or unfamiliar with web navigation. 9.7% of Richmond residents lack any internet subscription; a third of households earning under $30K are smartphone-only. Physical hubs meet people where they are.
- **EN/ES/AR language switching** — covers the largest immigrant language communities. Spanish alone accounts for 71.57% of Richmond's LEP population. Arabic serves the growing Iraqi and Syrian refugee communities.

What's missing:
- **Language coverage beyond 3 languages.** Richmond has welcomed 3,500+ refugees in five years from Afghanistan, Iraq, Syria, and the DRC. Dari, Pashto, Swahili, and Kinyarwanda are growing needs. Only Spanish meets the City's 5% translation threshold, but communities below that threshold still need service access.
- **Technical verification of "zero data" claim.** Does the hosting provider log IP addresses? Are there CDN logs? Does the web framework include any third-party analytics scripts (Google Analytics, Meta Pixel)? ICE uses administrative subpoenas to demand this data. The claim is architecturally correct in intent but needs infrastructure-level verification.
- **No co-branding with trusted community organizations.** OIRE's 15 trusted organizations (ReEstablish Richmond, Sacred Heart Center, IRC, etc.) are the primary trust bridges. The prior art is clear: tools gain trust by visibly associating with organizations the community already trusts. 804Me does not show any CBO endorsement.
- **No messaging channel integration.** OIRE confirmed that Facebook groups and WhatsApp are the primary digital channels for Richmond's immigrant communities. A standalone website, even an anonymous one, requires users to discover it. Distribution through WhatsApp or Facebook would meet users in channels they already use.
- **No explicit anti-fraud or anti-scam messaging.** Immigrant communities are disproportionately targeted by service scams. A "zero fees for any service linked here" statement and verified contact methods would build trust.

**Gap fixable or fundamental?** Fixable. The zero-account architecture is sound. The missing elements (CBO co-branding, additional languages, technical privacy audit, messaging distribution) are all achievable additions, not architectural redesigns.

### Job 2: Community Organization Staff Member Who Needs a Cross-Referral Tool
**Coverage: Partial**

What works:
- **Provider self-update.** If service providers can manage their own listings, this directly addresses the stale-data problem that plagues Help1RVA (P2.2). It's a data-freshness mechanism built into the platform.
- **Category-based sidebar navigation.** The Organizations tab organized by category (housing, emergency, shelter, food) provides a browsable referral directory.

What's missing:
- **No cross-referral tracking.** A case manager who finds a resource on 804Me has no way to track whether the client connected. This is what Unite Us provides (closed-loop referral outcomes). 804Me is a discovery tool, not a referral tool — which is appropriate for PS1 but doesn't serve case managers doing warm handoffs.
- **No HSDS data standard compliance.** The Human Services Data Specification is the proven standard for service directory interoperability. Link-SF was converted to HSDS in a single hack session. Without HSDS, 804Me's data cannot be shared with or synced from Help1RVA, 211, or any future Richmond directory infrastructure.
- **No intake requirements, language capacity, or waitlist status on listings.** Case managers need to know what documents a client needs, what languages the provider serves, and whether they're currently accepting clients — not just that the organization exists.

**Gap fixable or fundamental?** Fixable for discovery use; structural for referral tracking (which is Unite Us's domain, not a weekend build).

### Job 3: City Staff Member Who Knows Directories Have Gaps
**Coverage: Partial**

What works:
- **Self-update mechanism** could allow OIRE-verified organizations to maintain their own profiles, addressing the "lightweight roster with no structured data" problem (P3.1).
- **Three-language support** is better than Help1RVA's machine-translation-only approach, assuming the translations are human-reviewed.

What's missing:
- **No integration with OIRE's trusted-organization list.** The 15 OIRE-verified organizations should be the seed data — they represent the City's authoritative endorsement. 804Me does not reference this list.
- **No integration with or awareness of Help1RVA, 211, or Unite Virginia.** The tool appears to operate as a standalone directory without referencing, linking to, or differentiating from the existing infrastructure. A City staff member cannot answer: "Does 804Me cover what Help1RVA doesn't, or does it duplicate it?"
- **No evaluation or analytics infrastructure.** OIRE cannot answer basic questions about user behavior without some form of aggregated, anonymized usage data (what categories are most searched, what languages most used). Achieving this without collecting PII is possible but was not addressed.

**Gap fixable or fundamental?** Fixable. OIRE list integration and Help1RVA differentiation are curation work, not engineering.

---

## Opportunities

### Opportunity 1: Physical Hubs as the Non-Digital Fallback Richmond Lacks
No existing Richmond service tool has a physical component. Help1RVA is web-only. 211 Virginia is phone-only. Unite Virginia is provider-only. 804Me's physical hub concept — 24/7, no staff needed, printed resources + QR bridge — fills the exact gap that every prior art failure illuminates: digital tools alone do not reach the most vulnerable populations. If even three hubs were placed in transit centers and community gathering points (Southwood, East End, Broad Street corridor), they would be Richmond's first non-digital service discovery infrastructure.

**Dependencies:** Physical hub fabrication; site agreements with transit authority or community partners; printed material production in 3+ languages; ongoing restocking.

### Opportunity 2: Navigator Profiles as a Reusable Design Pattern
The navigator profile concept — selecting an avatar that represents your community background to filter results without disclosing personal information — is genuinely novel. No comparable tool in the prior art corpus uses this approach. If the filtered results are backed by verified, community-specific resource curation (e.g., the "immigrant" navigator surfaces OIRE-verified organizations, the "Latinx" navigator surfaces Sacred Heart Center and Cocosal), this becomes a trust-building mechanism, not just a UX convenience.

**Dependencies:** OIRE or CBO partner validation that profile-specific resource sets are accurate and complete.

### Opportunity 3: Provider Self-Update as a Data Stewardship Model
If 804Me's self-update mechanism works as described, it inverts the data maintenance problem. Instead of a central team (which doesn't exist and won't be funded) keeping listings current, each organization maintains its own entry. This is the same model Help1RVA uses ("Claim" workflows), but 804Me could improve on it by: (a) showing "last updated" dates prominently, (b) flagging listings with no update in 90+ days, and (c) emailing organizations when their listing goes stale.

**Dependencies:** Provider onboarding; update-cadence enforcement; verification mechanism to prevent false entries.

### Opportunity 4: HSDS Compliance for Long-Term Interoperability
Adopting the Human Services Data Specification for 804Me's resource data would make the platform interoperable with Help1RVA, 211 Virginia, and any future Richmond directory infrastructure. Link-SF converted its entire dataset to HSDS in a single afternoon. Doing this now — even with a small initial dataset — ensures that 804Me's curation work isn't locked in a proprietary format.

**Dependencies:** Schema mapping of current data fields to HSDS; HSDS-compliant export capability.
