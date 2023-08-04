import solid from "solid-start/vite"
import { defineConfig } from "vite"
import mdx from "@mdx-js/rollup"
import remarkGfm from "remark-gfm"

export default defineConfig({
  plugins: [
    {
      ...mdx({
        jsxImportSource: "solid-jsx",
        providerImportSource: "solid-jsx",
        remarkPlugins: [remarkGfm]
      }),
      enforce: "pre"
    },
    solid({
      extensions: [".mdx", ".md"]
    })
  ]
})
