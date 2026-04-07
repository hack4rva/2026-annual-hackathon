# Roundtable: Affordable Housing Dashboard (Condensed)

**Initiated:** 2026-04-02  
**Idea:** Affordable Housing Compliance Dashboard  
**Pillar:** Thriving Neighborhoods  
**Problem Statement:** PS2 — Affordable Housing Compliance Monitoring  
**Source:** Demo (Hack for RVA) — presenters Corey, Fres, Morelli  
**Implementation Reality Score:** 14/25 — **Tier B** (Promising)  
**Overall Rank:** #49 of 73 (per `IMPLEMENTATION_REALITY_SYNTHESIS.md`)

---

## Input Materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded — staff-facing compliance dashboard (metrics, alerts, risk scoring, HUD reference, developer cluster) |
| `RESEARCH_RESULT.md` | Loaded — mid-sized city dashboard patterns (Madison, Raleigh, Oakland, Cambridge CHAS, PHA waitlists, deduplication/MOE risks) |
| `INNOVATION_ANALYSIS.md` | Loaded — ERRC grid, 8 divergent approaches, Pattern A (CHAS+NHPD public MVP) vs Pattern B (goal-anchored city partnership) |
| `lifecycle_review.md` | Referenced — audit context (OCA 2026-07), data provenance gap, program specificity (AHTF / AHTEP / EAHP) |
| `pillar-thriving-neighborhoods/research/INDEX.md` | Loaded — corpus pointer: F3/H3/I3 compliance-monitor MVPs; D3 housing programs; G2 compliance overreach; EnerGov/data risks |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — **EnerGov: no public API**; GeoHub/ArcGIS public; HUD federal datasets; partnership timeline 6–18 mo for internal systems |

---

## Framing Tension (Meta)

The folder contains **two products**: (A) the **demo narrative** — internal HCD compliance operations tool with alerts and risk ranks — and (B) the **post-hoc innovation spec** — public goal-anchored dashboard from CHAS/NHPD with no City integration for MVP. The roundtable scores the **demo claim** (staff compliance system) while using (B) as the **credible ship path** where (A) is blocked by the **EnerGov wall** and unstructured AHTF/EAHP records.

---

## Status

- **Phase:** COMPLETE (condensed)  
- **Verdict:** **Pivot or partner** — do not ship as “production compliance system” without named data path; ship **honest public slice** or secure **HCD MOU + ingestion design**  
- **Persona turns:** 7  
- **Challenge rounds:** 3 tensions  
- **Fatal flaw:** **Data layer vacuum** for the staff product as demonstrated  

---

## Turn 1 — INNOVATOR

**Assessment:** The strongest move INNOVATION_ANALYSIS already names: **goal-anchored accountability** (Madison/Raleigh/Boulder), not prettier spreadsheets. The demo’s risk-ranked property list is only innovative if the **ranking model is published and contestable**; otherwise it is a black box that legal and auditors will distrust. The non-obvious wedge: tie the UI explicitly to **OCA 2026-07** — “administration concurred; here is the instrument” — turning a hackathon build into an implementation response.

**Challenge:** ERRC “Create” (Richmond numeric target) assumes Council/HCD will adopt a public target; **Assumption #3** (INNOVATION_ANALYSIS) is high-risk. Without a target, the dashboard stays descriptive, not accountable.

---

## Turn 2 — ACTIVIST

**Assessment:** Peer cities prove **public** housing transparency is normal (Raleigh, Durham, Oakland). Richmond lagging is a legitimate advocacy talking point. But **resident benefit** from an **internal** compliance console is indirect: it matters if it prevents loss of affordable units. **Pattern A** (CHAS + NHPD + RRHA links) advances equity of **information**; it does not replace organizing for production funding.

**Challenge:** Do not conflate “we mapped HUD data” with “we fixed compliance.” National prior art (pillar E4/E5) shows civic housing tools stall when they over-claim enforcement or under-maintain data.

---

## Turn 3 — CITIZEN

**Assessment:** As a resident, I do not see the staff dashboard. I care whether **affordable homes stay affordable** and where **waitlists** stand. INNOVATION_ANALYSIS’s **Waitlist Reality Check** and **CHAS with MOEs** (Cambridge-style) speak to me; the demo’s alert workflow does not. **Privacy:** property-level subsidy stacks can edge toward tenant identification in small buildings — Cambridge-style suppression/aggregation matters (INNOVATION_ANALYSIS §5).

**Challenge:** Equity score must reflect **who gets the interface** — staff-only vs public — and **honesty about lag** (CHAS vintage).

---

## Turn 4 — MAYOR

**Assessment:** Politically, **backing audit follow-through** is safe; shipping a tool that implies City-certified compliance status **without** HCD sign-off is not. EnerGov replacement RFP is a **timing opportunity** — requirements for export/API should be on the table — but not a promise. Prefer **two-track messaging**: (1) public transparency MVP needs no procurement; (2) operational dashboard needs **HCD champion + DIT**.

**Condition:** Any public-facing numbers need a **named city contact** and refresh policy (RESEARCH_RESULT.md: stale dates erode trust).

---

## Turn 5 — ARCHITECT

**Assessment:** `RICHMOND_TECH_STACK_2026.md` is explicit: **no EnerGov API**; compliance tracking inside Tyler is UI-bound. **AHTEP**-shaped data may exist only inside EnerGov or parallel spreadsheets. **HUD FMR / income limits APIs** and **GeoHub parcels** are real weekend hooks — aligned with `lifecycle_review.md`. Staff workflow integration (notes, acknowledgments) implies **auth, audit logs, retention** — not a static site; scope explosion if treated as prod.

**ADR-style recommendation:** **Pattern A** = serverless or Power BI on **public** feeds; staff product = separate phase with **identity + DB + MOU**.

---

## Turn 6 — FRONTLINER (HCD / Compliance Analyst)

**Assessment:** The **IDEA.md** flows match real pain: deadlines, portfolio by developer, HUD reference, alert notes. But **lifecycle_review** is decisive: **no stated provenance**, **AHTF via email/PDF**, **three programs with different rules** — a generic “property” row **misaligns** with how analysts work. Risk scoring without **documented inputs/weights** will not survive audit scrutiny. **Exports** (PDF/CSV, Council packs) are missing from the demo story but required for the Director JTBD.

**Verdict on “use tomorrow”:** Not without **explicit synthetic → production field map** and **program-specific schema**.

---

## Turn 7 — FUNDER

**Assessment:** **Tier B** = fund **narrow vertical** with clear public-data MVP and **separate** restricted funding for **process redesign + ingestion** if HCD commits. Do not fund a full compliance platform on hackathon narrative alone. **OCP-style** or **foundation** angles fit **multi-city CHAS/NHPD playbook**; **city operational** funding needs **owner** (HCD) and **maintenance line**.

**Gate:** SME outreach (lifecycle: not started) is the **unlock** for any staff-facing budget ask.

---

# Phase 2 — Tensions (Resolved)

## Tension 1: Two products, one name

**Resolution:** Treat **Public Pattern A** (CHAS/NHPD/HUD + RRHA pointers) as **Ship Track 1**; **Staff compliance console** as **Track 2** contingent on HCD data agreement and EnerGov/replacement strategy. Marketing must not blur them.

## Tension 2: Demo credibility vs implementation honesty

**Resolution:** **Mandatory** disclosure: synthetic vs live data; **data dictionary**; **deduplication rules** for any multi-program inventory (RESEARCH_RESULT.md). Without this, **Execution** and **Feasibility** scores are capped.

## Tension 3: Risk scoring as feature vs liability

**Resolution:** Ship ranking only with **published methodology** or rebrand as **“staff sort preferences”** until validated. Pillar research **G2** (compliance overreach): tool **informs**, does not **decide**.

---

# Phase 3 — Fatal Flaw Test

| Test | Result | Evidence |
|------|--------|----------|
| Data dependency (staff product) | **Fail as specified** | No public compliance registry; EnerGov **no API**; AHTF/EAHP fragmented (email/PDF/OneDrive). `lifecycle_review.md`, `RICHMOND_TECH_STACK_2026.md` |
| Structural wall | **Hit** | **EnerGov wall** blocks programmatic AHTEP-style compliance feed; synthesis lists Affordable Housing Dashboard among affected ideas |
| Ownership | **Conditional** | Natural owner: **HCD**; no named steward or MOU in materials |
| Harm potential | **Medium** | Wrong “compliance” signal to Council; property-level **privacy** if public maps careless |
| Public MVP path | **Pass** | CHAS, NHPD, HUD APIs, GeoHub — **no** EnerGov required for **Pattern A** |

### Fatal flaw (staff compliance claim)

**Operational compliance dashboard without a verified, automatable ingestion path from Richmond’s systems of record.** The demo UX is ahead of the **data contract**.

---

## Verdict

### **PIVOT OR PARTNER**

- **Pivot (near-term):** Ship **Pattern A** — public, federal-data-anchored dashboard with explicit MOEs, staleness, and “not official HCD certification” disclaimers; use demo to argue for **numeric goals** and **future** pipeline feed.  
- **Partner (medium-term):** HCD + DIT path: ingestion design for AHTF/AHTEP/EAHP, **program-specific** model, audit-ready risk scoring, exports — timed with **permitting system** modernization.

---

## Consensus Rubric (Post-Roundtable)

*Scores reflect the **staff-facing demo ambition** as presented; feasibility penalized for data wall. A team that **only** ships Pattern A would raise Feasibility and adjust User Value toward Council/resident audiences.*

| Category | Score | Rationale |
|----------|:-----:|-----------|
| Impact | **5** | Addresses documented compliance/funding gaps (auditor context); protects affordable stock if trustworthy |
| Feasibility | **2** | EnerGov wall + unstructured local records; public MVP feasible, **as-demo staff system** is not |
| User Value | **4** | High for HCD **if** data exists; indirect but real for residents via preserved units |
| Execution | **4** | Strong UX narrative; undermined by **unstated provenance** and undocumented risk model |
| Innovation | **3** | Credible synthesis of national patterns; not first-mover; goal-anchor is the differentiator **if** adopted |
| Equity | **4** | Compliance monitoring and **public** burden/need visibility support fairer outcomes; requires MOE/privacy discipline |

### Award scores (weighted sums)

**Mayor’s Choice** — Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1  
= 25 + 10 + 16 + 12 + 12 + 3 = **78**

**Pillar Award** — Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  
= 25 + 16 + 6 + 9 + 12 + 12 = **80**

**Moonshot Award** — Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2  
= 15 + 20 + 12 + 12 + 4 + 8 = **71**

---

## Top 3 Recommendations

1. **Complete SME outreach** (`lifecycle_review`): confirm what HCD can export and on what cadence; name an **owner**.  
2. **Split the story**: public **Track 1** (wall-free) vs operational **Track 2** (MOU + schema for AHTF/AHTEP/EAHP).  
3. **Anchor to OCA 2026-07** in pitch materials and add **Council-ready exports** before claiming Director-level value.

## Unresolved Questions

- Will **replacement permitting platform** expose compliance APIs?  
- Can **Assessor** supply structured **AHTEP** signals via GeoHub or export?  
- What **official** affordable production target (if any) can Council endorse for goal-anchored UI?

---

*Condensed roundtable: 7 personas, 3 tensions, fatal flaw test. Aligned to pillar research INDEX (F3/H3/G2/D3) and Richmond tech stack constraints.*
