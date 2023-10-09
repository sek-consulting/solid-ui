import type { Component } from "solid-js"
import { splitProps } from "solid-js"

import { Combobox as ComboboxPrimitive } from "@kobalte/core"
import { TbSearch } from "solid-icons/tb"

import { cn } from "~/lib/utils"

// item
// itemlabel
// itemindicator
// section
const ComboboxSection: Component<ComboboxPrimitive.ComboboxSectionProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ComboboxPrimitive.Section
      class={cn(
        "text-muted-foreground overflow-hidden p-1 px-2 py-1.5 text-xs font-medium [&:not(:first-child)]:border-t",
        props.class
      )}
      {...rest}
    />
  )
}

// due to the generic typing this needs to be a function
function ComboboxControl<T>(props: ComboboxPrimitive.ComboboxControlProps<T>) {
  const [, rest] = splitProps(props, ["class"])
  return <ComboboxPrimitive.Control class={cn("", props.class)} {...rest} />
}

const ComboboxInput: Component<ComboboxPrimitive.ComboboxInputProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <ComboboxPrimitive.Input class={cn("", props.class)} {...rest} />
}

const ComboboxTrigger: Component<ComboboxPrimitive.ComboboxTriggerProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <ComboboxPrimitive.Trigger class={cn("", props.class)} {...rest}>
      <ComboboxPrimitive.Icon>{props.children ?? <TbSearch />}</ComboboxPrimitive.Icon>
    </ComboboxPrimitive.Trigger>
  )
}

// portal
// content
// listbox

export { ComboboxSection, ComboboxControl, ComboboxTrigger, ComboboxInput }
