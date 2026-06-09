const menus = [
  {
    title: "Hébergement",
    desc: "Des chambres soigneusement aménagées : confort moderne, literie de qualité, pour votre repos calme et doux.",
    items: ["Wi-Fi", "Bianderie", "Dejeuner sur place"],
  },
  {
    title: "Événements & Conférences",
    desc: "Un espace modulable pour cérémonies, réunions et conférences, capacité 200–250 personnes, équipements audiovisuels et options de restauration sur mesure.",
    items: [
      "200 à 250 personnes",
      "conférences, mariages, ",
      "Reunions et événements privés",
    ],
  },
  {
    title: "Restaurant & Service Traiteur",
    desc: "Cuisine locale et internationale, menus de saison, options végétariennes et plats signature préparés avec des ingrédients frais et locaux.",
    items: [
      "préparation",
      "acheminement et service sur site",
      "Adaptation aux contraintes logistiques.",
    ],
  },
];

export function Menus() {
  return (
    <section id="services" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent">
            Ce que nous faisons
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-foreground text-balance lg:text-5xl">
            Des menus et des expériences conçus spécialement pour vous
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-muted-foreground">
            Chaque projet est unique. Nous créerons quelque chose spécialement
            pour votre événement — mais c’est souvent ainsi que commencent la
            plupart de nos histoires.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {menus.map((menu, i) => (
            <div key={menu.title} className="flex flex-col bg-card p-8 lg:p-10">
              <span className="font-serif text-2xl text-accent/70">
                0{i + 1}
              </span>
              <h3 className="mt-5 font-serif text-2xl font-light text-foreground">
                {menu.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                {menu.desc}
              </p>
              <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-6">
                {menu.items.map((item) => (
                  <li
                    key={item}
                    className="font-sans text-sm text-foreground/80"
                  >
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
