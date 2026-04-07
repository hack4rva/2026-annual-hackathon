# Executive Summary

This report provides a Jobs To Be Done (JTBD) analysis for a proposed WhatsApp-based service finder for immigrants in Richmond, VA, a project co-branded with the Office of Immigrant and Refugee Engagement (OIRE) and the Sacred Heart Center. The analysis identifies three core jobs users need to accomplish. The primary functional job is for newcomers to quickly and reliably find essential services, such as healthcare, that meet specific needs like language and insurance status, to overcome the current stressful and inefficient search process. The critical emotional/trust job is for vulnerable individuals, particularly the undocumented, to access services like food banks anonymously, without fear of their data being shared with authorities. The systems/coordination job is to provide a seamless handoff from the automated bot to a human navigator for complex queries, avoiding the frustration of repeating information and navigating confusing phone systems.

To guide the project's development, several key open questions have been identified across critical domains. In Data, the project must establish a robust process for vetting, verifying, and updating service information, and investigate API integration with existing databases like 211 Virginia. For the User, it is crucial to assess the target population's digital literacy, design the bot to build trust and convey privacy, and plan for expanding beyond the initial top 10 questions. Regarding Integration, the workflow for the human handoff needs to be clearly defined, including staff capacity and responsibilities, alongside technical requirements for co-branding and language access. From an Equity perspective, the project must ensure accessibility for users with low literacy or disabilities and create non-digital alternatives for those without smartphone access, while also planning to serve immigrant communities beyond the initial three language groups. Finally, examining Prior Art involves learning from successful implementations by organizations like the WHO and UNHCR, evaluating platforms like Turn.io for privacy, and studying best practices from other US municipalities.

# Project Overview

## Pillar

Thriving Inclusive Communities

## Problem Statement

Immigrant Service Discovery - Help residents safely find community services without accounts or sharing identifying info.

## Project Name

whatsapp-service-finder

## Description

This project involves the creation of a WhatsApp-based chatbot designed to assist immigrants in Richmond, VA. The bot will address the top 10 most common questions from newcomers, providing answers and information in English, Spanish, and Arabic through a user-friendly button menu interface. A key feature is the focus on privacy and trust, allowing users to access information without creating an account or sharing personally identifying information. The services listed within the bot will be vetted and verified to ensure reliability, and will include 'call-now' calls-to-action (CTAs) for immediate connection. For complex queries that the bot cannot handle, a 'human navigator handoff' feature will be implemented to seamlessly connect the user with a real person for assistance. The project will be co-branded with the City of Richmond's Office of Immigrant and Refugee Engagement (OIRE) and the Sacred Heart Center to build trust and leverage existing community relationships.


# Functional Job To Be Done

## Situation

I and my family are new to Richmond and need to find a doctor.

## Persona

A recently arrived immigrant

## Motivation

To quickly find a list of nearby clinics that accept patients without insurance and offer services in my language.

## Outcome

To get the healthcare we need to stay healthy and thrive in our new home.

## Current Workaround

Asking for recommendations from friends or community leaders, searching online in English which can be difficult, or physically visiting community centers to ask for help.

## Core Pain

The current process is time-consuming, unreliable, and often leads to misinformation or dead ends. It is stressful to navigate a complex healthcare system in a new language and culture.


# Emotional And Trust Job To Be Done

## Situation

I need to access a food bank or other essential service.

## Persona

An undocumented immigrant

## Motivation

To find out where to go and what the requirements are without having to create an account or provide any personal information.

## Outcome

To get the help I need for my family without fear of my information being shared with immigration authorities.

## Current Workaround

Relying solely on trusted individuals within their immediate community, which limits their options, or avoiding seeking help altogether due to fear and mistrust of official channels.

## Core Pain

The constant fear of deportation and family separation creates a significant barrier to accessing essential services, leading to food insecurity and other hardships.


# Systems And Coordination Job To Be Done

## Situation

The WhatsApp bot cannot answer my specific question about my child's school enrollment.

## Persona

A refugee parent

## Motivation

To be seamlessly connected to a real person who already knows what I am asking about.

## Outcome

To get a clear answer without having to repeat my story and navigate a confusing phone system.

## Current Workaround

Calling a general helpline, being transferred multiple times, having to re-explain the situation to each new person, and potentially facing language barriers at each step.

## Core Pain

The process is frustrating, inefficient, and emotionally draining. It can feel like the system is working against you, leading to a sense of hopelessness and a desire to give up.


# Data Questions

- What is the process for vetting and "verifying" the services that will be included in the bot's database? How will this information be kept up-to-date?
- Does 211 Virginia offer an API that could be used to integrate their service database into the WhatsApp bot? What are the data sharing agreements and technical requirements?
- How will the "top 10 newcomer questions" be identified and prioritized? Will this be based on data from OIRE and Sacred Heart Center, or will new user research be conducted?

# User And Persona Questions

- What is the current level of digital literacy and smartphone adoption among the target user groups (English, Spanish, and Arabic-speaking newcomers) in Richmond?
- How can the bot be designed to build trust with users who may be wary of technology and government-affiliated services? What are the key design elements that will convey safety and privacy?
- Beyond the top 10 questions, what are the other common information needs of newcomers in Richmond? How can the bot be designed to address a wider range of queries over time?

# Integration And Technical Questions

- What is the proposed workflow for the "human navigator handoff"? Which organization's staff will be responsible for responding, and what is their current capacity?
- How will the bot integrate with the City of Richmond's existing language access services, such as the telephone interpretation line, to support users who speak languages other than English, Spanish, or Arabic?
- What are the technical and logistical requirements for co-branding the bot with OIRE and Sacred Heart Center? How will the roles and responsibilities of each partner be defined?

# Equity And Access Questions

- How will the bot be designed to be accessible to users with low literacy or visual impairments? Will features like audio-based information, as used in the UNHCR's WhatsApp services, be considered?
- What is the plan for reaching and serving newcomers who do not use WhatsApp or do not have regular access to a smartphone? Will there be alternative, non-digital channels for accessing the same information?
- How will the project ensure that the needs of different immigrant and refugee communities in Richmond are being met, beyond the three main language groups? Are there other significant language groups that should be considered for future iterations?

# Prior Art And Sustainability Questions

- Based on the success of the WHO and UNHCR WhatsApp services, what are the key lessons learned regarding user engagement, data privacy, and building trust that can be applied to the Richmond context?
- The UNHCR case study mentions the use of Turn.io for its "privacy by design" setup. What are the potential benefits and costs of using a similar platform for the Richmond service finder?
- How have other municipalities in the US successfully implemented similar chatbot services for immigrant and refugee populations? What are the common challenges and success factors?

# Partner Roles And Collaboration

## Partner Name

Office of Immigrant and Refugee Engagement (OIRE) and Sacred Heart Center

## Organization Type

City Government and Non-profit

## Potential Role

The collaboration involves co-branding the WhatsApp service finder with both OIRE and the Sacred Heart Center to enhance trust and visibility within the immigrant community. These partners are expected to be the primary sources for identifying and prioritizing the 'top 10 newcomer questions' based on their direct experience with the community. They will also likely play a crucial role in the process of vetting and verifying the community services included in the bot's database to ensure accuracy and appropriateness. Furthermore, one or both organizations will manage the 'human navigator handoff' system, providing the staff capacity to respond to user queries that require human intervention.

## Contact Information

Specific contact information was not provided in the source documents.


# Richmond Va Immigrant Context

## Key Languages

The primary languages for the initial launch of the service are English, Spanish, and Arabic (EN/ES/AR). The project analysis also raises the question of how to ensure the needs of other significant immigrant and refugee communities in Richmond are met, suggesting that additional languages may be considered in future iterations.

## Demographic Data Source

The provided text does not specify a definitive demographic data source used for the project. However, the 'Open Questions' section of the analysis suggests that research is needed to understand the digital literacy and smartphone adoption among target user groups. It also mentions 211 Virginia as a potential data source for its service database via an API.

## Key Service Organizations

The key local organizations central to this project are the City of Richmond's Office of Immigrant and Refugee Engagement (OIRE) and the Sacred Heart Center, who are co-branding partners. The analysis also identifies 211 Virginia as a potential partner for data integration through an API to populate the service database.

## Relevant City Initiatives

The project itself, being a partnership with the City of Richmond's Office of Immigrant and Refugee Engagement (OIRE), is a key relevant initiative. The analysis also points to the need for integration with the City of Richmond's existing language access services, such as its telephone interpretation line, to support users who speak languages beyond the initial three supported by the bot.


# Privacy And Safety Considerations

## Core Principle

The guiding principle is to help residents, particularly immigrants, safely find community services without requiring accounts or the sharing of personally identifying information.

## Anonymity Features

The service is designed to support user anonymity by not requiring users to create an account or provide any personal information to access the bot's primary functions.

## Data Handling Policy

The project considers adopting a 'privacy by design' approach, potentially modeling its data handling policy on best practices from organizations like the UNHCR and platforms such as Turn.io, which specialize in secure communication for sensitive contexts.

## Risk Mitigation Strategies

Key strategies include implementing a secure and seamless 'human navigator handoff' protocol that ensures user information is not compromised when a query is escalated. This addresses the core fear, especially among undocumented users, of information being shared with authorities, thereby building trust and encouraging service use.

