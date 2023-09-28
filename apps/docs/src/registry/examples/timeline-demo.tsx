import { ComponentExample } from "~/components/component-example"
import { Timeline } from "~/registry/ui/timeline"

export function TimelineDemo() {
  return (
    <ComponentExample>
      <Timeline
        items={[
          {
            title: "Event #1",
            description: "This is the first event of the timeline."
          },
          {
            title: "Event #2",
            description: "This is the second event of the timeline."
          },
          {
            title: "Event #3",
            description: "This is the third event of the timeline."
          }
        ]}
        activeItem={1}
      />
    </ComponentExample>
  )
}
