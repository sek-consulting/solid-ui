import fs from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

type PackageJSON = {
  name: string
  description: string
  version: string
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export function getPackageInfo() {
  const location = resolve(__dirname, "..", "package.json")
  return readJSONSync(location) as PackageJSON
}

function readJSONSync(path: string) {
  const content = fs.readFileSync(path, { encoding: "utf-8" })
  return JSON.parse(content)
}
