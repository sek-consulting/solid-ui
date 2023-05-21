import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"

import { cn } from "~/lib/utils"

const Card: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <div
      class={cn("rounded-lg border bg-card text-card-foreground shadow-sm", props.class)}
      {...rest}
    />
  )
}

const CardHeader: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <div class={cn("flex flex-col space-y-1.5 p-6", props.class)} {...rest} />
}

const CardTitle: Component<JSX.HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <h3 class={cn("text-lg font-semibold leading-none tracking-tight", props.class)} {...rest} />
  )
}

const CardDescription: Component<JSX.HTMLAttributes<HTMLParagraphElement>> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <p class={cn("text-sm text-muted-foreground", props.class)} {...rest} />
}

const CardContent: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <div class={cn("p-6 pt-0", props.class)} {...rest} />
}

const CardFooter: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <div class={cn(" flex items-center p-6 pt-0", props.class)} {...rest} />
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
