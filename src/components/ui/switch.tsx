import { As, Switch as SwitchPrimitive } from "@kobalte/core"
import { Component, Show, splitProps } from "solid-js"
import { cn } from "~/lib/utils"
import { Label } from "./label"

const Switch: Component<SwitchPrimitive.SwitchRootProps & { label?: string }> = (props) => {
  const [, rest] = splitProps(props, ["label"])
  return (
    <SwitchPrimitive.Root {...rest}>
      <SwitchPrimitive.Input />
      <div class="flex items-center space-x-2">
        <SwitchPrimitive.Control class="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:bg-primary bg-input">
          <SwitchPrimitive.Thumb
            class={cn(
              "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[checked]:translate-x-5 translate-x-0"
            )}
          />
        </SwitchPrimitive.Control>
        <Show when={props.label}>
          <SwitchPrimitive.Label as={Label}>{props.label}</SwitchPrimitive.Label>
        </Show>
      </div>
    </SwitchPrimitive.Root>
  )
}

export { Switch }
