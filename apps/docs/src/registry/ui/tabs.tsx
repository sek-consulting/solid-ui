import type { Component, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import { PolymorphicProps } from "@kobalte/core/polymorphic"
import {
  TabsContentProps,
  TabsIndicatorProps,
  TabsListProps,
  Tabs as TabsPrimitive,
  TabsTriggerProps
} from "@kobalte/core/tabs"

import { cn } from "~/lib/utils"

const Tabs = TabsPrimitive

type ListProps<T extends ValidComponent = "div"> = PolymorphicProps<T, TabsListProps>

const TabsList: Component<ListProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <TabsPrimitive.List
      class={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        props.class
      )}
      {...rest}
    />
  )
}

type TriggerProps<T extends ValidComponent = "button"> = PolymorphicProps<T, TabsTriggerProps>

const TabsTrigger: Component<TriggerProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <TabsPrimitive.Trigger
      class={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm",
        props.class
      )}
      {...rest}
    />
  )
}

type ContentProps<T extends ValidComponent = "div"> = PolymorphicProps<T, TabsContentProps>

const TabsContent: Component<ContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <TabsPrimitive.Content
      class={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        props.class
      )}
      {...rest}
    />
  )
}

type IndicatorProps<T extends ValidComponent = "div"> = PolymorphicProps<T, TabsIndicatorProps>

const TabsIndicator: Component<IndicatorProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <TabsPrimitive.Indicator
      class={cn(
        "duration-250ms absolute transition-all data-[orientation=horizontal]:-bottom-px data-[orientation=vertical]:-right-px data-[orientation=horizontal]:h-[2px] data-[orientation=vertical]:w-[2px]",
        props.class
      )}
      {...rest}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator }
