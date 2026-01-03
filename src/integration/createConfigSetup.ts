import type { HookParameters } from 'astro'
import i18next from 'i18next'
import { merge } from 'lodash-es'
import type { Plugin } from 'vite'
import { setupI18next } from '~/setupI18next.js'
import type { Options } from '~/types/index.js'
import { invariant } from '~/utils/index.js'

const DEFAULT_OPTIONS = {
  backend: {
    loadPath: 'src/locales/{{lng}}.json',
  },
}

export function createConfigSetup(initOptions: Options) {
  return function configSetup({
    addMiddleware,
    updateConfig,
  }: HookParameters<'astro:config:setup'>) {
    const options = merge({}, DEFAULT_OPTIONS, initOptions)
    const { lng, preload } = options
    setupI18next(options)

    updateConfig({
      i18n: {
        defaultLocale: lng,
        locales: preload,
        routing: {
          prefixDefaultLocale: false,
          redirectToDefaultLocale: false,
          fallbackType: 'redirect',
        },
      },
      vite: {
        plugins: [handleHotUpdate(options)],
      },
    })
    addMiddleware({
      entrypoint: '@gutenye/astro-i18next/middleware',
      order: 'post',
    })
  }
}

function handleHotUpdate(options: Options): Plugin {
  invariant(
    typeof options.backend?.loadPath === 'string',
    'loadPath is not a string',
  )
  const pattern = options.backend.loadPath.replace(/\{\{[^}]+\}\}/g, '.*')
  const regex = new RegExp(`${pattern}$`)

  return {
    name: 'i18next-hmr',
    handleHotUpdate({ file }) {
      if (regex.test(file)) {
        i18next.reloadResources(i18next.options.preload || [])
      }
    },
  }
}
