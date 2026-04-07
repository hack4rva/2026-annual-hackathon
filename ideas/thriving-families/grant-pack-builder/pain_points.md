# Project Overview

## Project Name

grant-pack-builder

## Pillar

Thriving Families

## Problem Statement

Maternal Health Data Coordination: Reduce duplicated data analysis across agencies for shared consistent metrics.

## Target Users

The primary user persona is a grant writer at a Community-Based Organization (CBO) in Richmond, VA. Secondary personas include CBO program directors who need to ensure data accuracy and credibility, and data analysts at partner agencies (like RHHD) who aim to standardize metric reporting.

## Data Sources

The tool is intended to pull data from multiple official sources, including various Virginia Department of Health (VDH) dashboards (MCH Indicators, Maternal Mortality, PRAMS), U.S. Census tables, and CDC data. It will also need to reconcile this data with local reports like the Richmond and Henrico Community Health Assessment (CHA).


# Cbo Grant Writer Pain Points

## Manual Data Compilation

Grant writers face the significant challenge of manually assembling data from a wide array of fragmented sources. This includes navigating multiple Virginia Department of Health (VDH) dashboards for MCH indicators, PAMSS/MMRT, and PRAMS, alongside data from the CDC and U.S. Census. The current workaround involves manually copying figures from these disparate dashboards, PDFs of Community Health Assessments (CHA), and various websites, then consolidating them. This process is described as slow, error-prone, and a form of duplicated effort across different organizations.

## Time Consuming Formatting

A substantial amount of time is spent on formatting the compiled data into a presentable document for grant applications. This includes navigating complex tools like those from the Census Bureau to create community demographic profiles, which is acknowledged as challenging and time-consuming for non-analysts. After data extraction, writers must build tables and charts in software like Word or Canva and then integrate them into their proposals, all while under the pressure of deadlines.

## Risk Of Inaccuracy

There is a high risk of introducing inaccuracies due to confusing and inconsistent definitions across data sources. For example, VDH uses several different terms for maternal mortality (maternal death vs. pregnancy-associated vs. pregnancy-related), which can lead to miscitation. Other risks include using non-comparable numerators and denominators (e.g., city vs. county data), mixing data from different years, and making transcription errors during manual data transfer. The VDH itself cautions about interpreting data with small counts, adding another layer of complexity and potential for error.

## Citation Management Burden

Manually tracking and formatting citations for all data points is a significant burden. To ensure their proposals are defensible, grant writers must add extensive footnotes to explain definitional caveats, data limitations (like the inability to stratify PRAMS data for certain localities), or why specific city-level data is missing. This meticulous but necessary process of tracking sources adds considerable time and effort to the grant writing workflow.


# Cbo Director Pain Points

## Data Credibility Concerns

Directors need to have complete trust in the data's accuracy to confidently approve and advocate for grant proposals. They feel pressure to ensure their organization's metrics align with recognized state dashboards and official definitions to maintain credibility. The need to cite defensible sources is paramount, especially when making the case for equity-focused investments, as the data forms the foundation of their argument for funding.

## Fear Of Funder Scrutiny

A significant emotional pain point is the fear of being challenged by funders or board members on the data presented. This anxiety stems from the known complexities, such as the nuanced definitions of maternal mortality used by VDH and the MMRT, or data limitations like the PRAMS locality stratification. A query like 'why your rate doesn’t match VDH/CDC' can undermine a presentation and lead to delays in approvals.

## Equitable Narrative Pressure

Directors are under pressure to ensure the data is framed within a compelling and accurate narrative about community equity. They must responsibly communicate that a high percentage of pregnancy-related deaths are preventable and that Black women face a disproportionately higher risk. This task is made difficult when local, disaggregated data on disparities is unavailable or non-exhaustive, which can weaken their case for targeted services and investments in communities of color.

## Reputational Risk

The director is ultimately responsible for the content of grant submissions, and any errors or misinterpretations of data found post-submission pose a direct risk to the organization's reputation. Flawed data can damage credibility with funders, community partners, and the board, potentially jeopardizing future funding opportunities and collaborations. This risk leads to workarounds like adding extensive methodology appendices or selecting more conservative indicators, which can dilute the proposal's impact.


# Agency Data Lead Pain Points

## Burden Of Repetitive Requests

Agency data leads face a high volume of repetitive, one-off data requests from multiple CBOs for similar metrics, such as maternal mortality rates, SMM, and specific PRAMS data. This is compounded by the need to repeatedly explain dashboard caveats and definitional nuances. This constant stream of similar requests leads to duplicated effort and diverts valuable staff time to handling basic inquiries instead of more strategic data work.

## Metric Standardization Challenge

A core challenge is the need to standardize metrics across the ecosystem. This includes ensuring all CBO partners consistently use the correct definitions for different maternal outcomes (e.g., pregnancy-related vs. pregnancy-associated death) and align their data with state and national comparators. Without a single source of truth, inconsistent metrics are used in the field, undermining collective efforts and creating confusion.

## Inefficient Data Dissemination

The current method of disseminating data is highly inefficient. The lack of a centralized, auto-updating tool means data leads must resort to manual workarounds. These include pointing requestors to various dashboards, providing manual clarifications via email, sending links or static PDF reports, and, in some cases, performing time-consuming custom data extracts. This process is not scalable and creates bottlenecks, particularly when local data gaps require back-and-forth communication.


# Data Definition And Consistency Issues

## Conflicting Term

Maternal Mortality and its related definitions

## Definition A Source

Virginia Department of Health (VDH): 'Pregnancy-associated death' is defined as the death of a woman while pregnant or within one year (365 days) of the end of a pregnancy, irrespective of the cause of death.

## Definition B Source

Virginia Department of Health (VDH): 'Pregnancy-related death' is defined as a pregnancy-associated death resulting from: 1. complications of the pregnancy itself; 2. the chain of events initiated by the pregnancy that led to death; or 3. aggravation of an unrelated condition by the physiological effects of the pregnancy. This is a subset of pregnancy-associated deaths. A third term, 'Maternal death', is also used, defined as a death within 42 days of the end of pregnancy.

## Impact On Reporting

The ambiguity and multiplicity of definitions complicate the creation of defensible and consistent reports. It leads to a high risk of miscitation, such as mixing 'maternal mortality' (≤42 days) with 'pregnancy-related' deaths (≤1 year) in the same analysis. This forces grant writers to spend significant time on over-footnoting and adding methodology appendices to explain caveats. Program directors face anxiety and fear of being challenged by funders or board members who may see conflicting numbers from different sources. This can dilute the strength of an equity narrative, undermine credibility, and lead to conservative use or omission of data, ultimately weakening grant proposals.


# Current Workarounds And Status Quo Costs

## Manual Workflow Description

The current manual workflow involves navigating a fragmented data landscape to gather necessary metrics. Grant writers and analysts manually pull figures from various VDH dashboards (MCH Indicators, PAMSS/MMRT, PRAMS), CDC web pages, and U.S. Census tools. They also extract data from static documents like the Richmond and Henrico Community Health Assessment (CHA) PDFs. This process requires manually reconciling different definitions (e.g., 'pregnancy-associated' vs 'pregnancy-related' death), geographic boundaries (city vs. county vs. health district), and inconsistent timeframes across sources. The gathered data is then compiled into tables using software like Word or Canva, with extensive footnotes added to explain caveats, data limitations (like PRAMS stratification limits), and source information.

## Cost In Staff Time

The status quo incurs significant costs in staff time. The process is described as 'time-consuming' and 'challenging,' particularly for non-analysts who must 'wade through census data.' This leads to lost hours near grant deadlines that could be spent on program development or other high-value tasks. For agency data leads, staff time is diverted from primary analysis to 'education and QA' and handling 'repetitive, one-off data requests' from multiple CBOs for similar metrics, creating a constant drain on resources.

## Risk Of Funding Loss

There is a substantial risk of losing grant funding. Manual data compilation is error-prone, which can lead to 'funder pushback on numbers' or queries from boards about why rates don't match official dashboards. These errors can cause 'delays in approvals' and create 'reputational risk if errors are found post-submission.' The inability to provide clear, defensible, and locally relevant data, especially on racial disparities, can weaken a grant proposal's narrative strength, potentially leading to a failure to secure critical funding for maternal health services.

## Systemic Duplicated Effort

A major cost of the status quo is the systemic duplication of effort across the maternal health ecosystem. The problem statement itself highlights the goal to 'Reduce duplicated data analysis across agencies.' The Agency Data Lead persona directly experiences this through 'Repetitive, one-off data requests from multiple CBOs for similar metrics.' This means multiple organizations are independently spending time and resources to perform the exact same data gathering, cleaning, and reconciliation tasks, representing a significant collective inefficiency for the community.


# Cross Cutting Equity Dimensions

## Most Affected Organizations

Smaller, under-resourced Community-Based Organizations (CBOs) serving communities of color are most affected. These organizations often lack the dedicated staff or data analysis capacity to navigate fragmented data sources and inconsistent definitions. This results in them facing longer wait times for accurate, stratified data, which in turn delays the submission of proposals for critical maternal health services.

## Obscured Health Disparities

The lack of clear, accessible, and consistently stratified data hides the true extent of racial and geographic inequities. When indicators are not disaggregated by race or are unavailable at the city level (as opposed to the broader health district), it can downplay the specific needs within Black communities in Richmond City compared to surrounding areas like Henrico County. This makes it difficult to accurately portray the severity of local disparities to funders and policymakers.

## Evidence Of Disparity

The provided context cites multiple sources confirming significant disparities. According to the CDC, Black women are three times more likely to die from a pregnancy-related cause than White women. Data from various geographies, including the Richmond context, show that Black birthing people bear the highest burden of both pregnancy-related death and severe maternal morbidity. Furthermore, the Richmond and Henrico Health Department (RHHD) acknowledges that public health data shows Black families are at the highest risk for adverse maternal and child health outcomes.

## Excluded Populations

Populations that are excluded or misrepresented include communities that require city-level, race-stratified data when systems like PRAMS cannot provide that level of disaggregation outside of oversampled areas. Additionally, smaller demographic subgroups are often excluded from reports due to data suppression rules for small numbers, rendering their specific health challenges invisible in the data.


# Evidence From Richmond Virginia

## Finding

Inconsistent and confusing definitions of maternal mortality are used across official state sources.

## Source Document

VDH Pregnancy-Associated Deaths Dashboard & PAMSS

## Specific Data Point

Definitions vary: 'Maternal death' is within 42 days, 'Pregnancy-associated death' is within one year irrespective of cause, and 'Pregnancy-related death' is a subset of associated deaths resulting from a pregnancy complication.

## Relevance

This validates the core pain point for grant writers and program directors who risk misinterpreting or misciting data due to the complex and overlapping terminology, undermining the credibility of their proposals.

## Finding

State-level survey data (PRAMS) cannot be easily stratified for specific localities like Henrico, limiting comparisons.

## Source Document

VDH PRAMS Data Dashboards

## Specific Data Point

A note on the dashboard states: 'PRAMS is a state-based survey, currently data can be only stratified by the two local health districts where the program oversamples, Richmond City Health District (RCHD) and Blue Ridge Health District (BRHD).'

## Relevance

This confirms the user pain point of being unable to generate specific local data cuts, forcing grant writers to use broader, less relevant data or omit key comparisons, weakening their narrative.

## Finding

Local health officials acknowledge significant racial disparities in maternal health outcomes.

## Source Document

RHHD (Richmond City Health Department) statement

## Specific Data Point

'Through public health data, we know that our Black families are at the highest risk for adverse maternal and child health outcomes.'

## Relevance

This validates the need for CBOs to have access to reliable, disaggregated data to effectively argue for equity-focused investments and programs.

## Finding

Gaps and inconsistencies exist in available city-level health disparity data.

## Source Document

VPM report on RHHD data

## Specific Data Point

RHHD included a disclaimer that its data summary was 'not meant to be exhaustive [or] methodologically consistent.' The report also noted that 'City-level data was not available in some of the seven areas of health disparities.'

## Relevance

This provides direct evidence for the user pain point of dealing with incomplete local data, which undermines confidence and forces time-consuming workarounds to build a comprehensive picture of community need.

## Finding

A vast majority of pregnancy-related deaths in the U.S. are considered preventable.

## Source Document

RHHD statement / CDC data

## Specific Data Point

'More than 80% of pregnancy-related deaths in the U.S. are preventable.'

## Relevance

This is a critical statistic for CBOs to use in their grant narratives to underscore the urgency and impact of their proposed interventions, validating their need for easily accessible, citable data points.

## Finding

Guidance for grant writers acknowledges the difficulty of navigating data sources.

## Source Document

U.S. Census Bureau & Grant Professionals Association

## Specific Data Point

'The quest for hard and fast proof is real, often requiring grant professionals, who aren’t analysts, to wade through census data, potentially challenging and time consuming.'

## Relevance

This validates the fundamental problem that the grant-pack-builder aims to solve: the significant time and expertise required to gather necessary demographic data for grant applications.


# Analysis Of Comparable Us Cities

## City Name

Allegheny County (Pittsburgh)

## Key Challenge

Addressing data fragmentation to provide consistent and reliable information for community organizations.

## Relevant Report Or Data Source

Allegheny Community Indicators (ACI) interactive dashboards

## Comparison To Richmond

Allegheny County's creation of standardized, centralized community health dashboards demonstrates a solution to the data fragmentation problem that Richmond CBOs currently face. It underscores the value of having a single, reliable source that CBOs can reuse, which is the goal of the grant-pack-builder.

## City Name

Louisville/Kentucky

## Key Challenge

Ensuring data integrity in mortality rate comparisons by adhering to strict, consistent definitions.

## Relevant Report Or Data Source

Kentucky Maternal Mortality Review Committee (MMRC) Report

## Comparison To Richmond

The Kentucky MMRC's caution that comparisons must be limited to 'pregnancy-related deaths' for integrity directly mirrors the definitional confusion and risk of miscitation faced by Richmond users. It highlights a shared need for clear definitions and methodological rigor to maintain credibility.

## City Name

North Carolina (Durham/Wake/Raleigh)

## Key Challenge

Systematically documenting and addressing persistent racial disparities in maternal health outcomes like Severe Maternal Morbidity (SMM).

## Relevant Report Or Data Source

NC Maternal and Infant Health Data Dashboard and Wake County Maternal and Infant Mortality Report

## Comparison To Richmond

North Carolina's state dashboard deliberately selects indicators that can be disaggregated by race and geography. Wake County's report on SMM disparities in Black women reinforces the need for the standardized, equity-focused local metrics that Richmond CBOs require to make their case for funding targeted interventions.

## City Name

Tennessee (Chattanooga/Hamilton)

## Key Challenge

Clearly defining, reporting on, and addressing significant racial and geographic disparities in pregnancy-related deaths.

## Relevant Report Or Data Source

Tennessee MMRC Report

## Comparison To Richmond

Tennessee's MMRC report details significant racial disparities, with non-Hispanic Black women facing a much higher burden of pregnancy-related death. This illustrates that the core challenges of definitional clarity, equity framing, and system coordination are common across comparable regions, validating the problems identified in Richmond.

