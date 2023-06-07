import { For, createSignal } from "solid-js"

import { As } from "@kobalte/core"

import { ComponentExample } from "~/components/component-example"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "~/components/ui/sheet"

const SHEET_POSITIONS = ["top", "right", "bottom", "left"] as const
type SheetPosition = (typeof SHEET_POSITIONS)[number]

const SHEET_SIZES = ["sm", "default", "lg", "xl", "full", "content"] as const
type SheetSize = (typeof SHEET_SIZES)[number]

export function SheetDemo() {
  const [pos, setPos] = createSignal<SheetPosition>("right")
  const [size, setSize] = createSignal<SheetSize>("default")

  return (
    <ComponentExample>
      <div class="flex flex-col space-y-8">
        <RadioGroup defaultValue={pos()} onChange={(value) => setPos(value as SheetPosition)}>
          <div class="grid grid-cols-2 gap-2">
            <For each={SHEET_POSITIONS}>
              {(pos) => (
                <RadioGroupItem value={pos}>
                  <Label>{pos}</Label>
                </RadioGroupItem>
              )}
            </For>
          </div>
        </RadioGroup>
        <RadioGroup defaultValue={size()} onChange={(value) => setSize(value as SheetSize)}>
          <div class="grid grid-cols-2 gap-2">
            <For each={SHEET_SIZES}>
              {(size) => (
                <RadioGroupItem value={size}>
                  <Label>{size}</Label>
                </RadioGroupItem>
              )}
            </For>
          </div>
        </RadioGroup>
        <Sheet>
          <SheetTrigger asChild>
            <As component={Button}>
              Open {size()} {pos()} sheet
            </As>
          </SheetTrigger>
          <SheetContent size={size()} position={pos()}>
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
      </div>
    </ComponentExample>
  )
}
