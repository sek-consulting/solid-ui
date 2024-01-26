import {
    splitProps,
    createSignal,
    createEffect,
    onCleanup,
    type JSXElement,
    type Component,
    type ComponentProps,
    children
} from "solid-js"

import { throttle } from "@solid-primitives/scheduled"

import { cn } from "~/lib/utils"

type SolidRef = (el: HTMLDivElement) => void

type ResizeProps = ComponentProps<"div"> & {
  ref: HTMLDivElement | SolidRef
  isHorizontal?: boolean
  side: "left" | "right" | "top" | "bottom"
  onResize: (clientX: number, clientY: number) => void
  children: JSXElement | ((edgeHandler: JSXElement) => JSXElement)
}

type ResizerContentProps = ComponentProps<"div"> & {
  edgeHandler: JSXElement
  children: JSXElement | ((edgeHandler: JSXElement) => JSXElement)
}

const Resizer: Component<ResizeProps> = (props) => {
  const [isDragging, setIsDragging] = createSignal(false)

  const [throttledOnPointerMove, setThrottledOnPointerMove] =
    createSignal<(e: PointerEvent) => void>()

  const onResizeStart = (e: MouseEvent) => {
    // Prevents the event from bubbling up to the parent element
    e.stopPropagation()
    setIsDragging(true)
  }

  const onResizeEnd = () => setIsDragging(false)

  const setRef = (el: HTMLDivElement) => {
    if (!el) return
    ;(props.ref as SolidRef)(el)
    onCleanup(() => {
      el.removeEventListener("pointerdown", onResizeStart)
    })
  }

  createEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (e.buttons !== 1) window.removeEventListener("pointermove", throttledOnPointerMove()!)
      props.onResize(e.clientX, e.clientY)
    }

    setThrottledOnPointerMove(() => throttle(onPointerMove, 10))
  })

  createEffect(() => {
    if (isDragging()) {
      window.addEventListener("pointermove", throttledOnPointerMove()!, { passive: true })
      window.addEventListener("pointerup", onResizeEnd, { passive: true })
    } else {
      window.removeEventListener("pointermove", throttledOnPointerMove()!)
      window.removeEventListener("pointerup", onResizeEnd)
    }
  })

  // Edge handler styles based on the side prop
  const edgeHandlerStyles = {
    left: "absolute top-0 bottom-0 left-0 w-2 cursor-col-resize",
    right: "absolute top-0 bottom-0 right-0 w-2 cursor-col-resize",
    top: "absolute top-0 left-0 right-0 h-2 cursor-row-resize",
    bottom: "absolute bottom-0 left-0 right-0 h-2 cursor-row-resize"
  }

  // Handler elements
  const edgeHandler = <div class={edgeHandlerStyles[props.side]} onMouseDown={onResizeStart} />

  return (
    <div
      ref={(el) => setRef(el)}
      class={cn("relative transition-all delay-300 duration-300 ease-in-out", props.class)}
    >
      <ResizerContent children={props.children} edgeHandler={edgeHandler} />
    </div>
  )
}

const ResizerContent: Component<ResizerContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "edgeHandler"])

  const resolvedChildren = children(() => {
    const body = props.children

    if (typeof body === "function") {
      return body(props.edgeHandler)
    }

    return body
  })

  return (
    <div class={cn("relative", props.class)} {...rest}>
      {props.edgeHandler}
      {resolvedChildren()}
    </div>
  )
}

export default Resizer
