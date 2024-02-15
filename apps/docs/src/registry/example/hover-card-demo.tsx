import { As } from "@kobalte/core"
import { TbCalendar } from "solid-icons/tb"

import { Avatar, AvatarFallback, AvatarImage } from "~/registry/ui/avatar"
import { Button } from "~/registry/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "~/registry/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <As component={Button} variant="link">
          @solidjs
        </As>
      </HoverCardTrigger>
      <HoverCardContent class="w-80">
        <div class="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/ryansolid.png" />
            <AvatarFallback>RC</AvatarFallback>
          </Avatar>
          <div class="space-y-1">
            <h4 class="text-sm font-semibold">@solidjs</h4>
            <p class="text-sm">Simple and performant reactivity for building user interfaces.</p>
            <div class="flex items-center pt-2">
              <TbCalendar class="mr-2 size-4 opacity-70" />{" "}
              <span class="text-xs text-muted-foreground">Joined April 2018</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
