import { Accordion as AccordionPrimitive } from "@kobalte/core"
import { Component, splitProps } from "solid-js"
import { cn } from "~/lib/utils"
import { Icons } from "~/components/icons"

const Accordion = AccordionPrimitive.Root

const AccordionItem: Component<AccordionPrimitive.AccordionItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <AccordionPrimitive.Item class={cn("border-b", props.class)} {...rest} />
}

//TODO: fix svg rotation
const AccordionTrigger: Component<AccordionPrimitive.AccordionTriggerProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <AccordionPrimitive.Header class="flex">
      <AccordionPrimitive.Trigger
        class={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-[expanded]]>svg]:rotate-180",
          props.class
        )}
        {...rest}
      >
        {props.children}
        <Icons.chevronDown class="h-4 w-4 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

const AccordionContent: Component<AccordionPrimitive.AccordionContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <AccordionPrimitive.Content
      class={cn(
        "overflow-hidden text-sm transition-all animate-accordion-up data-[expanded]:animate-accordion-down",
        props.class
      )}
      {...rest}
    >
      <div class="pb-4 pt-0">{props.children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
