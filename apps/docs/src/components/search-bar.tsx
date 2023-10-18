import { useNavigate } from "solid-start"

import { TbSearch } from "solid-icons/tb"

import { docsConfig } from "~/config/docs"
import {
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemLabel,
  ComboboxRoot,
  ComboboxTrigger
} from "~/registry/ui/combobox"

interface Item {
  title: string
  href: string
}

function fuzzy(haystack: string, needle: string, ratio: number): boolean {
  const str1 = haystack.toLowerCase()
  const str2 = needle.toLowerCase()

  const len1 = str1.length
  const len2 = str2.length

  if (str1.indexOf(str2) > -1) return true // partial match

  const track = Array(len1 + 1)
  for (let i = 0; i <= len1; i++) {
    track[i] = Array(len2 + 1)
  }
  for (let i = 0; i <= len1; i += 1) {
    track[0][i] = i
  }
  for (let j = 0; j <= len2; j += 1) {
    track[j][0] = j
  }
  for (let j = 1; j <= len2; j += 1) {
    for (let i = 1; i <= len1; i += 1) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1
      track[j][i] = Math.min(
        track[j][i - 1] + 1, // deletion
        track[j - 1][i] + 1, // insertion
        track[j - 1][i - 1] + indicator // substitution
      )
    }
  }
  const distance = track[len2][len1]
  return (len1 - distance) / len2 >= ratio || needle == ""
}

export default function SearchBar() {
  const OPTIONS: Item[] = docsConfig.sidebarNav.flatMap((value) => value.items)
  const navigate = useNavigate()

  return (
    <ComboboxRoot<Item>
      defaultFilter={(item, input) => fuzzy(item.title, input, 0.8)}
      onChange={(item) => navigate(item.href)}
      options={OPTIONS}
      optionValue="title"
      optionTextValue="title"
      optionLabel="title"
      placeholder="Search documentation…"
      itemComponent={(props) => (
        <ComboboxItem item={props.item}>
          <ComboboxItemLabel>{props.item.rawValue.title}</ComboboxItemLabel>
        </ComboboxItem>
      )}
    >
      <ComboboxControl>
        <ComboboxTrigger class="mr-2">
          <TbSearch />
        </ComboboxTrigger>
        <ComboboxInput />
      </ComboboxControl>
      <ComboboxContent class="max-h-[350px] overflow-y-auto overflow-x-hidden" />
    </ComboboxRoot>
  )
}
