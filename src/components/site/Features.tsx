import {
  BookOpen,
  Camera,
  Coins,
  Mic,
  Receipt,
  Volume2,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: Mic,
    title: "Voice Translation",
    desc: "Speak naturally and translate instantly into 100+ languages with native intonation.",
  },
  {
    icon: Camera,
    title: "Camera Translator",
    desc: "Point at menus, signs and documents — see the world translated in real time.",
  },
  {
    icon: Coins,
    title: "Currency Converter",
    desc: "Live exchange rates and beautifully quick calculations for every market.",
  },
  {
    icon: Receipt,
    title: "Bill Splitter",
    desc: "Split restaurant bills fairly with locals and friends, in any currency.",
  },
  {
    icon: BookOpen,
    title: "Travel Phrasebook",
    desc: "Essential phrases, curated by country and category, ready when offline.",
  },
  {
    icon: Volume2,
    title: "Native Pronunciation",
    desc: "Hear perfect text-to-speech with authentic regional accents.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            The Essentials
          </span>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight md:text-5xl">
            Everything you need,{" "}
            <span className="italic text-gradient-gold">wherever you go.</span>
          </h2>
          <p className="mt-5 text-base font-light text-muted-foreground">
            Six refined tools designed to make every encounter abroad effortless,
            confident and a little more beautiful.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group glass relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_30px_80px_-20px_rgba(200,169,81,0.25)]"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/5 text-gold transition-colors group-hover:border-gold/60">
                  <f.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-medium text-foreground">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
