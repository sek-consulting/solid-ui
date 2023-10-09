import { createSignal } from "solid-js"
import { useNavigate } from "solid-start"

import { As, Combobox } from "@kobalte/core"
import { TbCheck } from "solid-icons/tb"

import { Button } from "~/registry/ui/button"
import {
  ComboboxControl,
  ComboboxInput,
  ComboboxSection,
  ComboboxTrigger
} from "~/registry/ui/combobox"
import { Dialog, DialogContent, DialogTrigger } from "~/registry/ui/dialog"

interface Item {
  value: string
  label: string
  disabled: boolean
}
interface Category {
  label: string
  options: Item[]
}
const ALL_OPTIONS: Category[] = [
  {
    label: "Fruits",
    options: [
      { value: "apple", label: "Apple", disabled: false },
      { value: "banana", label: "Banana", disabled: false },
      { value: "blueberry", label: "Blueberry", disabled: false },
      { value: "grapes", label: "Grapes", disabled: true },
      { value: "pineapple", label: "Pineapple", disabled: false }
    ]
  },
  {
    label: "Meat",
    options: [
      { value: "beef", label: "Beef", disabled: false },
      { value: "chicken", label: "Chicken", disabled: false },
      { value: "lamb", label: "Lamb", disabled: false },
      { value: "pork", label: "Pork", disabled: false }
    ]
  }
]

export default function SearchBar() {
  const [open, setOpen] = createSignal(false)

  const navigate = useNavigate()
  const onChange = (value: Item) => {
    console.log(value)
    setOpen(false)
    navigate("/docs/introduction")
  }

  return (
    <Dialog open={open()} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <As
          component={Button}
          variant={"outline"}
          size={"sm"}
          class="text-muted-foreground w-full justify-between text-sm md:w-40"
        >
          <span>Search...</span>
          <kbd class="bg-muted pointer-events-none ml-4 hidden h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span class="text-xs">⌘</span>K
          </kbd>
        </As>
      </DialogTrigger>
      <DialogContent>
        <Combobox.Root<Item, Category>
          open
          options={ALL_OPTIONS}
          optionValue="value"
          optionTextValue="label"
          optionLabel="label"
          optionGroupChildren="options"
          onChange={onChange}
          placeholder="Search documentation…"
          itemComponent={(props) => (
            <Combobox.Item item={props.item}>
              <Combobox.ItemLabel>{props.item.rawValue.label}</Combobox.ItemLabel>
              <Combobox.ItemIndicator>
                <TbCheck />
              </Combobox.ItemIndicator>
            </Combobox.Item>
          )}
          sectionComponent={(props) => (
            <ComboboxSection>{props.section.rawValue.label}</ComboboxSection>
          )}
        >
          <ComboboxControl>
            <ComboboxInput aria-label="Fruit" />
            <ComboboxTrigger />
          </ComboboxControl>
          <Combobox.Portal>
            <Combobox.Content class="z-50">
              <Combobox.Listbox />
            </Combobox.Content>
          </Combobox.Portal>
        </Combobox.Root>
      </DialogContent>
    </Dialog>
  )
}
