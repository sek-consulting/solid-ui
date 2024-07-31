import { existsSync } from "node:fs"
import { writeFile } from "node:fs/promises"
import path from "node:path"

import * as p from "@clack/prompts"
import chalk from "chalk"
import { Command } from "commander"
import * as v from "valibot"

import type { Config } from "~/utils/config"
import {
  ConfigSchema,
  DEFAULT_COMPONENTS,
  DEFAULT_CSS_FILE,
  DEFAULT_TAILWIND_CONFIG,
  DEFAULT_UTILS
} from "~/utils/config"
import { getPackageInfo } from "~/utils/get-package-info"
import { handleError } from "~/utils/handle-error"

const highlight = (text: string) => chalk.bold.cyan(text)

const initOptionsSchema = v.object({
  cwd: v.string()
})

export const init = new Command()
  .name("init")
  .description("initialize your project and install dependencies")
  .option("-c, --cwd <cwd>", "the working directory", process.cwd())
  .action(async (opts) => {
    try {
      const options = v.parse(initOptionsSchema, opts)

      const cwd = path.resolve(options.cwd)
      if (!existsSync(cwd)) {
        throw new Error(`The path ${cwd} does not exist. Please try again.`)
      }

      const info = getPackageInfo()
      p.intro(chalk.bgCyan.bold.black(` ${info.name} - ${info.version} `))

      const config = await promptForConfig()
      await runInit(cwd, config)

      p.outro(`${chalk.green("Success!")} Project initialization completed.`)
    } catch (e) {
      handleError(e)
    }
  })

async function promptForConfig(): Promise<Config> {
  const options = await p.group(
    {
      typescript: () =>
        p.confirm({
          message: `Would you like to use ${highlight("Typescript")} (recommended)?`,
          initialValue: true
        }),
      cssFile: () =>
        p.text({
          message: `Where is your ${highlight("global CSS")} file? ${chalk.gray("(this file will be overwritten)")}`,
          initialValue: DEFAULT_CSS_FILE
        }),
      tailwindConfig: () =>
        p.text({
          message: `Where is your ${highlight("Tailwind config")} located? ${chalk.gray("(this file will be overwritten)")}`,
          initialValue: DEFAULT_TAILWIND_CONFIG
        }),
      components: () =>
        p.text({
          message: `Configure the import alias for ${highlight("components")}:`,
          initialValue: DEFAULT_COMPONENTS
        }),
      utils: () =>
        p.text({
          message: `Configure the import alias for ${highlight("utils")}:`,
          initialValue: DEFAULT_UTILS
        })
    },
    {
      onCancel: () => {
        p.cancel("Operation cancelled.")
        process.exit(0)
      }
    }
  )

  const config = v.parse(ConfigSchema, {
    $schema: "https://solid-ui.com/schema.json",
    tsx: options.typescript,
    tailwind: {
      css: options.cssFile,
      config: options.tailwindConfig
    },
    aliases: {
      components: options.components,
      utils: options.utils
    }
  })

  return config
}

async function runInit(cwd: string, config: Config) {
  const spinner = p.spinner()

  // write config to file
  spinner.start(`Creating config file...`)
  const targetPath = path.resolve(cwd, "ui.config.json")
  await writeFile(targetPath, JSON.stringify(config, null, 2), "utf-8")
  spinner.stop(`Config file created.`)
}
