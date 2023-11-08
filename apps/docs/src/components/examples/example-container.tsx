import type { ParentComponent } from "solid-js"

import { Card } from "~/registry/ui/card"

const ExampleContainer: ParentComponent = (props) => {
  return <Card class="flex flex-col gap-6 p-4 ">{props.children}</Card>
}

export default ExampleContainer
