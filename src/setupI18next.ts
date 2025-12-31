import i18next from 'i18next'
import type { Options } from '~/types.js'
import { mapValues } from '~/utils/index.js'

export function setupI18next(options: Options) {
  const { defaultLocale, locales } = options

  const resources = mapValues(locales, (translation) => ({
    translation,
  }))

  i18next.init({
    lng: defaultLocale,
    resources,
  })
}
