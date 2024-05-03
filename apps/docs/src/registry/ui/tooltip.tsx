import { splitProps, ValidComponent, type Component } from "solid-js"

import { PolymorphicProps } from "@kobalte/core/polymorphic"
import {
  TooltipContentProps,
  Tooltip as TooltipPrimitive,
  TooltipRootProps
} from "@kobalte/core/tooltip"

import { cn } from "~/lib/utils"

const Tooltip: Component<TooltipRootProps> = (props) => {
  return <TooltipPrimitive gutter={4} {...props} />
}

const TooltipTrigger = TooltipPrimitive.Trigger

type ContentProps<T extends ValidComponent = "div"> = PolymorphicProps<T, TooltipContentProps>

const TooltipContent: Component<ContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        class={cn(
          "z-50 origin-[var(--kb-popover-content-transform-origin)] overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
          props.class
        )}
        {...rest}
      />
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent }
