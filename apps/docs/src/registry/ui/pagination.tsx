import type { Component, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import {
  PaginationEllipsisProps,
  PaginationItemProps,
  PaginationNextProps,
  PaginationPreviousProps,
  Pagination as PaginationPrimitive,
  PaginationRootProps
} from "@kobalte/core/pagination"
import { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"
import { buttonVariants } from "~/registry/ui/button"

type RootProps<T extends ValidComponent = "nav"> = PolymorphicProps<T, PaginationRootProps>

const Pagination: Component<RootProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <PaginationPrimitive
      class={cn("[&>*]:flex [&>*]:flex-row [&>*]:items-center [&>*]:gap-1", props.class)}
      {...rest}
    />
  )
}

const PaginationItems = PaginationPrimitive.Items

type ItemProps<T extends ValidComponent = "button"> = PolymorphicProps<T, PaginationItemProps>

const PaginationItem: Component<ItemProps> = (props) => {
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

type EllipsisProps<T extends ValidComponent = "div"> = Exclude<
  PolymorphicProps<T, PaginationEllipsisProps>,
  "children"
>

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

type PreviousProps<T extends ValidComponent = "button"> = Exclude<
  PolymorphicProps<T, PaginationPreviousProps>,
  "children"
>

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

type NextProps<T extends ValidComponent = "button"> = Exclude<
  PolymorphicProps<T, PaginationNextProps>,
  "children"
>

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
