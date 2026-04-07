# WhatsApp Service Finder

**Source:** NEW  
**Pillar:** Thriving and Inclusive Communities  
**Problem Statement:** Help residents safely find and connect to trusted community services without creating accounts or sharing identifying information.

---

## Description

**Core assumption challenged:** service discovery should live on the web; for many immigrants, **WhatsApp is the primary channel**, with higher response rates than SMS or IVR in cited studies. Richmond’s immigrant residents cannot quickly find **trusted, local** services on the platform they already use, facing English-first sites, tracking concerns, or scam risk. The innovation is a **Richmond-specific**, CBO-verified WhatsApp flow: multilingual menus, category navigation, short lists of services with hours and languages, optional location-based nearest results, human escalation for complex cases, and anti-scam patterns (verified business profile, education, optional “verify this number” concepts).

## Key Approach

- WhatsApp Business API webhook (e.g., via Twilio): keyword or menu intents → responses from curated JSON of local services; unmatched → handoff to 211/CBO monitor.
- Launch through **trusted CBO channels** for adoption; support multiple languages from first message.
- Reduce stored PII; disclose platform retention constraints transparently; scope automation to non–legal-advice tiers with human routing for sensitive topics.
- Stretch: broadcast channel for alerts, voice-note pipeline, scam-check against verified provider list.
- Measure completion, escalation rate, and trust in pilot cohorts.
