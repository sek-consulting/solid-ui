import { splitProps, type Component } from "solid-js"

import { NumberField as NumberFieldPrimitive } from "@kobalte/core"
import { TbChevronDown, TbChevronUp } from "solid-icons/tb"

import { cn } from "~/lib/utils"

const NumberField = NumberFieldPrimitive.Root

const NumberFieldLabel: Component<NumberFieldPrimitive.NumberFieldLabelProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <NumberFieldPrimitive.Label
      class={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        props.class
      )}
      {...rest}
    />
  )
}

const NumberFieldInput: Component<NumberFieldPrimitive.NumberFieldInputProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <NumberFieldPrimitive.Input
      class={cn(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[invalid]:border-error-foreground data-[invalid]:text-error-foreground",
        props.class
      )}
      {...rest}
    />
  )
}

const NumberFieldIncrementTrigger: Component<
  NumberFieldPrimitive.NumberFieldIncrementTriggerProps
> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <NumberFieldPrimitive.IncrementTrigger
      class={cn(
        "absolute right-1 top-1 inline-flex size-4 items-center justify-center",
        props.class
      )}
      {...rest}
    >
      {props.children ?? <TbChevronUp />}
    </NumberFieldPrimitive.IncrementTrigger>
  )
}

const NumberFieldDecrementTrigger: Component<
  NumberFieldPrimitive.NumberFieldDecrementTriggerProps
> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <NumberFieldPrimitive.DecrementTrigger
      class={cn(
        "absolute bottom-1 right-1 inline-flex size-4 items-center justify-center",
        props.class
      )}
      {...rest}
    >
      {props.children ?? <TbChevronDown />}
    </NumberFieldPrimitive.DecrementTrigger>
  )
}

const NumberFieldDescription: Component<NumberFieldPrimitive.NumberFieldDescriptionProps> = (
  props
) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <NumberFieldPrimitive.Description
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  )
}

const NumberFieldErrorMessage: Component<NumberFieldPrimitive.NumberFieldErrorMessageProps> = (
  props
) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <NumberFieldPrimitive.ErrorMessage
      class={cn("text-sm text-error-foreground", props.class)}
      {...rest}
    />
  )
}

export {
  NumberField,
  NumberFieldLabel,
  NumberFieldInput,
  NumberFieldIncrementTrigger,
  NumberFieldDecrementTrigger,
  NumberFieldDescription,
  NumberFieldErrorMessage
}
