import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Gallery | Maison Verde",
  description:
    "A look at weddings, private dinners, grazing tables, and gatherings catered by Maison Verde.",
}

const gallery = [
  { src: "/images/hero-table.png", alt: "A long outdoor banquet table set at golden hour", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/plated-dish.png", alt: "A plated seasonal fine-dining dish", span: "" },
  { src: "/images/canapes.png", alt: "Elegant canapés on a stone board", span: "" },
  { src: "/images/wedding-event.png", alt: "An outdoor wedding reception at dusk", span: "md:col-span-2" },
  { src: "/images/grazing-table.png", alt: "An abundant grazing table", span: "" },
  { src: "/images/dessert.png", alt: "A plated seasonal dessert", span: "" },
  { src: "/images/chef-plating.png", alt: "A chef plating a dish", span: "" },
  { src: "/images/cocktail.png", alt: "Artisan cocktails at an event bar", span: "" },
  { src: "/images/corporate-event.png", alt: "A sophisticated corporate dining space", span: "md:col-span-2" },
  { src: "/images/private-dining.png", alt: "An intimate private dining setting by candlelight", span: "" },
]

export default function GalleryPage() {
  return (
    <main className="bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Gallery"
        title="Moments from the table"
        description="A glimpse of the gatherings we've had the privilege of catering — each one shaped by the season, the setting, and the people around the table."
        image="/images/hero-table.png"
        imageAlt="A long outdoor banquet table set at golden hour"
      />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:auto-rows-[300px]">
          {gallery.map((item, i) => (
            <figure
              key={item.src + i}
              className={`group relative overflow-hidden ${item.span}`}
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/20" />
            </figure>
          ))}
        </div>

        <div className="mt-24 border-t border-border pt-16 text-center lg:mt-32">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-light text-foreground text-balance lg:text-4xl">
            Picture your gathering here
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground">
            We&apos;d love to hear what you&apos;re planning and bring the same care to your
            table.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-foreground px-10 py-3.5 font-sans text-xs uppercase tracking-[0.22em] text-card transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Enquire now
          </Link>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
