import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { MetricCard } from '@/components/MetricCard';
import { ServiceCard } from '@/components/ServiceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { ScrollProgress } from '@/components/ScrollProgress';
import { FadeInOnScroll, StaggerChildren } from '@/components/animations';
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
    <div className="min-h-screen bg-background text-foreground font-inter selection:bg-accent selection:text-white">
      <Navigation />
      <ScrollProgress />

      <main className="pt-[56px]">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-20 md:py-24 hero-pattern">
          
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10 md:gap-16">
              
              {/* Left Column (Text) */}
              <FadeInOnScroll className="flex-1 text-center md:text-left pt-10 md:pt-10">
                <h1 className="text-[48px] md:text-[72px] font-bold leading-[1.1] mb-6 text-foreground font-space" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}>
                  Selected Work
                </h1>
                <p className="text-[16px] md:text-[18px] text-secondary leading-[1.8] mb-8 max-w-[600px] mx-auto md:mx-0">
                  Building scalable AI systems for forward-thinking founders. 
                  Specializing in complex automations, RAG pipelines, and full-stack integration.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <Button href="https://calendly.com/omraan" target="_blank" variant="primary" size="large">
                    Book a call
                  </Button>
                  <Button href="mailto:omraanalshibany@gmail.com" variant="secondary" size="large">
                    Email
                  </Button>
                </div>
              </FadeInOnScroll>

              {/* Right Column (Image) */}
              <FadeInOnScroll delay={0.2} className="flex-shrink-0">
                <div className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-[20px] border border-border bg-[#1a1a1a] flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(93,156,236,0.15)]">
                   {/* Placeholder for Profile Image */}
                   <div className="text-[#333] font-bold text-6xl">OS</div>
                </div>
              </FadeInOnScroll>

            </div>
          </div>
        </section>

        {/* KEY METRICS SECTION */}
        <section className="py-16 md:py-20 border-y border-[rgba(255,255,255,0.08)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {metrics.map((metric, i) => (
                <MetricCard 
                  key={metric.label} 
                  value={metric.value} 
                  label={metric.label}
                  icon={i === 0 ? '⚡' : i === 1 ? '✓' : i === 2 ? '→' : '↑'}
                />
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-24">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <FadeInOnScroll>
              <SectionHeading className="mb-12">
                Services
              </SectionHeading>
              <p className="text-[16px] text-secondary mb-12 max-w-[600px]">
                Technical capabilities and specialized areas of focus.
              </p>
            </FadeInOnScroll>
            
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  tags={service.tags}
                />
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* SELECTED WORK SECTION */}
        <section className="py-24 border-t border-[rgba(255,255,255,0.08)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <FadeInOnScroll>
              <SectionHeading className="mb-12">
                Case Studies
              </SectionHeading>
              <p className="text-[16px] text-secondary mb-12 max-w-[600px]">
                Recent projects showcasing impact and outcomes.
              </p>
            </FadeInOnScroll>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((study) => (
                <ProjectCard key={study.slug} project={study} />
              ))}
            </StaggerChildren>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
