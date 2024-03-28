import type { Component } from "solid-js"
import { splitProps } from "solid-js"

import { Skeleton as SkeletonPrimitive } from "@kobalte/core"

import { cn } from "~/lib/utils"

const Skeleton: Component<SkeletonPrimitive.SkeletonProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <SkeletonPrimitive.Root
      class={cn("bg-primary/10 data-[animate='true']:animate-pulse ", props.class)}
      {...rest}
    />
  )
}

export { Skeleton }
