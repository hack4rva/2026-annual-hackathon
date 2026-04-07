# Gap Analysis — Circle Trust

**Pillar:** Thriving and Inclusive Communities
**Problem Statement (verbatim):** "Help residents navigate housing, workforce, and reentry services without repeating their story across every agency."
**Demo:** Circle Trust (Row 35, Presenter: Mike, Organization: Pollinators for Change)
**Primary User per PS2:** Richmond resident navigating reentry after incarceration who must retell their story at DSS, Virginia Career Works, OAR, and housing providers — appearing as a new client at every door because five legacy systems share zero client identifiers.
**Pain per PS2:** Richmond's safety net forces the resident to be their own case coordinator. VaCMS, HCIS, VaWC, Unite Us, and Help1RVA share no client data. Each agency requires its own intake. The first two to three handoffs are where most attrition occurs. Undocumented residents face the additional fear that any data shared with one agency could be accessed by enforcement.
**Desired Outcome per PS2:** A resident shares their situation once and has it carry across providers, so they can focus on rebuilding their life instead of re-explaining their history at every stop.

---

## Alignment Note

**Circle Trust does not address the PS2 problem statement as written.** The demo presents an invitation-only digital coordination network for verified "pollinators" — community change makers who organize into action-oriented "Circles" around local issues. The example shown (Jackson Ward Graffiti Removal Circle) demonstrates neighborhood-level community organizing, not resident-facing service navigation.

The underlying philosophy is coherent: people need coordinated infrastructure to access resources. But the tool as demonstrated addresses **community governance and coordination among activists**, not the **resident experience of navigating fragmented housing, workforce, and reentry services**. The 3-minute time limit constrained what could be shown, and the team explicitly asked for more time. This review assesses what was demonstrated, acknowledges what wasn't, and evaluates alignment honestly.

---

## Data Source Map

| Data Claim in Demo | Real or Synthetic? | Source | Owner | Access | Notes |
|---|---|---|---|---|---|
| 300+ pollinators activated across Richmond City and Metro | **Claimed — plausible** | Pollinators for Change internal records | Pollinators for Change | Private | Organizational achievement, not a data source for resident navigation. Founded August 2024 (~20 months of operations). |
| 49 sectors of impact | **Framework** | Pollinators for Change governance model | Pollinators for Change | N/A | A conceptual taxonomy, not a data-backed mapping of Richmond's service ecosystem. Not demonstrated against real Richmond data. |
| Jackson Ward Graffiti Removal Circle | **Live demo** | Created during demo by Larkin and Ashley | Community members | Platform | Demonstrated a real Circle being created in real-time. Addresses neighborhood action, not cross-agency service navigation. |
| Individual user profiles for pollinators | **Demonstrated** | Circle Trust platform | Pollinators for Change | Invitation-only | Requires account creation. Designed for verified change makers, not anonymous resident navigation. |
| Invitation-only verification | **Claimed** | Vetting process not described | Pollinators for Change | Private | Ensures relational accountability but creates a barrier for any resident-facing use. The PS2 population (reentry, homeless, immigrant) is the least likely to be "invited" into a verified change-maker network. |

### What Is Not Present in the Data Map

No data sources relevant to PS2 were demonstrated or referenced:
- No integration with or reference to Help1RVA, Unite Us, 211 Virginia, VaCMS, HCIS, or VaWC
- No service directory data (housing, workforce, reentry programs)
- No intake forms, referral tracking, or cross-agency handoff mechanisms
- No resident-facing data layer of any kind
- No Richmond-specific service ecosystem mapping (despite "49 sectors" framework)

---

## Gap Analysis by JTBD

### Job 1: Resident Navigating Reentry Who Must Retell Their Story at Every Door
**Coverage: None**

The resident in Job 1 exits incarceration and needs housing, workforce training, and ID restoration. They visit DSS, Virginia Career Works, OAR, and a housing nonprofit — completing overlapping intake forms at each stop. The first two to three handoffs are where most attrition occurs.

Circle Trust does not address any part of this job:
- No shared intake or portable eligibility mechanism
- No way for a resident to "share their situation once"
- No connection to the agencies (DSS, Virginia Career Works, OAR, RRHA) where residents repeat their story
- No mechanism to reduce intake redundancy across providers
- The invitation-only model actively excludes the PS2 population: residents navigating reentry are not verified "pollinators" — they are people trying to get stable

**Gap fixable or fundamental?** Fundamental. Circle Trust's architecture (invitation-only coordination network for change makers) is structurally different from what Job 1 requires (resident-facing navigation across fragmented agencies). Addressing Job 1 would require building an entirely different product.

### Job 2: Case Manager Who Refers Clients into a Black Box
**Coverage: Tangential**

The case manager in Job 2 spends 6–10 hours per week on coordination — searching directories, calling providers, tracking referrals — leaving only 8–14 hours for direct client contact. They refer clients into a black box: no confirmation of arrival, no shared case history, no outcome tracking.

If pollinators include nonprofit case managers and service providers, Circle Trust's coordination layer could theoretically reduce some inter-organizational friction. The "Circles" concept — action-oriented groups around specific issues — could serve as a coordination channel between agencies. But:
- No referral tracking was demonstrated
- No case management workflow was shown
- No integration with Help1RVA (discovery) or Unite Us (referral tracking) was demonstrated
- The demo example (graffiti removal) addresses neighborhood civic action, not cross-agency client handoffs
- The invitation-only model limits participation to vetted individuals, which could exclude the smaller CBOs and community navigators who do most frontline referral work

**Gap fixable or fundamental?** Partially addressable. If "Circles" were reframed as cross-agency coordination groups (e.g., a "Reentry Navigation Circle" with OAR, DSS, and Virginia Career Works staff), the platform could reduce some coordination friction. But this is a hypothetical extension, not what was demonstrated.

### Job 3: City Coordinator Who Sees Residents Cycling Without a System View
**Coverage: Tangential**

The city coordinator in Job 3 sees the same residents appearing as new clients at DSS, homeless services, workforce centers, and reentry nonprofits — with no cross-system view showing that they're the same person. Five legacy systems, zero shared client identifiers.

Circle Trust's "49 sectors of impact" framework and "regenerative governance" philosophy suggest system-level thinking about coordinated infrastructure. But:
- No cross-agency data layer was demonstrated
- No mechanism for tracking resident service journeys across agencies
- No outcome measurement or system-level visibility
- The "sectors of impact" are a governance framework, not a data model connected to Richmond's actual service systems
- The 300+ pollinator network could theoretically provide system-level intelligence (coordinators sharing observations), but this is informal and unstructured

**Gap fixable or fundamental?** Fundamental. System-level cross-agency visibility requires data infrastructure (shared identifiers, consent management, interoperability protocols). Circle Trust's coordination model operates at a different layer — community relationships rather than data systems.

---

## Honest Alignment Assessment

| Dimension | PS2 Requirement | Circle Trust Delivery | Alignment |
|---|---|---|---|
| Primary user | Resident navigating reentry/housing/workforce | Verified community change makers ("pollinators") | **Mismatch** |
| Core interaction | Resident shares story once, carries across agencies | Change makers coordinate action in Circles | **Mismatch** |
| Data layer | Cross-agency intake, referral tracking, shared identifiers | No data layer; no integration with Richmond systems | **Absent** |
| Anonymity/PII | Residents fear data exposure; PII minimization is a safety requirement | Invitation-only platform requires identity verification and profile creation | **Opposite** |
| Demonstrated use case | Housing, workforce, reentry service navigation | Neighborhood graffiti removal coordination | **Different domain** |
| Scale mechanism | Technology reduces story-repetition across agencies at scale | Human network of 300+ pollinators coordinating via platform | **Adjacent** |

**Summary:** Circle Trust addresses a real and valuable problem — community coordination and governance among change makers — but it is not the problem described in PS2. The alignment is weak. This assessment is not a judgment of the project's merit; it is a factual observation that the tool demonstrated does not match the problem statement it was submitted under.

---

## Opportunities

### Opportunity 1: Pollinators as Warm-Handoff Navigators
If the 300+ activated pollinators include staff from OAR, Homeward, IRC, DSS, and Virginia Career Works, the network could serve as a human referral layer — connecting residents to the right person at the right agency through relational trust rather than cold directory lookups. This is the "omnichannel + human two-way support" pattern that the prior art identifies as the most effective approach (IRC Signpost's 142,000 two-way users stem from connecting digital channels to human liaisons). The platform would need to add a resident-facing intake path and a navigator matching workflow.

**Dependencies:** Mapping pollinator network membership to PS2-relevant organizations; building a resident-facing entry point; defining a handoff workflow.

### Opportunity 2: Circles as Cross-Agency Working Groups
The "Circle" concept — a community-led action group around a specific issue — could be repurposed for cross-agency service coordination. A "Reentry Navigation Circle" that includes case managers from OAR, DSS intake workers, Virginia Career Works counselors, and housing navigators could function as an inter-agency coordination layer. This wouldn't solve the data interoperability problem, but it would create a human communication channel that doesn't exist today.

**Dependencies:** Buy-in from reentry-serving organizations; Circle scope expansion beyond neighborhood civic action; privacy protocol for discussing client cases.

### Opportunity 3: Trust Network as a Verification Layer for Other Tools
804Me (PS1) needs verified, trusted resource data. Circle Trust's invitation-only, accountability-based network could serve as a verification layer — pollinators who work at service organizations could validate that listings are current, accurate, and trustworthy. This would be a complementary relationship rather than a competing one: 804Me provides the anonymous, resident-facing directory; Circle Trust provides the trusted, provider-side verification network.

**Dependencies:** Coordination between 804Me and Circle Trust teams; pollinator willingness to serve as data validators; structured verification workflow.
