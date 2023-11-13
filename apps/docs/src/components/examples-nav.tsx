import type { ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import { A, useLocation } from "solid-start"

import { TbArrowRight } from "solid-icons/tb"

import { cn } from "~/lib/utils"

const examples = [
  {
    name: "Dashboard",
    href: "/examples/dashboard",
    code: "https://github.com/sek-consulting/solid-ui/tree/main/apps/docs/src/routes/examples/dashboard"
  },
  {
    name: "Cards",
    href: "/examples/cards",
    code: "https://github.com/sek-consulting/solid-ui/tree/main/apps/docs/src/routes/examples/cards"
  },
  {
    name: "Authentication",
    href: "/examples/authentication",
    code: "https://github.com/sek-consulting/solid-ui/tree/main/apps/docs/src/routes/examples/authentication"
  }
]

export function ExamplesNav(props: ComponentProps<"div">) {
  const [, rest] = splitProps(props, ["class"])
  const location = useLocation()

  console.log(location.pathname)
  return (
    <div class="relative">
      <div class={cn("mb-4 flex items-center", props.class)} {...rest}>
        {examples.map((example) => (
          <A
            href={example.href}
            class={cn(
              "flex items-center px-4",
              location.pathname?.startsWith(example.href)
                ? "text-primary font-bold"
                : "text-muted-foreground font-medium"
            )}
          >
            {example.name}
          </A>
        ))}
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
    <A
      href={example?.code}
      target="_blank"
      rel="nofollow"
      class="absolute right-0 top-0 hidden items-center rounded-[0.5rem] text-sm font-medium md:flex"
    >
      View code
      <TbArrowRight class="ml-1 h-4 w-4" />
    </A>
  )
}
