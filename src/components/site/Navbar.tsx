import { useEffect, useState } from "react";
import { Globe2, Menu, X } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how" },
  { label: "Showcase", href: "#showcase" },
  { label: "Download", href: "#download" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-ink shadow-[0_0_24px_-6px_var(--gold)]">
            <Globe2 className="h-4 w-4" strokeWidth={2.2} />
          </span>
          <span className="font-serif text-xl tracking-wide text-foreground">
            Trave<span className="text-gradient-gold">Talk</span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-light text-muted-foreground transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#download"
          className="hidden rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-medium text-ink shadow-[0_8px_30px_-10px_var(--gold)] transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Download
        </a>

        <button
          aria-label="Toggle menu"
          className="rounded-full p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass-strong mx-6 mt-3 rounded-2xl p-5 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-light text-muted-foreground hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-medium text-ink"
              >
                Download
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
