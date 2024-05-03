import { mergeProps, Show, splitProps, type Component, type ComponentProps } from "solid-js"

import { cn } from "~/lib/utils"

type DeltaBarProps = ComponentProps<"div"> & {
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
      class={cn("relative flex h-2 w-full items-center rounded-full bg-secondary", props.class)}
      {...rest}
    >
      <div class="flex h-full w-1/2 justify-end">
        <Show when={props.value < 0}>
          <div
            class={cn(
              "rounded-l-full",
              (props.value > 0 && props.isIncreasePositive) ||
                (props.value < 0 && !props.isIncreasePositive)
                ? "bg-success-foreground"
                : "bg-error-foreground"
            )}
            style={{ width: `${Math.abs(props.value)}%` }}
          />
        </Show>
      </div>
      <div class={cn("z-10 h-4 w-1 rounded-full bg-primary ring-2 ring-background")} />
      <div class="flex h-full w-1/2 justify-start">
        <Show when={props.value > 0}>
          <div
            class={cn(
              "rounded-r-full",
              (props.value > 0 && props.isIncreasePositive) ||
                (props.value < 0 && !props.isIncreasePositive)
                ? "bg-success-foreground"
                : "bg-error-foreground"
            )}
            style={{ width: `${Math.abs(props.value)}%` }}
          />
        </Show>
      </div>
    </div>
  )
}

export type { DeltaBarProps }
export { DeltaBar }
