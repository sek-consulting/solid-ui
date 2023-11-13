import { As } from "@kobalte/core"
import { TbBrandTypescript, TbChevronDown, TbPlus, TbStar } from "solid-icons/tb"

import { Button } from "~/registry/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/registry/ui/card"
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
import { Separator } from "~/registry/ui/separator"

export function SolidUI() {
  return (
    <Card>
      <CardHeader class="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div class="space-y-1">
          <CardTitle>solid-ui</CardTitle>
          <CardDescription>
            Beautifully designed components built with Kobalte and Tailwind CSS.
          </CardDescription>
        </div>
        <div class="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
          <Button variant="secondary" class="px-3 shadow-none">
            <TbStar class="mr-2 h-4 w-4" />
            Star
          </Button>
          <Separator orientation="vertical" class="h-[20px]" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <As component={Button} variant={"secondary"} class="px-2 shadow-none">
                <TbChevronDown class="h-4 w-4 text-secondary-foreground" />
              </As>
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
                <TbPlus class="mr-2 h-4 w-4" /> Create list
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div class="flex space-x-4 text-sm text-muted-foreground">
          <div class="flex items-center">
            <TbBrandTypescript class="mr-1 h-3 w-3 text-sky-400" />
            TypeScript
          </div>
          <div class="flex items-center">
            <TbStar class="mr-1 h-3 w-3" />
            160
          </div>
          <div>Updated November 2023</div>
        </div>
      </CardContent>
    </Card>
  )
}
