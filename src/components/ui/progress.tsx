import type { Component } from "solid-js"
import { splitProps } from "solid-js"

import { Progress as ProgressPrimitive } from "@kobalte/core"

import { Label } from "~/components/ui/label"

const Progress: Component<ProgressPrimitive.ProgressRootProps> = (props) => {
  const [, rest] = splitProps(props, ["children"])
  return (
    <ProgressPrimitive.Root {...rest}>
      {props.children}
      <ProgressPrimitive.Track class="bg-secondary relative h-4 w-full overflow-hidden rounded-full">
        <ProgressPrimitive.Fill class="bg-primary h-full w-[var(--kb-progress-fill-width)] flex-1 transition-all" />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  )
}

const ProgressLabel: Component<ProgressPrimitive.ProgressLabelProps> = (props) => {
  return <ProgressPrimitive.Label as={Label} {...props} />
}

const ProgressValueLabel: Component<ProgressPrimitive.ProgressValueLabelProps> = (props) => {
  return <ProgressPrimitive.ValueLabel as={Label} {...props} />
}

export { Progress, ProgressLabel, ProgressValueLabel }
