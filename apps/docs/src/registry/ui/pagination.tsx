import type { Component } from "solid-js"
import { splitProps } from "solid-js"

import { Pagination as PaginationPrimitive } from "@kobalte/core"

import { cn } from "~/lib/utils"
import { buttonVariants } from "~/registry/ui/button"

const Pagination: Component<PaginationPrimitive.PaginationRootProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <PaginationPrimitive.Root
      class={cn("[&>*]:flex [&>*]:flex-row [&>*]:items-center [&>*]:gap-1", props.class)}
      {...rest}
    />
  )
}

const PaginationItems = PaginationPrimitive.Items

const PaginationItem: Component<PaginationPrimitive.PaginationItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <PaginationPrimitive.Item
      class={cn(
        buttonVariants({
          variant: "ghost"
        }),
        "size-10 data-[current]:border"
      )}
      {...rest}
    />
  )
}

type EllipsisProps = Exclude<PaginationPrimitive.PaginationEllipsisProps, "children">

const PaginationEllipsis: Component<EllipsisProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <PaginationPrimitive.Ellipsis
      class={cn("flex size-10 items-center justify-center", props.class)}
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
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
      <span class="sr-only">More pages</span>
    </PaginationPrimitive.Ellipsis>
  )
}

type PreviousProps = Exclude<PaginationPrimitive.PaginationPreviousProps, "children">

const PaginationPrevious: Component<PreviousProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <PaginationPrimitive.Previous
      class={cn(
        buttonVariants({
          variant: "ghost"
        }),
        "gap-1 pl-2.5",
        props.class
      )}
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
    </PaginationPrimitive.Previous>
  )
}

type NextProps = Exclude<PaginationPrimitive.PaginationNextProps, "children">

const PaginationNext: Component<NextProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <PaginationPrimitive.Next
      class={cn(
        buttonVariants({
          variant: "ghost"
        }),
        "gap-1 pl-2.5",
        props.class
      )}
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
    </PaginationPrimitive.Next>
  )
}

export {
  Pagination,
  PaginationItems,
  PaginationItem,
  PaginationEllipsis,
  PaginationPrevious,
  PaginationNext
}
