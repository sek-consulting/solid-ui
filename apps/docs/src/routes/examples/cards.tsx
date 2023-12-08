import { Cards } from "~/components/cards"
import { MetaHead } from "~/components/meta-head"

export default function CardsRoute() {
  return (
    <>
      <MetaHead title="Cards" description="Examples of cards built using the components." />
      <Cards />
    </>
  )
}
