import { createSignal } from "solid-js"

import { Combobox, createFilter } from "@kobalte/core"
import type { ComboboxTriggerMode } from "@kobalte/core/dist/types/combobox"

import { Icons } from "../icons"
import { ComponentExample } from "~/components/component-example"

const ALL_OPTIONS = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"]

export function ComboboxDemo() {
  const filter = createFilter({ sensitivity: "base" })
  const [options, setOptions] = createSignal(ALL_OPTIONS)
  const onOpenChange = (isOpen: boolean, triggerMode?: ComboboxTriggerMode) => {
    // Show all options on ArrowDown/ArrowUp and button click.
    if (isOpen && triggerMode === "manual") {
      setOptions(ALL_OPTIONS)
    }
  }
  const onInputChange = (value: string) => {
    setOptions(ALL_OPTIONS.filter((option) => filter.contains(option, value)))
  }
  return (
    <ComponentExample>
      <Combobox.Root
        options={options()}
        onInputChange={onInputChange}
        onOpenChange={onOpenChange}
        placeholder="Search a fruit…"
        itemComponent={(props) => (
          <Combobox.Item
            item={props.item}
            class="data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          >
            <Combobox.ItemLabel>{props.item.rawValue}</Combobox.ItemLabel>
            <Combobox.ItemIndicator class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
              <Icons.check class="h-4 w-4" />
            </Combobox.ItemIndicator>
          </Combobox.Item>
        )}
      >
        <Combobox.Control class="border-input flex h-9 w-full items-center justify-between rounded-md border px-3 shadow-sm">
          <Combobox.Input class="placeholder:text-muted-foreground h-full bg-transparent text-sm focus:outline-none disabled:cursor-not-allowed disabled:opacity-50" />
          <Combobox.Trigger>
            <Combobox.Icon class="flex h-3.5 w-3.5 items-center justify-center">
              <Icons.chevronsUpDown class="h-4 w-4 opacity-50" />
            </Combobox.Icon>
          </Combobox.Trigger>
        </Combobox.Control>
        <Combobox.Portal>
          <Combobox.Content class="bg-popover text-popover-foreground data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 relative z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md">
            <Combobox.Listbox class="p-1" />
          </Combobox.Content>
        </Combobox.Portal>
      </Combobox.Root>
    </ComponentExample>
  )
}
