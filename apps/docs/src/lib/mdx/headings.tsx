import { valueToEstree } from "estree-util-value-to-estree"
import type { Node, Parent } from "unist"
import { visit } from "unist-util-visit"

interface ElementNode extends Node {
  tagName: string
  value: string
  properties: {
    id: string
  }
}

export type Heading = {
  depth: number
  text: string
  slug: string
}

export default function rehypeHeadings() {
  return function (tree: Parent) {
    const headings: Heading[] = []

    visit(tree, "element", (node: ElementNode) => {
      if (node.tagName[0] !== "h") return
      const [, level] = node.tagName.match(/h([0-6])/) ?? []
      const depth = Number.parseInt(level)

      let text = ""
      visit(node, (node, _, parent) => {
        if (node.type === "element" || parent === null) {
          return
        }
        if (node.type === "raw" && node.value.match(/^\n?<.*>\n?$/)) {
          return
        }
        if (new Set(["text"]).has(node.type)) {
          text += node.value
        }
      })

      node.properties = node.properties || {}

      headings.push({
        depth,
        slug: node.properties.id,
        text
      })
    })

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
                  headings
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
