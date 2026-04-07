# Project Summary

## Pillar

Thriving Economy

## Problem Statement

MBE Contracting Discovery - Help minority-owned businesses find City contracting opportunities matching their capabilities.

## Project Name

vendor-onboarding-wizard

## Description

A proposed 5-step vendor registration wizard for Richmond, VA, designed to guide minority-owned businesses through the entire process of becoming eligible to bid on city contracts. The wizard will provide necessary documents, timelines, and direct links for each stage. The refined process, based on current city systems, includes: 1) Obtaining a City Business License (BPOL). 2) Applying for state-level Small, Women-owned, and Minority-owned (SWaM) certification via the SBSD portal. 3) Registering with the City's Office of Minority Business Development (OMBD) through the B2GNow portal. 4) Creating a vendor account on OpenGov, the city's platform for solicitations and bid submissions (correcting the initial mention of BidNet). 5) Registering on iSupplier, the city's Oracle-based supplier portal for accounts payable, which requires a W-9 and ACH/EDI forms.


# Jobs To Be Done Analysis

## Category

Functional

## Statement

When I, a Richmond-based MBE owner, have my business ready to sell services to the City, I want to know exactly which registrations/certifications (BPOL, SWaM, OMBD, OpenGov, iSupplier) I must complete and in what sequence, so I can become eligible and submit compliant bids without delays.

## Current Workaround

Manually piece together info from Finance (BPOL), SBSD, OMBD, Procurement pages, and ask peers/OMBD staff; bookmark multiple portals.

## Core Pain

Fragmented portals, unclear sequence and lead times (e.g., SWaM 60 business days), missed documents causing rework and bid deadlines slipping.

## Category

Emotional/Trust

## Statement

When I, an MBE unfamiliar with City procurement, consider registering, I want reassurance from official sources that I’m on the right path and that the City is actively supporting MBEs, so I can trust the process, invest time, and not feel set up to fail.

## Current Workaround

Attend OMBD events; rely on word-of-mouth; scour City pages for confirmation; wait for email responses.

## Core Pain

Anxiety about submitting to the wrong portal or missing a step; slow/opaque confirmations (e.g., email from RAPIDS workflow); fear of wasting effort if certifications don’t translate into opportunities.

## Category

Systems/Coordination

## Statement

When I, a certified MBE with limited admin capacity, start pursuing bids, I want my profiles and documents to carry over or be referenced across portals (BPOL proof, SWaM certificate, OMBD profile, OpenGov vendor profile, iSupplier vendor master), so I can reduce duplicate data entry and keep everything current before deadlines.

## Current Workaround

Re-upload W-9, ACH, certificates, and business details to each portal; maintain a personal checklist and calendar.

## Core Pain

Redundant data entry; version control issues; mismatched statuses across portals (e.g., OMBD vs. OpenGov vs. iSupplier) leading to bid submission risks.


# Data Questions

- What specific fields and document artifacts from BPOL (e.g., license number, issue/expiry) are needed downstream in OMBD/OpenGov/iSupplier to auto-validate vendor status?
- Can the wizard verify SWaM certification status and expiration via SBSD directory/API, and surface the 60-business-day lead time dynamically?
- Which document versions are accepted by iSupplier (W-9, ACH/EDI) and can the wizard pre-validate file formats before upload?

# User Questions

- What are the top 3 MBE segments in Richmond by NAICS that the City frequently buys from, to tailor examples and guidance in the wizard?
- What are typical first-time vendor pitfalls observed by Procurement/OMBD (e.g., missing zoning compliance before BPOL renewal, incomplete W-9, wrong commodity codes) to build guardrails?
- What languages and accessibility needs are most common among Richmond MBEs for the wizard content and support?

# Integration Questions

- Can the wizard deep-link with pre-filled context to: iSupplier registration URL, OpenGov vendor registration/onboarding, OMBD B2GNow registration, and SBSD portal, preserving state and returning users to the wizard?
- Is there a supported method to confirm OpenGov vendor account creation and commodity code selection, so the wizard can mark the step complete?
- What SLAs and contact channels should the wizard surface for each system (e.g., SupplierRegistration@rva.gov, OpenGov support) for stuck states?

# Equity Questions

- How will the wizard mitigate long SWaM lead times for time-sensitive bids (e.g., recommend near-term solicitations not requiring SWaM at award vs. post-award goals)?
- What additional supports will OMBD offer through the wizard (office hours, templated capability statements, bid-matching by NAICS/UNSPSC) to address documented disparities?
- How will success be measured for MBEs (registrations completed, first bid submitted, awards) and published transparently to build trust?

# Prior Art Questions

- Which elements from OpenGov’s vendor guide can be embedded (or linked) to reduce confusion on submissions/Q&A threads and deadlines?
- Are there known examples of city “vendor onboarding wizards” that integrate multiple portals (state certification + city solicitations + supplier master) we can emulate, and what pitfalls did they encounter?
- Should the wizard replace the previously referenced BidNet step with OpenGov throughout, and provide a short explanation of Richmond’s current platform choice?
