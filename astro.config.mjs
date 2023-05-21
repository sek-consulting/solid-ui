import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import solidJs from "@astrojs/solid-js"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      shikiConfig: {
        theme: "one-dark-pro",
        wrap: true
      }
    }),
    sitemap(),
    solidJs(),
    tailwind()
  ],
  site: "https://www.sek-consulting.com"
})
