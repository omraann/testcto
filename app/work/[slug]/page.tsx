import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { caseStudies } from '@/lib/data';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${study.title} | Omraan Shibani`,
    description: study.subtitle,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />

      <main className="flex-1">
        <article>
          {/* Header */}
          <section className="border-b border-accent/20 py-12 md:py-16">
            <div className="container-max">
              <Link
                href="/work"
                className="text-sm text-muted hover:text-foreground transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-accent mb-8 inline-block"
              >
                ← Back to work
              </Link>

              <div className="mb-8">
                <h1
                  className="text-5xl md:text-6xl font-bold text-foreground mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {study.title}
                </h1>
                <p className="text-lg text-muted">{study.subtitle}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="border border-accent/20 rounded-[1.25rem] p-4"
                  >
                    <p className="text-2xl md:text-3xl font-bold text-foreground">
                      {metric.value}
                    </p>
                    <p className="text-xs md:text-sm text-muted mt-1">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <section className="py-16 md:py-24">
            <div className="container-max max-w-2xl">
              <div className="space-y-12">
                {study.client && (
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Client
                    </h2>
                    <p className="text-base text-foreground">{study.client}</p>
                  </div>
                )}

                {study.problem && (
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Problem
                    </h2>
                    <p className="text-base text-foreground">{study.problem}</p>
                  </div>
                )}

                {study.constraints && (
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Constraints
                    </h2>
                    <p className="text-base text-foreground">
                      {study.constraints}
                    </p>
                  </div>
                )}

                {study.solution && (
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Solution
                    </h2>
                    <p className="text-base text-foreground">{study.solution}</p>
                  </div>
                )}

                {study.architecture && (
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Architecture
                    </h2>
                    <p className="text-base text-foreground">
                      {study.architecture}
                    </p>
                  </div>
                )}

                {study.implementation && (
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Implementation
                    </h2>
                    <p className="text-base text-foreground">
                      {study.implementation}
                    </p>
                  </div>
                )}

                {study.results && (
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Results
                    </h2>
                    <p className="text-base text-foreground">{study.results}</p>
                  </div>
                )}

                {study.roi && (
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      ROI
                    </h2>
                    <p className="text-base text-foreground">{study.roi}</p>
                  </div>
                )}

                {study.nextSteps && (
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Next Steps
                    </h2>
                    <p className="text-base text-foreground">
                      {study.nextSteps}
                    </p>
                  </div>
                )}

                {study.disclaimer && (
                  <div className="border-t border-accent/20 pt-8">
                    <p className="text-xs text-muted italic">
                      Disclaimer: {study.disclaimer}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-12 pt-8 border-t border-accent/20">
                <Link
                  href="/work"
                  className="text-sm text-muted hover:text-foreground transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                >
                  ← Back to work
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}
