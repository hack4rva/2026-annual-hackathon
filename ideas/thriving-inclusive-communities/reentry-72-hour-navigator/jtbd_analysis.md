# Project Summary

## Project Name

reentry-72-hour-navigator

## Pillar

Thriving Inclusive Communities

## Problem Statement

Cross-Agency Service Navigation - Help residents navigate housing, workforce, reentry services without repeating their story.

## Description

A mobile-first, offline-accessible guide designed to assist individuals in Richmond, VA, during the critical first 72 hours after release from incarceration. The project aims to help returning residents navigate essential services such as checking in with probation, visiting OAR of Richmond, applying for DSS benefits, obtaining a DMV ID, finding job assistance at Virginia Career Works, and securing emergency shelter. For each step, the guide will provide crucial details including the service's address, phone number, hours of operation, necessary documents, and relevant GRTC bus routes to streamline the process and prevent missed appointments or wasted trips.


# Functional Job To Be Done

## Situation

When I am released from the Richmond City Justice Center and need to complete probation check-in and secure basics (ID, benefits, shelter, job help) within 72 hours,

## Persona

returning resident

## Motivation

I want to follow a simple step-by-step mobile guide with offline access that shows where to go (addresses, phones, nearby bus routes) and which documents to bring,

## Outcome

so I can check in with Probation & Parole District 1, get a state ID at DMV Richmond Central, apply for DSS benefits, access shelter via the Homeless Crisis Line/CARITAS, and visit Virginia Career Works without wasted trips or missed deadlines.

## Current Workaround

Paper lists from jail release, ad-hoc calls to 211/VADOC/OAR, word-of-mouth, and multiple uncoordinated trips on GRTC.

## Core Pain

Conflicting info on locations/hours, missing documents at DMV/DSS, and navigation across spread-out services (Broad St, Hull St, Cedar Fork, Everglades Dr) causing delays and sanctions risk.


# Emotional Trust Job To Be Done

## Situation

When I have to repeat my story to each agency (probation, OAR, DSS, DMV, shelters, workforce) right after release,

## Persona

returning resident

## Motivation

I want the navigator to remember my situation and only ask once for what’s essential,

## Outcome

so I can feel respected, less overwhelmed, and confident I won’t be penalized for administrative mistakes.

## Current Workaround

Re-explaining needs at each desk or hotline and carrying loose papers; relying on advocates if available.

## Core Pain

Stress, stigma, and fear of noncompliance due to inconsistent instructions and memory/phone/battery limits during the first days.


# Systems Coordination Job To Be Done

## Situation

When agencies across Richmond (VADOC Probation & Parole, OAR, DSS, DMV, Virginia Career Works, CARITAS/CoC) need to coordinate first-steps,

## Persona

service navigator/advocate

## Motivation

I want a shared, up-to-date, Richmond-specific playbook with transit, hours, and document requirements,

## Outcome

so I can route clients in the right order (e.g., ID prerequisites → benefits/workforce) and reduce no-shows and repeat intakes.

## Current Workaround

Individual staff reference sheets, outdated PDFs, and informal calls.

## Core Pain

Data drift on addresses/hours, limited visibility across agencies, and no common sequencing logic for first-72-hour tasks.


# Data Questions

- What is the authoritative source and update cadence for addresses/hours/phones for OAR (809 W Broad), DMV Richmond Central (2300 W Broad), DSS (Marshall Plaza drop box; Southside 4100 Hull St), Probation District 1 (6866 Everglades Dr), VCW (Cedar Fork/Radford/Turner)?
- Can we embed DMV’s ID required-documents content (one identity, legal presence, two residency, SSN) with auto-updates, or must we store a snapshot and monitor changes?
- Can we geocode bus stops and show GRTC routes (e.g., Route 50 Broad/Pulse) near each site with live alerts, and what is the licensing for GRTC GTFS/real-time feeds?

# User Questions

- What percentage of releases from Richmond City Justice Center have a working phone, data plan, or ID at release; how many rely on offline-first only?
- What are the most common document gaps (e.g., birth certificate, SSN card) that block DMV ID issuance, and can the app reorder steps accordingly?
- What languages and accessibility needs (screen reader, large text) are most common among returning residents in Richmond?
- How will we ensure equitable routing for Southside residents (Hull St corridor) and Henrico-bound appointments (Cedar Fork) given transit time/cost; can we prioritize sites by travel time from likely release locations?
- What safeguards prevent penalizing users without smartphones or English fluency; is there a printable one-pager mirror and kiosk/poster at OAR/Justice Center?

# Integration Questions

- Is a light referral handoff to OAR and VCW feasible (click-to-call, warm handoff scripts) without collecting PII, or do partners want structured referrals and status updates?
- Can the navigator deep-link to Virginia DSS CommonHelp for benefits and to DMV’s document guide without creating account lock-in or exposing PII on shared devices?
- Can the app surface the Homeless Crisis Line (804-972-0813) call flow and eligibility info within CARITAS/CoC policies without duplicating intake?
- How does this complement VADOC’s reentry resources and RCSO transitional/reentry services (not replace them)?
- Which local tools already list resources (211 Virginia, CARITAS resources, VCW site, ChamberRVA listings); can we federate instead of duplicating?
- Have other cities’ ‘first 72 hours’ guides solved sequencing (ID → benefits → workforce → housing), and what can we adapt without heavy data-sharing agreements?
- Are there existing Richmond CoC data-sharing or wayfinding efforts we can align with to avoid fragmentation?

# Equity Questions

- How will we ensure equitable routing for Southside residents (Hull St corridor) and Henrico-bound appointments (Cedar Fork) given transit time/cost; can we prioritize sites by travel time from likely release locations?
- What safeguards prevent penalizing users without smartphones or English fluency; is there a printable one-pager mirror and kiosk/poster at OAR/Justice Center?
- What languages and accessibility needs (screen reader, large text) are most common among returning residents in Richmond?
- What percentage of releases from Richmond City Justice Center have a working phone, data plan, or ID at release; how many rely on offline-first only?

# Prior Art Questions

- How does this complement VADOC’s reentry resources and RCSO transitional/reentry services (not replace them)?
- Which local tools already list resources (211 Virginia, CARITAS resources, VCW site, ChamberRVA listings); can we federate instead of duplicating?
- Have other cities’ 'first 72 hours' guides solved sequencing (ID → benefits → workforce → housing), and what can we adapt without heavy data-sharing agreements?
- Are there existing Richmond CoC data-sharing or wayfinding efforts we can align with to avoid fragmentation?

# Key Service Provider Directory

## Organization Name

OAR of Richmond

## Service Category

Reentry Support

## Address

809 W. Broad Street, Richmond, VA, 23284

## Phone Number

(804) 643-2746

## Hours Of Operation

Monday-Thursday 8:30 AM - 12:00 PM & 1:00 PM - 3:30 PM. Closed on Fridays.

## Website

https://www.oarric.org/

## Relevant Bus Routes

Located on the GRTC Route 50 Broad Street corridor, which has connections to the Pulse bus rapid transit and stops near VCU.

## Required Documents

Not specified in the provided context. It is advisable to bring any available identification and release paperwork.

## Intake Process

Walk-in services are available during visiting hours. No appointment is necessary for initial contact.

## Organization Name

DMV Richmond Central

## Service Category

DMV

## Address

2300 West Broad Street, Richmond, VA 23269

## Phone Number

804-497-7100

## Hours Of Operation

Monday - Friday 8:00 AM to 5:00 PM; Saturday 8:00 AM to 12:00 PM

## Website

https://www.dmv.virginia.gov/locations/richmond-central

## Relevant Bus Routes

Located on the GRTC Route 50 Broad Street corridor, with nearby stops.

## Required Documents

To obtain a state ID, you must provide one proof of identity, one proof of legal presence, two proofs of Virginia residency, and one proof of your Social Security number (if issued).

## Intake Process

Walk-in service. The DMV provides an online document guide to help individuals prepare for their visit.

## Organization Name

DSS (City of Richmond) - Southside Community Services Center

## Service Category

Social Services

## Address

4100 Hull Street Road, Richmond, VA

## Phone Number

Not specified for this location; benefits are managed via the CommonHelp website and phone.

## Hours Of Operation

Not specified in the provided context.

## Website

https://www.rva.gov/social-services/social-services-contact-us

## Relevant Bus Routes

Located on the Hull Street corridor. Specific bus routes are not listed.

## Required Documents

Not specified, but applications for benefits typically require proof of identity, residency, and income.

## Intake Process

Applications for benefits can be submitted online via the Virginia CommonHelp portal. There is also a physical drop box for documents at this location and at the downtown Marshall Plaza building (900 E. Marshall Street).

## Organization Name

Probation & Parole District 1

## Service Category

Probation

## Address

6866 Everglades Drive, Richmond, VA 23225

## Phone Number

(804) 786-0251

## Hours Of Operation

Monday - Friday, 9:00 AM to 5:00 PM

## Website

https://search.211virginia.org/search/c0b5ff86-fab8-58ae-b105-b132744085c1

## Relevant Bus Routes

Not specified in the provided context.

## Required Documents

Not specified, but will likely include release paperwork from the correctional facility and a form of identification.

## Intake Process

Individuals under supervision must report as directed by the Department of Corrections or their parole officer. Call for specific instructions.

## Organization Name

Virginia Career Works – Capital Region (Henrico)

## Service Category

Workforce

## Address

121 Cedar Fork Road, Henrico County, VA 23223

## Phone Number

804-652-3233

## Hours Of Operation

Hours vary by location.

## Website

https://virginiaworks.gov/local-office/henrico-cedar-fork/

## Relevant Bus Routes

Not specified in the provided context.

## Required Documents

Not specified. It is recommended to bring a state ID or driver's license and Social Security card if available.

## Intake Process

Contact the center by phone or visit during operating hours for information on services and intake.

## Organization Name

Virginia Career Works – Capital Region (Richmond West)

## Service Category

Workforce

## Address

4914 Radford Ave, Richmond, VA

## Phone Number

Not specified for this location. The general contact number for the Henrico office is 804-652-3233.

## Hours Of Operation

Hours vary by location.

## Website

http://go.chamberrva.com/list/member/virginia-career-works-capital-region-125563

## Relevant Bus Routes

Not specified in the provided context.

## Required Documents

Not specified. It is recommended to bring a state ID or driver's license and Social Security card if available.

## Intake Process

Contact the center by phone or visit during operating hours for information on services and intake.

## Organization Name

Homeless Crisis Line (Coordinated Entry)

## Service Category

Housing

## Address

Not applicable (phone-based service)

## Phone Number

804-972-0813

## Hours Of Operation

Not specified, but crisis lines are typically available 24/7.

## Website

https://seniornavigator.org/program/28645/emergency-shelter

## Relevant Bus Routes

Not applicable.

## Required Documents

Information will be gathered over the phone during the intake assessment.

## Intake Process

Call this number for coordinated entry into the emergency shelter system. This is the first step for anyone experiencing a housing crisis (e.g., 3 days or less from losing housing).

## Organization Name

CARITAS Women's Emergency Shelter

## Service Category

Housing

## Address

2220 Stockton Street, Richmond, VA 23224

## Phone Number

Intake is handled through the Homeless Crisis Line at 804-972-0813.

## Hours Of Operation

Access is determined by the coordinated entry system, not by public walk-in hours.

## Website

https://caritasva.org/contact-us/

## Relevant Bus Routes

Not specified in the provided context.

## Required Documents

Determined by the coordinated entry intake process via the Homeless Crisis Line.

## Intake Process

Access to the shelter is not available via walk-in. Individuals must call the Homeless Crisis Line (804-972-0813) to be assessed for eligibility and placement.

## Organization Name

CARITAS Men's Shelter

## Service Category

Housing

## Address

700 Dinwiddie Avenue, Richmond, VA

## Phone Number

Intake is handled through the Homeless Crisis Line at 804-972-0813.

## Hours Of Operation

Access is determined by the coordinated entry system, not by public walk-in hours.

## Website

https://seniornavigator.org/program/28645/emergency-shelter

## Relevant Bus Routes

Not specified in the provided context.

## Required Documents

Determined by the coordinated entry intake process via the Homeless Crisis Line.

## Intake Process

Access to the shelter is not available via walk-in. Individuals must call the Homeless Crisis Line (804-972-0813) to be assessed for eligibility and placement.

