import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/Badge';
import { MetricCard } from '@/components/MetricCard';
import { ProjectCard } from '@/components/ProjectCard';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ScrollProgress } from '@/components/ScrollProgress';
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { caseStudies } from '@/lib/data/case-studies';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  // Get related projects (exclude current one, take first 2)
  const relatedProjects = caseStudies
    .filter((s) => s.slug !== slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F1E6] font-inter selection:bg-[#5D9CEC] selection:text-white">
      <Navigation />
      <ScrollProgress />

      <main className="pt-[56px] pb-20">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          
          {/* HEADER BLOCK */}
          <div className="pt-10 md:pt-20 mb-12">
            <FadeInOnScroll>
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Work', href: '/work' },
                  { label: study.title },
                ]}
              />
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={0.1}>
              <Link 
                href="/work" 
                className="group inline-flex items-center gap-2 text-[14px] text-accent mb-10 hover:brightness-110 transition-all"
              >
                <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">←</span>
                <span className="animated-underline">Back to Work</span>
              </Link>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={0.2}>
              <h1 className="text-[44px] md:text-[64px] font-bold text-[#F5F1E6] mb-4 font-space leading-[1.1]">
                {study.title}
              </h1>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={0.3}>
              <p className="text-[18px] text-secondary leading-[1.7] mb-10 max-w-[65ch]">
                {study.subtitle}
              </p>
            </FadeInOnScroll>
            
            {/* Client & Meta Strip */}
            <FadeInOnScroll delay={0.4}>
              <div className="flex flex-wrap gap-3 mb-12">
                {[
                  { label: 'Client', value: study.clientType },
                  { label: 'Duration', value: study.duration },
                  { label: 'Key Metric', value: study.keyMetric, highlight: true },
                ].map((item, i) => (
                  item.value && (
                    <div 
                      key={i} 
                      className={`rounded-[12px] border border-[rgba(255,255,255,0.15)] px-3 py-1.5 text-[13px] ${
                        item.highlight ? 'text-accent font-medium bg-[rgba(93,156,236,0.05)]' : 'text-secondary'
                      }`}
                    >
                      <span className="opacity-60 mr-1">{item.label}:</span>
                      {item.value}
                    </div>
                  )
                ))}
              </div>
            </FadeInOnScroll>
            
            <div className="h-px bg-[rgba(255,255,255,0.08)] w-full mb-16" />
          </div>
          
          {/* MAIN CONTENT */}
          <div className="space-y-16 md:space-y-20">
            
            {/* Overview */}
            {study.overview && (
              <FadeInOnScroll>
                <section>
                  <div className="w-[40px] h-[4px] bg-accent mb-3" />
                  <h2 className="text-[28px] md:text-[36px] font-semibold text-foreground mb-6 font-space">Overview</h2>
                  <p className="text-[16px] text-secondary leading-[1.8] max-w-[65ch]">
                    {study.overview}
                  </p>
                </section>
              </FadeInOnScroll>
            )}

            {/* The Problem */}
            {study.problem && (
              <FadeInOnScroll>
                <section>
                  <div className="w-[40px] h-[4px] bg-accent mb-3" />
                  <h2 className="text-[28px] md:text-[36px] font-semibold text-foreground mb-6 font-space">The Problem</h2>
                  <p className="text-[16px] text-secondary leading-[1.8] max-w-[65ch]">
                    {study.problem}
                  </p>
                </section>
              </FadeInOnScroll>
            )}

            {/* Constraints */}
            {study.constraints && (
              <FadeInOnScroll>
                <section>
                  <div className="w-[40px] h-[4px] bg-accent mb-3" />
                  <h2 className="text-[28px] md:text-[36px] font-semibold text-foreground mb-6 font-space">Constraints</h2>
                  <p className="text-[16px] text-secondary leading-[1.8] max-w-[65ch]">
                    {study.constraints}
                  </p>
                </section>
              </FadeInOnScroll>
            )}

            {/* The Solution */}
            {study.solution && (
              <FadeInOnScroll>
                <section>
                  <div className="w-[40px] h-[4px] bg-accent mb-3" />
                  <h2 className="text-[28px] md:text-[36px] font-semibold text-foreground mb-6 font-space">The Solution</h2>
                  <p className="text-[16px] text-secondary leading-[1.8] max-w-[65ch]">
                    {study.solution}
                  </p>
                </section>
              </FadeInOnScroll>
            )}

            {/* Results */}
            {study.results && (
              <FadeInOnScroll>
                <section>
                  <div className="w-[40px] h-[4px] bg-accent mb-3" />
                  <h2 className="text-[28px] md:text-[36px] font-semibold text-foreground mb-6 font-space">Results</h2>
                  <p className="text-[16px] text-secondary leading-[1.8] max-w-[65ch] mb-8">
                    {study.results}
                  </p>
                  
                  {/* Metrics Grid */}
                  {study.metrics && study.metrics.length > 0 && (
                    <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                      {study.metrics.map((metric, i) => (
                        <MetricCard 
                          key={i} 
                          value={metric.value} 
                          label={metric.label}
                          icon={i === 0 ? '↑' : i === 1 ? '⚡' : i === 2 ? '✓' : '→'}
                        />
                      ))}
                    </StaggerChildren>
                  )}
                </section>
              </FadeInOnScroll>
            )}

            {/* Tools & Stack */}
            {study.stack && study.stack.length > 0 && (
              <FadeInOnScroll>
                <section>
                  <div className="w-[40px] h-[4px] bg-accent mb-3" />
                  <h2 className="text-[28px] md:text-[36px] font-semibold text-foreground mb-6 font-space">Tools & Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {study.stack.map((tool) => (
                      <Badge key={tool}>
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </section>
              </FadeInOnScroll>
            )}

            {/* Unique */}
            {study.unique && (
              <FadeInOnScroll>
                <section>
                  <div className="w-[40px] h-[4px] bg-accent mb-3" />
                  <h2 className="text-[28px] md:text-[36px] font-semibold text-foreground mb-6 font-space">What Made This Unique</h2>
                  <div className="border-l-4 border-accent bg-[rgba(255,255,255,0.02)] p-5 rounded-r-lg">
                    <p className="text-[17px] text-secondary leading-[1.8] max-w-[65ch]">
                      {study.unique}
                    </p>
                  </div>
                </section>
              </FadeInOnScroll>
            )}

          </div>

          <FadeInOnScroll>
            <div className="mt-20 pt-10 border-t border-[rgba(255,255,255,0.08)]">
              <Link 
                href="/work" 
                className="group inline-flex items-center gap-2 text-[14px] text-accent hover:brightness-110 transition-all"
              >
                <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">←</span>
                <span className="animated-underline">Back to Work</span>
              </Link>
            </div>
          </FadeInOnScroll>

          {/* Related Case Studies */}
          <div className="mt-20">
            <FadeInOnScroll>
              <div className="w-[40px] h-[4px] bg-accent mb-3" />
              <h2 className="text-[32px] font-bold text-foreground mb-8 font-space">
                More Case Studies
              </h2>
            </FadeInOnScroll>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </StaggerChildren>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
