import { TbBrandTypescript, TbPlus, TbStar } from "solid-icons/tb"

import ExampleContainer from "../example-container"
import { Button } from "~/registry/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "~/registry/ui/dropdown-menu"

const SolidUI = () => {
  return (
    <ExampleContainer>
      <div class="flex items-start justify-between">
        <div class="flex flex-col gap-4">
          <div>
            <h2>Solid-UI</h2>
            <p class="text-sm opacity-50">
              Beautifully designed components built with Kobalte UI and Tailwind CSS.
            </p>
          </div>

          <div class="flex gap-4 text-sm opacity-50">
            <span class="flex items-center gap-1">
              <TbBrandTypescript color="skyBlue" />
              <p>Typescript</p>
            </span>
            <span class="flex items-center gap-1">
              <TbStar />
              <p>160</p>
            </span>
            <span>updated November 2023</span>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger as={Button} variant={"secondary"} class="flex space-x-2">
            <TbStar />
            <p>Star</p>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuGroupLabel>Suggested Lists</DropdownMenuGroupLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup defaultValue="future-ideas">
                <DropdownMenuRadioItem value="future-ideas">Future ideas</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="my-stack">My Stack</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="inspiration">Inspiration</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <TbPlus /> Create list
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </ExampleContainer>
  )
}

export default SolidUI
