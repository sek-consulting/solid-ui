import { splitProps, type ComponentProps, JSX, Component } from "solid-js"

import { CopyButton } from "./copy-button"
import { cn } from "~/lib/utils"

export const MDXComponents = {
  h1: (props: ComponentProps<"h1">) => {
    return <h1 class="font-heading mt-2 scroll-m-20 text-4xl font-bold" {...props} />
  },
  h2: (props: ComponentProps<"h2">) => {
    return (
      <h2
        class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
        {...props}
      />
    )
  },
  h3: (props: ComponentProps<"h3">) => {
    return (
      <h3 class="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight" {...props} />
    )
  },
  h4: (props: ComponentProps<"h4">) => {
    return (
      <h4 class="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight" {...props} />
    )
  },
  h5: (props: ComponentProps<"h5">) => {
    return (
      <h5 class="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight" {...props} />
    )
  },
  h6: (props: ComponentProps<"h6">) => {
    return (
      <h6 class="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight" {...props} />
    )
  },
  a: (props: ComponentProps<"a">) => {
    return <a class="font-medium underline underline-offset-4" {...props} />
  },
  p: (props: ComponentProps<"p">) => {
    return <p class="break-words leading-7 [&:not(:first-child)]:mt-6" {...props} />
  },
  ul: (props: ComponentProps<"ul">) => {
    return <ul class="my-6 ml-6 list-disc" {...props} />
  },
  ol: (props: ComponentProps<"ol">) => {
    return <ol class="my-6 ml-6 list-decimal" {...props} />
  },
  li: (props: ComponentProps<"li">) => {
    return <li class="mt-2" {...props} />
  },
  blockquote: (props: ComponentProps<"blockquote">) => {
    return <blockquote class="mt-6 border-l-2 pl-6 italic" {...props} />
  },
  img: (props: ComponentProps<"img">) => {
    return <img class="rounded-md" {...props} />
  },
  code: (props: ComponentProps<"code">) => {
    return (
      <code
        class="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm group-[&.code]:bg-zinc-900 group-[&.code]:p-0"
        {...props}
      />
    )
  },
  pre: (
    props: ComponentProps<"pre"> & {
      "data-meta"?: boolean
      "data-package"?: boolean
    }
  ) => {
    let preRef: HTMLPreElement | undefined
    return (
      <div class="group relative">
        <pre
          ref={preRef}
          class="code group mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-900 py-4"
          {...props}
        />
        <CopyButton
          class="absolute right-2 top-2 hidden text-[#D8DEE9] group-hover:block"
          content={preRef?.querySelector("code")?.innerText ?? ""}
        />
      </div>
    )
  },
  Steps: (props: ComponentProps<"div">) => (
    <div class="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]" {...props} />
  )
}
