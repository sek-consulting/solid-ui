import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs"
import { cwd } from "process"

import { log, spinner } from "@clack/prompts"
import chalk from "chalk"

import { transpileTS } from "~/lib/transpileTS"

function getComponent(componentName: string) {
  const subDir = componentName === "flex" || componentName === "grid" ? "/layout/" : "/ui/"
  const componentsFileUri =
    "https://raw.githubusercontent.com/michaelessiet/solid-ui-components/structure-change/apps/docs/core/components"
  const fullComponentUri = componentsFileUri + subDir + `${componentName}.tsx`

  return fullComponentUri
}

export async function add(componentNames: string[]) {
  const activityIndicator = spinner()
  activityIndicator.start("Creating components...")

  try {
    const readSUCConfig = readFileSync(cwd() + "/suc.config.json")
    const sucConfig = JSON.parse(readSUCConfig.toString())
    const isTypescriptEnabled = sucConfig.tsx
    const componentFolderDir = cwd() + "/" + sucConfig.componentDir
    const dirExists = existsSync(componentFolderDir)

    if (!dirExists) mkdirSync(componentFolderDir)

    const componentUris = componentNames.map((name) => getComponent(name))

    try {
      await Promise.all(
        componentUris.map(async (uri, i) => {
          log.message(`Creating ${componentNames[i]}...`)
          const componentFileContent = await (await fetch(uri)).text()

          if (isTypescriptEnabled) {
            writeFileSync(
              componentFolderDir + "/" + `${componentNames[i]}.tsx`,
              componentFileContent
            )
          } else {
            writeFileSync(
              componentFolderDir + "/" + `${componentNames[i]}.jsx`,
              transpileTS(componentFileContent)
            )
          }
        })
      )
    } catch (error) {
      activityIndicator.stop()
      log.error(`Sorry, something went wrong while getting the components. ${error}`)
    }

    activityIndicator.stop("Successfully created components! 🎉")
  } catch (error) {
    activityIndicator.stop()
    log.error(
      `Something went wrong while creating your components. Have you ran ${chalk.green(
        "suc init"
      )}?`
    )
  }
}
