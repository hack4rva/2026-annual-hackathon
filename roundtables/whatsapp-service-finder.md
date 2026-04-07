# Roundtable (Condensed): WhatsApp Service Finder

**Initiated:** 2026-04-02  
**Idea:** WhatsApp Service Finder  
**Pillar:** Thriving and Inclusive Communities  
**Problem Statement:** PS1 — Immigrant Service Discovery (safe find/connect without accounts or identifying info)  
**Source:** NEW (post-event)

## Input materials

| File | Status |
|------|--------|
| `IDEA.md` | Loaded |
| `RESEARCH_RESULT.md` | Loaded |
| `INNOVATION_ANALYSIS.md` | Loaded |
| `pillar-repos/.../research/INDEX.md` | Loaded — corpus frames trust, Help1RVA gaps, MVP playbooks (H2, G5, 92_red_flags) |
| `RICHMOND_TECH_STACK_2026.md` | Loaded — Help1RVA/findhelp: **no free public API**; Twilio/SMS viable; AR 2.13 if AI added |

---

## Rubric grades (hackathon six categories, 1–5)

| Category | Score | Note |
|----------|:-----:|------|
| Impact | **5** | Channel matches how many newcomers actually seek help; aligns to MAP pillar |
| Feasibility | **3** | Business API approval, curation load, sustained human escalation |
| User Value | **5** | Meets people on WhatsApp; multilingual menus; optional nearest + scam education |
| Execution | **4** | Strong live-demo surface; weekend MVP realistic with sandbox + JSON + handoff |
| Innovation | **4** | National precedents (ALMA, Documented, Signpost); Richmond-local + verify-number is the twist |
| Equity & Inclusion | **5** | Directly targets language, literacy, and trust barriers |

**Weighted award scores (same formulas as event rubric)**

| Award | Score |
|-------|------:|
| **Pillar** (Impact×5, User Value×4, Feasibility×3, Innovation×3, Execution×3, Equity×3) | **93** |
| **Mayor's Choice** | **91** |
| **Moonshot** | **84** |

*Implementation reality (survivability lens):* **~15–18 / 25 — Tier A/B border.** Commodity messaging stack; **data and ownership depend on CBO partnership** because Help1RVA has no public API (`RICHMOND_TECH_STACK_2026.md`). Maintenance and escalation are human-heavy.

---

## Seven personas (condensed takes)

1. **WhatsApp-first newcomer (pillar B1)** — Finally something that does not force English-first websites or new logins. If the number comes from a mosque, clinic, or CCC flyer, I will try it; if it is a random forward, I will assume scam until proven otherwise.

2. **Refugee / case manager (pillar B2)** — Useful if it returns *accurate* hours, languages, and eligibility in one message I can screenshot to a client. If escalation is slow or the bot guesses on legal/health, I stop recommending it and liability worries me.

3. **Community org / navigator (pillar B3)** — We are the trust layer. Seed the number, co-verify the JSON, and maybe use a CBO shortcut workflow. Without us, adoption dies; with us, we add unpaid monitoring work unless funded.

4. **211 / helpline operator** — Fine as overflow triage if unmatched intents truly hand off with context and SLA. If we become the default “call 211” dump with no staffing model, we burn out and the bot looks broken.

5. **DIT / governance (AR 2.13)** — If you add LLM or transcription (Whisper stretch), expect AI review: transparency, minimization, no training on resident data. Plain keyword bot + curated content is simpler to defend.

6. **Privacy / trust advocate (pillar G2, G5)** — “No accounts” is honest; **Meta Cloud API retention (~30 days)** is not invisible. Catholic Charities–style impersonation scams mean verified Business profile + education are mandatory, not nice-to-have.

7. **Judge / procurement realist** — High empathy demo, clear problem statement, credible prior art. Weak spot is **sustainability**: who owns the number, the directory, and the inbox in month six?

---

## Tensions (challenge rounds)

- **Trust bootstrapping vs. cold scale** — A new WhatsApp line looks like every scam until CBOs cosign (Assumption 1, R×U = 20 in analysis).
- **Privacy promise vs. platform reality** — “Minimal PII” conflicts with Meta retention and organizational logging; disclosure must be upfront (Assumption 6).
- **Automation vs. duty of care** — Legal, mental health, and abuse edges need hard escalation rules (ALMA pattern); keyword-only MVP may over-promise.
- **Directory freshness without Help1RVA API** — Curated JSON is the viable path; stale listings erode trust faster than no bot.
- **National tools vs. local value** — ALMA/ORR cover breadth; Richmond wins on **local verification**, anti-scam, and neighbor-language coverage—not on being another generic bot.
- **Stretch features vs. hackathon honesty** — Voice notes + AI, broadcast ICE alerts, and “verify this number” each raise policy, legal, and moderation load; scope creep kills the demo’s credibility.

---

## Fatal flaw

**Trust and operations collapse mode:** If the number is not anchored in named CBOs with a funded escalation path, the product converges to “text for a short list, then call 211”—indistinguishable from a poster, while still carrying **scam-impersonation risk** for the brand holding the Business account. The fatal flaw is not Twilio; it is **unowned trust + unsustainable human loop**.

---

## Verdict

**Pilot with a named coalition, not a city-wide launch.** Ship a thin MVP: verified profile, 2–3 languages, small curated set, explicit retention/disclaimer, Slack/volunteer handoff with measured response time, and QR + CBO-only promotion for the first cohort. Strong **Pillar** and **Equity** story; **Mayor's Choice** credible only with a clear maintainer (nonprofit or DSS-adjacent partner), not as a standalone hackathon repo. Tier **A/B** on implementation reality hinging on **partnership**, not on City IT integration.

---

## Rollback / scope guard

Cut order: (1) AI/voice/broadcast, (2) location-nearest, (3) scam checker until verified provider list exists, (4) extra languages—keep English + one high-need language rock-solid.
