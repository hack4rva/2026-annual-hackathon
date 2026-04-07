# Roundtable: Subsidy & Covenant Snapshot (CONDENSED)

**Initiated:** 2026-04-02  
**Idea:** Subsidy & Covenant Snapshot  
**Pillar:** Thriving Neighborhoods  
**Problem Statement:** PS2 — Affordable Housing Compliance Monitoring  
**Source:** BLUESKY (ERRC reframing)  
**Implementation Reality Score:** 20/25 — Tier A (Strong)  
**Overall Rank:** #18 of 73

## Input Materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `README.md` | Loaded |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — GeoHub parcels (public REST), HUD/NHPD/MAH (federal open data); no EnerGov/311 dependency for MVP |
| `pillar-repos/pillar-thriving-neighborhoods/research/INDEX.md` | Loaded — cross-refs: D3/D4 (housing & HUD data), H3 (compliance MVP scope), F3/G2/G4 (compliance monitor, overreach, data gaps) |

**Bundle:** GeoHub Infrastructure Lookup (Bundle 3) — shared parcel/assessor join with StreetLights, HUD Rent-Cap Validator, etc.

---

## Seven Personas (Condensed)

### 1 — THE MAYOR

**Advance (Refine execution path).** PS2 alignment is direct: visibility into whether publicly supported housing stays affordable over time supports MAP neighborhood accountability. **Owner:** Housing & Community Development (compliance) primary; City Auditor secondary for oversight narratives; a civic nonprofit could host Pattern A without City IT. **KPI:** Count of properties with documented expiration *horizon* under active preservation review; reduction in reactive “we learned too late” cases (qualitative until baselined). **Risk:** Political heat if the tool implies City failure or spooks owners/tenants with wrong dates. **90-day path:** Pattern A (NHPD + HUD MAH + GeoHub) needs no procurement; formal City adoption still needs a champion and comms plan.

### 2 — THE INNOVATOR

**Reframe:** The product is not “a map of subsidies” but an **expiration radar with honest uncertainty** — national datasets as triage, recorder truth as validation layer. **Leverage:** ERRC grid already eliminates pure recorder dependency for launch by using NHPD/HUD MAH; **create** explicit “renewal / extension likely” signaling so end dates are **risk flags**, not verdicts (matches research on false expirations and state QAP extensions). **MVP:** Filterable table or map — Richmond-filtered NHPD join to GeoHub parcels by address/lat-long; monthly MAH refresh optional. **Provocative stretch:** Historical affordability-loss layer (#8 in innovation doc) for accountability — defer until core radar is trusted.

### 3 — THE FRONTLINER (HCD / compliance)

**Maybe → Use** if the tool is **complementary**: faster triage for “what might expire soon,” links to source IDs, and clear disclaimers. **No** if it replaces internal calendars (Yardi-class systems hold recert schedules) or if leadership treats public dates as audit findings without verification. **Friction removed:** One place to see federal-program horizon for a parcel; **friction added:** Explaining discrepancies to council/advocates when NHPD disagrees with file cabinets. **Ask:** Flag data vintage and “confirm with HCD/recorder” on every row.

### 4 — THE CITIZEN

**Engaged resident / advocate:** High value — “when might affordability end here?” is otherwise opaque. **Service user / tenant:** Medium — needs plain language (“this is an estimate, not legal advice”) and **contact paths**, not just dates. **Invisible resident:** Risk if the UI is web-only only; pair with printable council-district summaries or partner distribution (per pillar index digital-equity thread). **Predatory acquisition concern (from innovation analysis):** Mitigate with preservation resources alongside exposure, not naked countdowns.

### 5 — THE ARCHITECT

**No structural wall** for Pattern A: GeoHub ArcGIS REST + federal HUD-family data match the tech stack “realistic without partnership” list. **Tier A gap (from IDEA):** Local covenants and city-funded layers are **not** in one public structured feed — Tier S needs HCD export or FOIA-shaped pipeline; recorder/OCR path is **partnership-heavy**. **Integration complexity:** Low for MVP; Medium for full covenant snapshot. **Recommendation:** **Ship** Pattern A externally; **Adapt** with City when HCD can publish a maintained join key (parcel ID / address / project ID).

### 6 — THE FUNDER

**Pattern A:** Low Year-1 cost (hosting, quarterly NHPD ingest, light QA). **Year 3:** Medium if City adopts — staff time for validation, not software licenses. **Sustainability:** Strong if owned as **data stewardship** (who refreshes, who answers “why doesn’t this match my deed?”). **Negative case:** Grant-funded build with no named curator → stale map → reputational harm for advocates and HCD.

### 7 — THE ACTIVIST

**Build outside, invite inside.** National comparables (NYC ACRIS depth, Chicago/Seattle gaps on expirations) show **public expiration visibility is rare**; Richmond can lead with federal-layer radar. **Ecosystem:** Align with housing advocates and preservation networks; use demo to **justify** HCD data sharing for locally funded units. **Decision tree:** **Build** Pattern A + **Partner** for Pattern B. **Scale:** Replicable for any city with parcels + NHPD coverage.

---

## Tensions (Cross-Persona)

| Tension | Personas | Resolution (table position) |
|---------|----------|-----------------------------|
| **Radar vs. title truth** | Innovator vs. Architect | Ship federal triage; label as **risk horizon**, not legal expiration; recorder/HCD validation for high-stakes decisions |
| **Public pressure vs. predatory dynamics** | Activist vs. Citizen | Pair data with **preservation pathways** (resyndication, RRHA/VHDA context); avoid sensational “clock” without context |
| **Staff complement vs. shadow IT** | Frontliner vs. Mayor | Position as **front door to questions**, not system of record; HCD buys in on disclaimers and update cadence |
| **MVP speed vs. equity of access** | Architect vs. Citizen | Web MVP OK for hackathon; roadmap needs **non-digital** artifacts for low-connectivity neighborhoods |
| **Innovation narrative vs. feasibility** | Innovator vs. Funder | “Renewal probability” is valuable but needs **evidence discipline** — start with qualitative flags, not fake precision |

---

## Fatal Flaw Test

| Criterion | Result | Notes |
|-----------|--------|--------|
| No identifiable owner | **PASS** | HCD (City); civic host acceptable for Pattern A prototype |
| Structural wall, no workaround | **PASS** | MVP avoids OnBase/EnerGov/311; uses GeoHub + HUD ecosystem |
| Net negative for frontline | **PASS** *conditional* | Fails if deployed as authoritative compliance record without HCD alignment |
| No funding path beyond pilot | **PASS** | Ingest + hosting are cheap; risk is **operational** curation, not license cost |
| Harms Invisible Resident | **PASS** *conditional* | Web-only + acquisition risk require mitigations; not an automatic kill |

**Synthesis:** No single **KILL** flaw for Pattern A if guardrails ship with the product. The **trust flaw** (presenting NHPD dates as definitive) would be operationally fatal to credibility — treat as **blocking requirement** for any public release, not as a separate row.

---

## Verdict

**FINAL VERDICT:** **GO** (Pattern A: federal-layer parcel snapshot + strong uncertainty UX) / **REFINE** (full “covenant snapshot” with local instruments and compliance metadata).

**Conditions before “City-official” use:** (1) Every date labeled with program source + “confirm with recorder/HCD”; (2) explicit handling of **false expiration** / renewal extensions; (3) named refresh owner for NHPD/MAH pulls; (4) advocate review on **public benefit vs. speculative harm** framing.

**Temporal tag:** **Appreciating** — HUD datasets and GeoHub parcels are stable public paths; HCD partnership and possible permitting-system change improve long-run completeness.

---

## Hackathon Rubric (1–5) & Weighted Awards

*Synthesized from `INNOVATION_ANALYSIS.md` problem scoping + idea tier; not a substitute for live judge scoring.*

| Category | Score | Note |
|----------|:-----:|------|
| Impact | **5** | Directly addresses preservation and compliance visibility at scale |
| Feasibility | **4** | Strong public-data MVP; local completeness is the known gap |
| User Value | **5** | HCD triage, advocates, auditor, informed residents |
| Execution | **3** | Credible demo possible; trust/UI burden is non-trivial |
| Innovation | **4** | ERRC reframe + “expiration radar” and uncertainty layer vs. typical maps |
| Equity & Inclusion | **4** | Preservation equity upside; requires access and harm mitigations |

**Weighted totals (hackathon formulas):**

| Award | Calculation | Total |
|-------|-------------|------:|
| **Pillar (Thriving Neighborhoods)** | Impact×5 + User×4 + Feas×3 + Inn×3 + Exec×3 + Equity×3 | **90** |
| **Mayor's Choice** | Impact×5 + Feas×5 + User×4 + Exec×3 + Equity×3 + Inn×1 | **90** |
| **Moonshot** | Inn×5 + Impact×4 + User×3 + Equity×3 + Feas×2 + Exec×2 | **81** |

**Implementation Reality (from IDEA):** **20/25 — Tier A.** Parcel join is proven; **single structured local covenant dataset** remains the lift to Tier S.

---

## Status

- **Phase:** CONDENSED COMPLETE (single-pass synthesis from repo sources)  
- **Turns:** 7 persona summaries (non-subagent)  
- **Challenge rounds:** Captured as **Tensions** table  
