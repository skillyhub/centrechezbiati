import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Contact } from "@/components/contact"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Maison Verde",
  description:
    "Enquire about catering for your wedding, corporate event, or private dinner. Maison Verde — Fortitude Valley, QLD.",
}

const details = [
  { icon: MapPin, label: "Studio", lines: ["46 James Street", "Fortitude Valley, QLD 4006"] },
  { icon: Phone, label: "Phone", lines: ["+61 7 5607 5888"] },
  { icon: Mail, label: "Email", lines: ["hello@maisonverde.com"] },
  { icon: Clock, label: "Hours", lines: ["Mon–Fri, 9am–5pm", "Events by appointment"] },
]

export default function ContactPage() {
  return (
    <main className="bg-background">
      <SiteHeader />

      {/* Intro band (sits below the fixed header) */}
      <section className="bg-secondary pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-accent">Get in touch</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-light leading-[0.95] text-foreground text-balance lg:text-6xl">
            Let&apos;s plan something memorable
          </h1>
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-muted-foreground">
            Whether it&apos;s an intimate dinner or a celebration for hundreds, we&apos;d love to
            hear about it. Reach us directly, or send an enquiry below.
          </p>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((d) => (
              <div key={d.label} className="flex flex-col gap-3">
                <d.icon className="size-5 text-accent" />
                <h2 className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {d.label}
                </h2>
                <div className="flex flex-col gap-1">
                  {d.lines.map((line) => (
                    <span key={line} className="font-serif text-lg font-light text-foreground">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form (reused from home) */}
      <Contact />

      <SiteFooter />
    </main>
  )
}
