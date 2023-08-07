import type { Component } from "solid-js"
import { splitProps } from "solid-js"

import { Image as ImagePrimitive } from "@kobalte/core"

import { cn } from "~/lib/utils"

const Avatar: Component<ImagePrimitive.ImageRootProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ImagePrimitive.Root
      class={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", props.class)}
      {...rest}
    />
  )
}

const AvatarImage: Component<ImagePrimitive.ImageImgProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <ImagePrimitive.Img class={cn("aspect-square h-full w-full", props.class)} {...rest} />
}

const AvatarFallback: Component<ImagePrimitive.ImageFallbackProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ImagePrimitive.Fallback
      class={cn(
        "bg-muted flex h-full w-full items-center justify-center rounded-full",
        props.class
      )}
      {...rest}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
