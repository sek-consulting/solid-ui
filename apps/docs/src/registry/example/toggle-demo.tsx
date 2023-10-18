import { Show } from "solid-js"

import { Icons } from "~/components/icons"
import { Toggle } from "~/registry/ui/toggle"

export default function ToggleDemo() {
  return (
    <Toggle>
      {(state) => (
        <Show when={state.pressed()} fallback={<Icons.moon />}>
          <Icons.sun />
        </Show>
      )}
    </Toggle>
  )
}
