# RVA Contract Lens — Federated AI Procurement Intelligence

**Pillar:** Thriving City Hall — Procurement Intelligence & Transparency
**Hackathon:** Hack for RVA

---

## Scale of the Problem

The City of Richmond manages **nearly $7 billion in public contracts**, scattered across almost **1,400 individual agreements**, tracked through a fragmented web of state databases, federal registries, and localized spreadsheets.

Verifying even a single agreement is grueling. Recently, Richmond staff spent **three full days** hunting through PDFs and cross-referencing databases just to confirm that a single recurring software renewal was still valid.

---

## Solution Overview

A two-sided platform:
1. **Staff Dashboard** — AI-powered, urgency-triaged procurement management for city employees
2. **Public Portal** — Plain-language transparency for any Richmond resident, no FOIA request required

---

## Staff Dashboard

### Urgency Triage
Instead of an overwhelming data dump, the dashboard organizes the city's entire procurement workload into **three urgency lanes**:
- Contracts that demand a decision **today**
- Contracts to plan for **this week**
- Contracts to review **this month**

### Federated Search — The Decision Engine
When a procurement officer clicks on any contract, the platform's **decision engine runs a federated search** — simultaneously querying **eight independent, live data sources**:

External compliance registries checked in real time:
- **SAM.gov** (federal compliance)
- **FCC prohibited vendor lists**
- **FBI's consolidated screening databases**

Internal processing:
- **OCR** reads hundreds of pages of scanned PDFs, extracting exact expiration dates, contract values, and specific renewal terms

### The Verdict — Delivered in 8 Seconds
Eight seconds after clicking a contract, the officer receives a definitive verdict:
- **Renew** the contract
- **Rebid** it to the market
- **Escalate** it for immediate review

### Transparent Scoring Logic
The system shows **exactly how it reached its conclusion**:
- Positive point values: e.g., +20 points for a clear compliance record
- Negative point values: e.g., deductions if a vendor holds too much of a single department's budget
- The full logic is visible — not a black box

The AI compiles evidence and makes a recommendation, but **the human procurement officer always makes the final decision**.

---

## Public Portal

The Public Portal translates the city's internal procurement ledger into **plain language** accessible to any citizen:
- View the **total value of active contracts**
- Identify the **top spending departments**
- No Freedom of Information Act request required — everything is directly accessible

### Department-Level Drill-Down
- Chart breaks down spending by department
- Click on any department (e.g., Public Utilities) to see:
  - Their **top vendors**
  - The **specific dollar amounts** of each individual contract

### Accessibility Features
A persistent toolbar allows users to:
- Translate text to **Spanish**
- Activate **high contrast dark mode**
- Scale up the **Atkinson Hyperlegible font** — a typeface specifically designed by the Braille Institute for maximum readability

> "Publishing raw data online is one step. True civic accountability requires making that data universally legible."

---

## Institutional Memory — Decision Timeline

Municipal governments constantly lose institutional knowledge when veteran procurement officers retire or change departments. Decades of context disappear with them.

To solve this, the platform **automatically logs every AI-assisted decision** in a timeline:
- Builds a permanent, auditable history of exactly how and why the city spends its money
- When a new staff member joins, they **inherit rich, data-driven context** rather than starting from a blank slate

### Proactive Portfolio Advice
The platform uses accumulated decision history to generate forward-looking recommendations:
- Flags departments with **high vendor concentration risks**
- Calculates exactly how much the city could save — for example, a **$28 million projection** simply by introducing more competitive bidding into certain contracts

---

## Transformation

> "City procurement no longer has to be a slow, manual bottleneck. With the right architecture, it operates as a fast, strategic, and entirely transparent system."

Shrinking decision windows **from days to seconds** allows Richmond to move from reactive contract management to proactive portfolio strategy.
