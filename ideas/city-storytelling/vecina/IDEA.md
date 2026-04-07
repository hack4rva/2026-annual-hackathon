# Vecina — Neighborhood-First Arts & Events Discovery

**Team:** Shatij Haroud and Harshit Kohale
**Pillar:** Pillar 7 — A City That Tells Its Stories (Arts & Cultural Events)
**Hackathon:** Hack for RVA

---

## Problem Statement

If you want to find cultural events in Richmond today, you end up checking Instagram, newsletters, and random websites — and still miss things. Event information is scattered and there is no single reliable discovery experience.

---

## Solution

**Vecina** is a real-time arts and events discovery platform that aggregates events directly from **CultureWorks** — the city's trusted arts data source — into a single, unified feed. No manual event creation is required. Everything updates automatically. The platform is built around the idea of **neighborhood-first discovery**, prioritizing events that are geographically accessible to the user.

---

## Key Differentiator: Data Source

Vecina pulls live data from **CultureWorks**, Richmond's authoritative arts data source, using caching to make the platform scalable and fast. There is no scraping or manual data upkeep required.

---

## Demo Walkthrough

### Core Filters

Three primary filters drive the discovery experience:

1. **Upcoming / Time-Based Filter**
   - All upcoming events
   - This week
   - This weekend
   - Today

2. **Event Type Filter**
   - Users can filter by category (e.g., theater, music, visual art)
   - Example shown: filtering to show only Theater events

3. **Location / Neighborhood Filter** — *the most important filter*
   - Users can filter events to a specific Richmond neighborhood (e.g., Jackson Ward)
   - This makes it easy to find events near home and reduce commute friction
   - Designed for residents who want to stay locally engaged

### Map View — Key Innovation

Vecina's map view is described as the platform's **key innovation**:

- Example walkthrough: User wants to find an event in the Fan happening this weekend
- They apply neighborhood and time filters, then switch to the **map view** using the icon in the top right corner
- The map displays all events that have an available Google Maps location, plotted as pins
- Clicking a pin for a specific event (e.g., *"Richmond Ballet presents Moving Art — Three New Works"*) reveals:
  - A link to **CultureWorks** for more detailed information
  - An **embedded Google Maps view** of the event location

### Why Map View Matters

> "Users don't have to go to Google Maps and search up the event. Everything is available on our Vecina website."

This ensures users can go from discovery to navigation without leaving the platform.

---

## Technical Architecture

- **Data source:** CultureWorks (city's trusted arts data)
- **Caching layer:** Makes the platform scalable and fast
- No scraping, no manual event entry
- Embedded Google Maps for in-app location viewing

---

## Summary

> "Vecina makes Richmond's art scene visible, accessible, and neighborhood-first — so anyone, not just insiders, can discover and participate in the city's culture."
