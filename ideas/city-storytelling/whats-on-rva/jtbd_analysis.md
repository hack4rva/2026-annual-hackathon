# Project Analysis Summary

## Project Name

whats-on-rva

## Problem Statement

The core problem is the fragmented and scattered nature of arts and cultural event listings in Richmond, VA. Residents and visitors currently have to manually check numerous disparate sources—such as VisitRichmond, Style Weekly, Eventbrite, RVA Hub, and individual venue calendars—to discover events. This leads to a frustrating user experience, missed events, and difficulty in planning, as information is often duplicated, contradictory, or lacks consistent filtering options for criteria like date, price, neighborhood, and accessibility.

## Civic Pillar

City That Tells Its Stories

## Project Description

The 'whats-on-rva' project is an arts and cultural event aggregation platform designed to solve the problem of event discovery in Richmond, VA. Its primary function is to pull event data from a multitude of sources—including Style Weekly/VPM Artsline, VisitRichmond, RVAHub, Eventbrite, and direct feeds from major venues like the VMFA and Dominion Energy Center—into a single, unified interface. The platform aims to process this raw data by deduplicating identical events, standardizing taxonomies for genre and neighborhood, and enriching listings with crucial details like accessibility and transit information. The goal is to provide a comprehensive, searchable, and reliable central resource for residents, visitors, and families to discover all arts and cultural happenings in the Richmond area.


# Functional Job To Be Done

## Situation

When it’s Thursday afternoon and I’m planning my weekend in Richmond.

## Persona

A Richmond resident in the city or nearby counties.

## Motivation

To see all arts and cultural events in one searchable place.

## Outcome

To quickly pick something near me that matches my interests and budget.

## Current Workaround

Manually checking multiple sources like VisitRichmond, Style Weekly/VPM Artsline posts, Eventbrite, RVA Mag, RVA Hub, individual venue calendars (VMFA, ICA at VCU, Dominion Energy Center, libraries, galleries), and social media.

## Core Pain Point

Dealing with fragmented sources, duplicate or contradictory information, and missed events due to scattered listings and inconsistent filtering options for date, neighborhood, price, and accessibility.


# Emotional Job To Be Done

## Situation

When I’m taking friends or family to an event that reflects Richmond’s culture.

## Persona

A neighborhood connector or newcomer host.

## Motivation

To find curated, reliable recommendations that feel authentically 'RVA'.

## Outcome

To trust that we’ll have a great experience and not risk issues like cancellations, sold-out tickets, or a 'bait-and-switch' vibe.

## Current Workaround

Relying on word-of-mouth, established habits like First Fridays, selective newsletters such as Style Weekly Datebook and VPM Artsline, and following a few trusted venues on Instagram.

## Core Pain Point

Anxiety about stale or incorrect event details, a lack of context on the neighborhood or venue's fit, and uncertainty regarding accessibility, transit/parking, and the event's cultural relevance.


# Systems Job To Be Done

## Situation

When I’m programming or marketing an event.

## Persona

A small venue or grassroots arts organizer.

## Motivation

To publish event information once and have it syndicate everywhere that Richmonders look for events.

## Outcome

To reach diverse audiences without having to duplicate submissions across many different calendars.

## Current Workaround

Submitting event details separately to Style Weekly (which feeds Artsline), VisitRichmond, RVAHub, RVA Mag, Eventbrite, and Facebook, while also maintaining their own website and emailing neighborhood groups and libraries.

## Core Pain Point

Repetitive data entry, inconsistent taxonomy for genres and neighborhoods across platforms, slow propagation of updates for changes or cancellations, and limited reach to underserved communities.


# Data Questions

## Question Text

Which canonical sources reliably cover the metro (City of Richmond plus Henrico, Chesterfield, Hanover) for arts/culture, and do they offer feeds/APIs (e.g., Style Weekly/Artsline, VisitRichmond, CultureWorks/artoberVA, VMFA, ICA at VCU, Dominion Energy Center, Richmond Public Library/LibCal)?

## Priority

High

## Target Stakeholder

Technical Lead

## Question Text

Can we legally/ethically scrape/ingest event data from each source (terms, rate limits, copyright) or secure data-sharing MOUs? Who owns the canonical record for updates/cancellations?

## Priority

High

## Target Stakeholder

Technical Lead

## Question Text

What taxonomy should we standardize (genre, neighborhood/districts like Jackson Ward, Scott’s Addition, Manchester, Church Hill; price; accessibility features; family-friendly; transit) and can we map source fields reliably?

## Priority

High

## Target Stakeholder

Data Analyst

## Question Text

How will we de-duplicate identical events syndicated to Style Weekly, Artsline, VisitRichmond, Eventbrite, Facebook, and venue pages?

## Priority

High

## Target Stakeholder

Technical Lead


# User Questions

## Question Text

Which primary user segments in RVA will we optimize for first (city residents; VCU/UR students; families; visitors; older adults; new arrivals; neighborhood connectors; arts workers)?

## Priority

High

## Target Stakeholder

Product Manager

## Question Text

What decision filters matter most locally (date/time, free/low-cost, kid-friendly, bus-accessible via GRTC Pulse, parking, ADA details, neighborhood safety/lighting)?

## Priority

High

## Target Stakeholder

UX Researcher

## Question Text

How do Richmonders prefer discovery: weekly curated lists, map view by neighborhood, “this weekend,” First Fridays highlights, or push alerts for last-minute plans?

## Priority

High

## Target Stakeholder

UX Researcher

## Question Text

What trust signals do Richmond users need (source-of-truth badge, verified organizer, ticket availability, weather/venue change alerts, cancellation timestamp)?

## Priority

Medium

## Target Stakeholder

UX Designer


# Integration Questions

## Question Text

Which partners will provide or accept syndicated feeds: Style Weekly (feeding VPM Artsline), VisitRichmond, RVAHub, CultureWorks, libraries, major venues (Dominion Energy Center/Carpenter Theatre, VMFA, ICA at VCU), and university arts calendars (UR Modlin Center, VCUarts)?

## Priority

High

## Target Stakeholder

Partnerships Manager

## Question Text

Can we support both ingest (iCal, RSS, JSON, HTML scraping) and publish/syndicate out (embeddable widgets for neighborhood orgs, libraries, and venues)?

## Priority

High

## Target Stakeholder

Technical Lead

## Question Text

What is the minimal single-submission flow for organizers (accept Style Weekly/Artsline form as input; accept Eventbrite/Facebook/Google Calendar links; or provide a Richmond-standard form with auto-post to partners)?

## Priority

High

## Target Stakeholder

Product Manager


# Equity Questions

## Question Text

How will we reach and surface events from Black- and Brown-led orgs, immigrant communities, Southside/East End venues, and non-traditional spaces that don’t post to mainstream calendars?

## Priority

High

## Target Stakeholder

Community Organizer

## Question Text

What access features will we capture and display (ASL, captions, scent-free, mobility access, sliding-scale/pay-what-you-will) and how do we keep that data fresh?

## Priority

High

## Target Stakeholder

DEI Consultant

## Question Text

How do we ensure mobile-first, low-bandwidth performance and offline-friendly lists for residents impacted by the digital divide; can we partner with libraries/community centers for kiosks or printed guides?

## Priority

High

## Target Stakeholder

City Official

## Question Text

How can the project actively support the 'telling the truth about its past' aspect of the city's pillar, for instance by highlighting events related to Black history and cultural storytelling?

## Priority

High

## Target Stakeholder

DEI Consultant


# Prior Art Questions

## Question Text

What is the exact workflow link between Style Weekly submissions and VPM Artsline syndication; can we integrate with that pipeline instead of duplicating it?

## Priority

High

## Target Stakeholder

Market Analyst

## Question Text

How comprehensive are VisitRichmond and RVAHub calendars for arts (vs sports/food/festivals) and can we fill gaps (smaller galleries, DIY spaces like Gallery5, Studio Two Three, neighborhood churches, community centers)?

## Priority

High

## Target Stakeholder

Product Manager

## Question Text

What did CultureWorks/artoberVA build for seasonal discovery (calendar or partner feeds) that we can reuse or align with year-round?

## Priority

Medium

## Target Stakeholder

Market Analyst

