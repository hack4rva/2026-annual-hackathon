# Roundtable (Condensed): Core Eligibility Pack Builder

**Initiated:** 2026-04-02  
**Idea:** Core Eligibility Pack Builder  
**Path:** `2026-annual-hackathon/ideas/thriving-inclusive-communities/core-eligibility-pack-builder/`  
**Pillar:** Thriving and Inclusive Communities  
**Problem statement:** Help residents navigate housing, workforce, and reentry services without repeating their story across every agency.  
**Source:** NEW

## Input Materials

| File | Status |
|------|--------|
| IDEA.md | Loaded |
| README.md | Loaded (links shared cross-agency JTBD/pain/prior art) |
| RESEARCH_RESULT.md | Loaded (no-server vs hybrid, BenefitsCal metrics, HIPAA/FOIA, PDF/a11y) |
| INNOVATION_ANALYSIS.md | Loaded (ERRC, assumptions, opportunity mapper, problem scoping scores) |
| RICHMOND_TECH_STACK_2026.md | Loaded (static hosting, AR 2.13, Help1RVA/Unite Us/VaCMS walls, no hackathon adoption precedent) |
| `pillar-thriving-inclusive-communities/research/INDEX.md` | Loaded — corpus: trust-first navigation, D3=1 cross-agency MVPs, Help1RVA gaps, false safety / PII / language risks |

---

## Seven Personas

**1 — Immigrant or refugee resident (multi-program applicant)**  
She is trying to align SNAP, Medicaid, and housing paperwork without repeating her story at every desk. Pillar research frames the gap as *trust and navigation*, not only “more listings.” A client-side pack that never sends her data to a server may feel safer than another portal — but only if she believes the output will be taken seriously when she walks in. Low digital literacy and intermittent connectivity push her toward print-and-carry workflows the IDEA explicitly targets.

**2 — Reentry or workforce client with tight appointment windows**  
He moves between workforce, housing, and supervision-related touchpoints and loses forms between visits. A single structured summary and document checklist reduces cognitive load if agencies actually accept it. If the tool is English-only or the PDF prints poorly on library printers, he is back to square one.

**3 — CBO caseworker (walk-in / kiosk assist)**  
Research cites a stark split: CBO-assisted flows on large state portals reach ~95.6% submission within seven days vs. ~60.6% unassisted. She is the realistic “completion engine” for v1. She needs fields that match *real* local intake forms, a fast print path, and clarity that she is not creating a liability by using a non-official packet.

**4 — City or DSS intake worker (receiving agency)**  
Her desk decides whether a client-generated PDF is a helpful head start or noise. INNOVATION_ANALYSIS ranks “agencies will accept this output” as the highest risk×uncertainty assumption. Without her buy-in on required documents and format, the product is a private checklist, not cross-agency navigation.

**5 — Legal aid paralegal (document assembly)**  
She already lives in Docassemble/LawHelp-style server worlds for complex cases. A static, no-server assembler could fill a gap for smaller shops — but only if rules and forms stay accurate and legally reviewed. Virginia-specific machine-readable rules are thin; encoding burden falls on maintainers.

**6 — Resident with high privacy threat model (fear of data sharing)**  
Pillar risk research (PII, tracking, “false safety”) matters here. A strict CSP, no third-party analytics, and “we store nothing” aligns with immigrant-serving guardrails — until a well-meaning team adds a tracker or a CDN without BAA review for anything touching PHI-adjacent flows.

**7 — DIT / compliance reviewer**  
AR 2.13 governs AI and vendor touchpoints if the product grows “smart” features. For the baseline PWA, she still cares whether static hosting and script integrity (SRI) are documented and whether any future “hybrid upload” pattern has a records-retention story. RESEARCH_RESULT stresses: *counsel and records co-design before code*.

---

## Tensions

| Tension | A side | B side |
|---------|--------|--------|
| **Privacy vs. operations** | Maximum client-side sovereignty; no server PHI | Agencies and FOIA/retention norms expect durable, auditable records; pure no-server weakens official handoff |
| **Self-service vs. reality** | IDEA aims to narrow the CBO vs. self-service completion gap | BenefitsCal-scale evidence shows assisted workflows dominate completion; “simpler form” may not close the gap |
| **Speed vs. acceptance** | Static hosting ships in days; fits tech stack “realistic uses” | Zero verified US production analogs for pure client-side cross-program intake — adoption is unproven |
| **PDF as artifact vs. accessibility** | Printable pack bridges digital/analog | Client-side tagged PDFs are hard; WCAG primary surface should be HTML — PDF is secondary |
| **Rules as product** | Versioned, signed rule bundles (SRI, semver) are clever | Eligibility logic without state APIs is brittle; wrong rule harms users more than a blank form |
| **Pillar promise** | “Don’t repeat your story” — narrative alignment | Tool prepares documents; it does **not** integrate Unite Us, 311, or DSS systems — true interoperability remains human-carried |

---

## Fatal Flaw

**Downstream nullification:** If receiving agencies (DSS, housing, workforce partners) do not treat the generated pack as legitimate intake input — or if required fields diverge from what staff must re-key — the resident still repeats their story and the privacy win buys nothing. RESEARCH_RESULT and INNOVATION_ANALYSIS agree: the gating question is not pdfmake, it is **institutional acceptance and field fidelity** before investing in rule encoding.

---

## Verdict

**Pilot with agencies first; ship MVP as CBO-assisted print flow.** The technical stack matches Richmond’s “static site + browser PDF” lane and avoids Help1RVA/Unite Us API walls for a pure prep tool. Treat the hackathon demo as **proof of workflow** (form → PDF → print) plus a credible **governance appendix** (CSP, SRI, no trackers, rules version stamp). Do not claim adjudication or state integration. Pursue 2–3 signed program scopes and written intake staff feedback before scaling languages or program count. For pillar scoring, strength is **user sovereignty and cross-agency handoff narrative**; weakness is **lack of system-to-system bridge** unless reframed honestly as “carry-forward packet,” not full navigation fix.

---

## Scores & Awards (1–5 rubric; illustrative — judges decide)

| Category | Score | Note |
|----------|:-----:|------|
| Impact | 4 | Real friction for multi-program applicants; impact capped until agency acceptance proven |
| Feasibility | 5 | Aligns with static/PWA path; no City API dependency for core MVP |
| User Value | 4 | High for prepared clients/CBOs; weaker for unassisted users absent save/resume UX tests |
| Execution | 4 | Demo-ready; rule accuracy, print fidelity, and a11y need disciplined QA |
| Innovation | 4 | Novel posture (client-only cross-program pack) with zero US production precedent — brave, not proven |
| Equity & Inclusion | 4 | Privacy-first helps trust-sensitive populations; risks if English-only, literacy-heavy, or “official-looking” PDF overclaims |

### Weighted totals (illustrative)

- **Mayor’s Choice** (Impact×5, Feasibility×5, User Value×4, Execution×3, Equity×3, Innovation×1): **89**  
- **Moonshot** (Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2): **78**  
- **Pillar (Thriving and Inclusive Communities)** (Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3): **87**

**Award read:** Strong **Pillar** fit for the cross-agency problem statement if pitched as **trust-first prep + CBO lane**, with explicit limits on integration. **Mayor’s Choice** credible as low-infrastructure pilot *after* agency co-design on acceptable outputs. **Moonshot** moderate — the idea is differentiated but not yet evidence-backed at scale.

---

## Implementation Reality (tech stack cross-check)

- **Fits:** GitHub Pages / Netlify / Vercel-class static hosting; pdfmake / pdf-lib; PWA/offline stretch; Twilio-class SMS only if added later with policy review.  
- **Not required for MVP:** Help1RVA API (none public), Unite Us enterprise APIs, RVA 311, EnerGov.  
- **Partnership-dependent:** Agency validation of packet contents; any hybrid upload or encryption relay; multilingual legal accuracy; long-term rule maintenance owner (CBO consortium vs. City).  
- **Policy:** AR 2.13 if AI-assisted fields or chat; HIPAA/OCR tracking guidance if any PHI-adjacent flows or vendors touch data.

---

## Rollback / Next Artifacts

- If agencies reject client PDFs: pivot to **official form-filling** (pdf-lib into state PDFs) or **CBO-only** labeled “worksheet — not submission.”  
- If completion tanks without save: ship **IndexedDB local save** (still no server) per hybrid patterns in RESEARCH_RESULT.
