# Innovation Analysis: Unboxed RVA

## Idea Summary

A re-engagement platform for Richmond's "opportunity youth" — the estimated 4.3 million 16-24-year-olds nationally (and their Richmond equivalent) who are neither in school nor working. Combines mobile-first outreach, low-friction case management, closed-loop referral networks, and two-way SMS engagement to reconnect disconnected youth to education, training, and employment pathways. Informed by LA P3's 3× secondary education completion rate and Boston SuccessLink's SMS-driven redesign.

---

## Lens 1 — Blue Ocean Reframing (ERRC Grid)

| Action | Factor | Rationale |
|--------|--------|-----------|
| **Eliminate** | Generic email blasts as primary outreach channel | Email reaches employed, digitally-connected adults — not disconnected youth; LA P3 and Boston proved SMS and peer navigators work better |
| **Eliminate** | Burdensome intake systems that staff avoid using | LA P3's CalJOBS system was so cumbersome that staff skipped data entry, causing a 31% undercount of services rendered |
| **Reduce** | Number of times a youth must retell their story across agencies | Unite Us closed-loop referrals report 96% completion and 88% of needs met by keeping context across handoffs |
| **Reduce** | "Referral leakage" — youth sent to another agency who never arrive | Traditional open-loop referrals have no follow-up; closed-loop systems track whether the youth actually received service |
| **Raise** | Peer-led outreach channels | LA P3 utilized former disconnected youth as Youth Ambassadors; nonprofit TikTok content with authentic, raw style outperforms polished marketing |
| **Raise** | Two-way SMS as the primary engagement layer | 69% weekly engagement in a 12-week youth texting pilot; 71% response rate to automated messages via WelTel platform |
| **Create** | Richmond-specific referral network connecting workforce, housing, education, and health services with consent-based data sharing | No such closed-loop system exists for Richmond's opportunity youth |
| **Create** | Device and connectivity bridge | Per Scholas distributed laptops and hotspots to remote learners, achieving 80% job placement at $21.43/hr; similar access intervention needed in Richmond |

**Core assumption challenged:** "Build a portal and they will come." The research is clear: opportunity youth don't find platforms — platforms must find them. LA P3's co-location model, peer ambassadors, and TikTok Spark Ads (29% lower CPM, +640% clicks at UMass Lowell) demonstrate that outreach and trust precede technology.

---

## Lens 2 — Rapid Ideation (Crazy 8s)

| # | Variant | Twist |
|---|---------|-------|
| 1 | **Closed-Loop Referral Hub** — Case manager sends referral to partner agency → partner confirms youth showed up and received service → case manager sees outcome | Baseline concept using Unite Us / FindHelp model |
| 2 | **TikTok-First Outreach Funnel** — Peer-created TikTok content about job programs → swipe-up to SMS opt-in → automated text sequence guides to enrollment | 🔥 Provocative: meet disconnected youth on their actual platform, not a government website |
| 3 | **Youth Ambassador Network** — Pay former opportunity youth $15/hr to do street outreach in their neighborhoods, armed with tablets for on-the-spot intake | LA P3's most effective channel was peer navigators; formalize and fund it |
| 4 | **"One Story" Intake** — Youth tells their situation once in a structured conversation → system generates a profile shareable (with consent) across all partner agencies | Prevents the exhausting "repeat your trauma at every office" experience |
| 5 | **Virtual Training + Tech Kit** — Provide Raspberry Pi or Chromebook + hotspot to enrolled youth for remote GED prep and vocational training | 🔥 Provocative: Per Scholas showed remote cohorts outperformed pre-pandemic in-person; address the access barrier directly |
| 6 | **Incentivized Check-In System** — Small escalating rewards ($1→$5) for weekly SMS check-ins about job search progress, training completion, or appointment attendance | World Bank MYLMI found this increased SMS survey response by 38 percentage points |
| 7 | **Coordinated Entry + Workforce Bridge** — Connect Chicago-style Coordinated Entry System (housing crisis triage) with workforce intake so housing-insecure youth access both services simultaneously | Addresses the intersection that disconnected youth most commonly face |
| 8 | **Stepped-Wedge Rollout** — Deploy to one Richmond neighborhood first, measure outcomes rigorously, then expand — creating causal evidence that Richmond can use for funding | Only 38% of opportunity youth studies use methods that can determine causal impact; this fixes that |

---

## Lens 3 — Rapid Design Sprint

**Problem sentence:** Richmond's disconnected youth (16-24, not in school, not working) fall through the cracks between workforce, education, and social services because no system connects outreach, intake, case management, and referral tracking into one coordinated pathway.

**User journey (primary persona: 19-year-old who dropped out of high school, currently not working):**
1. Youth sees a TikTok from a peer ambassador: "I was where you are. Here's how I got my first real job in Richmond."
2. Swipes to a link, texts "START" to a number (no app download)
3. Receives: "Hey, I'm the RVA Reconnect bot. I can help with jobs, school, or just figuring out next steps. What's most on your mind? Reply: 1=Job, 2=School, 3=Housing, 4=Not sure"
4. Replies "1" → gets connected to a human navigator at partner organization within 24 hours
5. Navigator does intake once → youth consents to share profile across workforce, housing, and education partners
6. System sends closed-loop referral to workforce program → workforce program confirms enrollment → navigator sees confirmation
7. Weekly SMS check-in: "How's the job search going? Reply 1=Good, 2=Stuck, 3=Need help" → "Stuck" triggers navigator follow-up

**Prototype shape:** Two components: (1) Outreach layer — Twilio SMS with automated triage + human escalation; (2) Referral tracking — Airtable with partner organizations as rows, youth referrals as records, status columns (sent/received/enrolled/completed). No CRM needed for MVP.

**First test:** Partner with one Richmond youth-serving org (e.g., Peter Paul Development Center). Recruit 20 disconnected youth via peer outreach. Track: time from first contact to program enrollment, number of referral handoffs, and whether the youth was "lost" at any handoff point.

---

## Lens 4 — Opportunity Mapper

### Pattern 1: "Outreach-to-Enrollment Pipeline"

| Dimension | Detail |
|-----------|--------|
| **User** | Disconnected youth ages 16-24 in Richmond |
| **Outcome** | Reduce time from first contact to program enrollment from weeks to days |
| **Workflow** | Social media/peer outreach → SMS opt-in → automated triage → navigator connection → intake → referral |
| **Dependencies** | Peer ambassadors (stipended), SMS platform (Twilio), partner organization buy-in for referral tracking |
| **Richmond relevance** | Richmond's opportunity youth population is concentrated in specific neighborhoods (East End, South Side) accessible via targeted outreach |

### Pattern 2: "Closed-Loop Referral Network"

| Dimension | Detail |
|-----------|--------|
| **User** | Case managers at workforce, education, and social service agencies |
| **Outcome** | Zero referral leakage — every referral is tracked to completion or flagged for follow-up |
| **Workflow** | Navigator sends referral via platform → receiving agency confirms receipt → confirms enrollment → reports outcome |
| **Dependencies** | Data-sharing MOUs between organizations; agreement on referral status definitions; consent management |
| **Richmond relevance** | Unite Us networks report 96% closed-loop completion; Richmond has no equivalent system for youth services |

### Pattern 3: "Evidence-Building Cohort"

| Dimension | Detail |
|-----------|--------|
| **User** | City and philanthropic funders evaluating youth program effectiveness |
| **Outcome** | Rigorous outcome data (enrollment, completion, employment, wage gains) that justifies continued investment |
| **Workflow** | Stepped-wedge rollout across neighborhoods → matched comparison evaluation design → quarterly outcome reports |
| **Dependencies** | Evaluation partner (VCU School of Social Work?); state wage data for longitudinal tracking |
| **Richmond relevance** | ASPE found only 38% of opportunity youth studies use causal methods; a Richmond evaluation would fill a national evidence gap |

---

## Lens 5 — Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 5 | Addresses the most vulnerable youth population; LA P3 participants were 3× more likely to complete secondary education |
| **Feasibility** | 2 | Requires multi-agency partnerships, data-sharing MOUs, trained navigators, sustained funding — far beyond a weekend build |
| **Data readiness** | 2 | No Richmond service directory in structured format; no existing referral tracking system; intake data is siloed |
| **Problem clarity** | 4 | "Disconnected youth fall through cracks" is well-understood; the specific Richmond service gaps need mapping |
| **Demo-ability** | 3 | SMS outreach demos well; closed-loop referral tracking is harder to make visually compelling in 3 minutes |
| **Total** | **16/25** | |

### Weekend MVP Shapes

- **Shape A (Minimum):** SMS bot on Twilio: text "START" → automated triage (jobs/school/housing) → returns curated list of 5 Richmond organizations per category with phone numbers and addresses. No tracking, no referrals.
- **Shape B (Demo-ready):** Add Airtable backend: when youth texts, a record is created. Navigator can view incoming requests and mark referral status. Simulates closed-loop tracking for demo purposes.
- **Shape C (Stretch):** Add peer ambassador onboarding flow (ambassador texts "REFER [youth phone number]" → youth gets welcome message attributed to their ambassador). Track ambassador-to-enrollment conversion rates.

---

## Lens 6 — Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation approach |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Disconnected youth will respond to SMS outreach from an unknown number | 4 | 4 | **16** | Test: send 50 texts to youth enrolled in a partner program; measure response rate within 48 hours |
| 2 | Partner organizations will agree to closed-loop referral tracking and data sharing | 5 | 4 | **20** | Contact 3 Richmond youth-serving orgs; ask if they'd participate in a shared referral system with consent-based data sharing |
| 3 | Peer ambassadors can be recruited and trained fast enough for a pilot | 3 | 3 | 9 | Identify 2-3 former opportunity youth through partner orgs willing to do outreach |
| 4 | Richmond has enough connected services to create a meaningful referral network | 3 | 3 | 9 | Map all youth-serving organizations in Richmond; assess whether coverage spans workforce, education, housing, and health |
| 5 | Youth will consent to having their information shared across agencies | 4 | 3 | **12** | TCPA consent is required; additionally, test whether youth will sign a cross-agency data sharing consent form |
| 6 | A hackathon prototype can demonstrate enough of the referral workflow to attract investment | 4 | 3 | 12 | Airtable + SMS can simulate the workflow; question is whether funders see it as credible |

**Top 3 to validate first:**
1. **Partner data-sharing willingness** (R×U=20) — Without MOUs and partner buy-in, the closed-loop referral system can't function. LA P3 took years to negotiate this.
2. **Youth SMS response rate** (R×U=16) — If disconnected youth don't respond to texts from unknown numbers, the entire outreach model fails
3. **Youth consent for cross-agency sharing** (R×U=12) — Privacy concerns among vulnerable populations are real; consent process must be clear and trustworthy

---

## Key Takeaway

Unboxed RVA tackles the right population (disconnected youth) with the right tools (SMS, peer outreach, closed-loop referrals) backed by strong national evidence. LA P3's 3× secondary education completion and Per Scholas's 80% remote job placement prove the model works. But the research also provides a clear warning: LA P3's CalJOBS system was so burdensome that it caused a 31% undercount of services, and partner data-sharing resistance nearly derailed the initiative. The weekend MVP should focus on two things: (1) proving SMS can reach disconnected youth in Richmond, and (2) demonstrating a minimally viable referral tracking flow between two organizations. The institutional infrastructure (MOUs, navigators, evaluation) required for full implementation is a 12+ month project, not a hackathon deliverable.
