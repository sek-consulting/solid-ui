import CookieSettings from "~/components/examples/cards/cookie-settings"
import CreateAccount from "~/components/examples/cards/create-account"
import PaymentMethod from "~/components/examples/cards/payment-method"
import ReportAnIssue from "~/components/examples/cards/report-an-issue"
import SolidUI from "~/components/examples/cards/solid-ui"
import ExamplesContainer from "~/components/examples/examples-container"

const Card = () => {
  return (
    <ExamplesContainer>
      <CreateAccount />
      <PaymentMethod />
      <CookieSettings />
      <ReportAnIssue />
      <SolidUI/>
    </ExamplesContainer>
  )
}

export default Card
