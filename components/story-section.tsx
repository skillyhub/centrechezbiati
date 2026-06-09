import Image from 'next/image';

export function StorySection() {
  return (
    <section id="restaurant" className="mx-auto max-w-7xl px-6 lg:px-10">
      {/* A Menu Begins */}
      <div className="grid gap-10 pb-28 md:grid-cols-12 md:items-start">
        <div className="md:col-span-4 md:pt-24">
          <h3 className="font-serif text-3xl font-light text-accent">A Menu Begins</h3>
          <p className="mt-6 font-sans text-sm leading-relaxed text-muted-foreground">
            It starts at the market before the sun is high — the call of ripe stone fruit, herbs
            still cool with dew, fish that arrived at dawn. Last night&apos;s plan for a simple
            supper has ebbed; the produce is too persuasive.
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
            We build menus the way a day unfolds — unhurried, seasonal, and made to be shared. A
            platter of fruit, a chilled glass, and the gathering has all the virtue it needs.
          </p>
          <a
            href="#menus"
            className="mt-6 inline-block font-sans text-xs uppercase tracking-[0.2em] text-accent underline-offset-8 hover:underline"
          >
            Explore our seasonal menus
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
      <div id="events" className="grid gap-10 pb-28 md:grid-cols-12 md:items-end">
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
          <h3 className="font-serif text-3xl font-light text-accent">Time to Gather</h3>
          <p className="mt-6 font-sans text-sm leading-relaxed text-muted-foreground">
            There&apos;s more to an event than the food. The amphitheatre of a long table, the hush
            before the first toast, the easy choreography of service that lets you simply be a guest
            at your own party.
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
            From intimate dinners to garden weddings, we shape the room, the rhythm, and the reward
            — so the evening moves exactly as it should.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block font-sans text-xs uppercase tracking-[0.2em] text-accent underline-offset-8 hover:underline"
          >
            Explore our event services
          </a>
        </div>
      </div>

      {/* The Stars Come Out */}
      <div className="grid gap-10 pb-28 md:grid-cols-12 md:items-start">
        <div className="md:col-span-4 md:pt-24">
          <h3 className="font-serif text-3xl font-light text-accent">The Stars Come Out</h3>
          <p className="mt-6 font-sans text-sm leading-relaxed text-muted-foreground">
            As night falls, the kitchen makes the fresh produce the hero and conjures flavours that
            transport. Canapés circulate, glasses are refilled, and conversation finds its second
            wind.
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
            The bar summons everyone for a nightcap — among its usual assortment of regulars and new
            friends you&apos;ll know by morning. New chapters begin.
          </p>
          <a
            href="#menus"
            className="mt-6 inline-block font-sans text-xs uppercase tracking-[0.2em] text-accent underline-offset-8 hover:underline"
          >
            Explore drink &amp; canapé menus
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
