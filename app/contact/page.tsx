import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact | Omraan Shibani',
  description: 'Get in touch',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container-max max-w-2xl">
            <h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Contact
            </h1>

            <p className="text-lg text-muted mb-12">
              Interested in working together? Reach out through any of these
              channels.
            </p>

            <div className="space-y-4 mb-12">
              <a
                href="mailto:omraanalshibany@gmail.com"
                className="block w-full md:w-auto px-6 py-3 bg-accent/20 text-foreground hover:bg-accent/30 border border-accent rounded-[1.25rem] transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-accent text-center"
              >
                Send an Email
              </a>

              <a
                href="https://wa.me/963996905457"
                className="block w-full md:w-auto px-6 py-3 bg-accent/20 text-foreground hover:bg-accent/30 border border-accent rounded-[1.25rem] transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-accent text-center"
              >
                WhatsApp
              </a>
            </div>

            <div className="border-t border-accent/20 pt-12">
              <h2
                className="text-2xl font-bold text-foreground mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                What we work on
              </h2>

              <ul className="space-y-2 text-base text-muted">
                <li>AI agents and LLM integrations</li>
                <li>Automation workflows (n8n, Make, Zapier)</li>
                <li>Full-stack web applications</li>
                <li>Data pipelines and processing</li>
                <li>Rapid prototyping and MVPs</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
