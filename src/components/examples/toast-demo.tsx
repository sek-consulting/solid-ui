import { ComponentExample } from "~/components/component-example"
import { Button } from "~/components/ui/button"
import { Toaster, showToast } from "~/components/ui/toast"

export function ToastDemo() {
  return (
    <ComponentExample class="gap-2">
      <Button
        onClick={() =>
          showToast({
            title: "Event has been created",
            description: "Monday, January 3rd at 6:00pm"
          })
        }
      >
        Add Event
      </Button>
      <Button
        variant="destructive"
        onClick={() =>
          showToast({
            title: "Event has been deleted",
            description: "Monday, January 3rd at 6:00pm",
            variant: "destructive"
          })
        }
      >
        Delete Event
      </Button>
      <Toaster />
    </ComponentExample>
  )
}
