import { For } from "solid-js"

import { docsConfig } from "~/config/docs"
import { cn } from "~/lib/utils"
import { IconBrandGithub, IconLogo } from "~/components/icons"
import { MobileNav } from "~/components/mobile-nav"
import { ModeToggle } from "~/components/mode-toggle"
import SearchBar from "~/components/search-bar"
import { buttonVariants } from "~/registry/ui/button"

export default function Navbar() {
  return (
    <header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container flex h-14 max-w-screen-2xl items-center">
        <MobileNav />

        <div class="mr-4 hidden md:flex">
          <a href="/" class="mr-6 flex items-center space-x-2">
            <IconLogo class="size-6" />
            <span class="hidden font-bold sm:inline-block">SolidUI</span>
          </a>
          <nav class="flex items-center gap-4 text-sm lg:gap-6">
            <For each={docsConfig.mainNav}>
              {(item) => (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : ""}
                  rel={item.external ? "noreferrer" : ""}
                  class="text-foreground/60 transition-colors hover:text-foreground/80"
                >
                  {item.title}
                </a>
              )}
            </For>
          </nav>
        </div>

        <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div class="w-full flex-1 md:w-auto md:flex-none">
            <SearchBar />
          </div>
          <div class="flex items-center">
            <a href="https://github.com/sek-consulting/solid-ui" target="_blank" rel="noreferrer">
              <div
                class={cn(
                  buttonVariants({
                    size: "sm",
                    variant: "ghost"
                  }),
                  "w-9 px-0"
                )}
              >
                <IconBrandGithub class="size-5" />
                <span class="sr-only">GitHub</span>
              </div>
            </a>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
