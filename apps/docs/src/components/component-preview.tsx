import { createMemo, mergeProps, splitProps, type Component, type ComponentProps } from "solid-js"

import { Index } from "~/__registry__"

import { cn } from "~/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/registry/ui/tabs"

interface ComponentPreviewProps extends ComponentProps<"div"> {
  name: string
  source: string
  align?: "center" | "start" | "end"
}

const ComponentPreview: Component<ComponentPreviewProps> = (rawProps) => {
  const Preview = createMemo(() => {
    const Component = Index[rawProps.name]?.component

    if (!Component) {
      return (
        <p class="text-sm text-muted-foreground">
          Component{" "}
          <code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {rawProps.name}
          </code>{" "}
          not found in registry.
        </p>
      )
    }

    return <Component />
  })

  const props = mergeProps({ align: "center" } as const, rawProps)
  const [, rest] = splitProps(props, ["class", "align", "children", "name"])

  return (
    <div class={cn("group relative my-4 flex flex-col space-y-2", props.class)} {...rest}>
      <Tabs defaultValue="preview" class="relative mr-auto w-full">
        <div class="flex items-center justify-between pb-3">
          <TabsList class="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="preview"
              class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[selected]:border-b-primary data-[selected]:text-foreground data-[selected]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[selected]:border-b-primary data-[selected]:text-foreground data-[selected]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" class="relative rounded-md border">
          <div
            class={cn(
              "preview flex min-h-[350px] w-full justify-center p-10",
              props.align === "center" && "items-center",
              props.align === "start" && "items-start",
              props.align === "end" && "items-end"
            )}
          >
            <Preview />
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div class="flex flex-col space-y-4">
            <div class="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
              {props.children}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export { ComponentPreview }
