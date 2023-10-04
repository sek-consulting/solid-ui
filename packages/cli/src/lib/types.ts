import { Output, boolean, object, string } from "valibot"

export enum CommandTypes {
  "init",
  "add"
}

export interface ComponentFile {
  name: string
  content: string
}

export interface RegistryComponentResponse {
  name: string
  dependencies: string[]
  registryDependencies: string[]
  files: ComponentFile[]
  type: string
}

export type RegistryComponentsList = {
  name: string
  files: string[]
  dependencies: string[]
  type: string
}[]

export const configSchema = object({
  tsx: boolean(),
  componentDir: string(),
  tailwind: object({
    config: string(),
    css: string()
  }),
  aliases: object({
    components: string(),
    utils: string()
  })
})
export type Config = Output<typeof configSchema>
