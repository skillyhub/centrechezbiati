import Image from "next/image";

export function StorySection() {
  return (
    <section id="experiences" className="mx-auto max-w-7xl px-6 lg:px-10">
      {/* A Menu Begins */}
      <div className="grid gap-10 pb-28 md:grid-cols-12 md:items-start">
        <div className="md:col-span-4 md:pt-24">
          <h3 className="font-serif text-3xl font-light text-accent">
            Un Menu commence
          </h3>
          <p className="mt-6 font-sans text-sm leading-relaxed text-muted-foreground">
            Tout commence au marché, avant que le soleil ne soit haut dans le
            ciel : l'appel des fruits à noyau mûrs, des herbes encore fraîches
            de rosée, du poisson arrivé à l'aube. Le projet d'un dîner simple
            prévu pour la veille s'est envolé ; les produits sont trop
            irrésistibles.
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
            Nous élaborons nos menus au gré du déroulement de la journée : sans
            précipitation, au rythme des saisons, et pensés pour être partagés.
            Un plateau de fruits, un verre bien frais, et la réunion a tout ce
            qu'il faut pour être réussie.
          </p>
          <a
            href="#menus"
            className="mt-6 inline-block font-sans text-xs uppercase tracking-[0.2em] text-accent underline-offset-8 hover:underline"
          >
            Découvrez nos menus de saison
          </a>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/plated-dish.png"
              alt="A beautifully plated seasonal dish"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Time to Gather */}
      <div
        id="events"
        className="grid gap-10 pb-28 md:grid-cols-12 md:items-end"
      >
        <div className="md:col-span-7 md:order-2">
          <div className="relative aspect-[5/4] w-full overflow-hidden">
            <Image
              src="/images/wedding-event.png"
              alt="An elegant private dining event space"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-4 md:order-1 md:pb-8">
          <h3 className="font-serif text-3xl font-light text-accent">
            C'est l'heure de se réunir
          </h3>
          <p className="mt-6 font-sans text-sm leading-relaxed text-muted-foreground">
            Un événement ne se résume pas à la nourriture. La disposition en
            amphithéâtre d’une longue table, le silence qui précède le premier
            toast, la fluidité du service qui vous permet de vous sentir
            simplement comme un invité à votre propre fête.
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
            De dîners intimes aux mariages en jardin, nous façonnons la pièce,
            le rythme et la récompense — afin que la soirée se déroule
            exactement comme elle devrait.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block font-sans text-xs uppercase tracking-[0.2em] text-accent underline-offset-8 hover:underline"
          >
            Découvrez nos services d'événements
          </a>
        </div>
      </div>

      {/* The Stars Come Out */}
      <div className="grid gap-10 pb-28 md:grid-cols-12 md:items-start">
        <div className="md:col-span-4 md:pt-24">
          <h3 className="font-serif text-3xl font-light text-accent">
            Les étoiles apparaissent
          </h3>
          <p className="mt-6 font-sans text-sm leading-relaxed text-muted-foreground">
            Alors que la nuit tombe, la cuisine fait de la production fraîche le
            héros et conjure des saveurs qui transportent. Les canapés
            circulent, les verres sont remplis, et la conversation trouve sa
            deuxième souffle.
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
            Le bar invite tout le monde à prendre un dernier verre — parmi son
            habituelle foule d’habitués et de nouveaux amis que vous connaîtrez
            dès le lendemain matin. De nouveaux chapitres s’ouvrent.
          </p>
          <a
            href="#menus"
            className="mt-6 inline-block font-sans text-xs uppercase tracking-[0.2em] text-accent underline-offset-8 hover:underline"
          >
            Découvrez nos menus de boissons et de canapés
          </a>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/canapes.png"
              alt="Elegant canapés and sparkling wine"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
