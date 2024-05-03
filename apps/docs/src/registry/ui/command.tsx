import type { ComponentProps, VoidComponent } from "solid-js"
import { splitProps, type ParentComponent } from "solid-js"

import type { DialogRootProps } from "@kobalte/core/dialog"
import {
  CommandEmptyProps,
  CommandGroupProps,
  CommandInputProps,
  CommandItemProps,
  CommandListProps,
  Command as CommandPrimitive,
  CommandRootProps,
  CommandSeparatorProps
} from "cmdk-solid"

import { cn } from "~/lib/utils"
import { Dialog, DialogContent } from "~/registry/ui/dialog"

const Command: ParentComponent<CommandRootProps> = (props) => {
  const [local, rest] = splitProps(props, ["class"])

  return (
    <CommandPrimitive
      class={cn(
        "flex size-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        local.class
      )}
      {...rest}
    />
  )
}

type CommandDialogProps = DialogRootProps

const CommandDialog: ParentComponent<CommandDialogProps> = (props) => {
  const [local, rest] = splitProps(props, ["children"])

  return (
    <Dialog {...rest}>
      <DialogContent class="overflow-hidden p-0">
        <Command
          class="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:size-5"
          {...local}
        />
      </DialogContent>
    </Dialog>
  )
}

const CommandInput: VoidComponent<CommandInputProps> = (props) => {
  const [local, rest] = splitProps(props, ["class"])

  return (
    <div class="flex items-center border-b px-3" cmdk-input-wrapper="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mr-2 size-4 shrink-0 opacity-50"
      >
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
      <CommandPrimitive.Input
        class={cn(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          local.class
        )}
        {...rest}
      />
    </div>
  )
}

const CommandList: ParentComponent<CommandListProps> = (props) => {
  const [local, rest] = splitProps(props, ["class"])

  return (
    <CommandPrimitive.List
      class={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", local.class)}
      {...rest}
    />
  )
}

const CommandEmpty: ParentComponent<CommandEmptyProps> = (props) => {
  const [local, rest] = splitProps(props, ["class"])

  return <CommandPrimitive.Empty class={cn("py-6 text-center text-sm", local.class)} {...rest} />
}

const CommandGroup: ParentComponent<CommandGroupProps> = (props) => {
  const [local, rest] = splitProps(props, ["class"])

  return (
    <CommandPrimitive.Group
      class={cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        local.class
      )}
      {...rest}
    />
  )
}

const CommandSeparator: VoidComponent<CommandSeparatorProps> = (props) => {
  const [local, rest] = splitProps(props, ["class"])

  return <CommandPrimitive.Separator class={cn("h-px bg-border", local.class)} {...rest} />
}

const CommandItem: ParentComponent<CommandItemProps> = (props) => {
  const [local, rest] = splitProps(props, ["class"])

  return (
    <CommandPrimitive.Item
      cmdk-item=""
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
        local.class
      )}
      {...rest}
    />
  )
}

const CommandShortcut: ParentComponent<ComponentProps<"span">> = (props) => {
  const [local, rest] = splitProps(props, ["class"])

  return (
    <span
      class={cn("ml-auto text-xs tracking-widest text-muted-foreground", local.class)}
      {...rest}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator
}
