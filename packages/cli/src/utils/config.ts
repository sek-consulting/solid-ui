import * as v from "valibot"

export const DEFAULT_COMPONENTS = "~/components"
export const DEFAULT_UTILS = "~/lib/utils"
export const DEFAULT_CSS_FILE = "src/app.css"
export const DEFAULT_TAILWIND_CONFIG = "tailwind.config.cjs"

export const ConfigSchema = v.object({
  $schema: v.optional(v.string()),
  tsx: v.boolean(),
  tailwind: v.object({
    css: v.string(),
    config: v.string()
  }),
  aliases: v.object({
    components: v.string(),
    utils: v.string()
  })
})

export type Config = v.InferOutput<typeof ConfigSchema>
