import { TbBrandGithub, TbBrandGoogle } from "solid-icons/tb"

import ExampleContainer from "../example-container"
import { Button } from "~/registry/ui/button"
import { Input } from "~/registry/ui/input"

const CreateAccount = () => {
  return (
    <ExampleContainer>
      <div>
        <h2 class="text-2xl">Create an account</h2>
        <p class="text-sm opacity-50">Enter your email below to create an account</p>
      </div>

      <div class="flex gap-4">
        <Button class="flex-1" variant={"outline"}>
          <TbBrandGithub class="m-2" /> Github
        </Button>
        <Button class="flex-1" variant={"outline"}>
          <TbBrandGoogle class="m-2" /> Google
        </Button>
      </div>

      <div class="flex flex-row items-center justify-center gap-2 text-xs uppercase opacity-70">
        <hr class="flex-1" />
        <p>or continue with</p>
        <hr class="flex-1" />
      </div>

			<div class="flex flex-col gap-4 text-sm">
				<div class="space-y-2">
					<label for="email">Email</label>
					<Input id="email" placeholder="me@example.com"/>
				</div>
				<div class="space-y-2">
					<label for="password">Password</label>
					<Input id="password" type="password"/>
				</div>
				<Button>Create account</Button>
			</div>
    </ExampleContainer>
  )
}

export default CreateAccount
