import type { ComponentProps } from "solid-js"
import { createSignal } from "solid-js"
import { isServer } from "solid-js/web"

import { As } from "@kobalte/core"
import { As as CorvuAs } from "corvu"

import { cn } from "~/lib/utils"
import { Button } from "~/registry/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "~/registry/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "~/registry/ui/drawer"
import { Input } from "~/registry/ui/input"
import { Label } from "~/registry/ui/label"

export default function DrawerDialogDemo() {
  const [open, setOpen] = createSignal(false)

  let isDesktop = true
  if (!isServer) {
    isDesktop = window.innerWidth >= 768
  }

  if (isDesktop) {
    return (
      <Dialog open={open()} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <As component={Button} variant="outline">
            Edit Profile
          </As>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open()} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <CorvuAs component={Button} variant="outline">
          Edit Profile
        </CorvuAs>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader class="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm class="px-4" />
        <DrawerFooter class="pt-2">
          <DrawerClose asChild>
            <CorvuAs component={Button} variant="outline">
              Cancel
            </CorvuAs>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm(props: ComponentProps<"form">) {
  return (
    <form class={cn("grid items-start gap-4", props.class)}>
      <div class="grid gap-2">
        <Label for="email">Email</Label>
        <Input type="email" id="email" placeholder="shadcn@example.com" />
      </div>
      <div class="grid gap-2">
        <Label for="username">Username</Label>
        <Input id="username" placeholder="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
