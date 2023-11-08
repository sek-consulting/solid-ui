import { createSignal } from "solid-js"

import ExampleContainer from "../example-container"
import { Button } from "~/registry/ui/button"
import { Input } from "~/registry/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/registry/ui/select"
import { Textarea } from "~/registry/ui/textarea"

const ReportAnIssue = () => {
  const [area, setArea] = createSignal()
  const [secLevel, setSecLevel] = createSignal()

  return (
    <ExampleContainer>
      <div>
        <h2 class="text-2xl">Report an issue</h2>
        <p class="text-sm opacity-50">What area are you having problems with</p>
      </div>

      <div class="flex gap-4">
        <div class="flex-1 space-y-2 text-sm">
          <label for="area">Area</label>
          <Select
            id="area"
            value={area()}
            onChange={setArea}
            options={["Team", "Billing", "Accounts", "Deployments"]}
            defaultValue={"Billing"}
            itemComponent={(props) => (
              <SelectItem item={props.item}>{props.item.textValue}</SelectItem>
            )}
          >
            <SelectTrigger aria-label="billing" class="flex-1">
              <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
            </SelectTrigger>
            <SelectContent />
          </Select>
        </div>

        <div class="flex-1 space-y-2 text-sm">
          <label for="sec-level">Security level</label>
          <Select
            id="sec-level"
            value={secLevel()}
            onChange={setSecLevel}
            options={["Level 1(lowest)", "Level 2", "Level 3", "Level 4", "Level 5(💀)"]}
            defaultValue={"Level 2"}
            itemComponent={(props) => (
              <SelectItem item={props.item}>{props.item.textValue}</SelectItem>
            )}
          >
            <SelectTrigger aria-label="security level" class="flex-1">
              <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
            </SelectTrigger>
            <SelectContent />
          </Select>
        </div>
      </div>

			<div class="space-y-2 text-sm">
				<label for="subject">Subject</label>
				<Input placeholder="I need help with..."/>
			</div>

			<div class="space-y-2 text-sm">
				<label for="description">Description</label>
				<Textarea placeholder="Please include all information relevant to your issue." />
			</div>

			<div class="flex justify-between">
				<Button variant={'ghost'}>Cancel</Button>
				<Button>Submit</Button>
			</div>
    </ExampleContainer>
  )
}

export default ReportAnIssue
