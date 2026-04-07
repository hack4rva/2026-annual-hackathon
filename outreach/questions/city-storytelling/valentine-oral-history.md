# Outreach: Valentine Museum + Oral History Partners — Cross-Institutional Story Archive — Research & Questions

### What we've confirmed through public sources

- **Historic Fulton Oral History Project:** 17 interviews with 32 participants, conducted in 2011–2012. A collaboration among VCU Libraries, The Valentine, and the Greater Fulton's Future Legacy Committee. The collection is hosted on VCU Libraries' digital platform as streaming audio.
- **Valentine copyright status:** The Valentine holds **copyright** on the Fulton collection. Non-commercial use is permitted; commercial use requires explicit permission. Whether audio or transcripts can be **embedded in third-party tools** is not documented — this is the key question for any prototype.
- **Community reception:** Project documentation quotes residents and partners framing the effort as **welcome preservation** and corrective storytelling. Rev. Mary Perez called it a chance to "tell the true story," and Spencer E. Jones III endorsed it so "everyone will learn the real story about our community." No evidence of residents characterizing the effort as extractive.
- **VCU Scholars Compass:** No public documentation found that VCU's Scholars Compass / Islandora platform exposes a **stable IIIF or OAI-PMH API** for programmatic access to oral history collections. Direct contact with VCU Libraries is needed to confirm any programmatic access path.
- **Other neighborhood collections confirmed:** Digitized oral history assets exist for **Jackson Ward** (VCU Oral History Archive — Dr. Francis M. Foster Sr. interviews), **Church Hill** (34 transcripts + audiocassettes on segregation-era conditions), **Carver** (Carver-VCU Partnership Oral History Collection), and **Oregon Hill** (Dr. J. Maurice Duke interview on construction impacts). Gilpin Court has a student-led project referenced via a Yale Teachers Institute guide but no dedicated VCU collection.
- **StoryCorps Richmond:** Richmond-tagged interviews exist in the StoryCorps archive (including LPS-Richmond and Take One Small Step initiatives), but transcripts are **machine-generated and not accuracy-verified**. Terms allow **personal use only** — not Creative Commons-style open reuse.
- **GeoHub neighborhood layer:** Richmond GeoHub has a **148-neighborhood boundary layer** confirmed. Whether polygons distinguish sub-neighborhoods (e.g., Fulton vs. Montrose Heights) requires data inspection or GIS staff confirmation.
- **Deed of Gift vs. Creative Commons:** The Valentine uses a **Deed of Gift** model that transfers ownership to the institution, with permissions controlled per deed. Creative Commons licenses retain creator copyright with predefined public permissions. For a digital-first story portal that may outlive any single institution, this distinction is critical for determining who controls reuse rights over time.
- **Trauma-informed consent:** The Oral History Association mandates **rolling consent** — ongoing assent, review before release, right to withdraw, and documented consent checkpoints. Voice of Witness alignment supports these principles for displacement and urban renewal narratives. A minimum responsible implementation is possible even in a weekend prototype.
- **COPPA requirements:** Photos, audio, and video of children under 13 are personal information under COPPA. **Verifiable parental consent** is required before public posting — methods include credit card transaction, trained staff video/phone verification, knowledge-based authentication, or government ID. A simple checkbox is legally insufficient.
- **Photo-elicitation research:** Studies with adults aged 65–94 show that using photos as prompts produces **deeper, more elaborate accounts** than verbal-only interviews. The method encourages spontaneous, frank conversation and increases participants' sense of agency — making "photo + caption" a strong format for elder story collection.
- **Platform death lessons:** Detour was acquired by Bose and shut down May 31, 2018, stranding users and content. Neighborland was acquired by Nextdoor in 2020. Both demonstrate the need for **data portability and open standards** in any civic story platform to prevent vendor lock-in.
- **Digital divide:** In key East End census tracts, up to **66.2% of households lack broadband** and **47.7% lack smartphones**. Black residents are 115% more likely to lack internet access than the citywide average. Standard digital collection tools will systematically miss this population.

### What we haven't been able to determine — and where we need your help

We have **five specific questions** that only The Valentine and VCU can answer:

1. **Embedding rights for the Fulton collection:** Can the 17 Fulton Oral History interviews be embedded (audio player, transcript excerpts) in a third-party web tool under The Valentine's copyright, or does each use case require individual permission? If a civic prototype linked to and played audio from the VCU-hosted files, would that require a formal agreement?

2. **Other collections ready for digitization:** Beyond Fulton, Jackson Ward, Church Hill, Carver, and Oregon Hill — are there physical oral history collections at The Valentine, VCU Special Collections, the Black History Museum & Cultural Center, or the Library of Virginia that are near-ready for digitization? We're trying to map the total universe of recorded neighborhood memory in Richmond.

3. **Shared metadata schema appetite:** Would The Valentine and VCU consider adopting a shared metadata schema (Dublin Core, PBCore, or a custom civic profile) so that oral history collections across institutions could be discovered through a single search interface? Or do institutional workflows require separate ingest pipelines that make federation impractical?

4. **Consent framework for new collection:** If a prototype collected new stories from residents (particularly about displacement, eviction, and urban renewal), what consent model would The Valentine recommend? Would a Creative Commons contributor license be more appropriate than a Deed of Gift for a digital-first portal, or does institutional archival practice require the Deed of Gift transfer of ownership?

5. **Programmatic access to VCU collections:** Does VCU Libraries' Scholars Compass / Islandora platform support any form of programmatic access — IIIF Presentation API, OAI-PMH, or even stable direct links to audio files — that a third-party tool could use? Or is HTML harvesting the only reliable path?

### Why this matters

We've been generating and scoring new solution ideas grounded in the research. The highest-scoring concepts for resident stories are:

- **Displacement Memory Archive** (scored 92/105 Mayor's Choice) — story collection integrated at RRHA relocation touchpoints during the active Creighton Court, Gilpin Court, and Mosby Court demolition and redevelopment. The most time-sensitive idea: demolition is in progress and the window to capture six decades of public housing memory is closing with every relocation.
- **Community Story Pop-Up Kit** (scored 91/105 both awards) — an offline-first hardware kit (tablet + microphone + thermal printer) deployed at trusted community anchors like The Market @ 25th, libraries, and senior centers. Elders get a tangible printed keepsake of their story immediately; recordings sync to the archive when connectivity is available.
- **Photo-Elicitation Memory Cards** (scored 91/105 both awards) — printed cards using historic photos from institutional collections (Valentine, VCU, BHMVA) as story prompts. Research-validated method that produces deeper accounts from 65+ participants than verbal-only interviews. Requires clear rights for image reproduction.

All three ideas depend on the rights and access questions above. If The Valentine and VCU can clarify embedding permissions and consent frameworks, the prototypes become immediately pilotable.

---

## Context for the SME
Richmond has a rich but fragmented landscape of recorded neighborhood memory — at least five neighborhood-specific oral history collections across multiple institutions, with no cross-institutional search or shared metadata. The fundamental blockers for prototypes are (1) whether existing audio/transcripts can be embedded or linked in third-party tools without per-use permission, (2) whether institutions would adopt a shared schema for federated discovery, and (3) what consent model is appropriate for new collection in the context of active displacement.

The Valentine and VCU are the two institutions with the most relevant holdings and the institutional capacity to define terms. The Valentine holds copyright on the Fulton collection; VCU hosts the digital files and holds additional neighborhood collections. Any prototype that surfaces, connects, or extends this material needs both institutions aligned.

## Why This Person
The Valentine's Director or Curator of Collections controls copyright permissions and can speak to the Deed of Gift model and institutional appetite for data sharing. VCU's Special Collections / Digital Initiatives Librarian can confirm API availability on Scholars Compass and identify collections ready for digitization. Together they represent the institutional gateway to Richmond's recorded neighborhood memory.

## Data Questions (internal tracking)
- [ ] Q1: Embedding/linking rights for Fulton Oral History audio + transcripts in third-party tools
- [ ] Q2: Physical collections at Valentine/VCU/BHMVA/LOV near-ready for digitization
- [ ] Q3: Appetite for shared metadata schema (Dublin Core/PBCore) across institutions
- [ ] Q4: Recommended consent model for new story collection (CC license vs. Deed of Gift)
- [ ] Q5: VCU Scholars Compass / Islandora programmatic access (IIIF, OAI-PMH, stable URLs)

## Research Sources
- `_research-answers/rs_q1_data.md` — Fulton OH status, VCU platform, neighborhood collections, StoryCorps, rights models
- `_research-answers/rs_q2_equity.md` — resident perceptions, trauma-informed consent, COPPA, photo-elicitation, Santa Monica precedent
- `_shared-resident-stories/jtbd_analysis.md` — full JTBD + answered questions
- `NEW_IDEAS_RUBRIC_GRADES.md` — scored solution ideas (PS2)
