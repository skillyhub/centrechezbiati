import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Menus | Maison Verde",
  description:
    "Seasonal canapés, shared feasts, plated dinners, grazing tables, and bar programs — sample menus from Maison Verde catering.",
}

const menuSections = [
  {
    name: "Canapés & Receptions",
    image: "/images/canapes.png",
    note: "Passed bites and stationed grazing to open every gathering.",
    items: [
      { dish: "Kingfish crudo, finger lime, cucumber", detail: "Chilled, citrus-cured" },
      { dish: "Heirloom tomato tart, whipped ricotta", detail: "Seasonal, vegetarian" },
      { dish: "Confit duck, fig, toasted brioche", detail: "Warm canapé" },
      { dish: "Zucchini fritter, lemon yoghurt", detail: "Vegetarian, GF option" },
    ],
  },
  {
    name: "Shared Feasts",
    image: "/images/grazing-table.png",
    note: "Generous, family-style platters made for the centre of the table.",
    items: [
      { dish: "Slow-roasted lamb shoulder, salsa verde", detail: "Served to share" },
      { dish: "Whole baked snapper, fennel & herbs", detail: "Market fish" },
      { dish: "Charred greens, almond, preserved lemon", detail: "Vegetarian" },
      { dish: "Heritage grains, roast pumpkin, feta", detail: "Vegetarian, GF" },
    ],
  },
  {
    name: "Plated Dinners",
    image: "/images/plated-dish.png",
    note: "Multi-course tasting menus, plated and served by our team.",
    items: [
      { dish: "Seared scallop, brown butter, pea", detail: "Entrée" },
      { dish: "Dry-aged beef, charred onion, jus", detail: "Main" },
      { dish: "Wild mushroom risotto, aged parmesan", detail: "Vegetarian main" },
      { dish: "Stone fruit tart, vanilla cream", detail: "Dessert" },
    ],
  },
  {
    name: "Sweets & Bar",
    image: "/images/dessert.png",
    note: "Dessert tables, late-night bites, and a considered drinks list.",
    items: [
      { dish: "Olive oil cake, mascarpone, citrus", detail: "Dessert table" },
      { dish: "Dark chocolate & sea salt truffles", detail: "Petit four" },
      { dish: "Garden spritz, seasonal botanicals", detail: "Signature cocktail" },
      { dish: "Curated wine & non-alcoholic pairings", detail: "Bar program" },
    ],
  },
]

export default function MenusPage() {
  return (
    <main className="bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Seasonal Menus"
        title="Led by produce, made to be shared"
        description="Every menu is built around the season and your gathering. Below are signature dishes our guests return to — consider it a starting point for your own."
        image="/images/grazing-table.png"
        imageAlt="An abundant grazing table of seasonal produce"
      />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col gap-24 lg:gap-32">
          {menuSections.map((section, i) => (
            <section
              key={section.name}
              className="grid gap-10 md:grid-cols-12 md:items-center"
            >
              <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={section.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div
                className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1 md:col-start-1" : "md:col-start-8"}`}
              >
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent">
                  0{i + 1}
                </p>
                <h2 className="mt-4 font-serif text-3xl font-light text-foreground lg:text-4xl">
                  {section.name}
                </h2>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                  {section.note}
                </p>
                <ul className="mt-8 flex flex-col divide-y divide-border border-t border-border">
                  {section.items.map((item) => (
                    <li
                      key={item.dish}
                      className="flex items-baseline justify-between gap-6 py-4"
                    >
                      <span className="font-serif text-lg font-light text-foreground">
                        {item.dish}
                      </span>
                      <span className="shrink-0 font-sans text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                        {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-24 border-t border-border pt-16 text-center lg:mt-32">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-light text-foreground text-balance lg:text-4xl">
            Dietary needs and bespoke requests are always welcome
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground">
            Tell us how you like to host and we&apos;ll design a menu to match — vegetarian,
            vegan, gluten-free, and allergy-conscious options across every course.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-foreground px-10 py-3.5 font-sans text-xs uppercase tracking-[0.22em] text-card transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Request a tailored menu
          </Link>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
