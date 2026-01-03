import type { HookParameters } from 'astro'
import { setupI18next } from '~/setupI18next.js'
import type { Options } from '~/types/index.js'

export function createConfigSetup(options: Options) {
  return function configSetup({
    addMiddleware,
    updateConfig,
  }: HookParameters<'astro:config:setup'>) {
    const { defaultLocale, locales } = options
    setupI18next(options)

    updateConfig({
      i18n: {
        defaultLocale,
        locales: Object.keys(locales),
        routing: {
          prefixDefaultLocale: false,
          redirectToDefaultLocale: false,
          fallbackType: 'redirect',
        },
      },
    })
    addMiddleware({
      entrypoint: '@gutenye/astro-i18next/middleware',
      order: 'post',
    })
  }
}
