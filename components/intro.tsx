export function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="font-serif text-3xl font-light text-accent">Salut</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="font-serif text-2xl font-light leading-relaxed text-foreground text-pretty lg:text-3xl">
            Nous vous offrons une expérience complète : restaurant de qualité,
            des chambres confortables, espaces modulables pour cérémonies,
            réunions et conférences, et un service traiteur itinérant pour vos
            événements.
          </p>
          <p className="mt-6 font-sans text-base leading-relaxed text-muted-foreground">
            Le Centre d'accueil chez Biati est un service de traiteur complet
            qui s'appuie sur des produits de saison, un design soigné et une
            hospitalité chaleureuse et intuitive qui facilite l'organisation de
            vos réceptions. Il était une fois, au bord du lac...
          </p>
        </div>
      </div>
    </section>
  );
}
