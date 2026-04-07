# Participation Analytics Dashboard

**Source:** NEW  
**Pillar:** Thriving Neighborhoods  
**Problem Statement:** Richmond has no way to know whether the people participating in planning decisions reflect the demographics of the neighborhoods those decisions affect.

---

## Description

**Reframed value proposition:** Move from counting participants to surfacing **who is missing** from engagement and what to do next — **representation gap-closing** rather than raw attendance metrics. Richmond cannot tell whether people participating in planning decisions **match the demographics** of affected neighborhoods; raw counts hide skew documented in peer cities. The tool ties digital sign-in or comment geodata to **ACS** tract demographics, computes gaps (race, tenure, income proxies as available), and can recommend outreach tactics when gaps exceed thresholds.

## Key Approach

- **Pattern A:** After each meeting, ingest participant ZIP or address → geocode to tract → pull ACS estimates → auto report comparing participant mix to neighborhood or city benchmarks with suggested outreach plays.
- **Pattern B (stretch):** Citywide engagement equity dashboard across departments — depends on centralized platform adoption and budget.
- Optional Legistar integration: map public commenters’ geographies to see legislative engagement patterns.
- Privacy: voluntary fields, aggregate reporting, avoid exposing individual identities.
- Institutional validation stressed: staff must adopt sign-in workflow and leadership must act on gaps or the dashboard is decorative.
