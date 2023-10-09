import { For } from "solid-js"

import { Icons } from "~/components/icons"
import { MobileNav } from "~/components/mobile-nav"
import { ModeToggle } from "~/components/mode-toggle"
import SearchBar from "~/components/search-bar"
import { docsConfig } from "~/config/docs"
import { cn } from "~/lib/utils"
import { buttonVariants } from "~/registry/ui/button"

export default function Navbar() {
  return (
    <header class="supports-backdrop-blur:bg-background/60 bg-background/95 sticky top-0 z-40 w-full border-b backdrop-blur">
      <div class="container flex h-14 items-center">
        <MobileNav />
        <div class="mr-4 hidden md:flex">
          <a href="/" class="mr-6 flex items-center space-x-2 no-underline">
            <Icons.logo class="h-6 w-6" fill="currentColor" />
            <span class="hidden font-bold sm:inline-block">solid/ui</span>
          </a>
          <nav class="flex items-center space-x-6 text-sm font-medium">
            <For each={docsConfig.mainNav}>
              {(item) => (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : ""}
                  rel={item.external ? "noreferrer" : ""}
                  class="text-foreground/60 hover:text-foreground/80 hidden no-underline transition-colors lg:block"
                >
                  {item.title}
                </a>
              )}
            </For>
          </nav>
        </div>
        <div class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          <nav class="flex w-full items-center justify-between space-x-2 md:justify-end">
            <SearchBar />
            <a
              href="https://github.com/sek-consulting/solid-ui-components"
              target="_blank"
              rel="noreferrer"
            >
              <div
                class={cn(
                  buttonVariants({
                    size: "sm",
                    variant: "ghost"
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.gitHub class="h-5 w-5" />
                <span class="sr-only">GitHub</span>
              </div>
            </a>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
