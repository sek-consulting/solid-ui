import { ComponentExample } from "~/components/component-example"
import { Progress, ProgressLabel, ProgressValueLabel } from "~/components/ui/progress"

export function ProgressDemo() {
  return (
    <ComponentExample>
      <Progress
        value={3}
        minValue={0}
        maxValue={10}
        getValueLabel={({ value, max }) => `${value} of ${max} tasks completed`}
        class="w-[300px] space-y-1"
      >
        <div class="flex justify-between">
          <ProgressLabel>Processing...</ProgressLabel>
          <ProgressValueLabel />
        </div>
      </Progress>
    </ComponentExample>
  )
}
