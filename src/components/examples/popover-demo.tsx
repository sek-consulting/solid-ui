import { Popover, PopoverContent, PopoverTrigger, Button, As } from "solid-ui-components"

import { ComponentExample } from "~/components/component-example"

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
