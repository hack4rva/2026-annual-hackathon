# Roundtable (Condensed): Contract Expiry Alerts

**Initiated:** 2026-04-02  
**Idea:** Contract Expiry Alerts (`thriving-city-hall/expiry-alerts`)  
**Pillar:** A Thriving City Hall  
**Problem Statement:** PS2 — Procurement Risk & Opportunity Review  
**Source:** NEW (AI-generated post-event)  
**Implementation Reality Score:** 22/25 — Tier S (Ship It)  
**Overall Rank:** #3 of 73  

## Input Materials

| File | Status |
|------|--------|
| `expiry-alerts/IDEA.md` | Loaded |
| `expiry-alerts/RESEARCH_RESULT.md` | Loaded |
| `expiry-alerts/INNOVATION_ANALYSIS.md` | Loaded |
| `expiry-alerts/README.md` | Loaded (pointer only) |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — Socrata `xqn7-jvv2`, OpenGov context, hackathon-realistic stack |
| `pillar-thriving-city-hall/research/INDEX.md` | Loaded — corpus maps to D2 (contracts data), F3 (expiry path), G2/G4 (procurement + staleness), H3 (procurement MVP) |

**Bundle:** Bundle 1 (Socrata Contracts Pipeline) — push channel paired with Contract Expiry Dashboard.

---

## Seven Personas (Condensed)

### 1 — INNOVATOR
Push beats pull for attention (HCI/vendor literature; see RESEARCH_RESULT). The IDEA’s weekly digest is the feasible wedge; the *transformative* version is RESEARCH_RESULT’s **escalation ladder** (T-180 → T-30) with acknowledgments and **policy triggers** (“default to re-solicitation unless waived”). A naked email without escalation is “informed anxiety” risk — same failure mode as dashboard-only if nobody acts. **Create** policy-embedded urgency; **raise** multi-channel at T-60/T-30; don’t pretend email alone proves emergency-spend reduction (causal link weakest in research table).

### 2 — ACTIVIST
Ship **Pattern A** (INNOVATION_ANALYSIS): cron/GitHub Actions + Socrata CSV + SMTP — no City IT for the *build*. Real **adoption** still needs Procurement as moral owner (contact list, message tone, escalation path). Aligns with pillar research: fastest procurement value is expiry visibility + automation (F3). **Watch:** Richmond already uses OpenGov for procurement browsing; internal CLM-style alerts may overlap — clarify “civic/department digest from open data” vs “vendor’s enterprise module” so work isn’t duplicate *for staff who already live in OpenGov*.

### 3 — CITIZEN
This is a **staff-facing** channel. Residents do not receive digests; indirect benefit only if alerts actually change re-competition and service outcomes — **unverified chain** (same caveat as public dashboard + Uganda-style evidence that “more procurement info” alone doesn’t move bidder behavior). Equity story: fewer emergency sole-source paths *could* preserve competitive rules and M/WBE goals — **plausible mechanism**, not proven for Richmond email MVP.

### 4 — MAYOR
Politically safe **if** Procurement co-signs recipient roles and frequency. An external org blasting `@richmondgov.com` without DIT/Procurement agreement is a **communications incident** waiting to happen. Prefer: director-level champion, plain “unofficial operational aid” disclaimer, and path to formalize after a 4-week pilot. Complements transparency narrative under ORD 2025-211 spirit when paired with public artifacts; does not replace official contract systems of record.

### 5 — ARCHITECT
**Data:** `xqn7-jvv2` per tech stack — public SODA, ~monthly cadence; track `rowsUpdatedAt` / pipeline freshness (G4 staleness theme). **Delivery:** SendGrid/Mailgun + scheduled job; SPF/DKIM/DMARC and City allowlisting are practical risks (Assumption 5 in INNOVATION_ANALYSIS). **Not fatal:** Santa Clara’s “25% wrong dates in SAP” is a warning for *any* alert product — Richmond’s open dataset is strong on missing `effective_to` (IDEA) but **lag or upstream error** still demands a freshness banner and “verify in official record” language.

### 6 — FRONTLINER (Procurement / 311-adjacent)
JTBD “missed renewal” is real in audits (Santa Clara, Berkeley, Maryland/NYC emergency patterns in RESEARCH_RESULT). Line buyers often have **local** tracking; digests help **portfolio visibility**, turnover, and **director-level** crunch months (surge clusters). Risk: digest becomes **noise** if not scoped per department and threshold. **Gating artifact:** department procurement contact list (IDEA) — without it, MVP is a tech demo, not operations.

### 7 — FUNDER
Marginal cost to **build** is low (IDEA 6–10 hr; INNOVATION_ANALYSIS 4–6 hr minimal). Fund **pilot design + adoption** (4 Monday test in INNOVATION_ANALYSIS), not lines of code. Same “90-day stewardship” logic as dashboard roundtable: without Procurement owning the recipient roster and feedback loop, the system dies as a cron job in a repo.

---

## Tensions (Three)

| # | Tension | Resolution (table view) |
|---|---------|-------------------------|
| **1** | **OpenGov / internal CLM overlap** — enterprise tools already market “renewal notifications.” | Treat alerts MVP as **open-data-driven, lightweight, and pilotable**; validate whether staff already get usable expiry pushes. If yes, narrow value to **cross-department digest, surge detection, or external transparency companion** — don’t duplicate paid module without a delta. |
| **2** | **Equity and emergency-procurement narrative** — strong audit chain for *emergencies hurt M/WBE*; weak published proof that **email alerts** reduce emergencies. | Keep **Impact** high (problem is real); mark **Equity** as **conditional** until measurement + optional Phase 2 (policy triggers, outreach), not email copy alone. |
| **3** | **Reach vs. build** — technically Tier S; **operationally** needs allowlisted email + correct owners. | **Feasibility** = high for prototype; **production credibility** gates on Procurement partnership — same class of “organizational wall” as dashboard adoption, but **stronger** because push touches inboxes. |

---

## Fatal Flaw

**No irrecoverable technical flaw** for a pilot: public contracts data + commodity scheduler + mail provider is buildable without punching OnBase/RAPIDS/311 APIs.

**Conditional fatal path (organizational):** If the team cannot obtain **authoritative, maintained department contact routing** and **permission to message those inboxes**, the product never becomes operational — it stays a **demo send to personal Gmail**. That is a **deployment** failure mode, not a dataset failure mode.

**Secondary risk (product):** Alerts on **stale or wrong** effective dates increase alert fatigue and mistrust (Santa Clara lesson). Mitigate with freshness metadata, threshold design, and “confirm in official record” copy — not optional for trust.

---

## Verdict

### **SHIP WITH CONDITIONS**

1. **Procurement gate:** Named champion + approved recipient list (or single-department pilot) before any wide send.  
2. **Email reality gate:** Early test for spam filtering / IT policy on third-party mail to City addresses.  
3. **Pair with visibility:** Link digests to authoritative public view (dashboard / Socrata) and show **data-as-of** date.  
4. **Scope honesty:** Phase 1 = Pattern A digest; escalation + SMS + policy automation = Phase 2 with CPO/legal buy-in (per RESEARCH_RESULT / INNOVATION_ANALYSIS).  
5. **Measure:** Baseline acknowledgement and, over 12–18 months, emergency/sole-source proxy metrics if City will share (RESEARCH_RESULT KPI table).

---

## Scores & Awards

### Original rubric (from IDEA.md)

| Category | Score |
|----------|:-----:|
| Impact | 5 |
| Feasibility | 5 |
| User Value | 5 |
| Execution | 5 |
| Innovation | 2 |
| Equity | 4 |

**Pillar Award:** 93 **Mayor’s Choice:** 99  

### Roundtable-adjusted (condensed consensus)

| Category | Adj. | Rationale |
|----------|:----:|-----------|
| Impact | **5** | Same structural story as dashboard bundle — reduces missed windows and emergency path dependence. |
| Feasibility | **5** | Still Tier S for *build*; partnership is gating condition, not missing API. |
| User Value | **4** | Push is high-leverage but **inbox + ignore + overlap** with internal tools caps “exceptional” until validated on real officers. |
| Execution | **4** | Credible demo needs **live send** and list hygiene — slightly harder than static dashboard demo (INNOVATION_ANALYSIS). |
| Innovation | **2** | “Email cron over open data” is incremental vs. dashboard; differentiation is **channel**, not new data. |
| Equity | **3** | Mechanism plausible (preserve competitive timelines); **direct** equity features and proof deferred — align with dashboard roundtable equity tempering. |

### Revised weighted totals

**Mayor’s Choice** — weights: Impact×5, Feasibility×5, User Value×4, Execution×3, Equity×3, Innovation×1  

25 + 25 + 16 + 12 + 9 + 2 = **89**

**Pillar Award** — weights: Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3  

25 + 16 + 15 + 6 + 12 + 9 = **83**

**Moonshot Award** — weights: Innovation×5, Impact×4, User Value×3, Equity×3, Feasibility×2, Execution×2  

10 + 20 + 12 + 9 + 10 + 8 = **69**

---

## One-Paragraph Synthesis

Contract Expiry Alerts is the **behavioral complement** to a contracts dashboard: same **Socrata** foundation (`xqn7-jvv2`), **Tier S** technical path (scheduler + email/SMS commodity stack per `RICHMOND_TECH_STACK_2026.md`), and strong **audit-backed rationale** that missed expirations feed emergencies and weak competition (RESEARCH_RESULT). The condensed table’s stress tests are **inbox delivery**, **OpenGov/internal overlap**, and **Procurement-owned routing** — without those, the build is trivial but the **outcome** is not. **Fatal flaw** is **organizational** (no authorized operational channel), not missing data. **Verdict:** ship as a **pilot digests** product with freshness discipline and a line of sight to escalation design, with **adjusted** User Value, Execution, and Equity scores reflecting proof gaps and demo friction.

---

*Condensed roundtable: seven personas, three tensions, fatal-flaw test, verdict, scores. Full multi-turn transcript not generated.*
