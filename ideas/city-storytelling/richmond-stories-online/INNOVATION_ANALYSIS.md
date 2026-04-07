# Innovation Analysis: Richmond Stories Online

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** Resident storytelling platforms need to be built from scratch as custom applications.

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Building a custom CMS for story collection | Omeka S Collecting, TheirStory, StoryCorps Archive Communities, and ArcGIS Survey123 all provide turnkey submission workflows; the technology is solved |
| **Eliminate** | Assumption that "one platform fits all" | Queens Memory uses Aviary, Urban Archive, Instagram, and podcasts; LAPL uses TheirStory; the medium should match the story type |
| **Reduce** | Metadata complexity at the point of capture | Don't ask residents to fill Dublin Core fields. Capture name, neighborhood, story text/audio, and consent tier. Enrich metadata later with archivist review |
| **Reduce** | Dependency on professional facilitators for every story | TheirStory enables one-click web recording with auto-transcription; Omeka S Collecting supports anonymous submission. Scale through self-service, not staffing |
| **Raise** | Moderation and consent sophistication | StoryCorps requires permanent, irrevocable rights transfer. LAPL requires 18+ or guardian. Mukurtu uses TK Labels. Richmond needs a tiered consent model appropriate to civic (not indigenous) context |
| **Raise** | Story reuse and output programming | Queens Memory thrives because submissions feed podcasts, exhibits, and Instagram. Collect-and-leave projects die. Budget for reuse from day one |
| **Create** | A "Richmond Stories" submission portal that routes stories to the right archive based on type | Oral history → Omeka S with OHMS sync. Map-based neighborhood memory → ArcGIS StoryMap + Survey123. Short text testimonial → simple web form + moderated feed. One front door, multiple backends |
| **Create** | Sustainability hosting agreement from day one | Curatescape offers "Sustainability Hosting" that freezes projects and provides WARC/database exports. Omeka's managed hosting starts at $35/month. Plan for end-of-life before launch |

**Key reframe:** The platform choice should follow the storytelling *outcome*, not the other way around. If the goal is archived interviews → use Omeka S + OHMS. If the goal is crowdsourced neighborhood memories → use Survey123 + StoryMaps. If the goal is rapid capture → use TheirStory. Don't build one platform to do all three.

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **"Share Your Richmond Story" Web Portal** — Simple landing page with three paths: "Record a story" (TheirStory embed), "Pin a memory to the map" (Survey123 embed), "Write a story" (Omeka S Collecting form). | Practical |
| 2 | **Monthly Story Listening Event** — Curate 5-7 submitted stories, host a public listening event at a library branch. Cross-promotes the platform and validates community interest. Queens Memory model. | Practical |
| 3 | **Neighborhood Story Challenges** — "This month: Church Hill. Share a Church Hill memory." Rotate neighborhoods monthly. Creates urgency and neighborhood pride. | Moderate |
| 4 | **"Story of the Week" SMS/Email Blast** — Every Monday, push one featured resident story to subscribers. Keeps the archive alive between submission campaigns. Reuse content without new collection. | Moderate |
| 5 | **Intergenerational Story Pairing** — Match a senior resident with a high school student. Student interviews the senior, submits the recording. Builds intergenerational connection and trains young archivists. | Moderate |
| 6 | **Ephemeral Story Wall** — At a public event, project submitted stories (text only, moderated) on a building facade in real-time. Stories appear for 60 seconds and fade. Creates spectacle and urgency to submit. | Provocative |
| 7 | **Counter-Narrative Archive** — Actively solicit stories from communities whose narratives are underrepresented in official Richmond history: public housing residents, formerly incarcerated people, immigrant communities. Frame as "stories the city doesn't tell." | Provocative |
| 8 | **AI Story Tagger** — After submission, LLM auto-suggests tags (neighborhood, theme, era, emotion). Archivist reviews tags. Reduces metadata burden while maintaining quality. | Moderate |

## 3. Rapid Design Sprint

**Problem sentence:** Richmond residents have stories about their neighborhoods, their families, and their experiences with city government — but there's no trusted, accessible, moderated place to share them so they become part of the city's collective memory.

**User journey (5 steps):**
1. Resident sees "Share Your Richmond Story" link on a library website, community center poster, or social media post
2. Lands on a portal with three submission paths: record audio (~5 min), pin a memory on a map, or write a short text story
3. Completes a simple consent form (name or anonymous, neighborhood, usage permissions: public / research-only / time-limited)
4. Submission enters a moderation queue. Within 48 hours, a volunteer moderator reviews for content policy compliance and basic metadata
5. Published stories appear on a public feed and map. Monthly listening events feature the best submissions

**Prototype shape:** A single-page landing site (static HTML or Squarespace) with three embedded tools: (1) TheirStory recorder widget for audio, (2) ArcGIS Survey123 form for map-pinned memories, (3) Omeka S Collecting form for text stories. Unified branding. Each tool has its own moderation pipeline. Consent form is shared across all three. No custom backend.

**First test:** Launch with one submission path (text stories via Omeka S Collecting). Promote through 3 Richmond library branches and 2 civic associations. Target: 25 submissions in 30 days. Moderate within 48 hours. Publish approved stories on a simple feed. Host one listening event at month's end.

## 4. Opportunity Mapper

### Opportunity 1: Multi-Path Story Collection

| Dimension | Detail |
|-----------|--------|
| **User** | Richmond residents of all ages, backgrounds, and digital literacy levels |
| **Outcome** | Multiple submission channels — audio, map pin, text — so the format matches the storyteller, not the other way around |
| **Workflow** | Three embedded tools → unified consent form → separate moderation queues → combined public feed |
| **Dependencies** | TheirStory account (SaaS); Omeka S instance (hosting ~$35-100/month); ArcGIS Survey123 (Esri license) |
| **Richmond relevance** | LAPL Central 100 used TheirStory for English/Spanish audio capture under 10 minutes; Queens Memory uses multiple platforms for different output types |

### Opportunity 2: Story Reuse Programming

| Dimension | Detail |
|-----------|--------|
| **User** | Library staff, cultural organizations, educators, local media |
| **Outcome** | Submitted stories feed podcasts, exhibits, newsletters, and social media — keeping the archive alive and justifying ongoing investment |
| **Workflow** | Curate monthly selections → "Story of the Week" email/SMS → quarterly listening events → annual exhibit |
| **Dependencies** | 0.25-0.5 FTE for curation and programming; partnership with library system or cultural org |
| **Richmond relevance** | Queens Memory's longevity (since 2010) is driven by continuous reuse: podcasts, exhibits, Instagram. NYPL's Community Oral History (collected 1,000+ stories) retired in 2020 because it lacked sustained reuse programming |

### Opportunity 3: Federated Preservation

| Dimension | Detail |
|-----------|--------|
| **User** | Archivists, VCU Libraries, Library of Virginia, The Valentine |
| **Outcome** | Stories collected on the platform are preserved in established institutional archives, not dependent on platform survival |
| **Workflow** | Omeka S exports (CSV, JSON-LD) → quarterly deposit to VCU Libraries or Library of Virginia; audio masters to institutional repository |
| **Dependencies** | Memorandum of Understanding with a preservation partner; regular export schedule; consistent metadata standards |
| **Richmond relevance** | VCU already hosts the Fulton Oral History Project; Library of Virginia hosts "House to Highway." Extending to a general "Richmond Stories" collection is a natural fit |

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Creates a permanent, accessible record of resident voices; directly supports MAP pillar "Resident Stories as Civic Insight" |
| **Feasibility** | 4 | Turnkey platforms exist (TheirStory, Omeka S, Survey123); no custom development needed; 0.25-0.5 FTE moderation is the main ongoing cost |
| **Data readiness** | 3 | No existing dataset to bootstrap from — this is a collection initiative, not an aggregation. Cold start problem requires strong launch promotion |
| **Problem clarity** | 4 | Clear need: no centralized place for Richmond residents to share neighborhood stories that get preserved and reused |
| **Demo-ability** | 4 | Show the submission portal with all three paths; play one test-submitted audio story on the map; show the moderation queue. Compelling but requires pre-loaded content |

**Weekend MVP shapes:**
- **Shape A (Text-Only MVP):** Omeka S Collecting form embedded on a landing page. Consent form. Moderation queue. Public feed of approved stories. ~6 hours.
- **Shape B (Audio + Text):** Shape A + TheirStory recorder widget for audio submissions with auto-transcription. ~10 hours.
- **Shape C (Full Portal):** Shape B + ArcGIS Survey123 for map-pinned memories + unified landing page with three submission paths + "Story of the Week" email template. ~16 hours.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Richmond residents will submit stories without a personal relationship or facilitated prompt | 4 | 4 | 16 | Launch pilot: compare submission rates from (a) cold web form vs. (b) library-facilitated sessions |
| 2 | Volunteer moderators can process submissions within 48 hours consistently | 3 | 3 | 9 | Recruit 3 volunteer moderators; track turnaround time over 4 weeks |
| 3 | Multi-platform architecture (TheirStory + Omeka + Survey123) is manageable for a small team | 4 | 3 | 12 | Start with one platform; add others only after proving the workflow with the first |
| 4 | Stories will maintain quality without heavy facilitation (e.g., rambling, off-topic) | 3 | 4 | 12 | Provide clear prompts, 5-minute time limits for audio, 500-word limits for text. Measure quality variance |
| 5 | An institutional preservation partner (VCU, Library of Virginia) will accept deposits | 3 | 3 | 9 | Contact VCU Libraries Special Collections; assess interest and requirements for a "Richmond Stories" collection |
| 6 | The platform will sustain submissions beyond the initial launch burst | 5 | 4 | 20 | Plan reuse programming (Story of the Week, listening events) before launch; budget 0.25 FTE for ongoing promotion |
| 7 | Consent framework is sufficient for civic context (not requiring StoryCorps-level rights transfer) | 2 | 2 | 4 | Use Library of Congress VHP non-exclusive license model; resident retains copyright, grants city perpetual non-exclusive use |

**Top 3 to validate first:**
1. **Sustained submission volume beyond launch (R×U=20):** The biggest risk. NYPL collected 1,000+ stories then retired the project. Queens Memory survived by embedding stories into podcasts, exhibits, and social media. Without reuse programming, the platform dies.
2. **Unprompted submission willingness (R×U=16):** If residents don't submit without facilitation, the "online" model fails and you need pop-up events (see Community Story Popup Kit). Test both channels.
3. **Multi-platform manageability (R×U=12):** Three embedded tools sounds elegant but creates three moderation queues, three logins, three failure points. Start with one. Add complexity only when the first channel proves demand.

---

## Key Takeaway

Richmond Stories Online faces a classic cold-start problem: the technology for story collection is completely solved (TheirStory, Omeka S, Survey123 are all turnkey), but the hard part is getting residents to submit and — more critically — keeping submissions flowing beyond the initial launch. The research is unambiguous: Queens Memory (since 2010, still active) survives because it embeds stories into podcasts, exhibits, and social media. NYPL Community Oral History (1,000+ stories) died in 2020 because it didn't. Budget for reuse programming before writing a single line of code. Start with one submission channel, prove demand, then expand.
