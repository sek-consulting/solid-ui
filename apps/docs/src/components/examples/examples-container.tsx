import type { ParentComponent } from "solid-js"

import { Card } from "~/registry/ui/card"

const ExamplesContainer: ParentComponent = (props) => {
  return (
    <Card class="grid items-start gap-6 p-4 max-lg:flex-col lg:grid-cols-2 xl:grid-cols-3">
      {props.children}
    </Card>
  )
}

export default ExamplesContainer
