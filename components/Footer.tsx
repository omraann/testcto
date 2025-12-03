export default function Footer() {
  return (
    <footer className="border-t border-accent/20 bg-background/50">
      <div className="container-max py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-4">
            <p className="text-sm text-muted">© omraan shibani</p>
            <div className="flex gap-4">
              <a
                href="mailto:omraanalshibany@gmail.com"
                className="text-sm text-foreground hover:text-accent transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-accent"
              >
                Email
              </a>
              <a
                href="https://wa.me/963996905457"
                className="text-sm text-foreground hover:text-accent transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-accent"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <p className="text-xs text-muted">
            Representative results shown.
          </p>
        </div>
      </div>
    </footer>
  );
}
