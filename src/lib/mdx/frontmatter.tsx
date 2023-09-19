import { valueToEstree } from "estree-util-value-to-estree"
import type { Literal, Parent } from "unist"
import { parse } from "yaml"

export type Frontmatter = {
  title: string
  description: string
}

export function solidFrontmatter() {
  return (tree: Parent) => {
    const node = tree.children.find((node) => node.type === "yaml") as Literal
    if (!node) {
      return
    }
    const data = parse(node.value as string)

    tree.children.unshift({
      type: "mdxjsEsm",
      data: {
        estree: {
          type: "Program",
          sourceType: "module",
          body: [
            {
              type: "ExportNamedDeclaration",
              specifiers: [],
              declaration: {
                type: "VariableDeclaration",
                kind: "const",
                declarations: Object.entries({
                  frontmatter: data
                }).map(([identifier, value]) => ({
                  type: "VariableDeclarator",
                  id: {
                    type: "Identifier",
                    name: identifier
                  },
                  init: valueToEstree(value)
                }))
              }
            }
          ]
        }
      }
    })
  }
}
