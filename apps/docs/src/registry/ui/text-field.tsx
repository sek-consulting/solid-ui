import type { ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import { PolymorphicProps } from "@kobalte/core"
import * as TextFieldPrimitive from "@kobalte/core/text-field"
import { cva } from "class-variance-authority"

import { cn } from "~/lib/utils"

const TextField = TextFieldPrimitive.Root

type TextFieldInputProps = TextFieldPrimitive.TextFieldInputProps & {
  class?: string | undefined
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"
}

const TextFieldInput = <T extends ValidComponent = "input">(
  props: PolymorphicProps<T, TextFieldInputProps>
) => {
  const [local, others] = splitProps(props as TextFieldInputProps, ["type", "class"])
  return (
    <TextFieldPrimitive.Input
      type={local.type}
      class={cn(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        local.class
      )}
      {...others}
    />
  )
}

type TextFieldTextArea = TextFieldPrimitive.TextFieldTextAreaProps & { class?: string | undefined }

const TextFieldTextArea = <T extends ValidComponent = "textarea">(
  props: PolymorphicProps<T, TextFieldPrimitive.TextFieldTextAreaProps>
) => {
  const [local, others] = splitProps(props as TextFieldTextArea, ["class"])
  return (
    <TextFieldPrimitive.TextArea
      class={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        local.class
      )}
      {...others}
    />
  )
}

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        label: "data-[invalid]:text-destructive",
        description: "text-destructive",
        error: "font-normal text-muted-foreground"
      }
    },
    defaultVariants: {
      variant: "label"
    }
  }
)

type TextFieldLabelProps = TextFieldPrimitive.TextFieldLabelProps & { class?: string | undefined }

const TextFieldLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, TextFieldLabelProps>
) => {
  const [local, others] = splitProps(props as TextFieldLabelProps, ["class"])
  return <TextFieldPrimitive.Label class={cn(labelVariants(), local.class)} {...others} />
}

type TextFieldDescriptionProps = TextFieldPrimitive.TextFieldDescriptionProps & {
  class?: string | undefined
}

const TextFieldDescription = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldDescriptionProps>
) => {
  const [local, others] = splitProps(props as TextFieldDescriptionProps, ["class"])
  return (
    <TextFieldPrimitive.Description
      class={cn(labelVariants({ variant: "description" }), local.class)}
      {...others}
    />
  )
}

type TextFieldErrorMessageProps = TextFieldPrimitive.TextFieldErrorMessageProps & {
  class?: string | undefined
}

const TextFieldErrorMessage = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldErrorMessageProps>
) => {
  const [local, others] = splitProps(props as TextFieldErrorMessageProps, ["class"])
  return <TextFieldPrimitive.ErrorMessage class={cn(labelVariants(), local.class)} {...others} />
}

export {
  TextField,
  TextFieldInput,
  TextFieldTextArea,
  TextFieldLabel,
  TextFieldDescription,
  TextFieldErrorMessage
}
