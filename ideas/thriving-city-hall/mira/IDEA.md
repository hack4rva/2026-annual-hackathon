# Mira — AI Procurement Intelligence Dashboard

**Team:** Daniel and Priyesh (team of two)
**Pillar:** Thriving City Hall — Procurement Management
**Tech Stack:** Azure Document Intelligence (OCR), Azure Foundry (extraction + RAG), Azure Search (indexing), FastAPI (backend), Azure Container (hosting)
**Build Time:** 48 hours
**Hackathon:** Hack for RVA

---

## Problem Statement

Every week, Richmond procurement staff open **dozens of PDFs** — contracts, RFPs, amendments — and manually hunt for:
- Expiration dates
- Vendor terms
- Compliance flags

There is **no dashboard**, no early warning system, and no automation — just staff eyes on paper, one document at a time.

The cost of this is real: a single missed renewal window can cost the city **tens of thousands of dollars** or trigger a compliance violation.

---

## The Core Question

> "What if AI can do this for us?"

---

## Solution: Mira

**Mira** is a procurement intelligence dashboard for city staff. It accepts any contract upload, reads it, extracts key fields, flags risks, and places the contract into a structured review queue — **in under 60 seconds**.

---

## Demo Walkthrough

### Step 1 — Sign In and Dashboard Overview
- Staff sign in and land on a central dashboard
- The dashboard provides an **overall view of all uploaded documents**
- Displays active **validation alerts** — warnings about documents that need attention

### Step 2 — Upload a Contract
- Staff upload a contract PDF directly from the dashboard
- Within a few seconds, the contract is:
  - Uploaded
  - **Classified** by contract type
  - Placed in a **review queue** and marked ready for review

### Step 3 — Search Across Contracts
- Staff can search within the contract database (example shown: searching for "public sector" contracts)
- Results return immediately with structured summaries

### Step 4 — Individual Contract View
Each contract view shows:
- **Document summary** in plain language
- **Risk indicators** — flagged automatically
- **Payment terms**
- **Insurance requirements**
- **Document number**
- **Contract type**
- **Total amount**
- **Effective date**
- **System checks** — automated warnings (e.g., missing date, no expiration date noted)

### Step 5 — Notes and Internal Communication
- Staff can add **internal notes** to any contract (e.g., "Needs further review")
- Notes are visible to other staff members for coordination
- **Annotation layer** — staff can flag specific sections for a closer look (e.g., "Confirm contract number")
- Annotations are shared across the team so any employee can view and act on them

### Step 6 — AI Chat Feature
- A **chat interface** is available for any contract to ask deeper questions
- Returns a summary, overview, and validation details about the specific document
- Supports follow-up questions to extract more nuanced information

---

## Technical Architecture

| Layer | Technology |
|---|---|
| OCR | Azure Document Intelligence |
| Extraction + RAG | Azure Foundry |
| Contract Text Indexing | Azure Search |
| Backend API | FastAPI |
| Hosting | Azure Container |

Built entirely with real City of Richmond contract data during the 48-hour hackathon.

---

## Impact

| Metric | Before Mira | After Mira |
|---|---|---|
| Time to review one contract | ~20 minutes manually | Under 1 minute |
| Format of output | Raw PDF | Structured, flagged, searchable record |
| Scale (city manages 1,300+ active contracts) | Thousands of staff-hours | Fraction of the time |

> "For a city managing 1,300-plus active contracts, that's not a small win. That's a different way of working."

---

## Cost

The **entire Azure stack costs less than $200/month** — compared to even one hour of a procurement analyst's time. Built in 48 hours using real city data.
