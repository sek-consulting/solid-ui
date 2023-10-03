import { defineConfig } from "vite"

import solid from "solid-start/vite"

import mdx from "@mdx-js/rollup"
import rehypePrettyCode from "rehype-pretty-code"
import remarkFrontmatter from "remark-frontmatter"
import vercel from "solid-start-vercel"

import remarkSolidFrontmatter from "./src/lib/mdx/frontmatter"

export default defineConfig({
  plugins: [
    {
      ...mdx({
        jsxImportSource: "solid-jsx",
        providerImportSource: "solid-jsx",
        remarkPlugins: [remarkFrontmatter, remarkSolidFrontmatter],
        rehypePlugins: [
          [
            //@ts-expect-error
            rehypePrettyCode,
            {
              theme: {
                dark: "Nord"
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
  }
})
