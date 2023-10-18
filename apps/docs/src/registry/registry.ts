import type { Registry } from "~/registry/schema"

const ui: Registry = [
  {
    name: "accordion",
    type: "ui",
    dependencies: ["@kobalte/core", "solid-icons"],
    files: ["ui/accordion.tsx"]
  },
  {
    name: "avatar",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/avatar.tsx"]
  },
  {
    name: "badge-delta",
    type: "ui",
    dependencies: ["@kobalte/core", "solid-icons"],
    registryDependencies: ["badge"],
    files: ["ui/badge-delta.tsx"]
  },
  {
    name: "badge",
    type: "ui",
    files: ["ui/badge.tsx"]
  },
  {
    name: "button",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/button.tsx"]
  },
  {
    name: "callout",
    type: "ui",
    files: ["ui/callout.tsx"]
  },
  {
    name: "card",
    type: "ui",
    files: ["ui/card.tsx"]
  },
  {
    name: "charts",
    type: "ui",
    dependencies: ["chart.js"],
    files: ["ui/charts.tsx"]
  },
  {
    name: "checkbox",
    type: "ui",
    dependencies: ["@kobalte/core", "solid-icons"],
    files: ["ui/checkbox.tsx"]
  },
  {
    name: "collapsible",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/collapsible.tsx"]
  },
  {
    name: "delta-bar",
    type: "ui",
    files: ["ui/delta-bar.tsx"]
  },
  {
    name: "dialog",
    type: "ui",
    dependencies: ["@kobalte/core", "solid-icons"],
    files: ["ui/dialog.tsx"]
  },
  {
    name: "dropdown-menu",
    type: "ui",
    dependencies: ["@kobalte/core", "solid-icons"],
    files: ["ui/dropdown-menu.tsx"]
  },
  {
    name: "flex",
    type: "ui",
    files: ["ui/flex.tsx"]
  },
  {
    name: "grid",
    type: "ui",
    files: ["ui/grid.tsx"]
  },
  {
    name: "input",
    type: "ui",
    files: ["ui/input.tsx"]
  },
  {
    name: "label",
    type: "ui",
    files: ["ui/label.tsx"]
  },
  {
    name: "popover",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/popover.tsx"]
  },
  {
    name: "progress",
    type: "ui",
    dependencies: ["@kobalte/core"],
    registryDependencies: ["label"],
    files: ["ui/progress.tsx"]
  },
  {
    name: "radio-group",
    type: "ui",
    dependencies: ["@kobalte/core", "solid-icons"],
    files: ["ui/radio-group.tsx"]
  },
  {
    name: "select",
    type: "ui",
    dependencies: ["@kobalte/core", "solid-icons"],
    files: ["ui/select.tsx"]
  },
  {
    name: "separator",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/separator.tsx"]
  },
  {
    name: "sheet",
    type: "ui",
    dependencies: ["@kobalte/core", "solid-icons"],
    files: ["ui/sheet.tsx"]
  },
  {
    name: "skeleton",
    type: "ui",
    files: ["ui/skeleton.tsx"]
  },
  {
    name: "switch",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/switch.tsx"]
  },
  {
    name: "table",
    type: "ui",
    files: ["ui/table.tsx"]
  },
  {
    name: "tabs",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/tabs.tsx"]
  },
  {
    name: "textarea",
    type: "ui",
    files: ["ui/textarea.tsx"]
  },
  {
    name: "timeline",
    type: "ui",
    files: ["ui/timeline.tsx"]
  },
  {
    name: "toast",
    type: "ui",
    dependencies: ["@kobalte/core", "solid-icons"],
    files: ["ui/toast.tsx"]
  },
  {
    name: "toggle",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/toggle.tsx"]
  },
  {
    name: "tooltip",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/tooltip.tsx"]
  }
]

const examples: Registry = [
  {
    name: "accordion-demo",
    type: "example",
    registryDependencies: ["accordion"],
    files: ["example/accordion-demo.tsx"]
  },
  {
    name: "avatar-demo",
    type: "example",
    registryDependencies: ["avatar"],
    files: ["example/avatar-demo.tsx"]
  },
  {
    name: "button-demo",
    type: "example",
    registryDependencies: ["button"],
    files: ["example/button-demo.tsx"]
  },
  {
    name: "badge-demo",
    type: "example",
    registryDependencies: ["badge"],
    files: ["example/badge-demo.tsx"]
  },
  {
    name: "badge-delta-demo",
    type: "example",
    registryDependencies: ["badge-delta"],
    files: ["example/badge-delta-demo.tsx"]
  },
  {
    name: "callout-demo",
    type: "example",
    registryDependencies: ["callout"],
    files: ["example/callout-demo.tsx"]
  },
  {
    name: "card-demo",
    type: "example",
    registryDependencies: ["card"],
    files: ["example/card-demo.tsx"]
  },
  {
    name: "checkbox-demo",
    type: "example",
    files: ["example/checkbox-demo.tsx"]
  },
  {
    name: "mode-toggle",
    type: "example",
    files: ["example/mode-toggle.tsx"]
  }
]

export const registry: Registry = [...ui, ...examples]
