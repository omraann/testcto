export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  clientType?: string;
  duration?: string;
  keyMetric?: string;
  metrics: { label: string; value: string }[];
  overview?: string;
  problem?: string;
  constraints?: string;
  solution?: string;
  results?: string;
  stack?: string[];
  thumbnail?: string;
  unique?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'customer-support-agent',
    title: 'Customer Support Agent',
    subtitle: 'Multi-channel AI support for D2C nutrition brand',
    tags: ['OpenAI', 'Supabase', 'n8n', 'Shopify', 'Zendesk', 'Next.js'],
    clientType: 'D2C Nutrition Brand',
    duration: '6 weeks',
    keyMetric: '64% Auto-resolution',
    metrics: [
      { label: 'Auto-resolution', value: '64%' },
      { label: 'First Response', value: '9s' },
      { label: 'Backlog Reduction', value: '65%' },
      { label: 'CSAT Increase', value: '+12 pts' },
    ],
    overview: 'We built a comprehensive AI support agent for a leading D2C nutrition brand that was struggling with high support volume and slow response times. The system handles inquiries across email, chat, and social media.',
    problem: 'The support team was overwhelmed by repetitive questions about order status, product ingredients, and subscription management. Response times were slipping to over 24 hours, leading to customer churn.',
    constraints: 'The system needed to integrate deeply with Shopify for order data and Zendesk for ticketing, while maintaining a strict brand voice and ensuring medical compliance in product answers.',
    solution: 'We deployed a multi-channel AI agent powered by OpenAI and orchestrated via n8n. The agent has real-time access to Shopify customer data and a vector database of product knowledge. It can perform actions like updating subscriptions and tracking orders autonomously.',
    results: 'The AI agent now handles the majority of incoming tickets without human intervention. When it cannot resolve an issue, it seamlessly hands off to a human agent with a full summary of the interaction.',
    unique: 'What set this project apart was the "human-in-the-loop" design that allows the AI to draft responses for human review in complex cases, training itself over time.',
    stack: ['OpenAI', 'Supabase', 'n8n', 'Shopify', 'Zendesk', 'Next.js'],
  },
  {
    slug: 'document-processing-pipeline',
    title: 'Document Processing Pipeline',
    subtitle: 'Automated extraction and classification with human-in-the-loop QA',
    tags: ['Python', 'FastAPI', 'OCR', 'Postgres', 'Supabase'],
    clientType: 'FinTech Startup',
    duration: '8 weeks',
    keyMetric: '45k Docs/Month',
    metrics: [
      { label: 'Docs/Month', value: '45k' },
      { label: 'Straight-through', value: '72%' },
      { label: 'Avg Touch', value: '0:45' },
      { label: 'Accuracy', value: '98%' },
    ],
    overview: 'A high-volume document processing system designed to handle thousands of financial documents daily, extracting key data points and classifying documents for downstream processing.',
    problem: 'Manual data entry was slow, error-prone, and expensive. The client needed to scale operations without linearly increasing headcount.',
    constraints: 'High accuracy was non-negotiable. The system needed to handle various document formats (PDF, images, scans) and varying layouts.',
    solution: 'We built a pipeline using Python and FastAPI that leverages advanced OCR and LLMs to extract data. A custom QA interface allows humans to review low-confidence extractions rapidly.',
    results: 'The pipeline processing capacity scaled immediately. The "straight-through" rate for documents requiring no human intervention reached 72% within the first month.',
    unique: 'The system features a self-correcting mechanism where corrections made by human QA are used to fine-tune the extraction models automatically.',
    stack: ['Python', 'FastAPI', 'OCR', 'Postgres', 'Supabase'],
  },
  {
    slug: 'sales-setter-dm-automation',
    title: 'Sales Setter DM Automation',
    subtitle: 'Inbound DM qualification and booking',
    tags: ['IG API', 'WhatsApp', 'n8n', 'OpenAI', 'Calendly', 'Supabase'],
    clientType: 'Coaching Business',
    duration: '4 weeks',
    keyMetric: '12s Median Reply',
    metrics: [
      { label: 'Median Reply', value: '12s' },
      { label: 'Qualified', value: '62%' },
      { label: 'Calls/Week', value: '6→18' },
      { label: 'Show-up', value: '56%→74%' },
    ],
    overview: 'An automated lead qualification and appointment setting system for Instagram and WhatsApp, designed to engage inbound leads instantly.',
    problem: 'Valuable leads were being lost due to slow response times in DMs. The sales team spent too much time chatting with unqualified leads instead of closing deals.',
    constraints: 'The automation needed to sound natural and not like a bot. It had to handle objections and schedule meetings only with qualified prospects.',
    solution: 'We integrated the Instagram API and WhatsApp with n8n workflows driven by OpenAI. The system qualifies leads based on a defined rubric and books calls directly into Calendly.',
    results: 'Sales calls tripled within weeks. The show-up rate improved significantly because leads were engaged while their intent was highest.',
    unique: 'We implemented a "sentiment analysis" guardrail that detects frustration and immediately escalates to a human, preserving the brand reputation.',
    stack: ['IG API', 'WhatsApp', 'n8n', 'OpenAI', 'Calendly', 'Supabase'],
  },
];
