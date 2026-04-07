# Project Summary

## Pillar

Thriving Economy

## Problem Statement

Small Business Navigation - Help first-time entrepreneurs understand steps to start a business in Richmond.

## Project Name

ibuild

## Description

Small business launch and navigation tool helping entrepreneurs understand startup steps.


# Functional Job To Be Done

## Situation

When I’m a first-time entrepreneur choosing a location in Richmond

## Persona

founder

## Motivation

I want to know if my proposed address is zoned for my use and what city approvals I need (CZC or occupancy)

## Outcome

so I can avoid costly delays and secure my city business license (BPOL) on time.

## Current Workaround

Manually search parcel/zoning maps, call Zoning, then separately file on the Online Permit Portal and call Finance to verify licensing.

## Core Pain

Fragmented steps across zoning/occupancy and licensing; unclear when CZC vs H-CO is required; timeline uncertainty.


# Emotional Job To Be Done

## Situation

When I’m submitting my first applications to the City and State

## Persona

anxious new business owner

## Motivation

I want clear, official, step-by-step guidance with status visibility

## Outcome

so I can feel confident I’m compliant and won’t be penalized or rejected at the counter.

## Current Workaround

Piecing together PDFs, FAQs, and phone guidance; asking peers/SBDC.

## Core Pain

Fear of missing a requirement (e.g., health/ABC) that blocks the city license; no single source of truth.


# Systems Job To Be Done

## Situation

When I’m preparing to open (e.g., restaurant/retail) in Richmond

## Persona

operator

## Motivation

I want one coordinated intake that routes me to zoning, occupancy, health, ABC, and BPOL

## Outcome

so I can submit once, track everything, and open on schedule.

## Current Workaround

Sequential submissions to SCC, Virginia Tax, Zoning (CZC/H-CO), Health, ABC, then BPOL; repeated data entry; unclear dependencies.

## Core Pain

Duplicative data entry, cross-agency dependencies (e.g., health/ABC before license), and mismatched timelines.


# Data Questions

- Can ibuild consume live layers from the Zoning Parcel Mapper and Parcel/Assessor data to prefill CZC/H-CO needs and address validation?
- Can ibuild surface Enterprise Zones, special assessment districts, and other incentive geographies from Richmond Open Data for tailored guidance?
- Is there an API or event feed from the Online Permit Portal and the new RVA Business Portal (BPOL/BPP) to display application status in ibuild?

# User Questions

- What are the top startup segments in Richmond (e.g., food trucks, salons, home occupations), and what plain-language task lists do they need?
- How will ibuild support language access aligned with Richmond’s Language Access plan and mobile-first usage for underserved founders?
- What service handoffs to local helpers (SBDC, OMBD, RVA 311) are most valued by first-time founders?

# Integration Questions

- Can ibuild deep-link users into SCC CIS, Virginia Tax registration, the Online Permit Portal (CZC/H-CO), and the RVA Business Portal with pre-populated fields?
- Can the tool verify prerequisites (e.g., food permit and/or ABC for restaurants) before directing to BPOL licensing to reduce rejection loops?
- What secure method can share basic application metadata between PDR (zoning), RCHD (food), ABC, and Finance while respecting privacy?
- Can RCHD inspection outcomes and ABC license statuses be surfaced (or acknowledged) to inform readiness for BPOL issuance?

# Equity Questions

- How will ibuild reduce burdens for home occupations and micro-businesses (low receipts), including clear thresholds, fees, and renewal dates?
- What targeted guidance and referrals can OMBD provide through ibuild for minority and emerging small businesses seeking contracts and training?
- How will ibuild communicate fee schedules, due dates (e.g., March 1 renewals), and grace periods to prevent penalties for new founders?

# Prior Art Questions

- Should ibuild adopt a “wizard” that outputs a personalized plan (licenses, permits, timelines) similar to NYC’s Step-by-Step?
- From LA’s Navigator, which integrations (status, checklists, agency deep-links) best translate to Richmond’s portals and org structure?
