# Project Context

## Pillar

Thriving Economy

## Problem Statement

MBE Contracting Discovery - Help minority-owned businesses find City contracting opportunities matching their capabilities.

## Project Name

richmond-contract-navigator

## Project Description

Tool helping MBE firms discover and understand City contracting opportunities with search and filtering.


# Functional Job Analysis

## Situation

When new City solicitations relevant to my trade are posted in Richmond

## Persona

Owner of a certified MBE/ESB in construction or professional services

## Motivation

To quickly find, filter, and assess opportunities by scope, commodity/code, budget, and due dates across all departments

## Outcome

So I can prioritize bids we can realistically win and meet deadlines

## Current Workaround

Manually check OpenGov’s Richmond portal search/advanced search, skim multiple categories, set email alerts; cross-check OMBD pages and general word-of-mouth from primes.

## Core Pain Point

Fragmented info (solicitations in OpenGov; historical awards in a separate Open Data dataset; forecast info on city pages; vendor data in iSupplier/OMBD) makes it slow to get a complete picture; category/code alignment and inconsistent metadata hinder precise filtering.


# Emotional Trust Job Analysis

## Situation

When I see a promising contract

## Persona

Minority business owner new to City work

## Motivation

To have clear, consistent instructions and confirmation that my registration and submissions are received and compliant

## Outcome

So I can trust I’m competing on a level playing field and not wasting effort

## Current Workaround

Register in iSupplier (submit W-9/ACH), watch for RAPIDS workflow emails, upload in OpenGov, call/email Procurement or OMBD for reassurance.

## Core Pain Point

Multiple accounts (OpenGov + iSupplier), terse system emails, and policy/procedure links scattered across sites create uncertainty; fear of missing mandatory steps or attachments undermines confidence.


# Systems Coordination Job Analysis

## Situation

When planning our pipeline for the next 3–12 months

## Persona

MBE principal coordinating staff and cashflow

## Motivation

To have a consolidated, reliable view of upcoming Richmond opportunities and past awards by department and category

## Outcome

So I can decide to prime vs subcontract and allocate estimating resources

## Current Workaround

Monitor OpenGov portal projects calendar, browse City pages for “Forecast,” and query the City Contracts Open Data dataset for recent awards; ask primes about likely rebids.

## Core Pain Point

Forecasts change and live in different places; award/contract open data lacks some context (e.g., detailed scope, supplier diversity usage), making it hard to align capacity and build teaming strategies.


# Data Questions

## Question

Which classification systems and fields are authoritative for Richmond solicitations: NIGP commodity codes, NAICS, or custom categories? How consistently are they populated in OpenGov and in the Open Data City Contracts dataset?

## Rationale

To enable effective search and filtering, the navigator must rely on a consistent classification system. Understanding which system is the source of truth and how well it's applied is critical, as inconsistent metadata is a core pain point hindering MBEs from finding relevant opportunities.

## Question

What fields exist in the City Contracts Open Data dataset (e.g., contract number, vendor, department, start/end dates, amount, status), what is its true update frequency, and how can we reliably join it to OpenGov solicitations/awards? Is there a unique key like a solicitation or contract ID?

## Rationale

To provide a comprehensive view that includes past awards—a key user need for strategic planning—the tool must merge data from the active solicitations portal (OpenGov) and the historical contracts dataset. This question addresses the technical prerequisite of finding a common identifier to link these two separate data sources.

## Question

Is there a public data feed or API for Richmond’s OpenGov portal that provides access to projects, Q&A, addenda, and awards? What are the rate limits and terms of use?

## Rationale

For the navigator to provide timely and accurate information, it needs an automated way to ingest data from the primary source of solicitations. A public API is the ideal method, and its existence and limitations are a primary technical dependency for the project.

## Question

Does the OMBD’s MBD directory, hosted on diversitycompliance.com, expose an API or data export for firm capabilities, NAICS codes, or NIGP codes to enable capability matching?

## Rationale

A core function of the proposed tool is to match opportunities to the capabilities of specific MBEs. Accessing the official directory of certified firms and their skills via an API would allow for a powerful and accurate matching feature, directly addressing the project's primary goal.


# User Questions

## Question

For primary personas like emerging MBEs versus experienced primes, what search filters are most critical locally (e.g., filtering by department, commodity code, small purchase thresholds, bonding requirements)?

## Rationale

To be useful, the tool's interface must prioritize the search and filter criteria that matter most to its target users. This question aims to identify those priorities to ensure the user experience is tailored to the practical needs of local Richmond businesses.

## Question

What language access is most needed (e.g., Spanish, Arabic) based on OMBD's engagement with the community? Are there specific Title VI requirements for the tool's content?

## Rationale

To ensure equitable access, the tool must consider the linguistic diversity of Richmond's business community. This question addresses the need to go beyond an English-only solution to truly serve all minority-owned businesses, in line with the OMBD's mission.

## Question

What specific proof points or features would most effectively reduce anxiety for first-time MBE bidders (e.g., interactive checklists, visible status of steps from iSupplier/OpenGov, deadline reminders, prominent addenda alerts)?

## Rationale

The 'emotional/trust' JTBD identified that the current system's complexity creates fear and uncertainty. This question seeks to identify concrete design features that can directly address this pain point by making the process more transparent and navigable, thereby building user confidence.


# Integration Questions

## Question

How should the navigator reconcile user identities across the different systems: the OpenGov account, the iSupplier vendor ID (from RAPIDS/Oracle), and the OMBD directory profile? Can we match on Tax ID or legal name, or must we rely on user-asserted mapping?

## Rationale

A user has separate identities in at least three different city systems. To provide a unified experience (e.g., showing a user their bid status and their MBE certification), the navigator needs a strategy to link these identities, which presents a significant technical and security challenge.

## Question

Can we embed or deep-link to the OpenGov Advanced Search with pre-filled filters? Are there any Single Sign-On (SSO) possibilities with City systems, or must users maintain separate logins for OpenGov and iSupplier?

## Rationale

This question explores ways to reduce friction for the user. Instead of forcing them to re-enter searches on another site, deep-linking would create a smoother workflow. SSO would further simplify the process by eliminating the need to juggle multiple credentials, directly addressing a known pain point.

## Question

Is it possible for the navigator to surface payment or Purchase Order (PO) status from the iSupplier portal for active or closed contracts as a trust-building signal, or is that information restricted?

## Rationale

Providing visibility into the full contract lifecycle, including payment, would be a powerful feature for building trust and providing long-term value. This question investigates the technical and security feasibility of accessing such sensitive post-award data from the city's financial system.


# Equity Questions

## Question

What specific barriers did Richmond’s past disparity or availability studies identify (e.g., underutilization in certain industries, complex procedural hurdles) that the navigator can be designed to specifically mitigate through features like tutorials, terminology glossaries, or bid/no-bid wizards?

## Rationale

An effective equity-focused tool should be informed by data on existing inequities. This question aims to connect the tool's features directly to the known, documented challenges faced by MBEs in Richmond, ensuring it addresses root causes.

## Question

How will the tool support firms with limited broadband or device access? Will it be mobile-first, offer SMS/email alerts, provide printable checklists, or integrate with in-person OMBD support workflows?

## Rationale

The 'digital divide' can exclude businesses from online-only opportunities. This question ensures the project considers a multi-channel approach so that the navigator does not unintentionally reinforce inequities based on a firm's access to technology.

## Question

How will the tool's notification system be designed to ensure fairness, guaranteeing that all users receive critical updates like addenda or deadline changes promptly and simultaneously to avoid advantaging firms that are already better connected?

## Rationale

Equal access to information is a cornerstone of fair procurement. This question focuses on the design of a key feature—notifications—to ensure it promotes a level playing field and doesn't create new information asymmetries.


# Prior Art Questions

## Question

What aspects of Philadelphia’s Contracts Hub, which acts as an aggregator for multi-site searches and provides plain-language guides, are technically feasible to implement for Richmond’s specific stack (OpenGov + Open Data + OMBD directory)?

## Rationale

Philadelphia has already built a tool that aggregates procurement data from multiple sources. By analyzing its functionality, we can assess which of its successful features can be realistically replicated within the constraints of Richmond's existing technology platforms.

## Question

What procurement guidance patterns from the Boston Supplier Portal and Long Beach Buys, such as onboarding flows and vendor help content, should be adapted for Richmond’s specific terminology and statutory context (e.g., VPPA, City Code Ch. 21)?

## Rationale

Boston and Long Beach have invested in creating user-friendly onboarding and help content. This question aims to leverage that work by adapting proven content strategies to fit Richmond's unique legal and procedural rules, ensuring the guidance is both helpful and accurate for local businesses.

