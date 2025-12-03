import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { MetricCard } from '@/components/MetricCard';
import { ServiceCard } from '@/components/ServiceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { caseStudies } from '@/lib/data/case-studies';

export default function WorkPage() {
  const metrics = [
    { value: '2,000+', label: 'Automations' },
    { value: '50+', label: 'Client Projects' },
    { value: '5+ Yrs', label: 'Experience' },
    { value: '48-hr', label: 'Delivery' },
  ];

  const services = [
    {
      title: 'CRM-Embedded AI Agents',
      description: 'Intelligent agents integrated into your support and sales workflows (Zendesk, Salesforce, HubSpot).',
      tags: ['Support', 'Sales', 'Routing'],
    },
    {
      title: 'RAG & Knowledge Systems',
      description: 'Custom retrieval systems that allow AI to chat with your internal data securely and accurately.',
      tags: ['Vector DB', 'Embeddings', 'Search'],
    },
    {
      title: 'n8n & Make Workflows',
      description: 'Robust, error-handled automation architectures connecting your entire stack.',
      tags: ['Automation', 'Orchestration'],
    },
    {
      title: 'Full-Stack Integration',
      description: 'End-to-end development ensuring your AI solutions fit perfectly into your existing infrastructure.',
      tags: ['Python', 'Node.js', 'TypeScript'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F1E6] font-inter selection:bg-[#5D9CEC] selection:text-white">
      <Navigation />

      <main className="pt-[56px]">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-[60px] md:py-[80px]">
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0 pointer-events-none" 
               style={{ 
                 backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', 
                 backgroundSize: '30px 30px' 
               }} 
          />
          
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10 md:gap-16">
              
              {/* Left Column (Text) */}
              <div className="flex-1 text-center md:text-left pt-10 md:pt-10">
                <h1 className="text-[48px] md:text-[64px] font-bold leading-[1.1] mb-6 text-[#F5F1E6] font-space">
                  Selected Work
                </h1>
                <p className="text-[16px] md:text-[18px] text-[#AFAFAF] leading-[1.6] mb-8 max-w-[600px] mx-auto md:mx-0">
                  Building scalable AI systems for forward-thinking founders. 
                  Specializing in complex automations, RAG pipelines, and full-stack integration.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <Button href="https://calendly.com/omraan" target="_blank" variant="primary">
                    Book a call
                  </Button>
                  <Button href="mailto:omraanalshibany@gmail.com" variant="secondary">
                    Email
                  </Button>
                </div>
              </div>

              {/* Right Column (Image) */}
              <div className="flex-shrink-0">
                <div className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-[16px] md:rounded-[20px] border border-[rgba(255,255,255,0.15)] bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
                   {/* Placeholder for Profile Image */}
                   <div className="text-[#333] font-bold text-6xl">OS</div>
                   {/* If an image was available, we would use <Image /> here */}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* KEY METRICS SECTION */}
        <section className="py-[60px] md:py-[80px]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {metrics.map((metric) => (
                <MetricCard key={metric.label} value={metric.value} label={metric.label} />
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-[80px]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="mb-8">
              <h2 className="text-[32px] md:text-[40px] font-semibold text-[#F5F1E6] mb-2 font-space">
                Services
              </h2>
              <p className="text-[16px] text-[#AFAFAF]">
                Technical capabilities and specialized areas of focus.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  tags={service.tags}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SELECTED WORK SECTION */}
        <section className="py-[40px] pb-[100px]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="mb-10">
              <h2 className="text-[32px] md:text-[40px] font-semibold text-[#F5F1E6] mb-2 font-space">
                Our Work
              </h2>
              <p className="text-[16px] text-[#AFAFAF]">
                Recent projects showcasing impact and outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {caseStudies.map((study) => (
                <ProjectCard key={study.slug} project={study} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
