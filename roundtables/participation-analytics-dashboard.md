# Roundtable (Condensed): Participation Analytics Dashboard

**Initiated:** 2026-04-02  
**Idea:** Participation Analytics Dashboard  
**Pillar:** Thriving Neighborhoods  
**Problem statement:** PS1 — Neighborhood Development Discovery (engagement equity lens)  
**Source:** NEW (post-event)  

**Implementation Reality:** **20/25 — Tier A (Strong)** · Ownership 3 · Data 4 · Tech 4 · Integration 5 · Maintenance 4  
**Master rank (73 ideas):** #17  

---

## Input materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `RICHMOND_TECH_STACK_2026.md` | Loaded (ACS, Legistar OData, GeoHub, AI policy AR 2.13) |
| `pillar-repos/pillar-thriving-neighborhoods/research/INDEX.md` | Loaded — corpus points to B5 digital equity, C1/D1 Legistar, G3/G4 inclusion & data honesty, H MVP boundaries |

---

## Seven personas (single pass)

**1 — Planning / engagement staff (FRONTLINER)**  
We are told to “engage the community” but we get sign-in sheets and inbox chaos. A post-meeting gap report that compares ZIP or voluntary demographics to ACS for the affected tracts is usable *if* it adds less work than the spreadsheet I already abandon. If it is another login and another export nobody opens, it dies.

**2 — Neighborhood advocate (ACTIVIST)**  
Raw attendance counts lie. Raleigh-style gaps (81% white respondents vs 56% city population) are exactly what we suspect in Richmond. I want *who is missing* and recommended plays (translation, intercepts, CBO partners)—not a leaderboard that shames residents for showing up.

**3 — Renter / LEP resident (CITIZEN)**  
I will not always give my address to a city form. If “participation analytics” becomes a precondition to being heard, you have built exclusion with a dashboard on top. Voluntary fields, aggregates only, and no small-N maps are non-negotiable—aligned with NYC-style treatment of IP/GPS as sensitive.

**4 — Data / GIS lead (ARCHITECT)**  
Technically this is tract ACS + geocoding (ArcGIS per stack doc, or Census Geocoder) + optional Legistar comment geography. Legistar OData is public; PDF attachments stay messy. The hard part is defining the “benchmark population”: tract, neighborhood polygon, or project buffer? Wrong geography, wrong gap.

**5 — Equity / civil rights advisor (GUARDIAN)**  
Innovation analysis’s “live equity ticker” during hearings would make gaps visible—and could trigger backlash or performative conflict. Foreground institutional accountability (what the City will do before the vote) rather than real-time spectacle unless Council explicitly wants it.

**6 — City manager / elected (EXECUTIVE)**  
Austin-scale centralization (PublicInput, dozens of departments) is a procurement story, not a weekend app. I can endorse a **pilot** tied to one corridor or rezoning if the department names an owner and funds gap-closing outreach when thresholds trip. No owner, no budget line—no outcome.

**7 — Civic technologist (BUILDER)**  
Pattern A MVP (form → geocode → ACS → gap PDF) is shippable on commodity hosting; Census API needs no City IT. Pattern B citywide dashboard duplicates enterprise products cities already buy. The honest demo is synthetic or one real meeting’s data—INNOVATION_ANALYSIS already flags demo credibility risk.

---

## Tensions (resolved enough to proceed)

| Tension | Pressure A | Pressure B | Condensed resolution |
|---------|------------|------------|----------------------|
| **Sample vs science** | Need demographics to compute gaps | Opt-in bias; incomplete fields | Report confidence bands; weighting playbook (SF-style) where n allows; never imply probability sample |
| **MVP vs enterprise** | Staff want one system | Richmond has siloed outreach | Start Pattern A on one project; cite Austin/Raleigh as case for future platform |
| **Visibility vs harm** | Name gaps to fix them | Public embarrassment, surveillance feel | Aggregate + minimum-n thresholds; executive-facing gap reports before experimental “tickers” |
| **Tool vs stack** | Standalone analytics | “Analytics on top of what?” | Bundle with sign-in workflow + discovery surface (Legistar case, dev tracker, text-back)—implementation review’s meta-tool warning |
| **Geography** | Tract is easy | “Affected neighborhood” may differ | Document benchmark choice per project; prefer consistent Richmond neighborhood layer where tract is wrong |

---

## Fatal flaw

**Decorative analytics without adoption and authority to act.**  
If attendees will not share location/demographics at useful rates, if Planning staff do not adopt digital sign-in, or if leadership will not delay or supplement process when gaps exceed threshold, the dashboard becomes **performance measurement with no performance management**—the highest-risk assumptions in INNOVATION_ANALYSIS (#1, #3, #4). Implementation Reality adds: it is a **meta-tool**; standalone value is weak unless something upstream consistently instruments participation.

---

## Verdict

**Pursue as a piloted Pattern A** (post-meeting gap report + outreach playbook) **with a named PDR/engagement champion** and explicit “gap triggers action” protocol. Treat Tier A blockers as product requirements, not post-launch surprises. Legistar-only variants (comment geography) can validate interest without waiting for meeting redesign. Do **not** promise citywide Austin parity without budget and procurement reality. Align privacy with aggregate-only display and AR 2.13 if any AI summarizes engagement themes.

**Status:** CONDENSED COMPLETE  

---

## Hackathon rubric scores (from `NEW_IDEAS_RUBRIC_GRADES.md`)

| Category | Score |
|----------|:-----:|
| Impact | 5 |
| Feasibility | 4 |
| User Value | 4 |
| Execution | 4 |
| Innovation | 5 |
| Equity | 5 |

**Weighted awards (max 105 each)**  

| Award | Score | Notes |
|-------|------:|-------|
| **Pillar (Thriving Neighborhoods)** | **95** | Impact×5 + UV×4 + Feasibility×3 + Innovation×3 + Execution×3 + Equity×3 |
| **Mayor's Choice** | **93** | Strong impact/feasibility; implements “who benefits from transparency” |
| **Moonshot** | **88** | Innovation×5 + Impact×4 + UV×3 + Equity×3 + Feasibility×2 + Execution×2 |

**Pillar placement:** Top-scoring *idea* in Thriving Neighborhoods NEW_IDEAS rubric set (combined Pillar + Mayor’s 188 vs HUD validator 180, renter notification 178)—still **Tier A** on Implementation Reality, not Tier S, because organizational adoption dominates technical risk.

---

## Rollback / scope note

If pilot fails completion or ZIP capture under 50% in testing, narrow to **Legistar public-comment geography dashboard** only or archive until a centralized engagement tool is procured.
