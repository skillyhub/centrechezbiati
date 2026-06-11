import Link from 'next/link';

const exploreLinks = [
  { label: 'Restaurant', href: '#restaurant' },
  { label: 'Services', href: '#services' },
  { label: 'Événements', href: '#evenements' },
  { label: 'Service traiteur', href: '#service-traiteur' },
  { label: 'Contact', href: '#contact' },
];

const contactDetails = [
  { label: 'Email', value: 'centrechezbiati@gmail.com', href: 'mailto:centrechezbiati@gmail.com' },
  { label: 'Phone', value: '+243 971 253 535', href: 'tel:+243971253535' },
  { label: 'Phone', value: '+243 812 404 930', href: 'tel:+243812404930' },
];

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-3xl tracking-[0.3em] text-card">CHEZ BIATI</span>
              <span className="mt-1 self-start font-sans text-xs tracking-[0.5em] text-accent">
                CENTRE D'ACCUEIL
              </span>
            </div>
            <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-card/60">
              Service traiteur et organisation d'événements sur mesure, à votre service.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.25em] text-card/40">Explorer</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {exploreLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-sm text-card/70 transition-colors hover:text-card"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.25em] text-card/40">Contact</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {contactDetails.map(({ label, value, href }) => (
                <li key={value} className="flex flex-col gap-0.5">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-card/30">
                    {label}
                  </span>
                  <a
                    href={href}
                    className="font-sans text-sm text-card/70 transition-colors hover:text-card"
                  >
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-card/10 pt-8 sm:flex-row sm:justify-between">
          <p className="font-sans text-xs text-card/40">
            © {new Date().getFullYear()} Centre d'accueil Chez Biati. Tous droits réservés.
          </p>
          <p className="font-sans text-xs text-card/30">République Démocratique du Congo</p>
        </div>
      </div>
    </footer>
  );
}
