# Roundtable (Condensed): RVA Development Tracker

**Initiated:** 2026-04-02  
**Idea:** RVA Development Tracker  
**Pillar:** Thriving Neighborhoods (Pillar 2)  
**Problem statement:** PS1 — Neighborhood Development Discovery  
**Source:** Hackathon demo (presenter: Edwin Huertas; mentor + builder)  
**Implementation reality:** **17/25 — Tier A** (per `IMPLEMENTATION_REALITY_SYNTHESIS.md` / `IMPLEMENTATION_REALITY_REVIEW.md`)

---

## Input materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded — narrative card (no formal 6-category rubric table) |
| `RESEARCH_RESULT.md` | Loaded — US city “stitch-together” tracker patterns (Accela/EnerGov + ArcGIS + Legistar) |
| `INNOVATION_ANALYSIS.md` | Loaded — ERRC grid, divergent approaches, assumption map, problem scoping scores |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — GeoHub Development Tracker layer, Legistar OData, EnerGov no public API, Plans of Development staleness note |
| `pillar-repos/pillar-thriving-neighborhoods/research/INDEX.md` | Loaded — corpus map (A–I); key hooks: D2 GIS/Legistar, H2 development-tracker MVP, G1/G3/G4/G5 risk/guardrails, I2 demo pitch |

---

## Bundle / stack context

- **Public surfaces:** GeoHub ArcGIS REST (Development Tracker: projects over $1.5M since 2016), Legistar OData (no auth; 1,000-row pagination), OpenStreetMap.  
- **Closed surface:** EnerGov citizen portal — **no public API**; replacement RFP in flight (`RICHMOND_TECH_STACK_2026.md`).  
- **Demo design:** Address in → combined list from GeoHub + Legistar → item detail → **AI plain-language summary** → meeting dates, agendas, attachments; time filters; no account.

---

## Status

- **Phase:** CONDENSED COMPLETE  
- **Verdict:** **Pilot / refine with integrity gates** (not a cold “ship,” not a kill)  
- **Persona turns:** 7 synthesized below  
- **Challenge rounds:** 3 tensions resolved  

---

## Seven personas (condensed turns)

### 1 — MAYOR (Decider)

**Assessment:** Direct fit to MAP Pillar 2 and PS1: earlier, clearer visibility into neighborhood development. **KPI candidates:** time-to-discovery for a resident (minutes vs. abandonment), comment-window participation (hard to attribute without baselines). **Owner gap:** Planning &amp; Development Review (PDR) / GIS would logically steward spatial + process truth; **no named City champion** in materials. **Decision:** **Refine** — politically attractive transparency story, but executive risk if the tool overclaims freshness or paraphrases law/plans via AI without governance.

**Bullets**

- Duplicates *directionally* what the City already fragments (EnerGov + Legistar + mappers); value is **integration and plain language**, not a new dataset of record.  
- **90–180 day pilot** is realistic only with DIT/PDR conversation on AI (AR 2.13) and GIS refresh expectations.

---

### 2 — INNOVATOR (Expander)

**Assessment:** INNOVATION_ANALYSIS correctly reframes the “product” as **connective tissue**: Colorado Springs–style **map + deep links**, not a monolith. The provocative stretch (#8 historical atlas) is **out of scope** for a hackathon survivor; the **Legistar-first** (Madison) variant is a credible pivot if EnerGov export stays blocked. **AI** is the differentiator in the demo narrative but **raises** hallucination and equity surface area (pillar research G1/G5).

**Bullets**

- **ERRC insight:** Reduce live cross-system API joins; raise **ID-based traversal** and scoped refresh honesty.  
- **Create:** Explicit **case-ID crosswalk** convention between EnerGov and Legistar — still missing city-wide.

---

### 3 — FRONTLINER (Operator)

**Assessment:** Journey in INNOVATION_ANALYSIS (Scott’s Addition homeowner) matches real friction: **expert navigation** of Legistar and EnerGov separates engaged residents from everyone else. Staff reality (pillar B3/C2): agendas and PDFs remain heavy; this tool does not replace **noticed hearings** or clerk workflows — it **routes** residents to the right artifact. **Risk:** support burden if residents treat AI summary as **staff advice**.

**Bullets**

- Nightly/periodic ETL (per RESEARCH_RESULT) beats fragile live joins; weekend demo can **simulate** ETL with curated data.  
- **Maintenance:** Someone must keep links and field mappings when Legistar or ArcGIS items change.

---

### 4 — CITIZEN (Recipient)

**Assessment:** **No account** lowers a real trust barrier (contrast sign-up-gated neighbors in pillar notes). **Digital divide:** mobile-friendly and plain language help, but **no offline / non-English default** in core IDEA.md — Implementation Reality Review flags **Spanish summaries + printable one-pager** as high-leverage follow-ons. **Fairness:** If GeoHub project status lags years, **working-class renters** still lose relative to insiders who read Legistar raw.

**Bullets**

- Wins when it says **“here is the hearing and how to comment”** with links to **primary sources**.  
- Loses if summaries **smooth over** uncertainty or stale polygons.

---

### 5 — ARCHITECT (System guardian)

**Assessment:** **Integration surface is clean for MVP** — public GeoHub + Legistar only; no AvePoint/EnerGov API punch-through (`RICHMOND_TECH_STACK_2026.md`). **Data integrity:** Development Tracker layer exists; **Plans of Development** called out as **stale (last updated June 2022)** in tech stack and gap/lifecycle reviews — **fatal if the UI hides `Date_Updated`**. Legistar: pagination and PDF attachment limits are **known** constraints. **AI:** AR 2.13 implies **DIT review** for citizen-facing generative use; model, logging, and **“advisory / verify with source”** UX unspecified in IDEA.md.

**Bullets**

- **EnerGov wall** caps “three-domain” parity with Colorado Springs until export or partnership.  
- **Honest scope banners** (cadence, coverage, &gt;$1.5M threshold) are architecturally cheap and trust-critical.

---

### 6 — FUNDER (Resource realist)

**Assessment:** **Tier A** reflects **low procurement drag** for a static/hosted consumer of public APIs. **Ongoing costs:** LLM inference at scale, monitoring, and incident response — **not modeled** in IDEA.md. **Bus factor 1** + free hosting = **classic civic-tech decay** pattern unless an org or the City co-owns hosting and backlog.

**Bullets**

- Phase 1: **external host + disclaimers**; Phase 2: **institutional MOU** or nonprofit fiscal sponsor.  
- Fund **staleness UX + bilingual summaries** before **net-new features**.

---

### 7 — ACTIVIST (Universe expander)

**Assessment:** RESEARCH_RESULT positions Richmond alongside **EnerGov + Legistar** peers (Iowa City, KC, Miami Beach pattern): **link-out**, don’t rebuild permits in Legistar. **Movement / equity framing:** A tracker that only serves **digitally fluent homeowners** can **speed gentrification literacy gaps**; activists will ask for **Civic Association boundaries**, **translated agendas**, and **historical outcomes** (denied/approved) — mostly **roadmap**, not demo.

**Bullets**

- **Comparable maturity:** Madison (Legistar IDs) and Colorado Springs (ArcGIS + cross-links) are the **credible benchmarks**.  
- **Political heat:** Historical approval atlas (INNOVATION_ANALYSIS #8) is powerful and **radioactive** — out of scope for v1.

---

## Tensions and resolutions

| # | Tension | Resolution |
|---|---------|------------|
| **1** | **AI plain-language** vs. **legal/process accuracy** (G1 hallucination; AR 2.13) | **Ship summaries only as secondary layer:** mandatory link to **source PDF/agenda**, label as **AI-generated**, no standalone legal claims; **DIT governance path** documented before City endorsement. |
| **2** | **Unified “what’s built” story** vs. **EnerGov no API** | **Accept Legistar + GeoHub as v1 truth path**; deep-link to EnerGov UI for permits; **do not imply** full permit parity until export/crosswalk exists. |
| **3** | **Weekend-viable solo build** vs. **institutional durability** | **Explicit handoff target:** PDR + GIS + (optional) nonprofit host; **open-source** repo + runbook; **bus-factor** treated as **release blocker** for “City official” positioning, not for civic beta. |

---

## Fatal flaw test

| Test | Result | Notes |
|------|--------|-------|
| Silent misrepresentation | **Fail if unchanged** | Stale GeoHub + authoritative map UX **without** `Date_Updated` / scope = **integrity fatal** for a discovery tool. |
| Structural wall | **Partial** | EnerGov API absence **limits** depth; **does not kill** Legistar+GeoHub MVP if expectations are honest. |
| Ownership vacuum | **Conditional fail** | Solo maintainer + free tier = **high orphan risk** (`IMPLEMENTATION_REALITY_REVIEW.md`). |
| AI harm | **Conditional** | Ungoverned, uncited summaries could **misinform**; mitigated by guardrails above. |

**Stated fatal flaw (unmitigated):** **Trust collapse from presenting stale or partial city data (especially GeoHub) and generative summaries without source primacy and governance** — residents act on wrong hearings or misread projects.

**With mitigations (staleness UX, citations, scoped claims, steward):** flaw **downgraded** to manageable operational risk.

---

## Verdict

### **REFINE → PILOT** (civic beta acceptable; **not** “City product” until gates clear)

**Conditions**

1. **Surface provenance:** Show **layer name, last updated, and coverage rules** (over $1.5M threshold, date range) on every GeoHub-sourced item.  
2. **AI guardrails:** Human-verifiable pointers to **Legistar/EnerGov/PDF**; disclosure; plan for **AR 2.13** review if City-linked.  
3. **Ownership conversation:** Written ask to **PDR + GIS** on refresh cadence and **case ID** conventions (per INNOVATION_ANALYSIS assumptions #1, #3, #6).  
4. **Equity backlog:** Spanish (or prioritized LEP languages) + **printable one-pager** per address — per Implementation Reality Review accelerator list.

---

## Consensus rubric (post–roundtable)

| Category | Score (1–5) | Rationale |
|----------|:-----------:|-----------|
| **Impact** | **4** | Strong PS1 fit; real friction for residents near active development; tempered by incomplete permit domain without EnerGov data path. |
| **Feasibility** | **4** | Public Legistar + GeoHub path is real; EnerGov export and ID crosswalk remain **partnership work**. |
| **User Value** | **4** | Clear “near me + hearing + agenda” JTBD; AI adds value **only** with citation discipline. |
| **Execution** | **4** | Strongest **cross-link** demo in pillar per implementation review; gaps on **staleness transparency** and **LLM ops**. |
| **Innovation** | **3** | Stitch-together pattern is **proven nationally**; novelty is **local integration + UX + AI layer**. |
| **Equity &amp; Inclusion** | **3** | No account helps; **digital-only** and **English-first AI** cap score until LEP/offline affordances ship. |

### Award-weighted scores (hackathon rubric)

**Mayor’s Choice** — Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1  
= 20 + 20 + 16 + 12 + 9 + 3 = **80**

**Pillar Award (Thriving Neighborhoods)** — Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  
= 20 + 16 + 12 + 9 + 12 + 9 = **78**

**Moonshot Award** — Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2  
= 15 + 16 + 12 + 9 + 8 + 8 = **68**

---

## Narrative summary (≤8 sentences)

RVA Development Tracker is the **right problem** for Pillar 2: Richmond already publishes the pieces (**GeoHub Development Tracker, Legistar, EnerGov portal**), but residents lack a **single, address-first** path to **hearings, agendas, and documents**. National prior art (Colorado Springs, Madison) says **deep links and honest scope** beat monolithic integration; Richmond’s **EnerGov wall** makes that pattern **mandatory**, not optional. The demo’s **AI summaries** are compelling for usability but **dangerous** without **source-first** design and **DIT-aligned** generative governance. **Implementation reality Tier A** reflects **strong public-data fit** and **low vendor-wall exposure**, offset by **bus factor 1**, **unmodeled LLM cost**, and **GeoHub staleness** that must not be hidden. The roundtable’s **fatal flaw** is **integrity**, not imagination: **silent staleness plus ungoverned paraphrase** would turn transparency into misinformation. With **provenance UI, AI guardrails, and a credible steward path**, the project remains **one of the most shippable neighborhood-discovery prototypes** in the set—as **civic infrastructure in training**, not yet as **official City product**.

---

## Top recommendations

1. **Ship honesty before features:** `Date_Updated`, thresholds, and “what this layer does **not** include” on every view.  
2. **Validate assumptions in one sprint:** 10 Legistar PC items for **EnerGov IDs** in text/attachments; one **GIS contact** on Development Tracker refresh.  
3. **Treat AI as optional module** until citation + review path exists; default UX = **structured fields + links**.

---

*Condensed roundtable. Evidence base: idea folder trio, `RICHMOND_TECH_STACK_2026.md`, pillar research INDEX + cited implementation/gap/lifecycle artifacts, `IMPLEMENTATION_REALITY_REVIEW.md` §8.*
