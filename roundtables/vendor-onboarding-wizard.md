# Roundtable: Vendor Onboarding Wizard (CONDENSED)

**Initiated:** 2026-04-02  
**Idea:** Vendor Onboarding Wizard  
**Pillar:** A Thriving Economy  
**Problem Statement:** PS1 — MBE Contracting Discovery (*Help minority-owned businesses identify and understand City contracting opportunities that match their capabilities.*)  
**Source:** NEW_IDEAS  
**Implementation Reality Score:** 20/25 — **Tier A** (Strong — 1–2 solvable blockers)  
**Overall Rank:** #20 of 73 (IMPLEMENTATION_REALITY_SYNTHESIS.md)

---

## Input Materials

| File | Status |
|------|--------|
| IDEA.md | Loaded |
| RESEARCH_RESULT.md | Loaded |
| INNOVATION_ANALYSIS.md | Loaded |
| `pillar-repos/pillar-thriving-economy/research/INDEX.md` | Loaded — corpus keyed to A2 (small business journey), B2/B3 (personas, stakeholders), C3 (front door), D2/D3 (procurement + business setup data), F3 (setup framing), G2/G4 (harm, matching bias), H3 (rule-based MVP) |
| RICHMOND_TECH_STACK_2026.md | Loaded — B2GNow no API; OpenGov browse-only; Socrata/eVA/Legistar public paths; AR 2.13 AI governance |

---

## Existing Rubric Grades (NEW_IDEAS_RUBRIC_GRADES.md)

| Category | Score |
|----------|:-----:|
| Impact | 5 |
| Feasibility | 4 |
| User Value | 5 |
| Execution | 4 |
| Innovation | 2 |
| Equity | 4 |

**Pillar Award:** 87 | **Mayor's Choice:** 91 | **Moonshot (computed):** 73  

---

## Status

- **Phase:** COMPLETE (condensed)  
- **Verdict:** **Ship with conditions**  
- **Persona turns:** 7  
- **Challenge rounds:** 3 tensions  
- **Fatal flaws:** 0 — blockers are organizational and content-governance, not structural walls for MVP  

---

## Turn 1 — INNOVATOR

**Assessment.** The durable reframe is not “build a portal” but **treat fragmentation as the product**: federal SAM.gov, Virginia eVA, and Richmond/OMBD layers are a single journey with invisible handoffs. The ERRC grid is directionally right—eliminate duplicate *mental* models (pre-population concept), reduce ambiguity on waits (e.g. CAGE ~10 business days), raise cross-jurisdiction **Draft / ready / filed** visibility, create a **registration readiness score** no single government site offers.

**Challenge.** INNOVATION_ANALYSIS flags the NYC Comptroller pattern: digital front doors that **only redirect** without transactional depth earn frustration. The wizard must feel like a **compiled critical path**, not a link farm with extra clicks.

**Temporal tag.** **Appreciating** if paired with human hooks (APEX, OMBD clinics); **depreciating** if shipped as static links without freshness discipline.

---

## Turn 2 — ACTIVIST

**Assessment.** Prior art is strong: NYC PASSPort (month+ → ~1 day filings), eVA scale (~100K suppliers), Austin SMBR (~7-day certification reviews with guided portals). Richmond lacks a **unified Richmond-specific** sequence; OMBD already walks vendors through steps **one at a time**—the wizard **codifies tacit workflow**, it does not invent a new mandate.

**Stance.** **Build outside, offer inside:** commodity hosting, no City IT dependency for MVP. Win condition is OMBD **endorsement + co-maintained content**, not formal procurement of the tool on day one.

---

## Turn 3 — CITIZEN

**Assessment.** As an MBE owner without compliance staff, I care whether this **saves real clock time** or only rearranges PDFs. Systemic delays (CAGE, SWaM timelines) **do not shrink** because of a checklist—I need honest “you cannot bid until X” language. Trust rises if the tool **never pretends to submit** on my behalf and clearly states it is **guidance only**.

**Who is left out.** Owners who rationally stop because **expected contract value < effort** (Assumption 1, highest R×U)—the wizard cannot fix **opportunity quality** or bonding capacity.

---

## Turn 4 — MAYOR

**Assessment.** **Political fit: high.** Aligns with OMBD’s mission; no new data publication obligation; failure mode is quiet (stale copy), not scandal. **Guardrail:** any “AI registration concierge” (Crazy 8s #5) triggers **AR 2.13** — DIT review, transparency, and bias documentation; weekend MVP should stay **deterministic**.

**Condition.** Named OMBD (or Procurement) **content owner** and quarterly review cadence—or the tool becomes a stale liability.

---

## Turn 5 — ARCHITECT

**Assessment.** **MVP:** rules-based questionnaire → personalized ordered checklist + document list + deep links; **persisted checkbox progress** (Shape B); optional OpenGov **browse** links for “what you might bid” without bulk API. **No** SAM.gov/eVA write APIs in weekend scope—**simulated** multi-jurisdiction status is demo-only; production honesty requires labels (“self-reported progress”) or dropping live sync until APIs/partnerships exist.

**Tech fit.** Static or light backend, no RAPIDS/iSupplier integration, no B2GNow API (confirmed wall for **automated** MBE directory match—wizard **documents** OMBD rules instead).

**Failure modes.** Silent staleness when SBSD, SAM, or City pages change—mitigate with **monthly link checks**, versioned “last reviewed” date, and broken-link detection.

---

## Turn 6 — FRONTLINER (OMBD / procurement-adjacent)

**Assessment.** This **reduces repeat explanations** and standardizes the sequence new vendors hear—valuable as **onboarding triage** before 1:1 time. It does **not** replace relationships, workshops, or APEX; research emphasizes **human help** (6,284 APEX training events nationally) as the scale lever. Best positioning: **digital pre-work** before clinic or OMBD appointment.

**User Value note.** Primary pain is often **discovery + sequencing**, not lack of documents online—value stays high if the roadmap is **accurate and maintained**, moderate if it duplicates PDFs already on rva.gov.

---

## Turn 7 — FUNDER

**Assessment.** **Fund the maintenance and partnership**, not exotic tech. Small grants for **content audits**, accessibility, and **user testing with 3–5 MBEs** beat an LLM line item for v1. If the product grows, **bundle with** Spend Mirror / Contract Navigator narrative (“find opportunity → become eligible”) per IMPLEMENTATION_REALITY_REVIEW.md cluster logic.

---

# Tensions & Resolutions

## Tension 1: Simulated integrations vs. credibility

**Issue.** Weekend prototype may show live-looking status without real SAM/eVA reads—vendors could **over-trust** or **distrust** the whole product.  
**Resolution.** Ship MVP as **self-attested checklist + readiness score math**, with explicit UX: “Mark complete when *you* have finished this step in the official system.” Demo simulations labeled **prototype only**. **Feasibility holds at 4**; claiming “real-time sync” without APIs would be a fatal honesty failure—do not claim it.

## Tension 2: Confusion vs. rational dropout (Assumption 1, R×U = 20)

**Issue.** If abandonment is economic (payoff too low), better UX does not move outcomes.  
**Resolution.** Instrument **exit interviews** in pilot; pair wizard with **“what you can bid on now”** (OpenGov browse + eligibility framing) so value is tied to **visible opportunities**, not only compliance. **Impact stays 5** at problem-definition level; **program evaluation** required before claiming participation lift.

## Tension 3: Innovation score vs. AI concierge provocation

**Issue.** Crazy 8s AI/TIN pre-validation is provocative but collides with **governance burden** and false-confidence risk.  
**Resolution.** **Innovation remains 2** for shipped scope (checklist + tracker + human hooks). Defer AI to a **Phase 2** gated by DIT review. **Equity** stays credible when the tool **lowers navigation burden** without **automated eligibility decisions** that could mislead protected classes (see pillar G4 matching-bias research theme).

---

# Fatal Flaw Test

| Test | Result | Evidence |
|------|--------|----------|
| Data dependency | **Pass (MVP)** | Requirements compilable from public OMBD, SBSD, eVA, SAM.gov, BPOL/iSupplier **documentation**; one-time structured curation (IMPLEMENTATION_REALITY_REVIEW: Data Readiness 3). |
| Structural wall | **Pass (MVP)** | No B2GNow **API** required for checklist-only product; B2GNow still blocks *automated* vendor-directory **matching** (different idea—OMBD Proactive Match Dashboard). |
| Ownership vacuum | **Conditional pass** | Natural owner: **OMBD** (tacit workflow already exists); **capacity unverified**—needs named steward (Tier A blocker pattern). |
| Harm potential | **Pass with UX discipline** | Informational only; avoid presenting **legal determinations**; surface SWaM/CAGE **wait reality** to prevent false “you’re ready” states. |
| Maintenance / staleness | **Risk, not flaw** | Rules engines **decay silently** (pillar review: monthly link-check, quarterly content review). Mitigation is operational, not architectural kill. |

---

## Verdict

### SHIP WITH CONDITIONS

1. **Named content owner** (OMBD or delegated partner) and **published review schedule** (e.g. quarterly rules audit, monthly link check).  
2. **Scope honesty:** no fake government submissions; no simulated live status in production without real APIs.  
3. **Human bridge:** prominent APEX / OMBD / clinic paths—digital is **prep**, not replacement for assistance (per RESEARCH_RESULT.md and INNOVATION_ANALYSIS takeaway).  
4. **Disclaimer:** not legal, tax, or certification advice; official systems remain source of truth.  
5. **Pilot metrics:** time to identify full registration path; count of late-discovered requirements; confidence pre/post (per INNOVATION_ANALYSIS §3).

---

## Narrative Summary

Vendor Onboarding Wizard is a **Tier A, high-fit companion** to Richmond’s MBE contracting goals: it **does not punch through B2GNow or ERP walls**; it **packages scattered public requirements** into one **ordered, honest path**, matching how OMBD already guides vendors. The main risks are **organizational** (who keeps copy current) and **behavioral** (confusion vs. rational dropout). It is **not** a substitute for federal/state processing times or for human support networks—but it can **compress orientation time** and **reduce surprise steps**, consistent with national guided-portal evidence (PASSPort, eVA, SMBR).

---

## Consensus Rubric (Post-Challenge)

| Category | Original | Consensus | Δ |
|----------|:--------:|:---------:|:-:|
| Impact | 5 | **5** | — |
| Feasibility | 4 | **4** | — |
| User Value | 5 | **4** | ↓1 (value hinges on maintenance + human pairing; systemic delays unchanged) |
| Execution | 4 | **4** | — |
| Innovation | 2 | **2** | — |
| Equity | 4 | **4** | — |

*Equity held at 4:* navigation burden disproportionately hits MBEs without compliance staff; table acknowledges human + digital pairing without overstating causal proof on contract awards.

### Revised Award Scores (if User Value → 4)

**Mayor's Choice:** 5×5 + 4×5 + 4×4 + 4×3 + 4×3 + 2×1 = **84**  
**Pillar Award:** 5×5 + 4×4 + 4×3 + 2×3 + 4×3 + 4×3 = **83**  
**Moonshot:** 2×5 + 5×4 + 4×3 + 4×3 + 4×2 + 4×2 = **66**

| Award | Original | Revised (optional) |
|-------|:--------:|:------------------:|
| Mayor's Choice | 91 | 84 |
| Pillar Award | 87 | 83 |
| Moonshot | 73 | 66 |

*Scoring note:* If the table prefers to keep **User Value 5** and **Equity 4** as in NEW_IDEAS, use original **91 / 87 / 73**.

---

## Unresolved Questions

- Who formally **signs off** on step order when Procurement vs. OMBD guidance diverges for an edge case?  
- Is there appetite for a **future** read-only integration (e.g. Virginia open data eVA exports) before any SAM.gov API partnership?  
- How does the product avoid **cannibalizing** OMBD workshop attendance while still reducing repetitive intake?

---

*Roundtable complete (condensed). Seven personas, three tensions, fatal-flaw test. No WebSearch run in this session; claims trace to idea folder + IMPLEMENTATION_REALITY_REVIEW + RICHMOND_TECH_STACK_2026.md + pillar INDEX.*
