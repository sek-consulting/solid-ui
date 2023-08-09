type NavElement = {
  title: string
  href: string
  description?: string
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
    },
    {
      title: "Twitter",
      href: "https://twitter.com/stefan_e_k",
      external: true
    }
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
          description: "Re-usable components built using Kobalte and Tailwind CSS."
        }
      ]
    },
    {
      title: "Components",
      items: [
        {
          title: "Accordion",
          href: "/docs/components/accordion",
          description:
            "A vertically stacked set of interactive headings that each reveal a section of content."
        },
        {
          title: "Avatar",
          href: "/docs/components/avatar",
          description: "An image element with a fallback for representing the user."
        },
        {
          title: "Badge",
          href: "/docs/components/badge",
          description: "Displays a badge or a component that looks like a badge."
        },
        {
          title: "Button",
          href: "/docs/components/button",
          description: "Displays a button or a component that looks like a button."
        },
        {
          title: "Callout",
          href: "/docs/components/callout",
          description: "Used for hints, disclaimers, tips, warnings, or documentation needs."
        },
        {
          title: "Card",
          href: "/docs/components/card",
          description: "Displays a card with header, content, and footer."
        },
        {
          title: "Charts",
          href: "/docs/components/charts",
          description: "Displays charts using Chart.js."
        },
        {
          title: "Checkbox",
          href: "/docs/components/checkbox",
          description: "A control that allows the user to toggle between checked and not checked."
        },
        {
          title: "Combobox",
          href: "/docs/components/combobox",
          description:
            "Combines a text input with a listbox, allowing users to filter a list of options to items matching a query."
        },
        {
          title: "Context Menu",
          href: "/docs/components/context-menu",
          description:
            "Displays a menu to the user — such as a set of actions or functions — triggered by a button."
        },
        {
          title: "Delta Bar",
          href: "/docs/components/delta-bar",
          description: "Bar to show negative or positive deviation from a particular threshold"
        },
        {
          title: "Dialog",
          href: "/docs/components/dialog",
          description:
            "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
        },
        {
          title: "Dropdown Menu",
          href: "/docs/components/dropdown-menu",
          description:
            "Displays a menu to the user — such as a set of actions or functions — triggered by a button."
        },
        {
          title: "Input",
          href: "/docs/components/input",
          description: "Displays a form input field or a component that looks like an input field."
        },
        {
          title: "Label",
          href: "/docs/components/label",
          description: "Renders an accessible label associated with controls."
        },
        {
          title: "Mode Toggle",
          href: "/docs/components/mode-toggle",
          description: "A control to toggle between light and dark mode."
        },
        {
          title: "Popover",
          href: "/docs/components/popover",
          description: "Displays rich content in a portal, triggered by a button."
        },
        {
          title: "Progress",
          href: "/docs/components/progress",
          description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
        },
        {
          title: "Radio Group",
          href: "/docs/components/radio-group",
          description:
            "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
        },
        {
          title: "Select",
          href: "/docs/components/select",
          description: "Displays a list of options for the user to pick from—triggered by a button."
        },
        {
          title: "Separator",
          href: "/docs/components/separator",
          description: "Visually or semantically separates content."
        },
        {
          title: "Sheet",
          href: "/docs/components/sheet",
          description:
            "Extends the Dialog component to display content that complements the main content of the screen."
        },
        {
          title: "Skeleton",
          href: "/docs/components/skeleton",
          description: "Use to show a placeholder while content is loading."
        },
        {
          title: "Switch",
          href: "/docs/components/switch",
          description: "A control that allows the user to toggle between checked and not checked."
        },
        {
          title: "Table",
          href: "/docs/components/table",
          description: "A responsive table component."
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs",
          description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time."
        },
        {
          title: "Textarea",
          href: "/docs/components/textarea",
          description: "Displays a form textarea or a component that looks like a textarea."
        },
        {
          title: "Toast",
          href: "/docs/components/toast",
          description: "A succinct message that is displayed temporarily."
        },
        {
          title: "Toggle",
          href: "/docs/components/toggle",
          description: "A two-state button that can be either on or off."
        },
        {
          title: "Tooltip",
          href: "/docs/components/tooltip",
          description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
        }
      ]
    },
    {
      title: "Layout",
      items: [
        {
          title: "Flex",
          href: "/docs/layout/flex",
          description:
            "Creates a flex container which enables flex context for all its direct children."
        },
        {
          title: "Grid",
          href: "/docs/layout/grid",
          description: "Creates a grid layout to align components as equally sized columns."
        }
      ]
    }
  ]
}
