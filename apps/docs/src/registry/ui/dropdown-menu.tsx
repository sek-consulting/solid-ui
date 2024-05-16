import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import * as DropdownMenuPrimitive from "@kobalte/core/dropdown-menu"
import { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenu: Component<DropdownMenuPrimitive.DropdownMenuRootProps> = (props) => {
  return <DropdownMenuPrimitive.Root gutter={4} {...props} />
}

type DropdownMenuContentProps = DropdownMenuPrimitive.DropdownMenuContentProps & {
  class?: string | undefined
}

const DropdownMenuContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuContentProps>
) => {
  const [, rest] = splitProps(props as DropdownMenuContentProps, ["class"])
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        class={cn(
          "z-50 min-w-32 origin-[var(--kb-menu-content-transform-origin)] animate-content-hide overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[expanded]:animate-content-show",
          props.class
        )}
        {...rest}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

type DropdownMenuItemProps = DropdownMenuPrimitive.DropdownMenuItemProps & {
  class?: string | undefined
}

const DropdownMenuItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuItemProps>
) => {
  const [, rest] = splitProps(props as DropdownMenuItemProps, ["class"])
  return (
    <DropdownMenuPrimitive.Item
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
      {...rest}
    />
  )
}

const DropdownMenuShortcut: Component<ComponentProps<"span">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <span class={cn("ml-auto text-xs tracking-widest opacity-60", props.class)} {...rest} />
}

const DropdownMenuLabel: Component<ComponentProps<"div"> & { inset?: boolean }> = (props) => {
  const [, rest] = splitProps(props, ["class", "inset"])
  return (
    <div
      class={cn("px-2 py-1.5 text-sm font-semibold", props.inset && "pl-8", props.class)}
      {...rest}
    />
  )
}

type DropdownMenuSeparatorProps = DropdownMenuPrimitive.DropdownMenuSeparatorProps & {
  class?: string | undefined
}

const DropdownMenuSeparator = <T extends ValidComponent = "hr">(
  props: PolymorphicProps<T, DropdownMenuSeparatorProps>
) => {
  const [, rest] = splitProps(props as DropdownMenuSeparatorProps, ["class"])
  return (
    <DropdownMenuPrimitive.Separator
      class={cn("-mx-1 my-1 h-px bg-muted", props.class)}
      {...rest}
    />
  )
}

type DropdownMenuSubTriggerProps = DropdownMenuPrimitive.DropdownMenuSubTriggerProps & {
  class?: string | undefined
  children?: JSX.Element
}

const DropdownMenuSubTrigger = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuSubTriggerProps>
) => {
  const [, rest] = splitProps(props as DropdownMenuSubTriggerProps, ["class", "children"])
  return (
    <DropdownMenuPrimitive.SubTrigger
      class={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
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
    </DropdownMenuPrimitive.SubTrigger>
  )
}

type DropdownMenuSubContentProps = DropdownMenuPrimitive.DropdownMenuSubContentProps & {
  class?: string | undefined
}

const DropdownMenuSubContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuSubContentProps>
) => {
  const [, rest] = splitProps(props as DropdownMenuSubContentProps, ["class"])
  return (
    <DropdownMenuPrimitive.SubContent
      class={cn(
        "z-50 min-w-32 origin-[var(--kb-menu-content-transform-origin)] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in",
        props.class
      )}
      {...rest}
    />
  )
}

type DropdownMenuCheckboxItemProps = DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & {
  class?: string | undefined
  children?: JSX.Element
}

const DropdownMenuCheckboxItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuCheckboxItemProps>
) => {
  const [, rest] = splitProps(props as DropdownMenuCheckboxItemProps, ["class", "children"])
  return (
    <DropdownMenuPrimitive.CheckboxItem
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
      {...rest}
    >
      <span class="absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
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
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {props.children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

type DropdownMenuGroupLabelProps = DropdownMenuPrimitive.DropdownMenuGroupLabelProps & {
  class?: string | undefined
}

const DropdownMenuGroupLabel = <T extends ValidComponent = "span">(
  props: PolymorphicProps<T, DropdownMenuGroupLabelProps>
) => {
  const [, rest] = splitProps(props as DropdownMenuGroupLabelProps, ["class"])
  return (
    <DropdownMenuPrimitive.GroupLabel
      class={cn("px-2 py-1.5 text-sm font-semibold", props.class)}
      {...rest}
    />
  )
}

type DropdownMenuRadioItemProps = DropdownMenuPrimitive.DropdownMenuRadioItemProps & {
  class?: string | undefined
  children?: JSX.Element
}

const DropdownMenuRadioItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuRadioItemProps>
) => {
  const [, rest] = splitProps(props as DropdownMenuRadioItemProps, ["class", "children"])
  return (
    <DropdownMenuPrimitive.RadioItem
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
      {...rest}
    >
      <span class="absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
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
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {props.children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuCheckboxItem,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
}
