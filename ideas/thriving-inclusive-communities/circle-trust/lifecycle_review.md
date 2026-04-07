# Lifecycle Review — Circle Trust

**Pillar:** Thriving and Inclusive Communities
**Problem Statement:** Help residents navigate housing, workforce, and reentry services without repeating their story across every agency.
**Demo:** Circle Trust (Row 35, Presenter: Mike, Organization: Pollinators for Change)
**Review Date:** April 1, 2026

---

## Rubric Checklist

| Step | Name | Output File | Status | Notes |
|------|------|-------------|--------|-------|
| 1 | Problem Grounding | `gap_analysis.md` (header) | ✅ Complete | PS verbatim, primary user, pain, desired outcome documented. Alignment note included: demo does not address PS2 as written. |
| 2 | JTBD Analysis | `_shared-cross-agency/jtbd_analysis.md` | ✅ Complete | Shared file — 3 jobs with triggering situations, workarounds, and pain. 20 open questions. Note at top flags Circle Trust's alignment gap. |
| 3 | Question Generation | `_shared-cross-agency/jtbd_analysis.md` (Open Questions) | ✅ Complete | 20 questions across data, user, integration, equity, prior art. None answered via research (no Parallel AI pass run). |
| 4 | Prior Art Research | `_shared-cross-agency/prior_art_research.md` | ✅ Complete | Unite Virginia, Help1RVA, 211 Virginia, IRC Signpost, ShelterTech, Streetlives, Link-SF assessed. 4 design patterns. 5 failure modes. Weekend build patterns and survival factors documented. Section 7 directly assesses Circle Trust. |
| 5 | Pain Point Research | `_shared-cross-agency/pain_points.md` | ✅ Complete | 15 pain points across 3 JTBDs + 3 cross-cutting. Pain point summary table included. |
| 6 | Data Source Mapping | `gap_analysis.md` (Data Source Map) | ✅ Complete | 5 claims mapped. No PS2-relevant data sources present. Absence of service directory, intake, referral, or cross-agency data explicitly documented. |
| 7 | SME Outreach | — | ⚠️ Not started | No outreach drafted. Relevant targets would include OAR, Homeward, Virginia Career Works, and DSS — but Circle Trust's architecture may not require these integrations given its actual scope. |
| 8 | Gap Analysis | `gap_analysis.md` (Gap Analysis) | ✅ Complete | All 3 JTBDs assessed (None / Tangential / Tangential). Honest alignment assessment table included. |
| 9 | Opportunity Mapping | `gap_analysis.md` (Opportunities) | ✅ Complete | 3 opportunities: pollinators as warm-handoff navigators, Circles as cross-agency working groups, trust network as verification layer. |
| 10 | Lifecycle Review | `lifecycle_review.md` | ✅ Complete | This file. |

---

## What the Demo Does Well

**1. The foundational philosophy is sound and evidence-aligned.**
Pollinators for Change's three questions — "What is the source of every social challenge?" → "People don't have what they need." → "How do they access what they need?" → "Coordinated infrastructure." — map directly to the pain point research. The cross-agency pain points confirm that Richmond's safety net forces residents to be their own case coordinators because no coordinated infrastructure exists. The diagnosis is correct. The disagreement is about the prescription: Circle Trust builds coordination among change makers, while PS2 asks for coordination that directly reduces the burden on residents.

**2. 300+ activated pollinators demonstrate real community traction.**
Building a network of 300+ intrinsically motivated community members across the Richmond metro area in ~20 months (August 2024 to March 2026) is a genuine organizational achievement. Most civic tech projects struggle to get 30 users. This network represents social capital that no technology platform can manufacture.

**3. The invitation-only model builds relational accountability.**
The prior art identifies "build without community → abandonment" as the #1 failure mode for civic tech. Circle Trust inverts this by starting with community relationships and layering technology on top. The verification requirement ensures that pollinators are "genuinely in the work" — which addresses the trust asymmetry problem (PC2: residents trust people, not platforms) from the provider side.

**4. The Circles concept is a useful coordination primitive.**
The Jackson Ward Graffiti Removal Circle — community members activating neighbors and city contacts to clean up graffiti without waiting on bureaucratic timelines — demonstrates a real pattern: distributed community action organized around a specific, bounded problem. This is a legitimate civic infrastructure contribution, even if it doesn't map to PS2.

**5. The demo was transparent about time constraints.**
The team explicitly stated they needed more time and asked to continue the conversation. This is honest and better than over-claiming within 3 minutes. However, what was chosen for the 3-minute window — philosophy, organizational background, and a graffiti removal example — did not demonstrate PS2 alignment. The time constraint explanation is fair, but judges can only evaluate what was shown.

---

## What Was Fundamentally Missed

**1. PS2 alignment is weak — the demo addresses a different problem than the one stated.**
PS2 asks: "Help residents navigate housing, workforce, and reentry services without repeating their story across every agency." Circle Trust is an invitation-only coordination network for verified change makers. These are different problems serving different users:

| Dimension | PS2 | Circle Trust |
|---|---|---|
| Who it serves | Residents in crisis (reentry, homeless, immigrant) | Verified community change makers |
| What it does | Reduces story-repetition across agencies | Coordinates action among pollinators |
| How it works | Shared intake, portable eligibility, referral tracking | Circles (action groups), Projects |
| Access model | Anonymous or low-barrier | Invitation-only, identity-verified |

The philosophical connection is real (both seek "coordinated infrastructure"), but the operational distance is large. A judge evaluating PS2 alignment would find that Circle Trust addresses an adjacent need (provider coordination) rather than the stated need (resident navigation).

**2. No resident-facing component was demonstrated.**
PS2's primary user is the resident — specifically a resident navigating reentry who must retell their story at every agency door. The demo showed no resident-facing interface, no intake workflow, no service directory, and no mechanism by which a resident in crisis would interact with Circle Trust. The resident is not a pollinator — they are the person the pollinators are trying to help. But the platform as shown only serves the pollinators.

**3. No integration with Richmond's existing service infrastructure.**
PS2 involves five legacy systems (VaCMS, HCIS, VaWC, Unite Us, Help1RVA) that share zero client identifiers. The pain point research documents that 128-day MOU processes, overlapping federal statutes (HIPAA, FERPA, 42 CFR Part 2), and agency-specific consent forms structurally block cross-agency data sharing. Circle Trust does not reference, integrate with, or address any of these systems. The "49 sectors of impact" framework is not mapped to Richmond's actual service ecosystem.

**4. No data layer, no referral tracking, no outcome measurement.**
The cross-agency navigation problem is fundamentally a data coordination problem — five systems, zero shared identifiers, no referral completion tracking. Circle Trust has no data layer that addresses this. Pollinators may informally coordinate referrals, but no mechanism exists to track whether a resident who was helped by one pollinator successfully connected to the next service. Without outcome tracking, there is no way to measure whether Circle Trust reduces story-repetition or service cycling.

**5. The invitation-only model conflicts with PS2's target population.**
PS2's target population includes residents navigating reentry (disproportionately Black men in Richmond), homeless individuals cycling through shelters, and undocumented immigrants in mixed-status families. These populations are defined by their marginalization from institutions. An invitation-only network for verified change makers — however well-intentioned — creates a barrier that is the inverse of what PS2 requires. The residents who most need cross-agency navigation are the least likely to be "pollinators."

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| PS2 alignment gap | **Critical** | Clarify: Is Circle Trust being positioned as a direct PS2 solution (resident-facing navigation), an indirect PS2 solution (provider coordination that improves resident outcomes), or a submission to a different problem space? The assessment path depends on this answer. |
| No resident-facing component | **Critical** | If Circle Trust claims PS2 relevance, demonstrate: How does a resident in crisis interact with the platform? What is their entry point? What happens after they connect? |
| No connection to Richmond service systems | **High** | Identify: Which PS2-relevant organizations (OAR, Homeward, DSS, Virginia Career Works) are represented in the pollinator network? If none, the coordination layer has no connection to the agencies where residents repeat their stories. |
| 3-minute demo showed philosophy, not product | **High** | The team requested more time and was clear about the constraint. If a longer demonstration is possible, the focus should be on: (1) a PS2-relevant Circle in operation, (2) the pollinator-to-resident handoff workflow, and (3) any data or outcome tracking. |
| "49 sectors of impact" not grounded in Richmond data | **Medium** | Map at least 5 of the 49 sectors to specific Richmond organizations, services, and measurable outcomes. This would ground the framework in local reality rather than presenting it as an abstract governance model. |

---

## Recommended Next Steps (Priority Order)

1. **Resolve the PS2 alignment question.** This is the threshold issue. If Circle Trust's team believes the tool addresses PS2, they need to demonstrate the resident-facing pathway — how a person navigating reentry goes from their first contact with a pollinator to receiving services across multiple agencies without repeating their story. If Circle Trust addresses a different (adjacent, valuable) problem — community coordination and governance — it may be better positioned under a different pillar or problem statement entirely.

2. **Map pollinator network to PS2-relevant organizations.** Document which pollinators are affiliated with OAR, Homeward, IRC, DSS, Virginia Career Works, Peter Paul Development Center, or other cross-agency service providers. If the network includes staff from these organizations, there is a latent PS2 capability that wasn't demonstrated. If it doesn't, the coordination layer is disconnected from the agencies that PS2 requires.

3. **Define and demonstrate the pollinator-to-resident handoff.** If Circle Trust's PS2 contribution is that pollinators serve as human navigators (warm handoffs between agencies), demonstrate the workflow: resident contacts a pollinator → pollinator assesses needs → pollinator connects resident to the right agency contact → outcome is tracked. This would validate the "coordinated infrastructure" philosophy with a concrete resident journey.

4. **Design a PS2-relevant Circle pilot.** Create a "Reentry Navigation Circle" with case managers from OAR, DSS intake, Virginia Career Works, and a housing navigator. Run a 30-day pilot tracking: How many residents did the Circle help navigate? How many agency handoffs occurred? Did residents report less story-repetition? This would be the strongest evidence of PS2 relevance.

5. **Explore complementary role with 804Me.** 804Me (PS1) builds the anonymous, resident-facing service directory. Circle Trust builds the trusted, provider-side coordination network. Together, they could cover both sides of the Thriving and Inclusive Communities pillar: residents discover services anonymously via 804Me; pollinators coordinate service delivery and verify listings via Circle Trust. This complementary framing may be more honest and more compelling than either tool claiming full pillar coverage alone.
