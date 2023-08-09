import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"

import { ContextMenu as ContextMenuPrimitive } from "@kobalte/core"

import { Icons } from "~/components/icons"
import { cn } from "~/lib/utils"

const ContextMenu: Component<ContextMenuPrimitive.ContextMenuRootProps> = (props) => {
  return <ContextMenuPrimitive.Root gutter={4} {...props} />
}

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuContent: Component<ContextMenuPrimitive.ContextMenuContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        class={cn(
          "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          props.class
        )}
        {...rest}
      />
    </ContextMenuPrimitive.Portal>
  )
}

const ContextMenuItem: Component<ContextMenuPrimitive.ContextMenuItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ContextMenuPrimitive.Item
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
      {...rest}
    />
  )
}

const ContextMenuCheckboxItem: Component<ContextMenuPrimitive.ContextMenuCheckboxItemProps> = (
  props
) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <ContextMenuPrimitive.CheckboxItem
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
      {...rest}
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Icons.check class="h-4 w-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {props.children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuRadioItem: Component<ContextMenuPrimitive.ContextMenuRadioItemProps> = (
  props
) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <ContextMenuPrimitive.RadioItem
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
      {...rest}
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Icons.circle class="h-2 w-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {props.children}
    </ContextMenuPrimitive.RadioItem>
  )
}

const ContextMenuLabel: Component<ContextMenuPrimitive.ContextMenuGroupLabelProps> = (
  props
) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ContextMenuPrimitive.GroupLabel
      class={cn("px-2 py-1.5 text-sm font-semibold text-foreground", props.class)}
      {...rest}
    />
  )
}

const ContextMenuSeparator: Component<ContextMenuPrimitive.ContextMenuSeparatorProps> = (
  props
) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ContextMenuPrimitive.Separator
      class={cn("-mx-1 my-1 h-px bg-border", props.class)}
      {...rest}
    />
  )
}

const ContextMenuShortcut: Component<ComponentProps<"span">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <span class={cn("ml-auto text-xs tracking-widest text-muted-foreground", props.class)} {...rest} />
}

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuSubTrigger: Component<ContextMenuPrimitive.ContextMenuSubTriggerProps> = (
  props
) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <ContextMenuPrimitive.SubTrigger
      class={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        props.class
      )}
      {...rest}
    >
      {props.children}
      <Icons.chevronRight class="ml-auto h-4 w-4" />
    </ContextMenuPrimitive.SubTrigger>
  )
}

const ContextMenuSubContent: Component<ContextMenuPrimitive.ContextMenuSubContentProps> = (
  props
) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ContextMenuPrimitive.SubContent
      class={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        props.class
      )}
      {...rest}
    />
  )
}


export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
