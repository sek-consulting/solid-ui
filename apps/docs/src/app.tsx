// @refresh reload
import { Suspense } from "solid-js"
import { isServer } from "solid-js/web"

import { ColorModeProvider, ColorModeScript, cookieStorageManagerSSR } from "@kobalte/core"
import { MetaProvider } from "@solidjs/meta"
import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { MDXProvider } from "solid-mdx"
import { getCookie } from "vinxi/http"

import Footer from "~/components/footer"
import { MDXComponents } from "~/components/mdx-components"
import { MetaTags } from "~/components/meta-tags"
import Navbar from "~/components/navbar"

import "@fontsource/geist-sans/400.css"
import "@fontsource/geist-sans/500.css"
import "@fontsource/geist-sans/600.css"
import "@fontsource/geist-sans/700.css"
import "~/styles/app.css"

function getServerCookies() {
  "use server"
  const colorMode = getCookie("kb-color-mode")
  return colorMode ? `kb-color-mode=${colorMode}` : ""
}

export default function App() {
  const storageManager = cookieStorageManagerSSR(isServer ? getServerCookies() : document.cookie)
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <MetaTags />
          <ColorModeScript storageType={storageManager.type} />
          <ColorModeProvider storageManager={storageManager}>
            <MDXProvider components={MDXComponents}>
              <Navbar />
              <main>
                <Suspense>{props.children}</Suspense>
              </main>
              <Footer />
            </MDXProvider>
          </ColorModeProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
