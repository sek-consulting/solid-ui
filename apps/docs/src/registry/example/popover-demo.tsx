import { As } from "@kobalte/core"

import { Button } from "~/registry/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "~/registry/ui/popover"

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <As component={Button}>trigger me</As>
      </PopoverTrigger>
      <PopoverContent>
        A UI toolkit for building accessible web apps and design systems with SolidJS.
      </PopoverContent>
    </Popover>
  )
}
