import i18next from 'i18next'
import Backend from 'i18next-fs-backend'
import type { Options } from '~/types/index.js'

export function setupI18next({ loadPath, ...rest }: Options) {
  const backend = new Backend(null, {
    loadPath,
  })

  i18next.use(backend).init(rest)
}
