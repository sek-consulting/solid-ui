import type { ValidComponent } from "solid-js"

import { As as AsPrimitive } from "@kobalte/core"
import type { DynamicProps } from "solid-js/web"

export function As<T extends ValidComponent>(props: DynamicProps<T>) {
  return <AsPrimitive {...props} />
}
