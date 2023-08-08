import { Show } from "solid-js"

import { ComponentExample } from "../component-example"
import { Icons } from "../icons"
import { Toggle } from "../ui/toggle"

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
