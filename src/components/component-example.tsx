import { Component, JSX, splitProps } from "solid-js"

import { cn } from "~/lib/utils"

const ComponentExample: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <div class="rounded-lg border mt-6">
      <div class={cn("flex min-h-[350px] justify-center p-10 items-center", props.class)} {...rest}>
        {props.children}
      </div>
    </div>
  )
}

export { ComponentExample }
