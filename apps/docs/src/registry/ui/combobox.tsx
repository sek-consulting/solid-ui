import type { Component } from "solid-js"
import { splitProps } from "solid-js"

import { Combobox as ComboboxPrimitive } from "@kobalte/core"

import { cn } from "~/lib/utils"

const Combobox = ComboboxPrimitive.Root

const ComboboxItem: Component<ComboboxPrimitive.ComboboxItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ComboboxPrimitive.Item
      class={cn(
        "relative flex cursor-default select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
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
      {props.children ?? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-4"
        >
          <path d="M5 12l5 5l10 -10" />
        </svg>
      )}
    </ComboboxPrimitive.ItemIndicator>
  )
}

const ComboboxSection: Component<ComboboxPrimitive.ComboboxSectionProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ComboboxPrimitive.Section
      class={cn(
        "overflow-hidden p-1 px-2 py-1.5 text-xs font-medium text-muted-foreground ",
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
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
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
    <ComboboxPrimitive.Trigger class={cn("size-4 opacity-50", props.class)} {...rest}>
      <ComboboxPrimitive.Icon>
        {props.children ?? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4"
          >
            <path d="M8 9l4 -4l4 4" />
            <path d="M16 15l-4 4l-4 -4" />
          </svg>
        )}
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
          "relative z-50 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
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
