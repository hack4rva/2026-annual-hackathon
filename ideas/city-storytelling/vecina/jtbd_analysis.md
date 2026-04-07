# Executive Summary

The 'vecina' project's Jobs To Be Done analysis reveals significant opportunities to serve Richmond, VA residents by addressing clear user needs within a fragmented arts and culture event discovery landscape. The primary user jobs identified are: 1) a functional need for a centralized, efficient way for residents to find safe, low-cost, and geographically relevant events, overcoming the current time-consuming process of checking multiple, inconsistent sources; 2) an emotional need for a trusted, reliable platform with vetted, accurate, and inclusive event information that gives users confidence to attend, especially for last-minute community pop-ups; and 3) a systemic need for event organizers to have a single, streamlined submission process that syndicates event details to major local calendars, eliminating duplicative work. The success of 'vecina' hinges on addressing critical, Richmond-specific open questions regarding data aggregation from sources like CultureWorks and city permits, standardizing metadata (e.g., GRTC routes, ADA access), building user trust through community partnerships, establishing syndication agreements with existing platforms like Style Weekly/VPM Artsline, and ensuring equitable access for residents with limited internet connectivity.

# Project Background

## Project Name

vecina

## Problem Statement

Aggregate Richmonds arts events into one discoverable place.

## Project Description

A community-focused arts and cultural event discovery tool for neighborhood events.

## City Pillar Alignment

City That Tells Its Stories


# Functional Job To Be Done

## Situation

When it’s the middle of the week

## Persona

a Southside parent with limited free time

## Motivation

to find safe, low-cost arts and cultural events near Bellemeade/Swansboro this weekend

## Outcome

plan family time without driving across the river

## Current Workaround

Bounce between CultureWorks calendar, Venture Richmond (mostly downtown), VisitRichmondVA, Richmond.com listings, and Instagram posts from neighborhood orgs; ask in local Facebook groups; scan flyers at library/rec center.

## Core Pain

Information is fragmented by geography and publisher; many neighborhood events aren’t listed centrally, search is time-consuming, and details (cost, accessibility, transit) are inconsistent or missing.


# Emotional Job To Be Done

## Situation

When a community group in Church Hill shares a last-minute arts pop-up

## Persona

a resident cautious about safety and cost

## Motivation

to trust that vecina’s listing is accurate, inclusive, and vetted by locals

## Outcome

invite friends without worrying about hidden costs or accessibility gaps

## Current Workaround

DM organizers on Instagram, rely on word-of-mouth and trusted curators (e.g., The Richmond Experience, RVA Mag), or avoid attending if info feels uncertain.

## Core Pain

Unclear or outdated info, paywalls/ads, and lack of standardized details (ADA access, family-friendliness, transit) undermine confidence and lead to missed opportunities.


# Systems Job To Be Done

## Situation

When planning a small neighborhood arts market in Scott’s Addition

## Persona

a volunteer organizer

## Motivation

to publish once and have accurate details propagate to major local calendars (CultureWorks, Venture Richmond, VPM/Style, VisitRichmondVA)

## Outcome

focus on programming instead of duplicative submissions and corrections

## Current Workaround

Manually submit events to multiple portals (CultureWorks, Venture Richmond submit form, Style Weekly which feeds VPM Artsline), email media, post on Facebook/IG/Eventbrite.

## Core Pain

Duplicated effort, inconsistent fields/requirements, slow updates, and no simple sync from city permits to community calendars.


# Data Questions

## Question

Which sources provide bulk or structured feeds/APIs (e.g., CultureWorks, Venture Richmond, VisitRichmondVA, VPM/Style Weekly, Richmond.com), and what are their terms for reuse/scraping?

## Justification

This question is paramount for the project's success because the core function of 'vecina' is to aggregate event information. Determining whether primary local sources offer structured data via APIs or feeds, and under what conditions, dictates the entire technical approach, feasibility, and legality of the data aggregation strategy. It is the foundational step before any development can begin.


# User Questions

## Question

Which neighborhoods and demographics are currently underserved by existing calendars (e.g., Southside vs. Downtown/Scott’s Addition), and what are their preferred channels for discovering information?

## Justification

This question is critical for building a user-centric tool because its answer will define the primary target audience and guide the platform's outreach and design strategy. To succeed, 'vecina' must not replicate the blind spots of existing platforms like Venture Richmond (downtown-focused) or Style Weekly. By identifying underserved communities and understanding their specific information-seeking behaviors (e.g., relying on local Facebook groups, library flyers, or word-of-mouth), the project can tailor its features and marketing to effectively reach and serve those residents, thereby closing the information gap and fulfilling its community-focused mission.


# Integration Questions

## Question

Can vecina offer a single submission that syndicates to Style Weekly (feeding VPM Artsline), CultureWorks, Venture Richmond, and VisitRichmondVA via APIs or email bridges?

## Justification

This question is critical for technical feasibility and collaboration because it addresses the 'Systems/Coordination JTBD' for event organizers. A successful syndication feature would solve a major pain point (duplicative data entry), encouraging adoption by event creators and making 'vecina' an indispensable tool in the ecosystem, thereby ensuring a steady stream of content for the platform.


# Equity Questions

## Question

How will vecina remain usable for residents with slower internet or mobile-only access, and can it incorporate low-bandwidth or SMS options to serve the ~9.7% of Richmond households without an internet subscription?

## Justification

This question is fundamental to ensuring the tool is equitable and serves all of Richmond's communities. The provided data indicates a significant digital divide in the city. A tool that requires a high-speed internet connection would inherently exclude nearly 10% of residents, plus others with slow or mobile-only access, undermining the project's goal of inclusive event discovery. By proactively considering low-bandwidth design and alternative channels like SMS, 'vecina' can bridge this gap and ensure that access to arts and culture is not dependent on a resident's socioeconomic status or digital literacy, aligning with the city's pillar of inclusive storytelling.


# Prior Art Questions

## Question

Where do current calendars excel vs. fall short: CultureWorks’ broad arts coverage, Venture Richmond’s downtown focus, Style Weekly/VPM’s media reach, VisitRichmondVA’s visitor lens, and The Richmond Experience’s curation? What unique gap will vecina own (hyperlocal, equity-first, permit-to-calendar automation, transit-aware recommendations)?

## Justification

This question is crucial for understanding the market and finding a unique value proposition. By systematically analyzing the strengths and weaknesses of existing solutions, the project can define a specific, underserved niche (e.g., hyperlocal events, equity focus) and avoid directly competing where others are already strong, which is essential for the project's strategic positioning and long-term viability.

