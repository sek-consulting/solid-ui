import { Popover as PopoverPrimitive } from "@kobalte/core"
import { Component, splitProps } from "solid-js"
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
          "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in origin-[var(--kb-popover-content-transform-origin)]",
          props.class
        )}
        {...rest}
      />
    </PopoverPrimitive.Portal>
  )
}

export { Popover, PopoverTrigger, PopoverContent }
