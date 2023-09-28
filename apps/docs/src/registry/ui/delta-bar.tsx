import { splitProps, type Component, type ComponentProps, mergeProps, Show } from "solid-js"

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

  const barColor =
    (props.value > 0 && props.isIncreasePositive) || (props.value < 0 && !props.isIncreasePositive)
      ? "bg-success-foreground"
      : "bg-error-foreground"

  const barWidth = `${Math.abs(props.value)}%`

  return (
    <div
      class={cn("bg-secondary relative flex h-2 w-full items-center rounded-full", props.class)}
      {...rest}
    >
      <div class="flex h-full w-1/2 justify-end">
        <Show when={props.value < 0}>
          <div class={cn("rounded-l-full", barColor)} style={{ width: barWidth }} />
        </Show>
      </div>
      <div class={cn("bg-primary ring-background z-10 h-4 w-1 rounded-full ring-2")} />
      <div class="flex h-full w-1/2 justify-start">
        <Show when={props.value > 0}>
          <div class={cn("rounded-r-full", barColor)} style={{ width: barWidth }} />
        </Show>
      </div>
    </div>
  )
}

export { DeltaBar }
