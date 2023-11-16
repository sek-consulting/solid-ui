import { A } from "solid-start"

export default function Footer() {
  return (
    <footer class="py-6 md:px-8 md:py-0">
      <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p class="text-muted-foreground text-center text-sm leading-loose md:text-left">
          Built & designed by{" "}
          <A
            href="https://twitter.com/shadcn"
            target="_blank"
            rel="norefferer"
            class="font-medium underline underline-offset-4"
          >
            shadcn
          </A>
          . Ported to Solid by{" "}
          <A
            href="https://github.com/sek-consulting/"
            target="_blank"
            rel="norefferer"
            class="font-medium underline underline-offset-4"
          >
            Stefan E-K
          </A>{" "}
          &{" "}
          <A
            href="https://github.com/michaelessiet/"
            target="_blank"
            rel="norefferer"
            class="font-medium underline underline-offset-4"
          >
            Michael Essiet
          </A>
          . The source code is available on{" "}
          <A
            href="https://github.com/sek-consulting/solid-ui-components"
            target="_blank"
            rel="norefferer"
            class="font-medium underline underline-offset-4"
          >
            Github
          </A>
          .
        </p>
      </div>
    </footer>
  )
}
