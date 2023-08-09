import type { Component } from "solid-js"
import { splitProps } from "solid-js"

import { Combobox as ComboboxPrimitive } from "@kobalte/core"

import { Icons } from "../icons"
import { cn } from "~/lib/utils"

const Combobox = ComboboxPrimitive.Root
const ComboboxControl = ComboboxPrimitive.Control
const ComboboxDescription = ComboboxPrimitive.Description
const ComboboxErrorMessage = ComboboxPrimitive.ErrorMessage
const ComboboxItemDescription = ComboboxPrimitive.ItemDescription
const ComboboxHiddenSelect = ComboboxPrimitive.HiddenSelect
type ComboboxTriggerMode = ComboboxPrimitive.ComboboxTriggerMode

const ComboboxInput: Component<ComboboxPrimitive.ComboboxInputProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ComboboxPrimitive.Input
      class={cn(
        "placeholder:text-muted-foreground h-full bg-transparent text-sm focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        props.class
      )}
      {...rest}
    />
  )
}

const ComboboxTrigger: Component<ComboboxPrimitive.ComboboxTriggerProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <ComboboxPrimitive.Trigger
      class={cn(
        "border-input flex h-9 w-full items-center justify-between rounded-md border px-3 shadow-sm",
        props.class
      )}
      {...rest}
    >
      {props.children}
      <ComboboxPrimitive.Icon class="flex h-3.5 w-3.5 items-center justify-center">
        <Icons.chevronsUpDown class="h-4 w-4 opacity-50" />
      </ComboboxPrimitive.Icon>
    </ComboboxPrimitive.Trigger>
  )
}

const ComboboxContent: Component<ComboboxPrimitive.ComboboxContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Content
        class={cn(
          "bg-popover text-popover-foreground data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 relative z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
          props.class
        )}
        {...rest}
      >
        <ComboboxPrimitive.Listbox class="p-1" />
      </ComboboxPrimitive.Content>
    </ComboboxPrimitive.Portal>
  )
}

const ComboboxItem: Component<ComboboxPrimitive.ComboboxItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <ComboboxPrimitive.Item
      class={cn(
        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
      {...rest}
    >
      <ComboboxPrimitive.ItemIndicator class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        <Icons.check class="h-4 w-4" />
      </ComboboxPrimitive.ItemIndicator>
      <ComboboxPrimitive.ItemLabel>{props.children}</ComboboxPrimitive.ItemLabel>
    </ComboboxPrimitive.Item>
  )
}

export {
  Combobox,
  ComboboxControl,
  ComboboxDescription,
  ComboboxErrorMessage,
  ComboboxItemDescription,
  ComboboxHiddenSelect,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxItem,
  type ComboboxTriggerMode
}
