# Roundtable (Condensed): Storefront Work-Window Brief

**Initiated:** 2026-04-02  
**Slug:** `storefront-work-window-brief`  
**Pillar:** A Thriving & Sustainable Built Environment  
**Problem Statement:** PS1 — Infrastructure Project Visibility  
**Source:** BLUESKY (ERRC reframing)  
**Implementation Reality:** 19/25 — Tier A (Strong) | **Overall rank:** #27 of 73

---

## Input materials

| File | Status |
|------|--------|
| `.../storefront-work-window-brief/IDEA.md` | Loaded |
| `.../storefront-work-window-brief/RESEARCH_RESULT.md` | Loaded |
| `.../storefront-work-window-brief/INNOVATION_ANALYSIS.md` | Loaded |
| `2026-annual-hackathon/ideas/RICHMOND_TECH_STACK_2026.md` | Loaded |
| `pillar-repos/pillar-thriving-built-environment/research/INDEX.md` | Loaded (F2, G1, G4, H2, D1 cross-ref) |

**Tech-stack cross-check:** `RICHMOND_TECH_STACK_2026.md` states the **Capital Project Dashboard** is quarterly and **not anonymously queryable** (GeoHub sign-in). Parallel discovery: **Virginia Open Data** exposes CIP-related ArcGIS GeoServices, and public FeatureServer endpoints for capital project boundaries appear discoverable—**the hackathon must validate one concrete public REST URL and fields in hour one**, not assume the dashboard embed equals a client-side API.

---

## Seven persona simulations

### 1 — Storefront owner (single-location retail / food, Carytown-class corridor)

I do not live in ArcGIS; I live next to orange barrels. If you give me a one-page PDF with dates, who to call, and “which side of the street is open,” I will print it and tape it to the door for staff and delivery drivers. I will only use it if someone I trust (CMA, a neighbor business, DPW flyer) points me to it—self-service is useless if I never hear the URL. *Queries:* `small business construction street work notification mitigation city program liaison`; `Richmond Virginia merchant association small business corridor Carytown`. *Findings:* Peer cities pair **liaisons, advance notice, and mitigation funds** with digital tools; **Carytown Merchants Association** is a real distribution channel for corridor trust.

### 2 — DPW / capital project manager

If your PDF implies a sidewalk closure or parking rule that is not in the signed traffic control plan, I am not the hero—I am the liability. I need every artifact to say **source, as-of date, and “verify with field conditions.”** Contact fields in public datasets sometimes rot or point to the wrong person; I would rather a generic DPW intake line than my cell on a thousand printouts. *Queries:* `Richmond Virginia GeoHub ArcGIS CIP capital projects public feature service API 2025 2026`; stack doc internal cross-check. *Findings:* **CIP dashboard** is positioned as the public face (quarterly updates, manager fields on rva.gov narrative); **alternate public geodata paths** (state portal / REST layers) need explicit validation—not assumed parity with “live” field conditions.

### 3 — Economic development / corridor partner (BID analog)

Richmond is not NYC with CCLs and a nine-figure mitigation fund; anything that scales **without** a new FTE is interesting. If this brief becomes the **standard attachment** to “Open for Business” campaigns and micro-grants, it stops being a website and starts being infrastructure. I want a version merchants can hand to lenders and insurers, not just customers. *Queries:* `small business construction street work notification mitigation city program liaison`; RESEARCH_RESULT synthesis. *Findings:* **Fort Collins, Minneapolis, Seattle** show the winning model is **human coordination + schedules + signage**; a PDF generator is a **complement**, not a substitute, for outreach.

### 4 — Accessibility & mobility advocate

A “plain-language brief” that glosses over **continuous accessible routes, temporary ramps, and detectable edges** can mislead disabled patrons and workers. Caltrans and Salt Lake City–style guides stress **minimum widths, alternate crossings, and maintenance**—if the city data does not encode that, the tool must **not fake it**. Print-friendly is good; **screen-reader-first HTML** before print is better. *Queries:* `construction work zone pedestrian access ADA temporary route business notification`. *Findings:* **Alternate pedestrian routes** must meet width, continuity, and detectability expectations; **multi-point signage** is standard—briefs should reference official ADA/detour maps where they exist.

### 5 — Civic technologist / architect (zero-server pattern)

Client-side PDF or print CSS matches **Bundle 4** and avoids procurement, PII storage, and hosting fights—aligned with privacy-first PDF tooling practice (process in-browser, no upload). The weak point is not the stack; it is **CORS, auth, and field completeness** on whichever FeatureServer you call. Spike: one static page, one public layer, one disclaimer block. *Queries:* `client-side PDF generation browser privacy no server civic tool pattern`. *Findings:* **Browser-side PDF** is a credible 2026 pattern for sensitive/low-trust environments; **Web Workers / pdf-lib-class stacks** are mature; **no-server** does not mean **no-governance** (disclaimers, versioning).

### 6 — Equity & language access reviewer

Foot traffic loss hits **single-location food service** hardest (UMN/MnDOT evidence in research pack). A tool that is English-only and URL-only **widens** gaps unless partners (CMA, churches, micro-grant programs) **print and translate**. The brief should ship with a **“take this to your alderman / Commissioner of Revenue / Main Street org”** use case, not only consumer marketing. *Queries:* `Richmond Virginia merchant association small business corridor Carytown`; construction mitigation equity (from RESEARCH_RESULT). *Findings:* **CMA** is an existing brick-and-mortar network—ideal pilot distributor; **tiered risk response** (food service first) matches evidence.

### 7 — Judge — Mayor’s Choice lens (“pilot in 90 days?”)

I see a tangible artifact and a clear user. I do not see a **named city owner** for keeping disclaimers accurate or for resolving the **CIP access-path** contradiction. For a pilot, success is: **DPW or OSE acknowledges the data source**, and **one corridor** (e.g., Carytown or Scott’s Addition) co-signs a one-pager template. Without that, it is a clever weekend demo that dies on stale data. *Queries:* `government open data project timeline stale quarterly update trust citizens`; pillar `G4` / `G1` themes (staleness, false precision). *Findings:* **Open-government** progress narratives exist, but **many civic datasets lag**; quarterly CIP cadence is a **trust risk** unless the PDF shows **last refreshed** and **confidence tier** (observed vs inferred).

---

## Top 3 tensions and resolutions

| # | Tension | Resolution |
|---|---------|--------------|
| 1 | **Self-service vs. what actually works in peer cities** (liaisons + door-to-door + funds) | Position the brief as the **printable spine** of a lightweight merchant kit; partner with **CMA / corridor orgs** for distribution; do not claim replacement for human outreach. |
| 2 | **Actionable access detail vs. what CIP layers actually contain** | **Tiered output:** (A) verified fields from API; (B) explicit **“typical impacts by project type”** boilerplate with caveats; (C) **blank + “call DPW”** rather than invented closures. |
| 3 | **Internal tech stack says CIP dashboard is not anonymously queryable** vs. IDEA assumes GeoHub CIP | **Hour-one spike:** lock a **public** FeatureServer/SODA path (e.g., state open data or published REST layer) and schema; if only signed-in dashboard works, **pivot to static quarterly export** or **partnership read-only token**—do not demo on unverified endpoints. |

---

## Fatal flaw test

| Question | Result |
|----------|--------|
| Does one false closure or contact on a taped door destroy trust? | **Yes.** Mitigate with **as-of date, source URL, field-level confidence, and “verify in field”** language. |
| Is there a single dependency that kills the whole concept? | **Data access + field richness.** Fatal if **no** public machine-readable projects-with-geometry; **not fatal** if team validates public layer or scopes to “schedule + distance + verify” MVP. |
| Does zero-server avoid liability? | **No.** Copy and UX are **de facto** city-adjacent; need **neutral branding** and **not an official record** unless co-branded. |

**Outcome:** **No unrecoverable fatal flaw** if scope honors data limits; **fatal** if shipped as authoritative access control without TCP-linked data.

---

## Verdict

**Conditional proceed — ship MVP only after public data path + field audit; default distribution through corridor partners.**

Rationale: Problem and artifact are crisp; implementation reality is **Tier A** with a **documented GeoHub/CIP auth tension** that must be resolved or downscoped. Strong fit for **Infrastructure Project Visibility** from the **merchant** angle Richmond under-serves versus NYC/SF.

---

## Scores (1–5) and weighted awards

| Category | Score | Notes |
|----------|:-----:|-------|
| Impact | 4 | Evidence-backed harm to single-location SMBs; aligns with PS1. |
| Feasibility | 3 | Public CIP API path + access fields = main risk; mitigations known. |
| User Value | 5 | Printable, shareable, staff/delivery legible. |
| Execution | 4 | Demo-ready if data spike passes; otherwise thin. |
| Innovation | 3 | Strong ERRC narrow; **Bundle 4** pattern is shared. |
| Equity & Inclusion | 4 | High value if partnered; English/URL-only risk without orgs. |

### Weighted totals (hackathon rubric)

- **Mayor’s Choice** — Impact×5, Feasibility×5, User Value×4, Execution×3, Equity×3, Innovation×1  
  **MC: 82** (= 20+15+20+12+12+3)

- **Pillar Award (Built Environment)** — Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3  
  **PA: 82** (= 20+20+9+9+12+12)

- **Moonshot** — Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2  
  **MS: 72** (= 15+16+15+12+6+8)

**Award lean:** **Pillar** and **Mayor’s Choice** (practical visibility + implementable pattern); **not** primary Moonshot (incremental over radical).

---

## One-line summary

A zero-server, address-to-PDF **merchant continuity brief** is compelling for Richmond’s corridor SMBs **if** the team validates a **public** CIP geometry API, labels **inferred** access text honestly, and routes adoption through **trusted merchant networks**—otherwise it becomes another low-trust map ghost.
