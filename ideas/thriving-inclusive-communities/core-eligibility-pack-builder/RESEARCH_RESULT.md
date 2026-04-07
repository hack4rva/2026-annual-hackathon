# Why “No-Server” Intake Hasn’t Landed in U.S. Social Services—and How to Build a Privacy-First Hybrid That Works

## Executive Summary

Despite the technical feasibility of generating complex documents entirely within a user's browser, **there are no verified production examples of pure client-side, cross-program intake tools in U.S. social services.** Public scanning of government, nonprofit, and civic tech sources reveals zero documented deployments that process all sensitive data exclusively in-browser for multi-agency intake while generating printable PDFs without server storage. 

Instead, mainstream intake and document assembly rely heavily on server-hosted platforms like Docassemble [1] and LawHelp Interactive [2], or integrated portals like BenefitsCal and GetCalFresh [3]. This reliance is not due to a lack of engineering capability, but rather strict operational, compliance, and integration mandates. Server-hosted portals achieve massive scale because they solve for end-to-end operations—routing, identity verification, and assister support—which are critical for high conversion rates. For instance, CBO-assisted submissions on BenefitsCal reach a 95.6% completion rate within 7 days, compared to just 60.6% for self-service customers [4] [5].

Compliance and records retention act as the ultimate gating factors. HIPAA guidance explicitly treats client-side tracking and PHI disclosures to third parties as subject to Business Associate Agreements (BAAs) [6] [7]. Furthermore, state public records laws and FOIA practices expect agencies to retrieve and retain records [8]. A strict "we store nothing" approach directly collides with these legal duties. 

While local-only PDF creation is highly feasible using mature libraries like jsPDF, pdf-lib, and pdfmake [9] [10], maintaining multi-program eligibility logic without a server is brittle. It requires shipping eligibility logic as signed, semantically versioned bundles delivered via CDN with Subresource Integrity (SRI) [11]. Furthermore, generating tagged, accessible PDFs client-side to meet upcoming WCAG 2.1 AA mandates is notoriously difficult [12] [13]. 

To achieve the privacy benefits of a no-server architecture while meeting government operational realities, agencies must adopt **hybrid privacy patterns**. These include client-side preparation paired with consented, ephemeral uploads (auto-deleting upon ingest), client-side encryption using WebCrypto [14] [15], or counselor-assisted kiosk modes [16]. 

## 1) Reality Check: No documented US deployments meet “client-side, no-server, cross-program intake” in production

Public evidence points to zero production-grade, multi-agency, client-only intake tools. While the civic tech community frequently experiments with privacy-first architectures, operations and compliance needs keep enterprise solutions server-hosted.

### Evidence scan summary with inclusions/exclusions
Extensive searches across Code for America repositories, state digital services, and legal aid networks yielded no tools that meet all criteria: all sensitive inputs processed in-browser, multi-program support, printable PDF generation, and zero server transmission. Popular document assembly tools like Docassemble and LawHelp Interactive explicitly rely on server-side processing to generate documents, save progress, and route data [2] [1]. While consumer-grade "privacy-first" PDF utilities exist (e.g., tools built on WebAssembly and pdf-lib that process files locally [17] [18]), these have not been adopted by government agencies for official benefits intake.

### Implications for your roadmap
If your agency pursues a pure "no-server" intake tool, expect to pioneer the space. You must plan a significant legal and compliance runway, establish robust client-side governance for rule updates, and maintain transparent documentation to satisfy auditors who expect traditional server logs.

## 2) What Works at Scale Today: Server portals’ adoption and conversion drivers

Server-hosted portals dominate the landscape because they integrate directly with backend eligibility systems and support assisted workflows, which are proven to drive completion rates.

### BenefitsCal hard metrics (Apr–Jun 2025; Q1 2024)
BenefitsCal demonstrates the massive scale of server-hosted portals. Between April and June 2025, BenefitsCal accounted for 64–68% of all CalFresh applications, 74–78% of CalWORKs, 39–53% of Medi-Cal, and 38–41% of GA/GR applications [4] [5]. The platform averages 133,731 daily logins, with 71% of usage occurring on mobile devices and a 99.9% login success rate [5]. Crucially, applications assisted by Community Based Organizations (CBOs) see a 95.6% submission rate within 7 days, whereas unassisted self-service customers submit only 60.6% of the time [4] [5].

### GetCalFresh impact snapshot
Code for America's GetCalFresh initiative connected over 6.2 million people to SNAP, delivering $12.8 billion in benefits [3]. In 2024 alone, digital advertising brought 1.2 million applicants to the platform, which boasts an average application time of just 12 minutes [3]. 

### Why they convert
These platforms convert because they offer integrated document upload, secure messaging, and direct submission routing. A pure client-side tool must compensate for the lack of these integrations—or risk high abandonment rates.

## 3) Why Pure Client-Side Is Rare: Legal, records, and audit realities

The scarcity of no-server government tools is driven by legal liability, public records laws, and strict privacy regulations.

### HIPAA/OCR tracking guidance and BAAs
The HHS Office for Civil Rights (OCR) has issued strict guidance regarding online tracking technologies. If a healthcare or benefits website collects individually identifiable health information (even on unauthenticated pages, like an appointment scheduler or symptom checker), it is considered PHI [6] [7]. Any third-party vendor receiving this data—including analytics providers or CDN hosts—must sign a Business Associate Agreement (BAA) [6]. A "no-server" app that inadvertently leaks data via third-party scripts violates HIPAA.

### Public records/retention obligations
State laws, such as the California Public Records Act (CPRA), define public records broadly as any writing "prepared, owned, used, or retained by any state or local agency" [8]. Agencies have a legal duty to retain records of official transactions and provide audit trails. A system that stores absolutely nothing makes it impossible to comply with FOIA requests or audit evidentiary needs.

### Practical outcome
System design must reconcile data minimization with lawful retention. Agencies cannot simply refuse to store data; they must design intentional, minimal-retention architectures (e.g., retaining only durable receipts without PHI).

## 4) Technical Feasibility: Client-side PDF and offline UX are straightforward

Generating PDFs entirely within the browser is technically mature, but the challenge lies in layout complexity and accessibility, not the rendering itself.

### Tooling landscape
A robust ecosystem of JavaScript libraries enables client-side PDF generation:
* **jsPDF:** A lightweight, imperative API best for simple, coordinate-based drawing [9] [10].
* **pdf-lib:** Excellent for modifying existing PDFs, filling forms, and embedding custom fonts using `Uint8Array` and `ArrayBuffer` [19] [20] [9].
* **pdfmake:** Uses a declarative JSON structure, making it ideal for complex, data-driven layouts like tables and reports [9] [10].
* **WebAssembly (Wasm):** Wasm ports of PDF engines allow for high-performance generation of massive documents without blocking the main browser thread [21].

### Limitations to plan for
Client-side libraries struggle with advanced CSS (Flexbox/Grid), requiring developers to manually calculate layouts [22]. Furthermore, generating fully tagged, WCAG-compliant PDFs for screen readers is exceptionally difficult using purely client-side JavaScript libraries.

## 5) Side-by-Side: Three architectures and when to use each

To balance privacy with operational reality, agencies must choose between pure client-side, hybrid, and server-hosted models.

| Architecture Model | Privacy Posture | Ops & Integrations | Compliance & Audit | Conversion Risk | Primary Fit |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Pure client-side (no-server)** | Maximum on-device privacy; zero server transmission. | No routing; user must print/download and self-submit. | Weak by default; difficult to fulfill FOIA or audit requests. | Highest (lacks assister support and verification). | Narrow pilots, offline checklists, single-program prep. |
| **Hybrid client-side + ephemeral relay** | Data created locally; consented one-time upload with immediate deletion. | Minimal submission routing; durable receipt-only logs retained. | Balanced: minimizes PHI exposure while retaining lawful evidence. | Medium (adds handoff friction but supports assisters). | Cross-program prep + submission with high privacy. |
| **Server-hosted portal** | Data centralized on government/vendor servers. | Full routing, identity verifications, and secure messaging. | Strong logs and retention; BAAs required for all vendors. | Lowest (seamless workflow with assister channels). | State/county portals at scale (e.g., BenefitsCal). |

*Key Takeaway:* A hybrid model offers the best compromise, providing strict data minimization while still allowing the agency to route applications and maintain audit receipts.

## 6) Build the Privacy-First Hybrid: Patterns you can ship this year

If a server-hosted portal is too invasive, agencies can deploy hybrid patterns that approximate no-server privacy.

### Pattern A: Client prep + presigned, one-time upload (auto-delete on ingest)
The client compiles the intake packet locally. When ready, the browser requests a short-lived, presigned URL (e.g., AWS S3) [23] [24]. The file is uploaded directly to the bucket, processed by a backend function, and immediately deleted, leaving only a hashed receipt for audit purposes.

### Pattern B: Client-side encryption with user-held keys
Using the Web Crypto API, data is encrypted locally using AES-256 before being saved to IndexedDB [14] [15]. The encryption key is derived from a user password and marked as `non-extractable` [25]. The server only ever sees encrypted blobs, ensuring zero-knowledge storage.

### Pattern C: BYO storage + QR/shortlink handoff tokens
The application generates the PDF and saves it to the user's own device or personal cloud. To hand off to a caseworker, the app generates a QR code containing only a secure session token, not the PHI itself.

### Pattern D: Counselor-assisted kiosk mode
Kiosks are locked down to prevent persistent storage. Sessions are ephemeral, memory is scrubbed upon timeout, and the workflow relies on print-and-scan fallbacks [16].

**Security hardening:** Regardless of the pattern, the application must enforce a strict Content Security Policy (CSP) blocking `unsafe-inline` and `unsafe-eval` [26], use Subresource Integrity (SRI) for all scripts [11], and completely eliminate third-party analytics trackers to prevent accidental PHI leakage [6].

## 7) Rules, Templates, and QA: Treat eligibility as versioned, signed code

In a no-server architecture, eligibility logic lives on the edge. This requires rigorous governance to ensure users aren't applying using outdated rules.

### Representation
Eligibility rules should be abstracted from the UI using formats like Decision Model and Notation (DMN) [27] or JSON-based rule engines (e.g., `json-rules-engine`) [28]. OpenFisca provides a strong model for writing tax and benefit rules as code [29].

### Distribution & integrity
Rule bundles must be distributed via CDN and protected by Subresource Integrity (SRI) hashes to prevent tampering [11]. Updates should follow semantic versioning, with a public CHANGELOG detailing effective dates and retroactivity [30].

### QA
Because logic executes on the client, QA must include scenario fixtures, automated eligibility tests, and PDF snapshot visual diffs to ensure cross-browser rendering fidelity.

## 8) Accessibility & Language: Design for WCAG 2.1 AA, PDFs last

By 2026, state and local web content must meet WCAG 2.1 AA standards [13]. PDFs are a massive liability here; 71% of federal PDFs have accessibility issues [13].

### Practices
The primary intake flow must be built in accessible HTML, featuring proper keyboard navigation, focus states, and screen reader support [12]. Automated testing using tools like axe-core should be integrated into the CI/CD pipeline [31].

### PDF accessibility
Generating tagged, accessible PDFs client-side is highly complex. Therefore, the PDF should be treated strictly as a convenience output for printing, while the HTML interface serves as the primary, compliant interaction layer.

## 9) Measurement Without PHI: How to learn and improve safely

Without server-side analytics, agencies must adopt privacy-safe telemetry to measure adoption.

### Options
Replace invasive trackers with synthetic task testing, structured usability studies, and feedback loops from CBO assisters. 

### Targets to track
Telemetry should be limited to anonymous version pings, start-to-finish timing on key steps, and drop-off rates at known friction points (e.g., document capture), ensuring no PII or PHI is ever transmitted.

## 10) Legal & Records Playbook: Make counsel a co-designer

Do not write code until the legal and records retention model is approved.

### Decisions to lock down
Define exactly what constitutes an "agency record." If using an ephemeral relay, agree on the format of the durable receipt (e.g., timestamp, transaction ID, non-PII metadata) and the exact destruction schedule for the uploaded PHI.

### BAAs and vendors
Ensure that any vendor touching the infrastructure—even just hosting the static assets or providing the CDN—is evaluated for Business Associate status under HIPAA [32] [6].

## 11) Pilot Roadmap: 120-day plan from concept to live

To de-risk the project, start with a narrow, highly controlled pilot.

### Phases
* **0–30 days:** Co-design the architecture with policy and compliance teams. Select 2–3 specific benefit programs. Define the records retention and success metrics.
* **31–75 days:** Build the offline-first Progressive Web App (PWA). Finalize the v0 rules bundle. Establish the accessibility baseline and build the counselor-assisted kiosk flow.
* **76–120 days:** Conduct usability sessions in multiple languages. Execute a final privacy and security review. Soft launch with 2 trusted CBOs, measure anonymous telemetry, and iterate.

## 12) Follow-Up Research: Where to dig for pilots and precedents

Because pure client-side tools are rarely publicized at the enterprise level, further research requires direct outreach.

### Targets
Contact city digital teams (e.g., NYC, SF, Seattle), state HHS departments, Code for America brigades, and legal aid networks. 

### Methods
Conduct deep scans of GitHub organizations, review recent vendor RFPs for "offline" or "no-server" requirements, and submit public records requests to uncover undocumented pilot projects.

## References

1. *Docassemble*. https://docassemble.org/
2. *Online Triage and Intake*. https://www.lsntap.org/sites/default/files/2025-02/tig_toolkit_iw_onlinetriageandintakejun2018.pdf
3. *Food benefits*. https://codeforamerica.org/programs/social-safety-net/food-benefits/
4. *BenefitsCal Usage Metrics Report (April – June 2025)*. https://www.calsaws.org/wp-content/uploads/2025/08/BenefitsCal-Usage-Metrics-Report-April-June-2025.pdf
5. *BenefitsCal-Usage-Metrics-Initial-Report-2024. ...*. https://www.calsaws.org/wp-content/uploads/2025/01/BenefitsCal-Usage-Metrics-Initial-Report-2024.pdf
6. *Use of Online Tracking Technologies by HIPAA Covered Entities and Business Associates | HHS.gov*. https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html
7. *HHS HIPAA Guidelines Target Tracking on Public Web Pages*. https://www.feroot.com/blog/hhs-hipaa-guidelines-target-tracking/
8. *California Public Records Act FAQs - POST*. https://post.ca.gov/California-Public-Records-Act-FAQs
9. *Comparing open source PDF libraries (2025 edition) | Joyfill*. https://medium.com/joyfill/comparing-open-source-pdf-libraries-2025-edition-7e7d3b89e7b1
10. *How to generate PDFs in the browser with Javascript (no ...*. https://joyfill.io/blog/how-to-generate-pdfs-in-the-browser-with-javascript-no-server-needed
11. *Subresource Integrity - Security | MDN*. https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
12. *Web Content Accessibility Guidelines (WCAG) 2.1*. https://www.w3.org/TR/WCAG21/
13. *How We Built Our AI Application to Handle PDFs — Code for America*. https://codeforamerica.org/news/how-we-built-our-ai-prototype-to-handle-pdfs/
14. *Zero-Knowledge AES-256 Encryption: Securing Your Business with Web Crypto API and IndexedDB - Zerocrat*. https://zerocrat.com/advanced-encryption-zero-knowledge-aes-256-encryption-for-unrivaled-data-protection/
15. *Web Crypto API - Web APIs | MDN*. https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API
16. *Best Practices for Implementing Check-In Kiosks ...*. https://www.ailatech.com/blog/best-practices-for-implementing-check-in-kiosks-in-hospitals-and-clinics/
17. *Building a Privacy-First PDF Toolkit That Runs Entirely in Your Browser - DEV Community*. https://dev.to/xinping_cheng_1a9ed488fcf/building-a-privacy-first-pdf-toolkit-that-runs-entirely-in-your-browser-41f2
18. *Built a privacy-first browser-based PDF + utility toolkit — no ...*. https://www.reddit.com/r/SideProject/comments/1rjlec8/built_a_privacyfirst_browserbased_pdf_utility/
19. *GitHub - Hopding/pdf-lib: Create and modify PDF documents in any JavaScript environment · GitHub*. https://github.com/hopding/pdf-lib
20. *A full comparison of 6 JS libraries for generating PDFs - DEV Community*. https://dev.to/handdot/generate-a-pdf-in-js-summary-and-comparison-of-libraries-3k0p
21. *How we improved our client-side PDF generation by 5x - DEV Community*. https://dev.to/karanjanthe/how-we-improved-our-client-side-pdf-generation-by-5x-3n69
22. *Creating PDFs from HTML + CSS in JavaScript*. https://joyfill.io/blog/creating-pdfs-from-html-css-in-javascript-what-actually-works
23. *Uploading objects with presigned URLs - Amazon Simple Storage Service*. https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html
24. *php - Amazon S3 presigned url - Invalidate manually or one time upload - Stack Overflow*. https://stackoverflow.com/questions/36783108/amazon-s3-presigned-url-invalidate-manually-or-one-time-upload
25. *How do you make End-to-End encryption as seamless ...*. https://www.reddit.com/r/webdev/comments/1qupl6m/how_do_you_make_endtoend_encryption_as_seamless/
26. *Content Security Policy (CSP) - HTTP - MDN Web Docs*. https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP
27. *Fetched web page*. https://www.omg.org/spec/DMN/1.3/PDF
28. *GitHub - CacheControl/json-rules-engine: A rules engine expressed in JSON · GitHub*. https://github.com/CacheControl/json-rules-engine
29. *Write rules as code*. https://openfisca.org/
30. *GitHub - openfisca/openfisca-france: French tax and benefit system for OpenFisca · GitHub*. https://github.com/openfisca/openfisca-france
31. *Axe DevTools | Automate accessibility testing*. https://www.deque.com/axe/devtools/
32. *Business Associates | HHS.gov*. https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html
