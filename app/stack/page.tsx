import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { stack } from '@/lib/data';

export const metadata = {
  title: 'Stack | Omraan Shibani',
  description: 'Technologies and tools we use',
};

export default function StackPage() {
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
                Stack
              </h1>
              <p className="text-lg text-muted">
                Technologies and tools we use to build
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {stack.map((item) => (
                <div
                  key={item.name}
                  className="border border-accent/20 rounded-[1.25rem] px-4 py-2 hover:border-accent/50 hover:bg-accent/10 hover:scale-105 transition-all cursor-default"
                >
                  <h3 className="font-semibold text-foreground text-sm">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted mt-1">
                    {item.usage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
