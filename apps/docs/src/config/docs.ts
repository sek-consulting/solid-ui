type NavElement = {
  title: string
  href: string
  external?: boolean
}

type NavCategory = {
  title: string
  items: NavElement[]
}

type Config = {
  mainNav: NavElement[]
  sidebarNav: NavCategory[]
}

export const docsConfig: Config = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs/introduction"
    },
    {
      title: "GitHub",
      href: "https://github.com/sek-consulting/solid-ui-components",
      external: true
    }
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction"
        },
        {
          title: "Installation",
          href: "/docs/installation"
        },
        {
          title: "Dark Mode",
          href: "/docs/dark-mode"
        },
        {
          title: "CLI",
          href: "/docs/cli"
        },
        {
          title: "Figma",
          href: "/docs/figma"
        },
        {
          title: "About",
          href: "/docs/about"
        }
      ]
    },
    {
      title: "Components",
      items: [
        {
          title: "Accordion",
          href: "/docs/components/accordion"
        },
        {
          title: "Alert",
          href: "/docs/components/alert"
        },
        {
          title: "Alert Dialog",
          href: "/docs/components/alert-dialog"
        },
        {
          title: "Avatar",
          href: "/docs/components/avatar"
        },
        {
          title: "Badge",
          href: "/docs/components/badge"
        },
        {
          title: "Button",
          href: "/docs/components/button"
        },
        {
          title: "Callout",
          href: "/docs/components/callout"
        },
        {
          title: "Card",
          href: "/docs/components/card"
        },
        {
          title: "Charts",
          href: "/docs/components/charts"
        },
        {
          title: "Checkbox",
          href: "/docs/components/checkbox"
        },
        {
          title: "Collapsible",
          href: "/docs/components/collapsible"
        },
        {
          title: "Combobox",
          href: "/docs/components/combobox"
        },
        {
          title: "Delta Bar",
          href: "/docs/components/delta-bar"
        },
        {
          title: "Dialog",
          href: "/docs/components/dialog"
        },
        {
          title: "Dropdown Menu",
          href: "/docs/components/dropdown-menu"
        },
        {
          title: "Flex",
          href: "/docs/components/flex"
        },
        {
          title: "Grid",
          href: "/docs/components/grid"
        },
        {
          title: "Input",
          href: "/docs/components/input"
        },
        {
          title: "Label",
          href: "/docs/components/label"
        },
        {
          title: "Popover",
          href: "/docs/components/popover"
        },
        {
          title: "Progress",
          href: "/docs/components/progress"
        },
        {
          title: "Radio Group",
          href: "/docs/components/radio-group"
        },
        {
          title: "Select",
          href: "/docs/components/select"
        },
        {
          title: "Separator",
          href: "/docs/components/separator"
        },
        {
          title: "Sheet",
          href: "/docs/components/sheet"
        },
        {
          title: "Skeleton",
          href: "/docs/components/skeleton"
        },
        {
          title: "Switch",
          href: "/docs/components/switch"
        },
        {
          title: "Table",
          href: "/docs/components/table"
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs"
        },
        {
          title: "Textarea",
          href: "/docs/components/textarea"
        },
        {
          title: "Timeline",
          href: "/docs/components/timeline"
        },
        {
          title: "Toast",
          href: "/docs/components/toast"
        },
        {
          title: "Toggle",
          href: "/docs/components/toggle"
        },
        {
          title: "Tooltip",
          href: "/docs/components/tooltip"
        }
      ]
    }
  ]
}
