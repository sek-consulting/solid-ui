import type { Component } from "solid-js"
import { splitProps } from "solid-js"

import { Separator as SeparatorPrimitive } from "@kobalte/core"

import { cn } from "~/lib/utils"

const Separator: Component<SeparatorPrimitive.SeparatorRootProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "orientation"])
  return (
    <SeparatorPrimitive.Root
      orientation={props.orientation ?? "horizontal"}
      class={cn(
        "shrink-0 bg-border",
        props.orientation === "vertical" ? "h-full w-[1px]" : "h-[1px] w-full",
        props.class
      )}
      {...rest}
    />
  )
}

export { Separator }
