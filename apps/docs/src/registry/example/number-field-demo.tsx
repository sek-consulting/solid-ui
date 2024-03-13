import { createSignal } from "solid-js"

import {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldErrorMessage,
  NumberFieldIncrementTrigger,
  NumberFieldInput
} from "~/registry/ui/number-field"

export default function NumberFieldDemo() {
  const [rawValue, setRawValue] = createSignal<number>()

  return (
    <NumberField
      class="flex w-36 flex-col gap-2"
      onRawValueChange={setRawValue}
      validationState={rawValue() !== 40 ? "invalid" : "valid"}
    >
      <div class="relative">
        <NumberFieldInput />
        <NumberFieldIncrementTrigger />
        <NumberFieldDecrementTrigger />
      </div>
      <NumberFieldErrorMessage>Hmm, I prefer 40.</NumberFieldErrorMessage>
    </NumberField>
  )
}
