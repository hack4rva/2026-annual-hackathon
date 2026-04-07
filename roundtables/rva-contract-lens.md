# Roundtable (Condensed): RVA Contract Lens

**Initiated:** 2026-04-02  
**Idea:** RVA Contract Lens — Federated AI Procurement Intelligence  
**Pillar:** A Thriving City Hall — Procurement Intelligence & Transparency  
**Problem family:** PS2 — Procurement Risk & Opportunity Review (aligned with pillar research A2, B3, C3, D2/D3, E3, F3, G2, H3)

## Input Materials

| File | Status |
|------|--------|
| `.../rva-contract-lens/IDEA.md` | Loaded |
| `.../rva-contract-lens/RESEARCH_RESULT.md` | Loaded |
| `.../rva-contract-lens/INNOVATION_ANALYSIS.md` | Loaded |
| `ideas/RICHMOND_TECH_STACK_2026.md` | Loaded |
| `pillar-repos/pillar-thriving-city-hall/research/INDEX.md` | Loaded |

---

## Seven Personas (Single Pass)

### 1 — INNOVATOR
The IDEA.md narrative sells **unified real-time federation and an eight-second legal-style verdict** (renew / rebid / escalate). RESEARCH_RESULT and INNOVATION_ANALYSIS agree the **non-obvious reframe** is the opposite: **do not build a cross-tier search engine**. Eliminate scraping (SAM.gov, OMNIA ToU); reduce entity-resolution pain with libraries; **raise** OCDS for Richmond’s *own* publications; **create** a Houston-style **cooperative “front door”** (Pavilion / eVA deep links). The weekend-sized provocative move is **OCDS publisher (#4)** or **Pattern A** (Socrata + links), not eight live backends in one click.

### 2 — ACTIVIST
**Ship outside, offer inside** still applies: **Socrata `xqn7-jvv2`** and public eVA/OpenGov browsing need no partnership for a transparency slice. Anything that **ingests OnBase PDFs, mirrors SAM wholesale, or pushes automated compliance judgments into staff workflow** crosses into **DIT + Procurement + Legal** territory and violates the “buildable without walls” ethic of the pillar corpus. The credible civic path is **link-rich, citation-first tooling** that respects source terms—not a shadow procurement system.

### 3 — CITIZEN
Plain-language spend views and **Spanish / contrast / hyperlegible** choices are genuine inclusion wins if shipped. But residents already *can* reach contracts via open data; the leap from “legible dashboard” to **accountability** requires **outcome metrics** (diversity of bidders, re-compete rates), which this spec does not commit to. The **$28M savings** and **portfolio concentration** claims read as **unverified institutional projections**, not resident-verifiable facts—fine as aspiration, risky as promise.

### 4 — MAYOR
**Administrative Regulation 2.13 (June 2025)** means any **AI-assisted** workflow that affects procurement decisions needs **DIT governance**, transparency to users, and supplier/data documentation. A product that **scores vendors and prescribes renew/rebid** is a political and **VPPA / procurement-law** surface whether or not a human clicks last. I can endorse **read-only search, links, and explainable aggregates**; I cannot stand behind **black-box scoring** or **eight-second verdicts** without departmental co-design.

### 5 — ARCHITECT
**RICHMOND_TECH_STACK_2026** is decisive: **Socrata SODA** is in the “realistic” list; **RAPIDS/OnBase** contract PDFs are **not** exposed for civic prototypes; **SAM.gov** allows **API use under ToU**, not naive bulk redistribution or scraping; cooperative portals **block spiders**. The IDEA’s **FCC/FBI “live” checks** and **OCR across hundreds of pages** assume **data paths and clearance tiers** that a hackathon repo cannot assume. **Elasticsearch + RBAC + NIST 800-53** (per RESEARCH_RESULT §6) is a **12–18 month** architecture, not a static demo.

### 6 — FRONTLINER (Procurement)
The **three-day renewal verification** story is **real pain**—but it lives in **document retrieval and ERP silos**, not in “no unified UI.” An **8-second verdict** without **performance memos, budget, legal review, and amendment history** would be **ignored or dangerous**. If the tool **summarizes open data and links to SAM UEI lookup**, I might use it for **intake**. If it **pretends to decide**, I will not.

### 7 — FUNDER
RESEARCH_RESULT’s **phased budget ($250k–$600k local, +$150k–$350k co-op, +$200k–$450k SAM enrichment)** matches a **multi-year program**, not a weekend grant line. **Fund Pattern A** (search + deep links + disclaimers) or **OCP Lift–style** adoption for **OCDS publishing**; **do not fund** bespoke “federated AI compliance brain” without **City MOU, security review, and named owner**.

---

## Tensions (Condensed)

1. **Moonshot narrative vs. legal/technical envelope** — IDEA.md promises speed and automation at a level **SAM ToU, OnBase closure, and AR 2.13** do not support for an external build.
2. **Staff pain (PDF archaeology) vs. product fit** — The worst days are **ERP/ECM** problems; a **Socrata-front portal** helps **discovery** but does **not** replace **record retrieval** unless the City opens **partnership paths**.
3. **Transparency vs. duplication** — Public value must be **clearly beyond** raw open data and **ORD 2025-211** link-aggregation—e.g. **cooperative routing**, **staleness UX**, or **OCDS exports**—or it competes with **Contract Expiry / drift** ideas without adding a distinct lane.

---

## Fatal Flaw (As Written in IDEA.md)

**The specification assumes continuous access to authoritative contract text (OCR at scale), unrestricted multi-agency compliance fusion (including federal/sensitive lanes), and automated procurement verdicts in seconds—none of which are available to a civic prototype without City systems integration, legal sign-off, and compliant API use.** INNOVATION_ANALYSIS and RICHMOND_TECH_STACK_2026 **invalidate the core architecture as stated**; the idea survives only **after aggressive descoping** to **local open data + governed enrichment + human decision**.

---

## Verdict

**RE-SCOPE REQUIRED — do not demo or score the full-stack AI “verdict engine” as the hackathon artifact.**

**Shippable direction (consensus with INNOVATION_ANALYSIS):** **Pattern A** — keyword/NIGP-aware **Socrata search**, **deep links** to Pavilion / eVA (and similar), **staleness and disclaimer** UX, optional **SAM.gov UEI** lookup for **staff-only** flows if ToU-respecting. **Pattern B (OCDS publisher)** = **institutional** follow-on (Portland precedent), not a 48-hour core.

**Relationship to sibling ideas:** Overlaps **Contract Expiry Dashboard** and **payment/contract drift** concepts; **differentiate** on **“before you bid” intake** + **cooperative front door** or **OCDS**, not another generic spend chart.

---

## Rubric Scores & Awards

**Scoring object:** **Re-scoped Pattern A** (honest weekend + early post-hackathon), *not* the full IDEA.md stack.

| Category | Score (1–5) | Rationale |
|----------|:-----------:|-----------|
| **Impact** | **4** | Meaningfully targets redundant solicitations and visibility if cooperative routing is real in demos; falls short of “portfolio AI” claims. |
| **Feasibility** | **4** | Socrata + public links are wall-free; SAM enrichment and co-op APIs remain **policy- and integration-sensitive** (not 5). |
| **User Value** | **4** | Strong for **buyers/intake**; public value is **incremental** over raw data unless UX and metrics differentiate. |
| **Execution** | **3** | Credible **judge demo** possible; **not** the OCR/federation system described in IDEA.md. |
| **Innovation** | **3** | **Composition + ERRC reframe**; **OCDS path** would lift this to **4–5** as an institutional story. |
| **Equity** | **3** | Accessibility features help; **no proven** link to **MWBE outcomes** without **OMB/B2GNow-class data** (structural wall per tech stack). |

### Award calculations (hackathon weights)

**Pillar Award** — Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3  

`4×5 + 4×4 + 4×3 + 3×3 + 3×3 + 3×3` = **20 + 16 + 12 + 9 + 9 + 9** → **75**

**Mayor’s Choice** — Impact×5, Feasibility×5, User Value×4, Execution×3, Equity×3, Innovation×1  

`4×5 + 4×5 + 4×4 + 3×3 + 3×3 + 3×1` = **20 + 20 + 16 + 9 + 9 + 3** → **77**

**Moonshot Award** — Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2  

`3×5 + 4×4 + 4×3 + 3×3 + 4×2 + 3×2` = **15 + 16 + 12 + 9 + 8 + 6** → **66**

**Footnote — If scored on unmodified IDEA.md (full AI federation + verdict engine):** **Feasibility 1–2**, **Execution 1–2** for a weekend; **Mayor’s Choice and Pillar collapse** on dependency/governance failure. Table refuses that scoring as **not credible for judging**.

---

## Implementation Reality (Qualitative)

| Tier (indicative) | Scope |
|-------------------|--------|
| **A–B** | Pattern A static/search MVP + disclaimers + deep links |
| **C–D** | Full IDEA.md (OnBase OCR, multi-source live federation, automated verdict) until City partnership and compliance architecture exist |

---

*Condensed roundtable: seven personas, three tensions, fatal flaw, verdict, and weighted awards. Judges score; this document does not replace judge ballots.*
