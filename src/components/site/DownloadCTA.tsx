import { QrCode } from "lucide-react";
import { StoreButtons } from "./StoreButtons";

export function DownloadCTA() {
  return (
    <section id="download" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-gold/20 bg-gradient-to-br from-[oklch(0.22_0.045_260)] via-[oklch(0.18_0.04_255)] to-[oklch(0.24_0.06_75/0.4)] px-8 py-20 text-center md:px-16">
          <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
          <div className="grain absolute inset-0 opacity-30" />

          <span className="relative text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Your next journey
          </span>
          <h2 className="relative mt-5 font-serif text-4xl font-medium leading-tight md:text-6xl">
            Ready to explore{" "}
            <span className="italic text-gradient-gold">the world?</span>
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-base font-light text-muted-foreground md:text-lg">
            Download TraveTalk today — free. Premium features available with
            affordable in-app upgrades.
          </p>

          <div className="relative mt-10 flex flex-col items-center justify-center gap-8">
            <StoreButtons />

            <div className="flex items-center gap-6 pt-4">
              <div className="flex flex-col items-center gap-2">
                <div className="grid h-20 w-20 place-items-center rounded-2xl bg-foreground text-ink">
                  <QrCode className="h-12 w-12" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  iOS
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="grid h-20 w-20 place-items-center rounded-2xl bg-foreground text-ink">
                  <QrCode className="h-12 w-12" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Android
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
