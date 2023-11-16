import { For } from "solid-js"
import { useLocation } from "solid-start"

import { docsConfig } from "~/config/docs"
import { cn } from "~/lib/utils"

export default function Sidebar() {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <aside class="hidden w-full md:block">
      <div class="py-6 pl-8 pr-6 lg:py-8">
        <For each={docsConfig.sidebarNav}>
          {(category) => (
            <div class="pb-4">
              <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{category.title}</h4>
              <div class="grid grid-flow-row auto-rows-max text-sm">
                <For each={category.items}>
                  {(item) => (
                    <a
                      href={item.href}
                      class={cn(
                        "group flex w-full items-center rounded-md border border-transparent px-2 py-1 no-underline hover:underline",
                        location.pathname === item.href
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.title}
                    </a>
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>
    </aside>
  )
}
