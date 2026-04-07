# Roundtable (Condensed): You Get What You Give RVA

**Initiated:** 2026-04-02  
**Idea:** You Get What You Give RVA — Business Partnership Finder  
**Pillar:** A Thriving Economy  
**Problem Statement (official):** PS2 — Small Business Navigation (first-time entrepreneurs, sequenced steps to start/register in Richmond)  
**Presenter / demo:** Sam Pritchard — Hack for RVA  
**Implementation Reality:** **15/25 — Tier B** (per `IMPLEMENTATION_REALITY_SYNTHESIS.md` / pillar review)  
**Research corpus pointer:** `pillar-repos/pillar-thriving-economy/research/INDEX.md` — Sections B (personas), D (data), F (opportunities), G (risks), `92_red_flags.md`, `F5_opportunity_do_not_build.md` for guardrails.

---

## Input Materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded — SCC pipeline (~3.5M VA → ~14k Richmond active), Claude enrichment, three lists: partners / vendors / customers, mutual-benefit copy, downloadable results |
| `RESEARCH_RESULT.md` | Loaded — **Buy-local / community gift cards / Yiftee / measurement (DiD)**; not the SCC matcher architecture |
| `INNOVATION_ANALYSIS.md` | Loaded — ERRC grid, gift-card MVP shapes, assumption mapping on subsidies & incrementality |
| `lifecycle_review.md` | Loaded — rubric scores, PS2 gap, blockers |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — no City API required; AI under AR 2.13 needs DIT governance if City-branded; commodity hosting + LLM OK for civic prototype |
| Pillar `research/INDEX.md` | Loaded — framing for MBE vs small-business setup, data inventory, matching bias risks (G4) |

---

## Rubric Grades (from `lifecycle_review.md`)

| Category | Score | One-line rationale |
|----------|:-----:|--------------------|
| Impact | 2 | Real networking pain; **misaligned with PS2** (startup journey vs existing-business matching) |
| Feasibility | 4 | SCC public bulk data + filters + web tool is reproducible |
| User Value | 3 | Strong for established owners; wrong life-stage for PS2 user |
| Execution | 4 | Working prototype, real pipeline, three output types, downloads |
| Innovation | 3 | LLM + SCC enrichment is credible; pattern is familiar |
| Equity | 2 | Sparse SCC coverage of informal/LM businesses; no multilingual/a11y shown |

### Weighted Awards (max 105 each)

| Award | Score | Notes |
|-------|------:|-------|
| **Pillar (Thriving Economy)** | **61** | Feasibility + Execution carry; Impact + Equity drag |
| **Mayor's Choice** | **63** | Same — implementable shape, weak “City pilot” story |
| **Moonshot** | **54** | Innovation not exceptional enough to offset Impact/Equity |

---

## Seven Personas (single pass)

1. **PS2 champion (economic development framing)** — The pillar brief and `gap_analysis` / `lifecycle_review` agree: the civic ask is *sequenced startup navigation* (permits, BPOL, SCC order, plain language). This demo solves *mature-business networking*. For pillar scoring, that is not a nuance; it is a category error unless the pitch explicitly reframes as a companion to navigation (e.g., “after you register, here is your local graph”).

2. **Established Richmond business owner** — The tool matches how deals actually start: who can I help, who might buy, who can I buy from locally. Downloadable lists and “mutual benefit” lines match a real JTBD. This persona would advocate for **User Value** and **Execution** in the 3–4 range.

3. **First-time / informal entrepreneur** — Underrepresented in SCC; may not have a clean entity description for the UI. They are the PS2 core user and get little from this product as shipped. **Equity & Inclusion** suffers: the dataset privileges the already-registered.

4. **Data steward / architect** — SCC bulk is public; Richmond filtering logic is thoughtful (zip + border cleanup). Weak points: **one-time Claude batch** (not a documented refresh job), opaque entity names → **categorization accuracy unvalidated**, per-match **ongoing LLM cost** if not cached. Fits “commodity cloud + AI” in the tech stack doc; not a City integration problem (**Integration Surface** = easy standalone).

5. **Chamber / SCORE / nonprofit host** — `IMPLEMENTATION_REALITY_REVIEW.md` is blunt: B2B networking is **not a natural City department product**. Ownership clarity is low (score 2). The credible home is regional ecosystem orgs. City role: signal-boost or data partnership, not ERP-style ownership.

6. **“Gift card” researcher (artifact of `RESEARCH_RESULT` + `INNOVATION_ANALYSIS`)** — The written research argues for Yiftee-class programs, BOGO cliffs, Mastercard DiD, and civic reward layers. **None of that is what the demo built.** Either the folder’s research was aspirational for a forked product, or the team risks judges reading docs that do not match the screen. Table treats this as **documentation drift**, not extra merit.

7. **Equity & procurement lens (pillar G4 / F5)** — Matching systems can **steer spend or attention** toward well-described, well-enriched entities and away from minority- or immigrant-owned businesses with thin public footprints. Without OMBD/B2GNow linkage (no API per tech stack), you cannot correct bias with certified MBE flags. Guardrail: disclose limitations; avoid implying City endorsement of match quality.

---

## Tensions

| # | Tension | Resolution pressure |
|---|---------|---------------------|
| T1 | **PS2 vs product** | Judges applying pillar problem statement penalize Impact; honest pitch picks “adjacent economy tool” or pivots narrative. |
| T2 | **IDEA.md vs RESEARCH_RESULT / INNOVATION_ANALYSIS** | Align artifacts or expect confusion: SCC matcher ≠ community gift card program. |
| T3 | **Trust vs speed** | AI mutual-benefit statements read well in demo; at scale, wrong matches erode trust faster than a dumb directory. |
| T4 | **City adoption vs ecosystem fit** | Tier B blocker: no clear City owner. Success looks like Chamber/startup org license + refresh SLA, not DIT backlog. |
| T5 | **Inclusion** | Formal registry bias + English-only + no a11y = uneven access for the entrepreneurs PS2 is meant to center. |

---

## Fatal Flaw

**Primary:** Strategic misalignment with the **stated Thriving Economy PS2 problem** (first-time startup navigation). The implementation is strong for a *different* problem (B2B discovery). Under strict pillar judging, this caps **Impact** regardless of engineering quality.

**Secondary (compound):** **Research-product split** — the deepest written analysis describes a buy-local / payments / measurement stack the demo does not implement, weakening narrative coherence for reviewers who read the folder end-to-end.

---

## Verdict

**Ship as ecosystem tooling, not as City core product.** The SCC → Richmond → enriched matcher is a **Tier B** weekend-class win: standalone, no 311/B2GNow/EnerGov walls, testable with real owners. Next steps that preserve integrity: (1) validate categorization sample (lifecycle suggests n=100 manual check), (2) validate top-match relevance with 5–10 businesses, (3) document quarterly SCC re-ingest, (4) if competing for PS2 prizes, **either pivot features** toward sequenced startup steps **or** enter as “phase 2 after registration” with explicit scope honesty.

---

## Score + Awards (summary card)

| Lens | Value |
|------|-------|
| Hackathon rubric (lifecycle) | Impact **2**, Feasibility **4**, User Value **3**, Execution **4**, Innovation **3**, Equity **2** |
| Pillar Award (weighted) | **61 / 105** |
| Mayor's Choice (weighted) | **63 / 105** |
| Moonshot (weighted) | **54 / 105** |
| Implementation Reality | **15 / 25 — Tier B** |

---

## Tech stack cross-check (`RICHMOND_TECH_STACK_2026.md`)

- **Uses:** Public Virginia SCC bulk data (outside City inventory but standard civic pattern); static or hosted web frontend; LLM vendor for enrichment/query (policy: AR 2.13 if City-affiliated).  
- **Does not require:** RVA 311, B2GNow, RAPIDS, EnerGov APIs.  
- **Cannot fix via this idea alone:** MBE certification overlay (B2GNow has no public API); proof of “incremental” local economic impact (needs card-analytics partnerships per RESEARCH_RESULT — orthogonal to shipped matcher).

---

## Status

- **Phase:** CONDENSED ROUNDTABLE — COMPLETE  
- **Turns:** 7 personas synthesized in one pass  
- **Challenge rounds:** Captured as tension table  
- **Fatal flaws:** 1 primary (PS2 misalignment) + 1 secondary (doc/product drift)
