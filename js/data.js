/**
 * Alisil Technology Pvt Ltd - Core Data Architecture
 * 15 Services, 5 Pillars, AI Impact Matrix, Case Studies, Industries, Insights & Careers
 */

const ALISIL_DATA = {
  company: {
    name: "Alisil Technology",
    fullName: "Alisil Technology",
    domain: "Alisiltechnology.in",
    url: "https://alisiltechnology.in",
    email: "Alisiltechnology@gmail.com",
    phone: "+91 98741 99630",
    whatsapp: "+91 98741 99630",
    whatsappRaw: "919874199630",
    whatsappGreeting: "Hello Alisil Technology, I am interested in your enterprise AI and technology services. I would like to learn more.",
    officeAddress: "CHARAKTALA, JOKA, P.O, Rasapunja, Kolkata, West Bengal 700104",
    registeredOffice: "CHARAKTALA, JOKA, P.O, Rasapunja, Kolkata, West Bengal 700104",
    tagline: "Powering Businesses Through Smart Technology",
    mission: "Architecting human-centric, AI-first technology transformations that unlock measurable enterprise resilience and growth.",
    stats: {
      deployments: "500+",
      countries: "40+",
      reliability: "99.95%",
      savingsDelivered: "$180M+",
      retentionRate: "96%"
    },
    headquarters: "Bangalore, India",
    established: "2018",
    certifications: [
      "ISO Certified (ISO 9001 / ISO 27001)",
      "DPIIT Startup India Recognized",
      "Govt. of India Ministry of MSME Registered",
      "SOC 2 Type II Audited",
      "GDPR & DPDP Compliant",
      "AWS Premier Tier",
      "Microsoft Azure Expert MSP",
      "Google Cloud Premier"
    ],
    officialCertificates: [
      {
        id: "startup-india",
        title: "Startup India Certificate of Recognition",
        authority: "DPIIT, Ministry of Commerce and Industry, Government of India",
        image: "assets/images/certificates/startupindia.webp",
        category: "Government Recognition"
      },
      {
        id: "msme",
        title: "Ministry of MSME Enterprise Registration",
        authority: "Ministry of Micro, Small & Medium Enterprises, Government of India",
        image: "assets/images/certificates/msme.webp",
        category: "Statutory Enterprise Filing"
      },
      {
        id: "iso",
        title: "ISO Certified Management & Security Systems",
        authority: "International Organization for Standardization (ISO)",
        image: "assets/images/certificates/iso.webp",
        category: "International Standards"
      }
    ]
  },

  pillars: [
    {
      id: "ai-data",
      name: "AI & Data",
      eyebrow: "Pillar A",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"/><path d="M16 14v2a4 4 0 0 1-8 0v-2"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="6" r="2"/></svg>`,
      description: "Harness generative AI, enterprise foundational models, and autonomous data pipelines to fuel intelligent decision engines.",
      servicesCount: 2
    },
    {
      id: "business-ops",
      name: "Business Operations",
      eyebrow: "Pillar B",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
      description: "Re-platforming legacy BPO/KPO and manual workflows into self-healing, agentic business process ecosystems.",
      servicesCount: 3
    },
    {
      id: "cloud-infra",
      name: "Cloud, Network & Infrastructure",
      eyebrow: "Pillar C",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="M12 13v6"/><path d="m9 16 3 3 3-3"/></svg>`,
      description: "Resilient hybrid-cloud fabrics, intent-driven networking, and autonomous cybersecurity postures with zero-trust defense.",
      servicesCount: 4
    },
    {
      id: "engineering",
      name: "Engineering & Applications",
      eyebrow: "Pillar D",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      description: "Full-lifecycle cloud-native software engineering, ERP copilot embedding, and industrial IoT edge digital twins.",
      servicesCount: 3
    },
    {
      id: "advisory",
      name: "Advisory & Sustainability",
      eyebrow: "Pillar E",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
      description: "Data-backed enterprise strategic guidance, operating model agility, and automated Scope 1-3 ESG sustainability.",
      servicesCount: 3
    }
  ],

  services: [
    {
      id: "ai-data-analytics",
      pillarId: "ai-data",
      title: "Artificial Intelligence and Data & Analytics",
      slug: "ai-data-analytics",
      shortDesc: "Enterprise AI architectures, LLM fine-tuning, autonomous data lakes, and predictive analytics pipelines.",
      longDesc: "Transform raw data into an autonomous competitive moat. We build enterprise-grade data platforms and deploy bespoke generative models, retrieval-augmented generation (RAG) frameworks, and predictive intelligence engines.",
      capabilities: [
        "Enterprise LLM & Multi-Agent System Deployment",
        "Modern Data Stack (Snowflake, Databricks, BigQuery)",
        "Automated Feature Stores & MLOps Governance",
        "Predictive Customer & Operational Modeling"
      ],
      aiMatrix: {
        replacing: "Manual reporting, static BI dashboards, and brittle ETL scripts",
        changing: "Real-time decision making through conversational data exploration and predictive simulation",
        rising: "Data product owners, AI governance officers, and prompt system architects",
        metric: "72% Faster Time-to-Insight",
        metricLabel: "Acceleration in enterprise decision latency"
      },
      methodology: ["Audit & Readiness Assessment", "Data Foundation & Governance", "Agentic Model Integration", "Continuous MLOps Refinement"],
      tools: ["PyTorch", "LangChain", "Snowflake", "Databricks", "Azure OpenAI", "Vertex AI"],
      stat: "4.8x ROI within 12 months"
    },
    {
      id: "cognitive-business-ops",
      pillarId: "ai-data",
      title: "Cognitive Business Operations",
      slug: "cognitive-business-ops",
      shortDesc: "Self-healing enterprise operations combining cognitive orchestration, intelligent RPA, and adaptive workflows.",
      longDesc: "Shift operations from reactive ticketing to self-optimizing business pipelines. Our cognitive engines proactively detect bottlenecks, resolve system anomalies, and trigger adaptive remediation in real time.",
      capabilities: [
        "Autonomous Process Incident Remediation",
        "Cognitive Document Processing (CDP)",
        "AI-Driven Supply Chain Triage",
        "Self-Learning Exception Workflows"
      ],
      aiMatrix: {
        replacing: "Rule-based static scripts, Tier-1 manual ticket triage, and scheduled batch checks",
        changing: "Operations shift from human-supervised workflows to autonomous self-healing execution",
        rising: "Process intelligence leads, automation architects, and operational strategists",
        metric: "65% MTTR Reduction",
        metricLabel: "Mean time to incident remediation"
      },
      methodology: ["Process Mining & Baseline", "Cognitive Agent Setup", "Human-in-the-Loop Safeguards", "Autonomous Scaling"],
      tools: ["Celonis", "UiPath Autopilot", "Camunda", "Kafka", "Datadog AI"],
      stat: "60% operational overhead savings"
    },
    {
      id: "bpo-services",
      pillarId: "business-ops",
      title: "BPO Services (Next-Gen CX & Back-Office)",
      slug: "bpo-services",
      shortDesc: "AI-augmented contact centers, omnichannel customer care, and automated transactional back-office handling.",
      longDesc: "Reimagine business process outsourcing. We combine multilingual empathetic human specialists with generative agent copilot suites to deliver frictionless 24/7 customer experiences.",
      capabilities: [
        "Generative AI-Assisted Omnichannel Contact Centers",
        "Automated Claims & Invoice Processing",
        "Multilingual Real-Time Voice & Chat Translation",
        "Predictive Customer Sentiment Analytics"
      ],
      aiMatrix: {
        replacing: "Repetitive data entry, canned script reading, and basic FAQ handling",
        changing: "Human agents augmented with real-time copilots, sentiment prompts, and instant auto-summaries",
        rising: "Complex dispute resolution specialists, VIP relationship curators, and CX engineers",
        metric: "55% Faster First-Call Resolution",
        metricLabel: "Speed and satisfaction boost across 10M+ interactions"
      },
      methodology: ["Journey Mapping", "Agent Copilot Instrumentation", "Continuous QA Calibration", "SLA Performance Scaling"],
      tools: ["Salesforce Service Cloud", "Genesys Cloud", "Twilio", "Amazon Connect"],
      stat: "42% reduction in contact center cost-per-contact"
    },
    {
      id: "kpo-services",
      pillarId: "business-ops",
      title: "KPO Services (Knowledge & Research Intelligence)",
      slug: "kpo-services",
      shortDesc: "High-value domain intelligence, regulatory research, financial modeling, and patent analytics powered by AI.",
      longDesc: "Supercharge your strategic knowledge workers. We pair seasoned domain veterans (finance, life sciences, legal, engineering) with deep-research LLMs to accelerate complex synthesis and risk auditing.",
      capabilities: [
        "Financial Valuation & Equity Research Modeling",
        "Clinical Trial Protocol Synthesis & Literature Review",
        "Patent Landscape Mapping & IP Analytics",
        "Global Regulatory Compliance Intelligence"
      ],
      aiMatrix: {
        replacing: "Manual first-draft desk research, document extraction, and raw data compilation",
        changing: "Domain analysts focus on deep nuance, thesis verification, and strategic synthesis",
        rising: "Domain validation specialists, chief research partners, and IP strategists",
        metric: "4x Research Throughput",
        metricLabel: "Capacity gain in complex investigative analysis"
      },
      methodology: ["Scope Taxonomy Formulation", "Semantic RAG Ingestion", "Expert Peer Validation", "Executive Intelligence Delivery"],
      tools: ["Bloomberg Terminal", "PitchBook", "Custom RAG Engines", "Elicit", "PubMed AI"],
      stat: "99.4% accuracy benchmark in legal/clinical audits"
    },
    {
      id: "bpm-services",
      pillarId: "business-ops",
      title: "Business Process Management (BPM)",
      slug: "bpm-services",
      shortDesc: "Dynamic process re-engineering, process mining, and event-driven adaptive enterprise orchestration.",
      longDesc: "Eliminate enterprise gridlock. Our BPM practice continuously maps actual execution paths across disparate ERP and CRM silos, using process mining and agentic automation to collapse cycle times.",
      capabilities: [
        "Continuous AI Process Mining & Gap Discovery",
        "Dynamic Process Choreography & Orchestration",
        "Zero-Waste Lean Digital Re-Engineering",
        "Enterprise System Event Mesh Architecture"
      ],
      aiMatrix: {
        replacing: "Static hand-drawn Visio workflows and brittle multi-week approval cycles",
        changing: "Processes adaptively re-route around bottlenecks using real-time predictive simulation",
        rising: "Enterprise process architects, workflow designers, and change catalysts",
        metric: "60% Cycle Time Compression",
        metricLabel: "Reduction in end-to-end process turnaround"
      },
      methodology: ["Digital Footprint Mining", "Lean Bottleneck Elimination", "Automated Policy Enforcement", "Continuous Optimization"],
      tools: ["Appian", "Pega GenAI", "Signavio", "Camunda 8"],
      stat: "$32M cumulative client process waste eliminated"
    },
    {
      id: "cloud-services",
      pillarId: "cloud-infra",
      title: "Cloud Services (Migration, Platform & FinOps)",
      slug: "cloud-services",
      shortDesc: "Secure multi-cloud landing zones, cloud-native modernization, Kubernetes orchestration, and AI-driven FinOps.",
      longDesc: "Build your sovereign cloud foundation. We modernize monolithic infrastructure into elastic, secure, and cost-efficient cloud architectures across AWS, Microsoft Azure, and Google Cloud Platform.",
      capabilities: [
        "AI-Automated Monolith-to-Cloud Migration",
        "Enterprise Kubernetes & Service Mesh (EKS/AKS/GKE)",
        "FinOps Cost Optimization & Waste Elimination",
        "Multi-Cloud Disaster Recovery & Sovereign Architecture"
      ],
      aiMatrix: {
        replacing: "Manual server provisioning, static runbook patching, and unmanaged cloud sprawl",
        changing: "Infrastructure-as-Code synthesized and managed dynamically with automated FinOps rightsizing",
        rising: "Cloud platform engineers, FinOps financial architects, and resilience engineers",
        metric: "38% Average Cloud Spend Reduction",
        metricLabel: "Cost reduction delivered with 0% downtime"
      },
      methodology: ["Cloud Maturity Assessment", "Automated Landing Zone IaC", "Phased Migration Wave", "FinOps & Day-2 SRE Operations"],
      tools: ["Terraform", "Kubernetes", "AWS", "Azure", "GCP", "Karpenter", "Harness"],
      stat: "Zero unbudgeted cost overruns across all managed estates"
    },
    {
      id: "networking",
      pillarId: "cloud-infra",
      title: "Networking & Network Solutions and Services",
      slug: "networking-services",
      shortDesc: "Software-defined networking (SD-WAN), intent-based self-managing fabrics, edge networks, and SASE.",
      longDesc: "Unify campus, branch, data center, and cloud connectivity. We design software-defined, zero-trust network architectures that autonomously re-route traffic and proactively defend perimeters.",
      capabilities: [
        "SD-WAN & SASE (Secure Access Service Edge) Rollouts",
        "Intent-Based Network Automation (IBN)",
        "Predictive Wireless & Campus AI Telemetry",
        "Multi-Cloud Transit Mesh & Edge Compute Connectivity"
      ],
      aiMatrix: {
        replacing: "Manual CLI switch configurations, static routing tables, and reactive troubleshooting",
        changing: "Self-optimizing networks configure dynamically based on real-time application intent",
        rising: "Network reliability engineers (NRE) and automated connectivity orchestrators",
        metric: "80% Fewer Configuration Faults",
        metricLabel: "Drop in outages attributed to human error"
      },
      methodology: ["Topology Discovery", "Zero-Trust Architecture", "Automated Rollout Pipeline", "AIOps Telemetry Assurance"],
      tools: ["Cisco Catalyst / Meraki", "Aruba Central", "Juniper Mist AI", "Fortinet SASE"],
      stat: "99.999% SLA availability for critical transit links"
    },
    {
      id: "cybersecurity-qe",
      pillarId: "cloud-infra",
      title: "Cybersecurity & Quality Engineering",
      slug: "cybersecurity-qe",
      shortDesc: "Autonomous MDR, GenAI red teaming, zero-trust threat modeling, and AI-driven autonomous test suites.",
      longDesc: "Bulletproof your enterprise against sophisticated attack vectors while shipping flawless software. We blend AI-powered continuous threat hunting with autonomous QA regression suites.",
      capabilities: [
        "24/7 Managed Detection & Autonomous Incident Response (MDR/XDR)",
        "AI Red Teaming & GenAI Security Guardrails (OWASP Top 10 for LLMs)",
        "Autonomous Quality Engineering & Synthetic Test Generation",
        "Zero-Trust Identity & Access Management (IAM/PAM)"
      ],
      aiMatrix: {
        replacing: "Manual test case authoring, alert fatigue triage, and slow annual penetration audits",
        changing: "Continuous autonomous threat hunting and self-healing test automation scripts",
        rising: "AI red teamers, DevSecOps strategists, and cyber resilience commanders",
        metric: "92% Autonomous Test Coverage",
        metricLabel: "Regression verification completed in minutes"
      },
      methodology: ["Threat Surface Map", "Zero-Trust Implementation", "Automated Test Pipeline", "24/7 AI-Backed SOC"],
      tools: ["CrowdStrike", "SentinelOne", "Palo Alto Networks", "Playwright AI", "Snyk"],
      stat: "0 breach incidents across managed security estates"
    },
    {
      id: "app-modernization",
      pillarId: "engineering",
      title: "Application Development & Modernization",
      slug: "app-modernization",
      shortDesc: "Cloud-native microservices, legacy mainframe refactoring, API-first ecosystems, and AI dev tools.",
      longDesc: "Transform core software from legacy liability to dynamic innovation accelerator. We refactor monolithic codebases into reactive microservices using AI code conversion and modern CI/CD.",
      capabilities: [
        "AI-Assisted Legacy Code Translation (COBOL/Java/C# to Modern Cloud)",
        "Cloud-Native Microservices & Event-Driven APIs (gRPC/GraphQL/REST)",
        "Modern Frontend Architecture (Progressive Web, Responsive Mobile)",
        "Continuous Delivery Pipelines with Autonomous Quality Gates"
      ],
      aiMatrix: {
        replacing: "Repetitive boilerplate coding, manual documentation, and high-risk manual migrations",
        changing: "Developers pair with AI copilots for accelerated refactoring, unit tests, and design reviews",
        rising: "Principal solution architects, prompt engineers, and product systems leads",
        metric: "45% Faster Sprint Velocity",
        metricLabel: "Time-to-market reduction for new digital features"
      },
      methodology: ["Codebase Static Graphing", "Domain-Driven Microservices Split", "AI-Augmented Sprint Waves", "Zero-Downtime Cutover"],
      tools: ["Node.js", "TypeScript", "Go", "Docker", "GitHub Copilot Enterprise", "PostgreSQL"],
      stat: "100% test coverage with automated unit generation"
    },
    {
      id: "enterprise-solutions",
      pillarId: "engineering",
      title: "Enterprise Solutions (ERP, CRM & Copilots)",
      slug: "enterprise-solutions",
      shortDesc: "SAP S/4HANA transformations, Microsoft Dynamics 365 copilots, Salesforce modernization, and integrations.",
      longDesc: "Elevate your core business backbone. We modernize legacy ERP and CRM platforms by embedding intelligent copilot workflows directly into everyday business execution.",
      capabilities: [
        "SAP S/4HANA Clean Core Migration & Automation",
        "Microsoft Dynamics 365 & Power Platform Copilot Extension",
        "Salesforce Multi-Cloud Modernization & Data Cloud Sync",
        "Enterprise Service Bus & Real-Time Sync Connectors"
      ],
      aiMatrix: {
        replacing: "Fragile point-to-point custom code and endless manual data reconciliation across ERPs",
        changing: "Users interact with ERP/CRM via natural language conversational assistants that execute complex queries",
        rising: "Business transformation consultants, workflow strategists, and functional integration leads",
        metric: "50% Accelerated Time-to-Value",
        metricLabel: "Faster realization of ERP ROI and user adoption"
      },
      methodology: ["Value Stream Discovery", "Clean Core Strategy", "AI Integration Layer", "User Adoption Academy"],
      tools: ["SAP S/4HANA", "Microsoft Copilot Studio", "Salesforce Data Cloud", "MuleSoft"],
      stat: "35% reduction in annual ERP maintenance costs"
    },
    {
      id: "iot-digital-engineering",
      pillarId: "engineering",
      title: "IoT and Digital Engineering",
      slug: "iot-digital-engineering",
      shortDesc: "Industrial IoT (IIoT), digital twin modeling, smart factory telematics, and computer vision edge AI.",
      longDesc: "Bridge the physical and digital divide. We engineer rugged edge devices, build live digital twin simulations of physical assets, and deploy real-time predictive maintenance models.",
      capabilities: [
        "Edge AI Telemetry & Vision Inspection for Manufacturing",
        "High-Fidelity Real-Time Digital Twin Simulation",
        "Smart Fleet, Asset Tracking & Predictive Telematics",
        "Industrial SCADA / OT to Cloud Secure Data Gateways"
      ],
      aiMatrix: {
        replacing: "Manual clipboard inspections, calendar-based machine servicing, and physical defect sorting",
        changing: "Industrial machinery monitored continuously with digital twins and real-time edge computer vision",
        rising: "Digital twin systems engineers, OT security leads, and predictive analytics directors",
        metric: "30% Lower Unplanned Downtime",
        metricLabel: "Drop in factory floor failures and machine idle hours"
      },
      methodology: ["OT/IT Sensor Audit", "Edge Compute Deployment", "Digital Twin Calibration", "Closed-Loop Control"],
      tools: ["Azure IoT Operations", "AWS IoT Core", "NVIDIA Isaac", "TensorFlow Lite", "MQTT"],
      stat: "$14M in prevented equipment failure damages"
    },
    {
      id: "consulting-tech",
      pillarId: "advisory",
      title: "Consulting / Management & Tech Consulting",
      slug: "consulting-tech",
      shortDesc: "C-suite technology advisory, operating model design, AI transformation roadmaps, and M&A tech diligence.",
      longDesc: "Chart your enterprise destiny with total clarity. We provide board-level technology roadmaps, cost-takeout blueprints, and pragmatic AI execution strategies that convert vision into EBIT impact.",
      capabilities: [
        "Board-Level Generative AI Roadmap & Strategic Playbook",
        "Digital Operating Model & Agile Re-Organization",
        "Technology Due Diligence for Mergers & Acquisitions",
        "IT Cost Optimization & Rationalization Strategy"
      ],
      aiMatrix: {
        replacing: "Slide-heavy, weeks-long desk research and static multi-year waterfall roadmaps",
        changing: "Strategy formulated dynamically using AI synthesis of competitor data and internal telemetrics",
        rising: "Trusted enterprise board advisors, change catalysts, and executive sponsors",
        metric: "3x Faster Strategic Execution",
        metricLabel: "Velocity boost from strategy formulation to execution"
      },
      methodology: ["Executive Discovery & Hypothesis", "Data & Capability Benchmarking", "Target Operating Model Blueprint", "Executive Governance Hand-off"],
      tools: ["Gartner Benchmarks", "Custom Strategy LLMs", "Tableau", "Miro Enterprise"],
      stat: "100+ Enterprise C-suite advisory engagements led"
    },
    {
      id: "sustainability-services",
      pillarId: "advisory",
      title: "Sustainability Services (ESG & Green Tech)",
      slug: "sustainability-services",
      shortDesc: "Automated Scope 1-3 carbon accounting, green cloud data center optimization, and circular economy tracking.",
      longDesc: "Turn ESG compliance into enterprise value. We help global organizations measure, reduce, and report their environmental footprint across complex multi-tier supply chains and cloud estates.",
      capabilities: [
        "Automated Scope 1, 2, and 3 Carbon Footprint Auditing",
        "Green Software Engineering & Cloud Carbon Footprint Rightsizing",
        "Circular Supply Chain & Lifecycle Traceability",
        "Global ESG Disclosure Compliance (CSRD, SEC, BRSR, ISSB)"
      ],
      aiMatrix: {
        replacing: "Manual annual spreadsheet ESG audits, slow data collection, and estimated emission metrics",
        changing: "Continuous real-time telemetry of emissions across data centers, facilities, and supply chains",
        rising: "Chief sustainability strategists, green cloud architects, and ESG compliance officers",
        metric: "100% Auditable ESG Reporting",
        metricLabel: "Transparent compliance across global CSRD/BRSR frameworks"
      },
      methodology: ["Baseline Carbon Assessment", "Telemetry & Sensor Integration", "Reduction Roadmap Execution", "Automated Regulatory Reporting"],
      tools: ["Microsoft Sustainability Manager", "Salesforce Net Zero Cloud", "Custom Carbon APIs", "Kepler"],
      stat: "340,000+ metric tonnes CO2e eliminated for clients"
    }
  ],

  caseStudies: [
    {
      id: "cs-1",
      title: "Global Tier-1 Investment Bank",
      pillar: "ai-data",
      service: "AI & Data & Analytics",
      industry: "BFSI",
      summary: "Autonomous Trade Reconciliation & Real-Time Fraud Shield using RAG & Multi-Agent Verification.",
      metricValue: "78%",
      metricLabel: "Drop in manual reconciliation bottlenecks",
      badge: "$42M Annual Savings",
      challenge: "Processing over 4 million daily complex cross-border derivatives across 14 fragmented legacy ledgers with unacceptable latency and manual error exposure.",
      solution: "Alisil deployed a distributed multi-agent verification mesh coupled with real-time vector embeddings, allowing instantaneous reconciliation and sub-millisecond fraud pattern interception.",
      results: [
        "Reconciliation cycle compressed from 6 hours to 4 minutes",
        "False positive alerts reduced by 84%",
        "100% regulatory compliance with FINRA and MiFID II audits"
      ]
    },
    {
      id: "cs-2",
      title: "Fortune 50 Healthcare Payer",
      pillar: "business-ops",
      service: "Cognitive Business Operations",
      industry: "Healthcare & Life Sciences",
      summary: "AI-Powered Autonomous Claims Adjudication & Prior Authorization Pipeline.",
      metricValue: "65%",
      metricLabel: "Claims adjudicated in real-time with zero human intervention",
      badge: "HIPAA Compliant",
      challenge: "Burgeoning claims volume causing a 14-day backlog in critical prior authorizations and high provider friction.",
      solution: "Implemented cognitive document models trained on medical coding standards that validate treatment criteria and clinical notes autonomously with strict doctor-in-the-loop escalation.",
      results: [
        "Prior authorization decision latency dropped from 14 days to under 90 seconds",
        "Admin overhead reduced by $18.5M annually",
        "Provider satisfaction score jumped from 61 to 94 NPS"
      ]
    },
    {
      id: "cs-3",
      title: "Global Automotive OEM",
      pillar: "engineering",
      service: "IoT & Digital Engineering",
      industry: "Manufacturing",
      summary: "Industrial Digital Twin & Computer Vision Edge Inspection across 6 Global Assembly Plants.",
      metricValue: "34%",
      metricLabel: "Reduction in unplanned factory floor downtime",
      badge: "Zero Defect Goal",
      challenge: "High cost of intermittent tooling failures and human fatigue in high-speed micro-defect spot welding inspections.",
      solution: "Architected edge AI cameras with sub-5ms inference on NVIDIA Jetson arrays, synchronized with a real-time cloud digital twin simulating robot wear-and-tear.",
      results: [
        "Defect escape rate reduced to under 3 parts per million",
        "Unplanned robot downtime dropped by 34%",
        "Saved $22M in warranty claims during the first production cycle"
      ]
    },
    {
      id: "cs-4",
      title: "Pan-European Telecom Operator",
      pillar: "cloud-infra",
      service: "Networking & Cloud Services",
      industry: "Telecom & Media",
      summary: "Intent-Based Self-Healing 5G Core Network & Hybrid Multi-Cloud SASE Rollout.",
      metricValue: "99.999%",
      metricLabel: "Core packet uptime across 25M subscribers",
      badge: "Zero-Trust Core",
      challenge: "Managing massive 5G data surges while securing 12,000 edge cell towers against sophisticated DDoS and spoofing attacks.",
      solution: "Constructed an automated intent-based software-defined networking mesh with automated telemetry rerouting and SASE edge encryption.",
      results: [
        "Network incident MTTR plunged by 72%",
        "Configuration errors decreased by 88%",
        "Energy consumption at edge base stations dropped by 19%"
      ]
    },
    {
      id: "cs-5",
      title: "Multinational Retail Omnichannel Giant",
      pillar: "engineering",
      service: "Enterprise Solutions & App Modernization",
      industry: "Retail & E-commerce",
      summary: "Monolith-to-Microservices Modernization & Generative AI In-Store Inventory Copilot.",
      metricValue: "3.2x",
      metricLabel: "Black Friday checkout throughput surge capacity",
      badge: "45M Active Shoppers",
      challenge: "A 12-year-old monolithic commerce engine collapsing under peak holiday sales loads with high cart abandonment.",
      solution: "Refactored checkout and inventory systems into event-driven Go/TypeScript microservices with real-time stock sync and store associate AI assistants.",
      results: [
        "Zero downtime during record peak traffic surge",
        "Store associate inventory lookups sped up from 3 mins to 4 seconds",
        "Checkout conversion improved by 18.2%"
      ]
    },
    {
      id: "cs-6",
      title: "Global Logistics & Freight Leader",
      pillar: "advisory",
      service: "Sustainability Services & BPM",
      industry: "Energy & Utilities",
      summary: "Automated Scope 1-3 Fleet Emission Telemetry and Green Route Optimization.",
      metricValue: "18.4%",
      metricLabel: "Total fleet carbon emissions curtailed",
      badge: "Scope 1-3 Verified",
      challenge: "Severe EU CSRD compliance penalties looming and manual spreadsheet tracking across 18,000 contracted multi-modal carriers.",
      solution: "Integrated real-time IoT fuel telematics, weather APIs, and automated ESG ledger verification to dynamically route trucks along low-emission corridors.",
      results: [
        "Over 92,000 metric tons of carbon emissions eliminated in Year 1",
        "Fuel expenditures decreased by $14.2M",
        "Passed international auditor verification with 0 findings"
      ]
    }
  ],

  industries: [
    {
      id: "bfsi",
      name: "Banking, Financial Services & Insurance (BFSI)",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="21" x2="21" y2="21"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M5 10v11"/><path d="M19 10v11"/><path d="M10 10v11"/><path d="M14 10v11"/><polygon points="12 2 20 7 4 7 12 2"/></svg>`,
      headline: "Resilient, Compliant, Sub-Millisecond Financial Systems",
      desc: "Empowering global banks, hedge funds, insurers, and fintech innovators to modernize legacy cores, prevent sophisticated financial crime with AI, and achieve strict compliance with Basel IV, SOC 2, and PCI-DSS.",
      solutions: ["Real-time fraud prevention", "AI algorithmic trading telemetry", "Automated loan & mortgage underwriting", "Modern open banking APIs"],
      metric: "84% reduction in manual verification backlog"
    },
    {
      id: "healthcare",
      name: "Healthcare & Life Sciences",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5v14"/><path d="M5 12h14"/></svg>`,
      headline: "Human-Centric Patient Care Powered by Secure Clinical AI",
      desc: "Bridging the gap between patient care and clinical operations. We engineer HIPAA and GDPR compliant health platforms, accelerate clinical trials with semantic data mining, and automate prior authorizations.",
      solutions: ["HIPAA-compliant generative clinical summarization", "Medical image computer vision diagnosis", "Prior authorization automation", "Secure EHR/FHIR interoperability"],
      metric: "90-second prior authorization approvals"
    },
    {
      id: "manufacturing",
      name: "Manufacturing & Industrial",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
      headline: "Smart Industry 4.0 Factories & Connected Supply Chains",
      desc: "Transforming factory floors into self-monitoring, agile production networks. We blend edge sensors, digital twins, and predictive maintenance algorithms to eliminate unplanned machine stoppages.",
      solutions: ["Edge computer vision quality control", "Supply chain digital twins", "Predictive maintenance SRE", "Robotics automation telemetry"],
      metric: "30% decrease in unplanned assembly downtime"
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
      headline: "Hyper-Personalized Omnichannel Customer Journeys",
      desc: "Converting visits into lifelong brand loyalty. We modernize legacy e-commerce platforms into headless, lightning-fast microservices with embedded conversational shopping copilots and dynamic pricing engines.",
      solutions: ["Real-time personalized recommendation engines", "Store inventory smart copilots", "Headless high-concurrency checkouts", "Dynamic margin & pricing AI"],
      metric: "18.2% conversion rate increase"
    },
    {
      id: "telecom",
      name: "Telecom & Media",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/><line x1="2" y1="20" x2="2.01" y2="20"/></svg>`,
      headline: "Autonomous 5G Networks, Edge Streaming & Next-Gen CX",
      desc: "Supporting the modern hyper-connected world. We empower telco operators to deploy intent-driven network orchestration, slash subscriber churn with AI predictive analytics, and deploy low-latency edge applications.",
      solutions: ["5G network slicing & automation", "Autonomous subscriber retention modeling", "SASE zero-trust edge fabrics", "AI customer care routing"],
      metric: "99.999% critical core transit SLA"
    },
    {
      id: "energy",
      name: "Energy & Utilities",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      headline: "Clean Grid Modernization, Asset Monitoring & ESG Transition",
      desc: "Accelerating the transition to sustainable energy infrastructure. We deploy IoT sensor meshes across power grids, renewable wind/solar parks, and pipeline networks to maximize distribution efficiency.",
      solutions: ["Smart grid load forecasting", "Renewable asset health telemetry", "Pipeline anomaly computer vision", "Automated Scope 1-3 carbon audits"],
      metric: "340K+ metric tonnes carbon offset"
    },
    {
      id: "public-sector",
      name: "Public Sector & Government",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      headline: "Sovereign Citizen Services & Trusted Cyber Defense",
      desc: "Empowering state, national, and civic institutions with sovereign cloud architecture, accessible multi-lingual citizen portals, and military-grade cyber threat defense.",
      solutions: ["Sovereign zero-trust cloud landing zones", "Accessible citizen grievance AI portals", "Secure defense-grade credentialing", "Public health predictive analytics"],
      metric: "100% data sovereignty & regulatory compliance"
    }
  ],

  insights: [
    {
      id: "insight-1",
      title: "The Agentic Enterprise: Why 2026 is the Death of Scripted Automation",
      category: "Whitepaper",
      tag: "Generative AI",
      readTime: "9 min read",
      date: "Nov 2026",
      summary: "A deep dive into why static RPA workflows are failing under scale, and how autonomous agentic frameworks with self-healing feedback loops deliver 4x higher ROI.",
      author: "Chief AI Strategist, Alisil Research",
      gated: true
    },
    {
      id: "insight-2",
      title: "FinOps 3.0: Eradicating Uncontrolled Cloud Sprawl with Autonomous Rightsizing",
      category: "Research Report",
      tag: "Cloud & FinOps",
      readTime: "12 min read",
      date: "Oct 2026",
      summary: "Our benchmark study of 120 global enterprises reveals how automated Kubernetes scheduling and AI-informed spot instance arbitration cuts average cloud spend by 38%.",
      author: "VP of Cloud Architecture",
      gated: true
    },
    {
      id: "insight-3",
      title: "Securing the Generative Core: OWASP Top 10 for LLMs in Enterprise Deployments",
      category: "Technical Perspective",
      tag: "Cybersecurity",
      readTime: "7 min read",
      date: "Oct 2026",
      summary: "A practical security handbook on guarding against prompt injection, model inversion, poisoned training weights, and insecure output handling in enterprise RAG pipelines.",
      author: "Director of Cyber Defense",
      gated: false
    },
    {
      id: "insight-4",
      title: "The Scope 3 Dilemma: Building Auditable Multi-Tier Supply Chain Carbon Telemetry",
      category: "Executive Brief",
      tag: "Sustainability",
      readTime: "8 min read",
      date: "Sep 2026",
      summary: "Navigating EU CSRD and Indian BRSR mandates through automated IoT sensor aggregation, avoiding multi-million dollar regulatory penalties.",
      author: "Head of ESG Solutions",
      gated: true
    },
    {
      id: "insight-5",
      title: "From Mainframe to Microservices: Safe Legacy Refactoring using AI Code Transpilers",
      category: "Case Insight",
      tag: "Engineering",
      readTime: "10 min read",
      date: "Aug 2026",
      summary: "How an international insurer migrated 4.2 million lines of legacy COBOL to cloud-native Go microservices in under 9 months with zero operational disruption.",
      author: "Principal Systems Architect",
      gated: false
    },
    {
      id: "insight-6",
      title: "Human + Machine Harmony: Managing the Talent Transition in an AI-First World",
      category: "Leadership Guide",
      tag: "Advisory",
      readTime: "6 min read",
      date: "Jul 2026",
      summary: "Actionable frameworks for CEOs and CHROs to reskill workforces, elevate employee dignity, and transition knowledge workers into strategic supervisors of AI systems.",
      author: "Managing Director, Advisory Practice",
      gated: false
    }
  ],

  offices: [
    {
      city: "Kolkata",
      role: "Corporate Office & Registered Headquarters",
      badge: "Office Address",
      address: "CHARAKTALA, JOKA, P.O, Rasapunja, Kolkata, West Bengal 700104, India",
      street: "CHARAKTALA, JOKA, P.O, Rasapunja",
      locality: "Kolkata",
      region: "West Bengal",
      postalCode: "700104",
      country: "India",
      phone: "+91 98741 99630",
      phoneRaw: "919874199630",
      email: "Alisiltechnology@gmail.com",
      coords: "22.4515° N, 88.2917° E"
    },
    {
      city: "Bangalore",
      role: "Global Headquarters & AI Innovation Lab",
      badge: "Global HQ",
      address: "Alisil Tech Park, Outer Ring Road, Bellandur, Bangalore 560103, India",
      street: "Alisil Tech Park, Outer Ring Road, Bellandur",
      locality: "Bangalore",
      region: "Karnataka",
      postalCode: "560103",
      country: "India",
      phone: "+91 80 4920 8800",
      phoneRaw: "918049208800",
      email: "Alisiltechnology@gmail.com",
      coords: "12.9352° N, 77.6946° E"
    },
    {
      city: "Sunnyvale (Silicon Valley)",
      role: "Americas Enterprise Solutions Center",
      address: "440 N Bernardo Ave, Sunnyvale, CA 94085, United States",
      phone: "+1 (408) 555-0199",
      email: "Alisiltechnology@gmail.com",
      coords: "37.3861° N, 122.0839° W"
    },
    {
      city: "London",
      role: "EMEA Advisory & FinTech Hub",
      address: "30 St Mary Axe (The Gherkin), London EC3A 8EP, United Kingdom",
      phone: "+44 20 7946 0912",
      email: "Alisiltechnology@gmail.com",
      coords: "51.5145° N, 0.0803° W"
    },
    {
      city: "Singapore",
      role: "Asia-Pacific Digital Operations",
      address: "Marina Bay Financial Centre, Tower 2, Singapore 018983",
      phone: "+65 6789 0123",
      email: "Alisiltechnology@gmail.com",
      coords: "1.2796° N, 103.8536° E"
    },
    {
      city: "Frankfurt",
      role: "Continental Europe & ESG Hub",
      address: "Taunusanlage 8, 60329 Frankfurt am Main, Germany",
      phone: "+49 69 1234 5678",
      email: "Alisiltechnology@gmail.com",
      coords: "50.1109° N, 8.6821° E"
    }
  ],

  leadership: [
    {
      name: "Dr. Rajesh V. Raman",
      role: "Chief Executive Officer & Co-Founder",
      bio: "25+ years spearheading global technology transformations across Silicon Valley and Asia. Former enterprise VP at Fortune 10 tech firm with patents in distributed AI consensus.",
      image: "assets/leader-1.svg"
    },
    {
      name: "Elena Rostova",
      role: "Chief Technology Officer",
      bio: "Pioneered early generative RAG architectures for high-frequency financial platforms. PhD in Computer Science from ETH Zurich.",
      image: "assets/leader-2.svg"
    },
    {
      name: "Marcus Vance",
      role: "Chief Operating Officer",
      bio: "Oversees Alisil's 5,000+ engineers across 40 countries. Expert in agile scaling, zero-trust cybersecurity operations, and lean enterprise BPO modernizations.",
      image: "assets/leader-3.svg"
    },
    {
      name: "Ananya Deshmukh",
      role: "Chief Sustainability & Strategy Officer",
      bio: "Member of the World Economic Forum ESG Working Group. Architects circular economy roadmaps and green cloud strategies for multinational corporations.",
      image: "assets/leader-4.svg"
    }
  ],

  careers: [
    {
      id: "job-1",
      title: "Senior AI Systems Architect (Multi-Agent Systems)",
      department: "AI & Data Engineering",
      location: "Bangalore / Remote",
      type: "Full-Time",
      experience: "7+ years",
      desc: "Design and implement production-grade autonomous agent networks with real-time vector search, LangGraph, and enterprise safety guardrails."
    },
    {
      id: "job-2",
      title: "Principal Cloud Platform & SRE Engineer",
      department: "Cloud & Infrastructure",
      location: "Sunnyvale, CA / Hybrid",
      type: "Full-Time",
      experience: "8+ years",
      desc: "Architect multi-cloud landing zones, automated Kubernetes self-healing operators, and zero-trust SASE meshes for global banking clients."
    },
    {
      id: "job-3",
      title: "AI Red Team & Cyber Resilience Lead",
      department: "Cybersecurity & QE",
      location: "London / Remote",
      type: "Full-Time",
      experience: "5+ years",
      desc: "Conduct adversarial vulnerability assessments, prompt injection testing, and automated security verification against enterprise foundation models."
    },
    {
      id: "job-4",
      title: "Enterprise Solutions Copilot Specialist (SAP / Dynamics)",
      department: "Engineering & Applications",
      location: "Frankfurt / Hybrid",
      type: "Full-Time",
      experience: "6+ years",
      desc: "Integrate generative copilots and conversational workflow engines into core ERP and CRM enterprise business backbones."
    },
    {
      id: "job-5",
      title: "ESG & Carbon Accounting Data Engineer",
      department: "Advisory & Sustainability",
      location: "Bangalore / Hybrid",
      type: "Full-Time",
      experience: "4+ years",
      desc: "Build automated Scope 1-3 greenhouse gas telemetry pipelines integrating IoT, cloud data lakes, and supply chain APIs for CSRD auditing."
    },
    {
      id: "job-6",
      title: "Process Intelligence Lead (Cognitive Operations)",
      department: "Business Operations",
      location: "Singapore / Hybrid",
      type: "Full-Time",
      experience: "5+ years",
      desc: "Deploy Celonis process mining and agentic automation pipelines to eliminate operational bottlenecks across global banking and logistics estates."
    }
  ],

  getSchema: function(type = 'auto') {
    const company = this.company || {};
    const offices = this.offices || [];
    const kolkata = offices.find(o => o.city === 'Kolkata') || {};

    const baseOrg = {
      "@type": "Organization",
      "@id": `${company.url || "https://alisiltechnology.in"}/#organization`,
      "name": company.fullName || company.name || "Alisil Technology",
      "url": company.url || "https://alisiltechnology.in",
      "logo": `${company.url || "https://alisiltechnology.in"}/assets/logo-full.svg`,
      "email": company.email || "Alisiltechnology@gmail.com",
      "telephone": company.phone || "+91 98741 99630",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": kolkata.street || company.officeAddress || "CHARAKTALA, JOKA, P.O, Rasapunja",
        "addressLocality": kolkata.locality || "Kolkata",
        "addressRegion": kolkata.region || "West Bengal",
        "postalCode": kolkata.postalCode || "700104",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": company.phone || "+91 98741 99630",
        "email": company.email || "Alisiltechnology@gmail.com",
        "contactType": "Enterprise Sales & Consultation",
        "availableLanguage": ["English", "Hindi", "Bengali"]
      },
      "sameAs": [
        company.url || "https://alisiltechnology.in"
      ]
    };

    if (type === 'contact') {
      return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": baseOrg
      };
    }

    if (type === 'about') {
      return {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": baseOrg
      };
    }

    return {
      "@context": "https://schema.org",
      "@graph": [
        baseOrg,
        {
          "@type": "WebSite",
          "@id": `${company.url || "https://alisiltechnology.in"}/#website`,
          "url": company.url || "https://alisiltechnology.in",
          "name": company.name || "Alisil Technology",
          "publisher": { "@id": `${company.url || "https://alisiltechnology.in"}/#organization` }
        }
      ]
    };
  }
};

// Export to window for global browser access
if (typeof window !== "undefined") {
  window.ALISIL_DATA = ALISIL_DATA;
}
