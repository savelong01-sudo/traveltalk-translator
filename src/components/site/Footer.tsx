import { Globe2, Heart, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-ink">
                <Globe2 className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <span className="font-serif text-xl tracking-wide">
                Trave<span className="text-gradient-gold">Talk</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm font-light text-muted-foreground">
              The AI-powered travel companion for the modern explorer.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-gold">Features</a>
            <a href="#how" className="hover:text-gold">How It Works</a>
            <a href="#download" className="hover:text-gold">Download</a>
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Support</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} TraveTalk. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            Made with <Heart className="h-3 w-3 fill-gold text-gold" /> for travelers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
