import type { Component } from "solid-js"
import { splitProps } from "solid-js"

import { Progress as ProgressPrimitive } from "@kobalte/core"

import { cn } from "~/lib/utils"

const Progress: Component<ProgressPrimitive.ProgressRootProps> = (props) => {
  const [, rest] = splitProps(props, ["children"])
  return (
    <ProgressPrimitive.Root {...rest}>
      {props.children}
      <ProgressPrimitive.Track class="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
        <ProgressPrimitive.Fill class="h-full w-[var(--kb-progress-fill-width)] flex-1 bg-primary transition-all" />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  )
}

const ProgressLabel: Component<ProgressPrimitive.ProgressLabelProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ProgressPrimitive.Label
      class={cn("text-sm font-medium leading-none", props.class)}
      {...rest}
    />
  )
}

const ProgressValueLabel: Component<ProgressPrimitive.ProgressValueLabelProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ProgressPrimitive.ValueLabel
      class={cn("text-sm font-medium leading-none", props.class)}
      {...rest}
    />
  )
}

export { Progress, ProgressLabel, ProgressValueLabel }
