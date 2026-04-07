# Roundtable (Condensed): Weekend Culture SMS

**Initiated:** 2026-04-02  
**Slug:** `weekend-culture-sms`  
**Idea path:** `2026-annual-hackathon/ideas/city-storytelling/weekend-culture-sms/`  
**Pillar:** A City That Tells Its Stories  
**Problem statement:** PS1 — Arts & Cultural Event Discovery  
**Implementation Reality:** 20/25 — Tier A (Strong) | **Overall rank:** #22 of 73  

---

## 1. Input materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — CultureWorks/Localist: ICS, RSS, JSON; partnership recommended for bulk; SMS via Twilio listed as realistic hackathon path |
| `pillar-city-storytelling/research/INDEX.md` | Loaded — pillar corpus maps arts discovery to feeds, aggregators, digital equity (B5), and “ghost calendar” risks (E4) |

**Web grounding (cross-persona):** CultureWorks operates a Localist-powered regional calendar with widget/embed tooling; programmatic API docs are not prominent in public search—formal partnership aligns with IDEA.md. Twilio documents A2P 10DLC onboarding for government and nonprofit brands with special use cases. Museum sector SMS (e.g., MCA Chicago via Attentive) shows revenue and list-growth precedent. TCPA still requires consent and opt-out even where nonprofit exemptions narrow “written consent” requirements for many nonprofit informational flows—legal sign-off remains prudent for any City co-brand.

---

## 2. Seven persona simulations (3–5 sentences each)

### P1 — Arts-curious resident (busy parent, Fan)

I do not live in Eventbrite or Facebook; I want something that tells me what is worth leaving the house for without another app. A single Friday text with three to five picks matches how I actually decide on weekends. If the links work on my phone and the times are right, I would try it for a month. My worry is that every week will be the same three venues on Broad Street and I will tune out.

*Research:* CultureWorks calendar aggregates hundreds of regional events; curation quality and diversity determine retention, not raw data volume.

### P2 — Small venue / grassroots organizer (Southside)

Aggregators already favor whoever submits clean listings first; SMS could magnify that if the curator always pulls the obvious headliners. If the digest includes a rotating “spotlight” slot for smaller organizers, this becomes free distribution I cannot get from ads. I need my events in CultureWorks on time or I am invisible to the pipeline. I am skeptical until I see editorial rules in writing.

*Research:* Pillar research index flags representational bias and “quiet voices” risk (G1); editorial charter is the equity instrument.

### P3 — City communications / PIO

We are careful about anything that looks like spam or political favoritism toward certain nonprofits. Co-branding a text program means records retention, accessibility alternatives, and a clear opt-in path documented for FOIA. If CultureWorks or a 501(c)(3) operates the list and the City only endorses, legal surface area shrinks. I want one accountable owner and a published content policy before we put “Richmond” on the sender line.

*Research:* Municipal SMS RFP patterns (per RESEARCH_RESULT) emphasize DPAs, security, and 90-day-style implementation after award; aligns with procurement realism.

### P4 — Senior / limited-data resident (digital equity)

SMS reaches me where email and apps do not; I do not have to hunt. Plain language, short messages, and STOP instructions matter more than fancy links. If messages cost me nothing to receive and arrive at a predictable time Friday afternoon, that is respectful. Please do not assume everyone can tap a long URL on a flip phone—offer a reply-for-details path.

*Research:* Pillar B5 / digital equity themes; INNOVATION_ANALYSIS explicitly frames SMS as digital-divide bridge.

### P5 — CultureWorks / nonprofit data partner

We already power the canonical calendar; a structured feed or API partnership is one conversation that unlocks Vecina and What’s On RVA too (Bundle 7). Rate limits and attribution are standard asks—we need brands and nonprofits using the data responsibly. Weekend SMS is aligned with our mission if curation increases attendance across the region, not just downtown. Viral spikes without 10DLC registration are a cautionary tale (SFMOMA carrier issues).

*Research:* Localist widget/help pages exist; bulk programmatic use matches TECH_STACK “partnership recommended.”

### P6 — Municipal legal / compliance lens

A2P 10DLC registration for government or nonprofit is a solved playbook on major CPaaS vendors, not a science project. Consent capture, quiet hours, and clear opt-out are non-negotiable; multistate rules add nuance if the list ever expands beyond Virginia. “Informational” framing still needs documented subscriber permission—not purchased lists. Budget recurring carrier and per-segment costs; at 10k subscribers weekly, unit economics are knowable (~cents per message per RESEARCH_RESULT).

*Research:* Twilio government/nonprofit 10DLC docs; TCPA guides for nonprofits (informational vs marketing distinctions—counsel to validate).

### P7 — Hackathon judge (impact + demo)

This is one of the easiest ideas to prove live on demo day: judges’ phones buzz with a real weekend sample. Impact is real but incremental—better discovery, not a new civic story archive. Feasibility is high relative to other pillar ideas that depend on closed APIs. Innovation is channel and habit design more than novel algorithms; equity hinges on curation governance. I would score it as a strong pilot, not a moonshot, unless the team shows measurement (UTM, holdouts) and inclusion rules.

*Research:* MCA Chicago SMS outcomes cited in RESEARCH_RESULT; CTR benchmarks useful but must be validated locally.

---

## 3. Top three tensions and resolutions

| Tension | Resolution |
|---------|------------|
| **Centralization vs. equity of voice** — One digest naturally amplifies a few listings; grassroots organizers fear another “Broad Street megaphone.” | Publish a curation charter: category diversity, neighborhood rotation, optional “spotlight” slot for underrepresented organizers; track share of picks by geography and org size over time. |
| **City brand vs. liability** — City co-branding raises FOIA, retention, and perceived favoritism risks. | Default operator: CultureWorks (or allied 501(c)(3)) owns the Twilio campaign; City provides endorsement, funding, or procurement for service—not necessarily the short code owner day one. |
| **Partnership dependency vs. weekend build** — Formal API permission is Tier A gating. | Prototype from feeds already used in sibling ideas (Vecina); parallel path: signed MOU for JSON/ICS use and rate limits; do not demo on scraped data without partner approval. |

---

## 4. Fatal flaw test (five tests)

| # | Test | Result |
|---|------|--------|
| 1 | **Data wall** — Is the idea blocked by a Richmond structural wall (311, EnerGov, B2GNow, etc.)? | **Pass.** CultureWorks is partnership-dependent but not a City closed system; TECH_STACK lists ICS/RSS/JSON paths. |
| 2 | **Compliance kill** — Could TCPA/10DLC make lawful operation impractical? | **Pass conditional.** Manageable with registration, consent, opt-out, and counsel; not zero work. |
| 3 | **No distinct user** — Would subscribers reasonably prefer email/social only? | **Pass.** Research shows SMS open/CTR advantages for time-bound weekend actions; push-over-pull addresses non-searchers. |
| 4 | **Unsustainable operations** — Does value depend on unsustainable manual labor or viral scale? | **Pass conditional.** ~10 min weekly curation assumed; fails if no named curator or if growth outruns editorial capacity without automation. |
| 5 | **Equity harm** — Could the product systematically exclude language minorities or neighborhoods? | **Pass conditional.** Not inherently fatal; becomes fatal if team ships without language options, plain text, and geographic balance metrics. |

**Fatal flaw verdict:** None identified as unconditional; **conditional pass** on legal review, partnership letter, and published curation equity rules.

---

## 5. Verdict

**Advance as Tier A pilot.** Strong fit for a 48-hour prototype (Twilio + feed + human curation) with a credible path to production under a nonprofit operator and shared SMS bundle (Bundle 6). Not the pillar’s most narratively ambitious idea (that lives in resident-story collection), but among the most **shippable** for arts discovery.

---

## 6. Category scores (1–5) and weighted awards

| Category | Score | Notes |
|----------|:-----:|-------|
| Impact | 4 | Clear civic fit to MAP arts discovery; incremental, not transformative city narrative |
| Feasibility | 5 | Commodity SMS stack; known feed sources; single partnership conversation |
| User Value | 4 | High for non-searchers; value erodes if curation is stale or homogenous |
| Execution | 5 | Trivially demoable; measurable with UTM and holdouts |
| Innovation | 3 | ERRC “push-over-pull” is sharp; channel pattern precedented in museums |
| Equity & Inclusion | 4 | SMS inclusion; must earn score with editorial and language strategy |

**Weighted totals (hackathon rubric):**

- **Mayor’s Choice** — I×5 + F×5 + UV×4 + E×3 + Eq×3 + In×1 → **91**
- **Pillar Award (City Storytelling)** — I×5 + UV×4 + F×3 + In×3 + E×3 + Eq×3 → **87**
- **Moonshot** — In×5 + I×4 + UV×3 + Eq×3 + F×2 + E×2 → **75**

---

## 7. One-screen summary

Weekend Culture SMS converts fragmented CultureWorks-driven listings into a **weekly, opt-in Friday digest** that meets residents on the device they already use, with manageable compliance and a nonprofit-first operating model. Success depends less on engineering novelty than on **partnership clarity, curation equity, and disciplined measurement**.

---

## Rollback / limits

This document is evaluative research synthesis, not legal advice. TCPA classification for specific copy and sender identity should be confirmed with counsel. Web citations in persona research are illustrative; validate against current carrier and Twilio policy before launch.
