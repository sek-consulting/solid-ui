import type { Component, ComponentProps } from "solid-js"
import { mergeProps, splitProps } from "solid-js"

import { TbChevronLeft, TbChevronRight, TbDots } from "solid-icons/tb"

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

const PaginationLink: Component<PaginationLinkProps> = (props) => {
  props = mergeProps({ size: "icon" } as PaginationLinkProps, props)
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
      <TbChevronLeft class="size-4" />
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
      <TbChevronRight class="size-4" />
    </PaginationLink>
  )
}

const PaginationEllipsis: Component<ComponentProps<"span">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <span aria-hidden class={cn("flex size-9 items-center justify-center", props.class)} {...rest}>
      <TbDots class="size-4" />
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
