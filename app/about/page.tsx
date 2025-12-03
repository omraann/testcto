import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { certificates } from '@/lib/data';

export const metadata = {
  title: 'About | Omraan Shibani',
  description: 'Background and certifications',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container-max max-w-2xl">
            <div className="mb-12">
              <h1
                className="text-5xl md:text-6xl font-bold text-foreground mb-8"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                About
              </h1>

              <div className="flex justify-center mb-8">
                <div
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-accent/30 bg-accent/5 overflow-hidden"
                  style={{
                    backgroundImage: 'url(/portrait.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  5+ years shipping AI workflows and web apps. 2,000+ n8n
                  automations. 50+ sites. RAG agents, voice agents, proactive
                  assistants, data pipelines.
                </p>

                <p className="text-base text-muted">
                  Specializing in rapid AI implementation, automation architecture,
                  and full-stack development. Built systems that scale from
                  prototype to production.
                </p>
              </div>
            </div>

            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-8"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Certifications
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {certificates.map((cert) => (
                  <div
                    key={cert.name}
                    className="border border-accent/20 rounded-[1.25rem] p-3 text-center hover:border-accent/50 transition-colors"
                  >
                    <p className="text-xs font-medium text-foreground leading-relaxed">
                      {cert.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
