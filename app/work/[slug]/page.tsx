import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/Badge';
import { MetricCard } from '@/components/MetricCard';
import { ProjectCard } from '@/components/ProjectCard';
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

      <main className="pt-[56px] pb-20">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          
          {/* HEADER BLOCK */}
          <div className="pt-10 md:pt-20 mb-12">
            <Link 
              href="/work" 
              className="inline-block text-[14px] text-[#5D9CEC] mb-10 hover:underline hover:brightness-110"
            >
              ← Back to Work
            </Link>
            
            <h1 className="text-[40px] md:text-[56px] font-bold text-[#F5F1E6] mb-4 font-space leading-[1.1]">
              {study.title}
            </h1>
            
            <p className="text-[18px] text-[#AFAFAF] leading-[1.5] mb-10">
              {study.subtitle}
            </p>
            
            {/* Client & Meta Strip */}
            <div className="flex flex-wrap gap-3 mb-12">
              {[
                { label: 'Client', value: study.clientType },
                { label: 'Duration', value: study.duration },
                { label: 'Key Metric', value: study.keyMetric, highlight: true },
              ].map((item, i) => (
                item.value && (
                  <div 
                    key={i} 
                    className={`rounded-[12px] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 text-[13px] ${
                      item.highlight ? 'text-[#5D9CEC] font-medium' : 'text-[#AFAFAF]'
                    }`}
                  >
                    <span className="opacity-60 mr-1">{item.label}:</span>
                    {item.value}
                  </div>
                )
              ))}
            </div>
            
            <div className="h-px bg-[rgba(255,255,255,0.08)] w-full mb-12" />
          </div>
          
          {/* MAIN CONTENT */}
          <div className="space-y-12 md:space-y-16">
            
            {/* Overview */}
            {study.overview && (
              <section>
                <h2 className="text-[24px] md:text-[32px] font-semibold text-[#F5F1E6] mb-4 font-space">Overview</h2>
                <p className="text-[16px] text-[#AFAFAF] leading-[1.7] max-w-[65ch]">
                  {study.overview}
                </p>
              </section>
            )}

            {/* The Problem */}
            {study.problem && (
              <section>
                <h2 className="text-[24px] md:text-[32px] font-semibold text-[#F5F1E6] mb-4 font-space">The Problem</h2>
                <p className="text-[16px] text-[#AFAFAF] leading-[1.7] max-w-[65ch]">
                  {study.problem}
                </p>
              </section>
            )}

            {/* Constraints */}
            {study.constraints && (
              <section>
                <h2 className="text-[24px] md:text-[32px] font-semibold text-[#F5F1E6] mb-4 font-space">Constraints</h2>
                <p className="text-[16px] text-[#AFAFAF] leading-[1.7] max-w-[65ch]">
                  {study.constraints}
                </p>
              </section>
            )}

            {/* The Solution */}
            {study.solution && (
              <section>
                <h2 className="text-[24px] md:text-[32px] font-semibold text-[#F5F1E6] mb-4 font-space">The Solution</h2>
                <p className="text-[16px] text-[#AFAFAF] leading-[1.7] max-w-[65ch]">
                  {study.solution}
                </p>
              </section>
            )}

            {/* Results */}
            {study.results && (
              <section>
                <h2 className="text-[24px] md:text-[32px] font-semibold text-[#F5F1E6] mb-4 font-space">Results</h2>
                <p className="text-[16px] text-[#AFAFAF] leading-[1.7] max-w-[65ch] mb-8">
                  {study.results}
                </p>
                
                {/* Metrics Grid */}
                {study.metrics && study.metrics.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {study.metrics.map((metric, i) => (
                      <MetricCard key={i} value={metric.value} label={metric.label} />
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* Tools & Stack */}
            {study.stack && study.stack.length > 0 && (
              <section>
                <h2 className="text-[24px] md:text-[32px] font-semibold text-[#F5F1E6] mb-4 font-space">Tools & Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tool) => (
                    <Badge key={tool} className="text-[13px] px-3 py-1.5">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </section>
            )}

            {/* Unique */}
            {study.unique && (
              <section>
                <h2 className="text-[24px] md:text-[32px] font-semibold text-[#F5F1E6] mb-4 font-space">What Made This Unique</h2>
                <p className="text-[16px] text-[#AFAFAF] leading-[1.7] max-w-[65ch]">
                  {study.unique}
                </p>
              </section>
            )}

          </div>

          <div className="mt-16 pt-10 border-t border-[rgba(255,255,255,0.08)]">
             <Link 
              href="/work" 
              className="inline-block text-[14px] text-[#5D9CEC] hover:underline hover:brightness-110"
            >
              ← Back to Work
            </Link>
          </div>

          {/* Related Case Studies */}
          <div className="mt-20">
             <h2 className="text-[32px] font-bold text-[#F5F1E6] mb-8 font-space">
                More Case Studies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
