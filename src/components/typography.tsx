import { Component, JSX, splitProps } from "solid-js"
import { cn } from "~/lib/utils"

const H2: Component<JSX.HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <h2
      class={cn(
        "mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
        props.class
      )}
      {...rest}
    >
      {props.children}
    </h2>
  )
}

const H3: Component<JSX.HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <h3 class={cn("mt-8 scroll-m-20 text-xl font-semibold tracking-tight", props.class)} {...rest}>
      {props.children}
    </h3>
  )
}

export { H2, H3 }
