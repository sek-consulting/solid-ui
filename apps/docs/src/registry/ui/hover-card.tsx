import type { Component } from "solid-js"
import { splitProps } from "solid-js"

import { HoverCard as HoverCardPrimitive } from "@kobalte/core"

import { cn } from "~/lib/utils"

const HoverCard: Component<HoverCardPrimitive.HoverCardRootProps> = (props) => {
  return <HoverCardPrimitive.Root gutter={4} {...props} />
}

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent: Component<HoverCardPrimitive.HoverCardContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        class={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border p-4 shadow-md outline-none",
          props.class
        )}
        {...rest}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
