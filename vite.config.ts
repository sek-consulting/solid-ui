import { defineConfig } from "vite"

import solid from "solid-start/vite"
import mdx from "@mdx-js/rollup"
import vercel from "solid-start-vercel"

export default defineConfig({
  plugins: [
    {
      ...mdx({
        jsxImportSource: "solid-jsx",
        providerImportSource: "solid-jsx"
      }),
      enforce: "pre"
    },
    solid({ ssr: true, adapter: vercel({}), extensions: [".mdx", ".md"] })
  ]
})
