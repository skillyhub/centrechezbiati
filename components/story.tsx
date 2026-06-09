import Image from "next/image";

const stats = [
  { value: "5+", label: "Service traiteur" },
  { value: "170", label: "Evénements organisés" },
  { value: "100%", label: "Issus de la production locale" },
];

export function Story() {
  return (
    <section
      id="service-traiteur"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="grid gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/chef-plating.png"
              alt="A chef plating dishes in a warm kitchen"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent">
            Notre histoire
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-foreground text-balance lg:text-5xl">
            Cuisiner au rythme des saisons, recevoir avec cœur
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-muted-foreground">
            Le Centre d'accueil Chez Biati a vu le jour autour d'une simple
            longue table dressée sous un figuier. Aujourd'hui, notre équipe de
            chefs, de stylistes et d'hôtes met cette même générosité au service
            de rassemblements de toutes tailles — avec les produits du terroir
            au cœur de nos créations, guidés par le savoir-faire, et toujours
            proches de la côte qui nous a façonnés.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl font-light text-accent">
                  {s.value}
                </p>
                <p className="mt-2 font-sans text-xs leading-snug text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
