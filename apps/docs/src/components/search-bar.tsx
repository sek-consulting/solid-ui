import { createSignal } from "solid-js"
import { useNavigate } from "solid-start"

import { As, Combobox } from "@kobalte/core"
import { TbCheck } from "solid-icons/tb"

import { docsConfig } from "~/config/docs"
import { Button } from "~/registry/ui/button"
import {
  ComboboxControl,
  ComboboxInput,
  ComboboxSection,
  ComboboxTrigger
} from "~/registry/ui/combobox"
import { Dialog, DialogContent, DialogTrigger } from "~/registry/ui/dialog"

interface Item {
  title: string
  href: string
}
interface Category {
  label: string
  options: Item[]
}

export default function SearchBar() {
  const [open, setOpen] = createSignal(false)

  const OPTIONS: Category[] = docsConfig.sidebarNav.map((value) => {
    return { label: value.title, options: value.items }
  })

  const navigate = useNavigate()
  const onChange = (value: Item) => {
    if (value) {
      setOpen(false)
      navigate(value.href)
    }
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
          options={OPTIONS}
          optionValue="title"
          optionTextValue="title"
          optionLabel="title"
          optionGroupChildren="options"
          onChange={onChange}
          placeholder="Search documentation…"
          itemComponent={(props) => (
            <Combobox.Item item={props.item}>
              <Combobox.ItemLabel>{props.item.rawValue.title}</Combobox.ItemLabel>
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
