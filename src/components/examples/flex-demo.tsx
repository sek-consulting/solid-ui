import { ComponentExample } from "~/components/component-example"
import { Flex } from "~/components/layout/flex"
import { Card } from "~/components/ui/card"

export function FlexDemo() {
  return (
    <ComponentExample>
      <Card class="w-full max-w-xs p-6">
        <Flex>
          <div>
            <p class="text-sm font-normal text-gray-500">Tickets sold</p>
            <p class="text-3xl font-semibold text-gray-700">9,876</p>
          </div>
          <div>
            <p class="text-sm font-normal text-gray-500">Average Selling Price</p>
            <p class="text-3xl font-semibold text-gray-700">$ 175.20</p>
          </div>
        </Flex>
      </Card>
    </ComponentExample>
  )
}
