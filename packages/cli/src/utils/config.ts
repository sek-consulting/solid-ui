import path from "node:path"

import { loadConfig } from "tsconfig-paths"
import * as v from "valibot"

import { resolveImport } from "~/utils/resolve-import"

export const DEFAULT_COMPONENTS = "~/components"
export const DEFAULT_UTILS = "~/lib/utils"
export const DEFAULT_CSS_FILE = "src/app.css"
export const DEFAULT_TAILWIND_CONFIG = "tailwind.config.cjs"
export const DEFAULT_TAILWIND_PREFIX = ""

export const RawConfigSchema = v.object({
  $schema: v.optional(v.string()),
  tsx: v.boolean(),
  tailwind: v.object({
    css: v.string(),
    config: v.string(),
    prefix: v.optional(v.string(), "")
  }),
  aliases: v.object({
    components: v.string(),
    utils: v.string()
  })
})

export type RawConfig = v.InferOutput<typeof RawConfigSchema>

export const ConfigSchema = v.object({
  ...RawConfigSchema.entries,
  resolvedPaths: v.object({
    tailwindConfig: v.string(),
    tailwindCss: v.string(),
    utils: v.string(),
    components: v.string()
  })
})

export type Config = v.InferOutput<typeof ConfigSchema>

export async function resolveConfigPaths(cwd: string, config: RawConfig) {
  const tsConfig = await loadConfig(cwd)

  if (tsConfig.resultType === "failed") {
    throw new Error(
      `Failed to load ${config.tsx ? "tsconfig" : "jsconfig"}.json. ${tsConfig.message ?? ""}`.trim()
    )
  }

  return v.parse(ConfigSchema, {
    ...config,
    resolvedPaths: {
      tailwindConfig: path.resolve(cwd, config.tailwind.config),
      tailwindCss: path.resolve(cwd, config.tailwind.css),
      utils: await resolveImport(config.aliases.utils, tsConfig),
      components: await resolveImport(config.aliases.components, tsConfig)
    }
  })
}
