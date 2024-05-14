import type { ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import { PolymorphicProps } from "@kobalte/core/polymorphic"
import * as TabsPrimitive from "@kobalte/core/tabs"

import { cn } from "~/lib/utils"

const Tabs = TabsPrimitive.Root

type TabsListProps = TabsPrimitive.TabsListProps & { class?: string | undefined }

const TabsList = <T extends ValidComponent = "div">(props: PolymorphicProps<T, TabsListProps>) => {
  const [local, others] = splitProps(props as TabsListProps, ["class"])
  return (
    <TabsPrimitive.List
      class={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        local.class
      )}
      {...others}
    />
  )
}

type TabsTriggerProps = TabsPrimitive.TabsTriggerProps & { class?: string | undefined }

const TabsTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, TabsTriggerProps>
) => {
  const [local, others] = splitProps(props as TabsTriggerProps, ["class"])
  return (
    <TabsPrimitive.Trigger
      class={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm",
        local.class
      )}
      {...others}
    />
  )
}

type TabsContentProps = TabsPrimitive.TabsContentProps & { class?: string | undefined }

const TabsContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TabsContentProps>
) => {
  const [local, others] = splitProps(props as TabsContentProps, ["class"])
  return (
    <TabsPrimitive.Content
      class={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        local.class
      )}
      {...others}
    />
  )
}

type TabsIndicatorProps = TabsPrimitive.TabsIndicatorProps & { class?: string | undefined }

const TabsIndicator = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TabsIndicatorProps>
) => {
  const [local, others] = splitProps(props as TabsIndicatorProps, ["class"])
  return (
    <TabsPrimitive.Indicator
      class={cn(
        "duration-250ms absolute transition-all data-[orientation=horizontal]:-bottom-px data-[orientation=vertical]:-right-px data-[orientation=horizontal]:h-[2px] data-[orientation=vertical]:w-[2px]",
        local.class
      )}
      {...others}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator }
