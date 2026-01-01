import { describe, expect, mock, test } from 'bun:test'
import i18next from 'i18next'
import { setupI18next } from '../setupI18next.js'

describe('setupI18next', () => {
  test('initializes i18next with default locale and resources', () => {
    const options = {
      defaultLocale: 'en',
      locales: {
        en: { hello: 'Hello', world: 'World' },
        ja: { hello: 'こんにちは', world: '世界' },
      },
    }

    setupI18next(options)

    expect(i18next.options.lng).toBe('en')
    expect(i18next.options.resources).toEqual({
      en: { translation: { hello: 'Hello', world: 'World' } },
      ja: { translation: { hello: 'こんにちは', world: '世界' } },
    })
  })
})
