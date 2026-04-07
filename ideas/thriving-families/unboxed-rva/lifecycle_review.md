# Lifecycle Review — Unboxed RVA

**Pillar:** Thriving Families
**Problem Statement:** Youth Employment Pathways — Give Richmond youth one clear place to explore summer jobs, internships, and first-job guidance.
**Demo:** Unboxed RVA (Row 29) — Janna M. Joyner, Christina A. Tillery PhD, Shaunda Gary, Awura (17yo RPS student — platform builder)
**Award:** Thriving Families Pillar Award Winner
**Review Date:** April 1, 2026

---

## Rubric Checklist

| Category | Score Direction | Rationale |
|----------|----------------|-----------|
| **Impact** | High | Directly addresses PS1. Novel reframing: project-based gig work instead of traditional internship aggregation. Creates a new channel for youth employment that did not previously exist in Richmond. |
| **Feasibility** | Medium | The marketplace UX is polished and functional. However, deploying in production requires resolving employer verification, minor data privacy (COPPA/VCDPA), VA labor law compliance, payment processing for minors, and employment classification — none of which are trivial. |
| **User Value** | High | Both sides of the marketplace are served with clear, complete flows. Youth get discovery, guidance (RIA), scheduling, onboarding, progress tracking, and completion recognition. Employers get brief shaping, candidate surfacing, and structured feedback. Few hackathon demos serve two user types this thoroughly. |
| **Execution** | Excellent | Full two-sided platform with both youth and employer flows built in 48 hours. Functional AI assistant (RIA) for both sides. Research briefs, journey maps, visual identity, brand voice, user personas, and strategic partnership plans also produced. The team included a 17-year-old RPS student (Awura) who built the platform — itself a proof of concept for the problem being solved. |
| **Innovation** | High | The project-based gig model for youth is genuinely novel. Prior art research found no comparable platform targeting youth-to-SMB project work (`E1_prior_art_youth_employment.md`). The reframing — "projects, not internships" — is substantive, not cosmetic. It reflects a real shift in how Gen Z relates to work and creates a category that existing programs (YES, CRWP, PFF) do not fill. |
| **Equity & Inclusion** | Strong | Parental consent built into onboarding. Youth-centered design language. Informal experience recognized (helping family, posting online, volunteering). Work categories mapped to how teens think, not SOC codes. Team composition itself embodies the value proposition — Awura's story (heard "hackathon" in a webinar → Googled it → showed up → built the platform) is the demo's most powerful equity argument. |

---

## What the Demo Does Well

**1. Reframes the problem instead of just answering it.**
The PS asks for "one clear place to explore summer jobs, internships, and first-job guidance." Most teams would build a directory or aggregator. Unboxed instead asks: what if the work itself looked different? Project-based gigs are shorter, more flexible, and better aligned with how young people actually build skills. This is a category-creation move, not an aggregation move.

**2. Serves both sides of the marketplace with real UX.**
The youth flow (profile → parental consent → work categories → experience → browse projects → connect call → onboarding → dashboard → completion) and the employer flow (describe need → RIA shapes brief → define parameters → post → review candidates → intro → feedback) are both demonstrated end-to-end. Most hackathon demos show one user's perspective and hand-wave the other.

**3. RIA functions as a translation layer, not just a chatbot.**
RIA's most valuable role is bridging the language and expectation gap between businesses and teens. Employers describe what they need in business terms; RIA translates it into a youth-friendly brief. Youth describe their interests informally; RIA helps frame them as capabilities. This bidirectional translation is the platform's core differentiator.

**4. Team composition is the demo.**
A team of three experienced professionals (strategy, education, market research) and a 17-year-old RPS student who discovered hackathons via Google, asked her mom's permission, showed up, and built the platform. The team didn't just design for youth — they built with one. This gives Unboxed credibility that no amount of user research could replicate.

**5. Built at a remarkable pace.**
48-hour build with no dedicated coder at the start. Beyond the functional platform: research briefs, journey maps, visual identity, brand voice, user personas, strategic partnership plans, and a GRTC integration vision. The output-to-time ratio is among the highest at the hackathon.

---

## What Was Fundamentally Missed

**1. Virginia labor law compliance is absent.**
RIA makes briefs "youth-friendly" in tone, but performs no check against VA DOLI permitted/prohibited task lists, age-specific hour restrictions (3 hrs/school day for 14–15; 7 AM–7 PM school year), or mandatory break rules. A 15-year-old could be matched to a project involving prohibited equipment or scheduled past legal hours without the platform flagging it. This is the single biggest gap between the demo and a deployable product (`D1_data_youth_labor.md`, pain points P2.1, P2.4).

**2. VAeECS work permit integration is not addressed.**
For 14–15-year-olds, Virginia requires an Employment Certificate before any work begins. The three-party sequential flow (Youth → Employer → Parent) through the VAeECS portal is a documented barrier that causes offer withdrawals. Unboxed does not guide users through this process, link to the portal, or pre-populate any fields. The work permit chicken-and-egg problem (pain point P1.2) remains fully intact.

**3. GRTC transit awareness is vision-only.**
The team identified GRTC integration as a need and listed it in their strategic plans, but did not build it. Without a "can I get there?" check, teens may accept projects they cannot physically reach — particularly East End and Southside youth commuting to business districts. GTFS data is freely available and GeoPandas proximity computation is achievable in hours (`D5_data_grtc_transit.md`).

**4. No connection to the existing workforce ecosystem.**
Unboxed operates as a standalone marketplace. It does not reference, link to, or interoperate with Youth Works RVA, Partnership for the Future, BGCMR, CIS, CRWP, or RPS Work-Based Learning. A 15-year-old who would be better served by YES's structured summer program — or who needs the document support, DMV pop-ups, and employer-of-record structure that YES provides — has no way to discover those options through Unboxed. The "single front door" problem identified as the #1 gap in prior art research (`E1_prior_art_youth_employment.md`) is partially addressed (Unboxed is a front door to gig work) but not resolved (it's a new silo, not a connector).

**5. Employment classification is undefined.**
"Project-based gig work" for minors raises a question the platform does not answer: is the youth an employee or an independent contractor? Under FLSA, minors working for a for-profit business are generally employees regardless of how the arrangement is labeled. If the youth is an employee, the business must comply with minimum wage, hour restrictions, work permit requirements, workers' compensation, and tax withholding. If the platform facilitates arrangements that are structured as independent contracting but legally constitute employment, both the business and the platform face liability.

---

## Blockers

| Blocker | Severity | Specific Ask |
|---------|----------|--------------|
| **No VA labor law compliance engine** | **Critical** | Encode DOLI permitted/prohibited task lists and age-specific hour/time-of-day rules into RIA's brief-shaping flow. At minimum: reject prohibited tasks for the seeker's age band, flag hour cap violations, and warn on time-of-day restrictions. Requires legal review of the encoded rules. |
| **Employment classification ambiguity** | **Critical** | Obtain legal guidance on whether project-based youth gig work constitutes employment or independent contracting under Virginia law and federal FLSA. The answer determines payment structure, tax obligations, insurance requirements, and platform liability. |
| **Employer verification** | **High** | Define what "verified employer" means on the platform. Options: business license check via Virginia SCC, Safe Place certification, background check for primary contact, or attestation-only with post-engagement review. Minors working at unverified business locations is a safety and liability risk. |
| **Minor data privacy compliance** | **High** | The platform collects name, birthday, email, home address, and school from minors. This triggers COPPA obligations if any user is under 13 (birthday field enables this), and Virginia VCDPA classifies known-child data and precise geolocation as sensitive. A privacy impact assessment, data minimization review, and parental consent mechanism that meets COPPA's "verifiable parental consent" standard are required (`G1_risks_minor_data_privacy.md`). |
| **Payment processing for minors** | **High** | Most payment platforms (Stripe, PayPal, Venmo) require users to be 18+. How does a minor get paid for completed project work? Options: direct payment from business to youth (platform is just a connector), fiscal intermediary model (Unboxed processes payments), or employer-of-record model (partnership with OCWB/YES). Each has different legal and operational implications. |
| **No work permit workflow** | **Medium** | Build a guided flow within the platform that walks 14–15-year-olds and their employers through the VAeECS process: explain the requirement, link to the portal, describe the three-party sequence, and track completion status before the project can begin. |

---

## Recommended Next Steps (Priority Order)

1. **Resolve employment classification.** This is the threshold legal question. Consult with a Virginia employment attorney on whether project-based youth gig work constitutes employment under FLSA and Virginia law. The answer shapes everything downstream: payment, compliance, insurance, and platform liability. Do this before writing any more code.

2. **Encode VA labor law into RIA.** Build a compliance layer that cross-references the seeker's age against DOLI rules when a project brief is created or a match is proposed. Start with the bright-line rules: permitted/prohibited tasks by age, hour caps, time-of-day restrictions. This transforms RIA from a tone-shaping tool into a compliance-safe matching engine — a capability no existing youth employment platform offers.

3. **Design the employer verification flow.** Define minimum requirements for a business to post projects involving minors. At minimum: Virginia SCC business registration check, primary contact identity verification, and a safe-workplace attestation. Consider partnering with the Richmond Chamber of Commerce or ChamberRVA, which already maintain business directories.

4. **Conduct a minor data privacy assessment.** Map every data element collected from youth against COPPA, FERPA (if school data is referenced), and Virginia VCDPA requirements. Implement data minimization: does the platform need home address, or is ZIP code sufficient? Does it need exact birthday, or just age band? Move to local-device storage for non-essential data.

5. **Build the work permit guidance flow.** For seekers aged 14–15, surface the VAeECS requirement before any project can begin. Walk both the youth and the employer through the three-party process. Track permit status within the platform so neither side is confused about why onboarding is paused.

6. **Add "You May Also Qualify" referrals.** Integrate a lightweight program directory (seeded from `C1_services_youth_workforce_programs.md`) that surfaces existing programs based on the seeker's age, interests, and location. This makes Unboxed a front door to the ecosystem, not just a standalone marketplace. Immediate candidates: Youth Works RVA, Partnership for the Future, Girls For A Change, BGCMR Teen Center.

7. **Implement GRTC transit check.** Use the GTFS static feed to compute travel time from the seeker's ZIP to the project site. Surface this during project browsing ("25 min by bus from your area" or "no direct bus route — consider projects closer to the Pulse corridor"). This prevents stranded-worker risk and is an equity requirement for East End and Southside youth.

8. **Identify an institutional owner.** The prior art is clear: hackathon prototypes without a City department champion die within months (`E4_prior_art_failures.md`). OCWB/YES is the natural home — they already operate Youth Works RVA, handle payroll for youth, and host DMV pop-up events for ID access. A conversation with OCWB about whether Unboxed could complement (not replace) the YES program should happen before any production build.

---
