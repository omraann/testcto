import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { services } from '@/lib/data';

export const metadata = {
  title: 'Services | Omraan Shibani',
  description: 'Services and capabilities',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container-max">
            <div className="mb-12">
              <h1
                className="text-5xl md:text-6xl font-bold text-foreground mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Services
              </h1>
              <p className="text-lg text-muted">
                What we can do for you
              </p>
            </div>

            <div className="space-y-8 max-w-2xl">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="border-l-2 border-transparent hover:border-accent/50 pl-8 py-4 transition-all group"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-base text-muted">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 border-t border-accent/20 pt-12 max-w-2xl">
              <h2
                className="text-2xl font-bold text-foreground mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Process
              </h2>

              <div className="space-y-4 text-base text-muted">
                <p>
                  <span className="font-semibold text-foreground">
                    Discovery:
                  </span>{' '}
                  Understanding your goals and constraints.
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    Design:
                  </span>{' '}
                  Architecture and approach validation.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Build:</span>{' '}
                  Implementation with quality and speed.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Deploy:</span>{' '}
                  Production deployment and monitoring.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
