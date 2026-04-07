# Roundtable (Condensed): Snow Tier Compass

**Initiated:** 2026-04-02  
**Slug:** snow-tier-compass  
**Pillar:** A Thriving & Sustainable Built Environment  
**Problem Statement:** PS2 — Fleet Operations & Street Service Tracking  
**Source:** BLUESKY (ERRC reframing)  
**Implementation Reality Score:** 21/25 — Tier S (Ship It)  
**Overall Rank:** #16 of 73  

---

## Input Materials

| File | Status |
|------|--------|
| `ideas/thriving-built-environment/snow-tier-compass/IDEA.md` | Loaded |
| `.../RESEARCH_RESULT.md` | Loaded |
| `.../INNOVATION_ANALYSIS.md` | Loaded |
| `ideas/RICHMOND_TECH_STACK_2026.md` | Loaded |
| `pillar-repos/pillar-thriving-built-environment/research/INDEX.md` | Loaded (A2, E2, F3, D4, G2, H3/I3 as contextual anchors) |

---

## External grounding (WebSearch)

| Query | Finding (summary) |
|-------|-------------------|
| Richmond Virginia DPW snow removal street priority tiers | [rva.gov/snow-removal](https://www.rva.gov/public-works/snow-removal) documents P1/P2/P3 lane-mile counts, timing goals, and states the City does not take individual plow requests via 311. |
| Richmond VA snow removal map interactive address search | Public color map and narrative exist; search results do **not** confirm a resident address-to-tier lookup — gap aligns with the hackathon idea. |
| Municipal snow plow priority map public GIS address lookup | Peer pattern: Kitchener and others combine priority GIS + search; validates “static tier + lookup” without live AVL. |
| Syracuse snow operations map 311 calls reduction | Third-party and Innovate Syracuse materials cite ~30% complaint reduction after integrated map/GPS deployment — supports *expectations* ROI, with caveat that Syracuse’s full stack included live tracking. |
| VDOT vs Richmond city snow | Jurisdictional split (VDOT state routes vs city streets) must be surfaced in UX disclaimers to avoid false confidence. |

---

## Seven Personas (simulated)

**1 — Concerned resident (Union Hill)**  
I already found paragraphs on rva.gov about Priority 1–3, but I still cannot type my address and know *my* block’s tier without squinting at a PDF-style map. During a storm I want one sentence: “You’re P3; crews are still on P1; typical window 48–72 hours after snow ends.” If the tool wrong-places me because digitization was sloppy, I will trust the City less, not more — so it has to match official DPW geometry or say “unknown.”

**2 — DPW field supervisor**  
We run a priority system whether or not residents like it; what I need is fewer radio calls asking “when is my street” and fewer Council forwards that misread social media. A **static** tier layer does not replace dispatch knowledge during weird events (equipment down, refuel loops). I’m fine publishing tiers if legal and the Director sign off — I’m not fine with a hackathon map that becomes the “official” source without our maintenance path.

**3 — 311 / communications lead**  
Richmond already tells people we don’t route individual plow requests through 311. A lookup that reinforces *policy* (“here is your tier; here is current phase”) could shorten calls if it’s linked from winter-weather hubs and pushed on Nextdoor when flakes fly. Syracuse-style evidence suggests big complaint drops when maps exist, but their stack was heavier — we should measure our pilot with snowfall-normalized 311 themes, not raw counts.

**4 — Older adult, smartphone-basic**  
I need large type, no account, and a phone number or simple SMS path optional — not only a map.pan UI. If you only show a map, I’m stuck. Pairing tier text with **plain-language** timing (using City-published windows) matters more than animations.

**5 — Council / district office**  
Constituents compare neighborhoods. Publishing machine-readable tiers will invite “why are we always P3?” stories. That is politically uncomfortable but not a reason to hide data — it is a reason to pair the tool with **documented criteria** (arterials vs locals) and a contact for *state*-maintained roads (VDOT), so we don’t own the wrong explanation.

**6 — Civic technologist (StreetLights pattern)**  
GeoHub REST + geocoder + point-in-polygon is a solved path in this ecosystem; Tier S is believable because it **avoids the DPW Fleet GPS wall** from `RICHMOND_TECH_STACK_2026.md`. The weekend demo is “address → tier + canned explanation + optional manual status flag,” not PlowNYC. Ship static first; never imply live truck positions without telemetry.

**7 — Equity-minded neighborhood organizer**  
Low-income blocks already wait longer on collectors and locals; transparency does not fix that, but hiding tiers doesn’t either. A future **equity overlay** (tier vs demographics) is politically sensitive — the MVP should not pretend to audit fairness unless DPW and OEQ partner. For the hackathon, focus on **equal access to the same facts** (multilingual copy later; English MVP OK if disclosed).

---

## Top 3 Tensions — Resolutions

| Tension | Resolution |
|---------|------------|
| **A. “Public prose already exists” vs “IDEA says PDF-only.”** | Richmond publishes tier definitions and a color map, but not necessarily geocoded address lookup or API-friendly polygons. **Scope the product as the missing interaction layer** (address → tier + VDOT disclaimer), with one-time alignment to official DPW geometry. |
| **B. Resident desire for “when will my plow arrive?” vs no live GPS.** | **Explicitly market as expectation-setting, not tracking.** Use phased operational status (“working P1”) plus published time *ranges* from City materials — never fake precision. Matches INNOVATION_ANALYSIS Pattern A vs B. |
| **C. Political risk of tier visibility vs 311 relief.** | **Co-own messaging with DPW/Comms:** publish criteria, link to winter weather page, and add staleness / “verify with PW” footer. Offer equity review as a **phase 2** analytic, not a stealth launch feature. |

---

## Fatal Flaw Test

| Question | Result |
|----------|--------|
| Does it **require** a structural wall (fleet GPS, 311 API)? | **No** — explicitly avoids DPW telemetry wall; no AvePoint read/write needed. |
| Could a single wrong assumption kill trust? | **Yes, if** polygons are crowd-sourced without DPW validation — **mitigate** with official digitization or labeled beta. |
| Is there no owner? | **DPW** is natural owner of tier truth; **DIT/GeoHub** for hosting pattern. Fatal only if **no path to authoritative data** — resolvable via MOU or City publishing GeoJSON. |
| **Verdict of test** | **No fatal flaw** for a static MVP; **conditional pass** on **data authority** and **disclaimer discipline** (VDOT boundaries, storm exceptions). |

---

## Verdict

**Ship** — Strong hackathon and early-pilot fit: reuses proven GeoHub geocoder + polygon pattern, avoids fleet GPS, addresses a recurring resident information gap even though narrative exists on rva.gov. **Conditions:** DPW (or City GIS) signs the digitized layer; UX never implies live plow positions; VDOT vs city maintenance is explicit.

---

## Judge-style scores (1–5) and award weighting

**Category scores**

| Category | Score | Notes |
|----------|:-----:|-------|
| Impact | 4 | Storm-season 311 pressure; aligns with PS2; seasonal not year-round. |
| Feasibility | 5 | Tier S; StreetLights pattern; one-time digitization + manual status. |
| User Value | 4 | Direct answer to high-anxiety question; depends on adoption surfaces. |
| Execution | 4 | Demo-ready address lookup; credibility hinges on real geometry. |
| Innovation | 3 | ERRC “reduce telemetry / raise clarity” — smart scope, not novel science. |
| Equity & Inclusion | 4 | Procedural transparency; risk of narrative harm if sold as “fairness audit” without partners. |

**Weighted totals** (hackathon rubric from workspace context)

- **Mayor’s Choice** (Impact×5, Feasibility×5, User Value×4, Execution×3, Equity×3, Innovation×1): **88**  
- **Pillar Award** (Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3): **84**  
- **Moonshot** (Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2): **73**  

**Award fit:** Best match = **Mayor’s Choice** and **Pillar (Built Environment / PS2)** — implementable, resident-legible, city-shaped. Moonshot is weaker by design (scope deliberately anti-moonshot).

---

## Rollback / risks

- If DPW will not release verifiable tier geometry, pivot to **SMS + PDF georeferencing proof-of-concept** only (do not publish as production).  
- If operational status cannot be updated during events, ship **year-round tier lookup only** and link to rva.gov winter updates.

---

## One-line return

`snow-tier-compass | Ship (DPW-authoritative data + disclaimers) | MC:88 PA:84 MS:73 | Address-level snow tier lookup using GeoHub + digitized DPW tiers—expectation-setting without fleet GPS, closing the gap left by narrative-only city pages.`
