import Dashboard from "./examples/dashboard"
import { ExamplesNav } from "~/components/examples-nav"
import { HeroSection } from "~/components/hero-section"

export default function Home() {
  return (
    <div class="container relative">
      <HeroSection />
      <section>
        <ExamplesNav />
        <div class="bg-background overflow-hidden rounded-[0.5rem] border shadow">
          <Dashboard />
        </div>
      </section>
    </div>
  )
}
