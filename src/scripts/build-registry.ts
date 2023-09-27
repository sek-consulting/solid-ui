import fs from "fs"
import path, { basename } from "path"

import { safeParse } from "valibot"

import { registry } from "../registry/registry"
import { registrySchema } from "../registry/schema"

const REGISTRY_PATH = path.join(process.cwd(), "public/registry")

const result = safeParse(registrySchema, registry)
if (!result.success) {
  console.error(result.issues)
  process.exit(1)
}

// #######################################
//    BUILD registry/ui/[name].json
// #######################################

const targetPath = path.join(REGISTRY_PATH, "ui")
if (!fs.existsSync(targetPath)) {
  fs.mkdirSync(targetPath, { recursive: true })
}

for (const item of result.output) {
  if (item.type !== "ui") {
    continue
  }

  const files = item.files?.map((file) => {
    const content = fs.readFileSync(path.join(process.cwd(), "src", "registry", file), "utf8")

    return {
      name: basename(file),
      content
    }
  })

  const payload = {
    ...item,
    files
  }

  fs.writeFileSync(
    path.join(targetPath, `${item.name}.json`),
    JSON.stringify(payload, null, 2),
    "utf8"
  )
}

// #######################################
//    BUILD registry/index.json
// #######################################

const uiPayload = result.output.filter((item) => item.type === "ui")
fs.writeFileSync(
  path.join(REGISTRY_PATH, "index.json"),
  JSON.stringify(uiPayload, null, 2),
  "utf-8"
)
