import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"

import { cn } from "~/lib/utils"

const Skeleton: Component<ComponentProps<"div">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <div class={cn("bg-primary/10 animate-pulse rounded-md", props.class)} {...rest} />
}

export { Skeleton }
