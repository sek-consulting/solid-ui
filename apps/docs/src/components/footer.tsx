export default function Footer() {
  return (
    <footer class="py-6 md:px-8 md:py-0">
      <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p>
          Built by{" "}
          <a
            href="https://github.com/sek-consulting/"
            target="_blank"
            rel="norefferer"
            class="underline"
          >
            Stefan E-K
          </a>{" "}
          &{" "}
          <a
            href="https://github.com/michaelessiet/"
            target="_blank"
            rel="norefferer"
            class="underline"
          >
            Michael Essiet
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/sek-consulting/solid-ui-components"
            target="_blank"
            rel="norefferer"
            class="underline"
          >
            Github
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
