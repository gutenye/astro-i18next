import * as config from 'astro:config/server'
import { defineMiddleware } from 'astro:middleware'
import i18next from 'i18next'

export const onRequest = defineMiddleware((context, next) => {
  i18next.changeLanguage(context.params.locale || config.i18n?.defaultLocale)
  return next()
})
