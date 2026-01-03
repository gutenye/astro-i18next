import type { InitOptions } from 'i18next'
import type { FsBackendOptions } from 'i18next-fs-backend'

export interface Options extends InitOptions<FsBackendOptions> {
  preload: string[]
}
