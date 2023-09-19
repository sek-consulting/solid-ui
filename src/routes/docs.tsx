import { Show, createMemo } from "solid-js"
import { MDXProvider } from "solid-jsx"
import { Head, Outlet, Title, useLocation } from "solid-start"

import { MDXComponents } from "~/components/mdx-components"
import Sidebar from "~/components/sidebar"
import type { Frontmatter } from "~/lib/mdx/frontmatter"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const contents = import.meta.glob<true, any, { frontmatter: Frontmatter }>("./docs/**/*.mdx", {
  eager: true
})

export default function DocsLayout() {
  const location = useLocation()
  const data = createMemo(() => {
    return {
      frontmatter: contents[`.${location.pathname}.mdx`].frontmatter
    }
  })

  return (
    <>
      <Head>
        <Title>{data().frontmatter.title} - solid/ui</Title>
      </Head>
      <div class="container flex-1 items-start py-6 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <Sidebar />
        <div>
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
          ></div>
          <MDXProvider components={MDXComponents}>
            <Outlet />
          </MDXProvider>
        </div>
      </div>
    </>
  )
}
