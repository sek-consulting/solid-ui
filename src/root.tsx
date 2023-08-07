// @refresh reload
import { Suspense } from "solid-js"
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
  Title
} from "solid-start"

import Navbar from "~/components/navbar"

import "@fontsource/inter/latin.css"
import "./root.css"

export default function Root() {
  const title = "solid/ui"
  const description = "A SolidJS port of the shadcn/ui components using Kobalte."

  return (
    <Html lang="en">
      <Head>
        <Title>{title}</Title>

        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />

        <Meta name="title" content={title} />
        <Meta name="description" content={description} />

        <Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Body>
        <ErrorBoundary>
          <Suspense>
            <main>
              <Navbar />
              <Routes>
                <FileRoutes />
              </Routes>
            </main>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  )
}
