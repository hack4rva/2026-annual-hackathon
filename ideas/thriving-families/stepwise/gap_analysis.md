# Gap Analysis — Stepwise

**Pillar:** Thriving Families
**Problem Statement (verbatim):** "Give Richmond youth one clear place to explore summer jobs, internships, and first-job guidance."
**Demo:** Stepwise (Row 42 — Nana and Gabriel)
**Primary User:** Richmond youth aged 14–24 seeking their first job, and the parents and employers who support them.
**Pain:** Existing job boards treat all applicants the same — a 14-year-old who needs parental consent, a work permit, and age-restricted task filtering is routed through the same flow as a 24-year-old with a resume. No platform accounts for Virginia's age-tiered labor rules, the parental consent requirement for minors under 16, or the document readiness barriers (ID, work permit, bank account) that silently kill teen hires before they start.
**Desired Outcome:** A single platform where teens find age-appropriate jobs with built-in readiness guidance, parents approve and supervise minor applications, and employers post youth-friendly positions with compliance support — closing the loop from application through parental approval to hire.

---

## Data Source Map

| Data Claim in Demo | Real or Synthetic? | Source | Owner | Access | Cadence | Notes |
|---|---|---|---|---|---|---|
| Job listings (data analyst role at $49.99/hr shown) | **Synthetic / demo seed data** | Internal to Stepwise | Team-generated | N/A | Static | The demo used a clearly illustrative listing ($49.99/hr data analyst for a 14-year-old). Production would require real employer postings or integration with an existing job board. |
| Virginia youth hiring guide / labor law compliance | **Real content, manual assembly** | VA DOLI child labor regulations; federal FLSA | VA Dept of Labor & Industry | Public (DOLI website, Code of Virginia §40.1-100 et seq.) | Updated with legislative sessions | The demo includes an employer-facing "Youth Hiring Guide" for VA law. Content appears manually assembled from public sources. Not automated — changes in law would require manual updates. |
| Job readiness checklist (ID, work permit, resume, bank account) | **Real requirements, static checklist** | VA DOLI (work permit), DMV (Child ID), federal I-9 | Multiple agencies | Public | Static | Checklist items reflect real documentation requirements. No integration with VAeECS or DMV systems — the checklist tracks parent-reported status, not verified completion. |
| Employer verification status | **Application-level flag** | Internal to Stepwise | Team-generated | N/A | Manual | Employers are marked verified/unverified within the app. No integration with an external verification source (Secretary of State, DUNS, SAM.gov). Verification criteria and process not shown. |
| Hiring pipeline stages (review → offer → hired) | **Application state machine** | Internal to Stepwise | Team-generated | N/A | Real-time | Pipeline is internal application logic. No integration with external HR/ATS systems. Demonstrated end-to-end in demo. |
| Employer analytics (applicant interaction data) | **Synthetic / demo data** | Internal to Stepwise | Team-generated | N/A | Real-time | Analytics dashboard shown but data is demo-seeded. Production viability depends on real posting volume. |

### Gaps Requiring SME Access
- **VAeECS integration:** Can the work permit process be initiated, pre-populated, or linked from Stepwise, or must each party independently navigate the DOLI portal? This determines whether the readiness checklist is informational or functional.
- **Employer verification:** What constitutes a "verified" employer? Is this self-attestation, admin review, or integration with a business registry? The demo shows verified/unverified states but not the verification process.
- **GRTC transit data:** No transit-aware job matching was shown. GTFS static feed is available via Transitland and DRPT Clearinghouse, but Stepwise does not use it.

---

## Gap Analysis by JTBD

### Job 1: The Teen Looking for a First Job They're Actually Allowed to Do
**Coverage: Strong**

What works:
- **Three-flow architecture** is the defining strength — a 14-year-old in the parent-supervised flow and a 20-year-old in the self-service flow have genuinely different experiences, not just a checkbox toggle. This is the only demo in the pillar that structurally separates these user types.
- **Invite key system** links parent and teen accounts without requiring the teen to create an account under parental email — a COPPA-conscious pattern that gives the teen their own portal while maintaining parental oversight.
- **Readiness checklist** (ID, work permit, resume, bank account) surfaces the document barriers that silently kill teen hires. Parents can review and verify readiness before any applications go out, directly addressing pain point P1.3 (missing identity documents).
- **Age-gated flows** — 14-15 requires parental supervision; 16-24 is self-service. This maps correctly to Virginia's Employment Certificate requirement for under-16.

What's missing:
- **No connection to the VAeECS work permit portal.** The checklist tracks whether a work permit is "ready" but doesn't help the teen, employer, or parent navigate the actual three-party permit process — which is the single highest-friction step for 14-15-year-olds (pain point P1.2). The chicken-and-egg problem (can't get permit without offer, employer won't offer without permit) remains unsolved.
- **No transit-aware job matching.** GRTC zero-fare transit eliminates cost but not route/span constraints. A teen in the East End accepting a Short Pump position has no way to assess commute viability within the platform (pain point P1.5).
- **No program discovery layer.** Stepwise is a job board, not a program navigator. It doesn't surface YES/Youth Works RVA, Partnership for the Future, GFAC, BGCMR, or RPS Work-Based Learning — the existing programs a teen might qualify for. The "one clear place" in the problem statement arguably requires awareness of these programs (pain point P1.1).
- **No offline or SMS pathway.** The platform is web-only. Teens relying on library computers with 60-minute sessions and no saved state face the same constraints as with any other browser-based tool (pain point P1.4).
- **No multilingual support shown.** 21.3% of RPS students are English Learners across 60+ languages. No language options were demonstrated.

**Gap fixable or fundamental?** Fixable. The architecture is sound and the age-gated flow is the strongest structural choice in the pillar. Adding VAeECS guidance, transit awareness, and program discovery are additive features, not architectural changes.

### Job 2: The Small Business Owner Who Wants to Hire Youth but Fears Getting It Wrong
**Coverage: Strong**

What works:
- **Employer verification gate** prevents unvetted employers from posting jobs to minors — a safety-first design that no other demo in the pillar implements. The demo showed an unverified employer seeing a restricted dashboard, confirming the gate is enforced.
- **Youth Hiring Guide** provides Virginia labor law compliance information directly in the employer experience, addressing the core fear that drives small businesses away from youth hiring (pain point P2.1).
- **Hiring pipeline** (review → offer → hired) gives employers a structured workflow for managing youth applicants, replacing ad-hoc email/phone coordination.
- **Employer analytics** provide visibility into posting performance — a feature that increases employer retention on a two-sided platform.
- **Company profiles** give employers a presence visible to candidates, building trust.

What's missing:
- **No automated compliance guardrails.** The Youth Hiring Guide is informational, not functional. There are no calendar-aware scheduling constraints (e.g., blocking a 15-year-old from being scheduled past 7 PM during school year), no permitted-task filtering by age, and no automated hour-cap enforcement. The employer must self-apply the rules they read (pain point P2.4).
- **No VAeECS integration for employers.** The work permit process requires employer participation (registering intent to employ, specifying occupation and hours). Stepwise doesn't guide employers through their portion of the permit workflow (pain point P2.2).
- **Verification process unclear.** Who verifies employers, using what criteria? Self-attestation is insufficient for a platform serving minors. Integration with a business registry or manual admin review process was not demonstrated.
- **No connection to existing employer engagement channels.** YES, CRWP, and ChamberRVA each recruit employers independently. Stepwise doesn't bridge these — it's a parallel channel, not a consolidator (pain point P2.3).

**Gap fixable or fundamental?** Fixable. The verification gate and hiring guide demonstrate the right instincts. Converting informational compliance into automated guardrails is significant engineering work but not a redesign.

### Job 3: The Workforce Coordinator Who Can't See the Whole Picture
**Coverage: Partial**

What works:
- **Hiring pipeline visibility.** The employer dashboard showing active postings, total applicants, and positions filled is the kind of data workforce coordinators currently lack. If aggregated, this could feed cross-program metrics.
- **End-to-end tracking.** The demo closed the loop from application → parental approval → offer → hired. This lifecycle visibility, if extended to coordinators, would directly address the "where do youth drop off?" question.

What's missing:
- **No coordinator role or dashboard.** Stepwise serves three users (parent, candidate, employer) but not the fourth critical user: the workforce system staff who need cross-program visibility. There is no admin view, referral tracking, or aggregate reporting.
- **No ecosystem integration.** Stepwise operates as a standalone platform. It doesn't connect to YES intake, CRWP referrals, RPS Work-Based Learning, or any community nonprofit. A teen who applies through Stepwise is invisible to the broader workforce system, and vice versa (pain point P3.1).
- **No summer-to-year-round pathway.** The platform supports a hiring transaction but not a career trajectory. There's no mechanism to transition a teen from a summer placement to fall apprenticeships or WIOA services (pain point P3.2).
- **No cross-agency data export.** Even if Stepwise captured useful placement data, there's no API or data sharing pathway to feed it into CRWP's WIOA reporting or OCWB's program metrics (pain point P3.4).

**Gap fixable or fundamental?** Partially fixable. Adding a coordinator dashboard and data exports is engineering. But becoming the "shared referral backbone" the ecosystem lacks requires institutional buy-in from YES, CRWP, and community partners — a governance challenge, not a code challenge.

---

## Opportunities

### Opportunity 1: VAeECS Workflow Guidance as a Compliance Bridge
The work permit process is the single highest-friction step for 14-15-year-olds. Stepwise's three-flow architecture is uniquely positioned to guide all three parties (youth, employer, parent) through their respective VAeECS portal steps in sequence — even without direct API integration. A step-by-step "permit wizard" that tells each user what to do, when, and provides direct links to the DOLI portal would reduce abandonment without requiring government system integration. This is a weekend-viable enhancement.

**Dependencies:** Documented VAeECS workflow steps for each party; confirmation from DOLI that linking to the portal is permitted; UX for tracking permit status within Stepwise (even if manually updated).

### Opportunity 2: Transit-Aware Job Matching Using GRTC GTFS
GRTC's zero-fare policy eliminates cost as a barrier, but route alignment and span (5 AM–1 AM) remain constraints. Adding a "can I get there?" check using GRTC GTFS static data (available via Transitland) would help teens avoid accepting positions they physically cannot sustain. `stops.txt` for proximity, `stop_times.txt` for shift-fit analysis. GeoPandas `sjoin_nearest` can compute walking distance with minimal development effort. No GRTC partnership required — the data is public.

**Dependencies:** GTFS static feed download; geocoding of job locations; teen home ZIP code or neighborhood (coarse, for privacy); shift time data from employer postings.

### Opportunity 3: Existing Program Discovery Layer
Stepwise currently operates as an employer-direct job board. Adding a "Programs You Qualify For" layer — surfacing YES/Youth Works RVA, Partnership for the Future, GFAC, BGCMR, and RPS Work-Based Learning based on age, location, and eligibility — would transform it from a job board into the "one clear place" the problem statement calls for. An Open Referral HSDS-formatted directory seeded with the ~7 existing Richmond youth programs could be built in hours using existing research corpus data.

**Dependencies:** Current program eligibility criteria (age, GPA, geography, application windows); willingness of program operators to be listed; maintenance plan for updating program details across funding cycles.

### Opportunity 4: Automated Scheduling Compliance Guardrails
Converting the Youth Hiring Guide from static content into functional guardrails — preventing employers from scheduling 15-year-olds past 7 PM during school year, enforcing the 3-hour school-day cap, flagging prohibited tasks by age — would make Stepwise the only youth employment platform with built-in Virginia labor law enforcement. This is the feature most likely to unlock employer adoption: it removes the compliance fear that currently deters small businesses from hiring teens (pain point P2.1, P2.4).

**Dependencies:** Structured representation of VA DOLI rules by age band and calendar period; school calendar integration (or manual school-year/summer toggle); employer scheduling interface that can enforce constraints.
