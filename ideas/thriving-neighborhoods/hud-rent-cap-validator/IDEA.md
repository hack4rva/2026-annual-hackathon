# HUD Rent Cap Validator

**Source:** NEW  
**Pillar:** Thriving Neighborhoods  
**Problem Statement:** Richmond residents in subsidized housing have no way to independently verify whether their rent complies with HUD payment standards.

---

## Description

**Reframed value proposition:** Instead of only a staff compliance tool inside vendor suites, shift toward a **public-facing rent cap lookup** so residents can check whether a unit’s rent relates to applicable HUD **Fair Market Rent** / payment-standard logic using **public** HUD USER APIs — without accessing Privacy Act–protected EIV income data. Richmond residents in subsidized housing lack an easy way to **independently verify** whether rent aligns with published payment standards; staff tools are not tenant-facing and APIs require technical skill. The analysis challenges the assumption that rent-cap validation inherently requires protected tenant income feeds.

## Key Approach

- **Pattern A:** Simple web (or SMS) flow: ZIP + bedroom count → HUD USER FMR (and related public) API → show cap, plain-language context, and complaint or RRHA contact links; optional tenant-entered rent comparison with clear limits of self-report.
- Uses public bearer-token APIs and GeoHub or similar for address-to-ZIP where needed; label program type (e.g., HCV vs. LIHTC limitations).
- **Pattern B (stretch):** Staff compliance dashboard with document ingestion and cross-checks — requires agency partnership and is not a weekend dependency.
- Validate local payment-standard rules (e.g., exception rents vs. raw FMR) with RRHA before treating API output as binding.
- Policy note in analysis: avoid EIV misuse; clear disclaimers and program scope.
