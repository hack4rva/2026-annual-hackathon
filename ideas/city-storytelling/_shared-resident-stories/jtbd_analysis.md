# JTBD Analysis — Resident Stories as Civic Insight

**Pillar:** A City That Tells Its Stories
**Problem Statement (verbatim):** Resident Stories as Civic Insight — Give residents a trusted, accessible way to share their lived experiences so community narratives can inform City decisions.
**Applies to:** Fulton Oral History Map, Richmond Stories Online, ExploreRVA (partial)

---

## Jobs To Be Done

### Job 1 — The Elder Who Carries the Memory of a Neighborhood That No Longer Exists
> "When I (an aging Richmond resident from a historically displaced neighborhood like Fulton, Jackson Ward, or Gilpin Court) carry memories of what my neighborhood was before urban renewal demolished it — the corner stores, the churches, the block parties, the people — I want to share my story in a way that preserves it permanently and makes it accessible to people who weren't there, so the real history of this place survives even after everyone who lived it is gone."

**Current workaround:** Tell stories to grandchildren and church friends, hoping they remember. Participate if a university researcher or museum exhibit happens to seek them out — the Historic Fulton Oral History Project captured 17 interviews with 32 participants, but only because VCU, The Valentine, and Virginia LISC organized and funded the effort (`D4_data_oral_history_archives.md`). Physical transcripts sit in 11 institutions, but most residents don't know they exist. For neighborhoods other than Fulton — Jackson Ward, Church Hill, Gilpin Court, Carver — there are near-zero publicly accessible digital oral histories (`D4_data_oral_history_archives.md`). Residents who never get approached by an institution simply never get recorded.

**Pain:** The knowledge is irreplaceable and time-sensitive. Richmond's Black population decreased 7% from 2000–2016 while the White population increased 35%, with gentrification acutely concentrated in historic Black neighborhoods like Jackson Ward and Church Hill (`A5_problem_landscape_neighborhood_change.md`). Public housing communities — Gilpin Court, Creighton Court, Mosby Court — are undergoing demolition and mixed-income redevelopment, physically erasing the places these stories are anchored to (`A5_problem_landscape_neighborhood_change.md`). In key East End census tracts, up to 66.2% of households lack broadband and 47.7% lack smartphones; Black residents are 115% more likely to lack internet access than the citywide average (`B3_users_longtime_resident_storyteller.md`). Standard digital collection tools will systematically fail this user. Voice-based hotlines, in-person pop-up booths at trusted anchors like The Market @ 25th, and paper mail-in kits are required — but no such citywide infrastructure exists. The window to capture six decades of neighborhood memory is closing with every demolition and every funeral.

### Job 2 — The Newcomer Who Walks Through History Without Knowing It
> "When I (a VCU or UR student, or a recent transplant to Richmond) walk through a neighborhood I know nothing about — past boarded-up lots in Fulton, renovated rowhouses in Jackson Ward, murals in Church Hill — I want to discover the history of the specific streets and places I pass through every day, in a format that feels like exploration rather than homework, so I understand what this city actually is beyond what I can see right now."

**Current workaround:** Google the neighborhood name and find a Wikipedia paragraph, a real estate blog, or a gentrification thinkpiece. Stumble onto GPSmyCity's 3 pre-built Richmond walking tours or izi.TRAVEL's Civil War legacy tour — functional but shallow, covering tourist sites rather than lived neighborhood memory (`E3_prior_art_place_based_stories.md`). Encounter VCU's digitized 1876 Beers Atlas or 1889 Baist Atlas online and find them fascinating but disconnected from any narrative context (`E3_prior_art_place_based_stories.md`). Notice the 17 Slave Trail markers in Shockoe Bottom but have no way to access the oral histories that contextualize them. Miss the Fulton Oral History Project entirely because it lives on an academic repository (VCU Scholars Compass) that no one under 30 browses casually (`D4_data_oral_history_archives.md`).

**Pain:** Richmond has rich existing content — 150+ downtown murals cataloged by Venture Richmond, the Slave Trail brochure, VCU's digitized atlases, Mending Walls trust-building murals — but none of it is connected to lived neighborhood stories in a single discoverable place (`E3_prior_art_place_based_stories.md`). The content that does exist online is scattered across institutional repositories with no cross-linking, no geospatial context, and no entry point for someone who just wants to understand where they live. The result is a city where newcomers consume neighborhoods as aesthetic products without understanding the displacement, community organizing, and cultural loss embedded in the same blocks. Place-based storytelling tools exist (QR + web pages, VoiceMap, ArcGIS StoryMaps) and are weekend-buildable (`E5_prior_art_weekend_viable.md`), but no one has connected Richmond's existing content assets into a neighborhood-level discovery experience.

### Job 3 — The City Decision-Maker Who Hears Only the Loudest Voices
> "When I (a city planner, community development staffer, or elected official) make decisions about neighborhoods undergoing rapid change — rezoning Gilpin Court, approving the Diamond District, allocating capital improvement funds — and the only input I have is 1,300 survey responses, 150 draft-plan comments, and testimony from repeat public-hearing participants, I want to understand how current and former residents actually experience the place, so my decisions are informed by lived reality rather than zoning maps and demographic tables alone."

**Current workaround:** Fulfill legal public engagement requirements — hold public meetings, publish surveys, accept written comments. For the Diamond District, the City collected 1,300 survey responses, held four community meetings, and received 150 comments on the draft plan, but there is no published evidence of how qualitative comments influenced the final scope (`A2_problem_landscape_civic_storytelling.md`). Planning Commission meetings are dominated by repeat participants (neighborhood association leaders, developers, attorneys), while renters, non-English speakers, and residents outside the 150-foot mailing radius are structurally absent. Staff spend 60% of time on application review and only 5% on community communication. Richmond's eviction rate is 11.44% — second-highest nationally — meaning the most displacement-vulnerable residents are the least likely to appear in any formal engagement channel (`A2_problem_landscape_civic_storytelling.md`).

**Pain:** The City's engagement tools prioritize quantitative aggregation over qualitative depth. RVA311 confines input to predefined categories; public hearings impose time limits that force residents to compress multi-generational neighborhood experience into three-minute soundbites; surveys produce charts and percentages that erase individual narratives (`A2_problem_landscape_civic_storytelling.md`). Without a public-facing "citation tracker" that links resident stories to specific policy decisions, community engagement becomes performative — collection without use is archiving (`A2_problem_landscape_civic_storytelling.md`). No one tracks who participates in Planning Commission hearings, so there is no baseline to measure whether new tools are reaching underrepresented residents. The 59% renter population is structurally invisible to the notification system (mailed to property owners only), and no demographic data on public commenters exists. Decision-makers who want to do better have no mechanism to hear from the people most affected by their decisions.

---

## Open Questions

### Data Questions
1. What is the current rights status of the 16 publicly accessible Historic Fulton Oral History interviews — can they be embedded and linked in a third-party tool under The Valentine's copyright, or does each use require individual permission?
2. How many Richmond-tagged oral histories exist in the StoryCorps archive after filtering out Richmond, California results — and what percentage have usable transcripts and clear reuse licenses?
3. Does VCU's Scholars Compass / Islandora platform expose a stable API (IIIF Presentation or OAI-PMH) for programmatic access to the Fulton audio files and transcripts, or is HTML harvesting the only reliable ingestion path?
4. What digitized oral history assets exist for Jackson Ward, Church Hill, Gilpin Court, Carver, and Oregon Hill — are there physical collections at VCU Special Collections, The Valentine, BHMVA, or the Library of Virginia that are near-ready for digitization?

### User Questions
5. What is the realistic participation rate for a voice-based story capture hotline in East End census tracts where 66.2% of households lack broadband — is the 73% community interest rate from Team Temporary's social polls a credible signal, or does it reflect sampling bias?
6. How do longtime Black residents in Church Hill and Fulton perceive institutional story-collection efforts — as welcome preservation or as extractive documentation by outsiders?
7. What story formats (audio, video, text, photo + caption, map annotation) do residents aged 65+ actually prefer when given a choice, and how does this differ from what students and newcomers prefer?
8. What incentive structures (grocery gift cards, printed story keepsakes, public recognition) most effectively motivate elder participation while respecting the 138% higher unbanked rate among Black Richmond residents?

### Integration Questions
9. Can a story collection tool cross-link submitted narratives with Richmond GeoHub's 148-neighborhood boundary layer to automatically tag stories by place — and is the neighborhood layer granular enough to distinguish sub-neighborhood identities (e.g., Fulton vs. Montrose Heights)?
10. What is the integration path to connect resident stories with the Richmond 300 Master Plan's "Priority Neighborhoods" framework so that planners can query stories by the neighborhoods they're actively making decisions about?
11. Could a story portal syndicate content to both VCU Libraries (for archival preservation) and The Valentine (for exhibit curation) through a shared metadata schema, or do institutional workflows require separate ingest pipelines?

### Equity Questions
12. What languages beyond English and Spanish are needed for meaningful participation in East End and Southside story collection — specifically, what is the reach requirement for Mixteco, Arabic, Vietnamese, Kinyarwanda, and Amharic speakers identified in Richmond's Language Access Plan?
13. How do teams prevent a story collection tool from becoming a "megaphone for the already-heard" — what specific design patterns prevent self-selection bias from overrepresenting educated, digitally fluent, English-speaking residents?
14. What trauma-informed consent protocols are required when collecting stories about displacement, eviction, urban renewal demolition, and criminal justice — and can a weekend prototype implement even a minimal version responsibly?
15. How should stories from minors (under 13) be handled given COPPA requirements that define public posting as "disclosure" requiring verifiable parental consent?

### Prior Art Questions
16. Why did the Historic Fulton Oral History Project capture only 17 interviews across one neighborhood in 2011–2012 and then stop — was it funding, institutional capacity, or community fatigue, and what does that imply for scalability?
17. What happened to Neighborland (acquired by Nextdoor in 2020) and Detour (shut down, stranding users) — what do these platform deaths teach about vendor lock-in risks for civic story tools?
18. How does The Valentine's Deed of Gift model for rights transfer compare to a Creative Commons or contributor license approach — which is more appropriate for a digital-first story portal that may outlive any single institution?
19. What distinguishes the StoryCorps model (facilitated remote recording, institutional archive) from a self-serve web submission portal in terms of story quality, completion rate, and community trust?
20. Has any U.S. city successfully connected a resident story collection platform to an active policy feedback loop — where stories demonstrably influenced a specific planning or budget decision — or is "stories informing decisions" still aspirational everywhere?

## Answered Questions (Parallel AI Research, April 2026)

Research synthesis from `archive/reviews/city-storytelling/_research-answers/rs_q1_data.md` and `rs_q2_equity.md`. Tags indicate how fully Parallel AI research resolved each open question.

### Data Questions

1. **`[Partial]`** The public **Historic Fulton** collection is documented as **17 interviews** / **32 participants**; **The Valentine** holds **copyright** — **non-commercial use permitted**, **commercial use requires permission**. **Embedding in third-party tools** is **not documented**; **direct inquiry** (e.g., VCU Libraries Digital Collections / rights holder) still needed.

2. **`[Partial]`** **StoryCorps:** Richmond-related interviews exist (including initiatives such as LPS-Richmond / Take One Small Step) but **no precise filtered count** without manual review. **Machine-generated transcripts** are **not accuracy-verified**. **Terms** allow **personal use** only — **not** Creative Commons-style open reuse.

3. **`[Partial]`** **No public documentation** found that **Scholars Compass / Islandora** exposes **stable IIIF or OAI-PMH** for oral history collections; **contact VCU Libraries** to confirm any programmatic access.

4. **`[Confirmed]`** **Digitized / documented oral history assets** include **Jackson Ward** and **Oregon Hill** (VCU Oral History Archive), **Church Hill** (Church Hill Oral Histories, VCU), **Carver** (Carver-VCU Partnership Oral History Collection), **Gilpin Court** (student-led project referenced via Yale Teachers Institute guide — not a full VCU collection summary).

### User Questions

5. **`[Still Unknown]`** Voice hotline **participation rates** in low-broadband tracts and validation of **73% “interest”** polling were **not** addressed in this research.

6. **`[Partial]`** **Historic Fulton** project documentation quotes residents/partners framing it as **welcome preservation** and **“true story”** corrective history — **not** characterized as extractive in provided sources. **Church Hill** collection: **size** noted (**34 transcripts**); **resident perception** of the **collection process** was **not** evidenced in the material.

7. **`[Partial]`** **65+:** National **2026-oriented** trends cite high **social/text/video** use; for **memory-sharing**, **photo-elicitation** studies (**65–94**) show **deeper accounts** than verbal-only — **photo + caption** is a strong candidate alongside **multi-modal, low-barrier** options (text, phone audio, facilitated A/V).

8. **`[Still Unknown]`** **Incentive structures** (gift cards, keepsakes, recognition) vs. **unbanked** constraints were **not** researched here.

### Integration Questions

9. **`[Partial]`** **Richmond GeoHub** **Neighborhoods** layer: **148** features **confirmed**; whether polygons **split sub-neighborhoods** (e.g., **Fulton vs. Montrose Heights**) requires **data inspection** or **GIS staff** confirmation.

10. **`[Still Unknown]`** **Richmond 300 “Priority Neighborhoods”** integration path for story querying was **not** addressed.

11. **`[Still Unknown]`** **Dual syndication** (VCU + Valentine) via **one schema** vs. **separate pipelines** was **not** addressed.

### Equity Questions

12. **`[Partial]`** Research emphasizes **Spanish, Arabic, Dari, Pashto**, and **Swahili / East African** contexts via **ReEstablish Richmond**, **Sacred Heart Center**, **VDH Office of New Americans** — it does **not** map **Mixteco, Vietnamese, Kinyarwanda, Amharic** to **Language Access Plan** thresholds.

13. **`[Partial]`** **Trust and non-extractive framing** (Fulton as model), **facilitated vs. self-serve** tradeoffs, and **feedback loops** are discussed; **specific anti–self-selection UI patterns** were **not** enumerated as a checklist.

14. **`[Confirmed]`** **Trauma-informed practice** is supported with **Oral History Association**-style **rolling consent** steps (ongoing assent, review before release, withdrawal, documentation). **Voice of Witness**-aligned themes appear in the broader equity narrative.

15. **`[Confirmed]`** **COPPA:** photos/audio/video of children are **personal information**; **verifiable parental consent** required for **public posting**; **email-plus** only for **non-public** child data; methods include **card transaction, trained staff video/phone, KBA, government ID** — **not** a simple checkbox.

### Prior Art Questions

16. **`[Partial]`** **32 participants** vs. **17 published** interviews is **documented**; **definitive reason** (funding, capacity, scope, fatigue) for the **gap** or **“why it stopped”** is **not** stated in sources — remains **speculative**.

17. **`[Partial]`** **Detour:** **acquired by Bose**, shut down (**May 31, 2018**) — **platform death / portability** lesson documented. **Neighborland → Nextdoor** is referenced in the research narrative; **less operational detail** than Detour in the structured extracts.

18. **`[Confirmed]`** **Deed of Gift:** **transfers ownership** to the institution; permissions **per deed**. **vs. CC:** creator **retains copyright** with **predefined public permissions** — tradeoffs for a **digital-first, long-lived** portal are **clear at a high level**; **The Valentine’s** exact deed text was **not** reproduced.

19. **`[Partial]`** **StoryCorps:** **Signature (facilitated)** → higher **audio/metadata quality** and **“trusted process”** framing; **self-serve (App / Connect)** → **variable quality**, consent burden on user. **Comparative completion rates** — **not** in public documentation per research.

20. **`[Confirmed]`** **Santa Monica Wellbeing Project** ties **resident/qualitative data** to **department workplans and budgets** (e.g., wellbeing strategies in annual plans; **RAND** and **LA County** partnership examples; **CDO** role from operational impact narrative).

### Summary tally (Resident Stories as Civic Insight)

| Tag | Count |
|-----|-------|
| `[Confirmed]` | 5 |
| `[Partial]` | 11 |
| `[Still Unknown]` | 4 |
| **Total questions** | **20** |

---
