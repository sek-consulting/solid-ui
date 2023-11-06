import { Outlet } from "solid-start"

import { ExamplesNav } from "~/components/examples-nav"
import { HeroSection } from "~/components/hero-section"

export default function Examples() {
  return (
    <div class="container relative">
      <HeroSection />
      <section>
        <ExamplesNav />
        <div class="bg-background overflow-hidden rounded-[0.5rem] border shadow">
          <Outlet />
        </div>
      </section>
    </div>
  )
}
