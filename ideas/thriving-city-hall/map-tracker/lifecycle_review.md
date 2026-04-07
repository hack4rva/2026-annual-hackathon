# Lifecycle Review — RVA MAP Tracker

**Pillar:** A Thriving City Hall
**Problem Statement (assigned):** Resident Service Navigation — Help residents find the right City service or department quickly, so requests get routed correctly the first time.
**Alternate Problem Statement:** Procurement Risk & Opportunity Review — Help City staff identify valid, compliant contracts across City, state, and federal sources without manual PDF hunting.
**Demo:** RVA MAP Tracker — Mayoral Action Plan Progress Dashboard
**Build Method:** Conversational AI (single-file web app)
**Review Date:** March 31, 2026
**Status:** Misaligned — strong concept, addresses government accountability (Blue Sky), not either targeted problem statement

---

## Rubric Checklist

| Step | Item | Status | Notes |
|------|------|--------|-------|
| 1 | Problem Grounding | ✅ Complete | gap_analysis.md — misalignment documented; Blue Sky accountability concept identified |
| 2 | JTBD Analysis (3 jobs) | ⚠️ N/A — misaligned | Addresses a "government accountability" job, not service navigation or procurement compliance |
| 3 | Question Generation | ⚠️ N/A — misaligned | Questions about MAP tracking fall outside both problem statement scopes |
| 4 | Prior Art Research | ✅ Applicable | Performance.gov, city dashboards nationally (What Works Cities), Louisville LouieStat |
| 5 | Pain Point Research | ⚠️ Tangential | Lack of public accountability tracking is real but not the pain either problem statement targets |
| 6 | Data Source Mapping | ✅ Complete | Department heads contributed real baseline data during the hackathon. Real data — manually entered |
| 7 | SME Outreach | ⚠️ Blocked | Right SMEs are the Mayor's Office and department heads who contributed data — not CSR or Procurement |
| 8 | Gap Analysis | ✅ Complete | gap_analysis.md — full misalignment documented |
| 9 | Opportunity Mapping | ✅ Complete | Integration path with AchieveIt identified; standalone value documented |
| 10 | Solution Ideation | ⚠️ N/A — misaligned | Solution ideas for the assigned problem statements are covered in shared research files |

---

## What This Demo Was SUPPOSED to Address

Both Thriving City Hall problem statements target specific operational pain:
1. **Service Navigation:** Residents can't find the right department for their problem. Requests get misrouted. Staff waste time redirecting.
2. **Procurement Review:** Staff can't verify contract validity without opening PDFs and cross-referencing multiple databases manually.

Neither asks for a progress tracking dashboard for the Mayor's Action Plan.

---

## What This Demo ACTUALLY Addresses

MAP Tracker addresses **government accountability and transparency** — giving residents a public-facing view of whether the city is delivering on its MAP commitments, organized by pillar, with real-time data entry by city staff. This maps to the Blue Sky concept of "making City Hall services easier to find and use" through an accountability lens, not an operational routing or compliance lens.

The specific civic need: "There is no unified, public-facing way for residents to see where the city stands on each commitment — or for staff to enter updates and maintain that visibility in real time."

---

## Quality Assessment — Honest Evaluation

### What This Demo DOES Do Well

**1. Real data from real city officials.** Department heads contributed baseline data during the hackathon week. This is not synthetic data or demo data — it is actual city performance metrics entered by the people responsible for them. This is the strongest signal of institutional buy-in in the entire Thriving City Hall pillar.

**2. Smart data typing.** The system distinguishes between binary metrics (done/not done — plan adopted, agreement signed) and directional metrics (trending up or down — graduation rates, carbon emissions). The admin interface adapts to the data type. This is thoughtful data modeling for a 48-hour build.

**3. Timestamp-based audit trail.** Every update is logged with who entered it and when. This makes accountability non-repudiable. A resident can see not just "is this goal met?" but "when was the last time anyone updated this?"

**4. Clear upgrade path.** The team identified AchieveIt (the city's internal reporting tool) as the integration target for automatic data flow. This demonstrates awareness of the real operational landscape — the manual entry model is a bootstrap, not the endgame.

**5. Genuinely compelling pitch.** "This isn't just a website — it's a real-time pulse of our city's heartbeat." The framing positions MAP tracking as civic infrastructure, not just a dashboard. The pitch connects to the Mayor's stated priorities in a way that's politically astute.

**6. Built entirely via conversational AI.** The single-file architecture built through AI-assisted development is a notable technical demonstration of how non-traditional developers can ship civic tools.

---

## What Would Need to Change for Alignment

### Path to Service Navigation alignment:
MAP Tracker tracks whether the city is meeting its goals. Service navigation routes residents to the right department when they have a problem. These are fundamentally different interactions:
- MAP Tracker: "Is the city keeping its promises?" (retrospective accountability)
- Service Navigation: "I have a problem right now — who can help?" (prospective routing)

To align, the team would need to:
- Replace the pillar/metric structure with a service taxonomy (problem type → department → contact)
- Shift from a "read the dashboard" interaction to a "describe your problem" intake flow
- Add 311 integration or routing links to rva.gov service pages
- Remove the admin interface (service navigation doesn't need staff data entry)

This is a complete rebuild. The MAP Tracker architecture cannot be repurposed for service routing.

### Path to Procurement alignment:
MAP Tracker and procurement compliance share nothing beyond being government-internal tools. To align, the team would need to:
- Replace MAP metrics with contract data from the City Contracts dataset (xqn7-jvv2)
- Add vendor/agency/expiration filtering
- Shift the audience from residents/Mayor's Office to procurement staff
- Add compliance verification logic (SAM.gov, VITA, federal screening)

This is also a complete rebuild.

---

## Verdict: Misaligned

**Classification:** Misaligned — same pattern as City Budget Dashboard and RideShift.

MAP Tracker is a well-conceived product that serves a legitimate civic purpose (government accountability tracking). It has real data contributed by real city officials, a smart data model, and a clear upgrade path. But it does not address either Thriving City Hall problem statement.

The misalignment is structural. MAP Tracker answers "Is the city delivering on its promises?" Neither problem statement asks this question. One asks "Can residents find the right service?" and the other asks "Can staff verify contracts without PDF hunting?"

However, MAP Tracker has one advantage the Budget Dashboard does not: **demonstrated institutional buy-in.** Department heads actively contributed data. This makes it a stronger candidate for post-hackathon adoption, even if it misses the problem statement.

---

## Blockers

1. **Problem statement misalignment** — Structural. MAP tracking is government accountability, not service routing or contract compliance. No incremental fix resolves this.

2. **Manual data entry sustainability** — The current model requires city staff to manually enter metric updates via an admin interface. Without AchieveIt integration, data goes stale the moment hackathon energy fades. The tool's value degrades to zero if nobody enters updates after week 1.

3. **No defined post-hackathon owner** — Department heads contributed data, but who maintains the platform? The Mayor's Office is the logical owner, but no commitment is documented.

4. **Single-file architecture limits** — A single-file web app built via conversational AI is fast to prototype but hard to maintain, secure, or extend. Adding authentication, role-based access, or API integration would require a rewrite.

---

## Recommended Next Steps

**Priority 1:** Evaluate independently as a government transparency tool. MAP Tracker is the only demo in the entire hackathon where city department heads actively contributed data. This institutional signal is rare and valuable. The Mayor's Office should assess whether this fills an unmet need for public-facing MAP progress tracking.

**Priority 2:** Pursue AchieveIt integration. If AchieveIt already holds MAP metric data, the highest-leverage next step is automating the data pipeline from AchieveIt → MAP Tracker. This eliminates the manual entry bottleneck that will otherwise kill adoption.

**Priority 3:** If competing for the Thriving City Hall Pillar Award, acknowledge the misalignment directly in the demo pitch. Frame it as: "We addressed the broader Thriving City Hall goal of government transparency, with a specific focus on MAP accountability." This is honest and lets judges score accordingly.

---

## Scoring Guidance (for judges)

**For the Thriving City Hall Pillar Award:** Score Impact low — the product does not address either targeted problem statement. Score Execution moderate — real data from department heads is a strong signal, but the single-file architecture limits durability. Score Innovation moderate — performance dashboards exist nationally (What Works Cities, LouieStat), though Richmond may not have a public MAP tracker. Score User Value high for its actual audience (residents interested in accountability).

**For the Mayor's Choice Award:** Score Impact moderate to high — the most implementable path is AchieveIt integration, which would make this a real tool quickly. Score Feasibility moderate — manual entry model won't survive without automation. The demonstrated buy-in from department heads is the strongest adoption signal in the pillar.

**For the Moonshot Award:** Score Innovation moderate — the vision of "a real-time pulse of our city's heartbeat" is compelling if the data pipeline can be automated and expanded. Score Impact high long-term — if every MAP commitment is transparently tracked and updated, this changes the accountability relationship between government and residents.
