# Stay Informed — All Your Bass Are Belong to Us

**Pillar:** Thriving & Sustainable Built Environment
**Problem Statement:** Fleet Operations & Street Service Tracking
**Team name:** All Your Bass Are Belong to Us
**Hackathon:** Hack for RVA 2026

---

## Problem Statement

Richmond's Department of Public Works lacked a clear, real-time way to track its routine and winter road clearance maintenance fleet — and to communicate that information to residents. The team built a tool to address both sides: the public's need to know when their street will be serviced, and staff's need for operational visibility.

---

## Solution

A dual-portal web application called **Stay Informed**, with a **public-facing resident portal** and a more detailed **staff operations portal**.

**Live site:** https://all-your-bass-are-belong-to-us-sandy.vercel.app/

---

## Note on Data

No historical data was provided for the hackathon. The team created their own synthetic dataset to power the demo. Advanced snow telemetry and fleet route data shown is **synthetic/mock plow telemetry for demonstration purposes**. Public residential views show only route status and storm phase — not individual vehicle locations.

---

## Public Resident Portal

### Street Cleaning & Snow Clearing
- Users can check **street cleaning by zone** by entering their address or skipping directly to their zone's portal
- Separate views for **street cleaning** and **snow clearing** — same consistent UI across both modes

### Map View
- **Boundary markers** showing the service zone
- Color-coded pass status:
  - Completed passes
  - In-progress passes
  - Scheduled passes

### Notification System
- A **pop-up notification** alerts residents when their zone is complete, including a count of segments covered
- Note: does **not** show real-time vehicle locations for public users
- Residents can enter their **email address** to subscribe to alerts

### Alert Types
- Parking reminder
- Move your vehicle notice
- Snow emergency active status
- General parking reminders

---

## Staff Portal

### Fleet Route Progress Dashboard
More robust than the public view:
- Shows the **direction of each fleet vehicle**
- Tracks **where vehicles are passing** across the city
- Displays **zone-by-zone schedule**

### Analytics
- Informs future **Best Management Practices (BMP)** needs
- Enables more effective **maintenance scheduling**
- Supports **road maintenance needs reporting**
- Designed to improve operational efficiency over time

### Snow Operations View
- Separate snow-specific log and direction tracking
- **Advanced snow telemetry** dashboard
- Tracks what is **in progress by each vehicle's unique identifier** (individual plow truck IDs)

### Settings
- Configurable options for staff users

---

## Design Principles

- **Consistent UI** — same interface structure across resident and staff portals, with different levels of data depth
- **Privacy by design** — public views never expose vehicle-level location, only zone/route status
- Built to serve both residents who need awareness and staff who need operational control

---

## Summary

Stay Informed gives Richmond's Department of Public Works a unified system for communicating maintenance activity to residents while equipping city staff with a real-time operational dashboard — keeping vehicle-level telemetry appropriately restricted to internal use.

> **Note:** Two teams at RVA Hacks 2026 tackled the same Fleet Operations & Street Service Tracking problem statement. The other team's project is documented in [`road-maintenance-fleet-tracker/`](../road-maintenance-fleet-tracker/README.md).
