import Link from "next/link";

const exploreLinks = [
  { label: "Menus", href: "/menus" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const columns = [
  {
    title: "Contact",
    links: ["centrechezbiati@gmail.com", "+243971253535", "+243812404930"],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-card">
      <div className="mx-auto flex-col max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-3xl tracking-[0.3em] text-card">
                CHEZ BIATI
              </span>
              <span className="self-start font-sans text-xs tracking-[0.5em] text-accent">
                CENTRE D'ACCUEIL
              </span>
            </div>
            <p className="mt-6 max-w-xs font-sans text-sm leading-relaxed text-card/70">
              Service traiteur et organisation d'événements sur mesure
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="font-sans text-xs uppercase tracking-[0.25em] text-card/50">
                {col.title}
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <span className="font-sans text-sm text-card/80">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 gap-4 border-t border-card/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-card/50">
            © {new Date().getFullYear()} Centre d'accueil Chez Biati. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
