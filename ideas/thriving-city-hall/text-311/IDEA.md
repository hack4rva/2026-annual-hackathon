# Text 311

**Team:** Byrd Park Geese — Anna, Johnny, Charlie, Daniel, and one unnamed presenter
**Pillar:** Thriving City Hall — 311 Accessibility
**Website:** birdparkgeese.com
**Hackathon:** RVA Civic Hackathon 2026

---

## Problem Statement

When Richmond residents want to report an issue they see in the city, they currently have three options:
1. Download the 311 app
2. Go online
3. Call it in

Each option has significant accessibility barriers:
- **Calling** is limited to business hours
- The **app and website** require a smartphone and enough tech literacy to navigate them

The result: residents without tech access, residents who speak other languages, and residents with basic phones are effectively excluded from participating in the city's service request system.

---

## Solution

**Text 311** gives residents a **simple, texting-based front door** to Richmond's existing 311 service. Any resident, on any phone, in any language, can learn about and report issues in the city — no app download, no internet, no business-hours constraint required.

The system is built as a **lightweight layer on top of the existing RVA 311 service**, not a replacement for it.

---

## Demo Walkthrough

The demo is filmed live at **Abner Clay Park**, where broken, uneven sidewalks are impassable for strollers and wheelchair users.

### Reporting a Broken Sidewalk
1. Citizen texts the dedicated **Text 311 phone number** to report the broken sidewalk
2. The app texts back immediately — informing the user that **this issue has already been reported and assigned**, approximately two weeks ago
3. No duplicate ticket is created — the system prevents redundant submissions

### Reporting a Pothole
1. Citizen texts to report a pothole
2. The system uses **OpenAI's API** to ask follow-up questions and **ascertain the exact location** of the issue
3. The system is also trained to detect actively dangerous situations and redirect appropriately: *"Use 911 or the non-emergency number if anything is actively dangerous"*
4. Once location is confirmed, the system checks an **up-to-the-minute RVA 311 data source** for existing requests
5. Result: **no existing request has been submitted for this pothole**
6. With a simple "Yes," the user submits a request — which flows directly into the **existing RVA 311 site**

---

## Current Capabilities

The team built Text 311 with support for:
- **Pothole reports**
- **Sidewalk repair reports**

Additional request types could be added with minimal effort.

---

## Technical Architecture

| Component | Detail |
|---|---|
| Interface | Single phone number (text-based) |
| AI | OpenAI API — location ascertainment and conversation handling |
| Data | Up-to-the-minute RVA 311 data source |
| Backend | Small web app |
| Integration | Submits directly to existing RVA 311 site |

The entire system is described as **lightweight** and **quick to pilot** — it uses one phone number, a small web app, and existing city data sources with no infrastructure replacement required.

---

## Benefits

### For Residents
- Accessible from any phone, any language, any time
- No app required, no internet required
- Immediate feedback on whether an issue already exists in the system

### For the City
- **Reduces duplicate tickets** — citizens are told if an issue is already being handled
- **Reduces mislabeled tickets** — the AI handles classification and routing
- **Increases 311 reach** to residents currently locked out of the system

---

## Call to Action

> "Try Text 311 yourself. Visit birdparkgeese.com."
