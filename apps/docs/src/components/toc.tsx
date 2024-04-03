import { createEffect, createSignal, For, on, Setter, Suspense } from "solid-js"
import { isServer } from "solid-js/web"

import { useLocation } from "@solidjs/router"

import { cn } from "~/lib/utils"

type TocItem = {
  depth: number
  text: string
  slug: string
}

function updateHeadings(setter: Setter<TocItem[]>) {
  if (document.getElementsByTagName("article").length === 0) {
    setTimeout(() => updateHeadings(setter), 1)
    return
  }

  setter(
    [
      ...document
        .getElementsByTagName("article")[0]
        .querySelectorAll(
          "h1[data-toc], h2[data-toc], h3[data-toc], h4[data-toc], h5[data-toc], h6[data-toc]"
        )
    ].map((element) => ({
      depth: Number(element.tagName.substring(1)),
      text: element.textContent!,
      slug: element.id
    }))
  )
}

export function TableOfContents() {
  const location = useLocation()

  const [toc, setToc] = createSignal<TocItem[]>([])
  createEffect(
    on(
      () => location.pathname,
      () => {
        if (isServer) return
        updateHeadings(setToc)
      }
    )
  )

  return (
    <aside class="space-y-2">
      <nav aria-labelledby="on-this-page-title">
        <Suspense>
          <h2 id="on-this-page-title" class="font-medium">
            On This Page
          </h2>
          <ul class="m-0 list-none">
            <For each={toc()}>
              {(section) => (
                <li class={cn("mt-0 pt-2", section.depth === 3 && "pl-4")}>
                  <a
                    data-toc-slug={section.slug}
                    class={cn(
                      "inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                    )}
                    href={`${location.pathname}#${section.slug}`}
                  >
                    {section.text}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </Suspense>
      </nav>
    </aside>
  )
}
