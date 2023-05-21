import { ComponentExample } from "~/components/component-example"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from "~/components/ui/dropdown-menu"
import { Button } from "~/components/ui/button"

export function DropdownMenuDemo() {
  return (
    <ComponentExample>
      <DropdownMenu>
        <DropdownMenuTrigger as={Button}>Git Settings</DropdownMenuTrigger>
        <DropdownMenuContent class="w-48">
          <DropdownMenuItem>
            <span>Commit</span>
            <DropdownMenuShortcut>⌘+K</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Push</span>
            <DropdownMenuShortcut>⇧+⌘+K</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Update Project</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>GitHub</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Create Pull Request…</DropdownMenuItem>
                <DropdownMenuItem>View Pull Requests</DropdownMenuItem>
                <DropdownMenuItem>Sync Fork</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Open on GitHub</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked>Show Git Log</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Show History</DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuGroupLabel>Branches</DropdownMenuGroupLabel>
            <DropdownMenuRadioGroup value="develop">
              <DropdownMenuRadioItem value="main">main</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="develop">develop</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ComponentExample>
  )
}
