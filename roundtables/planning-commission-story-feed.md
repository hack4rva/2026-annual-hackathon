# Roundtable (Condensed): Planning Commission Story Feed

**Date:** 2026-04-02  
**Slug:** `planning-commission-story-feed`  
**Pillar:** A City That Tells Its Stories (`city-storytelling`)  
**Problem statement:** Resident Stories as Civic Insight — trusted, accessible ways for community narratives to inform City decisions.  
**Idea path:** `2026-annual-hackathon/ideas/city-storytelling/planning-commission-story-feed/`

## Input materials

| Source | Status |
|--------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `RICHMOND_TECH_STACK_2026.md` | Loaded |
| `pillar-repos/pillar-city-storytelling/research/INDEX.md` | Loaded (F3 civic stories, G5 guardrails, D GIS adjacent) |

---

## Persona simulations (7 × 3–5 sentences)

### INNOVATOR

The valuable reframe is treating Planning Commission outcomes as **neighborhood stories**, not only docket rows—subscription by geography turns passive Legistar browsing into a habit. National precedent is strong: hybrid AI + human review (Saratoga Hamlet, Santa Cruz planning pilot, Granicus GXA) and the Documenters evidence that plain notes beat official minutes on readability and public-comment capture. The optional Documenters + Legistar hybrid is the credible “second curve” if AI trust lags. Risk is novelty theater: if summaries are generic, the feed is just another email blast.

**Research:** WebSearch — *City Bureau Documenters program municipal meetings evaluation* — Grand Rapids study: Documenters notes ~5k words shorter, better readability, public comments captured vs. minutes omissions; national network scale (2025 stats). WebSearch — *municipal AI meeting summaries governance human review Legistar 2025* — Eureka-style policies require human final decision; Loudoun-style “crawl-walk-run” governance; Legistar-class data increasingly normalized for analysis (GovData/Legistar ecosystem).

---

### ACTIVIST

Grassroots groups need **fast, accurate** notice of what was decided and what was said in public comment—not a paraphrase that blurs who spoke against displacement. A feed that elevates votes without comment context repeats the harm the Documenters study documents in official minutes. Neighborhood scoping is powerful for organizing blocks and civic associations, but only if every item links to recordings and packets so we can challenge spin. Any AI label must be paired with staff accountability, not used to dodge FOIA or legal precision.

**Research:** WebSearch — *Richmond Virginia Planning Commission Legistar public meetings 2025 2026* — Meetings on Legistar (e.g., Jan 6, Mar 3/17 2026); hybrid Teams access; first/third Tuesday pattern — confirms stable, automatable event cadence.

---

### CITIZEN

I do not have two hours on a Tuesday to decode a 47-page packet; I want “what changed near me” in plain English with a map pin. If the summary is wrong once about a rezoning vote, I will never trust the product again—so human sign-off matters more than speed. RSS or email fits how I already follow things; SMS would reach relatives who do not use Legistar. I still need Spanish or large-print paths eventually; a web-only feed is not enough for everyone on my block.

**Research:** Same Legistar/Richmond meeting query as ACTIVIST; pillar INDEX `B5_users_digital_equity.md` / `92_red_flags.md` — digital-equity and guardrail themes apply to subscription-only models.

---

### MAYOR

This aligns with **transparency and implementation reality**: Legistar OData is already public for Richmond; GeoHub neighborhoods/parcels support geocoding without EnerGov API. It supports informed neighborhoods without replacing formal minutes—critical for legal defensibility. Under **AR 2.13** (June 2025), DIT must govern AI use, disclose to the public, and keep humans accountable—this idea is compatible if framed as clerk-reviewed assistance, not autonomous publication. The political upside is fewer “nobody told us” conflicts; the downside is any high-profile error becomes a headline about “the City’s AI.”

**Research:** WebSearch — *Richmond VA AR 2.13 artificial intelligence city policy transparency* — Five principles (fairness, transparency, accountability, privacy, security); DIT oversight; acceptable uses include customer engagement and drafting with human oversight. Official PDF on rva.gov.

---

### ARCHITECT

**Pipeline:** Legistar `Events` / `Matters` / votes → strict prompt (verbatim legal strings) → **mandatory** clerk/planning QA → static site + RSS + optional email/SMS (Twilio). Geocode matter addresses via ArcGIS REST / neighborhood polygons—matches `RICHMOND_TECH_STACK_2026.md` hackathon-realistic stack. PDF-heavy attachments limit full automation; summarize structured fields first, link out for staff reports. Pagination: Legistar 1,000-row cap is manageable for per-meeting pulls, not citywide bulk history in one call.

**Research:** `RICHMOND_TECH_STACK_2026.md` (Legistar OData, GeoHub, AR 2.13); WebSearch — *municipal AI meeting summaries governance human review* — aligns with centralized approval and double-check norms.

---

### FRONTLINER (Planning / Clerk)

I can believe **1–1.5 hours QA per meeting** if the draft is anchored to agenda order and does not invent votes—but Tuesday night meetings mean Wednesday workload spikes unless we batch. I need an SOP: check mover, seconder, tally, and **never** soft-pedal controversial motions. Closed-session and PII must never enter the LLM prompt per policy. If this ships without my office’s explicit owner, it will become volunteer tech debt or a liability magnet.

**Research:** `RESEARCH_RESULT.md` QA checklist and White & Case–style warnings on records consistency; AR 2.13 DIT review expectation.

---

### FUNDER

Philanthropy funds **transparency and local democracy** (e.g., Trust for Civic Life, OpenCivics, Knight/Rita Allen ecosystem), but civic tech often stalls on **sustainability** without a host institution. A pilot co-branded with Planning or a news partner scores better than a lone GitHub experiment. Documenters-style stipends are a parallel funding line if the City will not staff QA. Metrics funders care about: accuracy audits, subscription growth by neighborhood, and click-through to authoritative sources—not vanity AI demos.

**Research:** WebSearch — *civic tech foundation funding government transparency planning engagement* — OpenCivics/Trust for Civic Life; Rita Allen/Knight report on weak scalable revenue models for civic tech—implies need for institutional anchor.

---

## Top 3 tensions — and resolutions

| Tension | Resolution |
|---------|------------|
| **1. Speed vs. accuracy** (residents want same-night clarity; wrong vote language is catastrophic) | Ship **hybrid only**: AI draft + **mandated** human QA before publish; official minutes remain authority; disclosure on every page. |
| **2. Independent civic build vs. City legitimacy** | **Pilot with named City owner** (Planning Development Review + DIT under AR 2.13); alternatively nonprofit hosts with clear “unofficial until reviewed” labeling—pick one lane to avoid trust confusion. |
| **3. “Story” framing vs. legal precision** | Plain-language **around** exact quoted legal text; no speculative “impact predictor” in v1; public comment summarized **per speaker** where possible, with links to recording. |

---

## Fatal flaw test

| Lens | Result |
|------|--------|
| **Data dependency** | **Pass** — Legistar OData + GeoHub/ArcGIS are documented public paths; PDF gaps handled by linking to attachments. |
| **Structural wall** | **Pass** — Does not require 311/AvePoint, EnerGov API, OnBase, or B2GNow. |
| **Ownership vacuum** | **Conditional** — Fails without **explicit** Planning/Clerk + DIT AI review owner; not a fatal flaw if charter names them before launch. |
| **Harm potential** | **Conditional** — Mis-summaries could mislead residents or inflame disputes; mitigated by HITL, source links, and no AI-only publication. |
| **Political exposure** | **Manageable** — Hot rezoning cases will draw scrutiny of wording; neutral templates + rapid correction process reduce tail risk. |

**Outcome:** No single fatal flaw if conditions (ownership + HITL + disclosure) are met.

---

## Category scores (1–5)

| Category | Score | Note |
|----------|:-----:|------|
| Impact | **4** | Directly improves comprehension and engagement for planning-affected residents; builds on public record rather than collecting new resident stories (slight gap vs. pure “resident voice” pillar wording). |
| Feasibility | **4** | Stack is hackathon-realistic; staff QA and DIT approval are the real schedulers. |
| User Value | **4** | High for engaged residents and associations; weaker for offline/LEP without Phase 2. |
| Execution | **3** | Strong demo path; production workflow and sustainment need City/partner commitment. |
| Innovation | **4** | Proven AI+huddle pattern; **neighborhood-subscribable story feed** is a differentiated packaging of Legistar + GIS. |
| Equity & Inclusion | **3** | Plain language helps; digital channel and English-first default risk excluding some neighbors until SMS/translation/community doc paths land. |

---

## Award calculations (weighted totals)

**Weights (RVA Hacks standard):**

- **Mayor’s Choice (MC):** Impact×5, Feasibility×5, User Value×4, Execution×3, Equity×3, Innovation×1  
- **Pillar Award (PA):** Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3  
- **Moonshot (MS):** Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2  

**With I=4, F=4, UV=4, E=3, In=4, Eq=3:**

- **MC** = 4×5 + 4×5 + 4×4 + 3×3 + 3×3 + 4×1 = **78**  
- **PA** = 4×5 + 4×4 + 4×3 + 4×3 + 3×3 + 3×3 = **78**  
- **MS** = 4×5 + 4×4 + 4×3 + 3×3 + 4×2 + 3×2 = **71**  

---

## Verdict

**SHIP WITH CONDITIONS**

**Conditions (minimum):** (1) Named City (or formal nonprofit) owner for QA and corrections. (2) DIT/AR 2.13 risk review for any production use of AI. (3) No publication without human verification of motions/votes/legal excerpts. (4) Every summary links to Legistar matter, agenda attachments, and meeting recording. (5) Roadmap item for language access and non-web channels.

---

## One-line summary

Neighborhood-scoped, human-verified plain-language Planning Commission feeds are technically viable on Richmond’s open Legistar + GIS stack and match national hybrid-AI practice, but they only deserve a public “City” stamp with explicit clerk/DIT ownership and equity follow-through beyond digital RSS/email.
