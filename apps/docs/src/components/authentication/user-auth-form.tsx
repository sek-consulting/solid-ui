import type { SubmitHandler } from "@modular-forms/solid"
import { createForm } from "@modular-forms/solid"
import { TbBrandGithub, TbLoader } from "solid-icons/tb"

import type { AuthForm } from "./validations/auth"
import { Button } from "~/registry/ui/button"
import { Grid } from "~/registry/ui/grid"
import { Input } from "~/registry/ui/input"
import { Label } from "~/registry/ui/label"

export function UserAuthForm() {
  const [authForm, { Form, Field }] = createForm<AuthForm>()

  const handleSubmit: SubmitHandler<AuthForm> = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000))
  }

  return (
    <div class="grid gap-6">
      <Form onSubmit={handleSubmit}>
        <Grid class="gap-4">
          <Field name="email">
            {(_, props) => (
              <Grid class="gap-1">
                <Label class="sr-only" for="email">
                  Email
                </Label>
                <Input {...props} type="email" placeholder="me@email.com" />
              </Grid>
            )}
          </Field>
          <Button type="submit" disabled={authForm.submitting}>
            {authForm.submitting && <TbLoader class="mr-2 size-4 animate-spin" />}
            Login
          </Button>
        </Grid>
      </Form>
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t" />
        </div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={authForm.submitting}>
        {authForm.submitting ? (
          <TbLoader class="mr-2 size-4 animate-spin" />
        ) : (
          <TbBrandGithub class="mr-2 size-4" />
        )}{" "}
        Github
      </Button>
    </div>
  )
}
