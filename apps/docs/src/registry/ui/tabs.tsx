import type { Component } from "solid-js"
import { splitProps } from "solid-js"

import { Tabs as TabsPrimitive } from "@kobalte/core"

import { cn } from "~/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList: Component<TabsPrimitive.TabsListProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <TabsPrimitive.List
      class={cn(
        "bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-md p-1",
        props.class
      )}
      {...rest}
    />
  )
}

const TabsTrigger: Component<TabsPrimitive.TabsTriggerProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <TabsPrimitive.Trigger
      class={cn(
        "ring-offset-background focus-visible:ring-ring data-[selected]:bg-background data-[selected]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected]:shadow-sm",
        props.class
      )}
      {...rest}
    />
  )
}

const TabsContent: Component<TabsPrimitive.TabsContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <TabsPrimitive.Content
      class={cn(
        "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        props.class
      )}
      {...rest}
    />
  )
}

const TabsIndicator: Component<TabsPrimitive.TabsIndicatorProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <TabsPrimitive.Indicator
      class={cn(
        "duration-250ms absolute transition-all data-[orientation=horizontal]:bottom-[-1px] data-[orientation=vertical]:right-[-1px] data-[orientation=horizontal]:h-[2px] data-[orientation=vertical]:w-[2px]",
        props.class
      )}
      {...rest}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator }
