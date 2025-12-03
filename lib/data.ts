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
    subtitle: "Multi-channel AI support for D2C nutrition brand",
    tags: ["OpenAI", "Supabase", "n8n", "Shopify", "Zendesk", "Next.js"],
    metrics: [
      { label: "Inbound/day", value: "~220" },
      { label: "Auto-resolution", value: "64%" },
      { label: "First response (chat)", value: "9s" },
      { label: "CSAT improvement", value: "+12 pts" },
    ],
    client: "D2C nutrition brand",
    problem:
      "High volume of customer inquiries across multiple channels (email, chat, social media) overwhelming support team. Manual triage and response delays leading to poor customer experience.",
    constraints:
      "Limited support budget. Need to handle peak loads without hiring. Maintain brand voice and quality. Integration with existing Shopify and Zendesk systems.",
    solution:
      "Built multi-channel AI agent using OpenAI that ingests product knowledge base and order history. Agent routes complex issues to humans, handles common FAQs, and proactively reaches out.",
    architecture:
      "Next.js frontend for customer-facing chat. n8n workflows orchestrate channel ingestion (email, SMS, social). Supabase PostgreSQL stores conversation history and product data. OpenAI API handles NLU and response generation.",
    implementation:
      "3-week deployment. Integrated with Shopify product catalog and Zendesk. Built knowledge ingestion pipeline. Set up monitoring and alerting for edge cases.",
    results:
      "Reduced support load by 64%. Average response time dropped to 9 seconds. CSAT increased by 12 points. Support team now focuses on complex issues and relationship building.",
    roi: "ROI payback within 2 months. 30% reduction in support overhead. Increased customer lifetime value by improved response times.",
    nextSteps:
      "Expand to proactive outreach. Add sentiment analysis. Integrate with additional channels. Build predictive support (reach out before customer asks).",
    disclaimer:
      "Results are representative of the specific deployment. Actual outcomes depend on product complexity, volume, and implementation depth.",
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
      { label: "Accuracy", value: "98%" },
    ],
    client: "Financial services firm",
    problem:
      "Manual document processing bottleneck. 45k documents monthly requiring classification, data extraction, and validation. High error rates and slow turnaround.",
    constraints:
      "Regulatory compliance requirements. Data sensitivity. Need human review for edge cases. Accuracy critical for downstream systems.",
    solution:
      "Built end-to-end pipeline: OCR + document classification + field extraction + human review queue. 72% straight-through processing, remaining 28% routed to analysts.",
    architecture:
      "Python FastAPI backend processing documents. Supabase for data storage and queue management. Machine learning models for classification. Human review interface for exceptions.",
    implementation:
      "4-week project. Integrated existing document sources. Built ML models on labeled dataset. Created review UI for analysts. Set up error logging and retraining pipeline.",
    results:
      "45k documents/month processed. 72% automated (no human touch). Remaining documents: 45 min avg processing time. 98% accuracy maintained.",
    roi:
      "Eliminated 3 FTE positions worth of manual work. 96% cost reduction in document processing. Accuracy improved from 89% to 98%.",
    nextSteps:
      "Add real-time processing. Expand ML models to new document types. Build predictive error detection. Integrate with downstream systems.",
    disclaimer:
      "Results represent the specific deployment scenario. Accuracy and throughput depend on document quality, complexity, and training data.",
  },
  {
    slug: "sales-setter",
    title: "Sales Setter DM Automation",
    subtitle: "Inbound DM qualification and booking",
    tags: ["IG API", "WhatsApp", "n8n", "OpenAI", "Calendly", "Supabase"],
    metrics: [
      { label: "Median reply time", value: "12s" },
      { label: "Qualified rate", value: "62%" },
      { label: "Triage calls/week", value: "6→18" },
      { label: "Show-up rate", value: "56%→74%" },
    ],
    client: "B2B SaaS company",
    problem:
      "Incoming DMs on Instagram and WhatsApp were missed or delayed. Sales reps couldn't respond quickly enough. Unqualified leads wasted time.",
    constraints:
      "API access limitations. Need to qualify leads before booking. Preserve personal touch. Work with existing Calendly system.",
    solution:
      "AI agent monitors Instagram and WhatsApp DMs. Qualifies leads in real-time. Books calls directly into Calendly. Escalates complex conversations.",
    architecture:
      "n8n automation triggers on new DMs via Instagram and WhatsApp APIs. OpenAI agent qualifies based on custom criteria. Supabase logs all interactions. Calendly integration for booking.",
    implementation:
      "2-week setup. Connected IG Business API and WhatsApp Business API. Built qualification logic in n8n. Trained AI on typical lead patterns.",
    results:
      "12-second median response time (was 3+ hours). 62% qualification rate. Increased triage calls from 6 to 18 per week. Show-up rate improved from 56% to 74%.",
    roi:
      "5 additional qualified calls per week. 18% improvement in booking show-up rate. Sales productivity increased by 30%.",
    nextSteps:
      "Add multi-touch follow-up sequences. Build lead scoring model. Integrate CRM for history. Expand to other channels (Telegram, etc).",
    disclaimer:
      "Results depend on lead source quality, market, and sales process. Shown results are typical for B2B SaaS in this category.",
  },
];

export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: "CRM-embedded booking agents",
    description:
      "AI agents that live in your CRM, qualify inbound leads, and book calls automatically. Integrates with Calendly, Cal.com, or custom booking systems.",
  },
  {
    title: "RAG systems and AI agents",
    description:
      "Retrieval-augmented generation systems that ground AI responses in your data. Custom agents that reason, execute tasks, and learn from outcomes.",
  },
  {
    title: "n8n workflows and platform automation",
    description:
      "Low-code automation workflows connecting all your tools. From data pipelines to notification systems to complex multi-step processes.",
  },
  {
    title: "Full-stack apps (Python/TypeScript)",
    description:
      "Custom web applications, APIs, and data systems. Built for scale with modern best practices. TypeScript frontend, Python/FastAPI backend.",
  },
  {
    title: "Rapid AI consulting & implementation",
    description:
      "Strategic consulting on AI feasibility, architecture, and ROI. Rapid prototyping and proof-of-concept to validate ideas quickly.",
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
  { name: "Harvard CS50 AI" },
  { name: "Google Cloud Generative AI Path" },
  { name: "IBM AI Fundamentals" },
  { name: "NVIDIA DLI" },
  { name: "Great Learning Neural Networks" },
  { name: "AWS Generative AI" },
  { name: "Business Admin Diploma" },
  { name: "Business English" },
  { name: "Project Management" },
  { name: "Marketing Management" },
  { name: "HR Diploma" },
  { name: "TESOL" },
  { name: "Corporate Trainer Certified" },
];
