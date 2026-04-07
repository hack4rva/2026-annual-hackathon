# Roundtable (Condensed): Stepwise

**Initiated:** 2026-04-02  
**Idea:** Stepwise — Youth Employment Platform  
**Path:** `2026-annual-hackathon/ideas/thriving-families/stepwise/`  
**Pillar:** Thriving Families  
**Problem statement:** PS1 — Youth Employment Pathways (one clear place for summer jobs, internships, first-job guidance)  
**Presenters:** Nana and Gabriel (Hack for RVA demo)

## Input Materials

| File | Status |
|------|--------|
| IDEA.md | Loaded — parent / candidate / employer flows, invite keys, readiness checklist, employer verification |
| RESEARCH_RESULT.md | Loaded — fragmented national ecosystem; document gating; SYEP playbooks; state permit variance |
| INNOVATION_ANALYSIS.md | Loaded — reframes Stepwise as VA-specific static “first-job playbook” / document wizard (ERRC, MVP shapes) |
| RICHMOND_TECH_STACK_2026.md | Loaded — static hosting, GRTC GTFS, Help1RVA/Unite Us no public API, AR 2.13 AI governance |
| `pillar-repos/pillar-thriving-families/research/INDEX.md` | Loaded — corpus maps to B1/B2 users, C1–C4 services, D5 transit, F/H MVP youth employment, G1 minor privacy |

**Cross-artifact tension:** IDEA describes a **three-sided marketplace** (listings, pipeline, analytics). INNOVATION_ANALYSIS argues the highest-feasibility wedge is a **sequenced, Virginia-aware readiness guide** with no backend. The roundtable treats both as facets of one brand but flags the split as strategic risk.

---

## Seven Personas

**1 — Supervised minor (14–15) and their parent**  
She wants real work that fits school and curfew; Virginia’s work-permit path is multi-party (youth, parent/guardian, employer). The parent flow in IDEA (profile, invite key, approval before submit) matches research on who must actually sign and vet applications. Pain: if the tool feels like “another app to manage,” parents disengage — INNOVATION_ANALYSIS flags parent engagement as the highest R×U assumption.

**2 — Self-service candidate (16–24)**  
He is ready to apply without per-application parental approval and expects mobile-first speed. Pillar research (B1, B5) stresses realistic phone use, offline-safe patterns, and avoiding unnecessary data collection. Value is high only if listings are **trustworthy and age-scoped**; otherwise he defaults to Instagram, school handouts, or national boards.

**3 — Small Richmond employer hiring youth**  
She is compliance-aware but time-poor. IDEA’s verification gate, pipeline stages, and embedded **Virginia youth hiring guide** reduce legal anxiety — aligned with B2 employer personas and RESEARCH_RESULT’s emphasis on employer responsibilities in permit flows. Without a clear reason to post here instead of generic job sites, she will not maintain listings.

**4 — Youth workforce coordinator (SYEP, RPS CTE, nonprofit partner)**  
He needs document completion **before** orientation, not a competing job board. INDEX reports H2/H4: weekend-viable MVPs often use **manual curation** and partner distribution. Stepwise as a playbook + checklist layer fits intake; Stepwise as a standalone marketplace competes with his existing channels unless formally integrated.

**5 — City / schools trust & equity stakeholder**  
She cares that minors’ data and parental consent are handled defensively (G1 minor privacy, FERPA-adjacent instincts). COPPA-conscious framing in IDEA is directionally right; any exaggeration of “compliance” without counsel is a reputational risk. Bilingual and ELL pathways (INNOVATION Crazy 8 #8) are not explicit in IDEA but matter for Richmond.

**6 — DIT / legal reviewer (labor + AI)**  
He will ask whether summarized VA wage/hour and permit text is **attorney-vetted** and maintained quarterly (INNOVATION Assumption Mapping). If interview prep or coaching later uses AI, **AR 2.13** requires transparency, human oversight, and DIT governance — not a silent chatbot.

**7 — Transit-constrained teen (first day)**  
She needs to know how to get to an interview or first shift. Tech stack allows **GRTC GTFS** for “nearest stop / route” in a static or light frontend; IDEA’s demo emphasizes lifecycle in-app, not commute — an easy equity add from D5 and INNOVATION Shape C.

---

## Tensions

| Tension | A side | B side |
|---------|--------|--------|
| **Product identity** | Full platform: board + employer CRM + parent gate | INNOVATION: static VA playbook — no APIs, maximum ship speed |
| **Supply vs. guidance** | Marketplace needs **inventory** and employer habit | Research shows **document + permit fragmentation** is the #1 drop-off before day one |
| **Discovery vs. APIs** | “One place” for opportunities | Help1RVA/findhelp has **no free public API**; listings may stay manual or partner-sourced |
| **Trust** | Employer verification improves safety | Without scale, verification is thin; fake or informal postings undermine the whole value prop |
| **Legal surface** | Built-in labor law content differentiates | Wrong or stale guidance is **worse than none** — needs owner and review cadence |
| **Equity** | Parent co-pilot supports younger teens | Teens without engaged guardians still stall at signature steps — playbook must name school counselor / workforce office paths |

---

## Fatal Flaw

**Unowned job supply and distribution.** A three-sided youth job product collapses if Richmond-specific, age-appropriate roles are not **sourced and refreshed** through partners (schools, SYEP, Boys & Girls Clubs, RVA Works–class entities per pillar INDEX). Without that, Stepwise is a polished workflow on an **empty or duplicative** shelf — teens leave; employers do not verify; the demo’s closed loop does not survive Sunday. Secondary killer (if labor copy ships broadly): **unreviewed legal content** going stale.

---

## Verdict

**Pursue a split MVP with one owner:** Keep the **readiness + permit + parent co-pilot sequence** as the shippable, low-API core (matches RESEARCH_RESULT + INNOVATION). Pair it with a **partner-curated job feed** (CSV, manual updates, or deep links) rather than pretending an open marketplace appears overnight. Employer dashboard features are valuable **after** 10+ real listings prove demand. Add explicit **data-as-of** and legal review path for VA rules; plan GRTC or static commute hints for first-day equity. Strong **Thriving Families PS1** story when framed as **guided pathway + trusted listings**, weaker if judged only as “another job board.”

---

## Scores & Awards (1–5 rubric; illustrative, not prescriptive)

| Category | Score | Note |
|----------|:-----:|------|
| Impact | 4 | Addresses real first-job friction; impact scales with partner adoption |
| Feasibility | 3 | Full marketplace is partnership-heavy; playbook-first path is much easier |
| User Value | 4 | Three flows + checklist + employer guide are concrete; value hinges on listings |
| Execution | 4 | IDEA documents end-to-end demo (apply → approve → offer → hired) |
| Innovation | 3 | Differentiated parent gate + VA context; core pattern overlaps national tools |
| Equity & Inclusion | 4 | COPPA-aware design; add bilingual + transit + guardian-absent paths |

### Weighted totals (hackathon formulas)

- **Mayor’s Choice** (Impact×5, Feasibility×5, User Value×4, Execution×3, Equity×3, Innovation×1): **76**  
- **Moonshot** (Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2): **69**  
- **Pillar (Thriving Families)** (Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3): **76**

**Award read:** Competitive for **Pillar** and **Mayor’s Choice** if pitched as **adoptable readiness layer + partner-fed opportunities** with a named distribution plan; **Moonshot** moderate unless the narrative emphasizes systemic re-wiring (e.g., mandatory SYEP front door) beyond the shipped demo.

---

## Implementation Reality (tech stack cross-check)

- **Fits:** Static or light hosting; GRTC GTFS for commute; curated links to VA DOL / permit resources; SMS reminder patterns (commodity per stack doc).  
- **Partnership-dependent:** Sustained job inventory, school/SYEP integration, any Unite Us / findhelp depth.  
- **AI:** If expanded, AR 2.13 review for user-facing automation.  
- **Not inherently blocked by** 311, EnerGov, B2G for a guidance + curated-list MVP.

---

## Rollback / Next Artifacts

- If listings fail: strip to **playbook + checklist + outbound links** per INNOVATION Shapes A–B; pursue First Job SMS Kit pairing noted in INNOVATION.  
- If legal risk dominates: remove interpretive labor summaries; link only to official VA/DOL sources until reviewed.
