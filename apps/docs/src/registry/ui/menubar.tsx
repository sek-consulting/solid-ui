import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"

import { Menubar as MenubarPrimitive } from "@kobalte/core"
import { TbCheck, TbChevronRight, TbCircle } from "solid-icons/tb"

import { cn } from "~/lib/utils"

const MenubarMenu: Component<MenubarPrimitive.MenubarMenuProps> = (props) => {
  return <MenubarPrimitive.Menu gutter={8} {...props} />
}

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar: Component<MenubarPrimitive.MenubarRootProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <MenubarPrimitive.Root
      class={cn(
        "bg-background flex h-10 items-center space-x-1 rounded-md border p-1",
        props.class
      )}
      {...rest}
    ></MenubarPrimitive.Root>
  )
}

const MenubarTrigger: Component<MenubarPrimitive.MenubarTriggerProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <MenubarPrimitive.Trigger
      class={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none",
        props.class
      )}
      {...rest}
    />
  )
}

const MenubarContent: Component<MenubarPrimitive.MenubarContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        class={cn(
          "bg-popover text-popover-foreground animate-content-hide data-[expanded]:animate-content-show z-50 min-w-[12rem] origin-[var(--kb-menu-content-transform-origin)] overflow-hidden rounded-md border p-1 shadow-md",
          props.class
        )}
        {...rest}
      />
    </MenubarPrimitive.Portal>
  )
}

const MenubarSubTrigger: Component<
  MenubarPrimitive.MenubarSubTriggerProps & { inset?: boolean }
> = (props) => {
  const [, rest] = splitProps(props, ["class", "children", "inset"])
  return (
    <MenubarPrimitive.SubTrigger
      class={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
        props.inset && "pl-8",
        props.class
      )}
      {...rest}
    >
      {props.children}
      <TbChevronRight class="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

const MenubarSubContent: Component<MenubarPrimitive.MenubarSubContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <MenubarPrimitive.SubContent
      class={cn(
        "bg-popover text-popover-foreground animate-in z-50 min-w-[8rem] origin-[var(--kb-menu-content-transform-origin)] overflow-hidden rounded-md border p-1 shadow-md",
        props.class
      )}
      {...rest}
    />
  )
}

const MenubarItem: Component<MenubarPrimitive.MenubarItemProps & { inset?: boolean }> = (props) => {
  const [, rest] = splitProps(props, ["class", "inset"])
  return (
    <MenubarPrimitive.Item
      class={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.inset && "pl-8",
        props.class
      )}
      {...rest}
    />
  )
}

const MenubarCheckboxItem: Component<MenubarPrimitive.MenubarCheckboxItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <MenubarPrimitive.CheckboxItem
      class={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
      {...rest}
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <TbCheck class="h-4 w-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {props.children}
    </MenubarPrimitive.CheckboxItem>
  )
}

const MenubarRadioItem: Component<MenubarPrimitive.MenubarRadioItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <MenubarPrimitive.RadioItem
      class={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
      {...rest}
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <TbCircle class="h-2 w-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {props.children}
    </MenubarPrimitive.RadioItem>
  )
}

const MenubarItemLabel: Component<MenubarPrimitive.MenubarItemLabelProps & { inset?: boolean }> = (
  props
) => {
  const [, rest] = splitProps(props, ["class", "inset"])
  return (
    <MenubarPrimitive.ItemLabel
      class={cn("px-2 py-1.5 text-sm font-semibold", props.inset && "pl-8", props.class)}
      {...rest}
    />
  )
}

const MenubarGroupLabel: Component<
  MenubarPrimitive.MenubarGroupLabelProps & { inset?: boolean }
> = (props) => {
  const [, rest] = splitProps(props, ["class", "inset"])
  return (
    <MenubarPrimitive.GroupLabel
      class={cn("px-2 py-1.5 text-sm font-semibold", props.inset && "pl-8", props.class)}
      {...rest}
    />
  )
}

const MenubarSeparator: Component<MenubarPrimitive.MenubarSeparatorProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <MenubarPrimitive.Separator class={cn("bg-muted -mx-1 my-1 h-px", props.class)} {...rest} />
  )
}

const MenubarShortcut: Component<ComponentProps<"span">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <span
      class={cn("text-muted-foreground ml-auto text-xs tracking-widest", props.class)}
      {...rest}
    />
  )
}

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarItemLabel,
  MenubarGroupLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut
}
