import { As } from "@kobalte/core"

import { ComponentExample } from "../component-example"
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

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
