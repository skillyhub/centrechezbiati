const menus = [
  {
    title: 'Intimate Dinners',
    desc: 'Seated experiences for two to twenty — multi-course tasting menus, plated and served in your home.',
    items: ['Seasonal tasting menu', 'Wine pairing', 'Private chef & service'],
  },
  {
    title: 'Celebrations & Weddings',
    desc: 'Full-scale events with bespoke menus, styling, and a service team that anticipates every need.',
    items: ['Canapé receptions', 'Family-style feasts', 'Late-night bar & bites'],
  },
  {
    title: 'Corporate & Cocktail',
    desc: 'Polished grazing tables, canapés, and bar programs for launches, offsites, and milestones.',
    items: ['Grazing installations', 'Signature cocktails', 'Branded touches'],
  },
];

export function Menus() {
  return (
    <section id="chambres" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent">What we do</p>
          <h2 className="mt-4 font-serif text-4xl font-light text-foreground text-balance lg:text-5xl">
            Menus & experiences, shaped around you
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-muted-foreground">
            Every brief is different. We&apos;ll build something just for your gathering — but
            here&apos;s where most of our stories begin.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {menus.map((menu, i) => (
            <div key={menu.title} className="flex flex-col bg-card p-8 lg:p-10">
              <span className="font-serif text-2xl text-accent/70">0{i + 1}</span>
              <h3 className="mt-5 font-serif text-2xl font-light text-foreground">{menu.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                {menu.desc}
              </p>
              <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-6">
                {menu.items.map((item) => (
                  <li key={item} className="font-sans text-sm text-foreground/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
