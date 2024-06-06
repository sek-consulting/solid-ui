import { ExamplesNav } from "~/components/examples-nav"
import { HeroSection } from "~/components/hero-section"
import { Mail } from "~/components/mail"

export default function Home() {
  return (
    <div class="container relative">
      <HeroSection />
      <section>
        <ExamplesNav />
        <div class="overflow-hidden rounded-[0.5rem] border bg-background shadow">
          <Mail />
        </div>
      </section>
    </div>
  )
}
