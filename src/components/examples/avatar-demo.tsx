import { ComponentExample } from "~/components/component-example"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"

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
