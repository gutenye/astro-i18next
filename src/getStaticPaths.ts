import * as config from 'astro:config/server'
import { invariant } from '~/utils/index.js'

invariant(config.i18n, 'getStaticPaths: i18n is not configured')

const { defaultLocale, locales } = config.i18n

const staticPaths = locales.map((locale) => {
  return { params: { locale: locale === defaultLocale ? undefined : locale } }
})

export async function getStaticPaths() {
  return staticPaths
}
