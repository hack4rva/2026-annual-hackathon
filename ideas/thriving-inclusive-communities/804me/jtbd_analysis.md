# Project Summary

## Project Name

804me

## Pillar

Thriving Inclusive Communities

## Problem Statement

Help residents, particularly limited-English and privacy-conscious immigrants or refugees in Richmond, VA, safely find community services without creating accounts or sharing identifying information. The core problem is that information on services is fragmented across various sources, creating significant challenges such as language barriers, fear of sharing personal data, uncertainty about eligibility, and wasted time due to duplicated intake processes. This fragmentation and lack of trust can lead to residents delaying or forgoing critical help.

## Description

804me is a civic tech project designed as an immigrant service discovery tool for Richmond, VA, with a primary focus on privacy and multilingual access. The goal is to create a centralized, no-account-required platform where users can find community services. The tool will feature language-forward discovery and use standardized, clear labels to indicate crucial information like guaranteed language support, interpreter availability, documentation requirements, cost, eligibility, and safety signals (e.g., 'no ID required'). To ensure broad accessibility, the project plans to incorporate offline and SMS-based pathways and will provide explicit privacy cues to users before any hand-off to an external service provider's application or referral process.


# Functional Job Story

## Situation

When I’ve just arrived in Richmond or my family’s needs change (health, legal, school, housing).

## Persona

A limited-English, privacy-conscious immigrant or refugee.

## Motivation

To quickly find trustworthy, nearby services in my language without creating an account or sharing personal details.

## Outcome

So I can get help safely and promptly.

## Current Workaround

Ask friends/WhatsApp, call OIRE or individual nonprofits, search 211/FindHelp/Google, visit clinics in person.

## Core Pain

Information is fragmented; language barriers; fear of forms or data sharing; uncertainty about eligibility or documentation; time lost and duplicated intake.


# Emotional Trust Job Story

## Situation

When I’m unsure whether it’s safe to seek help (e.g., undocumented status, DV situation).

## Persona

A resident wary of sharing PII (Personally Identifiable Information).

## Motivation

To explore options anonymously in my language and see clear safety/eligibility indicators.

## Outcome

So I can act without fear and preserve my dignity.

## Current Workaround

Rely on community leaders or culturally specific orgs; avoid online tools that ask for PII; delay care.

## Core Pain

Anxiety about surveillance or data misuse; stigma; conflicting advice; missed windows for critical services.


# Systems Coordination Job Story

## Situation

When multiple agencies and CBOs could help me (health, legal, education, benefits).

## Persona

A newcomer navigating Richmond systems.

## Motivation

To find one place that shows coordinated, up-to-date referrals and language access.

## Outcome

So I can move through services without repeating my story or getting lost.

## Current Workaround

Bounce between OIRE, clinics, legal aid, and social workers; track paper referrals; use ad-hoc interpreter support.

## Core Pain

Duplicative intakes; gaps between referrals; inconsistent hours/eligibility; interpreter availability varies; updates aren’t centralized.


# Data Questions

- Which data fields are minimally necessary to match without identifying a person (e.g., ZIP, language, need type), and how will 804me avoid storing PII while supporting follow-up if a user opts in?
- How will 804me keep listings current (hours, eligibility, languages offered) given frequent changes at clinics and legal providers? Who owns updates—OIRE, providers, or a shared workflow?
- Can 804me display authoritative language access info (e.g., Spanish guaranteed, other languages via phone interpreters) per provider, and how is this verified?
- What governance is needed to align with City of Richmond’s Language Access Plan and not conflict with provider privacy policies (e.g., FindHelp data, clinic policies)?

# User Questions

- Priority personas and languages at launch: Spanish first per LAP; which next languages (Arabic, Nepali, Portuguese, Vietnamese, Korean, Chinese, French) reflect Richmond LEP trends?
- What safety/trust labels matter to users (no ID required, free, sliding scale, no immigration questions, trauma-informed, DV-safe)?
- What offline discovery complements 804me (flyers at clinics, OIRE events, churches, schools) and what are acceptable QR/SMS flows for low-digital-literacy users?
- What accessibility needs (screen readers, simple literacy modes, audio prompts) are highest among target users?

# Integration Questions

- How will 804me coordinate with OIRE’s navigation services, legal and Medicaid clinics, and iSpeak Richmond—e.g., warm transfer, call prompts, or embedded contact cards?
- Will 804me link to or ingest from 211 Virginia, FindHelp, and ConnectVA without requiring user accounts or violating their terms?
- Can providers easily self-update (lightweight portal, SMS/email link) and can OIRE validate changes?
- What’s the plan for after-hours interpreter routing and click-to-call for language lines when users decide to contact a service?

# Equity Questions

- How will 804me indicate safety for undocumented residents (no ID required, no SSN asked, safe-reporting for DV) without over-promising?
- How will we prevent digital exclusion in Southside neighborhoods with lower broadband—e.g., SMS/USSD, kiosk, paper one-pagers, partner navigators?
- How will we measure equitable outcomes (reduced time to service, increased first-visit success) across language groups and neighborhoods while preserving anonymity?

# Prior Art Questions

- What are the strengths/limits of City OIRE pages, iSpeak/LAP, 211 Virginia, FindHelp, ConnectVA for immigrants who want no-account, no-PII discovery?
- Which local CBO sites (IRC, CCC, Sacred Heart, CrossOver, Health Brigade, LIVE Center) provide consistent, verifiable info on languages, hours, eligibility that 804me can standardize?
- What privacy lessons from FindHelp (search without account vs. PII on applications) should inform 804me’s “view vs. apply” boundary and clear data-sharing warnings?
