import type { Component } from "solid-js"
import { splitProps } from "solid-js"

import { AlertDialog as AlertDialogPrimitive } from "@kobalte/core"
import { TbX } from "solid-icons/tb"

import { cn } from "~/lib/utils"

const AlertDialog = AlertDialogPrimitive.Root
const AlertDialogTrigger = AlertDialogPrimitive.Trigger
const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay: Component<AlertDialogPrimitive.AlertDialogOverlayProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <AlertDialogPrimitive.Overlay
      class={cn(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0",
        props.class
      )}
      {...rest}
    />
  )
}

const AlertDialogContent: Component<AlertDialogPrimitive.AlertDialogContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        class={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 data-[closed]:slide-out-to-left-1/2 data-[closed]:slide-out-to-top-[48%] data-[expanded]:slide-in-from-left-1/2 data-[expanded]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
          props.class
        )}
        {...rest}
      >
        {props.children}
        <AlertDialogPrimitive.CloseButton class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[expanded]:bg-accent data-[expanded]:text-muted-foreground">
          <TbX class="size-4" />
          <span class="sr-only">Close</span>
        </AlertDialogPrimitive.CloseButton>
      </AlertDialogPrimitive.Content>
    </AlertDialogPortal>
  )
}

const AlertDialogTitle: Component<AlertDialogPrimitive.AlertDialogTitleProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <AlertDialogPrimitive.Title class={cn("text-lg font-semibold", props.class)} {...rest} />
}

const AlertDialogDescription: Component<AlertDialogPrimitive.AlertDialogDescriptionProps> = (
  props
) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <AlertDialogPrimitive.Description
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription
}
