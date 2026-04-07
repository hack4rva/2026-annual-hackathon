# Roundtable (Condensed): Richmond Stories Online

**Date:** 2026-04-02  
**Slug:** `richmond-stories-online`  
**Pillar:** A City That Tells Its Stories (Pillar 7)  
**Problem alignment:** Resident Stories as Civic Insight  
**Source paths:** `2026-annual-hackathon/ideas/city-storytelling/richmond-stories-online/`

---

## 1. Input materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded — vision: geospatial “living archive,” oral history, crowdsourcing, Valentine + civic hackers + storytellers |
| `RESEARCH_RESULT.md` | Loaded — platform landscape (Omeka S, TheirStory, Survey123+StoryMaps, etc.); moderation/consent; TCO; reuse programming critical |
| `INNOVATION_ANALYSIS.md` | Loaded — ERRC: avoid custom CMS; federated “one front door, multiple backends”; validate cold start + reuse |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — GeoHub/ArcGIS public REST; static external hosting viable; CultureWorks feeds partner-dependent; AR 2.13 if AI features |
| `pillar-city-storytelling/research/INDEX.md` | Loaded — oral history (`C3`, `D4`), civic stories (`F3`, `H3`), consent (`G2`), place-based prior art (`E3`) |

---

## 2. Seven persona simulations (3–5 sentences each)

### Persona 1 — Longtime neighborhood storyteller (Church Hill)

I want my block’s history told by people who lived it, not only by exhibits downtown. If the site is just another form that eats my story and goes quiet, I will not come back. I need optional anonymity, a human I can call, and assurance that my words will not be mined for tourism ads without my say-so. WebSearch: *crowdsourced local history map platform moderation consent* — platforms like Humap document moderation and GDPR-style consent paths; scale projects (e.g. Layers of London) show crowdsourcing works when governance is explicit.

### Persona 2 — Valentine Museum educator / partner

We already operate **Richmond Stories** as an educational program tied to our collections and timelines ([thevalentine.org/explore/richmond-stories/](https://thevalentine.org/explore/richmond-stories/)). A separate “RichmondStories.online” risks brand confusion unless we co-own the narrative and curation standards. I am supportive if this becomes an **on-ramp** into accessioned practice, not a competing megaphone. WebSearch: *The Valentine Museum Richmond Stories* — confirms Valentine’s program is collection-based educational storytelling, not necessarily a public UGC firehose.

### Persona 3 — City communications / DIT-adjacent staff

The City does not need to host resident-generated content to benefit from it; we need trustworthy channels for insight without creating a new records-management liability. If you want City endorsement, show moderation, retention, and takedown policies that Legal can skim in ten minutes. Any AI tagging or chat features trigger **AR 2.13** review — plan for that upfront. (No WebSearch — per `RICHMOND_TECH_STACK_2026.md`.)

### Persona 4 — VCU Libraries / oral history archivist

We already publish neighborhood oral history (e.g. Historic Fulton with Valentine partnership on Scholars Compass). A civic portal is viable if exports land in **Dublin-Core-ish** metadata and quarterly deposits are real, not aspirational. Start narrow: one collection, one deed of gift template, one preservation path. WebSearch: *VCU oral history archive Richmond* — VCU Oral History Archive + Historic Fulton demonstrate existing Richmond capacity and Valentine alignment.

### Persona 5 — Tourism / economic development ally (skeptical)

The IDEA frames tourism upside; I worry about extracting “authentic” pain for visitor packaging. If the product leads with glossy discovery for outsiders before trust with residents, you will poison the well. Lead with resident benefit and opt-in reuse; tourism is a **downstream** narrative license issue. (Internal consistency with IDEA tension — no extra search.)

### Persona 6 — Youth / student contributor

I will record on my phone if it takes under ten minutes and I see people who look like me featured last week, not only Civil War trivia. Give me prompts, neighborhood challenges, and school/library pop-ups — pure “upload to the map” is not enough. WebSearch: *TheirStory LAPL Central 100 oral history* (from RESEARCH_RESULT) — short, multilingual self-record models reduce facilitator dependency.

### Persona 7 — Equity advocate / policy reader

Centering colonial legacies and socioeconomic persistence is right; the product must operationalize **counter-narrative recruitment** (per INNOVATION_ANALYSIS Crazy 8 #7) in staffing and outreach, not only in copy. Pair online with phone-first and in-person capture so the digital divide does not decide whose memory counts. WebSearch: *Richmond Virginia digital divide internet access* — ~9.7% no subscription (ACS); ZIP-level gaps (e.g. reported lows in 23222) imply offline and library-based capture are mandatory, not nice-to-have.

---

## 3. Top three tensions — resolutions

| Tension | Resolution |
|---------|--------------|
| **A. “One custom platform” (IDEA) vs. solved stacks (RESEARCH + INNOVATION)** | Ship a **unified branded portal** that embeds 1–3 proven tools (start with **one** path — e.g. Omeka S Collecting or Survey123+StoryMaps), per INNOVATION 90-day plan. Defer custom APIs and AR to phase 2 after moderation and volume prove out. |
| **B. Brand overlap: Valentine “Richmond Stories” vs. RichmondStories.online** | Formal **MOU or co-branding** with Valentine (and optionally VCU Libraries): shared ethics, cross-links, clear distinction — institution = curated collections; portal = resident submission **pipeline** into review and preservation. |
| **C. Tourism/economic framing vs. trauma-informed community trust** | **Public narrative:** resident agency, consent tiers, and local programming first. **Economic language** only in partner-facing materials; no default commercial relicensing of stories. |

---

## 4. Fatal flaw test (five)

| # | Test | Result |
|---|------|--------|
| 1 | **Hard dependency on a blocked City API?** | **Pass** — MVP can run on external hosting + public GeoHub layers + partner tools; no AvePoint/EnerGov requirement. |
| 2 | **Unmitigable legal/consent model?** | **Conditional pass** — fails if launched without tiered consent, minor safeguards, and takedown runbooks; standard practice exists (OHA principles, Omeka review queues). |
| 3 | **Fatal confusion with existing civic/museum “Richmond Stories”?** | **Conditional pass** — not fatal if partnership resolves naming and curation; **fatal** if launched as competing brand without Valentine alignment. |
| 4 | **Cannot survive without rare engineering talent forever?** | **Pass** if federated stack; **fail** if committed to bespoke sync/API/AR core without sustainment budget. |
| 5 | **Empty archive / “collect and leave” death spiral?** | **Conditional pass** — structurally fatal without **reuse programming** (listening events, podcast/exhibit pipeline); Queens Memory vs NYPL pattern is decisive in RESEARCH_RESULT. |

---

## 5. Verdict

**SHIP WITH CONDITIONS**

**Conditions (minimum):** (1) Single-path pilot + documented moderation/consent before multi-channel expansion. (2) Written preservation path (MOU with Valentine and/or VCU or LoV deposit schedule). (3) Reuse programming budgeted (≥0.25 FTE or sustained volunteer rota with turnaround SLAs). (4) Resolve naming/brand with Valentine. (5) Offline/library capture plan for digital divide ZIPs.

---

## 6. Category scores (1–5) and award totals

| Category | Score | Notes |
|----------|:-----:|-------|
| Impact | **4** | Strong MAP/pillar fit; impact scales with adoption and institutional anchoring |
| Feasibility | **4** | Tech is commodity/partner-available; true constraint is staffing and governance |
| User Value | **4** | High for residents and educators; cold-start risk knocks a point |
| Execution | **3** | Full IDEA (APIs, AR, sync) overshoots weekend/prototype realism; thin MVP is executable |
| Innovation | **3** | Synthesis and equity framing add value; core pattern is established nationally |
| Equity & Inclusion | **4** | Explicit historical/equity intent; must prove inclusive capture and fair moderation |

### Award formulas (hackathon rubric)

- **Mayor’s Choice (MC):** Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1  
  → 20 + 20 + 16 + 9 + 12 + 3 = **80**

- **Pillar Award (PA, Pillar 7):** Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  
  → 20 + 16 + 12 + 9 + 9 + 12 = **78**

- **Moonshot (MS):** Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2  
  → 15 + 16 + 12 + 12 + 8 + 6 = **69**

---

## 7. One-line synthesis

Richmond Stories Online is **pillar-aligned and technically shippable** as a **governed, federated collection portal** anchored by museum/library partners — but only if launch scope drops custom-platform ambition, fixes brand/archival handoffs, and funds **reuse and moderation** so it does not become another retired oral-history silo.

---

## Return string (for parent agent)

`richmond-stories-online | SHIP WITH CONDITIONS | MC:80 PA:78 MS:69 | Pillar-strong resident-story archive if scoped to proven tools, partner MOUs, and reuse programming—not a bespoke platform sprint.`
