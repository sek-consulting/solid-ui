import type { ComponentProps } from "solid-js"
import { createSignal } from "solid-js"

import { As } from "@kobalte/core"

import { Icons } from "~/components/icons"
import { Button } from "~/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"
import { docsConfig } from "~/config/docs"

export function MobileNav() {
  const [open, setOpen] = createSignal(false)

  return (
    <Sheet open={open()} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <As
          component={Button}
          variant="ghost"
          class="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Icons.sidebarOpen class="h-6 w-6" />
          <span class="sr-only">Toggle Menu</span>
        </As>
      </SheetTrigger>
      <SheetContent size="xl" position="left" class="pr-0">
        <MobileLink href="/" onOpenChange={setOpen} class="flex items-center">
          <Icons.logo class="mr-2 h-4 w-4" fill="currentColor" />
          <span class="font-bold">solid/ui</span>
        </MobileLink>
        <div class="my-4 h-[calc(100vh-8rem)] overflow-y-auto pb-10 pl-6">
          <div class="flex flex-col space-y-3">
            {docsConfig.mainNav.map((item) => (
              <MobileLink href={item.href} onOpenChange={setOpen}>
                {item.title}
              </MobileLink>
            ))}
          </div>
          <div class="flex flex-col space-y-2">
            {docsConfig.sidebarNav.map((category) => (
              <div class="flex flex-col space-y-3 pt-6">
                <h4 class="font-medium">{category.title}</h4>
                {category?.items?.map((item) => (
                  <MobileLink href={item.href} onOpenChange={setOpen}>
                    {item.title}
                  </MobileLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends ComponentProps<"a"> {
  onOpenChange?: (open: boolean) => void
}

function MobileLink(props: MobileLinkProps) {
  return <a {...props} />
}
