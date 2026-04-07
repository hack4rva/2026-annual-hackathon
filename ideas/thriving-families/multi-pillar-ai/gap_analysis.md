# Gap Analysis — Multi-Pillar AI Platform (Youth Employment Module)

**Pillar:** Thriving Families
**Problem Statement (verbatim):** "Give Richmond youth one clear place to explore summer jobs, internships, and first-job guidance."
**Demo:** Multi-Pillar AI Platform (Row 30 — Subhash Krishnamurthy)
**Scope Note:** This platform covers all 7 MAP pillars. Per hackathon evaluation protocol, this review evaluates only the Youth Employment module (Thriving Families PS1). The broad scope is noted as context for depth-per-pillar tradeoffs.
**Primary User:** Richmond teen (14–17) entering the job market for the first time, seeking to discover opportunities, understand their readiness, and prepare for employment.
**Pain:** Teens face fragmented discovery across seven+ programs, no single readiness assessment, and no guided path from "I want a job" to "I'm prepared to apply." Existing tools assume the user already knows what they want and how the system works.
**Desired Outcome:** A teen can register, discover opportunities, assess their readiness against specific job requirements, get personalized coaching, build an ATS-ready resume, and plan transportation — in one platform.

---

## Data Source Map

| Data Claim in Demo | Real or Synthetic? | Source | Owner | Access | Cadence | Notes |
|---|---|---|---|---|---|---|
| Job opportunity listings | **Synthetic / seed data** | Not identified — demo shows opportunities but does not cite a live data feed | Unknown | N/A | N/A | Same cold-start issue as other PS1 demos. No connection to YES/CRWP partner worksites or external job boards shown. |
| AI Coach skill analysis and gap analysis | **AI-generated** | Google Cloud AI | Google / Subhash | API (commercial) | Real-time | The AI coach compares candidate skills to job requirements. The quality depends on: (a) accuracy of the job requirement model, (b) accuracy of the candidate skill assessment, and (c) whether the "gap" recommendations are actionable for a 14-year-old with no work history. |
| Resume-based skill assessment | **AI-generated from user input** | User-uploaded resume + Google Cloud AI | User / Google | User-provided | Per-session | Assumes the teen has a resume. For a first-time jobseeker — the problem statement's primary user — this is a chicken-and-egg: the teen who most needs the platform is the one least likely to have a resume to upload. |
| Transportation routing | **Plausible but unverified** | Not specified — likely Google Maps API | Google | API (commercial) | Real-time | Transportation routing was mentioned but not demonstrated in detail. If using Google Maps, this is reliable but not GRTC-specific — it may not reflect zero-fare bus service or route-specific span constraints. |
| ATS resume builder output | **AI-generated** | Google Cloud AI | Google / Subhash | API (commercial) | Per-session | The platform generates a formatted resume. Whether it's age-appropriate for a 14-year-old (who has no work history, no references, and needs a fundamentally different resume structure than an adult) is unclear. |
| Real-time video conversation with AI agent | **Real (demonstrated)** | Google Cloud AI (likely Gemini multimodal) | Google / Subhash | API (commercial) | Real-time | The presenter described this as "the best part." It's technically impressive but the value proposition for a 14-year-old navigating first-job logistics is unclear — does the teen need a video AI agent, or do they need a checklist? |
| User registration and profile recognition | **Real (demonstrated)** | Platform database | Subhash | Platform-hosted | Real-time | The demo showed returning-user recognition. This implies PII storage (name, potentially age) — relevant for COPPA/VCDPA compliance if users are under 13 or under 18 in Virginia. |

### Gaps Requiring SME Access
- **Job listing source:** Same gap as all PS1 demos — no confirmed source for real Richmond youth employment opportunities.
- **Age-appropriateness of AI coaching:** Has the AI coach been tested with actual teens aged 14–15 who have no resume and no work history? The skill gap analysis presumes a baseline that first-time jobseekers don't have.
- **COPPA/VCDPA compliance:** The platform collects PII from minors (registration, resume data). Virginia VCDPA classifies known-child data as sensitive with new 2026 restrictions. No privacy architecture was discussed (`G1_risks_minor_data_privacy.md`).

---

## Gap Analysis by JTBD

### Job 1: Teen looking for a first job they're actually allowed to do
**Coverage: Partial — strong on preparation, weak on compliance and age-appropriate guidance**

What works:
- Opportunity discovery provides a browsable list of jobs, giving the teen a starting point.
- AI Coach skill/gap analysis is a differentiated feature — no other PS1 demo offers personalized readiness assessment against specific job requirements.
- Transportation routing (if functional) addresses the getting-there problem.
- ATS resume builder helps the teen produce a professional output.

What's missing:
- **No age-band awareness.** The demo does not differentiate between 14–15 and 16–17 year olds. Virginia youth employment law creates entirely different legal frameworks for these age bands — different hour caps, different permitted tasks, different work permit requirements. Showing a 14-year-old an opportunity requiring evening hours past 7 PM is not just unhelpful; it's a compliance gap.
- **No work permit guidance.** The three-party VAeECS process for 14–15-year-olds — the #2 pain point at Critical severity — is not mentioned. No document checklist, no permit workflow, no guardian consent guidance.
- **No document readiness.** Unlike RVA Works' document checklist per job, the Multi-Pillar platform does not surface what documents the teen needs (work permit, Virginia Child ID, birth certificate, SSN card) before they invest time in preparation.
- **AI Coach assumes existing skills/resume.** The primary user (14-year-old, first job) has no resume and no professional skills to analyze. The gap analysis feature is designed for someone further along in their career journey than the problem statement's target user.
- **No First Job Kit equivalent.** No message scripts, no "how to apply" guidance, no guardian signature explanation. The platform assumes the teen knows how to navigate the application process — the exact assumption the problem statement challenges.
- **No offline or SMS pathway.** Same digital access gap as other browser-based demos (`B5_users_digital_equity.md`).
- **No language support beyond English shown.**

**Gap fixable or fundamental?** Mixed. The AI coach and resume builder could be adapted for a zero-experience user, but this requires rethinking the UX for the "I have nothing" starting point rather than the "I have a resume" starting point. The age-band and compliance gaps are fixable additions. The depth-per-pillar tradeoff (building for all 7 pillars) structurally limits how deeply any single problem statement can be addressed.

### Job 2: Small business owner who wants to hire youth but fears getting it wrong
**Coverage: None**

What's missing:
- No employer-facing features were demonstrated. No employer account, no compliance checking, no job posting tools, no guidance on Virginia youth employment law.
- The platform is entirely candidate-facing for the Youth Employment module. Employers are invisible.

**Gap fixable or fundamental?** Fundamental to the current architecture. Adding an employer side would require building a separate module — a significant expansion for a platform already covering 7 pillars.

### Job 3: Workforce coordinator who can't see the whole picture
**Coverage: None**

What's missing:
- No coordinator, administrator, or provider dashboard.
- No cross-agency referral tracking.
- No outcome measurement.

**Gap fixable or fundamental?** Fundamental. Same as Job 2 — this represents a different product layer entirely.

---

## Opportunities

### Opportunity 1: AI Coach Reframed for First-Job Readiness
The AI Coach concept — personalized readiness assessment against a specific job — is genuinely useful but currently aimed at someone with existing skills and a resume. Reframing it for the zero-experience user could be high-value: instead of "gap analysis from your resume," the coach would ask "What are you good at? What do you like? How old are you?" and produce a personalized recommendation of which youth programs and job types are a fit. This is the NJ Career Navigator pattern adapted for teens (`E3_prior_art_workforce_navigators.md`).

**Dependencies:** Restructured intake flow that doesn't assume a resume; mapping of Richmond youth programs by eligibility (age, GPA, neighborhood, application window); validated question set for teens.

### Opportunity 2: Video AI Agent as Interview Practice
The real-time video conversation with the AI agent is technically impressive. Its highest-value application for a first-time teen jobseeker is not career coaching (which assumes context the teen doesn't have) but **mock interview practice**. A teen who has never been interviewed could practice with an AI agent before their first real interview. This addresses a real anxiety and is differentiated — no other PS1 demo or existing Richmond resource offers it.

**Dependencies:** Interview question bank calibrated for teen-appropriate roles (QSR, retail, recreation); feedback that is encouraging and specific; safeguards against the AI providing legally problematic guidance.

### Opportunity 3: Narrow to One Pillar for Depth
The platform's breadth (7 pillars) is its biggest liability for any single award category. For the Pillar Award specifically, judges evaluate "the best answer to that pillar's specific problem." A strategic pivot — deep investment in the Youth Employment module at the expense of the others — would produce a more competitive pillar entry. The AI Coach, resume builder, and video agent are strong technical primitives; they need Richmond-specific, teen-specific, compliance-aware context to become a strong Youth Employment answer.

**Dependencies:** Decision to prioritize depth over breadth; integration of Virginia youth employment law; age-band awareness; partnership with at least one Richmond youth program for validation.
