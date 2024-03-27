import { defineConfig } from "@solidjs/start/config"
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"
import { getHighlighter } from "shiki"

import rehypeComponent from "./src/lib/mdx/component"
import remarkSolidFrontmatter from "./src/lib/mdx/frontmatter"
import rehypeHeadings from "./src/lib/mdx/headings"

const { default: mdx } = pkg

export default defineConfig({
  ssr: true,
  server: {
    preset: "vercel"
  },
  extensions: ["mdx", "md"],
  vite: {
    plugins: [
      mdx.withImports({})({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
        remarkPlugins: [remarkGfm, remarkFrontmatter, remarkSolidFrontmatter],
        rehypePlugins: [
          rehypeSlug,
          rehypeHeadings,
          rehypeComponent,
          //[rehypePrettyCode, { theme: "nord" }],
          [
            rehypePrettyCode,
            {
              getHighlighter: async () => {
                return await getHighlighter({ theme: "nord" })
              }
            }
          ]
        ]
      })
    ]
  }
})
