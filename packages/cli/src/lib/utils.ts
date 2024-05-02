import { execSync } from "child_process"
import { readFile } from "fs"

import { detect } from "@antfu/ni"
import { log, spinner } from "@clack/prompts"
import JSON5 from "json5"

export function readJsonFile(
  filePath: string,
  callback: (error: Error | null, data: unknown | null) => void
): void {
  readFile(filePath, "utf8", (err, data) => {
    if (err) {
      callback(err, null)
      return
    }

    try {
      const jsonObject = JSON5.parse(data)
      callback(null, jsonObject)
    } catch (parseError) {
      callback(parseError as Error, null)
    }
  })
}

export function runCommand(command: string, message?: string, endMessage?: string) {
  try {
    const indicator = spinner()
    indicator.start(message)

    execSync(command)

    indicator.stop(endMessage ?? "Done")
  } catch (error) {
    log.error(`${error}`)
  }
}

export function removeExtension(value: string) {
  const splitWords = value.split(".")

  return splitWords[0]
}

export async function installPackages(...packages: string[]) {
  const packageManager = await detect({ programmatic: true })

  switch (packageManager) {
    case "bun":
    case "pnpm":
    case "pnpm@6":
    case "yarn":
    case "yarn@berry":
      runCommand(`${packageManager} add ${packages.join(" ")}`, "Installing dependencies")
      break
    default:
      runCommand(`${packageManager} install ${packages.join(" ")}`, "Installing dependencies")
  }
}
