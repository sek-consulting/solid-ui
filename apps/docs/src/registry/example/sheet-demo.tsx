import { For } from "solid-js"

import { As } from "@kobalte/core"

import { Button } from "~/registry/ui/button"
import { Input } from "~/registry/ui/input"
import { Label } from "~/registry/ui/label"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "~/registry/ui/sheet"

const SHEET_POSITIONS = ["top", "right", "bottom", "left"] as const

export default function SheetDemo() {
  return (
    <div class="grid grid-cols-2 gap-2">
      <For each={SHEET_POSITIONS}>
        {(position) => (
          <Sheet>
            <SheetTrigger asChild>
              <As component={Button} variant="outline">
                {position}
              </As>
            </SheetTrigger>
            <SheetContent position={position}>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div class="grid gap-4 py-4">
                <div class="grid grid-cols-4 items-center gap-4">
                  <Label for="name" class="text-right">
                    Name
                  </Label>
                  <Input id="name" value="Pedro Duarte" class="col-span-3" />
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                  <Label for="username" class="text-right">
                    Username
                  </Label>
                  <Input id="username" value="@peduarte" class="col-span-3" />
                </div>
              </div>
              <SheetFooter>
                <Button type="submit">Save changes</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        )}
      </For>
    </div>
  )
}
