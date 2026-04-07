# CATS Research Lens — Grading and Enhancing Thriving City Hall Ideas

**Pillar:** A Thriving City Hall
**Date:** April 1, 2026
**Basis:** Deep research reports 1, 2, and 3 applied as an evaluative framework to the existing Thriving City Hall idea corpus (~87 ideas across NEW_IDEAS.md + 7 team solution_ideas.md files)

This document does not invent new ideas. It grades and enhances existing ideas against what the research says works and fails in city activity transparency systems. The rubric grades in `NEW_IDEAS_RUBRIC_GRADES.md` remain the canonical scores. This analysis adds a research-grounded overlay that asks questions the rubric does not.

---

## The Research Lens

Three reports converge on seven themes that determine whether a city transparency idea survives contact with reality.

### 1. Feedback Loop Closure

Does the idea close the loop between citizen input and visible outcome?

Report 2 documents the FixMyStreet finding: when residents report issues and the government fails to respond visibly, the platform *decreases* civic trust rather than improving it. Report 1 notes that Boston CityScore explicitly operationalizes closure notifications and satisfaction ratings. Report 3's "Domino's tracker" concept frames milestone visibility as the core resident experience.

**What to look for:** Ideas that show residents what happened after they submitted a request — not just intake, but status, assignment, completion, and evidence.

### 2. Cross-Domain Schema Alignment

Does the idea move toward a shared language across departments?

Report 1: "semantic inconsistency is fundamental, not superficial." Even within Open311, service categories are locally defined. "Closed" can mean "assigned downstream" rather than "fixed." Report 3 identifies "no shared ontology for impact" as the reason no city has built a unified report card.

**What to look for:** Ideas that normalize how departments describe work, map local categories to shared taxonomies, or resolve the "same thing, different name" problem across systems.

### 3. Data Quality and Governance

Does the idea make data trustworthy before presenting it?

Report 1: "build the event backbone first; derive KPIs from it." Report 3: "automated integrity" — pull from operational logs, minimize manual entry. Report 1 documents that bulk civic data has recurring quality issues that would directly degrade any downstream tool.

**What to look for:** Ideas that clean, normalize, or audit source data before building presentation layers on top. "Fix the table" before building the dashboard.

### 4. Public Legibility

Does the idea translate city activity into something residents can consume?

Report 3 names four paradigms — Event Stream (data overload risk), Knowledge Graph (technical fragility), KPI Dashboard (obscures detail), Narrative Feed (spin risk). Report 1 notes the "activity feed" is the least common public pattern because it requires consistent event semantics and privacy controls. Report 2 warns that "more data does not always equal more trust."

**What to look for:** Ideas that present city activity in plain language with appropriate context — not raw data dumps, not jargon dashboards, not AI-generated narratives without auditable sources.

### 5. Event Instrumentation

Does the idea capture what the system currently can't see?

Report 2 identifies "invisible failures" — residents who tried and gave up — as the worst gap in civic tech. Report 1: derive measures from the event history rather than treating KPIs as primary data. Report 3: the gap between "311 app (input), internal work order system (process), and open data portal (result)" — these three rarely speak to each other.

**What to look for:** Ideas that instrument the resident experience to reveal demand patterns, failure points, and unmet needs the City has no current way to measure.

### 6. Geographic and Demographic Equity

Does the idea surface or address neighborhood-level disparities?

Report 2 (FixMyStreet Brussels): crowdsourced civic platforms skew participation toward higher-income, ethnically homogenous districts, potentially redirecting resources toward already-well-served populations. Report 1: "geographic equity (service quality by neighbourhood/district)" is one of four core metric families. Report 3: "equity as a core metric" — every report card must measure service delivery across socio-economic lines.

**What to look for:** Ideas that either (a) measure whether service delivery is equitable across neighborhoods or (b) design for the residents current systems exclude — non-English speakers, no-internet households, low-trust populations.

### 7. Institutional Survivability

Can the receiving department actually adopt this?

Report 2 (Farrell-Coburn framework): four preconditions — prior related knowledge inside the agency, communication pathways to decision-makers, strategic knowledge leadership, and resources to partner. Report 2: only ~5% of hackathon projects remain active after 5 months. Skill diversity (+71%) and expansion intent predict continuation; immediate intense activity predicts burnout. Report 1: "Stat" programmes degrade into theatre without analytic staff, clear priorities, and leadership follow-through.

**What to look for:** Ideas that work with existing City systems (AvePoint, GeoHub, Socrata, CivicReady), require minimal new infrastructure, have a clear institutional home, and don't depend on workflow changes no one has agreed to.

---

## Theme 1: Feedback Loop Closure

### What the research says

The single most damaging pattern in civic technology is building an intake channel without a visible resolution path. Report 2's FixMyStreet research found that unaddressed reports on a public platform *decrease* civic trust. Report 1 documents that "closed" often means "assigned downstream" — not "fixed" — creating a semantic gap that erodes resident confidence. Report 3's Domino's tracker concept proposes milestone visibility (submitted → assigned → scheduled → completed) as the fix.

### Ideas that address this

| Source | Idea | Current approach |
|--------|------|-----------------|
| NEW_IDEAS #11 | Completion Evidence / Anti-Ghost Tracker | Require photo/note evidence before closure; structured "couldn't complete" codes visible to resident |
| Text 311 #6 | Transparent Request Status via SMS | Proactive SMS updates: "Your pothole report has been assigned to DPW. Estimated response: 5-10 business days." |
| RVA Help #5 | Status Tracking with Plain-Language Explanations | Ticket status view: "Your request has been assigned to Public Works. This means a crew will inspect within 5-10 days." |
| NEW_IDEAS #3 | "I'm Not Sure" Catch-All + CSR Handoff | Captures context before routing to human; resident gets reference number and SLA commitment |

### Grade: Strong concepts, blocked on the same dependency

All four ideas correctly identify the feedback loop as the trust problem. NEW_IDEAS #11 is the strongest because it addresses the specific Richmond failure mode documented on r/rva: tickets marked "completed" with no visible work. Text 311 #6 and RVA Help #5 both propose milestone tracking — the Domino's tracker concept — but neither grapples with the data dependency.

### Enhancement from the research

**Report 1 says: "milestone visibility, not prediction."** Text 311 #6 claims "estimated response: 5-10 business days." Report 1 explicitly warns that predictive ETAs are constrained by data quality. Enhancement: show *historical typical durations* by service type and neighborhood ("Pothole repairs in your area typically take 5-8 business days") rather than a prediction for this specific request. The distinction matters — a historical range is defensible; a specific ETA is a promise the City can't keep.

**Report 3 says: the tracker needs four steps, not two.** Most ideas show "submitted" and "completed." The research identifies four milestone states already present in operational systems: intake → assignment → dispatch/arrival → completion. Enhancement: every feedback loop idea should expose at least these four states, preserving the original system status alongside a canonical state for traceability (Report 1's "workflow state mapping" requirement).

**Report 2 says: a broken feedback loop is worse than no loop.** If the City deploys a status tracker but the underlying AvePoint data doesn't update reliably, residents see stale statuses — which is worse than no tracker at all. Enhancement: every feedback idea should include a "data freshness" indicator. If the status hasn't updated in >48 hours, show "Last updated: [date] — contact 311 for current status."

### Risk flag

**All four ideas are blocked on AvePoint API access.** The 311 operations outreach letter asks about this (Q1). Without it, status tracking is simulated. The research doesn't solve this — it only confirms the dependency is real and the value is high.

---

## Theme 2: Cross-Domain Schema Alignment

### What the research says

Report 1: "The same physical thing may be represented differently — an address vs. a parcel vs. a hydrant asset vs. a street segment." Workflow states differ across systems even when the underlying work is similar. Report 3: "There is rarely a consensus across departments on what constitutes 'success.'" The consequence: every tool that spans departments must build its own crosswalk, and crosswalks are never maintained.

### Ideas that address this

| Source | Idea | Current approach |
|--------|------|-----------------|
| NEW_IDEAS #6 | Symptom-Based Cross-Department Triage | Decision trees encoding actual business rules: "Is there standing water?" → DPU, not DPW |
| Hey804 #10 | Shared Classification API | Extract classification engine into a standalone API any city system can call |
| Text 311 #8 | Adopt AvePoint Category Taxonomy | Map AI classification to the exact categories staff use in AvePoint |
| Text 311 #5 | Location-Aware Auto-Routing via GIS | Use GeoHub layers to determine department jurisdiction from location |
| RVA Help #8 | Internal Notes for Cross-Department Handoff | Context travels with re-routed requests instead of being lost |

### Grade: Best cluster in the corpus — individually strong, collectively uncoordinated

These five ideas all attack schema misalignment from different angles. NEW_IDEAS #6 is the most Richmond-specific — it encodes the documented DPW/DPU/RPD boundary cases that cause real misroutes. Hey804 #10 is the most architecturally mature — one classification engine, many consumers. Text 311 #5 uses spatial identity (GeoHub) to resolve routing, which Report 1 identifies as a first-class requirement ("treat geospatial identity as a shared service").

The problem: these ideas exist in five different team files and don't reference each other. They are five partial solutions to the same problem.

### Enhancement from the research

**Report 1 says: adopt a canonical schema and keep raw provenance.** Enhancement: any classification or routing tool should output *both* the canonical category (shared across tools) AND the original system-specific category. When NEW_IDEAS #6 routes "standing water" to DPU, it should emit `{canonical: "water_infrastructure", original: "DPU - water main"}`. This is the "workflow state mapping" principle — a small crosswalk from each system's statuses into a canonical set, while retaining the raw status for traceability.

**Report 1 says: geospatial identity as a shared service.** Text 311 #5 already does this with GeoHub layers. Enhancement: *every* routing idea in this cluster should use the same spatial join. When a resident provides a location, auto-determine council district, DPW zone, and utility service area. This resolves ambiguities that text classification alone cannot — and it's available today via GeoHub's public ArcGIS FeatureService.

**Report 3 says: "the city is a federation of regimes, not one system."** Enhancement: don't try to build one universal taxonomy. Build a thin crosswalk between existing department taxonomies. The AvePoint taxonomy (Text 311 #8), the GeoHub spatial layers (Text 311 #5), and the symptom rules (NEW_IDEAS #6) are complementary, not competing. A shared classification API (Hey804 #10) should consume all three.

### Risk flag

**Hey804 #10 (Shared Classification API) is the most valuable idea here and the hardest to adopt.** It requires the City to treat classification as infrastructure, not a feature of one tool. Report 2's absorptive capacity framework applies: does any City unit have the mandate to own a cross-department classification service? The Office of Performance Management is the closest institutional home — but this needs a sponsor, not just a codebase.

---

## Theme 3: Data Quality and Governance

### What the research says

Report 1: "build the event backbone first; derive KPIs from it." Bulk civic data has recurring quality issues — inconsistent categories, stale records, placeholder values. Report 3: "automated integrity" — pull from operational logs to minimize manual entry and manipulation risk. Report 1 documents CompStat's degradation: when metrics drive career consequences, data gets manipulated.

### Ideas that address this

| Source | Idea | Current approach |
|--------|------|-----------------|
| NEW_IDEAS #14 | Vendor Identity Resolution | Cluster 735 vendor strings into canonical entities via normalization + fuzzy matching |
| NEW_IDEAS #17 | Contract Data Health Dashboard | Scorecard: % valid amounts, date ranges, missing fields; fix queue |
| NEW_IDEAS #2 | RVA.gov Content Gap Detector | Crawl rva.gov; surface broken links, stale content, orphaned pages |
| Hey804 #2 | Structured rva.gov Content Inventory | Scrape rva.gov into a structured index by department and service type |
| Mira #9 / CivicPulse AI #10 | Extraction Confidence Scoring | Field-level accuracy rates from AI extraction; published to staff |
| RVA Contract Lens #1 | Integration Status Dashboard | Which data sources are live, when last queried, degraded/stale flags |

### Grade: Highest-value, lowest-glamour cluster

This is the "fix the table first" cluster. Every idea here improves the data that every downstream tool depends on. NEW_IDEAS #14 (vendor dedup) is the single most impactful data quality intervention in the procurement domain — without it, vendor concentration analysis, MBE/SWaM tracking, and spend dashboards are all unreliable. NEW_IDEAS #17 and RVA Contract Lens #1 are governance tools that make reliability measurable rather than assumed.

The rubric already scores these well (NEW_IDEAS #14: Pillar 91, Mayor's 95; #17: Pillar 87, Mayor's 91). The research confirms these scores — data quality is the prerequisite for everything else.

### Enhancement from the research

**Report 1 says: "data quality and provenance (source, timestamp, confidence)."** Enhancement for ALL data quality ideas: every record should carry metadata about where it came from, when it was last verified, and how confident the system is. RVA Contract Lens #1 does this for API integrations; extend the pattern to every data source. The CIP data from GeoHub is quarterly — every tool consuming it should display "Last updated: Q1 2026" alongside the data.

**Report 3 says: "automated ingestion reduces the opportunity for manual data entry and 'massaging' of numbers."** Enhancement for Mira #9 and CivicPulse AI #10: confidence scoring is good, but the research specifically warns against AI systems where accuracy is claimed but not measured. The extraction scorecard idea (50-contract manual verification) directly addresses this. Enhancement: make the scorecard *public to staff* with quarterly updates, not a one-time exercise. Report 1's CJIS-style audit requirement applies: "weekly review/analysis of audit records."

**Report 1 says: "DCAT provides a standard vocabulary for describing datasets."** Enhancement for RVA Contract Lens #1: the integration status dashboard should use DCAT-style metadata (source, update frequency, access method, license) so that any future tool can discover what data exists and how fresh it is. This is the "make the data layer discoverable and governable" principle.

### Risk flag

**These ideas deliver value only if someone acts on what they surface.** A data health dashboard that shows 735 fragmented vendor strings is useless if no one is assigned to merge them. Report 2's absorptive capacity applies: the procurement office needs a person with the authority and time to run the fix queue. Without that, these tools are reports nobody reads.

---

## Theme 4: Public Legibility

### What the research says

Report 3 names four paradigms with trade-offs: KPI Dashboard (clear but obscures detail), Narrative Feed (accessible but spin risk), Event Stream (truthful but overwhelming), Knowledge Graph (insightful but fragile). Report 1: the "activity feed" is the closest to what residents imagine when they ask "everything the city did this week" — but it's the least common because it requires consistent event semantics and privacy controls. Report 2: "publishing data is not the same as producing public value."

### Ideas that address this

| Source | Idea | Current approach |
|--------|------|-----------------|
| NEW_IDEAS #18 | Public Procurement Plain-Language Portal | Resident-facing: total spend, top vendors, MBE/SWaM share, plain language |
| CivicPulse AI #6 | Public Spending Dashboard | Read-only Socrata data; Atkinson Hyperlegible font; English/Spanish |
| Mira #6 | Public Contract Summary Page | Socrata + optional AI-generated plain-language summaries |
| Vendor Contract Mgmt #6 | Public Procurement Spending Dashboard | Total value, top departments, top vendors, procurement type breakdown |
| RVA Contract Lens #9 | Plain-Language Contract Explainer | AI-generated one-sentence summaries from Socrata fields |
| Vendor Contract Mgmt #7 | AI Contract Portfolio Briefing | AI-generated monthly department briefing from Socrata data |
| NEW_IDEAS #1 | Deterministic Service Wizard | Resident answers 3-6 plain-language questions; routed to correct form |

### Grade: Four teams built the same public spending dashboard — none addressed the research's core warning

CivicPulse AI #6, Mira #6, Vendor Contract Mgmt #6, and NEW_IDEAS #18 are functionally identical: read-only Socrata dashboards showing who gets how much. The research says this is a KPI Dashboard paradigm — "clear benchmarking, but can obscure detail and is prone to political manipulation." None of these four ideas address the manipulation risk or the "more data ≠ more trust" finding.

RVA Contract Lens #9 and Vendor Contract Mgmt #7 use AI to generate narratives — the Narrative Feed paradigm. Report 3 flags the core risk: "excellent for public storytelling, but requires strict ethical guardrails to prevent state-sponsored propaganda." Neither idea specifies those guardrails.

NEW_IDEAS #1 (Deterministic Service Wizard) is the strongest public legibility idea for service navigation — it makes the intake process legible without AI risk. The rubric agrees (Pillar 93, Mayor's 95).

### Enhancement from the research

**Report 3 says: "narrative-first — raw data must be automatically translated into human-readable narratives."** But Report 1 adds the guardrail: "where the underlying numbers remain auditable and sourced from the event backbone." Enhancement for RVA Contract Lens #9 and Vendor Contract Mgmt #7: every AI-generated statement must link to the source Socrata record. "The Department of Public Utilities has a $2.3M contract with [Vendor]" must be clickable to the specific xqn7-jvv2 row. No AI-generated number without a source link.

**Report 1 says: "effects on engagement and trust depend on usability, relevance, and the surrounding ecosystem."** Enhancement for ALL public dashboards: don't just publish data — contextualize it. "Richmond has 1,362 active contracts" means nothing without "compared to peer cities" or "up 12% from last year." The research calls this "comparability." Add time-series trends and (where possible) peer-city benchmarks.

**Report 2 says: "more data does not always equal more trust."** Enhancement: public portals should lead with the 3-5 metrics residents actually care about, not the 30 fields available in Socrata. For procurement: total spend, biggest vendors, MBE/SWaM share, contracts expiring soon. For service navigation: the wizard's 3-6 questions, not a department directory.

### Risk flag

**AI narrative generation without guardrails is the highest-risk pattern in this cluster.** Report 3: a narrative feed can become "state-sponsored propaganda." If the AI generates "The city improved evening safety for 400 families" and the 400 number is wrong, the City loses credibility it can't recover. AI should translate verified numbers into plain language — not estimate, not editorialize.

---

## Theme 5: Event Instrumentation

### What the research says

Report 2: residents who can't navigate the system and stop trying are "invisible to the City. They don't show up in any metric." Report 1: "model the city as an event stream (state changes) and compute measures from the event history." Report 3: the gap between citizen input, administrative process, and public result is that "these three systems rarely speak to each other in real-time."

### Ideas that address this

| Source | Idea | Current approach |
|--------|------|-----------------|
| NEW_IDEAS #4 | 311 Analytics Probe | Instruments any navigation tool to capture: queries, zero-result searches, abandonments, language toggles |
| Hey804 #5 | Civic Intelligence Dashboard | Aggregate anonymized questions: top topics, trending, no-answer gaps, by language |
| RVA Help #10 | Conversation Transcript as Training Data | "Resident said X, AI classified as Y, staff confirmed/corrected to Z" — quarterly feedback to 311 ops |

### Grade: The most underrated cluster in the corpus

These three ideas are the closest thing in the Thriving City Hall corpus to what the research actually argues is the foundational need: instrumentation that reveals what the City currently cannot see. NEW_IDEAS #4 scores Pillar 84, Mayor's 88 — solid but not top-tier. The research suggests it should score higher on Impact because it is the *only* proposed mechanism for measuring the "invisible failures" the pain points research documents.

Hey804 #5 and RVA Help #10 are variants of the same concept: use the navigation tool as a listening device that reveals what residents need. The rubric doesn't have a category for "generates data that doesn't exist today" — but the research does.

### Enhancement from the research

**Report 1 says: "derive measures from the event history, rather than treating KPIs as primary data."** Enhancement: the analytics probe should capture the full event lifecycle — not just "what did the resident search for?" but "what happened to the request after submission?" If a request enters 311 via Text 311 and is later reclassified, that reclassification event is the signal that the original classification was wrong. Instrumenting reclassifications is the only way to measure the misroute rate (JTBD Q5 — still unknown).

**Report 2 says: "invisible failures are worst in neighborhoods with the highest service needs."** Enhancement: all three instrumentation ideas should capture geographic data. When a resident abandons a search at step 3, where are they? When a query returns zero results, which neighborhood? This converts the analytics probe from a usability tool into an equity tool — revealing which neighborhoods the system fails most.

**Report 3 says: "the missing component is a unified operational layer that connects citizen input directly to administrative output and public results."** Enhancement: the analytics probe shouldn't live inside one tool (Hey804 or RVA Help). It should be a shared instrumentation layer that any front-end can emit events to. Hey804 #10 (Shared Classification API) and NEW_IDEAS #4 (Analytics Probe) should be designed as a pair: one classifies, the other observes.

### Risk flag

**Instrumentation without action is surveillance.** If the City captures what residents search for but doesn't act on the findings, it's collecting data for its own sake. Report 2 (FixMyStreet): "an unaddressed report on a public platform can lead to a decrease in civic trust." The same applies to analytics: if the probe reveals that 45 people searched for "landlord" and got zero results, and nothing changes, the tool has documented failure without fixing it. Enhancement: every analytics report should include "recommended action" — not just "here's what happened."

---

## Theme 6: Geographic and Demographic Equity

### What the research says

Report 2 (FixMyStreet Brussels): participation skews toward higher-income, ethnically homogenous districts. "Without intentional design, crowdsourced civic participation platforms can inadvertently marginalize the very communities they seek to empower." Report 1: geographic equity is a core metric family — "service quality by neighbourhood/district." Report 3: "equity as a core metric — every report card must explicitly measure service delivery speed and quality across different socio-economic and geographic lines."

### Ideas that address this

**Measurement ideas (do we know if service is equitable?):**

| Source | Idea | Current approach |
|--------|------|-----------------|
| NEW_IDEAS #20 | MBE/SWaM Spend Tracker | Cross-reference Socrata vendors with SWaM certification; % by department, over time |
| CivicPulse AI #7, Mira #7, RVA Contract Lens #4, Vendor Contract Mgmt #9 | MBE/SWaM Dashboards (4 team variants) | All functionally identical to NEW_IDEAS #20 |

**Access ideas (do excluded populations have a way in?):**

| Source | Idea | Current approach |
|--------|------|-----------------|
| NEW_IDEAS #8 | Human-Verified Spanish Translation | Full wizard in professionally translated Spanish; domain glossary |
| NEW_IDEAS #5 | Phone-First Service Navigator | SMS-based; works on flip phones; deterministic routing |
| NEW_IDEAS #7 | Library Kiosk Mode | Touch-optimized tablet UI at library branches; interpreter button |
| Hey804 #8 | SMS Channel Extension | Same classification logic, delivered via SMS |
| Hey804 #9 | Community Kiosk | Tablet with voice input at libraries/community centers |
| Text 311 #3 | Spanish-First Bilingual Pilot | End-to-end Spanish test with real Spanish-speaking residents |
| Text 311 #9 | Community Organization SMS Bridge | Trusted orgs submit on behalf of residents who won't touch government systems |
| RVA Help #6 | Full Spanish-Language 311 Submission | Validated Spanish submission flow; test AI accuracy in Spanish |

### Grade: Strong on access, weak on measurement

The access ideas are the strongest equity cluster in the corpus. Text 311 #9 (Community Organization SMS Bridge) is the most research-aligned — it addresses the trust barrier, not just the language barrier, by routing through organizations residents already trust. NEW_IDEAS #8 correctly identifies that Richmond's Language Access Plan prohibits relying on machine translation for vital services — a constraint every other multilingual idea ignores.

The measurement side is thinner. Five teams built MBE/SWaM spend trackers, but all five are blocked on the same dependency (vendor name matching + SWaM database access). More importantly, no idea in the corpus proposes measuring *service delivery equity for residents* — whether neighborhoods get the same 311 response times, the same completion rates, the same quality of resolution. The procurement equity tools exist; the service equity tools don't.

### Enhancement from the research

**Report 2 says: crowdsourced platforms skew participation toward affluent districts.** Enhancement for ALL service navigation tools: measure adoption by neighborhood. If the deterministic wizard (NEW_IDEAS #1) gets 80% of its traffic from the Fan District and 2% from Southside, the tool is widening the equity gap. Every tool should report geographic usage alongside overall usage.

**Report 1 says: "geographic equity (service quality by neighbourhood/district)" is a core metric family.** Enhancement (new): the corpus is missing a **Service Delivery Equity Heatmap** — a map showing 311 response times, backlog depths, and completion rates by neighborhood. This requires 311 data publication (the key blocker), but it's the measurement tool that would make all the access tools meaningful. Without it, the City can build Spanish-language intake and library kiosks but has no way to verify they changed outcomes.

**Report 2 says: "without intentional design, crowdsourced civic participation platforms can inadvertently marginalize."** Enhancement for Text 311 #9 (Community Organization SMS Bridge): this is the most equity-aligned idea in the corpus because it addresses *trust*, not just *access*. Report 2's FixMyStreet Brussels data shows that technical access (having a phone, speaking the language) is necessary but not sufficient — trust in the system determines whether people use it. Enhancement: pilot the community bridge in one neighborhood with one organization, measure adoption, and document what works before scaling. Report 2's evidence gating principle: "release subsequent funds only when verifiable outputs are provided."

### Risk flag

**MBE/SWaM measurement is blocked on vendor identity resolution (NEW_IDEAS #14).** All five team variants acknowledge this. Until 735 vendor strings are deduplicated, no MBE/SWaM percentage is reliable. The equity tool depends on the data quality tool. This is the one legitimate dependency chain in the corpus: #14 must precede #20.

---

## Theme 7: Institutional Survivability

### What the research says

Report 2: only ~5% of hackathon projects remain active after five months. The "Second Act" kills most civic tech — maintenance, funding, scaling. The Farrell-Coburn framework identifies four preconditions for institutional absorption: prior related knowledge inside the agency, communication pathways from the innovation entry point to decision-makers, strategic knowledge leadership, and resources to partner. Report 1: "Stat" programmes degrade into theatre without analytic staff, clear priorities, and leadership follow-through. Report 2: Apps for Democracy produced 47 applications worth $2.3M — the district adopted none.

### Ideas with the highest survivability

| Source | Idea | Rubric Score (Pillar/Mayor's) | Survivability assessment |
|--------|------|------------------------------|--------------------------|
| NEW_IDEAS #12 | Contract Expiry Dashboard | 93/99 | **Highest.** Data is public, clean, and requires zero partnerships. One person can build and maintain it. The institutional home is obvious (Procurement). |
| NEW_IDEAS #19 | Contract Expiry Alerts | 93/99 | **Highest.** Same data as #12. Push model stickier than pull. Pairs with #12. |
| NEW_IDEAS #1 | Deterministic Service Wizard | 93/95 | **High.** No AI dependency. JSON taxonomy auditable by 311 staff. No API needed. The institutional home is CSR/311. |
| NEW_IDEAS #14 | Vendor Identity Resolution | 91/95 | **High.** ETL + review queue. Data is public. Procurement staff are the users AND the maintainers. |
| NEW_IDEAS #6 | Symptom Cross-Dept Triage | 93/95 | **Medium-high.** Needs SME time with 311 operators to curate rules. Rules must be maintained as business logic changes. |
| NEW_IDEAS #16 | Decision Timeline | 87/85 | **Medium.** Requires staff behavior change. Value accrues only over time. No crisis moment forces adoption. |
| RVA Contract Lens #10 | Open-Source Federated Search | Not scored | **Low.** Open-sourcing requires 3-6 months of code quality, documentation, and security review. No institutional sponsor for post-hackathon maintenance. |

### Grade against the research

The rubric's existing top picks (#12, #19, #1, #14, #6) are well-calibrated. The research confirms these choices through a different lens:

**#12 and #19 (Contract Expiry Dashboard + Alerts)** survive the Farrell-Coburn test: Procurement has prior related knowledge (they manage contracts), communication pathways exist (it's their workflow), leadership presumably wants fewer missed renewals, and the resource cost is near zero (one Socrata API call). Report 2 would call these "high P(implementation)" — the probability of adoption is high because the tool replaces an existing pain (Outlook calendars) with something obviously better.

**#1 (Deterministic Service Wizard)** survives because it has no dependencies. No API, no AI, no data partnership. A JSON file of 50-70 categories, a web form, and a fallback to 311 phone. Report 2's "skill matching" predictor applies: this is a content curation task, not an engineering task. The CSR/311 team could maintain the taxonomy themselves.

**#14 (Vendor Identity Resolution)** survives because the output is immediately useful to the people who maintain the data. Unlike analytics dashboards that generate reports nobody reads, vendor dedup produces a canonical lookup table that procurement staff use every day.

### Enhancement from the research

**Report 2 says: "release subsequent funds only when verifiable outputs are provided" (evidence gating).** Enhancement for ALL ideas: define a 90-day pilot gate. What metric proves the tool is working? For #12: "% of contracts reviewed before 30-day expiry window." For #1: "% of 311 submissions correctly routed on first attempt" (requires the analytics probe from Theme 5 to measure). For #14: "number of canonical vendor records confirmed by procurement staff." Ideas without a measurable gate should not proceed past pilot.

**Report 2 says: "teams with expansion intent are more likely to persist."** Enhancement: frame every pilot as answering a specific question for City leadership, not as "deploying a tool." #12 answers: "How many contracts are we missing renewal windows on?" #1 answers: "Can we reduce misroutes without AI?" These framing questions give City leadership a reason to keep the pilot alive — they want the answer, not just the tool.

**Report 1 says: "make the organisational cadence a first-class requirement."** Enhancement for #16 (Decision Timeline): the decision log only works if someone reviews it regularly. Pair it with a monthly or quarterly "portfolio review" meeting where procurement leadership reviews the decision log for patterns. Report 1's central insight from CitiStat: the meeting cadence is the technology. Without it, the log is a database nobody queries.

### Risk flag

**RVA Contract Lens #10 (Open-Source Federated Search)** has the worst survivability profile in the corpus. Report 2's continuation research: immediate high activity post-hackathon is a *negative* predictor of long-term success. Open-sourcing requires sustained, moderate effort over months — documentation, security review, community management. No institutional sponsor exists. The idea is strategically sound (Report 2: "read/write society reduces the need for large bureaucracies") but operationally unrealistic without a dedicated maintainer.

---

## Ideas Outside the CATS Lens

The following ideas are standalone workflow tools that don't touch CATS themes. They may be valuable on their own terms but are not graded here:

- Mira #10 (Contract Comparison — side-by-side term analysis)
- RVA Contract Lens #6 (Vendor Protest Window Tracker)
- RVA Contract Lens #2 (Scoring Model Calibration)
- CivicPulse AI #5 (Adopt OpenGov + AI Extraction)
- Vendor Contract Mgmt #5 (Enhance OpenGov with Two-Sided Architecture)
- Vendor Contract Mgmt #10 (Vendor Compliance Self-Check)
- Text 311 #10 (Off-Hours Coverage Gap Filler)
- Hey804 #6 (Crisis Response Content Pipeline)
- RVA Help #3 (Google Maps Location Capture)
- Hey804 #7 (Progressive Disclosure for Complex Processes)
- Text 311 #4 (Duplicate Detection Dashboard)
- RVA Help #7 (AI Confidence Scoring with Triage Flags)

These ideas have their own value — assessed in their respective team `solution_ideas.md` files.

---

## Cross-Theme Findings

### The two ideas the research elevates above their rubric scores

1. **NEW_IDEAS #4 (311 Analytics Probe)** — Rubric: Pillar 84, Mayor's 88. Research assessment: this should be the first thing any service navigation tool ships. It is the only proposed mechanism for measuring invisible failures, misroute rates, and geographic equity in digital access. Every other service navigation improvement is unmeasurable without it.

2. **Text 311 #9 (Community Organization SMS Bridge)** — Not separately scored in the rubric. Research assessment: this is the most equity-aligned idea in the entire corpus because it addresses trust, not just access. Report 2's FixMyStreet Brussels data shows that trust — not technology — determines whether marginalized populations use civic tools.

### The one idea the research demotes below its rubric score

**AI-generated narrative/summary tools** (RVA Contract Lens #9, Vendor Contract Mgmt #7, Mira #6's optional AI summaries). The rubric doesn't penalize narrative generation. The research does — Report 3 flags spin risk; Report 1 insists every number must be auditable; Report 2 warns that depoliticized "algorithmic citizenship" substitutes efficiency for accountability. These tools are fine as long as every AI-generated statement links to a source record. Without that constraint, they are the highest-risk pattern in the corpus.

### The critical blocker the research confirms

**Publishing current 311 data** is the single highest-leverage action for the entire Thriving City Hall pillar. Without it:
- Feedback loop ideas (#11, Text 311 #6, RVA Help #5) have no data source
- Event instrumentation (#4) can only measure its own tool, not the citywide system
- Geographic equity measurement is impossible
- The service delivery equity heatmap can't exist

The 311 operations outreach letter (drafted, not sent) asks about this. Report 1 confirms it's a policy decision, not a technology one — Norfolk, NYC, and Chicago all publish 311 data. Richmond's rejected 2025 FOIA ordinance shows this is politically contested. The Office of Performance Management is the institutional lever.
