import { Outlet } from "solid-start"

import { TbBrandGithub } from "solid-icons/tb"

import ExamplesNavBar from "~/components/examples-nav"
import { HeroSection } from "~/components/hero-section"
import { MetaHead } from "~/components/meta-head"
import { buttonVariants } from "~/registry/ui/button"

export default function Index() {
  return (
    <>
      <MetaHead
        title="Examples"
        description="Check out some examples app built using the components."
      />
    <div class="container relative">
      <HeroSection/>
      <section>
        <ExamplesNavBar/>
        <Outlet/>
      </section>
    </div>
    </>
  )
}