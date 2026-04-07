# From Comments to Coverage: How US Cities Use Dashboards to See Who's Participating in Planning—and Fix the Gaps

## Executive Summary

US cities are increasingly treating public participation data as core infrastructure for urban planning and zoning. By deploying centralized analytics dashboards, municipalities can visualize exactly who is showing up to influence local development—and, more importantly, who is missing. 

* **Centralized Tracking is the New Standard:** Cities are moving away from siloed department data. The City of Austin partnered with PublicInput to centralize engagement across 42 departments, logging over 91,000 participants, 1.1 million survey responses, and 116,000 public comments [1]. 
* **Geospatial and Demographic Overlays Expose Gaps:** Neighborhood-level targeting relies on geospatial overlays. Seattle utilizes a Racial and Social Equity (RSE) Index calculated at the census tract level to identify where marginalized populations reside, guiding planning and investment priorities [2]. 
* **Analytics Directly Drive Outreach Pivots:** When data reveals disparities, cities change tactics. In Raleigh, analytics showed that white residents made up 81% of survey respondents despite being only 56% of the population, prompting a strategic shift toward targeted community conversations and barrier removal [3]. San Francisco updated its City Survey methodology to include in-person intercept surveying to reach demographics traditionally missed by phone or online methods [4].
* **Time-Series Tracking Validates Efforts:** Dashboards allow cities to monitor engagement velocity over time. Tempe's "Participating in City Decisions" dashboard tracks historic and current performance metrics [5], while Seattle's Zoning Update tracked 9,221 comments from 5,800 commenters across a 60-day period [6].
* **Privacy and Governance are Critical:** As cities collect more granular data, privacy guardrails are essential. New York City's privacy policies explicitly classify IP addresses, MAC addresses, and GPS locations as identifying information requiring strict protection [7].

## What's Deployed Now — Where Cities Are Measuring Participation By Place and People

Multiple US cities run participation analytics for planning using centralized hubs and equity overlays. Public dashboards range from planning-specific project portals to citywide trend metrics.

### City Participation Analytics Implementations

| City | Dashboard/Tool | Planning/Zoning Tie | Geographic Granularity | Demographic Tracking | Time-Series | Data Sources | Outreach Changes & Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Austin, TX** | PublicInput centralized dashboard | Used across 118 project groups and 700+ initiatives [1]. | Address, ZIP, cross street, or GeoIP [8]. | Yes, via built-in analytics [9]. | Yes, tracked over time. | Surveys, comments, meeting attendees, emails [1]. | Grew contact list by 352,000+ new residents; standardized citywide approach [1]. |
| **Seattle, WA** | RSE Index & Zoning Update Hub | Comprehensive Plan and zoning updates [10]. | Census tract level [2]. | Yes, via RSE Index [2]. | Multi-phase reporting. | ACS, PLACES, DOH, online forms [2]. | Deployed community liaisons and multilingual events; gathered 9,221 comments [6]. |
| **San Francisco, CA** | City Survey & Analysis Neighborhoods | Informs city services and infrastructure planning [11]. | Neighborhoods grouped by 2010 Census tracts [12]. | Weighted to ACS demographics [4]. | Biennial trends [11]. | Phone, online, and intercept surveys [4]. | Added intercept surveying to reach underrepresented groups [4]. |
| **Raleigh, NC** | Rezoning Engagement Portal | Rezoning cases and Comprehensive Plan [13] [14]. | Project area mapping. | Yes, tracked voluntarily [3]. | Ongoing portal results. | Surveys, comments, digital analytics [3]. | Shifted to targeted event siting and barrier removal after identifying demographic gaps [3]. |
| **Los Angeles, CA** | EmpowerLA NC Dashboards | Neighborhood Council governance [15]. | Neighborhood Council boundaries [15]. | Yes (gender, age, race, income) [15]. | Multi-cycle elections. | Elections and outreach surveys [15]. | Informs Neighborhood Council outreach and data literacy programs [15]. |
| **Tempe, AZ** | Participating in City Decisions | Citywide engagement performance [5]. | Citywide. | Via community survey. | Historic and current data [5]. | Community survey [5]. | Trends inform community connection efforts. |

*Takeaway:* Cities that integrate participation data into centralized dashboards (like Austin and Seattle) can systematically identify representation gaps and adjust their planning outreach in real time.

## Data Sources, Methods, and Standards — How to Build Credible Dashboards

The technical stack required to measure public participation is available off-the-shelf, but data governance—specifically geocoding, weighting, deduplication, and privacy—determines the credibility of the insights.

### Core Inputs and Geocoding Hierarchies
Cities aggregate data from online surveys, map-pinned comments, meeting sign-ins, and emails. To map this data, platforms like PublicInput use a strict location sorting hierarchy: user-provided addresses take top priority, followed by pinned lat/long coordinates, cross streets, zip codes, and finally GeoIP data [8]. This ensures the most specific location data is utilized for participant identification [8]. Furthermore, tools like the ArcGIS Geocoding service convert address text into location candidates, enabling batch geocoding for large datasets [16].

### Representativeness and Weighting
Because public engagement data often relies on nonprobability (opt-in) samples, cities must adjust the data to reflect the actual population. San Francisco weights its City Survey results to adjust for demographic differences between the survey sample and the city's population, using targets based on the US Census Bureau’s ACS 5-year estimates [4] [11]. Advanced statistical methods, such as raking and propensity weighting, are frequently used to reduce bias in these opt-in samples [17] [18].

### Privacy and Open Records Guardrails
Balancing transparency with privacy is a critical challenge. New York City's privacy protocols mandate that agencies protect identifying information, which explicitly includes IP addresses, MAC addresses, and GPS-based locations [7]. Engagement platforms like PublicInput aggregate and anonymize survey responses to identify trends without exposing individual identities, ensuring compliance with privacy standards while still providing actionable geographic insights [19].

## Where Analytics Shifted Outreach — Evidence and Playbooks

When dashboards expose demographic or geographic gaps, cities can justify reallocating budgets toward non-digital, language-accessible, and place-based tactics.

### Documented Outreach Pivots

| City | Identified Gap | Analytics-Driven Outreach Pivot | Quantifiable Outcome |
| :--- | :--- | :--- | :--- |
| **San Francisco** | Traditional phone/mail surveys missed hard-to-reach demographics. | Supplemented representative sampling with in-person intercept surveying at selected locations [4]. | Achieved a broader cross-section of residents for the 2023 City Survey [4]. |
| **Seattle** | Need for inclusive zoning feedback across diverse neighborhoods. | Deployed community liaisons, multilingual materials, and interactive web maps [6]. | Gathered 9,221 comments and hosted over 1,800 attendees at information sessions [6]. |
| **Raleigh** | White residents overrepresented (81% of survey vs. 56% of population); Hispanic residents underrepresented (3% vs. 11%) [3]. | Shifted to targeted community conversations, utilizing existing social networks and locating events in underrepresented areas [3]. | Established geographic mapping of engagement to continuously monitor and correct outreach gaps [3]. |
| **Austin** | Fragmented, department-siloed feedback collection. | Centralized engagement on a single platform to standardize data collection and track meeting attendees [1]. | Engaged nearly 400,000 residents and grew the contact list by 352,000+ new residents [1]. |

*Takeaway:* Analytics do not just measure participation; they provide the empirical justification needed to fund intercept surveys, translation services, and targeted community partnerships.

### Tactic Cookbook Tied to Metrics
* **If renter share is below the city benchmark:** Deploy door-to-door intercepts at multifamily sites and partner with tenant associations.
* **If Limited English Proficiency (LEP) participation is low:** Invest in translated surveys, in-language facilitators, and ethnic media buys.
* **If specific neighborhoods fall below target rates:** Utilize pop-up events, provide microgrants to Community-Based Organizations (CBOs), and use map-based ad geofencing.

## Implementation Blueprint — Stand Up a Planning Participation Dashboard in 90 Days

Cities can move from fragmented feedback to actionable participation analytics by launching a pilot dashboard tied to a specific rezoning or corridor plan.

### Week 0–2: Foundations
Select a centralized engagement hub (e.g., PublicInput) and establish geocoding protocols. Draft a clear privacy policy and data dictionary, defining exactly what demographic and geographic data will be collected and how it will be anonymized for public display.

### Week 3–6: Instrument Two-Way Inputs
Launch the project portal featuring map-pinned commenting tools. Integrate demographic questions into all surveys and enable digital sign-ins for public meetings. Connect email and SMS channels to ensure all feedback flows into a single database.

### Week 7–9: Publish and Act
Push the live participation dashboard public, featuring neighborhood heatmaps, demographic mixes, and time-series trends. Use the initial data to trigger "gap-closing" sprints—such as deploying intercept surveyors to neighborhoods showing low engagement rates.

## KPIs and Targets — Make the Dashboard Drive Decisions

Dashboards are only effective if they drive action. Cities must tie their outreach funding to closing representation gaps rather than simply counting activities.

### Equity and Coverage KPIs
* **Demographic Alignment:** Ensure participation mix is within ±10% of the city's actual demographics for race, ethnicity, and renter/owner status in the project impact area.
* **Geographic Thresholds:** Establish minimum participation rates for every neighborhood or census tract affected by a zoning change.
* **Engagement Velocity:** Track the number of comments and attendees per week, monitoring the growth of opt-in contacts.

### Quality and Impact KPIs
* **Input-to-Decision Traceability:** Measure the percentage of adopted plan elements that can be directly linked to summarized public input themes.
* **Gap-Closing ROI:** Quantify the lift in underrepresented participation achieved per specific outreach tactic (e.g., measuring the percentage increase in Hispanic participation after deploying in-language intercept surveys).

## Risk Management — Avoid Pitfalls

To ensure participation analytics are credible and effective, cities must avoid common failure modes:
* **Siloed Data:** Mandate that all departments use the centralized platform so that engagement data isn't lost in disparate spreadsheets.
* **Unlabeled Geography:** Ensure all projects tag participants to specific geographies (using address, cross-street, or zip code) to enable spatial analysis [8].
* **Privacy Violations:** Avoid publishing small-n subgroup maps that risk reidentifying individuals. Adhere strictly to anonymization and aggregation protocols [19] [7].

## Appendix — Methods and References

* **Austin, TX:** Centralized engagement via PublicInput, tracking 91,000+ participants and 1.1M survey responses across 42 departments [1].
* **Seattle, WA:** Utilizes the Racial and Social Equity (RSE) Index at the census tract level [2] and tracked 9,221 comments for its Zoning Update [6].
* **San Francisco, CA:** Weights City Survey data to ACS benchmarks and utilizes intercept surveying to ensure demographic representation [4] [11].
* **Raleigh, NC:** Documented demographic disparities in survey responses and implemented targeted engagement strategies to reach underrepresented populations [3].
* **Privacy Standards:** New York City's Citywide Privacy Protection Policies provide a framework for handling identifying information, including IP and MAC addresses [7].

## References

1. *Data-Driven & People-Centered: Austin’s Community Engagement Model for Transparency | PublicInput*. https://publicinput.com/wp/2025/03/10/austins-community-engagement-model-for-transparency/
2. *City of Seattle Racial and Social Equity Index Users' Guide*. https://www.seattle.gov/documents/Departments/OPCD/Demographics/RacialSocialEquityIndexUsersGuide2023.pdf
3. *The Next Comprehensive Plan Engagement Strategy*. https://cityofraleigh0drupal.blob.core.usgovcloudapi.net/drupal-prod/COR22/engagement-strategy.pdf
4. *2023 CITY SURVEY DETAILED METHODOLOGY*. https://www.sf.gov/file/placeholder-2023-city-survey-detailed-methodology
5. *2.15 Participating in City Decisions (dashboard) - Data Catalog*. https://catalog.data.gov/dataset/2-15-feeling-invited-to-participate-in-city-decisions-dashboard-815a1
6. *Public Comment Summary One Seattle Plan Zoning ...*. https://www.seattle.gov/documents/departments/opcd/seattleplan/oneseattleplanzoningupdatepubliccommentsummary2025.pdf
7. *Citywide Privacy Protection Policies and Protocols*. https://www.nyc.gov/assets/oti/downloads/pdf/reports/cpo/2025%20Citywide%20Privacy%20Protection%20Policies%20and%20Protocols_web.pdf
8. *Understanding Participant Location Display on the Participants Tab | PublicInput Knowledge Base*. https://support.publicinput.com/en/articles/10203179-understanding-participant-location-display-on-the-participants-tab
9. *PublicInput | Community Engagement Software for Government*. https://publicinput.com/
10. *One Seattle Plan Zoning Update*. https://one-seattle-plan-zoning-implementation-seattlecitygis.hub.arcgis.com/
11. *San Francisco City Survey Data | DataSF*. https://data.sfgov.org/City-Management-and-Ethics/San-Francisco-City-Survey-Data/nufj-bfbw
12. *Analysis Neighborhoods | DataSF - San Francisco Open Data*. https://data.sfgov.org/Geographic-Locations-and-Boundaries/Analysis-Neighborhoods/p5b7-5n3h
13. *Rezoning Engagement Portal - PublicInput - Engage Raleigh*. https://engage.raleighnc.gov/rezoning
14. *Raleigh Planning - PublicInput*. https://engage.raleighnc.gov/N5152
15. *Data – EmpowerLA - City of Los Angeles*. https://neighborhoodempowerment.lacity.gov/data/
16. *ArcGIS Geocoding service | ArcGIS REST APIs - Esri Developer*. https://developers.arcgis.com/rest/geocode/
17. *1. How different weighting methods work*. https://www.pewresearch.org/methods/2018/01/26/how-different-weighting-methods-work/
18. *
            Weighting Non-probability and Probability Sample Surveys in Describing Cancer Catchment Areas - PMC
        *. https://pmc.ncbi.nlm.nih.gov/articles/PMC6401258/
19. *Privacy Policy & Terms and Conditions*. https://publicinput.com/wp/privacy/
