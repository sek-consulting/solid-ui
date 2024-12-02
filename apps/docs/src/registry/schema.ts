import * as v from "valibot"

export const registryTypeSchema = v.picklist(["ui", "example", "block", "page", "component"])

export const registryFileSchema = v.object({
  path: v.string(),
  content: v.optional(v.string()),
  type: registryTypeSchema,
  target: v.optional(v.string())
})

export const registryItemSchema = v.object({
  name: v.string(),
  dependencies: v.optional(v.array(v.string())),
  registryDependencies: v.optional(v.array(v.string())),
  files: v.array(registryFileSchema),
  type: registryTypeSchema,
  description: v.optional(v.string())
})

export const registryIndexSchema = v.record(
  v.string(),
  v.object({ ...registryItemSchema.entries, component: v.any() })
)

export const registrySchema = v.array(registryItemSchema)

export type RegistryItem = v.InferOutput<typeof registryItemSchema>
export type RegistryIndex = v.InferOutput<typeof registryIndexSchema>
export type Registry = v.InferOutput<typeof registrySchema>
