import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { FormField } from '@/components/ui/FormField';

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
          <div className="container-max">
            <h1 className="text-h1-mobile md:text-h1-desktop font-bold text-foreground mb-8">
              Contact
            </h1>

            <p className="text-lg text-secondary mb-12 max-w-content">
              Interested in working together? Reach out through any of these
              channels.
            </p>

            <div className="space-y-4 mb-12">
              <Button
                href="mailto:omraanalshibany@gmail.com"
                variant="secondary"
                className="w-full md:w-auto"
              >
                Send an Email
              </Button>

              <Button
                href="https://wa.me/963996905457"
                variant="secondary"
                className="w-full md:w-auto"
              >
                WhatsApp
              </Button>
            </div>

            <div className="border-t border-border pt-12 mb-12">
              <h2 className="text-h3 font-bold text-foreground mb-6">
                Or send a message
              </h2>

              <form 
                className="space-y-6 max-w-lg"
                action="https://formspree.io/f/your-form-id"
                method="POST"
              >
                <FormField
                  id="name"
                  label="Name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                />

                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                />

                <FormField
                  id="message"
                  label="Message"
                  type="textarea"
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                />

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div className="border-t border-border pt-12">
              <h2 className="text-h3 font-bold text-foreground mb-4">
                What we work on
              </h2>

              <ul className="space-y-2 text-base text-secondary max-w-content">
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
