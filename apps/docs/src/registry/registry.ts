import type { Registry } from "~/registry/schema"

const ui: Registry = [
  {
    name: "accordion",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/accordion.tsx"]
  },
  {
    name: "alert",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/alert.tsx"]
  },
  {
    name: "alert-dialog",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/alert-dialog.tsx"]
  },
  {
    name: "aspect-ratio",
    type: "ui",
    files: ["ui/aspect-ratio.tsx"]
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
    dependencies: ["@kobalte/core"],
    registryDependencies: ["badge"],
    files: ["ui/badge-delta.tsx"]
  },
  {
    name: "badge",
    type: "ui",
    files: ["ui/badge.tsx"]
  },
  {
    name: "bar-list",
    type: "ui",
    files: ["ui/bar-list.tsx"]
  },
  {
    name: "breadcrumb",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/breadcrumb.tsx"]
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
    name: "carousel",
    type: "ui",
    dependencies: ["embla-carousel-solid"],
    files: ["ui/carousel.tsx"]
  },
  {
    name: "charts",
    type: "ui",
    dependencies: ["chart.js", "@solid-primitives/refs"],
    files: ["ui/charts.tsx"]
  },
  {
    name: "checkbox",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/checkbox.tsx"]
  },
  {
    name: "combobox",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/combobox.tsx"]
  },
  {
    name: "command",
    type: "ui",
    dependencies: ["@kobalte/core", "cmdk-solid"],
    registryDependencies: ["dialog"],
    files: ["ui/command.tsx"]
  },
  {
    name: "context-menu",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/context-menu.tsx"]
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
    dependencies: ["@kobalte/core"],
    files: ["ui/dialog.tsx"]
  },
  {
    name: "drawer",
    type: "ui",
    dependencies: ["@corvu/drawer"],
    files: ["ui/drawer.tsx"]
  },
  {
    name: "dropdown-menu",
    type: "ui",
    dependencies: ["@kobalte/core"],
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
    name: "hover-card",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/hover-card.tsx"]
  },
  {
    name: "label",
    type: "ui",
    files: ["ui/label.tsx"]
  },
  {
    name: "menubar",
    type: "ui",
    files: ["ui/menubar.tsx"]
  },
  {
    name: "navigation-menu",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/navigation-menu.tsx"]
  },
  {
    name: "number-field",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/number-field.tsx"]
  },
  {
    name: "otp-field",
    type: "ui",
    dependencies: ["@corvu/otp-field"],
    files: ["ui/otp-field.tsx"]
  },
  {
    name: "pagination",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/pagination.tsx"]
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
    name: "progress-circle",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/progress-circle.tsx"]
  },
  {
    name: "radio-group",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/radio-group.tsx"]
  },
  {
    name: "resizable",
    type: "ui",
    dependencies: ["@corvu/resizable"],
    files: ["ui/resizable.tsx"]
  },
  {
    name: "select",
    type: "ui",
    dependencies: ["@kobalte/core"],
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
    dependencies: ["@kobalte/core"],
    files: ["ui/sheet.tsx"]
  },
  {
    name: "skeleton",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/skeleton.tsx"]
  },
  {
    name: "slider",
    type: "ui",
    dependencies: ["@kobalte/core"],
    registryDependencies: ["label"],
    files: ["ui/slider.tsx"]
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
    name: "text-field",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/text-field.tsx"]
  },
  {
    name: "timeline",
    type: "ui",
    files: ["ui/timeline.tsx"]
  },
  {
    name: "toast",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/toast.tsx"]
  },
  {
    name: "toggle",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/toggle.tsx"]
  },
  {
    name: "toggle-group",
    type: "ui",
    dependencies: ["@kobalte/core"],
    files: ["ui/toggle-group.tsx"]
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
    files: ["example/accordion-demo.tsx"]
  },
  {
    name: "alert-demo",
    type: "example",
    files: ["example/alert-demo.tsx"]
  },
  {
    name: "alert-dialog-demo",
    type: "example",
    files: ["example/alert-dialog-demo.tsx"]
  },
  {
    name: "aspect-ratio-demo",
    type: "example",
    files: ["example/aspect-ratio-demo.tsx"]
  },
  {
    name: "avatar-demo",
    type: "example",
    files: ["example/avatar-demo.tsx"]
  },
  {
    name: "button-demo",
    type: "example",
    files: ["example/button-demo.tsx"]
  },
  {
    name: "badge-demo",
    type: "example",
    files: ["example/badge-demo.tsx"]
  },
  {
    name: "badge-delta-demo",
    type: "example",
    files: ["example/badge-delta-demo.tsx"]
  },
  {
    name: "bar-list-demo",
    type: "example",
    files: ["example/bar-list-demo.tsx"]
  },
  {
    name: "breadcrumb-demo",
    type: "example",
    files: ["example/breadcrumb-demo.tsx"]
  },
  {
    name: "callout-demo",
    type: "example",
    files: ["example/callout-demo.tsx"]
  },
  {
    name: "card-demo",
    type: "example",
    files: ["example/card-demo.tsx"]
  },
  {
    name: "carousel-demo",
    type: "example",
    files: ["example/carousel-demo.tsx"]
  },
  {
    name: "carousel-size-demo",
    type: "example",
    files: ["example/carousel-size-demo.tsx"]
  },
  {
    name: "carousel-api-demo",
    type: "example",
    files: ["example/carousel-api-demo.tsx"]
  },
  {
    name: "carousel-orientation-demo",
    type: "example",
    files: ["example/carousel-orientation-demo.tsx"]
  },
  {
    name: "carousel-plugin-demo",
    type: "example",
    files: ["example/carousel-plugin-demo.tsx"]
  },
  {
    name: "carousel-spacing-demo",
    type: "example",
    files: ["example/carousel-spacing-demo.tsx"]
  },
  {
    name: "area-chart-demo",
    type: "example",
    files: ["example/area-chart-demo.tsx"]
  },
  {
    name: "pie-chart-demo",
    type: "example",
    files: ["example/pie-chart-demo.tsx"]
  },
  {
    name: "bar-chart-demo",
    type: "example",
    files: ["example/bar-chart-demo.tsx"]
  },
  {
    name: "checkbox-demo",
    type: "example",
    files: ["example/checkbox-demo.tsx"]
  },
  {
    name: "collapsible-demo",
    type: "example",
    files: ["example/collapsible-demo.tsx"]
  },
  {
    name: "combobox-demo",
    type: "example",
    files: ["example/combobox-demo.tsx"]
  },
  {
    name: "command-demo",
    type: "example",
    files: ["example/command-demo.tsx"]
  },
  {
    name: "command-dialog-demo",
    type: "example",
    files: ["example/command-dialog-demo.tsx"]
  },
  {
    name: "context-menu-demo",
    type: "example",
    files: ["example/context-menu-demo.tsx"]
  },
  {
    name: "delta-bar-demo",
    type: "example",
    files: ["example/delta-bar-demo.tsx"]
  },
  {
    name: "dialog-demo",
    type: "example",
    files: ["example/dialog-demo.tsx"]
  },
  {
    name: "drawer-demo",
    type: "example",
    files: ["example/drawer-demo.tsx"]
  },
  {
    name: "drawer-dialog",
    type: "example",
    files: ["example/drawer-dialog.tsx"]
  },
  {
    name: "dropdown-menu-demo",
    type: "example",
    files: ["example/dropdown-menu-demo.tsx"]
  },
  {
    name: "flex-demo",
    type: "example",
    files: ["example/flex-demo.tsx"]
  },
  {
    name: "grid-demo",
    type: "example",
    files: ["example/grid-demo.tsx"]
  },
  {
    name: "hover-card-demo",
    type: "example",
    files: ["example/hover-card-demo.tsx"]
  },
  {
    name: "menubar-demo",
    type: "example",
    files: ["example/menubar-demo.tsx"]
  },
  {
    name: "mode-toggle",
    type: "example",
    files: ["example/mode-toggle.tsx"]
  },
  {
    name: "navigation-menu-demo",
    type: "example",
    files: ["example/navigation-menu-demo.tsx"]
  },
  {
    name: "number-field-demo",
    type: "example",
    files: ["example/number-field-demo.tsx"]
  },
  {
    name: "otp-field-demo",
    type: "example",
    files: ["example/otp-field-demo.tsx"]
  },
  {
    name: "pagination-demo",
    type: "example",
    files: ["example/pagination-demo.tsx"]
  },
  {
    name: "popover-demo",
    type: "example",
    files: ["example/popover-demo.tsx"]
  },
  {
    name: "progress-demo",
    type: "example",
    files: ["example/progress-demo.tsx"]
  },
  {
    name: "progress-circle-demo",
    type: "example",
    files: ["example/progress-circle-demo.tsx"]
  },
  {
    name: "radio-group-demo",
    type: "example",
    files: ["example/radio-group-demo.tsx"]
  },
  {
    name: "resizable-demo",
    type: "example",
    files: ["example/resizable-demo.tsx"]
  },
  {
    name: "select-demo",
    type: "example",
    files: ["example/select-demo.tsx"]
  },
  {
    name: "separator-demo",
    type: "example",
    files: ["example/separator-demo.tsx"]
  },
  {
    name: "sheet-demo",
    type: "example",
    files: ["example/sheet-demo.tsx"]
  },
  {
    name: "skeleton-demo",
    type: "example",
    files: ["example/skeleton-demo.tsx"]
  },
  {
    name: "slider-demo",
    type: "example",
    files: ["example/slider-demo.tsx"]
  },
  {
    name: "switch-demo",
    type: "example",
    files: ["example/switch-demo.tsx"]
  },
  {
    name: "table-demo",
    type: "example",
    files: ["example/table-demo.tsx"]
  },
  {
    name: "tabs-demo",
    type: "example",
    files: ["example/tabs-demo.tsx"]
  },
  {
    name: "text-field-demo",
    type: "example",
    files: ["example/text-field-demo.tsx"]
  },
  {
    name: "text-field-textarea-demo",
    type: "example",
    files: ["example/text-field-textarea-demo.tsx"]
  },
  {
    name: "timeline-demo",
    type: "example",
    files: ["example/timeline-demo.tsx"]
  },
  {
    name: "toast-demo",
    type: "example",
    files: ["example/toast-demo.tsx"]
  },
  {
    name: "toggle-demo",
    type: "example",
    files: ["example/toggle-demo.tsx"]
  },
  {
    name: "toggle-group-demo",
    type: "example",
    files: ["example/toggle-group-demo.tsx"]
  },
  {
    name: "tooltip-demo",
    type: "example",
    files: ["example/tooltip-demo.tsx"]
  }
]

export const registry: Registry = [...ui, ...examples]
