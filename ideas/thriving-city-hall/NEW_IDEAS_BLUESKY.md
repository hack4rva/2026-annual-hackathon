# Blue Sky ERRC Ideas — A Thriving City Hall

**Generated:** April 1, 2026
**Method:** Blue Ocean ERRC (Eliminate, Reduce, Raise, Create) applied to shared JTBD and pain points
**Purpose:** Structurally different ideas that complement, not duplicate, the existing NEW_IDEAS set

---

## ERRC Grid

| | Eliminate | Reduce | Raise | Create |
|---|-----------|--------|-------|--------|
| Current approaches | Human triage and printed directories as primary "source of truth"; reliance on residents knowing 311 taxonomy and department names | Time spent opening PDFs and hopping between portals; duplicate tickets and repeat calls from status opacity | Channel count (311 web/app/phone, OpenGov, SAM.gov, spreadsheets) and dashboards that visualize single datasets | AI chatbots, contract extraction tools, expiry calendars, and SMS/web submission wrappers |

---

## Idea 1: Council Office Routing Memo

**Problem Statement:** PS1 — Resident Service Navigation
**User:** City Council aide or district constituent services coordinator handling resident email, voicemail, and walk-ins
**One-liner:** Paste unstructured constituent text and get a short, citeable routing memo with the likely department, the exact public form or phone path, and plain-language language to read back — sourced only from curated RVA pages, not from model invention.

**ERRC moves applied:**
- **Eliminate:** The need for council staff to guess categories in RVA 311 or forward threads cold to the wrong department
- **Reduce:** Back-and-forth between council offices and CSR when the issue type was knowable from public content
- **Raise:** First-touch routing quality at a trusted entry point (elected-office intake) that phone and web wizards do not cover
- **Create:** An audit trail artifact (memo + source links) staff can attach when escalating, which generic resident bots do not produce

**How it works:** Staff paste redacted resident text into a small internal web form. The tool matches against a version-controlled JSON map of symptoms → department → official URL or 804 number (seeded from rva.gov Services, CSR/311 helpful links, and department landing pages). Optional lightweight NLP ranks candidates but every line shown must link to a curated source snippet. Output is a one-page memo: recommended path, alternates, and "if unsure" fallback to 311 during hours.

**Data sources:** rva.gov Services directory (`rva.gov/common/services`), RVA 311 helpful links and CSR pages, published council/district contact pages, and the public 311 phone schedule from official city sources (no private CRM or 311 API required for the hackathon slice).

**Why it's different:** Targets **staff in council offices**, not residents using Text 311, Hey804, RVA Help, or a self-serve wizard. Deliverable is a **reusable routing memo with mandatory citations**, not conversational AI intake or a decision-tree UI for the public.

---

## Idea 2: Contract–Payment Drift Scanner

**Problem Statement:** PS2 — Procurement Risk & Opportunity Review
**User:** Procurement or finance analyst supporting internal controls (post-p-card reset, pre-renewal reviews)
**One-liner:** Join the public City Contracts dataset to the public Payment Register to flag payments that occur outside a contract's effective window or that spike against a single supplier without a matching active contract record — without opening PDFs.

**ERRC moves applied:**
- **Eliminate:** The "open the PDF to see if we're still authorized to pay" loop for first-pass triage
- **Reduce:** Tab-switching across Oracle/OpenGov/OnBase for cross-checks that open data already supports
- **Raise:** Signal on **spend–authority misalignment** (not just "when does it expire?"), which expiry-only dashboards underweight
- **Create:** A reconciliation lens the City does not ship: **two-Socrata join + anomaly rules** as a weekend-provable pattern

**How it works:** Ingest `xqn7-jvv2` (City Contracts) and `5y73-enav` (City Payment Register FY16+) via Socrata CSV or SODA. Normalize supplier names (fuzzy match + manual alias table for top vendors). For each payment row, test whether payment date falls inside any active contract window for that supplier (and optionally agency). Surface a sortable exception list: payments outside window, contracts with zero payments in 24 months, and concentration spikes — export CSV for follow-up in OnBase/RAPIDS.

**Data sources:** Richmond Open Data Portal — **City Contracts** dataset `xqn7-jvv2` and **City Payment Register FY16+** dataset `5y73-enav` (documented in procurement JTBD research as accessible, with monthly/daily-style public updates).

**Why it's different:** CivicPulse AI, Mira, Vendor Contract Mgmt, and RVA Contract Lens emphasize PDF comprehension and multi-registry compliance. Contract Expiry Dashboard and alert concepts emphasize time-to-expiry. This is **spend-vs-authority alignment** using only the two tabular open datasets — a distinct workflow and risk lens tied to audit/control failures.
