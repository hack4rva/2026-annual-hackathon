# Innovation Analysis: TradePath RVA

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** Aspiring tradespeople need another job board or training directory. They don't — the research shows the biggest friction point is the "last mile" to unions: navigating application windows, readiness gates (drug tests, driver's license, math requirements), and JATC-specific processes that no national site covers.

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Generic career exploration content | Apprenticeship.gov exists for national discovery. Lightcast Career Coach handles RIASEC assessments. Eliminate broad career exploration and focus narrowly on Richmond-area trades pathways with union-specific application details. |
| **Reduce** | Application surprise failures | Operating Engineers Local 12 accepts applications "online only" during tight, state-mandated windows on first-come, first-served basis. IBEW Local 5 requires a 3-day processing wait after account creation. Reduce surprise by surfacing every readiness gate (education, license, drug test, physical) *before* the application window opens. |
| **Raise** | Pre-apprenticeship visibility | The LA/OC Apprenticeship Readiness Fund placed 1,850+ individuals through 120 hours of Multi-Craft Core Curriculum (MC3) training. Worksystems Portland: 392 pre-apprentices, 25% transitioned to Registered Apprenticeships. Raise visibility of Richmond-area MC3 and pre-apprenticeship programs as the on-ramp to union careers. |
| **Create** | Application window alert system with readiness verification | No existing navigator combines: (a) real-time application window alerts for Richmond-area JATCs, (b) readiness self-assessment tied to each union's specific requirements, and (c) links to supportive services (GED programs, DMV assistance, childcare). Create this integrated pipeline. |

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **Richmond Trades Finder** — Filter by trade (electrician, plumber, HVAC, welder, carpenter), see: local union JATCs, pre-apprenticeship programs, wage ranges, and application status (open/closed/next window). | Standard |
| 2 | **Readiness Self-Assessment** — Before applying, user completes a 5-minute checklist: Do you have a GED? Valid driver's license? Passed algebra? Based on the specific union's requirements. System generates a personalized "ready/not ready" report with remediation links. | Standard |
| 3 | **Application Window Calendar + SMS Alerts** — Centralized calendar showing when each Richmond-area JATC opens applications. Sign up for SMS alerts 30/7/1 days before windows open. Operating Engineers OETT-style windows are easy to miss — this solves that. | Standard |
| 4 | **"What's the Real Cost?" Transparency Tool** — Show total investment for each trade path: training costs (often $0 for union apprenticeships), tool requirements, transportation, lost wages during pre-apprenticeship, and available financial aid. | Moderate |
| 5 | **Pre-Apprenticeship Cohort Launcher** — Instead of just listing programs, create a Richmond MC3-style cohort: 120 hours of multi-craft training with guaranteed referrals to local JATCs upon completion. LA/OC ARF model scaled to Richmond. | **Provocative** |
| 6 | **Mentor Match: Journeyworker to Apprentice** — Connect aspiring tradespeople with current Richmond journeyworkers for informal guidance. No tool does this — it's the human infrastructure that makes union entry less intimidating. | **Provocative** |
| 7 | **Supportive Services Hub** — Integrated directory of: childcare assistance (Houston's Gulf Coast WDB serves 29,955 families), transportation aid, GED programs, DMV assistance, and work gear grants. Linked to each trade pathway's specific requirements. | Moderate |
| 8 | **Employer Project Pipeline** — Show upcoming Richmond construction projects (from GeoHub or VCU construction plans) that will create apprenticeship demand. King County tracked 733,732 labor hours with 20.3% apprentice participation. Give aspiring trades workers visibility into where the work will be. | Moderate |

## 3. Rapid Design Sprint

**Problem sentence:** Richmond residents interested in skilled trades careers cannot easily find which local unions are accepting applications, what the specific readiness requirements are, which pre-apprenticeship programs exist, or what supportive services are available — forcing them to navigate a fragmented landscape of union websites, state agencies, and workforce programs.

**User journey (4 steps):**
1. User selects a trade interest (or "I'm not sure") → sees Richmond-area options with wage ranges and career progression
2. User selects a specific pathway → sees: union JATC details, application window status, readiness requirements checklist
3. User completes readiness self-assessment → system generates "ready" (link to apply) or "not yet ready" (personalized remediation plan with links to GED, DMV, math refresher programs)
4. User signs up for application window alerts and bookmarks supportive services (childcare, transportation, financial aid)

**Prototype shape:** Mobile-first web app. Home screen: trade selector (icons for each trade). Detail screen: union JATC info + readiness checklist + application window status. Alert signup form with phone number for SMS notifications.

**First test:** Partner with a Richmond workforce center or community college trades program. Present the prototype to 10 residents who have expressed interest in trades but haven't applied to any program. Ask: (a) "Is there a trade here you didn't know was accessible to you?" (b) "Did the readiness checklist change your timeline?" (c) "Would you sign up for application window alerts?"

## 4. Opportunity Mapper

### Opportunity 1: Trades Discovery and Application Pipeline
- **User:** Richmond residents (especially ages 18-35) interested in skilled trades but overwhelmed by the fragmented entry process
- **Outcome:** User identifies their best-fit trade pathway and is ready to apply when the next application window opens
- **Workflow:** Explore trades → assess readiness → address gaps → receive window alert → apply
- **Dependencies:** Richmond-area JATC application schedules (requires manual curation from union websites), pre-apprenticeship program listings, wage data (BLS OES)
- **Richmond relevance:** Richmond has active building trades unions and construction demand (VCU expansion, downtown development) but no centralized navigator. Hampton Roads, VA has an Apprenticeship Hub — Richmond does not.

### Opportunity 2: Pre-Apprenticeship Pipeline for Equity
- **User:** Underrepresented Richmond residents (women, people of color, formerly incarcerated) seeking trades careers
- **Outcome:** Structured on-ramp from "interested" to "apprenticeship-ready" with wraparound support
- **Workflow:** Readiness assessment → enroll in pre-apprenticeship (MC3 model) → complete training → referral to JATC
- **Dependencies:** Partnership with a training provider willing to run MC3 curriculum, funding (WIOA, DOL grants, philanthropic)
- **Richmond relevance:** King County achieved 43.5% minority participation (vs. 21% goal) and 21.2% women participation through dedicated pre-apprenticeship pipelines. Richmond has equity goals but no equivalent pipeline.

### Opportunity 3: Workforce-Construction Project Alignment
- **User:** Richmond economic development and workforce staff
- **Outcome:** Visibility into upcoming construction projects and their apprenticeship demand, enabling proactive training cohort planning
- **Workflow:** Map upcoming projects → estimate labor demand by trade → launch pre-apprenticeship cohorts 6 months ahead of project starts
- **Dependencies:** GeoHub or City planning data on upcoming construction projects, employer/contractor partnerships
- **Richmond relevance:** BuildLACCD's PLA model requires 35% local hire and 10% disadvantaged worker hire. If Richmond adopted similar requirements for public projects, this tool would be essential for compliance.

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Trades careers offer $50-80K+ wages without a 4-year degree. Removing discovery/navigation friction opens pathways for underemployed Richmond residents. |
| **Feasibility** | 3 | The core product is a curated directory + calendar + readiness assessment. Technically simple. The challenge is content curation: JATC application windows, requirements, and supportive services must be manually researched. |
| **Data readiness** | 2 | No API for JATC application windows. Union websites are inconsistent and often outdated. Wage data (BLS) is available. Pre-apprenticeship program data requires manual curation. |
| **Problem clarity** | 4 | Well-documented by ApprenticeshipPHL, LA/OC ARF, and multiple WDBs. The user need is clear; the research validates the friction points. |
| **Demo-ability** | 4 | A mobile-friendly trades finder with readiness checklists and application window alerts is intuitive and relevant. |
| **Total** | **17/25** | |

**Weekend MVP shapes:**
- **Shape A (8 hours):** Static directory of 5-8 Richmond-area trade pathways. Each listing includes: union JATC name, trade description, wage range, application status (open/closed/unknown), and direct contact info. Mobile-first layout.
- **Shape B (16 hours):** Add readiness self-assessment for each trade (checklist of requirements with pass/fail + remediation links). Add an SMS alert signup for application windows. Add wage progression visualization (apprentice → journeyworker → foreman).
- **Shape C (24 hours):** Add supportive services directory (childcare, transportation, GED). Add a "Trades Career Explorer" for undecided users (short quiz → trade recommendations). Add upcoming Richmond construction project visibility (if GeoHub data is available).

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation Method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Richmond-area JATC application schedules can be accurately curated and maintained | 5 | 4 | **20** | Visit the websites of 5 Richmond-area unions (IBEW, UA Plumbers, Carpenters, Operating Engineers, Sheet Metal Workers). Assess: Is application window info available? How often does it change? |
| 2 | A digital navigator moves residents from "interested" to "applying" (vs. just browsing) | 4 | 4 | **16** | The research shows conversion depends on the "last mile" to unions. San Diego Building Trades still relies on phone/email to individual coordinators. A digital tool may not overcome the relationship barrier. |
| 3 | Richmond has enough pre-apprenticeship programs to list (vs. a gap that the tool can't fill) | 4 | 4 | **16** | Research Richmond's pre-apprenticeship landscape: check Community College Workforce Alliance, Goodwill, YWCA, and local building trades council. |
| 4 | Aspiring tradespeople will use a web-based tool (vs. word-of-mouth, family connections, or walk-ins at union halls) | 3 | 3 | **9** | ApprenticeshipPHL and Detroit at Work both have web-based tools that are actively used. But these serve populations already connected to workforce systems. |
| 5 | Readiness self-assessment reduces application failures (not just discourages qualified applicants) | 3 | 3 | **9** | Design the assessment to be encouraging: "You're 80% ready. Here's what to work on." Not gatekeeping. |

**Top 3 to validate first:**
1. **Assumption 1 (R×U=20):** Can you get accurate application window data? This is the single most important content for the tool and the hardest to obtain. If union websites are stale or opaque, the tool's core value proposition collapses.
2. **Assumption 2 (R×U=16):** Does digital navigation convert? The San Diego Building Trades directory lists 23 unions, but applications still require calling or emailing individual coordinators during narrow windows. Digital tools may accelerate discovery but not conversion.
3. **Assumption 3 (R×U=16):** Does Richmond have pre-apprenticeship programs to list? If the pipeline doesn't exist locally, the tool can only point people to union applications without the equity on-ramp that LA/OC ARF and Worksystems Portland provide.

## Key Takeaway

TradePath RVA fills a real gap: Richmond has no centralized trades navigator, while Hampton Roads (VA), Philadelphia, LA, San Francisco, Detroit, and Houston all have some version. The research is clear that the highest-impact element is not a slick interface but *application window alerts and readiness preparation* — the "last mile" that existing national tools (Apprenticeship.gov) completely miss. Operating Engineers OETT opens applications only during tight, state-mandated windows on a first-come, first-served basis. Missing that window means waiting up to two years. The weekend build should obsess over content accuracy for Richmond-area JATCs: which unions, which trades, when do they accept applications, what do they require. A beautiful app with stale or incomplete union data is worse than useless — it erodes trust with a population that already feels excluded from trades careers. Validate assumption #1 on Friday afternoon before writing a single line of code.
