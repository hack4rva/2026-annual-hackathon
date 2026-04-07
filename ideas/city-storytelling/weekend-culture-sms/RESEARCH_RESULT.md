# SMS Weekly Arts Digests — What’s Proven, What Isn’t, and How to Win

## Executive Summary
While explicit, city-run weekly arts SMS digests are rarely documented publicly, cultural organizations are successfully leveraging SMS to drive revenue and engagement. Institutions like the Museum of Contemporary Art (MCA) Chicago are sending 2–3 texts per week, generating significant revenue and cross-channel list growth [1] [2]. For municipalities, SMS is predominantly used for emergency or general civic alerts (e.g., NYC's Notify NYC or Missoula's Weekly City News Digest) rather than curated arts content [3] [4]. 

The engagement upside of SMS compared to email is massive. SMS reliably drives click-through rates (CTR) around 22.2%, compared to email's 2.5% [5]. Furthermore, evidence from adjacent sectors (like adult education and healthcare) demonstrates that SMS reminders can increase attendance by 4 to 7 percentage points [6] [7]. For cities and cultural organizations, launching a weekly SMS arts digest presents a greenfield opportunity to cut through the noise of email and social media, provided they navigate TCPA compliance, 10DLC registration, and strict frequency discipline.

## Landscape: Who’s Actually Doing Weekly SMS for Arts?

### Cultural institutions lead while municipalities stick to civic alerts
Public documentation of city-run, arts-only weekly SMS digests is scarce. Most municipal SMS programs focus on emergency notifications, service advisories, or general city news. For example, Missoula, MT, offers a "Weekly City News Digest" that allows users to opt-in via SMS, but it is not exclusively focused on the arts [4]. Similarly, New York City's Notify NYC provides localized alerts for transit, emergencies, and planned events, but functions as a civic utility rather than a curated cultural digest [3].

Conversely, cultural organizations are actively monetizing SMS. The Museum of Contemporary Art (MCA) Chicago partnered with Attentive to launch an SMS program, sending two to three messages per week [2]. This cadence proved to be the "sweet spot" for their audience, often timed around lunch breaks or after work [2]. The program generated over $158,000 in revenue, achieved a 20x return on investment in a single month, and drove an additional 1,000 email signups [1] [2]. 

### Viral demand highlights carrier constraints
The appetite for SMS-based cultural engagement is high, but it comes with technical risks. In 2017, the San Francisco Museum of Modern Art (SFMOMA) launched "Send Me SFMOMA," allowing users to text a keyword or emoji to receive a matching artwork from the museum's collection [8] [9]. The campaign went viral, receiving over two million texts in a week [8]. However, the massive influx of messages caused mobile carriers to temporarily blacklist the number, suspecting it was spam [8]. This underscores the critical need for proper carrier registration (A2P 10DLC) and throughput planning before launching high-visibility SMS campaigns.

## Channel Benchmarks: What Good Looks Like (SMS vs. Email vs. Social)

### SMS dominates immediate action while email serves long-form depth
When comparing SMS to email and social media, SMS consistently outperforms in immediate visibility and click-through engagement. According to 2026 data for the Americas, SMS achieves a click-through rate of 22.2%, which is roughly nine times higher than email [5]. 

| Channel | Delivery / Reach | Open Rate | Click-Through Rate (CTR) | Unsubscribe / Opt-Out Rate |
| :--- | :--- | :--- | :--- | :--- |
| **SMS** | ~90–99% delivered | ~98% (industry estimate) | 22.2% (18.8% unique) | 0.53% average |
| **Email** | 99.4% delivery rate | 58.8% (40.08% unique) | 2.5% (1.2% unique) | 0.12% average |
| **Social Media** | 5–20% organic reach | Feed-dependent | 0.5–2% (estimated) | N/A |

*Takeaway: SMS is the optimal channel for driving urgent, time-sensitive actions (like weekend event RSVPs or flash ticket sales), while email remains highly effective for cost-efficient, long-form storytelling and broad audience nurturing.*

To illustrate the practical impact, consider a hypothetical audience of 10,000 subscribers receiving a weekly digest. Based on the benchmarks above, an SMS campaign would generate approximately 1,842 unique clicks, whereas an email campaign would generate roughly 120 to 250 clicks. Social media organic posts would likely yield fewer than 20 clicks without paid amplification. Furthermore, Klaviyo reports that behavior-triggered SMS flows achieve click rates nearing 10% on average—almost double that of standard broadcast campaigns—and account for 45.2% of total SMS revenue despite making up only 7.6% of send volume [10].

## Attendance Impact & Attribution That Stands Up

### SMS reminders reliably reduce no-shows and boost event turnout
While direct, head-to-head published studies comparing SMS to email for arts attendance are rare, adjacent sectors provide robust evidence of SMS's efficacy. A meta-analysis of randomized controlled trials (RCTs) in healthcare found that SMS reminders increased the likelihood of clinic attendance by 50% compared to no reminder [11]. In the education sector, a large-scale UK field experiment demonstrated that text messages led to a 4 percentage point increase in average attendance initially, which grew to a 7 percentage point increase over the full academic year [6] [7]. 

In the nonprofit event space, organizations utilizing data-driven SMS RSVP strategies have reported up to 275% donor growth via SMS and a 110% increase in SMS-related revenue [12] [13]. These organizations leverage high-volume moments and append phone numbers to highly engaged email audiences to ensure messages reach receptive supporters [13].

### Rigorous attribution requires CRM match-backs and holdout groups
To accurately measure the impact of a weekly SMS digest on ticket sales and attendance, cultural organizations must move beyond basic click tracking. Best practices for attribution include:
* **Randomized Holdouts:** Withhold the SMS digest from a 10–20% control group to measure true incremental lift in attendance.
* **UTM Tracking:** Use GA4 UTM parameters (e.g., `utm_source=sms&utm_medium=text`) to track web conversions directly from the text message [14].
* **CRM Match-Back:** Integrate SMS platforms with ticketing systems (like Tessitura or Spektrix) to match hashed phone numbers and customer IDs against actual ticket purchases and door scans [15] [16].

## ROI & Cost Model: What Will It Cost and When Do We Break Even?

### Predictable unit economics make weekly SMS viable at scale
The cost of running an SMS program involves platform fees, carrier fees, and compliance registration costs. Unlike email, which has a near-zero marginal cost per send, SMS incurs per-message charges. However, the high conversion rates often justify the expense.

| Cost Component | Estimated Pricing | Notes |
| :--- | :--- | :--- |
| **Twilio Outbound SMS (10DLC)** | $0.0083 per segment | Base platform cost for US long codes [17]. |
| **Carrier Fees (AT&T, T-Mobile, Verizon)** | $0.0035 – $0.0045 per message | Passed through by the carrier [17]. |
| **Link Tracking / Engagement Suite** | $0.015 per message | First 1,000 free monthly [17]. |
| **A2P 10DLC Brand Registration** | $4.00 one-time fee | Required for US carrier compliance [18]. |
| **A2P 10DLC Campaign Fee (Charity)** | $3.00 per month | Special use case for verified 501(c)(3)s [18]. |
| **A2P 10DLC Campaign Fee (Standard)** | $10.00 per month | Standard commercial use case [18]. |

*Takeaway: The all-in cost to send a single SMS segment (including carrier fees) is approximately $0.012 to $0.013. For a list of 10,000 subscribers, a weekly digest costs roughly $120 to $130 per send, making it highly cost-effective if it drives even a handful of incremental ticket sales or donations.*

Nonprofits and government entities can qualify for "Special Use Cases" under the A2P 10DLC framework, which offer reduced monthly campaign fees and favorable throughput rates [19]. Government entities, for instance, receive unlimited daily message caps on T-Mobile and 75 messages per second on AT&T [19].

## Compliance & Governance: Reduce Risk, Protect List Health

### TCPA consent and state-level quiet hours are non-negotiable
Operating an SMS program requires strict adherence to federal and state regulations. The Telephone Consumer Protection Act (TCPA) mandates that organizations obtain "prior express written consent" before sending automated marketing or promotional text messages [20] [21]. This consent must be clear, documented, and include instructions on how to opt out (e.g., "Reply STOP to cancel") [20].

State laws add another layer of complexity. For example, Florida's Telemarketing Act restricts promotional texts to between 8:00 a.m. and 8:00 p.m. local time and limits messages on the same topic to three within a 24-hour period [22]. Arizona classifies unsolicited automated texts as a misdemeanor [22]. Furthermore, organizations must adhere to CTIA guidelines and carrier policies regarding SHAFT content (Sex, Hate, Alcohol, Firearms, and Tobacco), which can trigger aggressive carrier filtering if violated [20] [23].

## Municipal Pathways: Procurement, Timelines, and Requirements

### City deployments require 90-day lead times for procurement and security
For municipalities looking to launch a weekly arts digest, the primary hurdle is procurement and data governance. Municipal RFPs for SMS platforms typically require robust security measures, end-to-end encryption, role-based access, and integration with existing calendar systems (like Microsoft Outlook) [24]. 

A standard public sector RFP process takes an average of 57 days from posting to award, not including pre-planning. Once a vendor is selected, implementation, A2P 10DLC registration, and pilot testing generally require an additional 90 days [24]. Cities must also ensure that their Data Processing Agreements (DPAs) with SMS vendors strictly govern the handling of Personally Identifiable Information (PII) and comply with local public records retention laws [25].

## References

1. *How can a Museum Harness SMS Marketing to Boost Engagement and Revenue? - MuseumNext*. https://www.museumnext.com/article/how-can-a-museum-harness-sms-marketing-to-boost-engagement-and-revenue/
2. *How One Museum Made Over $158,000 with SMS Marketing – And What You Can Learn - MuseumNext*. https://www.museumnext.com/article/how-one-museum-made-over-158000-with-sms-marketing-and-what-you-can-learn/
3. *
	
		
		








  
Notify NYC · NYC311
*. https://on.nyc.gov/NOTIFYNYC
4. *Notify Me • Weekly City News Digest - Missoula, MT*. http://www.ci.missoula.mt.us/list.aspx?MID=2328
5. *Marketing benchmarks 2026: Americas edition*. https://dotdigital.com/blog/email-and-sms-marketing-benchmarks-americas-edition/
6. *Using text reminders to increase attendance and attainment: Evidence from a field experiment | BIT*. https://www.bi.team/publications/using-text-reminders-to-increase-attendance-and-attainment-evidence-from-a-field-experiment/
7. *Fetched web page*. https://www.bi.team/wp-content/uploads/2019/01/Texting-students-ALERT-working-paper-2017.pdf
8. *How San Francisco’s Museum of Modern Art Used Text Messages to Make Art Go Viral*. https://news.artnet.com/art-world/sfmoma-made-art-go-viral-1023440
9. *San Francisco's Museum of Modern Art replies to your texts with an artwork *. https://www.itsnicethat.com/news/send-me-san-francisco-museum-of-modern-art-sms-art-110717
10. *2026 SMS Marketing Benchmarks & Stats by Industry - Klaviyo*. https://www.klaviyo.com/products/sms-marketing/benchmarks
11. *
            How Effective Are Short Message Service Reminders at Increasing Clinic Attendance? A Meta-Analysis and Systematic Review - PMC
        *. https://pmc.ncbi.nlm.nih.gov/articles/PMC3419880/
12. *A Case Study in SMS Growth From Acquisition to Cultivation*. https://thedigitalco-op.com/case-studies-insights/journey-of-an-sms-donor/
13. *Unlocking Near-Perfect Attendance: The Power of SMS RSVPs in Nonprofit Events*. https://www.evant.app/blog/case-study-how-a-nonprofit-achieved-95-attendance-with-sms-rsvps
14. *UTM SMS: Monitoring in Google Analytics 4 | SMSAPI Blog*. https://www.smsapi.com/blog/utm-sms-google-analytics/
15. *Cultivate relationships with CRM tools built for arts & culture*. https://www.tessitura.com/features/crm-for-arts-and-culture
16. *Arts Marketing Software to Drive Smarter Campaigns*. https://www.spektrix.com/en-us/arts-marketing-software
17. *SMS Pricing in United States for Text Messaging | Twilio*. https://www.twilio.com/sms/pricing/us
18. *How to Register With 10DLC | 2026 Guide to 10DLC*. https://www.bandwidth.com/blog/how-to-register-with-10dlc-to-avoid-unnecessary-costs-in-2026/
19. *Nonprofit and Government Guide to A2P 10DLC Text ...*. https://help.twilio.com/articles/4405850570267-Nonprofit-and-Government-Guide-to-A2P-10DLC-Text-Messaging
20. *TCPA Compliance for SMS Marketing: How to Avoid Fines - TermsFeed*. https://www.termsfeed.com/blog/tcpa-compliance/
21. *Telephone Consumer Protection Act 47 USC § 227*. https://www.fcc.gov/sites/default/files/tcpa-rules.pdf
22. *Comprehensive Guide to Text Messaging Laws by State - SimpleTexting*. https://simpletexting.com/sms-compliance/text-messaging-laws-by-state/
23. *Messaging Principles and Best Practices May 2023*. https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf
24. *County of San Mateo Request for Proposals (RFP) for ...*. https://media.governmentnavigator.com/media/bid/1768343985_2026-01-12-Mass_Messaging_(SMS)_communication_system.pdf
25. *Data Security | Federal Trade Commission*. https://www.ftc.gov/business-guidance/privacy-security/data-security
