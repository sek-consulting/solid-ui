// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server"

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          {assets}
          <script
            defer
            src="https://analytics.eu.umami.is/script.js"
            data-website-id="ee09d538-8dab-4134-9dca-aad904b65af7"
          />
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
))
