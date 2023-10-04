import { type Component, For } from "solid-js"
import { A, useLocation } from "solid-start"

import { cn } from "~/lib/utils"

type TOC = {
  depth: number
  text: string
  slug: string
}

export const TableOfContents: Component<{ toc: TOC[] | undefined }> = (props) => {
  const location = useLocation()

  return (
    <aside class="space-y-2">
      <p class="font-medium">On This Page</p>
      <ul class="m-0 list-none">
        <For each={props.toc}>
          {(heading) => (
            <li class={cn("mt-0 pt-2", heading.depth === 3 && "pl-4")}>
              <A
                class="hover:text-foreground text-muted-foreground inline-block no-underline transition-colors"
                href={`${location.pathname}#${heading.slug}`}
              >
                {heading.text}
              </A>
            </li>
          )}
        </For>
      </ul>
    </aside>
  )
}
