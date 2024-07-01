#! /usr/bin/env node
import { add } from "~/commands/add"
import init from "~/commands/init"
import { getPackageInfo } from "~/utils/get-package-info"
import { Command } from "commander"

process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))

async function main() {
  console.clear()

  const packageInfo = getPackageInfo()

  const program = new Command()
    .name("solidui-cli")
    .description("Add SolidUI components to your project")
    .version(packageInfo.version || "0.0.0", "-v, --version")

  program
    .command("init")
    .description("Initialize and install the necessary things to make use of SolidUI")
    .action(async () => await init())

  program
    .command("add")
    .argument("[components...]", "Components to be added to your project")
    .description("Add a component to your project")
    .action(async (component: string[]) => await add(component))

  program.parse()
}

main()
