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

  const matrix = Array(len1 + 1)
  for (let i = 0; i <= len1; i++) {
    matrix[i] = Array(len2 + 1)
  }
  for (let i = 0; i <= len1; i++) {
    matrix[i][0] = i
  }
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + 1
        )
      }
    }
  }
  const distance = matrix[len1][len2]
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
