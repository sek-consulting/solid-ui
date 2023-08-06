import withSolid from "rollup-preset-solid"

export default withSolid({
  input: "./index.tsx",
  targets: ["esm", "cjs"],
  solidOptions: { hydratable: true, generate: "ssr" }
})
