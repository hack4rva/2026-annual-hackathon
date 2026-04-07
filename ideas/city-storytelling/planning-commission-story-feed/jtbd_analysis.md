# Project Analysis Summary

The 'planning-commission-story-feed' project in Richmond, VA, aims to bridge the gap between resident experiences and the formal urban planning process. A Jobs To Be Done (JTBD) analysis reveals three key stakeholder needs: 1) For city planners, the project serves a functional job of efficiently surfacing verified resident stories to enrich staff reports for rezoning cases. 2) For residents, it addresses an emotional/trust job by providing a trusted, transparent channel to share their lived experiences and feel heard by decision-makers. 3) For the planning system, it fulfills a coordination job by creating a structured feed of narratives linked to case data, enabling better alignment and equity analysis. Key open questions for the project's success are categorized across several domains. Data questions focus on integrating with city systems like Legistar and defining the right geographic and case metadata. User questions explore resident participation barriers and what is needed to build trust. Integration questions address how the story feed will fit into existing staff workflows and agenda platforms. Equity questions are paramount, focusing on proactive outreach to underrepresented communities and mitigating potential harms. Finally, Prior Art/Governance questions examine existing policies and successful examples from other cities.

# Functional Job To Be Done

## Situation

When a rezoning case is docketed for a Planning Commission meeting

## Persona

City planner/staff report author

## Motivation

to quickly surface verified resident stories tied to the affected parcels and neighborhoods

## Outcome

produce a concise Community Voices brief that complements the staff report and aligns with Richmond 300 and Code Refresh

## Current Workaround

Manually scan Legistar attachments, past emails to the Clerk or Council offices, ad hoc notes from community meetings, and scattered social posts; occasionally call neighborhood association leaders.

## Core Pain Point

Stories are fragmented across systems; time-constrained staff can’t systematically verify, contextualize, or map them to the case boundary; equity voices underrepresented.


# Emotional Trust Job To Be Done

## Situation

When I’m deciding whether and how to speak on a rezoning near me

## Persona

Richmond resident

## Motivation

a trusted way to submit my lived experience and see that it appears in Planning Commission prep materials

## Outcome

feel heard, safer participating, and confident my input matters

## Current Workaround

Sign up to speak at public hearing (in-person or Teams), email the Clerk for inclusion in Legistar, or post on social media/neighborhood listservs.

## Core Pain Point

Unclear if/where comments are seen before deliberation; intimidating process jargon/timelines; written comments buried in long agenda packets; limited feedback loop.


# Systems Coordination Job To Be Done

## Situation

When coordinating across PDR, Clerk, and Code Refresh/ZAC timelines

## Persona

Planning Commission liaison/analyst

## Motivation

a structured feed of resident narratives linked to case metadata (case number, parcels, plan policies)

## Outcome

align recommendations, flag equity impacts, and brief commissioners efficiently

## Current Workaround

Cross-referencing Legistar, internal trackers, and Richmond 300 policy PDFs; bespoke memos to commissioners.

## Core Pain Point

Duplicate effort; inconsistent tagging (district, small area plans, equity themes); last-minute scramble to synthesize engagement signals.


# Data Questions

- What minimum case metadata from Legistar/EnerGov (case ID, parcels, applicant, staff contact, small area plan references) must the story feed ingest to reliably attach stories to docketed rezoning items?
- Can the feed safely pull and display written public comments submitted to the City Clerk for public hearings (email to CityClerksOffice@rva.gov) while preserving submission context and timing?
- What geographies should index stories (parcel, buffer radius, Council district, neighborhood association area, Richmond 300 small area, HOLC grade overlays) to support equity analysis?

# User Questions

- Which resident pathways are most used today (speaking in person/Teams, emailing the Clerk, contacting councilmembers, neighborhood groups) and what friction points deter participation before the hearing?
- What proof-of-inclusion do residents need (receipt, preview, timestamp) to build trust that their story will appear in a Community Voices brief?
- What review/consent options should be offered (name vs. alias, contact info redaction, photo/audio permissions) to protect residents?

# Integration Questions

- How will the story feed integrate with Legistar agendas so commissioners see a Community Voices brief adjacent to the staff report for each case?
- Can staff workflow hook into EnerGov or internal PDR review steps to trigger story collection at “case docketed” and freeze inputs at a defined cutoff before the meeting?
- What structured fields should the brief include (themes, counts, representative quotes, equity flags, map) and who signs off (PDR staff vs. Clerk vs. CPC chair)?

# Equity Questions

- How will the feed proactively reach residents in historically redlined or high-eviction areas, and offer low-barrier channels (SMS, phone line, paper drop) and multilingual support?
- How will we mitigate over-representation by well-resourced groups and ensure weighting or transparent caveats about who was reached (demographic and place-based summaries)?
- What safeguards are needed to avoid doxxing or retaliation when stories concern landlords, employers, or sensitive topics (evictions, displacement, safety)?

# Prior Art Questions

- Which internal policies govern inclusion of public narrative content in official meeting packets (rules of procedure, records retention), and what precedent exists for third-party submissions attached via Legistar?
- What examples from other cities’ planning bodies (e.g., narrative briefs appended to staff reports or participatory input summaries) should inform Richmond’s template and legal review?

# Key Personas

## Name

City Planner/Staff Report Author

## Description

A professional staff member within Richmond's Department of Planning and Development Review (PDR) responsible for analyzing rezoning cases and authoring the official staff reports that provide recommendations to the Planning Commission.

## Primary Goal

To quickly surface verified resident stories tied to affected parcels and neighborhoods, in order to produce a concise 'Community Voices' brief that complements the staff report and aligns with the Richmond 300 Master Plan and Code Refresh initiatives.

## Name

Richmond Resident

## Description

A member of the public living in Richmond who may be directly or indirectly impacted by a proposed rezoning. This persona wants to participate in the civic process but may find the current methods intimidating, unclear, or ineffective.

## Primary Goal

To find a trusted and accessible way to submit their lived experience regarding a rezoning case and see tangible proof that their input is included in the materials reviewed by the Planning Commission, thereby feeling heard and confident that their perspective matters.

## Name

Planning Commission Liaison/Analyst

## Description

An individual tasked with coordinating information across various city departments, such as the Planning and Development Review (PDR) and the City Clerk's office, and ensuring Planning Commissioners are efficiently briefed on all aspects of a case.

## Primary Goal

To utilize a structured feed of resident narratives that are linked to specific case metadata (like case number and parcel information) to align recommendations, flag potential equity impacts, and streamline the process of briefing commissioners.


# Richmond Planning Process Context

The current Richmond Planning Commission process for rezoning cases is a structured, multi-step procedure heavily reliant on the city's Legistar portal. When a rezoning application is submitted, the Department of Planning and Development Review (PDR) staff analyzes the request. They produce a formal 'Staff Report' which includes their analysis, how the proposal aligns with the Richmond 300 Master Plan, and an official recommendation for approval or denial. This report, along with the case details, is published on the Legistar system ahead of a scheduled Planning Commission meeting. The public has several avenues for input. They can attend the public hearing for the specific agenda item, either in person or virtually, to provide spoken testimony. Alternatively, residents can submit written comments to the City Clerk's office via email. These written comments are then collected and attached to the relevant legislation on Legistar, becoming part of the official public record. The Planning Commission reviews the staff report, all public comments (both spoken and written), and other attachments on Legistar before deliberating and making a formal recommendation to the City Council, which holds the final authority on the rezoning. The 'planning-commission-story-feed' project aims to integrate into this process by providing a 'Community Voices' brief as an additional, synthesized attachment on Legistar, appearing alongside the staff report to give commissioners a more holistic view of resident experiences.

# Existing Engagement Landscape

Richmond, VA's public engagement landscape is a mix of traditional formal processes and newer, initiative-specific outreach efforts. The primary, established channels for public input on planning matters are the public hearings held by the Planning Commission and City Council, and the ability to submit written comments to the City Clerk's office, which are then attached to the case file on the Legistar portal. Beyond these, the city undertakes targeted engagement for major projects. A key example is 'Code Refresh,' a comprehensive overhaul of the city's zoning ordinance, which involves its own series of virtual and in-person engagement events where residents can speak directly with city planners. This initiative runs parallel to the standard case-by-case rezoning process. The proposed 'planning-commission-story-feed' project is designed to fit within this landscape by addressing a specific pain point: the fragmentation and inaccessibility of resident narratives. While residents can currently submit comments, their stories are often buried in long agenda packets or lost across various platforms. The new project would not replace existing channels but would augment them by creating a dedicated, trusted pathway for 'lived experiences' and synthesizing them into a 'Community Voices' brief. This brief would serve as a new, structured form of input that is more visible and directly linked to specific rezoning cases, aiming to make qualitative, narrative data a more integral part of the decision-making process.

# Historical Equity Considerations

Richmond's history is deeply marked by systemic inequities in housing and planning, which provides a critical backdrop for the 'planning-commission-story-feed' project. The city has a well-documented history of redlining, as visualized by the 'Mapping Inequality' project, which shows how federal housing policies in the 20th century systematically devalued and denied investment in predominantly Black neighborhoods. This legacy of segregation and disinvestment continues to impact the city's social and economic geography today. Compounding this historical context is a severe, ongoing housing crisis. According to data from the Eviction Lab, Richmond has one of the highest eviction rates in the United States, ranking second in the nation with a rate of 11.44%. This indicates a high degree of housing instability and precarity, particularly for low-income residents and communities of color. The 'planning-commission-story-feed' project's focus on equity is a direct response to this context. By aiming to give residents a trusted way to share their 'lived experiences'—which may include stories of displacement, housing insecurity, and neighborhood change—the project seeks to elevate voices that have been historically marginalized or are currently at high risk. The project explicitly considers using equity overlays like historical HOLC grades and current eviction patterns to contextualize resident stories and ensure that decisions on new development and rezoning are made with a full understanding of their potential impact on vulnerable populations.

# Alignment With Richmond 300 Plan

The 'planning-commission-story-feed' project aligns directly with several key strategic goals of the Richmond 300 Master Plan, the city's guiding document for growth and development. The project's fundamental premise is rooted in the plan's pillar, 'A City That Tells Its Stories,' by creating a formal mechanism to collect and amplify the personal narratives and lived experiences of residents within the civic decision-making process. Furthermore, the project is a practical implementation of 'Goal 5: Planning Engagement' from the master plan. This goal explicitly calls for fostering 'a planning engagement culture that effectively and equitably builds people's capacity to organize to improve the city and their neighborhoods.' By providing a more accessible, trusted, and visible channel for input, the story feed aims to lower barriers to participation and ensure that a wider range of voices, particularly those from historically underrepresented communities, are heard. The Planning Commission explicitly uses the Richmond 300 plan as a guide when evaluating rezoning cases, and this project would provide qualitative data that directly speaks to the plan's vision for equitable development and community involvement. The project also supports the 'Code Refresh' initiative, which is one of the 'Big Moves' mandated by the Richmond 300 plan, by ensuring that as the city rewrites its zoning code, the process is informed by the real-world impacts on its residents.

# Full Report Markdown

### Jobs To Be Done (JTBD) for planning-commission-story-feed (Richmond, VA)

**1) Functional JTBD**
- **When** a rezoning case is docketed for a Planning Commission meeting, **I** (City planner/staff report author) **want to** quickly surface verified resident stories tied to the affected parcels and neighborhoods, **so I can** produce a concise Community Voices brief that complements the staff report and aligns with Richmond 300 and Code Refresh.
  - **Current workaround**: Manually scan Legistar attachments, past emails to the Clerk or Council offices, ad hoc notes from community meetings, and scattered social posts; occasionally call neighborhood association leaders.
  - **Core pain**: Stories are fragmented across systems; time-constrained staff can’t systematically verify, contextualize, or map them to the case boundary; equity voices underrepresented.

**2) Emotional/Trust JTBD**
- **When** I’m deciding whether and how to speak on a rezoning near me, **I** (Richmond resident) **want** a trusted way to submit my lived experience and see that it appears in Planning Commission prep materials, **so I can** feel heard, safer participating, and confident my input matters.
  - **Current workaround**: Sign up to speak at public hearing (in-person or Teams), email the Clerk for inclusion in Legistar, or post on social media/neighborhood listservs.
  - **Core pain**: Unclear if/where comments are seen before deliberation; intimidating process jargon/timelines; written comments buried in long agenda packets; limited feedback loop.

**3) Systems/Coordination JTBD**
- **When** coordinating across PDR, Clerk, and Code Refresh/ZAC timelines, **I** (Planning Commission liaison/analyst) **want** a structured feed of resident narratives linked to case metadata (case number, parcels, plan policies), **so I can** align recommendations, flag equity impacts, and brief commissioners efficiently.
  - **Current workaround**: Cross-referencing Legistar, internal trackers, and Richmond 300 policy PDFs; bespoke memos to commissioners.
  - **Core pain**: Duplicate effort; inconsistent tagging (district, small area plans, equity themes); last-minute scramble to synthesize engagement signals.

---

### Open Questions (Richmond-specific)

**Data**
1. What minimum case metadata from Legistar/EnerGov (case ID, parcels, applicant, staff contact, small area plan references) must the story feed ingest to reliably attach stories to docketed rezoning items?
2. Can the feed safely pull and display written public comments submitted to the City Clerk for public hearings (email to CityClerksOffice@rva.gov) while preserving submission context and timing?
3. What geographies should index stories (parcel, buffer radius, Council district, neighborhood association area, Richmond 300 small area, HOLC grade overlays) to support equity analysis?

**User**
4. Which resident pathways are most used today (speaking in person/Teams, emailing the Clerk, contacting councilmembers, neighborhood groups) and what friction points deter participation before the hearing?
5. What proof-of-inclusion do residents need (receipt, preview, timestamp) to build trust that their story will appear in a Community Voices brief?
6. What review/consent options should be offered (name vs. alias, contact info redaction, photo/audio permissions) to protect residents?

**Integration**
7. How will the story feed integrate with Legistar agendas so commissioners see a Community Voices brief adjacent to the staff report for each case?
8. Can staff workflow hook into EnerGov or internal PDR review steps to trigger story collection at “case docketed” and freeze inputs at a defined cutoff before the meeting?
9. What structured fields should the brief include (themes, counts, representative quotes, equity flags, map) and who signs off (PDR staff vs. Clerk vs. CPC chair)?

**Equity**
10. How will the feed proactively reach residents in historically redlined or high-eviction areas, and offer low-barrier channels (SMS, phone line, paper drop) and multilingual support?
11. How will we mitigate over-representation by well-resourced groups and ensure weighting or transparent caveats about who was reached (demographic and place-based summaries)?
12. What safeguards are needed to avoid doxxing or retaliation when stories concern landlords, employers, or sensitive topics (evictions, displacement, safety)?

**Prior Art / Governance**
13. Which internal policies govern inclusion of public narrative content in official meeting packets (rules of procedure, records retention), and what precedent exists for third-party submissions attached via Legistar?
14. What examples from other cities’ planning bodies (e.g., narrative briefs appended to staff reports or participatory input summaries) should inform Richmond’s template and legal review?

---

### Notes tailored to Richmond context
- Use Legistar as the source of truth for agendas and attachments; the Community Voices brief should be an attachment next to the staff report for each rezoning.
- Align summaries to Richmond 300 goals (especially Planning Engagement) and highlight where stories intersect with active Code Refresh priorities (zoning rewrite, form-based elements).
- Equity overlays: include historical HOLC grades and current eviction patterns to contextualize potential displacement concerns near rezonings.
- Participation channels: reflect City Clerk virtual participation instructions and email pathway for written comment inclusion in legislative records.

### Citations
- [Planning Commission page](https://www.rva.gov/planning-development-review/planning-commission)
- [Legistar staff report example](https://richmondva.legistar.com/gateway.aspx?M=F&ID=61e3275f-dc9e-430b-b037-d589d62ccea9.pdf)
- [Richmond 300 Master Plan page](https://www.rva.gov/planning-development-review/master-plan)
- [Code Refresh page](https://rva.gov/planning-development-review/code-refresh)
- [Informational Meeting Guide](https://www.rva.gov/office-city-clerk/informational-meeting-guide)
- [Eviction Lab (Richmond eviction context)](https://evictionlab.org/rankings/)
- [Mapping Inequality (historic redlining context)](https://dsl.richmond.edu/panorama/redlining/#loc=12/37.54/-77.45&city=richmond-va)
