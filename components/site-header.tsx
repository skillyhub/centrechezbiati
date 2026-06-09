"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Experiences", href: "#experiences" },
  { label: "Menus", href: "#menus" },
  { label: "Events", href: "#events" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Only the home page has a full-bleed hero behind a transparent header.
  const overlay = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Solid styling when not overlaying a hero, or once scrolled past the top.
  const solid = !overlay || scrolled

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid ? "bg-background/90 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span
            className={cn(
              "font-serif text-2xl tracking-[0.3em] transition-colors",
              solid ? "text-foreground" : "text-card",
            )}
          >
            MAISON
          </span>
          <span
            className={cn(
              "self-end font-sans text-[0.6rem] tracking-[0.5em] transition-colors",
              solid ? "text-accent" : "text-card/80",
            )}
          >
            VERDE
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-sans text-xs uppercase tracking-[0.18em] transition-colors hover:text-accent",
                solid ? "text-foreground" : "text-card",
                pathname === link.href && "text-accent",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className={cn(
            "hidden border px-6 py-2.5 font-sans text-xs uppercase tracking-[0.18em] transition-colors md:inline-block",
            solid
              ? "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              : "border-card/60 text-card hover:bg-card hover:text-foreground",
          )}
        >
          Enquire
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn("md:hidden", solid ? "text-foreground" : "text-card")}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-border/60 py-3 font-sans text-sm uppercase tracking-[0.18em] text-foreground last:border-0",
                  pathname === link.href && "text-accent",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-accent px-6 py-3 text-center font-sans text-xs uppercase tracking-[0.18em] text-accent-foreground"
            >
              Enquire
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
