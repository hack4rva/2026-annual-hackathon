# Roundtable (Condensed): Renter-Aware Notifications

**Initiated:** 2026-04-02  
**Idea:** Renter-Aware Notifications  
**Pillar:** Thriving Neighborhoods  
**Problem statement:** Neighborhood Development Discovery — renters are excluded from deed-based and owner-centric land-use notice; majority-renter city skews engagement toward homeowners.  
**Source:** NEW  

---

## Input materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — EnerGov no public API; GeoHub/Legistar public; Twilio/SMS commodity |
| `pillar-repos/pillar-thriving-neighborhoods/research/INDEX.md` | Loaded — cross-refs: A2 (transparency), B1/B5 (residents, digital equity), C4/C5 (notice gaps), D1/D2 (Legistar, GIS), E4 (notification tool failures), F2 (development notify), G3/G5 (inclusion, guardrails), H4/H5 (data constraints, scope) |
| `IMPLEMENTATION_REALITY_REVIEW.md` (idea #5) | Referenced — **17/25, Tier A** |

---

## Implementation Reality (synthesis)

| Dimension | Score | Note |
|-----------|:-----:|------|
| Ownership | 3 | PDR vs engagement; civic org possible; no department “ask” yet |
| Data readiness | 4 | GeoHub parcels, Legistar public; geocoding MatterTitle → address still fuzzy in alternate MVP path |
| Tech fit | 3 | GIS + DPV + mail APIs are commodity; SMS/opt-in adds persistent backend + TCPA |
| Integration | 4 | Can run standalone (gap analysis, PDFs); **city-owned mail workflow** needs partnership |
| Maintenance | 3 | Bilingual templates, subscriber lists, accuracy checks — ongoing |

**Tier: A (17/25)** — Strong equity case; solvable blockers are political and operational, not a missing dataset.

---

## Seven personas (single pass)

### 1 — Innovator (Blue Ocean)

The leverage is reframing **tenant registry → deliverable-unit list**: mail to **Occupant** at DPV-validated delivery points inside a GIS buffer. That challenges the assumption that renters require PII. The ERRC grid is right: eliminate owner-only default, reduce PII to zero, raise buffer rigor (e.g. 300 ft + DPV), **create** automated trigger from case filing — with the honest caveat that “automated” in Richmond implies **EnerGov + internal GIS**, not a weekend integration (no public API on EnerGov).

### 2 — Activist (Equity)

National evidence (e.g. ProMarket / SSRN line in research) frames this as structural: owner notice + newspaper + site signs **under-notify** renters, who are disproportionately lower-income and people of color. Renter-inclusive ordinances in San Francisco, Tacoma, Seattle, Raleigh are **precedent**, not experiment. The moral claim is due process: notice should be **reasonably calculated** to reach people who live there, not only who owns the deed.

### 3 — Planning frontliner (PDR)

Staff live in **volume, proof, and defensibility**. Doubling or tripling mail pieces means mail room load, applicant questions, and “did we reach every unit?” audits. SF-style **applicant fee recovery** and print-mail vendors help, but **ordinance text** must define “to the extent practicable,” returns, and languages — or staff bear liability and chaos. A prototype that only counts gaps without a Council-approved workflow creates **extra work**, not less.

### 4 — Renter (Citizen)

I do not read legal ads or walk past every site sign. A plain-language postcard (or door info) in **my language** with hearing time and how to comment is tangible. But Monday 1:30 PM hearings (as raised in pillar pain-point research) still block me even if notice arrives — **notification ≠ participation**. I need trust that this is not junk mail and that commenting actually matters.

### 5 — Mayor / policymaker

This is a **policy product** wearing software clothes. Passing ordinance language and fee schedule updates is the real milestone; tech proves feasibility and cost. Without a named champion (Planning + Council member), the hackathon output is a **briefing deck**, not a service. That is still valuable if it shortens the path to a vote.

### 6 — Data architect

**GeoHub** parcels and buffers are public REST; **Legistar OData** can anchor cases. **USPS DPV/CASS** is commercial but standard. Risks: multifamily **master-meter / single roll** addresses under-count units; **unpermitted** units invisible; geocoding case text to parcels is error-prone if the team shortcuts without DPV. Demo should show **coverage metrics and uncertainty**, not pretend 100% enumeration.

### 7 — Applicant / builder (Economic tension)

If I pay **per envelope** like SF’s model, I need predictability. Larger buffers and occupant lists **raise my costs**; I will ask whether this is equity or a **tax on housing supply**. The table’s answer is: cost recovery is norm in peer cities; equity gap is documented — but **political framing** must be “same bar for owners and occupants,” not “developer penalty.”

---

## Tensions (unresolved but named)

| Tension | A side | B side |
|---------|--------|--------|
| Legal sufficiency vs engagement | Mail to Occupant satisfies *Mullane*-style “reasonable effort” better than publication-only | EPA Trenton-style evidence: passive paper can yield **negligible** response; **CBO / in-building** work may be mandatory for real voice |
| Prototype vs production | Weekend = gap analysis + postcard mock + cost model | Operations = ordinance + vendor + **EnerGov internal** workflow + records retention |
| Tech narrative | “Auto from EnerGov” is the right long arc | **RICHMOND_TECH_STACK**: EnerGov has **no public API** — external teams cannot complete that loop without City partnership |
| Privacy / digital | Occupant mail minimizes PII | SMS/email opt-in adds **TCPA**, consent, and digital divide issues |
| Data confidence | DPV gives deliverable points | Assessor / parcel ≠ always **unit roll**; informal housing missed |
| Scheduling | Better notice | Hearings still **inaccessible** in time for working renters unless process reforms align |

---

## Fatal flaw

**The critical path is not buildable outside City hall:** the defining win is **legally required occupant mail tied to each filed case**, executed by **Planning/PDR** with vendor contracts and fee rules. A civic prototype can **simulate** lists and costs but **cannot** bind the City to send mail. Framing the idea as “we integrated EnerGov” is **false** without DIT/PDR — EnerGov is UI-only and partnership-dependent per tech stack reference. **Fatal flaw:** mistaking a **proven policy + procurement playbook** for a **standalone shippable app**; without ordinance + owner department, the product is **evidence and advocacy**, not infrastructure.

---

## Verdict

**Advance as Tier A policy-and-data initiative, not as a self-contained SaaS.**

- **Ship first:** Buffer vs owner-only **coverage gap** on real Legistar cases + bilingual postcard spec + applicant cost model + ordinance language cribbed from peer cities (SF “to the extent practicable”).  
- **Partner next:** PDR for workflow truth; CBOs for engagement (research: mail alone insufficient).  
- **Defer / gate:** Full SMS platform until TCPA and maintenance owner are clear.

**One-line verdict:** Right problem, right precedent, commodity tooling — **wrong to score as pure engineering**; success is **Council + PDR adoption**, with tech as demonstrator.

---

## Hackathon rubric scores (1–5) + awards

*Derived from `INNOVATION_ANALYSIS.md` problem scoping + table consensus adjustments.*

| Category | Score | Rationale |
|----------|:-----:|-----------|
| Impact | 5 | Majority-renter city; corrects systematic planning voice skew |
| Feasibility | 3 | Legally and technically tractable in peer cities; **Richmond blockers are political and procurement** |
| User Value | 5 | Direct benefit to renters and aligned organizers |
| Execution | 4 | Credible weekend: gap math + mock mail + cost model; not full operations |
| Innovation | 4 | Reframe (address DB not tenant DB) + hybrid mail/digital is strong; ordinance-led |
| Equity & Inclusion | 5 | Core equity story; must pair with language access and hearing accessibility |

**Weighted totals (RVA Hacks formulas)**

- **Pillar Award** (Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3): **93**  
- **Mayor’s Choice** (Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1): **98**  
- **Moonshot** (Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2): **84**

**Best fit:** **Pillar Award (Thriving Neighborhoods)** and **Mayor’s Choice** if pitched as implementable ordinance + ops package; weaker for **Moonshot** (precedent-heavy vs. visionary tech).

---

## Status

| Field | Value |
|-------|--------|
| Phase | Condensed roundtable — complete |
| Challenge rounds | 3+ tensions tabled; no forced resolution |
| Fatal flaw | 1 — City-owned workflow / EnerGov reality |
| Evidence | Idea triple + tech stack + pillar index + IR review |
