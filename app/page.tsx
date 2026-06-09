import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { StorySection } from "@/components/story-section"
import { Menus } from "@/components/menus"
import { Story } from "@/components/story"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="bg-background">
      <SiteHeader />
      <Hero />
      <Intro />
      <StorySection />
      <Menus />
      <Story />
      <Contact />
      <SiteFooter />
    </main>
  )
}
