import { splitProps, type Component, type ComponentProps, mergeProps } from "solid-js"

import { cn } from "~/lib/utils"

export interface DeltaBarProps extends ComponentProps<"div"> {
  value: number
  isIncreasePositive?: boolean
}

const DeltaBar: Component<DeltaBarProps> = (rawProps) => {
  const props = mergeProps(
    {
      isIncreasePositive: true
    },
    rawProps
  )
  const [, rest] = splitProps(props, ["value", "isIncreasePositive", "class"])
  return (
    <div
      class={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", props.class)}
      {...rest}
    ></div>
  )
}

export { DeltaBar }
