import { Outlet } from "solid-start"

import { ExamplesNav } from "~/components/examples-nav"
import { HeroSection } from "~/components/hero-section"
import { MetaHead } from "~/components/meta-head"

export default function Examples() {
  return (
    <>
      <MetaHead
        title="Examples"
        description="Check out some examples app built using the components."
      />
      <div class="container relative">
        <HeroSection />
        <section>
          <ExamplesNav />
          <div class="overflow-hidden rounded-[0.5rem] border bg-background shadow">
            <Outlet />
          </div>
        </section>
      </div>
    </>
  )
}
