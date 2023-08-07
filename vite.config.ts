import { defineConfig } from "vite"

import solid from "solid-start/vite"
import mdx from "@mdx-js/rollup"
import vercel from "solid-start-vercel"

import remarkFrontmatter from "remark-frontmatter"
import remarkParseFrontmatter from "remark-parse-frontmatter"

import rehypePrettyCode from "rehype-pretty-code"
import { getHighlighter } from "shiki"

export default defineConfig({
  plugins: [
    {
      ...mdx({
        jsxImportSource: "solid-jsx",
        providerImportSource: "solid-jsx",
        remarkPlugins: [remarkFrontmatter, remarkParseFrontmatter],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              getHighlighter: async () => {
                return await getHighlighter({ theme: "nord" })
              }
            }
          ]
        ]
      }),
      enforce: "pre"
    },
    solid({ ssr: true, adapter: vercel({}), extensions: [".mdx", ".md"] })
  ]
})
