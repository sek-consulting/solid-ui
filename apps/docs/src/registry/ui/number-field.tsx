import { splitProps, ValidComponent, type Component } from "solid-js"

import {
  NumberFieldDecrementTriggerProps,
  NumberFieldDescriptionProps,
  NumberFieldErrorMessageProps,
  NumberFieldIncrementTriggerProps,
  NumberFieldInputProps,
  NumberFieldLabelProps,
  NumberField as NumberFieldPrimitive
} from "@kobalte/core/number-field"
import { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"

const NumberField = NumberFieldPrimitive

type LabelProps<T extends ValidComponent = "label"> = PolymorphicProps<T, NumberFieldLabelProps>

const NumberFieldLabel: Component<LabelProps> = (props) => {
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

type InputProps<T extends ValidComponent = "input"> = PolymorphicProps<T, NumberFieldInputProps>

const NumberFieldInput: Component<InputProps> = (props) => {
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

type IncrementTriggerProps<T extends ValidComponent = "button"> = PolymorphicProps<
  T,
  NumberFieldIncrementTriggerProps
>

const NumberFieldIncrementTrigger: Component<IncrementTriggerProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <NumberFieldPrimitive.IncrementTrigger
      class={cn(
        "absolute right-1 top-1 inline-flex size-4 items-center justify-center",
        props.class
      )}
      {...rest}
    >
      {props.children ?? (
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
          <path d="M6 15l6 -6l6 6" />
        </svg>
      )}
    </NumberFieldPrimitive.IncrementTrigger>
  )
}

type DecrementTriggerProps<T extends ValidComponent = "button"> = PolymorphicProps<
  T,
  NumberFieldDecrementTriggerProps
>

const NumberFieldDecrementTrigger: Component<DecrementTriggerProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <NumberFieldPrimitive.DecrementTrigger
      class={cn(
        "absolute bottom-1 right-1 inline-flex size-4 items-center justify-center",
        props.class
      )}
      {...rest}
    >
      {props.children ?? (
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
          <path d="M6 9l6 6l6 -6" />
        </svg>
      )}
    </NumberFieldPrimitive.DecrementTrigger>
  )
}

type DescriptionProps<T extends ValidComponent = "div"> = PolymorphicProps<
  T,
  NumberFieldDescriptionProps
>

const NumberFieldDescription: Component<DescriptionProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <NumberFieldPrimitive.Description
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  )
}

type ErrorMessageProps<T extends ValidComponent = "div"> = PolymorphicProps<
  T,
  NumberFieldErrorMessageProps
>

const NumberFieldErrorMessage: Component<ErrorMessageProps> = (props) => {
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
