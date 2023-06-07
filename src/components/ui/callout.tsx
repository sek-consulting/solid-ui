import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"

import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

import { cn } from "~/lib/utils"

//TODO: Switch colors to variables to fit the rest
const calloutVariants = cva("rounded-md border-l-4 p-2 pl-4", {
  variants: {
    variant: {
      default: "border-blue-700 bg-blue-100 text-blue-700",
      success: "border-emerald-700 bg-emerald-100 text-emerald-700",
      warning: "border-amber-700 bg-amber-100 text-amber-700",
      error: "border-red-700 bg-red-100 text-red-700"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export interface CalloutProps extends ComponentProps<"div">, VariantProps<typeof calloutVariants> {}

const Callout: Component<CalloutProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <div class={cn(calloutVariants({ variant: props.variant }), props.class)} {...rest} />
}

const CalloutTitle: Component<ComponentProps<"h3">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <h3 class={cn("font-semibold", props.class)} {...rest} />
}

const CalloutContent: Component<ComponentProps<"div">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <div class={cn("mt-2", props.class)} {...rest} />
}

export { Callout, CalloutTitle, CalloutContent }
