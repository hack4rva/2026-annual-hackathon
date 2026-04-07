# Innovation Analysis: Vendor Onboarding Wizard

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** Vendor onboarding friction is a technology problem. It isn't — it's a process fragmentation problem across federal (SAM.gov), state (eVA), and local layers. No single wizard can fix what is fundamentally a multi-jurisdiction gauntlet.

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Duplicate data entry across jurisdictions | NYC PASSPort, Virginia eVA, and SAM.gov each require separate registrations with overlapping fields (EIN, NAICS, address). Eliminate re-entry by pre-populating from the first completed registration. LA's RAMPLA uses "Angeleno Account" SSO — apply the same principle across levels. |
| **Reduce** | Document ambiguity | SAM.gov's CAGE code assignment takes 10 business days and is the #1 stall point. IBEW Local 5 requires a 3-day processing wait after account creation. Reduce ambiguity by showing exactly which documents are needed at each stage and estimated wait times. |
| **Raise** | Status visibility | NYC PASSPort uses Draft/Ready to Submit/Filed visual cues and cut filing time from a month to a day. Raise this pattern for the full multi-jurisdiction journey — show vendors exactly where they are across all three registration processes simultaneously. |
| **Create** | "Registration readiness score" | No existing tool tells a vendor "you are 60% ready to bid on City contracts." Create a checklist-based readiness score that accounts for SAM.gov status, eVA enrollment, City vendor registration, and any required certifications. |

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **Multi-Jurisdiction Progress Tracker** — Single dashboard showing SAM.gov, eVA, and Richmond registration status with completion percentages and next-action prompts. | Standard |
| 2 | **Document Packet Pre-Builder** — Vendor enters EIN + business type; system generates a downloadable folder with pre-filled forms for all three jurisdictions, plus a checklist of supporting documents. | Standard |
| 3 | **APEX Accelerator Booking Integration** — Embed APEX Accelerator clinic scheduling directly into the wizard. APEX delivered 6,284 training events and drove 549,519 contracts nationally. | Moderate |
| 4 | **"What Can I Bid On Right Now?" Filter** — Instead of completing all registrations first, show vendors which opportunities they're *already* eligible for based on their current registration status. | Moderate |
| 5 | **AI Registration Concierge** — Chatbot that walks vendors through SAM.gov's Entity Registration Checklist step-by-step, pre-validating TIN/EIN against IRS databases before submission to avoid the #1 rejection cause. | **Provocative** |
| 6 | **Peer Vendor Onboarding Stories** — Short video testimonials from Richmond MBEs who completed the process, with time estimates and tips. Austin SMBR's monthly workshops work because humans trust humans. | Standard |
| 7 | **"Onboarding Sprint" Cohort Model** — Weekly group onboarding sessions where 10 vendors go through the entire process together with a facilitator. Miami-Dade eliminated 2-day certification meetings; this collapses them into focused 2-hour sprints. | **Provocative** |
| 8 | **Vendor Completion Leaderboard** — Anonymized dashboard showing: "This month, 23 Richmond businesses completed full vendor registration. Average time: 4.2 days." Social proof + accountability. | Moderate |

## 3. Rapid Design Sprint

**Problem sentence:** First-time Richmond vendors face a fragmented registration process spanning SAM.gov, Virginia eVA, and City systems, with no unified guide, causing weeks of delays and high abandonment — especially among MBEs who lack dedicated compliance staff.

**User journey (4 steps):**
1. Vendor arrives → answers 5 questions (business type, NAICS, certifications held, federal/state/local goals)
2. System generates a personalized registration roadmap: which systems to register in, in what order, with document requirements
3. Vendor works through each step → status tracker shows progress across all jurisdictions
4. Upon completion, vendor receives a "ready to bid" confirmation with immediate links to relevant open solicitations

**Prototype shape:** Multi-step web form (React or similar) generating a personalized PDF roadmap + interactive checklist. Status tracking via simple database (no real integrations for weekend build — simulated status).

**First test:** Run 3 MBE vendors through the prototype roadmap side-by-side with the current unguided process. Measure: (a) time to identify all required registrations, (b) number of "surprise" requirements discovered late, (c) vendor confidence score before/after.

## 4. Opportunity Mapper

### Opportunity 1: First-Time Vendor Conversion Accelerator
- **User:** Richmond small businesses attempting their first government contract bid
- **Outcome:** Reduce time-to-first-bid from weeks to days
- **Workflow:** Intake questionnaire → personalized roadmap → document prep → tracked registration → bid-ready notification
- **Dependencies:** Knowledge of SAM.gov, eVA, and Richmond registration requirements (all publicly documented)
- **Richmond relevance:** Virginia's eVA has nearly 100,000 businesses and drove a 200% increase in vendor registrations. Richmond-specific onboarding guidance doesn't exist — vendors must piece it together themselves.

### Opportunity 2: MBE Certification Pipeline Accelerator
- **User:** Richmond businesses eligible for but not yet holding MBE/WBE/DBE certification
- **Outcome:** Increase the number of certified MBE vendors bidding on City contracts
- **Workflow:** Eligibility screening → certification application guidance → status tracking → post-certification opportunity matching
- **Dependencies:** OMBD certification requirements (B2Gnow-managed, no public API — must be manually documented)
- **Richmond relevance:** Austin SMBR achieved a 7-day average certification review time with guided online portals. Richmond's timeline is unknown and unpublished.

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Directly lowers the barrier to MBE participation. NYC PASSPort enrolled 13,000+ vendors after going digital. |
| **Feasibility** | 3 | No real system integrations possible in a weekend — must simulate. Actual integrations require SAM.gov API access and eVA cooperation. |
| **Data readiness** | 3 | Requirements are publicly documented but scattered. No structured API for Richmond's vendor registration process. OMBD uses B2Gnow (no public API — a documented structural wall). |
| **Problem clarity** | 4 | Well-understood pain point validated by every city studied. NYC Comptroller explicitly flagged PASSPort's poor search UX. |
| **Demo-ability** | 4 | A step-by-step wizard with progress tracking is visually clear. Less flashy than a data dashboard but immediately relatable to judges who've navigated government forms. |
| **Total** | **18/25** | |

**Weekend MVP shapes:**
- **Shape A (8 hours):** Static "Richmond Vendor Onboarding Guide" — interactive questionnaire that generates a personalized PDF checklist of all registrations needed, in order, with links and document requirements.
- **Shape B (16 hours):** Add a progress tracker (checkbox-based) that persists across sessions, plus an APEX Accelerator clinic finder for Virginia.
- **Shape C (24 hours):** Add a "What Can I Bid On Now?" module that pulls active solicitations from public sources and matches them to the vendor's current registration status.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation Method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Vendors abandon registration because of confusion, not because of rational cost-benefit analysis (registration effort > expected contract value) | 5 | 4 | **20** | Interview 5 vendors who started but didn't finish registration: "Why did you stop?" |
| 2 | A guided wizard meaningfully reduces onboarding time vs. existing documentation | 4 | 3 | **12** | A/B test: 3 vendors use the wizard, 3 use current City/SAM.gov docs. Compare time and error rates. |
| 3 | Richmond's vendor registration requirements are stable enough to maintain an accurate wizard without constant updates | 3 | 4 | **12** | Audit how often SAM.gov, eVA, and City requirements changed in the past 2 years |
| 4 | MBE vendors will trust a third-party tool with their business information during registration | 3 | 3 | **9** | The prototype generates guidance only — no data is transmitted to any government system. Trust is less of an issue for a read-only tool. |
| 5 | The onboarding bottleneck is discovery/navigation, not underlying system slowness (CAGE codes take 10 business days regardless of wizard quality) | 4 | 2 | **8** | Map the critical path: which delays are informational (fixable) vs. systemic (not fixable by a wizard)? |

**Top 3 to validate first:**
1. **Assumption 1 (R×U=20):** Is confusion the real barrier? If vendors quit because the expected payoff is too low, a better wizard won't help — you need better contracts.
2. **Assumption 2 (R×U=12):** Does guided UX actually reduce time? Orlando's OpenCounter achieved 97% self-service at <8 minutes, but that was for permits, not multi-jurisdiction vendor registration.
3. **Assumption 3 (R×U=12):** Is the underlying data stable? SAM.gov updated its Entity Registration Checklist in November 2024. If requirements shift frequently, the wizard becomes a maintenance burden.

## Key Takeaway

The research validates that guided onboarding works — NYC PASSPort cut filing from a month to a day, Virginia eVA grew to 100,000 vendors, Austin SMBR reviews in 7 days. But the highest-impact insight is that Richmond's real bottleneck may not be *technology* but *awareness and human help*. APEX Accelerators drove 549,519 contracts through 6,284 training events — not software. The winning weekend build should combine a lightweight digital roadmap (the wizard) with a "book a human" integration (APEX clinic finder or SCORE mentor match). The NYC Comptroller's audit of MyCity is a cautionary tale: digital front-doors that "merely redirect users to agency websites" without transactional depth earn user frustration, not adoption.
