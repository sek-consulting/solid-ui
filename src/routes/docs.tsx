import type { ComponentProps } from "solid-js"
import { MDXProvider } from "solid-jsx"
import { Outlet } from "solid-start"

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
        pre: (props: ComponentProps<"div">) => {
          console.log(props)
          return <div {...props} />
        }
      }}
    >
      <Outlet />
    </MDXProvider>
  )
}
