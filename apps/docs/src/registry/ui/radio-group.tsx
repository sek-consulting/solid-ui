import type { Component } from "solid-js"
import { splitProps } from "solid-js"

import { RadioGroup as RadioGroupPrimitive } from "@kobalte/core"

import { cn } from "~/lib/utils"

const RadioGroup: Component<RadioGroupPrimitive.RadioGroupRootProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <RadioGroupPrimitive.Root class={cn("grid gap-2", props.class)} {...rest} />
}

const RadioGroupItem: Component<RadioGroupPrimitive.RadioGroupItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <RadioGroupPrimitive.Item class={cn("flex items-center space-x-2", props.class)} {...rest}>
      <RadioGroupPrimitive.ItemInput />
      <RadioGroupPrimitive.ItemControl class="aspect-square size-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
        <RadioGroupPrimitive.ItemIndicator class="flex h-full items-center justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-2.5 fill-current text-current"
          >
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          </svg>
        </RadioGroupPrimitive.ItemIndicator>
      </RadioGroupPrimitive.ItemControl>
      {props.children}
    </RadioGroupPrimitive.Item>
  )
}

const RadioGroupItemLabel: Component<RadioGroupPrimitive.RadioGroupItemLabelProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <RadioGroupPrimitive.ItemLabel
      class={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        props.class
      )}
      {...rest}
    />
  )
}

export { RadioGroup, RadioGroupItem, RadioGroupItemLabel }
