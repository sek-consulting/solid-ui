import type { JSX, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import { PolymorphicProps } from "@kobalte/core/polymorphic"
import * as SliderPrimitive from "@kobalte/core/slider"

import { cn } from "~/lib/utils"
import { Label } from "~/registry/ui/label"

type SliderRootProps = SliderPrimitive.SliderRootProps & { class?: string | undefined }

const Slider = <T extends ValidComponent = "div">(props: PolymorphicProps<T, SliderRootProps>) => {
  const [local, others] = splitProps(props as SliderRootProps, ["class"])
  return (
    <SliderPrimitive.Root
      class={cn("relative flex w-full touch-none select-none flex-col items-center", local.class)}
      {...others}
    />
  )
}

type SliderTrackProps = SliderPrimitive.SliderTrackProps & { class?: string | undefined }

const SliderTrack = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SliderTrackProps>
) => {
  const [local, others] = splitProps(props as SliderTrackProps, ["class"])
  return (
    <SliderPrimitive.Track
      class={cn("relative h-2 w-full grow rounded-full bg-secondary", local.class)}
      {...others}
    />
  )
}

type SliderFillProps = SliderPrimitive.SliderFillProps & { class?: string | undefined }

const SliderFill = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SliderFillProps>
) => {
  const [local, others] = splitProps(props as SliderFillProps, ["class"])
  return <SliderPrimitive.Fill class={cn("absolute h-full bg-primary", local.class)} {...others} />
}

type SliderThumbProps = SliderPrimitive.SliderThumbProps & {
  class?: string | undefined
  children?: JSX.Element
}

const SliderThumb = <T extends ValidComponent = "span">(
  props: PolymorphicProps<T, SliderThumbProps>
) => {
  const [local, others] = splitProps(props as SliderThumbProps, ["class", "children"])
  return (
    <SliderPrimitive.Thumb
      class={cn(
        "top-[-6px] block size-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        local.class
      )}
      {...others}
    >
      <SliderPrimitive.Input />
    </SliderPrimitive.Thumb>
  )
}

const SliderLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, SliderPrimitive.SliderLabelProps>
) => {
  return <SliderPrimitive.Label as={Label} {...props} />
}

const SliderValueLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, SliderPrimitive.SliderValueLabelProps>
) => {
  return <SliderPrimitive.ValueLabel as={Label} {...props} />
}

export { Slider, SliderTrack, SliderFill, SliderThumb, SliderLabel, SliderValueLabel }
