import type { Component, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import { PolymorphicProps } from "@kobalte/core/polymorphic"
import { Separator as SeparatorPrimitive, SeparatorRootProps } from "@kobalte/core/separator"

import { cn } from "~/lib/utils"

type RootProps<T extends ValidComponent = "hr"> = PolymorphicProps<T, SeparatorRootProps>

const Separator: Component<RootProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "orientation"])
  return (
    <SeparatorPrimitive
      orientation={props.orientation ?? "horizontal"}
      class={cn(
        "shrink-0 bg-border",
        props.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        props.class
      )}
      {...rest}
    />
  )
}

export { Separator }
