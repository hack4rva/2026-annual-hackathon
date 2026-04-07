# Project Context

## Project Name

explorerva

## Description

Arts discovery concept presented as spoken-word poem. No working prototype. Aimed at aggregating Richmond arts events.

## Problem Statement

Arts and Cultural Event Discovery - Aggregate Richmonds arts events into one discoverable place.

## Civic Pillar

City That Tells Its Stories


# Functional Job To Be Done

## Situation

When I’m planning my weekend in Richmond and want to find arts events near Church Hill,

## Persona

resident/visitor

## Motivation

I want to see one comprehensive, deduplicated list with filters for neighborhood, cost, accessibility, and family-friendliness,

## Outcome

so I can quickly pick a few events and add them to my calendar.

## Current Workaround

Bounce between CultureWorks, VisitRichmond, Venture Richmond, Style Weekly, Eventbrite, Instagram posts, and venue websites; manually add to Google/Outlook.

## Core Pain

Fragmented sources, duplicate listings, inconsistent dates/times/addresses, no consistent accessibility tags, and time wasted cross-checking.


# Emotional Trust Job To Be Done

## Situation

When I’m inviting friends from out of town

## Persona

host/community member

## Motivation

trust that explorerva highlights authentic Richmond stories and isn’t just pay-to-play

## Outcome

feel confident I’m sharing inclusive, accurate, and culturally representative events

## Current Workaround

Rely on word-of-mouth, a few trusted curators/newsletters, or specific institutions (VMFA, The Valentine, Richmond Public Library), while worrying we’re missing grassroots or BIPOC-led events.

## Core Pain

Perceived bias toward well-funded organizations; fear of missing out on diverse neighborhood events; uncertainty about accuracy/updates.


# Systems Coordination Job To Be Done

## Situation

When I’m a small arts organizer on the Southside with limited capacity

## Persona

organizer

## Motivation

submit once and have my event reliably syndicated across major RVA calendars

## Outcome

spend time producing the event instead of duplicate data entry

## Current Workaround

Manually submit to CultureWorks, Venture Richmond, Style Weekly (to reach VPM Artsline), RVA Mag, Eventbrite; post to social media; answer repetitive emails.

## Core Pain

Duplicative workflows, inconsistent approval timelines, different formatting/fields, occasional conflicts or outdated listings that are hard to correct everywhere.


# Data Questions

- Which sources can we ingest programmatically first: CultureWorks RSS/iCal feeds; Style Weekly iCal; Eventbrite API; Facebook Events; venue Google Calendars? What are rate limits and reliability?
- Does CultureWorks (Localist) provide stable RSS/ICS per category/topic (e.g., Performing Arts, Multicultural) we can map into our taxonomy?
- How will we deduplicate events syndicated across CultureWorks, Style Weekly→Artsline, RVA Mag, and Venture Richmond? What matching heuristics (title+datetime+venue, organizer URLs)?
- What minimum metadata do Richmond users need (neighborhood, GRTC bus lines, accessibility, cost, age range, language)? Which fields exist today vs. need enrichment?
- Can we capture “First Fridays Art Walk” and similar recurring series with location micro-venues and pop-ups accurately?

# User Questions

- Which neighborhoods and personas should we prioritize for discovery: VCU/VCUarts students, families, Southside residents, newcomer immigrants, older adults, visitors downtown?
- What search/browse mental models resonate locally: neighborhood maps (Scott’s Addition, Arts District, Southside), story-forward collections (Black history, immigrant traditions), or time-based (Tonight/This Weekend)?
- What accessibility filters matter most to RVA audiences (ASL interpretation, wheelchair access, sensory-friendly, sliding-scale/free)?
- What trust signals do Richmonders want (editorial curation, community ambassadors, city pillar alignment badges, organizer verification)?

# Integration Questions

- Can we automate submissions to Style Weekly so listings also land on VPM Artsline? Is there an API or must we provide an export feed they can ingest?
- What is Venture Richmond’s “Submit Your Event” data format and can explorerva generate compatible feeds to reduce duplicate entry?
- Can we expose an outbound RSS/ICS/JSON feed per tag/neighborhood so partners (neighborhood associations, libraries, schools) can embed?
- Are there city channels (RVA.gov, Office of Cultural Affairs, libraries) open to featuring a “What’s On in the Arts” widget sourced from explorerva?

# Equity Questions

- How will we ensure coverage of grassroots, Southside, and immigrant-led events not typically on major calendars? Partnerships with community centers, churches, barbershops/beauty salons, and Spanish-language media?
- Can we add language support for Spanish and other common languages, in line with the city’s language access efforts?
- How can we surface free/low-cost, family-friendly events and those accessible by GRTC, supporting residents without cars?
- What governance ensures editorial balance and avoids pay-to-play bias while allowing sponsorships transparently?

# Prior Art Questions

- How does explorerva complement (not duplicate) CultureWorks’ Localist calendar and its RSS/ICS features?
- How will we interoperate with Style Weekly and VPM Artsline’s submission linkage to avoid double-entry?
- What role can VisitRichmond and Venture Richmond play for visitor-facing curation while explorerva focuses on comprehensive aggregation and equity tagging?

# Richmond Arts Discovery Landscape

## Platform Name

CultureWorks Events Calendar

## Url

https://calendar.richmondcultureworks.org/

## Description

A Localist-powered platform for arts and culture events in Richmond. It allows users to explore events, places, groups, and artists. The platform provides functionality to save events to personal calendars (Google, iCal) and subscribe via RSS feeds.

## Event Submission Process

Users can submit their own events through a simple event submission form on the website.

## Owner Organization

CultureWorks

