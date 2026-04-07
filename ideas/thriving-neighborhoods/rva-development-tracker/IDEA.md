# RVA Development Tracker

**Presenter:** Edwin Huertas (also participating as a mentor)
**Pillar:** Pillar 2 — Thriving Neighborhoods
**Data Sources:** GeoHub + Legistar (both public, no API keys required)
**Maps:** OpenStreetMap (open source, free)
**No account required** — usable by anyone today
**Hackathon:** Hack for RVA

---

## Problem Statement

Residents in Richmond who want to understand what is being proposed or built in their neighborhood have two current options:

1. **Development Mapper** — a map-based tool that shows development activity, but is difficult to interpret for the average resident. Even with all the data visible, it's hard to know what's actually happening. (The presenter notes: *"I can kind of read this, but even with all of that, it's hard to know what really is going on in that area."*)

2. **Legistar (the legislature directly)** — where residents can find more information about anything happening in a neighborhood — but requires knowing how to navigate a legislative database.

Both options require a level of expertise that most residents don't have. Edwin's goal: make the same information accessible to anyone, without needing to guess or decode.

---

## Solution

**RVA Development Tracker** — a simple, no-account tool that combines public GeoHub and Legistar data, uses AI to generate plain-language summaries, and makes neighborhood development activity immediately understandable for any resident.

### Design Principles
- No account needed
- Uses only public, available data
- Open source code (OpenStreetMap)
- Free server (with the caveat that scaling would require additional resources)
- Built to be used by anyone, right now

---

## Demo Walkthrough

### Step 1 — Enter a Richmond Address
- User types any Richmond address into the tool
- Example: **Hanover Avenue**
- The tool immediately shows what development activity is happening in that area

### Step 2 — See a List of Development Items
- The left side of the screen shows a **list of specific development items** near the entered address
- Items are sourced from both GeoHub and Legistar and combined into one view

### Step 3 — Select a Specific Development
- User selects one item from the list to see its details
- Example: selecting an item related to **Grove Avenue**

### Step 4 — AI-Generated Summary
- The tool uses **AI to generate a plain-language summary** of the selected development or property
- The summary explains exactly what is happening at that address without requiring the user to interpret planning or legislative language

> "I can see specifically what's happening in that one. So I don't have to guess what's going on behind my house."

### Step 5 — Attachments and Meeting Agendas
- Some items include **attachments** — additional documents related to the development
- Key feature: items with upcoming meetings show the **meeting date** (example shown: a meeting coming up on April 1st)
- For each meeting, users can see the **agenda** — so they know exactly what will be discussed and can decide whether to attend and participate

> "I can see what the agenda of that meeting is. So I don't have to guess when I have to be ready for that meeting if I want to participate."

---

## Time Range Filtering

The tool supports filtering development activity by time range:
- Last 6 months
- Only active items
- Only items under a specific system or status
- Everything in the last year
- All time

---

## Data Pipeline

- **GeoHub** — city spatial data and development project information
- **Legistar** — legislative records, meeting agendas, and filings
- Both are public and connected directly (no proprietary API)
- **AI summaries** generated on demand for each selected item

---

## Current Limitations (Acknowledged)

- The tool is ready and functional but described as improvable
- The free server works for current usage but would need more resources if adoption scales significantly
- Built in an afternoon (the presenter notes they started that afternoon during the hackathon, participating as both a mentor and a builder)

---

## Mission

> "The goal is to make it easier for people to know what's going on. Make it simple, make it inclusive — with current systems that are already in place and available for everybody to use."

> "Ready to go for people to start using it today."
