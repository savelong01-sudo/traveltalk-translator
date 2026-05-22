import { Award, Globe2, Star, Users } from "lucide-react";

const stats = [
  { icon: Star, value: "4.8 / 5", label: "Average Rating" },
  { icon: Globe2, value: "100+", label: "Languages" },
  { icon: Users, value: "50K+", label: "Travelers" },
  { icon: Award, value: "Featured", label: "on App Store" },
];

export function Stats() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass grid grid-cols-2 gap-y-8 rounded-3xl px-8 py-10 md:grid-cols-4 md:gap-0 md:py-12">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center text-center ${
                i > 0 ? "md:border-l md:border-border" : ""
              }`}
            >
              <s.icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
              <div className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
