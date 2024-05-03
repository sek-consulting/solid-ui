import { ToggleGroup } from "@kobalte/core/toggle-group"

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup class="toggle-group">
      <ToggleGroup.Item class="toggle-group__item" value="bold" aria-label="Bold">
        A
      </ToggleGroup.Item>
      <ToggleGroup.Item class="toggle-group__item" value="italic" aria-label="Italic">
        I
      </ToggleGroup.Item>
      <ToggleGroup.Item class="toggle-group__item" value="underline" aria-label="Underline">
        U
      </ToggleGroup.Item>
    </ToggleGroup>
  )
}
