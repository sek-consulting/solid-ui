import type { Component} from "solid-js";
import { splitProps } from "solid-js"

import { Popover as PopoverPrimitive } from "@kobalte/core"

import { cn } from "~/lib/utils"

const Popover: Component<PopoverPrimitive.PopoverRootProps> = (props) => {
  return <PopoverPrimitive.Root gutter={4} {...props} />
}

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent: Component<PopoverPrimitive.PopoverContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        class={cn(
          "bg-popover text-popover-foreground animate-in z-50 w-72 origin-[var(--kb-popover-content-transform-origin)] rounded-md border p-4 shadow-md outline-none",
          props.class
        )}
        {...rest}
      />
    </PopoverPrimitive.Portal>
  )
}

export { Popover, PopoverTrigger, PopoverContent }
