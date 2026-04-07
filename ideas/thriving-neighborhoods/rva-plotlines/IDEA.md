# RVA Plotlines — Zoning & Legislative Change Discovery

**Presenter:** Morgan Stewart
**Pillar:** Thriving Neighborhoods
**Live Demo:** rva-plotline.fly.dev
**Data:** 23,000+ legislative entries/matters (fully public data, no proprietary API keys required)
**Hackathon:** Richmond, Virginia Civic Hackathon

---

## Problem Statement

Zoning changes, ordinance updates, and legislative matters in Richmond are technically public — but they are effectively hidden:

- **Hard to discover** — no single place to find what's changing in your neighborhood
- **Hard to read** — dense legal and planning language that most residents can't parse
- **The 150-foot notice radius often misses impacted residents** — people who should know about changes near them simply never hear about them

The result:
- People don't have time to find these notices
- People struggle to navigate the current system
- Residents who would want to participate in civic processes simply don't know they're happening

---

## Why It Matters

Solving this supports:
- **Equitable participation** — everyone, not just the well-connected, can know what's changing around them
- **Stronger civic engagement** — more informed residents show up to meetings and weigh in on decisions
- **Better outcomes for city staff** — when input is more representative, decisions are better
- **Economic clarity for businesses and residents** — knowing what's planned in an area affects investment and planning decisions

---

## What Was Built

A system that:
1. **Ingests over 23,000 entries (matters)** from Richmond's legislative record
2. **Geocodes the majority** of those entries to specific map locations
3. **Summarizes the majority** of those entries in plain language
4. **Distributes them across Richmond's 143 neighborhoods** on an interactive map

### Technical Approach
- All data is fully **public** — no proprietary API keys required for the data sources
- Described as a **pretty simple deployment** architecture
- Hosted live at: **rva-plotline.fly.dev**

---

## Demo Walkthrough

### Interactive Map
- Points on the map represent individual zoning changes, ordinances, business hearings, and business zone appeals
- **Map controls** allow users to adjust what types of points are visible and what time range of history is shown (e.g., recent changes vs. full history)

### Address-Based Discovery
- The core user flow: enter your address → see everything that's changing around you in Richmond
- Users do not need to understand the planning system or know what to search for

### Click-Through Detail (In Progress)
- Clicking on individual points is designed to open detailed information about that specific matter
- The presenter notes this feature was **not fully working** at demo time

### AI Chat Bot
- A conversational chatbot allows users to ask natural-language questions about their neighborhood
- Example query: *"What's happening in Churchill?"*
- System response: a **plain-language summary** of active projects and upcoming hearings in the Churchill neighborhood

---

## Current State (As of Demo)

| Feature | Status |
|---|---|
| Mobile responsive layout | Ready |
| AI chat agent | Ready |
| Interactive map with 23,000+ points | Ready |
| Click-through point detail | Not working at demo time |
| Address-based search | Ready |

> "We have plenty of things to do — but check us out."
