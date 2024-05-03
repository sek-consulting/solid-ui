import type { Component, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import { PolymorphicProps } from "@kobalte/core/polymorphic"
import {
  PopoverContentProps,
  Popover as PopoverPrimitive,
  PopoverRootProps
} from "@kobalte/core/popover"

import { cn } from "~/lib/utils"

const Popover: Component<PopoverRootProps> = (props) => {
  return <PopoverPrimitive gutter={4} {...props} />
}

const PopoverTrigger = PopoverPrimitive.Trigger

type ContentProps<T extends ValidComponent = "div"> = PolymorphicProps<T, PopoverContentProps>

const PopoverContent: Component<ContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        class={cn(
          "z-50 w-72 origin-[var(--kb-popover-content-transform-origin)] rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95",
          props.class
        )}
        {...rest}
      />
    </PopoverPrimitive.Portal>
  )
}

export { Popover, PopoverTrigger, PopoverContent }
