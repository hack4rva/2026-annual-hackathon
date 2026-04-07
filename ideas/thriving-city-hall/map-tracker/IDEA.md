# RVA MAP Tracker — Mayoral Action Plan Progress Dashboard

**Pillar:** Pillar 1 — Thriving City Hall
**Build Method:** Conversational AI (built entirely through AI-assisted development during a 48-hour hackathon)
**Architecture:** Single-file web application
**Data Contributors:** City department heads who provided baseline data in real time during the hackathon week
**Hackathon:** Hack for RVA

---

## Problem Statement

Richmond's Mayoral Action Plan (MAP) contains dozens of commitments across multiple pillars. Currently, there is no unified, public-facing way for residents to see where the city stands on each commitment — or for staff to enter updates and maintain that visibility in real time.

---

## Solution

**RVA MAP Tracker** is a single-file web application that:
- Organizes every MAP metric into a navigable, public-facing dashboard
- Lets city staff enter data through an admin interface
- Shows residents exactly where the city stands on each commitment
- Logs every update with a **timestamp** for full transparency

> "This isn't just a website — it's a real-time pulse of our city's heartbeat."

---

## How It Was Built

Built entirely through **conversational AI** during the 48-hour hackathon, with direct input from city department heads who provided baseline data for many of the metrics in real time during the week of the event.

---

## Dashboard Structure

The platform breaks the Mayoral Action Plan down into its **core pillars**. A resident can:
1. Click on any pillar (e.g., Thriving City Hall)
2. See the **exact goals** that have been set for that pillar
3. See the **live metrics** tied to those goals
4. Understand whether each goal has been met through **quarterly updates**

### Example Metric Displayed
If the city has promised to reduce permit processing times, a resident can see whether that metric has been met — visible and updated on the dashboard.

---

## Two Data Behavior Types

Every metric in the system is assigned one of two data behaviors, and both the display and edit interface adapt accordingly:

### 1. Binary Data
Used for plan adoptions, agreement signings, and report publications — things that are either done or not done.

**Examples:**
- Mission, vision, and values finalized
- Strategic plan adopted

### 2. Directional Data
Tracks trends over time — rates and counts that should move in a defined direction (up or down).

**Examples:**
- Decrease in annual carbon emissions
- Increase in annual graduation rates

---

## Transparency by Design

Every metric update is logged with a timestamp, creating a permanent, auditable record of when the city updated what and who entered it. This makes accountability visible and non-repudiable.

---

## Admin Interface

City staff have access to a dedicated admin interface where they can enter new data for any metric. The interface changes based on whether a metric is binary or directional, matching the data entry flow to the data type.

---

## Upgrade Path

The application is designed with a clear and immediate next step: **API integration with Achieve It**, the city's internal reporting tool. This would allow metrics to flow automatically from city systems into the public dashboard without manual data entry by staff.

---

## Mission

> "By making metrics public, we aren't just making a promise — we are holding ourselves accountable. Selecting this platform means choosing to lead with courage and provide our residents with the visibility they deserve. Let's make our progress as vibrant as our city."
