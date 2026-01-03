import i18next from 'i18next'
import Backend from 'i18next-fs-backend'
import type { Options } from '~/types/index.js'

export function setupI18next(options: Options) {
  i18next.use(Backend).init(options)
}
