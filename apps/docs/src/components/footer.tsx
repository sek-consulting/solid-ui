import type { JSX } from "solid-js"
import { A } from "@solidjs/router"

function Link(props: { href: string; children: JSX.Element }) {
  return (
    <A
      href={props.href}
      target="_blank"
      rel="norefferer"
      class="font-medium underline underline-offset-4"
    >
      {props.children}
    </A>
  )
}

export default function Footer() {
  return (
    <footer class="border-t border-border/40 py-6 md:px-8 md:py-0 dark:border-border">
      <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built & designed by <Link href="https://twitter.com/shadcn">shadcn</Link> &{" "}
          <Link href="https://www.tremor.so/">tremorlabs</Link>. Ported to Solid by{" "}
          <Link href="https://github.com/stefan-karger/">Stefan E-K</Link> &{" "}
          <Link href="https://github.com/michaelessiet/">Michael Essiet</Link>.
        </p>
      </div>
    </footer>
  )
}
