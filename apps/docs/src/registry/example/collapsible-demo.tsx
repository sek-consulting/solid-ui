import { CollapsibleRoot } from "@kobalte/core/dist/types/collapsible/collapsible-root"
import { TbChevronDown } from "solid-icons/tb"

import { CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"

export default function CollapsibleDemo() {
  return (
    <CollapsibleRoot>
      <CollapsibleTrigger>
        <span>What is Kobalte ?</span>
        <TbChevronDown class="h-4 w-4" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        Kobalte is a UI toolkit for building accessible web apps and design systems with SolidJS. It
        provides a set of low-level UI components and primitives which can be the foundation for
        your design system implementation.
      </CollapsibleContent>
    </CollapsibleRoot>
  )
}
