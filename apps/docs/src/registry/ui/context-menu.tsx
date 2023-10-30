import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"

import { ContextMenu as ContextMenuPrimitive } from "@kobalte/core"
import { TbCheck, TbChevronRight, TbCircle } from "solid-icons/tb"

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
          "bg-popover text-popover-foreground animate-in z-50 min-w-[8rem] origin-[var(--kb-menu-content-transform-origin)] overflow-hidden rounded-md border p-1 shadow-md",
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
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
      {...rest}
    />
  )
}

const ContextMenuShortcut: Component<ComponentProps<"span">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <span class={cn("ml-auto text-xs tracking-widest opacity-60", props.class)} {...rest} />
}

const ContextMenuSeparator: Component<ContextMenuPrimitive.ContextMenuSeparatorProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ContextMenuPrimitive.Separator class={cn("bg-muted -mx-1 my-1 h-px", props.class)} {...rest} />
  )
}

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuSubTrigger: Component<ContextMenuPrimitive.ContextMenuSubTriggerProps> = (
  props
) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <ContextMenuPrimitive.SubTrigger
      class={cn(
        "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
        props.class
      )}
      {...rest}
    >
      {props.children}
      <TbChevronRight class="ml-auto h-4 w-4" />
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
        "bg-popover text-popover-foreground animate-in z-50 min-w-[8rem] origin-[var(--kb-menu-content-transform-origin)] overflow-hidden rounded-md border p-1 shadow-md",
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
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
      {...rest}
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <TbCheck class="h-4 w-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {props.children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuGroupLabel: Component<ContextMenuPrimitive.ContextMenuGroupLabelProps> = (
  props
) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ContextMenuPrimitive.GroupLabel
      class={cn("px-2 py-1.5 text-sm font-semibold", props.class)}
      {...rest}
    />
  )
}

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuRadioItem: Component<ContextMenuPrimitive.ContextMenuRadioItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <ContextMenuPrimitive.RadioItem
      class={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
      {...rest}
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <TbCircle class="h-2 w-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {props.children}
    </ContextMenuPrimitive.RadioItem>
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuCheckboxItem,
  ContextMenuGroup,
  ContextMenuGroupLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem
}
