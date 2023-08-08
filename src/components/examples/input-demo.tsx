import { Input, Label } from "solid-ui-components"

import { ComponentExample } from "~/components/component-example"

export function InputDemo() {
  return (
    <ComponentExample>
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Label for="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    </ComponentExample>
  )
}
