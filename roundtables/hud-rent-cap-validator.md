# Roundtable (Condensed): HUD Rent Cap Validator

**Initiated:** 2026-04-02  
**Idea:** HUD Rent Cap Validator  
**Pillar:** Thriving Neighborhoods  
**Problem Statement:** Affordable Housing Compliance Monitoring — residents in subsidized housing lack an independent, low-friction way to check rent against published HUD payment-standard logic without EIV/PII.  
**Source:** NEW (AI-generated post-event)  
**Idea path:** `2026-annual-hackathon/ideas/thriving-neighborhoods/hud-rent-cap-validator/`

## Input materials

| File | Status |
|------|--------|
| IDEA.md | Loaded |
| RESEARCH_RESULT.md | Loaded |
| INNOVATION_ANALYSIS.md | Loaded |
| RICHMOND_TECH_STACK_2026.md | Loaded (public HUD/federal data path; no City wall for Pattern A) |
| `pillar-repos/pillar-thriving-neighborhoods/research/INDEX.md` | Loaded — corpus maps housing compliance, HUD rental data (D3, D4, F3, G2, G4, G5, H3, H5) |

---

## Seven personas (condensed)

### 1 — Mayor (Decider)

**Advance / Refine:** **Refine.** Aligns to MAP Pillar 2 and affordability accountability, but the **accountable owner for “correct cap” is RRHA (PHA), not a City department.** City DIT does not set voucher payment standards. Piloting a **resident-facing explainer** is politically low risk if framed as **informational + RRHA-linked recourse**, not an official determination. KPI that could move: reduced confusion calls if co-branded; **mis-branded tool increases dispute volume** — net metric unclear without partnership.

### 2 — Innovator (Expander)

**Reframe:** The breakthrough is not “another compliance dashboard” but **relocating verification leverage to the tenant** using **only public HUD USER FMR/IL APIs**, explicitly **not** EIV — challenging the assumption that rent-cap truth requires protected income feeds. **Stretch ideas** (IDP on 50058, AI recert triage) are deliberately deferred; the provocative minimum is **ZIP + bedrooms → published benchmark + program-labeled limits + “what to do next.”**

### 3 — Frontliner (Operator)

**RRHA staff / housing counselors:** Risk of **more intake burden** if residents arrive citing a third-party “cap” that **does not match RRHA’s payment standard** (90–110% FMR, exception rents). **Community workers:** Might **use** a simple lookup if RRHA vouches for labels and complaint paths. Verdict: staff **Maybe** until mapping validated; counselors **Use** if scoped as **education, not adjudication.**

### 4 — Citizen (Recipient)

- **Engaged resident:** High visibility if marketed through tenants’ rights / RRHA channels; values transparency.  
- **Service user:** Wants **one clear number and who to call**; FMR jargon fails assumption #2 (high risk).  
- **Invisible resident:** SMS helps; **literacy, language, and trust** still exclude many — tool must not imply **government surveillance** or **landlord retaliation safety** without real safeguards.

### 5 — Architect (System guardian)

**Walls hit:** **None** for Pattern A (static site / Twilio + **HUD USER bearer-token APIs** + optional **GeoHub** address→ZIP). EIV/WASS stays **out of scope** — correct. **AR 2.13:** If any LLM/chat layer is added later, plan for **DIT governance**; weekend MVP should stay **deterministic API → templated copy.** Integration: **Low.** TCO: **Low** (commodity hosting). Recommendation: **Ship** Pattern A **only** with staleness labeling (FMR **annual** refresh) and **non-binding disclaimers.**

### 6 — Funder (Resource realist)

**Model:** Zero- or near-zero-cost civic deploy (GitHub Pages / Netlify) + **free-tier** HUD USER limits (**60 req/min**). **Year 1:** token + hosting + optional Twilio **<** typical small grant. **Year 3:** same if volunteer-maintained; **sustainability** improves if RRHA or a housing nonprofit **adopts** as official companion page. Sustainability risk: **Low** for skeleton; **Medium** if professional UX, legal review, and ongoing HUD field changes require staff time.

### 7 — Activist (Universe expander)

**Decision tree:** **Build / Partner hybrid.** National **HUD APIs** mean any org can fork; **Richmond-specific truth** lives with **RRHA**. Prior art: **vendor suites** (Yardi, RealPage, MRI) **hide** calculation logic and are **staff-only**; **no** widely cited **tenant-facing** RRHA-branded FMR explainer in the bundle. **Scale:** Replicable across PHAs **if** each locale injects **local payment standard** parameters. **Ownership:** Civic tech or tenant org **ships**; **RRHA validates** copy and thresholds.

---

## Tensions (challenge map)

| Tension | What pulls apart | Resolution hook |
|--------|-------------------|-----------------|
| **Innovator vs. Architect** | “Live compliance per unit” vs. no lease/EIV data | Keep MVP to **public benchmark + optional self-reported rent** with explicit limits |
| **Mayor vs. Activist** | City credit vs. PHA authority | Position as **regional HUD-aligned utility**, City **optional** endorser |
| **Citizen vs. System** | Clarity vs. federal/program complexity | **Program picker** (HCV vs. LIHTC vs. other) + **plain language** + RRHA contact |
| **Frontliner vs. Innovator** | Caseworker sanity vs. tenant empowerment | **Co-design** with RRHA/counselors on wording and escalation |
| **Funder vs. Innovator** | Cheap MVP vs. Bob.ai-style triage | **Defer** Pattern B to post-hackathon **MOU** phase |
| **Architect vs. Citizen** | Correct engineering vs. understandable output | **Never** present API output as **legal rent owed** without local rules |

---

## Fatal flaw (single)

**Misrepresentation of the binding cap:** If the product implies that **HUD USER FMR (or raw API output) equals the tenant’s maximum rent** without incorporating **RRHA’s actual payment standard** (and **program-specific** rules — LIHTC uses **MTSP**, not FMR; EIV **off-limits**), the tool is **worse than nothing**: it damages **trust**, wastes **staff time**, and could **help landlords** anchor rents to the wrong ceiling/floor (assumptions #5, #7).

**Not a structural-wall kill:** It is a **content-and-governance kill** until **RRHA (or written public SOP) confirms** how Richmond maps **FMR → payment standard** and **which programs** the UI covers.

---

## Scores and awards (hackathon rubric, 1–5)

Derived from INNOVATION_ANALYSIS problem scoping (§5), stretched to six judge categories:

| Category | Score | Note |
|----------|:-----:|------|
| Impact | 4 | ~4k HCV households (RRHA); tenant-rights angle; bounded without partnership |
| Feasibility | 5 | Public APIs + optional GeoHub; no AvePoint/EnerGov dependency for Pattern A |
| User Value | 4 | High if comprehension + recourse are solved; otherwise “interesting number” |
| Execution | 4 | Demo-friendly live API; credibility hinges on disclaimers + RRHA alignment |
| Innovation | 4 | Tenant-facing flip vs. staff-only vendor norms |
| Equity & Inclusion | 4 | Serves low-income tenants; digital/access and misuse risks need design |

**Weighted totals (from event rubric):**

| Award | Weights | Weighted sum |
|-------|---------|--------------|
| **Pillar (Thriving Neighborhoods)** | I×5, UV×4, F×3, Inn×3, E×3, Eq×3 | **87** |
| **Mayor’s Choice** | I×5, F×5, UV×4, E×3, Eq×3, Inn×1 | **89** |
| **Moonshot** | Inn×5, I×4, UV×3, Eq×3, F×2, E×2 | **78** |

---

## Fatal flaw test (pass/fail)

| Criterion | Result |
|-----------|--------|
| No identifiable owner | **PASS** (civic ship + RRHA validation role — owner story must be explicit in pitch) |
| Structural wall, no workaround | **PASS** for Pattern A |
| Net negative for frontline | **REFINE** (risk if misleading; not automatic fail if scoped) |
| No funding path | **PASS** |
| Harms Invisible Resident | **REFINE** (comprehension + access gaps; SMS + languages mitigate) |

---

## Final verdict

**REFINE → GO (conditional).** Ship **Pattern A** as a **weekend demo** only if: (1) **RRHA or public documentation** is cited for **payment standard vs. FMR**; (2) UI **labels program scope** and **LIHTC vs. HCV** limits; (3) copy is **non-binding** with **complaint / RRHA** links; (4) **temporal tag on data** (annual FMR). **Pattern B** (staff dashboard / IDP) stays **out of scope** until partnership.

**Temporal tag:** **Stable** on API availability; **Appreciating** if RRHA co-brands; **Depreciating** if shipped as “official cap” without local validation.

---

## Rollback / reuse

**Rollback:** Retire public URL; no City integration to unwind. **Reuse:** Parameterize CBSA/entity ID and RRHA contact block for other PHA jurisdictions.
