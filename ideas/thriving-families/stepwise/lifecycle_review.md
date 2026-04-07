# Lifecycle Review — Stepwise

**Pillar:** Thriving Families
**Problem Statement:** Give Richmond youth one clear place to explore summer jobs, internships, and first-job guidance.
**Demo:** Stepwise (Row 42 — Nana and Gabriel)
**Review Date:** April 1, 2026

---

## Rubric Checklist

| Step | Name | Output File | Status | Notes |
|------|------|-------------|--------|-------|
| 1 | Problem Grounding | `gap_analysis.md` (header) | ✅ Complete | Problem statement verbatim, primary user, pain, desired outcome all present. Three-flow architecture identified as the structurally strongest youth employment demo in the pillar. |
| 2 | JTBD Analysis | `_shared-youth-employment/jtbd_analysis.md` | ✅ Complete | Shared file — 3 jobs in proper format with triggering situations and outcomes. Covers teen (14–17), employer, and workforce coordinator. |
| 3 | Question Generation | `_shared-youth-employment/jtbd_analysis.md` (Open Questions) | ✅ Complete | Shared file — 20 open questions across data, user, integration, equity, and prior art categories. |
| 4 | Prior Art Research | `_shared-youth-employment/prior_art_research.md` | ✅ Complete | Shared file — NYC SYEP, Detroit GDYT, Boston SuccessLink, federal tools, workforce navigator models, Richmond ecosystem mapping, failure patterns, weekend-viable patterns. |
| 5 | Pain Point Research | `_shared-youth-employment/pain_points.md` | ✅ Complete | Shared file — 12 pain points across 3 JTBDs, severity matrix, cross-cutting equity dimension (digital divide, geographic concentration, minor data privacy, inclusion theater). |
| 6 | Data Source Mapping | `gap_analysis.md` (Data Source Map) | ✅ Complete | 6 data claims mapped. Job listings identified as synthetic/demo seed. VA labor law content real but manually assembled. No VAeECS or GRTC integration. Employer verification is app-internal only. |
| 7 | SME Outreach | — | ⚠️ Not started | Three SME contacts needed: (1) VA DOLI — can VAeECS be linked or pre-populated from an external tool? (2) GRTC — GTFS data access confirmation for transit-aware matching. (3) OCWB/YES — would YES consider Stepwise as a referral channel or front-door complement? |
| 8 | Gap Analysis | `gap_analysis.md` (Gap Analysis) | ✅ Complete | Job 1: Strong. Job 2: Strong. Job 3: Partial. All gaps documented with fixability assessment. |
| 9 | Opportunity Mapping | `gap_analysis.md` (Opportunities) | ✅ Complete | 4 opportunities: VAeECS workflow guidance, GRTC transit matching, program discovery layer, automated scheduling compliance. Dependencies listed for each. |
| 10 | Solution Ideation | — | ⏳ Not yet started | Pending completion of SME outreach and cross-demo comparison within the pillar. |
| 11 | Lifecycle Review | `lifecycle_review.md` | ✅ Complete | This file. |

---

## What Stepwise Gets Right

Stepwise is the most structurally complete youth employment demo in the Thriving Families pillar. Three specific design choices set it apart:

**1. Three-flow architecture is the correct abstraction.** A 14-year-old with a parent supervising their first job search and a 22-year-old applying independently are fundamentally different users with different legal requirements, different trust models, and different support needs. Stepwise is the only demo that treats them as different users rather than the same user with a checkbox. This maps directly to Virginia's regulatory reality: under-16 requires Employment Certificates (VAeECS), parental consent, and task restrictions that don't apply to 16+.

**2. Employer verification gate is a safety-first design.** For a platform serving minors, allowing any employer to post jobs is a liability. The verification gate — demonstrated live with an unverified employer seeing a restricted dashboard — is the right default. No other demo in the pillar implements employer-side access control.

**3. End-to-end lifecycle was demonstrated, not described.** The demo closed the loop: teen applies → parent approves → employer reviews → employer offers → teen is hired → status updates across all three portals. This is not a mockup or a slide — it's a working state machine across three user roles. The hiring pipeline (review → offer → hired) with real-time status propagation is the kind of feature that distinguishes a prototype from a pitch deck.

---

## What Was Fundamentally Missed

**The platform solves the matching problem but not the readiness problem.** Stepwise's readiness checklist (ID, work permit, resume, bank account) correctly identifies the documents a teen needs — but it only tracks whether each item is marked complete. It doesn't help the teen or parent obtain any of them. The work permit process for 14-15-year-olds is the single highest-friction barrier in the youth employment pipeline: it requires a firm job offer before the teen can even begin the VAeECS process, creating a chicken-and-egg problem that Stepwise's architecture is uniquely positioned to solve but doesn't yet address.

**No ecosystem awareness.** Stepwise operates as a standalone job board. It doesn't surface the 7+ existing Richmond youth employment programs (YES/Youth Works RVA, Partnership for the Future, GFAC, BGCMR, CIS, RPS Work-Based Learning, CRWP/WIOA services) that a teen might qualify for. The problem statement asks for "one clear place to explore summer jobs, internships, and first-job guidance" — emphasis on *one clear place*. A platform that only shows its own employer-posted listings, without awareness of publicly-funded program slots, is a new silo rather than a consolidator.

**Compliance is informational, not functional.** The Youth Hiring Guide tells employers about Virginia labor law, but the platform doesn't enforce it. An employer can schedule a 15-year-old past 7 PM on a school night, post a prohibited task, or exceed weekly hour caps without any system-level constraint. The compliance knowledge exists in the platform as content; it should exist as guardrails.

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| No VAeECS integration or guidance for work permit process | **High** | Contact VA DOLI to determine: (1) Can the VAeECS portal be deep-linked or pre-populated from an external tool? (2) If not, can Stepwise provide step-by-step guidance with direct links for each party (youth, employer, parent)? (3) What is the actual cycle time from job offer to signed Employment Certificate in Richmond? |
| Employer verification criteria undefined | **High** | Define what "verified" means: self-attestation, admin manual review, business license check, or integration with SCC/SAM.gov. For a platform serving minors, the verification standard must be defensible. Document the process and publish criteria to employers. |
| No GRTC transit integration | **Medium** | Download GRTC GTFS static feed from Transitland or DRPT Clearinghouse. Implement proximity search (stops.txt) and shift-fit check (stop_times.txt) for job listings. No partnership required — data is public. |
| No connection to existing youth employment programs | **Medium** | Compile eligibility criteria for YES/Youth Works RVA, PFF, GFAC, BGCMR, CIS, and RPS WBL. Build a "Programs You Qualify For" filter using age, location, and program-specific requirements. Contact OCWB to discuss whether Stepwise could serve as a referral channel. |
| No offline or SMS fallback | **Medium** | 9.7% of Richmond residents lack internet subscriptions. Library computers auto-erase sessions after 60 minutes. An SMS notification pathway for application status, parental approval requests, and offer alerts would extend reach to digitally constrained teens without requiring a full redesign. |
| COPPA compliance not validated | **Medium** | The invite key system is COPPA-conscious in design but needs legal review. Does the parent-generated invite key constitute verifiable parental consent under COPPA? Does Stepwise collect persistent identifiers or geolocation from under-13 users (potential sibling access)? Document the data collected per user role and map against COPPA, FERPA (if school-linked), and Virginia VCDPA requirements. |

---

## Recommended Next Steps (Priority Order)

1. **Add VAeECS workflow guidance for the 14-15 flow.** This is the highest-impact enhancement because Stepwise's three-flow architecture already separates under-16 users. A step-by-step "permit wizard" that tells the teen, employer, and parent what to do and when — with direct links to the DOLI portal — would address the single biggest drop-off point in the youth employment pipeline. This does not require API integration; it requires documented workflow steps and good UX.

2. **Define and document employer verification criteria.** The verification gate is a strong safety feature, but it's only as credible as the process behind it. Define whether verification is admin review, business license upload, or external registry check. Publish the criteria so employers know what's expected. For a platform serving minors, this is a trust and liability requirement, not a nice-to-have.

3. **Add scheduling compliance guardrails.** Convert the Youth Hiring Guide from static content into functional constraints: block employers from scheduling under-16 workers past 7 PM during school year (9 PM June 1–Labor Day), enforce the 3-hour school-day / 18-hour school-week cap, flag prohibited tasks by age. This is the feature most likely to drive employer adoption — it removes the compliance fear that currently deters small businesses from hiring teens.

4. **Build a program discovery layer.** Seed a simple eligibility-filtered directory with the ~7 existing Richmond youth employment programs. This transforms Stepwise from "another job board" into "the front door" — the distinction the problem statement requires. Use existing research corpus data to populate eligibility criteria; maintenance requires annual updates aligned with program funding cycles.

5. **Integrate GRTC transit data for shift-fit checking.** GTFS data is public and free. A "can you get there?" check using the teen's neighborhood and the job's location + shift times would prevent teens from accepting positions they can't physically sustain. This directly addresses a pain point no other platform in the ecosystem addresses.

6. **Conduct COPPA/VCDPA legal review of the invite key system.** The design intent is correct — parent generates key, teen uses key, parent retains oversight. But COPPA requires "verifiable parental consent" with specific technical standards. Document the data collected per user role, map against COPPA and VCDPA, and confirm the invite key mechanism satisfies the consent requirement before any production deployment involving under-16 users.
