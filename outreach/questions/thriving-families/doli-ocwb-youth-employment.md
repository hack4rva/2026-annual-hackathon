# Outreach: DOLI + OCWB — Youth Employment Ecosystem — Research & Questions

### What we've confirmed through public sources

- **Work permit system:** Virginia's Electronic Employment Certificate System (VAeECS) requires a sequential three-party flow — Youth registers first and receives a "Youth Unique Identifier," then Employer and Parent/Guardian each complete their sections independently using that identifier, then DOLI reviews and issues the certificate electronically to the employer. The certificate is only valid once the youth signs it.
- **DOLI review timeline:** DOLI Compliance Officers generally review complete submissions within 24 hours of all three electronic sections being submitted. However, the total end-to-end time depends entirely on how quickly the youth, employer, and parent act — and that real-world distribution is not published.
- **Closed system:** VAeECS does not support APIs, deep-linking, or pre-population from external tools. Each party must independently navigate to the DOLI portal and enter data from scratch. External tools can only point users to the portal.
- **YES program lineage:** The Mayor's Youth Academy (MYA) was rebranded to Youth Engagement Services (YES) under the Office of Community Wealth Building. Youth Works RVA is the current summer program line, targeting ages 14–24, with a Virtual Earn and Learn track for 14–15-year-olds and in-person work-based learning for 16–24.
- **2026 scale:** A March 2026 RRHA partner announcement cites a service target of 750 Richmond youth for Youth Works RVA — but this is a capacity target, not an application count. No published applicant figures, acceptance rates, or 14–17 age breakdowns exist.
- **Ecosystem fragmentation:** Richmond's youth employment landscape runs through 7+ parallel programs — YES/Youth Works RVA, CRWP/WIOA, RPS Work-Based Learning, Partnership for the Future, Boys & Girls Clubs of Metro Richmond, Girls For A Change, and Communities In Schools — each with different age bands, GPA requirements, application windows, and geographic eligibility. No shared referral backbone connects them.
- **Foster youth barrier:** For 14–15-year-olds, the employment certificate requires parent/guardian/custodian permission. Foster youth use LDSS or foster parent per custody order. Virginia code provides no alternative signer for unaccompanied minors — guardianship must be legally established first, creating a hard barrier.
- **Curfew disparity:** Richmond's 11 PM–5 AM curfew exempts travel to/from work, but 2018 RPD stop data (reported by WVTF) showed 98% of juveniles stopped for curfew violations were Black — a documented enforcement disparity that may deter youth-of-color employment, particularly for late-shift work.
- **Transit data:** GRTC provides static GTFS ZIP files (available via Transitland), but no public real-time developer API was identified. The GRTC Bus Tracker exists as a consumer tool only.
- **No Project SEARCH in city limits:** Richmond youth with disabilities are routed to suburban Project SEARCH host sites in Chesterfield, Henrico, and Hanover — no site exists in partnership with RPS within the city.
- **FERPA integration path:** Under FERPA's "school official" exception, a youth employment platform could integrate with RPS student information systems if the vendor operates under a written agreement with direct school district control over data use and redisclosure.
- **National models that survived:** Baltimore YouthWorks (city MOED), Hire LA's Youth (city EWDD), and Philadelphia WorkReady (nonprofit PYN) are durable two-sided youth/employer matching platforms with sustained institutional ownership. Boston SuccessLink reports up to 15% of job-matched youth fail to complete onboarding due to document barriers including work permits.

### What we haven't been able to determine — and where we need your help

We have **five specific questions** that only your teams can answer:

1. **Real-world permit completion time:** DOLI's 24-hour review window is documented, but the total end-to-end time from job offer to signed certificate — including employer portal delays, parent response time, and youth signature — is not published. What is the typical elapsed time in practice? Days? Weeks? Does DOLI track this?

2. **YES applicant volume:** How many Richmond teens aged 14–17 applied to Youth Works RVA in 2025 and 2026? What was the acceptance rate? What happened to applicants who were not placed — were they referred to other programs, or did they drop off?

3. **Employer worksite database:** No machine-readable list of employer worksites that have previously hosted youth through YES or WIOA programs exists on the Open Data Portal or program websites. Does OCWB or CRWP maintain an internal database of vetted employer partners — and if so, is there any path to sharing it (even aggregated by industry/neighborhood)?

4. **Ecosystem referral system:** YES and CRWP both serve 18–24 out-of-school youth but appear to have no formal co-enrollment protocol or shared data system. When a teen applies to one program and doesn't fit, how does referral to another program work today? Is it verbal, email, or tracked in any system?

5. **Foster youth practical handling:** Virginia law has no alternative signer for unaccompanied minors seeking work permits. In practice, when OCWB or a community partner encounters a foster youth or unaccompanied minor who wants to work, what actually happens? Is there a workaround pathway, or does the teen simply wait until guardianship is established?

### Why this matters

We've been generating new solution ideas grounded in the research. The highest-scoring concepts for youth employment are:

- **Richmond Youth Hub** (Pillar Award: 90/105, Mayor's Choice: 92/105) — A unified program navigator that consolidates all 7+ youth employment programs into one searchable directory, filtered by age, neighborhood, and eligibility. Fills the #1 gap: program fragmentation. Directly answers the problem statement's "one clear place" requirement.
- **First Job SMS Kit** (Pillar Award: 87/105, Mayor's Choice: 91/105) — A text-message-based step-by-step guide that walks teens through the entire first-job process (permits, documents, transit, schedules) without requiring broadband or a smartphone app. Reaches the 9.7% of Richmond residents without internet through the only channel that works for them. Highest equity score (5/5) of any PS1 idea.
- **Guardian Bridge** (Pillar Award: 85/105, Mayor's Choice: 83/105) — A legal navigation tool specifically for foster youth, unaccompanied minors, and teens with absent parents who face the work permit consent barrier. Highest user value score (5/5) in PS1 but constrained by legal complexity.

None of these require replacing existing programs — they all build coordination and access layers on top of what YES, CRWP, and partners already run.

We're not asking for any commitment — just trying to understand what's technically possible so we can give the Mayor's office a realistic assessment of which prototypes could move to a pilot. Happy to share any of the prototypes or our full research.

---

## Context for the SME
Richmond's youth employment ecosystem has strong programmatic pillars (YES, CRWP, RPS WBL, PFF, BGCMR) but no shared referral backbone, no cross-program data, and no single entry point for teens. The VAeECS work permit system is a closed, sequential portal that creates a chicken-and-egg problem (teen needs job offer before starting permit, employer hesitates to offer before permit is secured) compounded by document barriers (birth certificate, SSN, Virginia Child ID at $10–$16). The prototype ideas address ecosystem coordination — not replacement — and deliberately avoid the two known third rails: direct API integration with VAeECS (impossible) and FERPA-regulated student data (requires district partnership).

## Why This Person
DOLI's Child Labor unit owns the VAeECS process and can confirm real-world permit timelines and whether any external integration is on their roadmap. OCWB/YES manages Youth Works RVA and the broader YES ecosystem — they hold the applicant data, employer partner relationships, and referral protocols that the prototypes need to work around or integrate with.

## Data Questions (internal tracking)
- [ ] Q1: Real-world VAeECS end-to-end completion time (including employer/parent delays)
- [ ] Q2: Youth Works RVA 2025/2026 applicant counts, acceptance rate, non-placed outcomes
- [ ] Q3: Internal employer worksite database (YES/WIOA) — exists? sharable?
- [ ] Q4: Cross-program referral mechanism (YES ↔ CRWP ↔ RPS WBL ↔ nonprofits)
- [ ] Q5: Practical handling of foster/unaccompanied youth for work permit consent

## Research Sources
- `_research-answers/ye_q1_system_data.md` — VAeECS process, YES details, data gaps
- `_research-answers/ye_q2_equity.md` — Foster youth, curfew disparity, Project SEARCH, NEET, language access
- `_research-answers/ye_q3_prior_art.md` — National models, GRTC GTFS, FERPA, navigator features
- `_shared-youth-employment/jtbd_analysis.md` — Full JTBD + 20 open questions with verdicts
- `NEW_IDEAS_RUBRIC_GRADES.md` — Scored solution ideas (PS1)
