import { writeFile } from "fs"

import { text, confirm, log, spinner, select } from "@clack/prompts"

import { PROJECT_DEPS } from "~/lib/constants"
import { readJsonFile, runCommand } from "~/lib/utils"

export default async function init() {
  const isTypescript = await confirm({
    message: "Would you like to use TypeScript? (recommended)",
    initialValue: true
  })
  const globalCssDir = await text({
    message: "Where is your global CSS file?",
    initialValue: "src/root.css"
  })
  const tailwindConfigDir = await text({
    message: "Where is your tailwind.config.js located?",
    initialValue: "tailwind.config.js"
  })
  const componentAlias = await text({
    message: "Configure the import alias for components:",
    initialValue: "@/components"
  })
  const utilsAlias = await text({
    message: "Configure the import alias for utils:",
    initialValue: "@/utils"
  })

  saveConfig(
    isTypescript as boolean,
    tailwindConfigDir as string,
    globalCssDir as string,
    componentAlias as string,
    utilsAlias as string
  )
  writeTsconfig(componentAlias as string, utilsAlias as string)
  await writeSUCPreset()
  await writeTailwindConfig(tailwindConfigDir as string)

  log.success("Project configuration completed.")

  await installDeps()

  log.success("Success! Try npx suc add button to add a button component to your project")
}

async function installDeps() {
  const shouldInstallDeps = await confirm({
    message: "Would you like to install the required dependencies? (recommended)",
    initialValue: true
  })

  if (shouldInstallDeps) {
    const packageManager = await select({
      message: "Which package manager would you like to use?",
      options: [
        { label: "npm", value: "npm" },
        { label: "yarn", value: "yarn" },
        { label: "pnpm", value: "pnpm" }
      ],
      initialValue: "npm"
    })
    runCommand(
      `${packageManager as string} install ${PROJECT_DEPS.join(" ")}`,
      "Installing Solid UI Component dependencies",
      "Dependencies installed"
    )
  }
}

function saveConfig(
  isTypescript: boolean,
  tailwindConfigDir: string,
  globalCssDir: string,
  componentAlias: string,
  utilsAlias: string
) {
  const indicator = spinner()
  indicator.start("Writing suc.config.json...")

  const config = JSON.stringify(
    {
      tsx: isTypescript,
      componentDir: 'components',
      tailwind: {
        config: tailwindConfigDir,
        css: globalCssDir
      },
      aliases: {
        components: componentAlias,
        utils: utilsAlias
      }
    },
    null,
    2
  )

  writeFile("suc.config.json", config, (error) => {
    if (error) log.error("There was an error while saving your preferences")
  })
  indicator.stop("suc.config.json successfully created!")
}

async function writeSUCPreset() {
  const indicator = spinner()
  indicator.start("Writing Solid UI Components tailwind preset...")

  try {
    const tailwindPresetUrl =
      "https://raw.githubusercontent.com/michaelessiet/solid-ui-components/structure-change/sui.preset.js"
    const data = await (await fetch(tailwindPresetUrl)).text()

    writeFile("suc.preset.js", data, (error) => {
      if (error) log.error(`There was an error while writing the sui.preset.js: ${error}`)
    })
  } catch (error) {
    log.error(`Sorry, something went wrong while getting the tailwind presets: ${error}`)
  }
  indicator.stop("suc.preset.js successfully created!")
}

async function writeTailwindConfig(tailwindConfigDir: string) {
  const indicator = spinner()
  indicator.start("Configuring tailwind.config.js to support Solid UI Components...")

  const config = `/** @type {import('tailwindcss').Config} */
  export default {
    darkMode: ["class"],
    content: [
      "./src/**/*.{html,js,jsx,md,mdx,ts,tsx}"
    ],
    presets: [require("./suc.preset.js")]
  }
  `
  writeFile(tailwindConfigDir, config, (error) => {
    if (error) log.error(`Something went wrong while writing your tailwind.config.js: ${error}`)
  })

  indicator.stop("Done done configuring your tailwind.config.js")
}

function writeTsconfig(componentAlias: string, utilsAlias: string) {
  const indicator = spinner()
  indicator.start("Configuring your tsconfig.json")

  readJsonFile(process.cwd() + "/tsconfig.json", (error, data) => {
    if (error) log.error("Something went wrong while configuring your tsconfig.json")

    const tsconfigData = data as Record<string, { paths: Record<string, unknown> }>
    tsconfigData.compilerOptions.paths[componentAlias] = ["./src/components"]
    tsconfigData.compilerOptions.paths[utilsAlias] = ["./src/utils"]

    writeFile("tsconfig.json", JSON.stringify(tsconfigData, null, 2), (error) => {
      if (error) log.error(`Something went wrong while configuring your tsconfig.json: ${error}`)
    })
  })

  indicator.stop("Done configuring your tsconfig.json")
}
