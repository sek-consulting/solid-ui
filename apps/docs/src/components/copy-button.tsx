import type { Component } from "solid-js"
import { Show, createEffect, createSignal, on, splitProps } from "solid-js"

import { As } from "@kobalte/core"
import { TbCheck, TbCopy } from "solid-icons/tb"

import { cn } from "~/lib/utils"
import type { ToggleProps } from "~/registry/ui/toggle"
import { Toggle } from "~/registry/ui/toggle"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/registry/ui/tooltip"

export interface CopyButtonProps extends ToggleProps {
  content: string
}

const CopyButton: Component<CopyButtonProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "content"])
  const [isCopied, setCopied] = createSignal(false)

  createEffect(
    on(
      isCopied,
      () => {
        if (isCopied()) {
          copyToClipboard(props.content)
          setTimeout(() => {
            setCopied(false)
          }, 2000)
        }
      },
      { defer: true }
    )
  )

  return (
    <>
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
            <Show when={isCopied()} fallback={<TbCopy class="h-6 w-6" />}>
              <TbCheck class="h-6 w-6" />
            </Show>
          </As>
        </TooltipTrigger>
        <TooltipContent>{isCopied() ? `Copied!` : `Copy to Clipboard`}</TooltipContent>
      </Tooltip>
    </>
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
}

export { CopyButton }
