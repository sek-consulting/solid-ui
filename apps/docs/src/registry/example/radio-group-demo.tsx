import { For } from "solid-js"

import { Label } from "~/registry/ui/label"
import { RadioGroup, RadioGroupItem } from "~/registry/ui/radio-group"

export default function RadioGroupDemo() {
  return (
    <RadioGroup>
      <For each={["Apple", "Orange", "Watermelon"]}>
        {(fruit) => (
          <RadioGroupItem value={fruit}>
            <Label>{fruit}</Label>
          </RadioGroupItem>
        )}
      </For>
    </RadioGroup>
  )
}
