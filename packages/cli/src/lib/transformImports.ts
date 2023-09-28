import type { Config } from "./types"

export function transformImports(source: string, config: Config) {
  let newSource:string
  // Replace ~/registry/[style] with the components alias.
  newSource = source.replaceAll(/~\/registry\/ui/g, config.aliases.components)
  // Replace `import { cn } from "@/lib/utils"`
  newSource = newSource.replaceAll(/~\/lib\/utils/g, config.aliases.utils)
	
	return newSource
}