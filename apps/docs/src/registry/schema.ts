import type { Output } from "valibot"
import { array, object, optional, picklist, string } from "valibot"

export const registrySchema = array(
  object({
    name: string(),
    dependencies: optional(array(string())),
    registryDependencies: optional(array(string())),
    files: array(string()),
    type: picklist(["ui", "example"])
  })
)

export type Registry = Output<typeof registrySchema>
