import Image from "next/image"

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <Image
        src="/images/hero-table.png"
        alt="Aerial view of an elegant catered table set among palm shadows"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-foreground/40" />

      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 pb-14 lg:px-10 lg:pb-20">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-card/80">
            Bespoke Catering &amp; Events
          </p>
          <h1 className="max-w-3xl font-serif text-5xl font-light leading-[0.95] text-card text-balance sm:text-6xl lg:text-7xl">
            Where every gathering becomes a story worth telling
          </h1>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-block bg-card px-8 py-3.5 text-center font-sans text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Plan Your Event
            </a>
            <a
              href="#menus"
              className="inline-block border border-card/60 px-8 py-3.5 text-center font-sans text-xs uppercase tracking-[0.22em] text-card transition-colors hover:bg-card hover:text-foreground"
            >
              Explore Menus
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 hidden items-center gap-3 lg:right-10 lg:flex">
        <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-card/70">
          Est. 2009 · By the Sea
        </span>
      </div>
    </section>
  )
}
