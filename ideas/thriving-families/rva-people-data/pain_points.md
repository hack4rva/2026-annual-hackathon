# Executive Summary

The maternal health data ecosystem in Richmond, VA, is characterized by critical inefficiencies and a significant trust deficit among stakeholders. A Jobs To Be Done (JTBD) analysis reveals that users, from public health analysts to community leaders, grapple with a fragmented data landscape. The primary functional challenge is the immense manual effort and duplicated work required to reconcile inconsistent maternal health metrics from disparate sources, including various Virginia Department of Health (VDH) dashboards and static reports. This process results in considerable time lags and conflicting data points. On an emotional level, this data fragmentation erodes confidence, instilling a fear among program managers of being discredited when presenting findings to funders and community partners. Systemically, the absence of an automated, centralized method for updating and sharing metric definitions leads to version control problems, widespread rework across different agencies, and delays in achieving consensus on vital health indicators.

# Project Context

## Project Name

rva-people-data

## Guiding Pillar

Thriving Families

## Problem Statement

Maternal Health Data Coordination – Reduce duplicated data analysis across agencies for shared consistent metrics.

## Project Description

Data coordination tool for Richmond’s maternal health ecosystem to align metrics across agencies.


# Jobs To Be Done Summary

The core job for a public health data analyst or program evaluator in Richmond's maternal health sector is to produce timely and consistent reports to track health disparities and inform interventions. Their motivation is to access a single, trusted set of maternal and child health indicators, filtered by specific geographies like Richmond/Henrico and demographic factors like race/ethnicity. The desired outcome is to avoid the current, painful process of manual data reconciliation. The primary functional pain stems from a fragmented data landscape where they must manually copy metrics from multiple VDH dashboards and reports, leading to duplicated analysis, time lags, and inconsistent trend lines. This is exacerbated by mismatched definitions for geography and race, as well as suppressed data for small populations. Emotionally, this unreliability creates a significant trust deficit; when presenting findings to community partners and funders, these professionals fear being discredited due to the conflicting and untrustworthy nature of the data they are forced to use.

# User Persona Definitions

## Persona Title

Public Health Data Analyst/Program Evaluator

## Description

Responsible for pulling, analyzing, and reporting on maternal and child health indicators for the Richmond/Henrico area. Their work involves briefing leadership, planning interventions, and tracking health disparities by neighborhood and race/ethnicity.

## Key Pain Points

Faces a fragmented data landscape with multiple inconsistent sources (VDH dashboards, PRAMS PDFs). Key challenges include mismatched metric definitions (e.g., geography, race), data suppression for small numbers which hides trends, significant time lags in data availability, and a lack of a centralized, accessible data repository.

## Current Workarounds

Manually copies and pastes metrics from various dashboards and reports into spreadsheets. They must request CSVs via forms, email analysts at different agencies to clarify definitions, and attempt to reconcile conflicting data regarding geography and race groupings by hand.

## Persona Title

Program Manager/Community Organization Leader

## Description

Responsible for presenting maternal health findings and program impact to community partners and funders to secure resources, build trust, and advocate for community needs.

## Key Pain Points

Experiences a fear of being discredited due to presenting inconsistent or conflicting data. This erodes credibility with funders and partners, makes it difficult to demonstrate local program impact, and hinders the ability to accurately assess and communicate the true level of need in the community.

## Current Workarounds

Struggles with presenting conflicting information from different sources, which undermines their arguments for funding and support. They must spend significant effort trying to build a coherent narrative around inconsistent data, which can delay or jeopardize funding and partnerships.

## Persona Title

Frontline Worker / Home-Visiting Program Staff

## Description

Provides direct services and support to families. They require actionable, localized data to inform their day-to-day work, including identifying at-risk populations and tailoring interventions to specific client needs.

## Key Pain Points

Difficulty in identifying and targeting the most vulnerable families due to the lack of granular, neighborhood-level data. The available data is often not presented in an easily digestible or actionable format. They also face challenges in demonstrating their program's impact to funders, which can threaten funding and service expansion.

## Current Workarounds

Operates with less efficiency due to the lack of targeted data, potentially leading to a misallocation of resources and a failure to reach those most in need. The lack of clear data to demonstrate impact requires more anecdotal evidence when reporting to funders.


# Public Health Analyst Pain Points

### Pain Point Analysis for Public Health Data Analyst/Program Evaluator

This persona is at the center of the functional challenges within Richmond's maternal health data ecosystem. Their primary job is to produce timely and consistent reports to track disparities and inform interventions, but they are hindered by a series of significant data-related obstacles.

**1. Fragmented and Inconsistent Data Landscape:**
*   **Evidence:** Analysts must manually collate data from a variety of disparate sources, including multiple Virginia Department of Health (VDH) dashboards (e.g., Maternal and Child Health Indicators, Maternal Mortality), static PDF reports like the PRAMS (Pregnancy Risk Assessment Monitoring System) data, and CSVs requested via forms. 
*   **What Breaks:** This fragmentation leads to conflicting data points. Metrics like geographic definitions (health district vs. locality vs. city) and race/ethnicity groupings are not standardized across sources, resulting in inconsistent trend lines and mismatched numbers that require manual reconciliation.

**2. Data Suppression and Lack of Granularity:**
*   **Evidence:** The VDH PRAMS data, for example, suppresses any data elements with fewer than 10 observations. While intended for confidentiality, this practice makes it nearly impossible to analyze trends or disparities in smaller geographic areas (like specific neighborhoods) or for specific demographic subgroups.
*   **What Breaks:** This prevents analysts from identifying hyper-local hotspots of need, which is critical for targeted interventions. It particularly obscures the health realities of smaller, marginalized communities, directly impacting health equity analysis.

**3. Lack of Timely Data:**
*   **Evidence:** The process of manually gathering, cleaning, and reconciling data introduces significant delays. Furthermore, the publication schedules of official sources can have a considerable lag; the report notes a comparable two-year lag for data from the Maryland Department of Health.
*   **What Breaks:** Analyses are often based on outdated information. This forces a reactive rather than proactive approach to public health, as interventions are planned based on old trends, potentially missing emergent issues.

**4. Current Workarounds and Costs:**
*   **Workarounds:** The current process is highly manual and inefficient. It involves copying and pasting data into spreadsheets, emailing colleagues in different agencies to get clarification on metric definitions, and attempting to reconcile inconsistencies by hand.
*   **Cost of Status Quo:** This results in massive duplication of effort and widespread rework across different agencies and organizations. The primary cost is the significant delay in producing actionable insights, leading to missed opportunities for early intervention, potential misallocation of resources, and a diminished capacity to address urgent maternal health disparities effectively.

# Program Manager Pain Points

### Pain Point Analysis for Program Manager/Community Organization Leader

This persona's challenges are rooted in the emotional and relational consequences of a broken data system. Their ability to advocate, secure funding, and build collaborative trust is directly undermined by the poor quality and inconsistency of available maternal health data.

**1. Eroded Credibility and Fear of Being Discredited:**
*   **Evidence:** The JTBD summary explicitly identifies the core emotional pain point: a 'fear among program managers of being discredited when presenting data to funders and community partners.' They are often forced to present findings based on conflicting information from different sources.
*   **What Breaks:** This erodes trust. When partners and funders see inconsistent numbers, it undermines the manager's credibility and the urgency of their message. It creates a perception of incompetence or, worse, a deliberate misrepresentation of the facts, jeopardizing relationships and funding.

**2. Inability to Demonstrate Local Impact:**
*   **Evidence:** The research report highlights that the 'lack of consistent and reliable data makes it difficult for home-visiting programs to demonstrate their impact to funders and stakeholders.'
*   **What Breaks:** Without solid data, managers cannot effectively prove their programs are working. This makes it difficult to justify current funding, let alone argue for expansion. Their success becomes a matter of anecdote rather than evidence, which is a weak position in competitive funding environments.

**3. Difficulty Accessing Usable Data and Assessing True Need:**
*   **Evidence:** The data that is available is often not in a usable format for presentations (e.g., static PDFs, inconsistent spreadsheets). Furthermore, the lack of comprehensive and reliable data makes it 'difficult to assess the true extent of the maternal health crisis in Richmond.'
*   **What Breaks:** This prevents managers from painting a clear, compelling picture of the problem. If the scale of the need is obscured by poor data, it can lead to a downplaying of the issue and a failure to allocate sufficient resources from funders and government bodies. This directly harms the communities they serve, particularly marginalized groups whose struggles are hidden by data suppression and a lack of granularity.

# Frontline Worker Pain Points

### Pain Point Analysis for Frontline Worker (e.g., Home-Visiting Staff)

Frontline workers are the direct link to the community, and their effectiveness depends on having practical, timely, and localized information to guide their interactions and interventions. The current data ecosystem fails to provide them with the actionable intelligence they need.

**1. Difficulty Identifying and Targeting At-Risk Populations:**
*   **Evidence:** The research report states that 'without granular, neighborhood-level data, it is challenging for home-visiting programs to identify and target the most vulnerable families.'
*   **What Breaks:** This leads to inefficient and inequitable service delivery. Staff may not be able to proactively find the families who need their help the most, resulting in a reactive model where they only serve those who are already connected or referred. This can lead to a 'less efficient allocation of resources and a failure to reach those most in need,' perpetuating health disparities.

**2. Lack of Actionable, Digestible Data:**
*   **Evidence:** The available data is 'often not presented in a way that is easily digestible or actionable for program staff.' They need 'clear, concise information that can inform their day-to-day work.'
*   **What Breaks:** High-level, city-wide statistics or complex data dashboards are not useful for a home visitor trying to understand the specific risks and resource needs of a family in a particular neighborhood. They cannot easily translate the data into tailored advice, resource referrals, or specific support plans for their clients. The data fails to bridge the gap between population-level trends and individual-level care.

**3. Challenges in Demonstrating Client-Level Impact:**
*   **Evidence:** Similar to program managers, the 'lack of consistent and reliable data makes it difficult for home-visiting programs to demonstrate their impact.'
*   **What Breaks:** While managers worry about this from a funding perspective, for frontline staff, this can be demoralizing and professionally frustrating. They see the positive changes in the families they work with but lack the data to formally document and report this success. This disconnect can impact program morale and makes it harder to advocate for the continuation or expansion of specific successful practices within their own organization.

# Current Workarounds And Costs

Users, particularly public health data analysts and program evaluators, currently employ a series of time-consuming and error-prone workarounds to navigate Richmond's fragmented maternal health data ecosystem. The primary workaround involves manually copying and pasting metrics from multiple disparate sources—such as the VDH MCH Indicators dashboard, maternal mortality reports, and static PRAMS PDFs—into spreadsheets for reconciliation. This manual process is supplemented by requesting CSV files via forms and emailing analysts in different agencies to clarify metric definitions and understand inconsistencies. They also manually attempt to reconcile differing geographic boundaries (e.g., health district vs. locality) and race/ethnicity groupings. The costs of this status quo are substantial. It leads to significant duplicated analysis and rework across various agencies. The process introduces considerable time lags, delaying the production of timely reports and hindering the ability to conduct proactive interventions. This inefficiency results in a reactive public health posture, missed opportunities for early intervention, and a potential misallocation of critical resources. Furthermore, the constant need to reconcile conflicting numbers erodes confidence in the data, creating fear among program managers that their findings will be discredited by funders and community partners.

# Evidence Of Data Fragmentation

The maternal health data ecosystem in Richmond, Virginia, is characterized by significant fragmentation, forcing stakeholders to consult multiple, non-integrated sources to piece together a comprehensive picture. Evidence for this is found in the daily workflows of public health analysts and program staff. They cannot rely on a single source of truth and must instead manually pull data from a variety of disparate systems. Key examples of these fragmented sources include the Virginia Department of Health (VDH) MCH Indicators dashboard, the separate VDH maternal mortality reports, and static, non-interactive PRAMS (Pregnancy Risk Assessment Monitoring System) PDF reports. The fact that these sources are not integrated means there is no automated way to reconcile metrics, definitions, or geographic boundaries between them, leading directly to the core problem of duplicated analysis and inconsistent reporting.

# Key Data Inconsistencies

## Inconsistency Type

Geographic Definitions

## Description

Data from different sources is often aggregated using varying geographic boundaries, such as health districts, cities, or counties. This makes it extremely difficult to compare data across sources, track trends for a specific locality, or perform neighborhood-level analysis. Users must manually attempt to reconcile these different geographic groupings, which is inefficient and can lead to conflicting trend lines and conclusions.

## Example

Maternal health data may be available aggregated by 'Health District' in one report, while another source provides data by 'Locality' (e.g., the independent City of Richmond vs. Henrico County). This creates a mismatch that prevents direct comparison and consistent analysis for a specific area.


# Virginia Data Landscape Overview

## Source Name

VDH MCH Indicators Dashboard

## Source Type

Interactive Dashboard

## Data Provided

The dashboard provides a set of maternal and child health (MCH) indicators for Virginia. Users attempt to use it to pull trusted metrics, with the ability to filter by locality (such as Richmond/Henrico) and health district, to support reports and track health disparities by factors like race and ethnicity.

## Known Limitations

A primary limitation is that it is not integrated with other critical maternal health data sources, such as maternal mortality reports or PRAMS data, forcing users to consult multiple systems. It suffers from inconsistencies in definitions and geographic boundaries when compared to these other sources. Furthermore, like other VDH sources, it is subject to data suppression rules for small numbers (small-n data), which hinders the analysis of trends in smaller communities or specific demographic groups. While it may offer data downloads, the process is not always straightforward, and it lacks a robust API for easy integration into other analytical tools.


# Cross Cutting Equity Dimensions

The challenges within Richmond's maternal health data ecosystem have significant equity implications, disproportionately affecting marginalized communities. The primary issues are the fragmentation of data, inconsistencies across sources, and the lack of granular data at the neighborhood level. These problems are compounded by the practice of suppressing data for small numbers to protect confidentiality. 

**Who is most affected?**
*   **Black and Hispanic Populations:** These communities, which already face higher rates of maternal and infant mortality, are most affected by the data gaps. The inability to accurately track and analyze health outcomes by race and ethnicity prevents the development and implementation of targeted interventions designed to address their specific needs.
*   **Low-Income Communities:** Similar to racial and ethnic minorities, low-income communities are obscured by the lack of granular and socioeconomic data. This makes it difficult to direct resources and programs to the areas and populations with the greatest need.

**Who is excluded?**
*   **Populations in Small Geographic Areas:** Data suppression for small numbers effectively erases the experiences of people in smaller neighborhoods or specific demographic subgroups from the official record. This makes it impossible to identify localized health crises or track the effectiveness of interventions in these areas.

This lack of reliable, detailed data perpetuates a cycle of health inequity. It hinders advocacy efforts, as program managers and community leaders fear being discredited by funders and partners when they present data that is inconsistent or incomplete. Without a trusted, comprehensive view of the disparities, it is difficult to make a compelling case for the necessary resources and policy changes to improve maternal health outcomes for all.

# Comparable City Initiatives

## City

Baltimore, MD

## Initiative Name

B'more for Healthy Babies

## Key Features

The initiative emphasizes data-informed decision-making and utilizes neighborhood-level data to effectively identify and address health disparities. This approach allows for more targeted interventions.

## Relevance For Richmond

The B'more for Healthy Babies initiative serves as a model for how Richmond can leverage granular, neighborhood-level data to drive decision-making and tackle disparities in maternal health. It highlights the importance of moving beyond city-wide or district-level metrics to understand localized needs. Richmond can also learn from Baltimore's shared challenges, such as dealing with data lags from state health departments, to anticipate similar obstacles and develop strategies to mitigate them.


# Strategic Questions For Project

For the rva-people-data project to successfully address the maternal health data coordination problem in Richmond, it must resolve several core strategic questions:

1.  **Source of Truth:** How will the project establish and maintain a definitive, trusted source of truth for core maternal health indicators, resolving conflicts between different data sources?
2.  **Data Governance & Definitions:** What governance model will be created to keep metric definitions synchronized among all partner agencies? How will the project develop and enforce clear protocols for handling suppressed small-number data and inconsistencies in geographic definitions (e.g., health district vs. city vs. neighborhood)?
3.  **User-Centric Outputs:** Based on a deep understanding of primary user needs (from epidemiologists to program staff), what specific, user-friendly outputs will be prioritized? This includes formats like slide-ready charts, downloadable datasets, and APIs.
4.  **Trust and Transparency:** How will the project build trust with its users and stakeholders? This involves securing endorsements from key agencies like the Virginia Department of Health (VDH) and being transparent about data sources, methodologies, and refresh cadences.
5.  **System Integration:** What is the strategy for integrating with existing state and local data systems to ensure data flows are efficient and not duplicative?
6.  **Equity-Focused Reporting:** How will the project present sensitive, equity-focused data (e.g., disaggregated by race and income proxies) in a responsible manner that informs action without stigmatizing communities?
7.  **Project Positioning:** How will the project function as a local coordination layer that complements, rather than duplicates, the efforts of state-level data initiatives?

# Recommendations For Project Outputs

## Output Type

Slide-Ready Charts

## Description

Pre-formatted, downloadable charts and graphs that visualize key maternal health indicators. This addresses the need for stakeholders to quickly and easily incorporate trusted, consistent data into briefings for leadership, reports for funders, and presentations for community partners.

## Target Persona

Public Health Data Analyst/Program Evaluator

## Output Type

Downloadable CSVs

## Description

Clean, well-documented, and regularly updated datasets available for download in CSV format. This directly replaces the current time-consuming and error-prone workaround of manually copying data from multiple sources into spreadsheets, enabling deeper, custom analysis.

## Target Persona

Public Health Data Analyst/Program Evaluator

## Output Type

Neighborhood-Level Maps

## Description

Interactive maps that visualize maternal health data at a granular, neighborhood level. This provides actionable insights for programmatic staff to identify at-risk populations, target interventions more effectively, and allocate resources efficiently.

## Target Persona

Home-Visiting Program Staff

## Output Type

API

## Description

An Application Programming Interface (API) that allows partner agencies and other systems to programmatically access the centralized, trusted set of maternal health indicators. This facilitates automation, reduces duplicated data entry, and ensures consistency across different platforms and tools.

## Target Persona

Public Health Data Analyst/Program Evaluator

