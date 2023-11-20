// @refresh reload

import { Suspense, useContext } from "solid-js"
import { isServer } from "solid-js/web"
import { Body, ErrorBoundary, FileRoutes, Html, Routes, Scripts, ServerContext } from "solid-start"

import { ColorModeProvider, ColorModeScript, cookieStorageManagerSSR } from "@kobalte/core"
import { inject } from "@vercel/analytics"

import Footer from "~/components/footer"
import { MetaHead } from "~/components/meta-head"
import Navbar from "~/components/navbar"

import "@fontsource/inter/latin.css"
import "~/styles/root.css"

export default function Root() {
  inject()

  const event = useContext(ServerContext)

  const storageManager = cookieStorageManagerSSR(
    isServer ? event?.request.headers.get("cookie") ?? "" : document.cookie
  )

  return (
    <Html lang="en">
      <MetaHead />
      <Body>
        <ErrorBoundary>
          <ColorModeScript storageType={storageManager.type} />
          <Suspense>
            <ColorModeProvider storageManager={storageManager}>
              <Navbar />
              <Routes>
                <FileRoutes />
              </Routes>
              <Footer />
            </ColorModeProvider>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  )
}
