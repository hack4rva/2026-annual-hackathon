# Innovation Analysis: Planning Commission Story Feed

## 1. Blue Ocean Reframing (ERRC Grid)

**Core assumption challenged:** Planning commission decisions are communicated through official minutes — and that's sufficient for public understanding.

| Action | Element | Rationale |
|--------|---------|-----------|
| **Eliminate** | Assumption that official minutes are a communication tool | Minutes are legal records, not accessibility tools. Grand Rapids Documenters study: community notes were ~5,000 words shorter and scored better for readability than official minutes |
| **Eliminate** | Jargon-heavy zoning and legal language in public-facing summaries | AI summarizers must be explicitly instructed: "Do not paraphrase legal or technical language. Quote it exactly." But surrounding narrative should be plain English |
| **Reduce** | Time between meeting and public understanding of decisions | Current: days/weeks for minutes to be approved and posted. Target: draft summary published within 24 hours, with AI + human QA |
| **Reduce** | Resident effort to understand what happened | Replace: "Read 47 pages of agenda packet" with "Read 3-paragraph summary with links to source documents" |
| **Raise** | Public comment visibility in meeting narratives | Grand Rapids study found Documenters consistently captured public comments that official minutes omitted. The story feed must foreground resident voices, not just motions |
| **Raise** | Geographic context for every planning decision | Every planning matter has an address. Every summary should show where the decision applies on a map — connecting abstract zoning to physical neighborhoods |
| **Create** | A subscribable "story feed" of planning decisions organized by neighborhood | Not a government website to visit — an RSS/email/SMS feed residents subscribe to. "What happened in my neighborhood at last night's Planning Commission meeting?" |
| **Create** | AI-generated plain-language drafts with mandated human QA | Saratoga (Hamlet), Santa Cruz County, and Granicus GXA all deploy AI + human review. The feed automates 80% of the writing; a clerk verifies the remaining 20% |

**Key reframe:** Planning commission decisions are *stories about neighborhoods*. A rezoning isn't a docket item — it's a narrative about what's changing on your street. The "story feed" reframing connects abstract governance to lived experience.

## 2. Rapid Ideation (Crazy 8s)

| # | Idea | Provocation Level |
|---|------|-------------------|
| 1 | **Legistar-to-Plain-English Pipeline** — Pull agendas and vote records via Legistar API → LLM generates plain-language summary → clerk reviews in 30 minutes → publish to web + RSS. | Practical |
| 2 | **Neighborhood-Scoped Email Digest** — After each Planning Commission meeting, residents get a summary of only the decisions affecting their neighborhood. Powered by geocoded agenda items. | Practical |
| 3 | **"What Happened on My Street" Bot** — Resident texts their address → bot returns any planning decisions within 0.25 miles from the last 90 days, in plain language. | Moderate |
| 4 | **Documenters + AI Hybrid** — Recruit 5 Richmond residents as community Documenters (City Bureau model, $75/meeting stipend). They take plain-language notes. AI enriches with structured data from Legistar. Best of both worlds. | Moderate |
| 5 | **Meeting Outcome Flashcards** — After each meeting, publish 5-10 "flashcards": one decision per card, with the address, the decision, the vote, and one sentence of context. Shareable on social media. | Moderate |
| 6 | **Public Comment Amplifier** — For every agenda item, the summary includes a verbatim or lightly edited quote from the most representative public comment. Residents see their neighbors' voices, not just official actions. | Provocative |
| 7 | **"Explain Like I'm New Here" Mode** — Toggle that adds extra context for residents unfamiliar with zoning terms. "This was rezoned from R-5 (single family) to B-2 (general business), which means..." | Moderate |
| 8 | **Decision Impact Predictor** — For each planning decision, the AI estimates: "Based on similar rezonings in Richmond, this area may see [X type of development] within [Y years]." Speculative, labeled as such. | Provocative |

## 3. Rapid Design Sprint

**Problem sentence:** Richmond Planning Commission decisions are buried in multi-hour meeting recordings and dense agenda packets — residents who can't attend (or can't decode planning jargon) never learn what was decided about their neighborhoods.

**User journey (5 steps):**
1. Planning Commission meeting occurs Tuesday evening
2. Within 24 hours: LLM ingests Legistar agenda + votes → generates plain-language summary per agenda item → clerk reviews and approves
3. Wednesday morning: approved summaries publish to a web feed, organized by neighborhood
4. Resident receives an email/SMS with summaries for their subscribed neighborhood
5. Each summary links back to the official Legistar record, the full recording, and any public comments — building trust through transparency

**Prototype shape:** (1) Legistar API → pull agenda items, votes, and matter details for the most recent Planning Commission meeting. (2) LLM (Claude) generates a plain-language summary per agenda item using a strict prompt: quote legal terms verbatim, list mover/seconder/vote tally, summarize in ≤3 paragraphs. (3) Static site (Hugo or Next.js) publishes summaries, organized by neighborhood via geocoded matter addresses. (4) RSS feed + optional email subscription. No custom CMS. AI disclosure at the top of every summary.

**First test:** Summarize the 3 most recent Planning Commission meetings (retroactively). Share summaries with 3 Planning Commission members and 5 civic association leaders. Measure: accuracy feedback, readability scores, and qualitative reactions.

## 4. Opportunity Mapper

### Opportunity 1: Plain-Language Planning Narrative

| Dimension | Detail |
|-----------|--------|
| **User** | Richmond residents in neighborhoods affected by planning decisions |
| **Outcome** | Understand what was decided about their neighborhood within 24 hours, in plain English |
| **Workflow** | Legistar API → LLM summary → clerk QA → publish → subscribe |
| **Dependencies** | Legistar API (public, OData, 1000-record cap); LLM API; clerk time for review (est. 1-1.5 hrs/meeting) |
| **Richmond relevance** | Boston's AI search on their municipal website got 34.3% positive feedback, outperforming traditional search by 23.4 percentage points; plain-language summaries of planning decisions could see similar satisfaction lift |

### Opportunity 2: Community Documenters Network

| Dimension | Detail |
|-----------|--------|
| **User** | Civic-minded residents interested in local governance; the broader public (as consumers of the notes) |
| **Outcome** | Community-generated meeting notes that are shorter, simpler, and better at capturing public comments than official minutes |
| **Workflow** | Recruit and train 5-10 Documenters → attend meetings → take notes → editorial review → publish alongside AI summaries |
| **Dependencies** | City Bureau partnership or independent program; $75-100/meeting stipend budget; editorial staff |
| **Richmond relevance** | Grand Rapids Documenters notes were ~5,000 words shorter and scored higher on readability; Richmond has no equivalent program |

### Opportunity 3: Neighborhood-Scoped Decision Feeds

| Dimension | Detail |
|-----------|--------|
| **User** | Civic associations, neighborhood blogs, hyperlocal media |
| **Outcome** | Embeddable, auto-updating feed of planning decisions filtered by geography |
| **Workflow** | Geocode matter addresses → assign to neighborhoods → generate per-neighborhood RSS/widget |
| **Dependencies** | GeoHub parcel data for geocoding; neighborhood boundary definitions; RSS/widget generation |
| **Richmond relevance** | Connects to the Legistar Development Pipeline bundle (Bundle 2): shared Legistar-to-GeoJSON ETL serves Public Comment Atlas, Site-Sign Text-Back, and RVA Plotlines |

## 5. Problem Scoping

| Dimension | Score (1-5) | Rationale |
|-----------|:-----------:|-----------|
| **Impact** | 4 | Makes planning decisions accessible to residents who can't attend meetings or decode jargon; directly supports civic participation |
| **Feasibility** | 4 | Legistar API is public; LLM summarization is proven (Saratoga, Santa Cruz, Granicus GXA all do this); clerk QA workflow exists |
| **Data readiness** | 4 | Legistar provides structured agenda and vote data; audio recordings available for transcript-based summarization |
| **Problem clarity** | 5 | Universal pain point: planning meetings are opaque. Every resident who's ever tried to follow a zoning case knows this |
| **Demo-ability** | 5 | Show a before/after: 47-page agenda packet → 3-paragraph plain-language summary. Side-by-side comparison is devastating |

**Weekend MVP shapes:**
- **Shape A (Retroactive Summaries):** Pull the last 3 Planning Commission meetings from Legistar API. Generate LLM summaries. Publish as a static site with per-item pages. ~8 hours.
- **Shape B (Live Pipeline):** Shape A + automated pipeline that triggers after each new meeting. Generates draft summaries awaiting clerk review. ~14 hours.
- **Shape C (Neighborhood Feed):** Shape B + geocoded matters → per-neighborhood RSS feeds + email subscription + AI disclosure language. ~20 hours.

## 6. Assumption Mapping

| # | Assumption | Risk (1-5) | Uncertainty (1-5) | R × U | Validation method |
|---|-----------|:----------:|:-----------------:|:-----:|-------------------|
| 1 | LLM can accurately summarize planning decisions without misrepresenting votes or legal terms | 5 | 3 | 15 | Generate summaries for 10 past meetings; have a planning clerk verify accuracy of every vote tally and motion |
| 2 | Clerk staff will allocate 1-1.5 hours per meeting for QA review | 4 | 3 | 12 | Interview Richmond planning clerk office; propose pilot with 3 meetings |
| 3 | Residents want neighborhood-scoped planning summaries (not just citywide) | 3 | 3 | 9 | Survey 20 civic association leaders: "Would you subscribe to a feed of planning decisions in your neighborhood?" |
| 4 | Official minutes remain the authoritative record (summaries are supplementary) | 2 | 1 | 2 | Standard practice per White & Case governance risk analysis; disclose clearly |
| 5 | AI disclosure language doesn't reduce trust in the summaries | 3 | 4 | 12 | Test two versions: with and without "This summary was drafted with AI assistance." Measure trust ratings |
| 6 | Legistar provides sufficient structured data for automated summarization | 3 | 2 | 6 | Pull 3 meetings from API; assess completeness of agenda items, votes, and matter descriptions |
| 7 | Richmond's Planning Commission meets frequently enough to justify automation | 2 | 1 | 2 | Check meeting schedule; most planning commissions meet 1-2x/month |

**Top 3 to validate first:**
1. **LLM accuracy on planning decisions (R×U=15):** A summary that misrepresents a vote or paraphrases a zoning code incorrectly is worse than no summary. Must test with real Richmond data and verify with planning staff.
2. **Clerk staff capacity for QA (R×U=12):** If no one will review the AI drafts, the summaries can't be published with confidence. This is an organizational, not technical, blocker.
3. **AI disclosure impact on trust (R×U=12):** Boston requires disclosure; San José requires accountability. If Richmond residents distrust AI-labeled content, the feed fails. Test both versions.

---

## Key Takeaway

The Planning Commission Story Feed transforms planning decisions from bureaucratic records into neighborhood narratives. The technology is proven (Saratoga's Hamlet, Granicus GXA, CivicPlus AI all generate municipal meeting summaries), the data is available (Legistar API), and the need is clear (Grand Rapids Documenters proved that plain-language notes outperform official minutes). The critical innovation is the "story feed" framing: organized by neighborhood, subscribable, and written for residents — not lawyers. The critical risk is accuracy: one misrepresented vote destroys trust. Mandate human QA for every published summary, and disclose AI involvement transparently.
