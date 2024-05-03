import { Component, createContext, splitProps, ValidComponent } from "solid-js"

import { PolymorphicProps } from "@kobalte/core/polymorphic"
import {
  ToggleGroupItemProps,
  ToggleGroup as ToggleGroupPrimitive,
  ToggleGroupRootProps
} from "@kobalte/core/toggle-group"
import { VariantProps } from "class-variance-authority"

import { cn } from "~/lib/utils"
import { toggleVariants } from "~/registry/ui/toggle"

const ToggleGroupContext = createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default"
})

type RootProps<T extends ValidComponent = "div"> = PolymorphicProps<T, ToggleGroupRootProps> &
  VariantProps<typeof toggleVariants>

const ToggleGroup: Component<RootProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children", "size", "variant"])

  return (
    <ToggleGroupPrimitive
      class={cn("flex items-center justify-center gap-1", props.class)}
      {...rest}
    >
      <ToggleGroupContext.Provider
        value={{
          get size() {
            return props.size
          },
          get variant() {
            return props.variant
          }
        }}
      >
        {props.children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  )
}

type ItemProps<T extends ValidComponent = "button"> = PolymorphicProps<T, ToggleGroupItemProps> &
  VariantProps<typeof toggleVariants>

const ToggleGroupItem: Component<ItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "size", "variant"])
  return (
    <ToggleGroupPrimitive.Item
      class={cn(toggleVariants({ size: props.size, variant: props.variant }), props.class)}
      {...rest}
    />
  )
}

export { ToggleGroup, ToggleGroupItem }
