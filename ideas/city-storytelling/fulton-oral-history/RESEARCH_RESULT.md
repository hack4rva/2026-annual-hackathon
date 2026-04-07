# Mapping Memory with Care: Tools, cases, and playbooks for place-based oral histories in US cities, museums, and universities

## Executive Summary

US cities, museums, and universities are increasingly leveraging digital mapping tools to collect, preserve, and present place-based oral histories, particularly to document historically Black neighborhoods and communities facing gentrification. The technology landscape has stabilized around five primary platform families, ranging from enterprise GIS solutions to custom-built activist stacks. However, the most significant innovations are not in the software itself, but in the governance models surrounding it. 

Institutions are shifting from extractive, one-time release models to tiered, ongoing consent frameworks that prioritize community data sovereignty and descendant review [1] [2] [3]. "Place harm"—where mapping specific addresses enables doxxing or predatory real estate practices—is a recognized risk, prompting projects to adopt location redaction and aggregation strategies [2] [4]. To scale collection while maintaining trust, successful initiatives deploy hybrid workflows that combine professional archival intake with community-led "train-the-trainer" mobile capture [5] [6]. Ultimately, digital maps achieve the highest impact when paired with physical public memory infrastructure, such as historical markers and walking tours, ensuring that digital preservation translates into tangible community heritage [7] [8].

## Platform Landscape and Decision Matrix

Choosing the right technology stack depends heavily on an institution's governance requirements (who controls consent), sustainability mandates (who preserves the data), and technical capacity—not merely on map aesthetics. The following matrix compares the five dominant platform families used for place-based oral histories.

| Platform Family | Geospatial & Media Capabilities | Metadata & Preservation | Hosting & Licensing | Accessibility & Offline Use | Strengths | Limitations | US Examples |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **ArcGIS StoryMaps / Experience** | Native GIS layers; embeds audio/video; filters by neighborhood [9] [10] | Supports Dublin Core via backends; archiving is external | Commercial (Esri); enterprise SSO common | WCAG guidance provided [11] [12]; online only | Fast deployment; excellent institutional fit for cities | License costs; limited custom consent logic | City of Alexandria: 200+ oral histories mapped [13] |
| **Omeka Classic/S + Neatline** | Map + timeline exhibits; links archival items to places [14] | Dublin Core native; ArchivesSpace connectors exist [15] [16] | Open source; LAMP hosting | Web-based; offline export via static builds | Archives-first stewardship; links exhibits to long-term custody | Heavier setup; basic GIS capabilities | Swarthmore Black Liberation 1969 Neatline exhibit [17] |
| **Custom Mapbox / Leaflet / D3** | Full control (GL JS, clustering, scale masking) [18] [19] | Any schema; programmatic consent flags | Open source libraries; Mapbox tile plans | Web; can bundle static assets | Ethics-by-design (tiered display, redaction); high performance | Requires JS/DevOps skills; sustainment risk | Anti-Eviction Mapping Project (Svelte site, Node API) [20] [21] |
| **StoryMapJS (Knight Lab)** | Slide-based, place-by-place stories; media embeds [22] | Minimal metadata; requires external repos for preservation | Free hosted; can self-host | Web; mobile-responsive | Very quick storytelling; low technical barrier | Not suited for large corpora; little consent logic | Numerous digital humanities class projects |
| **Terrastories / Mukurtu** | Map-linked stories; role-based access; TK labels [23] [24] | Community protocols; granular rights management | Open source; on-prem or cloud | Terrastories offline [25]; Mukurtu web | Data sovereignty; offline capabilities; consent tiers | Smaller ecosystem; setup and training required | Terrastories (Amazon Conservation Team) [26]; Mukurtu TK Labels [27] |

**Strategic Takeaway:** If you are a city agency or museum already utilizing Esri products, prioritize ArcGIS StoryMaps for quick deployment and accessibility compliance [11] [9]. If your primary mandate is long-term preservation, Omeka with Neatline anchors exhibits to a robust archival system [14]. For activist collectives or academic labs requiring fine-grained redaction and consent controls, a custom Mapbox/Leaflet stack is necessary [2] [18].

## Case Studies: Documenting Historically Black and Gentrifying Communities

Pairing a suitable platform with co-governance, tiered consent, and public memory infrastructure is critical for projects focusing on vulnerable or historically marginalized neighborhoods.

### City of Alexandria: Colored Rosemont Descendants + ArcGIS
**What was built:** The City of Alexandria launched an ArcGIS Experience map featuring over 200 oral histories, with specific filters and dedicated pages for "Colored Rosemont," a historically Black neighborhood established in 1926 [13] [8]. 
**Consent & Governance:** The city collaborated with former and current residents to create a formal Scope of Work [8]. Descendants actively review interpretation materials, and the initiative has resulted in tangible outcomes, including a Virginia State Highway Marker approved in 2024 and dedicated in 2025, alongside drafted Heritage Trail signage [8] [28].
**Actionable Insight:** Municipalities should replicate this "city + oral history center + descendant board" model, ensuring digital maps translate into physical neighborhood markers.

### Anti-Eviction Mapping Project (AEMP): Mapbox GL + Consent-First Publishing
**What was built:** AEMP, an activist collective documenting gentrification in the Bay Area, LA, and NYC, utilizes a custom stack featuring Mapbox GL JS, a Svelte-based website hosted on Netlify, and a Node API [29] [20] [21]. 
**Consent & Governance:** AEMP employs a "double consent" protocol (confirming consent both before and after recording) and allows narrators to revoke their stories at any time [2]. Recognizing that mapping specific addresses can enable landlord retaliation or tenant screening abuses, AEMP utilizes location redaction, anonymization, and tiered access [2] [4].
**Actionable Insight:** Academic labs and community coalitions should fork AEMP's open-source repositories and adopt their security handbook to bake privacy and redaction directly into the map's architecture.

### Pratt-Weeksville Collaboration: Cell-Phone Framework + Living Archive
**What was built:** Pratt Institute architecture students collaborated with the Weeksville Heritage Center in Brooklyn to document one of the first free Black communities [5] [30]. 
**Consent & Governance:** To ensure authorship remained in the hands of residents, the project developed a framework using cell phones to empower community members to interview one another [5] [30]. The initiative emphasizes critical ethnography and aims to build a living, public digital archive to combat predatory development [5].
**Actionable Insight:** Pilot "phone-first" collection kits to lower the barrier to entry and maintain community authorship, but ensure an archivist is staffed for intake and metadata standardization.

### AACHM + AADL (Ann Arbor): Living Oral History + Walking Tour
**What was built:** The African American Cultural & Historical Museum of Washtenaw County partnered with the Ann Arbor District Library to create the Living Oral History Project [7]. 
**Consent & Governance:** The project features an online digital collection of over 3,000 historical photographs and articles linked to interviews, paired with a mapped walking tour showcasing historically Black neighborhoods [7] [31].
**Actionable Insight:** Pair digital archives with walking tour applications to anchor oral histories in the physical landscape.

### Black Bottom Digital Archive (Detroit): Historical Maps + Community Memory
**What was built:** This community-led archive documents Black Bottom, a neighborhood completely demolished by the City of Detroit for "urban renewal" and freeway construction [32]. 
**Consent & Governance:** The project uses a 1951 Sanborn Fire Insurance map as a historical basemap to contextualize oral histories and preserve the stories of displaced Black institutions and residents [32].
**Actionable Insight:** Utilize historical basemaps to visualize erased geographies and provide spatial context for displacement narratives.

## Collection Workflows and Tooling

To maximize inclusion while protecting narrators, institutions must deploy modular, hybrid collection pipelines.

| Workflow Model | Roles & Tools | Advantages | Risks & Mitigations |
| :--- | :--- | :--- | :--- |
| **Professional Interviewing** | Archivists/Historians; Tascam/Zoom recorders [33] [34]; AI transcription (Otter, Descript, Gemini) [35] [36] | High audio quality; consistent metadata capture | Can be extractive; mitigate by co-creating question guides with community boards. |
| **Community Workshops** | City oral history centers [6]; StoryCorps Mobile Tour [37] | High inclusion; builds local capacity and trust | Variable audio quality; mitigate by providing standardized recorder kits and QC days. |
| **Cell-Phone Framework** | Residents; mobile devices [5] [30]; StoryCorps App [38] | Lowest barrier to entry; rapid scaling; local authorship | Rights confusion; mitigate by mandating tiered consent forms and clear repository deposit paths. |
| **Social Media Archiving** | Activists/Archivists; DocNow tools [39] | Captures real-time lived discourse and protest movements | High surveillance risk [40] [41]; mitigate via opt-outs, moratoria, and strict adherence to DocNow ethics [42]. |

**Strategic Takeaway:** Do not rely solely on professional archivists. Stand up a modular pipeline: host quarterly community trainings, distribute mobile recording kits, and utilize AI transcription tools (like Google Gemini or Descript) to accelerate processing [35] [36] [43], while keeping human review in the loop for accuracy and cultural sensitivity.

## Consent, Cultural Sensitivity, and Governance

Consent must be operationalized as a continuous lifecycle, not a one-time signature. The Oral History Association (OHA) Principles and Best Practices mandate ongoing participation, transparency, and narrator review prior to public release [3] [44]. 

* **Tiered and Ongoing Consent:** Projects must offer narrators options beyond a binary "publish all" or "publish nothing." AEMP's protocols allow narrators to anonymize their interviews, publish only small excerpts, or restrict access to transcripts only [2]. Furthermore, narrators must have a clear, accessible pathway to revoke their consent and have their stories removed from public platforms at any time [2].
* **Location Redaction and Geo-Privacy:** Mapping exact addresses in gentrifying neighborhoods can expose vulnerable tenants to harassment or predatory real estate tactics [2] [4]. Implement a location-sensitivity rubric: aggregate locations to the block or neighborhood level, or decontextualize the data entirely if the risk of doxxing outweighs the benefit of spatial visualization [2].
* **Community Governance:** For historically Black neighborhoods, establish descendant advisory boards to review interpretation and signage, as demonstrated by the Colored Rosemont Initiative [8] [28]. For Indigenous or highly sensitive cultural data, utilize platforms like Mukurtu or Terrastories that enforce Traditional Knowledge (TK) labels and role-based access controls [23] [24].
* **Social Media Ethics:** When archiving digital activism, follow Documenting the Now (DocNow) guidelines. Recognize that public availability on platforms like Twitter does not equate to informed consent for archival preservation [40] [41]. Implement take-down policies, respect opt-outs, and consider embargo periods for sensitive protest data [42] [45].

## Technical Architectures for Custom Builds

For organizations that outgrow off-the-shelf tools like ArcGIS or Omeka, a custom stack provides the necessary control over data ethics and performance. The Anti-Eviction Mapping Project provides a blueprint for this approach [46] [20] [21].

* **Front-End:** Mapbox GL JS or Leaflet for rendering highly customizable, performant vector maps [18] [19]. UI frameworks like Svelte or React ensure a responsive experience [46] [21].
* **Back-End & CMS:** A headless CMS (like Sanity) allows non-technical community members to input stories and metadata [21]. A Node.js API can serve eviction data or oral history metadata to the front-end [20].
* **Hosting:** Static site generators hosted on Netlify or GitHub Pages provide low-cost, highly scalable, and secure hosting [47] [46] [21].
* **Data Modeling for Consent:** The database schema must include programmatic consent flags (e.g., `consent_mode: full | clip-only | anonymized`, `embargo_until: [date]`, `sensitivity_level: high | low`). The front-end application must be programmed to respect these flags, automatically redacting locations or hiding media based on the narrator's preferences.

## Implementation Playbook: 120-Day Launch Plan

**Phase 0: Scoping & Governance (Weeks 1-3)**
Form a partner triangle consisting of the host institution (city/museum), the archival repository (library), and a community advisory board. Select the platform based on the decision matrix and designate the long-term archival home.

**Phase 1: Protocols & Metadata (Weeks 4-7)**
Draft the Scope of Work and consent toolkit, including tiered consent forms, a location risk rubric, and revocation workflows. Standardize the metadata schema using the OHA Metadata Task Force element sets (incorporating Dublin Core or PBCore) [48] [49].

**Phase 2: Training & Pilot Collection (Weeks 8-12)**
Host community training workshops [50] [6]. Assemble and distribute recording kits (Tascam/Zoom or cell-phone frameworks) [5] [33]. Conduct a pilot of 10 interviews, run a quality control review, and test the ingest pipeline into the archive and the map.

**Phase 3: Launch & Public Memory Integration (Weeks 13-16)**
Publish the initial batch of stories. Host a community validation event to review the map and adjust redaction filters as necessary. Schedule the rollout of physical tie-ins, such as walking tours or historic markers [7] [8].

## Metrics & Policy Impact

To evaluate success, track both collection health and community impact:
* **Collection Metrics:** Number of stories collected; percentage of interviews with complete metadata; time-to-archive.
* **Equity Metrics:** Percentage of stories from priority/vulnerable neighborhoods; utilization rates of tiered consent and anonymization options (indicating that safety protocols are working).
* **Impact Metrics:** Number of descendant board meetings held; successful installation of physical markers or walking tours; web engagement filtered by neighborhood; number of revocation requests processed promptly.

## Risk Register and Mitigations

* **Doxxing and Surveillance:** Mapping precise locations can harm vulnerable narrators [2] [40]. *Mitigation:* Aggregate spatial data, delay release during active housing disputes, and maintain separate storage for identified master files versus public access copies.
* **Consent Drift:** Narrators may change their minds over time. *Mitigation:* Implement easy, publicized revocation workflows and conduct annual audits of consent statuses [2].
* **Storage Sprawl and Link Rot:** Ad-hoc storage (e.g., Google Drive) poses security and preservation risks [2]. *Mitigation:* Designate a formal archival repository (e.g., a university library or city archive) before collection begins; treat the map as a temporary view, not the permanent system of record.

## Resource Library

* **Ethics & Guidelines:** OHA Principles and Best Practices [3] [44]; OHA Social Justice Guidelines [51]; DocNow Ethics White Paper [40] [41].
* **Platforms:** ArcGIS StoryMaps [9]; Omeka + Neatline [14]; Terrastories [24]; Mukurtu [23] [52].
* **Project Exemplars:** Anti-Eviction Mapping Project GitHub [53] [29]; City of Alexandria Oral History Center [13] [6]; StoryCorps Mobile Tour [38] [37].

## References

1. *The CARE Principles for Indigenous Data Governance | Data Science Journal*. https://datascience.codata.org/articles/dsj-2020-043
2. *Anti-Eviction Mapping Project (AEMP) Handbook / ...*. https://oralhistory.org/wp-content/uploads/2024/12/Anti-Eviction-Mapping-Project-Handbook-Ciera-Dudley.pdf
3. *OHA Principles and Best Practices*. https://oralhistory.org/wp-content/uploads/2022/08/OHA-Principles-and-Best-Practice-Print-Version-Updated-2022.pdf
4. *DIS/POSSESSORY DATA POLITICS: From Tenant Screening to Anti‐Eviction Organizing - McElroy - 2023 - International Journal of Urban and Regional Research - Wiley Online Library*. https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-2427.13150
5. *Activating an Archive of Black Life in Brooklyn - Pratt Institute*. https://www.pratt.edu/prattfolio/stories/activating-an-archive-of-black-life-in-brooklyn/
6. *The Alexandria Oral History Center | City of Alexandria, VA*. https://www.alexandriava.gov/historic-alexandria/program/the-alexandria-oral-history-center
7. *Oral Histories | aachm*. https://www.aachm.org/oral-histories
8. *The Colored Rosemont Community History Initiative | City of Alexandria, VA*. https://www.alexandriava.gov/cultural-history/the-colored-rosemont-community-history-initiative
9. *Documenting oral history through maps and ArcGIS StoryMaps*. https://www.esri.com/arcgis-blog/products/story-maps/sharing-collaboration/documenting-oral-history-through-maps-and-arcgis-storymaps
10. *Oral History Format Examples*. https://storymaps.arcgis.com/stories/547e5e265f884c60bc3c069ff4fd868e
11. *Getting started with accessible storytelling - ArcGIS StoryMaps*. https://storymaps.arcgis.com/stories/02670c9018f14cfbbaef7cba5c54d453
12. *Accessibility guidance | ArcGIS StoryMaps Help*. https://doc.esri.com/en/arcgis-storymaps/latest/learn/accessibility-guidance.html
13. *Oral Histories Web App*. https://experience.arcgis.com/experience/bc5e4bec651d465498db5c2ad074068c/page/Page/
14. *
        
            Omeka Classic
        
        
            - Neatline
        
    *. https://omeka.org/classic/plugins/Neatline/
15. *GitHub - omeka-s-modules/ArchivesspaceConnector: Import ArchivesSpace collections into Omeka S · GitHub*. https://github.com/omeka-s-modules/ArchivesspaceConnector
16. *Integrations with ArchivesSpace - ArchivesSpace*. https://archivesspace.org/resources/developers/integrations-with-archivesspace
17. *Exhibit Showcase*. https://www.neatline.org/showcase/
18. *Visualizing a Life, Uprooted: An Interactive, Web-Map and ...*. https://academicworks.cuny.edu/cgi/viewcontent.cgi?article=6813&context=gc_etds
19. *GitHub - mapbox/storytelling: Storytelling with maps template · GitHub*. https://github.com/mapbox/storytelling
20. *GitHub - antievictionmappingproject/displacementmap-server: API for eviction data from the Anti-Eviction Mapping Project · GitHub*. https://github.com/antievictionmappingproject/displacementmap-server
21. *GitHub - antievictionmappingproject/www · GitHub*. https://github.com/antievictionmappingproject/www
22. *StoryMapJS*. https://storymap.knightlab.com/
23. *Designed with Care: Mukurtu Provides Ethical Tools for Archiving and Preservation of Indigenous Heritage | Mellon Foundation*. https://www.mellon.org/grant-story/mukurtu-provides-ethical-tools-for-archiving-and-preservation
24. *Home - Terrastories*. https://terrastories.app/
25. *Amazon Conservation Team builds Terrastories with Mapbox GL JS*. https://www.mapbox.com/showcase/amazon-conservation-team
26. *Mapping and recording place-based oral histories*. https://terrastories.app/wp-content/uploads/2023/07/ACT_OralHistories_Guide_2019_ENGLISH.pdf
27. *Mukurtu CMS: An Indigenous Archive and Publishing Tool | Humanities for All*. https://humanitiesforall.org/projects/mukurtu-an-indigenous-archive-and-publishing-tool
28. *‘Community history at its best:’ Documenting Alexandria’s ‘Colored Rosemont’ - WTOP News*. https://wtop.com/alexandria/2025/09/community-history-at-its-best-documenting-alexandrias-colored-rosemont/
29. *About the Anti-Eviction Mapping Project (AEMP)*. https://antievictionmap.com/about-the-aemp
30. *Pratt students create oral history project to recognize first Black settlement | amNewYork*. https://www.amny.com/news/pratt-students-create-oral-history-project-to-recognize-first-black-settlement/
31. *AACHM Living Oral History Digital Collection*. https://aadl.org/aachm_loh_digitalcollection
32. *Historical Map of Black Bottom Detroit | Black Bottom Digital Archive*. https://digital.blackbottomarchives.com/historical-map/
33. *Recording Equipment - Oral History - Guides at Texas Tech University*. https://guides.library.ttu.edu/c.php?g=1275281&p=9356299
34. *Choosing Recording Equipment (U.S. National Park Service)*. https://www.nps.gov/articles/000/oral-history-resources-choosing-recording-equipment.htm
35. *Doing Oral History Is Slow Work. Can Artificial Intelligence ...*. https://www.dsgains.pitt.edu/doing-oral-history-slow-work-can-artificial-intelligence-help-part-2
36. *Imperial War Museums, Capgemini, and Google Cloud Make 20,000 Hours of Oral Testimonies Accessible with Cutting-Edge AI - Jul 9, 2025*. https://www.googlecloudpresscorner.com/2025-07-09-Imperial-War-Museums,-Capgemini,-and-Google-Cloud-Make-20,000-Hours-of-Oral-Testimonies-Accessible-with-Cutting-Edge-AI
37. *Inside StoryCorps: The Magic of the Mobile Tour*. https://storycorps.org/inside-storycorps-the-magic-of-the-mobile-tour/
38. *The StoryCorps App*. https://storycorps.org/participate/storycorps-app/
39. *Docnow – Docnow*. https://www.docnow.io/
40. *Documenting the Now Ethics White Paper – Docnow*. https://www.docnow.io/documenting-the-now-ethics-white-paper/
41. *Documenting The Now White Paper - GitHub*. https://raw.githubusercontent.com/DocNow/docnow.github.io/master/docs/docnow-whitepaper-2018.pdf
42. *Some Thoughts on Ethics and DocNow | by Bergis Jules | Documenting DocNow | Medium*. https://medium.com/documenting-docnow/some-thoughts-on-ethics-and-docnow-d19cfec427f2
43. *Imperial War Museums case study*. https://www.capgemini.com/wp-content/uploads/2025/07/Imperial-War-Museums-client-story-case-study.pdf
44. *OHA Principles and Best Practices*. https://www.oralhistory.org/wp-content/uploads/2019/03/OHA-Principles-and-Best-Practices-Adopted-2018.pdf
45. *Doing Right Online – AHA*. https://www.historians.org/perspectives-article/doing-right-online-archivists-shape-an-ethics-for-the-digital-age-november-2016/
46. *GitHub - antievictionmappingproject/covid-19-map: COVID-19 Emergency Tenant Protections Map. No longer in use. This is the new repo: https://github.com/antievictionmappingproject/covid-19-map-react · GitHub*. https://github.com/antievictionmappingproject/covid-19-map
47. *Host Leaflet Webmap on GitHub Pages*. https://www.youtube.com/watch?v=gqIWUBf-Qjw
48. *Dublin Core Metadata*. https://sustainableheritagenetwork.org/system/files/atoms/file/Metadata_for_cultural_heritage_materials_document_SarahSeymore.pdf
49. *Oral History Metadata and Description: A Survey of Practices*. https://www.oralhistory.org/wp-content/uploads/2021/01/OHA-MTF-White-Paper_2020.pdf
50. *Oral History - Voices of Lefferts*. https://voicesoflefferts.org/oral-history/
51. *Guidelines for Social Justice Oral History Work - Oral History Association*. https://oralhistory.org/guidelines-for-social-justice-oral-history-work/
52. *Mukurtu CMS | NSW Australian Mukurtu Hub *. https://mukurtu-australia.libraries.wsu.edu/mukurtu-cms
53. *Anti-Eviction Mapping Project*. https://antievictionmap.com/
