import { TbBell, TbEyeOff, TbUser } from "solid-icons/tb"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/registry/ui/card"

export function Notifications() {
  return (
    <Card>
      <CardHeader class="pb-3">
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Choose what you want to be notified about.</CardDescription>
      </CardHeader>
      <CardContent class="grid gap-1">
        <div class="hover:bg-accent hover:text-accent-foreground -mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
          <TbBell class="mt-px h-5 w-5" />
          <div class="space-y-1">
            <p class="text-sm font-medium leading-none">Everything</p>
            <p class="text-muted-foreground text-sm">Email digest, mentions & all activity.</p>
          </div>
        </div>
        <div class="bg-accent text-accent-foreground -mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
          <TbUser class="mt-px h-5 w-5" />
          <div class="space-y-1">
            <p class="text-sm font-medium leading-none">Available</p>
            <p class="text-muted-foreground text-sm">Only mentions and comments.</p>
          </div>
        </div>
        <div class="hover:bg-accent hover:text-accent-foreground -mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
          <TbEyeOff class="mt-px h-5 w-5" />
          <div class="space-y-1">
            <p class="text-sm font-medium leading-none">Ignoring</p>
            <p class="text-muted-foreground text-sm">Turn off all notifications.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
