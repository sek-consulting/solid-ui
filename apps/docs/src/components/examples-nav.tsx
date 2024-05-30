import type { ComponentProps } from "solid-js"
import { For, splitProps } from "solid-js"

import { useLocation } from "@solidjs/router"

import { cn } from "~/lib/utils"

import { IconArrowRight } from "./icons"

const examples = [
  {
    name: "Mail",
    href: "/examples/mail",
    code: "https://github.com/sek-consulting/solid-ui/tree/main/apps/docs/src/components/mail"
  },
  {
    name: "Dashboard",
    href: "/examples/dashboard",
    code: "https://github.com/sek-consulting/solid-ui/tree/main/apps/docs/src/components/dashboard"
  },
  {
    name: "Cards",
    href: "/examples/cards",
    code: "https://github.com/sek-consulting/solid-ui/tree/main/apps/docs/src/components/cards"
  },
  {
    name: "Authentication",
    href: "/examples/authentication",
    code: "https://github.com/sek-consulting/solid-ui/tree/main/apps/docs/src/components/authentication"
  }
]

export function ExamplesNav(props: ComponentProps<"div">) {
  const [, rest] = splitProps(props, ["class"])
  const location = useLocation()

  return (
    <div class="relative">
      <div class={cn("mb-4 flex items-center", props.class)} {...rest}>
        <For each={examples}>
          {(example) => (
            <a
              href={example.href}
              class={cn(
                "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                location.pathname?.startsWith(example.href) || location.pathname === "/"
                  ? "bg-muted font-medium text-primary"
                  : "text-muted-foreground"
              )}
            >
              {example.name}
            </a>
          )}
        </For>
      </div>
      <ExampleCodeLink
        pathname={location.pathname === "/" ? "/examples/dashboard" : location.pathname}
      />
    </div>
  )
}

export function ExampleCodeLink(props: { pathname: string | null }) {
  const example = examples.find((example) => props.pathname?.startsWith(example.href))

  if (!example?.code) {
    return null
  }

  return (
    <a
      href={example?.code}
      target="_blank"
      rel="nofollow"
      class="absolute right-0 top-0 hidden items-center rounded-[0.5rem] text-sm font-medium md:flex"
    >
      View code
      <IconArrowRight class="ml-1 size-4" />
    </a>
  )
}
