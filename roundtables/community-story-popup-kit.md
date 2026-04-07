# Roundtable: Community Story Popup Kit

**Pillar:** A City That Tells Its Stories | **Slug:** community-story-popup-kit | **Date:** 2026-04-02  
**Implementation Reality Score:** Not stated in IDEA.md | **Rank:** Not stated in IDEA.md

---

## Persona Assessments

### INNOVATOR
The non-obvious version is not “a recorder in a case” but a **checkable, low-friction logistics layer**: the same pattern as **clinical specimen chain-of-custody** or **open-source release engineering**—immutable handoffs (capture → consent artifact → backup → review → publish) so stories are not stranded on SD cards. Nationally, **library lendable oral-history kits** (e.g., Boston Public Library’s Oral History Backpacks, May 2023 onward, with binders in multiple languages) and **Smithsonian Museum on Main Street** facilitator packs show the pattern works when the institution commits to circulation policy, not just hardware. The ERRC grid holds: **eliminate** default expensive kiosk rental; **reduce** session length for festivals vs. depth sessions; **raise** consent sophistication (non-exclusive vs. full rights transfer); **create** a named “Richmond Story Kit” + popup-to-archive SOP. Challenge: ERRC understates **ambient noise and facilitator variance**—those are product risks, not solved by the grid alone.

### ACTIVIST
**This already exists in pieces**: StoryCorps DIY, MoMS guides, BPL/St. Louis/Princeton-style lendable kits, and city “story booth” stunts (e.g., Lebanon, Indiana’s phone-booth model, widely reported). **The city is not the only right owner**—libraries, museums, universities, and community media are natural anchors. **Decision tree:** **Adopt** MoMS/VHP-style non-exclusive consent and facilitator guidance; **Partner** with Richmond Public Library (rvalibrary.org documents laptop checkout and technology services—aligned with extending “Library of Things”–style lending); **Build** only the thin Richmond layer: branded kit, RPL lending agreement, secure upload folder taxonomy, moderation rubric, and handoff to Omeka S / VCU / Valentine-scale archive; **Advocate** for ongoing archivist/volunteer hours if the city wants stories to “inform decisions” beyond PR.

### CITIZEN
**Engaged Resident:** Strong fit—shows up at festivals and meetings, willing to wait in line for a prompted recording if trust and prompts feel respectful. **Service User:** Benefits if the booth is staffed, consent is plain language, and participation does not require accounts or apps (IDEA aligns). **Invisible Resident:** Left out if collection is only loud outdoor festivals (RESEARCH_RESULT cites EMU pilot: noise and “hawking” depressed uptake), only English-dominant prompts, or only organizers who already have library cards and logistics capacity. **Who is left out:** people who cannot safely be on a public recording, those without guardians present for minors, and residents who distrust city-adjacent archiving unless moderation and use-of-story rules are transparent.

### MAYOR
**Press conference line:** “We meet residents where they already gather and preserve what they choose to share—with clear consent and their copyright respected.” That is **politically viable** as a **culture and equity** story, especially paired with libraries and VCU. **Quick win:** pilot one kit + one indoor community event before a noisy flagship festival. **Risk:** claiming stories “inform decisions” without a published **how feedback reaches Council/staff** invites skepticism; pair the kit with a **public commitment on review and non-cherry-picking** of published clips.

### ARCHITECT
**Simplest thing that works:** one Pelican-case kit, printed quick-start, MoMS/VHP-style one-page consent, end-of-day backup checklist, and a **human** moderation queue before anything is public. **What breaks first at 12 months:** (1) **volunteer moderator burnout**, (2) **lost or corrupted files** if backup discipline slips, (3) **digital surfaces**—any city-branded kiosk or app must meet **DOJ Title II WCAG 2.1 AA** for large jurisdictions (Tier 1 compliance date **April 24, 2026** per ADA.gov and Federal Register rulemaking summaries). **Maintenance burden:** transcription subscription (e.g., Otter.ai tier cited in research), kit replacement ~$320/unit, and **staff or Friends-of-Library time** for circulation—not zero, but bounded.

### FRONTLINER
Matches **how community work actually happens**: organizers already run events; they need **borrowable gear and a clear return path**, not another unfunded “platform.” **Target users will use it** if **greeters** handle consent and queue (RESEARCH_RESULT: booths without facilitation underperform). **Friction:** untrained facilitators botch consent (INNOVATION_ANALYSIS cites DCPL Southwest Views–style restrictions when forms fail). **RPL partnership is plausible but unconfirmed**—Richmond VA’s library system publicizes laptop lending and technology services (rvalibrary.org), which is a precedent for equipment programs, though **oral-history-specific kits would be new** and need a signed workflow.

### FUNDER
**Year 1:** ~$350–400 per kit × modest fleet ($2k–4k), plus **Otter.ai–class** transcription (~$20/user/month in research), minimal hosting (Drive/OneDrive + eventual Omeka), and **event staff** if city-run stations (2 people/station). **Who pays year 2:** Friends of the Library, cultural grants, City Communications or equity office **program line**, or university in-kind—not self-sustaining on hardware alone; **sustainability** = institutional budget + volunteer pipeline, not ad revenue. **Self-sustaining:** **conditional**—sustainable as a **small recurring program**, not as a scaling SaaS product.

## Key Tensions & Resolutions

1. **Innovation vs. “it already exists” (StoryCorps/MoMS/libraries)** → **Resolution:** Treat national playbooks as **adopted infrastructure**; Richmond value is **institutional routing** (RPL lending + defined archive handoff + local multilingual prompts). Evidence: RESEARCH_RESULT toolkit comparison; BPL backpacks verified via bpl.org blog and catalog (2023 launch).

2. **High feasibility on paper vs. 12-month volunteer/archivist cliff** → **Resolution:** Scope MVP as **2 kits + written SOP + measured moderator throughput** before scaling; INNOVATION_ANALYSIS assumption map flags volunteer labor as uncertain (R×U for pipeline throughput).

3. **Mayor’s visibility goals vs. equity for “invisible” residents** → **Resolution:** **Mixed venue strategy** (quiet indoor + optional festival), **greeter + multilingual materials** (BPL model: 10-language binders), and **published moderation criteria** to reduce cherry-picking risk; RESEARCH_RESULT notes noise and outreach as real yield limiters (Woodstock vs. EMU contrast).

## Fatal Flaw Test

| Test | Result | Evidence |
|------|--------|----------|
| Data dependency | **Conditional pass** | No external civic dataset required—the idea **generates** audio and metadata. **Condition:** a real **archive endpoint** (Omeka S, VCU, Valentine, or “Richmond Stories Online” feed) and retention policy must exist or be funded; pillar INDEX points to oral-history and Valentine/VCU contexts as relevant destinations. |
| Structural wall | **Pass** | MVP is physical capture + cloud handoff + transcription; **RICHMOND_TECH_STACK_2026** lists blocked systems (311/AvePoint, OnBase/RAPIDS, EnerGov, B2GNow, DPW GPS)—**none required** for this pipeline. |
| Ownership vacuum | **Conditional** | Plausible **co-owners:** RPL (circulation) + City Communications / cultural equity lead + archive partner (VCU/Valentine). **Gap:** IDEA.md does not name a department; without a **signed MOU**, kits sit in limbo. |
| Harm potential | **Conditional** | Risks: bad consent (minors, coercion), **retraumatization** in public booths, misuse of clips in political framing. Mitigations: MoMS/VHP non-exclusive models, greeter training, moderation queue; pillar research INDEX **G2** (consent/privacy) and **G5** (guardrails) are relevant. |
| Political exposure | **Conditional** | Low if framed as **library-led, consent-first**. **Rises** if the city appears to **curate only favorable** stories or overclaims policy impact. Mitigation: transparent selection rubric and archive independence. |

## Verdict: SHIP WITH CONDITIONS

**Conditions:** (1) **Partnership path** documented (RPL + archive partner) before city-wide claims. (2) **Consent + moderation SOP** tested on real participants (avoid DCPL-style collection restrictions). (3) Any **digital kiosk or city app touchpoint** planned for WCAG 2.1 AA **Title II** compliance for Richmond-scale population (DOJ rule; Tier 1 deadline April 24, 2026). (4) **Pilot audio** in a **noisy** and a **quiet** venue before festival scale.

## Consensus Scores

| Category | Original | Revised | Rationale |
|----------|:--------:|:-------:|-----------|
| Impact | 4 | 4 | Strong alignment with pillar problem; impact scales with event uptake and whether stories feed real decision forums. (Original: INNOVATION_ANALYSIS problem scoping.) |
| Feasibility | 5 | 4 | Hardware and national precedents are proven; partnership, moderation labor, and accessibility compliance pull the score down from “effortless.” (Original: IA feasibility 5.) |
| User Value | 4 | 4 | High for engaged organizers and willing storytellers; uneven for LEP, skeptical, or noise-vulnerable residents without design investment. (Original: inferred from problem clarity 4 / pillar fit.) |
| Execution | 5 | 4 | Physical demo is excellent; sustained execution depends on pipeline discipline and staffing. (Original: IA demo-ability 5.) |
| Innovation | 3 | 3 | Reframe to **pipeline-as-product** is sharp; components are largely **prior art** nationally. |
| Equity | 4 | 4 | Non-exclusive consent and multilingual prompts help; festival-first bias and “who feels safe recording” remain work. (Original: inferred; IA stresses multilingual + consent.) |

**Mayor's Choice:** 83 | **Pillar Award:** 81 | **Moonshot:** 71

*Calculation (Revised scores):*  
MC = 4×5 + 4×5 + 4×4 + 4×3 + 4×3 + 3×1 = **83**  
PA = 4×5 + 4×4 + 4×3 + 3×3 + 4×3 + 4×3 = **81**  
MS = 3×5 + 4×4 + 4×3 + 4×3 + 4×2 + 4×2 = **71**

## Top 3 Recommendations

1. **Pilot two kits** (one RPL branch path, one civic association path) with **pre/post audio quality checklist** and **consent error rate** as success metrics (validates INNOVATION_ANALYSIS top risks: noise, untrained facilitators).

2. **Execute RPL MOU** that covers **replacement cost**, **checkout duration**, **liability**, and **upload URL** printed in-kit—so the “popup-to-archive” handoff is contractual, not aspirational.

3. **Publish a one-page “how stories may be used”** (including **non-cherry-picking** and appeal/contact for participants) **before** city leadership promotes the program publicly.

## Research Conducted

| Query | Finding |
|-------|---------|
| Boston Public Library oral history backpacks lendable | BPL offers lendable Oral History Backpacks (catalog/blog; launched May 2023) with recorder, accessories, and multilingual resource binder—confirms library lending pattern. |
| DOJ Title II WCAG 2.1 AA April 2026 | DOJ finalized rule (April 2024 FR); Tier 1 entities (50k+ population) **April 24, 2026** deadline for web/mobile WCAG 2.1 AA per ADA.gov summaries—relevant if kiosk UI is city-provided digital. |
| Richmond Virginia Public Library technology lending | rvalibrary.org materials reference **laptop checkout** and technology services—supports **plausible** extension to story kits; **oral-history kits not yet verified** as existing at RPL. |
