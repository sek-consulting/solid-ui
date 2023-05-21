import type { Component, JSX} from "solid-js";
import { splitProps } from "solid-js"

import { cn } from "~/lib/utils"

const ComponentExample: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <div class="no-mdx mt-6 rounded-lg border">
      <div class={cn("flex min-h-[350px] items-center justify-center p-10", props.class)} {...rest}>
        {props.children}
      </div>
    </div>
  )
}

export { ComponentExample }
