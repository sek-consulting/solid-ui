import { defineConfig } from "vite"

import solid from "solid-start/vite"
import mdx from "@mdx-js/rollup"
import vercel from "solid-start-vercel"

import rehypePrettyCode from "rehype-pretty-code"
import { getHighlighter, loadTheme } from "shiki"

import path from "path"

export default defineConfig({
  plugins: [
    {
      ...mdx({
        jsxImportSource: "solid-jsx",
        providerImportSource: "solid-jsx",
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              getHighlighter: async () => {
                const theme = await loadTheme(path.join(process.cwd(), "/src/lib/themes/dark.json"))
                return await getHighlighter({ theme })
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
