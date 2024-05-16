import { splitProps, ValidComponent } from "solid-js"

import * as CheckboxPrimitive from "@kobalte/core/checkbox"
import { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"

type CheckboxRootProps = CheckboxPrimitive.CheckboxRootProps & { class?: string | undefined }

const Checkbox = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CheckboxRootProps>
) => {
  const [local, others] = splitProps(props as CheckboxRootProps, ["class"])
  return (
    <CheckboxPrimitive.Root class={cn("items-top group flex space-x-2", local.class)} {...others}>
      <CheckboxPrimitive.Input />
      <CheckboxPrimitive.Control class="peer size-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:border-none data-[checked]:bg-primary data-[checked]:text-primary-foreground">
        <CheckboxPrimitive.Indicator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4"
          >
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Control>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
