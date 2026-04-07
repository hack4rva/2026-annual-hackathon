# Condensed Civic Roundtable: ADA Detour Publisher

**Pillar:** thriving-built-environment (A Thriving & Sustainable Built Environment)  
**Problem statement:** PS1 — Infrastructure Project Visibility  
**Idea slug:** `ada-detour-publisher`  
**Sources:** `IDEA.md`, `RESEARCH_RESULT.md`, `INNOVATION_ANALYSIS.md`, `RICHMOND_TECH_STACK_2026.md`, `pillar-thriving-built-environment/research/INDEX.md`  
**Date:** 2026-04-02  

---

## Idea recap

Digitize pedestrian routing plans from Work-in-Street permits into an accessible web experience: screen-reader-friendly turn-by-turn text, detour distance and grade, closure dates, optional GRTC CARE pickup conflict flags, and proactive alerts before scheduled trips. Research argues no U.S. city publishes routable, ADA-attributed pedestrian detour geometries from permits; Richmond’s stack shows EnerGov has no public API and permit depth lives behind DPW/right-of-way workflows.

---

## Seven persona perspectives (simulated)

### 1. Wheelchair user / CARE rider

Living with a mobility disability means construction is not an inconvenience—it is route failure. The idea’s text-first directions and grade estimates address what maps often botch for screen readers and slope sensitivity. CARE integration matters because paratransit no-show and late-cancel policies create real penalties when pickup points are blocked without notice ([GRTC CARE](https://ridegrtc.com/services/specialized-transportation/care) documents a no-show policy; exact thresholds require operator confirmation). The open question is whether riders will discover a city-adjacent site versus expecting 311 or the carrier to warn them.

### 2. Blind / low-vision pedestrian

PROWAG and MUTCD push physical detectable routes and non-visual signage in the field; this project argues the digital layer is still missing everywhere ([Access Board PROWAG news](https://www.access-board.gov/news/2023/08/08/u-s-access-board-issues-final-rule-on-public-right-of-way-accessibility-guidelines/)). A detour page that is genuinely WCAG 2.1 AA—not a PDF scan—aligns with DOJ’s Title II web rule (effective June 24, 2024; large jurisdictions face a **April 24, 2026** compliance milestone per published summaries of the final rule). QR-on-barrier and hotline variants from the innovation analysis matter as much as the web app for users without smartphones.

### 3. DPW / Right-of-Way permit reviewer

Richmond requires a **Work in Streets Permit** for right-of-way work; applications go through **EnerGov** and Right of Way ([RVA Right-of-Way Management](https://www.rva.gov/public-works/right-way-management)). The team does not expose permit geometries via a public API (`RICHMOND_TECH_STACK_2026.md`). Pedestrian plans may exist as PDF traffic control plans—useful for approval, painful for extraction. A pilot that asks contractors in one corridor to submit structured detour fields is more realistic than pretending an API exists on day one.

### 4. City IT / accessibility officer

Publishing detour information voluntarily still triggers **effective communication** and, for web content, **WCAG 2.1 Level AA** expectations under the Title II final rule. That is both tailwind (clear standard) and risk (the product must pass audit). Static hosting outside City infrastructure is fine for a hackathon; production would need ownership, change control, and a kill switch when field conditions diverge from the published path.

### 5. GRTC / regional mobility partner

Static **GTFS** is public; **CARE pickup point geometry and booking integration** are not in the open stack document. Flagging conflicts and “>2 hour” alerts need data sharing and policy alignment with GRTC/UZURV-style booking where applicable. The idea pairs naturally with a separate “construction vs CARE” concept noted in `IDEA.md` but should not assume integration is weekend-trivial.

### 6. Judge (Mayor’s Choice lens)

“If the City piloted one thing soon,” this is **high moral clarity** and **moderate operational lift** if scoped to manually verified corridors: 3–5 real closures, field-walked, lawyer-reviewed disclaimer language, and a DPW champion. It is **not** the fastest “flip a switch” win compared to republishing existing GeoHub layers because the authoritative detour narrative is not yet open data.

### 7. Legal / risk counsel

Inaccurate detour data could route someone into active work or a non-compliant ramp; mitigations in research (inspection SLAs, `last_verified_ts`, kill switch) are **non-optional**. PROWAG’s final rule ([Federal Register, 2023](https://www.federalregister.gov/documents/2023/08/08/2023-16149/accessibility-guidelines-for-pedestrian-facilities-in-the-public-right-of-way)) frames physical ROW standards; digital publication adds reputational and ADA effective-communication exposure if wrong or inaccessible.

---

## Top 3 tensions and resolutions

| Tension | Resolution |
|--------|------------|
| **Authoritative data vs EnerGov/API gap** | Phase A: curated detours from FOIA/partnership samples + field verification; Phase B: permit rule change for digital TCP geometry in a pilot corridor. |
| **Reach vs liability** | Ship text directions with prominent “verify on site,” timestamps, and rapid takedown; require inspector or advocate sign-off for “active” status. |
| **CARE alerts vs closed booking systems** | MVP: static warnings when GTFS stops overlap closure buffers; stretch: MOU with GRTC for pickup points and notification hooks. |

---

## Fatal flaw test (five)

| # | Test | Result |
|---|------|--------|
| 1 | **Data realism:** Do Work-in-Street files contain enough structured path detail to generate safe turn-by-turn text? | **Unproven at scale** — likely PDF-heavy; pilot must validate 3–5 permits or walk the corridor. |
| 2 | **Discovery:** Will accessibility-dependent users find and trust a new channel? | **At risk** — needs 311 script, disability org co-design, and possibly SMS/hotline per research. |
| 3 | **Wrong-route harm:** If geometry is wrong, is harm material? | **Yes** — fatal if unmanaged; mitigations are mandatory, not nice-to-have. |
| 4 | **Integration dependency:** Is GRTC/CARE data required for MVP? | **No for core value** — CARE is a differentiator, not a blocker for detour pages alone. |
| 5 | **Institutional home:** Who updates and sunsets pages when permits change? | **Weak without DPW SOP** — acceptable for hackathon demo; **fatal for city-scale** without owner. |

**Summary:** No single test kills the **pilot narrative**; tests 1, 3, and 5 kill **unsupervised automation** without process.

---

## Verdict

**Proceed as a high-equity pilot with manual/verified data and explicit guardrails; treat full permit automation as downstream of EnerGov replacement or digital TCP policy.** Strong fit for PS1 “infrastructure visibility” where the blind spot is **pedestrian** accessibility, not driver detours (WZDx remains road-first per USDOT framing).

---

## Category scores (1–5) and award totals

Assumptions: scores reflect condensed roundtable judgment; **Feasibility** marked **3** given EnerGov/no API and PDF permit reality (vs 4 in static IDEA rubric).

| Category | Score | Notes |
|----------|:-----:|-------|
| Impact | 4 | Deep harm reduction for a smaller population; aligns to MAP visibility + PROWAG/MUTCD spirit. |
| Feasibility | 3 | Clear path for manual pilot; blocked for scalable automation without partnership/policy. |
| User Value | 5 | Converts “surprise barrier” into plannable detour; CARE angle is high leverage if shipped. |
| Execution | 3 | Accessible UX + routing narrative are buildable; data pipeline is the hard part. |
| Innovation | 5 | Research-backed gap: closures exist nationally, **routable ADA detours from permits** largely do not. |
| Equity | 5 | Centered on disabled pedestrians and paratransit users—not an afterthought. |

### Weighted totals

- **Mayor’s Choice:** Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1  
  = 20 + 15 + 20 + 9 + 15 + 5 = **84**

- **Pillar Award:** Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  
  = 20 + 20 + 9 + 15 + 9 + 15 = **88**

- **Moonshot:** Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2  
  = 25 + 16 + 15 + 15 + 6 + 6 = **83**

---

## One-line pitch (demo)

Show three **real** Richmond sidewalk closures with field-verified, WCAG-reviewed **text detours** and a live screen-reader pass—prove the gap is policy and publishing, not technology alone.

---

## Rollback / ethics

Do not publish live detours without verification and accessible audit; retract any route on conflict with field conditions. Do not imply CARE integration without GRTC consent.
