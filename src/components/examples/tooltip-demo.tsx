import { Tooltip, TooltipContent, TooltipTrigger, Button, As } from "solid-ui-components"

import { ComponentExample } from "../component-example"

export function TooltipDemo() {
  return (
    <ComponentExample>
      <Tooltip>
        <TooltipTrigger asChild>
          <As component={Button} variant="outline">
            Trigger
          </As>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
    </ComponentExample>
  )
}
