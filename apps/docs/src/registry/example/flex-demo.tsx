import { Card } from "~/registry/ui/card"
import { Flex } from "~/registry/ui/flex"

export default function FlexDemo() {
  return (
    <Card class="w-full max-w-xs p-6">
      <Flex>
        <div>
          <p class="text-card-foreground/70 text-sm font-normal">Tickets sold</p>
          <p class="text-card-foreground text-3xl font-semibold">9,876</p>
        </div>
        <div>
          <p class="text-card-foreground/70 text-sm font-normal">Average Selling Price</p>
          <p class="text-card-foreground text-3xl font-semibold">$ 175.20</p>
        </div>
      </Flex>
    </Card>
  )
}
