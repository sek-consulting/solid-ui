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

const TITLE = "solid-ui"
const DESCRIPTION = "Beautifully designed components built with Kobalte and Tailwind CSS."
const BASE_URL = "https://solid-ui-components.vercel.app"

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

        <Meta name="title" content={TITLE} />
        <Meta name="description" content={DESCRIPTION} />
        <Meta
          name="keywords"
          content="shadcn,Solid,SolidStart,Solid Components,TailwindCSS,Kobalte"
        />
        <Meta name="author" content="Stefan E-K" />

        <Meta name="twitter:card" content="summary_large_image" />
        <Meta name="twitter:site" content={BASE_URL} />
        <Meta name="twitter:title" content={TITLE} />
        <Meta name="twitter:description" content={DESCRIPTION} />
        <Meta name="twitter:image" content={`${BASE_URL}/og.png`} />
        <Meta name="twitter:image:alt" content={TITLE} />
        <Meta name="twitter:creator" content="stefan_e_k" />

        <Meta name="og:title" content={TITLE} />
        <Meta name="og:type" content="article" />
        <Meta name="og:url" content={BASE_URL} />
        <Meta name="og:image" content={`${BASE_URL}/og.png`} />
        <Meta name="og:image:alt" content={TITLE} />
        <Meta name="og:image:width" content="1200" />
        <Meta name="og:image:height" content="630" />

        <Link rel="manifest" href="https://solid-ui-components.vercel.app/site.webmanifest" />
        <Link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <Link rel="shortcut icon" href="/favicon-16x16.png" />
        <Link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
