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

export interface Config {
  tsx: boolean
  componentDir: string
  tailwind: {
    config: string
    css: string
  }
  aliases: {
    components: string
    utils: string
  }
}
