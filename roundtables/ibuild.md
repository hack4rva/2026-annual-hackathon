# Roundtable: iBuild (CONDENSED)

**Initiated:** 2026-04-02  
**Idea:** iBuild  
**Pillar:** A Thriving Economy  
**Problem statement (card):** Small Business Navigation — help first-time entrepreneurs understand steps to start and register a business in Richmond.  
**Note:** IDEA / INNOVATION / RESEARCH center on a **pre-application building permit wizard** (upstream of EnerGov), not BPOL/business-entity registration. Alignment is **partial** (commercial TI, small contractors) unless reframed.

## Input materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `README.md` | Loaded (live demo link; shared small-business research pointers) |
| `pillar-thriving-economy/research/INDEX.md` | Loaded — corpus maps setup + MBE + data (see H3 `mvp_setup_rule_based`, D3 business setup, A2 journey) |
| `RICHMOND_TECH_STACK_2026.md` | Loaded |

---

## Phase 1 — Divergence (three voices)

### 1 — INNOVATOR

**Reframe:** Applicants do not need a faster EnerGov first; they need **pre-intake answers** (which permits, rough cost, rough time, checklist) like DC, Philadelphia, LA County, Salt Lake (OpenCounter), Tacoma. Richmond can mimic that with **published fee rules + GeoHub zoning** before any vendor API.

**Leverage:** Tyler’s own Decision Engine product shows the pattern; an external static/rule-based layer is a valid MVP when the portal is UI-only.

**Stretch ideas (from analysis):** permit package PDF; comparables (“what neighbors paid”) if public records exist.

**Temporal tag:** **Appreciating** — EnerGov replacement RFP may eventually improve integration options; narrow wizard stays valid either way.

---

### 2 — ACTIVIST

**Ecosystem:** Many US cities already run permit wizards or OpenCounter-style tools; Richmond is **not** inventing the category. **Adapt / Build hybrid:** nonprofit or civic team ships static tool; **City endorses** when accuracy is validated.

**Owner question:** Natural stewards are **Planning / COTP / DPU** (permit content), not OMBD. For MAP “economy,” tie the narrative to **small contractors and storefront buildouts**; do not oversell as full “start a business” navigator without adding BPOL/steps content.

**Decision tree:** **Adapt** (proven pattern) + **Partner** (City must own fee schedule truth over time).

---

### 3 — CITIZEN

**Service user:** High value if estimates are **narrow, labeled, and cautious** — saves trips and phone trees.

**Engaged resident:** Wants transparency; will compare to official sources.

**Invisible resident:** **Excluded** by default if English-only, smartphone-only, no staff referral path — multilingual and counter handouts matter for equity claims.

**Trust:** Berkeley/Honolulu-style **fee/timeline drift** destroys trust faster than silence; disclaimers and effective dates are mandatory.

---

## Phase 2 — Convergence (four voices)

### 4 — MAYOR

**MAP:** Primary pillar fit is **okay for economy** only if framed as **reducing friction for small businesses and homeowners investing in Richmond**. The **card problem statement** (entity registration / “start a business” steps) is **not** what the spec delivers — **Refine** naming and scope or add a real registration journey module.

**KPI (if permit-focused):** reduced “what do I need?” contacts, higher complete first submissions, shorter time-to-ready-to-apply.

**Owner:** Named department for **permit policy accuracy** (e.g., Chief of Permits / DPU leadership), not generic “IT.”

**Pilot:** 90–180 days realistic **after** content partnership or disciplined manual curation for 5–10 scenarios.

---

### 5 — ARCHITECT

**Structural walls:** **EnerGov** has **no public API** — iBuild **does not require** read/write to EnerGov for MVP; uses GeoHub (ArcGIS REST) + **manually encoded** schedules/rules. **Not blocked** by the EnerGov wall for discovery-only.

**Risks:** Stale GeoHub overlays (tech stack notes some layers stale); **no** programmatic fee truth — maintenance is **content**, not code.

**Integration complexity:** **Low** (public GIS + static site). **Security:** Low if no PII collection.

**Recommendation:** **Ship** narrow MVP externally; **Buy/Partner** for long-term if City wants single official channel.

**Temporal:** **Appreciating** if new permitting platform exposes better APIs later.

---

### 6 — FRONTLINER

**City counter staff:** Will **not** send people to an unofficial wizard unless outputs match reality and liability is clear — otherwise **more** rework when applicants show wrong expectations.

**Contractors:** Will use it if fast and credible; will abandon if ±5% fee promise is broken.

**When wrong:** User blames the City; staff clean up. **Adoption gate:** endorsement + periodic validation with technicians.

**Verdict:** **Would use** only after pilot accuracy tests against staff answers.

---

### 7 — FUNDER

**Cheapest path:** Static / serverless front end, volunteer content updates — **near zero** marginal cost.

**Sustainability cliff:** **High** if grant pays build but **no** department owns **annual fee/ordinance refresh** (research stresses governance cadence).

**Negative business case:** Salt Lake / Tacoma / Tulsa evidence — staff hour savings and foot-traffic reduction **if** adoption and accuracy hold.

**Model:** **Hybrid** — civic prototype → City or vendor activates Tyler Decision Engine / official estimator when politically ready.

---

## Tension map (condensed)

| Tension | Here |
|---------|------|
| Innovator vs. Architect | Bold full “decision engine” vs. weekend **content cliff** — narrow scope wins. |
| Mayor vs. Activist | MAP registration wording vs. **permit** product — **relabel or extend**. |
| Frontliner vs. Innovator | Staff liability vs. self-service ambition — **disclaimers + validation**. |
| Citizen vs. System | Trust requires **stamped effective dates** and ranges, not single dates. |
| Funder vs. Innovator | OpenCounter-scale vision vs. **who pays for rule maintenance**. |
| Architect vs. Frontliner | Clean rules vs. **case-by-case discretion** (assumption 6 in analysis). |

---

## Fatal flaw test

| Criterion | Assessment |
|-----------|------------|
| Identifiable owner? | **Conditional pass** — clear *functional* owner class (permitting leadership); **unclear** for unfunded hackathon artifact. |
| Structural wall, no workaround? | **Pass** — EnerGov API not required for upstream guidance. |
| Net negative for frontline? | **Risk** — **Fails** if estimates are sloppy; **pass** if narrow scope + staff validation. |
| Funding past pilot? | **Risk** — content maintenance unfunded unless City adopts. |
| Harms Invisible Resident? | **Partial fail** unless language, accessibility, and non-digital paths are designed in. |

**Synthesis:** No automatic kill on integration grounds. **Effective fatal flaw cluster:** **MAP problem-statement mismatch** (registration vs. permits) **plus** **accuracy/endorsement gap** → judged as wrong problem or untrusted tool. **Remedy:** Reframe pillar pitch; partner for rule truth; start with 5–10 scenarios.

---

## Verdict

**Status:** **REFINE / CONDITIONAL GO** — Strong civic pattern; Richmond-feasible without EnerGov API; **must** fix problem framing and accuracy governance before “ship” language.

**Implementation reality (estimated from tech stack + analysis):** ~**16–19 / 25** — **Tier A/B** border: strong tech fit for static + GIS; **weak** data readiness (manual extraction); **maintenance** is the long-term risk.

---

## Scores (six categories, 1–5)

| Category | Score | Note |
|--------|:-----:|------|
| Impact | **4** | Well-evidenced nationally; local impact depends on adoption. |
| Feasibility | **3** | Technically easy; **content** and partnership harder. |
| User Value | **4** | Clear for homeowners/contractors; weaker for “registration-only” entrepreneur. |
| Execution | **3** | Demo-able; weekend accuracy is the stress test. |
| Innovation | **3** | Proven pattern transfer, not novel globally. |
| Equity & Inclusion | **3** | Digital divide + language unless explicitly addressed. |

### Weighted awards (same formulas as judging rubric)

- **Pillar Award:** Impact×5 + User×4 + Feas×3 + Inno×3 + Exec×3 + Equity×3 → **20 + 16 + 9 + 9 + 9 + 9 = 72**
- **Mayor’s Choice:** Impact×5 + Feas×5 + User×4 + Exec×3 + Equity×3 + Inno×1 → **20 + 15 + 16 + 9 + 9 + 3 = 72**
- **Moonshot:** Inno×5 + Impact×4 + User×3 + Equity×3 + Feas×2 + Exec×2 → **15 + 16 + 12 + 9 + 6 + 6 = 64**

---

## Actions before “Advance”

1. **Align copy** with either **Small Business Navigation** (add BPOL/entity steps) or **relabel** to permitting / built-environment friction under Economy + Built Environment.  
2. **Freeze** 5–10 scenarios; stamp **effective dates** and “subject to staff review.”  
3. **Pilot** against counter/technician ground truth (per INNOVATION first test).  
4. **Name** a departmental champion for fee/rule updates or plan nonprofit + annual refresh cadence.

---

*End condensed roundtable.*
