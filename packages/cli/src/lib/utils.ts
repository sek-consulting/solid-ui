import { execSync } from "child_process"
import { readFile } from "fs"

import { log, spinner } from "@clack/prompts"
import { detect } from "detect-package-manager"

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
      const jsonObject = JSON.parse(data)
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
  const packageManager = await detect()

  switch (packageManager) {
    case "yarn":
    case "pnpm":
      runCommand(`${packageManager} add ${packages.join(" ")}`, "Installing dependencies")
      break
    default:
      runCommand(`${packageManager} install ${packages.join(" ")}`, "Installing dependencies")
  }
}
