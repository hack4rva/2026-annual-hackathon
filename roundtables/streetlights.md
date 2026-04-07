# Roundtable (Condensed): StreetLights

**Date:** 2026-04-02  
**Slug:** `streetlights`  
**Pillar:** A Thriving and Sustainable Built Environment (Pillar 6)  
**Problem alignment:** MAP — Infrastructure Project Visibility (PS1)  
**Team (IDEA.md):** Team Aurea — J.R. Tuggle High School  

---

## Input materials

| Source | Status |
|--------|--------|
| `thriving-built-environment/streetlights/IDEA.md` | Loaded |
| `.../RESEARCH_RESULT.md` | Loaded |
| `.../INNOVATION_ANALYSIS.md` | Loaded |
| `ideas/RICHMOND_TECH_STACK_2026.md` | Loaded |
| `pillar-thriving-built-environment/research/INDEX.md` | Loaded |

**Cross-check:** Official Richmond CIP materials describe a quarterly-updated ArcGIS Capital Project Dashboard with district filters, phases, contacts, and map access via `rva.gov` / ArcGIS (`b77c76ba1e1a47a09734b7eb8d5a508b`). Research benchmarks Richmond at ~0.38 views per 1k residents/month vs. higher-engagement peer cities — supporting the “UX not data” thesis. RVA 311 is AvePoint/Dynamics with **no public API** for third-party ticket creation or readback; vendor materials describe **internal** BizTalk/Cityworks routing, not civic hackathon integrations.

---

## Simulated personas (7)

### 1 — Concerned resident (daily commuter, Union Hill)

I do not want to decode “30-60-90 design phase” when barrels show up outside my house. If I can type my address and get “what this is, about how long, who to email,” that is worth bookmarking. I already have the city dashboard link somewhere but never use it because it feels like work. Web grounding: Richmond’s own CIP page promises estimated completion, phase, and project manager contact — the gap is **getting there from “my street” in one step**.

### 2 — Neighborhood association president

Our listserv blows up every time VDOT or the City stages something without a single plain-language sentence. A radius filter and project-type filter match how we actually talk (“the sewer job,” “the road diet”). If the tool stays aligned to **authoritative** GeoHub fields and shows **last updated**, we will share it; if dates drift, we will get blamed for sharing wrong info. Research on ghost dashboards (stale layers) is the main trust risk.

### 3 — DPW / Budget & Strategic Planning ally (optimistic)

We want residents on the official narrative, not rumor. A student-built front door that queries the same Capital Projects layer and simplifies language could **increase** use of data we already publish — if it does not invent timelines or contacts. Quarterly refresh is a real constraint: any UX that implies “live” construction status without sourcing the layer’s `last edit` will create 311 noise.

### 4 — DIT / GIS steward (skeptical but fair)

The public FeatureService pattern in `INNOVATION_ANALYSIS` matches how other cities ship CIP layers; rate limits and schema changes are operational risks, not blockers for a prototype. `RICHMOND_TECH_STACK_2026.md` notes nuance around some GeoHub experiences vs. REST — the hackathon build should target **documented REST** endpoints and avoid scraping authenticated dashboards. SMS and user-generated issue stores are **new systems** with retention, consent, and abuse policy questions — outside a weekend MVP unless scoped as “mailto / link out.”

### 5 — Resident with accessibility needs (low vision, intermittent broadband)

Map-plus-list is standard but fails if WebGL or heavy widgets break on older phones; research calls out “lite” fallbacks. Plain-language text results are the inclusive core; color-only status coding needs patterns or labels. SMS alerts could help **if** they are opt-in, short, and tied to official updates — not a parallel notification empire without city alignment.

### 6 — High school builder / peer of Team Aurea

The demo that wins is: real address → real projects from Richmond’s layer → readable cards in under ten seconds. “StreetLights” as a name is catchy but sounds like **lighting-only**; judges may ask where pole-level data is. Framing as “infrastructure and capital projects near you” avoids that mismatch unless you later add a lighting asset layer (Tacoma/Bakersfield pattern — not confirmed public for Richmond).

### 7 — Equity / civic trust lens

Address-first search helps people who do not know council district boundaries. Community upvotes for “prioritization” risk **loudest-block wins** unless tied to transparent city criteria; without 311 integration, promising that upvotes drive City action is misleading. Better: signpost **RVA311** for hazards and keep the app as **transparency**, not a shadow service desk.

**Persona web / doc queries used:** Richmond CIP dashboard capabilities and quarterly cadence; civic transparency tooling landscape (general); RVA 311 / AvePoint architecture (public vs. internal integration).

---

## Top 3 tensions and resolutions

| Tension | Resolution |
|--------|------------|
| **Brand vs. scope** — “StreetLights” implies streetlight assets; IDEA is mostly general CIP from GeoHub. | Rename or subtitle on every screen (“Capital & infrastructure projects near you”); optional future: link lighting if/when a public asset layer exists. |
| **Differentiation vs. duplication** — City already ships a CIP ArcGIS Dashboard. | Own the wedge: **address-first**, plain English, mobile-first list, visible **data freshness** — benchmark engagement (research: Richmond underperforms peers on views/resident). |
| **Reporting / SMS / upvotes vs. reality** — No 311 API; SMS needs consent, infra, and possibly procurement. | **MVP:** map + list + filters + deep links to official contacts and RVA311. **Defer** “prioritized attention” language unless partnered; frame upvotes as community signal only or drop for hackathon. |

---

## Fatal flaw test

| Question | Result |
|----------|--------|
| Does the core depend on a closed wall? | **No** for read-only CIP via public ArcGIS REST (per research + stack: hackathon-realistic path). |
| Is there a trust-killing false promise? | **Risk:** SMS + “prioritized” issue handling implies operations the City cannot see without 311 — **not fatal** if scope is trimmed; **fatal** if pitched as official triage without partnership. |
| Is the problem illusory? | **No** — fragmentation and low engagement with existing dashboard are documented in `RESEARCH_RESULT.md` / `INNOVATION_ANALYSIS.md`. |

**Outcome:** No fatal flaw for a **scoped** prototype (address-first + authoritative GeoHub + honest timestamps). Fatal if unscoped claims stand.

---

## Verdict

**Strong — proceed with scope discipline.** Ship the **Pattern A** MVP from innovation analysis (address → spatial query → plain-language cards + map). Treat SMS, route-avoidance, and community reporting as **roadmap** or “link-out” only unless the team secures explicit city partnership.

---

## Category scores (1–5) and weighted awards

Assumed rubric: Impact, Feasibility, User Value, Execution, Innovation, Equity & Inclusion (same weights as RVA Hacks judging).

| Category | Score | Note |
|----------|:-----:|------|
| Impact | 4 | Real civic gap; builds on MAP PS1; incremental to existing City dashboard. |
| Feasibility | 5 | Public GIS REST + static hosting; well-trodden pattern. |
| User Value | 4 | High if address-first + plain English; diluted if scope chases SMS/311. |
| Execution | 4 | Live-data demo is credible; broad feature list strains a weekend build. |
| Innovation | 3 | Strong UX repositioning, not a new data source; naming/content mismatch costs distinctiveness. |
| Equity & Inclusion | 3 | Mobile + plain language help; upvote model and map-only paths need guardrails. |

**Mayor’s Choice** — Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1  
→ 20 + 25 + 16 + 12 + 9 + 3 = **85**

**Pillar Award** — Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  
→ 20 + 16 + 15 + 9 + 12 + 9 = **81**

**Moonshot** — Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2  
→ 15 + 16 + 12 + 9 + 10 + 8 = **70**

---

## One-sentence summary

StreetLights is a **high-feasibility, resident-shaped front end** on data Richmond already publishes; it wins by **address-first plain language and honesty about update cadence**, and loses credibility if **SMS or “prioritized” reporting** is oversold without city systems behind it.

---

## Machine line (parent agent)

`streetlights | Strong (scope core CIP UX; reframe/defer SMS & prioritized reporting) | MC:85 PA:81 MS:70 | Address-first plain-English GeoHub CIP lookup fixes engagement where the official dashboard underperforms, as long as ancillary features do not imply 311 or live ops the stack cannot support.`
