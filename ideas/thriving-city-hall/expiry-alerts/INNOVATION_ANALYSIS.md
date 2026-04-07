# Innovation Analysis: Contract Expiry Alerts

**Generated:** April 2, 2026
**Inputs:** IDEA.md, RESEARCH_RESULT.md, 6 Innovation Lenses

---

## 1. Blue Ocean Reframing (ERRC Grid)

| Factor | Action | Details |
|--------|--------|---------|
| Dashboard-based monitoring | Eliminate | Research shows dashboards are passive — "our attention is always drawn to alerts" (Vroozi). Eliminate the requirement for users to log in and check. |
| Manual expiration tracking in spreadsheets | Eliminate | Santa Clara County found 25% of SAP end dates were incorrect from manual tracking. Replace human memory with automated jobs. |
| Complexity of CLM platforms (SAP Ariba, Bonfire) | Reduce | Full CLM costs $50K+/year and takes 6+ months. A cron job + email service achieves the core alert function in hours. |
| Escalation and policy triggers | Raise | Most alert systems send a single notification. Raise to an escalating cadence (T-180 → T-90 → T-60 → T-30) with named recipients and SLA acknowledgment. |
| Default-to-competition policy automation | Create | No city has implemented "if no action by T-30, default to open re-solicitation." Create a policy-embedded alert that forces a decision. |

**Core assumption challenged:** That alert systems require enterprise procurement software. The research shows cities spend months deploying CLM tools when the core need — "tell me what's expiring" — can be solved with a weekly cron job against a public CSV.

**Reframed value proposition:** Push beats pull. The value isn't in showing data — it's in interrupting the right person at the right time with a specific action deadline. This is a behavior-change tool disguised as a notification system.

---

## 2. Rapid Ideation — 8 Divergent Approaches

1. **Weekly Email Digest** — Every Monday, each department gets a summary: "You have X contracts expiring in 30/60/90 days. Here's the list."
2. **SMS Countdown** — Text procurement officers: "CONTRACT #1234 with [Vendor] expires in 30 days. Reply RENEW or COMPETE to log your decision."
3. **Calendar Injection** — Automatically add contract expiration milestones (T-180, T-90, T-30) to procurement officers' Outlook/Google calendars.
4. **Slack/Teams Escalation Bot** — Post alerts in a #procurement channel. If not acknowledged within 48 hours, DM the supervisor. At T-30, DM the CPO.
5. **Public Accountability Feed** — Publish a public RSS/web feed: "These contracts expire this month with no renewal action." Radical transparency as a forcing function.
6. **Vendor Nudge System** — Notify *vendors* when their contracts approach expiry: "Your contract with Richmond expires in 90 days. Contact procurement to discuss renewal or re-competition."
7. **Emergency Procurement Shame Counter** — Track and publish how many emergency/sole-source procurements resulted from missed expiration windows. Make the cost of inaction visible.
8. **AI Triage Alert** — Classify expiring contracts by risk (high-value, no alternatives, MBE vendor) and route only high-risk alerts to humans. Low-risk contracts auto-generate RFP templates.

**Most provocative:** #5 — A public accountability feed weaponizes transparency. If the public knows a contract is expiring, political pressure supplements institutional alerts.
**Most feasible:** #1 — Weekly email digest requires only a cron job, the Socrata CSV, and an SMTP service. Can be built in 4-6 hours.

---

## 3. Rapid Design Sprint

**Problem in one sentence:** Procurement officers miss contract renewal deadlines because no one proactively tells them what's expiring, leading to rushed emergency procurements.

**Target user:** Department procurement contact responsible for 20-50 contracts, who currently tracks expirations in a personal spreadsheet or not at all.

**User Journey:**
- Start: Officer receives a weekly email on Monday morning with a clean table of their department's contracts sorted by expiration proximity.
- Friction: None — the information arrives in their inbox without any login, search, or navigation. The friction is in the *response*: deciding whether to renew, re-compete, or let expire.
- Outcome: Officer clicks a link to the Procurement Transparency Dashboard for details, initiates the appropriate procurement action 90+ days before expiration.

**Lowest-fidelity prototype:** A Python script that downloads `xqn7-jvv2` CSV, filters by department and date range, formats an HTML email table, and sends via SendGrid/Mailgun.

**First test:** Send the digest to one procurement officer for 4 consecutive Mondays. Ask: "Did this surface any contract you weren't already tracking? Did you take action because of it?"

---

## 4. Opportunity Mapper

### Pattern A: Department Email Digest (Quick Win)
- **User:** Department procurement contacts (one per department)
- **Outcome:** Weekly awareness of upcoming contract expirations without any user effort
- **Workflow:** Scheduled job (cron/GitHub Actions) → download Socrata CSV → filter by department and date thresholds → format HTML email → send via SMTP
- **Dependencies:** Socrata dataset (public), department contact email list (one spreadsheet from Procurement Services)
- **Richmond relevance:** No City IT involvement needed. Data is public. Email infrastructure is commodity. Addresses the exact gap cited in Santa Clara County's audit: "contracts expire before the responsible department realizes."
- **Pros:** Near-zero maintenance; scales to any number of departments; zero user training
- **Cons:** Requires initial procurement officer email list; email fatigue risk if not well-formatted

### Pattern B: Escalating Multi-Channel Alerts with Policy Triggers (Stretch)
- **User:** Procurement officers, supervisors, CPO, and department heads
- **Outcome:** Institutionalized alert cadence (T-180 → T-90 → T-60 → T-30) with escalation and default-to-competition policy
- **Workflow:** Alert engine monitors expiration dates → sends tiered alerts via email, SMS, and Teams → tracks acknowledgment → escalates unacknowledged alerts → at T-30, triggers default re-solicitation
- **Dependencies:** Buy-in from CPO to establish policy triggers; SMS service (Twilio); Teams/Slack integration; acknowledgment tracking system
- **Richmond relevance:** Research shows Berkeley's non-competitive practices cost $21.7M in lost MBE opportunities. Houston's AP 2-23 proves policy-backed alerts work.

**Recommendation:** Pattern A is a weekend build that proves value immediately. Pattern B requires institutional buy-in but delivers the transformative outcome (emergency procurement reduction, MBE participation lift).

---

## 5. Problem Scoping

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Impact | 5 | NYC M/WBEs captured 3.45% of emergency contract value. Preventing one emergency procurement pays for the entire system. |
| Feasibility | 5 | Same `xqn7-jvv2` dataset as the dashboard. Add a cron job and email service. |
| Data availability | 5 | 0% missing expiration dates. Known surge clusters at end-of-quarter/year. |
| Clarity | 5 | "Send email when contract approaches expiry" is the simplest possible spec. |
| Demo credibility | 4 | Slightly harder to demo than a dashboard — need to show the email arriving, not just a UI. Use a live send during the demo. |

**Richmond-specific alignment:** Directly complements the Procurement Transparency Dashboard. Research recommends automated email exports for 90-day expirations as a Phase 1.1 feature — this IS that feature.

**Policy/eligibility risks:** Sending emails about public contract data carries no legal risk. The policy trigger (default to re-competition) would require CPO authorization but is a governance choice, not a legal barrier.

**Weekend MVP shapes:**
1. **Minimal:** Python script + GitHub Actions + SendGrid. Weekly digest email to a test list. 4-6 hours.
2. **Enhanced:** Add SMS via Twilio for T-30 alerts, surge-month warnings, and a simple web archive of past digests. 8-12 hours.

---

## 6. Assumption Mapping

| # | Assumption | Risk | Uncertainty | Priority |
|---|-----------|------|-------------|----------|
| 1 | Procurement officers read weekly digest emails and find them actionable | High | High | TEST FIRST |
| 2 | Department procurement contact emails can be obtained as a simple list | Medium | Medium | TEST SECOND |
| 3 | Push alerts reduce emergency procurement rates | High | Medium | TEST THIRD |
| 4 | Monthly Socrata refresh cadence is sufficient for alert accuracy | Medium | Low | MONITOR |
| 5 | Email doesn't get filtered as spam by City email systems | Medium | High | VERIFY EARLY |
| 6 | Escalation cadence (T-180/T-90/T-60/T-30) matches actual procurement timelines | Medium | Medium | VALIDATE |
| 7 | Acknowledgment tracking is necessary for the MVP | Low | Low | DEFER |

**Top 3 to validate:**
1. **Officers read and act on digest emails** — Validation: Send 4 weekly test digests. Track open rates (SendGrid) and ask recipients to forward any contract they weren't tracking.
2. **Contact list is obtainable** — Validation: Ask the Department of Procurement Services for a list of department procurement contacts. If it exists as a spreadsheet, proceed. If not, the MVP scope shrinks to a single-department pilot.
3. **Push alerts reduce emergency procurement** — Validation: Baseline current emergency/sole-source procurement rate. After 6 months of alerts, measure again. Research suggests a 20-30% reduction target at 12-18 months is realistic.

---

## Key Takeaway

The research makes a compelling case that push beats pull: "Dashboards are passive; alerts are active." Santa Clara County's 25% incorrect expiration dates and Berkeley's $21.7M in lost MBE opportunities both trace back to the same root cause — nobody proactively told the right person at the right time. This idea is the behavioral complement to the Contract Expiry Dashboard: one shows the data, the other forces action on it. A hackathon team should build both together as Bundle 1.
