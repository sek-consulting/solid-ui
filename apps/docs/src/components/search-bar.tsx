import { useNavigate } from "solid-start"

import { Combobox } from "@kobalte/core"
import { TbCheck, TbSearch } from "solid-icons/tb"

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
  const navigate = useNavigate()
  const onChange = (value: Item) => {
    console.log(value)
    navigate("/docs/introduction")
  }

  return (
    <Combobox.Root<Item, Category>
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
        <Combobox.Section>{props.section.rawValue.label}</Combobox.Section>
      )}
    >
      <Combobox.Control aria-label="Fruit">
        <Combobox.Input />
        <Combobox.Trigger>
          <Combobox.Icon>
            <TbSearch />
          </Combobox.Icon>
        </Combobox.Trigger>
      </Combobox.Control>
      <Combobox.Portal>
        <Combobox.Content>
          <Combobox.Listbox />
        </Combobox.Content>
      </Combobox.Portal>
    </Combobox.Root>
  )
}
