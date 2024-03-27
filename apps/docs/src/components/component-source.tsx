import type { Component, ComponentProps } from "solid-js"

import { cn } from "~/lib/utils"
import { CodeBlockWrapper } from "~/components/code-block-wrapper"

interface ComponentSourceProps extends ComponentProps<"div"> {
  src: string
}

const ComponentSource: Component<ComponentSourceProps> = (props) => {
  return (
    <CodeBlockWrapper
      expandButtonTitle="Expand"
      class={cn("my-6 overflow-hidden rounded-md", props.class)}
    >
      {props.children}
    </CodeBlockWrapper>
  )
}

export { ComponentSource }
