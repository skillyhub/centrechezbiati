import Link from "next/link"

const exploreLinks = [
  { label: "Menus", href: "/menus" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
]

const columns = [
  {
    title: "Visit",
    links: ["46 James Street", "Fortitude Valley", "QLD, Australia 4006"],
  },
  {
    title: "Contact",
    links: ["hello@maisonverde.com", "+61 7 5607 5888", "Instagram @maisonverde"],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-3xl tracking-[0.3em] text-card">MAISON</span>
              <span className="self-start font-sans text-xs tracking-[0.5em] text-accent">
                VERDE
              </span>
            </div>
            <p className="mt-6 max-w-xs font-sans text-sm leading-relaxed text-card/70">
              Bespoke catering and events, crafted from seasonal produce and a love of good
              company — by the sea since 2009.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-sans text-xs uppercase tracking-[0.25em] text-card/50">Explore</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-card/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="font-sans text-xs uppercase tracking-[0.25em] text-card/50">
                {col.title}
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <span className="font-sans text-sm text-card/80">{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-card/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-card/50">
            © {new Date().getFullYear()} Maison Verde Catering. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-sans text-xs text-card/50 hover:text-card">
              Privacy
            </a>
            <a href="#" className="font-sans text-xs text-card/50 hover:text-card">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
