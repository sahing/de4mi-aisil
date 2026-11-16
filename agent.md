# PRD – Modern IT & Business Services Website

**Product:** Corporate website for a global technology and business-services company **Version:** 1.0 (Draft) **Status:** For review

---

## 1. Overview

### 1.1 Purpose

Build a modern, fast, visually striking corporate website that positions the company as an AI-first technology and business-services partner. The site must explain a broad portfolio (15 service lines) clearly, show how AI is **replacing or changing** each service, and convert visitors into leads, partners and candidates.

### 1.2 Problem Statement

Large service portfolios usually produce cluttered, jargon-heavy websites. Visitors cannot quickly tell what the company does, why it is different, or how AI changes the value they receive. The new site must make a wide portfolio feel simple, current and credible.

### 1.3 Goals

1. Communicate the full portfolio in under 60 seconds of browsing.
2. Establish an AI-led brand position with a dedicated "AI is Replacing & Changing" narrative.
3. Generate qualified leads (contact, demo/consultation requests, whitepaper downloads).
4. Deliver a premium, modern look and feel with excellent performance (Core Web Vitals in the green).
5. Be easy for marketing to update without developer help (CMS-driven).

### 1.4 Non-Goals (v1)

- Customer login portal or client dashboards
- E-commerce or online payments
- Full job-application tracking system (link out to an existing ATS)

---

## 2. Target Audience

| Persona | Needs | Key pages |
| --- | --- | --- |
| **Enterprise decision-maker (CIO/CTO/COO)** | Proof of capability, transformation roadmap, ROI | Home, Services, Case Studies, AI Impact |
| **Procurement / Operations head** | BPO/KPO/BPM scope, SLAs, compliance, pricing model | Services, Industries, Contact |
| **Technology lead** | Cloud, security, app modernization depth | Service detail pages, Insights |
| **Partner / Investor** | Scale, sustainability, credibility | About, Sustainability, Newsroom |
| **Job seeker** | Culture, roles, AI-era skills | Careers |

---

## 3. Service Portfolio (Content Scope)

The 15 services are grouped into **five pillars** so the navigation stays simple.

### Pillar A – AI & Data

1. **Artificial Intelligence and Data & Analytics**
2. **Cognitive Business Operations**

### Pillar B – Business Operations

3. **BPO Services**
4. **KPO Services**
5. **Business Process Management (BPM)**

### Pillar C – Cloud, Network & Infrastructure

6. **Cloud Services**
7. **Networking**
8. **Network Solutions and Services**
9. **Cybersecurity & Quality Engineering**

### Pillar D – Engineering & Applications

10. **Application Development & Modernization**
11. **Enterprise Solutions**
12. **IoT and Digital Engineering**

### Pillar E – Advisory & Sustainability

13. **Consulting**
14. **Management & Tech Consulting**
15. **Sustainability Services**

> **Note:** *Networking* and *Network Solutions and Services* overlap, as do *Consulting* and *Management & Tech Consulting*. Recommendation: keep them as separate cards in the data model but merge each pair into a single landing page with two tabs, to avoid duplicate content and SEO cannibalization. To be confirmed with stakeholders.

---

## 4. Signature Concept: "AI is Replacing & Changing"

This is the site's differentiator. A dedicated section on the home page and a full page (`/ai-impact`) show, for every service, **what AI is replacing, what it is changing, and what stays human.**

### 4.1 Interaction Design

- A **toggle or slider**: *Before AI → With AI*, which morphs the content of each service card.
- Three labelled states per service: **Replacing** (tasks automated away), **Changing** (tasks augmented), **Rising** (new human roles/opportunities).
- Animated counters for impact (e.g., % time saved, cost reduction). *Figures must be validated by the business before launch.*

### 4.2 Draft Content Matrix

| Service | AI is replacing | AI is changing | New value / human role |
| --- | --- | --- | --- |
| AI & Data & Analytics | Manual reporting, static dashboards | Decision-making via predictive and generative insights | Data product owners, AI governance |
| Cognitive Business Operations | Rule-based scripts and manual triage | Operations that learn and self-optimize | Process intelligence leads |
| BPO | Repetitive data entry, basic voice/chat support | Agent assist, real-time QA, multilingual support | Exception handling, CX specialists |
| KPO | First-draft research, document review | Analysis speed and depth | Domain experts validating AI output |
| BPM | Hand-built workflows | Self-healing, adaptive process automation | Process architects |
| Cloud Services | Manual provisioning and monitoring | AIOps, FinOps automation | Platform engineers |
| Networking | Manual configuration and troubleshooting | Intent-based, self-managing networks | Network automation engineers |
| Network Solutions & Services | Reactive fault handling | Predictive maintenance and capacity planning | Network reliability engineers |
| Cybersecurity & Quality Engineering | Manual test cases, alert triage | AI threat detection, autonomous testing | Security strategists, AI red teams |
| Application Development & Modernization | Boilerplate coding, manual migration | AI-assisted code, refactoring and testing | Solution architects, prompt/system designers |
| Enterprise Solutions | Manual ERP/CRM customization | Embedded copilots in enterprise suites | Business-process consultants |
| IoT & Digital Engineering | Manual monitoring and inspection | Edge AI, digital twins, predictive control | Digital twin engineers |
| Consulting | Slide-heavy desk research | Faster, data-backed strategy | Trusted advisors, change leaders |
| Management & Tech Consulting | Static operating models | Continuous AI-informed planning | Transformation leaders |
| Sustainability Services | Manual ESG data collection | Automated carbon and ESG tracking | Sustainability strategists |

### 4.3 Tone

Balanced and honest: show disruption without fear-mongering, and emphasise human + AI collaboration. Legal and brand teams should review claims.

---

## 5. Information Architecture

```
Home
Services
 ├─ AI & Data
 │   ├─ Artificial Intelligence and Data & Analytics
 │   └─ Cognitive Business Operations
 ├─ Business Operations
 │   ├─ BPO Services
 │   ├─ KPO Services
 │   └─ Business Process Management (BPM)
 ├─ Cloud, Network & Infrastructure
 │   ├─ Cloud Services
 │   ├─ Networking / Network Solutions and Services
 │   └─ Cybersecurity & Quality Engineering
 ├─ Engineering & Applications
 │   ├─ Application Development & Modernization
 │   ├─ Enterprise Solutions
 │   └─ IoT and Digital Engineering
 └─ Advisory & Sustainability
     ├─ Consulting / Management & Tech Consulting
     └─ Sustainability Services
AI is Replacing & Changing  (/ai-impact)
Industries
Case Studies
Insights (blog, whitepapers, reports)
About (leadership, values, sustainability, newsroom)
Careers
Contact / Book a Consultation
```

---

## 6. Page Requirements

### 6.1 Home Page

1. **Hero** – bold headline, one-line value proposition, primary CTA (*Book a Consultation*) and secondary CTA (*Explore Services*). Background: subtle animated gradient mesh or particle/network visual; must respect reduced-motion settings.
2. **Trust bar** – client logos, certifications, partner badges.
3. **Services showcase** – five pillar cards expanding to the 15 services (interactive grid with hover glow and icons).
4. **"AI is Replacing & Changing" section** – the signature interactive module (Section 4).
5. **Impact numbers** – animated counters (clients, countries, people, automation delivered).
6. **Featured case studies** – 3 cards with outcome metrics.
7. **Industries strip** – BFSI, healthcare, manufacturing, retail, telecom, energy, public sector (confirm list).
8. **Insights** – latest articles and reports.
9. **Sustainability highlight** – short story with link to Sustainability Services.
10. **Final CTA banner** – consultation or contact form.
11. **Footer** – full sitemap, social links, legal, newsletter signup.

### 6.2 Service Landing Page (template for all 15)

- Hero with service name, one-sentence summary, CTA
- **What we offer** (capabilities grid)
- **AI is replacing / changing / rising** panel for that service
- Approach or methodology (step timeline)
- Tools, platforms and partners
- Relevant case studies
- FAQs
- Related services
- Contact CTA

### 6.3 AI Impact Page (`/ai-impact`)

- Intro story and manifesto
- Full interactive matrix (all services, filterable by pillar or industry)
- Research and reports downloads (lead capture)
- Reskilling and responsible-AI commitments

### 6.4 Industries, Case Studies, Insights

- Filterable listing pages (by service, industry, topic)
- Detail templates with share, related content and CTA
- Whitepapers gated behind a short form

### 6.5 About, Careers, Contact

- About: story, leadership, values, global presence map, sustainability, newsroom
- Careers: culture, open roles (integrated or linked ATS), AI-era skills programs
- Contact: form, office locations with map, support routing by inquiry type (sales, careers, media, vendors)

---

## 7. Functional Requirements

| ID | Requirement | Priority |
| --- | --- | --- |
| F1 | Responsive layout for mobile, tablet, desktop | Must |
| F2 | Mega-menu navigation grouped by the five pillars, with search | Must |
| F3 | Interactive "Before AI → With AI" module | Must |
| F4 | Lead forms (contact, consultation, whitepaper) with validation, spam protection, CRM integration | Must |
| F5 | CMS-managed content (services, case studies, insights, careers) | Must |
| F6 | Site-wide search with filters | Should |
| F7 | Dark/light theme toggle | Should |
| F8 | Multi-language support (start with English; structure for i18n) | Should |
| F9 | AI chat assistant to answer questions and route leads | Could |
| F10 | Personalization by industry (return visitors) | Could |
| F11 | Newsletter subscription | Should |
| F12 | Cookie consent and privacy controls (GDPR/CCPA and India's DPDP Act) | Must |
| F13 | Event/webinar registration | Could |

---

## 8. Design Requirements

### 8.1 Visual Direction

- **Style:** clean, premium, futuristic but trustworthy. Think bold typography, generous whitespace, glassmorphism accents and soft gradients.
- **Colour:** deep navy or near-black base, with one vibrant accent (electric blue/violet) and a secondary highlight (teal/green for sustainability). Final palette to follow brand guidelines.
- **Typography:** modern geometric sans-serif for headings (e.g., Inter, Plus Jakarta Sans, or Manrope), a readable sans for body text. Fluid type scale.
- **Imagery:** custom illustrations, abstract data and network visuals, and authentic photography. Avoid generic stock imagery.
- **Iconography:** one consistent line-icon set across all 15 services.

### 8.2 Motion

- Scroll-triggered reveals, subtle parallax, smooth hover states
- Animated gradient or network background in the hero
- Micro-interactions on buttons, cards and counters
- All animation under 400 ms for UI feedback, and disabled for `prefers-reduced-motion`

### 8.3 Components Library

Buttons, cards, mega-menu, tabs, accordion, timeline, counters, logo carousel, testimonial slider, form fields, modals, toasts, breadcrumbs, pagination. Built as a documented design system.

---

## 9. Non-Functional Requirements

| Area | Requirement |
| --- | --- |
| **Performance** | LCP < 2.5 s, INP < 200 ms, CLS < 0.1; Lighthouse ≥ 90 on mobile |
| **Accessibility** | WCAG 2.2 AA; keyboard navigation; screen-reader tested; sufficient contrast |
| **SEO** | Semantic HTML, schema markup (Organization, Service, Article, FAQ), clean URLs, XML sitemap, OG/Twitter cards, hreflang when i18n is enabled |
| **Security** | HTTPS, CSP headers, WAF, rate-limited forms, regular dependency scanning |
| **Privacy** | Consent management, data-retention policy, privacy and cookie pages |
| **Reliability** | 99.9% uptime, CDN delivery, automated backups |
| **Browser support** | Latest two versions of Chrome, Edge, Safari, Firefox; iOS Safari and Android Chrome |
| **Scalability** | Statically generated or edge-rendered pages with incremental updates |

---

## 10. Suggested Technical Stack

- **Frontend:** Next.js (React) with TypeScript, Tailwind CSS, Framer Motion or GSAP for animation
- **CMS:** headless (Sanity, Strapi or Contentful) for services, case studies, insights and careers
- **Hosting:** Vercel or AWS (CloudFront + S3/Amplify) with CDN
- **Forms/CRM:** HubSpot or Salesforce integration; email via a transactional provider
- **Search:** Algolia or a lightweight local index
- **Analytics:** GA4 plus a privacy-friendly tool; heatmaps (Hotjar or Clarity); tag manager
- **Chat assistant (optional):** LLM-powered assistant grounded on site content, with human hand-off
- **CI/CD:** GitHub Actions with preview deployments

*Stack is a recommendation and can change to match the internal team's skills.*

---

## 11. Analytics & Success Metrics

| Metric | Target (6 months post-launch) |
| --- | --- |
| Qualified leads per month | +40% vs. current baseline |
| Conversion rate (visit → form) | ≥ 2.5% |
| Avg. engagement time on home page | ≥ 90 s |
| Interactions with AI Impact module | ≥ 25% of visitors |
| Organic traffic growth | +50% |
| Lighthouse mobile score | ≥ 90 |
| Bounce rate | < 45% |

Track events: CTA clicks, form starts/completions, whitepaper downloads, service-card clicks, AI-module toggles, scroll depth.

---

## 12. Content Plan

- Service pages: 15 (or 13 if merged pairs), each \~400–600 words plus FAQs
- AI Impact page and matrix content, reviewed by subject-matter experts
- 6–10 case studies with measurable outcomes
- 10 launch articles/insights, 2 whitepapers
- About, Careers, Sustainability and legal pages
- Brand assets: logo, photography, illustrations, short hero video (optional)

---

## 13. Timeline (Indicative, \~14 weeks)

| Phase | Duration | Deliverables |
| --- | --- | --- |
| Discovery & strategy | 2 weeks | Stakeholder interviews, competitor review, final sitemap |
| UX & wireframes | 2 weeks | Wireframes for key templates, content model |
| UI design & design system | 3 weeks | High-fidelity designs, prototype, component library |
| Development | 4 weeks | Front end, CMS, integrations |
| Content & QA | 2 weeks | Content entry, accessibility, performance and cross-browser testing |
| Launch & hypercare | 1 week | Go-live, redirects, monitoring |

---

## 14. Risks & Mitigations

| Risk | Mitigation |
| --- | --- |
| Overlapping services confuse visitors and hurt SEO | Merge overlapping pairs on landing pages; clear taxonomy |
| Unsubstantiated AI claims or statistics | Business and legal validation before publishing |
| Heavy animation hurts performance | Performance budget; lazy-load; reduced-motion support |
| Content delays | Early content owner assignment; templates and placeholders |
| Scope creep from the AI chat assistant | Treat as phase 2 unless approved |

---

## 15. Open Questions

1. Company name, logo, brand guidelines and colour palette?
2. Primary target geographies and required languages?
3. Should *Networking* and *Network Solutions and Services* (and the two consulting lines) be merged?
4. Which industries and clients can be featured publicly?
5. Preferred CMS, hosting and CRM?
6. Is a chat assistant or career portal required at launch?
7. Which AI-impact statistics are approved for publication?

---

## 16. Acceptance Criteria (Launch)

- All pages in Section 5 are live and responsive.
- All 15 services are represented with approved content.
- The "AI is Replacing & Changing" module works on desktop and mobile.
- Forms deliver to the CRM and send confirmations.
- Accessibility and performance targets are met.
- Analytics, consent and SEO setup are verified.
- Stakeholder sign-off recorded.
