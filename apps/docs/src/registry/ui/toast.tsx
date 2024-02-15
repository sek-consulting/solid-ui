import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Portal } from "solid-js/web"

import { toaster, Toast as ToastPrimitive } from "@kobalte/core"
import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import { TbX } from "solid-icons/tb"

import { cn } from "~/lib/utils"

const Toaster: Component<ToastPrimitive.ToastListProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <Portal>
      <ToastPrimitive.Region>
        <ToastPrimitive.List
          class={cn(
            "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
            props.class
          )}
          {...rest}
        />
      </ToastPrimitive.Region>
    </Portal>
  )
}

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--kb-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--kb-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[opened]:animate-in data-[closed]:animate-out data-[swipe=end]:animate-out data-[closed]:fade-out-80 data-[closed]:slide-out-to-right-full data-[opened]:slide-in-from-top-full data-[opened]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)
type ToastVariant = NonNullable<VariantProps<typeof toastVariants>["variant"]>

export interface ToastProps
  extends ToastPrimitive.ToastRootProps,
    VariantProps<typeof toastVariants> {}

const Toast: Component<ToastProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "variant"])
  return (
    <ToastPrimitive.Root
      class={cn(toastVariants({ variant: props.variant }), props.class)}
      {...rest}
    />
  )
}

const ToastClose: Component<ToastPrimitive.ToastCloseButtonProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <ToastPrimitive.CloseButton
      class={cn(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        props.class
      )}
      {...rest}
    >
      <TbX class="size-4" />
    </ToastPrimitive.CloseButton>
  )
}

const ToastTitle: Component<ToastPrimitive.ToastTitleProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <ToastPrimitive.Title class={cn("text-sm font-semibold", props.class)} {...rest} />
}

const ToastDescription: Component<ToastPrimitive.ToastDescriptionProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <ToastPrimitive.Description class={cn("text-sm opacity-90", props.class)} {...rest} />
}

function showToast(props: {
  title?: JSX.Element
  description?: JSX.Element
  variant?: ToastVariant
  duration?: number
}) {
  toaster.show((data) => (
    <Toast toastId={data.toastId} variant={props.variant} duration={props.duration}>
      <div class="grid gap-1">
        {props.title && <ToastTitle>{props.title}</ToastTitle>}
        {props.description && <ToastDescription>{props.description}</ToastDescription>}
      </div>
      <ToastClose />
    </Toast>
  ))
}

export { Toaster, Toast, ToastClose, ToastTitle, ToastDescription, showToast }
