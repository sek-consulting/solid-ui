import type { Component, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import {
  ImageFallbackProps,
  ImageImgProps,
  Image as ImagePrimitive,
  ImageRootProps
} from "@kobalte/core/image"
import { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"

type RootProps<T extends ValidComponent = "span"> = PolymorphicProps<T, ImageRootProps>

const Avatar: Component<RootProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ImagePrimitive
      class={cn("relative flex size-10 shrink-0 overflow-hidden rounded-full", props.class)}
      {...rest}
    />
  )
}

type ImageProps<T extends ValidComponent = "img"> = PolymorphicProps<T, ImageImgProps>

const AvatarImage: Component<ImageProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <ImagePrimitive.Img class={cn("aspect-square size-full", props.class)} {...rest} />
}

type FallbackProps<T extends ValidComponent = "span"> = PolymorphicProps<T, ImageFallbackProps>

const AvatarFallback: Component<FallbackProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ImagePrimitive.Fallback
      class={cn("flex size-full items-center justify-center rounded-full bg-muted", props.class)}
      {...rest}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
