import voice from "@/assets/screen-voice.jpg";
import camera from "@/assets/screen-camera.jpg";
import currency from "@/assets/screen-currency.jpg";
import phrasebook from "@/assets/screen-phrasebook.jpg";

const screens = [
  { src: voice, title: "Voice", caption: "Real-time conversation" },
  { src: camera, title: "Camera", caption: "Translate the world you see" },
  { src: currency, title: "Currency", caption: "Live rates, instantly" },
  { src: phrasebook, title: "Phrasebook", caption: "Curated essentials" },
];

export function Showcase() {
  return (
    <section id="showcase" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            App Showcase
          </span>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight md:text-5xl">
            Beautifully designed{" "}
            <span className="italic text-gradient-gold">for travelers.</span>
          </h2>
          <p className="mt-5 text-base font-light text-muted-foreground">
            Every screen, considered. Every detail, intentional.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="-mx-6 overflow-x-auto px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max gap-6 md:gap-8">
              {screens.map((s, i) => (
                <figure
                  key={s.title}
                  className="group relative w-[260px] shrink-0 md:w-[300px]"
                  style={{ transform: `translateY(${i % 2 === 0 ? 0 : 24}px)` }}
                >
                  <div className="relative overflow-hidden rounded-[2.4rem] border border-border bg-ink p-1 shadow-[var(--shadow-elegant)] transition-transform duration-700 group-hover:-translate-y-2">
                    <div className="overflow-hidden rounded-[2rem]">
                      <img
                        src={s.src}
                        alt={`TraveTalk ${s.title} screen`}
                        width={768}
                        height={1536}
                        loading="lazy"
                        className="h-[520px] w-full object-cover"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-6 text-center">
                    <div className="font-serif text-lg text-foreground">{s.title}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      {s.caption}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
