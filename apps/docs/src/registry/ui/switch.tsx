import type { Component } from "solid-js"
import { Show, splitProps } from "solid-js"

import * as SwitchPrimitive from "@kobalte/core/switch"

import { cn } from "~/lib/utils"

type RootProps = SwitchPrimitive.SwitchRootProps & {
  label?: string
  errorMessage?: string
}

const Switch: Component<RootProps> = (props) => {
  const [local, others] = splitProps(props, ["label", "errorMessage"])
  return (
    <SwitchPrimitive.Root {...others}>
      <SwitchPrimitive.Input />
      <div class="items-top flex space-x-2">
        <SwitchPrimitive.Control class="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-input transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:bg-primary">
          <SwitchPrimitive.Thumb
            class={cn(
              "pointer-events-none block size-5 translate-x-0 rounded-full bg-background shadow-lg ring-0 transition-transform data-[checked]:translate-x-5"
            )}
          />
        </SwitchPrimitive.Control>
        <div class="grid gap-1.5 leading-none">
          <Show when={local.label}>
            <SwitchPrimitive.Label class="text-sm font-medium leading-none group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-70">
              {local.label}
            </SwitchPrimitive.Label>
          </Show>
          <Show when={local.errorMessage}>
            <SwitchPrimitive.ErrorMessage class="text-sm text-destructive">
              {local.errorMessage}
            </SwitchPrimitive.ErrorMessage>
          </Show>
        </div>
      </div>
    </SwitchPrimitive.Root>
  )
}

export { Switch }
