import type { Component } from "solid-js"
import { splitProps } from "solid-js"

import { ToggleButton as ToggleButtonPrimitive } from "@kobalte/core"
import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"

import { cn } from "~/lib/utils"

const toggleVariants = cva(
  "focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-input border bg-transparent shadow-sm"
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2",
        lg: "h-10 px-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export interface ToggleProps
  extends ToggleButtonPrimitive.ToggleButtonRootProps,
    VariantProps<typeof toggleVariants> {}

const Toggle: Component<ToggleProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "variant", "size"])
  return (
    <ToggleButtonPrimitive.Root
      class={cn(toggleVariants({ variant: props.variant, size: props.size }), props.class)}
      {...rest}
    />
  )
}

export { toggleVariants, Toggle }
