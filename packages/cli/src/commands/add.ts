import { readFileSync, writeFile } from "fs"
import { cwd } from "process"

import { log } from "@clack/prompts"

function getComponent(componentName: string) {
  const subDir = componentName === "flex" || componentName === "grid" ? "/layout/" : "/ui/"
  const componentsFileUri =
    "https://raw.githubusercontent.com/michaelessiet/solid-ui-components/structure-change/apps/docs/core/components"
  const fullComponentUri = componentsFileUri + subDir + `${componentName}.tsx`

  return fullComponentUri
}

export async function add(componentNames: string[]) {
  const readSUCConfig = readFileSync(cwd + "/suc.config.json")
  const sucConfig = JSON.parse(readSUCConfig.toString())
  const componentFolderDir = cwd() + "/" + sucConfig.componentDir

  const componentUris = componentNames.map((name) => getComponent(name))

  try {
    Promise.allSettled([
      componentUris.forEach(async (uri, i) => {
        const componentFileContent = await (await fetch(uri)).json()

        writeFile(componentFolderDir + `${componentNames[i]}.tsx`, componentFileContent, (err) => {
          if (err)
            log.error(
              `There was an error while creating the ${componentNames[i]} component. ${err}`
            )
        })
      })
    ])
  } catch (error) {
    log.error(`Sorry, something went wrong while getting the components. ${error}`)
  }
}
