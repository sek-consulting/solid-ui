import type { Component, ComponentProps, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import {
  MenubarCheckboxItemProps,
  MenubarContentProps,
  MenubarGroupLabelProps,
  MenubarItemLabelProps,
  MenubarItemProps,
  MenubarMenuProps,
  Menubar as MenubarPrimitive,
  MenubarRadioItemProps,
  MenubarRootProps,
  MenubarSeparatorProps,
  MenubarSubContentProps,
  MenubarSubTriggerProps,
  MenubarTriggerProps
} from "@kobalte/core/menubar"
import { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"

const MenubarMenu: Component<MenubarMenuProps> = (props) => {
  return <MenubarPrimitive.Menu gutter={8} {...props} />
}

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

type RootProps<T extends ValidComponent = "div"> = PolymorphicProps<T, MenubarRootProps>

const Menubar: Component<RootProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <MenubarPrimitive
      class={cn(
        "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
        props.class
      )}
      {...rest}
    />
  )
}

type TriggerProps<T extends ValidComponent = "button"> = PolymorphicProps<T, MenubarTriggerProps>

const MenubarTrigger: Component<TriggerProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <MenubarPrimitive.Trigger
      class={cn(
        "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        props.class
      )}
      {...rest}
    />
  )
}

type ContentProps<T extends ValidComponent = "div"> = PolymorphicProps<T, MenubarContentProps>

const MenubarContent: Component<ContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        class={cn(
          "z-50 min-w-48 origin-[var(--kb-menu-content-transform-origin)] animate-content-hide overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[expanded]:animate-content-show",
          props.class
        )}
        {...rest}
      />
    </MenubarPrimitive.Portal>
  )
}

type SubTriggerProps<T extends ValidComponent = "div"> = PolymorphicProps<
  T,
  MenubarSubTriggerProps
> & { inset?: boolean }

const MenubarSubTrigger: Component<SubTriggerProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children", "inset"])
  return (
    <MenubarPrimitive.SubTrigger
      class={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        props.inset && "pl-8",
        props.class
      )}
      {...rest}
    >
      {props.children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="ml-auto size-4"
      >
        <path d="M9 6l6 6l-6 6" />
      </svg>
    </MenubarPrimitive.SubTrigger>
  )
}

type SubContentProps<T extends ValidComponent = "div"> = PolymorphicProps<T, MenubarSubContentProps>

const MenubarSubContent: Component<SubContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <MenubarPrimitive.SubContent
      class={cn(
        "z-50 min-w-32 origin-[var(--kb-menu-content-transform-origin)] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in",
        props.class
      )}
      {...rest}
    />
  )
}

type ItemProps<T extends ValidComponent = "div"> = PolymorphicProps<T, MenubarItemProps> & {
  inset?: boolean
}

const MenubarItem: Component<ItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "inset"])
  return (
    <MenubarPrimitive.Item
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.inset && "pl-8",
        props.class
      )}
      {...rest}
    />
  )
}

type CheckboxItemProps<T extends ValidComponent = "div"> = PolymorphicProps<
  T,
  MenubarCheckboxItemProps
>

const MenubarCheckboxItem: Component<CheckboxItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <MenubarPrimitive.CheckboxItem
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
      {...rest}
    >
      <span class="absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
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
        </MenubarPrimitive.ItemIndicator>
      </span>
      {props.children}
    </MenubarPrimitive.CheckboxItem>
  )
}

type RadioItemProps<T extends ValidComponent = "div"> = PolymorphicProps<T, MenubarRadioItemProps>

const MenubarRadioItem: Component<RadioItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <MenubarPrimitive.RadioItem
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
      {...rest}
    >
      <span class="absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-2 fill-current"
          >
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          </svg>
        </MenubarPrimitive.ItemIndicator>
      </span>
      {props.children}
    </MenubarPrimitive.RadioItem>
  )
}

type ItemLabelProps<T extends ValidComponent = "div"> = PolymorphicProps<
  T,
  MenubarItemLabelProps
> & { inset?: boolean }

const MenubarItemLabel: Component<ItemLabelProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "inset"])
  return (
    <MenubarPrimitive.ItemLabel
      class={cn("px-2 py-1.5 text-sm font-semibold", props.inset && "pl-8", props.class)}
      {...rest}
    />
  )
}

type GroupLabelProps<T extends ValidComponent = "span"> = PolymorphicProps<
  T,
  MenubarGroupLabelProps
> & { inset?: boolean }

const MenubarGroupLabel: Component<GroupLabelProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "inset"])
  return (
    <MenubarPrimitive.GroupLabel
      class={cn("px-2 py-1.5 text-sm font-semibold", props.inset && "pl-8", props.class)}
      {...rest}
    />
  )
}

type SeparatorProps<T extends ValidComponent = "hr"> = PolymorphicProps<T, MenubarSeparatorProps>

const MenubarSeparator: Component<SeparatorProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <MenubarPrimitive.Separator class={cn("-mx-1 my-1 h-px bg-muted", props.class)} {...rest} />
  )
}

const MenubarShortcut: Component<ComponentProps<"span">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <span
      class={cn("ml-auto text-xs tracking-widest text-muted-foreground", props.class)}
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
