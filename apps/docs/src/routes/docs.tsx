import { createMemo, ParentProps, Show } from "solid-js"

import { useLocation } from "@solidjs/router"
import { MDXProvider } from "solid-mdx"

import type { Frontmatter } from "~/lib/mdx/frontmatter"
import type { Heading } from "~/lib/mdx/headings"
import { cn } from "~/lib/utils"
import { MDXComponents } from "~/components/mdx-components"
import { MetaTags } from "~/components/meta-tags"
import Sidebar from "~/components/sidebar"
import { TableOfContents } from "~/components/toc"
import { badgeVariants } from "~/registry/ui/badge"

import "~/styles/mdx.css"

const contents = import.meta.glob<{
  frontmatter: Frontmatter
  headings: Heading[]
}>("./docs/**/*.mdx", { eager: true })

export default function DocsLayout(props: ParentProps) {
  const location = useLocation()
  const data = createMemo(() => {
    return {
      frontmatter: contents[`.${location.pathname}.mdx`].frontmatter,
      headings: contents[`.${location.pathname}.mdx`].headings
    }
  })

  return (
    <>
      <MetaTags
        title={`${data().frontmatter.title} - solid-ui`}
        description={data().frontmatter.description}
      />
      <div class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <Sidebar />
        <main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div class="mx-auto w-full min-w-0">
            <div class="space-y-2">
              <h1 class="scroll-m-20 text-4xl font-bold tracking-tight">
                {data().frontmatter.title}
              </h1>
              <p class="text-lg text-muted-foreground">{data().frontmatter.description}</p>
              <Show when={data().frontmatter.kobalte}>
                {(kobalte) => (
                  <a
                    href={kobalte()}
                    target="_blank"
                    rel="noreferrer"
                    class={cn(badgeVariants({ variant: "secondary" }), "rounded-md")}
                  >
                    Kobalte
                  </a>
                )}
              </Show>
            </div>
            <div class="pb-12 pt-8">
              <MDXProvider components={MDXComponents}>{props.children}</MDXProvider>
            </div>
          </div>
          <div class="hidden text-sm xl:block">
            <TableOfContents toc={data().headings} />
          </div>
        </main>
      </div>
    </>
  )
}
