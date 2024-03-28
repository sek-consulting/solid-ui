import { type JSXElement } from "solid-js"

import {
  IconCalendar,
  IconMail,
  IconRocket,
  IconSettings,
  IconSmile,
  IconUser
} from "~/components/icons"
import {
  Command,
  CommandHeading,
  CommandInput,
  CommandItem,
  CommandItemLabel,
  CommandItemShortcut,
  CommandList
} from "~/registry/ui/command"

type ListOption = {
  icon: JSXElement
  label: string
  value: string
  shortcut?: JSXElement
}

type List = {
  label: string
  options: ListOption[]
}

export default function CommandDemo() {
  const data: List[] = [
    {
      label: "Suggestions",
      options: [
        {
          icon: <IconCalendar class="mr-2 size-4" />,
          label: "Calendar",
          value: "Calendar"
        },
        {
          icon: <IconSmile class="mr-2 size-4" />,
          label: "Search emoji",
          value: "Search emoji"
        },
        {
          icon: <IconRocket class="mr-2 size-4" />,
          label: "Launch",
          value: "Launch"
        }
      ]
    },
    {
      label: "Settings",
      options: [
        {
          icon: <IconUser class="mr-2 size-4" />,
          label: "Profile",
          value: "Profile",
          shortcut: <CommandItemShortcut>⌘P</CommandItemShortcut>
        },
        {
          icon: <IconMail class="mr-2 size-4" />,
          label: "Mail",
          value: "Mail",
          shortcut: <CommandItemShortcut>⌘B</CommandItemShortcut>
        },
        {
          icon: <IconSettings class="mr-2 size-4" />,
          label: "Setting",
          value: "Setting",
          shortcut: <CommandItemShortcut>⌘S</CommandItemShortcut>
        }
      ]
    }
  ]

  return (
    <Command<ListOption, List>
      options={data}
      optionValue="value"
      optionTextValue="label"
      optionLabel="label"
      optionGroupChildren="options"
      placeholder="Type a command or search..."
      itemComponent={(props) => (
        <CommandItem item={props.item}>
          {props.item.rawValue.icon}
          <CommandItemLabel>{props.item.rawValue.label}</CommandItemLabel>
          {props.item.rawValue.shortcut}
        </CommandItem>
      )}
      sectionComponent={(props) => <CommandHeading>{props.section.rawValue.label}</CommandHeading>}
      class="rounded-lg border shadow-md"
    >
      <CommandInput />
      <CommandList />
    </Command>
  )
}
