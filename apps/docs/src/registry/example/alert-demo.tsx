import { TbTerminal } from "solid-icons/tb"

import { Alert, AlertDescription, AlertTitle } from "~/registry/ui/alert"

export default function AlertDemo() {
  return (
    <Alert>
      <TbTerminal class="size-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  )
}
