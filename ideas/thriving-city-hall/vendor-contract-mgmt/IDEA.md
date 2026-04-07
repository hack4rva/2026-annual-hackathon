# Vendor & Contract Management Web App

**Pillar:** Thriving City Hall — Procurement & Vendor Management
**Tech Stack:** Next.js, Firebase (authentication), Socrata datasets, VITA contract data (attempted), AI summarization agent
**Hackathon:** Hack for RVA

---

## Problem Statement

Government procurement involves two key parties: **government officials** and **vendors**. Right now, tracking contracts, ensuring compliance, and giving both parties clear visibility into the status of procurement relationships requires navigating fragmented data sources. The team's goal was to create a unified web portal that serves both sides of that relationship.

---

## Solution

A two-sided web application where **government officials** and **vendors** each have dedicated roles and views, powered by real procurement data from Socrata datasets and an AI summarization layer.

---

## Authentication

- Built with **Firebase authentication**
- Separate login paths for **government officials** and **vendors**
- The demo logs in as a government official

---

## Dashboard (Government Official View)

Upon login, the government official is directed to a dashboard displaying information in **reusable card components**:
- Expiring contracts
- Cheap alternatives
- Renewal withdrawals
- Other key procurement metrics

The main idea: government officials send contracts to vendors; vendors respond and supply against those contracts.

---

## Data Sources

The app uses **Socrata and open procurement datasets**, which were cleaned and fetched routinely, to pull:
- Vendor names
- Procurement details
- Contract information

### VITA Contract API — Attempted Integration
The team attempted to integrate the **VITA (Virginia Information Technologies Agency) statewide contract API**, but the API was not available during the hackathon. To work around this, the team developed an **alternative tool** allowing users to upload PDFs manually and extract detailed contract information from them.

---

## PDF Upload Tool (VITA Workaround)

Since the statewide contract API was unavailable, the team built a PDF upload tool accessible to both government officials and vendors:
- Upload any contract PDF
- The system returns:
  - Contract number
  - Contract type
  - Commencement details
  - All related contract details

---

## AI Summarization Agent

- An **AI agent** summarizes all vendor data surfaced in the Contracts page
- Provides an aggregated summary across all vendors in the system
- On the individual user view: shows **total spend**, **unique vendors used**, and an **AI-generated summary** of all data displayed on the page

---

## Contracts Page

- Displays detailed contract records pulled from the cleaned Socrata datasets
- Includes an AI agent that summarizes all the vendor data across the full contracts view

---

## Technical Stack

| Component | Technology |
|---|---|
| Frontend | Next.js |
| Authentication | Firebase |
| Data source | Socrata open procurement datasets |
| AI summarization | AI agent (model not specified) |
| PDF processing | Custom upload + extraction tool |

---

## Current State

The presenter acknowledges the app "takes time to load" but confirms it is functional. The team ensured it works end-to-end for the demo.

---

## Summary

A functional, two-sided procurement portal connecting government officials and vendors — backed by real open procurement data from Socrata, augmented with AI summarization, and extended with a PDF upload tool to compensate for the unavailability of the VITA statewide contract API.
