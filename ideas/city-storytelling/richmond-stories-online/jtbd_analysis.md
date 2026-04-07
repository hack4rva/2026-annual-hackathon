# Project Summary

## Project Name

richmond-stories-online

## Governing Pillar

A City That Tells Its Stories (and tells the truth about its past)

## Problem Statement

Residents need a trusted, accessible, and structured way to share their lived-experience stories to inform civic decisions. Current channels like RVA311, public comments, and social media are insufficient as they do not reliably capture nuanced narratives, are difficult to access asynchronously, and fail to structure stories for analysis by location or topic, particularly for historically marginalized communities who may distrust government processes.

## Project Description

A civic storytelling web platform designed to collect and share resident stories, connecting them with historians and city planners. The platform serves as a repository for qualitative insights, allowing residents to record and submit their lived experiences (via voice, text, or photo) with location and topic tags. This structured data helps ensure that neighborhood realities and diverse perspectives inform city policy, planning, and capital projects.


# Functional Job To Be Done

## Situation

When a city department is exploring policy or capital project impacts in specific Richmond neighborhoods

## Persona

a Richmond resident

## Motivation

to easily record and submit my lived-experience story (voice, text, photo) with my location and topic

## Outcome

ensure my neighborhood’s realities inform decisions, not just aggregate data

## Current Workaround

Using RVA311 for service issues which are not narrative-based, speaking at City Council meetings, sending emails to officials, or posting on social media and community forums.

## Core Pain Point

Current methods do not reliably capture nuanced narratives, are difficult to access asynchronously, and fail to structure stories in a way that allows for analysis by location or topic.


# Emotional Trust Job To Be Done

## Situation

When I’ve experienced harm or neglect tied to Richmond’s historical inequities

## Persona

a resident from a historically marginalized community

## Motivation

to have a trusted, safe way to share my story with control over my privacy and how it’s used

## Outcome

be heard without backlash and believe the City will tell the truth about the past and act on it

## Current Workaround

Relying on whisper networks and trusted community-based organizations (CBOs), participating in occasional museum or arts programs, or completely avoiding engagement with city processes.

## Core Pain Point

A pervasive fear of retaliation or stigma, a lack of clarity on how personal stories will actually affect decisions, and a deep-seated historical distrust of government processes and institutions.


# Systems Coordination Job To Be Done

## Situation

When multiple Richmond agencies, planners, and community partners need qualitative insight for their work

## Persona

a city staffer or partner

## Motivation

to access a coordinated repository that tags and aggregates resident stories by neighborhood, topic, and demographics

## Outcome

synthesize themes with quantitative data and effectively report back outcomes to the community and leadership

## Current Workaround

Conducting ad-hoc listening sessions, distributing separate surveys for different projects, manually sifting through email chains, and reviewing public meeting transcripts that are scattered across various systems.

## Core Pain Point

The current process leads to duplicative engagement efforts, renders qualitative data inaccessible for broader analysis, creates limited feedback loops to residents, and results in missed patterns and insights across different city departments.


# Data Questions

- What metadata should be standardized (e.g., Planning District, census tract, Neighborhood Association, Council District) to align with Richmond’s Open Data portal and Planning & Development Review maps?
- How will stories be stored, governed, and shared (open vs. protected) to align with the Office of Equity & Inclusion’s guidance on racial equity and privacy?
- Can the platform export geo-tagged, anonymized datasets compatible with data.richmondgov.com for public dashboards without exposing PII?
- What retention and redaction policies apply to narrative submissions that may include allegations or health/social info?
- How will moderation handle defamation, harassment, or sensitive content while preserving truth-telling?

# User Questions

- Which Richmond neighborhoods and communities (e.g., East End, Southside, Jackson Ward, Hillside Court) should be prioritized for onboarding through trusted partners?
- What language access and accessibility features are required (Spanish, Arabic, ASL captions, screen reader support) per City standards?
- What consent options do residents need (anonymous, private-to-staff, public map, time-limited sharing) to build trust?
- What feedback loop will show residents how their stories influenced specific policies, budgets, or capital projects?
- What offline capture workflows (phone line, pop-up kiosks at libraries/rec centers, partner CBO facilitation) are needed to include residents with limited internet/phone minutes?

# Integration Questions

- How should richmond-stories-online interoperate with RVA311 (distinct from service tickets but able to route certain issues), the City Clerk/Council public comment processes, and the Open Data portal?
- What tagging should align with Mayoral pillars (e.g., “A City That Tells its Stories”) and department programs (Community Wealth Building, Human Services) for internal reporting?
- Can PlanRVA and City Planning leverage stories in corridor/safety plans and small area plans with location overlays?

# Equity Questions

- Which safeguards will protect contributors who report experiences tied to race, immigration status, housing precarity, or interactions with public safety?
- Which equity outcomes will be measured (participation by historically marginalized communities, distribution by neighborhood, action taken) and reported publicly?
- How will the City compensate or recognize community partners/resident narrators for time and emotional labor?

# Prior Art Questions

- What can be learned from The Valentine’s “Richmond Stories” curation regarding sensitive histories and community trust?
- Which existing government engagement tools (e.g., PublicInput, PlanRVA processes) offer features we should replicate or integrate with instead of rebuilding?
