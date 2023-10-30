import { TbChevronDown } from "solid-icons/tb"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "~/registry/ui/collapsible"

export default function CollapsibleDemo() {
  return (
    <Collapsible class="w-[300px]">
      <CollapsibleTrigger class="flex w-full items-center justify-between rounded-md border p-3">
        <span>What is Kobalte ?</span>
        <TbChevronDown class="h-4 w-4" />
      </CollapsibleTrigger>
      <CollapsibleContent class="mt-2 rounded-md border p-3">
        Kobalte is a UI toolkit for building accessible web apps and design systems with SolidJS. It
        provides a set of low-level UI components and primitives which can be the foundation for
        your design system implementation.
      </CollapsibleContent>
    </Collapsible>
  )
}
