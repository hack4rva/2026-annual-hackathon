# Project Summary

## Pillar

Thriving Economy

## Problem Statement

MBE Contracting Discovery - Help minority-owned businesses find City contracting opportunities matching their capabilities.

## Project Name

you-get-what-you-give

## Description

A community-oriented economic participation tool designed to connect residents, particularly from minority-owned businesses, to local economic opportunities within the City of Richmond.


# Functional Job To Be Done

## Situation

When I’m a Richmond-based, SWaM/MBE-certified contractor scanning for upcoming City work across construction, professional, and small-purchase categories,

## Persona

I owner-operator

## Motivation

want to see a single, timely feed of Richmond solicitations filtered to my NAICS/services and readiness (bonding, insurance, license),

## Outcome

so I can quickly pre-qualify, plan teaming, and bid before deadlines.

## Current Workaround

Manually monitor multiple portals (OpenGov, eVA/VBO, paper postings) plus OMBD emails/workshops; copy/paste details into spreadsheets; set ad hoc reminders.

## Core Pain

Fragmented systems with mixed electronic/paper submissions, short windows to respond, and missed addenda/updates.


# Emotional Trust Job To Be Done

## Situation

When I’m an underrepresented supplier who’s had limited success winning City work,

## Persona

I small business owner

## Motivation

want transparent, plain language signals that I’m seeing everything relevant (not just insiders),

## Outcome

so I can trust the process, invest time to bid, and believe my proposal will be fairly evaluated.

## Current Workaround

Rely on word of mouth, call staff for clarification, attend OMBD sessions hoping for practical tips.

## Core Pain

Low confidence due to unclear rules, addenda tracking, and where “official” information lives; fear of wasting scarce capacity.


# Systems Coordination Job To Be Done

## Situation

When I’m a prime contractor forming a local team in Richmond,

## Persona

I procurement lead

## Motivation

want to discover OMBD registered MBEs by capability, location, and certifications, and match them to active City solicitations,

## Outcome

so I can build compliant, competitive teams and meet participation goals.

## Current Workaround

Search OMBD directory manually, ask networks, cross reference spreadsheets with solicitations; cold outreach.

## Core Pain

Directory and opportunity data aren’t connected; difficult to filter by live opportunity requirements and certification/insurance readiness.


# Data Questions

- What fields are available and reliably populated in the City Contracts open data (vendor, award amount, department, NAICS/commodity codes, dates, SWaM/MBE status)? What is the latency from award to the monthly update?
- Can the OMBD diversitycompliance.com directory expose an API for firm profiles, including capabilities, certifications, contact information, categories, and active/inactive status?
- Can OpenGov’s solicitation metadata (such as due dates, addenda, pre-bid meetings, buyer contact, and commodity codes) be accessed via an API or data feeds specifically for Richmond?
- How does Richmond’s iSupplier data, which includes registered vendors and payment status, intersect with opportunity discovery, and can firms that are not registered still view all open opportunities?
- Where are official addenda housed during the transition to OpenGov, versus on eVA or the City's site, and can these addenda be programmatically tracked?

# User Questions

- For Richmond MBEs, which NAICS/commodity categories are most in demand, and what are the typical blockers (e.g., bonding, insurance, licensing) that prevent them from bidding?
- What languages are most needed for outreach to comply with Title VI, and which communication channels (such as SMS, email, WhatsApp, churches, or associations) are most effective for reaching Richmond's MBEs?
- What is the typical lead time from the posting of a solicitation to its due date for Richmond opportunities, and how does this timeframe affect the capacity planning of micro-firms?

# Integration Questions

- During the City's transition to OpenGov, what is the definitive source of truth for 'official' solicitations, and how should the tool reconcile potential discrepancies with information from eVA/VBO and paper submissions?
- Can the tool deep-link users from a matched opportunity directly to the correct submission workflow (e.g., OpenGov for electronic submissions vs. instructions for paper submissions) and pre-load requirement checklists?
- Are there any constraints, required agreements, or terms of service that would govern the display of snippets or metadata from OpenGov, the OMBD’s directory, and the City's open data portal?

# Equity Questions

- What specific participation goals, policies, or practices currently guide the City of Richmond’s MBE utilization in procurement, and how might the next disparity study cycle influence these targets or reporting requirements?
- How will the tool be designed to ensure equitable visibility for micro and emerging small businesses (ESBs) compared to larger, more established firms, and avoid reinforcing existing network advantages?
- What accessibility and language accommodations (e.g., plain language, mobile-first design, screen reader compatibility) are required to comply with the City of Richmond’s language access and Title VI commitments?

# Prior Art Questions

- Which resources from the Office of Minority Business Development (OMBD)—such as workshops, the mentor program, The Diamond project outreach, and the benefits guide—should be embedded or contextually linked within the tool?
- How do the City of Richmond’s iSupplier registration steps and payment policies, like the use of P-Cards for purchases under $10,000, inform what could be considered 'starter' opportunities for newer MBEs?
- What lessons can be learned and adapted from other Virginia entities (e.g., VCU, the state's SBSD SWaM program, eVA/VBO) without duplicating their functionality or creating compliance risks?

# Richmond Procurement Ecosystem Summary

## Key Offices

The primary city departments are the Department of Procurement Services, which manages solicitations, and the Office of Minority Business Development (OMBD), which supports minority-owned and emerging small businesses with resources like directories, workshops, and a mentor program. At the state level, the Virginia Department of Small Business and Supplier Diversity (SBSD) manages the SWaM certification program.

## City Portals

The City of Richmond is transitioning to OpenGov (procurement.opengov.com/portal/rva) for electronic submissions of bids and RFPs. All suppliers must register on the Oracle iSupplier portal. The Office of Minority Business Development also maintains its own registration and directory system at richmondombd.diversitycompliance.com.

## State Systems

Virginia's statewide eProcurement Marketplace, eVA (eva.virginia.gov), is a key portal for finding business opportunities, including some from the City of Richmond. Businesses also interact with the Virginia Department of Small Business and Supplier Diversity (sbsd.virginia.gov) to obtain Small, Women-owned, or Minority-owned (SWaM) certification.

## Data Sources

The City of Richmond's Open Data Portal (data.richmondgov.com) provides a dataset of open and closed city contracts from the past five years. This data, which is updated monthly, includes information such as vendor, award amount, and department.


# Key Challenges For Mbes

## Challenge

Information Fragmentation and System Disconnectivity

## Description

Minority-Owned Businesses (MBEs) in Richmond face a significant challenge due to the fragmented nature of the procurement ecosystem. Information about contracting opportunities is spread across multiple, disconnected platforms. Businesses must manually monitor the city's new OpenGov portal, the statewide eVA/VBO marketplace, and even paper postings. This is compounded by the need to track communications from the Office of Minority Business Development (OMBD) through emails and workshops. The current workaround involves manually copying and pasting details into spreadsheets and setting ad-hoc reminders. This creates a core pain of dealing with mixed electronic and paper submission processes, short response windows, and the high risk of missing crucial addenda or updates, ultimately wasting the scarce capacity of small businesses and creating a barrier to equitable participation.

