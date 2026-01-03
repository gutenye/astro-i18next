import type { AstroIntegration } from 'astro'
import type { Options } from '~/types/index.js'
import { createConfigSetup } from './createConfigSetup.js'

export default function createIntegration(options: Options): AstroIntegration {
  return {
    name: 'i18next',
    hooks: {
      'astro:config:setup': createConfigSetup(options),
    },
  }
}
