import { ParentProps } from "solid-js"

import { ExamplesNav } from "~/components/examples-nav"
import { HeroSection } from "~/components/hero-section"
import { MetaTags } from "~/components/meta-tags"

export default function Examples(props: ParentProps) {
  return (
    <>
      <MetaTags
        title="Examples"
        description="Check out some examples app built using the components."
      />
      <div class="container relative">
        <HeroSection />
        <section>
          <ExamplesNav />
          <div class="overflow-hidden rounded-[0.5rem] border bg-background shadow">
            {props.children}
          </div>
        </section>
      </div>
    </>
  )
}
