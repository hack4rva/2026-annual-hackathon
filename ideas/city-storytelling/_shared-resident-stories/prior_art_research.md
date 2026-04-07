# Prior Art Research — Resident Stories as Civic Insight

**Pillar:** A City That Tells Its Stories
**Problem Statement (verbatim):** Resident Stories as Civic Insight — Give residents a trusted, accessible way to share their lived experiences so community narratives can inform City decisions.
**Applies to:** Fulton Oral History Map, Richmond Stories Online, ExploreRVA (partial)

---

## Summary of Findings

Richmond has substantial existing oral history assets, proven place-based storytelling toolkits, and well-documented failure patterns to learn from. The core tension across all prior art is this: **collection tools are plentiful, but the feedback loop from stories to policy decisions barely exists anywhere.** The teams that succeed will be the ones that close that loop — even symbolically — within a weekend prototype.

---

## 1. Richmond's Oral History Ecosystem — What Already Exists

### The Fulton Model: Proof of Concept, Not Scale

The Historic Fulton Oral History Project (2011–2012) is the single best local precedent. It captured 17 interviews with 32 named participants documenting life in the predominantly African-American Fulton community from the 1930s–1950s and the impact of the 1970s urban renewal demolition. Full streaming audio and searchable transcripts are publicly accessible through VCU Scholars Compass. Physical copies are distributed across 11+ sites (BHMVA, VCU, Library of Virginia, Richmond Public Library, The Valentine). One interview (Spencer Edward Jones, III) is restricted to in-person access at The Valentine.

**Rights structure:** VCU hosts the files, but copyright is held by The Valentine. Non-commercial use is permitted; commercial use requires explicit permission. The project was a partnership between VCU, The Valentine, Virginia LISC, and the Neighborhood Resource Center of Greater Fulton.

**What it proves:** A neighborhood-scale oral history collection is achievable with institutional partnership. The distributed custody model (copies at 11 sites) builds community trust by preventing any one institution from being the sole gatekeeper.

**What it doesn't solve:** Scale. Only one neighborhood was covered. Jackson Ward, Church Hill, Gilpin Court, Carver, Shockoe Bottom, and Oregon Hill have near-zero publicly accessible digital oral histories. The project ran once and stopped — it is not a living collection.

*Sources: `D4_data_oral_history_archives.md`, `C3_services_oral_history_institutions.md`*

### Institutional Landscape

| Institution | Holdings | Digital Access | Role for Teams |
|---|---|---|---|
| **VCU Libraries** | Fulton OH (17 interviews); VCU institutional oral histories; 1876 Beers Atlas and 1889 Baist Atlas (digitized, rights-free) | Public streaming + transcripts via Scholars Compass; IIIF support | Immediate ingest partner for seed content; metadata expertise |
| **VMHC** | Virginia & the Vietnam War OH (2023–2024); Rosenwald Schools OH | Public streaming on VMHC website | Active production pipeline; statewide amplification |
| **The Valentine** | Copyright holder for Fulton OH; Voices from Richmond's Hidden Epidemic (HIV/AIDS, 2020) | Exhibit-based; long-term digital availability unclear | Rights clearance gatekeeper; community hub; exhibit curation |
| **BHMVA** | Physical copies of Fulton OH transcripts | Onsite researcher access only | High community trust; ideal co-lead for new Black neighborhood collection |
| **Library of Virginia** | Statewide holdings; WPA-era interviews; Fulton physical copies | Some digital via Virginia Memory | Long-term preservation; statewide discovery |
| **StoryCorps** | Richmond content likely exists but requires validated filtering | Archive requires account; "Richmond" tag pulls California results | Volume supplement after manual QA to exclude Richmond, CA |

*Sources: `C3_services_oral_history_institutions.md`, `D4_data_oral_history_archives.md`*

### External Data Traps

StoryCorps searches for "Richmond" return results from Leadership Public Schools in Richmond, California. The Internet Archive has similar California contamination. Any integration must enforce strict "Richmond (Va.)" subject filters and local institution keyword whitelists.

*Source: `D4_data_oral_history_archives.md`*

---

## 2. Story Collection Tools — What Works and What Kills Projects

### Tool Inventory

| Tool / Model | How It Works | Weekend-Buildable? | Key Risk |
|---|---|---|---|
| **ArcGIS StoryMaps** | Web-based maps + narrative text + multimedia. Used by 20,000+ cities. | No — requires Esri licensing and institutional setup | Regional hosting lock-in (chosen at creation, cannot change). Navigation unintuitive without added UX prompts. |
| **StoryCorps Connect** | Remote interview recording via shared link | Partial — recording works, but municipal terms/export rights unclear | Verify data export rights and takedown SLAs before relying on it |
| **Voice-First / IVR** | AI/NLP understands speech, auto-detects language, routes via feature phones | Backend setup possible in a weekend; robust moderation is not | Requires transcription accuracy and language staffing at scale |
| **QR + Static Web** | QR codes on stickers linking to lightweight mobile web pages with audio/text | Yes — 1–2 days with owned domain | Requires cellular data; no offline support |
| **VoiceMap** | Creator-published GPS audio tours with text-to-speech prototyping | Yes — 3–7 days | Quality varies by creator; revenue share model |
| **Supabase + Next.js** | Full-stack story submission portal with auth, storage, and Postgres | Yes — scaffold in one command via `npx create-next-app -e with-supabase` | Audio capture quirks in browsers; default to file upload over in-browser recording |
| **Leaflet + Wikipedia Geosearch** | Map seeded with 100 zero-auth geolocated results per API call | Yes — zero API keys required | Sparse results in some neighborhoods; preload NRHP/Wikidata fallbacks |

*Sources: `E2_prior_art_story_collection.md`, `E3_prior_art_place_based_stories.md`, `E5_prior_art_weekend_viable.md`*

### The "Place-Based Stories Explorer" — Highest-Confidence Weekend MVP

The prior art research converges on a dual-track MVP: a Leaflet-based map seeded with open data (Wikipedia Geosearch, NRHP, Wikidata) paired with a Supabase-backed story submission portal. This pattern scores highest on the weekend viability index because it relies on zero-authentication APIs and standard web forms, completely bypassing institutional data-sharing agreements.

Stretch goals (in order of diminishing weekend viability): Metabase Docker dashboard for submission visualization, VoiceMap syndication for the solo-traveler audience, single-source Eventbrite event feed with hardcoded JSON fallback.

*Source: `E5_prior_art_weekend_viable.md`*

---

## 3. Consent Frameworks — What Earns Trust from Vulnerable Residents

### Museum-Grade Baseline: The Valentine's Deed of Gift

The Valentine requires formal Deeds of Gift sent to donors for signature to complete transfer of title and rights. This is the gold standard for permanent archival but too heavyweight for a weekend prototype's submission flow.

### Trauma-Informed Practice

Reflecting on the past can trigger distress or re-traumatization, especially for marginalized narrators. The Texas After Violence Project trains community members to conduct interviews responsibly. Oral history projects must build safety, respect, and empathy into every step. The Protocols for Native American Archival Materials dictate that best practices must be interpreted and applied uniquely by each community.

### Implementable Consent Model

The research recommends tiered consent at submission:
- **Public named** — full attribution
- **Public anonymized** — voice altered, name removed
- **Restricted staff-only** — accessible only to City staff or partner institutions

Plus: clear rights language on purpose/storage/duration/downstream uses, community advisory review for sensitive narratives, visible takedown option, and a "what happened with my story" action tracker.

### COPPA and Minors

Allowing minors to post stories publicly constitutes "disclosure" requiring verifiable parental consent under COPPA. Voice recordings, photos, and videos are always PII under federal guidelines (18F/GSA). A simple age screen ("Are you under 13?") should route to a parental consent workflow or delete the data.

*Sources: `E2_prior_art_story_collection.md`, `G2_risks_consent_privacy.md`, `G4_risks_copyright_attribution.md`*

---

## 4. Failure Patterns — What Has Killed Civic Story and Event Platforms

### Platform Death

| Platform | What Happened | Lesson |
|---|---|---|
| **Detour** (audio tour app) | Shut down entirely; users lost access to purchased tours | Never make a third-party app the sole custodian of community content. Canonical content must live on an owned domain. |
| **Neighborland** (civic engagement) | Acquired by Nextdoor in 2020; terms of service shifted | Vendor lock-in is a material risk. Maintain data ownership and export rights contractually. |
| **Yahoo Upcoming** (event calendar) | Shut down in April 2013 as part of corporate consolidation | Civic tools relying on corporate APIs are vulnerable to sudden deprecation. Build local data caching. |

### Collection Without Closure

The most common failure mode is collecting stories without connecting them to action. Research explicitly warns: "Collection without use is archiving." When Richmond collected 1,300 survey responses and 150 comments for the Diamond District and produced purely technical zoning documents, the qualitative input was effectively archived — not used. Without a visible "What we heard → What we changed" tracker, engagement becomes performative and breeds cynicism.

### The "Ghost Calendar" Trap

Platforms that treat users as passive consumers (read-only calendars, static archives) decay rapidly. Eventful survived and was acquired by CBS Local Media because it let users actively "Demand" events — turning passive discovery into active civic participation. Platforms that integrate user agency sustain engagement.

### Representational Bias

Opt-in digital platforms inherently produce non-probability samples that overrepresent educated, English-speaking, digitally fluent residents. Presenting this data as "what Richmond thinks" inflicts representational harm. Dashboards must state methodological limitations, and any prototype must pair digital intake with offline channels (phone hotlines, pop-up booths, mail-in kits) to reach the populations most affected by the decisions stories are meant to inform.

*Sources: `E4_prior_art_failures.md`, `E3_prior_art_place_based_stories.md`, `A2_problem_landscape_civic_storytelling.md`, `G1_risks_representational_bias.md`*

---

## 5. Richmond's GIS and Boundary Data — What's Available for Mapping Stories

Richmond GeoHub provides authoritative layers for geospatial story mapping:

- **Neighborhoods** — 148 distinct boundaries (Feature Layer, Nov 2019). The correct primary framework for story discovery — ensures stories from Scott's Addition, Manchester, Church Hill are all discoverable.
- **Arts and Cultural District** — 1 polygon (Feature Layer, Jan 2022). Useful as a branded overlay but artificially restrictive as a primary filter.
- **City Old and Historic Districts** — 45 records. Contextual overlay for preservation areas.
- **Parks** — 169 records. Outdoor event and cultural programming venues.
- **Public Libraries** — 9 records. Cultural programming nodes.

All Feature Layers offer FeatureServer API access and GeoJSON/Shapefile download. A hybrid boundary strategy (neighborhoods as primary filter, arts district as overlay) is recommended.

*Source: `D5_data_gis_arts_districts.md`*

---

## 6. City Communications Infrastructure — What Channels Exist

Richmond's current engagement toolbox is transactional, not narrative:

- **RVA311** — customer service and issue reporting, confined to predefined categories
- **City Council / Planning Commission meetings** — time-limited public comment
- **Project surveys** — aggregate input into statistics (e.g., Diamond District: 1,300 responses, 150 comments)
- **No municipal story collection platform exists**

The City has no mechanism for open-ended narrative capture, no oral history pipeline, and no public tracker connecting community input to policy outcomes.

*Sources: `C4_services_city_communications.md`, `A2_problem_landscape_civic_storytelling.md`*

---

## 7. Implications for Teams

### What the Fulton Oral History Map should leverage
The 16 publicly accessible Fulton interviews are the single best seed dataset. VCU's IIIF support and Scholars Compass make programmatic access feasible. Geospatial mapping of interview locations against the 148-neighborhood GeoHub layer gives immediate demo credibility. The distributed custody model (physical copies at 11 sites) is a trust asset to highlight.

### What Richmond Stories Online should leverage
The Valentine partnership provides institutional credibility, rights management infrastructure (Deed of Gift), and exhibit curation expertise. VMHC's active oral history production pipeline (Vietnam War, Rosenwald Schools) offers content for a "Richmond voices" playlist. The hybrid ArcGIS StoryMaps + voice-first intake model is the recommended long-term architecture.

### What ExploreRVA should leverage
Existing seed content — 150+ murals, 17 Slave Trail markers, VCU's digitized atlases — is rich enough to launch a credible place-based discovery experience. QR + static web is weekend-buildable. VoiceMap syndication extends reach to solo travelers. The "man on the corner" framing is exactly the living memory that the Fulton Oral History Project captured and that other neighborhoods still lack.

### Universal risk for all three
A prototype that collects stories without even symbolically demonstrating how they inform decisions will replicate the exact failure pattern the problem statement is trying to solve. Even a hardcoded "What we heard → What we're considering" mock-up is better than a collection portal with no visible action loop.

---
