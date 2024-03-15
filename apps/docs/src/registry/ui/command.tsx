import type { ComponentProps, VoidComponent, VoidProps } from "solid-js"
import { splitProps, type ParentComponent } from "solid-js"

import type { Dialog as DialogPrimitive } from "@kobalte/core"
import { Combobox as ComboboxPrimitive } from "@kobalte/core"
import { TbSearch } from "solid-icons/tb"

import { cn } from "~/lib/utils"
import { Dialog, DialogContent } from "~/registry/ui/dialog"

type CommandProps<Option, OptGroup> = Omit<
  ComboboxPrimitive.ComboboxRootProps<Option, OptGroup>,
  | "open"
  | "defaultOpen"
  | "multiple"
  | "value"
  | "defaultValue"
  | "removeOnBackspace"
  | "readOnly"
  | "allowsEmptyCollection"
>

const Command = <Option, OptGroup>(props: CommandProps<Option, OptGroup>) => {
  const [local, rest] = splitProps(props, ["class"])

  return (
    <ComboboxPrimitive.Root
      // force render list
      open
      // @ts-ignore -- prevent select
      value=""
      allowsEmptyCollection
      class={cn(
        "flex size-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        local.class
      )}
      {...rest}
    />
  )
}

const CommandInput: VoidComponent<ComboboxPrimitive.ComboboxInputProps> = (props) => {
  const [local, rest] = splitProps(props, ["class"])

  return (
    <ComboboxPrimitive.Control class="flex items-center border-b px-3" cmdk-input-wrapper="">
      <TbSearch class="mr-2 size-4 shrink-0 opacity-50" />
      <ComboboxPrimitive.Input
        cmdk-input=""
        class={cn(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          local.class
        )}
        {...rest}
      />
    </ComboboxPrimitive.Control>
  )
}

const CommandList = <Option, OptGroup>(
  props: VoidProps<ComboboxPrimitive.ComboboxListboxProps<Option, OptGroup>>
) => {
  const [local, rest] = splitProps(props, ["class"])

  return (
    <ComboboxPrimitive.Listbox
      cmdk-list=""
      class={cn("max-h-[300px] overflow-y-auto overflow-x-hidden p-1", local.class)}
      {...rest}
    />
  )
}

const CommandItem: ParentComponent<ComboboxPrimitive.ComboboxItemProps> = (props) => {
  const [local, rest] = splitProps(props, ["class", "item"])

  return (
    <ComboboxPrimitive.Item
      item={local.item}
      cmdk-item=""
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
        local.class
      )}
      {...rest}
    />
  )
}

const CommandItemLabel = ComboboxPrimitive.ItemLabel

const CommandHeading: ParentComponent<ComboboxPrimitive.ComboboxSectionProps> = (props) => {
  const [local, rest] = splitProps(props, ["class"])

  return (
    <ComboboxPrimitive.Section
      cmdk-heading=""
      class={cn(
        "px-2 py-1.5 text-xs font-medium text-muted-foreground [&:not(&:first-of-type)]:mt-2",
        local.class
      )}
      {...rest}
    />
  )
}

const CommandItemShortcut: ParentComponent<ComponentProps<"span">> = (props) => {
  const [local, rest] = splitProps(props, ["class"])

  return (
    <span
      class={cn("ml-auto text-xs tracking-widest text-muted-foreground", local.class)}
      {...rest}
    />
  )
}

type CommandDialogProps<Option, OptGroup> = DialogPrimitive.DialogRootProps &
  CommandProps<Option, OptGroup>

const CommandDialog = <Option, OptGroup>(props: CommandDialogProps<Option, OptGroup>) => {
  const [local, rest] = splitProps(props, ["children"])

  return (
    <Dialog {...rest}>
      <DialogContent class="overflow-hidden p-0">
        <Command
          class="[&_[cmdk-heading]]:px-2 [&_[cmdk-heading]]:font-medium [&_[cmdk-heading]]:text-muted-foreground [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:size-5 [&_[cmdk-list]:not([hidden])_~[cmdk-list]]:pt-0 [&_[cmdk-list]]:px-2"
          {...rest}
        >
          {local.children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

export {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandItemLabel,
  CommandItemShortcut,
  CommandHeading,
  CommandDialog
}
