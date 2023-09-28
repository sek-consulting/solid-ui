import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs"
import { cwd } from "process"

import { log, multiselect, spinner } from "@clack/prompts"
import chalk from "chalk"

import { registryIndexUrl, registryUIUrl } from "~/lib/constants"
import { transformImports } from "~/lib/transformImports"
import { transpileTS } from "~/lib/transpileTS"
import type { Config, RegistryComponentResponse, RegistryComponentsList } from "~/lib/types"
import { removeExtension } from "~/lib/utils"

async function getComponent(componentName: string): Promise<RegistryComponentResponse> {
  const componentUri = `${registryUIUrl}/${componentName}.json`
  const res = await (await fetch(componentUri)).json()

  return res
}

async function componentSelectionPrompt() {
  const componentList: RegistryComponentsList = await (await fetch(registryIndexUrl)).json()
  const selectedComponents = await multiselect({
    message: "Which components would like to add?",
    options: componentList.map((component) => ({ label: component.name, value: component.name }))
  }) as string[]

  await add(selectedComponents)
}

export async function add(componentNames: string[]) {
  if (componentNames.length === 0) await componentSelectionPrompt()

  const activityIndicator = spinner()
  activityIndicator.start("Creating components...")

  try {
    const readSUCConfig = readFileSync(cwd() + "/suc.config.json")
    const sucConfig: Config = JSON.parse(readSUCConfig.toString())
    const isTypescriptEnabled = sucConfig.tsx
    const componentFolderDir = cwd() + "/" + sucConfig.componentDir
    const dirExists = existsSync(componentFolderDir)

    if (!dirExists) mkdirSync(componentFolderDir)

    const components = await Promise.all(
      componentNames.map(async (name) => await getComponent(name))
    )

    try {
      components.forEach((component) => {
        component.files.forEach((file) => {
          log.message(`Creating ${file.name}...`)

          const content = transformImports(file.content, sucConfig)

          if (isTypescriptEnabled) {
            writeFileSync(componentFolderDir + "/" + `${file.name}`, content)
          } else {
            writeFileSync(
              componentFolderDir + "/" + `${removeExtension(file.name)}.jsx`,
              transpileTS(content)
            )
          }
        })
      })
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
