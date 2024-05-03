import type { Component, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import { PolymorphicProps } from "@kobalte/core/polymorphic"
import { Skeleton as SkeletonPrimitive, SkeletonRootProps } from "@kobalte/core/skeleton"

import { cn } from "~/lib/utils"

type RootProps<T extends ValidComponent = "div"> = PolymorphicProps<T, SkeletonRootProps>

const Skeleton: Component<RootProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <SkeletonPrimitive
      class={cn("bg-primary/10 data-[animate='true']:animate-pulse ", props.class)}
      {...rest}
    />
  )
}

export { Skeleton }
