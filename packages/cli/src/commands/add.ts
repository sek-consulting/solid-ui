import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs"
import path from "path"
import { cwd } from "process"

import { log, spinner } from "@clack/prompts"
import chalk from "chalk"
import prompts from "prompts"
import { parse } from "valibot"

import { registryIndexUrl, registryUIUrl } from "~/lib/constants"
import { transformImports } from "~/lib/transformImports"
import { transpileTS } from "~/lib/transpileTS"
import {
  configSchema,
  type RegistryComponentResponse,
  type RegistryComponentsList
} from "~/lib/types"
import { installPackages, removeExtension } from "~/lib/utils"

async function getComponent(componentName: string): Promise<RegistryComponentResponse> {
  const componentUri = `${registryUIUrl}/${componentName}.json`
  const res = await (await fetch(componentUri)).json()

  return res
}

async function componentSelectionPrompt() {
  try {
    const componentList: RegistryComponentsList = await (await fetch(registryIndexUrl)).json()

    const selectedComponents = await prompts({
      name: "Selected Components",
      type: "multiselect",
      message: "Which components would you like to add?",
      choices: componentList.map((component) => ({ title: component.name, value: component.name }))
    })

    await add(selectedComponents["Selected Components"])
  } catch (error) {
    log.info(`Error: ${error}`)
    log.error("Command terminated.")
    process.exit(1)
  }
}

export async function add(componentNames: string[]) {
  if (componentNames.length === 0) await componentSelectionPrompt()

  const activityIndicator = spinner()
  activityIndicator.start("Creating components...")

  try {
    const readSUCConfig = readFileSync(path.resolve(cwd(), "suc.config.json"))
    const sucConfig = parse(configSchema, JSON.parse(readSUCConfig.toString()))
    const isTypescriptEnabled = sucConfig.tsx
    const componentFolderDir = path.resolve(cwd(), sucConfig.componentDir)
    const dirExists = existsSync(componentFolderDir)

    if (!dirExists) mkdirSync(componentFolderDir, { recursive: true })

    const components = await Promise.all(
      componentNames.map(async (name) => await getComponent(name))
    )

    try {
      for (const component of components) {
        log.message(`Adding ${component.name} component`)

        if (component.dependencies?.length > 0) {
          log.step(`Installing ${component.name} component dependencies`)
          await installPackages(...component.dependencies)
        }

        if (component.registryDependencies?.length > 0) {
          log.step("Installing any other required components")
          await add(component.registryDependencies)
        }

        for (const file of component.files) {
          log.step(`Creating ${file.name}`)

          const content = transformImports(file.content, sucConfig)

          if (isTypescriptEnabled) {
            writeFileSync(componentFolderDir + "/" + `${file.name}`, content)
          } else {
            writeFileSync(
              componentFolderDir + "/" + `${removeExtension(file.name)}.jsx`,
              transpileTS(content)
            )
          }
        }
      }
    } catch (error) {
      log.error(`Something went wrong: ${error}`)
      process.exit(1)
    }

    activityIndicator.stop("Successfully created components! 🎉")
    return
  } catch (error) {
    activityIndicator.stop()
    log.error(
      `Something went wrong while creating your components. Have you ran ${chalk.green(
        "solidui-cli init"
      )}?`
    )
    process.exit(1)
  }
}
