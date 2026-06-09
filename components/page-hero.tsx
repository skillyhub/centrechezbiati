import Image from "next/image"

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: string
  description?: string
  image: string
  imageAlt: string
}) {
  return (
    <section className="relative flex min-h-[60svh] items-end overflow-hidden md:min-h-[70svh]">
      <Image src={image} alt={imageAlt} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/10 to-foreground/55" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 lg:px-10 lg:pb-20">
        <p className="font-sans text-xs uppercase tracking-[0.4em] text-card/80">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-serif text-5xl font-light leading-[0.95] text-card text-balance sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-card/85">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
