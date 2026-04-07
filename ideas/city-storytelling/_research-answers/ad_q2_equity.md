# Executive Summary

In Richmond, Virginia, equitable access to arts and culture discovery is hampered by a significant digital divide and a fragmented technical infrastructure. Analysis of U.S. Census data reveals that key neighborhoods in the Northside (23222), East End (23223), and South Richmond (23224) have materially lower household broadband subscription rates, meaning a web-only event discovery strategy risks excluding many residents. This digital exclusion is compounded by language barriers, with growing immigrant communities requiring information in Arabic, Dari, and Pashto, in addition to Spanish. Furthermore, older residents (65+) often rely on traditional, non-digital channels like print guides, radio, and word-of-mouth, which are not always prioritized in digital-first marketing efforts. The city currently lacks public, neighborhood-level data on arts attendance by demographic, making it difficult to measure the full scope of these inequities. On a technical level, a key local arts calendar (CultureWorks) has a live structured data error, limiting its visibility and data-sharing potential. However, the research indicates that creating a 'submit-once, route-many' tool to syndicate event listings across major platforms like VisitRichmond, Venture Richmond, and Style Weekly is technically feasible, provided governance agreements are established. This presents a clear opportunity to streamline the process for arts organizations while improving the reach of their events.

# Broadband Adoption Analysis

An analysis based on the ACS 2019–2023 5-year estimates indicates that the Richmond ZIP codes 23222 (Northside), 23223 (East End), and 23224 (South Richmond) have materially lower household broadband subscription rates than higher-income areas of the city. Consequently, a web-only arts discovery strategy risks significant exclusion of residents within these neighborhoods. The problem is exacerbated by the prevalence of mobile-only internet access in these communities, which may not be as conducive to event discovery and engagement as wireline broadband. This digital divide suggests that relying exclusively on online platforms for arts promotion would create an equity gap, failing to reach a substantial portion of the population in these specific neighborhoods.

# Broadband Data By Zip Code


# Arts Attendance Data Availability

There is no publicly available, regularly maintained dataset in Richmond that provides neighborhood-level data on arts event attendance specifically broken down by race, income, or age. City planning initiatives function as the primary available proxies. For example, community engagement summaries and insights reports from processes like the 'Richmond 300' master plan and the 'Cultural Heritage Stewardship Plan' provide some demographic data on community engagement. However, these are not event-specific attendance records and are used more broadly to gauge participation in the planning process itself, rather than tracking attendance at cultural events.

# Language Requirements For Inclusion

For inclusive arts discovery in Richmond, languages beyond English and Spanish are necessary to reach key immigrant and refugee communities. Based on the services and resources provided by local support organizations, there is a demonstrated need for materials and outreach in Arabic, Dari, and Pashto. These languages are particularly relevant for the Afghan community, including those who have arrived through Special Immigrant Visa (SIV) programs. Additionally, depending on the specific neighborhood and community, other languages such as Swahili and related East African languages are periodically encountered by refugee service providers, indicating another potential audience for multilingual arts communication.

# Information Channels For Seniors

Recent, empirical data specifically detailing how Richmond residents aged 65 and over learn about arts and cultural events is limited. However, based on available local resources and general communications from aging-services, it is understood that they utilize a mix of traditional and non-digital channels. Print media, such as regional guide-style publications like 'Seniors Guide,' remains a key resource. Additionally, word-of-mouth communication through social networks, senior centers, libraries, and faith-based groups is a significant channel. Broadcast media, including public radio, is also commonly cited as a way older adults discover events. A web-only discovery strategy would likely miss a substantial portion of this demographic.

# National Arts Aggregator Models Analysis

## Platform Name

ArtRabbit

## Key Features

ArtRabbit is an independent digital art platform with a niche focus on visual and contemporary art. Its core features include community-submitted event listings, professionally curated guides, promotional newsletters, and dedicated mobile applications for discovering art events.

## Engagement Drivers

Sustained user engagement is primarily driven by its specialized focus on the contemporary art world, which attracts a dedicated and knowledgeable community. The combination of user-generated content (community submissions) and expert curation (guides and newsletters) ensures a high-quality, comprehensive stream of relevant information. The availability of mobile apps further enhances accessibility and encourages repeat usage for on-the-go discovery.

## Failure Factors

The provided context does not mention any failure factors for ArtRabbit. It is presented as a model with sustained engagement due to its successful niche strategy.

## Platform Name

DoStuff Media

## Key Features

DoStuff Media's model is centered on strong local editorial curation. Its key features include a comprehensive event calendar, deep integration with newsletters and social media channels, a mobile-first approach to event discovery, and user RSVP functionality.

## Engagement Drivers

Historically, engagement has been driven by the platform's strong, localized editorial voice, which builds a sense of community and trust. The tight integration between its calendar, newsletters, and social media creates a powerful ecosystem for event discovery and promotion. Its focus on a mobile-first user experience and simple RSVP options caters to modern user behaviors for finding and committing to events.

## Failure Factors

The provided context does not specify any failure factors for DoStuff Media. It is presented as a model with historically effective engagement drivers, although the source notes that public, independent evaluations with retention metrics are limited.

## Platform Name

Eventful 'Demand It!'

## Key Features

The 'Demand It!' feature was a unique function of the Eventful platform that focused on demand aggregation. It allowed users to collectively request, or 'demand,' that artists, bands, or other performers schedule an event or tour stop in their specific city, providing a data-driven tool for tour routing.

## Engagement Drivers

The primary engagement driver was its unique value proposition that empowered fans. It gave users a sense of agency and a direct way to influence where their favorite artists would perform, differentiating it from passive event listing services and fostering community action around a shared goal.

## Failure Factors

The 'Demand It!' feature and the broader Eventful platform were ultimately discontinued. The model's value proposition was severely eroded by the rise of major social media platforms like Facebook and Google, as well as the growth of first-party ticketing ecosystems. These new platforms gave artists and promoters direct access to fan data and communication channels, making Eventful's third-party demand aggregation model redundant and unsustainable.


# Cultureworks Technical Issue Assessment

## Issue Summary

The CultureWorks calendar, which is a key portal for arts events in Richmond, is currently displaying a visible technical error on its pages. This error is related to the generation of structured data (JSON-LD) and indicates a problem with the website's template. Specifically, it's a Liquid syntax error that prevents the proper construction of JSON-LD data for events.

## Platform Provider

Localist

## Error Message

Liquid syntax error: Cannot build json - ld tag, event_item is unknown. : Liquid error

## Implication

This error directly impacts the discoverability of events listed on the CultureWorks calendar by search engines like Google. Structured data (like JSON-LD) is crucial for search engines to understand and display event details such as date, time, and location in rich search results. The failure to build this data means events are less likely to be featured prominently in search, reducing their visibility and negatively affecting search engine optimization (SEO).


# Event Syndication Tool Feasibility

A 'submit-once, route-many' tool for Richmond event organizers is considered technically feasible but requires significant coordination. Each major event aggregator, including VisitRichmond, Venture Richmond, and Style Weekly, currently maintains its own separate submission form and criteria. A feasible solution would involve creating a central 'broker' tool. This tool would take a single, normalized event submission and then transform it into the specific format required by each downstream platform. The technical implementation could involve generating a Localist-compatible feed for CultureWorks, a Simpleview/DTI-compatible feed for VisitRichmond, an automated form post or feed for Venture Richmond, and email or API payloads for Style Weekly. The primary challenges are not just technical; they involve mapping all required fields, image specifications, and category taxonomies for each site. Crucially, the success of such a tool would depend on securing governance agreements with each publisher to ensure they would accept and process the automated submissions.

# Richmond Event Submission Portals

## Organization Name

Visit Richmond

## Portal Name

Official Richmond Event Calendar

## Submission Url

https://www.visitrichmondva.com/events/submit-your-event/

## Organization Name

Venture Richmond

## Portal Name

Venture Richmond Downtown Events

## Submission Url

https://venturerichmond.com/our-events/submit-your-event/


# Key Immigrant Support Organizations

## Organization Name

ReEstablish Richmond

## Primary Focus

Provides health resources and other support to help with successful resettlement of immigrant and refugee communities.

## Languages Supported

Arabic, Dari, Pashto, Spanish

## Organization Name

Sacred Heart Center

## Primary Focus

Serves as a community hub for the Latino population, offering educational programs such as GED preparation and ESL classes for Spanish speakers.

## Languages Supported

Spanish

## Organization Name

VDH Office of New Americans – Refugee Services (Richmond City Health District)

## Primary Focus

A government office that addresses health issues and other factors that influence the successful resettlement of refugees in the Richmond area.

## Languages Supported

Supports various refugee populations, which implies a need for multiple languages including but not limited to Arabic, Dari, Pashto, and Swahili.


# Digital Divide Impact On Arts Access

The digital divide in Richmond presents a substantial barrier to equitable arts and culture discovery, extending beyond simple internet availability to encompass issues of infrastructure, language, and generational media preferences. 

Firstly, there are significant geographic disparities in broadband access. According to ACS 2019–2023 5-year estimates, Richmond's East End (ZCTA 23223), Southside (23224), and Northside (23222) neighborhoods have materially lower rates of household broadband subscriptions compared to higher-income areas. This data suggests that any arts discovery strategy that is exclusively web-based will inherently risk excluding residents of these communities. The issue is further nuanced by the prevalence of mobile-only internet access in lower-income areas, which can create challenges for navigating complex websites or downloading large files, making simple, mobile-first design critical.

Secondly, the divide is linguistic. For arts discovery to be truly inclusive, it must cater to the languages spoken by Richmond's diverse immigrant communities. Beyond English and Spanish, community service organizations like ReEstablish Richmond highlight a clear need for resources in Arabic, Dari, and Pashto to serve recent arrivals from Afghanistan. Other languages, such as Swahili and related East African languages, are also relevant due to refugee resettlement programs. Organizations like the Sacred Heart Center underscore the large and established Spanish-speaking community that benefits from dedicated resources. Failing to provide event information in these languages effectively renders digital (and print) resources inaccessible to these populations.

Finally, an 'analog divide' affects a significant portion of the population, particularly older adults. For residents aged 65 and over, digital platforms are not always the primary source for learning about local events. While specific Richmond-based empirical data is limited, regional resources and general communications from aging services indicate a continued reliance on traditional media. This includes print publications like the 'Seniors Guide,' broadcast and public radio, and word-of-mouth communication through senior centers, libraries, and faith-based organizations. A digital-first approach to event promotion is likely to miss this demographic entirely.

# Recommendations For Inclusive Arts Discovery

Based on the analysis of Richmond's arts discovery landscape, the following actionable recommendations are proposed to improve equity, inclusivity, and efficiency:

1.  **Develop a "Submit-Once, Route-Many" Event Broker:** Given that a centralized submission tool is technically feasible, arts leaders should pursue the creation of a broker service. This tool would allow an event organizer to submit details once, which are then automatically normalized and distributed to the distinct submission systems of VisitRichmond (Simpleview/DTI), Venture Richmond, CultureWorks (Localist), and Style Weekly. This requires mapping to each platform's required fields and categories and, crucially, establishing governance agreements with each publisher for automated ingestion via APIs, feeds (ICS/JSON-LD), or form automation.

2.  **Prioritize a Multi-Channel and Non-Digital Outreach Strategy:** To bridge the digital divide, organizations must move beyond web-only promotion. This includes allocating resources for advertising and listings in print media known to reach older adults (e.g., 'Seniors Guide'), placing announcements on public radio, and establishing partnerships with libraries, senior centers, and faith-based groups for physical flyer distribution and word-of-mouth promotion.

3.  **Implement Multilingual Communication:** To reach immigrant communities, key event information (what, where, when, cost, accessibility) should be translated. Priority languages identified are Spanish, Arabic, Dari, and Pashto. Arts organizations should partner with community hubs like ReEstablish Richmond and the Sacred Heart Center to disseminate this information effectively and ensure cultural appropriateness.

4.  **Audit and Repair Technical Infrastructure for Structured Data:** The current 'Liquid syntax error' on the CultureWorks calendar must be fixed. A comprehensive audit of the Localist implementation should be conducted to ensure `schema.org/Event` structured data is correctly and fully implemented. Proper structured data is essential for discoverability on search engines like Google and enables event information to be more easily scraped and aggregated by other services, forming a foundational layer for a more connected ecosystem.

5.  **Advocate for Granular Audience Data Collection:** The identified lack of public, neighborhood-level arts attendance data is a critical gap. Arts organizations, in partnership with the city and academic institutions, should advocate for and participate in new data collection initiatives. This data, disaggregated by race, income, age, and location, is necessary to accurately measure the impact of equity initiatives and understand audience behavior.

6.  **Incorporate Best Practices from National Aggregators:** When improving local platforms, Richmond should learn from successful national models. This includes incorporating features like ArtRabbit's curated guides and community submission focus to drive niche engagement, and DoStuff Media's model of strong local editorial curation, mobile-first design, and tight integration between calendar, newsletter, and social media.
