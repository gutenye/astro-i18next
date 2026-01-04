import { describe, expect, test } from 'bun:test'
import i18next from 'i18next'
import { setupI18next } from '../setupI18next.js'

describe('setupI18next', () => {
  test('initializes i18next with default locale and resources', () => {
    setupI18next({ lng: 'en', preload: ['en'] })
    expect(i18next.options.lng).toBe('en')
  })
})
