import { defineConfig } from "vite"

import solid from "solid-start/vite"

import mdx from "@mdx-js/rollup"
import rehypePrettyCode, { LineElement } from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"
import { getHighlighter } from "shiki"
import vercel from "solid-start-vercel"

import rehypeComponent from "./src/lib/mdx/component"
import remarkSolidFrontmatter from "./src/lib/mdx/frontmatter"
import rehypeHeadings from "./src/lib/mdx/headings"
import path from "path"

export default defineConfig({
  plugins: [
    {
      ...mdx({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
        remarkPlugins: [remarkGfm, remarkFrontmatter, remarkSolidFrontmatter],
        rehypePlugins: [
          rehypeSlug,
          rehypeHeadings,
          rehypeComponent,
          [
            //@ts-expect-error
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
    solid({ ssr: true, adapter: vercel({}), extensions: [".mdx"] })
  ],
  ssr: {
    noExternal: ["@kobalte/core", "@internationalized/message"]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
