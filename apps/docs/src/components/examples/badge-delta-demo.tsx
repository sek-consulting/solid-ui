import { BadgeDelta } from "~/../packages/core"

import { ComponentExample } from "~/components/component-example"

export function BadgeDeltaDemo() {
  return (
    <ComponentExample class="flex flex-col gap-4">
      <p>BadgeDelta with pre-defined status icons</p>
      <div class="flex gap-2">
        <BadgeDelta deltaType="increase">text</BadgeDelta>
        <BadgeDelta deltaType="moderateIncrease">text</BadgeDelta>
        <BadgeDelta deltaType="unchanged">text</BadgeDelta>
        <BadgeDelta deltaType="moderateDecrease">text</BadgeDelta>
        <BadgeDelta deltaType="decrease">text</BadgeDelta>
      </div>
      <p>BadgeDelta without text</p>
      <div class="flex gap-2">
        <BadgeDelta deltaType="increase" />
        <BadgeDelta deltaType="moderateIncrease" />
        <BadgeDelta deltaType="unchanged" />
        <BadgeDelta deltaType="moderateDecrease" />
        <BadgeDelta deltaType="decrease" />
      </div>
    </ComponentExample>
  )
}
