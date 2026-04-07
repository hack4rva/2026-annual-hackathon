# Roundtable (Condensed): Vendor & Contract Management Web App

**Initiated:** 2026-04-02  
**Idea:** Vendor Contract Management (`thriving-city-hall/vendor-contract-mgmt`)  
**Pillar:** A Thriving City Hall — Procurement & vendor management (PS2 adjacent: *Procurement Risk & Opportunity Review*)  
**Source:** Hack for RVA demo (NEW_IDEAS / post-hackathon corpus)  
**Implementation Reality:** **13/25 — Tier B** (per `IMPLEMENTATION_REALITY_REVIEW.md`)

---

## Input Materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded — two-sided Next.js app; Firebase auth; Socrata; VITA attempt; PDF upload; AI summarization |
| `RESEARCH_RESULT.md` | Loaded — mid-city CLM modernization synthesis; RAPIDS audit history; ERP + best-of-breed pattern |
| `INNOVATION_ANALYSIS.md` | Loaded — ERRC grid, eight divergent patterns, assumption map, Pattern A vs B |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — Socrata `xqn7-jvv2`; RAPIDS/OnBase no public API; OpenGov portal no bulk API; VITA Cobblestone web-only; AR 2.13 AI governance |
| `pillar-thriving-city-hall/research/INDEX.md` | Loaded — keyed C3/D2/E3/F3/G2/H3 procurement thread |

---

## Seven Personas (Single Pass)

**1 — INNOVATOR**  
The compelling reframe from the research pack is *not* “another dashboard” but **ERP complement, not replacement**: stabilize RAPIDS as GL/AP record, layer CLM/sourcing (OpenGov-class) for documents and workflow. The demo’s PDF + AI path gestures at extraction but does not instantiate the phased playbook; the **non-obvious wedge** is a **read-only contract intelligence layer** on public data first, then negotiated integration—not a shadow repository.

**2 — ACTIVIST / Civic technologist**  
Socrata-backed views are **shippable without permission** (static or light app). Firebase dual login, vendor accounts, and AI narratives are **adoption and trust liabilities**: vendors already track awards elsewhere; the City has not mandated this front door. **Build outside, offer inside** should mean *government-facing transparency slice first*, not a parallel vendor social network.

**3 — CITIZEN**  
Residents do not experience vendor contract portals directly. Any public benefit is **indirect** (better procurement). Without outcome metrics (re-compete rates, MBE share), the citizen story is thin. The **vendor-as-user** angle is the stronger equity hypothesis than resident transparency—but **B2GNow has no API** (structural wall), so SWaM/MBE self-check remains manual or partnership-gated.

**4 — MAYOR / Executive**  
Politically, **AI-generated procurement summaries without per-fact citations** are a briefing risk under AR 2.13 and audit culture. I want **DIT-reviewed, cite-every-claim** tooling or no AI in production. A **two-sided portal** implies ongoing vendor support and policy I do not have staffed in Procurement the way Tacoma’s Ariba mandate does.

**5 — ARCHITECT**  
**Feasible core:** Socrata SODA + static or serverless UI (matches tech stack “what prototypes can use”). **Weak core:** Firebase as long-term identity for City staff (expects AD/SSO later). **Blocked:** VITA “API” — tech stack lists CobblestoneContracts as **no API**; PDF upload does not scale to OnBase truth. **AI summarization:** model unspecified → governance and observability gap.

**6 — FRONTLINER (Procurement)**  
I need **one system of record**, not a fourth place (RAPIDS, SharePoint, Excel, your app). If this only **mirrors Socrata** with prettier cards, I might bookmark it; if it asks vendors to log in **without** replacing iSupplier/OpenGov flows, I will not drive adoption. **“Cheap alternatives” and AI blurbs** worry me unless every number links to a row in `xqn7-jvv2` or a named document.

**7 — FUNDER**  
Tier B and **maintenance burden 2/5** mean **ongoing dev**, not a $0 static site. I fund **narrow slices**: (a) public portfolio view from open data, (b) optional grant for SAM/eVA alignment *if* scoped like H3 procurement MVP—not full CLM. **Do not fund** uncited AI procurement narratives at scale.

---

## Tensions (Condensed)

| # | Tension | Resolution lean |
|---|---------|-----------------|
| **A** | **Ambition vs. weekend truth** — Full two-sided CLM vs. what open data can support | **Scope to Socrata-first** government view; treat vendor portal + VITA as Phase 2+ |
| **B** | **Shadow system risk** — External repo + AI vs. RAPIDS/OnBase authority (INNOVATION Assumptions 1–2) | **Read-only mirror** + explicit “not system of record” + auditor conversation before any write path |
| **C** | **AI value vs. G2/G5 guardrails** — Narrative without citations vs. VPPA/compliance culture | **Cite-or-suppress** for every generated claim; DIT AR 2.13 path, or drop AI for pilot |

---

## Fatal Flaw

**Parallel “mini-CLM” without institutional mandate or integration:**  
The design combines **Firebase-authenticated dual portals**, **user-uploaded PDF extraction**, and **aggregated AI summaries** on top of **Socrata metadata only**. That stack tends to create a **second narrative of contract truth** that **Finance and Audit will not treat as authoritative**, while **failing the problem statement’s cross-registry compliance bar** (no reliable VITA path; no SAM.gov in demo; OnBase/RAPIDS untouched). **Vendor adoption** without City requirement is the implementation review’s stated killer. Until the product is **scoped to a thin, cited, read-only layer** (or formally partnered with OpenGov/RAPIDS owners), it **does not clear the “ship as City tool” bar**.

---

## Verdict

**RE-SCOPE / CONDITIONAL — Do not adopt the full demo as production.**  

**Green-light slice:** Government-facing (or fully public) **Socrata contract explorer** with staleness UX, export, and **no uncited AI** (or AI limited to templated bullets each linked to source rows).  

**Red-light for v1:** Dual-portal vendor accounts and portfolio AI summaries **without** governance, citations, and Procurement/Legal sign-off.

---

## Rubric Scores (Roundtable Consensus)

| Category | Score | Notes |
|----------|:-----:|-------|
| **Impact** | **4** | Real, documented City Hall procurement pain; demo does not complete PS2 cross-source compliance story. |
| **Feasibility** | **3** | Open data path works; Firebase + AI + two-sided adoption are the drag. |
| **User Value** | **3** | Distinctive vendor lens in concept; in practice duplicates simpler views and competes with existing channels. |
| **Execution** | **3** | End-to-end demo acknowledged slow; VITA replaced by PDF workaround. |
| **Innovation** | **3** | Two-sided + AI among four similar procurement demos; not the “simple expiry” breakthrough. |
| **Equity & Inclusion** | **3** | Vendor accessibility intent; **no** automated SWaM/MBE join without B2GNow/partnership. |

### Award Weighted Totals

**Mayor’s Choice** — Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1  
= 20 + 15 + 12 + 9 + 9 + 3 = **68**

**Pillar Award** — Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  
= 20 + 12 + 9 + 9 + 9 + 9 = **68**

**Moonshot Award** — Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2  
= 15 + 16 + 9 + 9 + 6 + 6 = **61**

---

## Top Recommendations

1. **Ship the thinnest vertical:** Socrata-only explorer + data freshness + advisory disclaimer; defer Firebase vendor login until there is a City business owner and integration story.  
2. **If AI stays:** Implement **source-linked** summaries only; plan explicit **DIT / AR 2.13** review; avoid “cheap alternatives” language without definitional rigor.  
3. **Align to institutional stack:** Position as **complement to OpenGov + RAPIDS**, not replacement; use RESEARCH_RESULT’s **procurement-first, phased** narrative in pitch decks to executives.

---

## Unresolved Questions

- Will Procurement accept **any** external tool that stores or displays user-uploaded contract PDFs under FOIA/retention rules?  
- Is there a **path to VITA or state contract data** beyond Cobblestone web UI (partnership, bulk export)?  
- Can OMBD supply a **vendor certification join file** absent B2GNow API?  
- Does the City want **vendor identity** in-app under **Firebase** or only via **future SSO**?

---

*Condensed roundtable: seven personas, three tensions, fatal flaw, verdict, and weighted awards. Aligned to `RICHMOND_TECH_STACK_2026.md`, pillar research INDEX themes (procurement data, risks, MVP procurement path), and Tier B implementation reality (13/25).*
