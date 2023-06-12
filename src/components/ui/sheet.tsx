import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"

import { Dialog as SheetPrimitive } from "@kobalte/core"
import { cva, type VariantProps } from "class-variance-authority"

import { Icons } from "~/components/icons"
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
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
        props.class
      )}
      {...rest}
    />
  )
}

const sheetVariants = cva(
  "fixed z-50 scale-100 gap-4 border bg-background p-6 opacity-100 shadow-lg",
  {
    variants: {
      position: {
        top: "w-full animate-in slide-in-from-top duration-300",
        bottom: "w-full animate-in slide-in-from-bottom duration-300",
        left: "h-full animate-in slide-in-from-left duration-300",
        right: "h-full animate-in slide-in-from-right duration-300"
      },
      size: {
        content: "",
        default: "",
        sm: "",
        lg: "",
        xl: "",
        full: ""
      }
    },
    compoundVariants: [
      {
        position: ["top", "bottom"],
        size: "content",
        class: "max-h-screen"
      },
      {
        position: ["top", "bottom"],
        size: "default",
        class: "h-1/3"
      },
      {
        position: ["top", "bottom"],
        size: "sm",
        class: "h-1/4"
      },
      {
        position: ["top", "bottom"],
        size: "lg",
        class: "h-1/2"
      },
      {
        position: ["top", "bottom"],
        size: "xl",
        class: "h-5/6"
      },
      {
        position: ["top", "bottom"],
        size: "full",
        class: "h-screen"
      },
      {
        position: ["right", "left"],
        size: "content",
        class: "max-w-screen"
      },
      {
        position: ["right", "left"],
        size: "default",
        class: "w-1/3"
      },
      {
        position: ["right", "left"],
        size: "sm",
        class: "w-1/4"
      },
      {
        position: ["right", "left"],
        size: "lg",
        class: "w-1/2"
      },
      {
        position: ["right", "left"],
        size: "xl",
        class: "w-5/6"
      },
      {
        position: ["right", "left"],
        size: "full",
        class: "w-screen"
      }
    ],
    defaultVariants: {
      position: "right",
      size: "default"
    }
  }
)

export interface DialogContentProps
  extends SheetPrimitive.DialogContentProps,
    VariantProps<typeof sheetVariants> {}

const SheetContent: Component<DialogContentProps> = (props) => {
  const [, rest] = splitProps(props, ["position", "size", "class", "children"])
  return (
    <SheetPortal position={props.position}>
      <SheetOverlay />
      <SheetPrimitive.Content
        class={cn(sheetVariants({ position: props.position, size: props.size }), props.class)}
        {...rest}
      >
        {props.children}
        <SheetPrimitive.CloseButton class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <Icons.close class="h-4 w-4" />
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
