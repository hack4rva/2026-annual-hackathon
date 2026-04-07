# Gap Analysis — Richmond Stories Online

**Pillar:** A City That Tells Its Stories
**Problem Statement:** Resident Stories as Civic Insight — Give residents a trusted, accessible way to share their lived experiences so community narratives can inform City decisions.
**Team:** Valentine Museum partnership + civic hackers + local storytellers
**Website:** RichmondStories.online
**Review Date:** April 1, 2026

---

## 1. Problem Grounding

**Problem statement (verbatim):** Give residents a trusted, accessible way to share their lived experiences so community narratives can inform City decisions.

**Primary user targeted by demo:** Broadly framed — "every voice," "past and present residents," tourists. No single primary user was identified. The demo oscillates between serving residents who want to contribute stories, newcomers who want to discover history, and tourists who would drive economic impact.

**Pain addressed (as stated):** Richmond's stories are "fragmented, tucked away in inaccessible archives or whispered in forgotten corners." The demo frames the problem as fragmentation and inaccessibility of historical narratives, with an explicit emphasis on confronting colonial history and socioeconomic legacies.

**Desired outcome:** A "digital sanctuary for Richmond's collective memory" — a living archive that uses geospatial mapping, crowdsourced contributions, curated story paths, and institutional partnerships to unify Richmond's narratives.

**Critical observation:** The demo's problem framing is broad and aspirational. It describes a vision for what Richmond's storytelling infrastructure should be, rather than identifying a specific user with a specific unmet need and building a tool to address it. Compare with the Fulton team's framing: "young Richmonders don't know about the neighborhood they walk through → here's a map of one neighborhood's oral history." That is specific. "Richmond's stories are fragmented" is a thesis statement, not a problem scoped for a prototype.

---

## 2. Data Source Mapping

| # | Data Claim in Demo | Source | Verified? | Notes |
|---|---|---|---|---|
| 1 | Oral histories preserved | Not specified — implied connection to Valentine Museum collections and community submissions | ❌ Unverified | The demo states oral histories are integrated but does not name specific collections, interview counts, or data formats. No reference to the Fulton OH Project or any other identifiable oral history dataset. |
| 2 | Geospatial mapping anchoring stories to locations | Not specified — technology described but data source for location coordinates not identified | ❌ Unverified | "Every street corner can become a gateway to hidden history" is a vision statement, not a data architecture. What location data populates the map? |
| 3 | Crowdsourced contributions ("residents can upload photos + narratives today") | RichmondStories.online | ⚠️ Claimed but not demonstrated | The demo states this feature exists. The transcript does not describe a live demonstration of a resident uploading content. |
| 4 | APIs to sync local archives | Not specified — described as hackathon work product | ❌ Unverified | "Building APIs to sync local archives, unifying fragmented city records into one accessible hub" — which archives? Which APIs? What data format? No technical specifics provided. |
| 5 | Augmented reality | Described as exploratory hackathon work | ❌ Not demonstrated | "Exploring augmented reality to bring history to life" — exploratory language suggests this was discussed, not built. |
| 6 | Curated Story Paths | Described as a feature | ⚠️ Claimed but not demonstrated | "Guided paths that lead users through threads of Richmond's identity" — concept described, but no evidence of a working path shown in the demo. |

**SME access needed:**
- **The Valentine** — what specific collections or content assets did the Valentine contribute to this project? Is there a data-sharing agreement or MOU?
- **Technical lead** — what is the actual technology stack? Is there a database, a CMS, a mapping framework? What exists at RichmondStories.online beyond a landing page?

---

## 3. Gap Analysis Against JTBDs

### Job 1 — The Elder Who Carries the Memory

> *Share my story in a way that preserves it permanently and makes it accessible.*

| Requirement | Demo Coverage | Assessment |
|---|---|---|
| Accessible story submission pathway | "Residents can upload photos + narratives" — claimed but not shown working | ⚠️ Claimed |
| Works for residents without broadband/smartphones | Not discussed; web-based platform assumed | ❌ Not addressed |
| Trust-building with vulnerable communities | Institutional partnership (Valentine) provides some trust signal, but no consent framework, community advisory, or tangible return artifacts described | ⚠️ Partial |
| Permanent preservation | "Living archive" described; archival partnership model with Valentine provides plausibility | ⚠️ Conceptual |
| Covers multiple neighborhoods | Citywide aspiration stated; no specific neighborhood content shown | ❌ Not demonstrated |

**Overall: Conceptual.** The demo describes the right features for this job but does not demonstrate any of them working. A resident watching this demo would understand the vision but could not actually submit a story and see it preserved.

### Job 2 — The Newcomer Who Walks Through History

> *Discover the history of the specific streets and places I pass through every day.*

| Requirement | Demo Coverage | Assessment |
|---|---|---|
| Location-based history discovery | Geospatial mapping described | ⚠️ Claimed |
| Feels like exploration | "Curated Story Paths" for guided discovery | ⚠️ Claimed |
| Real content to discover | No specific stories, locations, or oral history entries shown | ❌ Not demonstrated |
| Links to deeper content | Not discussed | ❌ Not addressed |

**Overall: Claimed but not demonstrated.** The right features are named (map, story paths, guided discovery), but the demo does not show a newcomer clicking on a location and reading a real story. Without demonstrated content, the discovery experience is theoretical.

### Job 3 — The City Decision-Maker

> *Understand how residents actually experience the place, so decisions are informed by lived reality.*

| Requirement | Demo Coverage | Assessment |
|---|---|---|
| Story-to-decision feedback loop | Not present | ❌ Not addressed |
| Searchable by neighborhood or policy area | Not described | ❌ Not addressed |
| Demonstrates how stories could inform a specific decision | Not mentioned | ❌ Not addressed |

**Overall: Not addressed.** Same gap as the Fulton demo — the "inform City decisions" half of the problem statement is entirely absent.

---

## 4. Opportunities

### Opportunity 1 — Demonstrate One Working End-to-End Flow (Critical, Immediate)

The most important next step is proving that the platform works — not as a concept, but as software. Pick one flow and make it real: a resident submits a story with a photo and a location pin → the story appears on a map → another user discovers it by browsing. One working flow is worth more than ten described features. Until this exists, the project is a partnership agreement and a domain name, not a product.

**Depends on:** Clarity on what has actually been built. Someone needs to audit RichmondStories.online and document the current state: is it a landing page, a CMS, a full application?

### Opportunity 2 — Leverage the Valentine Partnership for Seed Content (High Impact, Medium Effort)

The Valentine Museum is Richmond's primary history institution. If the partnership is real, the fastest path to a credible demo is seeding the platform with 10–20 items from The Valentine's collections — curated objects, images, or oral history excerpts with location data. This gives the map real content to display and demonstrates institutional buy-in. The Valentine's Deed of Gift model also provides a consent framework template that the platform needs.

**Depends on:** A defined data-sharing agreement with The Valentine specifying what content can be displayed, under what terms.

### Opportunity 3 — Build a Single Curated Story Path (Medium Impact, Low Effort)

The "Curated Story Paths" concept is the most differentiated feature in the demo. Build one: a 30-minute walking path through one neighborhood (Church Hill or Jackson Ward) with 5–7 stops, each anchored to a real story or historical moment. Use publicly available content (Virginia historical markers, NRHP records, Library of Virginia digital collections) to avoid rights blockers. A single working path demonstrates the concept and gives users something to actually do.

**Depends on:** Identifying publicly available, rights-clear content for one neighborhood.

### Opportunity 4 — Define the Partnership Model in Writing (Low Effort, High Strategic Value)

"Valentine Museum + civic hackers + local storytellers" is described as the partnership model, but no governance structure is visible. Who owns the data? Who moderates submissions? Who decides what gets published? Who maintains the platform when hackathon energy fades? Writing a one-page partnership charter — roles, data ownership, content moderation responsibility, hosting/maintenance commitments — would be the single most valuable non-technical artifact this team could produce. It directly addresses the "platform death" failure pattern documented in prior art research.

**Depends on:** Willingness of all parties to formalize commitments.

---
