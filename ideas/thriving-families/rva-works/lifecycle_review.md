# Lifecycle Review — RVA Works

**Pillar:** Thriving Families
**Problem Statement:** Give Richmond youth one clear place to explore summer jobs, internships, and first-job guidance.
**Demo:** RVA Works (Row 31, Eco Warriors — Parthav)
**Review Date:** April 1, 2026

---

## Rubric Checklist

| Step | Name | Output File | Status | Notes |
|------|------|-------------|--------|-------|
| 1 | Problem Grounding | `gap_analysis.md` (header) | ✅ Complete | Problem statement verbatim, primary user, pain, desired outcome all present. |
| 2 | JTBD Analysis | `_shared-youth-employment/jtbd_analysis.md` | ✅ Complete | Shared file — 3 jobs in proper format with triggering situations and outcomes. |
| 3 | Question Generation | `_shared-youth-employment/jtbd_analysis.md` (Open Questions) | ✅ Complete | Shared file — 20 open questions across data, user, integration, equity, prior art categories. 9 Confirmed / 5 Partial / 6 Still Unknown. |
| 4 | Prior Art Research | `_shared-youth-employment/prior_art_research.md` | ✅ Complete | Shared file — national youth employment platforms, workforce navigator models, Richmond ecosystem, failure patterns, weekend-viable patterns, transit data. |
| 5 | Pain Point Research | `_shared-youth-employment/pain_points.md` | ✅ Complete | Shared file — 12 pain points across 3 JTBDs, severity matrix, equity dimensions. |
| 6 | Data Source Mapping | `gap_analysis.md` (Data Source Map) | ✅ Complete | 6 data claims mapped; transit data plausible via GRTC GTFS; job listings are seed/synthetic; legal analysis derived from statutory text. |
| 7 | SME Outreach | — | ⚠️ Blocked | No outreach email drafted. Critical needs: (1) YES/OCWB employer worksite list for seed data, (2) ChamberRVA connection for employer supply. |
| 8 | Gap Analysis | `gap_analysis.md` (Gap Analysis) | ✅ Complete | Job 1: Strong. Job 2: Strong. Job 3: Minimal. Missing items and fixability documented per JTBD. |
| 9 | Opportunity Mapping | `gap_analysis.md` (Opportunities) | ✅ Complete | 3 opportunities named with dependencies. |
| 10 | Lifecycle Review | `lifecycle_review.md` | ✅ Complete | This file. |

---

## What the Demo Does Well

**1. First Job Kit is the best original content of any PS1 demo.** Message scripts, step-by-step application guides, and guardian signature guidance address the exact moment of confusion that defines a first-time teen jobseeker's experience. No existing Richmond resource — not YES, not CRWP, not any community partner — provides this level of handholding for a 14-year-old who has never applied for anything. The personal framing ("As a sophomore in college, I'm aspiring to become a part of the workforce") gives the content authentic voice.

**2. Employer compliance engine is the strongest employer-side feature across PS1 demos.** Automated analysis of job descriptions against Virginia Youth Employment Law addresses the #1 reason small employers avoid hiring teens: fear of getting it wrong (Pain P2.1). Employer account verification adds safety that no other demo considers. The Hire-a-Teen Guide with direct Dolly portal links is practical, not theoretical.

**3. Transit awareness directly confronts an equity barrier.** Showing transit time from the nearest bus stop in each listing is the only demo in the pillar that acknowledges teens don't have cars. If built on real GRTC GTFS data, this feature operationalizes the equity research that every other demo ignores (Pain P1.5).

**4. Two-sided architecture is the right structural choice.** Prior art from Baltimore YouthWorks, Hire LA's Youth, and Philadelphia WorkReady confirms that durable youth/employer matching platforms are two-sided by design, with an institutional anchor operating the platform (`E1_prior_art_youth_employment.md`, JTBD Q19: Confirmed). RVA Works chose this architecture from the start.

---

## What Was Fundamentally Missed

**1. Not a "front door" to the existing ecosystem.** The problem statement asks for "one clear place" — but RVA Works is a standalone portal with its own listings, not a navigator across the seven+ existing programs (YES, Youth L.E.A.D.S., GFAC, PFF, BGCMR, CIS, RPS WBL). A teen who doesn't find a match among the portal's listings has no pathway to the other programs that might serve them. The front-door problem — the #1 pain point (Pain P1.1, Critical severity) — is partially addressed for teens who find a direct listing but entirely unaddressed for teens who need to be routed to existing programs.

**2. No work permit workflow.** The VAeECS work permit process for 14–15-year-olds is the #2 pain point (Pain P1.2, Critical severity). The demo links to the Dolly portal but does not walk the teen or employer through the three-party sequential flow (Youth → Employer → Parent). Given that the portal cannot integrate with VAeECS (closed system — JTBD Q9: Confirmed), the best the tool can do is provide a step-by-step permit tracker with status nudges and document staging. This was not shown.

**3. No offline reach.** The 9.7% of Richmond residents without internet subscriptions are disproportionately concentrated in the East End and Northside — the exact neighborhoods where youth employment barriers are most acute. Library computers allow two 60-minute sessions per day and auto-erase saved work. A browser-only portal structurally excludes the highest-need teens. The prior art is explicit: SMS fallbacks and offline intake are equity requirements, not enhancements (`B5_users_digital_equity.md`, `E5_prior_art_weekend_viable.md`).

**4. Cold-start problem unaddressed.** The demo shows listings but no indication of where they come from. Two-sided marketplaces need supply before demand — Detroit GDYT and Boston SuccessLink pre-committed employer slots before opening applications. Without a partnership with YES/OCWB, ChamberRVA, or specific Richmond employers to seed the portal, it launches empty.

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| No employer supply pipeline | **Critical** | Contact OCWB/YES to determine: (1) Can the YES employer worksite list be shared as seed data? (2) Would YES endorse RVA Works as an additional intake channel? (3) Can ChamberRVA distribute the employer compliance tool to member businesses? |
| Job listings are synthetic / seed data | **High** | Identify the source for real job listings. Options: (a) Employer self-posting via the portal, (b) Integration with YES/CRWP partner worksites, (c) Aggregation from Indeed/Snagajob filtered for youth eligibility. Each has different feasibility and timeline. |
| No age-band filtering in demo | **High** | Add explicit 14–15 vs. 16–17 filtering. These age bands have entirely different legal frameworks — showing a 14-year-old a warehouse job or a position requiring work past 7 PM on a school night is a compliance failure, not just a UX problem. |
| No offline or SMS channel | **Medium** | Design an SMS-based flow for the First Job Kit at minimum. The Kit's content (scripts, checklists, step-by-step guides) is text-native and does not require a rich UI. SMS delivery extends reach to the exact population the problem statement targets. |
| Legal analysis accuracy unvalidated | **Medium** | Test the VA Youth Employment Law analysis against 10+ real job descriptions from Richmond QSR, retail, and recreation employers. Document: (a) Which prohibited tasks does it correctly flag? (b) Which does it miss? (c) Does it handle the granular distinctions (pool lifeguard: yes; beach lifeguard: no)? |

---

## Recommended Next Steps (Priority Order)

1. **Secure employer seed data from OCWB/YES.** The single action that transforms RVA Works from a demo into a viable pilot is having real job listings on Day 1. YES operates Youth Works RVA with 750 target placements for summer 2026 and has employer partnerships already in place. Ask: Can those worksites be listed in RVA Works? This is a partnership conversation, not a technical integration.

2. **Add age-band filtering and permitted-task guardrails.** Before any public deployment, the portal must prevent a 14-year-old from seeing (or applying to) jobs that are legally prohibited for their age. The prohibited task list is enumerated in Virginia Code and FLSA — this is a data mapping exercise, not an AI problem.

3. **Validate the First Job Kit content with real teens.** Recruit 5–10 Richmond teens (through YES, BGCMR, or a library program) and have them walk through the Kit. Document: What confused them? What was missing? What did they actually use? This validation transforms the Kit from "a college sophomore's guess" into "a tested resource."

4. **Add a work permit step-by-step tracker.** Even without VAeECS integration (impossible — closed system), the portal can provide: a visual flowchart of the three-party process, document staging (what to have ready before starting), timeline expectations (DOLI typically reviews within 24 hours after all sections submit), and nudges ("Reminder: your parent hasn't completed their section yet — here's what they need to do").

5. **Pilot the compliance engine with ChamberRVA employers.** The job description analysis feature has standalone value. Offer it as a free tool to 10 Richmond employers who currently hire or want to hire teens. Their feedback determines whether the legal analysis is accurate enough to deploy at scale.
