import { For, createSignal } from "solid-js"

import ExampleContainer from "../example-container"
import { Button } from "~/registry/ui/button"
import { Input } from "~/registry/ui/input"
import { RadioGroup, RadioGroupItem } from "~/registry/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/registry/ui/select"

const PaymentMethod = () => {
  const [year, setYear] = createSignal()
  const [month, setMonth] = createSignal()

  return (
    <ExampleContainer>
      <div>
        <h2 class="text-2xl">Payment method</h2>
        <p class="text-sm opacity-50">Add a new payment method to your account.</p>
      </div>

      <RadioGroup class="m-auto flex">
        <For each={["Card", "Paypal", "Apple"]}>
          {(item) => (
            <RadioGroupItem value={item}>
              <label>{item}</label>
            </RadioGroupItem>
          )}
        </For>
      </RadioGroup>

      <div class="flex flex-col gap-4 text-sm">
        <div class="space-y-2">
          <label for="name">Name</label>
          <Input id="name" placeholder="First Last" />
        </div>

        <div class="space-y-2">
          <label for="card-number">Card number</label>
          <Input id="card-number" placeholder="xxxx-xxxx" />
        </div>

        <div class="flex gap-4">
          <div class="flex-1 space-y-2">
            <label for="month">Month</label>
            <Select
              id="month"
              value={month()}
              onChange={setMonth}
              options={[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
              ]}
              placeholder="Select a month…"
              itemComponent={(props) => (
                <SelectItem item={props.item}>{props.item.textValue}</SelectItem>
              )}
            >
              <SelectTrigger aria-label="month" class="flex-1">
                <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
              </SelectTrigger>
              <SelectContent />
            </Select>
          </div>

          <div class="flex-1 space-y-2">
            <label for="year">Year</label>
            <Select
              id="year"
              value={year()}
              onChange={setYear}
              options={[2023, 2024, 2025, 2026, 2027, 2028]}
              placeholder="Select a year…"
              itemComponent={(props) => (
                <SelectItem item={props.item}>{props.item.textValue}</SelectItem>
              )}
            >
              <SelectTrigger aria-label="month" class="flex-1">
                <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
              </SelectTrigger>
              <SelectContent />
            </Select>
          </div>

          <div class="flex-1 space-y-2">
            <label for="cvv">CVV</label>
            <Input placeholder="CVV" />
          </div>
        </div>

        <Button>Continue</Button>
      </div>
    </ExampleContainer>
  )
}

export default PaymentMethod
