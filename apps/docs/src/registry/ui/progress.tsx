import type { Component, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import { PolymorphicProps } from "@kobalte/core/polymorphic"
import {
  ProgressLabelProps,
  Progress as ProgressPrimitive,
  ProgressRootProps,
  ProgressValueLabelProps
} from "@kobalte/core/progress"

import { Label } from "~/registry/ui/label"

type RootProps<T extends ValidComponent = "div"> = PolymorphicProps<T, ProgressRootProps>

const Progress: Component<RootProps> = (props) => {
  const [, rest] = splitProps(props, ["children"])
  return (
    <ProgressPrimitive {...rest}>
      {props.children}
      <ProgressPrimitive.Track class="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
        <ProgressPrimitive.Fill class="h-full w-[var(--kb-progress-fill-width)] flex-1 bg-primary transition-all" />
      </ProgressPrimitive.Track>
    </ProgressPrimitive>
  )
}

const ProgressLabel: Component<ProgressLabelProps> = (props) => {
  return <ProgressPrimitive.Label as={Label} {...props} />
}

const ProgressValueLabel: Component<ProgressValueLabelProps> = (props) => {
  return <ProgressPrimitive.ValueLabel as={Label} {...props} />
}

export { Progress, ProgressLabel, ProgressValueLabel }
