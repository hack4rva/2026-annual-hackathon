# Gap Analysis — Unboxed RVA

**Pillar:** Thriving Families
**Problem Statement (verbatim):** "Youth Employment Pathways — Give Richmond youth one clear place to explore summer jobs, internships, and first-job guidance."
**Demo:** Unboxed RVA (Row 29) — Janna M. Joyner, Christina A. Tillery PhD, Shaunda Gary, Awura (17yo RPS student — platform builder)
**Award:** Thriving Families Pillar Award Winner
**Primary User:** Richmond youth aged 14–24 looking for paid work, and local small businesses looking for project-based help.
**Pain:** Richmond's youth employment landscape is fragmented across 7+ programs with different age bands, GPA requirements, application windows, and eligibility criteria. A 15-year-old has no single place to find what they qualify for. Meanwhile, small businesses that could use help have no easy way to find or safely hire teens.
**Desired Outcome:** A two-sided project marketplace where youth find paid, project-based gig work with local businesses — guided by an AI assistant (RIA) that makes both sides legible to each other.

---

## Problem Grounding

Unboxed RVA directly addresses PS1 (Youth Employment Pathways) but reframes the problem in a way the problem statement does not anticipate. The PS asks for "one clear place to explore summer jobs, internships, and first-job guidance." Unboxed skips the aggregation model entirely and proposes a **new category of work**: short-term, project-based gigs connecting youth to small businesses.

This is a genuinely novel framing. The prior art research (`E1_prior_art_youth_employment.md`) documents city-scale summer job portals (NYC SYEP, Detroit GDYT, Boston SuccessLink) and federal career exploration tools — all built around traditional employment structures. No prior art was found for a **project marketplace** model specifically targeting youth-to-SMB gig work. The closest analog is general freelance platforms (Upwork, Fiverr), none of which are designed for minors or have compliance guardrails.

The team's argument — that Gen Z is entering a gig-work economy and tools should reflect that reality — is substantively correct and well-supported by labor market trends (`A4_problem_landscape_workforce_pathways.md`). The question is whether the platform can deliver on that vision while navigating Virginia's youth labor law environment, which was designed for traditional employment relationships.

---

## Data Source Map

| Data Claim in Demo | Real or Synthetic? | Source | Owner | Access | Notes |
|---|---|---|---|---|---|
| Youth seeker profiles (name, birthday, email, address, school) | **Synthetic / demo data** | User-entered within platform | Unboxed RVA | Self-contained | No external data integration. PII collection from minors triggers COPPA/VCDPA obligations (`G1_risks_minor_data_privacy.md`). |
| Work categories (design, business support, coding, fashion, food) | **Team-defined taxonomy** | Internal to platform | Unboxed RVA | Self-contained | Not mapped to O*NET, BLS SOC codes, or VA DOLI permitted-task lists. Categories are intuitive but lack regulatory grounding. |
| Project briefs from businesses | **Synthetic / demo data** | Employer-entered, shaped by RIA | Unboxed RVA | Self-contained | RIA assists in making briefs youth-friendly. No validation against VA child labor permitted/prohibited task lists (`D1_data_youth_labor.md`). |
| RIA AI assistant | **Real (functional)** | AI layer built during hackathon | Unboxed RVA | Platform-internal | Guides both youth and employers through flows. No external data feeds — operates on platform context only. |
| GRTC transit integration | **Vision only** | Mentioned in pitch materials | GRTC / Transitland | GTFS static feed available | Listed in strategic plans produced during hackathon but not built into the platform (`D5_data_grtc_transit.md`). |

### Key Data Gaps

- **No Richmond labor market data integration.** The platform does not pull from O*NET, BLS, or Virginia Employment Commission data to inform work categories, wage benchmarks, or demand signals.
- **No VA labor law compliance engine.** RIA shapes briefs for youth-friendliness but does not check against DOLI permitted/prohibited task lists, age-specific hour restrictions, or work permit requirements (`D1_data_youth_labor.md`).
- **No VAeECS work permit integration.** The platform does not address the work permit chicken-and-egg problem — a critical barrier for 14–15-year-olds (`A1_problem_landscape_youth_employment.md`).
- **No existing program directory data.** The platform operates as a standalone marketplace and does not reference or route to existing programs (YES, CRWP, PFF, BGCMR, CIS) (`C1_services_youth_workforce_programs.md`).
- **No GRTC route data.** Transit-aware matching was envisioned but not implemented.

---

## Gap Analysis by JTBD

### Job 1: The Teen Looking for a First Job They're Actually Allowed to Do
**Coverage: Strong (discovery) / Weak (compliance)**

What works:
- The project-based model eliminates the biggest Job 1 friction: teens don't need a resume, professional network, or understanding of traditional job-search processes to get started
- Work category selection (design, coding, fashion, food, business support) maps to how teens actually think about their skills and interests — not SOC codes or industry classifications
- Parental consent is built directly into the onboarding flow, addressing a real structural barrier
- RIA provides confidence-building guidance through the process, reducing the "I don't know what to do" paralysis documented in pain point P1.1
- The profile captures informal experience ("helping family, posting online, volunteering, self-taught skills"), which is how most teens aged 14–17 actually accumulate capability

What's missing:
- **No age-aware compliance layer.** The platform does not differentiate between a 14-year-old and a 17-year-old, but Virginia law draws sharp lines: 14–15-year-olds face hour caps (3 hrs/school day, 18 hrs/school week), time-of-day restrictions (7 AM–7 PM school year, extended to 9 PM summer), and task prohibitions that 16–17-year-olds do not (`D1_data_youth_labor.md`). A project brief that's legal for a 17-year-old may be illegal for a 15-year-old.
- **No work permit workflow.** For 14–15-year-olds, Virginia requires an Employment Certificate before any work begins. The VAeECS three-party sequential flow (Youth → Employer → Parent) is not addressed (`A1_problem_landscape_youth_employment.md`, pain point P1.2).
- **No identity document guidance.** Missing IDs silently kill hires — a Virginia Child ID requires an in-person DMV visit with a parent, $10–$16, and underlying vital records. The platform does not surface this requirement or help navigate it (pain point P1.3).
- **No transit layer.** Teens in the East End or Southside face long commutes to business districts. Without GRTC route integration, teens may accept projects they physically cannot reach (pain point P1.5).
- **No connection to existing programs.** A 15-year-old who would be better served by Youth Works RVA or Partnership for the Future has no way to discover those options through the platform. Unboxed is additive but not connective.

**Gap fixable or fundamental?** Fixable. The marketplace architecture is sound. Adding an age-aware compliance check (RIA could flag prohibited tasks based on birthday), work permit guidance flow, and a "you may also qualify for" referral sidebar to existing programs are all engineering additions that don't require rearchitecting the platform.

### Job 2: The Small Business Owner Who Wants to Hire Youth but Fears Getting It Wrong
**Coverage: Strong (brief creation) / Weak (compliance safety)**

What works:
- RIA shaping project briefs to be youth-friendly is the single most valuable employer-side feature — it directly addresses pain point P2.1 (dual-rule compliance complexity deters hiring) by abstracting complexity behind a guided flow
- The project-based model sidesteps some traditional employment friction: short-term gigs with defined deliverables are simpler to scope than ongoing employment
- Employer-side flow (describe need → RIA shapes brief → define tools/skills/pay → post → review profiles → schedule intro → completion feedback) is clear and well-sequenced

What's missing:
- **RIA does not check VA labor law compliance.** It makes briefs "youth-friendly" in tone and scope, but does not validate against DOLI permitted/prohibited task lists. A brief asking a 15-year-old to use power-driven equipment, work past 7 PM on a school night, or work more than 3 hours on a school day would pass through unchecked (`D1_data_youth_labor.md`, pain point P2.1).
- **No employer verification.** The platform does not verify that a business is real, licensed, or safe for minors. There is no background check, business license verification, or safe-workplace attestation.
- **No scheduling guardrails.** Employers set project timelines and hours without automated checks against age-specific hour caps and time-of-day restrictions. This is the top compliance risk for youth employment (pain point P2.4).
- **No work permit facilitation.** Employers must independently navigate the VAeECS portal. Small businesses that have never hired a minor will hit the same friction documented in pain point P2.2, and some will withdraw rather than figure it out.
- **Employment classification ambiguity.** "Project-based gig work" for minors sits in a gray zone. Is the youth an employee or an independent contractor? Virginia law and federal FLSA have different implications for each. The platform does not address this.

**Gap fixable or fundamental?** Mostly fixable, but the employment classification question is structural. Adding a compliance check to RIA's brief-shaping flow (reject prohibited tasks, flag hour restrictions, warn on classification) is achievable. The employer verification question requires a policy decision about platform liability.

### Job 3: The Workforce Coordinator Who Can't See the Whole Picture
**Coverage: Not addressed**

Unboxed RVA is a standalone marketplace. It does not connect to, refer into, or share data with the existing Richmond youth employment ecosystem (YES, CRWP, RPS Work-Based Learning, BGCMR, CIS, PFF). This is a deliberate design choice — the team built a new channel, not a coordination layer.

This means:
- Workforce coordinators cannot see Unboxed placements alongside YES or CRWP placements
- There is no referral pathway from Unboxed to existing programs (or vice versa)
- Youth who would be better served by a structured program (especially foster youth, youth with disabilities, or youth needing ID/document support) have no way to be routed there
- The cross-agency data gap documented in pain point P3.1 remains fully intact

**Gap fixable or fundamental?** Fixable but not within the current design intent. Adding an HSDS-compatible program directory or a referral API would make Unboxed a connector rather than just a marketplace. This would require partnership with OCWB/YES, which was not pursued during the hackathon.

---

## Opportunities

### Opportunity 1: Add a Compliance Layer to RIA

RIA already shapes project briefs for youth-friendliness. Extending it to check VA labor law compliance would make Unboxed the first youth employment platform with built-in regulatory guardrails — a capability that no prior art implementation has achieved at city scale (`E1_prior_art_youth_employment.md`). Concretely: RIA ingests the seeker's birthday, cross-references against DOLI permitted/prohibited task lists and hour restrictions, and flags or blocks non-compliant project parameters before a brief goes live. This transforms compliance from an employer burden into a platform feature.

**Dependencies:** Structured encoding of VA child labor law rules (permitted tasks, hour caps, time-of-day restrictions by age band). DOLI does not publish a machine-readable ruleset, so this requires manual encoding and legal review.

### Opportunity 2: Bridge to Existing Programs via "You May Also Qualify"

Unboxed creates a new gig-work channel but doesn't replace the need for structured programs. A lightweight integration — a sidebar or RIA prompt that says "Based on your age and interests, you may also qualify for Youth Works RVA (summer, paid, ages 14–24) or Partnership for the Future (multi-year internship, 3.0 GPA, grade 9)" — would make Unboxed a front door to the entire ecosystem rather than a parallel silo. This directly addresses the "single front door" gap identified as the #1 takeaway in the prior art research.

**Dependencies:** Curated list of Richmond youth employment programs with eligibility criteria (age, GPA, geography, application window). The data exists in `C1_services_youth_workforce_programs.md` and could seed a static directory.

### Opportunity 3: GRTC Transit Layer for Project Matching

The team already envisioned GRTC integration. GRTC's zero-fare policy eliminates cost as a barrier, but route alignment remains a constraint. A "can I get there?" check using GTFS static data (`D5_data_grtc_transit.md`) — computing nearest bus stop and estimated travel time from the seeker's ZIP to the project site — would prevent teens from accepting projects they can't physically reach. The Pulse BRT corridor should be prioritized as the highest-reliability transit axis for matching.

**Dependencies:** GRTC GTFS feed (available via Transitland); GeoPandas `sjoin_nearest` for proximity computation; employer location data (currently not collected in a structured format).

### Opportunity 4: Payment and Employment Classification Framework

The project-based gig model for minors needs a clear answer to: who is the employer of record? Options include (a) the business pays the youth directly as a 1099 contractor (legally questionable for minors under FLSA), (b) the business pays through Unboxed as a fiscal intermediary (requires entity structure and insurance), or (c) the model mirrors Youth Works RVA where the City is employer of record (requires City partnership). Resolving this unlocks the entire payment flow.

**Dependencies:** Legal guidance on minor employment classification in Virginia; potential partnership with OCWB/YES for employer-of-record structure; payment processing that complies with minor banking regulations.

---
