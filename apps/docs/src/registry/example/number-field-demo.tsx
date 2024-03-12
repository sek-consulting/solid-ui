import {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldIncrementTrigger,
  NumberFieldInput
} from "~/registry/ui/number-field"
import { AiOutlineDown, AiOutlineUp } from "solid-icons/ai"

export default function NumberFieldDemo() {
  return (
    <NumberField class='w-36' defaultValue={40}>
      <div class='relative'>
        <NumberFieldInput />
        <NumberFieldIncrementTrigger>
          <AiOutlineUp />
        </NumberFieldIncrementTrigger>
        <NumberFieldDecrementTrigger>
          <AiOutlineDown />
        </NumberFieldDecrementTrigger>
      </div>
    </NumberField>
  )
}
