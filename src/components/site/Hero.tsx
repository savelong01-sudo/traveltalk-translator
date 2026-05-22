import { ChevronDown, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import phone from "@/assets/phone-hero.png";
import { StoreButtons } from "./StoreButtons";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/85 to-background" />
        <div className="absolute inset-0 grain" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium tracking-wider text-gold uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            AI-Powered Travel Translator
          </span>

          <h1 className="mt-7 font-serif text-[clamp(2.6rem,6vw,4.75rem)] font-medium leading-[1.02] tracking-tight text-foreground">
            Speak Any Language.
            <br />
            <span className="text-gradient-gold italic">Travel Without Limits.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-muted-foreground">
            Break language barriers in 100+ countries. Voice, camera, currency —
            all elegantly designed in one app, crafted for the modern traveler.
          </p>

          <div className="mt-10">
            <StoreButtons />
          </div>

          <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <div className="font-serif text-2xl text-foreground">4.8</div>
              <div className="text-xs uppercase tracking-widest">App Rating</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-serif text-2xl text-foreground">100+</div>
              <div className="text-xs uppercase tracking-widest">Languages</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-serif text-2xl text-foreground">50K+</div>
              <div className="text-xs uppercase tracking-widest">Travelers</div>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="relative mx-auto w-full max-w-[440px]">
          <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-gold/20 via-transparent to-transparent blur-3xl" />
          <div className="animate-float">
            <img
              src={phone}
              alt="TraveTalk translator app on iPhone"
              width={1024}
              height={1536}
              className="drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </div>

      <a
        href="#features"
        aria-label="Scroll to features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow text-gold"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}
