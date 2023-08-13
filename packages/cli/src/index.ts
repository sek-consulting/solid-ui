import { Command } from "commander"

import add from "./commands/add"
import init from "./commands/init"

const program = new Command()

program.name("suc").description("A CLI used for the Solid UI components library").version("0.1")

program
  .command("init")
  .description("Initialize and install the necessary things to make use of Solid UI Components")
  .action(() => init())

program
  .command("add")
  .argument("<string>", "Component to be added to your project")
  .description("Add a component to your project")
  .action((component: string) => add(component))

program.parse()
