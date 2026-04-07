# JTBD Analysis — Youth Employment Pathways

**Pillar:** Thriving Families
**Problem Statement (verbatim):** Youth Employment Pathways — Give Richmond youth one clear place to explore summer jobs, internships, and first-job guidance.
**Applies to:** Unboxed RVA (Pillar Award Winner), RVA Works, Stepwise, Multi-Pillar AI Platform
**Research Date:** April 1, 2026

---

## Jobs To Be Done

### Job 1 — The Teen Looking for a First Job They're Actually Allowed to Do
> "When I (a Richmond teen aged 14–17) want to earn money and build experience but have no resume, no professional network, and no idea what jobs I'm legally allowed to do at my age, I want one place to find age-appropriate opportunities with clear guidance on what to do and what documents I need, so I can move from 'I want a job' to 'I started working' without depending on an adult who knows how the system works."

**Current workaround:** Ask family or friends if anyone is hiring. Google "jobs for 14 year olds in Richmond" and get results dominated by Richmond, California's YouthWORKS program (`C1_services_youth_workforce_programs.md`). Hear about the City's Youth Works RVA program through school or RRHA, but the application deadline has already passed. Try to figure out what a "work permit" is by reading the DOLI website, which explains a three-party electronic portal requiring the teen to already have a firm job offer before they can even apply (`D1_data_youth_labor.md`). Give up and wait for someone to hand them an opportunity.

**Pain:** Richmond's youth employment landscape is fragmented across the City's Office of Community Wealth Building (YES), CRWP/WIOA programs, RPS Work-Based Learning, Partnership for the Future, Boys & Girls Clubs, and Girls For A Change — each with different age bands, GPA requirements, application windows, and geographic eligibility (`C1_services_youth_workforce_programs.md`, `C2_services_workforce_landscape.md`). A 15-year-old in the East End has no single directory to determine which programs serve them. The work permit process for 14–15-year-olds requires a sequential three-party flow (Youth → Employer → Parent) through the Virginia Electronic Employment Certificate System, but the teen cannot start the process until they already have a firm job offer — creating a chicken-and-egg problem where employers hesitate to extend offers to minors they can't immediately onboard (`D1_data_youth_labor.md`, `A1_problem_landscape_youth_employment.md`). Missing identity documents (birth certificate, SSN card, Virginia Child ID at $10–$16) quietly kill otherwise-ready hires, and obtaining them requires in-person DMV visits with a parent present (`A1_problem_landscape_youth_employment.md`). For the 9.7% of Richmond residents without an internet subscription and the many teens relying on Richmond Public Library computers with 60-minute session limits and auto-erase policies, even completing an online application is structurally difficult (`B5_users_digital_equity.md`).

### Job 2 — The Small Business Owner Who Wants to Hire Youth but Fears Getting It Wrong
> "When I (a Richmond small business owner or nonprofit director) want to hire a teenager — for a summer position, a weekend shift, or a project-based gig — but don't understand Virginia youth employment law requirements around hours, permitted tasks, work permits, and parental consent, I need a compliance-safe, low-friction way to post and fill youth positions so I can get reliable help without risking DOLI inspections, fines, or accidentally scheduling a 15-year-old past 7 PM on a school night."

**Current workaround:** Call the Chamber of Commerce or hear about the Mayor's Youth Academy. Try to post on Indeed or Snagajob but have no way to signal "youth-friendly" or filter by age eligibility. Receive a Youth Works RVA applicant but struggle with the VAeECS portal — employers must register their intent to employ, specifying occupation and hours, then wait for the parent to complete their section and DOLI to review within 24 hours (`D1_data_youth_labor.md`). Meanwhile, the position sits unfilled. Some employers withdraw offers rather than navigate the process (`B2_users_employer.md`).

**Pain:** Virginia child labor law creates a dual-rule environment where both federal FLSA and state DOLI rules apply, and the stricter standard governs (`D1_data_youth_labor.md`, `B2_users_employer.md`). For 14–15-year-olds: maximum 3 hours per school day, 18 hours per school week, work only between 7 AM and 7 PM (extended to 9 PM June 1–Labor Day), with a mandatory 30-minute break after 5 continuous hours. Employers must retain time records showing start/end times and meal periods for 36 months, subject to unannounced DOLI inspections with civil penalties (`D1_data_youth_labor.md`). Prohibited tasks include meat slicers, bakery machines, power-driven equipment, warehouses, and construction — but the line between permitted and prohibited is specific enough (pool lifeguard at 15 is allowed; beach lifeguard is not) that small employers without HR departments reasonably fear violations (`B2_users_employer.md`). The employer engagement model is currently parallel but siloed: YES secures citywide partners for summer placements, CRWP runs OJT/WEX for WIOA participants, Project SEARCH cultivates healthcare partners — with no shared employer intake or single employer-facing portal (`C2_services_workforce_landscape.md`).

### Job 3 — The Workforce Coordinator Who Can't See the Whole Picture
> "When I (a Richmond workforce development staff member at OCWB, CRWP, RAA, RPS, or a community nonprofit like BGCMR or CIS) coordinate summer youth employment programs but rely on spreadsheets, word-of-mouth outreach, and manual matching — I want a shared platform that consolidates opportunities and tracks placements across the ecosystem, so I can route the right teen to the right program, reduce duplication, and actually measure whether we're reaching the youth who need it most."

**Current workaround:** Maintain separate intake lists in Excel or Google Sheets. Refer youth verbally to other programs when their own is full or age-inappropriate. Rely on the One-Stop Operator (Equus) for formal WIOA coordination, but no unified cross-system referral platform connects City YES programs, RPS Work-Based Learning, VCW Capital Region, and community nonprofits like BGCMR or CIS (`C2_services_workforce_landscape.md`). Track summer placements manually and report outcomes to different funders using different metrics. Lose visibility on youth who drop off between program referral and Day 1 start.

**Pain:** The system has strong programmatic pillars but no shared referral backbone. CRWP's ISY (in-school youth) contracts are awarded to Peace of Mind and Charles City County — not RPS — meaning Richmond Public Schools lack a formal, scaled in-school WIOA navigator presence (`C2_services_workforce_landscape.md`). Youth Works RVA is an 8-week seasonal program with high risk of post-summer churn; there is no structured "Summer Bridge" handoff to fall apprenticeships or WIOA WEX/OJT (`C2_services_workforce_landscape.md`). YES and CRWP both serve 18–24 out-of-school youth but have no formal co-enrollment protocol or shared data system (`C2_services_workforce_landscape.md`). CRWP youth "skills gained" metrics fell to 78% in FY24, and CRWP's FY26 proposed budget shows a 3% decrease — suggesting fragility in the funding base (`C2_services_workforce_landscape.md`). Staff cannot answer basic questions like "How many Richmond 14–15-year-olds applied to any youth employment program this year?" because no cross-agency data exists. The recruitment calendar is itself fragmented: GFAC secures its cohort in December–January, Youth Works RVA closes in March, PFF recruits freshmen in spring — each with different eligibility criteria and no shared timeline (`C1_services_youth_workforce_programs.md`).

---

## Open Questions

### Data Questions
1. What is the actual end-to-end completion time for the VAeECS work permit process in Richmond — from job offer to signed certificate — once employer and parent portal delays are included? DOLI states 24-hour review, but real-world cycle times are unknown (`D1_data_youth_labor.md`).
2. How many Richmond teens aged 14–17 applied to Youth Works RVA in 2025 and 2026? What was the acceptance rate, and what happened to applicants who were not placed?
3. Does the City of Richmond or CRWP maintain a machine-readable list of employer worksites that have previously hosted youth through YES or WIOA programs?
4. What percentage of Richmond employers who commonly hire teens (QSR, retail, recreation) participate in E-Verify, which would require minors to present a photo ID and block the parent-attestation I-9 workaround (`B1_users_youth_jobseeker.md`)?

### User Questions
5. How do Richmond teens currently discover youth employment programs — through school counselors, social media, family, community organizations, or something else? Is there any survey or intake data on discovery channels?
6. What is the dropout rate at each stage of the teen employment funnel — from application through permit, document gathering, transit planning, and Day 1 start? Where is the biggest single drop-off (`A1_problem_landscape_youth_employment.md`)?
7. What percentage of Richmond teens aged 14–15 possess a Virginia Child ID or other government-issued photo ID? How many lack the underlying vital records (birth certificate, SSN card) needed to obtain one (`A1_problem_landscape_youth_employment.md`)?
8. How do teens without strong adult support (foster youth, unaccompanied minors, teens with incarcerated or absent parents) currently navigate the work permit process, which requires parental/guardian consent?

### Integration Questions
9. Can the VAeECS portal be pre-populated or linked from an external tool, or must each party (youth, employer, parent) independently navigate to the DOLI site and enter data from scratch (`D1_data_youth_labor.md`)?
10. Is there an API or structured data feed for GRTC routes and schedules that a tool could use to compute "nearest bus stop" and "shift fit" for job placements, or must teams work from static GTFS ZIP files (`D5_data_grtc_transit.md`)?
11. Could a youth employment platform integrate with RPS student information systems to verify enrollment and enable work-training certificate eligibility, or would FERPA restrictions block this (`G1_risks_minor_data_privacy.md`)?
12. What is the technical path to connecting a youth-facing tool with the existing YES/OCWB intake process — is there an API, a shared form, or only manual referral?

### Equity Questions
13. Which Richmond census tracts have the highest concentration of youth NEET (Not in Employment, Education, or Training), and do those tracts overlap with the lowest broadband penetration and GRTC service gaps (`B5_users_digital_equity.md`)?
14. What languages beyond English and Spanish are most spoken by RPS families in neighborhoods with the highest youth unemployment? RPS reports 21.3% English Learners across 60+ languages, but the breakdown by neighborhood and age band is unpublished (`B5_users_digital_equity.md`).
15. Are youth with disabilities being served by any Richmond-specific Project SEARCH site, or are they routed to suburban sites in Henrico and Hanover? RPS lacks an explicit Project SEARCH partnership (`C2_services_workforce_landscape.md`).
16. How do Richmond's curfew enforcement patterns (11 PM–5 AM for under-18) intersect with late-shift youth employment — are teens of color disproportionately stopped while commuting from work (`D1_data_youth_labor.md`)?

### Prior Art Questions
17. What happened to previous attempts to centralize Richmond youth employment — was the "Mayor's Youth Academy" brand retired, and what is the lineage from that program to current YES branding (`C1_services_youth_workforce_programs.md`)?
18. Among the national prior art (Detroit GDYT, NYC SYEP, Boston SuccessLink), which tools successfully served the 14–15 age band with work-permit integration, and what was their permit completion rate (`E1_prior_art_youth_employment.md`)?
19. Has any city successfully built a compliance-safe, two-sided youth/employer matching platform that survived beyond a hackathon — and if so, what was the institutional ownership model (`E4_prior_art_failures.md`, `E5_prior_art_weekend_viable.md`)?
20. What specific features from existing workforce navigator models (NJ Career Navigator's ML matching, Washington's benefits navigator) could be adapted for a Richmond teen context without requiring enterprise infrastructure (`E3_prior_art_workforce_navigators.md`)?

---

## Answered Questions

Parallel AI research (`archive/reviews/thriving-families/_research-answers/`) was used to triage the open questions below. Verdicts reflect how fully the research answered each question from public sources.

| # | Question | Verdict | Key Finding |
|---|----------|---------|-------------|
| 1 | VAeECS end-to-end completion time (incl. employer/parent delays) | [Partial] | DOLI review is generally within ~24 hours after all three electronic sections submit; total time depends on how fast youth, employer, and parent act plus youth signing — real-world delay distribution not published (`ye_q1_system_data.md`). |
| 2 | Richmond 14–17 applicants to Youth Works RVA (2025–2026), acceptance rate, outcomes for non-placed | [Still Unknown] | No published applicant counts, acceptance rates, or 14–17 breakdown; 2026 partner messaging cites a **service target** of 750 youth (14–24), not applications (`ye_q1_system_data.md`). |
| 3 | Machine-readable list of employer worksites (YES/WIOA) | [Confirmed] | No public CSV/JSON (or similar) list on the City Open Data Portal or YES pages; Capital Region Workforce Partnership not found to publish one either (`ye_q1_system_data.md`). |
| 4 | Share of Richmond teen-hiring employers (QSR/retail/rec) on E-Verify | [Still Unknown] | No locality-level participation rate; USCIS offers per-employer lookup only, not Richmond aggregate (`ye_q1_system_data.md`). |
| 5 | How teens discover programs; survey/intake on channels | [Partial] | Documented channels: YES site, social media, virtual info sessions, community partners (e.g., RRHA); **no** public quantification of which channels dominate (`ye_q1_system_data.md`). |
| 6 | Stage-by-stage dropout in the teen employment funnel | [Still Unknown] | No published Richmond (or reviewed peer-city) stage attrition metrics on official program pages (`ye_q1_system_data.md`). |
| 7 | % of 14–15 with Virginia Child ID / govt photo ID; counts lacking vital records | [Still Unknown] | No Richmond- or Virginia-published statistic in DMV/VDH/RPS/City open materials reviewed (`ye_q2_equity.md`). |
| 8 | Foster / unaccompanied / absent-parent navigation of work permit consent | [Confirmed] | 14–15 certificates require parent/guardian/custodian permission; foster youth use LDSS/foster parent per custody order; **no** statutory alternative signer for unaccompanied minors — guardianship/court route typically needed first (`ye_q2_equity.md`). |
| 9 | VAeECS pre-population or deep links from external tools | [Confirmed] | VAeECS is a closed, sequential multi-party workflow; **no** API/deep-link pre-pop — external tools can only point users to DOLI to start manually (`ye_q2_equity.md`). |
| 10 | GRTC API vs static GTFS for routing / “nearest stop” | [Partial] | Public **static** GTFS (ZIP) available (e.g., via Transitland feed); **no** public real-time developer API identified; GRTC Bus Tracker exists as a consumer tool (`ye_q3_prior_art.md`). |
| 11 | FERPA / RPS SIS integration for enrollment or training eligibility | [Confirmed] | Integration **can** be permissible under FERPA’s **school official** exception if vendor is under district **direct control** via a written agreement limiting use/redisclosure (`ye_q3_prior_art.md`). |
| 12 | Technical path to YES/OCWB intake (API, shared form, manual referral) | [Still Unknown] | The three research memos do not document an API, shared form spec, or formal referral integration for YES/OCWB intake (`ye_q1_system_data.md`, `ye_q2_equity.md`, `ye_q3_prior_art.md`). |
| 13 | NEET tract “hot spots” vs broadband + GRTC service gaps | [Still Unknown] | No published Richmond tract-level NEET map; without that, no official overlap analysis — though DHCD “Commonwealth Connection” and GRTC maps/TSP support **infrastructure** gap mapping separately (`ye_q2_equity.md`). |
| 14 | Languages beyond English/Spanish by neighborhood for high youth unemployment areas | [Partial] | RPS: **21.3%** English Learners, **60+** languages; LIEP dashboard is school-level only — no public citywide ranked language list or neighborhood map on pages reviewed (`ye_q2_equity.md`). |
| 15 | Richmond-specific Project SEARCH vs suburban routing | [Confirmed] | **No** Project SEARCH site in Richmond city limits with RPS; metro hosts are Chesterfield, Henrico, Hanover hospital/school partnerships (`ye_q2_equity.md`). |
| 16 | Curfew (11 PM–5 AM) vs late-shift work; disparate stops | [Confirmed] | Ordinance **excepts** travel to/from work; **2018** RPD stop data (as reported): **98%** of curfew stops were Black youth — enforcement disparity documented (`ye_q2_equity.md`). |
| 17 | Mayor’s Youth Academy lineage to current YES branding | [Confirmed] | MYA rebranded to **Youth Engagement Services (YES)** under **Office of Community Wealth Building**; **Youth Works RVA** is the current summer program line (`ye_q3_prior_art.md`). |
| 18 | National prior art (GDYT, SYEP, SuccessLink) for 14–15 + permit **completion rates** | [Partial] | All three serve **14–15** (NYC via PBL track); **no** published permit-only completion rates; Boston policy brief cites up to **~15%** of **job-matched** youth failing onboarding, citing docs **including** work permits (`ye_q3_prior_art.md`). |
| 19 | Durable two-sided youth/employer matching platforms + ownership model | [Confirmed] | Sustained examples: **Baltimore YouthWorks** (city MOED), **Hire LA’s Youth** (city EWDD), **Philadelphia WorkReady** (nonprofit PYN intermediary) (`ye_q3_prior_art.md`). |
| 20 | Adaptable navigator features without enterprise infrastructure | [Confirmed] | NJ-style ML recommendations + training explorer can be lightweight (open data, simple matching); WA-style plain-language screeners, directories, referrals, **document checklists** map to teen workflows (permits, IDs, banking, transit) (`ye_q3_prior_art.md`). |

**Summary:** 9 Confirmed / 5 Partial / 6 Still Unknown out of 20 questions.

