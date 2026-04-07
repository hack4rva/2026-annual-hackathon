# Innovation Analysis: Fulton Oral History

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** Oral history projects require professional archivists and institutional infrastructure to be valuable.

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Professional-only recording workflows | Pratt-Weeksville proved cell-phone frameworks empower residents to interview one another; Fulton descendants should drive collection, not wait for archivists |
| **Eliminate** | Single-institution custody model | VCU hosts Fulton streaming audio, The Valentine holds copyrights — but neither institution surfaces these 17 interviews where descendants actually gather |
| **Reduce** | Archival metadata complexity for initial capture | Dublin Core is important for preservation but shouldn't gate community participation; capture name, date, location, consent first — enrich later |
| **Reduce** | Dependency on in-person recording sessions | StoryCorps Connect and TheirStory enable remote capture; expand beyond pop-up events |
| **Raise** | Descendant governance and review authority | Alexandria's Colored Rosemont model — descendant advisory board reviews all interpretation and signage; Fulton needs the same |
| **Raise** | Physical-digital integration | Alexandria earned a Virginia State Highway Marker and Heritage Trail from their oral history project; Fulton should pair digital maps with physical markers |
| **Create** | Location-sensitive consent tiers | AEMP's tiered consent (full / clip-only / anonymized) with location redaction prevents gentrification-enabling harm; map Fulton stories at block level, not address level |
| **Create** | Living archive linked to UofR "Renewing Inequality" data | Overlay Fulton oral histories on UofR's Digital Scholarship Lab maps showing 1950s-60s urban renewal displacement — make the personal and the structural visible together |

**Key reframe:** Fulton's oral history project already exists (17 interviews at VCU). The innovation isn't starting from scratch — it's activating a dormant archive by connecting it to descendant governance, spatial context, and public memory infrastructure.

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **Fulton Memory Map** — ArcGIS StoryMap overlaying the 17 existing VCU oral histories on a 1950s Sanborn map of Fulton Bottom (following Detroit's Black Bottom model). | Practical |
| 2 | **Phone-First Collection Kit** — $320 library-style kit (Zoom H5 + consent forms + Fulton-specific interview guide). Distribute through East End libraries. Residents record neighbors. | Practical |
| 3 | **"Before the Bulldozers" Walking Tour** — GPS-triggered audio tour using VoiceMap that plays Fulton oral history clips at the actual sites where homes and businesses stood before the 356-acre demolition. | Moderate |
| 4 | **Consent-as-Code** — Implement AEMP's data model: `consent_mode: full|clip-only|anonymized`, `embargo_until: date`, `sensitivity_level: high|low`. Every story has programmatic consent flags the map respects automatically. | Moderate |
| 5 | **Fulton Descendants Portal** — Mukurtu-style role-based access where descendants can see all stories but the public sees only approved clips. Descendant board controls the release gate. | Moderate |
| 6 | **Highway Scar Overlay** — Map the I-95/I-64 footprint over the original Fulton street grid using UofR "Renewing Inequality" data. Let users toggle between "before" and "after" to see what was erased. | Provocative |
| 7 | **Annual Story Harvest** — Partner with StoryCorps Mobile Tour to do a Fulton-focused recording weekend each year, building the archive incrementally with consistent quality. | Moderate |
| 8 | **Counter-Narrative Generator** — AI tool that takes a city planning document about Fulton (e.g., urban renewal justification) and pairs each claim with contradicting oral history clips from the archive. | Provocative |

## 3. Rapid Design Sprint

**Problem sentence:** The Historic Fulton Oral History Project (17 interviews, 32 narrators) is locked inside VCU's Scholars Compass repository — invisible to descendants, disconnected from the physical landscape, and frozen at 17 interviews with no collection pipeline for new stories.

**User journey (5 steps):**
1. Descendant visits a physical marker at the former Fulton Bottom site → scans QR code
2. Lands on a web-based StoryMap showing a historical Sanborn basemap with pins for each oral history
3. Taps a pin → hears a 2-minute clip from an existing VCU interview with synced transcript (OHMS)
4. Prompted: "Do you have a Fulton story? Record it now." → Opens a simple web recorder (TheirStory-style) with tiered consent form
5. Submission enters a moderation queue reviewed by the descendant advisory board before publication

**Prototype shape:** ArcGIS StoryMap with embedded Survey123 form. Basemap: georeferenced 1950s Sanborn map of Fulton. Pins: 17 existing interviews (audio clips + transcripts from VCU). Submission: Survey123 form with audio upload, consent tier selection, and optional location pin. Moderation: hidden "Review" field in Survey123. No custom backend needed.

**First test:** Embed 5 of the 17 VCU interviews on the map. Install 3 QR code signs at key Fulton sites (e.g., former Fulton Gas Works, Williamsburg Road corridor, Gillies Creek). Measure: QR scans, audio plays, new story submissions over 30 days.

## 4. Opportunity Mapper

### Opportunity 1: Activate a Dormant Archive

| Dimension | Detail |
|-----------|--------|
| **User** | Fulton descendants, Richmond history educators, urban planning students |
| **Outcome** | 17 existing interviews become spatially navigable, audible, and connected to physical landscape |
| **Workflow** | Georectify Sanborn map → pin existing interviews → add OHMS transcript sync → publish StoryMap |
| **Dependencies** | VCU permission to embed/link audio; Sanborn map digitization (likely available via Library of Virginia) |
| **Richmond relevance** | Fulton is one of Richmond's most significant urban renewal displacement stories; 356 acres demolished, comparable to Jackson Ward's I-95 displacement |

### Opportunity 2: Descendant-Governed Collection Pipeline

| Dimension | Detail |
|-----------|--------|
| **User** | Fulton descendants, community organizations (e.g., Fulton Civic Association) |
| **Outcome** | New stories added to archive under descendant review, with tiered consent protecting vulnerable narrators |
| **Workflow** | Phone-first recording → web upload → consent tier selection → descendant board review → publication |
| **Dependencies** | Forming a descendant advisory board; StoryCorps/TheirStory partnership or simple Survey123 audio upload |
| **Richmond relevance** | Alexandria's Colored Rosemont model proves "city + oral history center + descendant board" works; Richmond can replicate with VCU + The Valentine + Fulton descendants |

### Opportunity 3: Policy-Linked Displacement Narrative

| Dimension | Detail |
|-----------|--------|
| **User** | City planners, environmental review staff, advocacy groups |
| **Outcome** | Oral histories serve as qualitative evidence in future development reviews near the Fulton area |
| **Workflow** | Archive feeds into NEPA/environmental review processes; Claiborne Avenue Alliance (New Orleans) precedent |
| **Dependencies** | Legal framework for oral histories in planning reviews; partnership with city planning department |
| **Richmond relevance** | The Shockoe Project ($25M city + $13M state + $11M Mellon) shows Richmond is investing in displacement memory; Fulton archive feeds this momentum |

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 5 | Preserves irreplaceable community memory; aging narrators make collection urgent |
| **Feasibility** | 4 | Existing archive at VCU; ArcGIS StoryMaps is proven for this use case (Alexandria has 200+ mapped histories); Sanborn maps are digitized |
| **Data readiness** | 4 | 17 interviews exist with transcripts; Sanborn maps available; UofR "Renewing Inequality" provides structural context |
| **Problem clarity** | 4 | Clear need: dormant archive, no collection pipeline, no physical markers; descendant community exists |
| **Demo-ability** | 5 | A StoryMap with 5 pinned audio clips on a historical basemap is immediately compelling as a demo |

**Weekend MVP shapes:**
- **Shape A (Archive Activation):** ArcGIS StoryMap with georeferenced Sanborn basemap + 5 embedded VCU interview clips. ~6 hours.
- **Shape B (Collection Pipeline):** Shape A + Survey123 form for new story submission with consent tier dropdown and audio upload. ~10 hours.
- **Shape C (Full Narrative):** Shape B + UofR "Renewing Inequality" overlay showing displacement data + before/after map toggle + 3 QR code sign designs for physical installation. ~18 hours.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | VCU will permit embedding/linking Fulton oral history audio on a new platform | 5 | 3 | 15 | Contact VCU Libraries Special Collections; review existing usage terms |
| 2 | Digitized Sanborn maps of Fulton Bottom exist and can be georectified | 3 | 3 | 9 | Check Library of Virginia digital collections; Sanborn maps are commonly digitized |
| 3 | A descendant advisory board can be formed with sufficient community interest | 4 | 4 | 16 | Reach out to Fulton Civic Association and East End community organizations |
| 4 | Tiered consent model is implementable in Survey123 | 2 | 2 | 4 | Survey123 supports dropdown fields and hidden review fields (documented) |
| 5 | Mapping former addresses doesn't enable gentrification harm in Fulton | 3 | 3 | 9 | Apply AEMP location sensitivity rubric; aggregate to block level if risk is high |
| 6 | Aging narrator population means collection is time-urgent | 5 | 1 | 5 | The 2011 project captured narrators who were already elderly; urgency is near-certain |
| 7 | Physical QR code signs will be maintained and not vandalized | 3 | 3 | 9 | Partner with city for installation; use durable materials; budget for replacement |

**Top 3 to validate first:**
1. **Descendant advisory board formation (R×U=16):** Without community governance, the project risks being extractive. This is the ethical and practical foundation.
2. **VCU audio embedding permission (R×U=15):** The entire "activate dormant archive" premise depends on being able to surface VCU-hosted content.
3. **Sanborn map availability and georectification (R×U=9):** The historical basemap is what makes this spatially compelling; verify it exists in usable form.

---

## Key Takeaway

Fulton's oral history innovation isn't about technology — it's about governance and activation. The archive exists (17 interviews at VCU), the spatial data exists (Sanborn maps, UofR "Renewing Inequality"), and the platform tools are proven (Alexandria mapped 200+ oral histories with ArcGIS). The gap is a descendant-governed pipeline that connects the dormant digital archive to the physical landscape and opens a door for new stories before the remaining narrators are gone. Build the governance first, the map second, the collection pipeline third.
