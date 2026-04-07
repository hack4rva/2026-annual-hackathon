# Roundtable (Condensed): Mira — AI Procurement Intelligence Dashboard

**Initiated:** 2026-04-02  
**Idea:** Mira  
**Pillar:** A Thriving City Hall — Procurement (PS2 adjacent: contract review / intelligence)  
**Source:** Hack for RVA demo (team of two)  
**Inputs:** `IDEA.md`, `RESEARCH_RESULT.md`, `INNOVATION_ANALYSIS.md`, `RICHMOND_TECH_STACK_2026.md`, `pillar-repos/pillar-thriving-city-hall/research/INDEX.md`

---

## Bundle Context

Mira is a **staff-facing** upload → OCR/extract → dashboard + review queue + optional per-contract chat, built on **Azure Document Intelligence, Azure Foundry (RAG), Azure Search, FastAPI, Azure Container**. It targets manual PDF review (dates, vendor terms, compliance flags). Pillar research corpus frames the same problem space under **procurement systems (C3), contract data (D2), procurement MVP shapes (H3), and procurement risks (G2)** — with **OnBase/RAPIDS** as the integration reality and **AR 2.13** as the AI governance gate.

---

## Seven Personas (Condensed Turns)

### 1 — Innovator
The winning story is not “AI reads contracts like a lawyer.” Published municipal wins are **IDP**: redaction, header extraction, classification (King County–style time compression). Mira should own **“compliance checklist accelerator”**: extract structured fields, flag missing artifacts, **mandatory HITL** on every field — and treat clause interpretation as Phase 2. The demo’s **chat** is the highest-variance feature: impressive in the room, hardest to defend under audit.

### 2 — Procurement Analyst (Fronliner)
If upload → structured form → export beats 20 minutes of eyeballing PDFs, I will use it daily — **if** I can trust corrections stick and I am not slower than fixing bad extractions. I need **clear ownership**: is this draft input to RAPIDS/OnBase or a shadow database? Without a write-back or official workflow, I am doing double entry.

### 3 — DIT / Enterprise Architect
**AR 2.13** allows AI with **DIT oversight**, transparency to the public when appropriate, and minimized collection of personal data. Contract PDFs and attachments may carry **PII** (W-9s, bank details). Architecture must include **redaction, audit logs, model-change visibility** (DC AI Procurement Handbook pattern). **OnBase** and **RAPIDS** have **no public API** for Richmond’s real corpus; a hackathon stack in Azure is **not** automatically authorized for production contract data.

### 4 — City Attorney / Compliance
**VPPA and records** discipline apply. Outputs used in decisions need **defensible accuracy** — NYC Comptroller’s MyCity audit showed **claimed vs audited accuracy** gaps. I want **citations to source spans**, not just summaries. Generative “risk indicators” without gold-standard evaluation are **reputational and legal** exposure if staff skip reading the PDF.

### 5 — Resident / Transparency Advocate
I do not log into staff tools. My angle is **downstream**: if this speeds **FOIA-ready** redacted summaries or clearer public reporting, good. If it is only internal, **equity impact is indirect**. Plain-language summaries for Council or public-facing artifacts must not substitute for the official record.

### 6 — Mayor’s Office / Champion
I need **one named owner** (CPO, DIT, or Procurement) and a **90-day path** from prototype to pilot charter: scope, data classes allowed, and **what we will not automate yet**. “Under $200/month” is attractive next to analyst time, but **enterprise risk review** and **integration** are the real cost lines.

### 7 — Skeptic / Auditor
**RESEARCH_RESULT.md** is clear: **clause-level municipal metrics are scarce**; ECM + IDP + RPA is the proven pattern. Mira’s pitch mixes **proven extraction** with **RAG chat** — the second layer is where **hallucination and overconfidence** live. Until you publish **precision/recall on Richmond PDFs** (INNOVATION_ANALYSIS Assumption #1), the product is a **demo**, not an evidence-based procurement system.

---

## Tensions (Resolved Briefly)

| Tension | Resolution |
|--------|--------------|
| **Wow demo (chat, “risk”) vs. governance** | Consensus: **Lead with extraction + HITL checklist**; chat is optional demo-only or behind “experimental” until span-level evaluation exists. Aligns with pillar risk reports (G2, G5) and AR 2.13. |
| **Upload MVP vs. OnBase system of record** | MVP is **valid for hackathon**; production requires **Connect → Stage → Analyze → Return** (research) and **City partnership** for connectors — per **RICHMOND_TECH_STACK**, direct OnBase/RAPIDS access is a **partnership wall**, not a weekend unlock. |
| **Socrata metadata vs. full PDF corpus** | **xqn7-jvv2** supports **structured fields**, not bulk authoritative PDFs. Mira’s “real city data during the hackathon” does not remove the **structural gap** for citywide automation without ECM access (INDEX → D2, D5, C3). |

---

## Fatal Flaw

**Dual failure mode (either can kill adoption or create liability):**

1. **Authority gap:** Without a governed path from **OnBase/RAPIDS** (or formally approved extracts), Mira remains a **shadow queue** — analysts cannot treat it as the record, and value **stalls at “nice upload tool.”**  
2. **Generative trust gap:** **Per-contract AI chat** and underspecified “risk indicators” on legal text, without **measured accuracy, citations, and HITL**, reproduce the **“confidently wrong”** pattern flagged in national AI/chatbot audits and in pillar **92_red_flags** / **G-series** research.

**Verdict hook:** Not “do not build” — **narrow the product** until (1) and (2) are explicitly designed for, or the flaw is live.

---

## Verdict

### **PILOT WITH SCOPE CUTS — evidence before narrative**

**Ship as:** Header/field extraction + validation checklist + human confirm + audit log + export — **no production reliance on generative legal Q&A** until a pilot produces **field-level and (if any) span-level metrics** on Richmond documents.

**Partner gates:** DIT (AR 2.13), Procurement (checklist + owner), and a written **data class** policy for PDFs containing PII.

**Implementation Reality (informal, vs. tech stack rubric):** **Tier B–A border** — strong **tech stack fit** (Microsoft/Azure ecosystem), **weak data/integration readiness** for citywide rollout without ECM partnership; **maintenance** and **model governance** are ongoing burdens, not $200/month alone.

---

## Consensus Rubric (1–5)

| Category | Score | Rationale |
|----------|:-----:|-----------|
| **Impact** | **4** | Real pain (manual PDF review, renewal/compliance risk); impact scales if integrated — not fully realized as a sidecar. |
| **Feasibility** | **3** | Prototype credible; production blocked by **OnBase/RAPIDS** access, **DIT AI review**, and **validation burden** for generative features. |
| **User Value** | **4** | High for procurement/legal **if** workflow integration and trust are solved; chat adds uncertain value vs. risk. |
| **Execution** | **4** | Strong weekend build story (real data, full stack demo); live-demo extraction risk remains. |
| **Innovation** | **3** | AI contract assistants are **not novel**; **IDP + checklist + HITL** positioning is the differentiated, honest frame. |
| **Equity** | **3** | Primarily **staff efficiency**; public benefit is **indirect** (better procurement outcomes, possible transparency artifacts) unless explicitly designed. |

### Award Scores (Hackathon Weights)

**Mayor’s Choice** — Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1  
= (4×5)+(3×5)+(4×4)+(4×3)+(3×3)+(3×1) = 20+15+16+12+9+3 = **75**

**Pillar Award** — Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  
= (4×5)+(4×4)+(3×3)+(3×3)+(4×3)+(3×3) = 20+16+9+9+12+9 = **75**

**Moonshot Award** — Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2  
= (3×5)+(4×4)+(4×3)+(3×3)+(3×2)+(4×2) = 15+16+12+9+6+8 = **66**

---

## Top Conditions (Post-Verdict)

1. **Scope lock v1:** Extraction + checklist + HITL + export; generative chat **demo-only or disabled** until evaluation plan exists.  
2. **Pilot charter:** Named owner, allowed data classes, redaction rules, retention — **before** scaling beyond volunteer uploads.  
3. **Integration roadmap:** Document **OnBase connector / RAPIDS metadata write-back** as Phase 2+ dependency per **RICHMOND_TECH_STACK** partnership list.

---

*Condensed roundtable. Full persona corpus available in pillar `research/INDEX.md` (sections C, D, F, G, H for procurement and AI guardrails).*
