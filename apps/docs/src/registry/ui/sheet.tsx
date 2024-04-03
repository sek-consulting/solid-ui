import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"

import { Dialog as SheetPrimitive } from "@kobalte/core"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.CloseButton

const portalVariants = cva("fixed inset-0 z-50 flex", {
  variants: {
    position: {
      top: "items-start",
      bottom: "items-end",
      left: "justify-start",
      right: "justify-end"
    }
  },
  defaultVariants: { position: "right" }
})

interface SheetPortalProps
  extends SheetPrimitive.DialogPortalProps,
    VariantProps<typeof portalVariants> {}

const SheetPortal: Component<SheetPortalProps> = (props) => {
  const [, rest] = splitProps(props, ["position", "children"])
  return (
    <SheetPrimitive.Portal {...rest}>
      <div class={portalVariants({ position: props.position })}>{props.children}</div>
    </SheetPrimitive.Portal>
  )
}

const SheetOverlay: Component<SheetPrimitive.DialogOverlayProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <SheetPrimitive.Overlay
      class={cn(
        "fixed inset-0 z-50 bg-black/80 data-[expanded=]:animate-in data-[closed=]:animate-out data-[closed=]:fade-out-0 data-[expanded=]:fade-in-0",
        props.class
      )}
      {...rest}
    />
  )
}

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[closed=]:duration-300 data-[expanded=]:duration-500 data-[expanded=]:animate-in data-[closed=]:animate-out",
  {
    variants: {
      position: {
        top: "inset-x-0 top-0 border-b data-[closed=]:slide-out-to-top data-[expanded=]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[closed=]:slide-out-to-bottom data-[expanded=]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[closed=]:slide-out-to-left data-[expanded]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[closed=]:slide-out-to-right data-[expanded=]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      position: "right"
    }
  }
)

export interface DialogContentProps
  extends SheetPrimitive.DialogContentProps,
    VariantProps<typeof sheetVariants> {}

const SheetContent: Component<DialogContentProps> = (props) => {
  const [, rest] = splitProps(props, ["position", "class", "children"])
  return (
    <SheetPortal position={props.position}>
      <SheetOverlay />
      <SheetPrimitive.Content
        class={cn(sheetVariants({ position: props.position }), props.class)}
        {...rest}
      >
        {props.children}
        <SheetPrimitive.CloseButton class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
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
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
          <span class="sr-only">Close</span>
        </SheetPrimitive.CloseButton>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

const SheetHeader: Component<ComponentProps<"div">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <div class={cn("flex flex-col space-y-2 text-center sm:text-left", props.class)} {...rest} />
  )
}

const SheetFooter: Component<ComponentProps<"div">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <div
      class={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", props.class)}
      {...rest}
    />
  )
}

const SheetTitle: Component<SheetPrimitive.DialogTitleProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <SheetPrimitive.Title
      class={cn("text-lg font-semibold text-foreground", props.class)}
      {...rest}
    />
  )
}

const SheetDescription: Component<SheetPrimitive.DialogDescriptionProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <SheetPrimitive.Description
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription
}
