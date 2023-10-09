import { createSignal } from "solid-js"
import { useNavigate } from "solid-start"

import { As } from "@kobalte/core"
import { createShortcut } from "@solid-primitives/keyboard"
import { TbSearch } from "solid-icons/tb"

import { docsConfig } from "~/config/docs"
import { Button } from "~/registry/ui/button"
import {
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemLabel,
  ComboboxRoot,
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

  createShortcut(
    ["Control", "K"],
    () => {
      setOpen(true)
    },
    { preventDefault: true }
  )

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
        <ComboboxRoot<Item, Category>
          placement="bottom"
          gutter={0}
          open
          options={OPTIONS}
          optionValue="title"
          optionTextValue="title"
          optionLabel="title"
          optionGroupChildren="options"
          onChange={onChange}
          placeholder="Search documentation…"
          itemComponent={(props) => (
            <ComboboxItem item={props.item}>
              <ComboboxItemLabel>{props.item.rawValue.title}</ComboboxItemLabel>
            </ComboboxItem>
          )}
          sectionComponent={(props) => (
            <ComboboxSection>{props.section.rawValue.label}</ComboboxSection>
          )}
        >
          <ComboboxControl class="rounded-b-none">
            <ComboboxTrigger class="mr-2">
              <TbSearch />
            </ComboboxTrigger>
            <ComboboxInput />
          </ComboboxControl>
          <ComboboxContent class="max-h-[300px] overflow-y-auto overflow-x-hidden rounded-t-none border-t-0" />
        </ComboboxRoot>
      </DialogContent>
    </Dialog>
  )
}
