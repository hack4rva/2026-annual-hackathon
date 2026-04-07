# Project Overview

## Pillar

Thriving Economy

## Problem Statement

MBE Contracting Discovery - Help minority-owned businesses find City contracting opportunities matching their capabilities.

## Project Name

ombd-proactive-match-dashboard

## Project Description

A staff dashboard designed to automatically match Minority Business Enterprise (MBE) vendors to city solicitations based on commodity codes. It includes features for one-click notifications to vendors and tools for analyzing participation gaps.


# Executive Summary

The Jobs To Be Done analysis for the Richmond MBE contracting discovery project reveals critical needs across functional, emotional, and systemic levels. Functionally, minority-owned business (MBE) owners need a proactive and unified system to be matched with relevant city solicitations, as they currently struggle with manually monitoring fragmented platforms like OpenGov, eVA, and iSupplier, often missing opportunities due to inconsistent commodity codes and tight deadlines. Emotionally, certified MBEs require confidence that the opportunities they receive are genuinely relevant and fairly surfaced to build trust in the process, a stark contrast to the current skepticism fueled by low-relevance alerts. For city staff in the Office of Minority Business Development (OMBD) and Department of Procurement Services (DPS), there is a pressing systemic need for a centralized dashboard to automate MBE matching, track outreach, and monitor participation gaps, replacing their current inefficient and manual workflows reliant on spreadsheets and disparate data sources.

The most critical open questions identified are foundational to the project's feasibility. The primary challenge is data integration and standardization, specifically: which commodity code taxonomy (NIGP vs. NAICS) to use as the standard, and how to secure near real-time API access or data feeds from essential systems like OpenGov (for solicitations), Oracle iSupplier (for vendor profiles), and B2Gnow (for OMBD directories). A clear definition of "participation gap" and the identification of canonical datasets for its measurement are also paramount. Other crucial questions revolve around user-centric design, such as vendor notification preferences and support for code selection; ensuring equitable outreach that avoids a "spray and pray" approach; and investigating prior art from other municipalities to leverage lessons learned.

# Functional Job Story

## Situation

When new City solicitations are posted

## Persona

a Richmond-based MBE owner

## Motivation

want to be proactively matched by the commodity codes and services I actually provide

## Outcome

so I can quickly decide to bid and submit a compliant, timely response

## Current Workaround

Manually monitor OpenGov, eVA VBO, OMBD emails/events, and rely on word-of-mouth; periodically update codes across iSupplier and OMBD directories.

## Core Pain Point

Fragmented systems and inconsistent code mappings (NIGP vs NAICS) cause missed, duplicative, or irrelevant notices; limited time to parse long solicitations and attachments; tight deadlines.


# Emotional Trust Job Story

## Situation

When I receive a City “opportunity match,”

## Persona

a certified MBE/ESB

## Motivation

want confidence that it’s relevant and fairly surfaced (not a dead end)

## Outcome

so I can trust the process and invest bid time and resources

## Current Workaround

Cross-check matches against eVA/OpenGov; consult OMBD staff or peers before committing effort.

## Core Pain Point

Past experiences with low-relevance alerts and unclear award histories reduce trust; uncertainty about how matches are generated and whether my certification truly opens doors.


# Systems Coordination Job Story

## Situation

When a department drafts or publishes a solicitation

## Persona

an OMBD/DPS staffer

## Motivation

want a dashboard that auto-surfaces eligible MBEs by commodity code, tracks targeted outreach/notifications, and highlights participation gaps

## Outcome

so I can coordinate equitable engagement and document compliance

## Current Workaround

Spreadsheets and manual lookups across OMBD B2Gnow directory, Oracle iSupplier, eVA VBO, and OpenGov; mass email blasts with limited personalization.

## Core Pain Point

Data silos, no unified vendor profile or normalized commodity codes, limited APIs/webhooks, and slow/retroactive reporting on participation goals.


# Data Questions

## Question

Which taxonomy should the dashboard standardize on for matching—NIGP (used by eVA/OpenGov postings) vs any NAICS captured in OMBD/B2Gnow—and what is the approved crosswalk for code normalization?

## Rationale

The success of the matching feature depends entirely on a consistent and accurate classification system. Answering this question is crucial to ensure that solicitations tagged with one code system (NIGP) can be accurately matched to vendors who may be registered with another (NAICS), preventing missed opportunities and irrelevant matches.

## Question

Can we access OpenGov’s Richmond portal via API or feeds to pull new/updated solicitations (title, description, attachments, commodity/NIGP codes, due dates) in near real-time?

## Rationale

To provide timely notifications, the dashboard needs a reliable and automated way to ingest new solicitation data as soon as it's published. This question determines the technical feasibility and method for acquiring the primary trigger data for the entire system.

## Question

What vendor attributes are available from Oracle iSupplier for matching (commodity codes, business categories, address, SWaM/MBE flags) and are there read-only interfaces or exports?

## Rationale

Understanding the available data fields from the city's main supplier registration system (iSupplier) is essential for building comprehensive vendor profiles. This information is the foundation for the matching algorithm.

## Question

What OMBD directory fields (via B2Gnow) can be used for matching (commodities, certifications, geographies), and can we automate refreshes (API/scheduled export)?

## Rationale

This question is vital for accessing the specific data related to Minority Business Enterprises (MBEs), which is the core focus of the project. Automated access to the B2Gnow system data ensures the dashboard has the most current certification and capability information for matching.

## Question

How will the “participation gap” be defined numerically (availability vs utilization) and which datasets (City Contracts Open Data, awardees, bidder lists) are canonical for baselining and trend analysis?

## Rationale

The 'participation gap analysis' is a key feature. A clear, agreed-upon definition and authoritative data sources are necessary to make this analysis meaningful, credible, and actionable for city staff.

## Question

Are there authoritative award histories and unsuccessful bidder lists we can join to vendor attributes for precision/recall evaluation of matching?

## Rationale

This data is critical for measuring and improving the effectiveness of the matching algorithm. Without it, it's impossible to know if the matches generated are leading to successful bids or if the system is performing accurately.

## Question

What privacy/PII constraints apply to storing contact emails/phone numbers and sending notifications; is vendor opt-in required and how is consent captured/logged?

## Rationale

Compliance with privacy regulations is non-negotiable. This question addresses the legal and policy framework for handling vendor data and communications, which is essential for building trust and avoiding legal risks.

## Question

How will we prevent “spray and pray” blasts—what precision threshold is acceptable for a match, and what audit trail is required to demonstrate fair, non-discriminatory outreach?

## Rationale

To maintain user trust and ensure the tool is effective, it must deliver high-quality, relevant matches. This question addresses the need for quality control, fairness, and accountability in the matching algorithm and outreach process, which is crucial for equity.

## Question

Can the dashboard identify unregistered but Richmond-based MBEs for proactive onboarding (e.g., from business license or OMBD outreach lists) while complying with privacy rules?

## Rationale

This question explores how the project can go beyond serving already-engaged vendors to actively grow the pool of participating MBEs, directly supporting the OMBD's mission of advancing opportunities and increasing the program's impact.

## Question

Which municipalities using OpenGov or statewide systems like eVA have implemented commodity-code matching or supplier recommendation tools, and what were their measured outcomes (increased MBE bids/awards, reduced time-to-award)?

## Rationale

Learning from prior art helps the project avoid reinventing the wheel, adopt proven strategies, and set realistic, data-driven goals based on the measured outcomes of similar initiatives in other cities.


# User Questions

## Question

Primary users for phase 1: OMBD staff, DPS buyers/analysts, or vendors? What are their top tasks (e.g., generate targeted lists, send one‑click notices, track responses, export reports)?

## Rationale

Defining the primary user and their key tasks for the initial phase is crucial for focusing development efforts and delivering value quickly. It helps prioritize features and ensures the first version of the product solves a concrete problem for a specific group.

## Question

Vendor notification preferences: channel (email/SMS), language support (per City Language Access policy), frequency limits, and ability to pause/feedback on “not relevant” matches.

## Rationale

For the notification feature to be a valued service rather than an annoyance, it must be configurable to user preferences. This question addresses how to make communications effective, respectful, and user-controlled, which is key to vendor adoption and satisfaction.

## Question

What support is needed to help vendors choose precise commodity codes (guided selection, examples, code validation) and keep profiles up to date across iSupplier and OMBD?

## Rationale

The accuracy of the matching system is dependent on the quality of user-provided data. This question focuses on how to support users in providing accurate information, which directly improves the performance and value of the entire system for everyone.

## Question

How does the tool align with Richmond’s MBE/ESB goals and Title VI language access—e.g., thresholds for targeted outreach, documentation required for audits, and processes for non-digital vendors?

## Rationale

This question ensures the tool is designed from the ground up to meet the city's legal and policy commitments to equity and accessibility. Addressing language access and non-digital vendors is critical for ensuring the solution serves all members of the target community fairly.


# Integration Questions

## Question

What single sign-on (if any) is available across Oracle iSupplier, OpenGov, and B2Gnow for staff, and what’s the lowest-friction approach for logging outreach in the source system of record?

## Rationale

To ensure adoption by city staff, the dashboard must be easy to access and use within their existing digital environment. This question addresses the need for a seamless user experience through SSO and clarifies how the new tool's activities will be recorded in official systems.

## Question

Can we receive webhooks or scheduled data pulls from OpenGov; if not, is email parsing or scraping permitted by policy?

## Rationale

This question is critical for determining the primary technical mechanism for ingesting solicitation data. The answer will significantly impact the project's architecture, reliability, and long-term maintenance costs.

## Question

Should outreach events (notices sent, opens, replies) be written back to B2Gnow or stored in a City CRM; who owns that record and retention?

## Rationale

This question addresses the crucial issue of data governance for the information generated by the dashboard. Determining the system of record for outreach is essential for creating a unified audit trail and ensuring data is managed according to city policy.

## Question

Can eVA’s existing NIGP alert capabilities be leveraged or mirrored just for City of Richmond opportunities to reduce duplication and vendor fatigue?

## Rationale

This question explores a critical strategic choice: whether to build a new notification system or integrate with the existing statewide one. Leveraging the eVA system could prevent vendor frustration from receiving redundant alerts and streamline the user experience, potentially increasing engagement.


# Equity Questions

## Question

How does the tool align with Richmond’s MBE/ESB goals and Title VI language access—e.g., thresholds for targeted outreach, documentation required for audits, and processes for non-digital vendors?

## Rationale

To ensure the project is compliant with city policies and legal requirements, and that it effectively serves all segments of the target population, including those who may face language or digital access barriers. This is critical for achieving true equity and documenting compliance.

## Question

How will we prevent “spray and pray” blasts—what precision threshold is acceptable for a match, and what audit trail is required to demonstrate fair, non-discriminatory outreach?

## Rationale

To maintain vendor trust and engagement by ensuring notifications are relevant and valuable, not just noise. An audit trail is essential for transparency and to prove that the outreach process is equitable and not biased, which is a core tenet of the project.

## Question

Can the dashboard identify unregistered but Richmond-based MBEs for proactive onboarding (e.g., from business license or OMBD outreach lists) while complying with privacy rules?

## Rationale

To expand the project's impact beyond the existing pool of registered vendors and actively increase the number of participating MBEs, which directly supports the OMBD's mission. This requires careful navigation of data privacy regulations.


# Prior Art Questions

## Question

Which municipalities using OpenGov or statewide systems like eVA have implemented commodity-code matching or supplier recommendation tools, and what were their measured outcomes (increased MBE bids/awards, reduced time-to-award)?

## Rationale

To learn from the experiences of other cities with similar procurement stacks, enabling the project to adopt successful strategies, avoid known pitfalls, and set realistic, measurable goals for its own impact on MBE participation and procurement efficiency.

## Question

Can eVA’s existing NIGP alert capabilities be leveraged or mirrored just for City of Richmond opportunities to reduce duplication and vendor fatigue?

## Rationale

To investigate whether an existing, widely-used state platform can be utilized to meet the project's goals, potentially saving development resources and simplifying the experience for vendors who already use the eVA system, thereby reducing the burden on them.

