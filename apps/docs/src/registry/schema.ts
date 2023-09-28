import type { Output } from "valibot"
import { array, enumType, object, optional, string } from "valibot"

export const registrySchema = array(
  object({
    name: string(),
    dependencies: optional(array(string())),
    registryDependencies: optional(array(string())),
    files: array(string()),
    type: enumType(["ui", "example"])
  })
)

export type Registry = Output<typeof registrySchema>
