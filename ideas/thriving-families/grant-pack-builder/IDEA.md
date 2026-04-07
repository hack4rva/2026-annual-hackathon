# Grant Pack Builder

**Source:** NEW  
**Pillar:** Thriving Families  
**Problem Statement:** Richmond MCH CBOs lose 80–120 hours per year manually compiling neighborhood data for grants, producing inconsistent profiles that undermine credibility with funders.

---

## Description

Automate assembly of **neighborhood-level maternal and child health (MCH) data profiles** for CBO grant applications, replacing long manual “Statement of Need” work with a pipeline that pulls ACS, VDH, CDC, and VDOE (and related) data into branded fact sheets and slide decks. **Core assumption challenged:** grant data sections require expert manual curation for every indicator; the analysis argues core MCH indicators are standardized enough to template, with most time lost to mechanics. CBOs spend many hours per grant re-gathering the same census and health statistics; the tool raises reusability, transparency (e.g., MOE and suppression rules), and optional refresh cadence.

## Key Approach

- Input: service area ZIP or tract → pull public APIs and published CSVs → apply quality rules (e.g., suppression when counts are small, flag high CV) → render PDF and optionally slides with citations.
- Users: MCH CBO grant writers, small teams without analysts; secondary use for aligned epidemiology or coalition coordination.
- Dependencies called out: Census API, VDH CKAN-style exports, VDOE downloads; Virginia HOI and related layers for richer context in stretch shapes.
- Stretch: comparative benchmarks, coalition-shared profiles, or narrative drafting assistance — scoped carefully for trust and accuracy.
- Validate schema stability of upstream files and CBO trust in automated outputs before heavy UI investment.
