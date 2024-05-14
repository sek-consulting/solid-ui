import { JSX, splitProps, ValidComponent } from "solid-js"

import * as ComboboxPrimitive from "@kobalte/core/combobox"
import { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"

const Combobox = ComboboxPrimitive.Root
const ComboboxItemLabel = ComboboxPrimitive.ItemLabel
const ComboboxHiddenSelect = ComboboxPrimitive.HiddenSelect

type ComboboxItemProps = ComboboxPrimitive.ComboboxItemProps & { class?: string | undefined }

const ComboboxItem = <T extends ValidComponent = "li">(
  props: PolymorphicProps<T, ComboboxItemProps>
) => {
  const [local, others] = splitProps(props as ComboboxItemProps, ["class"])
  return (
    <ComboboxPrimitive.Item
      class={cn(
        "relative flex cursor-default select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
        local.class
      )}
      {...others}
    />
  )
}

type ComboboxItemIndicatorProps = ComboboxPrimitive.ComboboxItemIndicatorProps & {
  children?: JSX.Element
}

const ComboboxItemIndicator = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, ComboboxItemIndicatorProps>
) => {
  const [local, others] = splitProps(props as ComboboxItemIndicatorProps, ["children"])
  return (
    <ComboboxPrimitive.ItemIndicator {...others}>
      {local.children ?? (
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

type ComboboxSectionProps = ComboboxPrimitive.ComboboxSectionProps & { class?: string | undefined }

const ComboboxSection = <T extends ValidComponent = "li">(
  props: PolymorphicProps<T, ComboboxSectionProps>
) => {
  const [local, others] = splitProps(props as ComboboxSectionProps, ["class"])
  return (
    <ComboboxPrimitive.Section
      class={cn(
        "overflow-hidden p-1 px-2 py-1.5 text-xs font-medium text-muted-foreground ",
        local.class
      )}
      {...others}
    />
  )
}

type ComboboxControlProps<U> = ComboboxPrimitive.ComboboxControlProps<U> & {
  class?: string | undefined
}

const ComboboxControl = <T, U extends ValidComponent = "div">(
  props: PolymorphicProps<U, ComboboxControlProps<T>>
) => {
  const [local, others] = splitProps(props as ComboboxControlProps<T>, ["class"])
  return (
    <ComboboxPrimitive.Control
      class={cn("flex items-center rounded-md border px-3", local.class)}
      {...others}
    />
  )
}

type ComboboxInputProps = ComboboxPrimitive.ComboboxInputProps & { class?: string | undefined }

const ComboboxInput = <T extends ValidComponent = "input">(
  props: PolymorphicProps<T, ComboboxInputProps>
) => {
  const [local, others] = splitProps(props as ComboboxInputProps, ["class"])
  return (
    <ComboboxPrimitive.Input
      class={cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        local.class
      )}
      {...others}
    />
  )
}

type ComboboxTriggerProps = ComboboxPrimitive.ComboboxTriggerProps & {
  class?: string | undefined
  children?: JSX.Element
}

const ComboboxTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ComboboxTriggerProps>
) => {
  const [local, others] = splitProps(props as ComboboxTriggerProps, ["class", "children"])
  return (
    <ComboboxPrimitive.Trigger class={cn("size-4 opacity-50", local.class)} {...others}>
      <ComboboxPrimitive.Icon>
        {local.children ?? (
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

type ComboboxContentProps = ComboboxPrimitive.ComboboxContentProps & { class?: string | undefined }

const ComboboxContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, ComboboxContentProps>
) => {
  const [local, others] = splitProps(props as ComboboxContentProps, ["class"])
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Content
        class={cn(
          "relative z-50 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
          local.class
        )}
        {...others}
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
