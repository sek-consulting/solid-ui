import Dashboard from "./examples/dashboard"
import ExamplesNavBar from "~/components/examples-nav"
import { HeroSection } from "~/components/hero-section"

export default function Home() {
  return (
    <div class="container relative">
      <HeroSection />
      <section>
        <ExamplesNavBar/>
          <Dashboard />
      </section>
    </div>
  )
}
