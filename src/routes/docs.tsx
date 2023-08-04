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
        hr: Typography.Hr
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
