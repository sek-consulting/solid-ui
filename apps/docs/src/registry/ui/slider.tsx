import type { Component } from "solid-js"
import { splitProps } from "solid-js"

import { Slider as SliderPrimitive } from "@kobalte/core"

import { cn } from "~/lib/utils"
import { Label } from "~/registry/ui/label"

const Slider: Component<SliderPrimitive.SliderRootProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <SliderPrimitive.Root
      class={cn("relative flex w-full touch-none select-none flex-col items-center", props.class)}
      {...rest}
    />
  )
}

const SliderTrack: Component<SliderPrimitive.SliderTrackProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <SliderPrimitive.Track
      class={cn("relative h-2 w-full grow rounded-full bg-secondary", props.class)}
      {...rest}
    />
  )
}

const SliderFill: Component<SliderPrimitive.SliderFillProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <SliderPrimitive.Fill class={cn("absolute h-full bg-primary", props.class)} {...rest} />
}

const SliderThumb: Component<SliderPrimitive.SliderThumbProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <SliderPrimitive.Thumb
      class={cn(
        "top-[-6px] block size-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        props.class
      )}
      {...rest}
    >
      <SliderPrimitive.Input />
    </SliderPrimitive.Thumb>
  )
}

const SliderLabel: Component<SliderPrimitive.SliderLabelProps> = (props) => {
  return <SliderPrimitive.Label as={Label} {...props} />
}

const SliderValueLabel: Component<SliderPrimitive.SliderValueLabelProps> = (props) => {
  return <SliderPrimitive.ValueLabel as={Label} {...props} />
}

export { Slider, SliderTrack, SliderFill, SliderThumb, SliderLabel, SliderValueLabel }
