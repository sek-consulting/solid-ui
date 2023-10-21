import type { Config } from "./types"

export function transformImports(source: string, config: Config) {
  const pathAlias = config.aliases.path.replace("/*", "")
  return source
    .replaceAll(/~\/registry\/ui/g, `${pathAlias}/components/ui`)
    .replaceAll(/~\/lib\/utils/g, `${pathAlias}/lib/utils`)
}
