import withSolid from "rollup-preset-solid"
import alias from "@rollup/plugin-alias"
import resolve from '@rollup/plugin-node-resolve'
import path from "path"
import { fileURLToPath } from "url"

const fileurl = import.meta.url
const __filepath = fileURLToPath(fileurl)
const __dirname = path.dirname(__filepath)

export default withSolid({
  input: "./index.tsx",
  targets: ["esm", "cjs"],
  solidOptions: { hydratable: true, generate: "ssr" },
  plugins: [
    alias({
      entries: [
        {
          find: "~",
          replacement: path.resolve(__dirname)
        }
      ]
    }),
    resolve()
  ]
})
