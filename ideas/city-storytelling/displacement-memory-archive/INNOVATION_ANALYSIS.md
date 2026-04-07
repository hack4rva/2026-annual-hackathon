# Innovation Analysis: Displacement Memory Archive

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** Displacement oral history archives are retrospective preservation projects — not active tools for current policy.

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Isolated, single-institution hosting | VCU hosts Fulton audio; The Valentine holds copyrights; JXN Project holds Jackson Ward context; UofR hosts Renewing Inequality maps — but none cross-link. Eliminate the silo model |
| **Eliminate** | "Collect once, publish once" project model | Houston's roadsTaken, AEMP, and Alexandria's Colored Rosemont are all ongoing initiatives. One-time releases become orphaned collections |
| **Reduce** | Technical barrier for community organizations to contribute | Omeka S + OHMS is the recommended stack for affordability ($35-100/month hosting) but still requires archival training. Reduce through templates and train-the-trainer workshops |
| **Reduce** | Reliance on grant cycles for sustainability | Braided funding (federal grants + philanthropy + municipal budget) is proven: Shockoe Project = $25M city + $13M state + $11M Mellon. But smaller projects need lower-cost sustainability paths (Curatescape Sustainability Hosting, Library of Virginia deposit) |
| **Raise** | Spatial integration with structural displacement data | UofR Digital Scholarship Lab's "Renewing Inequality" visualizes 1955-1966 urban renewal across the US; overlay Richmond oral histories on these maps to connect personal narratives to systemic patterns |
| **Raise** | Descendant governance authority | Alexandria's Colored Rosemont model: descendant board reviews all interpretation and signage, resulting in a Virginia State Highway Marker. Richmond's Jackson Ward and Fulton descendants deserve the same authority |
| **Create** | A federated "Richmond Displacement Memory Portal" cross-linking all existing archives | One front door that connects VCU's Fulton transcripts, JXN Project's Jackson Ward history, Library of Virginia's "House to Highway" exhibition, and UofR's structural data. Not a new archive — a federation layer |
| **Create** | Policy integration pathway — oral histories as evidence in NEPA/environmental reviews | St. Paul NAACP v. DOT precedent: residents used 1970s urban renewal history to challenge a new transit project's EIS. Richmond's displacement archive should explicitly serve this function |

**Key reframe:** Richmond already has substantial displacement archives — they're just scattered across institutions. The innovation isn't building a new archive; it's federating existing ones into a policy-relevant tool that connects personal memories to structural evidence.

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **Federated Displacement Portal** — A single website that cross-links VCU's Fulton collection, JXN Project's Jackson Ward resources, Library of Virginia's "House to Highway" exhibit, and UofR's "Renewing Inequality" maps. Federated search, not data migration. | Practical |
| 2 | **Before/After Map Toggle** — Side-by-side: 1950s Sanborn map of Jackson Ward/Fulton vs. current aerial. User drags a slider to see what the highway erased. Overlay oral history pins on both views. | Practical |
| 3 | **Highway Scar Walking Tour** — GPS-triggered audio tour (VoiceMap or web-based) along the I-95/I-64 corridor through Jackson Ward and Fulton. At each stop, hear a displaced resident's oral history clip. Walk the scar; hear the memory. | Moderate |
| 4 | **Displacement Impact Calculator** — Input an address or parcel → system shows: was this property in the urban renewal zone? How many families were displaced from this block? What was the racial composition? Data from "Renewing Inequality" + census records. | Moderate |
| 5 | **Living Archive: Annual Story Harvest** — Partner with JXN Project and Fulton Civic Association for an annual recording event. New stories added each year. The archive grows, not freezes. | Moderate |
| 6 | **Counter-Map: What Would Exist Today** — Speculative mapping: if the highway hadn't been built, project what the neighborhood would look like today based on building density, commercial patterns, and demographic trends. Make the absence visible. | Provocative |
| 7 | **Policy Brief Generator** — Select a set of oral histories + displacement data → auto-generate a one-page policy brief for a specific advocacy goal (highway cap, reparative investment, historic designation). Makes the archive actionable. | Provocative |
| 8 | **Displacement Memory Curriculum** — Package 10 oral history clips + "Renewing Inequality" data + discussion guides into a Richmond Public Schools curriculum module. Embed displacement memory in K-12 education. | Moderate |

## 3. Rapid Design Sprint

**Problem sentence:** Richmond's displacement history (Jackson Ward's I-95 corridor, Fulton Bottom's 356-acre demolition) is documented across multiple institutions but never presented as a unified, spatially-grounded narrative that connects personal memories to structural policy decisions — and none of it is being used in current policy debates.

**User journey (5 steps):**
1. Resident, student, or planner visits the Displacement Memory Portal
2. Sees a map of Richmond with two highlighted displacement zones (Jackson Ward, Fulton) overlaid on UofR "Renewing Inequality" data showing acres cleared and families displaced
3. Zooms into Jackson Ward → sees oral history pins on a 1950s Sanborn map. Clicks a pin → hears a 2-minute clip from a JXN Project or Library of Virginia source, with synced transcript
4. Toggles to "today" view → sees the I-95 corridor where the neighborhood once stood. Displacement statistics appear alongside the oral history
5. Clicks "Use in advocacy" → downloads a pre-formatted fact sheet combining the oral history excerpt, displacement data, and citation for use in public testimony, grant applications, or classroom lessons

**Prototype shape:** An ArcGIS StoryMap with two "chapters" — Jackson Ward and Fulton. Each chapter: (1) georeferenced historical Sanborn map as basemap, (2) pins for oral history clips (linked to VCU, Library of Virginia, or JXN Project sources), (3) UofR "Renewing Inequality" data overlay showing displacement statistics, (4) toggle to current aerial imagery. Embedded links to source institutions. A downloadable fact sheet template (Google Doc) with pre-filled citations.

**First test:** Build one chapter (Jackson Ward) using 5 publicly accessible oral history clips from the Library of Virginia's "House to Highway" exhibition. Overlay "Renewing Inequality" data for Richmond. Share with JXN Project leadership and 3 urban planning professors at VCU. Measure: qualitative feedback on accuracy, narrative power, and policy utility.

## 4. Opportunity Mapper

### Opportunity 1: Federated Archive Discovery

| Dimension | Detail |
|-----------|--------|
| **User** | Researchers, students, descendants, urban planners, journalists |
| **Outcome** | A single entry point to find displacement oral histories across VCU, Library of Virginia, JXN Project, The Valentine, and UofR |
| **Workflow** | Catalog existing collections → build a link-based portal (no data migration) → federated search by neighborhood, date, theme |
| **Dependencies** | Cooperation from 4-5 institutions; catalog of existing assets; simple web portal |
| **Richmond relevance** | VCU Fulton project has 17 interviews; Library of Virginia's "House to Highway" has exhibition materials; JXN Project has community context; UofR has structural data. No one has connected them |

### Opportunity 2: Spatial Displacement Narrative

| Dimension | Detail |
|-----------|--------|
| **User** | General public, educators, community advocates |
| **Outcome** | Personal displacement memories mapped onto the physical landscape alongside structural data — making the abstract concrete |
| **Workflow** | Georectify Sanborn maps → pin oral histories → overlay "Renewing Inequality" data → publish as StoryMap with before/after toggle |
| **Dependencies** | Sanborn map digitization (Library of Virginia likely has this); UofR "Renewing Inequality" API or data download; oral history clip permissions |
| **Richmond relevance** | Detroit's Black Bottom Digital Archive uses 1951 Sanborn maps as basemap; Houston's roadsTaken uses ArcGIS Experience Builder. Richmond can combine both approaches |

### Opportunity 3: Policy-Grade Evidence Base

| Dimension | Detail |
|-----------|--------|
| **User** | Advocacy organizations, city planners, NEPA reviewers, elected officials |
| **Outcome** | Oral histories packaged as citable evidence for environmental reviews, historic designations, and reparative investment arguments |
| **Workflow** | Curate themed collections → generate fact sheets → format for EIS/NEPA submission or council testimony |
| **Dependencies** | Legal review of oral history citation standards; partnership with advocacy organizations (e.g., JXN Project) |
| **Richmond relevance** | New Orleans Claiborne Avenue Alliance uses oral histories to advocate for I-10 highway removal; St. Paul NAACP used displacement history in NEPA challenge. Richmond has the same opportunity with I-95 cap discussions |

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 5 | Addresses irreplaceable community memory; directly supports current policy debates (highway caps, reparative investment); serves descendant communities |
| **Feasibility** | 3 | Requires multi-institutional cooperation (VCU, Library of Virginia, JXN Project, Valentine, UofR); federation is politically complex even if technically simple |
| **Data readiness** | 4 | Substantial existing archives: VCU Fulton (17 interviews), Library of Virginia "House to Highway," UofR "Renewing Inequality" (national dataset), JXN Project community research |
| **Problem clarity** | 5 | The problem is vivid: Richmond demolished entire Black neighborhoods for highways. The archives exist but are scattered and policy-disconnected |
| **Demo-ability** | 5 | A before/after map toggle with an oral history clip playing while you drag the slider between 1950 and today is the most emotionally powerful demo in this pillar |

**Weekend MVP shapes:**
- **Shape A (StoryMap Narrative):** ArcGIS StoryMap with one chapter (Jackson Ward). 5 oral history clips pinned to georeferenced Sanborn map + "Renewing Inequality" data overlay. ~8 hours.
- **Shape B (Two-Chapter + Toggle):** Shape A + Fulton chapter + before/after map toggle (Sanborn vs. current aerial). ~14 hours.
- **Shape C (Portal + Policy):** Shape B + federated search page linking all institutional sources + downloadable fact sheet template + walking tour waypoints for GPS audio. ~22 hours.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | Institutions (VCU, Library of Virginia, JXN Project) will cooperate on a federated portal | 4 | 4 | 16 | Contact each institution's leadership; propose a letter of intent for federated linking (not data transfer) |
| 2 | Publicly accessible oral history clips exist with appropriate rights for embedding | 4 | 3 | 12 | Audit VCU Scholars Compass and Library of Virginia "House to Highway" for public access terms; DC Public Library's Southwest Views is restricted — verify Richmond's aren't |
| 3 | "Renewing Inequality" data covers Richmond at sufficient granularity | 2 | 2 | 4 | UofR's own project; Richmond is a primary case. High confidence |
| 4 | Sanborn maps of Jackson Ward and Fulton can be georectified for web display | 3 | 2 | 6 | Check Library of Virginia digital collections; Sanborn maps are commonly digitized for Virginia cities |
| 5 | Descendant communities will endorse the project and participate in governance | 5 | 3 | 15 | Engage JXN Project and Fulton Civic Association early; propose descendant advisory board modeled on Alexandria's Colored Rosemont |
| 6 | Mapping former addresses doesn't enable gentrification harm | 3 | 3 | 9 | AEMP's location sensitivity rubric applies; aggregate to block level; consult descendant board on display granularity |
| 7 | The portal will be used in actual policy processes (NEPA, council testimony) | 3 | 4 | 12 | Identify one current policy process (e.g., I-95 cap feasibility study) where displacement evidence would be relevant; test with a draft fact sheet |

**Top 3 to validate first:**
1. **Multi-institutional cooperation (R×U=16):** The federated portal requires at least VCU, Library of Virginia, and JXN Project to agree. Without cooperation, the project is just another standalone archive.
2. **Descendant community endorsement (R×U=15):** Without descendant governance, the project risks being extractive — academics and technologists telling displacement stories about communities, not with them.
3. **Oral history clip access rights (R×U=12):** If VCU's Fulton audio is restricted or requires complex permissions, the demo pipeline breaks. Verify access terms early.

---

## Key Takeaway

Richmond has an extraordinary — and extraordinarily scattered — displacement archive. VCU's Fulton interviews, JXN Project's Jackson Ward research, Library of Virginia's "House to Highway" exhibition, and UofR's "Renewing Inequality" structural data collectively tell one of America's most significant urban renewal stories. The innovation is federation, not creation: connect these existing assets into a spatially-grounded, policy-relevant narrative. The before/after map toggle (1950s Sanborn vs. today's highway) is the most emotionally powerful demo in the city-storytelling pillar. But the hardest work is political, not technical: securing multi-institutional cooperation and descendant governance before writing code.
