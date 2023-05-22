import { ComponentExample } from "../component-example"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

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
