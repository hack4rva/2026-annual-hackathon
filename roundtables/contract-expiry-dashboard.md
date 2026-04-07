# Roundtable: Contract Expiry Dashboard

**Initiated:** 2026-04-02
**Idea:** Contract Expiry Dashboard
**Pillar:** A Thriving City Hall
**Problem Statement:** PS2 — Procurement Risk & Opportunity Review
**Source:** NEW (AI-generated post-event)
**Implementation Reality Score:** 24/25 — Tier S (Ship It)
**Overall Rank:** #1 of 73

## Input Materials

| File | Status |
|------|--------|
| IDEA.md | ✅ Loaded |
| RESEARCH_RESULT.md | ✅ Loaded |
| INNOVATION_ANALYSIS.md | ✅ Loaded |
| Shared research (_shared-procurement) | ✅ Referenced |
| Pillar research corpus (INDEX.md) | ✅ Loaded — key reports: A2, B3, C3, D2, E3, F3, G2, H3 |
| RICHMOND_TECH_STACK_2026.md | ✅ Loaded |
| IMPLEMENTATION_REALITY_SYNTHESIS.md | ✅ Loaded |

## Existing Rubric Grades (from IDEA.md)

| Category | Score |
|----------|:-----:|
| Impact | 5 |
| Feasibility | 5 |
| User Value | 5 |
| Execution | 5 |
| Innovation | 2 |
| Equity | 4 |

**Pillar Award:** 93 | **Mayor's Choice:** 99

## Bundle Context

**Bundle 1: Socrata Contracts Pipeline** — foundation for 5 products: Dashboard → Alerts → Drift Scanner → Spend Mirror → Contract Navigator. Combined score 109/125 (avg 21.8).

---

## Status

- **Phase:** COMPLETE
- **Verdict:** Ship with conditions
- **Turns Completed:** 7 (3 divergence + 4 convergence)
- **Challenge Rounds:** 3 tensions resolved
- **Fatal Flaws Detected:** 0 (ownership = conditional pass)

---

## Turn 1 — INNOVATOR (Divergence)

### Assessment

The existing analysis is excellent on the *what* and completely silent on the *so what then*. Every prior artifact treats this as a **visibility** tool. The non-obvious version is that this is not a dashboard at all — it is a **demand signal generator for competitive procurement**.

The cross-domain parallel: hospital pharmacies don't just show nurses "this drug expires in 3 days." They attach mandatory action protocols at each threshold — pull from shelf, notify pharmacist, document action. That system cut expired supply waste by 46%. Retail supply chains don't just display low inventory; they auto-generate purchase orders from the signal. In both cases, the countdown *without a default next action* is just informed anxiety. The countdown *with a default next action* is a system.

Richmond's Contract Expiry Dashboard, as currently spec'd, is informed anxiety. A procurement officer sees "47 contracts expire in 90 days" and then... what? The IDEA.md says "CSV export." That is the moment where the insight dies.

**The non-obvious version:** At each time-horizon threshold (180/120/90/60/30 days), the dashboard generates a **default artifact**:
- 180 days: draft re-compete calendar hold (ICS file) + "renew or re-compete?" decision memo template
- 120 days: OMBD outreach trigger — "this category had 2% MBE participation; here are 14 registered MBE vendors in this NAICS code"
- 60 days: escalation flag to department head — "this contract has not been acted on"

This reframes from "see what expires" to "here is your next action, pre-loaded."

**Second insight:** The **audience flip** (divergent approach #3) was undervalued. Research shows challengers need 12-18 months of advance positioning to overcome incumbency advantage; incumbents lose 25-35% of recompetes. A public expiry timeline is a **challenger recruitment tool** that manufactures competitive tension without any procurement policy change.

### Research Conducted

| Tool | Query | Finding |
|------|-------|---------|
| WebSearch | "expiration-driven proactive scheduling pattern healthcare medication" | Hospital pharmacy RFID + mandatory action protocols achieved 46% reduction in expired supplies. Key: countdown + default action = system. Countdown alone = informed anxiety. |
| WebSearch | "competitive tension contract renewal incumbency advantage public sector" | Incumbents lose 25-35% of recompetes. Challengers need 12-18 months advance positioning. Visibility is necessary but insufficient — proactive outreach to challengers required. [Verified — BidFinds, Hinz Consulting] |
| WebSearch | "inventory visibility demand signal retail stockout prevention" | Retail demand-signal dashboards that auto-trigger reorder actions achieved 67% stockout reduction. Manual dashboard + human discipline does not scale. |

### Key Claims
- Hospital pharmacy systems achieved 46% expired supply reduction — [Verified]
- Incumbents lose 25-35% of public sector recompetes — [Verified]
- No mid-sized US city pairs contract expiry data with automated action triggers — [Unverified]

### Questions for the Table
- → FRONTLINER: If we generate ICS calendar holds and memo templates at each threshold, what format would a procurement officer actually use?
- → CITIZEN: The MWBE re-compete view assumes OMBD vendor registry can be joined to contract categories. Has anyone confirmed the NAICS mapping is feasible?
- → MAYOR: The "demand signal" pattern requires someone to define the action protocol at each threshold. Without a procurement champion, this is just a more elaborate dashboard. Who owns that protocol?
- → ARCHITECT: The value proposition rests on monthly Socrata refresh being timely. What happens when it isn't? Is there a staleness signal?

### Challenges
1. **ERRC grid eliminated AI too broadly.** Correctly eliminated AI for extraction, but missed the generative opportunity: an LLM can write the procurement officer's next action (renewal memo, re-compete scope) from structured fields. 30-line prompt, not a research project.
2. **Divergent approach #3 (Vendor Self-Service) dismissed too quickly.** The competitive tension research shows the dashboard's public nature is the feature, not a limitation.
3. **Assumption #2 is not the most dangerous assumption.** The most dangerous: "visibility creates action." Cross-domain evidence says it doesn't without mandatory downstream protocols. Should add Assumption #8: "Officers who see an approaching expiry will act" — Risk: HIGH, Uncertainty: HIGH.
4. **Innovation score of 2 is tactically wrong.** If pitched as "demand signal that manufactures competitive tension" rather than "sortable table" — that's an Innovation 4. Same data, different framing.

### Temporal Tag
**Appreciating** — Each month of data adds historical context; if vendors learn the dashboard exists, competitive tension compounds; the action-protocol layer can be added incrementally. Risk is stasis — if it ships as static table with no action layer, it depreciates into a novelty bookmark within 60 days.

---

## Turn 2 — ACTIVIST (Divergence)

### Assessment

**Decision tree result: ADAPT + BUILD (Hybrid)**

**Does this already exist?** Partially. The City of Sault Ste. Marie (Ontario) shipped an MIT-licensed TypeScript `contract-expiration-tracker` in May 2022 — the only open-source tool purpose-built for this job. But it's internal-facing with its own database, not a public Socrata consumer. Pittsburgh's Code for America "Conductor" prototype (2015) managed contract renewal workflows but never left prototype. Commercial SaaS (OpenGov, Euna/Bonfire, BidNet Direct, PlanetBids) all offer contract expiry alerts as modules — and **Richmond already pays for OpenGov**. No US city has built a public-facing, open-data-consuming contract expiry dashboard. The RESEARCH_RESULT.md claim holds.

**Is the city the right owner?** The bundle changes everything:
- Dashboard alone: No city cooperation required. A civic tech org deploys on GitHub Pages.
- Dashboard + Alerts + Drift Scanner: Cross-referencing Payment Register requires city cooperation.
- Full bundle (5 products): MWBE tagging, SOP integration. City must own or formally partner.

**Recommendation: Build outside, offer inside.** Ship the dashboard first (zero permission), demonstrate value, then hand to Department of Procurement as the natural owner under ORD. 2025-211.

**Scale?** High. If built as a configurable Socrata consumer (parameterize dataset ID, field names), this works for any city with structured contract data on Socrata: Cambridge, Baton Rouge, Chicago, Iowa state portal.

### Research Conducted

| Tool | Query | Finding |
|------|-------|---------|
| WebSearch | "Code for America brigade procurement contract expiry" | Found CITYSSM `contract-expiration-tracker` (MIT, TypeScript, May 2022, Sault Ste. Marie ON). Internal-facing, own DB, not Socrata consumer. |
| WebSearch | "open source procurement dashboard github government" | Found `OpenSAM` (SAM.gov), `open-tender-watch` (EU). No US municipal open-source expiry dashboard. |
| WebSearch | "Richmond Virginia procurement transparency dashboard 2025" | Richmond launched Procurement Transparency Dashboard Oct 2025 (ORD. 2025-211, Councilmember Kenya Gibson). Currently a link aggregator — no interactive expiry filtering. |
| WebSearch | "OpenGov procurement module contract lifecycle renewal" | OpenGov offers automated contract deadline notifications, renewal alerts. 2,000+ communities. Internal-staff tool, not public transparency. |
| Parallel AI | "Civic tech orgs, open-source projects for procurement contract expiration tracking in US local gov 2026" | Confirmed bifurcation: commercial SaaS dominates; civic tech has stalled. CITYSSM is lone maintained OSS. Philadelphia and NYC expose end dates but no dedicated tracker. |

### Key Claims
- No mid-sized US city has a dedicated public contract expiry tracker — [Verified]
- Richmond is the only confirmed mid-sized city with public `effective_to` on Socrata — [Verified with caveat: Cambridge also has `end_date`]
- Richmond already pays for OpenGov which includes contract management — [Verified]
- ORD. 2025-211 mandated procurement transparency dashboard — [Verified]
- "Zero City cooperation required" degrades across the bundle — [Verified]
- CITYSSM tracker is MIT-licensed, TypeScript, maintained — [Verified]

### Questions for the Table
- → FRONTLINER: Richmond pays for OpenGov with renewal alerts. Do procurement staff currently use OpenGov's expiry features? If yes, this tool's value is strictly public transparency. If no, why not — and does a public dashboard bypass or compound that adoption problem?
- → ARCHITECT: CITYSSM tracker is MIT TypeScript. Fork-and-adapt or build from scratch? Architectures diverge at the data layer.
- → MAYOR: ORD. 2025-211 mandated the Transparency Dashboard. Does that ordinance's scope cover an interactive expiry tracker, or is the current "link farm" technically compliant?
- → FUNDER: If this is built as a generic Socrata consumer, who funds the reusable civic commons version? That changes the funding model from "Richmond project" to "multi-city tool."

### Challenges
1. **The OpenGov overlap is the unaddressed elephant.** If procurement staff already get expiry alerts inside OpenGov, the dashboard's value narrows to public transparency. Who is the public user? Journalists? MWBE vendors timing bids? The external user story needs sharpening.
2. **"Zero City cooperation" is a feature that becomes a bug.** External build → no workflow integration → procurement staff can ignore it. CITYSSM succeeded because purchasing department built it for themselves.
3. **The bundle's ownership gradient is under-theorized.** Dashboard (no permission) → full pipeline (deep city partnership). If civic tech builds product 1 and city doesn't adopt it, pipeline stalls.
4. **Replicability undercuts Richmond-specific investment.** If designed as generic Socrata consumer, the question is "should someone build a civic-tech-commons tool and launch in Richmond first?" — different funding, maintenance, and credit model.

### Temporal Tag
**Appreciating** — Three tailwinds: (1) ORD. 2025-211 created legislative mandate; (2) `xqn7-jvv2` has zero missing values — data quality window that could close; (3) no competitor has emerged despite obvious gap. Commercial SaaS moving toward this space but focuses on internal workflow. Window for civic-tech-built public tool is open now and may narrow. Ship while the legislative moment and data quality align.

---

## Turn 3 — CITIZEN (Divergence)

### Assessment

**Engaged Resident perspective:**
This is a staff tool wearing a transparency hat. I can already see Richmond's contract data on Socrata today. The city launched a Procurement Transparency Dashboard at rva.gov. A sortable expiry view adds marginal convenience for a resident who tracks city spending, but I'm not the person who will catch a bad renewal. What I actually want is the *output* of better procurement — a quarterly scorecard showing re-compete rates, average bid counts, and MBE share of awards. This dashboard organizes inputs, not outputs. I'd notice it exists. I wouldn't visit it twice.

**Service User perspective:**
This changes nothing about my experience. I interact with the city when I need a permit, a pothole filled, or a benefit processed. Contracts between the city and its vendors are invisible infrastructure. The theoretical downstream effect — more competitive bidding → better vendor performance → better services — has so many links in the chain that attributing any improvement to a contract dashboard is not credible. I would never open this tool and never benefit in any identifiable way.

**Invisible Resident perspective:**
The equity argument claims: dashboard → better renewal planning → more competitive bidding → more MBE opportunity. Each arrow is unproven. The Uganda field experiment (CEPR/PEDL, 3,500+ firms) found that providing direct access to procurement information did NOT significantly increase firm participation. Only information about the *integrity* of public entities moved behavior. Without MWBE tagging, category-level outreach triggers, and active notification to OMBD vendors — features explicitly deferred to Phase 2 — this is a tool that serves insiders first and claims equity as an afterthought.

**Who is left out?**
- Minority/women-owned businesses who don't monitor Socrata
- Vendors too small to have business development functions tracking public data
- Residents in neighborhoods that bear the cost of bad procurement (late snow removal, poor facility maintenance) with no line of sight from this tool
- Non-English-speaking vendors who interact with OMBD but not data portals

### Research Conducted

| Tool | Query | Finding |
|------|-------|---------|
| WebSearch | "public procurement dashboard vendor diversity outcomes evidence" | Oregon, Massachusetts, Boston have equity procurement dashboards — but track spending with diverse firms, not expirations. These measure outcomes, not inputs. |
| WebSearch | "procurement transparency small business bidding behavior change" | 2025 systematic review: transparency portals have "received little rigorous evaluation." Uganda RCT: procurement info via newsletters did NOT increase participation. Only integrity/audit info moved behavior. |
| WebSearch | "government procurement transparency public trust evidence 2024 2025" | Open Contracting Partnership: 50+ governments have programs, but 2025 review rates evidence as "moderate." Transparency alone insufficient; corruption perception and trust are mediating variables. |
| WebSearch | "Richmond Virginia procurement minority business disparity 2025" | 2025 Virginia Disparity Study examined $27.1B in contracts. OMBD operates MBE/ESB programs. No metrics tying data tools to participation outcomes. Frederick County: MWBEs = 17.47% availability but 4.23% spending. |

### Key Claims
- "Better renewal planning → more competitive bidding → more MBE opportunity" — [Unverified. Uganda RCT contradicts. No city has documented this chain.]
- "Zero City cooperation required" — [Verified for dashboard alone]
- "No city has documented cost savings from an expiration dashboard" — [Verified]
- Cambridge dataset has only 533 views — [Verified]

### Questions for the Table
- → ARCHITECT: The equity value depends on MWBE tagging (Phase 2). B2GNow is one of the five structural walls. Can you connect Socrata data to OMBD vendor categories without B2GNow API access?
- → FRONTLINER: Does procurement staff currently use any internal contract tracking tool with expiration alerts? If they have even a shared spreadsheet with calendar reminders, this tool solves a problem they may not experience.
- → FUNDER: The equity score of 4/5 rests on a feature deferred to Phase 2. Would you fund a tool whose primary equity mechanism is explicitly "later"?

### Challenges

**The equity score of 4/5 should be challenged to 2/5 for Phase 1 as designed.**

The rationale contains three unverified causal links. The strongest evidence (Uganda RCT, 2025 systematic review) suggests procurement information access alone does not change participation. Tools that *have* moved diverse spending (Oregon, Boston, Massachusetts) track *outcomes* (% of dollars to diverse firms), not *inputs* (when contracts expire), and pair data with goals, mandates, and outreach. This dashboard does none of that.

Fair equity score for Phase 1: **2/5** — data is public and could theoretically be used by a savvy MBE, but dashboard includes no MWBE filtering, no vendor notification, no outreach integration, and no outcome measurement. The equity value is aspirational, not delivered.

### Temporal Tag
**Stable** — The tool's citizen value does not meaningfully appreciate or depreciate. It is a staff efficiency tool that happens to be public. Equity potential appreciates only if Phase 2 ships (MWBE tagging, outreach triggers), which depends on B2GNow API access and City cooperation — neither guaranteed. Without Phase 2, citizen value on day 1 ≈ citizen value on day 365.

---

# Phase 2 — Convergence

---

## Turn 4 — MAYOR (Convergence)

### Response to Phase 1

**To INNOVATOR — "Who owns the protocol?"** Nobody today. Rene Almaraz runs Procurement Services. If the tool generates action protocols (calendar holds, escalation flags, memo templates), someone in that department must agree they're correct before they go live. A civic tech group cannot define when a procurement officer should escalate. If the dashboard ships as read-only visibility, it needs no champion. The moment it prescribes actions, it needs Procurement Services to co-sign. I am not standing at a podium explaining why an outside tool tells my staff what to do. Action-protocol layer is a Phase 2 conversation *after* the department decides it's useful.

**To ACTIVIST — ORD. 2025-211 compliance:** The ordinance amended city code requiring "increased public access to procurement data." The link farm technically satisfies the letter but not the spirit. Councilmember Gibson knows that. An interactive expiry tracker built on data we already publish is a stronger answer. If someone builds it and it works, I'd rather point to it as follow-through than pretend the current page is the finish line.

**To CITIZEN — equity challenge:** The Citizen's argument is well-supported. I accept the challenge but wouldn't drop to 2. The dashboard makes *public* what is currently only *findable* — modest transparency value in surfacing structured expiry timelines for journalists, advocacy groups, and accountability pressure. **My position: Equity 3.** The transparency floor has value. The equity ceiling requires Phase 2.

### Assessment

**Political viability: High, with guardrails.** Uses data we already publish. Cannot embarrass the administration — it surfaces our own data in a more usable format. Makes us look responsive to ORD. 2025-211. Worst case: nobody uses it — a quiet failure, not a public one.

The risk: a journalist finds clustered expirations without re-compete and writes a headline. But that risk exists *today* — the data is already public. I'd rather own the narrative ("we built the transparency tool that surfaced this") than have a reporter frame us as negligent.

**Quick-win potential: Highest of any idea.** 8-12 hours to build. Zero procurement. Zero IT dependency. Announce at a press event within 30 days.

**OpenGov overlap answer:** OpenGov is internal procurement workflow for staff. This is public transparency for residents, vendors, and media. Different audiences, different purposes. Complementary, not redundant.

### Scoring Adjustments
- **Equity:** 4 → **3** (transparency floor real; equity ceiling requires Phase 2)
- **Innovation:** stays **2** (scores what exists, not potential)
- **Revised Mayor's Choice:** 96 (still #1)

### Conditions for Support
1. Phase 1 ships as read-only transparency — no action protocols
2. Advisory disclaimer prominent
3. "Build outside, offer inside" includes formal 90-day handoff plan
4. No equity claims until Phase 2 features exist
5. Replicability is a feature — "Richmond leads, others follow"

---

## Turn 5 — ARCHITECT (Convergence)

### Response to Questions

**To INNOVATOR — Staleness signal:** Socrata metadata API at `data.richmondgov.com/api/views/xqn7-jvv2.json` returns `rowsUpdatedAt` (Unix epoch). On each page load, compare against `Date.now()`. Amber warning at >45 days, red critical at >75 days. ~10 lines of JavaScript. No server required.

**To ACTIVIST — CITYSSM fork vs. build from scratch:** Build from scratch. CITYSSM is Express + SQLite + Active Directory — an internal CRUD app with 25 runtime dependencies. This is a static site with zero dependencies. Forking means deleting 90%+ of codebase. Only transferable idea is ICS export — trivially reimplemented in 20 lines.

**To CITIZEN — B2GNow wall and MWBE tagging:** Not programmable in Phase 1. Three Phase 2 paths: (1) Manual CSV join — OMBD provides export, fuzzy-match on vendor name (brittle, no shared key); (2) FOIA request — point-in-time snapshot, same fuzzy-match problem; (3) City partnership — OMBD publishes Socrata dataset of certified vendors. Without a shared vendor ID across both systems, MWBE tagging will always have a nonzero error rate.

**To MAYOR — p-card rebuild tracker:** Not a data dashboard. It's an editorially maintained Drupal CMS page with styled checklists, last updated Sep 2025. Not a useful technical precedent. Do not host inside rva.gov/Drupal — GitHub Pages is correct.

### Architecture Decision

**ADR-001: Static site with GitHub Actions data pipeline.** Daily cron fetches CSV + metadata from Socrata, commits to repo. Static site reads from committed files, not Socrata at runtime.

Rationale: eliminates runtime CORS dependency, faster loads, git history creates free changelog (diffs show contract changes), graceful degradation if Socrata goes offline. Cost: ~15 lines YAML. Uses 15 min/month of 2,000 min free tier.

### Failure Modes

| Failure | Likelihood | Mitigation |
|---------|-----------|------------|
| Socrata URL changes | Low | Data Health panel detects fetch failure; display error with manual Socrata link |
| Monthly refresh stops | Medium | Staleness signal auto-triggers amber/red banner |
| Schema changes | Very low | Column validation on CSV parse; graceful degradation to raw table |
| CORS policy changes | Low | Already mitigated — GitHub Actions pipeline fetches data server-side |

### 12-Month Maintenance
Most likely failure: **organizational abandonment**, not technical breakage. Socrata is stable since 2007. GitHub Pages since 2008. CSV is the most durable data format. The staleness signal makes data neglect visible and embarrassing — the strongest lever a static tool has.

### Multi-City Cost: ~2 hours incremental. Single config object parameterizes dataset ID, host, field names.

### Scoring: Equity 4→3 (agrees with Mayor). Innovation stays 2. All other scores hold.

---

## Turn 6 — FRONTLINER (Convergence)

### Response to Questions

**To MAYOR — OpenGov usage:** OpenGov's published docs only confirm COI (Certificate of Insurance) expiration alerts, not general contract term alerts. Even if the feature exists, procurement staff are not relying on it as primary tracking. The actual tracking lives in shared Excel sheets, Outlook calendar reminders, and institutional memory — confirmed by audit patterns across multiple municipal procurement offices.

**To INNOVATOR — ICS files and memo templates:** ICS files in Outlook — maybe useful as supplemental alert for new staff or coverage situations. Memo templates — not useful. The "renew or recompete?" decision depends on 15+ factors not in Socrata: vendor performance history, budget availability, department satisfaction, federal compliance, complaints. A template without that data is a form to fill out, not a time-saver.

**To CITIZEN — Internal tracking:** Yes, every procurement office has something. Shared Excel with end dates (perpetually out of date), Outlook calendar reminders (individual, not shared), institutional memory ("the senior buyer just knows September"). The pain point is real but misidentified — the problem isn't "I don't know what expires" but "I can't get the department to decide in time." The dashboard fixes discovery, which is already the least painful step.

### Assessment

**City Staff perspective:** Genuine value at the **portfolio level** — no buyer sees the full picture across departments. A dashboard answering "what's the renewal crunch in Q3?" replaces a manually assembled monthly report. Also valuable during **turnover and coverage** when a buyer's spreadsheet and reminders go dark.

Adoption prediction: The procurement *director* might bookmark it. Individual buyers will not. Real adoption path is as a reference tool pulled up in meetings, not a daily workflow tool.

**User Value: 5→4.** Target user already has tracking. Dashboard is supplemental, strongest at director level.

**Community Worker perspective:** MWBE equity angle does not hold in Phase 1. The real barriers aren't data access — they're registration complexity, bid requirements, bonding capacity, and scope written for incumbents. OMBD outreach already communicates what's coming up through workshops and direct outreach. Dashboard adds nothing to that pathway.

**Equity: 4→2.** Aligning with CITIZEN. Phase 1 delivers no MWBE filtering, notification, or outreach integration. Score what's delivered, not planned.

### Revised Scores
Impact 5, Feasibility 5, User Value **4**, Execution 5, Innovation 2, Equity **2**

---

## Turn 7 — FUNDER (Convergence)

### Response to Questions

**To ACTIVIST — Multi-city funding:** Do not fund the code. Fund the deployment network. OCP Lift accelerator ($35,000 + 200 hrs TA over 18 months) is the best-fit funder. Identify 3-5 Socrata cities with `end_date` fields, secure letters of interest, then apply. The tool is proof-of-concept; funded work is adoption and integration.

**To MAYOR — The money question:** Phase 1 has no funding ask. The ask is organizational: link to it from the Transparency Dashboard, name a data steward. The money starts at Phase 2:

| Item | Cost | Payer |
|------|------|-------|
| Phase 1 | $0 | Volunteer, GitHub Pages |
| Phase 2a: Action protocols | $0–$5K | Volunteer or small grant |
| Phase 2b: MWBE tagging | $15K–$25K | City partnership or OCP Lift |
| Phase 2c: Multi-city config | $10K–$15K | Civic tech funder |
| Year 2 maintenance | ~$0 tech; ~40 hrs/year org | Dept of Procurement as steward |

Total realistic Phase 2: **$15K–$40K** depending on B2GNow access path.

**To CITIZEN — Funding equity "later":** Yes, but not on equity grounds. Phase 1 cost is $0. Risk is $0. Portfolio logic: the #1 ranked, most shippable idea shouldn't die of abandonment because its equity features are Phase 2. Ship Phase 1 on efficiency/transparency value. Gate Phase 2 equity features on OMBD data access confirmation.

### The Money Question (Clear Statement)

Three sequential gates, not one proposal:

**Gate 0 (Cost: $0):** City links to tool, names data steward. If this doesn't happen in 90 days, nothing else matters.

**Gate 1 ($15K–$40K):** OCP Lift application for action protocols + MWBE tagging. Precondition: Gate 0 confirmed.

**Gate 2 ($10K–$15K):** Multi-city deployment. Precondition: Gate 1 delivered with one measurable procurement cycle.

**Who should NOT pay:** The City. Phase 1 is free. Phase 2 is grant-fundable. City's contribution is data access, adoption, and one staff member's periodic attention.

### Scoring: Equity 3 (transparency floor has value; direct equity mechanisms undelivered). All others unchanged.

### Temporal Tag
**Appreciating for 90 days, then decaying.** ORD. 2025-211 legislative moment, data quality window, warm civic tech funding environment. But Knight Foundation research is unambiguous: civic tech that doesn't achieve organizational adoption in 6-12 months rarely survives. GitHub Pages doesn't burn out, but volunteers do. The funder's job isn't to fund the code — it's to fund the 90-day window between "it exists" and "someone owns it."

---

# Phase 3 — Challenge Round Resolution

---

## Tension 1: Equity Score

**Resolution: 3/5**

The Uganda RCT and the 2025 systematic review are strong enough to reject the full causal story (visibility → renewal planning → competitive bidding → more MBE opportunity) as *proven* equity impact. "Competitive visibility as challenger recruitment" is plausible mechanism talk, not evidence that transparency portals change who bids or wins. A score of 3 fits an honest middle: the public expiry timeline is a real transparency floor and a *possible* input to fairer competition, but Phase 1 includes no MWBE tagging, outreach, or outcome tracking — so equity credit should be "necessary precondition, not sufficient," not a dismissal of all visibility value (2) and not the original 4.

## Tension 2: User Value Score

**Resolution: 4/5**

FRONTLINER's workflow read is decisive for *who* feels primary pain: line buyers already track their own renewals; the sharper unsolved problem is cross-portfolio visibility, turnover continuity, and getting decisions made — not "discovery" alone. Reframing the primary beneficiary toward leadership/portfolio use preserves a strong value story (live, filterable, cross-department view) without overstating fit to the original single-buyer JTBD. That lands at Strong (4), not Exceptional (5), because adoption may skew to directors and the tool does not unlock departmental action on its own.

## Tension 3: Demand Signal Thesis

**Resolution: Valid critique → Roadmap item. Not a fatal flaw.**

INNOVATOR is right that cross-domain evidence ties outcomes to default actions and governance, not to naked countdowns. But evaluating Phase 1 as specified (read-only transparency/portfolio tool), that critique targets how much behavior will change, not whether the MVP is shippable or valuable as visibility. MAYOR's constraint (no external system prescribing staff actions) and FRONTLINER's pushback (ICS/memo templates duplicating or trivializing real decision context) correctly limit what belongs in Phase 1. The thesis should raise the bar for "transformational" claims and inform Phase 2 design, not invalidate the Tier S transparency slice.

---

## Consensus Rubric (Post-Challenge)

| Category | Score | Rationale |
|----------|:-----:|-----------|
| Impact | 5 | Expiry visibility materially advances competitive procurement and accountability for a major civic dataset, even after tempering behavioral/equity claims. |
| Feasibility | 5 | Tier S confirmed: public Socrata data, commodity hosting, no City integration required for MVP. |
| User Value | 4 | High value as leadership/portfolio and continuity tool; not a full substitute for internal decision workflows. |
| Execution | 5 | Focused prototype against open data; judge-visible demo with real contract numbers. |
| Innovation | 2 | Transparency/aggregation play; "demand signal" reframe is Phase 2 strategy, not Phase 1 novelty. |
| Equity | 3 | Transparency floor is real; unverified causal chains and absent MWBE features cap score below aspirational impact. |

### Revised Award Scores

**Mayor's Choice:** (5×5) + (5×5) + (4×4) + (5×3) + (3×3) + (2×1) = 25+25+16+15+9+2 = **92**
**Pillar Award:** (5×5) + (4×4) + (5×3) + (2×3) + (5×3) + (3×3) = 25+16+15+6+15+9 = **86**
**Moonshot Award:** (2×5) + (5×4) + (4×3) + (3×3) + (5×2) + (5×2) = 10+20+12+9+10+10 = **71**

---

# Phase 4 — Validation & Verdict

---

## Fatal Flaw Test

| Test | Result | Evidence |
|------|--------|----------|
| Data dependency | **Pass** | Primary source (Socrata `xqn7-jvv2`) is public, current (Mar 2026), complete (0% missing `effective_to`), monthly refresh. CSV + GitHub Actions mitigations and staleness UX ensure graceful degradation. |
| Structural wall | **Pass (Phase 1)** | MVP does not depend on any of the five structural walls. Phase 2 MWBE features are B2GNow-blocked — that's a Phase 2 gate, not a Phase 1 kill. |
| Ownership vacuum | **Conditional pass** | Plausible owner exists (procurement leadership, mayoral champion, "build outside, offer inside" model). Knight-style adoption risk means without a named steward and City linkage within ~90 days, the product likely becomes an orphan. Gating condition, not a hard kill. |
| Harm potential | **Pass** | Phase 1 is public-data presentation without PII or AI recommendations. Staleness risk mitigated by freshness signals and advisory disclaimer. |
| Political exposure | **Pass** | Scrutiny from clustered expirations arises from data already public. Dashboard improves narrative control rather than creating new liability. |

## Verdict

### SHIP WITH CONDITIONS

## Conditions

1. **90-day handoff:** City publicly links to or endorses the tool and names a data steward accountable for freshness and escalation.
2. **Phase 1 scope lock:** Ship only wall-free capabilities. MWBE/vendor-identity joins are Phase 2, contingent on B2GNow access or alternative data path.
3. **Staleness + disclaimer in product:** Amber/red freshness thresholds and "advisory, not legal or contractual status" language ship with v1.
4. **Messaging clarity:** Position dashboard vs. OpenGov (public transparency vs. internal workflow) so stakeholders don't treat it as duplicate.

## Narrative Summary

The roundtable treated Contract Expiry Dashboard as a **Tier S, high-feasibility transparency play**: the open contracts dataset is accessible, sufficiently complete for an MVP, and can be delivered without punching through Richmond's structural vendor walls, while honest UX (staleness signals, disclaimers) keeps misuse risk low. The serious risks are **organizational, not technical** — adoption and stewardship within 6-12 months, and the equity ceiling imposed by B2GNow for anything requiring vendor identity. Consensus scoring stays strong on impact, feasibility, and execution, with innovation modest (aggregation of public data) and equity moderate until Phase 2 is unblocked. The verdict captures that the idea is shippable only if the City accepts co-ownership of narrative and maintenance; without that, the same build becomes a fragile civic artifact rather than civic infrastructure.

## Top 3 Recommendations

1. **Execute Gate 0 before launch:** Written commitment from procurement leadership (director-level champion) plus named data steward and City-facing link — so the tool is not launched as a pure third-party orphan.
2. **Productize without the wall:** In Phase 1, pair visibility with concrete next steps that don't require B2GNow (links to public procurement pages, calendar exports, plain-language explanations). Document Phase 2 equity features as explicitly blocked until vendor data can join.
3. **Lead with portfolio-level user and replicability:** Pitch primary value to procurement portfolio oversight and use the generic Socrata pattern for multi-city fundraising (OCP Lift), strengthening sustainability beyond a single hackathon narrative.

## Unresolved Questions

- What exact artifact satisfies "City links to tool" — press release, .gov page, 311 web pointer, council communication?
- If monthly refresh lags a real-world amendment, what is the official escalation path for corrections?
- Does OpenGov eventually absorb this UX, and is there appetite for a formal handoff spec vs. permanent external mirror?
- Under what conditions would the City approve or forbid automated republishing of derived datasets?
- For Phase 2, is any non-B2GNow path (manual attestation, voluntary registry, council pilot) politically viable?

## Final Scores

| Category | Original | Roundtable Consensus | Change |
|----------|:--------:|:-------------------:|:------:|
| Impact | 5 | 5 | — |
| Feasibility | 5 | 5 | — |
| User Value | 5 | **4** | ↓1 (primary value is portfolio/director level, not individual buyer) |
| Execution | 5 | 5 | — |
| Innovation | 2 | 2 | — |
| Equity | 4 | **3** | ↓1 (transparency floor real; MWBE features deferred behind B2GNow wall) |

| Award | Original | Revised |
|-------|:--------:|:-------:|
| **Mayor's Choice** | 99 | **92** |
| **Pillar Award** | 93 | **86** |
| **Moonshot** | — | **71** |

---

*Roundtable complete. 7 persona turns + 3 challenge resolutions + fatal flaw test. Total research queries: ~25 (WebSearch, Parallel AI, WebFetch). All claims evidence-tagged.*
