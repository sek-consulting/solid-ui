import type { Component, ComponentProps } from "solid-js"

const H1: Component<ComponentProps<"h1">> = (props) => (
  <h1 class="mt-2 scroll-m-20 text-4xl font-bold" {...props} />
)

const H2: Component<ComponentProps<"h2">> = (props) => (
  <h2
    class="mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
    {...props}
  />
)

const H3: Component<ComponentProps<"h3">> = (props) => (
  <h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight" {...props} />
)

const H4: Component<ComponentProps<"h4">> = (props) => (
  <h4 class="mt-8 scroll-m-20 text-lg font-semibold tracking-tight" {...props} />
)

const H5: Component<ComponentProps<"h5">> = (props) => (
  <h5 class="mt-8 scroll-m-20 text-lg font-semibold tracking-tight" {...props} />
)

const H6: Component<ComponentProps<"h6">> = (props) => (
  <h6 class="mt-8 scroll-m-20 text-base font-semibold tracking-tight" {...props} />
)

const A: Component<ComponentProps<"a">> = (props) => (
  <a class="font-medium underline underline-offset-4" {...props} />
)

const P: Component<ComponentProps<"p">> = (props) => (
  <p class="leading-7 [&:not(:first-child)]:mt-6" {...props} />
)

const Ul: Component<ComponentProps<"ul">> = (props) => <ul class="my-6 ml-6 list-disc" {...props} />

const Li: Component<ComponentProps<"li">> = (props) => <li class="mt-2" {...props} />

const BlockQuote: Component<ComponentProps<"blockquote">> = (props) => (
  <blockquote class="mt-6 border-l-2 pl-6 italic" {...props} />
)

const Img: Component<ComponentProps<"img">> = (props) => <img class="rounded-md" {...props} />

const Hr: Component<ComponentProps<"hr">> = (props) => <hr class="my-4 md:my-8" {...props} />

const Typography = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  a: A,
  p: P,
  ul: Ul,
  li: Li,
  blockquote: BlockQuote,
  img: Img,
  hr: Hr
}

export { H1, H2, H3, H4, H5, H6, A, P, Ul, Li, BlockQuote, Img, Hr, Typography }
