# Road Maintenance Fleet Tracker — Public & Staff Portal

**Pillar:** Thriving & Sustainable Built Environment
**Hackathon:** Hack for RVA

---

## Problem Statement

Richmond's Department of Public Works needed a clear, real-time way to track its routine and winter road clearance maintenance fleet — and to disseminate that information to the public. No existing tool unified fleet tracking, route status, and resident-facing communication in one place.

---

## Solution

A dual-portal web application with a **public-facing resident portal** and a more robust **staff operations portal**, designed to serve both audiences without exposing sensitive vehicle-level data to the public.

---

## Note on Data

Because no historical data was provided for the hackathon, the team created their own synthetic dataset to demonstrate the system. Advanced snow telemetry and fleet route data shown in the demo is described as **mock/synthetic plow telemetry for demonstration purposes**. Public residential views are designed to show only route status and storm phase — not individual vehicle locations.

---

## Public Resident Portal

### Street Cleaning
- Users can check **street cleaning by zone** by entering their information
- Or they can skip directly to their particular zone's portal

### Notification System
- A **notification pop-up** lets residents know when their zone has been completed, including how many street segments were covered
- Note: the system does **not** track real-time vehicle locations for the public
- Residents can enter their **email address** to sign up for **email alerts** for their zone

### Alert Types Available
- Parking reminder
- Move vehicles notice
- Snow emergency active status
- General parking reminders

### Snow Clearing
- Users can switch between **street cleaning** and **snow clearing** views
- Same interface design maintained consistently across both modes

---

## Staff Portal

The staff portal is significantly more robust than the public view. It includes:

### Fleet Route Progress Dashboard
- Shows the **direction of each fleet vehicle**
- Tracks **where vehicles are passing** across the city
- Displays **zone-by-zone schedules**

### Analytics
- Provides analytics to inform **future BMP (Best Management Practices) needs**
- Enables **more effective maintenance scheduling**
- Supports **road maintenance needs reporting**
- Designed to improve operational efficiency over time

### Settings
- Configurable settings for staff users

### Snow Operations View
- Separate snow-specific log and direction tracking
- **Advanced snow telemetry** dashboard
- Shows what is **in progress by each vehicle's unique identifier** (e.g., plow truck IDs)

---

## Design Principles

- **Consistent UI** across staff and resident portals — same structure, different data depth
- **Privacy by design** — public views never expose vehicle locations, only route and zone status
- Built to serve both the resident's need for awareness and the staff's need for operational control

---

## Summary

This tool gives Richmond's Department of Public Works a clear system for communicating maintenance activity to residents while equipping city staff with a real-time operational dashboard — all while keeping vehicle-level telemetry appropriately restricted to internal use.
