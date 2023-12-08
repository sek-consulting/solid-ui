import { Dashboard } from "~/components/dashboard"
import { MetaHead } from "~/components/meta-head"

export default function DashboardRoute() {
  return (
    <>
      <MetaHead title="Dashboard" description="Example dashboard app built using the components." />
      <Dashboard />
    </>
  )
}
