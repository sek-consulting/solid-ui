import { For } from "solid-js"
import { RadioGroup, RadioGroupItem, Label } from "~/../packages/core"


import { ComponentExample } from "~/components/component-example"

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
