import { Globe, Mic, MessageCircle } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Globe,
    title: "Choose Language",
    desc: "Pick from over 100 languages with a single, elegant gesture.",
  },
  {
    n: "02",
    icon: Mic,
    title: "Speak or Snap",
    desc: "Use your voice, or aim your camera at any sign, menu or document.",
  },
  {
    n: "03",
    icon: MessageCircle,
    title: "Understand & Connect",
    desc: "Receive instant, accurate translations spoken in a native accent.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            How It Works
          </span>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight md:text-5xl">
            Three steps to a{" "}
            <span className="italic text-gradient-gold">borderless world.</span>
          </h2>
        </div>

        <div className="relative mt-20">
          {/* connecting line */}
          <div
            aria-hidden
            className="absolute left-1/2 top-10 hidden h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent md:block"
          />

          <ol className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((s) => (
              <li key={s.n} className="text-center">
                <div className="relative mx-auto grid h-20 w-20 place-items-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-90 shadow-[0_0_50px_-10px_var(--gold)]" />
                  <s.icon className="relative h-7 w-7 text-ink" strokeWidth={1.8} />
                </div>
                <div className="mt-6 font-serif text-sm tracking-[0.3em] text-gold">
                  STEP {s.n}
                </div>
                <h3 className="mt-3 font-serif text-2xl font-medium text-foreground">
                  {s.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm font-light leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
