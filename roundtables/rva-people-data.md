# Roundtable (Condensed): RVA People Data

**Initiated:** 2026-04-02  
**Idea:** RVA People Data — Unified Public Health & Equity Data Portal  
**Path:** `2026-annual-hackathon/ideas/thriving-families/rva-people-data/`  
**Pillar:** Thriving Families — **Problem Statement 2:** Maternal Health Data Coordination  
**Stack:** Vercel-hosted app; 173 indicators / 7 official sources; GitHub Actions annual refresh; MCP connector (4 tools); custom chart builder (internal data only); live demo noted in README  

## Input Materials

| File | Status |
|------|--------|
| IDEA.md | Loaded |
| RESEARCH_RESULT.md | Loaded (US SDOH dashboard landscape, adoption drivers, equity ethics) |
| INNOVATION_ANALYSIS.md | Loaded (ERRC, assumptions, differentiation vs national tools) |
| RICHMOND_TECH_STACK_2026.md | Loaded (ACS API, federal/state open data, VDH maternal/child; AR 2.13 AI policy; hackathon static/API patterns) |
| `pillar-thriving-families/research/INDEX.md` | Loaded — corpus map: A2 maternal data maze, B3 maternal data users, D2 VDH maternal, E2 health dashboards, F3 maternal opportunities, G2 health-claims risks, H3 48hr maternal MVP, I3/I4 demo credibility |

**Implementation Reality (pillar review):** **21/25 — Tier S (Ship It)** · Overall synthesis rank **#11 of 73** (`IMPLEMENTATION_REALITY_SYNTHESIS.md`)

---

## Seven Personas

**1 — Maternal health coalition analyst / grant writer (kickoff-grounded)**  
She previously burned half a day pulling the same VDH, Census, and CDC figures as five other organizations, each with a different denominator. She needs one citation-ready place for preterm birth, Virginia benchmarks, and race-stratified views so coalition meetings stop arguing about the number before they argue about the intervention. Her success metric is minutes to a defensible fact sheet, not map polish.

**2 — Richmond-Henrico Health District epidemiologist**  
He lives in suppression rules, vintage locks, and PRAMS cadence. He will trust the portal only if every indicator shows source, geography, and as-of date—and if modeled estimates (e.g., PLACES-style layers) are labeled as modeled, not mistaken for vital records. He is a natural **domain** owner; he is not automatically a **web operations** owner (`IMPLEMENTATION_REALITY_REVIEW.md`).

**3 — CBO executive director (small nonprofit)**  
She writes federal and foundation grants and uses PolicyMap-class tools when someone pays for a license. A free, export-heavy portal with standard and “complete pack” downloads addresses Job 2 in the gap analysis: grant-ready exports without redundant manual reconciliation across agencies.

**4 — City equity / budget staff (funding-formula lens)**  
National precedent ties dashboards to dollars (e.g., tract-tiered ARPA allocations in peer jurisdictions, per `RESEARCH_RESULT.md`). He asks whether Richmond can ever use this in a memo-ready tier list—not just exploration. Without a policy hook, the tool stays “insightful”; with one, it becomes infrastructure.

**5 — Foundation or state program officer**  
She sees ten proposals citing slightly different Richmond maternal metrics. She wants a **named** local layer organizations agree to cite so review is comparable cycle to cycle. That is a governance outcome, not a feature checkbox.

**6 — Community advocate / resident**  
She uses the equity snapshot to show systemic gaps to neighbors and officials. `RESEARCH_RESULT.md` warns that race-and-place framing must avoid stigmatizing neighborhoods; she needs plain language, uncertainty signals where tract MOEs are wide, and clear “what not to use this for” guidance—not just heat maps.

**7 — DIT / AI governance steward**  
The MCP connector and any chart-builder UX touch **AR 2.13**: disclosed AI use, human oversight, and minimizing harm from personal or sensitive framing. He cares that “no web search / no hallucination” stays enforced in production and that connector consumers do not relabel portal outputs as authoritative predictions.

---

## Tensions

| Tension | A side | B side |
|---------|--------|--------|
| **Value-add vs. redundancy** | Richmond-filtered, 173-indicator, Virginia-benchmarked UX solves real coordination pain | City Health Dashboard, CDC PLACES, VDH already cover much baseline geography—**differentiation** hinges on local layers + governance (`INNOVATION_ANALYSIS.md`) |
| **Convenience vs. authority** | One portal reduces duplicate pulls | Without a stewardship council locking definitions/vintages, meetings can still disagree—“convenient” ≠ **canonical** (`gap_analysis.md`) |
| **Automation vs. methodology drift** | GitHub Actions annual refresh fights civic-tech staleness | Source agencies change methods (e.g., rare but painful vital-stats breaks); **metadata and validation** must keep pace (`lifecycle_review.md` / prior-art failure mode) |
| **AI surface vs. trust** | MCP + constrained chart builder enable workflows | Maternal health is a **misuse-sensitive** domain; connector and LLM wrappers need explicit guardrails (`G2` / `gap_analysis.md`) |
| **Equity display vs. harm** | Race-disaggregated default matches pillar goals | Small-area + race views need suppression ethics and anti-stigma framing (`RESEARCH_RESULT.md` equity section) |
| **Ownership** | RCHD is the natural mandate fit | RCHD does not today run public web apps—needs **tech partner** or DIT path (`IMPLEMENTATION_REALITY_REVIEW.md`) |
| **Admin CSV upload** | Extends the portal beyond core APIs | Raises QA, provenance, and “who may publish what” policy questions absent in read-only MVP |

---

## Fatal Flaw

**Governance without adoption is still five spreadsheets in a trench coat.** If RHHD, major CBOs, and anchor institutions do not **endorse** RVA People Data as the shared citation layer (definitions, vintages, geographies), the ecosystem keeps producing conflicting metrics—the problem statement is only half solved. The technical stack is Tier S; the **organizational lock-in** is unproven. Until that lock-in exists, the fatal flaw is **absence of binding shared definitions**, not missing APIs.

---

## Verdict

**Ship and convene stewardship, not just users.** The demo matches PS2 directly (shared metrics, exports, automation, responsible AI boundaries). Implementation reality is strong: public data only, low integration risk, automated refresh. Next critical path is a **short, explicit partnership ask** to RHHD/coalition: annual indicator validation, “cite this portal” norm, and clarity on web ops ownership. Prioritize **local administrative overlays** (evictions, code enforcement, school-linked layers) only after the canonical public stack is adopted—otherwise differentiation vs. national anchors stays debatable.

---

## Scores & Awards (1–5 rubric; illustrative, not prescriptive)

| Category | Score | Note |
|----------|:-----:|------|
| Impact | 5 | Directly targets duplicated analysis and inconsistent denominators across the maternal-health ecosystem |
| Feasibility | 4 | Built on public APIs; Tier S survivability; owner + ops gap keeps this below 5 |
| User Value | 5 | Analyst time collapse, packs, MCP for power users, equity snapshot for advocacy |
| Execution | 5 | Live product, 173 indicators, demonstrated connector and guardrailed chart path |
| Innovation | 4 | MCP-as-data-service + no-hallucination design; core “SDOH portal” pattern is crowded nationally |
| Equity & Inclusion | 5 | Race-disaggregated default and disparity framing aligned to responsible-use needs |

### Weighted totals (illustrative)

- **Mayor’s Choice** (Impact×5, Feasibility×5, User Value×4, Execution×3, Equity×3, Innovation×1): **99**  
- **Moonshot** (Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2): **88**  
- **Pillar (Thriving Families, PS2)** (Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3): **99**

**Award read:** Strong **Pillar** and **Mayor’s Choice** case if judging emphasizes implementable coordination wins; **Moonshot** is secondary unless the pitch centers novel infrastructure (MCP-backed municipal health data plane) more than consolidation.

---

## Implementation Reality (tech stack cross-check)

- **Fits:** Census ACS API, CDC PLACES/WONDER-class public paths, VDH dashboard exports, static/cloud hosting patterns in `RICHMOND_TECH_STACK_2026.md`.  
- **Not blocked by:** 311, EnerGov, B2GNow, Help1RVA, Unite Us (core read path).  
- **AI:** MCP + any generative UI → expect **AR 2.13** alignment (transparency, oversight, minimize misuse of sensitive framing).  
- **Risk:** Tech stack fit scored **3/5** in pillar review (Vercel/Next.js vs City-standard hosting)—portable, not native.

---

## Rollback / Next Artifacts

- If stewardship stalls: narrow to **frozen “meeting mode”** exports or coalition-approved indicator subset (see related concepts in `NEW_IDEAS_BLUESKY.md` / metric lock-in pattern).  
- If differentiation challenged: add **2–4 high-value local layers** with documented refresh and MOE/uncertainty UI per `RESEARCH_RESULT.md` playbook.
