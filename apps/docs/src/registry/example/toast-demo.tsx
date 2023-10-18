import { Button } from "~/registry/ui/button"
import { Toaster, showToast } from "~/registry/ui/toast"

export default function ToastDemo() {
  return (
    <div class="gap-2">
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
    </div>
  )
}
