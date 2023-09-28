import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"

import { cn } from "~/lib/utils"

const Textarea: Component<ComponentProps<"textarea">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <textarea
      class={cn(
        "border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        props.class
      )}
      {...rest}
    />
  )
}

export { Textarea }
