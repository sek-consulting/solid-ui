import { Combobox } from "@kobalte/core"
import { TbCheck, TbSelector } from "solid-icons/tb"

import { ComponentExample } from "~/components/component-example"

export function ComboboxDemo() {
  const ALL_STRING_OPTIONS = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"]
  return (
    <ComponentExample>
      <Combobox.Root
        gutter={0}
        class="w-[200px]"
        options={ALL_STRING_OPTIONS}
        placeholder="Search a fruit…"
        itemComponent={(props) => (
          <Combobox.Item
            item={props.item}
            class="hover:bg-accent hover:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          >
            <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
              <Combobox.ItemIndicator>
                <TbCheck class="h-4 w-4" />
              </Combobox.ItemIndicator>
            </span>
            <Combobox.ItemLabel>{props.item.rawValue}</Combobox.ItemLabel>
          </Combobox.Item>
        )}
      >
        <Combobox.Control
          class="border-input hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center rounded-md border px-4 py-2"
          aria-label="Fruit"
        >
          <div class="flex items-center">
            <Combobox.Input class="placeholder:text-muted-foreground flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50" />
            <Combobox.Trigger>
              <Combobox.Icon>
                <TbSelector class="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Combobox.Icon>
            </Combobox.Trigger>
          </div>
        </Combobox.Control>
        <Combobox.Portal>
          <Combobox.Content class="bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-full rounded-md border shadow-md outline-none">
            <Combobox.Listbox class="max-h-[300px] overflow-y-auto overflow-x-hidden p-1" />
          </Combobox.Content>
        </Combobox.Portal>
      </Combobox.Root>
    </ComponentExample>
  )
}
