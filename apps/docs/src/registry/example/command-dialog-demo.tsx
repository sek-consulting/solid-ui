import { createEffect, createSignal, onCleanup, type JSXElement } from "solid-js"

import { TbCalendar, TbMail, TbMoodSmile, TbRocket, TbSettings, TbUser } from "solid-icons/tb"

import {
  CommandDialog,
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

export default function CommandDialogDemo() {
  const data: List[] = [
    {
      label: "Suggestions",
      options: [
        {
          icon: <TbCalendar class="mr-2 size-4" />,
          label: "Calendar",
          value: "Calendar"
        },
        {
          icon: <TbMoodSmile class="mr-2 size-4" />,
          label: "Search emoji",
          value: "Search emoji"
        },
        {
          icon: <TbRocket class="mr-2 size-4" />,
          label: "Launch",
          value: "Launch"
        }
      ]
    },
    {
      label: "Settings",
      options: [
        {
          icon: <TbUser class="mr-2 size-4" />,
          label: "Profile",
          value: "Profile",
          shortcut: <CommandItemShortcut>⌘P</CommandItemShortcut>
        },
        {
          icon: <TbMail class="mr-2 size-4" />,
          label: "Mail",
          value: "Mail",
          shortcut: <CommandItemShortcut>⌘B</CommandItemShortcut>
        },
        {
          icon: <TbSettings class="mr-2 size-4" />,
          label: "Setting",
          value: "Setting",
          shortcut: <CommandItemShortcut>⌘S</CommandItemShortcut>
        }
      ]
    }
  ]

  const [open, setOpen] = createSignal(false)

  createEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)

    onCleanup(() => {
      document.removeEventListener("keydown", down)
    })
  })

  return (
    <>
      <p class="text-sm text-muted-foreground">
        Press{" "}
        <kbd class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span class="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog<ListOption, List>
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
        sectionComponent={(props) => (
          <CommandHeading>{props.section.rawValue.label}</CommandHeading>
        )}
        open={open()}
        onOpenChange={setOpen}
      >
        <CommandInput />
        <CommandList />
      </CommandDialog>
    </>
  )
}
