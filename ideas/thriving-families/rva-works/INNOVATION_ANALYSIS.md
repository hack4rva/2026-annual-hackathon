# Innovation Analysis: RVA Works

## Idea Summary

A wraparound workforce support platform for Richmond that goes beyond job matching to coordinate barrier removal — transportation, childcare, housing, and criminal record expungement — through integrated referrals, case management, and cross-agency data sharing. Modeled on NYC's Worker Connect (Common Client Index across agencies), San Francisco's Client Deduplication Plan (65,000+ annual touchpoints), Detroit at Work (Connect4Care + expungement navigation), and Philadelphia Works (integrated transit passes and adult education).

---

## Lens 1 — Blue Ocean Reframing (ERRC Grid)

| Action | Factor | Rationale |
|--------|--------|-----------|
| **Eliminate** | "Repeat your story at every agency" burden on jobseekers | NYC Worker Connect created a Common Client Index so caseworkers see unified history; Richmond has no equivalent |
| **Eliminate** | Open-loop referrals where youth are sent somewhere and never followed up | Traditional referrals have no feedback loop; Unite Us reports 96% closed-loop completion rate |
| **Reduce** | Duplicate client counting across programs | San Francisco's Workforce Services Inventory revealed massive duplication; a Client Deduplication Plan tracks unduplicated outcomes across 65,000+ touchpoints |
| **Reduce** | Administrative burden on small nonprofits managing their own case tracking | Bonterra Apricot and Salesforce Nonprofit Cloud offer configurable CRM backbones; small orgs shouldn't build from scratch |
| **Raise** | Barrier resolution as a measurable outcome (not just job placement) | Detroit at Work explicitly tracks childcare connection, transit assistance, and expungement as program outputs |
| **Raise** | Standardized service directory using Open Referral (HSDS) and HL7 FHIR Gravity Project | These open standards solve the fragmentation of community resource directories that plagues every city |
| **Create** | Richmond-specific integrated workforce + social services platform with cross-agency identity resolution | No Richmond system currently connects workforce, housing, childcare, and justice services through a shared client index |
| **Create** | Automated barrier screening at intake → triggered supportive service referrals | When intake reveals childcare need, system auto-generates referral to childcare subsidy program without caseworker manual intervention |

**Core assumption challenged:** "Workforce development is about matching people to jobs." WIOA itself recognizes that non-employment barriers (childcare, transportation, housing, criminal records) prevent labor market participation. Detroit at Work, Philadelphia Works, and Chicago DFSS all treat barrier removal as core program infrastructure, not a nice-to-have add-on.

---

## Lens 2 — Rapid Ideation (Crazy 8s)

| # | Variant | Twist |
|---|---------|-------|
| 1 | **Barrier-Aware Intake** — Jobseeker completes structured intake → system identifies barriers (childcare, transit, housing, record) → auto-generates referrals to appropriate Richmond services | Baseline concept |
| 2 | **Common Client Index for Richmond** — Cross-agency identity resolution so a person receiving workforce services, housing assistance, and childcare subsidies is tracked as one client, not three | NYC Worker Connect model; prevents duplicate counting and enables holistic case management |
| 3 | **Expungement Fast-Track** — Dedicated module connecting justice-involved jobseekers to Richmond's free expungement services, with automatic eligibility screening based on charge type and time elapsed | 🔥 Provocative: Detroit at Work proves this is a critical retention factor; Richmond could replicate |
| 4 | **Transit Pass Integration** — Digital GRTC transit pass automatically issued to any enrolled workforce participant, funded by program budget | Philadelphia Works integrates SEPTA passes directly; Token Transit API enables digital distribution |
| 5 | **Predictive Barrier Alert** — ML model trained on past client data predicts which newly enrolled clients are most likely to drop out based on barrier profile → triggers proactive navigator outreach | 🔥 Provocative: shifts from reactive (wait for client to miss appointment) to proactive (intervene before dropout) |
| 6 | **Open Referral Directory** — Publish all Richmond social services in HSDS-compliant format so any platform (211, FindHelp, Unite Us, custom apps) can consume the same directory | Infrastructure play that benefits the entire ecosystem, not just one platform |
| 7 | **Employer Wraparound Dashboard** — Employers see which support services their new hires are accessing (anonymized) → enables better retention support and schedule flexibility | Creates employer buy-in for the system by showing them the ROI of barrier removal on retention |
| 8 | **Longitudinal Outcome Tracker** — Integrate Virginia Employment Commission wage data to track earnings 6/12/24 months post-program → prove ROI to funders | NYC Opportunity's ROI analysis showed training recipients earn significantly more than comparison groups |

---

## Lens 3 — Rapid Design Sprint

**Problem sentence:** Richmond jobseekers with intersecting barriers (no childcare, no transit, criminal record, unstable housing) bounce between disconnected agencies, repeating their story at each one, and frequently drop out of workforce programs because non-employment needs aren't addressed.

**User journey (primary persona: 24-year-old single parent with a misdemeanor record seeking employment):**
1. Visits Richmond workforce center or is referred by a CBO
2. Completes structured intake on tablet: employment history, skills, barriers (childcare: yes, transit: limited, record: yes — misdemeanor 3 years ago)
3. System auto-generates barrier profile and referrals: childcare subsidy (DSS), GRTC transit pass (workforce program), expungement screening (Legal Aid)
4. Case manager reviews auto-generated plan, adds notes, sends referrals via closed-loop system
5. Childcare agency receives referral → confirms enrollment → case manager sees confirmation
6. Client starts workforce training; receives transit pass; attends expungement clinic
7. Completes training → placed in job → system tracks 30/90/180-day retention and wage data

**Prototype shape:** Three-screen web app: (1) Intake form with barrier checklist, (2) Generated action plan with referral links, (3) Caseworker dashboard with referral status tracking. Backend: Airtable with partner organizations as linked tables.

**First test:** Take 5 real (anonymized) client profiles from a Richmond workforce program. Run each through the barrier screening. For each auto-generated referral, verify: Does that Richmond service actually exist? Is the referral pathway realistic? How long would it take?

---

## Lens 4 — Opportunity Mapper

### Pattern 1: "Barrier-Triggered Referral Automation"

| Dimension | Detail |
|-----------|--------|
| **User** | Richmond workforce case managers serving clients with multiple barriers |
| **Outcome** | Automated referral generation cuts case manager administrative time; no barrier goes unaddressed |
| **Workflow** | Intake identifies barriers → system matches to Richmond services → referrals sent with one click → closed-loop tracking |
| **Dependencies** | Structured Richmond service directory; data-sharing MOUs with partner agencies; consent management |
| **Richmond relevance** | Detroit at Work's Connect4Care and expungement services prove this model works; Richmond has the same service landscape but no coordination platform |

### Pattern 2: "Cross-Agency Client Deduplication"

| Dimension | Detail |
|-----------|--------|
| **User** | City administrators and program evaluators |
| **Outcome** | Accurate count of unique individuals served across all workforce and social service programs |
| **Workflow** | Common Client Index matches records across agencies using probabilistic matching → deduplicated dashboard |
| **Dependencies** | Interagency data-sharing agreement signed by agency heads (NYC model); matching algorithm; privacy compliance (HIPAA, 42 CFR Part 2) |
| **Richmond relevance** | San Francisco discovered massive duplication in its workforce inventory; Richmond likely has the same problem but hasn't measured it |

### Pattern 3: "Workforce ROI Evidence"

| Dimension | Detail |
|-----------|--------|
| **User** | City council members and philanthropic funders evaluating workforce investment returns |
| **Outcome** | Rigorous evidence that wraparound services improve long-term employment and earnings |
| **Workflow** | Track participants' Virginia Employment Commission wage records 6-24 months post-program → calculate ROI vs. matched comparison group |
| **Dependencies** | Agreement with VEC for wage data access; evaluation methodology; comparison group construction |
| **Richmond relevance** | NYC Opportunity's ROI analysis proved training programs' value; Richmond needs equivalent evidence to sustain and expand funding |

---

## Lens 5 — Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 5 | Addresses the structural reason workforce programs fail: unaddressed non-employment barriers |
| **Feasibility** | 1 | Requires cross-agency MOUs, Common Client Index, HIPAA/42 CFR Part 2 compliance, interoperable systems, and sustained multi-year funding — the most complex implementation in this pillar |
| **Data readiness** | 2 | No structured Richmond service directory; no cross-agency data sharing infrastructure; client data siloed across organizations |
| **Problem clarity** | 5 | "Jobseekers bounce between agencies" is the most documented workforce development failure mode |
| **Demo-ability** | 3 | Barrier screening → action plan → referral demos OK; the cross-agency integration that creates real value can't be prototyped in a weekend |
| **Total** | **16/25** | |

### Weekend MVP Shapes

- **Shape A (Minimum):** Intake form (Google Form or Typeform) with barrier checklist → auto-generated PDF action plan listing relevant Richmond services with addresses and phone numbers. No referral tracking.
- **Shape B (Demo-ready):** Airtable backend: intake record links to service directory → generated referral list per client → simulated status tracking (sent/received/enrolled). Visual dashboard showing aggregate barrier distribution.
- **Shape C (Stretch):** Add one real closed-loop referral integration (e.g., partner with one CBO that confirms referral receipt via the platform). Build simple matching to pair clients with the nearest service location.

---

## Lens 6 — Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation approach |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Richmond agencies will sign data-sharing MOUs for cross-agency client tracking | 5 | 5 | **25** | Contact Richmond DSS, workforce board, and one CBO; gauge willingness for even a limited data-sharing pilot |
| 2 | A comprehensive Richmond service directory can be compiled and maintained | 4 | 3 | **12** | Attempt to list 30 Richmond barrier-removal services (childcare, transit, housing, legal aid) with eligibility rules |
| 3 | Clients will consent to cross-agency information sharing | 3 | 3 | 9 | Review consent forms used by NYC Worker Connect and Detroit at Work; adapt for Virginia legal requirements |
| 4 | Automated barrier screening adds value over experienced case managers' judgment | 3 | 3 | 9 | Show the auto-generated referral plan to 3 case managers; ask whether it matches what they'd do manually |
| 5 | The Common Client Index can be implemented without violating HIPAA or 42 CFR Part 2 | 5 | 4 | **20** | Consult with a health data privacy attorney on whether workforce + social service integration triggers federal privacy regulations |
| 6 | A hackathon prototype can convey the value proposition of cross-agency coordination | 3 | 3 | 9 | The prototype can only show the intake → plan → simulated referral; the real value (reduced dropout, better outcomes) requires longitudinal data |

**Top 3 to validate first:**
1. **Agency data-sharing willingness** (R×U=25) — This is the single highest-risk assumption across all 10 ideas. NYC took years and commissioner-level agreements. If Richmond agencies won't share, the platform has no cross-agency value.
2. **HIPAA/42 CFR Part 2 compliance** (R×U=20) — Housing, substance use, and health referrals trigger strict federal privacy regulations. Non-compliance is not just a technical problem — it's a legal one.
3. **Service directory completeness** (R×U=12) — The platform is only as useful as the services it can refer to; an incomplete directory creates gaps

---

## Key Takeaway

RVA Works is the most impactful and least feasible idea in the Thriving Families pillar. The evidence is overwhelming: NYC Worker Connect, San Francisco's deduplication plan, Detroit at Work, and Philadelphia Works all prove that wraparound coordination dramatically improves workforce outcomes. But every one of these systems required years of institutional negotiation, commissioner-level data-sharing agreements, dedicated fiscal intermediaries, and multi-million-dollar technology investments. The weekend MVP should focus on demonstrating the barrier screening → action plan workflow (which is genuinely useful even without cross-agency integration) and identifying whether any Richmond institutional actor has the authority and willingness to champion the data-sharing agreements that make the full vision possible. Without that champion, this remains a slide deck, not a system.
