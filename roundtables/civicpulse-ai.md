# Roundtable (Condensed): CivicPulse AI / SmartGo Procurement Intelligence Hub

**Initiated:** 2026-04-02  
**Idea path:** `2026-annual-hackathon/ideas/thriving-city-hall/civicpulse-ai/`  
**Pillar:** A Thriving City Hall — Procurement Intelligence (PS2 adjacent)  
**Team (from IDEA.md):** Civic Pulse AI — Bhaskaran Jairajan, Prasanna Partiban, Vardarajan Seduraman

## Input materials

| Source | Status |
|--------|--------|
| IDEA.md | Loaded — Contract Pulse View + Document Insight Extractor (PDF → structured fields, dual-pane verification) |
| RESEARCH_RESULT.md | Loaded — 2026 market: governed AI procurement, vendor-led aggregation, Houston/Pavilion pattern, OMB M-24-18 / GovRAMP / human-in-the-loop |
| INNOVATION_ANALYSIS.md | Loaded — ERRC: do not rebuild GovSpend; prioritize workflow copilot + cooperative reuse; assumption risks on staff adoption and AI accuracy |
| RICHMOND_TECH_STACK_2026.md | Loaded — AR 2.13 AI governance; Socrata contracts; **RAPIDS/OnBase: no public API** for contract PDFs; OpenGov portal public, no bulk API |
| `pillar-repos/pillar-thriving-city-hall/research/INDEX.md` | Loaded — corpus maps procurement to B3, C3, D2, E3, F3, G2, H3 |

---

## Seven personas (web-informed)

**1 — Senior procurement specialist (city buyer)**  
Municipal procurement teams face documentation gaps, threshold compliance pressure, and “do more with less” staffing (ICMA and industry surveys emphasize digitalization and real-time supplier tracking as responses). This persona lives in Oracle/OpenGov workflows and measures success in fewer missed renewals and defensible files. They would love automated extraction **if** every field traces to a PDF highlight and legal will sign off.

**2 — City attorney / contract reviewer**  
Virginia’s Public Procurement Act frames competition and method-of-procurement rules; cities operationalize them through manuals and small-purchase thresholds. Attorneys worry less about dashboards than about **audit trails**: who relied on machine output, when, and against which document version. Federal direction (e.g., GSA AI clause proposals, agency governance guidance) pushes incident reporting, data rights, and contractor accountability—patterns city law will mirror for in-house AI.

**3 — DIT / AI governance lead (AR 2.13)**  
Richmond explicitly permits AI for analysis and productivity but requires DIT oversight, transparency to residents where relevant, supplier documentation of bias/training, and human oversight. Any production LLM touching contracts triggers review—not a weekend checkbox. This persona asks for architecture diagrams, DPAs, and proof that outputs are not vendor-training fodder (aligned with OMB M-24-18 themes in RESEARCH_RESULT).

**4 — Chief Procurement Officer / procurement director**  
Peer cities (e.g., Pittsburgh on OpenGov) report tripling bid volume despite turnover when digital front doors work; Syracuse-style launches show vendor scale-up when portals consolidate notices. The CPO cares about **roadmap fit**: whether CivicPulse complements OpenGov/RAPIDS or becomes a second system staff refuse to open.

**5 — Department “occasional buyer” (non-procurement)**  
Delegated purchasing under local manuals means program staff initiate many small buys. They rarely enjoy reading 80-page PDFs; they also lack time to upload documents into a new hub. For them, value is **defaults**: templates, cooperative hints, and clear “what do I do next”—not raw extraction tiles.

**6 — Certified MBE / small business vendor**  
National comptroller and disparity work consistently finds M/WBE shares lag goals, average contract sizes skew smaller, and **documentation and registration burden** compound access problems. A tool optimized for city staff does not automatically improve equity; if anything, faster insider workflows can widen advantage unless paired with outreach, plain-language opportunity surfacing, and subcontract visibility.

**7 — Civic transparency advocate / auditor**  
They want consistent, public contract metadata (expiry, value, vendor) and fear **black-box AI** replacing accountable clerical process. They support extraction only when outputs are reproducible, cite page anchors, and align with open data (e.g., Socrata) rather than a private shadow database.

---

## Tensions

| Tension | Summary |
|---------|---------|
| **Build vs. buy** | OpenGov, Euna, GovSpend-class tools already embed AI solicitation and market intelligence; CivicPulse risks duplicating commodity capabilities unless tightly scoped to Richmond’s “last mile.” |
| **Upload vs. integration** | System-of-record contract PDFs sit behind OnBase/RAPIDS with no public API; a hackathon path is manual upload or curated samples—operationally fragile at scale. |
| **Speed vs. liability** | Wrong expiry or dollar figure from an LLM is not a UX bug—it is potential fiscal or legal exposure; dual-pane review helps but does not remove accountability. |
| **Innovation analysis vs. product as pitched** | INNOVATION_ANALYSIS reframes value as cooperative-first workflow copilot; IDEA.md emphasizes generic PDF extraction + dashboard—strategic drift lowers differentiation. |
| **Staff adoption** | INNOVATION_ANALYSIS flags “staff will change workflow” as high-risk untested; procurement cultures reward known ERP paths over side tools. |

---

## Fatal flaw

**Trust boundary on extracted facts without authoritative sync:** If the organization ever treats AI-extracted dates, values, or clauses as **presumptively correct** for renewal decisions, competitive awards, or compliance filings—without mandatory reconciliation to OnBase/RAPIDS and a signed human attestation—the system creates **silent divergence** from the legal record. In the worst case, a confident hallucination or OCR error drives a missed renewal or improper sole-source narrative. Mitigation (RAG, confidence scores, HITL, versioned source PDFs) is necessary but **not sufficient** without ERP-linked validation for production.

---

## Verdict

**Promising demo; conditional path to pilot.** As a weekend prototype, the dual-pane “extract + verify” story is judge-credible and aligned with 2026 norms for governed procurement AI. As a City Hall program, it must (a) pick one wedge—cooperative search + template **or** governed extraction pilot with legal/DIT charter—not “full hub,” and (b) explicitly defer any claim of parity with the official contract repository until integration is scoped with DIT.

---

## Category scores (1–5) and weighted awards

Assumed rubric categories: Impact, Feasibility, User Value, Execution, Innovation, Equity.

| Category | Score | Rationale (one line) |
|----------|:-----:|----------------------|
| Impact | 4 | Real pain (manual PDF review, renewal risk); peer governments show large time/cost gains when workflow AI lands. |
| Feasibility | 3 | Demo viable on uploads; production blocked on OnBase/API, AR 2.13 process, and enterprise security posture. |
| User Value | 4 | Strong for procurement specialists if integrated; weaker for occasional buyers without workflow packaging. |
| Execution | 4 | Clear two-component demo; credibility hinges on live PDFs and honest error handling. |
| Innovation | 3 | Document AI is table stakes in 2026; side-by-side verification is good craft, not a new category. |
| Equity | 3 | Indirect at best; not centered on vendor access or MBE outcomes without explicit features. |

### Weighted totals (max raw = 125 for MC-style weights below — scales differ by award)

**Mayor’s Choice** — Impact×5 + Feasibility×5 + UserValue×4 + Execution×3 + Equity×3 + Innovation×1  
= 4×5 + 3×5 + 4×4 + 4×3 + 3×3 + 3×1 = **75**

**Pillar Award (Thriving City Hall)** — Impact×5 + UserValue×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  
= 4×5 + 4×4 + 3×3 + 3×3 + 4×3 + 3×3 = **75**

**Moonshot** — Innovation×5 + Impact×4 + UserValue×3 + Equity×3 + Feasibility×2 + Execution×2  
= 3×5 + 4×4 + 4×3 + 3×3 + 3×2 + 4×2 = **66**

---

## Cross-reference: Implementation reality (from tech stack)

- **Usable without partnership:** Uploaded PDFs, public Socrata contract rows (metadata), Legistar (not contract body).  
- **Blocked / partnership-only:** Native OnBase PDF corpus, RAPIDS write-back, vendor directory bulk (B2GNow).  
- **Governance gate:** AR 2.13 before operational AI on city documents.

---

## Status

- **Phase:** Condensed evaluation complete  
- **Output:** This file  
