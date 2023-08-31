import type { Component } from "solid-js"
import { Show, createEffect, createSignal, splitProps } from "solid-js"

import { As } from "@kobalte/core"
import type { ToggleButtonRootState } from "@kobalte/core/dist/types/toggle-button"
import { TbCheck, TbCopy } from "solid-icons/tb"

import type { ToggleProps } from "~/components/ui/toggle"
import { Toggle } from "~/components/ui/toggle"
import { TooltipContent, TooltipTrigger } from "~/components/ui/tooltip"
import { Tooltip } from "~/components/ui/tooltip"
import { cn } from "~/lib/utils"

export interface CopyButtonProps extends ToggleProps {
  content: string
}

const CopyButton: Component<CopyButtonProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "content"])
  const [isCopied, setCopied] = createSignal(false)

  createEffect(() => {
    copyToClipboard(props.content)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  })

  return (
    <Tooltip placement="top">
      <TooltipTrigger asChild>
        <As
          component={Toggle}
          onChange={setCopied}
          pressed={isCopied()}
          disabled={isCopied()}
          class={cn("p-2", props.class)}
          {...rest}
        >
          {(state: ToggleButtonRootState) => (
            <Show when={state.pressed()} fallback={<TbCopy class="h-6 w-6" />}>
              <TbCheck class="h-6 w-6" />
            </Show>
          )}
        </As>
      </TooltipTrigger>
      <TooltipContent>{isCopied() ? `Copied!` : `Copy to Clipboard`}</TooltipContent>
    </Tooltip>
  )
}

function copyToClipboard(text: string) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("Async: Copying to clipboard was successful!")
      },
      (err) => {
        console.log("Async: Could not copy text: ", err)
      }
    )
    return
  }

  //FALLBACK
  const ta = document.createElement("textarea")
  ta.value = text

  ta.style.position = "fixed"
  ta.style.top = "0"
  ta.style.left = "0"

  document.body.appendChild(ta)
  ta.focus()
  ta.select()

  try {
    const suc = document.execCommand("copy")
    const msg = suc ? "successful" : "unsuccessful"
    console.log("Fallback: Copying text command was " + msg)
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err)
  }
}

export { CopyButton, copyToClipboard }
