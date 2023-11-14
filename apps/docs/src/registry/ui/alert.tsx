import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"

import { Alert as AlertPrimitive } from "@kobalte/core"
import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

import { cn } from "~/lib/utils"

const alertVariants = cva(
  "[&>svg]:text-foreground relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

interface AlertProps extends AlertPrimitive.AlertRootProps, VariantProps<typeof alertVariants> {}

const Alert: Component<AlertProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "variant"])
  return (
    <AlertPrimitive.Root
      class={cn(alertVariants({ variant: props.variant }), props.class)}
      {...rest}
    />
  )
}

const AlertTitle: Component<ComponentProps<"h5">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <h5 class={cn("mb-1 font-medium leading-none tracking-tight", props.class)} {...rest} />
}

const AlertDescription: Component<ComponentProps<"div">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <div class={cn("text-sm [&_p]:leading-relaxed", props.class)} {...rest} />
}

export { Alert, AlertTitle, AlertDescription }
