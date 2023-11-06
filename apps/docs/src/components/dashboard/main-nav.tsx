import type { ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import { A } from "solid-start"

import { cn } from "~/lib/utils"

export function MainNav(props: ComponentProps<"nav">) {
  const [, rest] = splitProps(props, ["class"])
  return (
    <nav class={cn("flex items-center space-x-4 lg:space-x-6", props.class)} {...rest}>
      <A
        href="/examples/dashboard"
        class="hover:text-primary text-sm font-medium transition-colors"
      >
        Overview
      </A>
      <A
        href="/examples/dashboard"
        class="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Customers
      </A>
      <A
        href="/examples/dashboard"
        class="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Products
      </A>
      <A
        href="/examples/dashboard"
        class="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
      >
        Settings
      </A>
    </nav>
  )
}
