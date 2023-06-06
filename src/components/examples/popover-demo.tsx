import { As } from "@kobalte/core"

import { ComponentExample } from "~/components/component-example"
import { Button } from "~/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover"

export function PopoverDemo() {
  return (
    <ComponentExample>
      <Popover>
        <PopoverTrigger asChild>
          <As component={Button}>trigger me</As>
        </PopoverTrigger>
        <PopoverContent>
          A UI toolkit for building accessible web apps and design systems with SolidJS.
        </PopoverContent>
      </Popover>
    </ComponentExample>
  )
}
