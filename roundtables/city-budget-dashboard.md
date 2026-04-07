# Roundtable (Condensed): City Budget Dashboard

**Initiated:** 2026-04-02  
**Idea:** Richmond City Budget Dashboard  
**Path:** `2026-annual-hackathon/ideas/thriving-city-hall/city-budget-dashboard/`  
**Pillar:** A Thriving City Hall (fiscal transparency — *not* the assigned hackathon problem statements)  
**Presenter:** Andre Toleris · **Stack:** Tableau Public + Socrata (`7nru-hsrx` General Fund; research notes July 2021 staleness on core dataset)

## Input Materials

| File | Status |
|------|--------|
| IDEA.md | Loaded |
| RESEARCH_RESULT.md | Loaded |
| INNOVATION_ANALYSIS.md | Loaded |
| RICHMOND_TECH_STACK_2026.md | Loaded (Socrata, DIT, AR 2.13 AI policy) |
| `pillar-thriving-city-hall/research/INDEX.md` | Loaded — corpus supports City Hall UX, data quality (G4 staleness), weekend MVPs |

---

## Seven Personas (WebSearch–grounded)

**1 — Engaged taxpayer (homeowner, follows local news)**  
She pays real estate taxes and wants to see whether schools and public safety shares match what leaders claim at election time. National practice increasingly favors multi-year interactive views (e.g., NYC Council budget dashboards, Long Beach–style transparency centers) so residents can compare categories without reading PDF budget books. She will tolerate some learning curve if the tool answers “where did the money go?” without FOIA. Her trust collapses if the underlying numbers are years behind the debate she hears on TV.

**2 — City Council member (budget hearing prep)**  
Elected officials in other cities have been blindsided when public dashboards existed but granular reasoning or timely numbers did not reach the legislative body (Pittsburgh deficit coverage, 2026). She needs agency- and line-item views that match what finance presents in committee, not a parallel story built on stale extracts. GFOA-style guidance pushes clear budget-in-brief narratives alongside detail; she benefits when drill-down matches hearing packets. If only staff and the administration share fresh models, a public Tableau layer can deepen distrust rather than close it.

**3 — Local beat reporter**  
He needs quotable trends (YoY shifts, agency highlights like the IDEA’s General Registrar example) and links to authoritative datasets for fact-checking. Tableau Public view counts and Socrata download stats are weak proxies for impact; newsrooms care whether numbers align with adopted budget documents. A definitions page helps him translate jargon for readers. Stale Socrata undermines every story he files citing the dashboard.

**4 — Budget & Strategic Planning analyst (City staff)**  
She owns refresh cadence and chart-of-accounts semantics; open data is an extract, not the system of record (RAPIDS/ERP has no public API per tech stack doc). A volunteer-built dashboard that drifts from official figures creates reputational risk for her department. She is motivated by the September 2025 Council transparency push (department requests online by Jan 15) if the hub reduces duplicate public questions. She needs SLAs, not another disconnected viz.

**5 — Civic nonprofit / coalition lead (housing, safety, equity)**  
He lobbies during budget season with community testimony and wants pillar-aligned views to align spending stories with MAP priorities — the LLM pillar mapping speaks to this. GFOA emphasizes engaging diverse participants; pure explorer UIs rarely capture structured resident priorities compared to simulators (Lawrence, Norfolk patterns in RESEARCH_RESULT). He will champion a hub that ties exploration to hearing-ready summaries and, ideally, participatory input.

**6 — Resident with limited financial or digital literacy**  
She may use a phone on a limited data plan and needs plain language, not dense treemaps alone; WCAG and mobile-friendly flows matter (Tyler/Socrata and vendor accessibility commitments are relevant backdrop). If the experience assumes desktop Tableau literacy, she is excluded from “transparency.” Definitions help only if navigation stays shallow and jargon is minimized on first screens.

**7 — DIT / open-data steward**  
He cares about AR 2.13 if the LLM pillar labels are presented as authoritative without review — generative mapping needs disclosure and possibly DIT governance. He prefers OData/SODA pipelines with documented refresh over one-off Tableau extracts. Consolidating links (Socrata, Tableau, CIP ArcGIS beta) on one landing page is low lift and aligns with fragmentation diagnosis in research.

---

## Tensions

| Tension | A side | B side |
|---------|--------|--------|
| **Problem fit** | Strong civic value: fiscal visibility for public and officials | Official Thriving City Hall PS1/PS2 are service navigation and procurement — lifecycle review flags **misalignment** |
| **Freshness vs. trust** | New Tableau Public build (Mar 2026) demonstrates skill | Core Socrata General Fund still **stale** in research snapshot — public trust risk (G4 pattern) |
| **Transparency vs. power** | “Sunlight” on agencies and MAP pillars | Pittsburgh-style **internal data asymmetry** can persist even with public charts |
| **Explorer vs. influence** | Deep drill-down (two-click line items) | Mid-city evidence: **participatory** tools (Balancing Act–class) more often tied to allocation shifts |
| **Innovation framing** | LLM pillar mapping is novel glue | Same underlying pattern as many municipal budget explorers nationally |
| **Equity** | Definitions page signals inclusion intent | No bundled offline, multilingual, or simulation channel in the shipped concept |

---

## Fatal Flaw

**Stale or forked truth:** If the dashboard’s data trail cannot stay synchronized with the City’s adopted budget and refresh SLAs, the product becomes easy to dismiss as narrative decoration — the exact failure mode research names when transparency tools outrun institutional data equity. The fatal flaw is not Tableau; it is **absence of a committed owner and pipeline** for authoritative, current numbers. Without that, Council and press revert to PDFs and insiders keep the real model.

---

## Verdict

**Ship as a civic layer, formalize the pipe.** The demo is credible, user-centered (definitions, drill-down, MAP lens), and technically well matched to public Socrata/Tableau. It should live inside a **single budget hub** with deep links, analytics transparency, and a explicit **data-as-of** banner. Pursue Budget & Strategic Planning as refresh owner; add participatory or hearing-integration hooks per INNOVATION_ANALYSIS Pattern B to escape “table stakes only.” For hackathon judging against **assigned** pillar problem statements, score **alignment** down unless reframed as supporting City Hall transparency writ large.

---

## Scores & Awards (1–5 rubric; judge-grade, not prescriptive)

| Category | Score | Note |
|----------|:-----:|------|
| Impact | 4 | High if refresh + hub land; muted if stuck on FY22-era public data |
| Feasibility | 4 | Commodity stack; City partnership needed for sustainable truth |
| User Value | 4 | Strong for curious residents and officials; weak for non-digital users without more design |
| Execution | 4 | Real data, thoughtful UX, scalable FY plug-in story |
| Innovation | 3 | LLM pillar map elevates; core pattern is established nationally |
| Equity & Inclusion | 3 | Terminology help; lacks participatory / multilingual / offline path |

### Weighted totals (illustrative)

- **Mayor’s Choice** (Impact×5, Feasibility×5, User Value×4, Execution×3, Equity×3, Innovation×1): **80**  
- **Moonshot** (Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2): **68**  
- **Pillar (Thriving City Hall)** (Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3): **78**

**Award read:** Strong **Pillar** narrative for transparency and MAP alignment; **Mayor’s Choice** credible if pitched as low-cost adoptable hub + refresh plan; **Moonshot** weaker unless participatory / “budget vs. actuals” story sharpens novelty.

---

## Implementation Reality (tech stack cross-check)

- **Fits:** Socrata SODA, Tableau Public, static hub (GitHub Pages class), Legistar for hearing cross-links if desired.  
- **Partnership-dependent:** ERP-side truth, automated refresh, official endorsement.  
- **AI:** Pillar mapping triggers AR 2.13 expectations (transparency, oversight) — disclose method and review.  
- **Not blocked by** 311, EnerGov, B2G walls for the core MVP.

---

## Rollback / Next Artifacts

- If refresh fails: pivot to **shame-clock / hub-only** MVP from INNOVATION_ANALYSIS and council ordinance narrative.  
- If alignment to PS1/PS2 required: see `lifecycle_review.md` — material product pivot, not a tweak.
