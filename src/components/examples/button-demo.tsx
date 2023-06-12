import { ComponentExample } from "~/components/component-example"
import { Button } from "~/components/ui/button"

export function ButtonDemo() {
  return (
    <ComponentExample>
      <div class="grid max-w-md grid-cols-3 gap-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </ComponentExample>
  )
}
