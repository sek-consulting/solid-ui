import { createResource, createSignal, For, onMount, Show } from "solid-js"
import { isServer } from "solid-js/web"

import type { SearchRes } from "~/types/search"
import ShoSho from "shosho"

import { IconCommand, IconHash, IconSearch } from "~/components/icons"
import { Badge } from "~/registry/ui/badge"
import { Button } from "~/registry/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger
} from "~/registry/ui/dialog"
import { TextField, TextFieldInput } from "~/registry/ui/text-field"

const shortcut = new ShoSho()

async function fetchSearch(value: string) {
  const url = `https://docs-search-qyz9b.ondigitalocean.app/search?collectionName=solid-ui-docs&q=${value}&queryBy=title,contents`
  const res = await fetch(url)
  const data: SearchRes = await res.json()
  return data
}

export default function SearchBar() {
  const [searchValue, setSearchValue] = createSignal("")
  const [isOpen, setIsOpen] = createSignal(false)
  const [data] = createResource(searchValue, fetchSearch)
  data()

  onMount(() => {
    if (!isServer) {
      shortcut.register("CmdOrCtrl+K", () => {
        document.getElementById("search-trigger")?.click()
        return true
      })
      shortcut.start()
    }
  })

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen()}>
      <DialogTrigger
        as={Button<"button">}
        id="search-trigger"
        variant="outline"
        class="relative w-full justify-between space-x-4 text-muted-foreground"
      >
        <div class="flex items-center space-x-2">
          <IconSearch />
          <span>Search...</span>
        </div>

        <Badge variant="secondary" class="flex items-center ">
          <IconCommand />
          <span>K</span>
        </Badge>
      </DialogTrigger>

      <DialogContent class="flex h-4/5 flex-col">
        <DialogHeader>
          <TextField>
            <TextFieldInput
              placeholder="Search docs..."
              value={searchValue()}
              onkeyup={(v) => setSearchValue(v.currentTarget.value)}
            />
          </TextField>
        </DialogHeader>

        <DialogDescription class="overflow-scroll">
          <Show when={!data.loading} fallback={<p class="text-center">Loading...</p>}>
            <For each={data()?.hits}>
              {(item, index) => {
                const id = `search-content-${index()}`
                const titleId = `search-title-${index()}`

                setTimeout(() => {
                  if (document.getElementById(id)) {
                    document.getElementById(id)!.innerHTML = item.highlight.contents.snippet
                  }
                  if (document.getElementById(titleId) && item.highlight.title?.snippet) {
                    document.getElementById(titleId)!.innerHTML = item.highlight.title.snippet
                  }
                }, 1)

                return (
                  <a
                    href={item.document.uri}
                    onClick={() => setIsOpen(false)}
                    class="duration-400 animate-in fade-in-0"
                  >
                    <div class="grid grid-cols-[25px_1fr] items-start rounded p-4 hover:bg-black/30 dark:hover:bg-white/30">
                      <IconHash class="size-5" />
                      <div class="space-y-1">
                        <p
                          class="text-base font-medium leading-none text-black dark:text-white"
                          id={titleId}
                        >
                          {item.document.title}
                        </p>
                        <p class="text-sm text-muted-foreground" id={id} />
                        Th
                      </div>
                    </div>
                  </a>
                )
              }}
            </For>
          </Show>
        </DialogDescription>

        <DialogFooter>
          <p class="opacity-50">
            Search by{" "}
            <a href="https://x.com/devshogun" target="_blank" class="underline">
              Michael Essiet
            </a>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
