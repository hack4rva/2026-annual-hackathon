# Gap Analysis — RVA Works

**Pillar:** Thriving Families
**Problem Statement (verbatim):** "Give Richmond youth one clear place to explore summer jobs, internships, and first-job guidance."
**Demo:** RVA Works (Row 31, Eco Warriors — Parthav)
**Primary User:** Richmond teen (14–17) entering the workforce for the first time with no resume, no professional network, and no understanding of the legal and procedural requirements for youth employment.
**Pain:** Richmond's youth employment programs are fragmented across seven+ organizations with different age bands, eligibility criteria, and application windows. The work permit process for 14–15-year-olds requires a firm job offer before the permit can even be initiated — a chicken-and-egg problem that stalls hires. Teens without adult guidance have no single place to find what jobs they're allowed to do, what documents they need, or how to get there by bus.
**Desired Outcome:** A teen can go from "I want a job" to "I started working" through a single portal that surfaces age-appropriate opportunities, walks them through documentation and compliance, and gives employers a safe, guided path to hire youth legally.

---

## Data Source Map

| Data Claim in Demo | Real or Synthetic? | Source | Owner | Access | Cadence | Notes |
|---|---|---|---|---|---|---|
| Internship listings with pay rate and schedule | **Synthetic / seed data** | Not identified — demo shows listings but does not cite a live data feed | Unknown | N/A | N/A | No Richmond employer data source was shown. Real listings would require either employer self-posting or integration with YES/CRWP partner worksites. The cold-start problem (no listings = no teen users = no employer interest) is well-documented in prior art (`E1_prior_art_youth_employment.md`). |
| Transit time from nearest bus stop | **Plausible but unverified** | GRTC GTFS static feed | GRTC | Public (Transitland, DRPT Clearinghouse) | Updated periodically; static GTFS available | GRTC publishes static GTFS ZIP files including `stops.txt` and `stop_times.txt`. Computing "nearest bus stop" walking distance is feasible with GeoPandas `sjoin_nearest`. No public real-time developer API confirmed — GRTC Bus Tracker is consumer-only (`D5_data_grtc_transit.md`, JTBD research Q10). |
| Document checklist per job | **Generated / AI-curated** | Virginia youth employment law (DOLI) | DOLI / Virginia.gov | Public | Statutory (changes with legislation) | The concept is sound — documents vary by age band (14–15 require Employment Certificate via VAeECS; 16–17 do not). Checklist accuracy depends on correctly mapping age, job type, and employer to specific document requirements. |
| Virginia Youth Employment Law analysis of job postings | **AI-generated from statutory text** | Virginia Code § 40.1-78 et seq., FLSA child labor provisions | DOLI, DOL | Public | Statutory | The dual-rule environment (federal FLSA + Virginia DOLI, stricter standard governs) is complex: prohibited tasks are specific enough that automated analysis is high-value but also high-risk if wrong (pool lifeguard at 15: allowed; beach lifeguard: not). |
| First Job Kit (message scripts, guides, guardian signature guidance) | **Original content** | Created by team | Eco Warriors | N/A | N/A | This is the demo's most differentiated feature. No existing Richmond resource provides this level of step-by-step first-job guidance for teens. The question is whether the content was validated against actual teen experiences or created from the presenter's perspective as a college sophomore. |
| Dolly portal link for employer onboarding | **Real reference** | DOLI VAeECS portal | DOLI | Public web portal | Real-time | The VAeECS portal is a closed, sequential multi-party workflow. No API or deep-link pre-population is possible — external tools can only point users to the DOLI site to start manually (JTBD research Q9: Confirmed). |

### Gaps Requiring SME Access
- **YES/OCWB employer worksite list:** No public CSV/JSON list of employer worksites that have previously hosted youth through YES or WIOA programs exists on the City Open Data Portal (JTBD Q3: Confirmed). This is the seed data RVA Works needs on Day 1.
- **VAeECS integration:** The portal is a closed workflow; no external pre-population or API is available (JTBD Q9: Confirmed). RVA Works can guide users to the portal but cannot integrate with it.
- **GRTC real-time data:** Only static GTFS is publicly available; no public real-time developer API confirmed (JTBD Q10: Partial).

---

## Gap Analysis by JTBD

### Job 1: Teen looking for a first job they're actually allowed to do
**Coverage: Strong — strongest of any PS1 demo on this job**

What works:
- Two-sided portal directly addresses the "no single front door" problem (Pain P1.1). A teen can browse opportunities without needing to know which of the seven+ programs they qualify for.
- Document checklist per job tackles the identity documents barrier (Pain P1.3) by surfacing requirements before the teen commits, not at Day 1 onboarding.
- Transit time from nearest bus stop directly addresses Pain P1.5 (stranded-worker risk). If implemented on real GRTC GTFS data, this is the only demo in the pillar that confronts the transit barrier.
- First Job Kit is the demo's standout: message scripts, guardian signature guidance, and step-by-step application guides address the exact "I have no idea how to do this" pain that defines Job 1. No prior art at the city level does this (Pain P1.1, P1.2).

What's missing:
- **No program aggregation.** The portal shows individual internship listings but does not surface or route to the seven+ existing programs (YES, Youth L.E.A.D.S., GFAC, PFF, BGCMR, CIS, RPS WBL) that a teen might qualify for based on age, GPA, neighborhood, or application window. The JTBD asks for "one clear place" — RVA Works provides one portal for direct listings but does not function as a front door to the existing ecosystem.
- **No work permit workflow.** The demo shows a Dolly portal link and guidance, but does not walk the teen through the three-party VAeECS sequential flow (Youth → Employer → Parent). Given that this is the #2 pain point (P1.2, "Critical" severity), the absence is significant. The portal can't integrate with VAeECS (closed system), but it could provide a step-by-step permit tracker with status nudges.
- **No age-band filtering.** The demo does not show filtering by age (14–15 vs. 16–17), which determines entirely different legal frameworks, permitted tasks, and hour restrictions. A 14-year-old and a 17-year-old should see fundamentally different opportunity sets.
- **No offline or SMS pathway.** The demo is browser-based. The 9.7% of Richmond residents without internet subscriptions and teens relying on library computers with 60-minute sessions are structurally excluded (Pain P1.4). The prior art is clear: SMS fallbacks and sub-150KB payloads are equity requirements (`B5_users_digital_equity.md`).
- **No language support beyond English.** 21.3% of RPS students are English Learners across 60+ languages. No multilingual capability was shown.

**Gap fixable or fundamental?** Mostly fixable. The architecture (two-sided portal with AI-powered guidance) is sound. Adding program aggregation, age-band filtering, and a permit checklist are engineering and content tasks. The offline/SMS gap is a design decision that would require rearchitecting the delivery channel.

### Job 2: Small business owner who wants to hire youth but fears getting it wrong
**Coverage: Strong — most direct employer-side offering of any PS1 demo**

What works:
- Employer account verification adds a trust layer — teens connect with vetted employers only. This addresses the safety concern that no other demo tackles.
- Job description analysis against Virginia Youth Employment Law is the single highest-value employer feature in any demo. Automated compliance checking directly addresses Pain P2.1 (dual-rule complexity deters hiring) and P2.4 (scheduling mistakes are the top compliance risk).
- Hire-a-Teen Guide with Dolly portal link walks employers through VAeECS registration, required paperwork, and compliance steps. This addresses Pain P2.2 (employer portal friction causes offer withdrawals).

What's missing:
- **No scheduling guardrail.** The demo analyzes job descriptions against the law but does not show a shift scheduler that enforces hour caps (3 hrs/school day for 14–15), seasonal rule changes (7 PM → 9 PM on June 1), or prohibited-task filtering. This is Pain P2.4 at its most concrete — the QSR owner who schedules a 15-year-old past 7 PM on a school night.
- **No connection to existing employer programs.** YES, CRWP OJT/WEX, and Project SEARCH all approach employers independently (Pain P2.3). RVA Works does not position itself as the shared employer intake that would reduce employer fatigue across programs.
- **No employer supply demonstrated.** The demo shows the employer tools but not employer adoption. The prior art is unambiguous: two-sided marketplaces need supply before demand. Detroit GDYT and Boston SuccessLink pre-committed employer slots before opening applications (`E1_prior_art_youth_employment.md`).

**Gap fixable or fundamental?** Fixable. The employer-side architecture is the right idea. Adding a scheduling engine and connecting to existing programs are feature additions, not structural changes. Employer supply is a go-to-market challenge, not a technical one.

### Job 3: Workforce coordinator who can't see the whole picture
**Coverage: Minimal**

What works:
- The planned counselor persona signals awareness that intermediaries (school counselors, YES staff, CIS coordinators) are part of the system.

What's missing:
- **No cross-agency visibility.** The portal does not aggregate data across YES, CRWP, RPS WBL, BGCMR, CIS, or PFF. A coordinator cannot see total placements, referral status, or which teens dropped off between application and Day 1 (Pain P3.1, P3.4).
- **No referral tracking.** When a teen doesn't match a listed internship, there's no mechanism to warm-handoff to an existing program that might serve them.
- **No outcome measurement.** No dashboard for tracking how many teens applied, were placed, completed, or dropped off — the basic questions workforce coordinators cannot currently answer (Pain P3.4).
- **Counselor persona is planned, not built.** The expansion plan was noted verbally but not demonstrated.

**Gap fixable or fundamental?** Fixable in concept but represents a different product. Addressing Job 3 would require a provider-facing dashboard layer, data sharing agreements with existing programs, and intake integration — a significantly larger scope than the teen/employer portal shown.

---

## Opportunities

### Opportunity 1: First Job Kit as Standalone Resource (Quick Win)
The First Job Kit — message scripts, step-by-step guides, guardian signature guidance — is original content that no existing Richmond resource provides. Even without the full two-sided portal, packaging the First Job Kit as a downloadable PDF, a printable handout for school counselors, or an SMS-accessible guide would deliver immediate value to the teens the problem statement targets. This is the DiscoverBPS pattern: one job, one user, maximum reach (`E5_prior_art_weekend_viable.md`).

**Dependencies:** Content validation with actual teens and school counselors; print/SMS-friendly formatting; distribution through YES, RPS, and library channels.

### Opportunity 2: VA Youth Employment Law Compliance Engine (Employer Unlock)
No existing Richmond tool automates compliance checking against Virginia youth employment law. If the job description analysis feature is accurate and covers the full scope of prohibited tasks, hour caps, and seasonal rule changes, it has standalone value for employers — particularly QSR, retail, and recreation businesses that routinely hire teens. This could be offered as a free tool through the Richmond Chamber of Commerce or ChamberRVA, building employer supply for the portal.

**Dependencies:** Validation of legal analysis accuracy against DOLI statutory text; testing with real job descriptions from Richmond employers; partnership with ChamberRVA or OCWB for distribution.

### Opportunity 3: Transit-Aware Job Matching (Equity Layer)
The "transit time from nearest bus stop" feature, if built on real GRTC GTFS data, is the only transit-aware youth employment feature across all PS1 demos. Extending this to a "shift fit checker" — cross-referencing job hours with actual bus schedules and the GRTC 5 AM–1 AM service span — would address the stranded-worker risk (Pain P1.5) that currently causes teens to accept jobs they physically cannot sustain. GRTC's zero-fare policy means cost is not a barrier; schedule alignment is.

**Dependencies:** GRTC GTFS static feed (publicly available); employer-posted shift schedules; GeoPandas or equivalent for proximity computation.
