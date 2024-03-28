import type { Component, ComponentProps } from "solid-js"
import { mergeProps, splitProps } from "solid-js"

import { cn } from "~/lib/utils"
import { buttonVariants, type ButtonProps } from "~/registry/ui/button"

const Pagination: Component<ComponentProps<"nav">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      class={cn("mx-auto flex w-full justify-center", props.class)}
      {...rest}
    />
  )
}

const PaginationContent: Component<ComponentProps<"ul">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <ul class={cn("flex flex-row items-center gap-1", props.class)} {...rest} />
}

const PaginationItem: Component<ComponentProps<"li">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <li class={cn("", props.class)} {...rest} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  ComponentProps<"a">

const PaginationLink: Component<PaginationLinkProps> = (rawProps) => {
  const props = mergeProps({ size: "icon" } as PaginationLinkProps, rawProps)
  const [, rest] = splitProps(props, ["class", "isActive", "size"])
  return (
    <PaginationItem>
      <a
        aria-current={props.isActive ? "page" : undefined}
        class={cn(
          buttonVariants({
            variant: props.isActive ? "outline" : "ghost",
            size: props.size
          }),
          props.class
        )}
        {...rest}
      />
    </PaginationItem>
  )
}

const PaginationPrevious: typeof PaginationLink = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      class={cn("gap-1 pl-2.5", props.class)}
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-4"
      >
        <path d="M15 6l-6 6l6 6" />
      </svg>
      <span>Previous</span>
    </PaginationLink>
  )
}

const PaginationNext: typeof PaginationLink = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      class={cn("gap-1 pr-2.5", props.class)}
      {...rest}
    >
      <span>Next</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-4"
      >
        <path d="M9 6l6 6l-6 6" />
      </svg>
    </PaginationLink>
  )
}

const PaginationEllipsis: Component<ComponentProps<"span">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <span aria-hidden class={cn("flex size-9 items-center justify-center", props.class)} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-4"
      >
        <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      </svg>
      <span class="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
}
