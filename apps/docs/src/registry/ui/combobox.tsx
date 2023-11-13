import type { Component } from "solid-js"
import { splitProps } from "solid-js"

import { Combobox as ComboboxPrimitive } from "@kobalte/core"
import { TbCheck, TbSelector } from "solid-icons/tb"

import { cn } from "~/lib/utils"

const Combobox = ComboboxPrimitive.Root

const ComboboxItem: Component<ComboboxPrimitive.ComboboxItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ComboboxPrimitive.Item
      class={cn(
        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
      {...rest}
    />
  )
}

const ComboboxItemLabel = ComboboxPrimitive.ItemLabel

const ComboboxItemIndicator: Component<ComboboxPrimitive.ComboboxItemIndicatorProps> = (props) => {
  const [, rest] = splitProps(props, ["children"])
  return (
    <ComboboxPrimitive.ItemIndicator {...rest}>
      {props.children ?? <TbCheck />}
    </ComboboxPrimitive.ItemIndicator>
  )
}

const ComboboxSection: Component<ComboboxPrimitive.ComboboxSectionProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ComboboxPrimitive.Section
      class={cn(
        "text-muted-foreground overflow-hidden p-1 px-2 py-1.5 text-xs font-medium ",
        props.class
      )}
      {...rest}
    />
  )
}

// due to the generic typing this needs to be a function
function ComboboxControl<T>(props: ComboboxPrimitive.ComboboxControlProps<T>) {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ComboboxPrimitive.Control
      class={cn("flex items-center rounded-md border px-3", props.class)}
      {...rest}
    />
  )
}

const ComboboxInput: Component<ComboboxPrimitive.ComboboxInputProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ComboboxPrimitive.Input
      class={cn(
        "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
        props.class
      )}
      {...rest}
    />
  )
}

const ComboboxHiddenSelect = ComboboxPrimitive.HiddenSelect

const ComboboxTrigger: Component<ComboboxPrimitive.ComboboxTriggerProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <ComboboxPrimitive.Trigger class={cn("h-4 w-4 opacity-50", props.class)} {...rest}>
      <ComboboxPrimitive.Icon>{props.children ?? <TbSelector />}</ComboboxPrimitive.Icon>
    </ComboboxPrimitive.Trigger>
  )
}

const ComboboxContent: Component<ComboboxPrimitive.ComboboxContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Content
        class={cn(
          "bg-popover text-popover-foreground animate-in fade-in-80 relative z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
          props.class
        )}
        {...rest}
      >
        <ComboboxPrimitive.Listbox class="m-0 p-1" />
      </ComboboxPrimitive.Content>
    </ComboboxPrimitive.Portal>
  )
}

export {
  Combobox,
  ComboboxItem,
  ComboboxItemLabel,
  ComboboxItemIndicator,
  ComboboxSection,
  ComboboxControl,
  ComboboxTrigger,
  ComboboxInput,
  ComboboxHiddenSelect,
  ComboboxContent
}
