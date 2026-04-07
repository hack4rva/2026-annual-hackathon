# RVA Help — AI-Assisted 311 Request System

**Team:** The Hackstreet Boys — Josh and Nadeesh (high school students)
**Pillar:** Thriving City Hall — 311 Improvement
**Hackathon:** Hack for RVA

---

## Problem Statement

Richmond's RVA 311 system suffers from a fundamental usability problem: residents often don't know where to start when reporting issues. The result is:
- **Vague requests** that are hard to act on
- **Wrong department routing** — issues submitted to departments that can't handle them
- Residents who **don't understand what happens next**, leading to confusion and delays

---

## Solution

**RVA Help** is an AI-powered chat interface that guides residents through a **structured submission process**, replacing guesswork with clarity. It ensures that every request is properly understood, categorized, and routed before it ever reaches city staff.

---

## Demo Walkthrough — Resident Experience

### Step 1 — Initial Chat
- Resident opens RVA Help and describes their problem in plain language
- Example: *"There is a pothole at my house"*
- RVA Help uses AI to **clarify and understand** the issue — confirming this is a road/public works matter before proceeding
- Two options are presented: go to the Public Works page directly, or submit a request through the app

### Step 2 — Structured Review Before Submission
- Before any request is submitted, RVA Help walks the user through a **structured review** of what they've described
- This is the key intervention: without it, requests are vague and misrouted; with it, they are clear, categorized, and easier for staff to act on
- RVA Help takes what the user said and produces a **structured request summary** — what's happening, the category, the location

### Step 3 — Request Refinement
The user can adjust:
- **Location** — via the Google Maps API integration, allowing precise pin placement
- **Name** — attached to the request
- **Email address** — for follow-up notifications

### Step 4 — Submission and Ticket View
- User submits the request
- The submitted ticket is immediately visible in the app
- The ticket view shows:
  - The previous conversation history
  - Location details
  - **Activity log** — showing any updates to the ticket status, with explanations of what each status change means

---

## Demo Walkthrough — Staff Experience

The staff side is described as where RVA Help becomes "even more powerful."

### What Staff Receive
Staff do **not** just get the raw message from the resident. They receive:
- **Structured category context** — the AI-classified issue type
- The **original conversation transcript** — for full context

### Internal vs. Resident-Facing Communication
- **Internal notes** are separated from what residents can see
- Staff can communicate internally about a ticket without exposing internal workflow or deliberations to the resident

---

## Resident Self-Service Features

- Residents can view **all active and previous tickets** in one place
- Each ticket shows:
  - Current status
  - Full activity log attached to the ticket
  - What each status change means in plain language — *so residents always understand what's going on*

---

## Accessibility Features

RVA Help includes a comprehensive accessibility panel:

| Feature | Options |
|---|---|
| Language | English / Spanish (full app translation — new chats in Spanish reply in Spanish) |
| Theme | Light mode / Dark mode / System default |
| Font size | Adjustable |
| Contrast | High contrast mode |
| Motion | Reduce motion option |
| Language complexity | Simple language mode |

---

## Design Philosophy

The system is designed to be **realistic and deployable**:
- Uses real, public city information — no fictional data
- Does **not require replacing existing city systems** — it sits on top of them
- All AI suggestions are grounded in real service data

---

## Impact

| Stakeholder | Benefit |
|---|---|
| Residents | Clarity on what they submitted, what happens next, and the full ticket history |
| City staff | Structured, pre-classified submissions with full context — less time spent interpreting vague requests |
| City systems | No risky infrastructure replacement needed |

> "RVA Help improves clarity for residents, reduces workload for staff — without requiring risky system changes."
