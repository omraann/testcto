import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { stack } from '@/lib/data';

export const metadata = {
  title: 'Stack | Omraan Shibani',
  description: 'Technologies and tools we use',
};

export default function StackPage() {
  const categories = Array.from(new Set(stack.map((item) => item.category)));

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

            <div className="space-y-12">
              {categories.map((category) => (
                <div key={category}>
                  <h2
                    className="text-2xl font-bold text-foreground mb-6"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {category}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {stack
                      .filter((item) => item.category === category)
                      .map((item) => (
                        <div
                          key={item.name}
                          className="border border-accent/20 rounded-[1.25rem] p-6 hover:border-accent/50 transition-colors"
                        >
                          <h3 className="font-semibold text-foreground mb-2">
                            {item.name}
                          </h3>
                          <p className="text-sm text-muted">{item.usage}</p>
                        </div>
                      ))}
                  </div>
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
