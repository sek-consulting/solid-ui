import { Component, createContext, splitProps } from "solid-js"

import { ToggleGroup as ToggleGroupPrimitive } from "@kobalte/core"
import { VariantProps } from "class-variance-authority"

import { cn } from "~/lib/utils"
import { toggleVariants } from "~/registry/ui/toggle"

const ToggleGroupContext = createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default"
})

type ToggleGroupProps = ToggleGroupPrimitive.Root & VariantProps<typeof toggleVariants>

const ToggleGroup: Component<ToggleGroupProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children", "variant", "size"])
  return (
    <ToggleGroupPrimitive.Root
      class={cn("flex items-center justify-center gap-1", props.class)}
      {...rest}
    >
      <ToggleGroupContext.Provider value={{ variant: props.variant, size: props.size }}>
        {props.children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

export { ToggleGroup }
