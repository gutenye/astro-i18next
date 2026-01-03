import type { AstroIntegration } from 'astro'
import { createConfigSetup } from './createConfigSetup.js'

export default function createIntegration(options: Options): AstroIntegration {
  return {
    name: 'i18next',
    hooks: {
      'astro:config:setup': createConfigSetup(options),
    },
  }
}

export interface Options {
  locales: Record<string, any>
  defaultLocale: string
  loadPath: string
}
