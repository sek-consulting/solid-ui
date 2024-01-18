#! /usr/bin/env node

import { Command } from "commander"

import { add } from "~/commands/add"
import { init } from "~/commands/init"

const program = new Command()

program
  .name("solidui-cli")
  .description("A CLI used for the Solid-UI components library")
  .version("0.1")

program
  .command("init")
  .description("Initialize and install the necessary things to make use of Solid-UI")
  .action(async () => await init())

program
  .command("add")
  .argument("[components...]", "Components to be added to your project")
  .description("Add a component to your project")
  .action(async (component: string[]) => await add(component))

program.parse()
