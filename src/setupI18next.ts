import i18next from 'i18next'
import { mapValues } from '~/utils'
import type { Options } from './integration'

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
