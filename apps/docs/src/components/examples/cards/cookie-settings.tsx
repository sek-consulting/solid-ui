import ExampleContainer from "../example-container"
import { Switch } from "~/registry/ui/switch"

const CookieSettings = () => {
  return (
    <ExampleContainer>
      <div>
        <h2 class="text-2xl">Cookie settings</h2>
        <p class="text-sm opacity-50">Manage your cookie settings.</p>
      </div>

      <div class="flex items-center justify-between">
        <div>
          <h4>Strictly necessary</h4>
          <p class="text-sm opacity-50">
            These cookies are essential in order to use the website and use its features.
          </p>
        </div>
        <Switch></Switch>
      </div>
      <div class="flex items-center justify-between">
        <div>
          <h4>Functional cookies</h4>
          <p class="text-sm opacity-50">
            These cookies allow the website to provide personalized functionality.
          </p>
        </div>
        <Switch></Switch>
      </div>
      <div class="flex items-center justify-between">
        <div>
          <h4>Performance cookies</h4>
          <p class="text-sm opacity-50">
            These cookies help to improve the performance of the website.
          </p>
        </div>
        <Switch></Switch>
      </div>
    </ExampleContainer>
  )
}

export default CookieSettings
