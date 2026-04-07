# Project Analysis Overview

The civic tech project 'core-eligibility-pack-builder' is designed to address the problem of cross-agency service navigation in Richmond, VA, aligning with the city's 'Thriving Inclusive Communities' pillar. It aims to help residents who need to access services from multiple agencies—such as the Department of Social Services (DSS), Virginia Career Works, and the Richmond Redevelopment and Housing Authority (RRHA)—by creating a single, standardized 'Core Eligibility Pack'. This pack, generated through a multilingual form available in English, Spanish, and Arabic, would contain essential documents and information. The project is designed to be client-controlled, with no server-side data storage, and shareable via a PDF or QR code, thus streamlining the application process and reducing the need for residents to repeatedly tell their story and submit the same information to different entities.

# Jobs To Be Done Analysis

## Job Type

Functional

## Situation

When I’m applying to multiple programs in Richmond (DSS benefits via CommonHelp, Virginia Career Works/WIOA, and RRHA housing)

## Persona

I as a resident

## Motivation

want to assemble one standardized Core Eligibility Pack with my IDs, income, household, and status info

## Outcome

so I can submit once and reuse it across agencies without retyping or re-uploading.

## Current Workaround

Repeat applications on separate portals (CommonHelp, VaWC/WIOA, RRHA portals) and bring paper folders or photos of documents to each appointment.

## Core Pain

Repetitive data entry, missing docs, inconsistent requirements, and stalled applications when verification is delayed.


# Data Questions

## Question

What minimal data set and document list satisfy all three: DSS verification, WIOA eligibility documentation, and RRHA eligibility packet, without collecting extra sensitive data? Which fields are strictly optional (e.g., SSN under WIOA)?

## Rationale

This is fundamental to creating a single, standardized pack. To be effective, the pack must meet the non-negotiable requirements of all three agencies (DSS, WIOA, RRHA) while respecting user privacy by not over-collecting data. Understanding which fields are optional, like the SSN for WIOA eligibility, is crucial for empowering users and ensuring compliance.

## Focus Area

Standardization

## Question

What is the precise consent model for client-controlled sharing via QR: granular (field-level) vs bundle-level consent, expiration windows, and revocation in an offline/no-server architecture?

## Rationale

The project's core value proposition is a 'client-controlled' system with 'no server storage'. This question addresses the technical and ethical backbone of that promise. Defining how a user grants, limits, and revokes consent in an offline model is critical for building trust and ensuring data privacy.

## Focus Area

Security

## Question

How will identity verification be handled on-device (e.g., liveness, barcode scan) without server storage, while still being acceptable to DSS/WIOA/RRHA reviewers?

## Rationale

Agencies have stringent identity verification requirements, often relying on systems like IEVS. For a serverless, on-device solution to be viable, it must incorporate a method of identity verification that these agencies will trust and accept for their official processes and audits.

## Focus Area

Verification

## Question

How will the pack note data provenance (e.g., 'pay stub uploaded on [date], verified by [agency]' vs self-attested) to reduce rework and meet audit needs?

## Rationale

For caseworkers and auditors to trust the information in the pack, they need to know its origin and verification status. Clearly marking data as self-attested versus officially verified by another agency is key to reducing redundant verification work and ensuring the pack meets compliance standards.

## Focus Area

Verification

## Question

For DSS: what acceptance pathways exist for pack PDFs to accompany or pre-stage CommonHelp submissions or be received by local RDSS workers (fax, upload link, kiosk intake)?

## Rationale

A digital pack is only useful if it can be submitted and processed. This question investigates the practical integration points within DSS's current workflows, whether digital (via CommonHelp) or physical (at a kiosk), to ensure the output is compatible and doesn't create a new barrier.

## Focus Area

Integration

## Question

For Virginia Career Works Capital Region: which WIOA documents can be accepted as self-attested vs must be third-party verified, and can the pack’s structure map to VaWC document categories for faster intake?

## Rationale

To accelerate WIOA intake, the pack's data structure and verification levels must align with Virginia Career Works' specific rules. Understanding the distinction between self-attested and third-party verified documents is essential for designing a tool that streamlines, rather than complicates, the process for navigators.

## Focus Area

Verification

## Question

For RRHA: can the pack fulfill the 'eligibility packet' requirements and verifications checklist; are there specific forms that must remain RRHA originals (e.g., HUD forms) vs attachable proofs?

## Rationale

RRHA has a formal 'eligibility packet' and checklist. This question seeks to determine if the project's output can fully or partially satisfy these requirements, and critically, if it can only supplement official forms (like HUD forms) rather than replace them, which dictates the pack's ultimate utility for housing applications.

## Focus Area

Standardization

## Question

How will closed-loop referrals be coordinated alongside Unite Virginia (Unite Us) and 211 Virginia so that pack handoffs reduce 'referral voids' without duplicating platforms?

## Rationale

The project must exist within Richmond's current service ecosystem, which includes established referral networks like Unite Virginia. This question addresses the need for interoperability to ensure the Core Eligibility Pack enhances existing workflows and prevents the creation of another confusing, duplicative system for residents and providers.

## Focus Area

Integration

## Question

Which document and evidence standards (e.g., I-9 acceptable documents list; DSS IEVS; WIOA Attachment C telephone verification form) can the pack reference to pre-label uploads and reduce rejections?

## Rationale

By aligning with established, trusted standards that caseworkers are already familiar with (like the I-9 list), the pack can increase its credibility and the acceptance rate of the documents it contains. This pre-labeling can significantly reduce rejections and rework for both residents and agency staff.

## Focus Area

Standardization

## Question

What lessons from statewide coordinated referral networks (Unite Us in Virginia) and state benefit portals (CommonHelp) should shape the pack’s data model and consent patterns to avoid parallel, conflicting workflows?

## Rationale

Large-scale systems like CommonHelp and Unite Us have already navigated complex issues of data sharing, consent, and interoperability in Virginia. Learning from their successes and failures is crucial for designing a data and consent model that is effective and avoids creating conflicting processes for users and agencies.

## Focus Area

Integration


# User Questions

## Question

Which languages beyond EN/ES/AR are most needed in Richmond (e.g., Dari/Pashto, Swahili) based on OCWB and RDSS client mix? Any interpreter-access workflows to pair with the pack?

## Rationale

To be truly inclusive, the project must serve Richmond's diverse population. This question aims to identify the specific language needs beyond the initial scope based on actual client data from social services. It also explores how the tool can support interpreter-assisted sessions, acknowledging that translation alone may not be sufficient.

## Focus Area

Accessibility

## Question

What offline-first flows are needed for residents without stable connectivity or devices; how will QR codes work for paper-only users (printed code linked to on-device pack vs locally saved PDF)?

## Rationale

A significant portion of the target user base may lack consistent internet or smartphone access. This question is critical for ensuring equity by designing workflows that function offline and considering how a 'paper-only' user can still benefit from the QR code system, which is a core feature of the project.

## Focus Area

Usability

## Question

What trauma-informed prompts minimize retelling while still collecting WIOA 'barrier' and RRHA preference information?

## Rationale

A core emotional goal of the project is to prevent residents from having to 'retell your story'. This requires carefully designing the user interface and language to collect sensitive information (like justice involvement or disability status) in a way that is respectful, minimizes emotional burden, and builds user trust.

## Focus Area

User Journey

## Question

What safeguards prevent adverse actions when clients choose not to disclose SSN (per WIOA allowance) or immigration details beyond what is strictly required by each agency?

## Rationale

This addresses a key equity and trust issue. Since some data is optional for certain programs, the system must be designed to protect users from being unfairly penalized for exercising their right not to share information. This impacts both the user interface design and the underlying data handling logic.

## Focus Area

Trust

## Question

How will the solution accommodate people experiencing homelessness, returning citizens, and survivors of violence who may lack standard proofs—and align with WIOA/DSS allowances for alternate verification and self-attestation?

## Rationale

This is a critical equity question. The most vulnerable residents often lack standard documentation like a permanent address or government ID. The solution must be flexible enough to incorporate the alternative verification and self-attestation pathways that agencies already permit, ensuring it serves those who need it most.

## Focus Area

Accessibility


# Integration Questions

## Question

For the Department of Social Services (DSS), what acceptance pathways exist for the pack's PDFs to accompany or pre-stage CommonHelp submissions, or be received by local Richmond DSS workers through methods like fax, an upload link, or at a kiosk intake?

## Rationale

This question is critical to determine the practical viability of the tool within the DSS ecosystem. Without a clear and approved submission channel, whether digital via the CommonHelp portal or physical via local office procedures, the generated eligibility pack would be unusable for residents applying for DSS benefits, defeating a primary purpose of the project.

## Focus Area

Agency Workflow

## Question

For the Virginia Career Works Capital Region, which Workforce Innovation and Opportunity Act (WIOA) documents can be accepted as self-attested versus those that must be third-party verified, and can the pack’s data structure be mapped to Virginia Career Works (VaWC) document categories to expedite intake?

## Rationale

To streamline the intake process at Virginia Career Works, the pack must align with their specific verification standards and data organization. Understanding the rules around self-attestation and mapping the pack's contents to VaWC's categories is essential for reducing redundant work for both the resident and the case worker, thereby accelerating access to services.

## Focus Area

Technical Systems

## Question

For the Richmond Redevelopment and Housing Authority (RRHA), can the pack fulfill the entirety of the 'eligibility packet' requirements and verifications checklist, and are there specific forms, such as those from HUD, that must remain as RRHA originals rather than attachable proofs?

## Rationale

The RRHA has a formal 'eligibility packet' and checklist. It is crucial to know if the tool's output can fully substitute for this packet or only supplement it. Identifying any mandatory original forms (e.g., federal HUD forms) is necessary to set realistic expectations for users and ensure their applications are not rejected for being incomplete.

## Focus Area

Agency Workflow

## Question

How will closed-loop referrals be coordinated alongside existing platforms like Unite Virginia (Unite Us) and 211 Virginia, so that the handoff of the eligibility pack reduces 'referral voids' without duplicating platforms or creating conflicting workflows?

## Rationale

Richmond already has an established referral network in Unite Virginia. To be effective and avoid causing confusion for navigators, the pack builder must complement, not compete with, this system. This question addresses the need for a clear strategy on how the pack will be integrated into the existing referral process to enhance it, rather than creating a parallel, redundant system.

## Focus Area

Technical Systems


# Equity Questions

## Question

What safeguards will be implemented to prevent adverse actions against clients who choose not to disclose their Social Security Number (as permitted by WIOA) or immigration details beyond what is strictly required by each specific agency?

## Rationale

This question is critical for protecting vulnerable residents who may fear discrimination or data misuse. The tool must be designed to respect user agency and legal allowances for non-disclosure without leading to automatic disqualification or penalty, ensuring it doesn't create new barriers for immigrant communities or others hesitant to share sensitive data.

## Focus Area

Data Privacy

## Question

How will the solution accommodate people experiencing homelessness, returning citizens, and survivors of violence who often lack standard proofs of identity or residence, and how will it align with WIOA/DSS allowances for alternate verification and self-attestation?

## Rationale

To be truly equitable, the tool cannot be designed only for those with easy access to standard documents. This question is vital to ensure the project incorporates flexible verification pathways that are legally permissible, making the tool accessible and effective for the most marginalized residents who face the highest barriers to service.

## Focus Area

Disability Access

## Question

Which languages beyond English, Spanish, and Arabic are most needed in Richmond based on client data from the Office of Community Wealth Building (OCWB) and Richmond Department of Social Services (RDSS), and are there plans for interpreter-access workflows to be paired with the pack?

## Rationale

True language access goes beyond a few common languages. This question ensures the project serves the actual linguistic diversity of Richmond's residents, such as Dari/Pashto or Swahili speakers. It also addresses the practical need for human support (interpreters) to complement the digital tool, which is crucial for equitable access.

## Focus Area

Language Access

## Question

What offline-first workflows are needed for residents without stable internet connectivity or personal devices, and how will QR codes function for paper-only users (e.g., a printed code linking to a locally saved PDF)?

## Rationale

This question directly confronts the digital divide. An equitable solution must not depend on constant internet access or smartphone ownership. Defining robust offline and paper-based processes is essential to prevent the exclusion of low-income residents, ensuring the technology serves rather than marginalizes them.

## Focus Area

Digital Divide

## Question

What trauma-informed design principles and language will be used in the tool's prompts to minimize the emotional burden of retelling personal histories, while still collecting sensitive but necessary information for WIOA 'barrier' and RRHA preference categories?

## Rationale

A core goal of the project is to reduce the emotional toll on residents. This question focuses on the user experience aspect of equity, ensuring that the process of collecting information about past trauma, justice involvement, or disability is handled with care and respect, thereby preventing the tool itself from becoming a source of stress or retraumatization.

## Focus Area

Trauma-Informed Design


# Prior Art Questions

## Question

Which document and evidence standards (e.g., I-9 acceptable documents list; DSS IEVS; WIOA Attachment C telephone verification form) can the pack reference to pre-label uploads and reduce rejections?

## Rationale

This question is critical for learning from existing agency standards to ensure the documents collected and packaged by the solution are accepted by reviewers at DSS, WIOA, and RRHA, thereby reducing rework and application rejections.

## Focus Area

Lessons Learned

## Question

What lessons from statewide coordinated referral networks (Unite Us in Virginia) and state benefit portals (CommonHelp) should shape the pack’s data model and consent patterns to avoid parallel, conflicting workflows?

## Rationale

To avoid creating a redundant or conflicting system, it is essential to learn from the data models and consent mechanisms of existing large-scale platforms like Unite Virginia and the CommonHelp portal. This ensures the new tool complements the current ecosystem rather than complicating it.

## Focus Area

Potential Collaboration

## Question

How will closed-loop referrals be coordinated alongside Unite Virginia (Unite Us) and 211 Virginia so that pack handoffs reduce 'referral voids' without duplicating platforms?

## Rationale

This question explores how the proposed Core Eligibility Pack can fit within the existing referral landscape dominated by Unite Virginia and 211. Understanding this is crucial to avoid creating another silo and instead leverage or integrate with these platforms to prevent clients from getting lost between systems.

## Focus Area

System Overlap

