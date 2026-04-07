# Innovation Analysis: Career Bridge

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** Job seekers need a better job board. They don't — the Abt Associates meta-analysis of 46 career pathway evaluations found that digital navigation tools produce *small gains* in short-term earnings and *no meaningful gains* in medium/longer-term earnings without deep employer-tethered training programs. Technology alone doesn't lift wages.

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Generic job listings | Every existing platform (Indeed, LinkedIn, Virginia Workforce Connection) already aggregates job postings. Eliminate the job board and focus on what they *don't* do: connect skills to training pathways to specific Richmond employers. |
| **Reduce** | Assessment friction | Many platforms (Lightcast Career Coach, MassHire CIS 360) front-load lengthy RIASEC assessments. Reduce the intake to 3-5 questions that map to Richmond's high-demand sectors, then progressively deepen over time. |
| **Raise** | Employer commitment visibility | NYC's Workforce1 sector-focused centers with training achieved $22,726 average earnings vs. $15,128 for general centers. The difference is employer commitment. Raise the visibility of which Richmond employers have actual hiring commitments tied to training programs. |
| **Create** | Training-to-wage-gain pipeline tracker | No city platform currently shows users "If you complete X training, average wage gain is Y." NYC tracks this ($3,286/year average for customized training participants). Create a transparent outcomes layer that shows historical wage gains by training program and sector. |

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **Skills-to-Sector Mapper** — User enters current job title/skills; system maps them to Richmond's high-demand sectors and shows training gap + estimated time/cost to bridge. | Standard |
| 2 | **"What's the Lift?" Calculator** — For each career pathway, show: current median wage → target wage after training → net annual gain → payback period for training investment. | Standard |
| 3 | **Employer Commitment Board** — Public dashboard showing which Richmond employers have signed hiring commitments with workforce programs. Birmingham/UAB Medicine model: real jobs tied to real training. | Moderate |
| 4 | **100-Hour Externship Finder** — Birmingham's partnership with UAB includes 100-hour externships. Create a Richmond version: match job seekers to local employers offering short externships in their target sector. | Moderate |
| 5 | **"Career Adjacent" Explorer** — Instead of matching skills to jobs, show users careers that are one skill away from their current role. "You're a medical assistant making $32K; with a phlebotomy cert ($500, 4 weeks), you qualify for lab tech roles at $45K." | **Provocative** |
| 6 | **Wraparound Services Integrator** — Houston's Gulf Coast WDB assists 239,097 individuals and provides childcare to 29,955 families. Build a Richmond version: surface childcare, transportation, and financial aid alongside every training program listing. | Moderate |
| 7 | **Training Program Outcome Scorecards** — For each listed training program, show audited outcomes: completion rate, job placement rate, 90-day retention, median wage gain. Based on WIOA Q2/Q4 retention metrics. | **Provocative** |
| 8 | **Cohort Countdown** — Show upcoming training program start dates with registration deadlines and remaining spots. Create urgency and reduce the "I'll do it someday" barrier. | Standard |

## 3. Rapid Design Sprint

**Problem sentence:** Richmond residents who want to transition to higher-paying careers cannot easily discover which training programs lead to actual jobs, which employers are hiring, and what wage gain to expect — forcing them to navigate fragmented workforce systems or rely on word-of-mouth.

**User journey (4 steps):**
1. User enters current role/skills and target career interest (or "I don't know yet")
2. System shows 3-5 career pathways in Richmond with: target roles, wage ranges, required training, estimated timeline
3. User selects a pathway → sees: specific training programs, employer hiring commitments, wraparound services (childcare, transportation), and historical outcomes (placement rate, wage gain)
4. User registers for a program or books a career counseling appointment

**Prototype shape:** Card-based pathway explorer. Each card = one career pathway showing: entry wage → target wage, training programs available, employers hiring, and a "Start This Path" CTA that links to program registration or counselor booking.

**First test:** Present 5 pathway cards to 10 underemployed Richmond residents at a workforce center. Ask: (a) "Which pathway interests you most and why?" (b) "Does the wage/timeline information change your thinking?" (c) "Would you take the next step today?" Measure intent-to-act.

## 4. Opportunity Mapper

### Opportunity 1: Skills-Based Career Navigation
- **User:** Underemployed Richmond residents seeking higher-wage careers
- **Outcome:** User identifies a viable career pathway with clear training, employer, and wage information in a single session
- **Workflow:** Enter skills → see matching pathways → compare wage gains → explore training options → register or book counseling
- **Dependencies:** Richmond labor market data (BLS, Virginia Employment Commission), training program directory, employer partnerships
- **Richmond relevance:** Richmond's Capital Region Workforce Partnership exists but lacks a public-facing navigation tool comparable to NYC's Training Guide or Detroit at Work.

### Opportunity 2: Training Program Accountability Dashboard
- **User:** Workforce development staff, funders, policymakers
- **Outcome:** Transparent outcomes data for every publicly funded training program in Richmond
- **Workflow:** View program scorecards → compare completion/placement/retention/wage metrics → allocate funding to highest-performing programs
- **Dependencies:** WIOA performance data (PIRL), UI wage records via SWIS data sharing agreement
- **Richmond relevance:** NYC publishes Common Metrics for Workforce Development. Chicago Cook WDB published ROI of up to 910% for sector programs. Richmond publishes no equivalent public outcomes data.

### Opportunity 3: Employer-Driven Pathway Co-Design
- **User:** Richmond employers in high-demand sectors (healthcare, IT, skilled trades)
- **Outcome:** Employers get pre-qualified candidates who have completed aligned training; reduced hiring costs
- **Workflow:** Employer posts hiring commitments → training programs align curriculum → candidates complete training → employer hires
- **Dependencies:** Employer partnership agreements (MOUs), training provider coordination
- **Richmond relevance:** Birmingham's Guild + UAB Medicine model showed that employer-tethered training converts: previously rejected applicants found pathways to employment through a Certified Medical Assistant program.

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Career navigation with employer-tethered training drives real wage gains (NYC: $22,726 vs. $15,128 for general centers). |
| **Feasibility** | 2 | A meaningful prototype requires actual training program data, employer commitments, and wage outcome data — none of which are available as structured APIs. |
| **Data readiness** | 2 | BLS sector data is public but coarse. Richmond-specific training program outcomes aren't published. WIOA data requires data sharing agreements. |
| **Problem clarity** | 4 | Well-documented by Abt Associates meta-analysis. The user need is clear; the solution complexity is high. |
| **Demo-ability** | 4 | Career pathway cards with wage projections are visually compelling and emotionally resonant. |
| **Total** | **16/25** | |

**Weekend MVP shapes:**
- **Shape A (8 hours):** Static career pathway cards for 5 Richmond high-demand sectors. Each card shows: entry roles, target roles, wage range (from BLS), training programs (manually curated), and one employer example. No dynamic matching.
- **Shape B (16 hours):** Add a skills-to-pathway matching quiz. User answers 5 questions → system recommends 2-3 pathways with personalized "time to target wage" estimates.
- **Shape C (24 hours):** Add a wraparound services directory (childcare, transportation, financial aid) and a "book a career counselor" integration with Richmond's workforce center.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation Method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Richmond has enough structured training programs tied to employment outcomes to populate meaningful pathway cards | 5 | 4 | **20** | Contact Capital Region Workforce Partnership and WIOA provider list for Richmond; count programs with published outcomes |
| 2 | Digital career navigation moves users to action (not just browsing) without human coaching | 4 | 4 | **16** | Abt meta-analysis says tech alone produces small earnings gains. NYC evidence shows sector-focused centers + training drive outcomes. A tool without counselor integration may not convert. |
| 3 | Richmond employers will provide hiring commitments visible on a public platform | 4 | 4 | **16** | Birmingham/UAB Medicine did it, but that was a mayoral initiative with Guild. Without executive sponsorship, employer commitments are hard to secure in a weekend. |
| 4 | Wage projection estimates are accurate enough to be trustworthy | 3 | 3 | **9** | Use BLS OES data for Richmond MSA; these are well-established and defensible |
| 5 | The tool reaches people who need it (underemployed populations often have limited digital access) | 4 | 3 | **12** | Design for mobile-first; partner with workforce centers for in-person distribution |

**Top 3 to validate first:**
1. **Assumption 1 (R×U=20):** Does Richmond have enough training-to-employment programs to populate the tool? If the training landscape is sparse, the tool is a beautiful interface over empty content.
2. **Assumption 2 (R×U=16):** Does digital navigation convert to action? The Abt meta-analysis is sobering: 46 evaluations show small short-term earnings gains from pathways overall. NYC's success required physical sector centers + funded training, not just a website.
3. **Assumption 3 (R×U=16):** Will employers participate? Without real hiring commitments, the pathway cards are aspirational, not actionable — and the demo loses its punch.

## Key Takeaway

Career Bridge addresses a real and well-documented problem, but the research delivers a humbling message: the Abt Associates meta-analysis of 46 career pathway evaluations found no meaningful medium-term earnings gains from navigation alone. NYC's Workforce1 achieved $22,726 average earnings only when combining sector-focused centers with funded training. Birmingham's success required employer co-design (UAB Medicine's 100-hour externships). The weekend build should resist the temptation to build a feature-rich platform and instead focus on one thing: demonstrating a single, credible career pathway for one Richmond high-demand sector (healthcare or IT) with real training programs, real wage data, and ideally one real employer commitment. A narrow, authentic prototype beats a broad, hollow one.
