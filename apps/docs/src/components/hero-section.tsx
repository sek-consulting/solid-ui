import { TbBrandGithub } from "solid-icons/tb"

import { buttonVariants } from "~/registry/ui/button"

export function HeroSection() {
  return (
    <section class="flex max-w-[980px] flex-col items-start gap-2 px-4 py-8 md:pt-12">
      <h1 class="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
        Build your component library.
      </h1>
      <p class="text-muted-foreground max-w-[750px] text-lg sm:text-xl">
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
      <div class="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
        <a class={buttonVariants()} href="/docs/introduction">
          Get Started
        </a>
        <a
          class={buttonVariants({ variant: "outline" })}
          href="https://github.com/sek-consulting/solid-ui-components"
          target="_blank"
          rel="noreferrer"
        >
          <TbBrandGithub class="mr-2 h-4 w-4" /> GitHub
        </a>
      </div>
    </section>
  )
}
