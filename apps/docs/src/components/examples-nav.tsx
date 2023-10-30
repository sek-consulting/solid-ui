import { A } from "solid-start"

const ExamplesNavBar = () => {
  return (
    <nav class="flex flex-row flex-wrap gap-6 p-6">
      <A href="/examples/dashboard" class="text-white/50" activeClass="text-white/100">
        Dashboard
      </A>
      <A href="/examples/cards" class="text-white/50" activeClass="text-white/100">
        Cards
      </A>
      <A href="/examples/tasks" class="text-white/50" activeClass="text-white/100">
        Tasks
      </A>
      <A href="/examples/playground" class="text-white/50" activeClass="text-white/100">
        Playground
      </A>
      <A href="/examples/forms" class="text-white/50" activeClass="text-white/100">
        Forms
      </A>
      <A href="/examples/music" class="text-white/50" activeClass="text-white/100">
        Music
      </A>
      <A href="/examples/authentication" class="text-white/50" activeClass="text-white/100">
        Authentication
      </A>
    </nav>
  )
}

export default ExamplesNavBar
