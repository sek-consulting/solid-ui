import { Resizable, ResizableHandle, ResizablePanel } from "../ui/resizable"

export default function ResizableDemo() {
  return (
    <Resizable orientation="horizontal" class="max-w-md rounded-lg border">
      <ResizablePanel initialSize={50}>
        <div class="flex h-[200px] items-center justify-center p-6">
          <span class="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel initialSize={50}>
        <Resizable orientation="vertical">
          <ResizablePanel initialSize={25}>
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel initialSize={75}>
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </Resizable>
      </ResizablePanel>
    </Resizable>
  )
}
