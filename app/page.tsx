import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WavesBackground from '@/components/WavesBackground';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { ScrollProgress } from '@/components/ScrollProgress';
import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import { Button } from '@/components/ui/Button';
import { services, stats } from '@/lib/data';
import { caseStudies } from '@/lib/data/case-studies';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Navigation />
      <ScrollProgress />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-pattern">
          <WavesBackground />

          <div className="container-max relative z-10 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <FadeInOnScroll className="space-y-8">
                <div>
                  <h1 className="text-h1-mobile md:text-h1-desktop font-bold text-foreground mb-4 leading-[1.1] font-space"
                    style={{ 
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                      letterSpacing: '0.02em'
                    }}
                  >
                    omraan shibani
                  </h1>
                  <p className="text-lg md:text-xl text-accent font-medium">
                    AI Engineer • Automation Architect
                  </p>
                </div>

                <p className="text-lg text-secondary max-w-content leading-relaxed" style={{ letterSpacing: '0.02em' }}>
                  We build AI systems that book calls, reduce busywork, and scale
                  delivery.
                </p>

                <div className="flex gap-4 flex-wrap">
                  <Button
                    href="mailto:omraanalshibany@gmail.com"
                    variant="primary"
                    size="large"
                  >
                    Email
                  </Button>
                  <Button
                    href="https://wa.me/963996905457"
                    variant="secondary"
                    size="large"
                  >
                    WhatsApp
                  </Button>
                </div>
              </FadeInOnScroll>

              {/* Right: Portrait Placeholder */}
              <FadeInOnScroll delay={0.2} className="flex justify-center">
                <div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-accent/30 bg-accent/5 overflow-hidden flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_40px_rgba(93,156,236,0.15)]"
                  style={{
                    backgroundImage: 'url(/portrait.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </FadeInOnScroll>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="border-y border-[rgba(255,255,255,0.08)] py-12 md:py-16 bg-background/50">
          <div className="container-max">
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <p className="text-3xl md:text-4xl font-bold text-accent group-hover:brightness-110 transition-all">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="text-sm text-secondary mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 md:py-24">
          <div className="container-max">
            <FadeInOnScroll>
              <SectionHeading className="mb-12">
                Services
              </SectionHeading>
            </FadeInOnScroll>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[20px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.02)] p-8 hover:border-[rgba(255,255,255,0.25)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-all duration-200 origin-center cursor-pointer"
                  style={{ 
                    transition: 'all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  <h3 className="text-[18px] font-bold text-foreground mb-3 font-space">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-secondary leading-relaxed">{service.description}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-24 md:py-24 border-t border-[rgba(255,255,255,0.08)]">
          <div className="container-max">
            <FadeInOnScroll>
              <SectionHeading className="mb-12">
                Selected Work
              </SectionHeading>
            </FadeInOnScroll>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </StaggerChildren>

            <FadeInOnScroll className="text-center mt-12">
              <Link
                href="/work"
                className="inline-flex items-center justify-center h-[44px] px-6 bg-transparent text-secondary border border-border rounded-xl font-medium transition-all duration-150 hover:text-accent hover:border-border-hover hover:-translate-y-[2px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.15)] focus:outline-2 focus:outline-offset-2 focus:outline-accent"
              >
                View all projects
              </Link>
            </FadeInOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
