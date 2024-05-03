import type { Component, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import { PolymorphicProps } from "@kobalte/core/polymorphic"
import {
  SliderFillProps,
  SliderLabelProps,
  Slider as SliderPrimitive,
  SliderRootProps,
  SliderThumbProps,
  SliderTrackProps,
  SliderValueLabelProps
} from "@kobalte/core/slider"

import { cn } from "~/lib/utils"
import { Label } from "~/registry/ui/label"

type RootProps<T extends ValidComponent = "div"> = PolymorphicProps<T, SliderRootProps>

const Slider: Component<RootProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <SliderPrimitive
      class={cn("relative flex w-full touch-none select-none flex-col items-center", props.class)}
      {...rest}
    />
  )
}

type TrackProps<T extends ValidComponent = "div"> = PolymorphicProps<T, SliderTrackProps>

const SliderTrack: Component<TrackProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <SliderPrimitive.Track
      class={cn("relative h-2 w-full grow rounded-full bg-secondary", props.class)}
      {...rest}
    />
  )
}

type FillProps<T extends ValidComponent = "div"> = PolymorphicProps<T, SliderFillProps>

const SliderFill: Component<FillProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <SliderPrimitive.Fill class={cn("absolute h-full bg-primary", props.class)} {...rest} />
}

type ThumbProps<T extends ValidComponent = "span"> = PolymorphicProps<T, SliderThumbProps>

const SliderThumb: Component<ThumbProps> = (props) => {
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

type LabelProps<T extends ValidComponent = "label"> = PolymorphicProps<T, SliderLabelProps>

const SliderLabel: Component<LabelProps> = (props) => {
  return <SliderPrimitive.Label as={Label} {...props} />
}

type ValueLabelProps<T extends ValidComponent = "label"> = PolymorphicProps<
  T,
  SliderValueLabelProps
>

const SliderValueLabel: Component<ValueLabelProps> = (props) => {
  return <SliderPrimitive.ValueLabel as={Label} {...props} />
}

export { Slider, SliderTrack, SliderFill, SliderThumb, SliderLabel, SliderValueLabel }
