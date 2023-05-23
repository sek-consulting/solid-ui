import { For } from "solid-js"

import { ComponentExample } from "~/components/component-example"
import { Label } from "~/components/ui/label"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <ComponentExample>
      <RadioGroup>
        <For each={["Apple", "Orange", "Watermelon"]}>
          {(fruit) => (
            <RadioGroupItem value={fruit}>
              <Label>{fruit}</Label>
            </RadioGroupItem>
          )}
        </For>
      </RadioGroup>
    </ComponentExample>
  )
}
