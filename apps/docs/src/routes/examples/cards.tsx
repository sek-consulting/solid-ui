import CreateAccount from "~/components/examples/cards/createaccount"
import { Card as BaseCard } from "~/registry/ui/card"

const Card = () => {
  return <BaseCard>
		<div class="flex h-16 flex-col items-center px-4">
			<CreateAccount/>
		</div>
	</BaseCard>
}

export default Card
