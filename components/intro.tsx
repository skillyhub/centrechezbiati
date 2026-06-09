export function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="font-serif text-3xl font-light text-accent">Hello</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="font-serif text-2xl font-light leading-relaxed text-foreground text-pretty lg:text-3xl">
            Great gatherings have stories that go beyond a meal — they offer moments of
            connection, unexpected delight, and flavours to be savoured and retold.
          </p>
          <p className="mt-6 font-sans text-base leading-relaxed text-muted-foreground">
            Maison Verde is a full-service catering house built on seasonal produce, considered
            design, and the kind of warm, intuitive hospitality that makes hosting effortless.
            Once upon a time, by the sea…
          </p>
        </div>
      </div>
    </section>
  )
}
