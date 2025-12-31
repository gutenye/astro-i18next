import type { AstroIntegration, HookParameters } from 'astro'
import { setupI18next } from './setupI18next'

export default function createIntegration(options: Options): AstroIntegration {
  return {
    name: 'i18next',
    hooks: {
      'astro:config:setup': createConfigSetup(options),
    },
  }
}

function createConfigSetup(options: Options) {
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
      entrypoint: `${import.meta.dirname}/middleware`,
      order: 'post',
    })
  }
}

export interface Options {
  locales: Record<string, any>
  defaultLocale: string
}
