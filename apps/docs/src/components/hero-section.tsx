import { IconBrandGithub } from "~/components/icons"
import { buttonVariants } from "~/registry/ui/button"

export function HeroSection() {
  return (
    <section class="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <h1 class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        Build your component library.
      </h1>
      <p class="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        Beautifully designed components that you can copy and paste into your apps. Accessible.
        Customizable. Open Source.
      </p>
      <p class="text-[#4d83c4] dark:text-[#93c4e9]">
        This is an unofficial port of{" "}
        <a href="https://github.com/shadcn/ui" target="_blank" rel="noreferrer" class="underline">
          shadcn/ui
        </a>{" "}
        to Solid, and is not affiliated with{" "}
        <a href="https://twitter.com/shadcn" target="_blank" rel="noreferrer" class="underline">
          @shadcn
        </a>
        , just inspired by him.
      </p>
      <div class="flex w-full items-center justify-center space-x-4 py-4 md:pb-1">
        <a class={buttonVariants()} href="/docs/introduction">
          Get Started
        </a>
        <a
          class={buttonVariants({ variant: "outline" })}
          href="https://github.com/sek-consulting/solid-ui"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandGithub class="mr-2 size-4" /> GitHub
        </a>
      </div>
    </section>
  )
}
