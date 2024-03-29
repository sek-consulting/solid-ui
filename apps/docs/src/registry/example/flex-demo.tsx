import { Card } from "~/registry/ui/card"
import { Flex } from "~/registry/ui/flex"

export default function FlexDemo() {
  return (
    <Card class="w-full max-w-xs p-6">
      <Flex>
        <div>
          <p class="text-sm font-normal text-card-foreground/70">Tickets sold</p>
          <p class="text-3xl font-semibold text-card-foreground">9,876</p>
        </div>
        <div>
          <p class="text-sm font-normal text-card-foreground/70">Average Selling Price</p>
          <p class="text-3xl font-semibold text-card-foreground">$ 175.20</p>
        </div>
      </Flex>
    </Card>
  )
}
