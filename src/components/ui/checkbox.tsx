import { Component, Show } from "solid-js"
import { splitProps } from "solid-js"

import { Checkbox as CheckboxPrimitive } from "@kobalte/core"

import { Icons } from "~/components/icons"
import { cn } from "~/lib/utils"

interface CheckboxProps extends CheckboxPrimitive.CheckboxRootProps {
  label: string
  description?: string
  errorMessage?: string
}

const Checkbox: Component<CheckboxProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "label", "description", "errorMessage"])
  return (
    <CheckboxPrimitive.Root class={cn("items-top group flex space-x-2", props.class)} {...rest}>
      <CheckboxPrimitive.Input />
      <CheckboxPrimitive.Control class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:bg-primary data-[checked]:text-primary-foreground">
        <CheckboxPrimitive.Indicator>
          <Icons.check class="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Control>
      <div class="grid gap-1.5 leading-none">
        <Show when={props.label}>
          <CheckboxPrimitive.Label class="text-sm font-medium leading-none group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-70">
            {props.label}
          </CheckboxPrimitive.Label>
        </Show>
        <Show when={props.description}>
          <CheckboxPrimitive.Description class="text-muted-foreground text-sm">
            {props.description}
          </CheckboxPrimitive.Description>
        </Show>
        <Show when={props.errorMessage}>
          <CheckboxPrimitive.ErrorMessage class="text-destructive text-sm">
            {props.errorMessage}
          </CheckboxPrimitive.ErrorMessage>
        </Show>
      </div>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
