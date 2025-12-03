export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  metrics: Array<{ label: string; value: string }>;
  client?: string;
  problem?: string;
  constraints?: string;
  solution?: string;
  architecture?: string;
  implementation?: string;
  results?: string;
  roi?: string;
  nextSteps?: string;
  disclaimer?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "customer-support-agent",
    title: "Customer Support Agent",
    subtitle: "Multi-channel AI support for a D2C nutrition brand",
    tags: ["OpenAI", "Supabase", "n8n", "Shopify", "Zendesk", "Next.js"],
    metrics: [
      { label: "Inbound/day", value: "~220" },
      { label: "Auto-resolution", value: "64%" },
      { label: "First response (chat)", value: "9s" },
      { label: "CSAT change", value: "+12 pts" },
    ],
    client: "Mid-size direct-to-consumer supplements brand on Shopify + Zendesk",
    problem: "Average first response 2 h 40 m across channels; FAQ load buried agents during promos; backlog piled up after launches",
    constraints: "Order and health questions require strict policy and audit logs; no hallucinations on dosage or refunds; human override at any time",
    solution: "AI agent answers repetitive tickets, routes edge cases, logs every action; clear 'talk to a human' escape at any time",
    architecture: "Channels (chat, email, WhatsApp); RAG over policy docs and FAQs; Zendesk API; n8n orchestration; intent gate and tool whitelist",
    implementation: "W1 data hygiene, W2 flows for order/refund, W3 eval and rollout",
    results: "Auto-resolved 64%; first response 9s (chat) and 2m 12s (email); backlog down 65%; support cost down 38%; CSAT 4.1 → 4.6",
    roi: "22 h/day baseline; after 6.6 h/day usage; ~15.4 h/day saved ≈ $8.3k/month saved (rep)",
    nextSteps: "Returns portal integration, multilingual intents, proactive delay emails, CSAT-aware escalation",
    disclaimer: "Representative scenario; typical ranges from similar deployments",
  },
  {
    slug: "document-pipeline",
    title: "Document Processing Pipeline",
    subtitle: "Automated extraction and classification with human-in-the-loop QA",
    tags: ["Python", "FastAPI", "OCR", "Postgres", "Supabase"],
    metrics: [
      { label: "Docs/month", value: "~45k" },
      { label: "Straight-through", value: "72%" },
      { label: "Avg touch time", value: "0:45" },
      { label: "Accuracy (totals)", value: "98%" },
    ],
    client: "Regional accounting firm serving 120 SMBs",
    problem: "Manual entry 6–7 min/document; month-end spikes caused overtime",
    constraints: "PII and financial data; role-based access; data retention policies; human validation loop",
    solution: "Intake → classify → OCR → field extraction → validation UI → export",
    architecture: "S3 intake, email ingest, secure upload; PaddleOCR + LLM parsing; Next.js validation UI; Postgres metadata; Supabase storage; QuickBooks/Xero exporters",
    implementation: "Corpus labeling (2,500 docs), template + few-shot extractor, confidence routing",
    results: "~45k docs/month; touch time 6:10 → 0:45; accuracy 98% totals; cost/doc $0.75 → $0.09; overtime −82%",
    roi: "~4,050 h/month saved; at $20/h ≈ $81k/month; infra ~$11k/month; net ~$70k/month (rep)",
    nextSteps: "Line-item normalization, vendor portal, anomaly detection",
    disclaimer: "Representative scenario for portfolio demonstration",
  },
  {
    slug: "sales-setter",
    title: "Sales Setter DM Automation",
    subtitle: "Inbound DM qualification and booking that fills the closer's calendar",
    tags: ["IG API", "WhatsApp", "n8n", "OpenAI", "Calendly", "Supabase"],
    metrics: [
      { label: "Median reply", value: "12s" },
      { label: "Qualified (Fit/Aspiration)", value: "62%" },
      { label: "Triage calls/week", value: "6→18" },
      { label: "Show-up rate", value: "56%→74%" },
    ],
    client: "Business coach selling 12-week program; leads from IG/YouTube/referrals",
    problem: "DMs piled up; response time in hours; mixed lead quality; closer calendar under-filled",
    constraints: "Platform policies and consent; anti-spam triggers; on-brand tone",
    solution: "Setter bot triages inbound DMs, asks 4–6 questions, scores Fit/Aspiration/No-Fit, books triage call; No-Fit path provides resources",
    architecture: "IG Messaging API + WhatsApp Cloud API + site chat; n8n orchestration; OpenAI tone-controlled prompts; Supabase CRM-lite; Calendly + Google Calendar; Slack alerts",
    implementation: "Days 1–3 scripts/rubric/tone, Days 4–7 booking flow, Days 8–14 shadow week",
    results: "Qualified rate 62%; triage 6 → 18/week; show-up 56% → 74%; closer utilization 38% → 72%; ~9 h/week saved",
    roi: "+12 triage/week; close 30% at $1,500 ⇒ ~$5.4k/week ≈ $21.6k/month; infra ~$1.8k/month; net ~$19.8k/month (rep)",
    nextSteps: "UTM-aware prompts, multilingual flows, offer-tier routing",
    disclaimer: "Representative numbers, portfolio context",
  },
];

export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: "CRM-embedded booking agents",
    description: "AI agents that live in your CRM, qualify inbound leads, and book calls automatically. Integrates with Calendly, Cal.com, or custom booking systems.",
  },
  {
    title: "RAG systems and AI agents",
    description: "Retrieval-augmented generation systems that ground AI responses in your data. Custom agents that reason, execute tasks, and learn from outcomes.",
  },
  {
    title: "n8n workflows and platform automation",
    description: "Low-code automation workflows connecting all your tools. From data pipelines to notification systems to complex multi-step processes.",
  },
  {
    title: "Full-stack apps in Python and TypeScript",
    description: "Custom web applications, APIs, and data systems. Built for scale with modern best practices. TypeScript frontend, Python/FastAPI backend.",
  },
  {
    title: "Rapid AI consulting and implementation",
    description: "Strategic consulting on AI feasibility, architecture, and ROI. Rapid prototyping and proof-of-concept to validate ideas quickly.",
  },
];

export interface Stat {
  label: string;
  value: string;
}

export const stats: Stat[] = [
  { label: "Automations", value: "2,000+" },
  { label: "Websites", value: "50+" },
  { label: "Experience", value: "5 yrs" },
];

export interface StackItem {
  name: string;
  category: string;
  usage: string;
}

export const stack: StackItem[] = [
  {
    name: "Python",
    category: "Language",
    usage: "Backend services, data processing, ML pipelines",
  },
  {
    name: "TypeScript",
    category: "Language",
    usage: "Frontend and full-stack development with type safety",
  },
  {
    name: "Next.js",
    category: "Framework",
    usage: "Web applications, API routes, and static generation",
  },
  {
    name: "React",
    category: "Framework",
    usage: "Interactive UIs with component-driven architecture",
  },
  {
    name: "Node.js",
    category: "Runtime",
    usage: "Server-side JavaScript execution",
  },
  {
    name: "n8n",
    category: "Automation",
    usage: "Low-code workflow automation and integrations",
  },
  {
    name: "Supabase",
    category: "Database",
    usage: "Managed PostgreSQL with real-time and auth",
  },
  {
    name: "Postgres",
    category: "Database",
    usage: "Robust relational database for complex queries",
  },
  {
    name: "LangChain",
    category: "AI",
    usage: "LLM chains, RAG pipelines, and agent frameworks",
  },
  {
    name: "OpenAI",
    category: "AI",
    usage: "GPT models for NLU, generation, and embeddings",
  },
  {
    name: "Whisper",
    category: "AI",
    usage: "Speech-to-text for voice-based automation",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    usage: "Utility-first CSS for rapid, responsive design",
  },
  {
    name: "shadcn/ui",
    category: "Components",
    usage: "Accessible, unstyled React components",
  },
  {
    name: "Framer Motion",
    category: "Animation",
    usage: "Smooth, declarative animations and gestures",
  },
];

export interface Certificate {
  name: string;
}

export const certificates: Certificate[] = [
  { name: "Harvard — CS50's (CS50 AI)" },
  { name: "Google Cloud Skills Boost — Generative AI Path" },
  { name: "IBM SkillsBuild — Artificial Intelligence Fundamentals" },
  { name: "NVIDIA DLI — Getting Started with AI on Jetson Nano" },
  { name: "Great Learning Academy — Introduction to Neural Networks" },
  { name: "AWS Skill Builder — Cloud Quest: Generative AI Practitioner" },
  { name: "Business Administration Diploma" },
  { name: "Business English Certificate" },
  { name: "Project Management Diploma" },
  { name: "Marketing Management Diploma" },
  { name: "Human Resources Diploma" },
  { name: "TESOL Skills Course" },
  { name: "Corporate Trainer Certified (CTC)" },
];
