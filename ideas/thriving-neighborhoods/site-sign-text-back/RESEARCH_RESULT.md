# No-Proof Yet: SMS-on-Signs for Zoning Is Uncommon—Here's How to Pilot It Right

## Executive Summary
Extensive research across U.S. municipal procurement records, vendor case studies, and city planning portals reveals that **no U.S. city has deployed a "text [case number] to [number]" service on physical zoning or development signs at scale.** Instead, municipalities overwhelmingly favor QR codes and direct URLs due to their low cost and operational simplicity. For example, Durham, NC explicitly excludes SMS from its planning notifications "due to extra charges" [1], while cities like Raleigh and Portland mandate QR codes or URLs on their standard development signs [2] [3]. 

However, the technical feasibility to build this workflow is high. Leading civic platforms like Accela (via partners like GovPath/GQ Text) and Granicus (via govDelivery/TMS) possess robust SMS capabilities, including two-way messaging and API integrations [4] [5] [6]. The scarcity of sign-driven SMS is driven by strict Telephone Consumer Protection Act (TCPA) compliance requirements, public records retention laws, and the high costs and vetting timelines associated with 10DLC and short code provisioning [7] [8] [9] [10]. Because no direct adoption rates exist for zoning SMS signs, municipalities must look to analogous place-based SMS programs (like transit and 311) to benchmark potential engagement. If your city pursues this, it should be framed as a structured, dual-channel (QR + SMS) pilot rather than the adoption of an established municipal standard.

## What We Found: No Proof of SMS-on-Signs for Zoning, But Strong Feasibility via Platforms

There are no public, citable U.S. implementations of "text a case number" printed on zoning or development signs. Cities standardize on QR codes and URLs, but the underlying permitting platforms are fully capable of supporting custom SMS integrations.

### Evidence scan across cities shows QR/URL dominance, not SMS
A nationwide sweep of municipal sign templates and planning department guidelines yielded zero verifiable examples of SMS case-lookup on physical signs. 
* **Raleigh, NC**: Public Notice Signs explicitly instruct residents to use a QR code that links to a "Current Development Activity" hub [3].
* **Portland, OR**: Neighborhood Contact sign templates provide standard layouts that rely on URLs and project websites rather than SMS short codes [2].
* **Durham, NC**: The city's Planning & Development Public Notification Service explicitly states that "text messages (SMS) are not available for this subscription due to extra charges" [1].

### Platform readiness is high, but not productized for sign-to-case
While out-of-the-box "text-case-on-sign" modules do not exist, major vendors support the necessary infrastructure:
* **Granicus (Legistar/govDelivery)**: Granicus supports two-way text messaging, allowing interactive experiences for gathering feedback and assessing program qualifications [5]. The platform's Targeted Messaging System (TMS) offers a JSON API to send messages and configure webhooks for inbound SMS [11]. In 2023, federal agencies sent nearly 148 million SMS messages using Granicus [5].
* **Accela**: Accela supports SMS via an SMS adapter web service linked to its Communication Manager [12]. Furthermore, Accela partners like GovPath (GQ Text) offer native integrations with the Accela Civic Platform and Construct API to automate text messaging for inspections and outreach [4] [6].

## Why It's Rare: Cost, Compliance, and Operations vs. QR Simplicity

The absence of SMS on zoning signs is a direct result of the friction involved in 10DLC/short code procurement, TCPA consent requirements, and carrier vetting. QR codes impose none of these burdens and have become the industry standard.

### SMS vs. QR/URL total cost and compliance effort

| Dimension | SMS (10DLC/Short code) | QR/URL on sign |
|---|---|---|
| **Setup time** | 10–15+ days for 10DLC brand/campaign vetting; short codes take longer [10] | Same-day |
| **Fixed costs** | Short code lease ~$1,000–$1,500/mo; 10DLC campaign fees ~$10/mo plus vetting fees ($12.50–$101.50) [9] [13] | Near-zero |
| **Variable costs** | ~$0.0083 per message + carrier surcharges (e.g., AT&T $0.0035) [9] | Near-zero |
| **Compliance** | TCPA disclosures, opt-in/out, HELP/STOP handling, PRA retention [14] [7] [8] | None beyond standard web privacy |
| **Accessibility** | Excellent for non-smartphone users | Requires a smartphone and data connection |
| **Risk** | Carrier filtering, consent disputes, mistyped case IDs | Low |

*Takeaway*: SMS introduces recurring monthly costs, per-message fees, and significant regulatory overhead, whereas QR codes provide a free, low-friction path to rich web content.

### Consent and public records risks to design around
Implementing SMS on a physical sign requires careful legal design. The Telephone Consumer Protection Act (TCPA) mandates clear disclosures before sending automated messages, including stating that "Message and data rates may apply," providing message frequency, and offering clear STOP/HELP instructions [14] [7]. A simple "Text CASE to 55555" on a sign can be legally risky if the resulting messages are deemed promotional without proper prior express written consent [7]. Additionally, under the Public Records Act (PRA), text messages sent or received in an official capacity are considered public records and must be retained according to state schedules (e.g., Washington State's *Nissen v. Pierce County* ruling) [8].

## What We Can Leverage: Analogous Place-Based SMS Programs

While zoning departments haven't adopted this, transit agencies and 311 services have successfully deployed place-based SMS for years. These programs prove that residents will text a location-specific ID to receive information.

### Five analogs with design patterns and platform clues

| Use case | City/Agency | Signage instruction & code | Notes/metrics |
|---|---|---|---|
| **Real-time bus arrivals** | DART (Dallas) | Text "DART [StopID]" to 41411 [15] | Uses route filter syntax; continues in active production [15]. |
| **Real-time bus arrivals** | TriMet (Portland) | Text Stop ID to 27299 [16] | Validates ID and returns arrivals for buses and trains [16]. |
| **Real-time bus arrivals** | King County Metro (Seattle) | Text Stop ID to 62550 [17] | Includes "Text HELP to 62550" for basic instructions [17]. |
| **311 services** | Chicago ChiTEXT | Text "CHICAGO" to 311311 [18] | Menu-driven info, service requests, and city alerts [18]. |
| **Local emergency alerts** | NYC NotifyNYC | Text NOTIFYNYC to 692-692 [19] | Geo-based SMS enrollment via texting ZIP codes; provided by Nixle [19]. |

*Takeaway*: Successful programs rely on short, numeric IDs, clear keyword prefixes, and robust error handling (e.g., HELP/STOP commands).

### Transferable patterns for zoning/development
To adapt these patterns for zoning signs, municipalities should:
* Use short, numeric case IDs or site IDs to minimize typing errors.
* Implement strong error handling for invalid IDs.
* Offer a one-tap link to the authoritative Accela/Legistar record within the SMS reply.
* Provide an option to "subscribe" to future meeting updates for that specific case.

## Adoption Reality: No sign-driven zoning SMS metrics—use proxies and measure

Because no direct adoption rates exist for sign-to-case SMS workflows, cities must establish KPI baselines prior to launch and use transit/311 SMS engagement as viability proxies. 

### KPI and benchmark design

| Metric | Definition | Target/pilot heuristic |
|---|---|---|
| **Reach per sign/day** | Unique inbound texts per sign | 1–5/day on active corridors; 0.1–1/day in low-density areas |
| **Valid ID rate** | % of inbound messages that successfully match a case | >85% (requires clear typography on the sign) |
| **Click-through rate** | % of SMS replies where the user clicks the provided link | 50–70% for highly contextual informational SMS |
| **STOP rate** | Opt-outs per 100 messages | <2% per campaign |
| **Staff deflection** | Reduction in calls/emails regarding the specific case | 10–30% reduction vs. historical baseline |

*Takeaway*: Instrumenting the pilot with UTM-tagged links and SMS gateway analytics is critical to proving ROI, as you cannot rely on external benchmarks for this specific use case.

## Implementation Playbook: 90-Day Dual-Channel Pilot

To mitigate risk, cities should launch a 90-day pilot on 10 to 20 active development sites using a dual-channel approach: QR codes as the primary call-to-action, with SMS as an accessibility fallback.

### Scope and architecture
Provision a single 10DLC number to keep costs low. Use a keyword format like "Text CASE [ID]" (e.g., "CASE 1234"). Route the inbound SMS via webhook to a middleware application that queries the Accela Construct API or Granicus TMS, retrieves the hearing date and project URL, and returns a templated SMS reply.

### Consent and signage copy
To satisfy TCPA requirements, the physical sign must include a compliant disclosure block [14] [7]. 
*Example*: "Text CASE 1234 to (555) 123-4567 for project details. Msg & data rates may apply. Reply STOP to cancel, HELP for help. Message frequency varies. Terms: city.gov/terms."

### Templates and languages
Ensure the system can handle multilingual requests. If a user texts in Spanish (e.g., "CASO 1234"), the system should return the templated reply in Spanish, including dynamic fields for the address, hearing date, and a link to the translated record.

### Error handling & edge cases
The SMS logic must account for edge cases: missing IDs, mistyped IDs, cases that have been canceled, or cases with no scheduled hearing. If an ID is invalid, the system should return a polite error message with a link to the city's main zoning map or a phone number for the call center.

### Measurement & governance
Append UTM parameters to all URLs sent via SMS to track click-through rates in web analytics. Ensure all inbound and outbound text messages are exported to the city's public records archive to comply with PRA retention schedules [8].

## Integration Options & Procurement

Cities should leverage their existing system-of-record (Accela or Granicus) and add SMS via established partners to reduce time-to-pilot.

### Options for SMS Integration

| Path | Pros | Cons | Estimated Time |
|---|---|---|---|
| **Accela + GovPath (GQ Text)** | Native integration with Accela Communication Manager and Construct API [4] [6]. | Requires Accela admin resources and a partner SOW. | 4–8 weeks |
| **Granicus TMS** | Mature SMS infrastructure; built-in TMS APIs/webhooks; handles consent and STOP/HELP natively [11] [14]. | Requires building a lookup app to connect TMS to the permitting database. | 4–8 weeks |
| **Direct Twilio/Bandwidth** | Full control over the workflow; lowest per-message unit costs [9]. | City must build and maintain consent logic, 10DLC registration, and PRA archiving from scratch. | 6–10 weeks |

*Takeaway*: Utilizing GovPath for Accela or TMS for Granicus significantly reduces the engineering burden of handling TCPA compliance and carrier routing.

## Cost Model & Risk Controls

A 90-day pilot will likely cost between $5,000 and $15,000 (excluding internal staff time), driven primarily by integration labor and carrier fees.

### Pilot cost elements
* **10DLC Registration**: ~$10/month per campaign, plus one-time vetting fees ranging from $12.50 to $101.50 [13].
* **Number Lease**: $1.15/month for a long code [9]. (Avoid short codes for the pilot, as they cost $1,000+ per month [9]).
* **Messaging Costs**: ~$0.0083 per message plus carrier surcharges (e.g., AT&T charges $0.0035 per outbound SMS) [9].
* **Labor & Materials**: 80–160 hours of integration/scripting labor, plus the cost of printing updated physical signs.

### Legal/records checklist
Before launching, legal counsel must approve the TCPA opt-in language printed on the signs [7]. IT must verify that the SMS gateway automatically processes STOP/HELP commands [14] and that all message logs are ingested into the city's public records retention system [8].

## Decision Framework & Go/No-Go Gates

Do not launch the pilot until all compliance and technical gates are cleared.

### Go/No-Go criteria
* Legal has approved the physical signage copy for TCPA compliance.
* The records retention pipeline is active and tested.
* The API successfully retrieves case data from Accela/Legistar.
* 10DLC campaign registration is fully approved by The Campaign Registry (TCR) [20].

### Success thresholds
To justify expanding the program beyond the 90-day pilot, the service should achieve:
* $\ge$ 50% click-through rate on SMS links.
* $\ge$ 10% reduction in call center inquiries for the piloted cases.
* $\le$ 2% STOP/opt-out rate.

## Next Steps: 8-12 Weeks to Pilot

A tightly scoped, dual-channel pilot can validate the value of SMS accessibility without locking the city into high-cost short codes.

* **Weeks 1-2**: Select the integration path (e.g., Accela + GovPath), draft the physical signage copy, and submit to legal for TCPA review.
* **Weeks 2-4**: Submit 10DLC brand and campaign registration (expect 10-15 days for approval) [10]. Build the API lookup microservice and configure PRA retention exports.
* **Weeks 4-6**: Print and install the updated signs on 10 to 20 active development sites. Implement UTM tagging and train call center staff on the new workflow.
* **Weeks 6-12**: Run the pilot. Review KPIs weekly, A/B test the call-to-action language on the signs, and capture deflection metrics to determine if a city-wide rollout is justified.

## References

1. *Planning & Development Public Notification Service  | Durham, NC*. https://www.durhamnc.gov/411/Planning-Public-Notification-Service
2. *Neighborhood Contact Development Notice Sign Templates - Print Signs to Post at Development Sites | Portland.gov*. https://www.portland.gov/bds/neighborhood-contact/neighborhood-contact-signs
3. *Public Notice Signs | Raleighnc.gov*. https://raleighnc.gov/planning/services/public-notice-signs
4. *Resources | GovPath*. https://www.govpath.tech/resources
5. *Granicus sets sights on product updates, public sector innovation | Granicus*. https://granicus.com/press_release/granicus-sets-sights-on-product-updates-public-sector-innovation/
6. *Government Technology Partnership - GovPath - Accela*. https://www.accela.com/blog/government-technology-partnership/
7. *TCPA text messages: Rules and regulations guide for 2026 - ActiveProspect*. https://activeprospect.com/blog/tcpa-text-messages/
8. *MRSC - Text Messaging Policies*. https://mrsc.org/explore-topics/public-records/electronic-records/text-messaging
9. *SMS Pricing in United States for Text Messaging | Twilio*. https://www.twilio.com/sms/pricing
10. *A2P 10DLC registration application quickstart | Twilio*. https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/quickstart
11. *TMS API Documentation Overview | Granicus Support*. https://support.granicus.com/customersupport/s/article/TMS-Overview-API
12. *SMS Adapter*. https://aa.eplace.eea.mass.gov/docs/InstallationGuide/1-configuringSmsAdapter.html
13. *10DLC Fees | Bandwidth Help Center*. https://www.bandwidth.com/support/en/articles/12823086-10dlc-fees
14. *SMS Best Practices | Granicus Support*. https://support.granicus.com/s/article/SMS-Best-Practices
15. *41411 SMS Service - Dallas*. https://www.dart.org/trip/trip-planner/dart-41411-sms-service
16. *TransitTracker by Text Message*. https://trimet.org/tools/transittracker-bytext.htm
17. *Text for departures - King County, Washington*. https://kingcounty.gov/en/dept/metro/rider-tools/mobile-and-web-apps/text-for-departures
18. *
    City of Chicago :: ChiTEXT Overview
*. https://www.chicago.gov/city/en/depts/311/supp_info/chitext.html
19. *
	
		
		








  
Notify NYC · NYC311
*. https://on.nyc.gov/NOTIFYNYC
20. *Ten-Digit Long Code (10DLC) Registration Guidelines - An Azure Communication Services article | Microsoft Learn*. https://learn.microsoft.com/en-us/azure/communication-services/concepts/sms/ten-digit-long-code-guidelines
