import { Show } from "solid-js"

import { ComponentExample } from "~/components/component-example"
import { Icons } from "~/components/icons"
import { Toggle } from "~/registry/ui/toggle"

export function ToggleDemo() {
  return (
    <ComponentExample>
      <Toggle>
        {(state) => (
          <Show when={state.pressed()} fallback={<Icons.moon />}>
            <Icons.sun />
          </Show>
        )}
      </Toggle>
    </ComponentExample>
  )
}
