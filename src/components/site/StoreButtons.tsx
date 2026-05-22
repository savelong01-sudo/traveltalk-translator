import { Apple, Play } from "lucide-react";

export function StoreButtons({ variant = "hero" }: { variant?: "hero" | "compact" }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${variant === "hero" ? "" : ""}`}>
      <a
        href="#download"
        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-gold px-6 py-3.5 text-ink shadow-[0_10px_40px_-10px_var(--gold)] transition-transform hover:scale-[1.02] animate-pulse-gold"
      >
        <Apple className="h-5 w-5" />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] opacity-80">
            Download on the
          </span>
          <span className="text-sm font-semibold">App Store</span>
        </span>
      </a>
      <a
        href="#download"
        className="group inline-flex items-center gap-3 rounded-full border border-gold/40 bg-transparent px-6 py-3.5 text-foreground transition-all hover:border-gold hover:bg-gold/5"
      >
        <Play className="h-5 w-5 text-gold" />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Get it on
          </span>
          <span className="text-sm font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
