import { Tooltip } from "@kobalte/core"

import { ComponentExample } from "../component-example"

export function TooltipDemo() {
  return (
    <ComponentExample>
      <Tooltip.Root>
        <Tooltip.Trigger class="tooltip__trigger">Trigger</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content class="tooltip__content">
            <Tooltip.Arrow />
            <p>Tooltip content</p>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </ComponentExample>
  )
}
