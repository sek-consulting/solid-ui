import type { ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import { PolymorphicProps } from "@kobalte/core/polymorphic"
import * as SkeletonPrimitive from "@kobalte/core/skeleton"

import { cn } from "~/lib/utils"

type SkeletonRootProps = SkeletonPrimitive.SkeletonRootProps & { class?: string | undefined }

const Skeleton = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SkeletonRootProps>
) => {
  const [local, others] = splitProps(props as SkeletonRootProps, ["class"])
  return (
    <SkeletonPrimitive.Root
      class={cn("bg-primary/10 data-[animate='true']:animate-pulse ", local.class)}
      {...others}
    />
  )
}

export { Skeleton }
