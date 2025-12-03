import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WavesBackground from '@/components/WavesBackground';
import ProjectCard from '@/components/ProjectCard';
import { caseStudies, services, stats } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Navigation />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <WavesBackground />

          <div className="container-max relative z-10 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div className="space-y-8">
                <div>
                  <h1
                    className="text-5xl md:text-6xl font-bold text-foreground mb-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    omraan shibani
                  </h1>
                  <p className="text-lg md:text-xl text-accent font-medium">
                    AI Engineer • Automation Architect
                  </p>
                </div>

                <p className="text-lg text-muted max-w-md">
                  We build AI systems that book calls, reduce busywork, and scale
                  delivery.
                </p>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href="mailto:omraanalshibany@gmail.com"
                    className="px-6 py-3 bg-accent/20 text-foreground hover:bg-accent/30 border border-accent rounded-[1.25rem] transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                  >
                    Email
                  </a>
                  <a
                    href="https://wa.me/963996905457"
                    className="px-6 py-3 bg-accent/20 text-foreground hover:bg-accent/30 border border-accent rounded-[1.25rem] transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Right: Portrait Placeholder */}
              <div className="flex justify-center">
                <div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-accent/30 bg-accent/5 overflow-hidden flex items-center justify-center"
                  style={{
                    backgroundImage: 'url(/portrait.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="border-y border-accent/20 py-8 md:py-12 bg-background/50">
          <div className="container-max">
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <p className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container-max">
            <h2
              className="text-4xl md:text-5xl font-bold mb-12 text-foreground"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="border border-accent/20 rounded-[1.25rem] p-6 hover:border-accent/50 hover:shadow-lg hover:bg-accent/5 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-16 md:py-24 border-t border-accent/20">
          <div className="container-max">
            <h2
              className="text-4xl md:text-5xl font-bold mb-12 text-foreground"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Selected Work
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/work"
                className="inline-block px-6 py-3 bg-accent/20 text-foreground hover:bg-accent/30 border border-accent rounded-[1.25rem] transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-accent"
              >
                View all projects
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
