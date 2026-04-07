# Roundtable (Condensed): Vecina

**Initiated:** 2026-04-02  
**Slug:** vecina  
**Idea:** Neighborhood-first arts & events discovery (CultureWorks-sourced)  
**Pillar:** A City That Tells Its Stories — Arts & Cultural Event Discovery  
**Paths:** `2026-annual-hackathon/ideas/city-storytelling/vecina/`

---

## Input Materials

| File | Status |
|------|--------|
| `vecina/IDEA.md` | Loaded |
| `vecina/RESEARCH_RESULT.md` | Loaded |
| `vecina/INNOVATION_ANALYSIS.md` | Loaded |
| `ideas/RICHMOND_TECH_STACK_2026.md` | Loaded (open GIS, AI policy, WCAG implication via civic tools) |
| `pillar-city-storytelling/research/INDEX.md` | Loaded — corpus aligns with C1/C2, D3, E1, F2, H2 |

---

## Simulated Personas (7)

### 1 — Arts-curious resident (neighborhood-first)

I do not want another app that lists 400 citywide events. Filtering by Jackson Ward and “this weekend” matches how I actually decide to go out. The map pin flow that keeps me on one site until I open directions is small but real friction removed. My worry is everything still lives on Instagram and Facebook for smaller shows; if Vecina only mirrors CultureWorks, I will still hear “you missed it” from friends.

**WebSearch:** *Richmond CultureWorks calendar Localist* — CultureWorks calendar is live at `calendar.richmondcultureworks.org` and is Localist-powered; public ICS/API URLs are not advertised in snippets—access terms need confirmation with CultureWorks/Localist admin.

### 2 — Small venue / promoter

If my events are already in CultureWorks, a prettier neighborhood view could help locals find me without extra data entry—that is the win. If geocoding is wrong or pins fall back to missing, I look unprofessional. I need clear attribution and a link back to the canonical listing so I am not accused of scraping.

**WebSearch:** *Concept3D Localist export ICS JSON API* — Localist documents JSON API and ICS/RSS/CSV export paths for administrators; feasibility hinges on CultureWorks enabling export/API use for a partner build, not on inventing a parser from scratch.

### 3 — CultureWorks / arts ecosystem steward

We already invested in Localist as the regional calendar of record. A satellite UX is fine if it drives traffic and submissions back to us and respects our data policy. I am sensitive to “forked” calendars that go stale or imply City endorsement without a memo. Syndication widgets and shared feeds (per INNOVATION_ANALYSIS) align with our mission more than a competing brand.

**WebSearch:** (combined with #2) Export/feeds are a known Localist capability; partnership framing should be “powered by / sourced from CultureWorks,” not a shadow calendar.

### 4 — DIT / accessibility reviewer

Any civic-facing or city-linked experience should plan for WCAG 2.1 AA alignment given Title II digital accessibility expectations for public entities. Map-heavy UIs often fail keyboard and screen-reader paths; embedded Google Maps needs an alternate text path for event details. The stack is straightforward commodity web; governance is the question if a `.gov` or City brand is implied.

**WebSearch:** *Google Events rich results schema.org Event* — Rich results require `name`, `startDate`, and `location` at minimum; JSON-LD validation is standard—Vecina can earn search discovery if single-event pages exist (as innovation memo recommends).

### 5 — Civic association leader

I would embed “This weekend in our neighborhood” on our WordPress site if you gave me a script tag or ICS—IDEA.md emphasizes the consumer website and map, not embeds. INNOVATION_ANALYSIS is right that plumbing beats another homepage; without embeds or feeds, I am less motivated to promote Vecina to my listserve.

**WebSearch:** *Richmond Virginia neighborhood boundaries open data* — City open data includes neighborhoods (e.g., Socrata `Neighborhoods` dataset); GeoHub also exposes neighborhood polygons—technically workable for boundary filters.

### 6 — Judge (Mayor’s Choice lens)

If CultureWorks agrees to the data use, this is shippable as a lightweight front end plus cache—no AvePoint, no ERP, no permit APIs. The risk is organizational: without a one-page MOU, the demo is a pretty layer on data we cannot legally refresh in production. Execution at hackathon level is credible; scale is about partnership, not Kubernetes.

**WebSearch:** (same as #1/#2) Dependency is partnership, not a missing City API.

### 7 — Digital equity / inclusion advocate

Neighborhood filtering helps geographic equity of attention but not device or connectivity equity; the IDEA does not describe SMS, print, or low-literacy paths that pillar research (B5, G3) flags. Facebook-heavy grassroots events skew younger and immigrant-led communities; omitting that channel is an acknowledged industry gap, not Vecina’s fault alone, but it caps “whole city” claims.

**WebSearch:** *Facebook Events API restrictions third party calendar* — Broad restriction since 2018 on importing page events to external sites; aggregators rely on ICS, Eventbrite, Meetup, etc.—Vecina’s single-source strategy trades completeness for trust.

---

## Top 3 Tensions and Resolutions

| # | Tension | Resolution |
|---|---------|------------|
| 1 | **Completeness vs. trust** — One authoritative feed misses Facebook/IG-native events; multi-source risks dedupe hell. | Position Vecina explicitly as the **CultureWorks neighborhood lens**; add Phase 2 ICS from top venues only after dedupe rules are tested (per RESEARCH_RESULT and INNOVATION_ANALYSIS). |
| 2 | **Another website vs. infrastructure** — IDEA centers a site + map; research argues widgets/feeds are the durable play. | Ship the demo UI for judges; **publish a roadmap** for neighborhood RSS/ICS + embed script and measure partner embeds as the success metric. |
| 3 | **Partnership ambiguity** — Innovation analysis flags CultureWorks API/ICS access as highest-risk assumption (R×U). | **Written permission** from CultureWorks (and Localist export enablement if gated); public attribution and link-back on every event card. |

---

## Fatal Flaw Test (5)

| Test | Question | Result |
|------|------------|--------|
| 1 | **Data rights** — Can the product legally refresh CultureWorks data in production? | **Conditional pass** — Localist supports exports/API in principle; **fatal if** no org approval. |
| 2 | **Differentiation** — Why not use CultureWorks’ own Localist UI? | **Pass** — Neighborhood-first UX, map-first workflow, and future embeds justify a thin layer if executed distinctly. |
| 3 | **Ghost calendar** — Does it go stale without a maintainer? | **Risk** — Any cache without monitoring becomes stale; **mitigate** with health checks and documented refresh job. |
| 4 | **Equity harm** — Does it imply “official” coverage while excluding grassroots channels? | **Watch** — Avoid “complete RVA arts” claims; label data source scope clearly. |
| 5 | **City systems wall** — Is a blocked City API required? | **Pass** — No 311/EnerGov/OnBase dependency; GIS neighborhoods and CultureWorks are the critical paths. |

**Fatal flaw count:** 0 with **hard gate** on CultureWorks authorization (without it, **Fail** test 1 in a real launch).

---

## Verdict

**Ship with conditions** — Strong fit for Pillar 7’s **Arts & Cultural Event Discovery** problem: real pain (fragmentation), credible tech path (Localist-backed source + open neighborhood boundaries + schema.org optional), and clear user value for geographically minded residents. Conditions: formal CultureWorks/data-use agreement, accessibility review for map + listings, honest marketing about coverage limits (no Facebook pipe), and a credible plan for syndication or embeds so the project does not stall as “yet another calendar site.”

---

## Category Scores (1–5) and Award Totals

Assumptions: scores reflect condensed roundtable judgment for **demo-stage** concept, not post-production maturity.

| Category | Score | Notes |
|----------|:-----:|-------|
| Impact | 4 | Addresses discovery fragmentation; scoped to arts events, not full “resident stories” pillar half. |
| Feasibility | 4 | Commodity stack; partnership and dedupe if multi-source expand. |
| User Value | 4 | Clear for neighborhood-oriented residents; gaps for non-CultureWorks events. |
| Execution | 4 | Hackathon-demo realistic (filters, cache, map, embed link-out). |
| Innovation | 3 | Neighborhood + map on aggregated data is valuable but not novel nationally; “plumbing” reframe raises ambition. |
| Equity & Inclusion | 3 | Geographic lens helps; digital/access and grassroots coverage limits remain. |

### Weighted totals

- **Mayor’s Choice:** Impact×5 + Feasibility×5 + User Value×4 + Execution×3 + Equity×3 + Innovation×1  
  = 20 + 20 + 16 + 12 + 9 + 3 = **80**

- **Pillar Award (P7):** Impact×5 + User Value×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3  
  = 20 + 16 + 12 + 9 + 12 + 9 = **78**

- **Moonshot:** Innovation×5 + Impact×4 + User Value×3 + Equity×3 + Feasibility×2 + Execution×2  
  = 15 + 16 + 12 + 9 + 8 + 8 = **68**

---

## One-Sentence Summary

Vecina turns CultureWorks’ arts calendar into a neighborhood-first, map-forward discovery experience that is technically approachable and pillar-aligned, but it needs explicit data partnership, accessibility discipline, and a syndication strategy to avoid becoming a redundant front end on the same Localist backbone.
