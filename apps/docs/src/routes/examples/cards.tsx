import { CookieSettings } from "~/components/cards/cookie-settings"
import { CreateAccount } from "~/components/cards/create-account"
import { Notifications } from "~/components/cards/notifications"
import { PaymentMethod } from "~/components/cards/payment-method"
import { ReportAnIssue } from "~/components/cards/report-an-issue"
import { ShareDocument } from "~/components/cards/share-document"
import { SolidUI } from "~/components/cards/solid-ui"
import { TeamMembers } from "~/components/cards/team-members"

export default function Cards() {
  return (
    <>
      <div class="md:hidden">
        <img
          src="/examples/cards-light.png"
          width={1280}
          height={1214}
          alt="Cards"
          class="block dark:hidden"
        />
        <img
          src="/examples/cards-dark.png"
          width={1280}
          height={1214}
          alt="Cards"
          class="hidden dark:block"
        />
      </div>
      <div class="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
          <CreateAccount />
          <PaymentMethod />
        </div>
        <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
          <TeamMembers />
          <ShareDocument />
          <Notifications />
        </div>
        <div class="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
          <ReportAnIssue />
          <SolidUI />
          <CookieSettings />
        </div>
      </div>
    </>
  )
}
