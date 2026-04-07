# Hey804 — One Front Door to Richmond City Hall

**Pillar:** Thriving City Hall — Government Accessibility and Resident Trust
**Tech Stack:** Python, JavaScript, Claude.ai (question classification), Google Translate (multilingual), SQLite (knowledge base), Docker (containerization), deployable to Azure or any cloud
**Estimated Operating Cost:** Less than $10/day
**Hackathon:** Hack for RVA

---

## Problem Statement

> "A thriving city hall depends on public trust, but trust breaks down when people cannot easily get answers from their own government."

Richmond residents seeking answers online must navigate a maze of city departments. Valuable data exists, but identifying the actual next step to solve a problem feels elusive and frustrating. This frustration leads to:
- **Wrong form submissions**
- **Costly service calls**
- **Residents simply giving up**

All of these are the exact opposite of a thriving city hall.

---

## Solution

**Hey804** gives Richmond one front door to city hall — making government more accessible for residents, more efficient for staff, and more trustworthy for everyone.

It is explicitly **not just another website** and **not just a chatbot**. It is a single, easy-to-use entry point where residents can ask for what they need in plain language and get routed to the right answer quickly.

**Key design constraint:** If Hey804 is not sure of an answer, it says so. It **never hallucinates** and **never makes up false data**.

---

## Demo Walkthrough

### Widget Integration
Hey804 is demonstrated as a **widget added to the RVA.gov homepage** — a reusable piece of code that can be dropped into any Richmond City web page via a single `<script>` tag.

### Example 1: Pothole Reporting
- User asks: *"How do I fix a pothole?"*
- Hey804 returns an **instant link to the correct RVA 311 submission page**
- Also provides:
  - Applicable next steps
  - A phone number the resident can call

### Example 2: Shed Permit
- User asks: *"Do I need a permit to build a shed?"*
- Hey804 takes the user directly to the **RVA.gov permit portal** with the correct form to fill out

### Example 3: Real Estate Taxes (Voice Input)
- User speaks: *"How do I pay my real estate taxes?"*
- Hey804 uses **built-in speech recognition** and takes the user directly to the real estate tax payment forms

### Example 4: Multilingual Support
- The widget **detects the language of the incoming question** and **replies in the same language**
- Handles questions asked in a variety of languages automatically, with no setup required from the user

---

## Technical Architecture

| Component | Technology |
|---|---|
| Frontend | JavaScript widget (single `<script>` tag integration) |
| Backend | Python |
| Question classification | Claude.ai — classifies questions but never answers them directly |
| Multilingual support | Google Translate |
| Knowledge base | SQLite (searchable) |
| Deployment | Docker container, deployable to Azure or any cloud |

### Critical Design Note on Claude.ai Usage
Claude is used **only for classification** — it routes the question to the right resource in the knowledge base. It does **not** generate answers directly. This is the architectural choice that prevents hallucination: the system returns verified city links and data, not AI-generated responses.

---

## Real-Time Civic Intelligence

Because Hey804 **captures every resident question**, it builds a real-time picture of what Richmonders actually need from their government — information that city leaders can use to:
- Improve the resident experience proactively
- Reduce unnecessary service requests before they occur

### Crisis Response Application
> "When a crisis hits, Hey804 is on the front line of the city's response — answering residents' questions like 'Is the water safe to drink?' with accurate, timely, and trusted data."

---

## Impact Summary

| Stakeholder | Value |
|---|---|
| Resident | Gets answers without losing an hour to confusion |
| Business owner | Finds the right steps faster |
| City staff | Spends less time redirecting people, more time helping them |
| City leadership | Gains real-time insights into resident needs |

---

## Mission

> "Hey804 navigates the bureaucracy so you don't have to. It doesn't just improve a digital experience — it improves the relationship between Richmonders and City Hall."

> "If Richmond wants a City Hall that truly thrives, it needs a front door Richmonders can actually use."
