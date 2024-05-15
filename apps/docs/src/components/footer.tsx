export default function Footer() {
  return (
    <footer class="py-6 md:px-8 md:py-0">
      <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built & designed by{" "}
          <a
            href="https://twitter.com/shadcn"
            target="_blank"
            rel="norefferer"
            class="font-medium underline underline-offset-4"
          >
            shadcn
          </a>{" "}
          &{" "}
          <a
            href="https://www.tremor.so/"
            target="_blank"
            rel="norefferer"
            class="font-medium underline underline-offset-4"
          >
            tremor
          </a>
          . Ported to Solid by{" "}
          <a
            href="https://github.com/sek-consulting/"
            target="_blank"
            rel="norefferer"
            class="font-medium underline underline-offset-4"
          >
            Stefan E-K
          </a>{" "}
          &{" "}
          <a
            href="https://github.com/michaelessiet/"
            target="_blank"
            rel="norefferer"
            class="font-medium underline underline-offset-4"
          >
            Michael Essiet
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/sek-consulting/solid-ui-components"
            target="_blank"
            rel="norefferer"
            class="font-medium underline underline-offset-4"
          >
            Github
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
