import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Services | Maison Verde",
  description:
    "Weddings, corporate events, and private dining — full-service catering, styling, and hospitality from Maison Verde.",
}

const services = [
  {
    title: "Weddings",
    image: "/images/wedding-event.png",
    desc: "From garden ceremonies to grand receptions, we craft the menu, the flow, and the small moments — so you can be fully present on the day.",
    includes: ["Bespoke menu design", "Styling & table design", "Full service team", "Bar & beverage program"],
  },
  {
    title: "Corporate & Cocktail",
    image: "/images/corporate-event.png",
    desc: "Polished catering for launches, conferences, offsites, and milestones — considered, on-brand, and effortlessly run.",
    includes: ["Canapé & grazing stations", "Seated business lunches", "Branded touches", "On-site coordination"],
  },
  {
    title: "Private Dining",
    image: "/images/private-dining.png",
    desc: "Intimate dinners in your home with a private chef and seamless service — the warmth of hosting, none of the work.",
    includes: ["Multi-course tasting menus", "Private chef & server", "Wine pairing", "Full kitchen reset"],
  },
]

const process = [
  { step: "01", title: "Enquiry", desc: "Share your date, guest count, and the feeling you're after. We'll confirm availability." },
  { step: "02", title: "Proposal", desc: "We design a tailored menu and service plan, with transparent pricing." },
  { step: "03", title: "Tasting", desc: "Sample your menu and refine every detail together before the day." },
  { step: "04", title: "The Event", desc: "Our team handles setup, service, and pack-down — you simply host." },
]

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="What We Do"
        title="Full-service catering, start to finish"
        description="Menus, styling, staff, and beverages — managed end to end by a team that has done it thousands of times, so your gathering feels effortless."
        image="/images/wedding-event.png"
        imageAlt="An elegant outdoor wedding reception at dusk"
      />

      {/* Services */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col gap-20 lg:gap-28">
          {services.map((service, i) => (
            <section key={service.title} className="grid gap-10 md:grid-cols-12 md:items-center">
              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={`md:col-span-4 ${i % 2 === 1 ? "md:order-1 md:col-start-1" : "md:col-start-9"}`}>
                <h2 className="font-serif text-3xl font-light text-foreground lg:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
                <ul className="mt-7 flex flex-col gap-3 border-t border-border pt-6">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="font-sans text-sm text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Process */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent">How it works</p>
            <h2 className="mt-4 font-serif text-4xl font-light text-foreground text-balance lg:text-5xl">
              A calm, considered process
            </h2>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="flex flex-col bg-card p-8 lg:p-10">
                <span className="font-serif text-3xl font-light text-accent/70">{p.step}</span>
                <h3 className="mt-5 font-serif text-xl font-light text-foreground">{p.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-32">
        <h2 className="mx-auto max-w-2xl font-serif text-4xl font-light text-foreground text-balance lg:text-5xl">
          Have a date in mind?
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground">
          Tell us about your event and we&apos;ll send ideas, availability, and a tailored
          proposal within two business days.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-foreground px-10 py-3.5 font-sans text-xs uppercase tracking-[0.22em] text-card transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Start an enquiry
        </Link>
      </section>

      <SiteFooter />
    </main>
  )
}
