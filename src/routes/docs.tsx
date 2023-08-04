import type { ComponentProps } from "solid-js"
import { MDXProvider } from "solid-jsx"
import { Outlet } from "solid-start"

import Sidebar from "~/components/sidebar"
import { Typography } from "~/components/typography"

export default function DocsLayout() {
  return (
    <MDXProvider
      components={{
        h1: Typography.H1,
        h2: Typography.H2,
        h3: Typography.H3,
        h4: Typography.H4,
        h5: Typography.H5,
        h6: Typography.H6,
        a: Typography.A,
        p: Typography.P,
        ul: Typography.Ul,
        li: Typography.Li,
        blockquote: Typography.BlockQuote,
        img: Typography.Img,
        hr: Typography.Hr,
        code: (props: ComponentProps<"code">) => {
          return (
            <code
              class="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm group-[&.code]:bg-zinc-900 group-[&.code]:p-0"
              {...props}
            />
          )
        },
        pre: (
          props: ComponentProps<"pre"> & {
            "data-meta"?: boolean
            "data-package"?: boolean
          }
        ) => {
          let preRef: HTMLPreElement | undefined
          return (
            <pre
              ref={preRef}
              class="code group mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-900 p-4"
              {...props}
            />
          )
        }
      }}
    >
      <div class="container flex-1 items-start py-6 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </MDXProvider>
  )
}
