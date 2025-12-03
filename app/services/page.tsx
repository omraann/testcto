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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="border border-accent/20 rounded-[1.25rem] p-8 hover:border-accent/50 transition-colors"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-base text-muted mb-6">
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
