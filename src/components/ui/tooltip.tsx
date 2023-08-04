import { splitProps, type Component } from "solid-js"

import { Tooltip as TooltipPrimitive } from "@kobalte/core"

import { cn } from "~/lib/utils"

const Tooltip: Component<TooltipPrimitive.TooltipRootProps> = (props) => {
  return <TooltipPrimitive.Root gutter={4} {...props} />
}

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent: Component<TooltipPrimitive.TooltipContentProps> = (props) => {
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
