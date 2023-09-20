// @refresh reload

import { Suspense, useContext } from "solid-js"
import { isServer } from "solid-js/web"
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  ServerContext,
  Title
} from "solid-start"

import { ColorModeProvider, ColorModeScript, cookieStorageManagerSSR } from "@kobalte/core"

import Navbar from "~/components/navbar"
import "@fontsource/inter/latin.css"
import "./root.css"

export default function Root() {
  const event = useContext(ServerContext)

  const storageManager = cookieStorageManagerSSR(
    isServer ? event?.request.headers.get("cookie") ?? "" : document.cookie
  )

  return (
    <Html lang="en">
      <Head>
        <Title>solid/ui</Title>

        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />

        <Meta name="title" content="solid/ui" />
        <Meta
          name="description"
          content="A community driven port of the most beautiful ui components using Kobalte including shadcn/ui and tremor."
        />

        <Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Body>
        <ErrorBoundary>
          <ColorModeScript storageType={storageManager.type} />
          <Suspense>
            <ColorModeProvider storageManager={storageManager}>
              <Navbar />
              <Routes>
                <FileRoutes />
              </Routes>
            </ColorModeProvider>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  )
}
