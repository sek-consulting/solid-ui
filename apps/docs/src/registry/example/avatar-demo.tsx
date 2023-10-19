import { Avatar, AvatarFallback, AvatarImage } from "~/registry/ui/avatar"

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/sek-consulting.png" />
      <AvatarFallback>EK</AvatarFallback>
    </Avatar>
  )
}
