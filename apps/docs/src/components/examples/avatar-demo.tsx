import { Avatar, AvatarFallback, AvatarImage } from "../../../core"

import { ComponentExample } from "../component-example"

export function AvatarDemo() {
  return (
    <ComponentExample>
      <Avatar>
        <AvatarImage src="https://github.com/sek-consulting.png" />
        <AvatarFallback>EK</AvatarFallback>
      </Avatar>
    </ComponentExample>
  )
}
