import { DropdownMenu as DropdownMenuPrimitive } from "@kobalte/core"
import { Component, JSX, splitProps } from "solid-js"
import { cn } from "~/lib/utils"
import { Icons } from "~/components/icons"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuContent: Component<DropdownMenuPrimitive.DropdownMenuContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        class={cn(
          "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in origin-[var(--kb-menu-content-transform-origin)]",
          props.class
        )}
        {...rest}
      >
        {props.children}
        <DropdownMenuPrimitive.Arrow size={10} />
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  )
}

const DropdownMenuItem: Component<DropdownMenuPrimitive.DropdownMenuItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
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

const DropdownMenuShortcut: Component<JSX.HTMLAttributes<HTMLSpanElement>> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <span class={cn("ml-auto text-xs tracking-widest opacity-60", props.class)} {...rest} />
}

const DropdownMenuSeparator: Component<DropdownMenuPrimitive.DropdownMenuSeparatorProps> = (
  props
) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <DropdownMenuPrimitive.Separator
      class={cn("-mx-1 my-1 h-px bg-muted", props.class)}
      {...rest}
    />
  )
}

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuSubTrigger: Component<DropdownMenuPrimitive.DropdownMenuSubTriggerProps> = (
  props
) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <DropdownMenuPrimitive.SubTrigger
      class={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        props.class
      )}
      {...rest}
    >
      {props.children}
      <Icons.chevronRight class="ml-auto h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

const DropdownMenuSubContent: Component<DropdownMenuPrimitive.DropdownMenuSubContentProps> = (
  props
) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <DropdownMenuPrimitive.SubContent
      class={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in origin-[var(--kb-menu-content-transform-origin)]",
        props.class
      )}
      {...rest}
    />
  )
}

const DropdownMenuCheckboxItem: Component<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps> = (
  props
) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <DropdownMenuPrimitive.CheckboxItem
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
      {...rest}
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Icons.check class="h-4 w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {props.children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuGroupLabel: Component<DropdownMenuPrimitive.DropdownMenuGroupLabelProps> = (
  props
) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <DropdownMenuPrimitive.GroupLabel
      class={cn("px-2 py-1.5 text-sm font-semibold", props.class)}
      {...rest}
    />
  )
}

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuRadioItem: Component<DropdownMenuPrimitive.DropdownMenuRadioItemProps> = (
  props
) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <DropdownMenuPrimitive.RadioItem
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        props.class
      )}
      {...rest}
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Icons.circle class="h-2 w-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {props.children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

// TODO:
// RadioItems

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
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