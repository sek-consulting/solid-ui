import { Show, createMemo } from "solid-js"
import { Head, Outlet, Title, useLocation } from "solid-start"

import { MDXProvider } from "solid-jsx"

import { MDXComponents } from "~/components/mdx-components"
import Sidebar from "~/components/sidebar"
import { TableOfContents } from "~/components/toc"
import type { Frontmatter } from "~/lib/mdx/frontmatter"
import type { Heading } from "~/lib/mdx/headings"

const contents = import.meta.glob<{
  frontmatter: Frontmatter
  headings: Heading[]
}>("./docs/**/*.mdx", { eager: true })

export default function DocsLayout() {
  const location = useLocation()
  const data = createMemo(() => {
    return {
      frontmatter: contents[`.${location.pathname}.mdx`].frontmatter,
      headings: contents[`.${location.pathname}.mdx`].headings
    }
  })

  return (
    <>
      <Head>
        <Title>{data().frontmatter.title} - solid-ui</Title>
      </Head>
      <div class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <Sidebar />
        <main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_220px]">
          <div class="mx-auto w-full min-w-0">
            <div class="space-y-2">
              <h1 class="scroll-m-20 text-4xl font-bold tracking-tight">
                {data().frontmatter.title}
              </h1>
              <Show when={data().frontmatter.description}>
                <p class="text-muted-foreground text-lg">{data().frontmatter.description}</p>
              </Show>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              class="bg-border my-4 h-[1px] w-full shrink-0 md:my-6"
            />
            <MDXProvider components={MDXComponents}>
              <Outlet />
            </MDXProvider>
          </div>
          <div class="hidden text-sm xl:block">
            <TableOfContents toc={data().headings} />
          </div>
        </main>
      </div>
    </>
  )
}
