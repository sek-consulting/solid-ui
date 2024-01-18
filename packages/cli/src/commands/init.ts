import { existsSync, mkdirSync, writeFile, writeFileSync } from "fs"
import { cwd } from "process"

import { text, confirm, log, spinner, select } from "@clack/prompts"
import { parse } from "valibot"

import { PROJECT_DEPS, ROOT_CSS, TAILWIND_CONFIG, TAILWIND_PRESET, UTILS } from "~/lib/constants"
import { configSchema, type Config } from "~/lib/types"
import { readJsonFile, runCommand } from "~/lib/utils"

export async function init() {
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
    initialValue: "tailwind.config.cjs"
  })
  const pathAlias = await text({
    message: "Configure the import alias for the src directory:",
    initialValue: "~/*"
  })

  const config = parse(configSchema, {
    tsx: isTypescript,
    componentDir: "./src/components/ui",
    tailwind: {
      config: tailwindConfigDir,
      css: globalCssDir
    },
    aliases: {
      path: pathAlias
    }
  })

  saveConfig(config)
  writeTsconfig(config.aliases.path)
  writeUtils()
  await writeUIPreset()
  await writeTailwindConfig(config.tailwind.config)
  await writeCSS(config.tailwind.css)

  log.success("Project configuration completed.")

  await installDeps()

  log.success("Success! Try 'npx solidui-cli add button' to add a button component to your project")
  process.exit(0)
}

function writeUtils() {
  const doesLibPathExist = existsSync(cwd() + "/src/lib")

  const indicator = spinner()
  indicator.start("Creating utils.ts file...")

  if (!doesLibPathExist) mkdirSync(cwd() + "/src/lib")

  writeFileSync(cwd() + "/src/lib/utils.ts", UTILS)
  indicator.stop("Done creating utils.ts file!")
}

async function writeCSS(cssPath: string) {
  const indicator = spinner()

  indicator.start("Writing CSS styles...")

  writeFile(
    cssPath,
    ROOT_CSS,
    (error) => error && log.error(error.message || "Something went wrong")
  )

  indicator.stop("Done Writing CSS styles!")
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
        { label: "pnpm", value: "pnpm" },
        { label: "bun", value: "bun" }
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

function saveConfig(config: Config) {
  const indicator = spinner()
  indicator.start("Writing ui.config.json...")

  writeFile("ui.config.json", JSON.stringify(config, null, 2), (error) => {
    if (error) log.error("There was an error while saving your preferences")
  })
  indicator.stop("ui.config.json successfully created!")
}

async function writeUIPreset() {
  const indicator = spinner()
  indicator.start("Writing Solid UI Components tailwind preset...")

  try {
    writeFile("ui.preset.js", TAILWIND_PRESET, (error) => {
      if (error) log.error(`There was an error while writing the ui.preset.js: ${error}`)
    })
  } catch (error) {
    log.error(`Sorry, something went wrong while getting the tailwind presets: ${error}`)
  }

  indicator.stop("ui.preset.js successfully created!")
}

async function writeTailwindConfig(tailwindConfigDir: string) {
  const indicator = spinner()
  indicator.start("Configuring tailwind.config.cjs to support Solid UI Components...")

  writeFile(tailwindConfigDir, TAILWIND_CONFIG, (error) => {
    if (error) log.error(`Something went wrong while writing your tailwind.config.cjs: ${error}`)
  })

  indicator.stop("Done done configuring your tailwind.config.cjs")
}

function writeTsconfig(alias: string) {
  const indicator = spinner()
  indicator.start("Configuring your tsconfig.json")

  readJsonFile(process.cwd() + "/tsconfig.json", (error, data) => {
    if (error) {
      log.error(
        "Something went wrong while configuring your tsconfig.json. Please make sure it is formatted correctly and doesn't contain any comments."
      )
      process.exit(1)
    }

    const tsconfigData = data as Record<string, { paths: Record<string, unknown> }>

    if (!tsconfigData.compilerOptions.paths) {
      tsconfigData.compilerOptions.paths = {}
    }
    tsconfigData.compilerOptions.paths[alias] = ["./src/*"]

    writeFile("tsconfig.json", JSON.stringify(tsconfigData, null, 2), (error) => {
      if (error) log.error(`Something went wrong while configuring your tsconfig.json: ${error}`)
    })
  })

  indicator.stop("Done configuring your tsconfig.json")
}
