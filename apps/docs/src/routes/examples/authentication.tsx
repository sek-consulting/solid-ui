import { Authentication } from "~/components/authentication"
import { MetaHead } from "~/components/meta-head"

export default function AuthenticationRoute() {
  return (
    <>
      <MetaHead
        title="Authentication"
        description="Authentication forms built using the components."
      />
      <Authentication />
    </>
  )
}
